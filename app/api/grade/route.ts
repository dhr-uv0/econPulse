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
    ? `You are an encouraging economics tutor grading a short lesson practice assignment. Your job is to reward understanding, not penalise imperfect wording.

Grading philosophy:
- If the student clearly understands the core concept being tested, award 10/10. Understanding is the only requirement.
- Minor wording issues, missing a secondary example, or imperfect phrasing do NOT reduce the score if the concept is correct.
- Only reduce the score when there is a genuine conceptual error or the response shows the student does not understand the topic.

Scoring guide:
- 10: Demonstrates understanding of the concept — this is the target for any correct response
- 7-9: Mostly correct but has a meaningful conceptual gap worth noting
- 4-6: Partial understanding — the student has the right idea but is missing something important
- 1-3: Significant misconception or very thin response
- 0: Blank or completely off-topic

Feedback must:
1. Affirm what they got right (1 sentence, specific)
2. If score < 10, name the one thing that would push it to a 10
3. Be warm and encouraging — this is formative practice

Return ONLY valid JSON (no markdown fences): {"score": 10, "feedback": "Your feedback here"}`
    : `You are an encouraging economics examiner grading student responses. Your job is to reward demonstrated understanding and give constructive, motivating feedback.

Grading philosophy:
- If the student clearly understands the concept and addresses the prompt, award 9-10. Do not withhold high scores for stylistic reasons.
- Only reduce the score when there is a genuine conceptual gap or missing argument — not for imperfect phrasing.
- Students are learning; treat errors as teaching moments, not failures.

Scoring guide:
- 9-10: Demonstrates clear understanding and addresses the prompt — default for any solid response
- 7-8: Good understanding but missing one important point or argument
- 5-6: Partial understanding — right direction but significant gaps
- 3-4: Weak grasp of the concept with notable errors
- 0-2: Off-topic or nearly blank

Feedback must:
1. Affirm what they got right (1-2 sentences, specific)
2. If score < 9, name the single most important thing they could add or fix
3. End with a one-sentence encouragement

Return ONLY valid JSON (no markdown fences): {"score": 9, "feedback": "Your detailed feedback here"}`

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
