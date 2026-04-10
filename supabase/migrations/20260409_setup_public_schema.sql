-- ============================================================
-- EconPulse — Complete public schema setup
-- IDEMPOTENT: safe to run multiple times on any Supabase project
-- Run in: Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

-- Required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── Profiles ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id                      uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name               text,
  bio                     text,
  school                  text,
  grade                   smallint,
  target_exam             text,
  weekly_study_goal_hours smallint DEFAULT 5,
  role                    text NOT NULL DEFAULT 'student',
  avatar_url              text,
  dark_mode               boolean,
  xp_points               integer NOT NULL DEFAULT 0,
  badges                  jsonb   NOT NULL DEFAULT '[]'::jsonb,
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

-- Add any columns that may be missing from an older table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio                     text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS school                  text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS grade                   smallint;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS target_exam             text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS weekly_study_goal_hours smallint DEFAULT 5;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url              text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS dark_mode               boolean;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS xp_points               integer NOT NULL DEFAULT 0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS badges                  jsonb   NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS created_at              timestamptz NOT NULL DEFAULT now();
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS updated_at              timestamptz NOT NULL DEFAULT now();

-- Ensure role column exists and has the right default
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'student';

-- Fix grade constraint (9–12 only)
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_grade_check;
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_target_exam_check;
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_grade_check      CHECK (grade IS NULL OR grade BETWEEN 9 AND 12);
ALTER TABLE public.profiles ADD CONSTRAINT profiles_target_exam_check CHECK (target_exam IS NULL OR target_exam IN ('IB_SL','IB_HL','AEO','IEO','DECA','PRINCIPLES'));
ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check        CHECK (role IN ('student','teacher','admin'));

-- Clamp any stale grade-13 rows
UPDATE public.profiles SET grade = 12 WHERE grade = 13;

-- ── User Preferences ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_preferences (
  user_id               uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE PRIMARY KEY,
  learning_style        text NOT NULL DEFAULT 'mixed',
  difficulty            text NOT NULL DEFAULT 'standard',
  onboarding_completed  boolean NOT NULL DEFAULT false,
  manual_override       boolean NOT NULL DEFAULT false,
  behavior_signals      jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at            timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS learning_style       text NOT NULL DEFAULT 'mixed';
ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS difficulty            text NOT NULL DEFAULT 'standard';
ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS onboarding_completed  boolean NOT NULL DEFAULT false;
ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS manual_override       boolean NOT NULL DEFAULT false;
ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS behavior_signals      jsonb NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE public.user_preferences ADD COLUMN IF NOT EXISTS updated_at            timestamptz NOT NULL DEFAULT now();

ALTER TABLE public.user_preferences DROP CONSTRAINT IF EXISTS user_preferences_learning_style_check;
ALTER TABLE public.user_preferences DROP CONSTRAINT IF EXISTS user_preferences_difficulty_check;
ALTER TABLE public.user_preferences ADD CONSTRAINT user_preferences_learning_style_check CHECK (learning_style IN ('visual','reading','practice','mixed'));
ALTER TABLE public.user_preferences ADD CONSTRAINT user_preferences_difficulty_check      CHECK (difficulty IN ('relaxed','standard','challenging','exam'));

-- ── Curriculum Progress ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.curriculum_progress (
  id                  uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id             uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  module_name         text NOT NULL,
  lesson_id           text NOT NULL,
  status              text NOT NULL DEFAULT 'not_started',
  time_spent_seconds  integer NOT NULL DEFAULT 0,
  last_accessed       timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);

ALTER TABLE public.curriculum_progress ADD COLUMN IF NOT EXISTS time_spent_seconds integer NOT NULL DEFAULT 0;
ALTER TABLE public.curriculum_progress DROP CONSTRAINT IF EXISTS curriculum_progress_status_check;
ALTER TABLE public.curriculum_progress ADD CONSTRAINT curriculum_progress_status_check CHECK (status IN ('not_started','in_progress','completed'));

-- ── Quiz Results ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id               uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id          uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  unit_id          text NOT NULL,
  score            integer NOT NULL,
  total_questions  integer NOT NULL,
  passed           boolean NOT NULL,
  answers          jsonb DEFAULT '{}'::jsonb,
  completed_at     timestamptz NOT NULL DEFAULT now()
);

