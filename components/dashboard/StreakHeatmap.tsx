'use client'

import { useMemo } from 'react'
import type { CurriculumProgress } from '@/lib/types'

const TOTAL_DAYS = 365

// YYYY-MM-DD in local time — matches how `d` below is constructed (also
// local time), so grouping and lookup use the same calendar day consistently.
function localDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// Builds 365 days of real activity levels from the user's actual lesson-visit
// timestamps, bucketing "lessons touched that day" into the 0-5 intensity
// scale the heatmap cells render.
function buildHeatmapData(progress: CurriculumProgress[]): number[] {
  const countByDay = new Map<string, number>()
  for (const p of progress) {
    if (!p.last_accessed) continue
    const key = localDateKey(new Date(p.last_accessed))
    countByDay.set(key, (countByDay.get(key) ?? 0) + 1)
  }

  const today = new Date()
  const data: number[] = []
  for (let i = TOTAL_DAYS - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const count = countByDay.get(localDateKey(d)) ?? 0
    const level = count === 0 ? 0 : count === 1 ? 1 : count <= 2 ? 2 : count <= 4 ? 3 : count <= 6 ? 4 : 5
    data.push(level)
  }
  return data
}

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAYS   = ['', 'Mon', '', 'Wed', '', 'Fri', '']

interface Props {
  progress: CurriculumProgress[]
}

export function StreakHeatmap({ progress }: Props) {
  const data = useMemo(() => buildHeatmapData(progress), [progress])

  // Split into weeks (last week may be partial). Using Math.ceil ensures every
  // generated day — including today, the most recent entry — is actually rendered;
  // a fixed 52-week split silently dropped the final (most recent) day.
  const weekCount = Math.ceil(data.length / 7)
  const weeks: number[][] = []
  for (let w = 0; w < weekCount; w++) {
    weeks.push(data.slice(w * 7, w * 7 + 7))
  }

  // Month labels (approximate positions)
  const today = new Date()
  const monthLabels: { label: string; col: number }[] = []
  let lastMonth = -1
  for (let w = 0; w < weekCount; w++) {
    const d = new Date(today)
    d.setDate(today.getDate() - (data.length - 1 - w * 7))
    if (d.getMonth() !== lastMonth) {
      monthLabels.push({ label: MONTHS[d.getMonth()], col: w })
      lastMonth = d.getMonth()
    }
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month labels — explicit height since the labels inside are absolutely
            positioned and wouldn't otherwise contribute any height to this row,
            which left them overlapping the first row of cells below. */}
        <div className="relative h-3 mb-1 ml-8">
          {monthLabels.map(({ label, col }) => (
            <span
              key={label + col}
              className="absolute top-0 text-[10px] text-[var(--muted-fg)]"
              style={{ left: `${col * 16}px` }}
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
