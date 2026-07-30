import { describe, it, expect } from 'vitest'
import { CURRICULUM, getLessonById, getModuleById } from './data'

describe('CURRICULUM structure', () => {
  it('has at least 40 modules', () => {
    expect(CURRICULUM.length).toBeGreaterThanOrEqual(40)
  })

  it('has no duplicate module ids', () => {
    const ids = CURRICULUM.map((m) => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has no duplicate lesson ids across the whole curriculum', () => {
    const ids = CURRICULUM.flatMap((m) => m.lessons.map((l) => l.id))
    const seen = new Set<string>()
    const duplicates: string[] = []
    for (const id of ids) {
      if (seen.has(id)) duplicates.push(id)
      seen.add(id)
    }
    expect(duplicates).toEqual([])
  })

  it('every lesson declares a moduleId that matches the module it lives under', () => {
    const mismatches: string[] = []
    for (const mod of CURRICULUM) {
      for (const lesson of mod.lessons) {
        if (lesson.moduleId !== mod.id) mismatches.push(`${lesson.id} (says ${lesson.moduleId}, lives under ${mod.id})`)
      }
    }
    expect(mismatches).toEqual([])
  })

  it('every module has at least one lesson', () => {
    const empty = CURRICULUM.filter((m) => m.lessons.length === 0).map((m) => m.id)
    expect(empty).toEqual([])
  })
})

describe('lesson content completeness', () => {
  const allLessons = CURRICULUM.flatMap((m) => m.lessons)

  it('every lesson has a non-empty conceptual explanation', () => {
    const missing = allLessons.filter((l) => !l.content.conceptualExplanation?.trim()).map((l) => l.id)
    expect(missing).toEqual([])
  })

  it('every lesson has at least one flashcard', () => {
    const missing = allLessons.filter((l) => l.flashcards.length === 0).map((l) => l.id)
    expect(missing).toEqual([])
  })

  it('every lesson has at least one quiz question', () => {
    const missing = allLessons.filter((l) => l.quiz.length === 0).map((l) => l.id)
    expect(missing).toEqual([])
  })

  it('every lesson has a thinkAboutIt reflection prompt (2026-07 completion pass regression guard)', () => {
    const missing = allLessons.filter((l) => !l.content.thinkAboutIt).map((l) => l.id)
    expect(missing).toEqual([])
  })

  it('every lesson has a lessonAssignment (2026-07 completion pass regression guard)', () => {
    const missing = allLessons.filter((l) => !l.lessonAssignment).map((l) => l.id)
    expect(missing).toEqual([])
  })

  it('no lesson is left marked isStub:true (stale-flag regression guard)', () => {
    const stubbed = allLessons.filter((l) => l.content.isStub === true).map((l) => l.id)
    expect(stubbed).toEqual([])
  })

  it('every thinkAboutIt has both a non-empty question and answer', () => {
    const broken = allLessons
      .filter((l) => l.content.thinkAboutIt)
      .filter((l) => !l.content.thinkAboutIt!.question?.trim() || !l.content.thinkAboutIt!.answer?.trim())
      .map((l) => l.id)
    expect(broken).toEqual([])
  })

  it('every lessonAssignment has a prompt, rubric, and at least one example topic', () => {
    const broken = allLessons
      .filter((l) => l.lessonAssignment)
      .filter((l) => {
        const a = l.lessonAssignment!
        return !a.prompt?.trim() || !a.rubric?.trim() || !a.exampleTopics?.length
      })
      .map((l) => l.id)
    expect(broken).toEqual([])
  })
})

describe('quiz question integrity', () => {
  const allQuestions = CURRICULUM.flatMap((m) => m.lessons.flatMap((l) => l.quiz.map((q) => ({ lessonId: l.id, q }))))

  it('every mcq question with options has a correctAnswer index within range', () => {
    const outOfRange = allQuestions
      .filter(({ q }) => q.type === 'mcq' && q.options && typeof q.correctAnswer === 'number')
      .filter(({ q }) => (q.correctAnswer as number) < 0 || (q.correctAnswer as number) >= q.options!.length)
      .map(({ lessonId, q }) => `${lessonId}/${q.id}`)
    expect(outOfRange).toEqual([])
  })

  it('every question has a non-empty explanation', () => {
    const missing = allQuestions.filter(({ q }) => !q.explanation?.trim()).map(({ lessonId, q }) => `${lessonId}/${q.id}`)
    expect(missing).toEqual([])
  })

  it('every question awards a positive number of marks', () => {
    const invalid = allQuestions.filter(({ q }) => !(q.marks > 0)).map(({ lessonId, q }) => `${lessonId}/${q.id}`)
    expect(invalid).toEqual([])
  })

  it('has no duplicate question ids within any single lesson', () => {
    const byLesson = new Map<string, string[]>()
    for (const { lessonId, q } of allQuestions) {
      if (!byLesson.has(lessonId)) byLesson.set(lessonId, [])
      byLesson.get(lessonId)!.push(q.id)
    }
    const lessonsWithDupes: string[] = []
    for (const [lessonId, ids] of byLesson) {
      if (new Set(ids).size !== ids.length) lessonsWithDupes.push(lessonId)
    }
    expect(lessonsWithDupes).toEqual([])
  })
})

describe('flashcard integrity', () => {
  const allFlashcards = CURRICULUM.flatMap((m) => m.lessons.flatMap((l) => l.flashcards.map((fc) => ({ lessonId: l.id, fc }))))

  it('every flashcard has non-empty front and back text', () => {
    const broken = allFlashcards
      .filter(({ fc }) => !fc.front?.trim() || !fc.back?.trim())
      .map(({ lessonId, fc }) => `${lessonId}/${fc.id}`)
    expect(broken).toEqual([])
  })
})

describe('getLessonById', () => {
  it('finds a known lesson by id', () => {
    const lesson = getLessonById('f1-l1')
    expect(lesson).not.toBeNull()
    expect(lesson?.id).toBe('f1-l1')
  })

  it('returns null for an id that does not exist', () => {
    expect(getLessonById('not-a-real-lesson-id')).toBeNull()
  })
})

describe('getModuleById', () => {
  it('finds a known module by id', () => {
    const mod = getModuleById('f1-thinking')
    expect(mod).not.toBeNull()
    expect(mod?.id).toBe('f1-thinking')
  })

  it('returns null for an id that does not exist', () => {
    expect(getModuleById('not-a-real-module-id')).toBeNull()
  })
})
