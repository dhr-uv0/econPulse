'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { CurriculumModule, CurriculumTier } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { BookOpen, Check, Clock, ChevronRight, Lock, Play, Target, Trophy, Briefcase, TrendingUp, Zap } from 'lucide-react'

interface Props {
  modules: CurriculumModule[]
  progressMap: Map<string, string>
}

const TIER_ORDER: (CurriculumTier | 'all')[] = ['all', 'FOUNDATIONS', 'INTERMEDIATE', 'AP', 'IB', 'OLYMPIAD', 'DECA']

const TIER_META: Record<string, { label: string; color: string; description: string; icon: React.ElementType }> = {
  all:          { label: 'All',          color: '#71717a', description: '',                                                icon: BookOpen },
  FOUNDATIONS:  { label: 'Foundations',  color: '#22c55e', description: 'Zero to first principles — no prior knowledge',  icon: BookOpen },
  INTERMEDIATE: { label: 'Intermediate', color: '#3b82f6', description: 'Essential micro & macro — build real rigour',    icon: TrendingUp },
  AP:           { label: 'AP Econ',      color: '#f59e0b', description: 'AP Micro + AP Macro — full exam prep',           icon: Target },
  IB:           { label: 'IB Econ',      color: '#8b5cf6', description: 'IB SL + HL — full syllabus coverage',           icon: BookOpen },
  OLYMPIAD:     { label: 'Olympiad',     color: '#ef4444', description: 'AEO / IEO — university-level competition prep',  icon: Trophy },
  DECA:         { label: 'DECA',         color: '#06b6d4', description: 'Business + economics competitive events',        icon: Briefcase },
}

const TIER_ICON_MAP: Record<string, React.ElementType> = {
  BookOpen, TrendingUp, Target, Trophy, Briefcase, Zap,
}

export function CurriculumBrowser({ modules, progressMap }: Props) {
  const [tier, setTier] = useState<CurriculumTier | 'all'>('all')
  const [search, setSearch] = useState('')

  const availableTiers = TIER_ORDER.filter(
    (t) => t === 'all' || modules.some((m) => (m.tier ?? inferTier(m.track)) === t)
  )

  const filtered = modules.filter((m) => {
    const mTier = m.tier ?? inferTier(m.track)
    const matchesTier = tier === 'all' || mTier === tier
    const matchesSearch =
      !search ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase()) ||
      m.lessons.some((l) => l.title.toLowerCase().includes(search.toLowerCase()))
    return matchesTier && matchesSearch
  })

  // Group by tier when showing all
  const grouped = tier === 'all' && !search
    ? TIER_ORDER.filter((t) => t !== 'all').reduce<Record<string, CurriculumModule[]>>((acc, t) => {
        const items = filtered.filter((m) => (m.tier ?? inferTier(m.track)) === t)
        if (items.length) acc[t] = items
        return acc
      }, {})
    : null

  function moduleProgress(mod: CurriculumModule) {
    if (!mod.lessons.length) return 0
    const done = mod.lessons.filter((l) => progressMap.get(l.id) === 'completed').length
    return Math.round((done / mod.lessons.length) * 100)
  }

  function nextLesson(mod: CurriculumModule) {
    return mod.lessons.find((l) => progressMap.get(l.id) !== 'completed')
  }

  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0)

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Curriculum</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          {totalLessons} lessons across {modules.length} modules · {TIER_ORDER.filter(t => t !== 'all' && modules.some(m => (m.tier ?? inferTier(m.track)) === t)).length} learning tiers
        </p>
      </div>

      {/* Search */}
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search lessons…"
        className="h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-4 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      />

      {/* Tier filter pills */}
      <div className="flex flex-wrap gap-2" role="group">
        {availableTiers.map((t) => {
          const meta = TIER_META[t]
          const active = tier === t
          return (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all',
                active
                  ? 'border-transparent text-white'
                  : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)] hover:border-[var(--accent)]/40'
              )}
              style={active ? { backgroundColor: meta.color, borderColor: meta.color } : {}}
            >
              {meta.label}
            </button>
          )
        })}
      </div>

      {/* Active tier description */}
      {tier !== 'all' && TIER_META[tier]?.description && (
        <p className="text-sm text-[var(--muted-fg)]">{TIER_META[tier].description}</p>
      )}

      {/* Module grid — grouped by tier when "All" */}
      {grouped ? (
        <div className="space-y-10">
          {Object.entries(grouped).map(([t, mods]) => {
            const meta = TIER_META[t]
            const TierIcon = meta.icon
            return (
              <section key={t}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: `${meta.color}20` }}>
                    <TierIcon className="h-4 w-4" style={{ color: meta.color }} />
                  </div>
                  <h2 className="text-base font-bold text-[var(--fg)]">{meta.label}</h2>
                  <span className="text-xs text-[var(--muted-fg)]">— {meta.description}</span>
                </div>
                <ModuleGrid mods={mods} progressMap={progressMap} moduleProgress={moduleProgress} nextLesson={nextLesson} />
              </section>
            )
          })}
        </div>
      ) : (
        <ModuleGrid mods={filtered} progressMap={progressMap} moduleProgress={moduleProgress} nextLesson={nextLesson} />
      )}

      {filtered.length === 0 && (
        <p className="text-center py-16 text-[var(--muted-fg)]">No modules match your search.</p>
      )}
    </div>
  )
}

