import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'
  const providerError = searchParams.get('error')
  const providerErrorDescription = searchParams.get('error_description')

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

        // Redirect new users to learning style quiz
        return NextResponse.redirect(`${origin}/onboarding`)
      }

      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Error: redirect to login, preserving the upstream error reason when the
  // provider (e.g. Google via Supabase) sent one, so messages like
  // "access_denied" surface correctly instead of always showing the generic
  // fallback.
  if (providerError) {
    const params = new URLSearchParams({ error: providerError })
    if (providerErrorDescription) params.set('error_description', providerErrorDescription)
    return NextResponse.redirect(`${origin}/login?${params.toString()}`)
  }
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
