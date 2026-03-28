'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import type { Profile, Streak, CurriculumProgress, QuizResult } from '@/lib/types'
import { levelFromXP, clampProgress } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { StreakHeatmap } from '@/components/dashboard/StreakHeatmap'
import { MasteryRadar } from '@/components/dashboard/MasteryRadar'
import { QuizScoreTrend } from '@/components/dashboard/QuizScoreTrend'
import { WeeklyDigest } from '@/components/dashboard/WeeklyDigest'
import {
  Flame, Zap, BookOpen, Target, ArrowRight,
  TrendingUp, Clock, Award, ChevronRight,
} from 'lucide-react'

interface Props {
  profile: Profile | null
  streak: Streak | null
  progress: CurriculumProgress[]
  recentQuizzes: QuizResult[]
  dueCardCount: number
}

const MODULES = [
  { id: 'ib-intro',   label: 'IB: Intro to Economics',  color: 'bg-blue-500'   },
  { id: 'ib-micro',   label: 'IB: Microeconomics',       color: 'bg-indigo-500' },
  { id: 'ib-macro',   label: 'IB: Macroeconomics',       color: 'bg-purple-500' },
  { id: 'ib-intl',    label: 'IB: International Econ',   color: 'bg-violet-500' },
  { id: 'aeo-micro',  label: 'AEO: Advanced Micro',      color: 'bg-amber-500'  },
  { id: 'aeo-macro',  label: 'AEO: Advanced Macro',      color: 'bg-orange-500' },
  { id: 'deca',       label: 'DECA Economics',            color: 'bg-green-500'  },
  { id: 'principles', label: 'Principles of Econ',        color: 'bg-teal-500'   },
]

export function DashboardHome({ profile, streak, progress, recentQuizzes, dueCardCount }: Props) {
  const xp = profile?.xp_points ?? 0
  const { level, title: levelTitle, nextLevelXP } = levelFromXP(xp)
  const xpPct = clampProgress((xp / nextLevelXP) * 100)

  const completedCount = useMemo(
    () => progress.filter((p) => p.status === 'completed').length,
    [progress]
  )
  const totalLessons = 600
  const overallMastery = clampProgress(Math.round((completedCount / totalLessons) * 100))

  const moduleProgress = useMemo(() => {
    return MODULES.map((mod) => {
      const modProgress = progress.filter((p) => p.module_name === mod.id)
      const done = modProgress.filter((p) => p.status === 'completed').length
      const total = Math.max(modProgress.length, 1)
      return { ...mod, pct: clampProgress(Math.round((done / total) * 100)) }
    })
  }, [progress])

  const avgScore = useMemo(() => {
    if (!recentQuizzes.length) return null
    const avg = recentQuizzes.reduce((s, q) => s + (q.score / q.total_questions) * 100, 0) / recentQuizzes.length
    return Math.round(avg)
  }, [recentQuizzes])

  const greeting = () => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      {/* Welcome header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">
            {greeting()}, {profile?.full_name?.split(' ')[0] ?? 'Scholar'}.
          </h1>
          <p className="text-[var(--muted-fg)] text-sm mt-0.5">
            {dueCardCount > 0
              ? `You have ${dueCardCount} flashcard${dueCardCount !== 1 ? 's' : ''} due for review.`
              : 'All caught up on reviews. Keep going!'}
          </p>
        </div>
        <div className="flex gap-2">
          {dueCardCount > 0 && (
            <Link href="/flashcards">
              <Button variant="gold" size="sm" className="gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                Review {dueCardCount} cards
              </Button>
            </Link>
          )}
          <Link href="/curriculum">
            <Button variant="outline" size="sm" className="gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              Continue learning
            </Button>
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {/* Streak */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-fg)]">Streak</span>
            <Flame className="h-4 w-4 text-orange-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{streak?.current_streak ?? 0}</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">
            days · best {streak?.longest_streak ?? 0}
          </div>
        </Card>

        {/* XP & Level */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-fg)]">Level</span>
            <Award className="h-4 w-4 text-[var(--accent)]" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{level}</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5 truncate">{levelTitle}</div>
          <Progress value={xpPct} className="mt-2 h-1.5" />
          <div className="text-[10px] text-[var(--muted-fg)] mt-1">{xp.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</div>
        </Card>

        {/* Mastery */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-fg)]">Mastery</span>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{overallMastery}%</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">{completedCount} / {totalLessons} lessons</div>
          <Progress value={overallMastery} className="mt-2 h-1.5" indicatorClassName="bg-green-500" />
        </Card>

        {/* Quiz avg */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-fg)]">Avg Score</span>
            <Target className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">
            {avgScore !== null ? `${avgScore}%` : '—'}
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">last {recentQuizzes.length} quizzes</div>
        </Card>
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column: streak heatmap + module progress */}
        <div className="space-y-6 lg:col-span-2">
          {/* Streak heatmap */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                Study Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StreakHeatmap />
            </CardContent>
          </Card>

          {/* Module Progress */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  Module Progress
                </CardTitle>
                <Link href="/progress" className="text-xs text-[var(--accent)] hover:underline flex items-center gap-0.5">
                  View all <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {moduleProgress.map(({ id, label, color, pct }) => (
                <div key={id} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--fg)] font-medium">{label}</span>
                    <span className="text-[var(--muted-fg)]">{pct}%</span>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-[var(--muted)]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${color}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent quiz scores */}
          {recentQuizzes.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-500" />
                  Quiz Score Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <QuizScoreTrend quizzes={recentQuizzes} />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right column: radar + what to study */}
        <div className="space-y-6">
          {/* Mastery radar */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Mastery by Track</CardTitle>
            </CardHeader>
            <CardContent>
              <MasteryRadar progress={progress} />
            </CardContent>
          </Card>

          {/* What to study next */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-[var(--accent)]" />
                Study Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Continue: Supply & Demand', sub: 'IB Microeconomics · 8 min', href: '/curriculum', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
                { label: 'Review flashcards', sub: `${dueCardCount} cards due`, href: '/flashcards', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
                { label: 'Practice quiz', sub: 'Elasticities · 5 questions', href: '/quiz', color: 'bg-green-500/10 text-green-600 dark:text-green-400' },
              ].map(({ label, sub, href, color }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between rounded-lg border border-[var(--border)] p-3 hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-all group"
                >
                  <div>
                    <div className="text-sm font-semibold text-[var(--fg)]">{label}</div>
                    <div className="text-xs text-[var(--muted-fg)]">{sub}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--muted-fg)] group-hover:text-[var(--accent)] transition-colors" />
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Target exam badge */}
          {/* Weekly AI digest */}
          <WeeklyDigest />

          {profile?.target_exam && (
            <Card className="bg-[var(--navy-900,#0f1729)] border-[var(--accent)]/20">
              <CardContent className="pt-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
                  Target Exam
                </div>
                <div className="text-xl font-extrabold text-white mb-1">
                  {profile.target_exam.replace('_', ' ')}
                </div>
                <p className="text-sm text-white/60">
                  Keep your daily goal of {profile.weekly_study_goal_hours}h/week.
                </p>
                <Link href="/progress" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline">
                  View readiness score <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
