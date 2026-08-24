'use client'

import { useMemo } from 'react'

// A small, self-contained celebration burst — gold/accent-toned only (no
// rainbow), triggered by mounting this component at a genuine achievement
// moment (quiz pass, lesson complete, session complete).
//
// Particle layout is seeded (not Math.random()) so the component stays a
// pure render — same convention used for the other "simulated" visuals in
// this codebase (ProgressDashboard's weekly bars, StreakHeatmap).
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const COLORS = ['#c9a000', '#e8c547', '#f5d76e', '#0a0a0a']
const PARTICLE_COUNT = 18

interface Particle {
  left: number
  delay: number
  duration: number
  size: number
  color: string
  rotate: number
}

export function Confetti() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        left: seededRandom(i * 4 + 1) * 100,
        delay: seededRandom(i * 4 + 2) * 250,
        duration: 700 + seededRandom(i * 4 + 3) * 500,
        size: 5 + seededRandom(i * 4 + 4) * 5,
        color: COLORS[i % COLORS.length],
        rotate: seededRandom(i * 4 + 1) * 360,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-0 overflow-visible" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-confetti-fall absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
