import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Self-service account deletion. Every table referencing profiles.id (and
// profiles itself) is declared `on delete cascade` from auth.users(id) in
// the schema, so deleting the auth user via the admin API cascades through
// curriculum_progress/quiz_results/flashcard_reviews/assignments/bookmarks/
// streaks/leaderboard_opt_ins/user_preferences automatically -- no manual
// per-table cleanup needed here.
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  if (body?.confirmEmail !== user.email) {
    return NextResponse.json({ error: 'Email confirmation did not match' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin.auth.admin.deleteUser(user.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
