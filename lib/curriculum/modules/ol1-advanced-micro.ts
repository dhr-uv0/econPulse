import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ol1-advanced-micro',
  title: 'Advanced Microeconomic Theory',
  description: 'Build the formal analytical toolkit required for olympiad-level micro: optimisation, welfare theory, and market design.',
  tier: 'OLYMPIAD' as const,
  track: 'OLYMPIAD' as const,
  unit: 1,
  estimatedHours: 5,
  color: '#ef4444',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  {
    id: 'ol1-l1',
    moduleId: 'ol1-advanced-micro',
    title: 'Consumer Theory — Utility Maximisation and Indifference Curves',
    description: 'Derive indifference curves and budget constraints; find the utility-maximising bundle using the tangency condition; connect to demand curves via the price-consumption path.',
    order: 1,
    estimatedMinutes: 50,
    tags: ['olympiad', 'indifference-curves', 'budget-constraint', 'utility-maximisation'],
    flashcards: [
      {
        id: 'fc-ol1-l1-1',
        front: 'What does an indifference curve represent, and why does it slope downward?',
        back: 'An indifference curve is the locus of all consumption bundles that yield the same level of utility. It slopes downward because reducing one good requires adding more of the other to maintain constant utility — reflecting positive marginal utilities for both goods.',
        tags: ['olympiad', 'indifference-curves'],
      },
      {
        id: 'fc-ol1-l1-2',
        front: 'State the utility-maximising tangency condition and explain its intuition.',
        back: 'Utility is maximised where MRS = Px/Py, i.e., the slope of the indifference curve equals the slope of the budget constraint. Intuitively, the subjective rate at which the consumer is willing to trade one good for another (MRS) equals the rate at which the market allows the trade (the price ratio).',
        tags: ['olympiad', 'utility-maximisation'],
      },
      {
        id: 'fc-ol1-l1-3',
        front: 'How is the ordinary demand curve derived from the price-consumption path?',
        back: 'Holding income and the price of Y constant, lower Px rotates the budget line outward along the X-axis. Each new optimum traces the price-consumption path. Plotting each (Px, Q*x) pair in price-quantity space yields the Marshallian demand curve for good X.',
        tags: ['olympiad', 'budget-constraint', 'utility-maximisation'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l1-1',
        type: 'mcq',
        question: 'A consumer maximises utility subject to a budget constraint. If MRS of X for Y equals 3 while the price ratio Px/Py equals 2, the consumer should:',
        options: [
          'Buy more X and less Y, because they value X more than the market requires',
          'Buy more Y and less X, because the market price of X is too high relative to MRS',
          'Stay at the current bundle, as MRS ≠ Px/Py is impossible at a maximum',
          'Buy more of both goods until the budget constraint binds',
        ],
        correctAnswer: 0,
        explanation: 'MRS = 3 means the consumer would sacrifice 3 units of Y for 1 unit of X. The market only requires giving up 2 units of Y to get 1 unit of X (Px/Py = 2). Since the marginal benefit exceeds the market cost, the consumer gains utility by buying more X (and less Y) until MRS falls to equal the price ratio at the new optimum.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l1-2',
        type: 'mcq',
        question: 'Which of the following correctly explains why indifference curves cannot intersect?',
        options: [
          'Intersecting curves would violate the assumption that more is always preferred to less, creating a logical contradiction with the transitivity of preferences',
          'Intersecting curves would imply that the budget constraint has two slopes simultaneously',
          'Intersecting curves would cause the price-consumption path to bend backward',
          'Intersecting curves would make marginal utility negative for at least one good',
        ],
        correctAnswer: 0,
        explanation: 'If two indifference curves crossed at bundle A, a bundle B on the higher curve and a bundle C on the lower curve — both indifferent to A — would, by transitivity, be indifferent to each other. But B lies on a higher curve, implying it is strictly preferred to C. This contradiction proves intersection is impossible under well-behaved (transitive) preferences.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Consumer theory formalises how a rational agent allocates a limited income across goods to achieve the highest attainable utility. An indifference curve depicts all bundles (X, Y) between which the consumer is indifferent; higher curves represent higher utility levels. Key properties — negative slope, convexity, and non-intersection — follow directly from the axioms of completeness, transitivity, and strict monotonicity. The marginal rate of substitution (MRS) at any point measures the consumer's willingness to exchange one good for another: MRS = MUx / MUy, which is also the absolute slope of the indifference curve. Convexity implies MRS diminishes as the consumer moves along the curve, reflecting a preference for balanced bundles over extreme ones. The budget constraint, Px·X + Py·Y = I, is a linear frontier whose slope is −Px/Py, determined entirely by market prices. Together, these tools set up the constrained optimisation problem that underpins all of demand theory.

The utility-maximising bundle lies at the tangency of the highest reachable indifference curve with the budget constraint, where MRS = Px/Py. This interior solution can also be derived algebraically as MUx/Px = MUy/Py — the equalisation of marginal utility per pound spent across all goods, a condition sometimes called the "equimarginal principle." When the price of X changes, the budget line pivots and the consumer re-optimises; connecting successive optima traces the price-consumption path. Projecting these equilibria onto a (Px, Qx) diagram yields the ordinary (Marshallian) demand curve, which embeds both income and substitution effects. Olympiad questions routinely require candidates to solve for optimal bundles analytically (e.g., given Cobb-Douglas utility U = X^a·Y^b), interpret corner solutions, and rigorously distinguish the demand effects of price changes, income changes, and shifts in preferences.`,
      prerequisiteRecap: `Foundation-level microeconomics established that demand curves slope downward and that consumers respond to price signals. This module formalises those intuitions: we now derive demand curves from first principles using utility functions and budget constraints, applying the Lagrangian optimisation framework to characterise interior solutions rigorously.`,
    },
  },
  {
    id: 'ol1-l2',
    moduleId: 'ol1-advanced-micro',
    title: 'Income and Substitution Effects',
    description: 'Decompose a price change into income and substitution effects using Slutsky decomposition; explain Giffen goods rigorously.',
    order: 2,
    estimatedMinutes: 45,
    tags: ['olympiad', 'Slutsky', 'income-effect', 'substitution-effect'],
    flashcards: [
      {
        id: 'fc-ol1-l2-1',
        front: 'Describe the Slutsky decomposition of a price change.',
        back: 'A price fall in good X is split into: (1) the substitution effect — the movement along the original indifference curve to the bundle that minimises expenditure at new prices, which always increases demand for X; and (2) the income effect — the shift to the new indifference curve reflecting the gain in real purchasing power, which increases demand for X if X is a normal good.',
        tags: ['olympiad', 'Slutsky'],
      },
      {
        id: 'fc-ol1-l2-2',
        front: 'What is a Giffen good, and why does its demand curve slope upward?',
        back: 'A Giffen good is a strongly inferior good for which the negative income effect of a price rise outweighs the substitution effect, causing quantity demanded to fall when price falls (or rise when price rises). The demand curve is positively sloped. Empirical examples are rare; the classic case is the Irish potato during the famine.',
        tags: ['olympiad', 'income-effect'],
      },
      {
        id: 'fc-ol1-l2-3',
        front: 'What is the Hicksian (compensated) demand curve, and how does it differ from the Marshallian curve?',
        back: 'The Hicksian demand curve holds utility constant (rather than income), isolating the pure substitution effect. It is always downward-sloping, while the Marshallian curve can slope upward for Giffen goods. The gap between them at any price reflects the income effect.',
        tags: ['olympiad', 'substitution-effect'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l2-1',
        type: 'mcq',
        question: 'Good X is an inferior good. When the price of X falls, which of the following statements about the income and substitution effects is correct?',
        options: [
          'The substitution effect increases demand for X; the income effect decreases demand for X; total effect depends on magnitudes',
          'Both the substitution effect and the income effect increase demand for X',
          'The substitution effect decreases demand for X; the income effect increases demand for X',
          'Both effects decrease demand for X, so X must be a Giffen good',
        ],
        correctAnswer: 0,
        explanation: 'The substitution effect always increases demand for the good whose price has fallen (movement along the indifference curve toward the now-cheaper good). For an inferior good, the income effect works in the opposite direction: the fall in price raises real income, but higher real income reduces consumption of an inferior good. If the income effect dominates the substitution effect, X is a Giffen good and demand actually falls despite the price cut.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l2-2',
        type: 'mcq',
        question: 'In the Slutsky decomposition, the "compensated budget line" used to isolate the substitution effect is drawn to:',
        options: [
          'Pass through the original optimal bundle at the new price ratio',
          'Pass through the new optimal bundle at the original price ratio',
          'Maintain the same nominal income as the original budget line at the new prices',
          'Represent the average of the original and new budget lines',
        ],
        correctAnswer: 0,
        explanation: 'The Slutsky compensated budget line has the slope of the new price ratio (reflecting the actual price change) but is shifted in or out until it passes through the original optimal bundle. This ensures the consumer can just afford the original bundle at the new prices, so any movement away from it reflects pure substitution — not a change in real purchasing power.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `When the price of a good changes, the total effect on quantity demanded is a composite of two conceptually distinct forces. The substitution effect captures the change in consumption that would occur if the consumer were "compensated" to remain on the original indifference curve while facing the new price ratio — it measures the pure relative-price incentive and always pushes demand in the direction opposite to the price change (substitution effect is always negative for a price increase). The income effect captures the additional change arising from the shift in real purchasing power: a price fall increases real income, raising demand for normal goods and reducing demand for inferior goods. The Slutsky decomposition makes this split precise by constructing a hypothetical compensated budget line — drawn with the new price ratio but pivoted to intersect the original optimal bundle — and reading off the substitution effect as the move to the new tangency on the same indifference curve, then the income effect as the subsequent parallel shift to the actual new budget line.

The taxonomy of goods follows from the signs and magnitudes of these effects. Normal goods have positive income effects reinforcing the substitution effect, yielding unambiguously downward-sloping demand curves. Inferior goods have negative income effects that partially offset the substitution effect; demand still typically falls with price, but by less than for a normal good. Giffen goods, a special and empirically rare subclass of inferior goods, have income effects so large and negative that they overwhelm the substitution effect — demand perversely falls when price falls. Olympiad candidates must be able to illustrate all three cases on indifference-curve diagrams, derive each effect algebraically for simple utility functions, and interpret the Slutsky equation ∂x/∂p = ∂x^h/∂p − x·(∂x/∂I), where the first term on the right is the compensated (Hicksian) substitution effect and the second is the income effect weighted by initial consumption.`,
    },
  },
  {
    id: 'ol1-l3',
    moduleId: 'ol1-advanced-micro',
    title: 'Producer Theory — Isoquants and Cost Minimisation',
    description: 'Derive isoquants and isocosts; apply the least-cost input combination rule (MRTS=w/r); connect to cost functions.',
    order: 3,
    estimatedMinutes: 45,
    tags: ['olympiad', 'isoquants', 'MRTS', 'cost-minimisation'],
    flashcards: [
      {
        id: 'fc-ol1-l3-1',
        front: 'What is the marginal rate of technical substitution (MRTS) and how is it computed?',
        back: 'MRTS_LK is the rate at which labour can be substituted for capital while holding output constant: MRTS_LK = MPL/MPK = −(ΔK/ΔL) along an isoquant. It equals the slope of the isoquant and diminishes as more labour and less capital is used, reflecting diminishing marginal returns to each factor.',
        tags: ['olympiad', 'MRTS'],
      },
      {
        id: 'fc-ol1-l3-2',
        front: 'State the cost-minimisation condition and its economic interpretation.',
        back: 'Cost is minimised where MRTS_LK = w/r, or equivalently MPL/w = MPK/r. The firm equates the rate at which inputs can technically be substituted (MRTS) with the rate at which the market allows substitution (the input price ratio). Equivalently, a pound spent on each input yields the same marginal product.',
        tags: ['olympiad', 'cost-minimisation'],
      },
      {
        id: 'fc-ol1-l3-3',
        front: 'How does the expansion path relate isoquants to the long-run cost function?',
        back: 'The expansion path connects all cost-minimising input combinations as output varies (with input prices held constant). For a Cobb-Douglas technology it is a ray from the origin. Mapping each output level to its minimum cost along the expansion path generates the long-run total cost function C(Q, w, r).',
        tags: ['olympiad', 'isoquants', 'cost-minimisation'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l3-1',
        type: 'mcq',
        question: 'A firm uses labour (L) and capital (K). At its current input mix, MPL = 20 and MPK = 10 while w = $5 and r = $8. To minimise cost for the same output, the firm should:',
        options: [
          'Hire more labour and use less capital, since labour delivers more marginal product per dollar spent',
          'Hire more capital and use less labour, since capital is relatively more productive per dollar',
          'Keep the same input mix; the firm is already at the cost-minimising bundle',
          'Reduce both inputs proportionally to lower total expenditure',
        ],
        correctAnswer: 0,
        explanation: 'Compare marginal product per dollar: MPL/w = 20/5 = 4, MPK/r = 10/8 = 1.25. The last dollar on labour yields 4 units of output vs 1.25 for capital. The firm should substitute labour for capital until MPL/w = MPK/r — i.e., MRTS = w/r. As labour increases MPL falls and as capital decreases MPK rises, restoring the equality.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l3-2',
        type: 'mcq',
        question: 'Which of the following correctly distinguishes an isoquant from an indifference curve?',
        options: [
          'An isoquant has a cardinal level attached to it (units of output), whereas an indifference curve has only an ordinal ranking',
          'Isoquants slope upward while indifference curves slope downward',
          'Indifference curves cannot cross but isoquants can cross without contradiction',
          'An isoquant represents the set of output levels achievable from a given input bundle',
        ],
        correctAnswer: 0,
        explanation: 'Output is measured in physical units (cars, tonnes of wheat), so isoquants carry cardinal labels — the Q = 100 isoquant is literally 100 units of output more than the Q = 0 isoquant. Utility is ordinal; we can only say a higher indifference curve is preferred, not by how much. Both curves are convex and non-intersecting (crossing isoquants would imply the same input combination produces two different output levels, contradicting the production function).',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Producer theory parallels consumer theory: instead of maximising utility subject to a budget constraint, the firm minimises cost subject to a production constraint. An isoquant depicts all combinations of labour (L) and capital (K) that produce a given quantity of output Q according to the production function F(L, K) = Q. Isoquants share the convexity and non-intersection properties of indifference curves, with convexity reflecting diminishing MRTS — as the firm substitutes ever more labour for capital, each additional unit of labour becomes progressively less capable of replacing capital. The MRTS at any point equals MPL/MPK, the ratio of marginal products, which is also the absolute slope of the isoquant. The isocost line, analogous to the budget constraint, shows all (L, K) combinations achievable at total cost C: wL + rK = C, with slope −w/r. The firm minimises cost for a target output Q by finding the isocost tangent to that isoquant, yielding the condition MRTS = w/r.

This optimality condition — equivalently written MPL/w = MPK/r — ensures the marginal product per unit of expenditure is equalised across inputs. If MPL/w > MPK/r, the firm gets more output per dollar from labour than capital and should reallocate expenditure toward labour, reducing MPL and raising MPK until equality is restored. Tracing cost-minimising (L*, K*) pairs as output Q varies, with factor prices held constant, generates the expansion path. For homothetic production functions (including Cobb-Douglas Q = L^α·K^β), the expansion path is a straight ray through the origin, implying constant factor proportions regardless of scale. Substituting the conditional factor demands L*(Q, w, r) and K*(Q, w, r) back into the cost equation yields the long-run total cost function C(Q, w, r), from which all cost curves (MC, AC, etc.) are derived — linking producer theory firmly to the cost analysis used in market equilibrium models.`,
    },
  },
  {
    id: 'ol1-l4',
    moduleId: 'ol1-advanced-micro',
    title: 'General Equilibrium and Edgeworth Box',
    description: 'Use the Edgeworth box to show exchange equilibrium; define Pareto efficiency; derive the contract curve; introduce the First Welfare Theorem.',
    order: 4,
    estimatedMinutes: 50,
    tags: ['olympiad', 'Edgeworth-box', 'Pareto-efficiency', 'contract-curve'],
    flashcards: [
      {
        id: 'fc-ol1-l4-1',
        front: 'What does the Edgeworth box represent, and how are the two agents\' endowments depicted?',
        back: 'The Edgeworth box plots all feasible allocations of two goods (X, Y) between two agents (A, B). Its width is the total endowment of X and its height the total endowment of Y. Agent A\'s preferences are measured from the bottom-left origin; agent B\'s from the top-right origin. The initial endowment is a single point inside the box.',
        tags: ['olympiad', 'Edgeworth-box'],
      },
      {
        id: 'fc-ol1-l4-2',
        front: 'Define Pareto efficiency and explain when an allocation inside the Edgeworth box is Pareto efficient.',
        back: 'An allocation is Pareto efficient if there is no reallocation that makes at least one agent better off without making any agent worse off. In the Edgeworth box, Pareto efficiency requires MRS_A = MRS_B — the two indifference curves are tangent. Any allocation where indifference curves cross is inefficient, as moves into the lens-shaped region improve both agents.',
        tags: ['olympiad', 'Pareto-efficiency'],
      },
      {
        id: 'fc-ol1-l4-3',
        front: 'State the First Welfare Theorem.',
        back: 'Any competitive equilibrium allocation — where agents optimise and markets clear — is Pareto efficient. This underpins the case for markets: the price mechanism decentralises information and incentives such that the resulting allocation cannot be improved upon without harming someone, provided markets are complete and competitive.',
        tags: ['olympiad', 'contract-curve'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l4-1',
        type: 'mcq',
        question: 'In an Edgeworth box, at an allocation where agent A\'s MRS of X for Y equals 2 and agent B\'s MRS equals 5, which of the following is true?',
        options: [
          'The allocation is Pareto inefficient; both agents can be made better off by transferring X from B to A and Y from A to B',
          'The allocation is Pareto efficient because both agents face positive MRS values',
          'The allocation is Pareto inefficient; only agent B can be made better off without harming A',
          'The allocation is Pareto efficient because MRS values differ, ensuring specialisation gains',
        ],
        correctAnswer: 0,
        explanation: 'Pareto efficiency requires MRS_A = MRS_B. Here MRS_A = 2 and MRS_B = 5, so the indifference curves cross and there is a lens-shaped region of mutually beneficial trades. Agent A values one unit of X at 2 units of Y; agent B values one unit of X at 5 units of Y. Trading X from B to A (and Y from A to B) can make both better off. The allocation is inefficient.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l4-2',
        type: 'mcq',
        question: 'The contract curve in an Edgeworth box is best described as:',
        options: [
          'The locus of all Pareto-efficient allocations where MRS_A = MRS_B, running from one agent\'s origin to the other',
          'The set of all allocations that improve upon the initial endowment for both agents',
          'The single allocation that maximises total social welfare',
          'The budget constraint faced by both agents when markets open',
        ],
        correctAnswer: 0,
        explanation: 'The contract curve (or Pareto set) connects all allocations at which the two indifference curves are tangent — i.e., MRS_A = MRS_B — and runs from agent A\'s origin (A has nothing) to agent B\'s origin (B has nothing). All points on it are Pareto efficient; off it, mutually beneficial trades exist. The core (relevant for voluntary exchange) is the subset of the contract curve that makes both agents at least as well off as their initial endowment.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The Edgeworth box is the workhorse diagram of general equilibrium exchange theory. Constructed by superimposing two agents' indifference-curve maps — agent A's measured from the southwest corner, agent B's rotated 180° from the northeast corner — every interior point simultaneously depicts a complete allocation of both goods to both agents. The dimensions of the box are fixed by the total endowments: width = X_A + X_B and height = Y_A + Y_B. At any allocation where the two agents' indifference curves cross (MRS_A ≠ MRS_B), there exists a lens-shaped region of allocations that both agents strictly prefer — meaning the original allocation is Pareto inefficient. The contract curve, or Pareto set, is the locus of all tangency points (MRS_A = MRS_B) and represents the frontier of efficient exchange. Moving from the initial endowment to any point on the contract curve within the "core" — the portion of the contract curve preferred by both agents to autarky — is a Pareto improvement.

The competitive equilibrium of this exchange economy is found by choosing a price ratio Px/Py such that both agents optimise (each sets MRS = Px/Py) and markets clear (excess demand for each good equals zero). The equilibrium lies on the contract curve, at the point where both agents' budget lines through the endowment are tangent to their respective indifference curves. The First Welfare Theorem then asserts that this outcome is Pareto efficient — a powerful result justifying competitive markets as an efficient decentralised mechanism. Olympiad questions frequently ask students to identify efficient and inefficient allocations, locate the core, find competitive equilibrium prices, and explain the intuition behind the First Welfare Theorem, including the assumption failures (externalities, public goods, incomplete markets) that cause market failure.`,
    },
  },
  {
    id: 'ol1-l5',
    moduleId: 'ol1-advanced-micro',
    title: "Welfare Economics — Second Welfare Theorem and Arrow's Theorem",
    description: "State the Second Welfare Theorem; introduce social welfare functions; explain Arrow's impossibility theorem and its implications.",
    order: 5,
    estimatedMinutes: 45,
    tags: ['olympiad', 'Second-Welfare-Theorem', 'Arrow', 'social-welfare'],
    flashcards: [
      {
        id: 'fc-ol1-l5-1',
        front: 'State the Second Welfare Theorem and explain why it matters for policy.',
        back: 'Any Pareto-efficient allocation can be sustained as a competitive equilibrium after an appropriate lump-sum redistribution of endowments. This separates the efficiency question (leave it to markets) from the equity question (redistribute endowments, then let markets operate). It justifies using lump-sum transfers rather than distortionary taxes to achieve distributional goals.',
        tags: ['olympiad', 'Second-Welfare-Theorem'],
      },
      {
        id: 'fc-ol1-l5-2',
        front: "State Arrow's Impossibility Theorem and its four conditions.",
        back: "Arrow's theorem: no social welfare function simultaneously satisfies (1) unrestricted domain — works for all preference profiles; (2) Pareto efficiency — if everyone prefers A to B, so does society; (3) independence of irrelevant alternatives — social ranking of A vs B depends only on individual rankings of A vs B; and (4) non-dictatorship — no single agent's ranking always dictates society's. Any aggregation rule satisfying the first three conditions must be a dictatorship.",
        tags: ['olympiad', 'Arrow'],
      },
      {
        id: 'fc-ol1-l5-3',
        front: 'What is a social welfare function, and how do Rawlsian and utilitarian functions differ?',
        back: 'A social welfare function W(u_1, …, u_n) aggregates individual utilities into a social ordering. Utilitarianism: W = Σu_i — maximises total utility, indifferent to distribution. Rawlsian: W = min(u_i) — maximises the utility of the worst-off individual, strongly egalitarian. Both are special cases of the isoelastic family W = Σu_i^(1−ε)/(1−ε).',
        tags: ['olympiad', 'social-welfare'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l5-1',
        type: 'mcq',
        question: 'The Second Welfare Theorem implies that a government wishing to achieve a more equal distribution of welfare should, in theory:',
        options: [
          'Redistribute initial endowments (wealth) via lump-sum transfers and then allow competitive markets to operate, achieving both efficiency and the desired equity outcome',
          'Impose price controls to cap prices of essential goods, directly improving welfare for low-income households',
          'Nationalise industries to remove the profit motive and redirect surplus to social goals',
          'Use progressive income taxes on labour income to fund universal basic income, accepting the efficiency cost',
        ],
        correctAnswer: 0,
        explanation: 'The Second Welfare Theorem separates efficiency from equity: any desired Pareto-efficient allocation can be achieved by first redistributing endowments (lump-sum) and then letting competitive markets operate. Lump-sum transfers do not distort prices or incentives, preserving efficiency. Price controls, taxes on earned income, and nationalisation all introduce distortions (deadweight loss) that violate Pareto efficiency.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l5-2',
        type: 'mcq',
        question: "Which of Arrow's conditions does majority voting violate when applied to three or more alternatives, as illustrated by the Condorcet paradox?",
        options: [
          'Transitivity (a component of unrestricted domain / rational social ordering) — majority voting can produce cyclical preferences with no stable winner',
          'Pareto efficiency — majority voting can select an option all voters rank below another',
          'Non-dictatorship — the median voter always dictates the social outcome',
          'Independence of irrelevant alternatives — removing a losing option changes the winner',
        ],
        correctAnswer: 0,
        explanation: "The Condorcet paradox shows three voters (A prefers X>Y>Z, B prefers Y>Z>X, C prefers Z>X>Y) produce cycles: X beats Y by majority, Y beats Z by majority, yet Z beats X by majority. The social preference relation is intransitive — it cycles — violating the requirement that society's ranking be a transitive ordering (rational social choice). This is a violation of the requirement for a well-defined social welfare ordering, which Arrow terms part of the unrestricted domain / rationality condition.",
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Welfare economics asks not just whether an allocation is efficient, but whether it is desirable. The Second Welfare Theorem extends the First by showing that efficiency and equity are separable: every point on the Pareto frontier can be decentralised as a competitive equilibrium after suitably redistributing initial endowments. Practically, this means governments do not need to replace markets to achieve distributional goals — they need only adjust the starting positions (via lump-sum wealth taxes or transfers) and let the price mechanism do the rest. The power of the theorem rests on convexity assumptions; without convex preferences and technologies, the result may fail. Its normative implication — that distortionary interventions such as commodity taxes or price controls are second-best instruments when lump-sum redistribution is feasible — is a cornerstone of optimal tax theory.

To rank Pareto-efficient allocations, economists invoke social welfare functions (SWFs) that aggregate individual utilities into a social ordering. The utilitarian SWF (W = Σuᵢ) is indifferent to distribution and maximises total utility; the Rawlsian SWF (W = min{uᵢ}) gives absolute priority to the worst-off individual. Arrow's impossibility theorem demonstrates a more fundamental limit: no SWF defined over individual ordinal preferences can simultaneously satisfy unrestricted domain, Pareto efficiency, independence of irrelevant alternatives, and non-dictatorship. The theorem does not say good collective decisions are impossible — it says no aggregation rule satisfying these four axioms exists for all possible preference profiles. Relaxing any one axiom (e.g., restricting to single-peaked preferences, or allowing cardinal utility comparisons) escapes the impossibility, providing rich ground for olympiad-level discussion of voting systems, mechanism design, and the philosophical foundations of social choice.`,
    },
  },
  {
    id: 'ol1-l6',
    moduleId: 'ol1-advanced-micro',
    title: 'Market Design and Matching Theory',
    description: 'Introduce two-sided matching, the Gale-Shapley algorithm, stability, and real-world applications in medical residency and school choice.',
    order: 6,
    estimatedMinutes: 40,
    tags: ['olympiad', 'matching', 'Gale-Shapley', 'stability'],
    flashcards: [
      {
        id: 'fc-ol1-l6-1',
        front: 'Define a stable matching and explain why instability is problematic.',
        back: 'A matching is stable if there is no blocking pair — two agents not matched to each other who both prefer each other over their current partners. Instability is problematic because a blocking pair has a mutual incentive to defect from the proposed matching, causing it to unravel. Real markets without stable clearinghouses often degenerate into informal deals and unravelling.',
        tags: ['olympiad', 'matching', 'stability'],
      },
      {
        id: 'fc-ol1-l6-2',
        front: 'Describe the Gale-Shapley (deferred acceptance) algorithm and whose side it favours.',
        back: 'In the men-propose version: each man proposes to his top-ranked woman; each woman tentatively holds her best offer and rejects the rest; rejected men propose to their next choice; repeat until no rejections occur. The algorithm always terminates in a stable matching. It is optimal for the proposing side (men get their best stable partner) and pessimal for the receiving side.',
        tags: ['olympiad', 'Gale-Shapley'],
      },
      {
        id: 'fc-ol1-l6-3',
        front: 'Give two real-world applications of the Gale-Shapley algorithm.',
        back: '(1) National Resident Matching Program (NRMP): US medical graduates are matched to hospital residency programs; hospitals propose to residents in the current design. (2) NYC and Boston school choice: students are matched to public schools using a student-proposing deferred acceptance algorithm, replacing the old Boston mechanism which was manipulable.',
        tags: ['olympiad', 'Gale-Shapley', 'matching'],
      },
    ],
    quiz: [
      {
        id: 'q-ol1-l6-1',
        type: 'mcq',
        question: 'In a two-sided matching market with men proposing, the Gale-Shapley algorithm produces a matching that is:',
        options: [
          'Men-optimal and women-pessimal stable matching — each man is matched to his best stable partner and each woman to her worst stable partner',
          'Women-optimal and men-pessimal stable matching — receiving side benefits from deferred acceptance',
          'The unique stable matching — all stable matchings are identical in any market',
          'Pareto-efficient for all participants regardless of which side proposes',
        ],
        correctAnswer: 0,
        explanation: "When men propose, Gale-Shapley yields the men-optimal stable matching: every man receives the best partner he could receive in any stable matching. Conversely, every woman receives the worst partner she could receive in any stable matching (women-pessimal). This asymmetry is a key theoretical result. Switching to women-proposing inverts the advantage. The algorithm does not generally produce a Pareto-efficient outcome across all participants — it is only optimal for the proposing side among all stable matchings.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'q-ol1-l6-2',
        type: 'mcq',
        question: 'Which of the following best explains why the "Boston mechanism" for school choice was replaced by deferred acceptance in many cities?',
        options: [
          'The Boston mechanism was not strategy-proof — families who listed their true first choice and did not get it lost priority at their second choice, incentivising strategic misrepresentation of preferences',
          'The Boston mechanism produced unstable matchings in which schools and students had mutual incentives to defect',
          'The Boston mechanism violated Pareto efficiency because some students were unmatched even when seats were available',
          'Deferred acceptance produces a school-optimal matching, which is more desirable than a student-optimal matching',
        ],
        correctAnswer: 0,
        explanation: 'Under the Boston mechanism, a student who listed their true first-choice school but was not accepted lost priority at their second-choice school to students who strategically listed it first. Sophisticated families with knowledge of this gamed the system, while naive families played truthfully and were disadvantaged. The mechanism was not strategy-proof (truthful reporting was not a dominant strategy). Deferred acceptance with student-proposing is strategy-proof for students — reporting true preferences is a weakly dominant strategy — making it fairer and more transparent.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Market design applies economic theory to engineer markets and institutions that perform well. Two-sided matching markets — where agents on both sides have preferences over agents on the other side, and prices do not clear the market — arise in medical residency assignment, school admissions, and job markets. A matching is a set of paired assignments between the two sides. The central concept is stability: a matching is stable if no blocking pair exists — two agents who are not matched to each other but who both prefer each other over their current assignments. Unstable matchings are self-defeating because blocking pairs have mutual incentives to circumvent the allocation. Gale and Shapley (1962) proved that stable matchings always exist in two-sided markets and provided a constructive algorithm — deferred acceptance — that finds one. In the proposer-optimal version, agents on the proposing side make offers to their most preferred available partner; recipients tentatively hold their best offer and reject the rest; rejected proposers move to their next choice; this continues until no rejections occur. The result is the unique stable matching most preferred by the proposing side.

The algorithm's strategic properties are as important as its stability guarantee. Deferred acceptance with proposer-side proposing is strategy-proof for proposers — reporting true preferences is a weakly dominant strategy, because there is never an incentive to misrepresent one's ranking. Receivers, however, may benefit from strategic misrepresentation. These insights, developed by Roth and colleagues, transformed market design into a policy tool. The US National Resident Matching Program was restructured using these insights after economists showed the original algorithm produced an unstable matching. Boston and New York City replaced their manipulable school-choice mechanisms with student-proposing deferred acceptance. Olympiad problems test whether candidates can apply the algorithm step by step, identify blocking pairs, determine which side benefits from which version, and reason about strategy-proofness.`,
    },
  },
]
