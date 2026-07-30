'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Prospect Theory & Loss Aversion ─────────────────────────────────────── */
// widget key: 'prospect-theory-simulator'
function prospectValue(x: number, alpha: number, lambda: number): number {
  if (x === 0) return 0
  if (x > 0) return Math.pow(x, alpha)
  return -lambda * Math.pow(-x, alpha)
}

export function ProspectTheorySimulator() {
  const [alpha, setAlpha] = useState(0.88)
  const [lambda, setLambda] = useState(2.25)
  const [gain, setGain] = useState(100)
  const [loss, setLoss] = useState(100)

  const curveData = Array.from({ length: 51 }, (_, i) => {
    const x = -100 + i * 4
    return { x, v: +prospectValue(x, alpha, lambda).toFixed(3) }
  })

  const ev = 0.5 * gain - 0.5 * loss
  const ptValue = 0.5 * prospectValue(gain, alpha, lambda) + 0.5 * prospectValue(-loss, alpha, lambda)
  const evAccept = ev > 0
  const ptAccept = ptValue > 0
  const conflict = evAccept !== ptAccept

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Prospect Theory &amp; Loss Aversion</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Kahneman &amp; Tversky&rsquo;s value function replaces expected-utility theory&rsquo;s straight line with an S-shaped curve: concave for gains, convex for losses, and steeper for losses than gains.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={curveData} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="x"
              domain={[-100, 100]}
              label={{ value: 'Outcome (x)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Subjective value v(x)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number) => [v.toFixed(2), 'v(x)']}
              labelFormatter={(v) => `x = ${v}`}
            />
            <ReferenceLine x={0} stroke="var(--border)" strokeWidth={1.5} />
            <ReferenceLine y={0} stroke="var(--border)" strokeWidth={1.5} />
            <Line type="monotone" dataKey="v" stroke="var(--accent)" strokeWidth={2.5} dot={false} name="Value function" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Curvature (alpha): {alpha.toFixed(2)}
            </label>
            <input
              type="range" min={0.5} max={1.0} step={0.01} value={alpha}
              onChange={(e) => setAlpha(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust the curvature parameter alpha of the value function"
            />
            <p className="text-xs text-[var(--muted-fg)]">Lower alpha = more diminishing sensitivity to larger gains/losses. Estimated value ≈ 0.88.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">
              Loss aversion (lambda): {lambda.toFixed(2)}x
            </label>
            <input
              type="range" min={1.0} max={4.0} step={0.05} value={lambda}
              onChange={(e) => setLambda(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Adjust the loss-aversion coefficient lambda"
            />
            <p className="text-xs text-[var(--muted-fg)]">Losses hurt lambda times as much as equivalent gains feel good. Estimated value ≈ 2.25.</p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] p-4 space-y-4">
          <div className="text-sm font-semibold text-[var(--fg)]">50/50 Gamble</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-green-500">Gain if win: ${gain}</label>
              <input
                type="range" min={50} max={200} step={10} value={gain}
                onChange={(e) => setGain(Number(e.target.value))}
                className="w-full accent-green-500"
                aria-label="Adjust the gain amount if the gamble is won"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-red-500">Loss if lose: ${loss}</label>
              <input
                type="range" min={50} max={200} step={10} value={loss}
                onChange={(e) => setLoss(Number(e.target.value))}
                className="w-full accent-red-500"
                aria-label="Adjust the loss amount if the gamble is lost"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className={cn('rounded-xl border-2 p-3', evAccept ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10')}>
              <div className={cn('text-lg font-black', evAccept ? 'text-green-500' : 'text-red-500')}>
                {ev >= 0 ? '+' : ''}${ev.toFixed(2)}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">Expected dollar value — {evAccept ? 'favourable' : 'unfavourable'}</div>
            </div>
            <div className={cn('rounded-xl border-2 p-3', ptAccept ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10')}>
              <div className={cn('text-lg font-black', ptAccept ? 'text-green-500' : 'text-red-500')}>
                {ptValue >= 0 ? '+' : ''}{ptValue.toFixed(2)}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">Prospect-theory value — {ptAccept ? 'accept' : 'reject'}</div>
            </div>
          </div>

          {conflict && (
            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              <span className="font-semibold text-[var(--fg)]">These disagree: </span>
              this gamble has {evAccept ? 'positive' : 'negative'} expected dollar value but {ptAccept ? 'positive' : 'negative'} prospect-theory value. A loss-averse decision-maker would {ptAccept ? 'still accept' : 'reject'} this gamble even though pure expected-value maximisation says {evAccept ? 'accept' : 'reject'} it — this is closely related to Rabin&rsquo;s calibration puzzle, which shows that rejecting small favourable gambles is inconsistent with expected-utility theory over any reasonable range of wealth, but falls naturally out of loss aversion.
            </div>
          )}
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Loss aversion (lambda &gt; 1) means losses loom larger than equivalent gains — this explains many real behaviours that pure expected-value maximisation cannot, such as rejecting mildly-favourable gambles, the endowment effect, and status-quo bias.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Nudge Theory & Choice Architecture — the Default Effect ────────────── */
// widget key: 'nudge-default-effect'
type ScenarioKey = 'retirement' | 'organ'
type DefaultSetting = 'opt-in' | 'opt-out'

interface ScenarioInfo {
  label: string
  unitLabel: string
  optInRate: number
  optOutRate: number
  source: string
}

const NUDGE_SCENARIOS: Record<ScenarioKey, ScenarioInfo> = {
  retirement: {
    label: 'Retirement Savings (401(k) Auto-Enrollment)',
    unitLabel: 'employees',
    optInRate: 0.40,
    optOutRate: 0.90,
    source: 'Illustrative figures in the style of published 401(k) auto-enrollment research (e.g. Madrian & Shea, 2001) — actual rates vary by employer and plan design, not universal constants.',
  },
  organ: {
    label: 'Organ Donor Registration',
    unitLabel: 'citizens',
    optInRate: 0.15,
    optOutRate: 0.90,
    source: 'Illustrative figures in the style of cross-country organ-donor-registration studies (e.g. Johnson & Goldstein, 2003) — actual rates vary by country, not universal constants.',
  },
}

export function NudgeDefaultEffect() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>('retirement')
  const [currentDefault, setCurrentDefault] = useState<DefaultSetting>('opt-in')
  const [population, setPopulation] = useState(1000)

  const scenario = NUDGE_SCENARIOS[scenarioKey]
  const enrolledOptIn = Math.round(population * scenario.optInRate)
  const enrolledOptOut = Math.round(population * scenario.optOutRate)
  const diff = enrolledOptOut - enrolledOptIn

  const currentEnrolled = currentDefault === 'opt-in' ? enrolledOptIn : enrolledOptOut
  const alternativeEnrolled = currentDefault === 'opt-in' ? enrolledOptOut : enrolledOptIn
  const switchDelta = alternativeEnrolled - currentEnrolled

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Nudge Theory — the Default Effect</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            The same underlying choices and incentives, but a different default option, produce very different participation rates. Pick a scenario and see how big the effect is.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Scenario</div>
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(NUDGE_SCENARIOS) as ScenarioKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setScenarioKey(key)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                  scenarioKey === key ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                )}
              >
                {NUDGE_SCENARIOS[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Current default in place</div>
          <div className="flex gap-2 flex-wrap">
            {([['opt-in', 'Opt-in (must actively enroll)'], ['opt-out', 'Opt-out (auto-enrolled)']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentDefault(key)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                  currentDefault === key ? 'text-white border-transparent bg-amber-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--fg)]">
            Number of {scenario.unitLabel}: {population.toLocaleString()}
          </label>
          <input
            type="range" min={100} max={10000} step={100} value={population}
            onChange={(e) => setPopulation(Number(e.target.value))}
            className="w-full accent-[#e8c547]"
            aria-label={`Adjust number of ${scenario.unitLabel}`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className={cn(
            'rounded-xl border-2 p-3',
            currentDefault === 'opt-in' ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10' : 'border-[var(--border)]'
          )}>
            <div className="text-lg font-black text-[var(--fg)]">{(scenario.optInRate * 100).toFixed(0)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Opt-in participation</div>
            <div className="text-xs text-[var(--muted-fg)] mt-1">{enrolledOptIn.toLocaleString()} of {population.toLocaleString()}</div>
            {currentDefault === 'opt-in' && <div className="text-[10px] font-semibold text-[var(--accent)] mt-1">Current default</div>}
          </div>
          <div className={cn(
            'rounded-xl border-2 p-3',
            currentDefault === 'opt-out' ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10' : 'border-[var(--border)]'
          )}>
            <div className="text-lg font-black text-[var(--fg)]">{(scenario.optOutRate * 100).toFixed(0)}%</div>
            <div className="text-xs text-[var(--muted-fg)]">Opt-out participation</div>
            <div className="text-xs text-[var(--muted-fg)] mt-1">{enrolledOptOut.toLocaleString()} of {population.toLocaleString()}</div>
            {currentDefault === 'opt-out' && <div className="text-[10px] font-semibold text-[var(--accent)] mt-1">Current default</div>}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-2xl font-black text-[var(--accent)]">+{diff.toLocaleString()}</div>
          <div className="text-xs text-[var(--muted-fg)]">
            Additional {scenario.unitLabel} participating under opt-out vs. opt-in — purely from the default, with no change in options or incentives.
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-2">
            Switching from the current default to the alternative would change participation by {switchDelta >= 0 ? '+' : ''}{switchDelta.toLocaleString()} {scenario.unitLabel}.
          </div>
        </div>

        <p className="text-xs text-[var(--muted-fg)]">{scenario.source}</p>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          The default effect shows that how a choice is presented — not just what choices are available — dramatically shapes outcomes, even though the underlying incentives are identical. This is the core insight of &ldquo;libertarian paternalism&rdquo;: defaults are a powerful policy lever precisely because most people simply stick with whatever option requires no action (status-quo bias / inertia), not because they&rsquo;ve carefully weighed the alternatives.
        </div>
      </CardContent>
    </Card>
  )
}

/* ── Poverty Traps & Development Theory ──────────────────────────────────── */
// widget key: 'poverty-trap-dynamics'
interface SteadyState {
  k: number
  stable: boolean
}

function findSteadyStates(s: number, A: number): SteadyState[] {
  const step = 0.02
  const kMax = 20
  const f = (k: number) => (A * (k * k)) / (1 + k * k)
  const g = (k: number) => s * f(k) - k

  const roots: SteadyState[] = []
  // k = 0 is always an exact root since f(0) = 0. Classify stability by the
  // sign of g just to the right of it: negative means k is pulled back to 0.
  const gNear0 = g(step)
  roots.push({ k: 0, stable: gNear0 < 0 })

  let prevK = step
  let prevG = gNear0
  for (let k = step * 2; k <= kMax + 1e-9; k += step) {
    const gk = g(k)
    if (prevG !== 0 && gk !== 0 && Math.sign(prevG) !== Math.sign(gk)) {
      const rootK = prevK + (0 - prevG) * (k - prevK) / (gk - prevG)
      const stable = prevG > 0 && gk < 0
      roots.push({ k: rootK, stable })
    }
    prevK = k
    prevG = gk
  }
  return roots
}

function simulateCapitalPath(s: number, A: number, k0: number, periods: number): number[] {
  const f = (k: number) => (A * (k * k)) / (1 + k * k)
  const path: number[] = [k0]
  let k = k0
  for (let t = 0; t < periods; t++) {
    k = s * f(k)
    path.push(k)
  }
  return path
}

export function PovertyTrapDynamics() {
  const [savingsRate, setSavingsRate] = useState(30) // % (10-50)
  const [productivity, setProductivity] = useState(10) // A (5-20)
  const [k0, setK0] = useState(0.3) // initial capital per worker (0-20)

  const s = savingsRate / 100
  const A = productivity

  const steadyStates = findSteadyStates(s, A)
  const path = simulateCapitalPath(s, A, k0, 30)
  const finalK = path[path.length - 1]

  const stableStates = steadyStates.filter((r) => r.stable)
  const convergesTo = stableStates.reduce(
    (closest, r) => (Math.abs(r.k - finalK) < Math.abs(closest.k - finalK) ? r : closest),
    stableStates[0] ?? { k: finalK, stable: true }
  )
  const isLowTrap = stableStates.length > 0 && convergesTo.k === Math.min(...stableStates.map((r) => r.k))
  const hasHighSteadyState = stableStates.length > 1

  const chartData = path.map((k, period) => ({ period, k: +k.toFixed(3) }))

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Poverty Traps &amp; Development Dynamics</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            With an S-shaped production function, capital accumulation k(t+1) = s·f(k(t)) can have multiple steady states — a low-capital trap and a high-capital equilibrium, separated by an unstable threshold.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={chartData} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="period"
              label={{ value: 'Period', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              domain={[0, 20]}
              label={{ value: 'Capital per worker (k)', angle: -90, position: 'insideLeft', offset: 10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number) => [v.toFixed(2), 'k']}
              labelFormatter={(v) => `Period ${v}`}
            />
            {steadyStates.map((r) => (
              <ReferenceLine
                key={r.k}
                y={+r.k.toFixed(2)}
                stroke={r.stable ? '#22c55e' : '#ef4444'}
                strokeDasharray={r.stable ? undefined : '5 5'}
                strokeWidth={1.5}
                label={{ value: r.stable ? 'stable' : 'unstable', fill: r.stable ? '#22c55e' : '#ef4444', fontSize: 10, position: 'right' }}
              />
            ))}
            <Line type="monotone" dataKey="k" stroke="var(--accent)" strokeWidth={2.5} dot={false} name="Capital per worker" />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          {steadyStates.map((r, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl border-2 p-3',
                r.stable ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
              )}
            >
              <div className={cn('text-lg font-black', r.stable ? 'text-green-500' : 'text-red-500')}>
                {r.k.toFixed(2)}
              </div>
              <div className="text-xs text-[var(--muted-fg)]">
                {r.stable ? (r.k === Math.min(...stableStates.map((x) => x.k)) ? 'Low stable trap' : 'High stable steady state') : 'Unstable threshold'}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
          <div className="text-lg font-black text-[var(--accent)]">
            Converges to k* = {convergesTo.k.toFixed(2)} ({isLowTrap ? 'the low trap' : 'the high steady state'})
          </div>
          <div className="text-xs text-[var(--muted-fg)] mt-1">
            {hasHighSteadyState
              ? 'This economy has both a low trap and a reachable high steady state.'
              : 'At these settings, no high steady state is reachable — every starting point falls back to the low trap.'}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Savings rate (s): {savingsRate}%</label>
            <input
              type="range" min={10} max={50} step={1} value={savingsRate}
              onChange={(e) => setSavingsRate(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Adjust the savings rate"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Productivity (A): {productivity}</label>
            <input
              type="range" min={5} max={20} step={1} value={productivity}
              onChange={(e) => setProductivity(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Adjust the productivity constant A of the production function"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Initial capital (k0): {k0.toFixed(1)}</label>
            <input
              type="range" min={0} max={20} step={0.1} value={k0}
              onChange={(e) => setK0(Number(e.target.value))}
              className="w-full accent-[#e8c547]"
              aria-label="Adjust the initial capital per worker"
            />
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          This illustrates the &ldquo;Big Push&rdquo; argument for development: a country starting below the unstable threshold is trapped in low-capital stagnation under its own dynamics — small, incremental aid may not be enough to escape, since the economy just falls back to the low trap. But a large enough one-time intervention that pushes capital above the threshold can permanently shift the economy onto the path toward the high steady state — this is the theoretical case for large, coordinated development pushes rather than small marginal aid.
        </div>
      </CardContent>
    </Card>
  )
}