function ModuleGrid({
  mods,
  progressMap,
  moduleProgress,
  nextLesson,
}: {
  mods: CurriculumModule[]
  progressMap: Map<string, string>
  moduleProgress: (m: CurriculumModule) => number
  nextLesson: (m: CurriculumModule) => CurriculumModule['lessons'][0] | undefined
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {mods.map((mod) => {
        const pct = moduleProgress(mod)
        const next = nextLesson(mod)
        const hasLessons = mod.lessons.length > 0
        const mTier = mod.tier ?? inferTier(mod.track)
        const tierMeta = TIER_META[mTier] ?? TIER_META['all']
        const ModIcon = TIER_ICON_MAP[mod.icon] ?? BookOpen

        return (
          <Card key={mod.id} className="card-hover flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${mod.color ?? tierMeta.color}20` }}
                >
                  <ModIcon className="h-5 w-5" style={{ color: mod.color ?? tierMeta.color }} />
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0"
                  style={{ backgroundColor: `${tierMeta.color}18`, color: tierMeta.color }}
                >
                  {tierMeta.label}
                </span>
              </div>
              <CardTitle className="mt-3 text-base leading-snug">{mod.title}</CardTitle>
              <p className="text-sm text-[var(--muted-fg)] leading-relaxed">{mod.description}</p>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[var(--muted-fg)]">
                  <span>{mod.lessons.length} lessons · {mod.estimatedHours}h</span>
                  <span>{pct}% complete</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--muted)] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: mod.color ?? tierMeta.color }}
                  />
                </div>
              </div>

              {hasLessons && (
                <ul className="space-y-1">
                  {mod.lessons.slice(0, 3).map((lesson) => {
                    const status = progressMap.get(lesson.id)
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/curriculum/${mod.id}/${lesson.id}`}
                          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-[var(--muted)] transition-colors"
                        >
                          <div className={cn(
                            'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                            status === 'completed' ? 'bg-green-500/15 text-green-500' :
                            status === 'in_progress' ? 'text-[var(--accent)]' :
                            'bg-[var(--muted)] text-[var(--muted-fg)]'
                          )} style={status === 'in_progress' ? { backgroundColor: `${mod.color ?? tierMeta.color}20` } : {}}>
                            {status === 'completed' ? <Check className="h-3 w-3" /> :
                             status === 'in_progress' ? <Play className="h-2.5 w-2.5" /> :
                             <Clock className="h-2.5 w-2.5" />}
                          </div>
                          <span className={cn('flex-1 truncate', status === 'completed' ? 'text-[var(--muted-fg)] line-through' : 'text-[var(--fg)]')}>
                            {lesson.title}
                          </span>
                          <span className="text-[10px] text-[var(--muted-fg)] shrink-0">{lesson.estimatedMinutes}m</span>
                        </Link>
                      </li>
                    )
                  })}
                  {mod.lessons.length > 3 && (
                    <li className="pl-2 text-xs text-[var(--muted-fg)]">+{mod.lessons.length - 3} more lessons</li>
                  )}
                </ul>
              )}

              {!hasLessons && (
                <div className="flex items-center gap-2 rounded-lg border border-dashed border-[var(--border)] p-3 text-sm text-[var(--muted-fg)]">
                  <Lock className="h-4 w-4 shrink-0" /> Content coming soon
                </div>
              )}

              {hasLessons && (
                <Link href={next ? `/curriculum/${mod.id}/${next.id}` : `/curriculum/${mod.id}`}>
                  <Button
                    variant={pct === 0 ? 'default' : 'outline'}
                    size="sm"
                    className="w-full gap-1.5"
                    style={pct === 0 ? { backgroundColor: mod.color ?? tierMeta.color, color: '#fff', border: 'none' } : {}}
                  >
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
  )
}

function inferTier(track: string): CurriculumTier {
  if (track === 'FOUNDATIONS') return 'FOUNDATIONS'
  if (track === 'INTERMEDIATE') return 'INTERMEDIATE'
  if (track === 'AP') return 'AP'
  if (track === 'IB_SL' || track === 'IB_HL' || track === 'IB') return 'IB'
  if (track === 'AEO_IEO' || track === 'OLYMPIAD') return 'OLYMPIAD'
  if (track === 'DECA') return 'DECA'
  return 'FOUNDATIONS'
}
