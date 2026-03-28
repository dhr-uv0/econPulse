import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.user) {
      // Auto-create profile on first login
      const user = data.user
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single()

      if (!existingProfile) {
        const fullName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          null

        const avatarUrl =
          user.user_metadata?.avatar_url ||
          user.user_metadata?.picture ||
          null

        await supabase.from('profiles').insert({
          id: user.id,
          full_name: fullName,
          avatar_url: avatarUrl,
          role: 'student',
          xp_points: 0,
          badges: [],
          weekly_study_goal_hours: 5,
          dark_mode: null,
        })

        // Initialize streak record
        await supabase.from('streaks').insert({
          user_id: user.id,
          current_streak: 0,
          longest_streak: 0,
          last_study_date: null,
        })

        // Redirect new users to onboarding
        return NextResponse.redirect(`${origin}/dashboard?onboarding=true`)
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Error: redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
