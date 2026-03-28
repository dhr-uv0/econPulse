import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getLessonById, getModuleById } from '@/lib/curriculum/data'
import { LessonViewer } from '@/components/curriculum/LessonViewer'

interface Props {
  params: Promise<{ moduleId: string; lessonId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonId } = await params
  const lesson = getLessonById(lessonId)
  return { title: lesson?.title ?? 'Lesson' }
}

export default async function LessonPage({ params }: Props) {
  const { moduleId, lessonId } = await params
  const lesson = getLessonById(lessonId)
  const module_ = getModuleById(moduleId)
  if (!lesson || !module_) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  // Upsert progress record
  await supabase.from('curriculum_progress').upsert(
    {
      user_id: user.id,
      module_name: moduleId,
      lesson_id: lessonId,
      status: 'in_progress',
      last_accessed: new Date().toISOString(),
    },
    { onConflict: 'user_id,lesson_id' }
  )

  // Get existing progress
  const { data: progress } = await supabase
    .from('curriculum_progress')
    .select('status')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .single()

  return (
    <LessonViewer
      lesson={lesson}
      module={module_}
      userId={user.id}
      initialStatus={progress?.status ?? 'in_progress'}
    />
  )
}
