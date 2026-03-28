'use client'

import type { Profile, CurriculumProgress, QuizResult, Streak } from '@/lib/types'
import { levelFromXP, clampProgress } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { MasteryRadar } from './MasteryRadar'
import { QuizScoreTrend } from './QuizScoreTrend'
import { StreakHeatmap } from './StreakHeatmap'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Award, Target, Clock, Flame } from 'lucide-react'

interface Props {
  profile: Profile | null
  progress: CurriculumProgress[]
  quizzes: QuizResult[]
  streak: Streak | null
}

const EXAM_TRACKS = [
  { key: 'IB_SL',       label: 'IB SL',       threshold: 70 },
  { key: 'IB_HL',       label: 'IB HL',        threshold: 80 },
  { key: 'AEO',         label: 'AEO',          threshold: 75 },
  { key: 'IEO',         label: 'IEO',          threshold: 85 },
  { key: 'DECA',        label: 'DECA',         threshold: 70 },
  { key: 'PRINCIPLES',  label: 'Principles',   threshold: 65 },
]

const MODULE_COLORS: Record<string, string> = {
  'ib-intro':   '#3b82f6',
  'ib-micro':   '#6366f1',
  'ib-macro':   '#8b5cf6',
  'ib-intl':    '#7c3aed',
  'aeo-micro':  '#f59e0b',
  'aeo-macro':  '#d97706',
  'deca':       '#10b981',
  'principles': '#14b8a6',
}

export function ProgressDashboard({ profile, progress, quizzes, streak }: Props) {
  const xp = profile?.xp_points ?? 0
  const { level, title: levelTitle, nextLevelXP } = levelFromXP(xp)

  const completedLessons = progress.filter((p) => p.status === 'completed').length
  const totalLessons = 600
  const overallPct = clampProgress(Math.round((completedLessons / totalLessons) * 100))

  const avgScore = quizzes.length
    ? Math.round(quizzes.reduce((s, q) => s + (q.score / q.total_questions) * 100, 0) / quizzes.length)
    : null

  const totalStudyHours = Math.round(
    progress.reduce((s, p) => s + (p.time_spent_seconds ?? 0), 0) / 3600
  )

  // Group progress by module
  const moduleGroups = Object.entries(
    progress.reduce<Record<string, { done: number; total: number }>>((acc, p) => {
      if (!acc[p.module_name]) acc[p.module_name] = { done: 0, total: 0 }
      acc[p.module_name].total++
      if (p.status === 'completed') acc[p.module_name].done++
      return acc
    }, {})
  ).map(([mod, { done, total }]) => ({
    mod,
    pct: clampProgress(Math.round((done / total) * 100)),
  }))

  // Weekly study bar chart data (simulated)
  const weeklyData = Array.from({ length: 8 }, (_, i) => ({
    week: `W${i + 1}`,
    hours: Math.max(0, Math.round(totalStudyHours / 8 + (Math.random() - 0.5) * 2)),
  }))

  // Exam readiness
  const targetExam = profile?.target_exam
  const targetTrack = EXAM_TRACKS.find((t) => t.key === targetExam)
  const readinessPct = targetTrack
    ? clampProgress(Math.round((overallPct / targetTrack.threshold) * 100))
    : null

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Progress & Analytics</h1>
        <p className="text-[var(--muted-fg)] mt-1">Your complete learning journey at a glance</p>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Level</span>
            <Award className="h-4 w-4 text-[var(--accent)]" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{level}</div>
          <div className="text-xs text-[var(--muted-fg)] truncate mt-0.5">{levelTitle}</div>
          <Progress value={clampProgress((xp / nextLevelXP) * 100)} className="mt-2 h-1.5" />
          <div className="text-[10px] text-[var(--muted-fg)] mt-1">{xp.toLocaleString()} XP</div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Mastery</span>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{overallPct}%</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">{completedLessons} / {totalLessons} lessons</div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Avg Score</span>
            <Target className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{avgScore !== null ? `${avgScore}%` : '—'}</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">{quizzes.length} quizzes taken</div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Study Time</span>
            <Clock className="h-4 w-4 text-purple-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{totalStudyHours}h</div>
          <div className="text-xs text-[var(--muted-fg)] mt-0.5">total logged</div>
        </Card>
      </div>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Study activity */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                Study Activity (Last Year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StreakHeatmap />
              <div className="mt-3 flex items-center gap-4 text-xs text-[var(--muted-fg)]">
                <span>Current streak: <strong className="text-[var(--fg)]">{streak?.current_streak ?? 0} days</strong></span>
                <span>Longest: <strong className="text-[var(--fg)]">{streak?.longest_streak ?? 0} days</strong></span>
              </div>
            </CardContent>
          </Card>

          {/* Weekly hours */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Weekly Study Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={weeklyData} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="week" tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} tickLine={false} />
                  <YAxis tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
                    formatter={(v: number) => [`${v}h`, 'Study time']}
                  />
                  <Bar dataKey="hours" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quiz trend */}
          {quizzes.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Quiz Score History</CardTitle>
              </CardHeader>
              <CardContent>
                <QuizScoreTrend quizzes={quizzes.slice(-10)} />
              </CardContent>
            </Card>
          )}

          {/* Module breakdown */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Module Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {moduleGroups.length > 0
                ? moduleGroups.map(({ mod, pct }) => (
                    <div key={mod} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--fg)] font-medium capitalize">{mod.replace('-', ' ')}</span>
                        <span className="text-[var(--muted-fg)]">{pct}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden bg-[var(--muted)]">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${pct}%`, backgroundColor: MODULE_COLORS[mod] ?? 'var(--accent)' }}
                        />
                      </div>
                    </div>
                  ))
                : <p className="text-sm text-[var(--muted-fg)]">Start studying to track your progress.</p>
              }
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Radar */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Mastery by Track</CardTitle>
            </CardHeader>
            <CardContent>
              <MasteryRadar progress={progress} />
            </CardContent>
          </Card>

          {/* Exam readiness */}
          {targetTrack && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Exam Readiness</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-[var(--fg)]">{readinessPct}%</div>
                  <div className="text-sm text-[var(--muted-fg)]">ready for {targetTrack.label}</div>
                </div>
                <div className="space-y-2">
                  {EXAM_TRACKS.map((track) => {
                    const readiness = clampProgress(Math.round((overallPct / track.threshold) * 100))
                    return (
                      <div key={track.key} className="space-y-0.5">
                        <div className="flex justify-between text-xs">
                          <span className={track.key === targetExam ? 'font-bold text-[var(--fg)]' : 'text-[var(--muted-fg)]'}>
                            {track.label}
                            {track.key === targetExam && <span className="ml-1 text-[var(--accent)]">← target</span>}
                          </span>
                          <span className="text-[var(--muted-fg)]">{readiness}%</span>
                        </div>
                        <Progress value={readiness} className="h-1.5" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Badges */}
          {profile?.badges && profile.badges.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-1">
                  <Award className="h-4 w-4 text-[var(--accent)]" />
                  Badges Earned
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {profile.badges.map((b) => (
                  <Badge key={b.id} variant="gold" className="gap-1">
                    {b.icon} {b.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
