'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Labour Demand — Marginal Revenue Product (widget key: 'mrp-labour-demand') ──
   MRP(L) = 40 − 2L for L in [0,18]. This IS the firm's labour demand curve —
   it slopes down because of diminishing marginal returns.
   Profit-maximising hiring: W = MRP(L) → L* = (40 − W) / 2, clamped to [0,18].
────────────────────────────────────────────────────────────────────────── */
export function MRPLabourDemand() {
  const [wage, setWage] = useState(20)

  const lStarRaw = (40 - wage) / 2
  const lStar = Math.min(18, Math.max(0, lStarRaw))
  const wageBill = wage * lStar

  const data = Array.from({ length: 19 }, (_, l) => ({
    l,
    mrp: Math.max(0, 40 - 2 * l),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Labour Demand — Marginal Revenue Product</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A firm&apos;s demand for labour is its marginal revenue product (MRP) curve. It slopes down because of diminishing marginal returns — each extra worker adds less output than the one before.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="l"
              label={{ value: 'Workers Hired (L)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 42]}
              label={{ value: 'Wage / MRP ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `L = ${v}`}
            />
            <ReferenceLine
              y={wage}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `Wage = $${wage}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }}
            />
            <ReferenceLine
              x={lStar.toFixed(1)}
              stroke="#3b82f6"
              strokeDasharray="5 5"
              label={{ value: `L* = ${lStar.toFixed(1)}`, fill: '#3b82f6', fontSize: 11 }}
            />
            <Line type="monotone" dataKey="mrp" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="MRP = Labour Demand" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{lStar.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Workers hired (L*)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">${wageBill.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total wage bill (W × L*)</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">Wage rate: ${wage}</label>
          <input
            type="range" min={5} max={35} step={1} value={wage}
            onChange={(e) => setWage(Number(e.target.value))}
            className="w-full accent-blue-500"
            aria-label="Adjust wage rate"
          />
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          A profit-maximising firm hires labour up to the point where the wage equals the marginal revenue product — hiring further would cost more than the extra worker adds to revenue.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Labour Supply and Wage Determination (widget key: 'labour-market-equilibrium') ──
   Demand (= MRP): W = (40 + demandShift×3) − 2L
   Supply: W = (4 + supplyShift×2) + 1.5L
   Equilibrium solved exactly as InteractiveDiagram's DemandCurveShifter solves eqQ/eqP.
────────────────────────────────────────────────────────────────────────── */
export function LabourMarketEquilibrium() {
  const [demandShift, setDemandShift] = useState(0)
  const [supplyShift, setSupplyShift] = useState(0)

  const D_INTERCEPT = 40 + demandShift * 3
  const S_INTERCEPT = 4 + supplyShift * 2
  const D_SLOPE = -2
  const S_SLOPE = 1.5

  const eqL = (D_INTERCEPT - S_INTERCEPT) / (S_SLOPE - D_SLOPE)
  const eqW = D_INTERCEPT + D_SLOPE * eqL

  const data = Array.from({ length: 21 }, (_, l) => ({
    l,
    demand: Math.max(0, D_INTERCEPT + D_SLOPE * l),
    supply: Math.max(0, S_INTERCEPT + S_SLOPE * l),
  }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Labour Supply and Wage Determination</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The wage and quantity of labour employed are set where labour demand (MRP) meets labour supply. Shift each curve to see the new equilibrium.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="l"
              label={{ value: 'Quantity of Labour', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 48]}
              label={{ value: 'Wage', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `L = ${v}`}
            />
            <ReferenceLine
              x={eqL.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `L* = ${eqL.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }}
            />
            <ReferenceLine
              y={eqW.toFixed(1)}
              stroke="var(--accent)"
              strokeDasharray="5 5"
              label={{ value: `W* = $${eqW.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }}
            />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand (labour)" />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply (labour)" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">${eqW.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium wage</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-lg font-black text-[var(--accent)]">{eqL.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Equilibrium quantity of labour</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">
              Demand shift: {demandShift > 0 ? '+' : ''}{demandShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={demandShift}
              onChange={(e) => setDemandShift(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Shift labour demand curve"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {demandShift > 0 ? 'Demand for labour rises — e.g. rising product demand or new technology raising worker output' :
               demandShift < 0 ? 'Demand for labour falls — e.g. falling product demand or automation replacing tasks' :
               'Labour demand unchanged'}
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">
              Supply shift: {supplyShift > 0 ? '+' : ''}{supplyShift}
            </label>
            <input
              type="range" min={-2} max={2} step={0.5} value={supplyShift}
              onChange={(e) => setSupplyShift(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Shift labour supply curve"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              {supplyShift > 0 ? 'Supply of labour rises — e.g. population growth, immigration, more people willing to work at each wage' :
               supplyShift < 0 ? 'Supply of labour falls — e.g. restrictive immigration policy or a smaller working-age population' :
               'Labour supply unchanged'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Trade Unions, Minimum Wages, and Market Power (widget key: 'monopsony-labour-market') ──
   Supply / ACL: W = 4 + 1.5L
   MCL (monopsonist — twice as steep as supply, the standard result for linear supply): W = 4 + 3L
   Demand / MRP: W = 40 − 2L
   Monopsony: MCL = MRP → L_m = 36/5 = 7.2, W_m = ACL(L_m) = 4 + 1.5×7.2 = 14.8
   Competitive benchmark: Supply = Demand → L_c = 36/3.5 ≈ 10.2857, W_c ≈ 19.4286
   Minimum wage zones:
     minWage ≤ W_m            → no effect, stays at (L_m, W_m)
     W_m < minWage ≤ W_c      → firm is now a wage-taker up to the flat segment;
                                 hires where demand = minWage → L = (40 − minWage)/2, wage = minWage
     minWage > W_c             → price floor above competitive wage → unemployment,
                                 employment = demand-constrained L = (40 − minWage)/2
────────────────────────────────────────────────────────────────────────── */
export function MonopsonyLabourMarket() {
  const [minWage, setMinWage] = useState(0)

  const S_A = 4
  const S_B = 1.5
  const D_C = 40
  const D_D = 2

  const Lm = (D_C - S_A) / (2 * S_B + D_D)
  const Wm = S_A + S_B * Lm
  const Lc = (D_C - S_A) / (S_B + D_D)
  const Wc = S_A + S_B * Lc

  let employment: number
  let wage: number
  let unemployment = 0
  let zone: 'none' | 'rises' | 'unemployment'

  if (minWage <= Wm) {
    zone = 'none'
    employment = Lm
    wage = Math.max(Wm, minWage)
  } else if (minWage <= Wc) {
    zone = 'rises'
    employment = (D_C - minWage) / D_D
    wage = minWage
  } else {
    zone = 'unemployment'
    const lDemanded = (D_C - minWage) / D_D
    const lSupplied = (minWage - S_A) / S_B
    employment = lDemanded
    wage = minWage
    unemployment = lSupplied - lDemanded
  }

  const data = Array.from({ length: 29 }, (_, i) => {
    const l = i * 0.5
    return {
      l,
      acl: S_A + S_B * l,
      mcl: S_A + 2 * S_B * l,
      mrp: Math.max(0, D_C - D_D * l),
    }
  })

  const zoneLabel = zone === 'none' ? 'No effect — below monopsony wage'
    : zone === 'rises' ? 'Wage AND employment both rise — classic monopsony result'
    : 'Unemployment — minimum wage exceeds the competitive wage'

  const zoneTileClass = zone === 'none' ? 'border-[var(--border)] bg-[var(--muted)]/40'
    : zone === 'rises' ? 'border-green-500/30 bg-green-500/10'
    : 'border-red-500/30 bg-red-500/10'

  const zoneTextClass = zone === 'none' ? 'text-[var(--muted-fg)]'
    : zone === 'rises' ? 'text-green-500'
    : 'text-red-500'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Trade Unions, Minimum Wages, and Market Power</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A monopsonist is the only buyer of labour, so it faces the whole upward-sloping supply curve. Its marginal cost of labour (MCL) rises faster than the wage it pays, so it hires fewer workers at a lower wage than a competitive market would. A carefully judged minimum wage can push wages and employment up at the same time.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={290}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="l" type="number" domain={[0, 14]}
              label={{ value: 'Quantity of Labour', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 50]}
              label={{ value: 'Wage ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `L = ${v}`}
            />
            <ReferenceLine x={Lm.toFixed(2)} stroke="#ef4444" strokeDasharray="5 5" label={{ value: `Monopsony L=${Lm.toFixed(1)}`, fill: '#ef4444', fontSize: 10 }} />
            <ReferenceLine x={Lc.toFixed(2)} stroke="#3b82f6" strokeDasharray="5 5" label={{ value: `Competitive L=${Lc.toFixed(1)}`, fill: '#3b82f6', fontSize: 10, position: 'insideTopRight' }} />
            {minWage > 0 && (
              <ReferenceLine y={minWage} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: `Minimum wage $${minWage.toFixed(2)}`, fill: 'var(--accent)', fontSize: 10, position: 'right' }} />
            )}
            <Line type="monotone" dataKey="acl" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply / ACL" />
            <Line type="monotone" dataKey="mcl" stroke="#f59e0b" strokeWidth={2.5} dot={false} strokeDasharray="5 5" name="MCL" />
            <Line type="monotone" dataKey="mrp" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand / MRP" />
          </LineChart>
        </ResponsiveContainer>

        <p className="text-xs text-[var(--muted-fg)]">
          Without a minimum wage, the monopsonist hires {Lm.toFixed(1)} workers at ${Wm.toFixed(2)}. A competitive market would hire {Lc.toFixed(2)} workers at ${Wc.toFixed(2)}.
        </p>

        <div className={cn('rounded-xl border-2 p-3 text-center', zoneTileClass)}>
          <div className={cn('font-black', zoneTextClass)}>{zoneLabel}</div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${wage.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Resulting wage</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{employment.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Resulting employment</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{zone === 'unemployment' ? unemployment.toFixed(2) : '0.00'}</div>
            <div className="text-xs text-[var(--muted-fg)]">Unemployment caused</div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Minimum wage: {minWage === 0 ? 'None' : `$${minWage.toFixed(2)}`}
          </label>
          <input
            type="range" min={0} max={25} step={0.5} value={minWage}
            onChange={(e) => setMinWage(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label="Set minimum wage"
          />
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Rent, Interest, and Profit (widget key: 'economic-rent-calculator') ──
   Supply: P = 1 + slopeS × Q   (intercept fixed at 1)
   Demand: P = D_intercept − 0.8 × Q
   Equilibrium: D_intercept − 0.8Q = 1 + slopeS×Q → Q* = (D_intercept − 1) / (slopeS + 0.8)
   Transfer earnings = ∫₀^Q* (1 + slopeS×q) dq = Q* + 0.5×slopeS×Q*²
   Economic rent = Total factor payment − Transfer earnings
────────────────────────────────────────────────────────────────────────── */
export function EconomicRentCalculator() {
  const [slopeS, setSlopeS] = useState(2)
  const [dIntercept, setDIntercept] = useState(20)

  const S_INTERCEPT = 1
  const D_SLOPE = -0.8

  const eqQ = (dIntercept - S_INTERCEPT) / (slopeS + 0.8)
  const eqP = S_INTERCEPT + slopeS * eqQ

  const totalPayment = eqP * eqQ
  const transferEarnings = S_INTERCEPT * eqQ + 0.5 * slopeS * eqQ * eqQ
  const economicRent = totalPayment - transferEarnings

  const rentPct = totalPayment > 0 ? (economicRent / totalPayment) * 100 : 0
  const transferPct = 100 - rentPct

  const qMax = Math.max(12, eqQ * 1.5)
  const data = Array.from({ length: 21 }, (_, i) => {
    const q = (qMax / 20) * i
    return {
      q: +q.toFixed(2),
      supply: +(S_INTERCEPT + slopeS * q).toFixed(2),
      demand: Math.max(0, +(dIntercept + D_SLOPE * q).toFixed(2)),
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Rent, Interest, and Profit</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A factor payment splits into transfer earnings (the minimum needed to keep the factor in its current use) and economic rent (anything paid above that). How inelastic supply is determines the split.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q" type="number" domain={[0, qMax]}
              label={{ value: 'Quantity of the Factor', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 32]}
              label={{ value: 'Price ($)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Q = ${Number(v).toFixed(1)}`}
            />
            <ReferenceLine x={eqQ.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Q* = ${eqQ.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }} />
            <ReferenceLine y={eqP.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `P* = $${eqP.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }} />
            <Line type="monotone" dataKey="supply" stroke="#22c55e" strokeWidth={2.5} dot={false} name="Supply" />
            <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Demand" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${totalPayment.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Total factor payment</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-lg font-black text-blue-500">${transferEarnings.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Transfer earnings</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${economicRent.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Economic rent</div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-[var(--muted-fg)]">
            <span>Economic rent ({rentPct.toFixed(0)}%)</span>
            <span>Transfer earnings ({transferPct.toFixed(0)}%)</span>
          </div>
          <div className="h-5 rounded-full overflow-hidden bg-[var(--muted)] flex">
            <div className="h-full bg-[var(--accent)]" style={{ width: `${rentPct}%` }} />
            <div className="h-full bg-blue-400" style={{ width: `${transferPct}%` }} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Supply inelasticity: {slopeS.toFixed(1)}</label>
            <input
              type="range" min={0.2} max={15} step={0.2} value={slopeS}
              onChange={(e) => setSlopeS(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Adjust supply inelasticity"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-fg)]">
              <span>Elastic supply</span>
              <span>Nearly fixed supply</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Demand: ${dIntercept}</label>
            <input
              type="range" min={10} max={30} step={1} value={dIntercept}
              onChange={(e) => setDIntercept(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust demand for the factor"
            />
            <p className="text-xs text-[var(--muted-fg)]">e.g. demand for land near a growing city rises as the city grows</p>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Economic rent is the payment to a factor above what&apos;s needed to keep it in its current use (its opportunity cost/transfer earnings). The more inelastic the supply, the larger the rent share — a perfectly fixed supply (like unique land) means the entire payment is rent.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Income Inequality — Measuring and Explaining (widget key: 'lorenz-gini-calculator') ──
   5 quintile shares are normalised so they always sum to 1, regardless of the raw
   slider values. Gini = 1 − Σ (Xi − Xi-1)(Yi + Yi-1), the standard trapezoidal formula
   (X = cumulative population fractions, Y = cumulative income fractions).
────────────────────────────────────────────────────────────────────────── */
export function LorenzGiniCalculator() {
  const [q1, setQ1] = useState(4)
  const [q2, setQ2] = useState(9)
  const [q3, setQ3] = useState(14)
  const [q4, setQ4] = useState(22)
  const [q5, setQ5] = useState(51)

  const raw = [q1, q2, q3, q4, q5]
  const total = raw.reduce((a, b) => a + b, 0) || 1
  const shares = raw.map((v) => v / total)

  const popX = [0.2, 0.4, 0.6, 0.8, 1.0]
  const incomeY: number[] = []
  shares.reduce((acc, s, i) => {
    const cum = acc + s
    incomeY[i] = cum
    return cum
  }, 0)

  let giniSum = 0
  let prevX = 0
  let prevY = 0
  for (let i = 0; i < 5; i++) {
    giniSum += (popX[i] - prevX) * (incomeY[i] + prevY)
    prevX = popX[i]
    prevY = incomeY[i]
  }
  const gini = 1 - giniSum

  const data = [
    { pop: 0, lorenz: 0, equality: 0 },
    { pop: 20, lorenz: +(incomeY[0] * 100).toFixed(2), equality: 20 },
    { pop: 40, lorenz: +(incomeY[1] * 100).toFixed(2), equality: 40 },
    { pop: 60, lorenz: +(incomeY[2] * 100).toFixed(2), equality: 60 },
    { pop: 80, lorenz: +(incomeY[3] * 100).toFixed(2), equality: 80 },
    { pop: 100, lorenz: +(incomeY[4] * 100).toFixed(2), equality: 100 },
  ]

  const interpretation = gini < 0.3
    ? 'a relatively equal income distribution'
    : gini < 0.45
    ? 'moderate income inequality'
    : 'high income inequality'

  const sliders: { label: string; value: number; set: (v: number) => void }[] = [
    { label: 'Poorest 20%', value: q1, set: setQ1 },
    { label: 'Second 20%', value: q2, set: setQ2 },
    { label: 'Third 20%', value: q3, set: setQ3 },
    { label: 'Fourth 20%', value: q4, set: setQ4 },
    { label: 'Richest 20%', value: q5, set: setQ5 },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Income Inequality — Measuring and Explaining</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Set an income share for each quintile (they&apos;re automatically rescaled to sum to 100%). The Lorenz curve plots cumulative income share against cumulative population share — the further it bows away from the diagonal, the more unequal the distribution.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="pop" type="number" domain={[0, 100]}
              label={{ value: 'Cumulative Population (%)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 100]}
              label={{ value: 'Cumulative Income (%)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `Population: ${v}%`}
            />
            <Line type="monotone" dataKey="equality" stroke="var(--border)" strokeWidth={1.5} strokeDasharray="4 4" dot={false} name="Line of perfect equality" />
            <Line type="monotone" dataKey="lorenz" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3 }} name="Lorenz curve" />
          </LineChart>
        </ResponsiveContainer>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-3xl font-black text-[var(--accent)]">{gini.toFixed(3)}</div>
          <div className="text-sm text-[var(--muted-fg)]">Gini coefficient (0 = perfect equality, 1 = perfect inequality)</div>
        </div>

        <p className="text-sm text-[var(--muted-fg)]">
          A Gini coefficient of {gini.toFixed(2)} indicates roughly {interpretation} (below 0.3 is broadly equal, 0.3–0.45 is moderate inequality, above 0.45 is high inequality — these are approximate descriptive bands, not hard thresholds).
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {sliders.map(({ label, value, set }) => (
            <div key={label} className="space-y-1">
              <label className="text-xs font-semibold text-[var(--muted-fg)]">{label}: {value}</label>
              <input
                type="range" min={0} max={100} step={1} value={value}
                onChange={(e) => set(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label={`Adjust income share for ${label}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
