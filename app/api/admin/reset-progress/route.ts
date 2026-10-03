import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Moderation action short of deleting the account: clears a user's
// learning data (progress, quiz history, flashcard scheduling, XP,
// streak) back to a fresh-signup state, but keeps the account itself
// (profile row, role, email) intact.
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: me } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (me?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await request.json().catch(() => null)
  const targetUserId = body?.targetUserId
  if (typeof targetUserId !== 'string') {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const admin = createAdminClient()

  const results = await Promise.all([
    admin.from('curriculum_progress').delete().eq('user_id', targetUserId),
    admin.from('quiz_results').delete().eq('user_id', targetUserId),
    admin.from('flashcard_reviews').delete().eq('user_id', targetUserId),
    admin.from('assignments').delete().eq('user_id', targetUserId),
    admin.from('streaks').update({ current_streak: 0, longest_streak: 0, last_study_date: null }).eq('user_id', targetUserId),
    admin.from('profiles').update({ xp_points: 0, badges: [] }).eq('id', targetUserId),
  ])

  const firstError = results.map((r) => r.error).find(Boolean)
  if (firstError) return NextResponse.json({ error: firstError.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
