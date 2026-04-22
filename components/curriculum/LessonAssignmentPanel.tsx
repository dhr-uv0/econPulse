'use client'

import { useState } from 'react'
import type { LessonAssignment } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  PenLine, ArrowRight, Check, RotateCcw, Lightbulb, Star,
} from 'lucide-react'

interface Props {
  assignment: LessonAssignment
  lessonId: string
  moduleId: string
  userId: string
  lessonTitle: string
  /** Called when student successfully submits so parent can mark lesson progress */
  onSubmit?: () => void
}

interface Submission {
  text: string
  feedback: string
  score: number | null
}

export function LessonAssignmentPanel({
  assignment, lessonId, moduleId, userId, lessonTitle, onSubmit,
}: Props) {
  const supabase = createClient()
  const [text, setText] = useState('')
  const [grading, setGrading] = useState(false)
  const [submission, setSubmission] = useState<Submission | null>(null)
  const [existingScore, setExistingScore] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  // Load existing submission once
  async function loadExisting() {
    if (loaded) return
    setLoaded(true)
    const { data } = await supabase
      .from('assignments')
      .select('submission_text, ai_feedback, ai_score')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .eq('assignment_type', 'lesson_practice')
      .maybeSingle()

    if (data?.ai_score !== null && data?.ai_score !== undefined) {
      setExistingScore(data.ai_score)
      setSubmission({
        text: data.submission_text ?? '',
        feedback: data.ai_feedback ?? '',
        score: data.ai_score,
      })
    }
  }

  // Trigger load on first render
  if (!loaded) loadExisting()

  async function handleSubmit() {
    if (text.trim().length < 80) return
    setGrading(true)

    try {
      const res = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assignmentType: 'lesson_practice',
          prompt: assignment.prompt,
          rubric: assignment.rubric,
          submission: text,
          lessonTitle,
          moduleId,
        }),
      })

      const body = await res.json()
      if (!res.ok) {
        throw new Error(body.error ?? 'Grading service unavailable.')
      }
      const { feedback, score } = body as { feedback: string; score: number }

      // Upsert so retries overwrite
      await supabase.from('assignments').upsert({
        user_id: userId,
        assignment_type: 'lesson_practice',
        unit_id: moduleId,
        lesson_id: lessonId,
        title: `Lesson Practice — ${lessonTitle}`,
        prompt: assignment.prompt,
        rubric: assignment.rubric,
        submission_text: text,
        ai_feedback: feedback,
        ai_score: score,
        submitted_at: new Date().toISOString(),
      }, { onConflict: 'user_id,lesson_id' })

      // Award XP for completing assignment
      await supabase.rpc('add_xp', { p_user_id: userId, p_amount: 30 })

      setSubmission({ text, feedback, score })
      toast.success('Assignment graded!', `Score: ${score}/10 · +30 XP`)
      onSubmit?.()
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Please try again.'
      toast.error('Grading failed', msg)
    } finally {
      setGrading(false)
    }
  }

  // Submitted state
  if (submission) {
    const score = submission.score ?? 0
    const pct = Math.round(score * 10)
    const passed = score >= 7
    return (
      <div className="space-y-5">
        {/* Score card */}
        <Card className={cn(
          'border-2',
          passed ? 'border-green-500/40' : 'border-amber-500/40'
        )}>
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center gap-4">
            <div className={cn(
              'flex h-16 w-16 items-center justify-center rounded-full',
              passed ? 'bg-green-500/15' : 'bg-amber-500/15'
            )}>
              {passed
                ? <Star className="h-8 w-8 text-green-500" />
                : <RotateCcw className="h-8 w-8 text-amber-500" />
              }
            </div>
            <div>
              <div className="text-3xl font-black text-[var(--fg)]">{score}<span className="text-lg text-[var(--muted-fg)]">/10</span></div>
              <div className="text-sm text-[var(--muted-fg)] mt-0.5">{pct}% · {passed ? 'Well done!' : 'Keep practising'}</div>
            </div>
          </CardContent>
        </Card>

        {/* AI Feedback */}
        <Card>
          <CardContent className="pt-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--accent)]/15">
                <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">AI Feedback</span>
            </div>
            <p className="text-sm text-[var(--fg)] leading-relaxed whitespace-pre-wrap">{submission.feedback}</p>
          </CardContent>
        </Card>

        {/* Your submission */}
        <Card>
          <CardContent className="pt-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted-fg)]">Your Answer</div>
            <p className="text-sm text-[var(--fg)] leading-relaxed whitespace-pre-wrap">{submission.text}</p>
          </CardContent>
        </Card>

        {!passed && (
          <Button variant="outline" className="w-full gap-2" onClick={() => { setSubmission(null); setText('') }}>
            <RotateCcw className="h-3.5 w-3.5" />
            Try again
          </Button>
        )}
      </div>
    )
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="space-y-5">
      {/* Assignment header */}
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/15">
          <PenLine className="h-4 w-4 text-[var(--accent)]" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">Lesson Assignment</span>
            <Badge variant="muted" className="text-[10px]">10–15 min</Badge>
          </div>
          <p className="text-sm text-[var(--muted-fg)]">Graded by AI · scored out of 10</p>
        </div>
      </div>

      {/* Prompt */}
      <Card className="border-l-4 border-l-[var(--accent)] bg-[var(--accent)]/5">
        <CardContent className="pt-4 pb-4">
          <p className="text-sm text-[var(--fg)] leading-relaxed font-medium">{assignment.prompt}</p>
        </CardContent>
      </Card>

      {/* Guidance */}
      {assignment.exampleTopics.length > 0 && (
        <Card className="bg-blue-500/5 border-blue-500/20">
          <CardContent className="pt-4 pb-4">
            <div className="flex items-start gap-2 mb-2">
              <Lightbulb className="h-3.5 w-3.5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-500">What to include</span>
            </div>
            <ul className="space-y-1 ml-5">
              {assignment.exampleTopics.map((topic, i) => (
                <li key={i} className="text-sm text-[var(--fg)] list-disc leading-relaxed">{topic}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Text area */}
      <div className="space-y-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your response here. Be specific and use economic vocabulary from the lesson."
          rows={10}
          className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted-fg)] focus:outline-none focus:border-[var(--accent)] transition-colors leading-relaxed"
        />
        <div className="flex items-center justify-between text-xs text-[var(--muted-fg)]">
          <span>{wordCount} words</span>
          <span className={cn(text.trim().length < 80 ? 'text-red-400' : 'text-green-500')}>
            {text.trim().length < 80 ? `Minimum ~80 characters (${80 - text.trim().length} more)` : 'Ready to submit'}
          </span>
        </div>
      </div>

      <Button
        variant="gold"
        className="w-full gap-2"
        onClick={handleSubmit}
        disabled={text.trim().length < 80 || grading}
      >
        {grading ? 'Grading…' : 'Submit for AI feedback'}
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>

      {existingScore !== null && (
        <p className="text-center text-xs text-green-500">
          <Check className="inline h-3.5 w-3.5 mr-1" />
          Previously scored {existingScore}/10 — submitting again will overwrite
        </p>
      )}
    </div>
  )
}