-- ── Flashcard Reviews (SM-2) ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.flashcard_reviews (
  id             uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id        uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  card_id        text NOT NULL,
  next_review_at timestamptz NOT NULL DEFAULT now(),
  ease_factor    float NOT NULL DEFAULT 2.5,
  interval_days  integer NOT NULL DEFAULT 1,
  created_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, card_id)
);

-- ── Assignments ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.assignments (
  id               uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id          uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  assignment_type  text NOT NULL,
  unit_id          text NOT NULL,
  lesson_id        text,
  title            text,
  prompt           text,
  rubric           text,
  submission_text  text,
  ai_feedback      text,
  ai_score         numeric(5,2),
  submitted_at     timestamptz,
  created_at       timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.assignments ADD COLUMN IF NOT EXISTS lesson_id text;
ALTER TABLE public.assignments ADD COLUMN IF NOT EXISTS rubric    text;
ALTER TABLE public.assignments DROP CONSTRAINT IF EXISTS assignments_assignment_type_check;
ALTER TABLE public.assignments ADD CONSTRAINT assignments_assignment_type_check CHECK (
  assignment_type IN (
    'econ_in_wild','policy_debate','tycoon_mode','peer_prediction',
    'build_a_model','research_brief','debate_flashcard','current_affairs','lesson_practice'
  )
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_assignments_lesson_practice
  ON public.assignments (user_id, lesson_id)
  WHERE assignment_type = 'lesson_practice';

-- ── Bookmarks ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id         uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id  text NOT NULL,
  note_text  text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);

-- ── Streaks ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.streaks (
  id               uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id          uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  current_streak   integer NOT NULL DEFAULT 0,
  longest_streak   integer NOT NULL DEFAULT 0,
  last_study_date  date
);

-- ── Leaderboard Opt-Ins ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.leaderboard_opt_ins (
  id           uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id      uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  display_name text NOT NULL,
  opted_in     boolean NOT NULL DEFAULT true
);

-- ============================================================
-- Row Level Security — drop & cleanly recreate all policies
-- ============================================================

ALTER TABLE public.profiles            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcard_reviews   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.streaks             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaderboard_opt_ins ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies on our tables so we can recreate cleanly
DO $$
DECLARE r RECORD;
BEGIN
  FOR r IN
    SELECT policyname, tablename
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename IN (
        'profiles','user_preferences','curriculum_progress','quiz_results',
        'flashcard_reviews','assignments','bookmarks','streaks','leaderboard_opt_ins'
      )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', r.policyname, r.tablename);
  END LOOP;
END $$;

-- Profiles
CREATE POLICY "profiles: own row"
  ON public.profiles FOR ALL
  USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles: teachers read all"
  ON public.profiles FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role IN ('teacher','admin')));

-- User preferences
CREATE POLICY "user_preferences: own row"
  ON public.user_preferences FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Curriculum progress
CREATE POLICY "curriculum_progress: own rows"
  ON public.curriculum_progress FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "curriculum_progress: teachers read all"
  ON public.curriculum_progress FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role IN ('teacher','admin')));

-- Quiz results
CREATE POLICY "quiz_results: own rows"
  ON public.quiz_results FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "quiz_results: teachers read all"
  ON public.quiz_results FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role IN ('teacher','admin')));

-- Flashcard reviews
CREATE POLICY "flashcard_reviews: own rows"
  ON public.flashcard_reviews FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Assignments
CREATE POLICY "assignments: own rows"
  ON public.assignments FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "assignments: teachers read all"
  ON public.assignments FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role IN ('teacher','admin')));
CREATE POLICY "assignments: teachers update feedback"
  ON public.assignments FOR UPDATE
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND p.role IN ('teacher','admin')));

-- Bookmarks
CREATE POLICY "bookmarks: own rows"
  ON public.bookmarks FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Streaks
CREATE POLICY "streaks: own rows"
  ON public.streaks FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Leaderboard opt-ins
