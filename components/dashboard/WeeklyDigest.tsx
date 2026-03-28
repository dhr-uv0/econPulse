'use client'

import { useState } from 'react'
import { Sparkles, ChevronDown, ChevronUp, Loader2, BookOpen, Clock, Brain, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface DigestStats {
  lessonsCompleted: number
  totalMinutesStudied: number
  quizzesTaken: number
  avgQuizScore: number | null
  flashcardsReviewed: number
  masteredCards: number
  currentStreak: number
  xpTotal: number
  weeklyGoalHours: number
  achievedHours: number
}

function markdownToJsx(text: string) {
  return text
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('## ') || line.startsWith('**') && line.endsWith('**')) {
        const content = line.replace(/^\*\*|\*\*$/g, '').replace(/^##\s+/, '')
        return <p key={i} className="font-bold text-[var(--fg)] mt-3 mb-1">{content}</p>
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="ml-4 list-disc text-[var(--muted-fg)] text-sm">
            {line.slice(2).replace(/\*\*([^*]+)\*\*/g, '$1')}
          </li>
        )
      }
      if (line.trim() === '') return null
      return (
        <p key={i} className="text-sm text-[var(--muted-fg)] leading-relaxed">
          {line.replace(/\*\*([^*]+)\*\*/g, '$1')}
        </p>
      )
    })
    .filter(Boolean)
}

export function WeeklyDigest() {
  const [loading, setLoading] = useState(false)
  const [digest, setDigest] = useState<string | null>(null)
  const [stats, setStats] = useState<DigestStats | null>(null)
  const [expanded, setExpanded] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function generate() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/weekly-digest')
      if (!res.ok) throw new Error('Failed to generate digest')
      const data = await res.json()
      setDigest(data.digest)
      setStats(data.stats)
      setExpanded(true)
    } catch {
      setError('Could not generate your digest. Try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  const goalPct = stats ? Math.min(100, Math.round((stats.achievedHours / stats.weeklyGoalHours) * 100)) : 0

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
            Weekly Digest
          </CardTitle>
          {digest && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats mini-grid */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: BookOpen, label: 'Lessons', value: stats.lessonsCompleted, color: 'text-blue-500' },
              { icon: Clock, label: 'Hours', value: `${stats.achievedHours}h`, color: 'text-purple-500' },
              { icon: Brain, label: 'Avg Quiz', value: stats.avgQuizScore !== null ? `${stats.avgQuizScore}%` : '—', color: 'text-green-500' },
              { icon: Trophy, label: 'XP', value: stats.xpTotal.toLocaleString(), color: 'text-[var(--accent)]' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-center gap-2 rounded-lg bg-[var(--muted)] px-3 py-2">
                <Icon className={`h-4 w-4 shrink-0 ${color}`} />
                <div>
                  <div className="text-xs text-[var(--muted-fg)]">{label}</div>
                  <div className="text-sm font-bold text-[var(--fg)]">{value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Goal progress bar */}
        {stats && (
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[var(--muted-fg)]">
              <span>Weekly goal: {stats.weeklyGoalHours}h</span>
              <span className={goalPct >= 100 ? 'text-green-500 font-semibold' : ''}>{goalPct}% complete</span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--muted)] overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${goalPct >= 100 ? 'bg-green-500' : 'bg-[var(--accent)]'}`}
                style={{ width: `${goalPct}%` }}
              />
            </div>
          </div>
        )}

        {/* AI digest text */}
        {digest && expanded && (
          <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)] p-4 space-y-1">
            {markdownToJsx(digest)}
          </div>
        )}

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {!digest && (
          <p className="text-sm text-[var(--muted-fg)]">
            Get a personalised AI summary of your economics study week, with recommendations for what to focus on next.
          </p>
        )}

        <Button
          variant={digest ? 'outline' : 'gold'}
          onClick={generate}
          loading={loading}
          disabled={loading}
          className="w-full gap-2"
        >
          {loading ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Generating your digest…</>
          ) : digest ? (
            <><Sparkles className="h-4 w-4" /> Regenerate</>
          ) : (
            <><Sparkles className="h-4 w-4" /> Generate My Weekly Digest</>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
