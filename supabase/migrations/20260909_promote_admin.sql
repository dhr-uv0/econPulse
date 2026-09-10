-- ============================================================
-- Promote dhruv.mantha@gmail.com to admin
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on PRODUCTION (ClaudeProject / fajohcbrvzamorlnsnwl) --
-- the dev project (Claude1) was already handled directly from the
-- app's service-role key, no SQL needed there.
-- ============================================================
--
-- Looks the user up by email in auth.users so you don't need to hunt
-- down a UUID. If a profiles row already exists (expected on prod,
-- since this is the account actually used there) it's just promoted
-- to admin; if somehow missing, one is created directly as admin.

do $$
declare target_id uuid;
begin
  select id into target_id from auth.users where email = 'dhruv.mantha@gmail.com';

  if target_id is null then
    raise notice 'No auth user found with that email on this project -- nothing to do.';
    return;
  end if;

  if exists (select 1 from econpulse.profiles where id = target_id) then
    update econpulse.profiles set role = 'admin' where id = target_id;
    raise notice 'Existing profile promoted to admin.';
  else
    insert into econpulse.profiles (id, full_name, display_name, role, xp_points, badges, weekly_study_goal_hours)
    values (target_id, 'Dhruv', 'Dhruv', 'admin', 0, '[]'::jsonb, 5);
    raise notice 'No profile existed -- created one directly as admin.';
  end if;
end $$;
