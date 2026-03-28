'use client'

import { useState } from 'react'
import type { FlashcardReview, Flashcard } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Zap, Trophy, Clock, RefreshCw } from 'lucide-react'

interface EnrichedCard extends Flashcard {
  moduleTitle: string
  lessonTitle: string
}

interface DueCard {
  review: FlashcardReview
  card: EnrichedCard
}

interface Props {
  dueCards: DueCard[]
  userId: string
  allCards: EnrichedCard[]
}

// SM-2 algorithm: update ease factor and interval based on quality rating (0-5)
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

export function FlashcardReviewSession({ dueCards, userId, allCards }: Props) {
  const supabase = createClient()
  const [queue, setQueue] = useState<DueCard[]>(dueCards)
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const [stats, setStats] = useState({ easy: 0, good: 0, hard: 0, again: 0 })

  const total = queue.length
  const card = queue[current]

  async function rate(quality: number) {
    const label =
      quality >= 4 ? 'easy' : quality >= 3 ? 'good' : quality >= 2 ? 'hard' : 'again'
    setStats((s) => ({ ...s, [label]: s[label as keyof typeof s] + 1 }))

    const updated = sm2(card.review, quality)
    await supabase
      .from('flashcard_reviews')
      .update(updated)
      .eq('id', card.review.id)

    // Award XP for review
    await supabase.rpc('add_xp', { p_user_id: userId, p_amount: 5 })

    if (quality < 3) {
      // Put back in queue if hard/again
      setQueue((q) => [...q, q[current]])
    }

    if (current >= queue.length - 1) {
      setDone(true)
    } else {
      setCurrent((c) => c + 1)
      setFlipped(false)
    }
  }

  // Empty state
  if (!total && !done) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Flashcard Review</h1>
          <p className="text-[var(--muted-fg)] mt-1">Spaced repetition — powered by SM-2</p>
        </div>

        <Card className="text-center py-16">
          <CardContent>
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-[var(--fg)] mb-2">All caught up!</h2>
            <p className="text-[var(--muted-fg)] mb-6">
              No cards are due for review right now. Keep studying to build your queue.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => window.location.href = '/curriculum'}>
                Study new material
              </Button>
              <Button variant="gold">
                Review all cards
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Done screen
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
              <p className="text-[var(--muted-fg)] mt-1">+{total * 5} XP earned</p>
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

            <Button variant="gold" onClick={() => { setCurrent(0); setDone(false); setFlipped(false) }}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Review again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const progressPct = (current / total) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--fg)]">Daily Review</h1>
          <p className="text-[var(--muted-fg)] text-sm">{card?.card.moduleTitle} · {card?.card.lessonTitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-[var(--accent)]" />
          <span className="text-sm font-bold text-[var(--fg)]">{current + 1} / {total}</span>
        </div>
      </div>

      {/* Progress bar */}
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

            {card && (
              <div className="space-y-3">
                <p className="text-lg font-semibold text-[var(--fg)] leading-relaxed">
                  {flipped ? card.card.back : card.card.front}
                </p>
                {flipped && card.card.hint && (
                  <p className="text-sm text-[var(--muted-fg)] italic">{card.card.hint}</p>
                )}
                {!flipped && (
                  <p className="text-sm text-[var(--muted-fg)]">
                    <Clock className="inline h-3.5 w-3.5 mr-1" />
                    Tap to reveal
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
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
            <Button
              key={label}
              variant="outline"
              className={`border-2 ${color}`}
              onClick={() => rate(quality)}
            >
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
