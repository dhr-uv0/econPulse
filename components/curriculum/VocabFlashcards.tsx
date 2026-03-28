'use client'

import { useState } from 'react'
import type { VocabTerm } from '@/lib/types'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, RotateCcw, Zap } from 'lucide-react'

interface Props {
  vocab: VocabTerm[]
  lessonId: string
  userId: string
}

export function VocabFlashcards({ vocab, lessonId, userId }: Props) {
  const supabase = createClient()
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<number>>(new Set())
  const [learning, setLearning] = useState<Set<number>>(new Set())

  const card = vocab[current]
  const total = vocab.length
  const doneCount = known.size + learning.size

  async function handleRating(rating: 'know' | 'learning') {
    const newSet = rating === 'know' ? new Set(known).add(current) : new Set(learning).add(current)
    if (rating === 'know') setKnown(newSet)
    else setLearning(newSet)

    // Schedule for spaced repetition
    const cardId = `${lessonId}-vocab-${current}`
    const easeFactor = rating === 'know' ? 2.5 : 1.8
    const intervalDays = rating === 'know' ? 3 : 1
    const nextReview = new Date()
    nextReview.setDate(nextReview.getDate() + intervalDays)

    await supabase.from('flashcard_reviews').upsert(
      {
        user_id: userId,
        card_id: cardId,
        ease_factor: easeFactor,
        interval_days: intervalDays,
        next_review_at: nextReview.toISOString(),
      },
      { onConflict: 'user_id,card_id' }
    )

    // Auto-advance
    if (current < total - 1) {
      setTimeout(() => { setCurrent(current + 1); setFlipped(false) }, 300)
    }
  }

  if (!vocab.length) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-[var(--muted-fg)]">
          No vocabulary flashcards for this lesson.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="h-4 w-4 text-[var(--accent)]" />
          <span className="text-sm font-semibold text-[var(--fg)]">Vocabulary</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--muted-fg)]">
          <span>{current + 1} / {total}</span>
          {known.size > 0 && <Badge variant="success">{known.size} known</Badge>}
          {learning.size > 0 && <Badge variant="warning">{learning.size} learning</Badge>}
        </div>
      </div>

      {/* Flashcard */}
      <div
        className="cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        onKeyDown={(e) => e.key === ' ' || e.key === 'Enter' ? setFlipped(!flipped) : undefined}
        tabIndex={0}
        role="button"
        aria-label={flipped ? 'Click to see term' : 'Click to see definition'}
      >
        <Card className={cn(
          'min-h-[200px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg',
          known.has(current) && 'border-green-500/40',
          learning.has(current) && 'border-amber-500/40'
        )}>
          <CardContent className="pt-6 flex flex-col items-center justify-center gap-4 min-h-[200px]">
            <Badge variant={flipped ? 'muted' : 'gold'} className="text-[10px] uppercase tracking-wider">
              {flipped ? 'Definition' : 'Term'}
            </Badge>

            {!flipped ? (
              <div className="text-center">
                <h3 className="text-2xl font-extrabold text-[var(--fg)]">{card.term}</h3>
                <p className="mt-2 text-xs text-[var(--muted-fg)]">Click to reveal definition</p>
              </div>
            ) : (
              <div className="text-center space-y-3">
                <p className="text-base text-[var(--fg)] leading-relaxed">{card.definition}</p>
                {card.example && (
                  <div className="rounded-lg bg-[var(--muted)] px-4 py-2 text-sm text-[var(--muted-fg)] italic">
                    <strong className="not-italic text-[var(--fg)]">Example: </strong>
                    {card.example}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Rating buttons (shown after flip) */}
      {flipped && (
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
            onClick={() => handleRating('learning')}
          >
            Still learning
          </Button>
          <Button
            variant="outline"
            className="border-green-500/40 text-green-600 dark:text-green-400 hover:bg-green-500/10"
            onClick={() => handleRating('know')}
          >
            Got it ✓
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setCurrent(Math.max(0, current - 1)); setFlipped(false) }}
          disabled={current === 0}
          className="gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </Button>

        <button
          onClick={() => { setCurrent(0); setFlipped(false); setKnown(new Set()); setLearning(new Set()) }}
          className="text-xs text-[var(--muted-fg)] hover:text-[var(--fg)] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setCurrent(Math.min(total - 1, current + 1)); setFlipped(false) }}
          disabled={current === total - 1}
          className="gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Summary when done */}
      {doneCount === total && (
        <Card className="border-green-500/30 bg-green-500/10">
          <CardContent className="pt-4 pb-4 text-center">
            <p className="font-semibold text-green-600 dark:text-green-400">
              All {total} terms reviewed!
              {known.size === total ? ' Perfect score!' : ` ${learning.size} still being learned.`}
            </p>
            <p className="text-xs text-[var(--muted-fg)] mt-1">
              Learning cards added to your spaced repetition queue.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
