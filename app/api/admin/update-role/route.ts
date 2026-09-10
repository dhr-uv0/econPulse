import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { UserRole } from '@/lib/types'

const VALID_ROLES: UserRole[] = ['student', 'teacher', 'admin']

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: me } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (me?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const body = await request.json().catch(() => null)
  const targetUserId = body?.targetUserId
  const newRole = body?.newRole
  if (typeof targetUserId !== 'string' || !VALID_ROLES.includes(newRole)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
  if (targetUserId === user.id) {
    return NextResponse.json({ error: "You can't change your own role" }, { status: 400 })
  }

  const admin = createAdminClient()
  const { error } = await admin.from('profiles').update({ role: newRole }).eq('id', targetUserId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
