'use client'

import { useMemo, useState } from 'react'
import type { CurriculumProgress } from '@/lib/types'

const WEEKS = 26
const TOTAL_DAYS = WEEKS * 7
const CELL = 12 // px, cell width/height
const GAP = 3   // px, gap between cells — single source of truth for spacing
const PITCH = CELL + GAP

function localDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

interface DayCell {
  date: Date
  count: number
  level: number
}

// Builds the last TOTAL_DAYS of real activity from the user's actual lesson-visit
// timestamps, bucketing "lessons touched that day" into a 0-5 intensity scale.
function buildDays(progress: CurriculumProgress[]): DayCell[] {
  const countByDay = new Map<string, number>()
  for (const p of progress) {
    if (!p.last_accessed) continue
    const key = localDateKey(new Date(p.last_accessed))
    countByDay.set(key, (countByDay.get(key) ?? 0) + 1)
  }

  const today = new Date()
  const days: DayCell[] = []
  for (let i = TOTAL_DAYS - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const count = countByDay.get(localDateKey(d)) ?? 0
    const level = count === 0 ? 0 : count === 1 ? 1 : count <= 2 ? 2 : count <= 4 ? 3 : count <= 6 ? 4 : 5
    days.push({ date: d, count, level })
  }
  return days
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

interface Props {
  progress: CurriculumProgress[]
}

export function StreakHeatmap({ progress }: Props) {
  const days = useMemo(() => buildDays(progress), [progress])
  const [hovered, setHovered] = useState<DayCell | null>(null)

  // Pad the front with nulls so column boundaries line up with real Sun-Sat
  // calendar weeks — otherwise a row doesn't consistently represent the same
  // weekday across every column, which is what made the day labels meaningless.
  const { weeks, monthLabels, activeDays } = useMemo(() => {
    const firstWeekday = days[0]?.date.getDay() ?? 0
    const padded: (DayCell | null)[] = [...Array(firstWeekday).fill(null), ...days]
    const weekCount = Math.ceil(padded.length / 7)
    const weeksOut: (DayCell | null)[][] = []
    for (let w = 0; w < weekCount; w++) {
      weeksOut.push(padded.slice(w * 7, w * 7 + 7))
    }

    const labels: { label: string; col: number }[] = []
    let lastMonth = -1
    weeksOut.forEach((week, w) => {
      const firstReal = week.find((d): d is DayCell => d !== null)
      if (!firstReal) return
      if (firstReal.date.getMonth() !== lastMonth) {
        labels.push({ label: MONTHS[firstReal.date.getMonth()], col: w })
        lastMonth = firstReal.date.getMonth()
      }
    })

    return { weeks: weeksOut, monthLabels: labels, activeDays: days.filter((d) => d.count > 0).length }
  }, [days])

  const shown = hovered ?? days[days.length - 1]

  return (
    <div>
      <div className="mb-3 text-xs text-[var(--muted-fg)]">
        <strong className="text-[var(--fg)]">{activeDays}</strong> active {activeDays === 1 ? 'day' : 'days'} in the last {WEEKS * 7} days
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block">
          {/* Month labels */}
          <div className="relative mb-1" style={{ height: 14, marginLeft: 20 }}>
            {monthLabels.map(({ label, col }) => (
              <span
                key={label + col}
                className="absolute top-0 text-[10px] text-[var(--muted-fg)]"
                style={{ left: col * PITCH }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex" style={{ gap: GAP }}>
            {/* Day-of-week labels — every row labelled, so it's unambiguous which
                weekday each row is (was previously only Mon/Wed/Fri, with rows
                that didn't even reliably align to real weeks). */}
            <div className="flex flex-col" style={{ gap: GAP, width: 16 }}>
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  className="text-right text-[9px] leading-none text-[var(--muted-fg)]"
                  style={{ height: CELL, lineHeight: `${CELL}px` }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Cells */}
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                {week.map((day, di) =>
                  day ? (
                    <button
                      key={di}
                      type="button"
                      className={`heat-${day.level} rounded-sm transition-transform hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]`}
                      style={{ width: CELL, height: CELL }}
                      onMouseEnter={() => setHovered(day)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(day)}
                      onBlur={() => setHovered(null)}
                      aria-label={`${day.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}: ${day.count} ${day.count === 1 ? 'lesson' : 'lessons'} studied`}
                    />
                  ) : (
                    <div key={di} style={{ width: CELL, height: CELL }} />
                  )
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[var(--muted-fg)]" style={{ marginLeft: 20 }}>
            <span>Less</span>
            {[0, 1, 2, 3, 4, 5].map((l) => (
              <div key={l} className={`heat-${l} rounded-sm`} style={{ width: CELL, height: CELL }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Detail readout — shows the hovered/focused day, or today by default,
          so the grid never looks like an unexplained wall of color. */}
      {shown && (
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-2.5 py-1.5 text-xs">
          <span className="font-semibold text-[var(--fg)]">
            {shown.count === 0 ? 'No activity' : `${shown.count} ${shown.count === 1 ? 'lesson' : 'lessons'} studied`}
          </span>
          <span className="text-[var(--muted-fg)]">
            {shown.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      )}
    </div>
  )
}