CREATE POLICY "leaderboard_opt_ins: own row"
  ON public.leaderboard_opt_ins FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "leaderboard_opt_ins: anyone reads opted-in"
  ON public.leaderboard_opt_ins FOR SELECT
  USING (opted_in = true);

-- ============================================================
-- add_xp function
-- ============================================================
CREATE OR REPLACE FUNCTION public.add_xp(p_user_id uuid, p_amount integer)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.profiles
  SET xp_points = xp_points + p_amount,
      updated_at = now()
  WHERE id = p_user_id;

  UPDATE public.streaks
  SET
    current_streak = CASE
      WHEN last_study_date = current_date              THEN current_streak
      WHEN last_study_date = current_date - INTERVAL '1 day' THEN current_streak + 1
      ELSE 1
    END,
    longest_streak = GREATEST(
      longest_streak,
      CASE
        WHEN last_study_date = current_date              THEN current_streak
        WHEN last_study_date = current_date - INTERVAL '1 day' THEN current_streak + 1
        ELSE 1
      END
    ),
    last_study_date = current_date
  WHERE user_id = p_user_id;
END;
$$;

-- ============================================================
-- Leaderboard view
-- ============================================================
DROP VIEW IF EXISTS public.leaderboard;
CREATE VIEW public.leaderboard AS
  SELECT
    l.display_name,
    p.xp_points,
    s.current_streak,
    p.id AS user_id
  FROM public.leaderboard_opt_ins l
  JOIN public.profiles p ON p.id = l.user_id
  LEFT JOIN public.streaks s ON s.user_id = l.user_id
  WHERE l.opted_in = true
  ORDER BY p.xp_points DESC
  LIMIT 100;

-- ============================================================
-- Performance indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_curriculum_progress_user      ON public.curriculum_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user             ON public.quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_next   ON public.flashcard_reviews(user_id, next_review_at);
CREATE INDEX IF NOT EXISTS idx_assignments_user              ON public.assignments(user_id);
CREATE INDEX IF NOT EXISTS idx_streaks_user                  ON public.streaks(user_id);

-- ============================================================
-- DATA MIGRATION (only if you have data in the econpulse schema)
-- Uncomment this block ONLY if your old data is in econpulse schema
-- ============================================================
/*
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'econpulse') THEN
    INSERT INTO public.profiles
      SELECT * FROM econpulse.profiles
      ON CONFLICT (id) DO UPDATE SET
        full_name = EXCLUDED.full_name, bio = EXCLUDED.bio, school = EXCLUDED.school,
        grade = LEAST(EXCLUDED.grade, 12), target_exam = EXCLUDED.target_exam,
        weekly_study_goal_hours = EXCLUDED.weekly_study_goal_hours, role = EXCLUDED.role,
        avatar_url = EXCLUDED.avatar_url, dark_mode = EXCLUDED.dark_mode,
        xp_points = EXCLUDED.xp_points, badges = EXCLUDED.badges,
        updated_at = EXCLUDED.updated_at;

    INSERT INTO public.user_preferences SELECT * FROM econpulse.user_preferences
      ON CONFLICT (user_id) DO NOTHING;
    INSERT INTO public.curriculum_progress SELECT * FROM econpulse.curriculum_progress
      ON CONFLICT (user_id, lesson_id) DO NOTHING;
    INSERT INTO public.quiz_results SELECT * FROM econpulse.quiz_results
      ON CONFLICT (id) DO NOTHING;
    INSERT INTO public.flashcard_reviews SELECT * FROM econpulse.flashcard_reviews
      ON CONFLICT (user_id, card_id) DO NOTHING;
    INSERT INTO public.assignments SELECT * FROM econpulse.assignments
      ON CONFLICT (id) DO NOTHING;
    INSERT INTO public.streaks SELECT * FROM econpulse.streaks
      ON CONFLICT (user_id) DO NOTHING;
    INSERT INTO public.leaderboard_opt_ins SELECT * FROM econpulse.leaderboard_opt_ins
      ON CONFLICT (user_id) DO NOTHING;
  END IF;
END $$;
*/
