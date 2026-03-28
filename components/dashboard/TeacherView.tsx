'use client'

import type { Profile, Assignment } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { getInitials, formatRelativeTime, levelFromXP } from '@/lib/utils'
import { Users, FileText, TrendingUp, Award } from 'lucide-react'

interface Props {
  students: Partial<Profile>[]
  assignments: Assignment[]
}

export function TeacherView({ students, assignments }: Props) {
  const avgXP = students.length
    ? Math.round(students.reduce((s, st) => s + (st.xp_points ?? 0), 0) / students.length)
    : 0

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Teacher Dashboard</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          {students.length} students enrolled · avg {avgXP.toLocaleString()} XP
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Students</span>
            <Users className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{students.length}</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Submissions</span>
            <FileText className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{assignments.length}</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Avg XP</span>
            <TrendingUp className="h-4 w-4 text-[var(--accent)]" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">{avgXP.toLocaleString()}</div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Top Level</span>
            <Award className="h-4 w-4 text-purple-500" />
          </div>
          <div className="text-3xl font-black text-[var(--fg)]">
            {students[0] ? levelFromXP(students[0].xp_points ?? 0).level : '—'}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Student roster */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              Student Roster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.slice(0, 15).map((st, i) => {
                const { level } = levelFromXP(st.xp_points ?? 0)
                return (
                  <div key={st.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--muted)] transition-colors">
                    <span className="text-xs font-bold text-[var(--muted-fg)] w-5 shrink-0">#{i + 1}</span>
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="text-xs">
                        {getInitials(st.full_name ?? null)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[var(--fg)] truncate">
                        {st.full_name ?? 'Anonymous'}
                      </div>
                      <div className="text-xs text-[var(--muted-fg)]">
                        {st.school ? `${st.school} · ` : ''}{st.target_exam?.replace('_', ' ') ?? 'No target'}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <Badge variant="muted" className="text-[10px]">Lv {level}</Badge>
                      <div className="text-[10px] text-[var(--muted-fg)] mt-0.5">
                        {(st.xp_points ?? 0).toLocaleString()} XP
                      </div>
                    </div>
                  </div>
                )
              })}
              {students.length === 0 && (
                <p className="text-sm text-[var(--muted-fg)] text-center py-4">No students enrolled yet.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent submissions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-green-500" />
              Recent Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignments.slice(0, 10).map((a) => (
                <div key={a.id} className="rounded-lg border border-[var(--border)] p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold text-[var(--fg)]">
                        {a.assignment_type.replace(/_/g, ' ')}
                      </div>
                      <div className="text-xs text-[var(--muted-fg)] mt-0.5">
                        {a.submitted_at ? formatRelativeTime(a.submitted_at) : 'In progress'}
                      </div>
                    </div>
                    {a.ai_score !== null && (
                      <Badge variant={a.ai_score >= 7 ? 'success' : a.ai_score >= 5 ? 'warning' : 'danger'}>
                        {a.ai_score}/10
                      </Badge>
                    )}
                  </div>
                  {a.submission_text && (
                    <p className="text-xs text-[var(--muted-fg)] mt-2 line-clamp-2">
                      {a.submission_text}
                    </p>
                  )}
                  {a.ai_feedback && (
                    <div className="mt-2 rounded bg-[var(--muted)] px-2 py-1.5 text-xs text-[var(--fg)] line-clamp-2">
                      <strong>AI Feedback:</strong> {a.ai_feedback}
                    </div>
                  )}
                </div>
              ))}
              {assignments.length === 0 && (
                <p className="text-sm text-[var(--muted-fg)] text-center py-4">No submissions yet.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
