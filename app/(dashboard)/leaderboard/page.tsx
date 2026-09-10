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
    // Queries the econpulse.leaderboard view rather than joining
    // leaderboard_opt_ins -> profiles/streaks directly: profiles' RLS only
    // lets a user see their own row, so a direct join would silently drop
    // every other opted-in student. The view runs with its owner's
    // privileges and exposes only display_name/xp_points/current_streak,
    // sidestepping that without widening profiles' own RLS.
    supabase.from('leaderboard').select('*'),
    supabase.from('leaderboard_opt_ins').select('*').eq('user_id', user.id).maybeSingle(),
    supabase.from('profiles').select('xp_points, full_name').eq('id', user.id).maybeSingle(),
    supabase.from('streaks').select('current_streak').eq('user_id', user.id).maybeSingle(),
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
