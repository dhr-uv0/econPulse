'use client'

import { Fragment, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

/* ── Shared cost-curve helpers ───────────────────────────────────────────── */
// mc(q) = variable + 0.6*q
// tvc(q) = variable*q + 0.3*q*q
// atc(q) = (tfc + tvc(q)) / q
function tvcOf(q: number, variable: number) {
  return variable * q + 0.3 * q * q
}

function mcOf(q: number, variable: number) {
  return variable + 0.6 * q
}

function atcOf(q: number, tfc: number, variable: number) {
  return (tfc + tvcOf(q, variable)) / q
}

function avcOf(q: number, variable: number) {
  return tvcOf(q, variable) / q
}

// Builds a smooth quantity grid strictly greater than zero (avoids the
// average-cost asymptote at q=0) running up to maxQ.
function buildQGrid(maxQ: number, points = 26) {
  const safeMax = Math.max(maxQ, 2)
  return Array.from({ length: points }, (_, i) => (safeMax * (i + 1)) / points)
}

/* ── 1. Perfect Competition ──────────────────────────────────────────────── */
// widget key: 'perfect-competition-diagram'
export function PerfectCompetitionDiagram() {
  const [price, setPrice] = useState(14)
  const [tfc, setTfc] = useState(50)
  const [variable, setVariable] = useState(3)

  // A price-taking firm's D = AR = MR is horizontal at the market price.
  // Shutdown rule: AVC(q) = variable + 0.3*q is increasing from AVC(0+) -> variable,
  // so min AVC is approximately `variable`. If price can't cover that, shut down.
  const shutdown = price < variable
  const qStarRaw = (price - variable) / 0.6
  const qStar = shutdown ? 0 : Math.max(0, qStarRaw)
  const canProduce = qStar > 0.05

  const atcStar = canProduce ? atcOf(qStar, tfc, variable) : 0
  const avcStar = canProduce ? avcOf(qStar, variable) : 0
  const profit = canProduce ? (price - atcStar) * qStar : -tfc

  const qMax = Math.max(qStar * 1.4, 10)
  const grid = buildQGrid(qMax)
  const data = grid.map((q) => ({
    q: +q.toFixed(2),
    price,
    mc: +mcOf(q, variable).toFixed(2),
    atc: +atcOf(q, tfc, variable).toFixed(2),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Perfect Competition — Ideal Benchmark</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A price-taking firm faces a horizontal demand curve at the market price (D = AR = MR). It maximizes profit where MC = P.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={270}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Output (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis label={{ value: 'Price / Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            {canProduce && (
              <ReferenceLine x={+qStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Q* = ${qStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10 }} />
            )}
            <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="D = AR = MR" />
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
            <Line type="monotone" dataKey="atc" stroke="#a855f7" strokeWidth={2} dot={false} name="ATC" />
          </LineChart>
        </ResponsiveContainer>

        {shutdown ? (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
            <div className="text-xl font-black text-red-500">Firm shuts down</div>
            <p className="text-sm text-[var(--muted-fg)] mt-1">
              Price (${price.toFixed(2)}) is below the minimum average variable cost (≈${variable.toFixed(2)}). The firm can&apos;t cover its variable costs, so it produces nothing and loses only its fixed cost, ${tfc}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-lg font-black text-[var(--fg)]">{qStar.toFixed(1)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Profit-max Q*</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-lg font-black text-[var(--fg)]">${atcStar.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">ATC at Q* (AVC ${avcStar.toFixed(2)})</div>
            </div>
            <div className={cn('rounded-xl border-2 p-3', profit >= 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10')}>
              <div className={cn('text-lg font-black', profit >= 0 ? 'text-green-500' : 'text-red-500')}>
                {profit >= 0 ? '+' : ''}${profit.toFixed(2)}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">{profit >= 0 ? 'Economic profit' : 'Economic loss'}</div>
            </div>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Market price: ${price.toFixed(2)}</label>
            <input type="range" min={2} max={20} step={0.5} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust market price" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Total Fixed Cost: ${tfc}</label>
            <input type="range" min={20} max={300} step={10} value={tfc} onChange={(e) => setTfc(Number(e.target.value))} className="w-full accent-purple-500" aria-label="Total fixed cost" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">Variable cost factor: {variable}</label>
            <input type="range" min={1} max={10} value={variable} onChange={(e) => setVariable(Number(e.target.value))} className="w-full accent-red-500" aria-label="Variable cost factor" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── 2. Monopoly ─────────────────────────────────────────────────────────── */
// widget key: 'monopoly-diagram'
export function MonopolyDiagram() {
  const [a, setA] = useState(16)
  const [b, setB] = useState(0.8)
  const [tfc, setTfc] = useState(30)
  const [variable, setVariable] = useState(3)

  // MR(Q) = a - 2bQ. Profit-max: MC(Q) = MR(Q) -> variable + 0.6Q = a - 2bQ
  const qStarRaw = (a - variable) / (2 * b + 0.6)
  const qStar = Math.max(0, qStarRaw)
  const canProduce = qStar > 0.05

  // Competitive benchmark: P = MC -> a - bQc = variable + 0.6Qc
  const qcRaw = (a - variable) / (b + 0.6)
  const qc = Math.max(0, qcRaw)

  const pStar = a - b * qStar
  const pc = a - b * qc
  const mcStar = mcOf(qStar, variable)
  const atcStar = canProduce ? atcOf(qStar, tfc, variable) : 0
  const profit = canProduce ? (pStar - atcStar) * qStar : -tfc
  const dwl = Math.max(0, 0.5 * (qc - qStar) * (pStar - mcStar))

  const qMax = Math.max(qc, qStar, 4) * 1.3
  const grid = buildQGrid(qMax)
  const data = grid.map((q) => ({
    q: +q.toFixed(2),
    demand: +(a - b * q).toFixed(2),
    mr: +(a - 2 * b * q).toFixed(2),
    mc: +mcOf(q, variable).toFixed(2),
    atc: +atcOf(q, tfc, variable).toFixed(2),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Monopoly — Price, Profit, and Deadweight Loss</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A monopolist produces where MR = MC, then charges the price the demand curve allows — above marginal cost, creating a deadweight loss versus the competitive outcome.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Output (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis label={{ value: 'Price / Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            {canProduce && (
              <ReferenceLine x={+qStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Q* = ${qStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10 }} />
            )}
            {qc > 0.05 && (
              <ReferenceLine x={+qc.toFixed(2)} stroke="#22c55e" strokeDasharray="4 4" label={{ value: `Qc = ${qc.toFixed(1)}`, fill: '#22c55e', fontSize: 10, position: 'top' }} />
            )}
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
            <Line type="monotone" dataKey="mr" stroke="#f59e0b" strokeWidth={2} dot={false} name="MR" />
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
            <Line type="monotone" dataKey="atc" stroke="#a855f7" strokeWidth={2} dot={false} name="ATC" />
          </LineChart>
        </ResponsiveContainer>

        {canProduce ? (
          <>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className={cn('rounded-xl border-2 p-3', profit >= 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10')}>
                <div className={cn('text-lg font-black', profit >= 0 ? 'text-green-500' : 'text-red-500')}>{profit >= 0 ? '+' : ''}${profit.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Monopoly profit</div>
              </div>
              <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
                <div className="text-lg font-black text-[var(--accent)]">${dwl.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Deadweight loss</div>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-3">
                <div className="text-lg font-black text-[var(--fg)]">${pStar.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Monopoly price P*</div>
              </div>
            </div>
            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              Competitive output would be {qc.toFixed(1)} units at ${pc.toFixed(2)} vs. the monopoly&apos;s {qStar.toFixed(1)} units at ${pStar.toFixed(2)} — the monopolist restricts output and raises price above the competitive level.
            </div>
          </>
        ) : (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
            <div className="text-lg font-black text-red-500">No profitable output</div>
            <p className="text-sm text-[var(--muted-fg)] mt-1">At these parameters, marginal cost exceeds what demand will support at any positive output.</p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Demand intercept (a): {a}</label>
            <input type="range" min={10} max={20} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Demand intercept" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Demand slope (b): {b.toFixed(1)}</label>
            <input type="range" min={0.4} max={1.2} step={0.1} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Demand slope" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Total Fixed Cost: ${tfc}</label>
            <input type="range" min={20} max={300} step={10} value={tfc} onChange={(e) => setTfc(Number(e.target.value))} className="w-full accent-purple-500" aria-label="Total fixed cost" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">Variable cost factor: {variable}</label>
            <input type="range" min={1} max={10} value={variable} onChange={(e) => setVariable(Number(e.target.value))} className="w-full accent-red-500" aria-label="Variable cost factor" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── 3. Monopolistic Competition ─────────────────────────────────────────── */
// widget key: 'monopolistic-competition-diagram'
const MC_A_BASE = 16
const MC_B = 0.8
const MC_TFC = 8
const MC_VARIABLE = 2

export function MonopolisticCompetitionDiagram() {
  const [firms, setFirms] = useState(4)

  // More competing firms -> more substitutes -> this firm's demand shrinks inward.
  const aEff = MC_A_BASE / (1 + firms * 0.15)
  const qStarRaw = (aEff - MC_VARIABLE) / (2 * MC_B + 0.6)
  const qStar = Math.max(0, qStarRaw)
  const canProduce = qStar > 0.05

  const pStar = aEff - MC_B * qStar
  const atcStar = canProduce ? atcOf(qStar, MC_TFC, MC_VARIABLE) : 0
  const profit = canProduce ? (pStar - atcStar) * qStar : -MC_TFC

  const qMax = Math.max(qStar, 4) * 1.5
  const grid = buildQGrid(qMax)
  const data = grid.map((q) => ({
    q: +q.toFixed(2),
    demand: +(aEff - MC_B * q).toFixed(2),
    mr: +(aEff - 2 * MC_B * q).toFixed(2),
    mc: +mcOf(q, MC_VARIABLE).toFixed(2),
    atc: +atcOf(q, MC_TFC, MC_VARIABLE).toFixed(2),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Monopolistic Competition — Differentiation and Waste</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Each firm sells a slightly differentiated product and behaves like a mini-monopolist in the short run — but free entry means profit attracts rivals, shrinking each firm&apos;s slice of demand.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Output (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis label={{ value: 'Price / Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            {canProduce && (
              <ReferenceLine x={+qStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Q* = ${qStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10 }} />
            )}
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand (this firm)" />
            <Line type="monotone" dataKey="mr" stroke="#f59e0b" strokeWidth={2} dot={false} name="MR" />
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
            <Line type="monotone" dataKey="atc" stroke="#a855f7" strokeWidth={2} dot={false} name="ATC" />
          </LineChart>
        </ResponsiveContainer>

        {canProduce ? (
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-lg font-black text-[var(--fg)]">{qStar.toFixed(1)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Output Q*</div>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-lg font-black text-[var(--fg)]">${pStar.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Price P*</div>
            </div>
            <div className={cn('rounded-xl border-2 p-3', profit >= 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10')}>
              <div className={cn('text-lg font-black', profit >= 0 ? 'text-green-500' : 'text-red-500')}>{profit >= 0 ? '+' : ''}${profit.toFixed(2)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Economic profit</div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
            <div className="text-lg font-black text-red-500">Demand too thin to produce</div>
            <p className="text-sm text-[var(--muted-fg)] mt-1">With this many rivals, the residual demand facing this firm no longer covers marginal cost at any output.</p>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">Number of competing firms in the industry: {firms}</label>
          <input type="range" min={1} max={15} value={firms} onChange={(e) => setFirms(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Number of competing firms in the industry" />
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          At low firm counts, positive economic profit attracts new entrants. As more firms enter and differentiate, each firm&apos;s demand curve shrinks inward and profit is competed away toward zero — the long-run equilibrium of monopolistic competition. Even then, the firm produces where P = ATC rather than at minimum ATC — that gap is the &quot;excess capacity&quot; inefficiency associated with product differentiation.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── 4. Oligopoly Game ───────────────────────────────────────────────────── */
// widget key: 'oligopoly-game'
type Strategy = 'High' | 'Low'

// Payoffs are (Firm A profit, Firm B profit) in $M
const PAYOFFS: Record<Strategy, Record<Strategy, [number, number]>> = {
  High: { High: [10, 10], Low: [2, 14] },
  Low: { High: [14, 2], Low: [6, 6] },
}

// Given the rival's strategy, which of the player's own two options pays more.
function bestResponse(rivalChoice: Strategy, player: 'A' | 'B'): Strategy {
  const highPayoff = player === 'A' ? PAYOFFS.High[rivalChoice][0] : PAYOFFS[rivalChoice].High[1]
  const lowPayoff = player === 'A' ? PAYOFFS.Low[rivalChoice][0] : PAYOFFS[rivalChoice].Low[1]
  return lowPayoff >= highPayoff ? 'Low' : 'High'
}

export function OligopolyGame() {
  const [aChoice, setAChoice] = useState<Strategy>('High')
  const [bChoice, setBChoice] = useState<Strategy>('High')

  const [aProfit, bProfit] = PAYOFFS[aChoice][bChoice]
  const aBest = bestResponse(bChoice, 'A')
  const bBest = bestResponse(aChoice, 'B')

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Oligopoly — Interdependence and Strategy</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Two firms simultaneously choose High Price or Low Price. Each firm&apos;s best payoff depends on what its rival does — the essence of oligopoly.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-blue-500">Firm A&apos;s strategy</div>
            <div className="flex gap-2">
              {(['High', 'Low'] as Strategy[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setAChoice(s)}
                  className={cn(
                    'flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    aChoice === s ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {s} Price
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold text-green-500">Firm B&apos;s strategy</div>
            <div className="flex gap-2">
              {(['High', 'Low'] as Strategy[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setBChoice(s)}
                  className={cn(
                    'flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                    bChoice === s ? 'text-white border-transparent bg-green-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                  )}
                >
                  {s} Price
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Payoff matrix */}
        <div className="grid grid-cols-3 gap-2">
          <div />
          <div className="text-center text-xs font-semibold text-green-500 self-center">B: High Price</div>
          <div className="text-center text-xs font-semibold text-green-500 self-center">B: Low Price</div>

          {(['High', 'Low'] as Strategy[]).map((aRow) => (
            <Fragment key={aRow}>
              <div className="flex items-center justify-end pr-2 text-xs font-semibold text-blue-500">A: {aRow} Price</div>
              {(['High', 'Low'] as Strategy[]).map((bCol) => {
                const [pa, pb] = PAYOFFS[aRow][bCol]
                const active = aChoice === aRow && bChoice === bCol
                const isNash = aRow === 'Low' && bCol === 'Low'
                const isCollusive = aRow === 'High' && bCol === 'High'
                return (
                  <div key={bCol} className={cn(
                    'rounded-xl border-2 p-3 text-center',
                    active ? 'border-[var(--accent)] bg-[var(--accent)]/10' : 'border-[var(--border)]'
                  )}>
                    <div className="font-black text-[var(--fg)]">({pa}, {pb})</div>
                    {isNash && <div className="text-[10px] font-semibold text-[var(--accent)] mt-1">Nash Equilibrium</div>}
                    {isCollusive && <div className="text-[10px] font-semibold text-[var(--muted-fg)] mt-1">Collusive outcome (unstable)</div>}
                  </div>
                )
              })}
            </Fragment>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-sm font-black text-blue-500">Firm A&apos;s best response: {aBest} Price</div>
            <div className="text-xs text-[var(--muted-fg)]">Given B chose {bChoice} Price</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
            <div className="text-sm font-black text-green-500">Firm B&apos;s best response: {bBest} Price</div>
            <div className="text-xs text-[var(--muted-fg)]">Given A chose {aChoice} Price</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Low Price is a dominant strategy for both firms — regardless of what the rival does, undercutting yields a higher payoff. Nash Equilibrium: (Low, Low) → (6, 6) — even though (High, High) → (10, 10) would make both firms better off, neither can unilaterally deviate to High without being undercut. This is the classic prisoner&apos;s dilemma structure applied to oligopoly pricing.
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-sm text-[var(--muted-fg)]">Current outcome: A chose {aChoice} Price, B chose {bChoice} Price</div>
          <div className="text-xl font-black text-[var(--accent)] mt-1">Firm A profit: ${aProfit}M &nbsp;|&nbsp; Firm B profit: ${bProfit}M</div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── 5. Price Discrimination ─────────────────────────────────────────────── */
// widget key: 'price-discrimination'
export function PriceDiscrimination() {
  const [interceptS, setInterceptS] = useState(12)
  const [interceptP, setInterceptP] = useState(18)
  const [mc, setMc] = useState(4)
  const slope = 0.8

  const segments = [
    { key: 'students', label: 'Students', intercept: interceptS, color: '#3b82f6' },
    { key: 'professionals', label: 'Professionals', intercept: interceptP, color: '#22c55e' },
  ]

  // Third-degree price discrimination: each segment gets its own MR = MC price.
  const discResults = segments.map((seg) => {
    const qRaw = (seg.intercept - mc) / (2 * slope)
    const q = Math.max(0, qRaw)
    const p = q > 0 ? seg.intercept - slope * q : 0
    const profit = q > 0 ? (p - mc) * q : 0
    return { ...seg, q, p, profit }
  })
  const discProfit = discResults.reduce((sum, s) => sum + s.profit, 0)

  // Uniform pricing: search 9 candidate prices from MC to the higher intercept
  // and pick whichever single price yields the highest combined profit.
  const maxIntercept = Math.max(interceptS, interceptP)
  const candidatePrices = Array.from({ length: 9 }, (_, i) => mc + (i * (maxIntercept - mc)) / 8)
  const uniformCandidates = candidatePrices.map((p) => {
    const qs = Math.max(0, (interceptS - p) / slope)
    const qp = Math.max(0, (interceptP - p) / slope)
    const profit = (p - mc) * (qs + qp)
    return { p, qs, qp, profit }
  })
  const bestUniform = uniformCandidates.reduce((best, c) => (c.profit > best.profit ? c : best), uniformCandidates[0])

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Price Discrimination — First, Second, Third Degree</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Compare charging each segment its own profit-maximizing price (third-degree discrimination) against charging one uniform price to everyone.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Students&apos; demand intercept: {interceptS}</label>
            <input type="range" min={8} max={16} step={0.5} value={interceptS} onChange={(e) => setInterceptS(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Students demand intercept" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Professionals&apos; demand intercept: {interceptP}</label>
            <input type="range" min={12} max={24} step={0.5} value={interceptP} onChange={(e) => setInterceptP(Number(e.target.value))} className="w-full accent-green-500" aria-label="Professionals demand intercept" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-red-500">Marginal cost: ${mc}</label>
            <input type="range" min={2} max={10} step={0.5} value={mc} onChange={(e) => setMc(Number(e.target.value))} className="w-full accent-red-500" aria-label="Marginal cost" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 space-y-2">
            <div className="text-sm font-bold text-[var(--accent)]">Price Discrimination</div>
            {discResults.map((s) => (
              <div key={s.key} className="flex justify-between text-sm">
                <span style={{ color: s.color }}>{s.label}</span>
                <span className="text-[var(--fg)]">{s.q > 0 ? `$${s.p.toFixed(2)} × ${s.q.toFixed(1)} units` : 'not served'}</span>
              </div>
            ))}
            <div className="border-t border-[var(--border)] pt-2 flex justify-between font-black">
              <span className="text-[var(--fg)]">Total profit</span>
              <span className="text-[var(--accent)]">${discProfit.toFixed(2)}</span>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] p-4 space-y-2">
            <div className="text-sm font-bold text-[var(--fg)]">Uniform Pricing</div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Single price charged to both</span>
              <span className="text-[var(--fg)]">${bestUniform.p.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span style={{ color: '#3b82f6' }}>Students buy</span>
              <span className="text-[var(--fg)]">{bestUniform.qs.toFixed(1)} units</span>
            </div>
            <div className="flex justify-between text-sm">
              <span style={{ color: '#22c55e' }}>Professionals buy</span>
              <span className="text-[var(--fg)]">{bestUniform.qp.toFixed(1)} units</span>
            </div>
            <div className="border-t border-[var(--border)] pt-2 flex justify-between font-black">
              <span className="text-[var(--fg)]">Total profit</span>
              <span className="text-[var(--fg)]">${bestUniform.profit.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-green-500/30 bg-green-500/10 p-3 text-center">
          <div className="text-lg font-black text-green-500">
            Discrimination gains: +${Math.max(0, discProfit - bestUniform.profit).toFixed(2)}
          </div>
          <div className="text-xs text-[var(--muted-fg)]">Extra profit captured by pricing each segment separately</div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Price discrimination lets the firm charge more to the less price-sensitive segment (Professionals, with a higher willingness to pay) and less to the more price-sensitive segment (Students), capturing more of the consumer surplus as profit than a single uniform price ever could.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── 6. Market Structure Comparison ──────────────────────────────────────── */
// widget key: 'market-structure-comparison'
type StructureKey = 'perfect' | 'monopolistic' | 'oligopoly' | 'monopoly'

interface StructureInfo {
  name: string
  color: string
  firms: string
  priceVsMc: string
  barriers: string
  longRunProfit: string
  productiveEfficiency: string
}

const STRUCTURES: Record<StructureKey, StructureInfo> = {
  perfect: {
    name: 'Perfect Competition',
    color: '#22c55e',
    firms: 'Many',
    priceVsMc: 'P = MC (allocatively efficient)',
    barriers: 'None',
    longRunProfit: 'Zero (normal profit only)',
    productiveEfficiency: 'Yes (produces at minimum ATC)',
  },
  monopolistic: {
    name: 'Monopolistic Competition',
    color: '#3b82f6',
    firms: 'Many, differentiated products',
    priceVsMc: 'P > MC (some inefficiency)',
    barriers: 'Low',
    longRunProfit: 'Zero (entry erodes profit)',
    productiveEfficiency: 'No (excess capacity — produces below minimum ATC)',
  },
  oligopoly: {
    name: 'Oligopoly',
    color: '#f59e0b',
    firms: 'Few, interdependent',
    priceVsMc: 'P > MC (varies with collusion/rivalry)',
    barriers: 'High',
    longRunProfit: 'Can be positive (barriers protect it)',
    productiveEfficiency: 'No (typically)',
  },
  monopoly: {
    name: 'Monopoly',
    color: '#ef4444',
    firms: 'One',
    priceVsMc: 'P > MC (allocatively inefficient, deadweight loss)',
    barriers: 'Very high / complete',
    longRunProfit: 'Can persist (no entry to erode it)',
    productiveEfficiency: 'No',
  },
}

const STRUCTURE_ORDER: StructureKey[] = ['perfect', 'monopolistic', 'oligopoly', 'monopoly']
const RELATIVE_PRICE: Record<StructureKey, number> = { perfect: 25, monopolistic: 45, oligopoly: 65, monopoly: 90 }
const RELATIVE_OUTPUT: Record<StructureKey, number> = { perfect: 90, monopolistic: 70, oligopoly: 55, monopoly: 30 }

export function MarketStructureComparison() {
  const [selected, setSelected] = useState<StructureKey>('perfect')
  const current = STRUCTURES[selected]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Comparing Market Structures — Efficiency Scorecard</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Select a market structure to see how it stacks up on competition, pricing power, and efficiency.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {STRUCTURE_ORDER.map((key) => {
            const s = STRUCTURES[key]
            const active = selected === key
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                  active ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                )}
                style={active ? { background: s.color, borderColor: s.color } : {}}
              >
                {s.name}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { label: 'Number of firms', value: current.firms },
            { label: 'Price vs. marginal cost', value: current.priceVsMc },
            { label: 'Barriers to entry', value: current.barriers },
            { label: 'Long-run economic profit', value: current.longRunProfit },
            { label: 'Productive efficiency', value: current.productiveEfficiency },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-[var(--border)] p-3">
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: current.color }}>{label}</div>
              <div className="text-sm text-[var(--fg)]">{value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-[var(--fg)]">Relative price level (illustrative)</div>
          {STRUCTURE_ORDER.map((key) => (
            <div key={key} className="space-y-1">
              <div className="text-xs text-[var(--muted-fg)]">{STRUCTURES[key].name}</div>
              <div className="h-4 rounded-full bg-[var(--muted)] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${RELATIVE_PRICE[key]}%`, background: STRUCTURES[key].color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-[var(--fg)]">Relative output level (illustrative)</div>
          {STRUCTURE_ORDER.map((key) => (
            <div key={key} className="space-y-1">
              <div className="text-xs text-[var(--muted-fg)]">{STRUCTURES[key].name}</div>
              <div className="h-4 rounded-full bg-[var(--muted)] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${RELATIVE_OUTPUT[key]}%`, background: STRUCTURES[key].color }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
