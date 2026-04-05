'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BookOpen, BarChart2, PenTool, Layers, Zap, Target, Clock, Trophy } from 'lucide-react'
import type { LearningStyle, DifficultyMode } from '@/lib/types'
import { useUserPreferences } from '@/lib/hooks/useUserPreferences'

const STYLE_QUESTIONS = [
  {
    id: 'style1',
    question: 'When you\'re learning something new, what helps you most?',
    options: [
      { label: 'Seeing a diagram or chart that shows how it works', value: 'visual' as LearningStyle, icon: BarChart2 },
      { label: 'Reading a clear explanation with definitions', value: 'reading' as LearningStyle, icon: BookOpen },
      { label: 'Jumping straight into practice problems', value: 'practice' as LearningStyle, icon: PenTool },
      { label: 'A mix of all three', value: 'mixed' as LearningStyle, icon: Layers },
    ],
  },
  {
    id: 'style2',
    question: 'When you get a wrong answer, what do you want to see first?',
    options: [
      { label: 'A graph or visual showing the concept', value: 'visual' as LearningStyle, icon: BarChart2 },
      { label: 'A written explanation of why you were wrong', value: 'reading' as LearningStyle, icon: BookOpen },
      { label: 'Another similar problem to try immediately', value: 'practice' as LearningStyle, icon: PenTool },
      { label: 'Both an explanation and another problem', value: 'mixed' as LearningStyle, icon: Layers },
    ],
  },
]

const DIFFICULTY_QUESTIONS = [
  {
    id: 'diff1',
    question: 'How do you prefer to study?',
    options: [
      { label: 'Take it slow — I want lots of explanation and hints', value: 'relaxed' as DifficultyMode, icon: Clock },
      { label: 'Normal pace — not too fast, not too slow', value: 'standard' as DifficultyMode, icon: Layers },
      { label: 'Challenge me — give me harder problems', value: 'challenging' as DifficultyMode, icon: Zap },
      { label: 'Exam conditions — timed, strict, no hints', value: 'exam' as DifficultyMode, icon: Trophy },
    ],
  },
  {
    id: 'diff2',
    question: 'How confident are you in economics right now?',
    options: [
      { label: 'Complete beginner — I need everything explained', value: 'relaxed' as DifficultyMode, icon: Clock },
      { label: 'Some background — I\'ve studied it a little', value: 'standard' as DifficultyMode, icon: Layers },
      { label: 'Fairly confident — I want to be challenged', value: 'challenging' as DifficultyMode, icon: Zap },
      { label: 'Preparing for an exam — I need exam-style practice', value: 'exam' as DifficultyMode, icon: Target },
    ],
  },
]

function tally<T extends string>(votes: T[]): T {
  const counts = votes.reduce((acc, v) => ({ ...acc, [v]: (acc[v] ?? 0) + 1 }), {} as Record<T, number>)
  return Object.entries(counts).sort(([, a], [, b]) => (b as number) - (a as number))[0][0] as T
}

export function LearningStyleQuiz() {
  const [step, setStep] = useState(0) // 0-3 = questions, 4 = done
  const [styleVotes, setStyleVotes] = useState<LearningStyle[]>([])
  const [diffVotes, setDiffVotes] = useState<DifficultyMode[]>([])
  const [saving, setSaving] = useState(false)
  const { completeOnboarding } = useUserPreferences()
  const router = useRouter()

  const allQuestions = [...STYLE_QUESTIONS, ...DIFFICULTY_QUESTIONS]
  const current = allQuestions[step]
  const isStyleQ = step < STYLE_QUESTIONS.length

  async function handleAnswer(value: LearningStyle | DifficultyMode) {
    if (isStyleQ) {
      const newVotes = [...styleVotes, value as LearningStyle]
      setStyleVotes(newVotes)
    } else {
      const newVotes = [...diffVotes, value as DifficultyMode]
      setDiffVotes(newVotes)
    }

    if (step < allQuestions.length - 1) {
      setStep(s => s + 1)
    } else {
      // All answered — save and redirect
      setSaving(true)
      const finalStyle = tally([...styleVotes, ...(isStyleQ ? [value as LearningStyle] : [])])
      const finalDiff  = tally([...diffVotes,  ...(isStyleQ ? [] : [value as DifficultyMode])])
      await completeOnboarding(finalStyle, finalDiff)
      router.push('/dashboard')
    }
  }

  if (saving) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="h-8 w-8 rounded-full border-3 border-[var(--accent)] border-t-transparent animate-spin" />
        <p className="text-[var(--muted-fg)] text-sm">Setting up your experience…</p>
      </div>
    )
  }

  const progress = ((step) / allQuestions.length) * 100

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-12 bg-[var(--bg)]">
      <div className="w-full max-w-lg space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Quick setup · {allQuestions.length - step} questions left
          </div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Let's personalise your experience</h1>
          <p className="text-[var(--muted-fg)] text-sm">Your answers shape how EconPulse teaches you. You can change this anytime.</p>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-full rounded-full bg-[var(--muted)]">
          <div
            className="h-1.5 rounded-full bg-[var(--accent)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Section label */}
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--muted-fg)]">
          {isStyleQ ? 'Learning style' : 'Difficulty preference'}
        </div>

        {/* Question */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--fg)] leading-snug">{current.question}</h2>
          <div className="grid gap-3">
            {current.options.map(({ label, value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => handleAnswer(value)}
                className="group flex items-center gap-3 w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3.5 text-left text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/5 active:scale-[0.99] transition-all"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)] group-hover:bg-[var(--accent)]/15 transition-colors">
                  <Icon className="h-4 w-4 text-[var(--muted-fg)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                {label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => router.push('/dashboard')}
          className="w-full text-center text-xs text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
        >
          Skip — use default settings
        </button>
      </div>
    </div>
  )
}
