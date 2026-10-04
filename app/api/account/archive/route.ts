import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Self-service account archiving. Bans the auth user (effectively
// forever -- 100 years) rather than deleting anything: Supabase Auth
// rejects sign-in for a banned user, but every row the user owns stays
// exactly as it is. This is reversible (an admin can unban), unlike a
// real delete which permanently destroys the account and cascades
// through every table referencing it.
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  if (body?.confirmEmail !== user.email) {
    return NextResponse.json({ error: 'Email confirmation did not match' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin.auth.admin.updateUserById(user.id, { ban_duration: '876000h' })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
