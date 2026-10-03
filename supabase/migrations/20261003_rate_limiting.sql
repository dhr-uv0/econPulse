-- ============================================================
-- Rate limiting for the AI routes (chat, grade, weekly-digest)
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on BOTH projects (Claude1 / dev and ClaudeProject / prod).
-- ============================================================
--
-- None of the AI-backed routes had any rate limiting -- a single
-- authenticated user (or a compromised session) could call them as fast
-- as the client allows, which is a real cost-control and abuse gap once
-- more than a handful of people are using the app (every call bills the
-- Groq API). Fixed-window counter, bucketed per user+route+window, via a
-- SECURITY DEFINER function so route handlers can call it through the
-- normal session-bound client (no service-role key needed) despite the
-- table having no RLS policies of its own (nothing should read/write it
-- directly except this function).

create table if not exists econpulse.api_rate_limits (
  user_id        uuid not null,
  route          text not null,
  window_start   timestamptz not null,
  request_count  integer not null default 0,
  primary key (user_id, route, window_start)
);

create index if not exists idx_api_rate_limits_window on econpulse.api_rate_limits(window_start);

alter table econpulse.api_rate_limits enable row level security;
-- Deliberately no policies: this table is only ever touched through the
-- SECURITY DEFINER function below, never directly by client queries.

create or replace function econpulse.check_rate_limit(
  p_user_id uuid,
  p_route text,
  p_max_requests integer,
  p_window_minutes integer
)
returns boolean
language plpgsql
security definer
set search_path = econpulse, pg_temp
as $$
declare
  v_window_start timestamptz;
  v_count integer;
begin
  v_window_start := date_trunc('minute', now())
    - (extract(minute from now())::int % p_window_minutes) * interval '1 minute';

  insert into econpulse.api_rate_limits (user_id, route, window_start, request_count)
  values (p_user_id, p_route, v_window_start, 1)
  on conflict (user_id, route, window_start) do update
    set request_count = econpulse.api_rate_limits.request_count + 1
  returning request_count into v_count;

  -- Opportunistic cleanup of this user+route's old windows (cheap, no
  -- separate cron needed -- piggybacks on normal traffic).
  delete from econpulse.api_rate_limits
  where user_id = p_user_id and route = p_route and window_start < v_window_start;

  return v_count <= p_max_requests;
end;
$$;

grant execute on function econpulse.check_rate_limit(uuid, text, integer, integer) to authenticated;
