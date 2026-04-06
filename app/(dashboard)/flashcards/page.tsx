import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { FlashcardsHub } from '@/components/flashcards/FlashcardsHub'
import { lessons as f1Lessons, moduleInfo as f1Info } from '@/lib/curriculum/modules/f1-thinking'
import type { FlashcardEntry } from '@/components/flashcards/FlashcardsHub'

export const metadata: Metadata = { title: 'Flashcards' }

export default async function FlashcardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  // Build flat list of all Module 1 flashcards with lesson context
  const allCards: FlashcardEntry[] = f1Lessons.flatMap((lesson) =>
    lesson.flashcards.map((fc) => ({
      id: fc.id,
      front: fc.front,
      back: fc.back,
      hint: fc.hint,
      tags: fc.tags,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order,
      moduleId: f1Info.id,
      moduleTitle: f1Info.title,
    }))
  )

  // Load existing SM-2 review data for this user
  const { data: reviews } = await supabase
    .from('flashcard_reviews')
    .select('*')
    .eq('user_id', user.id)
    .in('card_id', allCards.map((c) => c.id))

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
