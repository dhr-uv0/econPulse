'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, X, Trophy, RotateCcw, ChevronRight } from 'lucide-react'

interface Props {
  questions: QuizQuestion[]
  lessonId: string
  moduleId: string
  userId: string
  alreadyPassed: boolean
  onPass: () => void
}

export function LessonQuiz({ questions, lessonId, moduleId, userId, alreadyPassed, onPass }: Props) {
  const supabase = createClient()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [submitted, setSubmitted] = useState(false)
  const [quizDone, setQuizDone] = useState(false)

  if (!questions.length) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-[var(--muted-fg)] py-12">
          <p>No quiz questions for this lesson yet.</p>
          <Button variant="gold" className="mt-4" onClick={onPass}>
            Mark lesson complete
          </Button>
        </CardContent>
      </Card>
    )
  }

  const q = questions[current]
  const score = answers.filter((a, i) => a === questions[i].correctAnswer).length
  const passed = quizDone && score / questions.length >= 0.6

  async function handleSubmit() {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[current] = selected
    setAnswers(newAnswers)
    setSubmitted(true)
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      finishQuiz()
    }
  }

  async function finishQuiz() {
    const finalScore = answers.filter((a, i) => a === questions[i].correctAnswer).length
    const pass = finalScore / questions.length >= 0.6
    setQuizDone(true)

    await supabase.from('quiz_results').insert({
      user_id: userId,
      unit_id: moduleId,
      score: finalScore,
      total_questions: questions.length,
      passed: pass,
      answers: { answers },
      completed_at: new Date().toISOString(),
    })

    if (pass && !alreadyPassed) {
      onPass()
    }
  }

  function reset() {
    setCurrent(0)
    setSelected(null)
    setAnswers(new Array(questions.length).fill(null))
    setSubmitted(false)
    setQuizDone(false)
  }

  // Results screen
  if (quizDone) {
    return (
      <Card>
        <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-6">
          <div className={cn(
            'flex h-20 w-20 items-center justify-center rounded-full',
            passed ? 'bg-green-500/15' : 'bg-red-500/15'
          )}>
            {passed
              ? <Trophy className="h-10 w-10 text-green-500" />
              : <RotateCcw className="h-10 w-10 text-red-500" />
            }
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[var(--fg)] mb-1">
              {passed ? 'Quiz Passed!' : 'Not quite — try again'}
            </h3>
            <p className="text-[var(--muted-fg)]">
              You scored {score} out of {questions.length} ({Math.round(score / questions.length * 100)}%)
            </p>
            {passed && (
              <div className="mt-2">
                <Badge variant="gold" className="gap-1 text-sm px-3 py-1">
                  <Check className="h-3.5 w-3.5" />
                  Lesson Complete · +50 XP
                </Badge>
              </div>
            )}
          </div>

          {/* Score breakdown */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-center">
              <div className="text-2xl font-black text-green-500">{score}</div>
              <div className="text-xs text-[var(--muted-fg)]">Correct</div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-center">
              <div className="text-2xl font-black text-red-500">{questions.length - score}</div>
              <div className="text-xs text-[var(--muted-fg)]">Incorrect</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={reset} className="gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" />
              Retry
            </Button>
            {passed && (
              <Button variant="gold" onClick={() => {}} className="gap-1.5">
                Next lesson
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Question screen
  const isCorrect = submitted && selected === q.correctAnswer

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--muted-fg)]">Question {current + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-2 rounded-full transition-all',
                i < current ? 'w-4 bg-green-500' :
                i === current ? 'w-6 bg-[var(--accent)]' :
                'w-2 bg-[var(--muted)]'
              )}
            />
          ))}
        </div>
        <Badge variant="muted">{q.difficulty}</Badge>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-5">
          {/* Question */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                {q.type === 'mcq' ? 'Multiple Choice' :
                 q.type === 'quantitative' ? 'Quantitative' : q.type}
              </Badge>
              <Badge variant="muted" className="text-[10px]">{q.marks} mark{q.marks !== 1 ? 's' : ''}</Badge>
            </div>
            <p className="text-[var(--fg)] font-medium leading-relaxed">{q.question}</p>
          </div>

          {/* Options (MCQ) */}
          {q.options && q.options.length > 0 && (
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
                      'w-full rounded-xl border-2 px-4 py-3 text-left text-sm transition-all',
                      variant === 'default' && !isSelected && 'border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--fg)]',
                      variant === 'default' && isSelected && 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]',
                      variant === 'correct' && 'border-green-500 bg-green-500/15 text-green-700 dark:text-green-400',
                      variant === 'wrong' && 'border-red-500 bg-red-500/15 text-red-700 dark:text-red-400',
                      variant === 'show-correct' && 'border-green-500/50 bg-green-500/5 text-[var(--muted-fg)]',
                    )}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold',
                        isSelected && !submitted ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-current',
                        variant === 'correct' && 'border-green-500 bg-green-500 text-white',
                        variant === 'wrong' && 'border-red-500 bg-red-500 text-white',
                      )}>
                        {submitted
                          ? (variant === 'correct' || variant === 'show-correct') ? <Check className="h-3 w-3" /> : variant === 'wrong' ? <X className="h-3 w-3" /> : String.fromCharCode(65 + i)
                          : String.fromCharCode(65 + i)
                        }
                      </div>
                      {opt}
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* Explanation (after submit) */}
          {submitted && (
            <div className={cn(
              'rounded-xl border p-4 text-sm leading-relaxed',
              isCorrect ? 'border-green-500/30 bg-green-500/10 text-green-800 dark:text-green-300' :
              'border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-300'
            )}>
              <div className="flex items-center gap-2 font-bold mb-2">
                {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </div>
              <p>{q.explanation}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2">
            {!submitted ? (
              <Button
                variant="gold"
                onClick={handleSubmit}
                disabled={selected === null}
                className="gap-1.5"
              >
                Submit answer
              </Button>
            ) : (
              <Button variant="gold" onClick={handleNext} className="gap-1.5">
                {current < questions.length - 1 ? 'Next question' : 'See results'}
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {alreadyPassed && (
        <p className="text-center text-xs text-green-500">
          <Check className="inline h-3.5 w-3.5 mr-1" />
          You&apos;ve already passed this lesson
        </p>
      )}
    </div>
  )
}
