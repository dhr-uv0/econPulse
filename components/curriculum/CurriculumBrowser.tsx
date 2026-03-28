'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { CurriculumModule } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { BookOpen, Check, Clock, ChevronRight, Lock, Play } from 'lucide-react'

interface Props {
  modules: CurriculumModule[]
  progressMap: Map<string, string>
}

type TrackFilter = 'all' | 'IB_SL' | 'IB_HL' | 'AEO_IEO' | 'DECA' | 'PRINCIPLES' | 'ADVANCED'

const TRACK_LABELS: Record<string, string> = {
  all: 'All Tracks',
  IB_SL: 'IB SL',
  IB_HL: 'IB HL',
  AEO_IEO: 'AEO / IEO',
  DECA: 'DECA',
  PRINCIPLES: 'Principles',
  ADVANCED: 'Advanced',
}

export function CurriculumBrowser({ modules, progressMap }: Props) {
  const [track, setTrack] = useState<TrackFilter>('all')
  const [search, setSearch] = useState('')

  const tracks = ['all', ...new Set(modules.map((m) => m.track))] as TrackFilter[]

  const filtered = modules.filter((m) => {
    const matchesTrack = track === 'all' || m.track === track
    const matchesSearch =
      !search ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase())
    return matchesTrack && matchesSearch
  })

  function moduleProgress(mod: CurriculumModule) {
    if (!mod.lessons.length) return 0
    const done = mod.lessons.filter((l) => progressMap.get(l.id) === 'completed').length
    return Math.round((done / mod.lessons.length) * 100)
  }

  function nextLesson(mod: CurriculumModule) {
    return mod.lessons.find((l) => progressMap.get(l.id) !== 'completed')
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Curriculum</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          {modules.reduce((s, m) => s + m.lessons.length, 0)} lessons across {modules.length} modules
        </p>
      </div>

      {/* Search + track filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lessons…"
          className="h-10 flex-1 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          aria-label="Search curriculum"
        />
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by exam track">
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => setTrack(t)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-semibold transition-all',
                track === t
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-fg)]'
                  : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)] hover:text-[var(--fg)]'
              )}
            >
              {TRACK_LABELS[t] ?? t}
            </button>
          ))}
        </div>
      </div>

      {/* Module grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((mod) => {
          const pct = moduleProgress(mod)
          const next = nextLesson(mod)
          const hasLessons = mod.lessons.length > 0

          return (
            <Card key={mod.id} className="card-hover flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${mod.color}20` }}
                  >
                    <BookOpen className="h-5 w-5" style={{ color: mod.color }} />
                  </div>
                  <Badge variant="muted" className="text-[10px] uppercase tracking-wider shrink-0">
                    {TRACK_LABELS[mod.track] ?? mod.track}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base leading-snug">{mod.title}</CardTitle>
                <p className="text-sm text-[var(--muted-fg)] leading-relaxed">{mod.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between gap-4">
                {/* Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[var(--muted-fg)]">
                    <span>{mod.lessons.length} lessons · {mod.estimatedHours}h</span>
                    <span>{pct}% complete</span>
                  </div>
                  <Progress
                    value={pct}
                    className="h-1.5"
                    indicatorClassName=""
                    style={{ '--indicator': mod.color } as React.CSSProperties}
                  />
                </div>

                {/* Lesson list preview */}
                {mod.lessons.length > 0 && (
                  <ul className="space-y-1">
                    {mod.lessons.slice(0, 3).map((lesson) => {
                      const status = progressMap.get(lesson.id)
                      return (
                        <li key={lesson.id}>
                          <Link
                            href={`/curriculum/${mod.id}/${lesson.id}`}
                            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-[var(--muted)] transition-colors group"
                          >
                            <div className={cn(
                              'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                              status === 'completed' ? 'bg-green-500/15 text-green-500' :
                              status === 'in_progress' ? 'bg-[var(--accent)]/15 text-[var(--accent)]' :
                              'bg-[var(--muted)] text-[var(--muted-fg)]'
                            )}>
                              {status === 'completed'
                                ? <Check className="h-3 w-3" />
                                : status === 'in_progress'
                                ? <Play className="h-2.5 w-2.5" />
                                : <Clock className="h-2.5 w-2.5" />
                              }
                            </div>
                            <span className={cn(
                              'flex-1 truncate',
                              status === 'completed' ? 'text-[var(--muted-fg)] line-through' : 'text-[var(--fg)]'
                            )}>
                              {lesson.title}
                            </span>
                            <span className="text-[10px] text-[var(--muted-fg)] shrink-0">
                              {lesson.estimatedMinutes}m
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                    {mod.lessons.length > 3 && (
                      <li className="pl-2 text-xs text-[var(--muted-fg)]">
                        +{mod.lessons.length - 3} more lessons
                      </li>
                    )}
                  </ul>
                )}

                {!hasLessons && (
                  <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] p-3 text-sm text-[var(--muted-fg)]">
                    <Lock className="h-4 w-4 shrink-0" />
                    Content coming soon
                  </div>
                )}

                {/* CTA */}
                {hasLessons && (
                  <Link href={next ? `/curriculum/${mod.id}/${next.id}` : `/curriculum/${mod.id}`}>
                    <Button variant={pct === 0 ? 'default' : 'outline'} size="sm" className="w-full gap-1.5">
                      {pct === 0 ? 'Start module' : pct === 100 ? 'Review' : 'Continue'}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
