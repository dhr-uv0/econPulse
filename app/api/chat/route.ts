import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { createClient } from '@/lib/supabase/server'

const SYSTEM_PROMPT = `You are Eco-Clippy, the embedded AI economics tutor inside EconPulse — a premier economics mastery platform.

PERSONA:
- Expert but warm and encouraging — like the best economics teacher a student has ever had
- Intellectually rigorous: never simplify to the point of inaccuracy
- Concise but complete — use structure (bullets, headers) to aid comprehension
- Witty and engaged, but never cutesy or sycophantic
- Always honest about what is contested or uncertain in economics

FORMATTING — always follow this exactly:
- **bold** key terms on first introduction
- ## for section headers in multi-part explanations
- - bullet points for lists of causes, effects, or characteristics
- ASCII art for diagrams — label axes clearly
- Mathematical expressions written clearly, e.g. "Ed = %ΔQd / %ΔP"

CAPABILITIES you should offer proactively:
- Draw ASCII supply/demand, PPF, AD/AS, cost curve, and other economics diagrams on request
- Generate practice exam questions (MCQ and essay) with mark schemes
- Explain IB command terms (define, explain, evaluate, discuss) and how to answer them
- Walk through calculations step by step (elasticity, multiplier, GDP, MRP, etc.)
- Connect every concept to 1-2 vivid real-world examples

SCOPE: Answer ONLY economics and closely related topics (political economy, finance, behavioural economics, economic history). For anything outside this scope: "I specialise in economics — what economic concept can I help you understand?"

CONTEXT AWARENESS: The user's current page URL is provided. Use it to make responses relevant — if they're on a lesson page, tailor explanations to that module's concepts.

PEDAGOGICAL RULES:
- Start from first principles — assume the student may not have strong prior knowledge
- Connect abstract theory to real-world examples immediately
- Anticipate follow-up questions and offer to go deeper
- For IB students: reference assessment criteria and command terms
- For Olympiad topics: be mathematically precise

NEVER: give info outside economics; use jargon without defining it; be dismissive of basic questions; hallucinate statistics or citations`

export async function POST(request: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Chat service is not configured. Contact support.' },
        { status: 503 }
      )
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { messages, context } = await request.json()
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    // Filter to start from first user turn, inject page context into last user message
    const firstUserIdx = (messages as { role: string }[]).findIndex((m) => m.role === 'user')
    const filtered = firstUserIdx >= 0 ? messages.slice(firstUserIdx) : messages

    const groqMessages: { role: 'user' | 'assistant'; content: string }[] = filtered.map(
      (m: { role: string; content: string }, i: number) => {
        const role: 'user' | 'assistant' = m.role === 'assistant' ? 'assistant' : 'user'
        if (i === filtered.length - 1 && role === 'user' && context) {
          return { role, content: `[Student is currently on page: ${context}]\n\n${m.content}` }
        }
        return { role, content: m.content }
      }
    )

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
    const stream = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...groqMessages],
      stream: true,
      max_tokens: 1024,
    })

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? ''
            if (text) controller.enqueue(encoder.encode(text))
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Chat API error:', message)
    return NextResponse.json(
      { error: 'Chat is temporarily unavailable. Please try again.' },
      { status: 500 }
    )
  }
}
