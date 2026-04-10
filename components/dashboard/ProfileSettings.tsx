'use client'

import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import type { Profile } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { getInitials, levelFromXP } from '@/lib/utils'
import { Save, Award, Trophy } from 'lucide-react'

interface Props {
  profile: Profile | null
  optIn: { display_name: string; opted_in: boolean } | null
  user: User
}

export function ProfileSettings({ profile, optIn, user }: Props) {
  const supabase = createClient()
  const [saving, setSaving] = useState(false)
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

  const { level, title: levelTitle, nextLevelXP } = levelFromXP(profile?.xp_points ?? 0)

  async function handleSave() {
    setSaving(true)
    const { error } = await supabase
      .from('profiles')
      .update({ ...form, updated_at: new Date().toISOString() })
      .eq('id', user.id)

    if (leaderboard.opted_in && leaderboard.display_name) {
      await supabase.from('leaderboard_opt_ins').upsert(
        { user_id: user.id, display_name: leaderboard.display_name, opted_in: leaderboard.opted_in },
        { onConflict: 'user_id' }
      )
    } else if (!leaderboard.opted_in) {
      await supabase.from('leaderboard_opt_ins').update({ opted_in: false }).eq('user_id', user.id)
    }

    setSaving(false)
    if (error) toast.error('Save failed', error.message)
    else toast.success('Profile updated!')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
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
                <option value="DECA">DECA</option>
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
    </div>
  )
}
