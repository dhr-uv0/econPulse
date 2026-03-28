import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { FlashcardReviewSession } from '@/components/flashcards/FlashcardReviewSession'
import { CURRICULUM } from '@/lib/curriculum/data'

export const metadata: Metadata = { title: 'Flashcard Review' }

export default async function FlashcardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const now = new Date().toISOString()
  const { data: dueReviews } = await supabase
    .from('flashcard_reviews')
    .select('*')
    .eq('user_id', user.id)
    .lte('next_review_at', now)
    .order('next_review_at', { ascending: true })
    .limit(30)

  // Build flashcard objects from curriculum data
  const allFlashcards = CURRICULUM.flatMap((m) =>
    m.lessons.flatMap((l) => l.flashcards.map((fc) => ({ ...fc, moduleTitle: m.title, lessonTitle: l.title })))
  )

  const cardMap = new Map(allFlashcards.map((fc) => [fc.id, fc]))

  const dueCards = dueReviews
    ?.map((r) => ({ review: r, card: cardMap.get(r.card_id) }))
    .filter((x) => x.card !== undefined) ?? []

  return (
    <FlashcardReviewSession
      dueCards={dueCards as Parameters<typeof FlashcardReviewSession>[0]['dueCards']}
      userId={user.id}
      allCards={allFlashcards.slice(0, 20)} // New cards for today
    />
  )
}
