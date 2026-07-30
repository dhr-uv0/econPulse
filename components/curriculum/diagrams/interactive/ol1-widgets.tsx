'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Consumer Theory — Utility Maximisation (widget key: 'utility-maximisation') ──
   Cobb-Douglas utility U = X^a * Y^(1-a), budget Px*X + Py*Y = M.
   Marshallian demand: X* = a*M/Px, Y* = (1-a)*M/Py.
   U* = X*^a * Y*^(1-a). Indifference curve at level u: Y = (u / X^a)^(1/(1-a)).
   Tangency check: MRS = (a/(1-a)) * (Y* / X*) should equal Px/Py — verified by hand:
   (a/(1-a))*[(1-a)M/Py]/[aM/Px] = (a/(1-a))*[(1-a)/a]*(Px/Py) = Px/Py. Holds exactly.
   Default a=0.5, M=100, Px=5, Py=5 → X*=Y*=10, U*=10, MRS=1=Px/Py. Verified.
────────────────────────────────────────────────────────────────────────── */
export function UtilityMaximization() {
  const [a, setA] = useState(0.5)
  const [m, setM] = useState(100)
  const [px, setPx] = useState(5)
  const [py, setPy] = useState(5)

  const xStar = (a * m) / px
  const yStar = ((1 - a) * m) / py
  const uStar = Math.pow(xStar, a) * Math.pow(yStar, 1 - a)
  const mrs = (a / (1 - a)) * (yStar / xStar)
  const priceRatio = px / py

  const xMax = (m / px) * 1.3
  const yMax = (m / py) * 1.3
  const N = 50
  const levels = [0.5 * uStar, uStar, 1.5 * uStar]

  const data = Array.from({ length: N + 1 }, (_, i) => {
    const x = (xMax / N) * i
    const budgetY = m / py - (px / py) * x
    const point: Record<string, number | null> = {
      x: +x.toFixed(3),
      budget: budgetY >= 0 ? +budgetY.toFixed(3) : null,
    }
    const keys = ['curveLow', 'curveMid', 'curveHigh'] as const
    keys.forEach((key, idx) => {
      if (x <= xMax * 0.02) {
        point[key] = null
        return
      }
      const y = Math.pow(levels[idx] / Math.pow(x, a), 1 / (1 - a))
      point[key] = isFinite(y) && y <= yMax * 1.4 ? +y.toFixed(3) : null
    })
    return point
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Consumer Theory — Utility Maximisation</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            With Cobb-Douglas utility U = X^a Y^(1-a), the consumer&apos;s optimal bundle sits where the highest reachable indifference curve is tangent to the budget line. Adjust the preference weight, income, and prices to see the tangency shift.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="x" type="number" domain={[0, xMax]}
              label={{ value: 'Good X', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, yMax]}
              label={{ value: 'Good Y', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `X = ${Number(v).toFixed(2)}`}
            />
            <ReferenceLine x={xStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `X* = ${xStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }} />
            <ReferenceLine y={yStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `Y* = ${yStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }} />
            <Line type="monotone" dataKey="budget" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Budget line" />
            <Line type="monotone" dataKey="curveLow" stroke="#94a3b8" strokeWidth={1.5} dot={false} strokeDasharray="4 4" name="U = 0.5×U*" />
            <Line type="monotone" dataKey="curveMid" stroke="#22c55e" strokeWidth={2.5} dot={false} name="U = U* (optimum)" />
            <Line type="monotone" dataKey="curveHigh" stroke="#94a3b8" strokeWidth={1.5} dot={false} strokeDasharray="4 4" name="U = 1.5×U*" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{xStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">X* (optimal quantity of X)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{yStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Y* (optimal quantity of Y)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{uStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">U* (utility attained)</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Tangency check: MRS = (a/(1-a))×(Y*/X*) = <span className="font-semibold text-[var(--fg)]">{mrs.toFixed(3)}</span>, and Px/Py = <span className="font-semibold text-[var(--fg)]">{priceRatio.toFixed(3)}</span>
          {Math.abs(mrs - priceRatio) < 0.001 ? ' — they match exactly, confirming the tangency condition.' : '.'}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Preference weight a: {a.toFixed(2)}</label>
            <input type="range" min={0.1} max={0.9} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Adjust preference weight a" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Income M: ${m}</label>
            <input type="range" min={20} max={200} step={5} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust income" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Price of X: ${px}</label>
            <input type="range" min={1} max={20} step={1} value={px} onChange={(e) => setPx(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust price of X" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Price of Y: ${py}</label>
            <input type="range" min={1} max={20} step={1} value={py} onChange={(e) => setPy(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust price of Y" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Income and Substitution Effects — Slutsky Decomposition (widget key: 'slutsky-decomposition') ──
   Cobb-Douglas U = X^a Y^(1-a). Bundle 1 at (Px1,Py): X1=a*M/Px1, Y1=(1-a)*M/Py, u0=X1^a*Y1^(1-a).
   Hicksian bundle at (Px2,Py) holding utility at u0 (derived by Lagrangian expenditure minimisation,
   verified by hand): X_h = u0*(a*Py/((1-a)*Px2))^(1-a), Y_h = X_h*(1-a)*Px2/(a*Py).
   Bundle 2 (Marshallian, new price, same income M): X2=a*M/Px2, Y2=(1-a)*M/Py.
   Substitution effect = X_h - X1. Income effect = X2 - X_h. Total = X2 - X1 (identity holds by construction).
   Default a=0.5, M=100, Py=5, Px1=5, Px2=10 → X1=10,Y1=10,u0=10; X_h≈7.071,Y_h≈14.142; X2=5,Y2=10.
   Sub effect ≈ -2.929, income effect ≈ -2.071, total = -5.0 = -2.929 + -2.071. Verified by hand.
────────────────────────────────────────────────────────────────────────── */
export function SlutskyDecomposition() {
  const [a, setA] = useState(0.5)
  const [m, setM] = useState(100)
  const [py, setPy] = useState(5)
  const [px1, setPx1] = useState(5)
  const [px2, setPx2] = useState(10)

  const x1 = (a * m) / px1
  const y1 = ((1 - a) * m) / py
  const u0 = Math.pow(x1, a) * Math.pow(y1, 1 - a)

  const xh = u0 * Math.pow((a * py) / ((1 - a) * px2), 1 - a)
  const yh = xh * ((1 - a) * px2) / (a * py)

  const x2 = (a * m) / px2
  const y2 = ((1 - a) * m) / py

  const subEffect = xh - x1
  const incEffect = x2 - xh
  const totalEffect = x2 - x1

  const isNormal = Math.sign(incEffect) === Math.sign(totalEffect) || incEffect === 0
  const dominatesLabel = Math.abs(subEffect) >= Math.abs(incEffect) ? 'substitution effect dominates' : 'income effect is larger in magnitude'

  const chartData = [
    { step: 'Bundle 1 (original)', x: +x1.toFixed(2), y: +y1.toFixed(2) },
    { step: 'Hicksian (compensated)', x: +xh.toFixed(2), y: +yh.toFixed(2) },
    { step: 'Bundle 2 (new price)', x: +x2.toFixed(2), y: +y2.toFixed(2) },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Income and Substitution Effects — Slutsky Decomposition</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            A price change splits into a substitution effect (movement along the original indifference curve to a cheaper bundle at the new prices) and an income effect (movement to a new indifference curve as real purchasing power changes).
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="x" type="number" domain={['dataMin - 1', 'dataMax + 1']}
              label={{ value: 'Good X', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              dataKey="y" type="number" domain={['dataMin - 1', 'dataMax + 1']}
              label={{ value: 'Good Y', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              formatter={(v: number, name: string) => [v.toFixed(2), name === 'y' ? 'Y' : 'X']}
              labelFormatter={() => ''}
            />
            <Line type="linear" dataKey="y" stroke="var(--accent)" strokeWidth={2} dot={{ r: 6, fill: 'var(--accent)', strokeWidth: 2, stroke: 'var(--card-bg)' }} name="Bundle path" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-black text-[var(--fg)]">({x1.toFixed(2)}, {y1.toFixed(2)})</div>
            <div className="text-xs text-[var(--muted-fg)]">Bundle 1 — original (Px1)</div>
          </div>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
            <div className="text-sm font-black text-blue-500">({xh.toFixed(2)}, {yh.toFixed(2)})</div>
            <div className="text-xs text-[var(--muted-fg)]">Hicksian — compensated (Px2, u0)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-sm font-black text-[var(--fg)]">({x2.toFixed(2)}, {y2.toFixed(2)})</div>
            <div className="text-xs text-[var(--muted-fg)]">Bundle 2 — new price (Px2)</div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 space-y-2">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-black text-[var(--accent)]">{totalEffect.toFixed(3)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Total effect (X2 − X1)</div>
            </div>
            <div>
              <div className="text-lg font-black text-[var(--fg)]">{subEffect.toFixed(3)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Substitution effect (X_h − X1)</div>
            </div>
            <div>
              <div className="text-lg font-black text-[var(--fg)]">{incEffect.toFixed(3)}</div>
              <div className="text-xs text-[var(--muted-fg)]">Income effect (X2 − X_h)</div>
            </div>
          </div>
          <p className="text-xs text-center text-[var(--muted-fg)]">
            Total Effect = Substitution Effect + Income Effect: {totalEffect.toFixed(3)} = {subEffect.toFixed(3)} + {incEffect.toFixed(3)}
          </p>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          X is behaving as a {isNormal ? 'normal' : 'Giffen-like'} good here ({dominatesLabel}). Cobb-Douglas preferences never actually produce Giffen goods, because the substitution effect always dominates the income effect for a good whose budget share isn&apos;t pathologically extreme — this decomposition is a good way to confirm that fact numerically for any slider combination you try.
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Preference weight a: {a.toFixed(2)}</label>
            <input type="range" min={0.1} max={0.9} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Adjust preference weight a" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Income M: ${m}</label>
            <input type="range" min={20} max={200} step={5} value={m} onChange={(e) => setM(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust income" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Price of Y (fixed): ${py}</label>
            <input type="range" min={1} max={20} step={1} value={py} onChange={(e) => setPy(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust price of Y" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Original price of X (Px1): ${px1}</label>
            <input type="range" min={1} max={20} step={1} value={px1} onChange={(e) => setPx1(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust original price of X" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">New price of X (Px2): ${px2}</label>
            <input type="range" min={1} max={30} step={1} value={px2} onChange={(e) => setPx2(Number(e.target.value))} className="w-full accent-red-500" aria-label="Adjust new price of X" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Producer Theory — Isoquant Cost Minimisation (widget key: 'isoquant-cost-minimisation') ──
   Cobb-Douglas production Q = L^b K^(1-b). Cost-minimising bundle for target output Q (the
   dual of consumer utility maximisation, same tangency algebra with a→b, Px→w, Py→r):
   L* = Q*(b*r/((1-b)*w))^(1-b), K* = Q*((1-b)*w/(b*r))^b. Min cost = w*L* + r*K*.
   MRTS = (b/(1-b)) * (K* / L*) should equal w/r — verified by hand (same derivation as UtilityMaximization's
   MRS check). Default b=0.5, Q=50, w=10, r=10 → L*=K*=50, cost=1000, MRTS=1=w/r. Verified.
────────────────────────────────────────────────────────────────────────── */
export function IsoquantCostMinimization() {
  const [b, setB] = useState(0.5)
  const [qTarget, setQTarget] = useState(50)
  const [w, setW] = useState(10)
  const [r, setR] = useState(10)

  const lStar = qTarget * Math.pow((b * r) / ((1 - b) * w), 1 - b)
  const kStar = qTarget * Math.pow(((1 - b) * w) / (b * r), b)
  const minCost = w * lStar + r * kStar
  const mrts = (b / (1 - b)) * (kStar / lStar)
  const wageRentRatio = w / r

  const lMax = lStar * 2.2
  const kMax = kStar * 2.2
  const N = 50

  const data = Array.from({ length: N + 1 }, (_, i) => {
    const l = (lMax / N) * i
    const isocostK = (minCost - w * l) / r
    let isoquantK: number | null = null
    if (l > lMax * 0.02) {
      const k = Math.pow(qTarget / Math.pow(l, b), 1 / (1 - b))
      isoquantK = isFinite(k) && k <= kMax * 1.4 ? +k.toFixed(3) : null
    }
    return {
      l: +l.toFixed(3),
      isocost: isocostK >= 0 ? +isocostK.toFixed(3) : null,
      isoquant: isoquantK,
    }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Producer Theory — Isoquant Cost Minimisation</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The dual of consumer choice: a firm with production Q = L^b K^(1-b) minimises the cost of reaching a target output where its isocost line is tangent to the isoquant (MRTS = w/r).
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="l" type="number" domain={[0, lMax]}
              label={{ value: 'Labour (L)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, kMax]}
              label={{ value: 'Capital (K)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 12 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: 12 }}
              labelFormatter={(v) => `L = ${Number(v).toFixed(2)}`}
            />
            <ReferenceLine x={lStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `L* = ${lStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11 }} />
            <ReferenceLine y={kStar.toFixed(2)} stroke="var(--accent)" strokeDasharray="5 5" label={{ value: `K* = ${kStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 11, position: 'right' }} />
            <Line type="monotone" dataKey="isocost" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Isocost line" />
            <Line type="monotone" dataKey="isoquant" stroke="#22c55e" strokeWidth={2.5} dot={false} name={`Isoquant Q = ${qTarget}`} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{lStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">L* (labour hired)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">{kStar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">K* (capital used)</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">${minCost.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Minimum total cost</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Tangency check: MRTS = (b/(1-b))×(K*/L*) = <span className="font-semibold text-[var(--fg)]">{mrts.toFixed(3)}</span>, and w/r = <span className="font-semibold text-[var(--fg)]">{wageRentRatio.toFixed(3)}</span>
          {Math.abs(mrts - wageRentRatio) < 0.001 ? ' — they match exactly, confirming cost-minimising input choice.' : '.'}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Labour&apos;s output elasticity b: {b.toFixed(2)}</label>
            <input type="range" min={0.1} max={0.9} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Adjust labour's output elasticity" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Target output Q: {qTarget}</label>
            <input type="range" min={10} max={100} step={5} value={qTarget} onChange={(e) => setQTarget(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust target output" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Wage w: ${w}</label>
            <input type="range" min={5} max={30} step={1} value={w} onChange={(e) => setW(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust wage" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Rental rate of capital r: ${r}</label>
            <input type="range" min={5} max={30} step={1} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust rental rate of capital" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── General Equilibrium — Edgeworth Box (widget key: 'edgeworth-box-ge') ──
   Two agents, two goods, fixed total endowments X_total=Y_total=20.
   Agent 1 holds (Xe1,Ye1); Agent 2 holds the remainder (20-Xe1, 20-Ye1).
   Equilibrium price ratio derived from market clearing (verified algebraically by hand):
   p* = (a1*Ye1 + a2*Ye2) / (20 - a1*Xe1 - a2*Xe2)
   Equilibrium allocation via Marshallian demand at p*: M1 = p**Xe1+Ye1, X1*=a1*M1/p*, Y1*=(1-a1)*M1.
   Default a1=0.7, a2=0.3, Xe1=15, Ye1=5 → p*=1, X1*=14,Y1*=6, X2*=6,Y2*=14.
   Hand-checked utility gains: U1 rises from ~10.789 (endowment) to ~10.855 (allocation);
   U2 rises from ~10.789 to ~10.855 — both agents gain from trade. Verified.
────────────────────────────────────────────────────────────────────────── */
export function EdgeworthBoxGE() {
  const [a1, setA1] = useState(0.7)
  const [a2, setA2] = useState(0.3)
  const [xe1, setXe1] = useState(15)
  const [ye1, setYe1] = useState(5)

  const TOTAL = 20
  const xe2 = TOTAL - xe1
  const ye2 = TOTAL - ye1

  const denom = TOTAL - a1 * xe1 - a2 * xe2
  const denomSafe = Math.abs(denom) < 0.5 ? (denom >= 0 ? 0.5 : -0.5) : denom
  const priceWarning = Math.abs(denom) < 0.5

  const pStar = (a1 * ye1 + a2 * ye2) / denomSafe

  const m1 = pStar * xe1 + ye1
  const x1Star = (a1 * m1) / pStar
  const y1Star = (1 - a1) * m1
  const x2Star = TOTAL - x1Star
  const y2Star = TOTAL - y1Star

  const u1Endow = Math.pow(xe1, a1) * Math.pow(ye1, 1 - a1)
  const u1Final = Math.pow(x1Star, a1) * Math.pow(y1Star, 1 - a1)
  const u2Endow = Math.pow(xe2, a2) * Math.pow(ye2, 1 - a2)
  const u2Final = Math.pow(x2Star, a2) * Math.pow(y2Star, 1 - a2)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">General Equilibrium — Edgeworth Box</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Two agents trade two goods from fixed initial endowments. A competitive equilibrium price ratio clears both markets simultaneously — the resulting allocation is a Pareto improvement for both agents whenever their preferences differ.
          </p>
        </div>

        {priceWarning && (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
            These endowment/preference combinations push the market-clearing condition toward a near-zero or negative denominator — the displayed price ratio is clamped and may not be economically meaningful. Try less extreme slider values.
          </div>
        )}

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-2xl font-black text-[var(--accent)]">p* = Px/Py = {pStar.toFixed(3)}</div>
          <div className="text-xs text-[var(--muted-fg)]">Competitive equilibrium price ratio</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] p-4 space-y-2">
            <div className="font-bold text-[var(--fg)]">Agent 1</div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Endowment (X,Y)</span>
              <span className="font-semibold text-[var(--fg)]">({xe1.toFixed(1)}, {ye1.toFixed(1)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Final allocation (X,Y)</span>
              <span className="font-semibold text-blue-500">({x1Star.toFixed(2)}, {y1Star.toFixed(2)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Utility: endowment → final</span>
              <span className="font-semibold text-[var(--fg)]">{u1Endow.toFixed(3)} → {u1Final.toFixed(3)}</span>
            </div>
            <div className={cn('text-xs font-semibold', u1Final >= u1Endow - 1e-9 ? 'text-green-500' : 'text-red-500')}>
              {u1Final >= u1Endow - 1e-9 ? 'Gains from trade (or unchanged)' : 'Utility fell — check slider combination'}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border)] p-4 space-y-2">
            <div className="font-bold text-[var(--fg)]">Agent 2</div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Endowment (X,Y)</span>
              <span className="font-semibold text-[var(--fg)]">({xe2.toFixed(1)}, {ye2.toFixed(1)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Final allocation (X,Y)</span>
              <span className="font-semibold text-blue-500">({x2Star.toFixed(2)}, {y2Star.toFixed(2)})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted-fg)]">Utility: endowment → final</span>
              <span className="font-semibold text-[var(--fg)]">{u2Endow.toFixed(3)} → {u2Final.toFixed(3)}</span>
            </div>
            <div className={cn('text-xs font-semibold', u2Final >= u2Endow - 1e-9 ? 'text-green-500' : 'text-red-500')}>
              {u2Final >= u2Endow - 1e-9 ? 'Gains from trade (or unchanged)' : 'Utility fell — check slider combination'}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Agent 1&apos;s preference weight a1: {a1.toFixed(2)}</label>
            <input type="range" min={0.1} max={0.9} step={0.05} value={a1} onChange={(e) => setA1(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Adjust Agent 1's preference weight" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Agent 2&apos;s preference weight a2: {a2.toFixed(2)}</label>
            <input type="range" min={0.1} max={0.9} step={0.05} value={a2} onChange={(e) => setA2(Number(e.target.value))} className="w-full accent-green-500" aria-label="Adjust Agent 2's preference weight" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Agent 1&apos;s endowment of X: {xe1.toFixed(1)}</label>
            <input type="range" min={0} max={20} step={0.5} value={xe1} onChange={(e) => setXe1(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Adjust Agent 1's endowment of good X" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Agent 1&apos;s endowment of Y: {ye1.toFixed(1)}</label>
            <input type="range" min={0} max={20} step={0.5} value={ye1} onChange={(e) => setYe1(Number(e.target.value))} className="w-full accent-[#e8c547]" aria-label="Adjust Agent 1's endowment of good Y" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Arrow's Impossibility Theorem and Voting (widget key: 'arrows-impossibility-voting') ──
   3 candidates (A,B,C), 3 voter groups, each picks one of 6 strict orderings.
   Pairwise majority votes are recomputed live from the 3 groups' current selections.
   Default cycle (verified by hand): G1 A>B>C, G2 B>C>A, G3 C>A>B.
     A vs B: G1→A, G2→B, G3→A (C>A>B ranks A above B) ⇒ A wins 2-1
     B vs C: G1→B, G2→B, G3→C ⇒ B wins 2-1
     A vs C: G1→A (A>B>C ranks A above C), G2→C (B>C>A ranks C above A), G3→C ⇒ C wins 2-1
   Cycle: A beats B, B beats C, C beats A — no Condorcet winner. Verified.
────────────────────────────────────────────────────────────────────────── */
const ORDERINGS = ['A>B>C', 'A>C>B', 'B>A>C', 'B>C>A', 'C>A>B', 'C>B>A'] as const
type Ordering = typeof ORDERINGS[number]
type Candidate = 'A' | 'B' | 'C'

function rankOf(order: Ordering, c: Candidate): number {
  return order.split('>').indexOf(c)
}

function pairwiseWinner(orderings: Ordering[], x: Candidate, y: Candidate): Candidate | 'tie' {
  let xVotes = 0
  let yVotes = 0
  orderings.forEach((o) => {
    if (rankOf(o, x) < rankOf(o, y)) xVotes++
    else yVotes++
  })
  if (xVotes > yVotes) return x
  if (yVotes > xVotes) return y
  return 'tie'
}

export function ArrowsImpossibilityVoting() {
  const [g1, setG1] = useState<Ordering>('A>B>C')
  const [g2, setG2] = useState<Ordering>('B>C>A')
  const [g3, setG3] = useState<Ordering>('C>A>B')

  const groups = [g1, g2, g3]

  const abWinner = pairwiseWinner(groups, 'A', 'B')
  const bcWinner = pairwiseWinner(groups, 'B', 'C')
  const acWinner = pairwiseWinner(groups, 'A', 'C')

  // A candidate is a Condorcet winner if it beats both others
  const beatsBoth = (c: Candidate): boolean => {
    const others: Candidate[] = (['A', 'B', 'C'] as Candidate[]).filter((x) => x !== c)
    return others.every((o) => pairwiseWinner(groups, c, o) === c)
  }
  const condorcetWinner = (['A', 'B', 'C'] as Candidate[]).find(beatsBoth)

  const groupSetters: { label: string; value: Ordering; set: (o: Ordering) => void }[] = [
    { label: 'Group 1', value: g1, set: setG1 },
    { label: 'Group 2', value: g2, set: setG2 },
    { label: 'Group 3', value: g3, set: setG3 },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Arrow&apos;s Impossibility Theorem and Voting</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Three voter groups each rank three candidates. Pairwise majority votes between candidates can produce a cycle with no consistent winner — exactly the failure of preference aggregation that Arrow&apos;s theorem shows is unavoidable in general.
          </p>
        </div>

        <div className="space-y-4">
          {groupSetters.map(({ label, value, set }) => (
            <div key={label} className="space-y-2">
              <div className="text-sm font-semibold text-[var(--fg)]">{label}&apos;s ranking</div>
              <div className="flex flex-wrap gap-2">
                {ORDERINGS.map((o) => (
                  <button
                    key={o}
                    onClick={() => set(o)}
                    className={cn(
                      'rounded-lg px-3 py-1.5 text-xs font-semibold border-2 transition-colors',
                      value === o
                        ? 'bg-[var(--accent)] border-[var(--accent)] text-black'
                        : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                    )}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-xs text-[var(--muted-fg)] mb-1">A vs B</div>
            <div className="text-lg font-black text-[var(--fg)]">{abWinner === 'tie' ? 'Tie' : `${abWinner} wins`}</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-xs text-[var(--muted-fg)] mb-1">B vs C</div>
            <div className="text-lg font-black text-[var(--fg)]">{bcWinner === 'tie' ? 'Tie' : `${bcWinner} wins`}</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-xs text-[var(--muted-fg)] mb-1">A vs C</div>
            <div className="text-lg font-black text-[var(--fg)]">{acWinner === 'tie' ? 'Tie' : `${acWinner} wins`}</div>
          </div>
        </div>

        {condorcetWinner ? (
          <div className="rounded-xl border-2 border-green-500/30 bg-green-500/10 p-4 text-sm">
            <div className="font-black text-green-500 mb-1">Condorcet winner: {condorcetWinner}</div>
            <p className="text-[var(--muted-fg)]">
              For this particular combination of preferences, a Condorcet winner happens to exist — but Arrow&apos;s theorem shows this isn&apos;t guaranteed for ALL possible preference profiles, which is the deeper problem.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-sm">
            <div className="font-black text-red-500 mb-1">No Condorcet winner exists</div>
            <p className="text-[var(--muted-fg)]">
              Majority rule is intransitive here ({abWinner} beats {abWinner === 'A' ? 'B' : 'A'}, {bcWinner} beats {bcWinner === 'B' ? 'C' : 'B'}, but {acWinner === 'A' ? 'C beats A' : 'A beats C'}). This is exactly the kind of preference-aggregation failure that Arrow&apos;s Impossibility Theorem shows is unavoidable in general — no voting rule can simultaneously satisfy all of Arrow&apos;s seemingly reasonable fairness conditions (unrestricted domain, non-dictatorship, Pareto efficiency, and independence of irrelevant alternatives) for 3+ options.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── Market Design — Gale-Shapley Deferred Acceptance (widget key: 'matching-theory') ──
   Fixed profile: P1: R1>R2>R3; P2: R2>R1>R3; P3: R1>R2>R3.
                  R1: P2>P1>P3; R2: P1>P2>P3; R3: P1>P2>P3.
   Hand-traced both directions:
   Proposers propose → P1-R1, P2-R2, P3-R3 (verified stable, no blocking pair).
   Receivers propose → P1-R2, P2-R1, P3-R3 (verified stable, no blocking pair).
   The two stable matchings differ (P1/P2 swap between R1/R2), confirming stability alone
   doesn't pin down a unique outcome, and the proposing side does at least as well overall.
────────────────────────────────────────────────────────────────────────── */
export function MatchingTheory() {
  const [proposersPropose, setProposersPropose] = useState(true)

  const proposersLog = [
    'Round 1: P1 proposes to R1, P2 proposes to R2, P3 proposes to R1. R1 receives P1 and P3, prefers P1 (its ranking is P2>P1>P3), so R1 tentatively holds P1 and rejects P3. R2 holds P2 (no rival).',
    'Round 2: P3, rejected by R1, proposes to R2 (next on its list). R2 already holds P2; comparing P2 vs P3, R2 prefers P2 (P1>P2>P3), so R2 keeps P2 and rejects P3.',
    'Round 3: P3, rejected by R2 too, proposes to R3 (last on its list). R3 has no held proposer, so it holds P3.',
    'No more rejections — the algorithm terminates. Final stable matching: P1-R1, P2-R2, P3-R3.',
  ]

  const receiversLog = [
    'Round 1: R1 proposes to P2, R2 proposes to P1, R3 proposes to P1. P1 receives R2 and R3, prefers R2 (its ranking is R1>R2>R3), so P1 tentatively holds R2 and rejects R3. P2 holds R1 (no rival).',
    'Round 2: R3, rejected by P1, proposes to P2 (next on its list). P2 already holds R1; comparing R1 vs R3, P2 prefers R1 (R2>R1>R3), so P2 keeps R1 and rejects R3.',
    'Round 3: R3, rejected by P2 too, proposes to P3 (last on its list). P3 has no held proposer, so it holds R3.',
    'No more rejections — the algorithm terminates. Final stable matching: P1-R2, P2-R1, P3-R3.',
  ]

  const finalMatching = proposersPropose
    ? [['P1', 'R1'], ['P2', 'R2'], ['P3', 'R3']]
    : [['P1', 'R2'], ['P2', 'R1'], ['P3', 'R3']]

  const log = proposersPropose ? proposersLog : receiversLog

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Market Design — Gale-Shapley Deferred Acceptance</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The deferred acceptance algorithm always produces a stable matching (no pair prefers each other to their assigned partners) — but which side proposes changes which stable matching you get.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] p-4 space-y-2 text-sm">
          <div className="font-semibold text-[var(--fg)]">Fixed preference profile</div>
          <div className="grid gap-1 sm:grid-cols-2 text-[var(--muted-fg)]">
            <div>P1: R1 &gt; R2 &gt; R3</div>
            <div>R1: P2 &gt; P1 &gt; P3</div>
            <div>P2: R2 &gt; R1 &gt; R3</div>
            <div>R2: P1 &gt; P2 &gt; P3</div>
            <div>P3: R1 &gt; R2 &gt; R3</div>
            <div>R3: P1 &gt; P2 &gt; P3</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setProposersPropose(true)}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-semibold border-2 transition-colors',
              proposersPropose ? 'bg-[var(--accent)] border-[var(--accent)] text-black' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            Proposers propose
          </button>
          <button
            onClick={() => setProposersPropose(false)}
            className={cn(
              'rounded-lg px-4 py-2 text-sm font-semibold border-2 transition-colors',
              !proposersPropose ? 'bg-[var(--accent)] border-[var(--accent)] text-black' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            Receivers propose
          </button>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-sm text-[var(--fg)]">Round-by-round trace</div>
          <ol className="space-y-2">
            {log.map((line, i) => (
              <li key={i} className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
                {line}
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          {finalMatching.map(([p, r]) => (
            <div key={p} className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
              <div className="text-lg font-black text-[var(--accent)]">{p} — {r}</div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Notice the final stable matching changes depending on who proposes — deferred acceptance always produces A stable matching, but not always the SAME one. The proposing side generally does at least as well as under the other convention.
        </div>
      </CardContent>
    </Card>
  )
}
