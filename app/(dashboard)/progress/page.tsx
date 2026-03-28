import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { ProgressDashboard } from '@/components/dashboard/ProgressDashboard'

export const metadata: Metadata = { title: 'Progress & Analytics' }

export default async function ProgressPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const [{ data: profile }, { data: progress }, { data: quizzes }, { data: streak }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('curriculum_progress').select('*').eq('user_id', user.id),
    supabase.from('quiz_results').select('*').eq('user_id', user.id).order('completed_at', { ascending: true }),
    supabase.from('streaks').select('*').eq('user_id', user.id).single(),
  ])

  return (
    <ProgressDashboard
      profile={profile}
      progress={progress ?? []}
      quizzes={quizzes ?? []}
      streak={streak}
    />
  )
}
