'use client'

import { useMemo } from 'react'

// Generates 52 weeks × 7 days of fake-but-realistic activity for display
function generateHeatmapData(): number[] {
  const data: number[] = []
  const today = new Date()
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    // Simulate activity — in production this comes from Supabase
    const rand = Math.random()
    if (rand < 0.35) data.push(0)
    else if (rand < 0.55) data.push(1)
    else if (rand < 0.70) data.push(2)
    else if (rand < 0.82) data.push(3)
    else if (rand < 0.92) data.push(4)
    else data.push(5)
  }
  return data
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAYS   = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export function StreakHeatmap() {
  const data = useMemo(() => generateHeatmapData(), [])

  // Split into 52 weeks (some may be partial)
  const weeks: number[][] = []
  for (let w = 0; w < 52; w++) {
    weeks.push(data.slice(w * 7, w * 7 + 7))
  }

  // Month labels (approximate positions)
  const today = new Date()
  const monthLabels: { label: string; col: number }[] = []
  let lastMonth = -1
  for (let w = 0; w < 52; w++) {
    const d = new Date(today)
    d.setDate(today.getDate() - (364 - w * 7))
    if (d.getMonth() !== lastMonth) {
      monthLabels.push({ label: MONTHS[d.getMonth()], col: w })
      lastMonth = d.getMonth()
    }
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month labels */}
        <div className="relative mb-1 ml-8 flex">
          {monthLabels.map(({ label, col }) => (
            <span
              key={label + col}
              className="absolute text-[10px] text-[var(--muted-fg)]"
              style={{ left: `${col * 14}px` }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 mr-1">
            {DAYS.map((d, i) => (
              <div key={i} className="h-3 w-6 text-right text-[10px] leading-3 text-[var(--muted-fg)]">
                {d}
              </div>
            ))}
          </div>

          {/* Cells */}
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`h-3 w-3 rounded-sm heat-${level} transition-opacity hover:opacity-80`}
                  title={`Activity level: ${level}`}
                  aria-label={`Week ${wi + 1}, day ${di + 1}: activity level ${level}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-2 ml-8 flex items-center gap-2 text-[10px] text-[var(--muted-fg)]">
          <span>Less</span>
          {[0,1,2,3,4,5].map((l) => (
            <div key={l} className={`h-3 w-3 rounded-sm heat-${l}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
