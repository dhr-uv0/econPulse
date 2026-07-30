import { describe, it, expect } from 'vitest'
import { cn, formatDate, formatRelativeTime, clampProgress, levelFromXP, getInitials } from './utils'

describe('cn', () => {
  it('merges class names and resolves Tailwind conflicts', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('drops falsy values', () => {
    expect(cn('a', false, undefined, null, 'b')).toBe('a b')
  })
})

describe('formatDate', () => {
  // Construct dates via local-time components (not UTC ISO strings) since
  // formatDate/toLocaleDateString both operate in the local timezone —
  // mixing UTC input with local-timezone formatting is what causes off-by-
  // one-day flakiness across timezones.
  it('formats a date string as "Month D, YYYY"', () => {
    expect(formatDate(new Date(2026, 0, 15).toISOString())).toBe('January 15, 2026')
  })

  it('accepts a Date object', () => {
    expect(formatDate(new Date(2026, 5, 1))).toBe('June 1, 2026')
  })
})

describe('formatRelativeTime', () => {
  it('returns "just now" for under a minute ago', () => {
    expect(formatRelativeTime(new Date(Date.now() - 30_000))).toBe('just now')
  })

  it('returns minutes ago for under an hour', () => {
    expect(formatRelativeTime(new Date(Date.now() - 5 * 60_000))).toBe('5m ago')
  })

  it('returns hours ago for under a day', () => {
    expect(formatRelativeTime(new Date(Date.now() - 3 * 60 * 60_000))).toBe('3h ago')
  })

  it('returns days ago for under a week', () => {
    expect(formatRelativeTime(new Date(Date.now() - 2 * 24 * 60 * 60_000))).toBe('2d ago')
  })

  it('falls back to a formatted date at a week or more', () => {
    const eightDaysAgo = new Date(Date.now() - 8 * 24 * 60 * 60_000)
    expect(formatRelativeTime(eightDaysAgo)).toBe(formatDate(eightDaysAgo))
  })
})

describe('clampProgress', () => {
  it('clamps values below 0 up to 0', () => {
    expect(clampProgress(-15)).toBe(0)
  })

  it('clamps values above 100 down to 100', () => {
    expect(clampProgress(142)).toBe(100)
  })

  it('leaves in-range values unchanged', () => {
    expect(clampProgress(57)).toBe(57)
  })
})

describe('levelFromXP', () => {
  it('starts at level 1 with 0 XP', () => {
    expect(levelFromXP(0)).toEqual({ level: 1, title: 'Curious Novice', nextLevelXP: 100 })
  })

  it('stays at level 1 just below the next threshold', () => {
    expect(levelFromXP(99)).toMatchObject({ level: 1, title: 'Curious Novice' })
  })

  it('advances exactly at a threshold boundary (inclusive)', () => {
    expect(levelFromXP(100)).toMatchObject({ level: 2, title: 'Economic Apprentice' })
  })

  it('reaches the max level with a very large XP total', () => {
    const result = levelFromXP(1_000_000)
    expect(result.level).toBe(11)
    expect(result.title).toBe('Grand Economist')
    expect(result.nextLevelXP).toBe(Infinity)
  })

  it('never returns a negative level for negative XP input', () => {
    expect(levelFromXP(-50).level).toBe(1)
  })
})

describe('getInitials', () => {
  it('returns "?" for null', () => {
    expect(getInitials(null)).toBe('?')
  })

  it('returns "?" for an empty string', () => {
    expect(getInitials('')).toBe('?')
  })

  it('takes the first letter of each of the first two words, uppercased', () => {
    expect(getInitials('dhruv mantha')).toBe('DM')
  })

  it('caps at two characters for names with more than two words', () => {
    expect(getInitials('Ada Lovelace Byron')).toBe('AL')
  })

  it('handles a single-word name', () => {
    expect(getInitials('Plato')).toBe('P')
  })
})
