'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart,
} from 'recharts'

interface Props {
  lessonId: string
  diagramType: string
}

export function InteractiveDiagram({ lessonId, diagramType }: Props) {
  switch (diagramType) {
    case 'demand-curve-shifter': return <DemandCurveShifter />
    case 'ppc-slider':           return <PPCSlider />
    case 'scarcity-slider':      return <ScarcityDiagram />
    case 'price-mechanism-simulator': return <PriceMechanism />
    default:                     return <DefaultDiagram lessonId={lessonId} />
  }
}

/* ── Supply & Demand Diagram ─────────────────────────────────────────────── */
function DemandCurveShifter() {
  const [demandShift, setDemandShift] = useState(0)   // -2 to +2
  const [supplyShift, setSupplyShift] = useState(0)   // -2 to +2
  const [showSurplus, setShowSurplus] = useState(false)

  const D_INTERCEPT = 10 + demandShift * 1.5
  const S_INTERCEPT = 2  + supplyShift * 1.5
  const D_SLOPE = -0.8
  const S_SLOPE = 0.6

  // Equilibrium: D_INTERCEPT + D_SLOPE * Q = S_INTERCEPT + S_SLOPE * Q
  const eqQ = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqP = D_INTERCEPT + D_SLOPE * eqQ

  const data = Array.from({ length: 11 }, (_, i) => {
    const q = i
    return {
      q,
      demand: Math.max(0, D_INTERCEPT + D_SLOPE * q),
      supply: Math.max(0, S_INTERCEPT + S_SLOPE * q),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Supply &amp; Demand Interactive</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Shift the curves to see how equilibrium price and quantity change.
          </p>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Quantity', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              domain={[0, 14]}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Qty: ${v}`}
            />
            <ReferenceLine
              x={eqQ.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Q* = ${eqQ.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }}
            />
            <ReferenceLine
              y={eqP.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `P* = $${eqP.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }}
            />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply" />
          </LineChart>
        </ResponsiveContainer>

        {/* Equilibrium display */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">${eqP.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium Price</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{eqQ.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium Quantity</div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              Demand Shift: {demandShift > 0 ? '+' : ''}{demandShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Shift demand curve"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
              <span>← Decrease demand</span>
              <span>Increase demand →</span>
            </div>
            <p className="text-xs text-[var(--muted-fg)]">
              {demandShift < 0 ? '📉 Demand decreases (e.g., income falls, substitute gets cheaper)' :
               demandShift > 0 ? '📈 Demand increases (e.g., income rises, advertising, fashion trend)' :
               '↔ Demand unchanged'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              Supply Shift: {supplyShift > 0 ? '+' : ''}{supplyShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Shift supply curve"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
              <span>← Decrease supply</span>
              <span>Increase supply →</span>
            </div>
            <p className="text-xs text-[var(--muted-fg)]">
              {supplyShift < 0 ? '📉 Supply decreases (e.g., input costs rise, natural disaster)' :
               supplyShift > 0 ? '📈 Supply increases (e.g., technology improves, new firms enter)' :
               '↔ Supply unchanged'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── PPC Diagram ─────────────────────────────────────────────────────────── */
function PPCSlider() {
  const [allocation, setAllocation] = useState(50) // % of resources to Good A
  const [growthLevel, setGrowthLevel] = useState(0) // 0 = baseline

  const maxA = 10 + growthLevel * 2
  const maxB = 10 + growthLevel * 2

  // Concave PPC: for allocation t (0..100), compute A and B on the PPC
  const t = allocation / 100
  const ppcA = maxA * Math.sin((t * Math.PI) / 2)
  const ppcB = maxB * Math.cos((t * Math.PI) / 2)

  const ppcData = Array.from({ length: 51 }, (_, i) => {
    const ti = i / 50
    return {
      a: +(maxA * Math.sin((ti * Math.PI) / 2)).toFixed(2),
      b: +(maxB * Math.cos((ti * Math.PI) / 2)).toFixed(2),
    }
  })

  const baselineData = Array.from({ length: 51 }, (_, i) => {
    const ti = i / 50
    const bMax = 10
    return {
      a: +(bMax * Math.sin((ti * Math.PI) / 2)).toFixed(2),
      b: +(bMax * Math.cos((ti * Math.PI) / 2)).toFixed(2),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Production Possibility Curve</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Move the allocation slider to choose a point on the PPC. Simulate economic growth to shift the curve outward.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="a" type="number" domain={[0, 14]}
              label={{ value: 'Good A (Healthcare)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              dataKey="b" type="number" domain={[0, 14]}
              label={{ value: 'Good B (Education)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 11 }}
              formatter={(v: number, name: string) => [v.toFixed(1), name === 'a' ? 'Healthcare' : 'Education']}
            />
            {growthLevel > 0 && (
              <Line data={baselineData} type="monotone" dataKey="b" stroke="var(--border)" strokeWidth={1.5} dot={false} strokeDasharray="4 4" name="Baseline PPC" />
            )}
            <Line data={ppcData} type="monotone" dataKey="b" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Current PPC" />
            {/* Current point */}
            <Line
              data={[{ a: +ppcA.toFixed(1), b: +ppcB.toFixed(1) }]}
              type="monotone" dataKey="b"
              stroke="var(--accent)" strokeWidth={0} dot={{ r: 7, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }}
              name="Current allocation"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Current point */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{ppcA.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Healthcare units</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-xs font-semibold text-[var(--accent)] mb-1">Opportunity cost</div>
            <div className="text-xs text-[var(--muted-fg)]">Moving right costs education</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">{ppcB.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Education units</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Resource allocation: {allocation}% to Healthcare
            </label>
            <input type="range" min={1} max={99} value={allocation}
              onChange={(e) => setAllocation(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Adjust resource allocation"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Economic growth: {growthLevel > 0 ? `+${growthLevel * 20}%` : 'None'}
            </label>
            <input type="range" min={0} max={3} step={1} value={growthLevel}
              onChange={(e) => setGrowthLevel(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Simulate economic growth"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {growthLevel > 0 ? '📈 Outward shift: technology or resource improvement' : 'Baseline — no growth'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Scarcity Diagram ────────────────────────────────────────────────────── */
function ScarcityDiagram() {
  const [wants, setWants] = useState(80)
  const [resources, setResources] = useState(40)
  const gap = wants - resources

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Scarcity Gap</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust wants and resources to see how scarcity creates the fundamental economic problem.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-red-500">Unlimited Wants</span>
              <span className="text-[var(--fg)] font-bold">{wants}</span>
            </div>
            <div className="h-6 rounded-full overflow-hidden bg-[var(--muted)]">
              <div className="h-full bg-red-400 transition-all duration-300" style={{ width: `${wants}%` }} />
            </div>
            <input type="range" min={20} max={100} value={wants}
              onChange={(e) => setWants(Number(e.target.value))}
              className="w-full accent-red-500" aria-label="Adjust wants level"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-green-500">Available Resources</span>
              <span className="text-[var(--fg)] font-bold">{resources}</span>
            </div>
            <div className="h-6 rounded-full overflow-hidden bg-[var(--muted)]">
              <div className="h-full bg-green-400 transition-all duration-300" style={{ width: `${resources}%` }} />
            </div>
            <input type="range" min={5} max={80} value={resources}
              onChange={(e) => setResources(Number(e.target.value))}
              className="w-full accent-green-500" aria-label="Adjust resources level"
            />
          </div>

          <div className={cn(
            'rounded-xl border-2 p-4 text-center transition-all',
            gap > 0 ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'
          )}>
            <div className={`text-3xl font-black ${gap > 0 ? 'text-red-500' : 'text-green-500'}`}>
              {gap > 0 ? `Gap: ${gap}` : 'No Scarcity!'}
            </div>
            <div className="mt-1 text-sm text-[var(--muted-fg)]">
              {gap > 0
                ? '⚠ Scarcity exists → choices must be made → opportunity costs arise'
                : '✓ Resources exceed wants → no economic problem (theoretical)'
              }
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Price Mechanism ─────────────────────────────────────────────────────── */
function PriceMechanism() {
  const [price, setPrice] = useState(5)

  const demand = Math.max(0, 15 - price * 1.5)
  const supply = Math.max(0, price * 1.2 - 1)
  const surplus = supply > demand ? supply - demand : 0
  const shortage = demand > supply ? demand - supply : 0

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">The Price Mechanism</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Adjust the price to see how surpluses and shortages resolve themselves in a market.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Price: ${price.toFixed(2)}
          </label>
          <input type="range" min={1} max={10} step={0.5} value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-[#e8c547]" aria-label="Adjust market price"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-2xl font-black text-blue-500">{demand.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Qty Demanded</div>
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            surplus > 0 ? 'border-green-500/30 bg-green-500/10' :
            shortage > 0 ? 'border-red-500/30 bg-red-500/10' :
            'border-[var(--accent)]/30 bg-[var(--accent)]/10'
          )}>
            <div className={`text-lg font-black ${surplus > 0 ? 'text-green-500' : shortage > 0 ? 'text-red-500' : 'text-[var(--accent)]'}`}>
              {surplus > 0 ? `Surplus` : shortage > 0 ? `Shortage` : `Equilibrium`}
            </div>
            <div className="text-xs text-[var(--muted-fg)]">
              {surplus > 0 ? `+${surplus.toFixed(1)} units` : shortage > 0 ? `-${shortage.toFixed(1)} units` : 'Market clears'}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-2xl font-black text-green-500">{supply.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Qty Supplied</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          {surplus > 0
            ? '📉 Surplus → producers cut price → Qd ↑, Qs ↓ → moves toward equilibrium'
            : shortage > 0
            ? '📈 Shortage → consumers bid up price → Qd ↓, Qs ↑ → moves toward equilibrium'
            : '✓ Market is in equilibrium — no tendency to change'}
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Default placeholder ─────────────────────────────────────────────────── */
function DefaultDiagram({ lessonId }: { lessonId: string }) {
  return (
    <Card>
      <CardContent className="pt-6 text-center text-[var(--muted-fg)] py-12">
        <div className="text-4xl mb-3">📊</div>
        <p className="font-semibold">Interactive diagram for this lesson is coming soon.</p>
        <p className="text-sm mt-1">Lesson: {lessonId}</p>
      </CardContent>
    </Card>
  )
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
