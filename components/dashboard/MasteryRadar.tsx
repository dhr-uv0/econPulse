'use client'

import { useMemo } from 'react'
import type { CurriculumProgress } from '@/lib/types'
import { CURRICULUM } from '@/lib/curriculum/data'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'

interface Props { progress: CurriculumProgress[] }

// Curriculum tiers, in curriculum order. `curriculum_progress.module_name` is stored
// as the module id (e.g. 'ib1-intro', 'ap6-open') — not a tier key — so mastery is
// aggregated by looking up each module's tier via CURRICULUM, not by matching
// module_name directly against a tier label.
const TIERS: { key: string; label: string }[] = [
  { key: 'FOUNDATIONS',  label: 'Foundations' },
  { key: 'INTERMEDIATE', label: 'Intermediate' },
  { key: 'AP',           label: 'AP' },
  { key: 'IB',           label: 'IB' },
  { key: 'OLYMPIAD',     label: 'Olympiad' },
  { key: 'DECA',         label: 'DECA' },
]

export function MasteryRadar({ progress }: Props) {
  const data = useMemo(() => {
    const tierForModule = new Map<string, string>()
    const totalByTier = new Map<string, number>()
    for (const curriculumModule of CURRICULUM) {
      const tier = curriculumModule.tier ?? 'FOUNDATIONS'
      tierForModule.set(curriculumModule.id, tier)
      totalByTier.set(tier, (totalByTier.get(tier) ?? 0) + curriculumModule.lessons.length)
    }

    const doneByTier = new Map<string, number>()
    for (const p of progress) {
      if (p.status !== 'completed') continue
      const tier = tierForModule.get(p.module_name)
      if (!tier) continue
      doneByTier.set(tier, (doneByTier.get(tier) ?? 0) + 1)
    }

    return TIERS.map(({ key, label }) => {
      const total = totalByTier.get(key) ?? 0
      const done = doneByTier.get(key) ?? 0
      const pct = total > 0 ? Math.round((done / total) * 100) : 0
      return { subject: label, mastery: pct }
    })
  }, [progress])

  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="var(--border)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: 'var(--muted-fg)', fontSize: 10 }}
        />
        <Radar
          name="Mastery"
          dataKey="mastery"
          stroke="#e8c547"
          fill="#e8c547"
          fillOpacity={0.25}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'var(--fg)',
          }}
          formatter={(v: number) => [`${v}%`, 'Mastery']}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
