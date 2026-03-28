'use client'

import Link from 'next/link'
import type { CurriculumModule, QuizResult } from '@/lib/types'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { Target, ChevronRight, Check, X, Clock } from 'lucide-react'

interface Props {
  modules: CurriculumModule[]
  recentResults: QuizResult[]
  userId: string
}

export function QuizHub({ modules, recentResults }: Props) {
  const withQuestions = modules.filter((m) => m.lessons.some((l) => l.quiz.length > 0))

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Practice & Quiz</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          Immediate feedback, detailed explanations, and Olympiad-level challenge problems.
        </p>
      </div>

      {/* Recent results */}
      {recentResults.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-fg)] mb-3">Recent Results</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {recentResults.slice(0, 4).map((r) => {
              const pct = Math.round((r.score / r.total_questions) * 100)
              return (
                <Card key={r.id} className="p-4 flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${r.passed ? 'bg-green-500/15' : 'bg-red-500/15'}`}>
                    {r.passed
                      ? <Check className="h-4 w-4 text-green-500" />
                      : <X className="h-4 w-4 text-red-500" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[var(--fg)]">{r.unit_id.replace('-', ' ')}</div>
                    <div className="text-xs text-[var(--muted-fg)]">{formatDate(r.completed_at)}</div>
                  </div>
                  <Badge variant={r.passed ? 'success' : 'danger'} className="shrink-0">
                    {pct}%
                  </Badge>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Practice by module */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted-fg)] mb-3">
          Practice by Module
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const totalQuestions = mod.lessons.reduce((s, l) => s + l.quiz.length, 0)
            if (totalQuestions === 0) return null
            const firstLesson = mod.lessons.find((l) => l.quiz.length > 0)

            return (
              <Card key={mod.id} className="card-hover p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${mod.color}20` }}
                  >
                    <Target className="h-5 w-5" style={{ color: mod.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[var(--fg)] text-sm leading-snug">{mod.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-[var(--muted-fg)]">
                      <Clock className="h-3 w-3" />
                      {totalQuestions} questions
                    </div>
                  </div>
                </div>

                {firstLesson && (
                  <Link href={`/curriculum/${mod.id}/${firstLesson.id}?tab=quiz`}>
                    <Button variant="outline" size="sm" className="w-full gap-1.5">
                      Practice
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                )}
              </Card>
            )
          })}
        </div>
      </div>

      {/* Question type legend */}
      <Card className="p-5">
        <h3 className="font-bold text-[var(--fg)] mb-3">Question Types Available</h3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            { type: 'Multiple Choice', desc: 'Immediate feedback with full explanation' },
            { type: 'Data Response', desc: 'Stimulus + structured sub-questions (IB Paper 2)' },
            { type: 'Extended Essay', desc: 'AI-graded against real IB criteria (IB Paper 1)' },
            { type: 'Quantitative', desc: 'Calculation problems with step-by-step solutions' },
            { type: 'Diagram', desc: 'Label and reconstruct economic graphs' },
            { type: 'Olympiad Challenge', desc: 'Advanced synthesis problems for AEO/IEO prep' },
          ].map(({ type, desc }) => (
            <div key={type} className="flex items-start gap-2">
              <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
              <div>
                <div className="font-semibold text-[var(--fg)]">{type}</div>
                <div className="text-xs text-[var(--muted-fg)]">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
