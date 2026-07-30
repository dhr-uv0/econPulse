import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ol3-game-theory',
  title: 'Olympiad — Game Theory',
  description: 'Nash equilibrium, dominant strategies, repeated games, auctions, and mechanism design at AEO/IEO level.',
  tier: 'OLYMPIAD' as const,
  track: 'OLYMPIAD' as const,
  unit: 3,
  estimatedHours: 5,
  color: '#ef4444',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  // ── Lesson 1 ────────────────────────────────────────────────────────────────
  {
    id: 'ol3-l1',
    moduleId: 'ol3-game-theory',
    title: 'Strategic Interaction & Normal Form Games',
    description: 'Represent strategic situations as payoff matrices; identify dominant and dominated strategies; apply iterated elimination of dominated strategies (IESDS) to solve games.',
    order: 1,
    estimatedMinutes: 55,
    tags: ['olympiad', 'game-theory', 'payoff-matrix', 'dominant-strategy', 'IESDS'],
    content: {
      isStub: false,
      conceptualExplanation: `Game theory formalises strategic interaction — situations in which the payoff to each agent depends not only on their own choice but also on the choices of others. A game in normal (strategic) form is defined by three elements: a set of players N = {1, 2, …, n}; for each player i, a strategy set Sᵢ containing all available actions; and a payoff function uᵢ: S₁ × S₂ × … × Sₙ → ℝ mapping every strategy profile (s₁, s₂, …, sₙ) to a real-valued payoff for player i. A finite two-player game can always be displayed as a payoff matrix whose rows index player 1's strategies and columns index player 2's strategies; each cell contains the ordered pair (u₁, u₂) for that strategy profile. The compactness of this representation belies its power: virtually every competitive economic interaction — pricing, advertising, trade policy, bargaining — can be cast in this framework.

A strategy sᵢ is strictly dominant for player i if it yields a strictly higher payoff than every other strategy in Sᵢ, regardless of what opponents choose: uᵢ(sᵢ, s₋ᵢ) > uᵢ(sᵢ', s₋ᵢ) for all sᵢ' ≠ sᵢ and all s₋ᵢ ∈ S₋ᵢ. Rational players always play strictly dominant strategies because no belief about opponents' behaviour can make any other choice superior. Conversely, a strategy sᵢ is strictly dominated if there exists another strategy — or even a probability mixture (mixed strategy) over other strategies — that strictly outperforms it against every opponent profile. Rational players never play strictly dominated strategies. These two observations motivate iterated elimination of dominated strategies (IESDS): remove all strictly dominated strategies from every player's strategy set, update the game, repeat. If IESDS reduces the game to a single strategy profile, the game is said to be dominance-solvable and that profile is the unique rational prediction.

Weak dominance extends the concept by requiring only weak inequality: uᵢ(sᵢ, s₋ᵢ) ≥ uᵢ(sᵢ', s₋ᵢ) for all s₋ᵢ, with strict inequality for at least one s₋ᵢ. Iterated elimination of weakly dominated strategies (IEWDS) is more powerful — it often reduces games further — but is order-dependent: eliminating strategies in different sequences can yield different surviving sets, unlike IESDS where the order is irrelevant (Theorem: the set of strategies surviving IESDS is unique). Olympiad problems frequently require constructing payoff matrices from verbal descriptions, systematically applying dominance reasoning step by step, and recognising when IESDS fails to yield a unique prediction (necessitating Nash equilibrium analysis).`,
      prerequisiteRecap: `The Mundell-Fleming model established the impossible trinity: a small open economy with perfect capital mobility and a fixed exchange rate loses monetary policy independence, since any deviation of the domestic interest rate from the world rate i* triggers reserve flows that endogenise the money supply. Game theory now examines the strategic interdependence among agents — the microeconomic foundation that explains why uncoordinated individual decisions can produce collectively suboptimal outcomes such as currency crises and competitive devaluations.`,
      recallQuestions: [
        {
          id: 'ol3-l1-recall-1',
          type: 'mcq' as const,
          question: 'In the Mundell-Fleming model with a fixed exchange rate and perfect capital mobility, a unilateral monetary expansion by the central bank will:',
          options: [
            'Leave output unchanged; the LM expansion lowers i below i*, triggering capital outflows that drain reserves and force the central bank to contract the money supply back to its original level to defend the peg',
            'Raise output through the standard LM transmission, because the exchange rate is fixed and cannot appreci­ate to offset the stimulus',
            'Cause a permanent real depreciation as the central bank abandons the peg to accommodate the expansion',
            'Raise output and raise the interest rate above i*, attracting capital inflows that further expand the money supply',
          ],
          correctAnswer: 0,
          explanation: 'Under a fixed exchange rate with perfect capital mobility, the domestic interest rate is pinned at i*. A monetary expansion shifts LM right, initially lowering i below i*. Capital outflows immediately drain foreign reserves; the central bank must sell reserves (buy domestic currency) to defend the peg, contracting M until i returns to i* and LM returns to its original position. Output is unchanged — monetary policy is completely ineffective. This is the impossible trinity in action: with free capital mobility and a fixed rate, monetary autonomy is sacrificed.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `OPEC's output decisions exemplify dominance and strategic substitutes. Each member country choosing whether to honour production quotas or cheat (produce above quota) faces a payoff matrix in which cheating is individually tempting regardless of what other members do — the world price falls but the cheater captures extra revenue. This structure mirrors the Prisoner's Dilemma: cheating is a weakly dominant strategy for each member, yet universal cheating collapses the cartel price and leaves all members worse off than universal compliance. The 1986 Saudi decision to flood the market — abandoning the role of swing producer — can be read as a dominant-strategy move that dissolved the tacit coordination the cartel had maintained for over a decade. Understanding dominance reasoning is therefore essential for predicting when cartels form, persist, or unravel.`,
      interactiveElement: `Construct the following 3×2 payoff matrix and apply IESDS to find the solution.

Player 1 has strategies {Top (T), Middle (M), Bottom (B)}; Player 2 has strategies {Left (L), Right (R)}.

Payoffs (Player 1, Player 2):
         L        R
T     (4, 3)   (2, 1)
M     (3, 0)   (3, 2)
B     (1, 4)   (2, 3)

Step-by-step tasks:
(1) Check whether any of Player 1's strategies are strictly dominated. For each pair of Player 1's strategies, compare payoffs column by column.
(2) After eliminating any dominated strategy, update the matrix and re-examine dominance for Player 2.
(3) Repeat until no further elimination is possible or a unique outcome remains.
(4) State the strategy profile that survives IESDS.
(5) Explain why the order of elimination does not affect the final surviving set when using STRICT dominance.`,
      vocabulary: [
        {
          term: 'Strictly Dominant Strategy',
          definition: 'A strategy that yields a strictly higher payoff than every alternative strategy for player i, regardless of the strategies chosen by all other players.',
          example: 'In the classic Prisoner\'s Dilemma, Defect strictly dominates Cooperate for each prisoner: defecting yields a higher payoff whether the other prisoner cooperates (go free vs. 1 year) or defects (3 years vs. 5 years).',
        },
        {
          term: 'Strictly Dominated Strategy',
          definition: 'A strategy sᵢ is strictly dominated if there exists another strategy (or mixture) that yields a strictly higher payoff for player i against every possible opponent strategy profile.',
          example: 'In a pricing game where a firm\'s strategy "Price = $50" always loses market share to "Price = $45" regardless of the rival\'s price, $50 is strictly dominated and a rational firm eliminates it from consideration.',
        },
        {
          term: 'Iterated Elimination of Dominated Strategies (IESDS)',
          definition: 'A solution procedure that repeatedly removes strictly dominated strategies from all players\' strategy sets, using the reduced game to identify further dominated strategies, until no dominated strategy remains.',
          example: 'In a 3×3 game, eliminating player 2\'s dominated strategy first reduces it to 3×2; in the reduced game player 1\'s previously non-dominated strategy may become dominated and can then be removed, yielding a unique solution.',
        },
      ],
      deeperDive: `The formal justification for IESDS rests on common knowledge of rationality (CKR). Level-0 rationality: each player eliminates their own strictly dominated strategies. Level-1 rationality: each player knows opponents are rational and eliminates strategies that are dominated given opponents' surviving strategies. Level-k rationality extends this to k steps. IESDS corresponds to the limiting case of infinite levels of iterated rationality — it assumes every player knows every other player is rational, knows that every other player knows this, and so on ad infinitum. Mathematically, the set of strategies surviving IESDS equals the largest set closed under rational behaviour (the rationalizable strategies when players hold correlated beliefs) and coincides with the set of strategies that are never a best response to any belief about opponents in the context of pure strategies with strict dominance.

An important theoretical extension involves dominance by mixed strategies. A pure strategy sᵢ may not be dominated by any other pure strategy, yet it may be strictly dominated by a mixture σᵢ ∈ Δ(Sᵢ). For example, in a 2×3 game where player 1 chooses rows and player 2 columns {L, C, R}, the strategy C for player 2 might be dominated by the mixture (0.5L + 0.5R) even if L and R individually do not dominate C. Olympiad candidates must check for domination by mixtures by verifying that the expected payoff of the mixture exceeds that of the dominated strategy against every opponent strategy. This is equivalent to checking whether the dominated strategy's payoff vector lies in the convex hull of the dominating strategies' payoff vectors — a linear programming problem that, for small games, can be solved geometrically or algebraically.`,
      commonMisconceptions: [
        'Confusing "dominant strategy" with "best response": a dominant strategy beats all alternatives regardless of opponents\' choices, while a best response is optimal only given a specific belief about opponents. Every dominant strategy is a best response, but not vice versa.',
        'Assuming IESDS always yields a unique solution: many games (e.g., coordination games) have no dominated strategies, so IESDS leaves the entire matrix intact and Nash equilibrium analysis is required for further prediction.',
        'Believing IEWDS (weak dominance elimination) produces the same unique result as IESDS: unlike strict dominance elimination, the order in which weakly dominated strategies are removed can change the surviving set, making IEWDS potentially misleading as a solution concept.',
      ],
      examinerTip: `When an olympiad problem asks you to "solve the game using dominance reasoning," always work systematically: write out the full payoff matrix first, then check dominance row-by-row and column-by-column, explicitly stating which strategy dominates which and by how much. Showing the updated (reduced) matrix after each elimination step earns method marks even if you make an arithmetic error later. If strict dominance fails to reduce the matrix, state this explicitly and pivot to Nash equilibrium analysis — never leave a game unsolved without explaining why dominance is insufficient.`,
      didYouKnow: `Thomas Schelling, who shared the 2005 Nobel Memorial Prize in Economic Sciences with Robert Aumann, showed that game theory's predictive power extends even to games without dominant strategies — focal points (Schelling points) allow rational players to coordinate on salient outcomes without communication. His 1960 book "The Strategy of Conflict" reframed nuclear deterrence, arms control, and international negotiation as strategic games, pioneering the use of dominance and commitment reasoning in political science and international relations.`,
      thinkAboutIt: {
        question: `Two students both apply "elimination of dominated strategies" to the same 3×3 game. Student A eliminates only strictly dominated strategies (IESDS) and arrives at a unique surviving cell. Student B additionally eliminates a weakly dominated strategy at each stage (IEWDS) and arrives at a DIFFERENT unique cell — one that is not even a Nash equilibrium of the original game in Student A's reduction. Neither student made an arithmetic error. How can two "correct" elimination procedures disagree, and what does this reveal about weak dominance as a solution concept?`,
        answer: `This is possible because IESDS and IEWDS rest on fundamentally different logical foundations. Strict dominance elimination is justified by common knowledge of rationality alone: a rational player never plays a strictly dominated strategy under ANY belief about opponents, so removing it is safe regardless of the order of removal — this is why the surviving set of IESDS is provably unique. Weak dominance elimination is only safe under the much stronger assumption that a player is indifferent between a weakly dominated strategy and its dominator with strictly positive probability zero — that is, it silently assumes the eliminated strategy is never a UNIQUE best response to any opponent belief, which is not guaranteed. Because weakly dominated strategies can tie the dominating strategy against some opponent profiles, which strategy gets removed first can change what appears dominated in the reduced game, so IEWDS is order-dependent — different elimination sequences can yield genuinely different surviving profiles. Worse, IEWDS can eliminate strategy profiles that ARE Nash equilibria of the original game, because weak dominance only guarantees the eliminated strategy is never strictly worse, not that it could never be part of a legitimate best-response cycle. The resolution is that IEWDS should never be presented as "the" solution without stating the elimination order used, and any claim resting on IEWDS should be cross-checked directly against the Nash equilibria of the un-reduced game.`,
      },
    },
    flashcards: [
      {
        id: 'ol3-l1-fc1',
        front: 'Define a strictly dominant strategy and explain why a rational player always plays it.',
        back: 'A strategy sᵢ is strictly dominant if uᵢ(sᵢ, s₋ᵢ) > uᵢ(sᵢ\', s₋ᵢ) for all sᵢ\' ≠ sᵢ and all opponent profiles s₋ᵢ. A rational player always plays it because, by definition, no belief about opponents can make any other strategy preferable — playing the dominant strategy is the unique best response to every possible opponent behaviour.',
        tags: ['olympiad', 'game-theory', 'dominant-strategy'],
      },
      {
        id: 'ol3-l1-fc2',
        front: 'State the key theorem about the order-independence of IESDS.',
        back: 'The set of strategy profiles surviving iterated elimination of STRICTLY dominated strategies is unique and independent of the order in which strategies are eliminated. This fails for weak dominance: different elimination orders under IEWDS can produce different surviving sets, making the procedure order-dependent and potentially misleading.',
        tags: ['olympiad', 'game-theory', 'IESDS'],
      },
      {
        id: 'ol3-l1-fc3',
        front: 'How can a pure strategy be strictly dominated even if no single other pure strategy dominates it?',
        back: 'A mixed strategy (probability mixture over pure strategies) can strictly dominate a pure strategy even when no individual pure strategy does. This occurs when the dominated strategy\'s payoff vector lies strictly inside the convex hull of other strategies\' payoff vectors — the mixture achieves higher expected payoff against every opponent strategy than the dominated pure strategy does.',
        tags: ['olympiad', 'game-theory', 'dominated-strategy'],
      },
    ],
    quiz: [
      {
        id: 'ol3-l1-q1',
        type: 'mcq',
        question: 'In a two-player game, Player 1\'s payoffs from strategies A and B are: against Opponent\'s X: A gives 6, B gives 4; against Opponent\'s Y: A gives 3, B gives 5. Which of the following is correct?',
        options: [
          'Neither A nor B is strictly dominant; the best response depends on what Player 1 believes about the opponent\'s strategy',
          'Strategy A strictly dominates B because A yields 6 > 4 against X',
          'Strategy B strictly dominates A because B yields 5 > 3 against Y',
          'IESDS eliminates both A and B, leaving no solution',
        ],
        correctAnswer: 0,
        explanation: 'A dominant strategy must beat every alternative against ALL opponent strategies. A is better against X (6 > 4) but worse against Y (3 < 5). B is better against Y (5 > 3) but worse against X (4 < 6). Neither strategy dominates the other — the best response depends on beliefs about whether the opponent plays X or Y. This game requires Nash equilibrium analysis.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l1-q2',
        type: 'mcq',
        question: 'Consider a 3×3 game where IESDS eliminates one strategy for each player in round 1, then one more strategy for each player in round 2. The final outcome is a unique cell. Which statement best justifies why this outcome is the rational prediction?',
        options: [
          'It is the unique strategy profile consistent with common knowledge of rationality — each player\'s choice is rational given they know opponents are rational, know opponents know this, and so on iteratively',
          'It is Pareto optimal — no other outcome makes both players better off simultaneously',
          'It is the only Nash equilibrium of the game — no player can improve by unilateral deviation',
          'It is the outcome that maximises total social surplus across both players',
        ],
        correctAnswer: 0,
        explanation: 'IESDS is justified by common knowledge of rationality (CKR). The round-1 elimination uses level-1 rationality (player knows opponent is rational). The round-2 elimination uses level-2 CKR (player knows opponent knows player is rational). The unique surviving profile is rational under all levels of iterated reasoning. Note: the IESDS outcome is always a Nash equilibrium, but a Nash equilibrium need not survive IESDS — these are distinct solution concepts.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l1-q3',
        type: 'mcq',
        question: 'Player 2 has three strategies {L, C, R} with payoffs (to Player 2) against Player 1\'s two strategies: vs. Top — L:2, C:1, R:3; vs. Bottom — L:4, C:3, R:2. A mixture of (½L + ½R) yields expected payoffs vs. Top: ½(2)+½(3)=2.5, vs. Bottom: ½(4)+½(2)=3. Which strategy is dominated by this mixture?',
        options: [
          'C is strictly dominated by the mixture (½L + ½R), since 2.5 > 1 and 3 > 3 is not satisfied — actually C gives 1 vs. Top and 3 vs. Bottom, while the mixture gives 2.5 and 3 respectively, so the mixture dominates C vs. Top but ties vs. Bottom; hence C is weakly but not strictly dominated by this mixture',
          'L is strictly dominated by the mixture because the mixture always yields higher payoffs than L',
          'R is strictly dominated by the mixture because 2.5 < 3 and 3 > 2',
          'C is strictly dominated by L alone because L yields 2 > 1 and 4 > 3 against all Player 1 strategies',
        ],
        correctAnswer: 3,
        explanation: 'Check whether L dominates C for Player 2: vs. Top, L gives 2 and C gives 1 (L > C); vs. Bottom, L gives 4 and C gives 3 (L > C). Since L strictly beats C against every Player 1 strategy, C is strictly dominated by L alone — no mixture is needed. The mixture analysis in option A is instructive but incorrect in conclusion: the mixture (½L+½R) gives 2.5 vs. Top and 3 vs. Bottom; C gives 1 and 3 — the mixture strictly dominates C vs. Top but ties vs. Bottom, so the domination is only weak. L strictly dominates C.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    lessonAssignment: {
      prompt: `Consider the following 3×3 normal-form game between Row and Column (payoffs listed as (Row, Column)):\n\n           L        C        R\nTop     (5, 3)   (2, 5)   (4, 2)\nMiddle  (3, 1)   (6, 4)   (3, 5)\nBottom  (1, 6)   (0, 3)   (2, 2)\n\n(a) Determine whether any of Row's three strategies is strictly dominated by another (pure) strategy. Show the required comparison against every column explicitly, and state which strategy (if any) is eliminated. [3 marks]\n(b) Using the matrix reduced after part (a), determine whether any of Column's three strategies is now strictly dominated. Show the comparison against every surviving row explicitly, and state which strategy (if any) is eliminated. [3 marks]\n(c) Continue IESDS on the further-reduced matrix. State the final matrix that survives elimination, and prove explicitly — by checking every remaining pair of strategies for both players — that no further strict dominance exists. [3 marks]\n(d) The general theorem states that the set of strategies surviving IESDS is independent of elimination order. Verify this for the present game by checking that at each of the two elimination stages you performed in (a) and (b), no alternative strategy could instead have been eliminated first — i.e. the order was in fact forced, not merely coincidentally unique. [3 marks]\n(e) Apply the best-response underlining method to the 2×2 matrix that survives after part (c). Show that it has NO pure-strategy Nash equilibrium, and briefly explain (in one or two sentences, without solving it) what kind of equilibrium concept from the next lesson would be needed to fully solve this residual game. [2 marks]`,
      rubric: `Award marks as follows:\n- (a) 3 marks: correctly shows Top strictly dominates Bottom for Row (5>1 at L, 2>0 at C, 4>2 at R) (2 marks for the three explicit comparisons, 1 mark for correctly concluding Bottom is eliminated); no marks if Top vs Middle is wrongly claimed to be dominant (it is not: Middle beats Top at C)\n- (b) 3 marks: correctly shows, using only the surviving rows Top and Middle, that C strictly dominates L for Column (5>3 vs Top, 4>1 vs Middle) (2 marks for the comparisons, 1 mark for correctly concluding L is eliminated)\n- (c) 3 marks: correctly states the final 2×2 matrix {Top,Middle}×{C,R} (1 mark); correctly shows Row's best response cycles (Middle beats Top given C, but Top beats Middle given R) and Column's best response cycles (C beats R given Top, but R beats C given Middle), so neither player has a dominant strategy in the residual game (2 marks)\n- (d) 3 marks: correctly notes that at stage 1 only Bottom was ever dominated (Top vs Middle is not comparable, so no alternative first elimination existed) and that at stage 2 only L was dominated (C vs R is not comparable, so again no alternative existed) — full marks require checking BOTH non-dominance claims explicitly, not just asserting them\n- (e) 2 marks: correct best-response underlining showing all four cells of the 2×2 fail to have both payoffs underlined (1 mark), and correct identification that a mixed-strategy Nash equilibrium is required since no pure NE exists (1 mark)`,
      exampleTopics: [
        'Row-by-row and column-by-column strict dominance comparisons on a payoff matrix',
        'Iterated elimination of dominated strategies (IESDS) applied step by step to a reduced matrix',
        'Recognising when IESDS is exhausted before reaching a unique cell, and proving no further strict dominance exists',
        'The order-independence theorem for strict (but not weak) dominance elimination, verified by checking whether alternative elimination orders were actually available',
        'Best-response underlining as a bridge to mixed-strategy Nash equilibrium when no pure NE exists',
      ],
    },
  },

  // ── Lesson 2 ────────────────────────────────────────────────────────────────
  {
    id: 'ol3-l2',
    moduleId: 'ol3-game-theory',
    title: 'Nash Equilibrium',
    description: 'Define Nash equilibrium formally; derive pure and mixed strategy NE; analyse best response functions; address uniqueness, multiplicity, and equilibrium selection.',
    order: 2,
    estimatedMinutes: 60,
    tags: ['olympiad', 'game-theory', 'Nash-equilibrium', 'mixed-strategy', 'best-response'],
    content: {
      isStub: false,
      conceptualExplanation: `A Nash equilibrium (NE) is a strategy profile (s₁*, s₂*, …, sₙ*) such that no player can increase their payoff by unilaterally deviating to any other strategy, given the strategies of all other players: uᵢ(sᵢ*, s₋ᵢ*) ≥ uᵢ(sᵢ, s₋ᵢ*) for all sᵢ ∈ Sᵢ and all i ∈ N. The equilibrium concept, introduced by John Nash in 1950, is the central solution concept of non-cooperative game theory because it represents a self-enforcing agreement: if all players expect others to play their equilibrium strategies, they have no incentive to deviate. Unlike dominant-strategy equilibrium (which requires dominance against all opponent strategies), NE only requires that each player's strategy be a best response to the equilibrium strategies of others — a weaker and more broadly applicable concept.

Pure strategy NE can be identified directly from a payoff matrix using the best-response method: for each of player 2's strategies (each column), underline player 1's highest payoff in that column; for each of player 1's strategies (each row), underline player 2's highest payoff in that row; any cell where both payoffs are underlined is a pure strategy NE. Mixed strategy NE arise when no pure strategy NE exists (or alongside pure strategy NE in some games). In a mixed strategy NE, each player randomises across multiple strategies; the mixing probabilities are chosen precisely so that the opponent is indifferent among the strategies in their own support — otherwise the opponent would prefer to play a pure strategy, contradicting the equilibrium requirement. Nash's existence theorem (1950) guarantees that every finite game has at least one NE in (possibly mixed) strategies, using Kakutani's fixed-point theorem applied to the best-response correspondence.

Finding a mixed strategy NE requires setting up and solving indifference conditions. Suppose player 1 mixes over {T, B} with probabilities (p, 1−p) and player 2 mixes over {L, R} with probabilities (q, 1−q). In equilibrium, player 2 must be indifferent between L and R: u₂(T,L)·p + u₂(B,L)·(1−p) = u₂(T,R)·p + u₂(B,R)·(1−p). Solving for p gives the equilibrium mixing probability for player 1 — crucially, p is determined by player 2's payoffs, not player 1's. Symmetrically, q is determined by player 1's payoffs. This "opponent's indifference" principle is a key insight: each player's mixing probability is chosen to make the opponent indifferent, not to equalise one's own payoffs.`,
      prerequisiteRecap: `Normal form game theory established that a strictly dominant strategy yields a strictly higher payoff than every alternative regardless of opponents' choices, and that iterated elimination of strictly dominated strategies (IESDS) produces a unique surviving set that is order-independent, justified by common knowledge of rationality. Nash equilibrium generalises this by requiring only mutual best responses — a weaker condition that admits a unique prediction in games where IESDS leaves multiple strategies surviving.`,
      recallQuestions: [
        {
          id: 'ol3-l2-recall-1',
          type: 'mcq' as const,
          question: 'IESDS applied to a 3×3 normal form game eliminates one strategy per player in each of two rounds, leaving a unique strategy profile (s₁*, s₂*). Which of the following statements about this profile is correct?',
          options: [
            'The profile (s₁*, s₂*) is justified by common knowledge of rationality and is always a Nash equilibrium, but a Nash equilibrium need not survive IESDS — the two solution concepts are nested, not equivalent',
            'The profile is a Nash equilibrium if and only if it is Pareto efficient, since dominance reasoning and Pareto optimality coincide under IESDS',
            'The profile is guaranteed to be unique only if weakly dominated strategies were eliminated; strict dominance elimination may yield multiple surviving profiles',
            'IESDS and Nash equilibrium always identify identical sets of strategy profiles in any finite game',
          ],
          correctAnswer: 0,
          explanation: 'Every strategy profile that survives IESDS is a Nash equilibrium (since no surviving strategy can be profitably deviated from given others play surviving strategies). However, a Nash equilibrium need not survive IESDS — many Nash equilibria involve strategies that are dominated at some iteration. IESDS provides a refinement of Nash equilibrium, not an equivalence. The uniqueness of the IESDS survivor set follows from the order-independence theorem for strict (not weak) dominance.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `Tennis and penalty kicks in football (soccer) are classic illustrations of mixed strategy NE. A tennis server can aim for the opponent's forehand or backhand; the receiver can anticipate left or right. If one strategy became predictable, the opponent would exploit it. Data from Wimbledon matches (Walker and Wooders, 2001) and professional penalty kicks (Chiappori, Levitt and Groseclose, 2002) show that elite players mix their strategies in frequencies strikingly close to the theoretically predicted Nash equilibrium probabilities — and are statistically indistinguishable from the hypothesis that players are rendering their opponents indifferent. This empirical validation of mixed strategy NE in high-stakes real-world competition is one of the most striking pieces of evidence supporting game-theoretic predictions.`,
      interactiveElement: `Matching Pennies is a zero-sum game with no pure strategy Nash equilibrium. The payoff matrix is:

         Heads (H)    Tails (T)
Heads   (+1, −1)     (−1, +1)
Tails   (−1, +1)     (+1, −1)

Player 1 wins $1 if pennies match; Player 2 wins $1 if they differ.

Tasks:
(1) Apply the best-response underlining method. Show that no cell has both payoffs underlined (confirming no pure NE).
(2) Let Player 1 play H with probability p and T with probability (1−p). Set up the indifference condition for Player 2 and solve for p*.
(3) Let Player 2 play H with probability q and T with probability (1−q). Set up the indifference condition for Player 1 and solve for q*.
(4) State the mixed strategy NE (p*, q*) and verify that neither player benefits from deviating.
(5) Compute each player's expected payoff in the mixed strategy NE. Comment on the payoff compared to if one player deviated to a pure strategy.`,
      vocabulary: [
        {
          term: 'Nash Equilibrium',
          definition: 'A strategy profile in which every player\'s strategy is a best response to the strategies of all other players; no player can gain by unilaterally deviating.',
          example: 'In a Bertrand duopoly with identical goods and constant marginal cost c, both firms pricing at p = c is a Nash equilibrium: if one firm raises price above c, the rival captures the entire market, so no deviation is profitable.',
        },
        {
          term: 'Mixed Strategy',
          definition: 'A probability distribution over a player\'s pure strategy set, allowing randomisation; a player playing a mixed strategy is not committed to any single action.',
          example: 'In Matching Pennies, the unique Nash equilibrium requires each player to choose Heads and Tails each with probability ½ — no pure strategy equilibrium exists because any predictable choice can be exploited.',
        },
        {
          term: 'Best Response Function',
          definition: 'For player i, the set of strategies (or strategy) that maximises uᵢ given a fixed strategy profile of all other players; a Nash equilibrium is a fixed point of the joint best-response correspondence.',
          example: 'In Cournot duopoly, firm 1\'s best response to firm 2\'s output q₂ is q₁* = (a − c − q₂)/2; graphing both firms\' best response functions and finding their intersection gives the Nash equilibrium output pair.',
        },
      ],
      deeperDive: `Nash's proof of existence uses Kakutani's fixed-point theorem. Define the best-response correspondence BRᵢ: Δ(S₋ᵢ) ⇉ Δ(Sᵢ) mapping opponent mixed strategies to the set of player i's best responses. The joint best-response correspondence BR = ×ᵢ BRᵢ maps the product of mixed strategy simplices into itself. Since each Δ(Sᵢ) is a compact convex set, the product space is compact and convex. Each BRᵢ is upper hemicontinuous with non-empty convex values (because the payoff functions are linear — hence continuous — in mixed strategies, and the maximum of a linear function on a convex set is attained at a face, which is convex). Kakutani's theorem then guarantees a fixed point σ* = BR(σ*), which is precisely a Nash equilibrium. This proof applies to all finite games and, with appropriate extensions (to compact metric strategy spaces and continuous payoffs), to many infinite games.

The multiplicity of Nash equilibria creates an equilibrium selection problem. A game may have multiple NE of vastly different characters — some Pareto superior, some risk-dominant, some focal. Refinements of NE aim to select among them: (1) Subgame perfect equilibrium (SPE) eliminates NE sustained by non-credible threats in sequential games; (2) trembling-hand perfect equilibrium (Selten, 1975) requires equilibria to be robust to small probability mistakes ("trembles"); (3) proper equilibrium restricts trembles to be ordered by their cost; (4) risk dominance selects the equilibrium that is optimal if the player believes opponents randomise uniformly over all equilibria. For olympiad purposes, knowing that Nash proved existence via a fixed-point argument, understanding when uniqueness fails, and being able to apply the indifference principle to find mixed NE are essential competencies.`,
      commonMisconceptions: [
        'Equating Nash equilibrium with Pareto optimality: a NE need not be Pareto efficient (the Prisoner\'s Dilemma NE is Pareto inferior), and a Pareto optimal outcome need not be a NE (if it requires players to forgo a profitable deviation).',
        'Thinking mixed strategy NE requires players to be indifferent between their own strategies: technically true at equilibrium (otherwise the player would switch to the best pure strategy), but the mixing probabilities are set by the OPPONENT\'s payoffs to make the OPPONENT indifferent — players are indifferent as a consequence of equilibrium, not as a goal.',
        'Assuming every game has a unique Nash equilibrium: Nash proved existence of at least one NE (possibly in mixed strategies), but many games have multiple NE (e.g., coordination games like the Stag Hunt or Battle of the Sexes), and the selection among them requires additional refinements or focal-point reasoning.',
      ],
      examinerTip: `For olympiad problems asking you to find ALL Nash equilibria, use a two-step approach: (1) systematically apply the best-response underlining method to identify all pure strategy NE; (2) if the game has no pure NE, or if the problem explicitly asks for mixed NE, set up the indifference conditions for each player. Always verify your NE candidate by checking that no player can profitably deviate. State Nash's existence theorem when asked why at least one NE is guaranteed to exist.`,
      didYouKnow: `John Forbes Nash Jr. developed the concept of Nash equilibrium in his 1950 doctoral dissertation at Princeton, written when he was just 21 years old. The entire proof is contained in a 28-page thesis. Nash was awarded the Nobel Memorial Prize in Economic Sciences in 1994 — shared with Reinhard Selten and John Harsanyi — forty-four years after his landmark contribution. His life story was dramatised in the 2001 film "A Beautiful Mind," which, despite some dramatic liberties, brought equilibrium theory into popular consciousness.`,
      thinkAboutIt: {
        question: `A game has three Nash equilibria — two pure and one mixed — and all three are common knowledge among perfectly rational, fully informed players. Since Nash proved that a NE is by definition self-enforcing and no player can gain by deviating, does the mere existence of a Nash equilibrium tell us what will actually happen when the game is played? Or is there a conceptual gap between "being an equilibrium" and "being a prediction"?`,
        answer: `There is a genuine gap, and it is one of the deepest limitations of Nash equilibrium as a solution concept. Self-enforcement only tells you that IF everyone expects a particular profile to be played, THEN no one wants to deviate from it — it says nothing about how players arrive at consistent expectations in the first place when multiple such self-consistent profiles exist. With three candidate equilibria, a player who believes the opponent will play equilibrium 1 should play their part of equilibrium 1, but a player who believes the opponent will play equilibrium 2 should play their part of equilibrium 2 — rationality alone, even common knowledge of rationality, cannot pin down which belief is correct without additional coordinating information. This is why applied game theory supplements Nash equilibrium with equilibrium selection devices: focal points (Schelling points) that exploit non-strategic, contextual salience; risk dominance, which selects the equilibrium optimal against a uniform prior over opponent play; evolutionary and learning dynamics, which ask which equilibrium a population of adaptive players converges to over repeated play; and refinements such as trembling-hand perfection, which discard equilibria that are not robust to small mistakes. The precise lesson is that Nash's existence theorem guarantees a consistent point exists, not that rational players will necessarily find their way to the SAME one without some additional coordinating mechanism.`,
      },
    },
    flashcards: [
      {
        id: 'ol3-l2-fc1',
        front: 'State the formal definition of a Nash equilibrium and explain the self-enforcing property.',
        back: 'A strategy profile (s₁*, …, sₙ*) is a Nash equilibrium if uᵢ(sᵢ*, s₋ᵢ*) ≥ uᵢ(sᵢ, s₋ᵢ*) for all sᵢ ∈ Sᵢ and all i. It is self-enforcing: if all players expect opponents to play their NE strategies, no player has an incentive to deviate — the prediction is internally consistent without requiring external enforcement or communication.',
        tags: ['olympiad', 'game-theory', 'Nash-equilibrium'],
      },
      {
        id: 'ol3-l2-fc2',
        front: 'Explain the "opponent\'s indifference" principle in mixed strategy NE.',
        back: 'In a mixed strategy NE, player i\'s mixing probabilities are determined by the condition that makes player j indifferent among the strategies j is mixing over — not by i\'s own payoff indifference. Player i\'s mixing is calibrated to prevent j from exploiting a predictable pattern. As a result, player i\'s equilibrium mixing probabilities depend on PLAYER J\'s payoff matrix, not player i\'s own payoffs.',
        tags: ['olympiad', 'game-theory', 'mixed-strategy'],
      },
      {
        id: 'ol3-l2-fc3',
        front: 'State Nash\'s existence theorem and its key mathematical tool.',
        back: 'Nash (1950): every finite normal-form game has at least one Nash equilibrium in (possibly mixed) strategies. Proof: the best-response correspondence from the product of mixed-strategy simplices to itself satisfies the conditions of Kakutani\'s fixed-point theorem (compact convex domain, upper hemicontinuous correspondence with non-empty convex values). Any fixed point of this correspondence is a Nash equilibrium.',
        tags: ['olympiad', 'game-theory', 'Nash-equilibrium'],
      },
    ],
    quiz: [
      {
        id: 'ol3-l2-q1',
        type: 'mcq',
        question: 'In the game below, what are all pure strategy Nash equilibria?\n\n        L         R\nTop   (3, 3)   (0, 4)\nBottom (4, 0)   (1, 1)',
        options: [
          'Only (Bottom, R) = (1,1) is a pure strategy NE, as both players best-respond: Bottom is player 1\'s BR to R, and R is player 2\'s BR to Bottom',
          'Only (Top, L) = (3,3) is a pure strategy NE because it is Pareto superior',
          'Both (Top, L) and (Bottom, R) are pure strategy NE',
          'There is no pure strategy NE; only a mixed strategy NE exists',
        ],
        correctAnswer: 2,
        explanation: 'Apply the best-response underlining method. For Player 1: given L, Bottom (4) > Top (3), underline Bottom; given R, Top (0) < Bottom (1), underline Bottom... wait, let\'s re-examine. Given L: player 1 prefers Bottom (4 > 3); given R: player 1 prefers Bottom (1 > 0). For Player 2: given Top, player 2 prefers R (4 > 3); given Bottom, player 2 prefers L (0 > ... wait. Given Bottom: player 2 gets 0 from L and 1 from R, prefers R. Check: (Bottom,R) — player 1: Bottom gives 1 vs Top gives 0 (BR); player 2: R gives 1 vs L gives 0 (BR). NE. Check (Top,L): player 1: Top gives 3, Bottom gives 4 — Bottom is BR, NOT Top. So (Top,L) is NOT a NE. The only pure NE is (Bottom,R).',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l2-q2',
        type: 'mcq',
        question: 'In Matching Pennies, player 1 mixes with probability p on Heads and player 2 mixes with probability q on Heads. To make player 1 indifferent between Heads and Tails, what value of q is required, and whose payoffs determine this value?',
        options: [
          'q = ½, determined by Player 1\'s payoffs: player 1\'s expected payoff from Heads equals q(+1) + (1−q)(−1), from Tails equals q(−1) + (1−q)(+1); setting equal gives q = ½',
          'q = ½, determined by Player 2\'s payoffs alone, since in a zero-sum game the mixer sets probabilities to minimise the opponent\'s maximum gain',
          'q = p, because in a symmetric game equilibrium mixing probabilities must be equal',
          'q is determined by Player 1\'s payoffs but equals 2/3 because of the asymmetric payoff structure',
        ],
        correctAnswer: 0,
        explanation: 'To find q that makes Player 1 indifferent, set Player 1\'s expected payoff from Heads equal to expected payoff from Tails. EU(Heads) = q(+1) + (1−q)(−1) = 2q − 1. EU(Tails) = q(−1) + (1−q)(+1) = 1 − 2q. Setting equal: 2q − 1 = 1 − 2q → 4q = 2 → q = ½. The value of q is determined by Player 1\'s payoffs in the sense that we use Player 1\'s payoff matrix to write the indifference condition — yet the object we solve for is q (Player 2\'s mixing probability). This illustrates the "opponent\'s indifference" principle.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l2-q3',
        type: 'mcq',
        question: 'A game has three Nash equilibria: two pure strategy NE and one mixed strategy NE. Which of the following statements about this situation is correct?',
        options: [
          'This is consistent with Nash\'s theorem; finite games can have any odd or even number of NE (generically an odd number), and the mixed NE is a convex combination of the two pure NE in this case',
          'This violates Nash\'s theorem, which guarantees a unique NE',
          'The mixed strategy NE must be the Pareto superior outcome because players prefer certainty',
          'The two pure strategy NE must be Pareto ranked, so the Pareto superior one can be eliminated',
        ],
        correctAnswer: 0,
        explanation: 'Nash\'s theorem guarantees the EXISTENCE of at least one NE, not uniqueness. Multiple NE are common (coordination games routinely have two pure NE plus a mixed NE). A generic result (Wilson, 1971) states that almost all finite games have an odd number of NE — which is consistent with three NE here. In games with two pure NE (like Battle of the Sexes), there is always a third mixed strategy NE; the mixed NE\'s payoffs are typically Pareto inferior to both pure NE. The equilibrium selection problem asks which NE players coordinate on.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    lessonAssignment: {
      prompt: `Consider the Battle of the Sexes game. Row (Player 1) prefers Opera, Column (Player 2) prefers Football, but both prefer coordinating over not coordinating. Payoffs (Row, Column):\n\n              Opera (Col)   Football (Col)\nOpera (Row)     (3, 2)        (0, 0)\nFootball (Row)  (0, 0)        (2, 3)\n\n(a) Apply the best-response underlining method to find ALL pure-strategy Nash equilibria of this game. Show your underlining explicitly for all four cells. [3 marks]\n(b) Let Column play Opera with probability q and Football with probability (1−q). Set up Row's indifference condition between Opera and Football, and solve for the equilibrium value q*. State clearly whose payoffs you used to derive q*. [3 marks]\n(c) Let Row play Opera with probability p and Football with probability (1−p). Set up Column's indifference condition and solve for the equilibrium value p*. [3 marks]\n(d) Compute each player's expected payoff in the mixed strategy Nash equilibrium (p*, q*). Compare these payoffs to each player's payoff in both pure-strategy NE, and state the Pareto ranking of all three equilibria. [3 marks]\n(e) Nash's existence theorem guarantees that at least one NE exists in every finite game. Explain, with specific reference to this game's THREE equilibria, why the theorem does not by itself tell the players which equilibrium to coordinate on, and briefly name one mechanism (from the lesson) that could plausibly resolve the coordination problem here. [2 marks]`,
      rubric: `Award marks as follows:\n- (a) 3 marks: correctly identifies (Opera, Opera) and (Football, Football) as the two pure-strategy NE via correct best-response underlining on all four cells (1 mark per correctly justified NE, 1 mark for correctly showing the other two cells are NOT NE)\n- (b) 3 marks: correctly sets up Row's expected payoff from Opera (3q) and from Football (2(1−q)) (1 mark), correctly solves 3q = 2(1−q) → q* = 2/5 (1 mark), and correctly states that q* is derived from ROW's payoffs to make ROW indifferent, even though q* is Column's mixing probability (1 mark — the "opponent's indifference" principle)\n- (c) 3 marks: analogous — correctly sets up Column's expected payoffs (2p and 3(1−p)) (1 mark), correctly solves p* = 3/5 (1 mark), correctly attributes the derivation to Column's payoffs used to make Column indifferent (1 mark)\n- (d) 3 marks: correctly computes expected payoff to each player as 6/5 = 1.2 in the mixed NE (1 mark each, 2 marks total) and correctly concludes both pure NE strictly Pareto-dominate the mixed NE for both players (1 mark)\n- (e) 2 marks: correct explanation that self-enforcement (no profitable deviation) holds for all three profiles simultaneously, so rationality alone cannot select among them (1 mark); correct naming of a plausible selection mechanism such as a focal point, risk dominance, pre-play communication/cheap talk, or convention (1 mark)`,
      exampleTopics: [
        'Best-response underlining to find all pure-strategy Nash equilibria in a 2×2 matrix',
        'Setting up and solving indifference conditions to find mixed-strategy NE probabilities',
        'The "opponent\'s indifference" principle: player i\'s mixing probability is pinned down by player j\'s payoffs',
        'Comparing expected payoffs across multiple equilibria and ranking them by Pareto dominance',
        'The equilibrium selection problem and mechanisms (focal points, risk dominance) that address it',
      ],
    },
  },

  // ── Lesson 3 ────────────────────────────────────────────────────────────────
  {
    id: 'ol3-l3',
    moduleId: 'ol3-game-theory',
    title: "Prisoner's Dilemma & Repeated Games",
    description: "Analyse the one-shot Prisoner's Dilemma; understand the Folk Theorem for infinitely repeated games; study trigger strategies and the conditions under which cooperation can emerge.",
    order: 3,
    estimatedMinutes: 55,
    tags: ['olympiad', 'game-theory', 'prisoners-dilemma', 'repeated-games', 'folk-theorem', 'trigger-strategy'],
    content: {
      isStub: false,
      prerequisiteRecap: `Nash equilibrium theory established that a strategy profile (s₁*, s₂*) is a NE if and only if each player's strategy is a best response to the opponent's equilibrium strategy, with Nash's existence theorem guaranteeing at least one NE in mixed strategies for every finite game via Kakutani's fixed-point theorem. The Prisoner's Dilemma provides the canonical example where the unique Nash equilibrium — derived from strict dominance — is Pareto inferior, creating the tension between individual rationality and collective welfare that repeated game theory attempts to resolve.`,
      recallQuestions: [
        {
          id: 'ol3-l3-recall-1',
          type: 'mcq' as const,
          question: 'In a 2×2 game where both players have a strictly dominant strategy, what is the relationship between the Nash equilibrium of that game and the dominant-strategy equilibrium?',
          options: [
            'They coincide: the unique Nash equilibrium is the dominant-strategy equilibrium, because if each player plays their dominant strategy, neither can gain by deviating — dominant strategies are always mutual best responses',
            'They differ: the Nash equilibrium is the Pareto-optimal outcome, while the dominant-strategy equilibrium is the social optimum',
            'The Nash equilibrium may not exist in this case because dominant strategies make the best-response correspondence multi-valued',
            'The dominant-strategy equilibrium is a Nash equilibrium only if both players\' strategies are weakly (not strictly) dominant',
          ],
          correctAnswer: 0,
          explanation: 'A strictly dominant strategy sᵢ satisfies uᵢ(sᵢ, s₋ᵢ) > uᵢ(sᵢ\', s₋ᵢ) for all sᵢ\' and all s₋ᵢ — in particular, it is a best response to the opponent\'s dominant strategy. Therefore, when both players have strictly dominant strategies, the dominant-strategy equilibrium profile is also a Nash equilibrium (each player is best-responding). Conversely, a Nash equilibrium need not involve dominant strategies — it only requires mutual best responses.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      conceptualExplanation: `The Prisoner's Dilemma (PD) is the most studied game in economics: two players each choose to Cooperate (C) or Defect (D). The payoff matrix (using the canonical "temptation, reward, punishment, sucker" structure) is:

         Cooperate (C)    Defect (D)
C:       (R, R)           (S, T)
D:       (T, S)           (P, P)

where T > R > P > S (Temptation > Reward > Punishment > Sucker's payoff) and 2R > T + S (joint cooperation is socially optimal). Defection strictly dominates cooperation for both players: if the opponent cooperates, T > R; if the opponent defects, P > S. The unique Nash equilibrium is (D, D) with payoffs (P, P), which is Pareto inferior to (C, C) with payoffs (R, R). This captures the fundamental tension between individual rationality and collective welfare: the individually rational action leads to an outcome worse for both than mutual cooperation. Examples include arms races, carbon emissions, public goods underprovision, and cartel cheating.

In a one-shot PD, defection is the unique rational outcome. However, in an infinitely repeated PD (or a finitely repeated game with an uncertain end date), cooperation can be sustained as a Nash equilibrium through trigger strategies. The most prominent is the grim trigger: player i cooperates in period 1 and in every subsequent period in which the opponent has always cooperated; if the opponent ever defects, player i defects in all future periods. The analysis requires comparing the gain from defecting today against the loss from triggering permanent punishment. If the discount factor δ = 1/(1+r) is sufficiently large (players are patient), the threat of losing all future cooperation surplus deters defection. Formally, the grim trigger sustains cooperation if and only if δ ≥ (T − R)/(T − P).

Tit-for-Tat (TFT), popularised by Robert Axelrod's computer tournaments (1984), is an alternative trigger strategy: cooperate in period 1, then in each subsequent period mimic the opponent's previous action. TFT is not subgame perfect (it involves threats of punishment that are sometimes costly to carry out), but it performed remarkably well in Axelrod's tournaments due to its properties: niceness (never defects first), provokability (immediately punishes defection), forgivingness (returns to cooperation after punishment), and clarity (simple enough for opponents to understand). The insight that patient, repeated interaction can transform individually rational defection into cooperative equilibria has wide applications in industrial organisation, international trade agreements, and social norms.`,
      realWorldHook: `OPEC's history from 1973 to the present is a living laboratory of the repeated Prisoner's Dilemma. Member countries face constant temptation to overproduce (cheat on quotas), which individually raises their revenue but drives down the cartel price for all. Cooperation was sustained through repeated interaction and the threat of punishment (most famously Saudi Arabia's 1985–1986 price war). The Folk Theorem predicts that cooperation is easier to sustain the more patient countries are (higher δ), the more severe the punishment, and the more transparent overproduction is (facilitating detection). OPEC's struggles — members routinely exceed quotas — illustrate that even when cooperation is theoretically sustainable, coordination failures, asymmetric interests, and imperfect monitoring make the cooperative equilibrium fragile in practice.`,
      interactiveElement: `Construct the classic Prisoner's Dilemma payoff matrix. Two suspects (Row, Column) can each Cooperate (stay silent) or Defect (betray). Payoffs in years of prison sentence avoided (higher = better):

         Cooperate (C)    Defect (D)
C:         (3, 3)           (0, 5)
D:         (5, 0)           (1, 1)

Tasks:
(1) Identify each player's dominant strategy by comparing payoffs column-by-column (for Row) and row-by-row (for Column).
(2) Identify the Nash equilibrium.
(3) Identify the Pareto optimal outcome(s).
(4) Explain why the NE is Pareto inferior: what is the social cost of the prisoners' dilemma (deadweight loss of rational self-interest)?
(5) Suppose the game is repeated with discount factor δ = 0.8. Compute the critical δ* below which grim trigger fails to sustain cooperation. Does δ = 0.8 support cooperation?
(Hint: grim trigger works if δ ≥ (T − R)/(T − P) = (5 − 3)/(5 − 1) = 0.5.)`,
      vocabulary: [
        {
          term: "Prisoner's Dilemma",
          definition: 'A two-player game where each player has a dominant strategy to defect, leading to a unique Nash equilibrium that is Pareto inferior to mutual cooperation; illustrates the conflict between individual and collective rationality.',
          example: 'Two competing airlines facing a price war: each finds it individually rational to undercut the rival\'s fare (defect), but both would earn higher profits at higher cooperative prices — yet the individually rational outcome is a ruinous price war.',
        },
        {
          term: 'Grim Trigger Strategy',
          definition: 'In a repeated game, a strategy that cooperates in period 1 and cooperates in every subsequent period unless the opponent has ever defected, in which case it defects forever (permanently ending cooperation).',
          example: 'A pharmaceutical firm cooperates on research sharing as long as its partner does; if the partner ever free-rides on joint research, the firm permanently withdraws from the collaboration — the harsh threat sustains cooperation when players are sufficiently patient.',
        },
        {
          term: 'Folk Theorem',
          definition: 'In infinitely repeated games with sufficiently patient players (δ close to 1), any individually rational and feasible payoff combination — including Pareto superior outcomes — can be sustained as a Nash (or subgame perfect) equilibrium through trigger strategies.',
          example: 'In an infinitely repeated Cournot duopoly, firms can sustain the monopoly quantity (sharing monopoly profits equally) as a Nash equilibrium of the repeated game if the discount factor exceeds the critical threshold δ* = (T−R)/(T−P), even though the one-shot equilibrium is Cournot competition.',
        },
      ],
      deeperDive: `The Folk Theorem formalises the intuition that repetition enables cooperation. Let V* = (R, R) be the cooperative payoff profile, V^D = (T, P) be the payoff when one player defects and the other cooperates in one period before grim trigger kicks in, and V^N = (P, P) be the Nash punishment payoff. Consider whether the deviating player (say player 1) prefers to cooperate or defect. Under grim trigger, cooperating in every period yields the payoff stream R + δR + δ²R + … = R/(1−δ). Defecting in the first period and triggering grim punishment yields T + δP + δ²P + … = T + δP/(1−δ). Cooperation is preferred if R/(1−δ) ≥ T + δP/(1−δ), which simplifies to R − δR ≥ T(1−δ) + δP − δP = (T−δT) + δP − δP, and further to R ≥ (1−δ)T + δP, yielding δ(R−P) ≥ T−R, or δ ≥ (T−R)/(T−P) = δ*. This is the critical discount factor above which cooperation is sustained. Note δ* is increasing in T−R (greater temptation to defect) and decreasing in R−P (greater value of cooperation relative to punishment).

The Folk Theorem (Friedman, 1971; Fudenberg and Maskin, 1986) extends this to any payoff profile v = (v₁, v₂) satisfying two conditions: (1) feasibility — v lies in the convex hull of the set of achievable pure-strategy payoff profiles (players can achieve v through appropriate mixing of pure strategies over time); and (2) individual rationality — vᵢ ≥ min-max payoff for each player i (each player at least receives what opponents can hold them down to in the worst case). Under these conditions, for any δ sufficiently close to 1, there exists a subgame perfect trigger strategy equilibrium achieving payoff v. The theorem's power lies in its permissiveness: almost anything Pareto superior to the min-max payoff can be sustained as equilibrium behaviour in patient repeated interactions. Conversely, the theorem's weakness is its lack of predictive power — it predicts too many outcomes, motivating the search for equilibrium refinements that select the most "natural" cooperative equilibrium.`,
      commonMisconceptions: [
        "Assuming repeated interaction always leads to cooperation: the Folk Theorem requires δ ≥ δ* AND the punishment must be credible (subgame perfect). Finitely repeated Prisoner's Dilemmas unravel by backward induction — in the last period defection is dominant, so players defect in the second-to-last period too, and so on until defection in every period is the unique NE.",
        "Confusing Tit-for-Tat with grim trigger: TFT forgives after one retaliation period and is not subgame perfect (the threatened retaliation is costly for the punisher); grim trigger punishes forever but is subgame perfect (the punisher is indifferent or prefers to punish once the opponent has defected). Axelrod's tournaments showed TFT's practical effectiveness despite its theoretical imperfections.",
        "Thinking the Folk Theorem proves cooperation is inevitable in repeated games: it proves cooperation is possible (an equilibrium exists) when players are patient enough, not that it will occur. Multiple equilibria exist, including permanent defection, and the Folk Theorem offers no guidance on which equilibrium players coordinate on.",
      ],
      examinerTip: `Olympiad problems on repeated games almost always ask you to derive the critical discount factor δ*. Always set up the comparison between the present value of cooperation and the present value of deviation explicitly, using the geometric series formula for present values (PV = first-period payoff + δ × continuation value). State clearly whether you are checking the condition for Nash equilibrium of the repeated game or subgame perfect equilibrium. Note that grim trigger is SPE while TFT is not.`,
      didYouKnow: `Robert Axelrod's 1984 book "The Evolution of Cooperation" reported a remarkable computer tournament in which game theorists submitted strategies for an iterated Prisoner's Dilemma. The winning entry in both rounds was Tit-for-Tat, submitted by Anatol Rapoport — a strategy of just four lines of code. Axelrod's subsequent evolutionary analysis showed that even in a population of defectors, a small cluster of TFT players can invade and eventually dominate, providing an evolutionary game-theoretic account of how cooperation can emerge from selfish agents — a result that influenced evolutionary biology, political science, and the design of internet protocols.`,
      thinkAboutIt: {
        question: `Backward induction proves that in a Prisoner's Dilemma repeated a known, finite number of times, defection in every single period — including period 1 — is the unique subgame perfect equilibrium, regardless of how large the discount factor is. Yet real firms in long, known-length rivalries (e.g. two airlines competing on a route for years before a scheduled market exit) are frequently observed cooperating on price for most of the interaction, defecting only near the very end, if at all. Does this observed behaviour refute game theory, or can it be reconciled with the theory?`,
        answer: `It does not refute game theory; it reveals that the pure common-knowledge-of-rationality-and-payoffs model is too restrictive to capture this setting, and a richer model reconciles the observation without abandoning equilibrium reasoning. The key mechanism, formalised by Kreps, Milgrom, Roberts and Wilson (1982), is incomplete information about opponent "type": if there is even a small commonly-known probability that a rival is a non-strategic "always cooperate" (grim-trigger-committed) type rather than a purely payoff-maximising type, then a rational player can find it optimal to mimic cooperative behaviour for an extended period — both to sustain the mutually beneficial outcome for as long as the pretence is credible, and to preserve a reputation that deters the opponent from defecting. Because neither player can be certain the other is not the committed type, backward induction from a known terminal period no longer unravels immediately: cooperation becomes rational reputation-building until close to the horizon, at which point the incentive to maintain a reputation vanishes and defection reappears — exactly the "endgame effect" widely observed empirically. This shows the unraveling result is not wrong; it is a knife-edge consequence of assuming payoffs and rationality are common knowledge with probability exactly one, and even an arbitrarily small departure from that assumption restores approximately cooperative behaviour for most of a long finite game.`,
      },
    },
    flashcards: [
      {
        id: 'ol3-l3-fc1',
        front: "Why does the one-shot Prisoner's Dilemma always result in (Defect, Defect) even though (Cooperate, Cooperate) is Pareto superior?",
        back: 'Defect strictly dominates Cooperate for each player: if the opponent Cooperates, T > R (better to defect); if the opponent Defects, P > S (better to defect). Since Defect is dominant for both, (D,D) is the unique Nash equilibrium by dominance. (C,C) is Pareto superior but is not an equilibrium — either player could gain by unilaterally switching to D.',
        tags: ['olympiad', 'game-theory', 'prisoners-dilemma'],
      },
      {
        id: 'ol3-l3-fc2',
        front: 'Derive the critical discount factor δ* for grim trigger to sustain cooperation in the Prisoner\'s Dilemma.',
        back: 'Cooperate every period: PV = R/(1−δ). Defect once then face permanent punishment: PV = T + δP/(1−δ). Set equal: R/(1−δ) = T + δP/(1−δ). Multiply through by (1−δ): R = T(1−δ) + δP = T − δT + δP = T + δ(P−T). Rearranging: δ(T−P) ≥ T−R → δ ≥ (T−R)/(T−P) = δ*. Cooperation sustained iff δ ≥ δ*.',
        tags: ['olympiad', 'game-theory', 'folk-theorem', 'trigger-strategy'],
      },
      {
        id: 'ol3-l3-fc3',
        front: 'State the Folk Theorem and explain why it is "too permissive" as a predictive theory.',
        back: 'Folk Theorem: in infinitely repeated games, any feasible, individually rational payoff profile can be sustained as a Nash (or SPE) equilibrium for sufficiently high δ. It is "too permissive" because it predicts an enormous range of outcomes — from full cooperation to full defection — as equilibria, providing no unique prediction. The multiplicity of equilibria (one for each sustainable payoff profile) means the theorem explains everything and predicts nothing specific, necessitating refinements or focal-point arguments for selection.',
        tags: ['olympiad', 'game-theory', 'folk-theorem'],
      },
    ],
    quiz: [
      {
        id: 'ol3-l3-q1',
        type: 'mcq',
        question: "In the Prisoner's Dilemma with T=5, R=3, P=1, S=0, what is the critical discount factor δ* below which grim trigger fails to sustain cooperation? And does δ=0.6 support cooperation?",
        options: [
          'δ* = (T−R)/(T−P) = (5−3)/(5−1) = 0.5; δ=0.6 > 0.5, so cooperation IS sustained under grim trigger',
          'δ* = (R−P)/(T−P) = (3−1)/(5−1) = 0.5; δ=0.6 > 0.5, so cooperation is NOT sustained',
          'δ* = (T−R)/(T−S) = (5−3)/(5−0) = 0.4; δ=0.6 > 0.4, so cooperation IS sustained',
          'δ* = (T−P)/(T−R) = (5−1)/(5−3) = 2; cooperation can never be sustained',
        ],
        correctAnswer: 0,
        explanation: 'The critical discount factor is derived by comparing cooperation PV = R/(1−δ) with deviation PV = T + δP/(1−δ). Setting equal and solving: δ ≥ (T−R)/(T−P) = (5−3)/(5−1) = 2/4 = 0.5. Since δ=0.6 > δ*=0.5, cooperation IS sustained under grim trigger. Intuitively, the player is sufficiently patient that the future stream of cooperative payoffs (R=3 per period) outweighs the one-time temptation gain (T−R=2) from defecting.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l3-q2',
        type: 'mcq',
        question: "Why does backward induction unravel cooperation in a FINITELY repeated Prisoner's Dilemma, even when both players prefer (C,C)?",
        options: [
          'In the final period, both players face a one-shot PD and defect; anticipating this, both defect in the penultimate period too; induction extends this reasoning to period 1, making defection the unique NE in every period',
          'Players cannot commit to future cooperation without a binding contract, so grim trigger is not credible in finite games',
          'The discount factor is too low in finite games because the time horizon is known',
          'Backward induction only applies to sequential games; in simultaneous games like PD, cooperation is always possible',
        ],
        correctAnswer: 0,
        explanation: "In the last period T, no future interactions exist, so defection is the dominant strategy — both players defect. In period T−1, both players know defection will occur in T regardless of what they do in T−1; thus period T−1 is effectively the last relevant period, and both defect again. This backward induction logic propagates all the way to period 1, yielding defection in every period. This is the 'unraveling' result: even though (C,C) every period Pareto dominates (D,D), it is not a Nash equilibrium of the finitely repeated game when the number of periods is commonly known.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l3-q3',
        type: 'mcq',
        question: 'The Folk Theorem states that any feasible, individually rational payoff can be sustained as a Nash equilibrium in an infinitely repeated game for high enough δ. Which of the following is the BEST interpretation of "individually rational" in this context?',
        options: [
          'Each player\'s payoff in the sustained equilibrium must be at least as high as the min-max payoff — the lowest payoff opponents can force upon the player regardless of what the player does',
          'Each player\'s payoff must exceed the one-shot Nash equilibrium payoff of the stage game',
          'Each player\'s payoff must be Pareto superior to the cooperative benchmark outcome',
          'Each player must strictly prefer the sustained payoff to any deviation payoff in every single period',
        ],
        correctAnswer: 0,
        explanation: 'Individual rationality in the Folk Theorem means each player\'s payoff at least equals their min-max value: the payoff the player can guarantee themselves even if opponents try to minimise their payoff. The min-max payoff is a lower bound — any equilibrium must give players at least this much, otherwise they would deviate. Note that the one-shot NE payoff (option B) is always individually rational (≥ min-max) but is a stricter requirement; the Folk Theorem uses the weaker min-max bound, which is why it is so permissive.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    lessonAssignment: {
      prompt: `A Prisoner's Dilemma has payoffs T = 8 (temptation), R = 5 (mutual cooperation reward), P = 2 (mutual defection punishment), S = 0 (sucker's payoff).\n\n(a) Verify that this is a valid Prisoner's Dilemma by checking both required payoff-ordering conditions, and show that Defect strictly dominates Cooperate for each player. [3 marks]\n(b) Suppose the game is infinitely repeated with common discount factor δ. Derive, from first principles (writing out the full present-value comparison, not just quoting the formula), the critical discount factor δ* above which grim trigger sustains mutual cooperation. Compute its numerical value for these payoffs. [4 marks]\n(c) Now suppose instead the game is repeated for a known, fixed T = 50 periods, common knowledge to both players, with no discounting (δ = 1 within the horizon). Use backward induction to prove that mutual defection in every single period, including period 1, is the unique subgame perfect equilibrium outcome — even though δ = 1 > δ* from part (b). [4 marks]\n(d) Now suppose the game is infinitely repeated, payoffs are undiscounted (r = 0), but after each period the game continues to a further period only with probability π (and ends permanently with probability 1−π). Show that this continuation-probability model is mathematically equivalent to the discounted infinite-horizon model with δ = π, and hence state the critical value π* for grim trigger to sustain cooperation using the payoffs above. [3 marks]\n(e) In one or two sentences, explain why introducing a small probability that a player is a "always cooperate" committed type can restore approximately cooperative behaviour in the FINITE-horizon game of part (c), without contradicting the backward induction logic used there. [2 marks]`,
      rubric: `Award marks as follows:\n- (a) 3 marks: correctly verifies T>R>P>S (8>5>2>0) (1 mark) and 2R>T+S (10>8) (1 mark); correctly shows Defect dominates by comparing T>R (given opponent cooperates) and P>S (given opponent defects) (1 mark)\n- (b) 4 marks: correctly writes PV(cooperate forever) = R/(1−δ) and PV(defect now, punished forever) = T + δP/(1−δ) (2 marks); correctly solves the inequality to δ ≥ (T−R)/(T−P) (1 mark); correctly computes δ* = (8−5)/(8−2) = 0.5 (1 mark)\n- (c) 4 marks: correctly identifies that in period 50 (the last period) defection is dominant regardless of history (1 mark); correctly argues that because period 50's outcome is fixed independent of period 49's action, period 49 becomes effectively terminal and defection is dominant there too (1 mark); correctly extends this reasoning by induction back to period 1 (1 mark); correctly notes the apparent paradox that δ=1 exceeds δ*=0.5 yet cooperation still fails, and identifies that grim trigger's punishment threat has no force with a known finite end (1 mark)\n- (d) 3 marks: correctly shows that expected payoff from an infinite continuing stream with per-period survival probability π and no discounting is Σπᵗxₜ, algebraically identical in form to Σδᵗxₜ (2 marks); correctly states π* = δ* = 0.5 (1 mark)\n- (e) 2 marks: correctly identifies that incomplete information about opponent type breaks the common-knowledge assumption underlying backward induction, making reputation-building rational for most of the game even though the pure-rationality unraveling argument remains logically valid under complete information (2 marks; 1 mark for a partial or vague explanation)`,
      exampleTopics: [
        'Verifying the payoff-ordering conditions that define a valid Prisoner\'s Dilemma',
        'Deriving the critical discount factor δ* from an explicit present-value comparison, not just formula recall',
        'Backward induction in finitely repeated games and the unraveling result',
        'The mathematical equivalence between discounting and a constant per-period continuation probability',
        'Reputation effects under incomplete information as a resolution of the finite-horizon paradox',
      ],
    },
  },

  // ── Lesson 4 ────────────────────────────────────────────────────────────────
  {
    id: 'ol3-l4',
    moduleId: 'ol3-game-theory',
    title: 'Sequential Games & Backward Induction',
    description: 'Represent games in extensive form; apply backward induction to find subgame perfect equilibria; analyse commitment devices; solve the Stackelberg leadership model.',
    order: 4,
    estimatedMinutes: 55,
    tags: ['olympiad', 'game-theory', 'extensive-form', 'backward-induction', 'subgame-perfect', 'Stackelberg'],
    content: {
      isStub: false,
      prerequisiteRecap: `The Folk Theorem for infinitely repeated games established that any feasible, individually rational payoff profile can be sustained as a Nash or subgame perfect equilibrium when the discount factor δ exceeds the critical threshold δ* = (T−R)/(T−P), where T is the temptation, R the cooperative reward, and P the punishment payoff. Sequential game theory now examines a more fundamental mechanism for credible commitment: observable ordering of moves, which allows backward induction to eliminate non-credible threats and identify subgame perfect equilibria that dominate simultaneous-game outcomes.`,
      recallQuestions: [
        {
          id: 'ol3-l4-recall-1',
          type: 'mcq' as const,
          question: 'In the Prisoner\'s Dilemma with T = 6, R = 4, P = 2, S = 0, a grim trigger strategy sustains cooperation in an infinitely repeated game if and only if δ ≥ δ*. What is δ*, and what does it represent economically?',
          options: [
            'δ* = (T−R)/(T−P) = (6−4)/(6−2) = 0.5; it is the minimum discount factor at which the present value of perpetual cooperation R/(1−δ) equals the present value of defecting once and receiving permanent punishment T + δP/(1−δ)',
            'δ* = (R−P)/(T−S) = (4−2)/(6−0) = 1/3; it is the ratio of cooperative gains to total possible payoff variation',
            'δ* = (T−P)/(T−R) = 4/2 = 2; cooperation is impossible since δ* > 1',
            'δ* = (T−R)/(R−P) = 2/2 = 1; cooperation requires perfect patience',
          ],
          correctAnswer: 0,
          explanation: 'Cooperation under grim trigger requires the discounted stream of cooperation to dominate one-shot defection: R/(1−δ) ≥ T + δP/(1−δ). Rearranging: δ(R−P) ≥ T−R, so δ ≥ (T−R)/(T−P) = 2/4 = 0.5. Economically, δ* is the patience threshold at which the value of the future cooperative relationship exactly compensates for foregoing the temptation gain T−R. With δ = 0.5, a player is just indifferent between defecting now and sustaining cooperation forever.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      conceptualExplanation: `While normal form games capture simultaneous choices, many strategic situations are inherently sequential: players move in order, observing some or all of previous actions. The extensive form (game tree) represents sequential games explicitly: nodes are decision points (labelled by the player to move); branches are available actions; terminal nodes carry payoff vectors; and information sets group nodes the moving player cannot distinguish. A pure strategy in an extensive form game specifies an action at every information set, including those that may not be reached in equilibrium — this completeness requirement makes strategies full contingent plans. The set of terminal nodes reachable after implementing a strategy profile determines the payoffs, and the normal form of the game can be derived by listing all strategy combinations and their resulting payoffs.

The fundamental solution concept for sequential games is subgame perfect equilibrium (SPE), introduced by Reinhard Selten (1965). A subgame is a subtree of the game tree that begins at a single node (not within an information set) and contains all successor nodes and their information sets. An SPE is a strategy profile that induces a Nash equilibrium in every subgame of the extensive form game — including subgames that are off the equilibrium path. SPE eliminates Nash equilibria supported by non-credible threats: a player threatening to take a costly action "if" the opponent deviates must actually find it optimal to carry out the threat if the threat node is reached. Backward induction — working from the terminal nodes backward to the root — finds the unique SPE in finite games with perfect information (by Zermelo's theorem, 1913): at each decision node, the moving player selects the action maximising their payoff over the remaining subgame, taking as given that all future play will be similarly optimal.

Commitment devices and first-mover advantage arise naturally in sequential games. If a player can credibly pre-commit to a strategy before the opponent moves, they can sometimes achieve a higher payoff than in the simultaneous game — transforming a strategic disadvantage into an advantage. The Stackelberg duopoly model formalises this: firm 1 (the leader) chooses quantity q₁ first; firm 2 (the follower) observes q₁ and then chooses q₂. Solving by backward induction: firm 2's SPE response is its Cournot best response q₂*(q₁). Firm 1 anticipates this and maximises profit over q₁, substituting q₂*(q₁) into its profit function. The Stackelberg equilibrium features a higher leader output, lower follower output, and higher total industry output than Cournot — with the leader earning higher profit than in the simultaneous Cournot game, illustrating the value of commitment and first-mover advantage.`,
      realWorldHook: `The Cuban Missile Crisis of 1962 is a celebrated application of commitment and backward induction. President Kennedy's naval blockade of Cuba was a commitment device: by publicly and irrevocably announcing that Soviet ships carrying missiles would be intercepted, the US pre-committed to a costly action that, if the Soviets called the bluff, would trigger nuclear escalation. Thomas Schelling's analysis of the crisis showed that making the blockade visible and irreversible — sacrificing flexibility — paradoxically strengthened the American negotiating position by making the threat credible. Khrushchev, solving the game by backward induction and recognising the US commitment was credible, ordered Soviet ships to turn back. The episode illustrates how rational actors, anticipating backward induction by opponents, invest in commitment technologies to shift the equilibrium outcome.`,
      interactiveElement: `Solve the following sequential game by backward induction to find the subgame perfect equilibrium.

Entry Deterrence Game:
- Entrant moves first: Enter (E) or Stay Out (S).
- If Entrant Enters, Incumbent moves second: Accommodate (A) or Fight (F).
- Payoffs (Entrant, Incumbent):
  - (E, A): (2, 1)
  - (E, F): (−1, −1)
  - (S): (0, 3)

Tasks:
(1) Draw the game tree, labelling all nodes, branches, and terminal payoffs.
(2) Apply backward induction: at the incumbent's decision node, which action is optimal?
(3) Given the incumbent's SPE action, what does the entrant choose at the first node?
(4) State the subgame perfect equilibrium (full strategy profile for each player, including actions at all nodes).
(5) Is the strategy profile (Stay Out, Fight) a Nash equilibrium? Explain why it is NOT subgame perfect, identifying the non-credible threat.`,
      vocabulary: [
        {
          term: 'Subgame Perfect Equilibrium (SPE)',
          definition: 'A strategy profile in an extensive form game that constitutes a Nash equilibrium in every subgame, including subgames off the equilibrium path; eliminates NE supported by non-credible threats.',
          example: 'In the Entry Deterrence game, the strategy "Incumbent always Fights entrants" supports the NE (Stay Out, Fight) in the normal form, but it is not SPE: if entry occurs, the incumbent\'s best response is to Accommodate (avoiding mutual losses), making the Fight threat non-credible.',
        },
        {
          term: 'Backward Induction',
          definition: 'A procedure for solving finite extensive form games with perfect information: starting at terminal nodes, assign optimal actions at each decision node working backward to the root; yields the unique SPE in games of perfect information.',
          example: 'In chess, backward induction in principle identifies the optimal move from any position by assuming optimal play in all successor positions — though the game tree is too large for explicit computation, the principle establishes that chess has a well-defined game-theoretic value (win, loss, or draw with perfect play).',
        },
        {
          term: 'Stackelberg Equilibrium',
          definition: 'The SPE of a sequential duopoly game where the leader commits to an output quantity before the follower responds; the leader exploits first-mover advantage by producing more than the Cournot quantity, earning higher profit.',
          example: 'In a linear demand market (P = 100 − Q) with zero costs, the Cournot equilibrium has each firm producing 33.3 units; in Stackelberg, the leader produces 50 units and the follower produces 25 units, with the leader earning higher profit despite total industry output being higher and the market price being lower.',
        },
      ],
      deeperDive: `The Stackelberg model provides a clean illustration of backward induction in economic competition. Assume inverse demand P = a − bQ = a − b(q₁ + q₂) and identical marginal cost c for both firms. In the Cournot (simultaneous) game, both firms' best response functions are symmetric: q_i* = (a − c − bq_j)/(2b), yielding Cournot quantities q_C = (a−c)/(3b) for each firm. In Stackelberg, firm 2 (follower) plays its Cournot best response given q₁: q₂*(q₁) = (a − c − bq₁)/(2b). Firm 1 (leader) substitutes this into its profit function: π₁ = (a − b(q₁ + q₂*(q₁)) − c)q₁ = ((a−c)/2 − bq₁/2)q₁. Maximising over q₁: dπ₁/dq₁ = (a−c)/2 − bq₁ = 0 → q₁_S = (a−c)/(2b). This is exactly twice the Cournot quantity. Substituting back: q₂_S = (a−c)/(4b), total output Q_S = 3(a−c)/(4b) > 2(a−c)/(3b) = Q_C, so the Stackelberg price is lower. The leader's profit π₁_S = (a−c)²/(8b) exceeds the symmetric Cournot profit π_C = (a−c)²/(9b), confirming the first-mover advantage.

Commitment in extensive form games raises deep questions about the sources of strategic power. A player benefits from moving first only if their choice is observable and irreversible — if firm 1's quantity choice were unobservable or reversible, firm 2 would ignore it and the game collapses to Cournot. Schelling's insight is that sacrificing flexibility (burning bridges, posting bonds, making public announcements) can increase strategic power by making threats and commitments credible. The theory of "burning money" — wasteful, observable actions that signal commitment — is formalised in signalling games and the theory of communication. Olympiad candidates should be able to derive Stackelberg quantities algebraically, draw the extensive form and identify subgames, apply backward induction to arbitrary finite trees, and articulate why SPE eliminates non-credible threats that are sustained as Nash equilibria in the normal form.`,
      commonMisconceptions: [
        'Confusing a strategy with an action in sequential games: in the extensive form, a strategy is a complete contingent plan specifying an action at EVERY information set (including those off the equilibrium path), while an action is a single choice at one node. Two players can follow the same equilibrium path but have different strategy profiles if their off-path plans differ.',
        'Believing backward induction always yields a unique outcome: Zermelo\'s theorem guarantees a unique backward induction outcome only in finite games with PERFECT information (no information sets containing multiple nodes). With imperfect information (simultaneous moves within the tree), multiple SPE may exist and backward induction must be combined with Nash equilibrium analysis at simultaneous-move subgames.',
        'Assuming the Stackelberg leader always benefits relative to Cournot: the leader benefits in quantity competition (strategic substitutes), but in price competition (strategic complements, as in Bertrand), moving first is a DISADVANTAGE — the follower can undercut the leader\'s price and capture the market, making the leader prefer to move second (the "second-mover advantage" in price competition).',
      ],
      examinerTip: `When solving sequential games in olympiad problems, always draw the full game tree before applying backward induction — never try to work in your head. Label every node with the player to move, every branch with the action, and every terminal node with the full payoff vector. Work backward one decision node at a time, circling the optimal branch at each node and noting the continuation payoff. State each player's full strategy (actions at ALL nodes, not just equilibrium-path nodes) in your answer. This demonstrates command of the SPE concept and earns full method marks.`,
      didYouKnow: `Reinhard Selten, who introduced subgame perfect equilibrium in 1965, shared the 1994 Nobel Memorial Prize in Economics with John Nash and John Harsanyi. Selten also introduced the concept of "trembling-hand perfect equilibrium" (1975) and conducted pioneering experimental research showing that human players often violate backward induction — most famously in the "centipede game," where backward induction predicts immediate defection but subjects consistently cooperate for many rounds. Selten's dual role as theorist and experimentalist inspired the field of behavioural game theory, which seeks to reconcile classical game theory with observed human behaviour.`,
      thinkAboutIt: {
        question: `In the centipede game, two players alternately choose to "take" a growing pot of money or "pass" it to the other player, with the pot doubling each round and the game ending automatically after a fixed, known number of rounds if no one takes. Backward induction predicts that the FIRST player takes the pot in round 1 — leaving both players with a tiny payoff — even though passing all the way to the end would make both players enormously better off. Is backward induction giving the "wrong" answer here, given that virtually no real player takes immediately?`,
        answer: `Backward induction is not giving the wrong answer to the question it is actually answering: it correctly identifies the unique subgame perfect equilibrium GIVEN common knowledge that both players are expected-payoff-maximising and that this fact is common knowledge to arbitrary depth. The apparent paradox is that this assumption is extremely fragile in a game with many rounds. The argument requires believing the opponent is rational, believing the opponent believes you are rational, believing the opponent believes you believe THEY are rational, and so on through every remaining round — and if that chain of common knowledge breaks at any single link, the entire backward-induction argument for taking immediately collapses, because a player who assigns even a small probability to the opponent passing "irrationally" (or being altruistic, or making an error) may find it optimal to pass as well, at least for several rounds. This is precisely analogous to the incomplete-information resolution of the finitely repeated Prisoner's Dilemma: a small departure from common knowledge of rationality, rather than any flaw in the logic of backward induction itself, is what reconciles the theoretical prediction with the empirical observation that players pass for many rounds. The theoretical lesson is that subgame perfection is only as credible as the common-knowledge assumption it rests on, and that assumption becomes behaviourally implausible as the number of iterations of "I know that you know that I know..." required grows large.`,
      },
    },
    flashcards: [
      {
        id: 'ol3-l4-fc1',
        front: 'Define subgame perfect equilibrium and explain how it differs from Nash equilibrium.',
        back: 'An SPE is a strategy profile that induces a Nash equilibrium in every subgame of the extensive form game, including those off the equilibrium path. Nash equilibrium only requires best responses along the equilibrium path, so it can be sustained by non-credible threats. SPE eliminates these by requiring optimality everywhere — a threat is credible only if the threatening player would actually prefer to carry it out if the threat node is reached.',
        tags: ['olympiad', 'game-theory', 'subgame-perfect'],
      },
      {
        id: 'ol3-l4-fc2',
        front: 'Derive the Stackelberg leader\'s output and compare it to the Cournot output (use P = a − b(q₁+q₂), MC = c).',
        back: 'Follower BR: q₂*(q₁) = (a−c−bq₁)/(2b). Leader substitutes into profit: π₁ = (a − b(q₁+q₂*(q₁)) − c)q₁. Simplify: π₁ = ((a−c)/2 − bq₁/2)q₁. FOC: (a−c)/2 = bq₁ → q₁_S = (a−c)/(2b). Cournot: q_C = (a−c)/(3b). So q₁_S = (3/2)q_C > q_C — the Stackelberg leader produces 50% more than the Cournot quantity.',
        tags: ['olympiad', 'game-theory', 'Stackelberg'],
      },
      {
        id: 'ol3-l4-fc3',
        front: 'What is a non-credible threat, and give an example from the Entry Deterrence game?',
        back: 'A non-credible threat is a threatened action that the threatening player would not find optimal to carry out if the threat node is actually reached. Example: in Entry Deterrence, the incumbent threatens to Fight if the entrant Enters (to deter entry). But Fighting yields payoff −1 < 1 from Accommodating, so if entry occurs, the incumbent strictly prefers to Accommodate. The threat to Fight is non-credible, and rational entrants enter — the only SPE is (Enter, Accommodate).',
        tags: ['olympiad', 'game-theory', 'backward-induction'],
      },
    ],
    quiz: [
      {
        id: 'ol3-l4-q1',
        type: 'mcq',
        question: 'In the Entry Deterrence game (Entrant: Enter or Stay Out; if Enter, Incumbent: Accommodate (payoffs: Entrant 2, Incumbent 1) or Fight (payoffs: −1, −1); if Stay Out: payoffs (0, 3)), what is the subgame perfect equilibrium?',
        options: [
          '(Enter, Accommodate): the entrant enters because the incumbent\'s threat to fight is non-credible — if entry occurs, the incumbent prefers Accommodate (1 > −1)',
          '(Stay Out, Fight): the entrant stays out, deterred by the credible threat of a price war',
          '(Enter, Fight): both players play their dominant strategies simultaneously',
          '(Stay Out, Accommodate): the incumbent commits to accommodation, and the entrant prefers to stay out',
        ],
        correctAnswer: 0,
        explanation: 'Apply backward induction. At the incumbent\'s node (reached only if entry occurs): Accommodate gives payoff 1, Fight gives −1; the incumbent strictly prefers Accommodate. Given that entry will be accommodated, the entrant compares: Enter (payoff 2) vs. Stay Out (payoff 0); the entrant strictly prefers to Enter. SPE: (Enter; Accommodate if entered). The strategy profile (Stay Out, Fight) is a Nash equilibrium of the normal form (no unilateral deviation is profitable given opponent\'s strategy) but NOT SPE — Fighting is not optimal when the fight node is actually reached.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l4-q2',
        type: 'mcq',
        question: 'In a Stackelberg duopoly with P = 120 − Q, Q = q₁ + q₂, and zero marginal costs for both firms, what are the Stackelberg leader\'s (firm 1) and follower\'s (firm 2) equilibrium outputs?',
        options: [
          'q₁ = 60, q₂ = 30: derived by backward induction — follower\'s BR is q₂ = (120−q₁)/2; leader maximises profit substituting BR, yielding q₁ = 60, then q₂ = 30',
          'q₁ = q₂ = 40: the symmetric Cournot outcome, since Stackelberg and Cournot are equivalent with zero costs',
          'q₁ = 80, q₂ = 20: the leader produces monopoly output and the follower produces residual demand',
          'q₁ = 120, q₂ = 0: the leader produces the entire competitive output and the follower exits',
        ],
        correctAnswer: 0,
        explanation: 'Follower BR: q₂*(q₁) = (120 − q₁)/2. Leader profit: π₁ = (120 − q₁ − q₂*(q₁))q₁ = (120 − q₁ − (120−q₁)/2)q₁ = ((120−q₁)/2)q₁. FOC: d/dq₁[(120q₁ − q₁²)/2] = (120 − 2q₁)/2 = 0 → q₁ = 60. Then q₂ = (120−60)/2 = 30. Total Q = 90, P = 30. Leader profit = 30×60 = 1800; Follower profit = 30×30 = 900. Compare Cournot: q_C = 120/3 = 40 each, P = 40, π_C = 40×40 = 1600. Leader gains (1800 > 1600), follower loses (900 < 1600) relative to Cournot.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l4-q3',
        type: 'mcq',
        question: 'Why does the first-mover advantage in Stackelberg quantity competition become a DISADVANTAGE in Bertrand price competition?',
        options: [
          'In price competition, the follower can undercut the leader\'s price by an infinitesimal amount and capture the entire market; the leader, anticipating this, is forced to price at marginal cost in equilibrium — moving first confers no advantage and the follower extracts all gains from trade',
          'In Bertrand competition, quantity is fixed, so price leadership has no strategic value',
          'The Bertrand paradox means both firms earn zero profit in any sequential game with identical goods, making the order of moves irrelevant',
          'The second-mover advantage only applies when goods are differentiated; with homogeneous goods, Stackelberg and Cournot outcomes are identical',
        ],
        correctAnswer: 0,
        explanation: 'With homogeneous goods and Bertrand price competition, the follower can always undercut the leader\'s price by ε > 0 and serve the entire market. The leader, solving backward induction, anticipates that any price above marginal cost will be undercut. The unique SPE has both firms pricing at marginal cost (the Bertrand paradox). The leader derives no first-mover advantage — indeed, by committing to a high price first, the leader invites the follower to undercut. The strategic complementarity of prices (in contrast to the strategic substitutability of quantities) means leadership hurts in price competition but helps in quantity competition.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    lessonAssignment: {
      prompt: `A Stackelberg duopoly faces inverse demand P = 100 − Q, where Q = q₁ + q₂. Firm 1 (the leader) has constant marginal cost c₁ = 10; Firm 2 (the follower) has constant marginal cost c₂ = 20 — Firm 2 is the less efficient firm. Firm 1 chooses q₁ first; Firm 2 observes q₁ and then chooses q₂.\n\n(a) Derive Firm 2's best-response function q₂*(q₁) by explicitly solving Firm 2's profit-maximisation problem. [3 marks]\n(b) Substitute Firm 2's best response into Firm 1's profit function and derive the Stackelberg leader's equilibrium output q₁*. Hence compute q₂*, total industry output Q*, and market price P*. [4 marks]\n(c) Compute each firm's equilibrium profit in the Stackelberg game. [2 marks]\n(d) Now solve for the Cournot–Nash equilibrium of the SAME demand and cost structure, assuming both firms choose output simultaneously instead. Derive q₁_C, q₂_C, and each firm's Cournot profit. [4 marks]\n(e) Compare Firm 1's Stackelberg profit to its Cournot profit, and Firm 2's Stackelberg profit to its Cournot profit. Explain in economic terms — not just algebra — why the FOLLOWER's profit is lower under Stackelberg than under Cournot, even though the follower behaves optimally (best-responds) at every stage of both games. [3 marks]`,
      rubric: `Award marks as follows:\n- (a) 3 marks: correctly sets up π₂ = (100−q₁−q₂−20)q₂ (1 mark), correctly differentiates and solves to get q₂*(q₁) = (80−q₁)/2 = 40 − q₁/2 (2 marks)\n- (b) 4 marks: correctly substitutes to get π₁ = (100−q₁−(40−q₁/2)−10)q₁ = (50−q₁/2)q₁ (1 mark), correctly solves FOC to get q₁* = 50 (1 mark), correctly computes q₂* = 15 (1 mark), correctly computes Q* = 65 and P* = 35 (1 mark)\n- (c) 2 marks: correctly computes leader profit = (35−10)×50 = $1,250 (1 mark) and follower profit = (35−20)×15 = $225 (1 mark)\n- (d) 4 marks: correctly derives both best-response functions q₁=(90−q₂)/2 and q₂=(80−q₁)/2 (1 mark), correctly solves simultaneously to q₁_C = 100/3 and q₂_C = 70/3 (2 marks), correctly computes P_C = 130/3 and profits π₁_C = 10000/9 ≈ $1,111.11, π₂_C = 4900/9 ≈ $544.44 (1 mark)\n- (e) 3 marks: correct numerical comparison showing leader gains ($1,250 > $1,111.11) and follower loses ($225 < $544.44) (1 mark); correct economic explanation that quantity commitment is a credible aggressive ("top dog") move under strategic substitutes — the leader's higher committed output shifts along the follower's downward-sloping best-response function, forcing a lower follower output and price even though the follower is still optimising given what the leader has committed to (2 marks)`,
      exampleTopics: [
        'Deriving a best-response function from an explicit profit-maximisation first-order condition',
        'Backward induction in the Stackelberg model: solve the follower\'s problem first, then substitute into the leader\'s problem',
        'Solving simultaneous best-response functions for the Cournot–Nash equilibrium',
        'Comparing sequential (Stackelberg) and simultaneous (Cournot) outcomes under cost asymmetry',
        'Explaining commitment and first-mover advantage in economic (not just algebraic) terms',
      ],
    },
  },

  // ── Lesson 5 ────────────────────────────────────────────────────────────────
  {
    id: 'ol3-l5',
    moduleId: 'ol3-game-theory',
    title: 'Auctions & Mechanism Design',
    description: 'Analyse first and second price sealed-bid auctions; derive the Revenue Equivalence Theorem; introduce the VCG mechanism and incentive compatibility in mechanism design.',
    order: 5,
    estimatedMinutes: 60,
    tags: ['olympiad', 'game-theory', 'auctions', 'mechanism-design', 'VCG', 'revenue-equivalence', 'incentive-compatibility'],
    content: {
      isStub: false,
      prerequisiteRecap: `Backward induction in sequential games identifies the subgame perfect equilibrium by requiring each player to act optimally at every information set, eliminating Nash equilibria sustained by non-credible threats; in the Stackelberg duopoly, the leader exploits first-mover advantage by committing to q₁_S = (a−c)/(2b), producing 50% more than the Cournot quantity and earning higher profit. Mechanism design now asks the reverse question: given a desired outcome (efficient allocation), can we design rules — payoff functions and information structures — that make rational agents voluntarily implement it?`,
      recallQuestions: [
        {
          id: 'ol3-l5-recall-1',
          type: 'mcq' as const,
          question: 'In a Stackelberg duopoly with inverse demand P = 100 − (q₁ + q₂) and zero costs for both firms, what is the subgame perfect equilibrium output of the leader (q₁*) derived by backward induction, and how does leader profit compare to the symmetric Cournot equilibrium?',
          options: [
            'q₁* = 50 (leader) and q₂* = 25 (follower) via backward induction; leader profit = 50 × (100−75) = $1,250, exceeding symmetric Cournot profit of $1,111 per firm',
            'q₁* = q₂* = 33.3 (symmetric Cournot outcome); first-mover advantage is zero because both firms have identical costs',
            'q₁* = 100 (leader produces monopoly output) and q₂* = 0 (follower exits the market)',
            'q₁* = 50 (leader) but leader profit equals follower profit because competition equalises payoffs in equilibrium',
          ],
          correctAnswer: 0,
          explanation: 'By backward induction: follower BR q₂*(q₁) = (100−q₁)/2. Leader profit π₁ = (100−q₁−q₂*(q₁))q₁ = ((100−q₁)/2)q₁. FOC: 100/2 − q₁ = 0 → q₁* = 50. Then q₂* = (100−50)/2 = 25. Price = 100−75 = 25. Leader profit = 25×50 = $1,250. Cournot: each firm produces 100/3 ≈ 33.3, price = 33.3, profit ≈ 33.3² ≈ $1,111. The Stackelberg leader earns more by exploiting the credible commitment to higher output that backward induction validates.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      conceptualExplanation: `An auction is a mechanism for allocating a good to the highest-value bidder. The four standard auction formats are: (1) English (ascending bid) auction — price rises until one bidder remains; (2) Dutch (descending bid) auction — price falls until a bidder accepts; (3) First price sealed-bid (FPSB) auction — bidders submit simultaneous bids, highest bidder wins and pays their bid; (4) Second price sealed-bid (SPSB, or Vickrey) auction — bidders submit simultaneous bids, highest bidder wins but pays the second-highest bid. These formats differ in transparency and in the strategic incentives they create. English auctions are strategically equivalent to SPSB under private values (both implement the same allocation rule and payment), and Dutch auctions are strategically equivalent to FPSB.

In a SPSB (Vickrey) auction with private values (each bidder knows only their own value vᵢ), bidding one's true value bᵢ = vᵢ is a weakly dominant strategy. The proof: if bᵢ > v₋ᵢ_max (the maximum competing bid), bidder i wins regardless of bᵢ, so the bid above vᵢ cannot improve the outcome. If bᵢ < v₋ᵢ_max, bidder i loses; bidding vᵢ instead would win only if vᵢ > v₋ᵢ_max, which yields non-negative surplus — bidding truthfully never creates a losing trade. Since truth-telling dominates all other strategies regardless of others' bids, SPSB auctions are incentive compatible (IC) and strategy-proof. In a FPSB auction, truth-telling is not dominant: bidding vᵢ yields zero surplus (winning means paying exactly vᵢ), so bidders shade their bids below vᵢ. The equilibrium bid in a FPSB auction with n bidders whose values are independently uniformly distributed on [0, 1] is bᵢ(vᵢ) = ((n−1)/n) × vᵢ — each bidder bids a fraction (n−1)/n of their value.

The Revenue Equivalence Theorem (Myerson, 1981; Vickrey, 1961) is one of the most elegant results in auction theory: under standard conditions (risk-neutral bidders, private values drawn independently from the same continuous distribution, the good always goes to the highest-value bidder, and the lowest type earns zero surplus), all auction formats generate the same expected revenue for the seller. Despite the apparently different payment rules — FPSB winners pay their own bid, SPSB winners pay the second-highest bid — the equilibrium shading in FPSB exactly compensates: FPSB bids are lower but certainty of winning equals SPSB bids in expected payment. This invariance result is powerful: the seller need not choose among auction formats to maximise revenue under symmetric independent private values. Revenue equivalence breaks down when bidders are asymmetric, risk-averse, have common values, or collude — providing the economic rationale for preferring particular auction formats in practice.`,
      realWorldHook: `The 1994 FCC spectrum auctions for mobile telephony licences, designed by economists Paul Milgrom, Robert Wilson, and Preston McAfee, represent one of the most successful applications of auction theory to public policy. Previous spectrum allocation (via "comparative hearings" and lotteries) was inefficient and slow. The economists designed a Simultaneous Multiple Round Auction (SMRA) that allowed firms to bid on multiple spectrum licences simultaneously, accounting for complementarities between adjacent geographic bands. The design explicitly incorporated incentive compatibility to prevent strategic manipulation. The first auction raised $617 million for the US government; subsequent auctions raised tens of billions. Paul Milgrom and Robert Wilson shared the 2020 Nobel Memorial Prize in Economics for their contributions to auction theory and practical auction design — a rare case of pure economic theory directly shaping a major government policy.`,
      interactiveElement: `Revenue Equivalence in Action: Consider a FPSB and SPSB auction with 2 bidders whose values v₁ and v₂ are independently uniformly distributed on [0, 1].

Part A — Second Price Sealed Bid:
(1) State the dominant strategy in SPSB: each bidder bids b = v.
(2) The expected payment by the winner: given v₁ > v₂, the winner (bidder 1) pays v₂. By order statistics, E[v₂ | v₁ wins] = v₁/2. So the expected payment conditional on winning with value v₁ is v₁/2.
(3) Expected seller revenue = E[second-highest value] = E[min(v₁,v₂)] = 1/3.

Part B — First Price Sealed Bid:
(4) With n=2 bidders, the Bayes-Nash equilibrium bid is b(v) = ((n−1)/n)v = v/2.
(5) A bidder with value v wins if v/2 > opponent's bid = opponent's value/2, i.e., if v > v₂. Expected payment by bidder 1 with value v₁: E[payment | v₁] = (v₁/2) × Pr(win) = (v₁/2) × v₁ = v₁²/2. Integrating over v₁: Expected revenue = ∫₀¹ 2 × (v₁²/2) dv₁ = ∫₀¹ v₁² dv₁ = 1/3.
(6) Confirm Revenue Equivalence: both auction formats yield expected revenue = 1/3.
(7) Discussion: Explain why revenue equivalence breaks down if one bidder is risk-averse.`,
      vocabulary: [
        {
          term: 'Incentive Compatibility (IC)',
          definition: 'A mechanism is incentive compatible if truthful reporting of private information is a (weakly or strictly) dominant strategy for every agent; truth-telling is individually rational regardless of others\' reports.',
          example: 'The Vickrey (SPSB) auction is incentive compatible: bidding one\'s true value is a weakly dominant strategy regardless of others\' bids, because the price paid (second-highest bid) does not depend on one\'s own bid — a bidder cannot reduce their payment by misreporting their value.',
        },
        {
          term: 'Revenue Equivalence Theorem',
          definition: 'Under symmetric, independent private values, risk neutrality, and the same allocation rule (good goes to highest-value bidder), all auction formats generate identical expected revenue to the seller.',
          example: 'A seller auctioning a painting to risk-neutral bidders with independently drawn private values earns the same expected revenue from a first-price, second-price, English, or Dutch auction, even though the equilibrium bidding strategies and payment rules differ across formats.',
        },
        {
          term: 'VCG Mechanism (Vickrey-Clarke-Groves)',
          definition: 'A mechanism that achieves efficient allocation by having each agent pay the externality their presence imposes on others — the reduction in other agents\' utility caused by the agent participating; truth-telling is a dominant strategy and the efficient allocation is always implemented.',
          example: 'In a public goods provision problem, each citizen reports their value for a park; the VCG mechanism charges each citizen the net harm their participation causes others (e.g., if their report tips the provision decision). Citizens have no incentive to misreport because their payment does not depend on their own report.',
        },
      ],
      deeperDive: `The Vickrey-Clarke-Groves (VCG) mechanism extends the incentive-compatible SPSB auction to general social choice problems. The goal is to implement the socially efficient outcome — the alternative maximising total surplus ΣᵢVᵢ(x) — where each agent i has private value Vᵢ(x) for social outcome x. In VCG, each agent i reports a value function v̂ᵢ(x); the mechanism selects the outcome x* that maximises Σᵢv̂ᵢ(x). Agent i's payment is tᵢ = Σⱼ≠ᵢv̂ⱼ(x*) − hᵢ(v̂₋ᵢ), where hᵢ is any function of others' reports (not i's). By design, agent i's utility equals v̂ᵢ(x*) − tᵢ = Σⱼv̂ⱼ(x*) − hᵢ(v̂₋ᵢ). Maximising over v̂ᵢ is equivalent to maximising Σⱼv̂ⱼ(x*), which is achieved by truthful reporting (v̂ᵢ = Vᵢ). Truth-telling is a dominant strategy, and the efficient outcome is implemented regardless of others' reports. The Clarke pivot rule sets hᵢ = max_{x} Σⱼ≠ᵢv̂ⱼ(x), making tᵢ equal to the externality agent i imposes on others — the reduction in others' welfare caused by i's participation.

VCG mechanisms have a celebrated drawback: they may not be budget-balanced (the total payments collected may be negative — the mechanism may need to run a deficit). The Green-Laffont impossibility theorem shows that no mechanism can simultaneously achieve efficiency, incentive compatibility, and budget balance. In practice, this means VCG is used where the planner can absorb deficits (e.g., government spectrum allocation) but is less practical for private markets. Myerson's optimal auction design addresses a different question: rather than efficiency, what mechanism maximises the seller's expected revenue? For symmetric bidders with private values drawn from a known distribution F with density f, the optimal mechanism is a Vickrey auction with a reserve price r* solving r* − (1−F(r*))/f(r*) = 0 (the virtual valuation equals zero at the optimal reserve). Items unsold at the reserve do not generate surplus, but the reserve extracts more revenue from high-value buyers by reducing competitive pressure on them to reveal their values.`,
      commonMisconceptions: [
        'Believing that the highest-revenue auction format always differs from the most efficient one: under the conditions of the Revenue Equivalence Theorem, efficiency and revenue maximisation coincide across formats — the good goes to the highest-value bidder in equilibrium in all standard formats. Revenue differences arise from reserve prices (Myerson optimal auction) or from asymmetries and risk aversion, not from the basic auction format per se.',
        'Thinking that winning a FPSB auction with a very high bid is always a mistake ("winner\'s curse"): the winner\'s curse is specific to COMMON value auctions (where the item has the same unknown true value for all bidders, such as oil drilling rights). In PRIVATE value auctions (each bidder knows their own value exactly), winning at a high bid is fine as long as the bid is below the winner\'s private value — there is no curse because the value is known.',
        'Confusing incentive compatibility with individual rationality: IC means truth-telling is optimal given others\' strategies (dominant strategy IC) or given equilibrium strategies (Bayes-Nash IC). Individual rationality (IR, or participation constraint) means each agent weakly prefers to participate in the mechanism rather than opting out. A mechanism can be IC but not IR (agents prefer not to participate) or IR but not IC (agents participate but misreport).',
      ],
      examinerTip: `Olympiad problems on auctions typically require: (1) proving truth-telling is dominant in SPSB (use the three-case argument: bid above value, at value, or below value); (2) deriving the Bayes-Nash equilibrium bid in FPSB using the formula b(v) = E[highest rival value | v wins] for symmetric uniform distributions; (3) confirming revenue equivalence by computing expected revenue under both formats; or (4) defining and applying VCG payments. Always state the assumptions under which revenue equivalence holds and identify which assumptions the problem might be violating. Explaining the winner\'s curse in common value auctions often appears as a contrast question.`,
      didYouKnow: `William Vickrey, who invented the second-price sealed-bid auction in 1961, was awarded the Nobel Memorial Prize in Economic Sciences in 1996 — but died of a heart attack just three days after the announcement, before the award ceremony. His remarkably simple mechanism (truthful bidding is a dominant strategy; the seller's revenue equals the second-highest valuation) inspired three decades of research in mechanism design, culminating in Myerson's optimal auction theory (1981) and the VCG mechanism. Paul Milgrom and Robert Wilson, who won the 2020 Nobel for auction design, built on Vickrey's foundations to design the practical multi-unit auctions used by governments worldwide to sell spectrum, electricity, and financial instruments.`,
      thinkAboutIt: {
        question: `It is a proved theorem that bidding your true value is a dominant strategy in a second-price sealed-bid auction. Yet decades of laboratory experiments (starting with Kagel and Levin in the 1990s) consistently find that a substantial fraction of subjects bid ABOVE their true value in SPSB auctions — a strategy that theory says can never do strictly better than truth-telling and can sometimes do strictly worse. Does this systematic overbidding contradict the dominance proof, and is overbidding actually irrational?`,
        answer: `It does not contradict the proof, and this is precisely because the proof only establishes that truth-telling is WEAKLY, not strictly, dominant — a distinction with real behavioural consequences. Re-examine the three-case argument: overbidding (b > vᵢ) is harmless and payoff-identical to truthful bidding in two of the three relevant regions — when the rival's bid m already exceeds vᵢ (bidder still loses either way) and when m is below vᵢ (bidder still wins and still pays m either way) — and it only produces a strictly worse outcome in the narrow region where m falls strictly between vᵢ and b. Because that losing region has to be hit exactly by the realized rival bid to matter, a bidder who overbids by a small amount faces only a small probability of ever landing in the region where it costs them anything, so the ex-ante payoff cost of mild overbidding is typically minuscule even though it is never positive. This makes overbidding a "quasi-free" behavioural error: subjects may overbid due to the joy-of-winning, a mistaken belief that SPSB behaves like FPSB (where shading is optimal, so bidders anchor incorrectly), or a preference for a higher win probability when the expected cost of doing so is small — none of which is ruled out by weak dominance, which only guarantees no other strategy is STRICTLY better, not that alternatives are costly. The theoretical lesson is that weak dominance is a much less behaviourally forcing prediction than strict dominance, and empirical auction design must account for the fact that weakly dominant strategies are followed far less reliably than strictly dominant ones.`,
      },
    },
    flashcards: [
      {
        id: 'ol3-l5-fc1',
        front: 'Prove that bidding one\'s true value is a weakly dominant strategy in a second-price sealed-bid auction.',
        back: 'Let vᵢ be bidder i\'s true value and m = max bidₙ (highest rival bid). Case 1: bid b > vᵢ. If b > m > vᵢ, i wins and pays m — same outcome as bidding vᵢ. If m > b, i loses — same as bidding vᵢ. No gain from overbidding. Case 2: bid b < vᵢ. If b < m < vᵢ, i loses — but bidding vᵢ would win with profit vᵢ − m > 0. Underbidding can cause i to forgo positive surplus. Case 3: bid b = vᵢ. Whenever winning is profitable (m < vᵢ), i wins; whenever winning is unprofitable (m > vᵢ), i loses. Truth-telling weakly dominates all other bids.',
        tags: ['olympiad', 'game-theory', 'auctions', 'incentive-compatibility'],
      },
      {
        id: 'ol3-l5-fc2',
        front: 'State the Revenue Equivalence Theorem and its four key assumptions.',
        back: 'RET: all auction formats that (1) allocate the good to the highest-value bidder, (2) are played by risk-neutral bidders, (3) with values drawn independently from the same continuous distribution, and (4) give the lowest type zero expected surplus — generate the same expected revenue to the seller. FPSB, SPSB, English, and Dutch auctions all satisfy these conditions and thus yield identical seller revenue in expectation, despite different bidding strategies and payment rules.',
        tags: ['olympiad', 'game-theory', 'revenue-equivalence'],
      },
      {
        id: 'ol3-l5-fc3',
        front: 'What is the VCG payment rule, and why does it make truth-telling dominant?',
        back: 'In VCG, agent i pays tᵢ = Σⱼ≠ᵢv̂ⱼ(x₋ᵢ*) − Σⱼ≠ᵢv̂ⱼ(x*), where x* is the efficient outcome given all reports and x₋ᵢ* is the efficient outcome without i. Agent i\'s utility is vᵢ(x*) − tᵢ = Σⱼvⱼ(x*) − const. Since x* maximises Σⱼv̂ⱼ(x), and the const doesn\'t depend on v̂ᵢ, agent i maximises utility by choosing v̂ᵢ = vᵢ (truth-telling makes x* = the truly efficient outcome). Payment equals the externality i imposes on others.',
        tags: ['olympiad', 'game-theory', 'VCG', 'mechanism-design'],
      },
    ],
    quiz: [
      {
        id: 'ol3-l5-q1',
        type: 'mcq',
        question: 'Bidder A values a painting at $500 and bidder B values it at $300. Both participate in a second-price sealed-bid auction. What are the equilibrium bids, who wins, and how much do they pay?',
        options: [
          'Both bid their true values ($500 and $300); A wins and pays $300 — the dominant strategy is truth-telling, and the winner pays the second-highest bid',
          'Both shade their bids: A bids $400, B bids $240; A wins and pays $240',
          'A bids $500 and B bids $300; A wins and pays $500 (their own bid)',
          'A bids $301 (just above B\'s value) and B bids $300; A wins and pays $301',
        ],
        correctAnswer: 0,
        explanation: 'In a second-price sealed-bid auction, truth-telling (bid = true value) is a weakly dominant strategy for every bidder. A bids $500 and B bids $300. A has the highest bid and wins. The winner pays the second-highest bid = $300. A\'s surplus = $500 − $300 = $200; B\'s surplus = $0. The seller receives $300. Note: if A tried to shade their bid to, say, $301, they would still win and still pay $300 — no gain. If A bid below $300, they would lose, forfeiting positive surplus.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l5-q2',
        type: 'mcq',
        question: 'In a first-price sealed-bid auction with n=3 bidders whose values are independently and uniformly distributed on [0, 1], what is the symmetric Bayes-Nash equilibrium bidding strategy?',
        options: [
          'b(v) = (2/3)v — each bidder bids two-thirds of their value, derived from the formula b(v) = ((n−1)/n)v with n=3',
          'b(v) = v — truth-telling, as in the second-price auction',
          'b(v) = v/2 — each bidder bids half their value regardless of n',
          'b(v) = v − 1/(n+1) — bidders shade by a fixed amount equal to 1/(n+1)',
        ],
        correctAnswer: 0,
        explanation: 'In a symmetric FPSB auction with n bidders and uniform values on [0,1], the symmetric BNE bid function is b(v) = ((n−1)/n)v. With n=3: b(v) = (2/3)v. Intuition: a bidder with value v wins if their bid exceeds all n−1 rivals\' bids. Optimising the trade-off between winning probability (higher bid) and surplus (lower bid) yields bid = (n−1)/n × v. As n → ∞, b(v) → v (competition drives bids to true values). Revenue equivalence confirms that this FPSB equilibrium generates the same expected revenue as the SPSB auction with truth-telling.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol3-l5-q3',
        type: 'mcq',
        question: 'The Revenue Equivalence Theorem breaks down and a first-price auction raises MORE expected revenue than a second-price auction when:',
        options: [
          'Bidders are risk-averse: risk-averse bidders bid more aggressively in FPSB to reduce the risk of losing, increasing expected payments relative to SPSB where the payment rule is independent of risk attitude',
          'Bidders have common values: the winner\'s curse causes bidders to shade more in FPSB than SPSB, reducing FPSB revenue',
          'There are more than two bidders: with n > 2, the FPSB bid function (n−1)/n × v yields systematically higher bids than SPSB truth-telling',
          'Bidders have asymmetric value distributions: asymmetry always favours FPSB for the seller regardless of the direction of asymmetry',
        ],
        correctAnswer: 0,
        explanation: 'Revenue equivalence assumes risk neutrality. With risk-averse bidders (concave utility functions), FPSB generates higher revenue than SPSB. Intuition: in FPSB, a risk-averse bidder suffers from the risk of losing (zero payoff) and therefore bids more aggressively (shades less) to increase the probability of winning. In SPSB, the payment is determined by rivals\' bids (not one\'s own), so risk aversion does not change the dominant-strategy truth-telling. More aggressive FPSB bidding raises expected revenue above the SPSB level. Common values (option B) create a winner\'s curse that reduces bidding — revenue effects depend on the auction format in complex ways. Option C is wrong: the FPSB formula accounts for n and still satisfies revenue equivalence under the theorem\'s assumptions.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    lessonAssignment: {
      prompt: `Two bidders have private values independently drawn from a Uniform[0, 2] distribution (note: NOT [0,1]). They compete for a single item.\n\n(a) State and prove, using the standard three-case argument, that bidding one's true value is a weakly dominant strategy in a second-price sealed-bid (SPSB) auction. [3 marks]\n(b) Guess that the symmetric Bayes-Nash equilibrium bidding strategy in a first-price sealed-bid (FPSB) auction takes the linear form β(v) = αv for some constant α. Derive α from a bidder's expected-payoff maximisation problem, and show that your answer is independent of the upper bound of the value distribution (2, in this case). [4 marks]\n(c) Using order statistics, compute the seller's expected revenue under the SPSB format directly (i.e. compute E[second-highest value] for two iid Uniform[0,2] draws). [3 marks]\n(d) Independently verify the Revenue Equivalence Theorem by computing the seller's expected revenue under the FPSB format using the equilibrium strategy found in (b), and confirm it equals your answer to (c). [3 marks]\n(e) A charity has one ticket to allocate efficiently among three volunteers who report values v₁, v₂, v₃ for it, using a VCG (Clarke pivot) mechanism. State, in terms of the reports, (i) who receives the ticket, (ii) how much the winner pays, and (iii) how much the losing volunteers pay — and explain briefly why this reduces to a familiar auction format from earlier in the lesson. [3 marks]`,
      rubric: `Award marks as follows:\n- (a) 3 marks: correct case-by-case argument covering overbidding (no gain), underbidding (can cause a profitable win to be forgone), and truthful bidding (wins exactly when profitable) — 1 mark per case correctly argued\n- (b) 4 marks: correctly sets up expected payoff (v−b)×Pr(win) with Pr(win) = Pr(rival's value < b/α) = (b/α)/2 (1 mark); correctly differentiates and solves FOC to get b* = v/2 (2 marks); correctly notes consistency requires α = 1/2 regardless of the upper bound H = 2, i.e. the equilibrium strategy is scale-invariant (1 mark)\n- (c) 3 marks: correctly recognises that with 2 bidders the second-highest value equals the minimum of the two draws (1 mark); correctly computes E[min(v₁,v₂)] = H/3 = 2/3 for H = 2, via direct integration or the standard order-statistic formula (2 marks)\n- (d) 3 marks: correctly computes expected payment conditional on winning as v²/(2H) or equivalent (1 mark); correctly integrates over v to get expected revenue = H/3 = 2/3 (1 mark); explicitly confirms this equals the answer from (c) as required by revenue equivalence (1 mark)\n- (e) 3 marks: correctly states the ticket goes to the volunteer with the highest report (1 mark); correctly states the winner pays the second-highest of the three reports, i.e. the externality imposed on the runner-up (1 mark); correctly notes losing volunteers pay nothing (their absence would not change the allocation) and that this VCG outcome is exactly a second-price (Vickrey) auction among the three volunteers (1 mark)`,
      exampleTopics: [
        'The three-case dominance proof for truthful bidding in second-price auctions',
        'Guess-and-verify method for solving for a linear Bayes-Nash equilibrium bidding strategy',
        'Order statistics (expected value of the minimum/maximum of iid draws) applied to auction revenue',
        'Direct verification of the Revenue Equivalence Theorem by computing both sides independently',
        'The VCG/Clarke pivot mechanism and its reduction to a second-price auction for single-item allocation',
      ],
    },
  },
]
