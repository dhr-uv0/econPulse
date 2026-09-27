-- ============================================================
-- Remove the DECA pathway from the target_exam constraint
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on BOTH projects (Claude1 / dev and ClaudeProject / prod).
-- ============================================================
--
-- The DECA curriculum pathway (6 modules, ~90 questions) has been
-- removed from the app entirely -- EconPulse now covers 5 pathways:
-- Foundations, Intermediate, AP, IB, and Olympiad. profiles.target_exam
-- still allows 'DECA' as a stored value; this brings the constraint in
-- line with the app, which no longer offers it as an option.
--
-- Any existing profile with target_exam = 'DECA' is cleared to NULL
-- first (rather than left violating the new constraint), since there's
-- no equivalent pathway left to remap it to -- the user can pick a new
-- target exam next time they open Profile Settings.

update econpulse.profiles set target_exam = null where target_exam = 'DECA';

-- Drop whatever the live check constraint on target_exam is actually
-- named, rather than assuming it matches schema.sql's name -- this
-- repo's documented schema has drifted from the live database at least
-- twice already this project (an RLS policy, an undocumented NOT NULL
-- column), so don't trust a name without checking.
do $$
declare cname text;
begin
  select con.conname into cname
  from pg_constraint con
  join pg_class rel on rel.oid = con.conrelid
  join pg_namespace nsp on nsp.oid = rel.relnamespace
  where nsp.nspname = 'econpulse'
    and rel.relname = 'profiles'
    and con.contype = 'c'
    and pg_get_constraintdef(con.oid) ilike '%target_exam%'
  limit 1;

  if cname is not null then
    execute format('alter table econpulse.profiles drop constraint %I', cname);
  end if;
end $$;

alter table econpulse.profiles add constraint profiles_target_exam_check
  check (target_exam is null or target_exam in ('IB_SL','IB_HL','AEO','IEO','PRINCIPLES'));
