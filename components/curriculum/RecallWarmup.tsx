'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react'

interface Props {
  questions: QuizQuestion[]
}

export function RecallWarmup({ questions }: Props) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [done, setDone] = useState(false)

  if (!questions.length) return null

  const q = questions[current]

  function handleSubmit() {
    if (selected === null) return
    setSubmitted(true)
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      setDone(true)
    }
  }

  return (
    <Card className="border border-indigo-500/20 bg-indigo-500/3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Quick Recall Check
          </span>
          <span className="text-xs text-[var(--muted-fg)]">
            {questions.length} question{questions.length !== 1 ? 's' : ''} · from previous lessons
          </span>
          {done && <Check className="h-3.5 w-3.5 text-green-500" />}
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-[var(--muted-fg)]" /> : <ChevronDown className="h-4 w-4 text-[var(--muted-fg)]" />}
      </button>

      {open && !done && (
        <CardContent className="pt-0 pb-5 space-y-4">
          <div className="border-t border-indigo-500/10 pt-4">
            <p className="text-sm font-medium text-[var(--fg)] mb-3">{q.question}</p>
            {q.options && (
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = selected === i
                  const correct = q.correctAnswer === i
                  let variant: 'default' | 'correct' | 'wrong' | 'show-correct' = 'default'
                  if (submitted) {
                    if (isSelected && correct) variant = 'correct'
                    else if (isSelected && !correct) variant = 'wrong'
                    else if (!isSelected && correct) variant = 'show-correct'
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => !submitted && setSelected(i)}
                      disabled={submitted}
                      className={cn(
                        'w-full rounded-lg border px-3 py-2 text-left text-sm transition-all',
                        variant === 'default' && !isSelected && 'border-[var(--border)] hover:border-indigo-400/50 text-[var(--fg)]',
                        variant === 'default' && isSelected && 'border-indigo-500 bg-indigo-500/10 text-[var(--fg)]',
                        variant === 'correct' && 'border-green-500 bg-green-500/15 text-green-700 dark:text-green-400',
                        variant === 'wrong' && 'border-red-500 bg-red-500/15 text-red-700 dark:text-red-400',
                        variant === 'show-correct' && 'border-green-500/40 bg-green-500/5 text-[var(--muted-fg)]',
                      )}
                    >
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
            )}

            {submitted && (
              <div className={cn(
                'mt-3 rounded-lg border p-3 text-xs leading-relaxed',
                selected === q.correctAnswer
                  ? 'border-green-500/30 bg-green-500/10 text-green-800 dark:text-green-300'
                  : 'border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-300'
              )}>
                <span className="font-bold">
                  {selected === q.correctAnswer ? '✓ Correct! ' : '✗ Incorrect — '}
                </span>
                {q.explanation}
              </div>
            )}

            <div className="flex justify-end mt-3">
              {!submitted ? (
                <Button size="sm" variant="outline" onClick={handleSubmit} disabled={selected === null}>
                  Check
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={handleNext}>
                  {current < questions.length - 1 ? 'Next' : 'Done'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      )}

      {open && done && (
        <CardContent className="pt-0 pb-4">
          <div className="border-t border-indigo-500/10 pt-3 text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
            <Check className="h-4 w-4" />
            Great recall! Now let&apos;s build on that.
          </div>
        </CardContent>
      )}
    </Card>
  )
}
