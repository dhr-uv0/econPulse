import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardShell } from '@/components/layout/DashboardShell'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const [
    { data: profile },
    { data: streak },
    { data: prefs },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('streaks').select('*').eq('user_id', user.id).single(),
    supabase.from('user_preferences').select('onboarding_completed').eq('user_id', user.id).maybeSingle(),
  ])

  return (
    <DashboardShell
      profile={profile}
      streak={streak}
      user={user}
      onboardingCompleted={prefs?.onboarding_completed ?? false}
    >
      {children}
    </DashboardShell>
  )
}
