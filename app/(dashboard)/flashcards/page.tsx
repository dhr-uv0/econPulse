import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { FlashcardsHub } from '@/components/flashcards/FlashcardsHub'
import { CURRICULUM } from '@/lib/curriculum/data'
import type { FlashcardEntry } from '@/components/flashcards/FlashcardsHub'

export const metadata: Metadata = { title: 'Flashcards' }

export default async function FlashcardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  // Build flat list of every flashcard across the whole curriculum, with lesson/module context
  const allCards: FlashcardEntry[] = CURRICULUM.flatMap((module) =>
    module.lessons.flatMap((lesson) =>
      lesson.flashcards.map((fc) => ({
        id: fc.id,
        front: fc.front,
        back: fc.back,
        hint: fc.hint,
        tags: fc.tags,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonOrder: lesson.order,
        moduleId: module.id,
        moduleTitle: module.title,
      }))
    )
  )

  // Load existing SM-2 review data for this user (scoped by user_id alone —
  // no need to also filter by card_id, since a user's own review rows are
  // already bounded to whatever they've actually studied)
  const { data: reviews } = await supabase
    .from('flashcard_reviews')
    .select('*')
    .eq('user_id', user.id)

  const reviewMap = new Map((reviews ?? []).map((r) => [r.card_id, r]))

  // Attach review data to each card
  const enriched: FlashcardEntry[] = allCards.map((c) => ({
    ...c,
    review: reviewMap.get(c.id),
  }))

  return (
    <FlashcardsHub cards={enriched} userId={user.id} />
  )
}
