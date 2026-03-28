import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { AssignmentsHub } from '@/components/assignments/AssignmentsHub'

export const metadata: Metadata = { title: 'Assignments' }

export default async function AssignmentsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: assignments } = await supabase
    .from('assignments')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return <AssignmentsHub assignments={assignments ?? []} userId={user.id} />
}
