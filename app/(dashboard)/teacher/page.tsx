import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TeacherView } from '@/components/dashboard/TeacherView'

export const metadata: Metadata = { title: 'Teacher Dashboard' }

export default async function TeacherPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles').select('role').eq('id', user.id).single()

  if (!profile || (profile.role !== 'teacher' && profile.role !== 'admin')) {
    redirect('/dashboard')
  }

  const [{ data: students }, { data: assignments }] = await Promise.all([
    supabase
      .from('profiles')
      .select('id, full_name, school, grade, target_exam, xp_points, role')
      .neq('id', user.id)
      .eq('role', 'student')
      .order('xp_points', { ascending: false }),
    supabase
      .from('assignments')
      .select('*')
      .not('submitted_at', 'is', null)
      .order('submitted_at', { ascending: false })
      .limit(20),
  ])

  return <TeacherView students={students ?? []} assignments={assignments ?? []} />
}
