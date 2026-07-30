'use client'

import { Fragment, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

/* ============================================================================
   1. GameSolver — Strategic Interaction / Normal-Form Games (IESDS)
      AND Nash Equilibrium
   widget key: 'game-solver'
   ============================================================================ */

const ROW_LABELS = ['Low', 'Medium', 'High']
const COL_LABELS = ['Low', 'Medium', 'High']

// Default 3x3 game. Row player = Player 1, Column player = Player 2.
// Hand-verified: IESDS eliminates High(row) -> High(col) -> Low(row) -> Low(col),
// leaving the unique surviving pair (Medium, Medium) = (6, 6), which is also
// the unique pure-strategy Nash equilibrium (mutual best response).
const DEFAULT_ROW_PAYOFFS = [
  [3, 4, 2],
  [5, 6, 4],
  [1, 2, 0],
]
const DEFAULT_COL_PAYOFFS = [
  [4, 5, 3],
  [3, 6, 2],
  [2, 3, 1],
]

function cloneMatrix(m: number[][]) {
  return m.map((row) => [...row])
}

interface EliminationResult {
  log: string[]
  activeRows: boolean[]
  activeCols: boolean[]
}

// Iterated elimination of strictly dominated strategies. At each pass, a
// strategy is removed only if some other REMAINING strategy for the same
// player strictly beats it against every REMAINING strategy of the opponent.
function runIESDS(rowPayoffs: number[][], colPayoffs: number[][]): EliminationResult {
  const activeRows = [true, true, true]
  const activeCols = [true, true, true]
  const log: string[] = []

  let changed = true
  while (changed) {
    changed = false

    for (let r1 = 0; r1 < 3 && !changed; r1++) {
      if (!activeRows[r1]) continue
      for (let r2 = 0; r2 < 3 && !changed; r2++) {
        if (r2 === r1 || !activeRows[r2]) continue
        const activeColIdx = [0, 1, 2].filter((c) => activeCols[c])
        if (activeColIdx.length === 0) continue
        const dominates = activeColIdx.every((c) => rowPayoffs[r2][c] > rowPayoffs[r1][c])
        if (dominates) {
          log.push(
            `Player 1: "${ROW_LABELS[r2]}" strictly dominates "${ROW_LABELS[r1]}" against every remaining column (${activeColIdx.map((c) => COL_LABELS[c]).join(', ')}) -- eliminate "${ROW_LABELS[r1]}".`
          )
          activeRows[r1] = false
          changed = true
        }
      }
    }
    if (changed) continue

    for (let c1 = 0; c1 < 3 && !changed; c1++) {
      if (!activeCols[c1]) continue
      for (let c2 = 0; c2 < 3 && !changed; c2++) {
        if (c2 === c1 || !activeCols[c2]) continue
        const activeRowIdx = [0, 1, 2].filter((r) => activeRows[r])
        if (activeRowIdx.length === 0) continue
        const dominates = activeRowIdx.every((r) => colPayoffs[r][c2] > colPayoffs[r][c1])
        if (dominates) {
          log.push(
            `Player 2: "${COL_LABELS[c2]}" strictly dominates "${COL_LABELS[c1]}" against every remaining row (${activeRowIdx.map((r) => ROW_LABELS[r]).join(', ')}) -- eliminate "${COL_LABELS[c1]}".`
          )
          activeCols[c1] = false
          changed = true
        }
      }
    }
  }

  return { log, activeRows, activeCols }
}

// A cell (r, c) is a pure-strategy Nash equilibrium if the row player's payoff
// is the max in its column (best response to c) AND the column player's
// payoff is the max in its row (best response to r) -- neither can improve
// by unilaterally deviating.
function findPureNash(rowPayoffs: number[][], colPayoffs: number[][]): [number, number][] {
  const results: [number, number][] = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const rowBest = [0, 1, 2].every((rr) => rowPayoffs[r][c] >= rowPayoffs[rr][c])
      const colBest = [0, 1, 2].every((cc) => colPayoffs[r][c] >= colPayoffs[r][cc])
      if (rowBest && colBest) results.push([r, c])
    }
  }
  return results
}

