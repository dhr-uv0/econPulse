-- ============================================================
-- Fix: leaderboard shows nothing for regular students
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on BOTH projects (Claude1 / dev and ClaudeProject / prod).
-- ============================================================
--
-- Root cause: app/(dashboard)/leaderboard/page.tsx queries
-- leaderboard_opt_ins with an embedded join into profiles(xp_points)
-- and streaks(current_streak). PostgREST embedded joins are still
-- subject to the JOINED table's own RLS policies, evaluated as the
-- calling user. profiles' only SELECT policies are "view own profile"
-- (auth.uid() = id) and "teachers/admins view all profiles" -- neither
-- grants a regular student visibility into a classmate's profiles row,
-- even if that classmate opted into the leaderboard. So the join
-- silently drops every row except the caller's own, and (for a student
-- who hasn't opted in themselves) the leaderboard renders as empty.
--
-- CLAUDE.md documents an econpulse.leaderboard view intended for this
-- exact purpose, described as using `security_invoker = true`. That
-- setting is actually wrong for what the view needs to do: with
-- security_invoker = true, the view runs as the calling user and hits
-- the exact same RLS wall described above. A leaderboard view only
-- works if it runs with the view OWNER's privileges (the default for a
-- plain `create view`, i.e. security_invoker left unset/false), so it
-- can read every opted-in user's xp_points regardless of the caller's
-- own row-level visibility into `profiles`. This migration recreates
-- the view that way, and exposes ONLY the four columns the leaderboard
-- actually needs (never full_name/bio/school/grade/etc.), which is what
-- keeps this safe despite bypassing per-row profiles RLS internally.

drop view if exists econpulse.leaderboard;

create view econpulse.leaderboard as
  select
    l.user_id,
    l.display_name,
    p.xp_points,
    coalesce(s.current_streak, 0) as current_streak
  from econpulse.leaderboard_opt_ins l
  join econpulse.profiles p on p.id = l.user_id
  left join econpulse.streaks s on s.user_id = l.user_id
  where l.opted_in = true
  order by p.xp_points desc
  limit 100;

grant select on econpulse.leaderboard to authenticated;
