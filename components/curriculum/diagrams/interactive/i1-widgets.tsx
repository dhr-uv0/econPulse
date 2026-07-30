'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Revenue Curves (widget key: 'revenue-curves') ───────────────────────── */
export function RevenueCurves() {
  const [mode, setMode] = useState<'competitive' | 'searcher'>('competitive')
  const [price, setPrice] = useState(10)
  const [intercept, setIntercept] = useState(16)
  const [slope, setSlope] = useState(1)

  const isCompetitive = mode === 'competitive'

  const data = Array.from({ length: 13 }, (_, q) => {
    if (isCompetitive) {
      return { q, ar: price, mr: price, tr: +(price * q).toFixed(2) }
    }
    const ar = Math.max(0, intercept - slope * q)
    const mr = intercept - 2 * slope * q
    return { q, ar: +ar.toFixed(2), mr: +mr.toFixed(2), tr: +(ar * q).toFixed(2) }
  })

  const arMrValues = data.flatMap(d => [d.ar, d.mr])
  const arMrMin = Math.min(0, ...arMrValues)
  const arMrMax = Math.max(...arMrValues)
  const trValues = data.map(d => d.tr)
  const trMax = Math.max(...trValues)

  const trMaxQ = intercept / (2 * slope)
  const trMaxValue = intercept * trMaxQ - slope * trMaxQ * trMaxQ
  const trMaxInRange = !isCompetitive && trMaxQ <= 12

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Revenue Concepts — TR, AR, MR</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Compare how total, average, and marginal revenue behave for a price-taking firm versus a firm that faces a downward-sloping demand curve.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setMode('competitive')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              isCompetitive ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
            style={isCompetitive ? { background: 'var(--accent)', borderColor: 'var(--accent)' } : {}}
          >
            Price Taker (perfect competition)
          </button>
          <button
            onClick={() => setMode('searcher')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              !isCompetitive ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
            style={!isCompetitive ? { background: 'var(--accent)', borderColor: 'var(--accent)' } : {}}
          >
            Price Searcher (downward-sloping demand)
          </button>
        </div>

        {/* AR & MR chart */}
        <div>
          <p className="text-xs font-semibold text-[var(--muted-fg)] mb-1">Average Revenue (AR) &amp; Marginal Revenue (MR)</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="q" type="number" domain={[0, 12]}
                label={{ value: 'Quantity (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
                tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
              />
              <YAxis
                domain={[Math.floor(arMrMin - 1), Math.ceil(arMrMax + 1)]}
                label={{ value: 'Price / Revenue ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
                tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
              />
              <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
              <ReferenceLine y={0} stroke="var(--border)" />
              <Line type="monotone" dataKey="ar" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="AR" />
              <Line type="monotone" dataKey="mr" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MR" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* TR chart */}
        <div>
          <p className="text-xs font-semibold text-[var(--muted-fg)] mb-1">Total Revenue (TR)</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis
                dataKey="q" type="number" domain={[0, 12]}
                label={{ value: 'Quantity (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
                tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
              />
              <YAxis
                domain={[0, Math.ceil(trMax + trMax * 0.1)]}
                label={{ value: 'TR ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
                tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
              />
              <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
              {trMaxInRange && (
                <ReferenceLine
                  x={+trMaxQ.toFixed(1)}
                  stroke="var(--accent)"
                  strokeDasharray="5 5"
                  label={{ value: `TR max @ Q=${trMaxQ.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10 }}
                />
              )}
              <Line type="monotone" dataKey="tr" stroke="#22c55e" strokeWidth={2.5} dot={false} name="TR" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Controls */}
        {isCompetitive ? (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Market price: ${price}</label>
            <input
              type="range" min={2} max={20} step={1} value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Market price"
            />
            <p className="text-xs text-[var(--muted-fg)]">
              A price taker faces a perfectly elastic demand curve — AR = MR = P at every quantity. TR rises in a straight line with no interior peak.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Demand intercept: {intercept}</label>
              <input
                type="range" min={8} max={20} step={1} value={intercept}
                onChange={(e) => setIntercept(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Demand intercept"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Demand slope: {slope.toFixed(1)}</label>
              <input
                type="range" min={0.4} max={1.5} step={0.1} value={slope}
                onChange={(e) => setSlope(Number(e.target.value))}
                className="w-full accent-red-500"
                aria-label="Demand slope"
              />
            </div>
          </div>
        )}

        {/* Stats */}
        {isCompetitive ? (
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
            <div className="text-sm text-[var(--muted-fg)]">
              A price-taking firm does not look for a &quot;TR peak&quot; — it decides how much to produce by comparing MR to MC, not by maximising TR alone.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
              <div className="text-lg font-black text-[var(--accent)]">
                {trMaxInRange ? trMaxQ.toFixed(1) : '> 12'}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">TR-maximising Q (where MR = 0)</div>
            </div>
            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
              <div className="text-lg font-black text-[var(--accent)]">
                {trMaxInRange ? `$${trMaxValue.toFixed(1)}` : `$${trMax.toFixed(1)}+`}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">Maximum total revenue</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── Profit Maximisation (widget key: 'profit-max') ──────────────────────── */
export function ProfitMax() {
  const [mode, setMode] = useState<'competitive' | 'searcher'>('competitive')
  const [tfc, setTfc] = useState(100)
  const [variable, setVariable] = useState(5)
  const [price, setPrice] = useState(11)
  const [intercept, setIntercept] = useState(16)
  const [slope, setSlope] = useState(1)

  const isCompetitive = mode === 'competitive'

  // Q* — profit-maximising output where MC = MR (MC = P for a price taker)
  const qStarRaw = isCompetitive
    ? (price - variable) / 0.6
    : (intercept - variable) / (2 * slope + 0.6)
  const qStar = Math.max(0, qStarRaw)

  let priceAtQstar: number
  let atcAtQstar: number | null
  let profitPerUnit: number | null
  let totalProfit: number

  if (qStar > 0.01) {
    priceAtQstar = isCompetitive ? price : intercept - slope * qStar
    const tvcAtQstar = variable * qStar + 0.3 * qStar * qStar
    atcAtQstar = (tfc + tvcAtQstar) / qStar
    profitPerUnit = priceAtQstar - atcAtQstar
    totalProfit = profitPerUnit * qStar
  } else {
    priceAtQstar = isCompetitive ? price : intercept
    atcAtQstar = null
    profitPerUnit = null
    totalProfit = -tfc
  }

  const data = Array.from({ length: 12 }, (_, q) => {
    if (q === 0) return { q, mc: null, atc: null, ar: null, mr: null }
    const tvc = variable * q + 0.3 * q * q
    const tc = tfc + tvc
    const mc = variable + 0.6 * q
    const ar = isCompetitive ? price : Math.max(0, intercept - slope * q)
    const mr = isCompetitive ? price : intercept - 2 * slope * q
    return {
      q,
      mc: +mc.toFixed(2),
      atc: +(tc / q).toFixed(2),
      ar: +ar.toFixed(2),
      mr: +mr.toFixed(2),
    }
  }).filter(d => d.q > 0)

  const qStarInRange = qStar > 0 && qStar <= 11
  const qStarDisplay = Math.min(11, qStar)

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Profit Maximisation — The MR = MC Rule</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Combine cost curves with revenue curves to find the profit-maximising output, Q*.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setMode('competitive')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              isCompetitive ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
            style={isCompetitive ? { background: 'var(--accent)', borderColor: 'var(--accent)' } : {}}
          >
            Perfect competition
          </button>
          <button
            onClick={() => setMode('searcher')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              !isCompetitive ? 'text-white border-transparent' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
            style={!isCompetitive ? { background: 'var(--accent)', borderColor: 'var(--accent)' } : {}}
          >
            Price searcher / monopoly-like
          </button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="q" label={{ value: 'Output (Q)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <YAxis domain={[0, 80]} label={{ value: 'Cost / Revenue ($)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }} tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
            {qStarInRange && (
              <ReferenceLine
                x={+qStarDisplay.toFixed(1)}
                stroke="var(--accent)"
                strokeDasharray="5 5"
                label={{ value: `Q* = ${qStar.toFixed(1)}`, fill: 'var(--accent)', fontSize: 10 }}
              />
            )}
            <Line type="monotone" dataKey="mc" stroke="#ef4444" strokeWidth={2.5} dot={false} name="MC" />
            <Line type="monotone" dataKey="atc" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="ATC" />
            <Line type="monotone" dataKey="ar" stroke="#f59e0b" strokeWidth={2} dot={false} name={isCompetitive ? 'AR = D = P' : 'AR (Demand)'} />
            <Line type="monotone" dataKey="mr" stroke="#a855f7" strokeWidth={2} dot={false} name="MR" />
          </LineChart>
        </ResponsiveContainer>

        {!qStarInRange && qStar > 11 && (
          <p className="text-xs text-[var(--muted-fg)]">
            Q* = {qStar.toFixed(1)} lies beyond the chart&apos;s plotted range (Q=11) — try raising cost sliders or lowering price/intercept to bring it into view.
          </p>
        )}

        <div className="flex gap-4 text-xs flex-wrap">
          {[['MC', '#ef4444', 'Marginal Cost'], ['ATC', '#3b82f6', 'Average Total Cost'], ['AR', '#f59e0b', 'Average Revenue (Price)'], ['MR', '#a855f7', 'Marginal Revenue']].map(([k, c, label]) => (
            <div key={k} className="flex items-center gap-1.5">
              <div className="h-2 w-6 rounded-full" style={{ background: c }} />
              <span className="text-[var(--muted-fg)]">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Total Fixed Cost: ${tfc}</label>
            <input type="range" min={20} max={300} step={10} value={tfc} onChange={(e) => setTfc(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Total fixed cost" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Variable cost factor: {variable}</label>
            <input type="range" min={1} max={10} value={variable} onChange={(e) => setVariable(Number(e.target.value))} className="w-full accent-green-500" aria-label="Variable cost factor" />
          </div>
        </div>

        {isCompetitive ? (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Market price: ${price}</label>
            <input
              type="range" min={2} max={20} step={1} value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="Market price"
            />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Demand intercept: {intercept}</label>
              <input
                type="range" min={8} max={20} step={1} value={intercept}
                onChange={(e) => setIntercept(Number(e.target.value))}
                className="w-full accent-amber-500"
                aria-label="Demand intercept"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--fg)]">Demand slope: {slope.toFixed(1)}</label>
              <input
                type="range" min={0.4} max={1.5} step={0.1} value={slope}
                onChange={(e) => setSlope(Number(e.target.value))}
                className="w-full accent-purple-500"
                aria-label="Demand slope"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--accent)]">{qStar.toFixed(1)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Q* (profit-maximising output)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-amber-500">${priceAtQstar.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Price at Q*</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-blue-500">{atcAtQstar !== null ? `$${atcAtQstar.toFixed(2)}` : '—'}</div>
            <div className="text-xs text-[var(--muted-fg)]">ATC at Q*</div>
          </div>
        </div>

        <div className={cn(
          'rounded-xl border-2 p-4 text-center',
          totalProfit >= 0 ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
        )}>
          <div className={cn('text-2xl font-black', totalProfit >= 0 ? 'text-green-500' : 'text-red-500')}>
            {totalProfit >= 0 ? 'Profit' : 'Loss'}: ${Math.abs(totalProfit).toFixed(2)}
          </div>
          <div className="mt-1 text-sm text-[var(--muted-fg)]">
            {profitPerUnit !== null
              ? `Profit per unit: $${profitPerUnit.toFixed(2)} × Q* = ${qStar.toFixed(1)} units`
              : 'MC exceeds MR (or P) even at zero output — the firm produces nothing and loses only its fixed cost'}
          </div>
        </div>

        <p className="text-xs text-[var(--muted-fg)]">
          A firm maximises profit by producing where MC = MR (or MC = P for a price-taker) — producing less leaves profit on the table; producing more adds more to cost than to revenue.
        </p>
      </CardContent>
    </Card>
  )
}
