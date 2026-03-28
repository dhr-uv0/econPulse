import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { ProfileSettings } from '@/components/dashboard/ProfileSettings'

export const metadata: Metadata = { title: 'Profile & Settings' }

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles').select('*').eq('id', user.id).single()

  const { data: optIn } = await supabase
    .from('leaderboard_opt_ins').select('*').eq('user_id', user.id).single()

  return <ProfileSettings profile={profile} optIn={optIn} user={user} />
}
