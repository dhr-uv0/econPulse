// SM-2 spaced-repetition algorithm (SuperMemo 2), used to schedule the next
// review of a flashcard based on how well the student recalled it.

export interface SM2State {
  ease_factor: number
  interval_days: number
}

export interface SM2Result {
  ease_factor: number
  interval_days: number
  next_review_at: string
}

/**
 * @param quality 0-5 recall quality (0 = total blank, 5 = perfect recall).
 *   The app's rating buttons map to: Again=0, Hard=2, Good=3, Easy=5.
 * @param now Reference date the new interval is measured from. Defaults to
 *   the current time; accepting it as a parameter keeps the function pure
 *   and deterministic for testing.
 */
export function sm2(review: SM2State, quality: number, now: Date = new Date()): SM2Result {
  const ef = Math.max(1.3, review.ease_factor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  const interval =
    quality < 3
      ? 1
      : review.interval_days === 1
      ? 6
      : Math.round(review.interval_days * ef)
  const nextReview = new Date(now)
  nextReview.setDate(nextReview.getDate() + interval)
  return { ease_factor: ef, interval_days: interval, next_review_at: nextReview.toISOString() }
}
