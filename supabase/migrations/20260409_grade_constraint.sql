-- Migration: fix grade range to 9–12 (Grade 13 doesn't exist in US/IB system context)
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_grade_check;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_grade_check CHECK (grade BETWEEN 9 AND 12);

-- Clamp any existing grade-13 rows to 12
UPDATE public.profiles SET grade = 12 WHERE grade = 13;
