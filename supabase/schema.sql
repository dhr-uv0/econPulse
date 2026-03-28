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
                       'debate_flashcard','current_affairs'
                     )),
  unit_id          text not null,
  title            text,
  prompt           text,
  submission_text  text,
  ai_feedback      text,
  ai_score         numeric(5,2),
  submitted_at     timestamptz,
  created_at       timestamptz not null default now()
);

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

-- Profiles
alter table public.profiles enable row level security;
create policy "Users can view own profile"   on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
-- Teachers can view all profiles (for class view)
create policy "Teachers can view all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('teacher','admin')
    )
  );

-- Curriculum Progress
alter table public.curriculum_progress enable row level security;
create policy "Users can manage own progress"
  on public.curriculum_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Teachers can view all progress"
  on public.curriculum_progress for select
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher','admin'))
  );

-- Quiz Results
alter table public.quiz_results enable row level security;
create policy "Users can manage own quiz results"
  on public.quiz_results for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Teachers can view all quiz results"
  on public.quiz_results for select
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher','admin'))
  );

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
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher','admin'))
  );
create policy "Teachers can update assignment feedback"
  on public.assignments for update
  using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('teacher','admin'))
  );

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

-- Add XP to a user and handle streak updates
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

  -- Update streak
  update public.streaks
  set
    current_streak = case
      when last_study_date = current_date then current_streak
      when last_study_date = current_date - interval '1 day' then current_streak + 1
      else 1
    end,
    longest_streak = greatest(
      longest_streak,
      case
        when last_study_date = current_date then current_streak
        when last_study_date = current_date - interval '1 day' then current_streak + 1
        else 1
      end
    ),
    last_study_date = current_date
  where user_id = p_user_id;
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
create index if not exists idx_quiz_results_user on public.quiz_results(user_id);
create index if not exists idx_flashcard_reviews_user_next on public.flashcard_reviews(user_id, next_review_at);
create index if not exists idx_assignments_user on public.assignments(user_id);
create index if not exists idx_streaks_user on public.streaks(user_id);
