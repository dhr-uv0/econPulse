import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

/**
 * GET /api/weekly-digest
 * Returns a personalised AI-generated weekly study digest for the authenticated user.
 * Summarises their week: lessons completed, XP earned, quiz scores, flashcards reviewed,
 * and gives a motivational recommendation for the coming week.
 */
export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

    const [
      { data: profile },
      { data: streak },
      { data: recentProgress },
      { data: recentQuizzes },
      { data: recentFlashcards },
    ] = await Promise.all([
      supabase.from('profiles').select('full_name, xp_points, target_exam, weekly_study_goal_hours').eq('id', user.id).single(),
      supabase.from('streaks').select('current_streak, longest_streak').eq('user_id', user.id).single(),
      supabase.from('curriculum_progress')
        .select('lesson_id, status, time_spent_seconds, last_accessed')
        .eq('user_id', user.id)
        .gte('last_accessed', oneWeekAgo),
      supabase.from('quiz_results')
        .select('unit_id, score, total_questions, passed, completed_at')
        .eq('user_id', user.id)
        .gte('completed_at', oneWeekAgo)
        .order('completed_at', { ascending: false }),
      supabase.from('flashcard_reviews')
        .select('card_id, ease_factor, interval_days')
        .eq('user_id', user.id)
        .limit(100),
    ])

    const lessonsCompleted = recentProgress?.filter((p) => p.status === 'completed').length ?? 0
    const totalMinutesStudied = Math.round((recentProgress?.reduce((sum, p) => sum + (p.time_spent_seconds ?? 0), 0) ?? 0) / 60)
    const quizzesTaken = recentQuizzes?.length ?? 0
    const avgQuizScore = quizzesTaken > 0
      ? Math.round(recentQuizzes!.reduce((sum, q) => sum + (q.score / q.total_questions) * 100, 0) / quizzesTaken)
      : null
    const flashcardsReviewed = recentFlashcards?.length ?? 0
    const masteredCards = recentFlashcards?.filter((f) => (f.interval_days ?? 0) >= 21).length ?? 0

    const userContext = `
Student: ${profile?.full_name ?? 'Student'}
Target exam: ${profile?.target_exam ?? 'IB'}
Current streak: ${streak?.current_streak ?? 0} days
Longest streak: ${streak?.longest_streak ?? 0} days
Total XP: ${profile?.xp_points ?? 0}

This week's activity:
- Lessons completed: ${lessonsCompleted}
- Total study time: ${totalMinutesStudied} minutes
- Quizzes taken: ${quizzesTaken}${avgQuizScore !== null ? `, average score: ${avgQuizScore}%` : ''}
- Flashcards in deck: ${flashcardsReviewed}, mastered (21+ day interval): ${masteredCards}
- Weekly study goal: ${profile?.weekly_study_goal_hours ?? 5} hours / week (achieved: ~${(totalMinutesStudied / 60).toFixed(1)} hours)
`

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      system: `You are EconPulse's weekly digest generator. Create a brief, warm, motivating weekly study summary for an economics student. Structure it as:
1. A one-sentence personalised greeting acknowledging their week
2. **This Week's Highlights** — 3 bullet points about what they accomplished (be specific with numbers)
3. **Where You Stand** — honest assessment of their pace toward their exam goal (1-2 sentences)
4. **Your Mission Next Week** — 2-3 concrete, actionable recommendations (specific topics or activities in EconPulse)
5. A short motivational sign-off (1 sentence)

Be concise (under 250 words), data-driven, and genuinely encouraging — not generic. Use markdown formatting.`,
      messages: [{ role: 'user', content: userContext }],
    })

    const digest = response.content[0].type === 'text' ? response.content[0].text : ''

    return NextResponse.json({
      digest,
      stats: {
        lessonsCompleted,
        totalMinutesStudied,
        quizzesTaken,
        avgQuizScore,
        flashcardsReviewed,
        masteredCards,
        currentStreak: streak?.current_streak ?? 0,
        xpTotal: profile?.xp_points ?? 0,
        weeklyGoalHours: profile?.weekly_study_goal_hours ?? 5,
        achievedHours: parseFloat((totalMinutesStudied / 60).toFixed(1)),
      },
    })
  } catch (error) {
    console.error('Weekly digest error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
