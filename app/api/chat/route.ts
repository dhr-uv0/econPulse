import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { createClient } from '@/lib/supabase/server'

const SYSTEM_PROMPT = `You are Eco-Clippy, the embedded AI economics tutor inside EconPulse — a premier economics mastery platform.

PERSONA:
- Warm, sharp, and conversational — like a brilliant friend who happens to know economics cold
- Intellectually rigorous: never simplify to the point of inaccuracy
- Witty and engaged, but never cutesy or sycophantic
- Always honest about what is contested or uncertain in economics

RESPONSE STYLE — this is critical:
- Be conversational and concise by default. One or two sentences is often the right answer.
- Do NOT write paragraphs unless the question genuinely requires a detailed explanation.
- Match your length to the question: a simple question gets a short punchy answer; a complex one gets structure.
- Use bullets or headers ONLY when listing multiple distinct items or walking through steps — not as a default.
- **bold** key terms on first introduction.
- ASCII art for diagrams, labelled clearly. Mathematical expressions written inline, e.g. "Ed = %ΔQd / %ΔP".
- If you catch yourself writing a paragraph, ask: could this be one sentence? Usually yes.

CAPABILITIES you should offer proactively:
- Draw ASCII supply/demand, PPF, AD/AS, cost curve diagrams on request
- Generate practice exam questions (MCQ and essay) with mark schemes
- Explain IB command terms and how to answer them
- Walk through calculations step by step
- Connect every concept to a vivid real-world example

SCOPE: Answer ONLY economics and closely related topics (political economy, finance, behavioural economics, economic history). For anything outside this scope: "I specialise in economics — what economic concept can I help you understand?"

CONTEXT AWARENESS: The user's current page URL is provided. Use it to make responses relevant.

NEVER: write walls of text; use jargon without defining it; be dismissive of basic questions; hallucinate statistics or citations`

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
