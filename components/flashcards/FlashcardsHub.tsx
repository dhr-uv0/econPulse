'use client'

import { useState, useMemo } from 'react'
import type { FlashcardReview } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Zap, Trophy, RefreshCw, BookOpen, Filter, ChevronRight,
} from 'lucide-react'

// SM-2 algorithm
function sm2(review: FlashcardReview, quality: number) {
  const ef = Math.max(1.3, review.ease_factor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  const interval =
    quality < 3
      ? 1
      : review.interval_days === 1
      ? 6
      : Math.round(review.interval_days * ef)
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)
  return { ease_factor: ef, interval_days: interval, next_review_at: nextReview.toISOString() }
}

export interface FlashcardEntry {
  id: string
  front: string
  back: string
  hint?: string
  tags: string[]
  lessonId: string
  lessonTitle: string
  lessonOrder: number
  moduleId: string
  moduleTitle: string
  review?: FlashcardReview
}

type FilterMode = 'module' | 'lesson' | 'tag'

interface Props {
  cards: FlashcardEntry[]
  userId: string
}

export function FlashcardsHub({ cards, userId }: Props) {
  const supabase = createClient()

  // Filter state
  const [filterMode, setFilterMode] = useState<FilterMode>('module')
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [sessionStarted, setSessionStarted] = useState(false)

  // Session state
  const [queue, setQueue] = useState<FlashcardEntry[]>([])
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const [stats, setStats] = useState({ easy: 0, good: 0, hard: 0, again: 0 })

  // Derive lessons and tags from cards
  const lessons = useMemo(() => {
    const map = new Map<string, { id: string; title: string; order: number; count: number }>()
    for (const c of cards) {
      if (!map.has(c.lessonId)) {
        map.set(c.lessonId, { id: c.lessonId, title: c.lessonTitle, order: c.lessonOrder, count: 0 })
      }
      map.get(c.lessonId)!.count++
    }
    return [...map.values()].sort((a, b) => a.order - b.order)
  }, [cards])

  const allTags = useMemo(() => {
    const set = new Set<string>()
    for (const c of cards) for (const t of c.tags) set.add(t)
    return [...set].sort()
  }, [cards])

  // Filter cards for the selected mode
  const filteredCards = useMemo(() => {
    if (filterMode === 'module') return cards
    if (filterMode === 'lesson' && selectedLesson) return cards.filter((c) => c.lessonId === selectedLesson)
    if (filterMode === 'tag' && selectedTag) return cards.filter((c) => c.tags.includes(selectedTag))
    return cards
  }, [cards, filterMode, selectedLesson, selectedTag])

  function startSession() {
    // Shuffle for variety
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5)
    setQueue(shuffled)
    setCurrent(0)
    setFlipped(false)
    setDone(false)
    setStats({ easy: 0, good: 0, hard: 0, again: 0 })
    setSessionStarted(true)
  }

  async function rate(quality: number) {
    const card = queue[current]
    const label = quality >= 4 ? 'easy' : quality >= 3 ? 'good' : quality >= 2 ? 'hard' : 'again'
    setStats((s) => ({ ...s, [label]: s[label as keyof typeof s] + 1 }))

    // Upsert SM-2 review record
    if (card.review) {
      const updated = sm2(card.review, quality)
      await supabase.from('flashcard_reviews').update(updated).eq('id', card.review.id)
    } else {
      // Create new review record
      const nextReview = new Date()
      nextReview.setDate(nextReview.getDate() + (quality < 3 ? 1 : 1))
      await supabase.from('flashcard_reviews').upsert({
        user_id: userId,
        card_id: card.id,
        next_review_at: nextReview.toISOString(),
        ease_factor: 2.5,
        interval_days: 1,
      }, { onConflict: 'user_id,card_id' })
    }

    await supabase.rpc('add_xp', { p_user_id: userId, p_amount: 5 })

    if (quality < 3) {
      setQueue((q) => [...q, q[current]])
    }

    if (current >= queue.length - 1) {
      setDone(true)
    } else {
      setCurrent((c) => c + 1)
      setFlipped(false)
    }
  }

  // ── Done screen ──────────────────────────────────────────────────────────────
  if (done) {
    const total = stats.easy + stats.good + stats.hard + stats.again
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Session Complete</h1>
        <Card className="text-center py-10">
          <CardContent className="space-y-6">
            <Trophy className="h-16 w-16 text-[var(--accent)] mx-auto" />
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--fg)]">Great session!</h2>
              <p className="text-[var(--muted-fg)] mt-1">+{total * 5} XP earned · {queue.length} cards reviewed</p>
            </div>
            <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
              {[
                { label: 'Easy', count: stats.easy, color: 'bg-green-500' },
                { label: 'Good', count: stats.good, color: 'bg-blue-500' },
                { label: 'Hard', count: stats.hard, color: 'bg-amber-500' },
                { label: 'Again', count: stats.again, color: 'bg-red-500' },
              ].map(({ label, count, color }) => (
                <div key={label} className="text-center">
                  <div className={`text-xl font-black text-white rounded-lg py-2 ${color}`}>{count}</div>
                  <div className="text-xs text-[var(--muted-fg)] mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => { setSessionStarted(false); setDone(false) }}>
                Change filter
              </Button>
              <Button variant="gold" onClick={startSession}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Review again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Active session ───────────────────────────────────────────────────────────
  if (sessionStarted && queue.length > 0) {
    const card = queue[current]
    const progressPct = (current / queue.length) * 100

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[var(--fg)]">Flashcard Review</h1>
            <p className="text-[var(--muted-fg)] text-sm mt-0.5">{card.lessonTitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-sm font-bold text-[var(--fg)]">{current + 1} / {queue.length}</span>
          </div>
        </div>

        <Progress value={progressPct} className="h-2" />

        {/* Card */}
        <div
          className="cursor-pointer min-h-[280px]"
          onClick={() => setFlipped(!flipped)}
          onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && setFlipped(!flipped)}
          tabIndex={0}
          role="button"
          aria-label={flipped ? 'Showing answer. Click to flip.' : 'Click to reveal answer.'}
        >
          <Card className={cn(
            'min-h-[280px] flex flex-col transition-all duration-300 hover:shadow-lg',
            flipped ? 'border-[var(--accent)]/40' : ''
          )}>
            <CardContent className="flex flex-1 flex-col items-center justify-center p-8 text-center gap-4">
              <Badge variant={flipped ? 'gold' : 'muted'}>
                {flipped ? 'Answer' : 'Question'}
              </Badge>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-[var(--fg)] leading-relaxed">
                  {flipped ? card.back : card.front}
                </p>
                {flipped && card.hint && (
                  <p className="text-sm text-[var(--muted-fg)] italic">{card.hint}</p>
                )}
                {!flipped && (
                  <p className="text-sm text-[var(--muted-fg)]">Tap to reveal</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          {card.tags.map((t) => (
            <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
          ))}
        </div>

        {/* Rating buttons */}
        {flipped && (
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Again', quality: 0, color: 'border-red-500/40 text-red-600 dark:text-red-400 hover:bg-red-500/10' },
              { label: 'Hard', quality: 2, color: 'border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10' },
              { label: 'Good', quality: 3, color: 'border-blue-500/40 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10' },
              { label: 'Easy', quality: 5, color: 'border-green-500/40 text-green-600 dark:text-green-400 hover:bg-green-500/10' },
            ].map(({ label, quality, color }) => (
              <Button key={label} variant="outline" className={`border-2 ${color}`} onClick={() => rate(quality)}>
                {label}
              </Button>
            ))}
          </div>
        )}

        {!flipped && (
          <Button variant="outline" className="w-full" onClick={() => setFlipped(true)}>
            Show answer
          </Button>
        )}
      </div>
    )
  }

  // ── Filter / Selection screen ────────────────────────────────────────────────
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[var(--fg)]">Flashcards</h1>
        <p className="text-[var(--muted-fg)] mt-1">
          Module 1: The Economic Way of Thinking · {cards.length} cards total
        </p>
      </div>

      {/* Filter mode tabs */}
      <div className="flex gap-1 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-1 max-w-sm">
        {(['module', 'lesson', 'tag'] as FilterMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => { setFilterMode(mode); setSelectedLesson(null); setSelectedTag(null) }}
            className={cn(
              'flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all capitalize',
              filterMode === mode
                ? 'bg-[var(--card-bg)] text-[var(--fg)] shadow-sm'
                : 'text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            {mode === 'module' ? 'Whole Module' : mode === 'lesson' ? 'By Lesson' : 'By Topic'}
          </button>
        ))}
      </div>

      {/* Whole module */}
      {filterMode === 'module' && (
        <Card className="border-[var(--accent)]/30 bg-[var(--accent)]/5">
          <CardContent className="pt-5 pb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15">
                <BookOpen className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <div>
                <p className="font-bold text-[var(--fg)]">The Economic Way of Thinking</p>
                <p className="text-xs text-[var(--muted-fg)] mt-0.5">{cards.length} flashcards · All 5 lessons</p>
              </div>
            </div>
            <Button variant="gold" className="gap-1.5" onClick={startSession}>
              Start
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* By lesson */}
      {filterMode === 'lesson' && (
        <div className="space-y-3">
          {lessons.map((lesson) => {
            const isSelected = selectedLesson === lesson.id
            return (
              <Card
                key={lesson.id}
                className={cn(
                  'cursor-pointer transition-all hover:shadow-md border-2',
                  isSelected ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)]'
                )}
                onClick={() => setSelectedLesson(isSelected ? null : lesson.id)}
              >
                <CardContent className="pt-4 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black',
                      isSelected ? 'bg-[var(--accent)] text-[var(--accent-fg)]' : 'bg-[var(--muted)] text-[var(--muted-fg)]'
                    )}>
                      {lesson.order}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[var(--fg)]">{lesson.title}</p>
                      <p className="text-xs text-[var(--muted-fg)]">{lesson.count} cards</p>
                    </div>
                  </div>
                  {isSelected && <Badge variant="gold">Selected</Badge>}
                </CardContent>
              </Card>
            )
          })}
          {selectedLesson && (
            <Button variant="gold" className="w-full gap-2 mt-2" onClick={startSession}>
              Start session · {filteredCards.length} cards
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      )}

      {/* By topic/tag */}
      {filterMode === 'tag' && (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all',
                  selectedTag === tag
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-fg)]'
                    : 'border-[var(--border)] text-[var(--muted-fg)] hover:border-[var(--accent)]/50 hover:text-[var(--fg)]'
                )}
              >
                <Filter className="inline h-3 w-3 mr-1" />
                {tag}
              </button>
            ))}
          </div>

          {selectedTag && (
            <div className="space-y-3">
              <p className="text-sm text-[var(--muted-fg)]">
                {filteredCards.length} cards tagged <span className="font-semibold text-[var(--fg)]">#{selectedTag}</span>
              </p>
              {filteredCards.map((card) => (
                <Card key={card.id} className="border border-[var(--border)]">
                  <CardContent className="pt-3 pb-3">
                    <p className="text-sm font-medium text-[var(--fg)]">{card.front}</p>
                    <p className="text-xs text-[var(--muted-fg)] mt-1">{card.lessonTitle}</p>
                  </CardContent>
                </Card>
              ))}
              <Button variant="gold" className="w-full gap-2" onClick={startSession}>
                Start session · {filteredCards.length} cards
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
