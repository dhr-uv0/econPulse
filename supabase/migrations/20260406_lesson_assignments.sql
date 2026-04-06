-- ============================================================
-- Migration: Lesson Assignments Support
-- Date: 2026-04-06
-- Run in Supabase SQL editor for BOTH schemas:
--   econpulse_dev  (dev/preview)
--   econpulse      (production)
-- ============================================================

-- Run once for each schema by setting search_path before executing

-- 1. Add lesson_id column (links assignment to a specific lesson)
ALTER TABLE assignments
  ADD COLUMN IF NOT EXISTS lesson_id text;

-- 2. Add rubric column (grading criteria passed to AI)
ALTER TABLE assignments
  ADD COLUMN IF NOT EXISTS rubric text;

-- 3. Update assignment_type check constraint to include lesson_practice
ALTER TABLE assignments
  DROP CONSTRAINT IF EXISTS assignments_assignment_type_check;

ALTER TABLE assignments
  ADD CONSTRAINT assignments_assignment_type_check
  CHECK (assignment_type IN (
    'econ_in_wild',
    'policy_debate',
    'tycoon_mode',
    'peer_prediction',
    'build_a_model',
    'research_brief',
    'debate_flashcard',
    'current_affairs',
    'lesson_practice'
  ));

-- 4. Unique index: one lesson_practice submission per user per lesson
CREATE UNIQUE INDEX IF NOT EXISTS idx_assignments_lesson_practice
  ON assignments (user_id, lesson_id)
  WHERE assignment_type = 'lesson_practice';
