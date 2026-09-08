-- ============================================================
-- Fix: "infinite recursion detected in policy for relation 'profiles'"
-- IDEMPOTENT: safe to run multiple times.
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- Run this on BOTH projects (Claude1 / dev and ClaudeProject / prod) --
-- the buggy policy pattern below was baked into the schema from the
-- start, so it's almost certainly present in both.
-- ============================================================
--
-- Root cause: the "Teachers can view all profiles" policy on
-- econpulse.profiles checks the caller's role by querying profiles
-- itself, inside its own USING clause:
--
--   using (exists (select 1 from econpulse.profiles p where p.id = auth.uid() and p.role in ('teacher','admin')))
--
-- That inner SELECT re-triggers profiles' own RLS policies -- including
-- this very policy -- so Postgres detects infinite recursion and rejects
-- the query. This doesn't just break teacher reads: any UPDATE on
-- profiles needs its RETURNING clause authorized against profiles'
-- SELECT policies too, so ordinary profile saves (e.g. the Profile &
-- Settings page, including the leaderboard opt-in checkbox) fail with
-- the same error. The same broken pattern was copy-pasted into the
-- "teachers can view all X" policies on curriculum_progress,
-- quiz_results, and assignments, so those are fixed too.
--
-- Fix: move the role check into a `security definer` helper function.
-- Such a function runs with the privileges of its owner (the role that
-- runs this migration, which is the table owner and therefore bypasses
-- RLS), so its internal query against profiles does not re-trigger RLS,
-- breaking the recursion.

create or replace function econpulse.is_teacher_or_admin()
returns boolean
language sql
security definer
set search_path = econpulse, pg_temp
stable
as $$
  select exists (
    select 1 from econpulse.profiles
    where id = auth.uid() and role in ('teacher', 'admin')
  );
$$;

grant execute on function econpulse.is_teacher_or_admin() to authenticated;

-- This repo's history shows two different naming conventions were used for
-- these policies at different points ("Teachers can view all X" vs.
-- "x: teachers read all"), and there's no way from this environment to
-- inspect which one actually exists live -- so drop both variants
-- defensively. `drop policy if exists` is a no-op if the name doesn't match.

-- profiles
drop policy if exists "Teachers can view all profiles" on econpulse.profiles;
drop policy if exists "profiles: teachers read all" on econpulse.profiles;
create policy "Teachers can view all profiles"
  on econpulse.profiles for select
  using (econpulse.is_teacher_or_admin());

-- curriculum_progress
drop policy if exists "Teachers can view all progress" on econpulse.curriculum_progress;
drop policy if exists "curriculum_progress: teachers read all" on econpulse.curriculum_progress;
create policy "Teachers can view all progress"
  on econpulse.curriculum_progress for select
  using (econpulse.is_teacher_or_admin());

-- quiz_results
drop policy if exists "Teachers can view all quiz results" on econpulse.quiz_results;
drop policy if exists "quiz_results: teachers read all" on econpulse.quiz_results;
create policy "Teachers can view all quiz results"
  on econpulse.quiz_results for select
  using (econpulse.is_teacher_or_admin());

-- assignments
drop policy if exists "Teachers can view and comment on all assignments" on econpulse.assignments;
drop policy if exists "assignments: teachers read all" on econpulse.assignments;
create policy "Teachers can view and comment on all assignments"
  on econpulse.assignments for select
  using (econpulse.is_teacher_or_admin());

drop policy if exists "Teachers can update assignment feedback" on econpulse.assignments;
drop policy if exists "assignments: teachers update feedback" on econpulse.assignments;
create policy "Teachers can update assignment feedback"
  on econpulse.assignments for update
  using (econpulse.is_teacher_or_admin());

-- Belt-and-suspenders: if some other, differently-named policy still
-- contains a raw self-referential subquery on profiles (the actual root
-- cause of the recursion), find and drop it too rather than leaving it to
-- keep breaking things silently.
do $$
declare r record;
begin
  for r in
    select policyname, tablename
    from pg_policies
    where schemaname = 'econpulse'
      and tablename in ('profiles', 'curriculum_progress', 'quiz_results', 'assignments')
      and qual ilike '%from econpulse.profiles%'
      and policyname not in (
        'Teachers can view all profiles',
        'Teachers can view all progress',
        'Teachers can view all quiz results',
        'Teachers can view and comment on all assignments',
        'Teachers can update assignment feedback'
      )
  loop
    execute format('drop policy if exists %I on econpulse.%I', r.policyname, r.tablename);
    raise notice 'Dropped leftover recursive policy % on %', r.policyname, r.tablename;
  end loop;
end $$;
