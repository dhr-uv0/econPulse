'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Lesson, CurriculumModule, LessonStatus } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { toast } from '@/lib/hooks/useToast'
import { cn } from '@/lib/utils'
import { useUserPreferences } from '@/lib/hooks/useUserPreferences'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LessonQuiz } from '@/components/curriculum/LessonQuiz'
import { VocabFlashcards } from '@/components/curriculum/VocabFlashcards'
import {
  ChevronLeft, ChevronRight, Check, ChevronDown, ChevronUp,
  Lightbulb, AlertTriangle, GraduationCap, Sparkles,
  BookOpen, Brain, RefreshCw, PenLine, HelpCircle,
} from 'lucide-react'
import { RecallWarmup } from '@/components/curriculum/RecallWarmup'
import { LessonAssignmentPanel } from '@/components/curriculum/LessonAssignmentPanel'
import { PPFDiagram } from '@/components/curriculum/diagrams/PPFDiagram'
import { MBMCDiagram } from '@/components/curriculum/diagrams/MBMCDiagram'

interface Props {
  lesson: Lesson
  module: CurriculumModule
  userId: string
  initialStatus: LessonStatus
}

type Tab = 'lesson' | 'vocab' | 'assignment' | 'quiz'

export function LessonViewer({ lesson, module: mod, userId, initialStatus }: Props) {
  const router = useRouter()
  const supabase = createClient()
  const { prefs } = useUserPreferences()
  const [activeTab, setActiveTab] = useState<Tab>('lesson')
  const [quizPassed, setQuizPassed] = useState(initialStatus === 'completed')
  const [deeperOpen, setDeeperOpen] = useState(false)
  const [thinkRevealed, setThinkRevealed] = useState(false)
  const [status, setStatus] = useState<LessonStatus>(initialStatus)
  const [startTime] = useState(() => Date.now())
  const adaptiveApplied = useRef(false)

  // Apply adaptive tab selection and difficulty once preferences load
  useEffect(() => {
    if (!prefs || adaptiveApplied.current) return
    adaptiveApplied.current = true
    const style = prefs.learning_style
    if (style === 'practice') setActiveTab('quiz')
    setThinkRevealed(false)
    // Auto-expand Deeper Dive for exam/challenging modes
    if ((prefs.difficulty === 'exam' || prefs.difficulty === 'challenging') && lesson.content.deeperDive) {
      setDeeperOpen(true)
    }
  }, [prefs, lesson.content.interactiveElement, lesson.content.deeperDive])

  // Track time spent
  useEffect(() => {
    return () => {
      const seconds = Math.round((Date.now() - startTime) / 1000)
      supabase
        .from('curriculum_progress')
        .update({ time_spent_seconds: seconds, last_accessed: new Date().toISOString() })
        .eq('user_id', userId)
        .eq('lesson_id', lesson.id)
        .then(() => {})
    }
  }, []) // eslint-disable-line

  async function markComplete() {
    setStatus('completed')
    const { error } = await supabase
      .from('curriculum_progress')
      .upsert({
        user_id: userId,
        module_name: mod.id,
        lesson_id: lesson.id,
        status: 'completed',
        last_accessed: new Date().toISOString(),
      }, { onConflict: 'user_id,lesson_id' })

    if (!error) {
      // Award XP
      await supabase.rpc('add_xp', { p_user_id: userId, p_amount: 50 })
      toast.success('Lesson complete! +50 XP', 'Great work. Keep going!')
    }
    router.refresh()
  }

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'lesson',     label: 'Lesson',     icon: <BookOpen className="h-3.5 w-3.5" /> },
    { id: 'vocab',      label: 'Vocabulary', icon: <GraduationCap className="h-3.5 w-3.5" /> },
    ...(lesson.lessonAssignment ? [{ id: 'assignment' as Tab, label: 'Assignment', icon: <PenLine className="h-3.5 w-3.5" /> }] : []),
    { id: 'quiz',       label: 'Quiz',       icon: <Check className="h-3.5 w-3.5" /> },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
        <Link href="/curriculum" className="text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors">
          Curriculum
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-[var(--muted-fg)]" />
        <span className="text-[var(--muted-fg)]" style={{ color: mod.color }}>{mod.title}</span>
        <ChevronRight className="h-3.5 w-3.5 text-[var(--muted-fg)]" />
        <span className="text-[var(--fg)] font-medium truncate">{lesson.title}</span>
      </nav>

      {/* Lesson header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {lesson.tags.map((t) => (
              <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
            ))}
            {status === 'completed' && (
              <Badge variant="success" className="gap-1">
                <Check className="h-3 w-3" />
                Completed
              </Badge>
            )}
          </div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)] leading-tight">
            {lesson.title}
          </h1>
          <p className="mt-1 text-[var(--muted-fg)]">{lesson.description}</p>
        </div>
      </div>

      {/* Adaptive learning hint */}
      {prefs && prefs.learning_style !== 'mixed' && (
        <div className="flex items-center gap-2 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-2 text-xs text-[var(--muted-fg)]">
          <Brain className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
          <span>
            Adapted for your{' '}
            <span className="font-semibold text-[var(--accent)]">
              {prefs.learning_style === 'visual' ? 'visual' :
               prefs.learning_style === 'reading' ? 'reading' :
               'practice'}-focused
            </span>{' '}
            learning style ·{' '}
            <span className="font-semibold">
              {prefs.difficulty === 'relaxed' ? 'Relaxed' :
               prefs.difficulty === 'challenging' ? 'Challenging' :
               prefs.difficulty === 'exam' ? 'Exam mode' : 'Standard'}
            </span>{' '}
            difficulty
          </span>
        </div>
      )}

      {/* Tab navigation */}
      <div className="flex gap-1 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-1" role="tablist">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            className={cn(
              'flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all',
              activeTab === id
                ? 'bg-[var(--card-bg)] text-[var(--fg)] shadow-sm'
                : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'lesson' && (
        <div className="space-y-6">
          {/* Prerequisite recall */}
          {lesson.content.prerequisiteRecap && (
            <Card className="border-l-4 border-l-indigo-400 bg-indigo-500/5">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-500">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
                      Building on what you know
                    </div>
                    <p className="text-sm text-[var(--fg)] leading-relaxed">
                      {lesson.content.prerequisiteRecap}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recall warm-up questions */}
          {lesson.content.recallQuestions && lesson.content.recallQuestions.length > 0 && (
            <RecallWarmup questions={lesson.content.recallQuestions} />
          )}

          {/* Real-world hook */}
          {lesson.content.realWorldHook && (
            <Card className="border-l-4 border-l-[var(--accent)] bg-[var(--accent)]/5">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--accent-fg)]">
                    <Lightbulb className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-1">
                      Real-World Connection
                    </div>
                    <p className="text-sm text-[var(--fg)] leading-relaxed">
                      {lesson.content.realWorldHook}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Main conceptual explanation */}
          <Card>
            <CardContent className="pt-6">
              <div
                className="prose-econ text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(lesson.content.conceptualExplanation) }}
              />
            </CardContent>
          </Card>

          {/* Diagram */}
          {lesson.content.diagram && (
            <Card>
              <CardContent className="pt-5 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted-fg)] mb-3">Diagram</div>
                {lesson.content.diagram === 'ppf' && <PPFDiagram />}
                {lesson.content.diagram === 'mb-mc' && <MBMCDiagram />}
              </CardContent>
            </Card>
          )}

          {/* Pause & Think */}
          {lesson.content.thinkAboutIt && (
            <Card className="border-2 border-dashed border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-500">
                    <HelpCircle className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-violet-500 mb-2">
                      Pause &amp; Think
                    </div>
                    <p className="text-sm text-[var(--fg)] leading-relaxed font-medium mb-3">
                      {lesson.content.thinkAboutIt.question}
                    </p>
                    {thinkRevealed ? (
                      <div className="rounded-lg bg-violet-500/8 border border-violet-500/20 px-3 py-2.5">
                        <p className="text-sm text-[var(--fg)] leading-relaxed">
                          {lesson.content.thinkAboutIt.answer}
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setThinkRevealed(true)}
                        className="text-xs font-semibold text-violet-500 hover:text-violet-400 transition-colors underline underline-offset-2"
                      >
                        Reveal answer
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Common Misconceptions */}
          {lesson.content.commonMisconceptions && lesson.content.commonMisconceptions.length > 0 && (
            <Card className="border-l-4 border-l-red-400">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-500">
                    <AlertTriangle className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
                      Common Misconceptions
                    </div>
                    <ul className="space-y-1.5">
                      {lesson.content.commonMisconceptions.map((m, i) => (
                        <li key={i} className="text-sm text-[var(--fg)] leading-relaxed">
                          <span className="font-medium text-red-500">✗</span>{' '}
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Examiner Tip */}
          {lesson.content.examinerTip && (
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-500">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-1">
                      Examiner Tip
                    </div>
                    <p className="text-sm text-[var(--fg)] leading-relaxed">
                      {lesson.content.examinerTip}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Did You Know */}
          {lesson.content.didYouKnow && (
            <Card className="border-l-4 border-l-purple-500 bg-purple-500/5">
              <CardContent className="pt-4 pb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-500">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-500 mb-1">
                      Did You Know?
                    </div>
                    <p className="text-sm text-[var(--fg)] leading-relaxed">
                      {lesson.content.didYouKnow}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Deeper Dive (expandable) */}
          {lesson.content.deeperDive && (
            <Card>
              <button
                onClick={() => setDeeperOpen(!deeperOpen)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={deeperOpen}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--fg)]">Deeper Dive</span>
                  <Badge variant="gold" className="text-[10px]">HL / Olympiad</Badge>
                </div>
                {deeperOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {deeperOpen && (
                <CardContent className="pt-0">
                  <div className="border-t border-[var(--border)] pt-4">
                    <div
                      className="prose-econ text-sm"
                      dangerouslySetInnerHTML={{ __html: markdownToHtml(lesson.content.deeperDive) }}
                    />
                  </div>
                </CardContent>
              )}
            </Card>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link href="/curriculum">
              <Button variant="outline" size="sm" className="gap-1.5">
                <ChevronLeft className="h-3.5 w-3.5" />
                Back to curriculum
              </Button>
            </Link>
            <Button
              variant="gold"
              size="sm"
              className="gap-1.5"
              onClick={() => setActiveTab(lesson.lessonAssignment ? 'assignment' : 'quiz')}
            >
              {lesson.lessonAssignment ? 'Assignment & Quiz' : 'Take quiz to complete'}
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'vocab' && (
        <VocabFlashcards vocab={lesson.content.vocabulary ?? []} lessonId={lesson.id} userId={userId} />
      )}

      {activeTab === 'assignment' && lesson.lessonAssignment && (
        <div className="space-y-4">
          <LessonAssignmentPanel
            assignment={lesson.lessonAssignment}
            lessonId={lesson.id}
            moduleId={mod.id}
            userId={userId}
            lessonTitle={lesson.title}
          />
          <div className="flex justify-end pt-2">
            <Button variant="gold" size="sm" className="gap-1.5" onClick={() => setActiveTab('quiz')}>
              Take the quiz
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <LessonQuiz
          questions={lesson.quiz}
          lessonId={lesson.id}
          moduleId={mod.id}
          userId={userId}
          alreadyPassed={quizPassed}
          onPass={() => {
            setQuizPassed(true)
            markComplete()
          }}
          onNextLesson={(() => {
            const lessons = mod.lessons
            const idx = lessons.findIndex((l) => l.id === lesson.id)
            const next = lessons[idx + 1]
            if (next) return () => router.push(`/curriculum/${mod.id}/${next.id}`)
            return () => router.push('/curriculum')
          })()}
        />
      )}
    </div>
  )
}

// Minimal markdown → HTML converter
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^\| (.+) \|$/gm, (_, row) => `<tr>${row.split(' | ').map((c: string) => `<td>${c}</td>`).join('')}</tr>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/(<tr>[\s\S]+?<\/tr>)/g, '<table>$1</table>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|t|l])/gm, '')
    .replace(/^(.+)$/gm, (line) =>
      line.startsWith('<') ? line : `<p>${line}</p>`
    )
}
