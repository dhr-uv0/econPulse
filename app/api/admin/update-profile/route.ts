import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

const EDITABLE_FIELDS = ['full_name', 'school', 'grade', 'target_exam'] as const

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

  const updates: Record<string, unknown> = {}
  for (const field of EDITABLE_FIELDS) {
    if (field in (body?.updates ?? {})) updates[field] = body.updates[field]
  }
  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No editable fields provided' }, { status: 400 })
  }
  updates.updated_at = new Date().toISOString()

  const admin = createAdminClient()
  const { error } = await admin.from('profiles').update(updates).eq('id', targetUserId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
