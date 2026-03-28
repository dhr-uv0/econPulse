import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { LeaderboardPage } from '@/components/leaderboard/LeaderboardPage'

export const metadata: Metadata = { title: 'Leaderboard · EconPulse' }

export default async function Leaderboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const [
    { data: leaders },
    { data: myOptIn },
    { data: myProfile },
    { data: myStreak },
  ] = await Promise.all([
    supabase
      .from('leaderboard_opt_ins')
      .select(`
        display_name,
        opted_in,
        profiles!inner(xp_points),
        streaks!inner(current_streak)
      `)
      .eq('opted_in', true)
      .order('profiles(xp_points)', { ascending: false })
      .limit(50),
    supabase.from('leaderboard_opt_ins').select('*').eq('user_id', user.id).single(),
    supabase.from('profiles').select('xp_points, full_name').eq('id', user.id).single(),
    supabase.from('streaks').select('current_streak').eq('user_id', user.id).single(),
  ])

  return (
    <LeaderboardPage
      leaders={leaders ?? []}
      myOptIn={myOptIn}
      myXP={myProfile?.xp_points ?? 0}
      myStreak={myStreak?.current_streak ?? 0}
      userId={user.id}
    />
  )
}
