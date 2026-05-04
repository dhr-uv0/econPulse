import Anthropic from '@anthropic-ai/sdk'

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

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export class EcoClippyAgent {
  private client: Anthropic

  constructor() {
    this.client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }

  async streamResponse(messages: ChatMessage[], context?: string): Promise<ReadableStream<Uint8Array>> {
    // Filter to start from first user turn (Anthropic requires user-first)
    const firstUserIdx = messages.findIndex((m) => m.role === 'user')
    const filtered = firstUserIdx >= 0 ? messages.slice(firstUserIdx) : messages

    // Inject page context into the last user message
    const augmented: Anthropic.MessageParam[] = filtered.map((m, i) => {
      if (i === filtered.length - 1 && m.role === 'user' && context) {
        return { role: 'user', content: `[Student is currently on page: ${context}]\n\n${m.content}` }
      }
      return { role: m.role, content: m.content }
    })

    const stream = await this.client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: augmented,
      stream: true,
    })

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return readable
  }
}
