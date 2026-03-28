'use client'

import { useState } from 'react'
import { Trophy, Flame, Star, Medal, Crown, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { levelFromXP, getInitials } from '@/lib/utils'

interface LeaderEntry {
  display_name: string
  opted_in: boolean
  profiles: { xp_points: number } | { xp_points: number }[]
  streaks: { current_streak: number } | { current_streak: number }[]
}

interface Props {
  leaders: LeaderEntry[]
  myOptIn: { display_name: string; opted_in: boolean } | null
  myXP: number
  myStreak: number
  userId: string
}

const RANK_ICONS = [
  <Crown key="1" className="h-5 w-5 text-yellow-400" />,
  <Medal key="2" className="h-5 w-5 text-slate-400" />,
  <Medal key="3" className="h-5 w-5 text-amber-600" />,
]

type Tab = 'xp' | 'streak'

export function LeaderboardPage({ leaders, myOptIn, myXP, myStreak }: Props) {
  const [tab, setTab] = useState<Tab>('xp')

  function getXP(e: LeaderEntry) {
    const p = e.profiles
    return Array.isArray(p) ? (p[0]?.xp_points ?? 0) : p.xp_points
  }
  function getStreak(e: LeaderEntry) {
    const s = e.streaks
    return Array.isArray(s) ? (s[0]?.current_streak ?? 0) : s.current_streak
  }

  const sorted = [...leaders].sort((a, b) =>
    tab === 'xp' ? getXP(b) - getXP(a) : getStreak(b) - getStreak(a)
  )

  const myRankXP = myOptIn?.opted_in
    ? sorted.findIndex((l) => l.display_name === myOptIn.display_name) + 1
    : null

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Trophy className="h-7 w-7 text-[var(--accent)]" />
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Leaderboard</h1>
          <p className="text-sm text-[var(--muted-fg)]">Top students by XP and streak — all anonymous by choice</p>
        </div>
      </div>

      {/* My stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--accent)]/15 flex items-center justify-center">
              <Star className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <div>
              <div className="text-xs text-[var(--muted-fg)]">Your XP</div>
              <div className="text-xl font-bold text-[var(--fg)]">{myXP.toLocaleString()}</div>
              {myRankXP && <div className="text-xs text-[var(--accent)]">Rank #{myRankXP}</div>}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-orange-500/15 flex items-center justify-center">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="text-xs text-[var(--muted-fg)]">Your Streak</div>
              <div className="text-xl font-bold text-[var(--fg)]">{myStreak} days</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab toggle */}
      <div className="flex gap-2 p-1 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] w-fit">
        {(['xp', 'streak'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              tab === t
                ? 'bg-[var(--accent)] text-[var(--bg)]'
                : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
            }`}
          >
            {t === 'xp' ? 'XP Ranking' : 'Streak Ranking'}
          </button>
        ))}
      </div>

      {/* Leaderboard list */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-[var(--accent)]" />
            {tab === 'xp' ? 'Most XP Earned' : 'Longest Streaks'}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {sorted.length === 0 ? (
            <div className="py-12 text-center text-[var(--muted-fg)] text-sm">
              No one has opted in yet — be the first!
              <br />
              <span className="text-xs">Enable leaderboard in Profile Settings.</span>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--border)]">
              {sorted.map((entry, i) => {
                const xp = getXP(entry)
                const streak = getStreak(entry)
                const { level, title: lvlTitle } = levelFromXP(xp)
                const isMe = myOptIn?.opted_in && entry.display_name === myOptIn.display_name
                return (
                  <li
                    key={entry.display_name}
                    className={`flex items-center gap-4 px-5 py-3.5 transition-colors ${
                      isMe ? 'bg-[var(--accent)]/8' : 'hover:bg-[var(--card-bg)]'
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-8 flex items-center justify-center shrink-0">
                      {i < 3 ? RANK_ICONS[i] : (
                        <span className="text-sm font-bold text-[var(--muted-fg)]">#{i + 1}</span>
                      )}
                    </div>

                    {/* Avatar */}
                    <Avatar className="h-9 w-9 shrink-0">
                      <AvatarFallback className={`text-xs font-bold ${i === 0 ? 'bg-yellow-400/20 text-yellow-600' : ''}`}>
                        {getInitials(entry.display_name)}
                      </AvatarFallback>
                    </Avatar>

                    {/* Name + level */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--fg)] truncate">
                          {entry.display_name}
                        </span>
                        {isMe && (
                          <Badge variant="gold" className="text-[10px] px-1.5 py-0">You</Badge>
                        )}
                      </div>
                      <div className="text-xs text-[var(--muted-fg)]">Lv.{level} · {lvlTitle}</div>
                    </div>

                    {/* Primary stat */}
                    <div className="text-right shrink-0">
                      {tab === 'xp' ? (
                        <>
                          <div className="font-bold text-[var(--fg)]">{xp.toLocaleString()}</div>
                          <div className="text-xs text-[var(--muted-fg)]">XP</div>
                        </>
                      ) : (
                        <>
                          <div className="font-bold text-[var(--fg)] flex items-center gap-1">
                            <Flame className="h-3.5 w-3.5 text-orange-500" />
                            {streak}
                          </div>
                          <div className="text-xs text-[var(--muted-fg)]">days</div>
                        </>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      {!myOptIn?.opted_in && (
        <p className="text-center text-xs text-[var(--muted-fg)]">
          Want to appear here?{' '}
          <a href="/dashboard/profile" className="text-[var(--accent)] hover:underline font-medium">
            Enable leaderboard in Profile Settings
          </a>
        </p>
      )}
    </div>
  )
}
