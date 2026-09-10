-- ============================================================
-- Repair + efficiency pass, for more users at scale
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on BOTH projects (Claude1 / dev and ClaudeProject / prod),
-- as the last of the four migration files from this session:
--   1. 20260907_fix_profiles_rls_recursion.sql
--   2. 20260909_fix_leaderboard_visibility.sql
--   3. 20260909_promote_admin.sql
--   4. this file
-- ============================================================

-- ── Repair: add_xp() silently drops streak updates for some accounts ──
--
-- The original add_xp() plain UPDATEs econpulse.streaks WHERE user_id =
-- p_user_id. If that row doesn't exist, the UPDATE matches zero rows and
-- does nothing -- no error, no streak, forever. This wasn't hypothetical:
-- a real account was found (during this session) with a profiles row but
-- no streaks row, traced back to the OAuth callback's profile-creation
-- insert failing on a NOT NULL display_name column and silently skipping
-- the streaks insert that was supposed to follow it (now fixed in
-- app/(auth)/callback/route.ts, but that only prevents new occurrences --
-- it doesn't repair accounts already in this state). Changed to an
-- UPSERT so any account missing a streaks row self-heals the next time
-- they earn XP, instead of being silently stuck with no streak tracking
-- indefinitely.
create or replace function econpulse.add_xp(p_user_id uuid, p_amount integer)
returns void
language plpgsql
security definer
as $$
begin
  update econpulse.profiles
  set xp_points = xp_points + p_amount,
      updated_at = now()
  where id = p_user_id;

  insert into econpulse.streaks (user_id, current_streak, longest_streak, last_study_date)
  values (p_user_id, 1, 1, current_date)
  on conflict (user_id) do update set
    current_streak = case
      when econpulse.streaks.last_study_date = current_date then econpulse.streaks.current_streak
      when econpulse.streaks.last_study_date = current_date - interval '1 day' then econpulse.streaks.current_streak + 1
      else 1
    end,
    longest_streak = greatest(
      econpulse.streaks.longest_streak,
      case
        when econpulse.streaks.last_study_date = current_date then econpulse.streaks.current_streak
        when econpulse.streaks.last_study_date = current_date - interval '1 day' then econpulse.streaks.current_streak + 1
        else 1
      end
    ),
    last_study_date = current_date;
end;
$$;

-- ── Efficiency: indexes for queries that scan by role, opt-in status, ──
-- ── or completion, which get more expensive as the user base grows.  ──

-- econpulse.is_teacher_or_admin() (used by every "teachers/admins see all
-- X" RLS policy) filters profiles by role on every check. Partial index
-- since the overwhelming majority of rows are 'student' and irrelevant to
-- this lookup -- keeps the index small regardless of total user count.
create index if not exists idx_profiles_role_staff
  on econpulse.profiles (role)
  where role in ('teacher', 'admin');

-- The leaderboard view filters leaderboard_opt_ins by opted_in = true on
-- every read. Same partial-index reasoning.
create index if not exists idx_leaderboard_opt_ins_opted_in
  on econpulse.leaderboard_opt_ins (opted_in)
  where opted_in = true;

-- Teacher/admin views and the admin panel filter assignments by
-- "has been submitted" and sort by submitted_at.
create index if not exists idx_assignments_submitted_at
  on econpulse.assignments (submitted_at)
  where submitted_at is not null;

-- Quiz history reads are always "this user's results, most recent first" --
-- the existing idx_quiz_results_user only covers the filter, not the sort.
create index if not exists idx_quiz_results_user_completed
  on econpulse.quiz_results (user_id, completed_at desc);

-- Progress/mastery views filter by user and status (e.g. count of
-- completed lessons) -- the existing index only covers user_id.
create index if not exists idx_curriculum_progress_user_status
  on econpulse.curriculum_progress (user_id, status);
