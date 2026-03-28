import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { DashboardHome } from '@/components/dashboard/DashboardHome'

export const metadata: Metadata = { title: 'Dashboard' }

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const [
    { data: profile },
    { data: streak },
    { data: progress },
    { data: recentQuizzes },
    { data: dueCards },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('streaks').select('*').eq('user_id', user.id).single(),
    supabase.from('curriculum_progress').select('*').eq('user_id', user.id),
    supabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
      .limit(5),
    supabase
      .from('flashcard_reviews')
      .select('card_id')
      .eq('user_id', user.id)
      .lte('next_review_at', new Date().toISOString()),
  ])

  return (
    <DashboardHome
      profile={profile}
      streak={streak}
      progress={progress ?? []}
      recentQuizzes={recentQuizzes ?? []}
      dueCardCount={dueCards?.length ?? 0}
    />
  )
}
