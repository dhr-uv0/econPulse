import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

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

  const { data: profile } = await admin.from('profiles').select('full_name').eq('id', targetUserId).maybeSingle()
  const displayName = (profile?.full_name || 'Student').trim()

  const { error } = await admin.from('leaderboard_opt_ins').upsert(
    { user_id: targetUserId, display_name: displayName, opted_in: true },
    { onConflict: 'user_id' }
  )
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true, displayName })
}
