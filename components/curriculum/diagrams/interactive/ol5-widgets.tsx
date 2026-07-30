'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ScatterChart, Scatter,
} from 'recharts'
import { cn } from '@/lib/utils'

/* ── Seeded pseudo-random helpers ────────────────────────────────────────── */
// Deterministic given `seed` — never calls Math.random(), so the same slider
// settings always regenerate the same sample (no SSR/hydration drift, no
// jumping on re-render).
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Box-Muller transform built on two seeded uniforms — approximately N(0,1).
function seededNormal(seed: number) {
  const u1 = Math.max(seededRandom(seed), 1e-9)
  const u2 = seededRandom(seed + 0.5)
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
}

/* ── 1. OLS Regression Sandbox ───────────────────────────────────────────── */
// widget key: 'ols-regression-sandbox'
// Serves: Data/Descriptive Statistics (l1), OLS Mechanics (l2), OLS Assumptions & Violations (l3)
const TRUE_INTERCEPT = 5
const X_MAX = 10

export function OLSRegressionSandbox() {
  const [trueSlope, setTrueSlope] = useState(1.5)
  const [noiseLevel, setNoiseLevel] = useState(5)
  const [n, setN] = useState(40)
  const [heteroskedastic, setHeteroskedastic] = useState(false)

  // Base seed is derived purely from the current parameter values, so the
  // sample only changes when the user actually moves a slider.
  const seedBase =
    Math.round(trueSlope * 1000) +
    Math.round(noiseLevel * 100) +
    n * 7 +
    (heteroskedastic ? 991 : 113)

  const sample = Array.from({ length: n }, (_, i) => {
    const x = (i / (n - 1)) * X_MAX
    const pointSeed = seedBase + i * 7919
    const effectiveNoiseSD = heteroskedastic
      ? noiseLevel * (0.3 + x / X_MAX)
      : noiseLevel
    const error = seededNormal(pointSeed) * effectiveNoiseSD
    const y = TRUE_INTERCEPT + trueSlope * x + error
    return { x: +x.toFixed(2), y: +y.toFixed(2) }
  })

  const xBar = sample.reduce((s, p) => s + p.x, 0) / n
  const yBar = sample.reduce((s, p) => s + p.y, 0) / n
  const sXY = sample.reduce((s, p) => s + (p.x - xBar) * (p.y - yBar), 0)
  const sXX = sample.reduce((s, p) => s + (p.x - xBar) ** 2, 0)
  const slopeHat = sXY / sXX
  const interceptHat = yBar - slopeHat * xBar

  const ssr = sample.reduce((s, p) => {
    const yHat = interceptHat + slopeHat * p.x
    return s + (p.y - yHat) ** 2
  }, 0)
  const sst = sample.reduce((s, p) => s + (p.y - yBar) ** 2, 0)
  const rSquared = sst > 0 ? 1 - ssr / sst : 1

  const fittedLine = [
    { x: 0, y: interceptHat },
    { x: X_MAX, y: interceptHat + slopeHat * X_MAX },
  ]
  const trueLine = [
    { x: 0, y: TRUE_INTERCEPT },
    { x: X_MAX, y: TRUE_INTERCEPT + trueSlope * X_MAX },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">OLS Regression Sandbox</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Draw a noisy sample from a known true relationship Y = 5 + (true slope)·X + error, then see how closely the fitted OLS line recovers the true line.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="x" type="number" domain={[0, X_MAX]}
              label={{ value: 'X (explanatory variable)', position: 'insideBottom', offset: -10, fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <YAxis
              dataKey="y" type="number"
              label={{ value: 'Y (outcome variable)', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
              tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }}
              formatter={(v: number) => v.toFixed(2)}
            />
            <Scatter data={sample} dataKey="y" fill="#3b82f6" fillOpacity={0.6} name="Sample data" />
            <Line data={fittedLine} dataKey="y" stroke="var(--accent)" strokeWidth={2.5} dot={false} name="Fitted OLS line" />
            <Line data={trueLine} dataKey="y" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 4" dot={false} name="True line" />
          </ScatterChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--accent)]">{slopeHat.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Fitted slope (β̂₁)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--accent)]">{interceptHat.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Fitted intercept (β̂₀)</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--accent)]">{rSquared.toFixed(3)}</div>
            <div className="text-xs text-[var(--muted-fg)]">R²</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">True slope: {trueSlope.toFixed(1)}</label>
            <input
              type="range" min={0.5} max={3.0} step={0.1} value={trueSlope}
              onChange={(e) => setTrueSlope(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Set the true slope of the underlying relationship"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Noise level: {noiseLevel}</label>
            <input
              type="range" min={0} max={15} step={1} value={noiseLevel}
              onChange={(e) => setNoiseLevel(Number(e.target.value))}
              className="w-full accent-red-500"
              aria-label="Set the noise level (standard deviation of scatter)"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[var(--fg)]">Sample size N: {n}</label>
            <input
              type="range" min={10} max={100} step={5} value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-full accent-green-500"
              aria-label="Set the sample size"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">Error structure</div>
          <div className="flex gap-2 flex-wrap">
            {([[false, 'Homoskedastic'], [true, 'Heteroskedastic']] as const).map(([val, label]) => (
              <button
                key={label}
                onClick={() => setHeteroskedastic(val)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                  heteroskedastic === val ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {heteroskedastic && (
          <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
            Under heteroskedasticity, OLS coefficient estimates remain UNBIASED, but the standard formula for standard errors is no longer valid (typically understated) — this is why economists use &ldquo;robust&rdquo; (heteroskedasticity-consistent) standard errors in practice, which you&rsquo;ll see referred to as &ldquo;White standard errors&rdquo; or <code>vce(robust)</code>.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── 2. Inference and Omitted Variable Bias ──────────────────────────────── */
// widget key: 'inference-and-ovb'
// Serves: Hypothesis Testing (l4), Multiple Regression and OVB (l5)
type InferenceMode = 'hypothesis' | 'ovb'

export function InferenceAndOVB() {
  const [mode, setMode] = useState<InferenceMode>('hypothesis')

  // Hypothesis testing state
  const [betaHat, setBetaHat] = useState(1.2)
  const [se, setSe] = useState(0.5)
  const [dfProxy, setDfProxy] = useState(60)

  const tStat = betaHat / se
  const isSignificant = Math.abs(tStat) > 1.96
  const ciLow = betaHat - 1.96 * se
  const ciHigh = betaHat + 1.96 * se

  // Omitted variable bias state
  const [trueB1, setTrueB1] = useState(1.5)
  const [trueB2, setTrueB2] = useState(1.5)
  const [delta, setDelta] = useState(0.5)

  const bias = trueB2 * delta
  const a1Hat = trueB1 + bias
  const biasDirection = bias > 0.001 ? 'upward' : bias < -0.001 ? 'downward' : 'negligible'

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Inference and Omitted Variable Bias</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Explore how t-tests and confidence intervals establish statistical significance, and how leaving a relevant variable out of a regression biases the coefficient on an included variable.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {([['hypothesis', 'Hypothesis Testing'], ['ovb', 'Omitted Variable Bias']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                mode === key ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {mode === 'hypothesis' ? (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Estimated coefficient (β̂): {betaHat.toFixed(2)}</label>
                <input
                  type="range" min={0.1} max={5.0} step={0.1} value={betaHat}
                  onChange={(e) => setBetaHat(Number(e.target.value))}
                  className="w-full accent-blue-500"
                  aria-label="Set the estimated coefficient"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Standard error (SE): {se.toFixed(2)}</label>
                <input
                  type="range" min={0.05} max={2.0} step={0.05} value={se}
                  onChange={(e) => setSe(Number(e.target.value))}
                  className="w-full accent-red-500"
                  aria-label="Set the standard error of the coefficient"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Sample size (df proxy): {dfProxy}</label>
                <input
                  type="range" min={10} max={200} step={5} value={dfProxy}
                  onChange={(e) => setDfProxy(Number(e.target.value))}
                  className="w-full accent-green-500"
                  aria-label="Set the sample size, a proxy for degrees of freedom"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-[var(--border)] p-3">
                <div className="text-lg font-black text-[var(--accent)]">{tStat.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">t-statistic = β̂ / SE</div>
              </div>
              <div className={cn(
                'rounded-xl border-2 p-3',
                isSignificant ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'
              )}>
                <div className={cn('text-sm font-black', isSignificant ? 'text-green-500' : 'text-red-500')}>
                  {isSignificant ? 'Statistically significant at the 5% level' : 'Not statistically significant'}
                </div>
                <div className="text-xs text-[var(--muted-fg)]">|t| {isSignificant ? '>' : '≤'} 1.96</div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 text-center">
              <div className="text-lg font-black text-[var(--accent)]">[{ciLow.toFixed(2)}, {ciHigh.toFixed(2)}]</div>
              <div className="text-xs text-[var(--muted-fg)]">Approximate 95% confidence interval: β̂ ± 1.96·SE, using the large-sample critical value of 1.96 for a 5% two-tailed test</div>
            </div>

            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              Statistical significance tells you whether an effect is likely non-zero — it does NOT tell you whether the effect is economically LARGE or important. A tiny, precisely-estimated coefficient can be &ldquo;significant&rdquo; while being economically negligible, and a large but noisily-estimated coefficient can be &ldquo;insignificant&rdquo; despite being economically important. Always look at both the point estimate&rsquo;s magnitude AND its precision.
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">True b₁ (effect of X₁): {trueB1.toFixed(2)}</label>
                <input
                  type="range" min={0.5} max={3.0} step={0.1} value={trueB1}
                  onChange={(e) => setTrueB1(Number(e.target.value))}
                  className="w-full accent-blue-500"
                  aria-label="Set the true coefficient on X1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">True b₂ (effect of X₂): {trueB2.toFixed(2)}</label>
                <input
                  type="range" min={0.5} max={3.0} step={0.1} value={trueB2}
                  onChange={(e) => setTrueB2(Number(e.target.value))}
                  className="w-full accent-green-500"
                  aria-label="Set the true coefficient on the omitted variable X2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">δ (X₂ on X₁ correlation): {delta.toFixed(2)}</label>
                <input
                  type="range" min={-1.5} max={1.5} step={0.1} value={delta}
                  onChange={(e) => setDelta(Number(e.target.value))}
                  className="w-full accent-[#e8c547]"
                  aria-label="Set delta, the regression coefficient of X2 on X1"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-[var(--border)] p-3">
                <div className="text-lg font-black text-green-500">{trueB1.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">True b₁ (long/correct model)</div>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-3">
                <div className="text-lg font-black text-red-500">{a1Hat.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Biased a₁ (short model, X₂ omitted)</div>
              </div>
              <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
                <div className="text-lg font-black text-[var(--accent)]">{bias >= 0 ? '+' : ''}{bias.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Bias = b₂·δ ({biasDirection})</div>
              </div>
            </div>

            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              For example, if X1 = years of education, X2 = innate ability (omitted), Y = wages: with b₂ = {trueB2.toFixed(2)} and δ = {delta.toFixed(2)}, omitting ability causes the estimated &ldquo;return to education&rdquo; coefficient to be biased {biasDirection.toUpperCase()} by {Math.abs(bias).toFixed(2)} — {bias > 0.001
                ? 'part of what looks like the effect of education is really the effect of unmeasured ability that happens to be correlated with how much schooling people get.'
                : bias < -0.001
                ? 'the estimated return to education understates the true effect, because ability here works against education in the sample (a negative correlation).'
                : 'with X1 and X2 uncorrelated (δ ≈ 0), omitting X2 causes essentially no bias in the estimate of b1.'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ── 3. Causal Inference Toolkit ─────────────────────────────────────────── */
// widget key: 'causal-inference-toolkit'
// Serves: Instrumental Variables and Causality (l6), Panel Data / DiD (l7)
type CausalMode = 'iv' | 'did'

const IV_TRUE_EFFECT = 2.0
const IV_BIAS_SCALE = 3.0
const IV_BASE_SE = 0.3
const OLS_SE = 0.2

export function CausalInferenceToolkit() {
  const [mode, setMode] = useState<CausalMode>('iv')

  // IV state
  const [instrumentStrength, setInstrumentStrength] = useState(0.5)
  const [endogeneitySeverity, setEndogeneitySeverity] = useState(0.4)

  const olsEstimate = IV_TRUE_EFFECT + endogeneitySeverity * IV_BIAS_SCALE
  const ivEstimate = IV_TRUE_EFFECT
  const ivSE = IV_BASE_SE / instrumentStrength

  // DiD state
  const [treatPre, setTreatPre] = useState(40)
  const [treatPost, setTreatPost] = useState(65)
  const [controlPre, setControlPre] = useState(45)
  const [controlPost, setControlPost] = useState(55)

  const treatChange = treatPost - treatPre
  const controlChange = controlPost - controlPre
  const didEstimate = treatChange - controlChange
  const counterfactualPost = treatPre + controlChange

  const didData = [
    { period: 'Pre', treatment: treatPre, control: controlPre, counterfactual: treatPre },
    { period: 'Post', treatment: treatPost, control: controlPost, counterfactual: counterfactualPost },
  ]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Causal Inference Toolkit</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Compare two strategies economists use to get closer to causal effects when simple OLS is contaminated by endogeneity: instrumental variables, and difference-in-differences.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {([['iv', 'Instrumental Variables'], ['did', 'Panel Data / Diff-in-Diff']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
                mode === key ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {mode === 'iv' ? (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Instrument strength: {instrumentStrength.toFixed(2)}</label>
                <input
                  type="range" min={0.05} max={0.95} step={0.05} value={instrumentStrength}
                  onChange={(e) => setInstrumentStrength(Number(e.target.value))}
                  className="w-full accent-green-500"
                  aria-label="Set the instrument strength (first-stage correlation between Z and X)"
                />
                <p className="text-xs text-[var(--muted-fg)]">Low values represent a WEAK instrument.</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Endogeneity severity: {endogeneitySeverity.toFixed(2)}</label>
                <input
                  type="range" min={0} max={0.8} step={0.05} value={endogeneitySeverity}
                  onChange={(e) => setEndogeneitySeverity(Number(e.target.value))}
                  className="w-full accent-red-500"
                  aria-label="Set the endogeneity severity (correlation between X and the error term)"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
                <div className="text-lg font-black text-red-500">{olsEstimate.toFixed(2)} ± {OLS_SE.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Naive OLS — biased but precise</div>
              </div>
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
                <div className="text-lg font-black text-green-500">{ivEstimate.toFixed(2)} ± {ivSE.toFixed(2)}</div>
                <div className="text-xs text-[var(--muted-fg)]">IV estimate — unbiased in expectation, but imprecise</div>
              </div>
            </div>

            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              A valid instrument must satisfy two conditions: RELEVANCE (correlated with the endogenous regressor — the &ldquo;first stage&rdquo;) and EXCLUSION (uncorrelated with the error term, i.e., it only affects Y through X). Even a valid instrument that is only WEAKLY correlated with X (a &ldquo;weak instrument&rdquo;) can produce IV estimates that are so imprecise they&rsquo;re not actually useful in practice, despite being unbiased in principle.
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={didData} margin={{ top: 10, right: 30, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="period" tick={{ fill: 'var(--muted-fg)', fontSize: 11 }} />
                <YAxis
                  label={{ value: 'Outcome', angle: -90, position: 'insideLeft', fill: 'var(--muted-fg)', fontSize: 11 }}
                  tick={{ fill: 'var(--muted-fg)', fontSize: 11 }}
                />
                <Tooltip contentStyle={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 11 }} />
                <Line type="linear" dataKey="treatment" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 5 }} name="Treatment group (actual)" />
                <Line type="linear" dataKey="control" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 5 }} name="Control group (actual)" />
                <Line type="linear" dataKey="counterfactual" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 4" dot={{ r: 4 }} name="Treatment counterfactual" />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Treatment — pre-period: {treatPre}</label>
                <input type="range" min={10} max={100} step={1} value={treatPre} onChange={(e) => setTreatPre(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Treatment group's pre-period average outcome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Treatment — post-period: {treatPost}</label>
                <input type="range" min={10} max={100} step={1} value={treatPost} onChange={(e) => setTreatPost(Number(e.target.value))} className="w-full accent-blue-500" aria-label="Treatment group's post-period average outcome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Control — pre-period: {controlPre}</label>
                <input type="range" min={10} max={100} step={1} value={controlPre} onChange={(e) => setControlPre(Number(e.target.value))} className="w-full accent-green-500" aria-label="Control group's pre-period average outcome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--fg)]">Control — post-period: {controlPost}</label>
                <input type="range" min={10} max={100} step={1} value={controlPost} onChange={(e) => setControlPost(Number(e.target.value))} className="w-full accent-green-500" aria-label="Control group's post-period average outcome" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
                <div className="text-lg font-black text-blue-500">{treatChange >= 0 ? '+' : ''}{treatChange.toFixed(1)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Treatment raw change</div>
              </div>
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
                <div className="text-lg font-black text-green-500">{controlChange >= 0 ? '+' : ''}{controlChange.toFixed(1)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Control raw change</div>
              </div>
              <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
                <div className="text-lg font-black text-[var(--accent)]">{didEstimate >= 0 ? '+' : ''}{didEstimate.toFixed(1)}</div>
                <div className="text-xs text-[var(--muted-fg)]">Difference-in-differences estimate</div>
              </div>
            </div>

            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              Difference-in-Differences relies on the PARALLEL TRENDS assumption — that absent treatment, the treatment and control groups would have moved together over time. If this assumption is violated (e.g. the treatment group was already on a different trajectory before treatment), the DiD estimate will be biased. Economists often check this by examining PRE-treatment trends for both groups — if they were already diverging before treatment, parallel trends is suspect.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
