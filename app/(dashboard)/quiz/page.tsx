import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { QuizHub } from '@/components/quiz/QuizHub'
import { CURRICULUM } from '@/lib/curriculum/data'

export const metadata: Metadata = { title: 'Practice & Quiz' }

export default async function QuizPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: recentResults } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', user.id)
    .order('completed_at', { ascending: false })
    .limit(10)

  return <QuizHub modules={CURRICULUM} recentResults={recentResults ?? []} userId={user.id} />
}
