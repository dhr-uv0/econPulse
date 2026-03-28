import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { CURRICULUM } from '@/lib/curriculum/data'
import { CurriculumBrowser } from '@/components/curriculum/CurriculumBrowser'

export const metadata: Metadata = { title: 'Curriculum' }

export default async function CurriculumPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: progress } = await supabase
    .from('curriculum_progress')
    .select('lesson_id, status')
    .eq('user_id', user.id)

  const progressMap = new Map(progress?.map((p) => [p.lesson_id, p.status]) ?? [])

  return <CurriculumBrowser modules={CURRICULUM} progressMap={progressMap} />
}
