import { describe, it, expect } from 'vitest'
import { CURRICULUM } from './data'
import { buildQuestionPool, filterPool, sampleQuestions, shuffleOptions, type PooledQuestion } from './mockTest'

describe('buildQuestionPool', () => {
  const pool = buildQuestionPool(CURRICULUM)

  it('is non-trivially populated from the real curriculum', () => {
    expect(pool.length).toBeGreaterThan(500)
  })

  it('only includes true multiple-choice questions with a numeric correctAnswer', () => {
    const invalid = pool.filter((p) => p.question.type !== 'mcq' || !p.question.options || typeof p.question.correctAnswer !== 'number')
    expect(invalid).toEqual([])
  })

  it('tags every pooled question with a real module and lesson id from the curriculum', () => {
    const moduleIds = new Set(CURRICULUM.map((m) => m.id))
    const lessonIds = new Set(CURRICULUM.flatMap((m) => m.lessons.map((l) => l.id)))
    const bad = pool.filter((p) => !moduleIds.has(p.moduleId) || !lessonIds.has(p.lessonId))
    expect(bad).toEqual([])
  })

  it('covers every curriculum tier that has at least one mcq question', () => {
    const tiersWithMcq = new Set(
      CURRICULUM.filter((m) => m.lessons.some((l) => l.quiz.some((q) => q.type === 'mcq' && q.options)))
        .map((m) => m.tier ?? 'FOUNDATIONS')
    )
    const tiersInPool = new Set(pool.map((p) => p.moduleTier))
    for (const tier of tiersWithMcq) {
      expect(tiersInPool.has(tier)).toBe(true)
    }
  })

  // Regression guard: difficulty used to be tagged almost 1:1 with tier (e.g.
  // every AP question was 'higher', every Olympiad question was 'olympiad'),
  // which made a tier+difficulty mock-test filter frequently return zero
  // questions. Each tier must have a genuine spread across all three levels.
  it('gives every tier a genuine spread across all three difficulty levels', () => {
    const byTier = new Map<string, Record<string, number>>()
    for (const p of pool) {
      const counts = byTier.get(p.moduleTier) ?? { easy: 0, standard: 0, higher: 0 }
      counts[p.question.difficulty]++
      byTier.set(p.moduleTier, counts)
    }
    for (const [tier, counts] of byTier) {
      const total = counts.easy + counts.standard + counts.higher
      for (const level of ['easy', 'standard', 'higher']) {
        expect(counts[level], `${tier} has no '${level}' questions`).toBeGreaterThan(0)
        expect(counts[level] / total, `${tier}'s '${level}' bucket is too dominant`).toBeLessThan(0.85)
      }
    }
  })
})

describe('filterPool', () => {
  const pool: PooledQuestion[] = [
    { question: { id: 'q1', type: 'mcq', question: '', options: ['a', 'b'], correctAnswer: 0, explanation: '', marks: 1, difficulty: 'easy' }, moduleId: 'm1', moduleTitle: 'M1', moduleTier: 'FOUNDATIONS', lessonId: 'l1', lessonTitle: 'L1' },
    { question: { id: 'q2', type: 'mcq', question: '', options: ['a', 'b'], correctAnswer: 0, explanation: '', marks: 1, difficulty: 'higher' }, moduleId: 'm2', moduleTitle: 'M2', moduleTier: 'OLYMPIAD', lessonId: 'l2', lessonTitle: 'L2' },
    { question: { id: 'q3', type: 'mcq', question: '', options: ['a', 'b'], correctAnswer: 0, explanation: '', marks: 1, difficulty: 'standard' }, moduleId: 'm3', moduleTitle: 'M3', moduleTier: 'AP', lessonId: 'l3', lessonTitle: 'L3' },
  ]

  it('keeps only questions in the selected tiers', () => {
    const result = filterPool(pool, { tiers: ['FOUNDATIONS'], difficulties: ['easy', 'standard', 'higher'] })
    expect(result.map((p) => p.question.id)).toEqual(['q1'])
  })

  it('keeps only questions matching the selected difficulties', () => {
    const result = filterPool(pool, { tiers: ['FOUNDATIONS', 'OLYMPIAD', 'AP'], difficulties: ['higher'] })
    expect(result.map((p) => p.question.id)).toEqual(['q2'])
  })

  it('applies an optional lessonIds refinement within the selected tiers', () => {
    const result = filterPool(pool, { tiers: ['FOUNDATIONS', 'OLYMPIAD', 'AP'], lessonIds: ['l3'], difficulties: ['easy', 'standard', 'higher'] })
    expect(result.map((p) => p.question.id)).toEqual(['q3'])
  })

  it('treats an empty lessonIds array the same as "no refinement" (all lessons in the selected tiers)', () => {
    const result = filterPool(pool, { tiers: ['FOUNDATIONS', 'OLYMPIAD', 'AP'], lessonIds: [], difficulties: ['easy', 'standard', 'higher'] })
    expect(result).toHaveLength(3)
  })
})

describe('sampleQuestions', () => {
  const pool: PooledQuestion[] = Array.from({ length: 20 }, (_, i) => ({
    question: { id: `q${i}`, type: 'mcq', question: '', options: ['a', 'b'], correctAnswer: 0, explanation: '', marks: 1, difficulty: 'standard' },
    moduleId: 'm', moduleTitle: 'M', moduleTier: 'FOUNDATIONS', lessonId: 'l', lessonTitle: 'L',
  }))

  it('returns exactly `count` questions when the pool is large enough', () => {
    expect(sampleQuestions(pool, 10, 1)).toHaveLength(10)
  })

  it('never returns more questions than the pool has', () => {
    expect(sampleQuestions(pool, 500, 1)).toHaveLength(20)
  })

  it('never duplicates a question within one sample', () => {
    const sample = sampleQuestions(pool, 15, 42)
    const ids = sample.map((p) => p.question.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('is deterministic for a given seed (pure function, no Math.random)', () => {
    const a = sampleQuestions(pool, 10, 7).map((p) => p.question.id)
    const b = sampleQuestions(pool, 10, 7).map((p) => p.question.id)
    expect(a).toEqual(b)
  })

  it('produces a different sample for a different seed', () => {
    const a = sampleQuestions(pool, 10, 1).map((p) => p.question.id)
    const b = sampleQuestions(pool, 10, 2).map((p) => p.question.id)
    expect(a).not.toEqual(b)
  })
})

describe('shuffleOptions', () => {
  it('returns the same set of options, just reordered', () => {
    const { options } = shuffleOptions(['A', 'B', 'C', 'D'], 2, 5)
    expect([...options].sort()).toEqual(['A', 'B', 'C', 'D'])
  })

  it('the remapped correctIndex still points at the original correct option text', () => {
    const original = ['Alpha', 'Beta', 'Gamma', 'Delta']
    const correctIndex = 2 // 'Gamma'
    const { options, correctIndex: newIndex } = shuffleOptions(original, correctIndex, 9)
    expect(options[newIndex]).toBe('Gamma')
  })

  it('is deterministic for a given seed', () => {
    const a = shuffleOptions(['A', 'B', 'C', 'D'], 0, 3)
    const b = shuffleOptions(['A', 'B', 'C', 'D'], 0, 3)
    expect(a).toEqual(b)
  })
})
