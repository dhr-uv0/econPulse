'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'

/* ── Heckscher-Ohlin Factor Intensity & Factor Price Equalization ───────────
   widget key: 'heckscher-ohlin-factor-intensity'

   Setup: Cloth is labour-intensive (2 Labour, 1 Capital per unit).
          Steel is capital-intensive (1 Labour, 2 Capital per unit).
   The country's PPF is bounded by two factor constraints:
     2*Qc + 1*Qs <= TotalLabour     (labour constraint)
     1*Qc + 2*Qs <= TotalCapital    (capital constraint)
   The kink of the piecewise-linear PPF is where both bind simultaneously.
   Solving the 2x2 system by elimination:
     2Qc + Qs = L  ...(1)
     Qc + 2Qs = K  ...(2)
   (1) => Qs = L - 2Qc. Substitute into (2): Qc + 2(L - 2Qc) = K
     => -3Qc = K - 2L  =>  Qc = (2L - K) / 3
   Back-substitute:            Qs = (2K - L) / 3
   Hand-verified: L=120, K=100 => Qc=(240-100)/3=46.67, Qs=(200-120)/3=26.67
     check (1): 2*46.67+26.67=120.0 ✓   check (2): 46.67+2*26.67=100.0 ✓
*/
export function HeckscherOhlinFactorIntensity() {
  const [totalLabour, setTotalLabour] = useState(120)
  const [totalCapital, setTotalCapital] = useState(100)

  // Full-specialization axis intercepts (always valid regardless of which
  // constraint binds).
  const maxClothFull = Math.min(totalLabour / 2, totalCapital)       // Qs = 0
  const maxSteelFull = Math.min(totalLabour, totalCapital / 2)       // Qc = 0

  // Corner point where both factor constraints bind exactly.
  const rawQc = (2 * totalLabour - totalCapital) / 3
  const rawQs = (2 * totalCapital - totalLabour) / 3
  const cornerValid = rawQc > 0.01 && rawQs > 0.01
  const cornerQc = cornerValid ? rawQc : 0
  const cornerQs = cornerValid ? rawQs : 0

  const ppfPoints = cornerValid
    ? [
        { qc: 0, qs: maxSteelFull },
        { qc: cornerQc, qs: cornerQs },
        { qc: maxClothFull, qs: 0 },
      ]
    : [
        { qc: 0, qs: maxSteelFull },
        { qc: maxClothFull, qs: 0 },
      ]

  const ratio = totalLabour / totalCapital
  const abundant = ratio > 1.02 ? 'labour-abundant' : ratio < 0.98 ? 'capital-abundant' : 'balanced in factor proportions'
  const exportGood = ratio > 1.02 ? 'Cloth (labour-intensive)' : ratio < 0.98 ? 'Steel (capital-intensive)' : 'neither good in particular'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Heckscher-Ohlin Model &amp; Factor Price Equalization</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Cloth is labour-intensive (2 Labour + 1 Capital per unit); Steel is capital-intensive (1 Labour + 2 Capital per unit).
            Set the country&apos;s factor endowments and see how relative factor abundance — not technology — determines comparative advantage.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="qc" type="number" domain={[0, Math.ceil(Math.max(maxClothFull, cornerQc) * 1.15) || 1]}
              label={{ value: 'Cloth (Qc) — labour-intensive', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              dataKey="qs" type="number" domain={[0, Math.ceil(Math.max(maxSteelFull, cornerQs) * 1.15) || 1]}
              label={{ value: 'Steel (Qs) — capital-intensive', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number, name: string) => [v.toFixed(1), name === 'qs' ? 'Steel' : 'Cloth']}
            />
            {cornerValid && (
              <>
                <ReferenceLine x={+cornerQc.toFixed(2)} stroke="var(--accent)" strokeDasharray="4 4" />
                <ReferenceLine y={+cornerQs.toFixed(2)} stroke="var(--accent)" strokeDasharray="4 4" label={{ value: 'Factor-constraint corner', fill: 'var(--accent)', fontSize: 10, position: 'right' }} />
              </>
            )}
            <Line data={ppfPoints} type="linear" dataKey="qs" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6' }} name="PPF (factor constraints)" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{cornerQc.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Corner Qc (Cloth)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-green-500">{cornerQs.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Corner Qs (Steel)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">{ratio.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Labour / Capital ratio</div>
          </div>
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-sm font-black text-[var(--accent)] capitalize">{abundant}</div>
            <div className="text-xs text-[var(--muted-fg)]">Factor abundance</div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center text-sm">
          <span className="text-[var(--fg)]">
            H-O prediction: this country is <span className="font-bold">{abundant}</span> (L/K = {ratio.toFixed(2)}), so it should export{' '}
            <span className="font-bold">{exportGood}</span>.
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Total Labour endowment: {totalLabour}</label>
            <input
              type="range" min={50} max={200} step={5} value={totalLabour}
              onChange={(e) => setTotalLabour(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Set the country's total labour endowment"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Total Capital endowment: {totalCapital}</label>
            <input
              type="range" min={50} max={200} step={5} value={totalCapital}
              onChange={(e) => setTotalCapital(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Set the country's total capital endowment"
            />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          The Heckscher-Ohlin theorem predicts that a country exports the good that uses its relatively abundant factor intensively — a labour-abundant
          country exports the labour-intensive good, even without any technology differences between countries (unlike the Ricardian model). Free trade
          in goods, by raising demand for the abundant factor and lowering demand for the scarce factor, tends toward Factor Price Equalization: wages
          and rental rates converge across trading countries even without factors physically moving.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Krugman New Trade Model — Increasing Returns & Monopolistic Competition ─
   widget key: 'krugman-new-trade-model'

   Firm cost: TC = F + c*Q  =>  AC = F/Q + c  (declining — internal economies of scale)
   Perceived elasticity facing each firm: e = b*n  (more firms => more substitutes => more elastic demand)
   Monopolistically-competitive pricing: P = c / (1 - 1/e) = c*e / (e - 1)
   Market clearing (symmetric firms): total spending S = n * P * Q  =>  Q = S / (n*P)
   Free-entry zero-profit condition: P = AC(Q)

   Solving in closed form (derived, then verified numerically below):
     P = AC  =>  Q = F / (P - c)                          ...from AC = F/Q + c
     P - c = c*e/(e-1) - c = c/(e-1)  =>  Q = F(e-1)/c     ...(A)
     Market clearing: Q = S/(nP) = S(e-1) / (c*e*n)         ...(B)
     Set (A) = (B):  F(e-1)/c = S(e-1)/(c*e*n)
       => F = S/(e*n)  => e*n = S/F.  Since e = b*n:  b*n^2 = S/F
       => n* = sqrt(S / (b*F))
       => e* = b*n* = sqrt(b*S/F)
       => Q* = F*(e* - 1)/c
       => P* = c*e* / (e* - 1)

   Numerical check with defaults F=100, c=5, b=1.0:
     Autarky, S=5000:  n=sqrt(5000/100)=7.071, e=7.071, Q=100*6.071/5=121.42, P=5*7.071/6.071=5.824
       check: AC = 100/121.42 + 5 = 5.824 = P ✓
     Trade,   2S=10000: n=sqrt(10000/100)=10, e=10, Q=100*9/5=180, P=5*10/9=5.556
       check: AC = 100/180 + 5 = 5.556 = P ✓
     Result: n rises 7.071 -> 10 (factor sqrt(2) ~= 1.414, LESS than double);
             Q per firm rises 121.4 -> 180; P falls 5.824 -> 5.556.
   This matches the general algebra: n(2S)/n(S) = sqrt(2) always (never doubles),
   and since dP/de < 0 while e(2S) > e(S), P always falls when the market integrates.
*/
function solveKrugman(S: number, b: number, F: number, c: number) {
  const n = Math.sqrt(S / (b * F))
  const e = b * n
  const Q = (F * (e - 1)) / c
  const P = (c * e) / (e - 1)
  const ac = F / Q + c
  return { n, e, Q, P, ac }
}

export function KrugmanNewTradeModel() {
  const [marketSize, setMarketSize] = useState(5000)
  const [b, setB] = useState(1.0)
  const [fixedCost, setFixedCost] = useState(100)
  const [marginalCost, setMarginalCost] = useState(5)

  const autarky = solveKrugman(marketSize, b, fixedCost, marginalCost)
  const trade = solveKrugman(2 * marketSize, b, fixedCost, marginalCost)

  const nRatio = trade.n / autarky.n
  const qRose = trade.Q > autarky.Q
  const pFell = trade.P < autarky.P
  const consolidated = trade.n < 2 * autarky.n

  const acCurve = Array.from({ length: 40 }, (_, i) => {
    const q = 10 + i * (Math.max(trade.Q, autarky.Q) * 1.6) / 40
    return { q: +q.toFixed(1), ac: +(fixedCost / q + marginalCost).toFixed(3) }
  })

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">New Trade Theory — Increasing Returns &amp; the Krugman Model</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Monopolistically-competitive firms with internal economies of scale can generate gains from trade between IDENTICAL countries — no
            comparative advantage required. Compare an autarky market of size S against two identical countries integrating into a single market of size 2S.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={acCurve} margin={{ top: 10, right: 30, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="q"
              label={{ value: 'Output per firm (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Price / Avg. Cost ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            <ReferenceLine x={+autarky.Q.toFixed(1)} stroke="#3b82f6" strokeDasharray="4 4" label={{ value: 'Q autarky', fill: '#3b82f6', fontSize: 10 }} />
            <ReferenceLine x={+trade.Q.toFixed(1)} stroke="#22c55e" strokeDasharray="4 4" label={{ value: 'Q trade', fill: '#22c55e', fontSize: 10, position: 'right' }} />
            <ReferenceLine y={+autarky.P.toFixed(2)} stroke="#3b82f6" strokeDasharray="2 2" />
            <ReferenceLine y={+trade.P.toFixed(2)} stroke="#22c55e" strokeDasharray="2 2" />
            <Line type="monotone" dataKey="ac" stroke="var(--accent)" strokeWidth={2.5} dot={false} name="Average Cost (declining — economies of scale)" />
          </LineChart>
        </ResponsiveContainer>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[var(--muted-fg)] text-xs">
                <th className="p-2">Scenario</th>
                <th className="p-2">n (firms/varieties)</th>
                <th className="p-2">Q (output/firm)</th>
                <th className="p-2">P (price)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--border)]">
                <td className="p-2 font-semibold text-blue-500">Autarky (market size S)</td>
                <td className="p-2 text-[var(--fg)]">{autarky.n.toFixed(2)}</td>
                <td className="p-2 text-[var(--fg)]">{autarky.Q.toFixed(1)}</td>
                <td className="p-2 text-[var(--fg)]">${autarky.P.toFixed(3)}</td>
              </tr>
              <tr className="border-t border-[var(--border)]">
                <td className="p-2 font-semibold text-green-500">Trade (integrated market 2S)</td>
                <td className="p-2 text-[var(--fg)]">{trade.n.toFixed(2)}</td>
                <td className="p-2 text-[var(--fg)]">{trade.Q.toFixed(1)}</td>
                <td className="p-2 text-[var(--fg)]">${trade.P.toFixed(3)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Market size (S): ${marketSize.toLocaleString()}</label>
            <input
              type="range" min={1000} max={10000} step={250} value={marketSize}
              onChange={(e) => setMarketSize(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Set market size S — total consumer spending"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Substitutability (b): {b.toFixed(1)}</label>
            <input
              type="range" min={0.5} max={3.0} step={0.1} value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className="w-full accent-purple-500"
              aria-label="Set responsiveness of demand elasticity to number of firms"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-500">Fixed cost per firm (F): ${fixedCost}</label>
            <input
              type="range" min={20} max={200} step={10} value={fixedCost}
              onChange={(e) => setFixedCost(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Set each firm's fixed cost"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-green-500">Marginal cost per unit (c): ${marginalCost.toFixed(1)}</label>
            <input
              type="range" min={1} max={15} step={0.5} value={marginalCost}
              onChange={(e) => setMarginalCost(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Set each firm's constant marginal cost"
            />
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center text-sm',
          qRose && pFell && consolidated ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <span className="text-[var(--fg)]">
            Integrating into the larger market: number of firms rises by a factor of {nRatio.toFixed(2)}×
            ({consolidated ? 'less than double — some consolidation occurs' : 'unexpectedly not consolidated for these parameters'}),
            output per surviving firm {qRose ? 'RISES' : 'falls'} (economies of scale exploited further), and price {pFell ? 'FALLS' : 'rises'} for consumers.
          </span>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          New Trade Theory does not need comparative advantage to generate gains from trade. Even two identical countries gain by merging their markets:
          consumers get access to more varieties in total than either country had alone (love of variety), and the surviving firms produce at larger
          scale, pushing average cost — and price — down. The source of the gains is exploiting increasing returns to scale in a bigger combined market,
          not differences in technology or factor endowments.
        </div>
      </CardContent>
    </Card>
  )
}
