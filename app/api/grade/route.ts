import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: 'Grading service is not configured. Contact support.' },
      { status: 503 }
    )
  }

  const { assignmentType, prompt, rubric, submission, lessonTitle, moduleId } = await request.json()

  const isLessonPractice = assignmentType === 'lesson_practice'

  const systemPrompt = isLessonPractice
    ? `You are an economics tutor grading a short lesson practice assignment. The student just completed a lesson and is demonstrating their understanding of the core concepts.

Grade the student's response out of 10 using this rubric:
${rubric ?? 'Assess conceptual accuracy, use of economic vocabulary, and quality of examples.'}

Scoring guide:
- 9-10: Accurate concepts, correct vocabulary, strong example, clear reasoning
- 7-8: Mostly accurate, uses some vocabulary, adequate example
- 5-6: Partial understanding, vague or missing example, minor errors
- 3-4: Significant misconceptions or very thin response
- 0-2: Off-topic or nearly blank

Your feedback must:
1. Affirm what they got right (1 sentence)
2. Point out the single most important gap or error
3. Give one concrete suggestion for improvement
4. Be encouraging — this is formative practice, not high-stakes

Return ONLY valid JSON (no markdown fences): {"score": 7.5, "feedback": "Your feedback here"}`
    : `You are an expert economics examiner with 20 years of experience grading IB Economics, DECA, and Economics Olympiad responses. You provide detailed, constructive, and honest feedback.

Grade the following student response on a scale of 0-10 and provide specific, actionable feedback. Your feedback must:
1. Start with what the student did well (1-2 sentences)
2. Identify the most important weakness or missing element
3. Give specific suggestions for improvement with examples
4. Reference the relevant IB assessment criteria or Olympiad standards where applicable
5. End with a one-sentence encouragement

Be direct and specific. Avoid vague praise. A good response scores 7-8; an outstanding one scores 9-10; a weak one scores 3-5.

Return ONLY valid JSON (no markdown fences): {"score": 7.5, "feedback": "Your detailed feedback here"}`

  try {
    const userContent = isLessonPractice
      ? `Lesson: ${lessonTitle ?? 'Unknown'} (Module: ${moduleId ?? ''})\n\nAssignment prompt: ${prompt}\n\nStudent's answer:\n${submission}`
      : `Assignment Type: ${assignmentType}\n\nPrompt: ${prompt}\n\nStudent Response:\n${submission}`

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
    const result = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent },
      ],
      max_tokens: 600,
      response_format: { type: 'json_object' },
    })

    const text = result.choices[0]?.message?.content ?? ''
    const parsed = JSON.parse(text)

    return NextResponse.json({
      score: typeof parsed.score === 'number' ? parsed.score : 5,
      feedback: parsed.feedback ?? 'Unable to grade at this time.',
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Grade API error:', message)
    return NextResponse.json(
      { error: 'Grading is temporarily unavailable. Please try again.' },
      { status: 500 }
    )
  }
}
