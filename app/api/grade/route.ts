import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { assignmentType, prompt, submission } = await request.json()

  const systemPrompt = `You are an expert economics examiner with 20 years of experience grading IB Economics, DECA, and Economics Olympiad responses. You provide detailed, constructive, and honest feedback.

Grade the following student response on a scale of 0-10 and provide specific, actionable feedback. Your feedback must:
1. Start with what the student did well (1-2 sentences)
2. Identify the most important weakness or missing element
3. Give specific suggestions for improvement with examples
4. Reference the relevant IB assessment criteria or Olympiad standards where applicable
5. End with a one-sentence encouragement

Be direct and specific. Avoid vague praise. A good response scores 7-8; an outstanding one scores 9-10; a weak one scores 3-5.

Return your response in this exact JSON format:
{
  "score": 7.5,
  "feedback": "Your detailed feedback here..."
}`

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Assignment Type: ${assignmentType}\n\nPrompt: ${prompt}\n\nStudent Response:\n${submission}`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
    const parsed = JSON.parse(text)

    return NextResponse.json({
      score: parsed.score ?? 5,
      feedback: parsed.feedback ?? 'Unable to grade at this time.',
    })
  } catch (error) {
    console.error('Grade API error:', error)
    return NextResponse.json(
      { score: null, feedback: 'Grading service temporarily unavailable.' },
      { status: 500 }
    )
  }
}