export function GameSolver() {
  const [rowPayoffs, setRowPayoffs] = useState(cloneMatrix(DEFAULT_ROW_PAYOFFS))
  const [colPayoffs, setColPayoffs] = useState(cloneMatrix(DEFAULT_COL_PAYOFFS))
  const [ieResult, setIeResult] = useState<EliminationResult | null>(null)
  const [neResult, setNeResult] = useState<[number, number][] | null>(null)

  function updateRow(r: number, c: number, value: number) {
    const next = cloneMatrix(rowPayoffs)
    next[r][c] = value
    setRowPayoffs(next)
    setIeResult(null)
    setNeResult(null)
  }

  function updateCol(r: number, c: number, value: number) {
    const next = cloneMatrix(colPayoffs)
    next[r][c] = value
    setColPayoffs(next)
    setIeResult(null)
    setNeResult(null)
  }

  function reset() {
    setRowPayoffs(cloneMatrix(DEFAULT_ROW_PAYOFFS))
    setColPayoffs(cloneMatrix(DEFAULT_COL_PAYOFFS))
    setIeResult(null)
    setNeResult(null)
  }

  const survivorCells: [number, number][] = ieResult
    ? [0, 1, 2].flatMap((r) =>
        ieResult.activeRows[r]
          ? [0, 1, 2].filter((c) => ieResult.activeCols[c]).map((c): [number, number] => [r, c])
          : []
      )
    : []

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Normal-Form Game Solver</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            One tool, two lessons: use &quot;Run IESDS&quot; for Strategic Interaction &amp; Normal-Form Games
            (iterated elimination of strictly dominated strategies), and &quot;Find pure-strategy Nash
            equilibria&quot; for the Nash Equilibrium unit. Edit any payoff below and re-run either analysis on
            your own custom game.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 gap-2 min-w-[560px]">
            <div />
            {COL_LABELS.map((label, c) => (
              <div
                key={label}
                className={cn(
                  'text-center text-xs font-semibold text-green-500 self-center',
                  ieResult && !ieResult.activeCols[c] && 'opacity-40 line-through'
                )}
              >
                P2: {label}
              </div>
            ))}

            {ROW_LABELS.map((rLabel, r) => (
              <Fragment key={rLabel}>
                <div
                  className={cn(
                    'flex items-center text-xs font-semibold text-blue-500',
                    ieResult && !ieResult.activeRows[r] && 'opacity-40 line-through'
                  )}
                >
                  P1: {rLabel}
                </div>
                {COL_LABELS.map((_, c) => {
                  const isSurvivor = survivorCells.some(([sr, sc]) => sr === r && sc === c)
                  const isNash = neResult?.some(([nr, nc]) => nr === r && nc === c) ?? false
                  const eliminated = ieResult ? !ieResult.activeRows[r] || !ieResult.activeCols[c] : false
                  return (
                    <div
                      key={c}
                      className={cn(
                        'rounded-xl border-2 p-2 text-center space-y-1',
                        isSurvivor
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10'
                          : isNash
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-[var(--border)]',
                        eliminated && !isSurvivor && 'opacity-40'
                      )}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <input
                          type="number"
                          value={rowPayoffs[r][c]}
                          onChange={(e) => updateRow(r, c, Number(e.target.value))}
                          aria-label={`Player 1 payoff for row ${rLabel}, column ${COL_LABELS[c]}`}
                          className="w-12 rounded border border-[var(--border)] bg-transparent px-1 py-0.5 text-center text-xs text-blue-500"
                        />
                        <span className="text-[var(--muted-fg)] text-xs">,</span>
                        <input
                          type="number"
                          value={colPayoffs[r][c]}
                          onChange={(e) => updateCol(r, c, Number(e.target.value))}
                          aria-label={`Player 2 payoff for row ${rLabel}, column ${COL_LABELS[c]}`}
                          className="w-12 rounded border border-[var(--border)] bg-transparent px-1 py-0.5 text-center text-xs text-green-500"
                        />
                      </div>
                      {isSurvivor && <div className="text-[9px] font-semibold text-[var(--accent)]">IESDS survivor</div>}
                      {isNash && <div className="text-[9px] font-semibold text-green-500">Nash Equilibrium</div>}
                    </div>
                  )
                })}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setIeResult(runIESDS(rowPayoffs, colPayoffs))}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
          >
            Run IESDS
          </button>
          <button
            onClick={() => setNeResult(findPureNash(rowPayoffs, colPayoffs))}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500/10 transition-colors"
          >
            Find pure-strategy Nash equilibria
          </button>
          <button
            onClick={reset}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold border-2 border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
          >
            Reset to default game
          </button>
        </div>

        {ieResult && (
          <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)] space-y-1">
            <div className="font-semibold text-[var(--fg)]">IESDS steps:</div>
            {ieResult.log.length === 0 ? (
              <p>No strategy is strictly dominated -- nothing can be eliminated.</p>
            ) : (
              <ol className="list-decimal list-inside space-y-1">
                {ieResult.log.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            )}
            <p className="pt-1">
              {survivorCells.length === 1 ? (
                <>Unique surviving strategy pair: ({ROW_LABELS[survivorCells[0][0]]}, {COL_LABELS[survivorCells[0][1]]}).</>
              ) : (
                <>
                  Surviving strategies -- Player 1: {ROW_LABELS.filter((_, r) => ieResult.activeRows[r]).join(', ')};
                  Player 2: {COL_LABELS.filter((_, c) => ieResult.activeCols[c]).join(', ')}.
                </>
              )}
            </p>
          </div>
        )}

        {neResult && (
          <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
            {neResult.length === 0 ? (
              <p>No pure-strategy Nash equilibrium -- this game requires mixed strategies, which is beyond this tool&apos;s scope.</p>
            ) : (
              <p>
                Pure-strategy Nash equilibri{neResult.length > 1 ? 'a' : 'um'}:{' '}
                {neResult.map(([r, c]) => `(${ROW_LABELS[r]}, ${COL_LABELS[c]})`).join('; ')}. At each, neither
                player can improve their payoff by unilaterally switching strategy.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ============================================================================
   2. GameTreeBackwardInduction — Sequential Games & Backward Induction
   widget key: 'game-tree-backward-induction'
   ============================================================================ */

function PayoffPairInput({
  pair,
  onChange,
  labelPrefix,
}: {
  pair: [number, number]
  onChange: (index: 0 | 1, value: number) => void
  labelPrefix: string
}) {
  return (
    <span className="flex items-center gap-1">
      (
      <input
        type="number"
        value={pair[0]}
        onChange={(e) => onChange(0, Number(e.target.value))}
        aria-label={`${labelPrefix} to Player 1`}
        className="w-12 rounded border border-[var(--border)] bg-transparent px-1 py-0.5 text-center"
      />
      ,
      <input
        type="number"
        value={pair[1]}
        onChange={(e) => onChange(1, Number(e.target.value))}
        aria-label={`${labelPrefix} to Player 2`}
        className="w-12 rounded border border-[var(--border)] bg-transparent px-1 py-0.5 text-center"
      />
      )
    </span>
  )
}

export function GameTreeBackwardInduction() {
  const [outPayoffs, setOutPayoffs] = useState<[number, number]>([2, 2])
  const [accPayoffs, setAccPayoffs] = useState<[number, number]>([3, 1])
  const [fightPayoffs, setFightPayoffs] = useState<[number, number]>([-1, 0])
  const [solved, setSolved] = useState(false)

  function updatePair(
    setter: (v: [number, number]) => void,
    pair: [number, number],
    index: 0 | 1,
    value: number
  ) {
    const next: [number, number] = [...pair]
    next[index] = value
    setter(next)
    setSolved(false)
  }

  function reset() {
    setOutPayoffs([2, 2])
    setAccPayoffs([3, 1])
    setFightPayoffs([-1, 0])
    setSolved(false)
  }

  // Step 1: last mover (Player 2) picks whichever branch pays them more, IF the "In" node is reached.
  const p2Choice: 'Accommodate' | 'Fight' = accPayoffs[1] >= fightPayoffs[1] ? 'Accommodate' : 'Fight'
  const p2AnticipatedPayoffs = p2Choice === 'Accommodate' ? accPayoffs : fightPayoffs

  // Step 2: fold back -- Player 1 compares Out directly against In (anticipating Player 2's response).
  const p1Choice: 'Out' | 'In' = p2AnticipatedPayoffs[0] >= outPayoffs[0] ? 'In' : 'Out'
  const finalPayoffs = p1Choice === 'Out' ? outPayoffs : p2AnticipatedPayoffs

  // A threat to Fight is credible only if Fight is genuinely Player 2's best response once "In" is reached.
  const threatCredible = fightPayoffs[1] > accPayoffs[1]

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Sequential Game &amp; Backward Induction</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            An entry-deterrence game. Player 1 (Entrant) moves first; Player 2 (Incumbent) responds only if
            Player 1 chooses &quot;In&quot;. Solve by working backward from the last move to find the
            subgame-perfect outcome.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] p-3 text-sm">
          <div className="font-semibold text-[var(--fg)] mb-2">Player 1 chooses:</div>
          <div className="ml-4 space-y-2">
            <div
              className={cn(
                'rounded-lg border-2 p-3',
                solved && p1Choice === 'Out' ? 'border-[var(--accent)] bg-[var(--accent)]/10' : 'border-[var(--border)]'
              )}
            >
              <div className="font-semibold text-[var(--fg)]">Out (game ends)</div>
              <div className="mt-1 flex items-center gap-2 text-xs text-[var(--muted-fg)]">
                <span>Payoffs (P1, P2):</span>
                <PayoffPairInput
                  pair={outPayoffs}
                  onChange={(i, v) => updatePair(setOutPayoffs, outPayoffs, i, v)}
                  labelPrefix="Out payoff"
                />
              </div>
            </div>

            <div
              className={cn(
                'rounded-lg border-2 p-3',
                solved && p1Choice === 'In' ? 'border-[var(--accent)] bg-[var(--accent)]/10' : 'border-[var(--border)]'
              )}
            >
              <div className="font-semibold text-[var(--fg)]">In (Player 2 then moves)</div>
              <div className="ml-4 mt-2 space-y-2">
                <div
                  className={cn(
                    'rounded-lg border-2 p-2',
                    solved && p2Choice === 'Accommodate' ? 'border-green-500 bg-green-500/10' : 'border-[var(--border)]'
                  )}
                >
                  <div className="font-semibold text-[var(--fg)]">Accommodate</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[var(--muted-fg)]">
                    <span>Payoffs:</span>
                    <PayoffPairInput
                      pair={accPayoffs}
                      onChange={(i, v) => updatePair(setAccPayoffs, accPayoffs, i, v)}
                      labelPrefix="Accommodate payoff"
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    'rounded-lg border-2 p-2',
                    solved && p2Choice === 'Fight' ? 'border-green-500 bg-green-500/10' : 'border-[var(--border)]'
                  )}
                >
                  <div className="font-semibold text-[var(--fg)]">Fight</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-[var(--muted-fg)]">
                    <span>Payoffs:</span>
                    <PayoffPairInput
                      pair={fightPayoffs}
                      onChange={(i, v) => updatePair(setFightPayoffs, fightPayoffs, i, v)}
                      labelPrefix="Fight payoff"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSolved(true)}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
          >
            Solve by backward induction
          </button>
          <button
            onClick={reset}
            className="rounded-lg px-3 py-1.5 text-sm font-semibold border-2 border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)] transition-colors"
          >
            Reset to default game
          </button>
        </div>

        {solved && (
          <div className="space-y-3">
            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)] space-y-1">
              <p>
                <span className="font-semibold text-[var(--fg)]">Step 1 -- solve the last move first:</span> if
                &quot;In&quot; is reached, Player 2 compares Accommodate ({accPayoffs[1]}) vs Fight ({fightPayoffs[1]})
                and picks <span className="font-semibold text-green-500">{p2Choice}</span>.
              </p>
              <p>
                <span className="font-semibold text-[var(--fg)]">Step 2 -- fold back to the first move:</span>{' '}
                Player 1 compares Out ({outPayoffs[0]}) vs In, anticipating Player 2&apos;s {p2Choice} ({p2AnticipatedPayoffs[0]}),
                and picks <span className="font-semibold text-[var(--accent)]">{p1Choice}</span>.
              </p>
            </div>

            <div className="rounded-xl border-2 border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4 text-center">
              <div className="text-lg font-black text-[var(--accent)]">
                Subgame-perfect outcome: {p1Choice}
                {p1Choice === 'In' ? ` → ${p2Choice}` : ''} → ({finalPayoffs[0]}, {finalPayoffs[1]})
              </div>
            </div>

            <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
              {threatCredible ? (
                <>
                  Here Player 2&apos;s threat to Fight if entry occurs{' '}
                  <span className="font-semibold text-[var(--fg)]">would be credible</span> -- Fight is genuinely
                  Player 2&apos;s best response once &quot;In&quot; is reached.
                </>
              ) : (
                <>
                  Note: a threat by Player 2 to &quot;Fight&quot; if entry occurs is{' '}
                  <span className="font-semibold text-[var(--fg)]">not credible</span> (not subgame-perfect) --
                  if actually called upon, Player 2 would rather Accommodate ({accPayoffs[1]} &gt; {fightPayoffs[1]}).
                  Only credible threats affect the backward-induction prediction.
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/* ============================================================================
   3. AuctionSimulator — Auctions & Mechanism Design
   widget key: 'auction-simulator'
   ============================================================================ */

type AuctionFormat = 'first' | 'second'

const N_BIDDERS = 4

interface AuctionOutcome {
  bids: number[]
  winnerIndex: number
  price: number
}

function computeAuction(valuations: number[], format: AuctionFormat): AuctionOutcome {
  const bids = valuations.map((v) => (format === 'first' ? v * ((N_BIDDERS - 1) / N_BIDDERS) : v))
  const sortedBids = [...bids].sort((a, b) => b - a)
  const winnerIndex = bids.indexOf(sortedBids[0])
  const price = format === 'first' ? sortedBids[0] : sortedBids[1]
  return { bids, winnerIndex, price }
}

export function AuctionSimulator() {
  const [valuations, setValuations] = useState<number[]>([80, 55, 65, 40])
  const [format, setFormat] = useState<AuctionFormat>('first')

  function updateValuation(i: number, value: number) {
    const next = [...valuations]
    next[i] = value
    setValuations(next)
  }

  const firstPriceResult = computeAuction(valuations, 'first')
  const secondPriceResult = computeAuction(valuations, 'second')
  const active = format === 'first' ? firstPriceResult : secondPriceResult

  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div>
          <h3 className="font-bold text-[var(--fg)] mb-1">Auction Simulator -- Sealed-Bid Formats</h3>
          <p className="text-sm text-[var(--muted-fg)]">
            Four bidders each hold a private valuation for the item. Compare how first-price and second-price
            (Vickrey) sealed-bid auctions turn those valuations into bids, a winner, and seller revenue.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valuations.map((v, i) => (
            <div key={i} className="space-y-1">
              <label className="text-sm font-semibold text-[var(--fg)]">Bidder {i + 1} valuation: ${v}</label>
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={v}
                onChange={(e) => updateValuation(i, Number(e.target.value))}
                className="w-full accent-[#e8c547]"
                aria-label={`Bidder ${i + 1} private valuation`}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFormat('first')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              format === 'first' ? 'text-white border-transparent bg-blue-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            First-price sealed-bid
          </button>
          <button
            onClick={() => setFormat('second')}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-semibold transition-all border-2',
              format === 'second' ? 'text-white border-transparent bg-green-500' : 'border-[var(--border)] text-[var(--muted-fg)] hover:text-[var(--fg)]'
            )}
          >
            Second-price sealed-bid (Vickrey)
          </button>
        </div>

        <p className="text-xs text-[var(--muted-fg)]">
          {format === 'first'
            ? 'Assuming values are drawn independently from a uniform distribution, a standard result is that bidders shade their bid down by a factor of (n-1)/n -- with 4 bidders, each bids 3/4 of their true valuation.'
            : "In a second-price auction, each bidder's weakly dominant strategy is to bid their true valuation exactly -- an exact, assumption-free result, unlike first-price shading."}
        </p>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 gap-2 min-w-[420px] text-center text-sm">
            {valuations.map((v, i) => {
              const isWinner = active.winnerIndex === i
              return (
                <div
                  key={i}
                  className={cn(
                    'rounded-xl border-2 p-3',
                    isWinner ? 'border-[var(--accent)] bg-[var(--accent)]/10' : 'border-[var(--border)]'
                  )}
                >
                  <div className="text-xs font-semibold text-[var(--muted-fg)]">Bidder {i + 1}</div>
                  <div className="text-[var(--fg)]">Value ${v.toFixed(0)}</div>
                  <div className="text-[var(--fg)] font-black">Bid ${active.bids[i].toFixed(2)}</div>
                  {isWinner && <div className="text-[10px] font-semibold text-[var(--accent)] mt-1">Winner</div>}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3">
            <div className="text-lg font-black text-[var(--accent)]">Bidder {active.winnerIndex + 1}</div>
            <div className="text-xs text-[var(--muted-fg)]">Winner</div>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-3">
            <div className="text-lg font-black text-[var(--fg)]">${active.price.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">
              {format === 'first' ? 'Price paid (own bid)' : 'Price paid (2nd-highest bid)'} = Seller revenue
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className={cn('rounded-xl border-2 p-3', format === 'first' ? 'border-blue-500/50 bg-blue-500/10' : 'border-[var(--border)]')}>
            <div className="text-sm font-black text-blue-500">${firstPriceResult.price.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">First-price revenue</div>
          </div>
          <div className={cn('rounded-xl border-2 p-3', format === 'second' ? 'border-green-500/50 bg-green-500/10' : 'border-[var(--border)]')}>
            <div className="text-sm font-black text-green-500">${secondPriceResult.price.toFixed(2)}</div>
            <div className="text-xs text-[var(--muted-fg)]">Second-price revenue</div>
          </div>
        </div>

        <div className="rounded-lg bg-[var(--muted)] p-3 text-sm text-[var(--muted-fg)]">
          Revenue Equivalence Theorem: under fairly general conditions (private values, risk-neutral bidders,
          symmetric independent valuations), first-price and second-price sealed-bid auctions yield the same
          expected seller revenue -- even though bidders bid differently in each format, the shading in
          first-price price exactly compensates for the difference from second-price&apos;s true-value bidding,
          on average. With this valuation profile the two computed revenues are ${firstPriceResult.price.toFixed(2)}{' '}
          and ${secondPriceResult.price.toFixed(2)} respectively.
        </div>
      </CardContent>
    </Card>
  )
}
