import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Service-role client -- bypasses RLS entirely. Server-only: never import
// this from a 'use client' file or send SUPABASE_SERVICE_ROLE_KEY to the
// browser. Every caller of this must independently verify the requesting
// user's own profile.role === 'admin' first (via the normal session-bound
// client, which IS subject to RLS) before using it for anything.
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      db: { schema: process.env.NEXT_PUBLIC_SUPABASE_SCHEMA ?? 'econpulse' },
      auth: { autoRefreshToken: false, persistSession: false },
    }
  )
}
