'use client'

import type { QuizResult } from '@/lib/types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { formatDate } from '@/lib/utils'

interface Props { quizzes: QuizResult[] }

export function QuizScoreTrend({ quizzes }: Props) {
  const data = [...quizzes]
    .reverse()
    .map((q) => ({
      date: formatDate(q.completed_at),
      score: Math.round((q.score / q.total_questions) * 100),
      passed: q.passed,
    }))

  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="date" tick={{ fill: 'var(--muted-fg)', fontSize: 10 }} tickLine={false} />
        <YAxis domain={[0, 100]} tick={{ fill: 'var(--muted-fg)', fontSize: 10 }} tickLine={false} axisLine={false} />
        <ReferenceLine y={70} stroke="var(--accent)" strokeDasharray="4 4" strokeOpacity={0.5} label={{ value: 'Pass', fill: 'var(--accent)', fontSize: 10 }} />
        <Tooltip
          contentStyle={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'var(--fg)',
          }}
          formatter={(v: number) => [`${v}%`, 'Score']}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#e8c547"
          strokeWidth={2}
          dot={{ fill: '#e8c547', r: 4, strokeWidth: 0 }}
          activeDot={{ r: 6, fill: '#e8c547' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
