import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT_LESSON = `You are an economics tutor grading a short lesson practice assignment. The student just completed a lesson and is demonstrating their understanding of the core concepts.

Grade the student's response out of 10 using this rubric:
Assess conceptual accuracy, use of economic vocabulary, and quality of examples.

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

const SYSTEM_PROMPT_GENERAL = `You are an expert economics examiner with 20 years of experience grading IB Economics, DECA, and Economics Olympiad responses. You provide detailed, constructive, and honest feedback.

Grade the following student response on a scale of 0-10 and provide specific, actionable feedback. Your feedback must:
1. Start with what the student did well (1-2 sentences)
2. Identify the most important weakness or missing element
3. Give specific suggestions for improvement with examples
4. Reference the relevant IB assessment criteria or Olympiad standards where applicable
5. End with a one-sentence encouragement

Be direct and specific. Avoid vague praise. A good response scores 7-8; an outstanding one scores 9-10; a weak one scores 3-5.

Return ONLY valid JSON (no markdown fences): {"score": 7.5, "feedback": "Your detailed feedback here"}`

export interface GradeResult {
  score: number
  feedback: string
}

export interface GradeRequest {
  assignmentType: string
  prompt: string
  rubric?: string
  submission: string
  lessonTitle?: string
  moduleId?: string
}

export class GraderAgent {
  private client: Anthropic

  constructor() {
    this.client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }

  async grade(req: GradeRequest): Promise<GradeResult> {
    const isLessonPractice = req.assignmentType === 'lesson_practice'

    const systemText = isLessonPractice
      ? SYSTEM_PROMPT_LESSON.replace(
          'Assess conceptual accuracy, use of economic vocabulary, and quality of examples.',
          req.rubric ?? 'Assess conceptual accuracy, use of economic vocabulary, and quality of examples.'
        )
      : SYSTEM_PROMPT_GENERAL

    const userContent = isLessonPractice
      ? `Lesson: ${req.lessonTitle ?? 'Unknown'} (Module: ${req.moduleId ?? ''})\n\nAssignment prompt: ${req.prompt}\n\nStudent's answer:\n${req.submission}`
      : `Assignment Type: ${req.assignmentType}\n\nPrompt: ${req.prompt}\n\nStudent Response:\n${req.submission}`

    const response = await this.client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: [
        {
          type: 'text',
          text: systemText,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [{ role: 'user', content: userContent }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    const parsed = JSON.parse(clean)

    return {
      score: typeof parsed.score === 'number' ? parsed.score : 5,
      feedback: parsed.feedback ?? 'Unable to grade at this time.',
    }
  }
}
