-- ============================================================
-- EconPulse — Supabase PostgreSQL Schema
-- Project: Claude2: Testers and Teachers
-- ============================================================

-- Enable required extensions
create extension if not exists "uuid-ossp";

-- ── Profiles ────────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id                      uuid references auth.users(id) on delete cascade primary key,
  full_name               text,
  -- Live on both projects as NOT NULL, but wasn't previously written here or
  -- set on signup (see supabase/migrations/20260909_fix_leaderboard_visibility.sql's
  -- notes and app/(auth)/callback/route.ts) -- every real signup was failing
  -- against this constraint until that was fixed. Keep it set alongside
  -- full_name wherever a profile row is created.
  display_name            text not null,
  bio                     text,
  school                  text,
  grade                   smallint check (grade between 9 and 13),
  target_exam             text check (target_exam in ('IB_SL','IB_HL','AEO','IEO','DECA','PRINCIPLES')),
  weekly_study_goal_hours smallint default 5,
  role                    text not null default 'student' check (role in ('student','teacher','admin')),
  avatar_url              text,
  dark_mode               boolean,
  xp_points               integer not null default 0,
  badges                  jsonb   not null default '[]'::jsonb,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

-- ── Curriculum Progress ──────────────────────────────────────────────────────
create table if not exists public.curriculum_progress (
  id                  uuid default uuid_generate_v4() primary key,
  user_id             uuid not null references public.profiles(id) on delete cascade,
  module_name         text not null,
  lesson_id           text not null,
  status              text not null default 'not_started'
                        check (status in ('not_started','in_progress','completed')),
  time_spent_seconds  integer not null default 0,
  last_accessed       timestamptz not null default now(),
  unique (user_id, lesson_id)
);

-- ── Quiz Results ─────────────────────────────────────────────────────────────
create table if not exists public.quiz_results (
  id               uuid default uuid_generate_v4() primary key,
  user_id          uuid not null references public.profiles(id) on delete cascade,
  unit_id          text not null,
  score            integer not null,
  total_questions  integer not null,
  passed           boolean not null,
  answers          jsonb default '{}'::jsonb,
  completed_at     timestamptz not null default now()
);

-- ── Flashcard Reviews (SM-2) ──────────────────────────────────────────────────
create table if not exists public.flashcard_reviews (
  id             uuid default uuid_generate_v4() primary key,
  user_id        uuid not null references public.profiles(id) on delete cascade,
  card_id        text not null,
  next_review_at timestamptz not null default now(),
  ease_factor    float  not null default 2.5,
  interval_days  integer not null default 1,
  created_at     timestamptz not null default now(),
  unique (user_id, card_id)
);

-- ── Assignments ──────────────────────────────────────────────────────────────
create table if not exists public.assignments (
  id               uuid default uuid_generate_v4() primary key,
  user_id          uuid not null references public.profiles(id) on delete cascade,
  assignment_type  text not null
                     check (assignment_type in (
                       'econ_in_wild','policy_debate','tycoon_mode',
                       'peer_prediction','build_a_model','research_brief',
                       'debate_flashcard','current_affairs','lesson_practice'
                     )),
  unit_id          text not null,
  lesson_id        text,          -- set for lesson_practice type
  title            text,
  prompt           text,
  rubric           text,          -- grading criteria for AI
  submission_text  text,
  ai_feedback      text,
  ai_score         numeric(5,2),
  submitted_at     timestamptz,
  created_at       timestamptz not null default now()
);

-- Unique constraint: one lesson_practice submission per user per lesson
create unique index if not exists idx_assignments_lesson_practice
  on public.assignments (user_id, lesson_id)
  where assignment_type = 'lesson_practice';

-- ── Bookmarks ────────────────────────────────────────────────────────────────
create table if not exists public.bookmarks (
  id         uuid default uuid_generate_v4() primary key,
  user_id    uuid not null references public.profiles(id) on delete cascade,
  lesson_id  text not null,
  note_text  text,
  created_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

-- ── Streaks ──────────────────────────────────────────────────────────────────
create table if not exists public.streaks (
  id               uuid default uuid_generate_v4() primary key,
  user_id          uuid not null references public.profiles(id) on delete cascade unique,
  current_streak   integer not null default 0,
  longest_streak   integer not null default 0,
  last_study_date  date
);

-- ── Leaderboard Opt-Ins ───────────────────────────────────────────────────────
create table if not exists public.leaderboard_opt_ins (
  id           uuid default uuid_generate_v4() primary key,
  user_id      uuid not null references public.profiles(id) on delete cascade unique,
  display_name text not null,
  opted_in     boolean not null default true
);

-- ============================================================
-- Row Level Security Policies
-- ============================================================

-- Role-check helper: SECURITY DEFINER so this internal query against
-- profiles runs as the function owner (which bypasses RLS) instead of as
-- the calling user. Do NOT inline `exists (select ... from profiles ...)`
-- directly into a policy ON profiles itself -- that re-triggers profiles'
-- own RLS policies, including the one being evaluated, causing Postgres
-- to reject the query with "infinite recursion detected in policy for
-- relation 'profiles'". See supabase/migrations/20260907_fix_profiles_rls_recursion.sql.
create or replace function public.is_teacher_or_admin()
returns boolean
language sql
security definer
set search_path = public, pg_temp
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('teacher', 'admin')
  );
