-- ============================================================
-- Fix profiles.role check constraint on production
-- IDEMPOTENT: safe to run multiple times.
-- ============================================================
--
-- Discovered while running 20260909_promote_admin.sql against
-- production: that migration failed with a check-constraint violation.
-- The live constraint was:
--
--   CHECK (role = ANY (ARRAY['parent', 'student']))
--
-- -- i.e. production has never allowed 'teacher' or 'admin' at all,
-- even though the entire app (lib/types.ts UserRole, the /teacher
-- route, the admin panel) has always assumed
-- 'student' | 'teacher' | 'admin'. This means the Teacher view has
-- likely never worked on production, independent of anything else
-- this session. There are also 5 existing profiles.role = 'parent'
-- rows on production -- a role value that appears nowhere in
-- EconPulse's code. This migration does NOT touch those rows or
-- remove 'parent' from the allowed set (purely additive), since
-- what they are needs the project owner's own investigation, not an
-- assumption made here.

alter table econpulse.profiles drop constraint if exists profiles_role_check;
alter table econpulse.profiles add constraint profiles_role_check
  check (role = any (array['parent', 'student', 'teacher', 'admin']));
