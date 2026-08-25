'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { CurriculumModule, CurriculumTier, QuizQuestion } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Confetti } from '@/components/ui/confetti'
import {
  buildQuestionPool,
  filterPool,
  sampleQuestions,
  shuffleOptions,
  TIER_LABELS,
  DIFFICULTY_LABELS,
  type PooledQuestion,
} from '@/lib/curriculum/mockTest'
import {
  ClipboardList, Check, X, ChevronLeft, ChevronRight, Trophy, RotateCcw, ArrowLeft,
} from 'lucide-react'

interface Props {
  modules: CurriculumModule[]
  userId: string
}

const ALL_TIERS = Object.keys(TIER_LABELS) as CurriculumTier[]
const ALL_DIFFICULTIES = Object.keys(DIFFICULTY_LABELS) as QuizQuestion['difficulty'][]
const QUESTION_COUNTS = [10, 20, 30, 50]

interface TestQuestion {
  pooled: PooledQuestion
  shuffledOptions: string[]
  shuffledCorrect: number
}

type Phase = 'setup' | 'taking' | 'review'

export function MockTestBuilder({ modules, userId }: Props) {
  const supabase = createClient()
  const pool = useMemo(() => buildQuestionPool(modules), [modules])

  const [phase, setPhase] = useState<Phase>('setup')
  const [selectedTiers, setSelectedTiers] = useState<CurriculumTier[]>(['FOUNDATIONS'])
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>([])
  const [showTopics, setShowTopics] = useState(false)
  const [selectedDifficulties, setSelectedDifficulties] = useState<QuizQuestion['difficulty'][]>([...ALL_DIFFICULTIES])
  const [questionCount, setQuestionCount] = useState(10)

  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>([])
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [current, setCurrent] = useState(0)
  const [saving, setSaving] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)

  const availableModules = modules.filter((m) => selectedTiers.includes(m.tier ?? 'FOUNDATIONS') && m.lessons.some((l) => l.quiz.some((q) => q.type === 'mcq')))

  const filteredPool = useMemo(
    () => filterPool(pool, { tiers: selectedTiers, moduleIds: selectedModuleIds, difficulties: selectedDifficulties }),
    [pool, selectedTiers, selectedModuleIds, selectedDifficulties]
  )

  function toggleTier(tier: CurriculumTier) {
    setSelectedTiers((prev) => prev.includes(tier) ? prev.filter((t) => t !== tier) : [...prev, tier])
    setSelectedModuleIds([])
  }

  function toggleDifficulty(d: QuizQuestion['difficulty']) {
    setSelectedDifficulties((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d])
  }

  function toggleModule(id: string) {
    // An empty selection implicitly means "every available module" — so the
    // first uncheck must expand into that full set minus the one being
    // removed, not just add `id` as if starting from nothing selected.
    const effective = selectedModuleIds.length > 0 ? selectedModuleIds : availableModules.map((m) => m.id)
    const next = effective.includes(id) ? effective.filter((x) => x !== id) : [...effective, id]
    setSelectedModuleIds(next)
  }

  function generateTest() {
    const seed = Date.now()
    const sampled = sampleQuestions(filteredPool, questionCount, seed)
    const prepared: TestQuestion[] = sampled.map((p, i) => {
      const opts = p.question.options ?? []
      const correctIdx = p.question.correctAnswer as number
      const { options, correctIndex } = shuffleOptions(opts, correctIdx, seed + i * 3.7)
      return { pooled: p, shuffledOptions: options, shuffledCorrect: correctIndex }
    })
    setTestQuestions(prepared)
    setAnswers(new Array(prepared.length).fill(null))
    setCurrent(0)
    setPhase('taking')
  }

  function selectAnswer(index: number) {
    setAnswers((prev) => {
      const next = [...prev]
      next[current] = index
      return next
    })
  }

  const answeredCount = answers.filter((a) => a !== null).length
  const score = answers.filter((a, i) => a !== null && a === testQuestions[i]?.shuffledCorrect).length

  async function submitTest() {
    setSaving(true)
    const pct = testQuestions.length > 0 ? score / testQuestions.length : 0
    const earned = score * 5 + 20
    setXpEarned(earned)

    await supabase.from('quiz_results').insert({
      user_id: userId,
      unit_id: 'mock-test',
      score,
      total_questions: testQuestions.length,
      passed: pct >= 0.7,
      answers: { answers, tiers: selectedTiers, difficulties: selectedDifficulties },
      completed_at: new Date().toISOString(),
    })
    await supabase.rpc('add_xp', { p_user_id: userId, p_amount: earned })

    setSaving(false)
    setPhase('review')
  }

  function startOver() {
    setPhase('setup')
    setTestQuestions([])
    setAnswers([])
    setCurrent(0)
  }

  // ── Setup phase ──────────────────────────────────────────────────────────
  if (phase === 'setup') {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-7 w-7 text-[var(--accent)]" />
          <div>
            <h1 className="text-2xl font-extrabold text-[var(--fg)]">Build a Mock Test</h1>
            <p className="text-sm text-[var(--muted-fg)]">Pick your paths, topics, and difficulty — then test yourself with no hints until the end.</p>
          </div>
        </div>

        <Card className="p-5 space-y-6">
          {/* Tiers */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">Path</h3>
            <div className="flex flex-wrap gap-2">
              {ALL_TIERS.map((tier) => (
                <button
                  key={tier}
                  onClick={() => toggleTier(tier)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition-all',
                    selectedTiers.includes(tier)
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]'
                      : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/50'
                  )}
                  aria-pressed={selectedTiers.includes(tier)}
                >
                  {TIER_LABELS[tier]}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {ALL_DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  onClick={() => toggleDifficulty(d)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition-all',
                    selectedDifficulties.includes(d)
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]'
                      : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/50'
                  )}
                  aria-pressed={selectedDifficulties.includes(d)}
                >
                  {DIFFICULTY_LABELS[d]}
                </button>
              ))}
            </div>
          </div>

          {/* Topics (optional refinement) */}
          <div>
            <button
              onClick={() => setShowTopics((v) => !v)}
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
              disabled={availableModules.length === 0}
            >
              {showTopics ? 'Hide topic selection' : 'Customize specific topics (optional)'}
            </button>
            {showTopics && (
              <div className="mt-3 grid gap-2 sm:grid-cols-2 max-h-64 overflow-y-auto pr-1">
                {availableModules.map((mod) => {
                  const checked = selectedModuleIds.length === 0 || selectedModuleIds.includes(mod.id)
                  return (
                    <label
                      key={mod.id}
                      className="flex items-center gap-2 text-sm text-[var(--fg)] rounded-lg border border-[var(--border)] px-3 py-2 cursor-pointer hover:border-[var(--accent)]/50"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleModule(mod.id)}
                        className="accent-[var(--accent)]"
                      />
                      <span className="truncate">{mod.title}</span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>

          {/* Question count */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">Number of Questions</h3>
            <div className="flex flex-wrap gap-2">
              {QUESTION_COUNTS.map((count) => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-sm font-semibold border-2 transition-all',
                    questionCount === count
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]'
                      : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/50'
                  )}
                  aria-pressed={questionCount === count}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted-fg)]">
              <span className="font-semibold text-[var(--fg)]">{filteredPool.length}</span> question{filteredPool.length !== 1 ? 's' : ''} available with these filters
            </p>
            <Button
              variant="gold"
              onClick={generateTest}
              disabled={filteredPool.length === 0 || selectedTiers.length === 0 || selectedDifficulties.length === 0}
              className="gap-1.5"
            >
              Generate Mock Test
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  // ── Taking phase ─────────────────────────────────────────────────────────
  if (phase === 'taking') {
    const q = testQuestions[current]
    const isLast = current === testQuestions.length - 1

    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--muted-fg)]">Question {current + 1} of {testQuestions.length}</span>
          <span className="text-[var(--muted-fg)]">{answeredCount} answered</span>
        </div>

        {/* Question navigator */}
        <div className="flex flex-wrap gap-1.5">
          {testQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-7 w-7 rounded-lg text-xs font-bold border-2 transition-all flex items-center justify-center',
                i === current ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)]'
                  : answers[i] !== null ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--fg)]'
                  : 'border-[var(--border)] text-[var(--muted-fg)]'
              )}
              aria-current={i === current}
              aria-label={`Question ${i + 1}${answers[i] !== null ? ' (answered)' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{q.pooled.moduleTitle}</Badge>
                <Badge variant="muted" className="text-[10px]">{DIFFICULTY_LABELS[q.pooled.question.difficulty]}</Badge>
              </div>
              <p className="text-[var(--fg)] font-medium leading-relaxed">{q.pooled.question.question}</p>
            </div>

            <div className="space-y-2">
              {q.shuffledOptions.map((opt, i) => {
                const isSelected = answers[current] === i
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={cn(
                      'w-full rounded-xl border-2 px-4 py-3 text-left text-sm transition-all',
                      isSelected
                        ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]'
                        : 'border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--fg)]'
                    )}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold',
                        isSelected ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-current'
                      )}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      {opt}
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} className="gap-1.5">
            <ChevronLeft className="h-3.5 w-3.5" />
            Back
          </Button>
          {isLast ? (
            <Button variant="gold" onClick={submitTest} disabled={saving} className="gap-1.5">
              {saving ? 'Submitting…' : 'Submit Test'}
              <Check className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="gold" onClick={() => setCurrent((c) => c + 1)} className="gap-1.5">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    )
  }

  // ── Review phase ─────────────────────────────────────────────────────────
  const pct = testQuestions.length > 0 ? Math.round((score / testQuestions.length) * 100) : 0
  const passed = pct >= 70

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="relative overflow-hidden">
        {passed && <Confetti />}
        <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-6">
          <div className={cn(
            'flex h-20 w-20 items-center justify-center rounded-full animate-pop-in',
            passed ? 'bg-green-500/15' : 'bg-red-500/15'
          )}>
            {passed ? <Trophy className="h-10 w-10 text-green-500" /> : <RotateCcw className="h-10 w-10 text-red-500" />}
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--fg)] mb-1">
              {passed ? 'Great work!' : 'Mock Test Complete'}
            </h3>
            <p className="text-[var(--muted-fg)]">
              You scored {score} out of {testQuestions.length} ({pct}%)
            </p>
            <div className="mt-2">
              <Badge variant="gold" className="gap-1 text-sm px-3 py-1">
                <Check className="h-3.5 w-3.5" />
                +{xpEarned} XP
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-center">
              <div className="text-2xl font-black text-green-500">{score}</div>
              <div className="text-xs text-[var(--muted-fg)]">Correct</div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center">
              <div className="text-2xl font-black text-red-500">{testQuestions.length - score}</div>
              <div className="text-xs text-[var(--muted-fg)]">Incorrect</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={startOver} className="gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" />
              Build Another Test
            </Button>
            <Link href="/quiz">
              <Button variant="gold" className="gap-1.5">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Practice
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-fg)] mb-3">Review Your Answers</h2>
        <div className="space-y-3">
          {testQuestions.map((q, i) => {
            const userAnswer = answers[i]
            const isCorrect = userAnswer === q.shuffledCorrect
            return (
              <Card key={i}>
                <CardContent className="pt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5',
                      isCorrect ? 'bg-green-500/15' : 'bg-red-500/15'
                    )}>
                      {isCorrect ? <Check className="h-3.5 w-3.5 text-green-500" /> : <X className="h-3.5 w-3.5 text-red-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="outline" className="text-[10px]">{q.pooled.moduleTitle}</Badge>
                      </div>
                      <p className="text-sm font-medium text-[var(--fg)]">{q.pooled.question.question}</p>
                    </div>
                  </div>

                  <div className="pl-9 space-y-1.5 text-sm">
                    {userAnswer !== null ? (
                      <p className={isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        Your answer: {q.shuffledOptions[userAnswer]}
                      </p>
                    ) : (
                      <p className="text-[var(--muted-fg)]">Not answered</p>
                    )}
                    {!isCorrect && (
                      <p className="text-green-600 dark:text-green-400">
                        Correct answer: {q.shuffledOptions[q.shuffledCorrect]}
                      </p>
                    )}
                    <p className="text-[var(--muted-fg)] leading-relaxed">{q.pooled.question.explanation}</p>
                    <Link
                      href={`/curriculum/${q.pooled.moduleId}/${q.pooled.lessonId}`}
                      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline font-medium"
                    >
                      Review this lesson
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
