import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Bans the target user (reversible via /api/admin/unarchive-user) rather
// than deleting anything -- their data stays intact, they just can't log
// in until an admin unarchives them.
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
  if (targetUserId === user.id) {
    return NextResponse.json({ error: "You can't archive your own account from here" }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin.auth.admin.updateUserById(targetUserId, { ban_duration: '876000h' })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
