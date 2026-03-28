import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const then = new Date(date)
  const diffMs = now.getTime() - then.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(date)
}

export function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value))
}

export function levelFromXP(xp: number): { level: number; title: string; nextLevelXP: number } {
  const levels = [
    { min: 0,     title: 'Curious Novice',       next: 100   },
    { min: 100,   title: 'Economic Apprentice',   next: 300   },
    { min: 300,   title: 'Market Observer',       next: 600   },
    { min: 600,   title: 'Theory Builder',        next: 1000  },
    { min: 1000,  title: 'Policy Analyst',        next: 1600  },
    { min: 1600,  title: 'Equilibrium Seeker',    next: 2500  },
    { min: 2500,  title: 'Macro Strategist',      next: 4000  },
    { min: 4000,  title: 'Trade Architect',       next: 6000  },
    { min: 6000,  title: 'Olympiad Contender',    next: 9000  },
    { min: 9000,  title: 'Economics Scholar',     next: 13000 },
    { min: 13000, title: 'Grand Economist',       next: Infinity },
  ]
  const idx = levels.findLastIndex((l) => xp >= l.min)
  const level = levels[Math.max(0, idx)]
  return { level: idx + 1, title: level.title, nextLevelXP: level.next }
}

export function getInitials(name: string | null): string {
  if (!name) return '?'
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
}
