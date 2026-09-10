import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { AdminDashboard, type AdminUserRow } from '@/components/admin/AdminDashboard'

export const metadata: Metadata = { title: 'Admin' }

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: myProfile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (myProfile?.role !== 'admin') redirect('/dashboard')

  const admin = createAdminClient()
  const [
    { data: profiles },
    { data: streaks },
    { data: optIns },
    { data: progress },
    { data: quizResults },
    { data: assignments },
    { data: authUsers },
  ] = await Promise.all([
    admin.from('profiles').select('*').order('created_at', { ascending: false }),
    admin.from('streaks').select('*'),
    admin.from('leaderboard_opt_ins').select('*'),
    admin.from('curriculum_progress').select('user_id, status'),
    admin.from('quiz_results').select('user_id, passed'),
    admin.from('assignments').select('user_id, submitted_at'),
    admin.auth.admin.listUsers({ perPage: 1000 }),
  ])

  const emailByUserId = new Map((authUsers?.users ?? []).map((u) => [u.id, u.email ?? null]))
  const streakByUserId = new Map((streaks ?? []).map((s) => [s.user_id, s]))
  const optInByUserId = new Map((optIns ?? []).map((o) => [o.user_id, o]))

  const lessonsCompletedByUserId = new Map<string, number>()
  for (const p of progress ?? []) {
    if (p.status !== 'completed') continue
    lessonsCompletedByUserId.set(p.user_id, (lessonsCompletedByUserId.get(p.user_id) ?? 0) + 1)
  }
  const quizzesPassedByUserId = new Map<string, number>()
  for (const q of quizResults ?? []) {
    if (!q.passed) continue
    quizzesPassedByUserId.set(q.user_id, (quizzesPassedByUserId.get(q.user_id) ?? 0) + 1)
  }
  const assignmentsSubmittedByUserId = new Map<string, number>()
  for (const a of assignments ?? []) {
    if (!a.submitted_at) continue
    assignmentsSubmittedByUserId.set(a.user_id, (assignmentsSubmittedByUserId.get(a.user_id) ?? 0) + 1)
  }

  const users: AdminUserRow[] = (profiles ?? []).map((p) => ({
    id: p.id,
    full_name: p.full_name,
    email: emailByUserId.get(p.id) ?? null,
    role: p.role,
    xp_points: p.xp_points,
    current_streak: streakByUserId.get(p.id)?.current_streak ?? 0,
    longest_streak: streakByUserId.get(p.id)?.longest_streak ?? 0,
    lessons_completed: lessonsCompletedByUserId.get(p.id) ?? 0,
    quizzes_passed: quizzesPassedByUserId.get(p.id) ?? 0,
    assignments_submitted: assignmentsSubmittedByUserId.get(p.id) ?? 0,
    leaderboard_opted_in: optInByUserId.get(p.id)?.opted_in ?? false,
    leaderboard_display_name: optInByUserId.get(p.id)?.display_name ?? null,
    created_at: p.created_at,
    school: p.school,
    grade: p.grade,
    target_exam: p.target_exam,
  }))

  return <AdminDashboard users={users} currentUserId={user.id} />
}
