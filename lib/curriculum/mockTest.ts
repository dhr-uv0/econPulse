import type { CurriculumModule, CurriculumTier, QuizQuestion } from '@/lib/types'

export interface PooledQuestion {
  question: QuizQuestion
  moduleId: string
  moduleTitle: string
  moduleTier: CurriculumTier
  lessonId: string
  lessonTitle: string
}

/**
 * Flattens the whole curriculum into a single pool of quiz questions, each
 * tagged with where it came from (for the review section's "back to lesson"
 * links). Only true multiple-choice questions are included — everything else
 * in the curriculum's QuestionType union (data_response, essay, quantitative,
 * diagram, case_study, olympiad) needs written or AI-graded input, which this
 * self-graded practice format doesn't support (same restriction LessonQuiz
 * already applies).
 */
export function buildQuestionPool(curriculum: CurriculumModule[]): PooledQuestion[] {
  const pool: PooledQuestion[] = []
  for (const mod of curriculum) {
    const tier = mod.tier ?? 'FOUNDATIONS'
    for (const lesson of mod.lessons) {
      for (const q of lesson.quiz) {
        if (q.type !== 'mcq' || !q.options || typeof q.correctAnswer !== 'number') continue
        pool.push({
          question: q,
          moduleId: mod.id,
          moduleTitle: mod.title,
          moduleTier: tier,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
        })
      }
    }
  }
  return pool
}

export interface MockTestFilters {
  tiers: CurriculumTier[]
  /** Optional refinement within the selected tiers, at lesson granularity. Empty/omitted = every lesson in those tiers. */
  lessonIds?: string[]
  difficulties: QuizQuestion['difficulty'][]
}

export function filterPool(pool: PooledQuestion[], filters: MockTestFilters): PooledQuestion[] {
  return pool.filter((p) => {
    if (!filters.tiers.includes(p.moduleTier)) return false
    if (filters.lessonIds && filters.lessonIds.length > 0 && !filters.lessonIds.includes(p.lessonId)) return false
    if (!filters.difficulties.includes(p.question.difficulty)) return false
    return true
  })
}

// Deterministic seeded PRNG — used instead of Math.random() so sampling and
// shuffling stay pure functions (this codebase's established convention for
// anything that would otherwise call an impure function from render-reachable
// code; see ProgressDashboard, StreakHeatmap, Confetti for the same pattern).
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i * 7.13) * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Picks up to `count` questions at random from the pool (seeded, so repeatable for a given seed). */
export function sampleQuestions(pool: PooledQuestion[], count: number, seed: number): PooledQuestion[] {
  return seededShuffle(pool, seed).slice(0, Math.min(count, pool.length))
}

/**
 * Shuffles a question's answer options so the correct one isn't always in
 * the same slot, returning the new option order and the remapped correct index.
 */
export function shuffleOptions(
  options: string[],
  correctIndex: number,
  seed: number
): { options: string[]; correctIndex: number } {
  const order = seededShuffle(
    options.map((_, i) => i),
    seed
  )
  return {
    options: order.map((i) => options[i]),
    correctIndex: order.indexOf(correctIndex),
  }
}

export const TIER_LABELS: Record<CurriculumTier, string> = {
  FOUNDATIONS: 'Foundations',
  INTERMEDIATE: 'Intermediate',
  AP: 'AP Economics',
  IB: 'IB Economics',
  OLYMPIAD: 'Olympiad',
  DECA: 'DECA',
}

export const DIFFICULTY_LABELS: Record<QuizQuestion['difficulty'], string> = {
  easy: 'Easy',
  standard: 'Standard',
  higher: 'Higher',
}
