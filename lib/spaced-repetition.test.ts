import { describe, it, expect } from 'vitest'
import { sm2 } from './spaced-repetition'

const REF_DATE = new Date('2026-06-15T12:00:00Z')

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

describe('sm2', () => {
  it('resets the interval to 1 day on a failing grade ("Again", quality 0)', () => {
    const result = sm2({ ease_factor: 2.5, interval_days: 30 }, 0, REF_DATE)
    expect(result.interval_days).toBe(1)
    expect(result.next_review_at).toBe(addDays(REF_DATE, 1).toISOString())
  })

  it('resets the interval to 1 day on "Hard" (quality 2, still below the passing threshold of 3)', () => {
    const result = sm2({ ease_factor: 2.5, interval_days: 10 }, 2, REF_DATE)
    expect(result.interval_days).toBe(1)
  })

  it('jumps a first-time pass (interval_days=1) straight to a 6-day interval', () => {
    const result = sm2({ ease_factor: 2.5, interval_days: 1 }, 3, REF_DATE)
    expect(result.interval_days).toBe(6)
  })

  it('grows the interval multiplicatively by the ease factor on subsequent passes', () => {
    const result = sm2({ ease_factor: 2.0, interval_days: 10 }, 3, REF_DATE)
    // quality=3 -> ef' = max(1.3, 2.0 + 0.1 - 2*(0.08+2*0.02)) = max(1.3, 2.0+0.1-0.24) = 1.86
    expect(result.ease_factor).toBeCloseTo(1.86, 5)
    expect(result.interval_days).toBe(Math.round(10 * 1.86))
  })

  it('never lets the ease factor drop below the 1.3 floor, even after repeated failures', () => {
    let state = { ease_factor: 1.35, interval_days: 5 }
    for (let i = 0; i < 5; i++) {
      const result = sm2(state, 0, REF_DATE)
      state = { ease_factor: result.ease_factor, interval_days: result.interval_days }
    }
    expect(state.ease_factor).toBeGreaterThanOrEqual(1.3)
  })

  it('increases the ease factor on a perfect recall ("Easy", quality 5)', () => {
    const result = sm2({ ease_factor: 2.5, interval_days: 10 }, 5, REF_DATE)
    // quality=5 -> ef' = 2.5 + 0.1 - 0*(...) = 2.6
    expect(result.ease_factor).toBeCloseTo(2.6, 5)
  })

  it('is a pure function: does not mutate the input state object', () => {
    const input = { ease_factor: 2.5, interval_days: 10 }
    const snapshot = { ...input }
    sm2(input, 3, REF_DATE)
    expect(input).toEqual(snapshot)
  })

  it('produces a monotonically increasing interval across consecutive "Good" reviews', () => {
    let state = { ease_factor: 2.5, interval_days: 1 }
    const intervals: number[] = []
    for (let i = 0; i < 5; i++) {
      const result = sm2(state, 3, REF_DATE)
      intervals.push(result.interval_days)
      state = { ease_factor: result.ease_factor, interval_days: result.interval_days }
    }
    for (let i = 1; i < intervals.length; i++) {
      expect(intervals[i]).toBeGreaterThanOrEqual(intervals[i - 1])
    }
  })

  it('defaults the reference date to now when not provided', () => {
    const before = Date.now()
    const result = sm2({ ease_factor: 2.5, interval_days: 1 }, 3)
    const nextReviewMs = new Date(result.next_review_at).getTime()
    // Should be ~6 days from "now" (within a small tolerance for test execution time)
    expect(nextReviewMs).toBeGreaterThan(before + 5 * 24 * 60 * 60 * 1000)
    expect(nextReviewMs).toBeLessThan(before + 7 * 24 * 60 * 60 * 1000)
  })
})
