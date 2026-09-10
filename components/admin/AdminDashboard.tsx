'use client'

import { useMemo, useState } from 'react'
import type { UserRole } from '@/lib/types'
import { toast } from '@/lib/hooks/useToast'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getInitials } from '@/lib/utils'
import { Shield, Search, Users, Star, Flame, Trophy, X, ShieldCheck } from 'lucide-react'

export interface AdminUserRow {
  id: string
  full_name: string | null
  email: string | null
  role: UserRole
  xp_points: number
  current_streak: number
  longest_streak: number
  lessons_completed: number
  quizzes_passed: number
  assignments_submitted: number
  leaderboard_opted_in: boolean
  leaderboard_display_name: string | null
  created_at: string
  school: string | null
  grade: number | null
  target_exam: string | null
}

interface Props {
  users: AdminUserRow[]
  currentUserId: string
}

const ROLE_BADGE: Record<UserRole, 'muted' | 'outline' | 'gold'> = {
  student: 'muted',
  teacher: 'outline',
  admin: 'gold',
}

type RoleFilter = 'all' | UserRole

export function AdminDashboard({ users: initialUsers, currentUserId }: Props) {
  const [users, setUsers] = useState(initialUsers)
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all')
  const [savingId, setSavingId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((u) => {
      if (roleFilter !== 'all' && u.role !== roleFilter) return false
      if (!q) return true
      return (
        (u.full_name ?? '').toLowerCase().includes(q) ||
        (u.email ?? '').toLowerCase().includes(q) ||
        (u.leaderboard_display_name ?? '').toLowerCase().includes(q)
      )
    })
  }, [users, query, roleFilter])

  const totalXP = users.reduce((sum, u) => sum + u.xp_points, 0)
  const optedInCount = users.filter((u) => u.leaderboard_opted_in).length
  const staffCount = users.filter((u) => u.role !== 'student').length

  async function changeRole(userId: string, newRole: UserRole) {
    setSavingId(userId)
    const res = await fetch('/api/admin/update-role', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetUserId: userId, newRole }),
    })
    setSavingId(null)
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      toast.error('Role change failed', body.error ?? 'Please try again.')
      return
    }
    setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u)))
    toast.success('Role updated')
  }

  async function removeFromLeaderboard(userId: string) {
    setSavingId(userId)
    const res = await fetch('/api/admin/leaderboard-opt-out', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetUserId: userId }),
    })
    setSavingId(null)
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      toast.error('Could not remove from leaderboard', body.error ?? 'Please try again.')
      return
    }
    setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, leaderboard_opted_in: false } : u)))
    toast.success('Removed from leaderboard')
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Shield className="h-7 w-7 text-[var(--accent)]" />
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Admin</h1>
          <p className="text-sm text-[var(--muted-fg)]">All users, progress, and moderation controls.</p>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="p-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15">
            <Users className="h-4.5 w-4.5 text-[var(--accent)]" />
          </div>
          <div>
            <div className="text-lg font-bold text-[var(--fg)]">{users.length}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total users</div>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15">
            <Star className="h-4.5 w-4.5 text-[var(--accent)]" />
          </div>
          <div>
            <div className="text-lg font-bold text-[var(--fg)]">{totalXP.toLocaleString()}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total XP earned</div>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/15">
            <Trophy className="h-4.5 w-4.5 text-orange-500" />
          </div>
          <div>
            <div className="text-lg font-bold text-[var(--fg)]">{optedInCount}</div>
            <div className="text-xs text-[var(--muted-fg)]">On leaderboard</div>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/15">
            <ShieldCheck className="h-4.5 w-4.5 text-[var(--accent)]" />
          </div>
          <div>
            <div className="text-lg font-bold text-[var(--fg)]">{staffCount}</div>
            <div className="text-xs text-[var(--muted-fg)]">Teachers + admins</div>
          </div>
        </Card>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-fg)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email, or display name…"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--card-bg)] py-2 pl-9 pr-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
          />
        </div>
        <div className="flex gap-2">
          {(['all', 'student', 'teacher', 'admin'] as RoleFilter[]).map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-semibold border-2 transition-all capitalize',
                roleFilter === r
                  ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--fg)]'
                  : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/50'
              )}
              aria-pressed={roleFilter === r}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* User table */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[var(--muted-fg)]">No users match your search.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left text-xs uppercase tracking-wide text-[var(--muted-fg)]">
                    <th className="px-4 py-3 font-semibold">User</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold text-right">XP</th>
                    <th className="px-4 py-3 font-semibold text-right">Streak</th>
                    <th className="px-4 py-3 font-semibold text-right">Lessons</th>
                    <th className="px-4 py-3 font-semibold text-right">Quizzes</th>
                    <th className="px-4 py-3 font-semibold text-right">Assignments</th>
                    <th className="px-4 py-3 font-semibold">Leaderboard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {filtered.map((u) => {
                    const isMe = u.id === currentUserId
                    const saving = savingId === u.id
                    return (
                      <tr key={u.id} className={cn(isMe && 'bg-[var(--accent)]/5')}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <Avatar className="h-8 w-8 shrink-0">
                              <AvatarFallback className="text-[10px] font-bold">{getInitials(u.full_name ?? u.email ?? '?')}</AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-[var(--fg)] truncate">{u.full_name ?? 'Unnamed'}</span>
                                {isMe && <Badge variant="gold" className="text-[10px] px-1.5 py-0">You</Badge>}
                              </div>
                              <div className="text-xs text-[var(--muted-fg)] truncate">{u.email ?? '—'}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {isMe ? (
                            <Badge variant={ROLE_BADGE[u.role]} className="capitalize">{u.role}</Badge>
                          ) : (
                            <select
                              value={u.role}
                              disabled={saving}
                              onChange={(e) => changeRole(u.id, e.target.value as UserRole)}
                              className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-2 py-1 text-xs font-medium text-[var(--fg)] capitalize disabled:opacity-50"
                            >
                              <option value="student">Student</option>
                              <option value="teacher">Teacher</option>
                              <option value="admin">Admin</option>
                            </select>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-[var(--fg)]">{u.xp_points.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="inline-flex items-center gap-1 text-[var(--fg)]">
                            <Flame className="h-3.5 w-3.5 text-orange-500" />
                            {u.current_streak}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-[var(--fg)]">{u.lessons_completed}</td>
                        <td className="px-4 py-3 text-right text-[var(--fg)]">{u.quizzes_passed}</td>
                        <td className="px-4 py-3 text-right text-[var(--fg)]">{u.assignments_submitted}</td>
                        <td className="px-4 py-3">
                          {u.leaderboard_opted_in ? (
                            <div className="flex items-center gap-2">
                              <Badge variant="success" className="text-[10px]">Opted in</Badge>
                              <button
                                onClick={() => removeFromLeaderboard(u.id)}
                                disabled={saving}
                                title="Remove from leaderboard"
                                className="text-[var(--muted-fg)] hover:text-red-500 disabled:opacity-50"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ) : (
                            <Badge variant="muted" className="text-[10px]">Not opted in</Badge>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      <p className="text-xs text-[var(--muted-fg)]">
        Role changes and leaderboard removal apply immediately. You can&apos;t change your own role here to avoid accidentally losing admin access.
      </p>
    </div>
  )
}
