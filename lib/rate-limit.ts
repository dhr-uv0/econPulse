import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Fixed-window rate limit backed by econpulse.check_rate_limit (see
 * supabase/migrations/20261003_rate_limiting.sql). Returns true if the
 * request is allowed. Fails open (allows the request) if the RPC itself
 * errors -- e.g. the migration hasn't been run yet on this project --
 * since a missing rate limit is better than every AI route 500ing.
 */
export async function checkRateLimit(
  supabase: SupabaseClient,
  userId: string,
  route: string,
  maxRequests: number,
  windowMinutes: number
): Promise<boolean> {
  const { data, error } = await supabase.rpc('check_rate_limit', {
    p_user_id: userId,
    p_route: route,
    p_max_requests: maxRequests,
    p_window_minutes: windowMinutes,
  })
  if (error) {
    console.error(`Rate limit check failed for ${route}:`, error.message)
    return true
  }
  return data === true
}
