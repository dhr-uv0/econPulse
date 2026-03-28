'use client'

import type { CurriculumProgress } from '@/lib/types'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts'

interface Props { progress: CurriculumProgress[] }

const AXES = [
  { key: 'ib-intro',   label: 'Foundations' },
  { key: 'ib-micro',   label: 'Micro' },
  { key: 'ib-macro',   label: 'Macro' },
  { key: 'ib-intl',    label: 'International' },
  { key: 'aeo-micro',  label: 'Adv Micro' },
  { key: 'aeo-macro',  label: 'Adv Macro' },
  { key: 'deca',       label: 'DECA' },
  { key: 'principles', label: 'Principles' },
]

export function MasteryRadar({ progress }: Props) {
  const data = AXES.map(({ key, label }) => {
    const mod = progress.filter((p) => p.module_name === key)
    const done = mod.filter((p) => p.status === 'completed').length
    const pct = mod.length > 0 ? Math.round((done / mod.length) * 100) : 0
    return { subject: label, mastery: pct }
  })

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
