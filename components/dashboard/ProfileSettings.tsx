'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import type { Profile } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { getInitials, levelFromXP } from '@/lib/utils'
import { Save, Award, Trophy, Download, AlertTriangle } from 'lucide-react'

const EXPORT_TABLES = [
  'profiles', 'user_preferences', 'curriculum_progress', 'quiz_results',
  'flashcard_reviews', 'assignments', 'bookmarks', 'streaks', 'leaderboard_opt_ins',
] as const

interface Props {
  profile: Profile | null
  optIn: { display_name: string; opted_in: boolean } | null
  user: User
}

export function ProfileSettings({ profile, optIn, user }: Props) {
  const supabase = createClient()
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const [deleteEmailInput, setDeleteEmailInput] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [form, setForm] = useState({
    full_name: profile?.full_name ?? '',
    school: profile?.school ?? '',
    grade: profile?.grade ?? 11,
    target_exam: (profile?.target_exam ?? 'IB_HL') as import('@/lib/types').ExamTarget,
    weekly_study_goal_hours: profile?.weekly_study_goal_hours ?? 5,
    bio: profile?.bio ?? '',
  })
  const [leaderboard, setLeaderboard] = useState({
    opted_in: optIn?.opted_in ?? false,
    display_name: optIn?.display_name ?? '',
  })

  const { level, title: levelTitle } = levelFromXP(profile?.xp_points ?? 0)

  async function handleSave() {
    const trimmedDisplayName = leaderboard.display_name.trim()
    if (leaderboard.opted_in && !trimmedDisplayName) {
      toast.error('Display name required', 'Enter a display name to appear on the leaderboard.')
      return
    }

    setSaving(true)
    const { error } = await supabase
      .from('profiles')
      .update({
        ...form,
        full_name: form.full_name.trim(),
        school: form.school.trim(),
        bio: form.bio.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)

    let leaderboardError: string | null = null
    if (leaderboard.opted_in && trimmedDisplayName) {
      const { error: optInError } = await supabase.from('leaderboard_opt_ins').upsert(
        { user_id: user.id, display_name: trimmedDisplayName, opted_in: leaderboard.opted_in },
        { onConflict: 'user_id' }
      )
      leaderboardError = optInError?.message ?? null
    } else if (!leaderboard.opted_in) {
      const { error: optOutError } = await supabase.from('leaderboard_opt_ins').update({ opted_in: false }).eq('user_id', user.id)
      leaderboardError = optOutError?.message ?? null
    }

    setSaving(false)
    if (error) toast.error('Save failed', error.message)
    else if (leaderboardError) toast.error('Profile saved, but leaderboard setting failed', leaderboardError)
    else toast.success('Profile updated!')
  }

  async function handleExportData() {
    setExporting(true)
    const data: Record<string, unknown> = { exported_at: new Date().toISOString(), user_id: user.id, email: user.email }

    for (const table of EXPORT_TABLES) {
      const idColumn = table === 'profiles' ? 'id' : 'user_id'
      const { data: rows, error } = await supabase.from(table).select('*').eq(idColumn, user.id)
      if (error) {
        toast.error('Export failed', `Could not read ${table}: ${error.message}`)
        setExporting(false)
        return
      }
      data[table] = rows
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `econpulse-data-${user.id}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)

    setExporting(false)
    toast.success('Data exported', 'Your data has been downloaded as a JSON file.')
  }

  async function handleDeleteAccount() {
    setDeleting(true)
    const res = await fetch('/api/account/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirmEmail: deleteEmailInput }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      toast.error('Could not delete account', body.error ?? 'Please try again.')
      setDeleting(false)
      return
    }
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <h1 className="text-2xl font-extrabold text-[var(--fg)]">Profile & Settings</h1>

      {/* Profile card */}
      <Card>
        <CardContent className="pt-6 flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile?.avatar_url ?? undefined} />
            <AvatarFallback className="text-lg">
              {getInitials(profile?.full_name ?? user.email ?? null)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold text-[var(--fg)] text-lg">{profile?.full_name ?? user.email}</div>
            <div className="text-sm text-[var(--muted-fg)]">{user.email}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="gold" className="gap-1 text-xs">
                <Award className="h-3 w-3" />
                Level {level} · {levelTitle}
              </Badge>
              <Badge variant="muted" className="text-xs">
                {(profile?.xp_points ?? 0).toLocaleString()} XP
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile form */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[var(--fg)]">Full Name</label>
              <input
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[var(--fg)]">School</label>
              <input
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[var(--fg)]">Grade / Year</label>
              <select
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: Number(e.target.value) })}
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              >
                {[9,10,11,12].map((g) => <option key={g} value={g}>Grade {g}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[var(--fg)]">Target Exam</label>
              <select
                value={form.target_exam}
                onChange={(e) => setForm({ ...form, target_exam: e.target.value as import('@/lib/types').ExamTarget })}
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              >
                <option value="IB_SL">IB Economics SL</option>
                <option value="IB_HL">IB Economics HL</option>
                <option value="AEO">American Economics Olympiad (AEO)</option>
                <option value="IEO">International Economics Olympiad (IEO)</option>
                <option value="PRINCIPLES">Principles of Economics</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Weekly Study Goal: {form.weekly_study_goal_hours} hours
            </label>
            <input
              type="range" min={1} max={20} value={form.weekly_study_goal_hours}
              onChange={(e) => setForm({ ...form, weekly_study_goal_hours: Number(e.target.value) })}
              className="w-full accent-[#e8c547]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[var(--fg)]">Bio (optional)</label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              rows={3}
              className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              placeholder="Tell us about your economics journey…"
            />
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[var(--accent)]" />
            Leaderboard (Opt-in)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={leaderboard.opted_in}
              onChange={(e) => setLeaderboard({ ...leaderboard, opted_in: e.target.checked })}
              className="mt-0.5 accent-[#e8c547]"
            />
            <div>
              <div className="text-sm font-semibold text-[var(--fg)]">Appear on the leaderboard</div>
              <div className="text-xs text-[var(--muted-fg)]">Your real name is never shown. Only your display name, XP, and streak are visible.</div>
            </div>
          </label>
          {leaderboard.opted_in && (
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[var(--fg)]">Display Name</label>
              <input
                value={leaderboard.display_name}
                onChange={(e) => setLeaderboard({ ...leaderboard, display_name: e.target.value })}
                placeholder="e.g. EconScholar99"
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Button variant="gold" onClick={handleSave} loading={saving} className="gap-1.5">
        <Save className="h-4 w-4" />
        Save changes
      </Button>

      {/* Your data */}
      <Card>
        <CardHeader>
          <CardTitle>Your Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-[var(--muted-fg)]">
            Download everything EconPulse has stored for your account — profile, progress, quiz results, flashcard scheduling, assignments, bookmarks, streaks, and leaderboard settings — as a single JSON file.
          </p>
          <Button variant="outline" onClick={handleExportData} loading={exporting} className="gap-1.5">
            <Download className="h-4 w-4" />
            Download my data
          </Button>
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-red-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertTriangle className="h-4 w-4" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-[var(--muted-fg)]">
            Permanently deletes your account and every record tied to it — progress, quiz history, flashcards, assignments, streaks, and leaderboard entry. This cannot be undone.
          </p>
          {!confirmingDelete ? (
            <Button variant="destructive" onClick={() => setConfirmingDelete(true)} className="gap-1.5">
              <AlertTriangle className="h-4 w-4" />
              Delete my account
            </Button>
          ) : (
            <div className="space-y-2.5 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
              <label className="text-sm font-semibold text-[var(--fg)]">
                Type your email address (<span className="font-mono">{user.email}</span>) to confirm
              </label>
              <input
                value={deleteEmailInput}
                onChange={(e) => setDeleteEmailInput(e.target.value)}
                placeholder={user.email ?? ''}
                className="w-full h-10 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)] focus:outline-none focus:border-red-500"
              />
              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  loading={deleting}
                  disabled={deleteEmailInput !== user.email}
                >
                  Permanently delete my account
                </Button>
                <Button variant="outline" onClick={() => { setConfirmingDelete(false); setDeleteEmailInput('') }}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
