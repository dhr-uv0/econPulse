'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

/* ── Externality Diagram (widget key: 'externality-diagram') ────────────────
   Lesson: "Market Failure — An Overview"
   Negative mode: Demand = MSB (fixed). Private Supply = MPC (fixed).
     MSC = MPC shifted up in parallel by the externality size.
     Q_market = MPC ∩ Demand (unregulated outcome, ignores externality).
     Q_opt = MSC ∩ Demand (socially optimal). Q_opt < Q_market → overproduction.
   Positive mode: Supply = MPC = MSC (fixed, no cost-side externality).
     Demand = MPB (fixed). MSB = MPB shifted up in parallel by the externality size.
     Q_market = MPB ∩ Supply. Q_opt = MSB ∩ Supply. Q_opt > Q_market → underproduction.
   DWL = 0.5 × |Q_market − Q_opt| × externality (exact for parallel-shift linear curves).
────────────────────────────────────────────────────────────────────────── */
export function ExternalityDiagram() {
  const [mode, setMode] = useState<'negative' | 'positive'>('negative')
  const [externality, setExternality] = useState(3)

  const D_INTERCEPT = 12
  const D_SLOPE = -0.8
  const S_INTERCEPT = 2
  const S_SLOPE = 0.6

  // Intersection of a line (aInt + aSlope*Q) with another (bInt + bSlope*Q)
  const intersect = (aInt: number, aSlope: number, bInt: number, bSlope: number) =>
    (aInt - bInt) / (bSlope - aSlope)

  let qMarket: number
  let qOpt: number
  let data: { q: number; private: number; social: number; other: number }[]

  if (mode === 'negative') {
    // Demand = MSB (fixed), MPC = private supply, MSC = MPC + externality
    qMarket = intersect(D_INTERCEPT, D_SLOPE, S_INTERCEPT, S_SLOPE)
    qOpt = intersect(D_INTERCEPT, D_SLOPE, S_INTERCEPT + externality, S_SLOPE)
    data = Array.from({ length: 13 }, (_, q) => ({
      q,
      private: Math.max(0, S_INTERCEPT + S_SLOPE * q),        // MPC
      social: Math.max(0, S_INTERCEPT + externality + S_SLOPE * q), // MSC
      other: Math.max(0, D_INTERCEPT + D_SLOPE * q),           // Demand = MSB
    }))
  } else {
    // Supply = MPC = MSC (fixed), Demand = MPB, MSB = MPB + externality
    qMarket = intersect(D_INTERCEPT, D_SLOPE, S_INTERCEPT, S_SLOPE)
    qOpt = intersect(D_INTERCEPT + externality, D_SLOPE, S_INTERCEPT, S_SLOPE)
    data = Array.from({ length: 13 }, (_, q) => ({
      q,
      private: Math.max(0, D_INTERCEPT + D_SLOPE * q),         // MPB
      social: Math.max(0, D_INTERCEPT + externality + D_SLOPE * q), // MSB
      other: Math.max(0, S_INTERCEPT + S_SLOPE * q),           // Supply = MPC = MSC
    }))
  }

  const dwl = 0.5 * Math.abs(qMarket - qOpt) * externality
  const overOrUnder = mode === 'negative' ? 'overproduction' : 'underproduction'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Externalities &amp; Market Failure</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Compare the private (market) outcome to the socially optimal outcome when an externality drives a wedge between private and social cost or benefit.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setMode('negative')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2 ${mode === 'negative' ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'}`}
            style={mode === 'negative' ? { background: '#ef4444', borderColor: '#ef4444' } : {}}
          >
            Negative externality
          </button>
          <button
            onClick={() => setMode('positive')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2 ${mode === 'positive' ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'}`}
            style={mode === 'positive' ? { background: '#22c55e', borderColor: '#22c55e' } : {}}
          >
            Positive externality
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Quantity', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Price / Cost ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              domain={[0, 16]}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Qty: ${v}`}
            />
            <ReferenceLine
              x={qMarket.toFixed(1)}
              stroke="#3b82f6"
              strokeDasharray="5 5"
              label={{ value: `Q market = ${qMarket.toFixed(1)}`, fill: '#3b82f6', fontSize: 11 }}
            />
            <ReferenceLine
              x={qOpt.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Q optimal = ${qOpt.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'insideTopRight' }}
            />
            <Line type="monotone" dataKey="private" stroke="#3b82f6" strokeWidth={2.5} dot={false} name={mode === 'negative' ? 'MPC (private)' : 'MPB (private)'} />
            <Line type="monotone" dataKey="social" stroke="#ef4444" strokeWidth={2.5} dot={false} name={mode === 'negative' ? 'MSC (social)' : 'MSB (social)'} />
            <Line type="monotone" dataKey="other" stroke="#22c55e" strokeWidth={2.5} dot={false} name={mode === 'negative' ? 'Demand (MSB)' : 'Supply (MPC=MSC)'} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-center">
            <div className="text-lg font-black text-blue-500">{qMarket.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Market quantity (unregulated)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{qOpt.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Socially optimal quantity</div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
          <div className="text-2xl font-black text-red-500">Deadweight Loss: ${dwl.toFixed(2)}</div>
          <p className="text-sm text-[var(--muted-fg)] mt-1">
            {mode === 'negative'
              ? `The market ignores the external cost, so it produces more than is socially desirable (${overOrUnder}). The shaded gap between MPC and MSC over the range from Q optimal to Q market represents the deadweight loss.`
              : `The market ignores the external benefit, so it produces less than is socially desirable (${overOrUnder}). The gap between MPB and MSB over the range from Q market to Q optimal represents the deadweight loss.`}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Externality size: ${externality.toFixed(2)} per unit
          </label>
          <input
            type="range" min={0} max={6} step={0.5} value={externality}
            onChange={(e) => setExternality(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label="Adjust externality size in dollars per unit"
          />
          <p className="text-xs text-[var(--muted-fg)]">
            {mode === 'negative'
              ? 'e.g., a factory\'s pollution cost borne by nearby residents, not the firm'
              : 'e.g., the herd-immunity benefit of one person\'s vaccination to everyone else'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Public Goods Simulator (widget key: 'public-goods-simulator') ──────────
   Lesson: "Public Goods and the Free-Rider Problem"
   Each individual: MB_i(q) = WTP − (WTP/10)×q
   Socially efficient Q*: N × MB_i(Q*) = MC  →  Q* = (N×WTP − MC) × 10 / (N×WTP)
   Free-ridden Q_private: single funder's MB_i(q) = MC  →  Q_private = (WTP − MC) × 10 / WTP
────────────────────────────────────────────────────────────────────────── */
export function PublicGoodsSimulator() {
  const [n, setN] = useState(5)
  const [wtp, setWtp] = useState(5)
  const [mc, setMc] = useState(8)

  // N × (WTP − (WTP/10)×Q) = MC  →  Q = (N×WTP − MC) × 10 / (N×WTP)
  const qStarRaw = (n * wtp - mc) * 10 / (n * wtp)
  const qStar = Math.max(0, qStarRaw)

  // WTP − (WTP/10)×Q = MC  →  Q = (WTP − MC) × 10 / WTP
  const qPrivateRaw = (wtp - mc) * 10 / wtp
  const qPrivate = Math.max(0, qPrivateRaw)

  const gapPct = qStar > 0 ? ((qStar - qPrivate) / qStar) * 100 : 0

  const data = Array.from({ length: 11 }, (_, q) => ({
    q,
    individualMB: Math.max(0, wtp - (wtp / 10) * q),
    socialMB: Math.max(0, n * (wtp - (wtp / 10) * q)),
    mc,
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Public Goods &amp; the Free-Rider Problem</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Because public goods are non-excludable, private markets under-provide them relative to the socially efficient quantity.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Quantity of public good', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Marginal benefit / cost ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 11 }}
            />
            <ReferenceLine
              x={qPrivate.toFixed(1)}
              stroke="#3b82f6"
              strokeDasharray="5 5"
              label={{ value: `Q private = ${qPrivate.toFixed(1)}`, fill: '#3b82f6', fontSize: 10 }}
            />
            <ReferenceLine
              x={qStar.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Q* = ${qStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10, position: 'insideTopRight' }}
            />
            <Line type="monotone" dataKey="individualMB" stroke="#3b82f6" strokeWidth={2} dot={false} name="Individual MB (1 person)" />
            <Line type="monotone" dataKey="socialMB" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Social MB (sum of N people)" />
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="Marginal Cost" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{qStar.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Socially efficient quantity (Q*)</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 text-center">
            <div className="text-lg font-black text-blue-500">{qPrivate.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Privately provided quantity</div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
          <div className="text-2xl font-black text-red-500">Provision gap: {gapPct.toFixed(0)}%</div>
          <p className="text-sm text-[var(--muted-fg)] mt-1">
            If everyone free-rides and only one person ends up paying, that person&apos;s demand curve alone (Individual MB) determines what gets built — ignoring the marginal benefit that the other {Math.max(0, n - 1)} beneficiaries would have received. The result is significant underprovision relative to the socially efficient level, where the marginal cost equals the sum of everyone&apos;s marginal benefit.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Number of beneficiaries (N): {n}
            </label>
            <input
              type="range" min={2} max={10} step={1} value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Adjust number of beneficiaries"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Willingness-to-pay per person: ${wtp}
            </label>
            <input
              type="range" min={1} max={10} step={1} value={wtp}
              onChange={(e) => setWtp(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust average willingness to pay per person"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Marginal cost of provision: ${mc}
            </label>
            <input
              type="range" min={2} max={15} step={1} value={mc}
              onChange={(e) => setMc(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Adjust marginal cost of provision"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