$$;

-- Profiles
alter table public.profiles enable row level security;
create policy "Users can view own profile"   on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
-- Teachers can view all profiles (for class view)
create policy "Teachers can view all profiles"
  on public.profiles for select
  using (public.is_teacher_or_admin());

-- Curriculum Progress
alter table public.curriculum_progress enable row level security;
create policy "Users can manage own progress"
  on public.curriculum_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Teachers can view all progress"
  on public.curriculum_progress for select
  using (public.is_teacher_or_admin());

-- Quiz Results
alter table public.quiz_results enable row level security;
create policy "Users can manage own quiz results"
  on public.quiz_results for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Teachers can view all quiz results"
  on public.quiz_results for select
  using (public.is_teacher_or_admin());

-- Flashcard Reviews
alter table public.flashcard_reviews enable row level security;
create policy "Users can manage own flashcard reviews"
  on public.flashcard_reviews for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Assignments
alter table public.assignments enable row level security;
create policy "Users can manage own assignments"
  on public.assignments for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Teachers can view and comment on all assignments"
  on public.assignments for select
  using (public.is_teacher_or_admin());
create policy "Teachers can update assignment feedback"
  on public.assignments for update
  using (public.is_teacher_or_admin());

-- Bookmarks
alter table public.bookmarks enable row level security;
create policy "Users can manage own bookmarks"
  on public.bookmarks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Streaks
alter table public.streaks enable row level security;
create policy "Users can manage own streaks"
  on public.streaks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Leaderboard Opt-Ins
alter table public.leaderboard_opt_ins enable row level security;
create policy "Users can manage own opt-in"
  on public.leaderboard_opt_ins for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Anyone can view opted-in leaderboard entries"
  on public.leaderboard_opt_ins for select using (opted_in = true);

-- ============================================================
-- Helper Functions
-- ============================================================

-- Add XP to a user and handle streak updates.
--
-- The streak side is an UPSERT, not a plain UPDATE: a plain UPDATE
-- silently does nothing if the caller doesn't already have a streaks
-- row, which happened in practice for at least one real account whose
-- signup partially failed (see supabase/migrations/20260909_efficiency_and_robustness.sql).
-- With the upsert, any such account self-heals the next time it earns XP.
create or replace function public.add_xp(p_user_id uuid, p_amount integer)
returns void
language plpgsql
security definer
as $$
begin
  update public.profiles
  set xp_points = xp_points + p_amount,
      updated_at = now()
  where id = p_user_id;

  insert into public.streaks (user_id, current_streak, longest_streak, last_study_date)
  values (p_user_id, 1, 1, current_date)
  on conflict (user_id) do update set
    current_streak = case
      when public.streaks.last_study_date = current_date then public.streaks.current_streak
      when public.streaks.last_study_date = current_date - interval '1 day' then public.streaks.current_streak + 1
      else 1
    end,
    longest_streak = greatest(
      public.streaks.longest_streak,
      case
        when public.streaks.last_study_date = current_date then public.streaks.current_streak
        when public.streaks.last_study_date = current_date - interval '1 day' then public.streaks.current_streak + 1
        else 1
      end
    ),
    last_study_date = current_date;
end;
$$;

-- Anonymized leaderboard view
create or replace view public.leaderboard as
  select
    l.display_name,
    p.xp_points,
    s.current_streak,
    p.id as user_id
  from public.leaderboard_opt_ins l
  join public.profiles p on p.id = l.user_id
  left join public.streaks s on s.user_id = l.user_id
  where l.opted_in = true
  order by p.xp_points desc
  limit 100;

-- ============================================================
-- Indexes for performance
-- ============================================================
create index if not exists idx_curriculum_progress_user on public.curriculum_progress(user_id);
create index if not exists idx_curriculum_progress_user_status on public.curriculum_progress(user_id, status);
create index if not exists idx_quiz_results_user on public.quiz_results(user_id);
create index if not exists idx_quiz_results_user_completed on public.quiz_results(user_id, completed_at desc);
create index if not exists idx_flashcard_reviews_user_next on public.flashcard_reviews(user_id, next_review_at);
create index if not exists idx_assignments_user on public.assignments(user_id);
create index if not exists idx_assignments_submitted_at on public.assignments(submitted_at) where submitted_at is not null;
create index if not exists idx_streaks_user on public.streaks(user_id);
-- Partial indexes: only the minority-case rows matter to these lookups
-- (role checks care about staff, not the majority of students; the
-- leaderboard view only ever filters opted_in = true), so indexing just
-- those keeps the index small and fast regardless of total user count.
create index if not exists idx_profiles_role_staff on public.profiles(role) where role in ('teacher', 'admin');
create index if not exists idx_leaderboard_opt_ins_opted_in on public.leaderboard_opt_ins(opted_in) where opted_in = true;
