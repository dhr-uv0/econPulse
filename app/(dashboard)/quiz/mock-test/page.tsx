import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { MockTestBuilder } from '@/components/quiz/MockTestBuilder'
import { CURRICULUM } from '@/lib/curriculum/data'

export const metadata: Metadata = { title: 'Mock Test' }

export default async function MockTestPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  return <MockTestBuilder modules={CURRICULUM} userId={user.id} />
}
