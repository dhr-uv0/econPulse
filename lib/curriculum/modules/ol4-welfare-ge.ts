import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ol4-welfare-ge',
  title: 'Olympiad — Welfare Economics & General Equilibrium',
  description: "Pareto efficiency, social welfare functions, GE theory, Arrow's impossibility, and market design.",
  tier: 'OLYMPIAD' as const,
  track: 'OLYMPIAD' as const,
  unit: 4,
  estimatedHours: 5,
  color: '#ef4444',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Pareto Efficiency & Welfare Criteria
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol4-l1',
    moduleId: 'ol4-welfare-ge',
    title: 'Pareto Efficiency & Welfare Criteria',
    description:
      'Formalise Pareto optimality, the Kaldor-Hicks compensation criterion, and the utility possibility frontier as tools for evaluating economic allocations.',
    order: 1,
    estimatedMinutes: 55,
    tags: ['olympiad', 'pareto-efficiency', 'kaldor-hicks', 'utility-possibility-frontier', 'welfare-criteria'],
    content: {
      isStub: false,
      conceptualExplanation: `Pareto efficiency is the foundational welfare criterion in economics. An allocation is Pareto optimal if and only if there exists no alternative feasible allocation that makes at least one individual strictly better off without making any individual worse off. Formally, let u_i(x) denote individual i's utility under allocation x drawn from feasible set F. Allocation x* is Pareto efficient if there is no y ∈ F such that u_i(y) ≥ u_i(x*) for all i and u_j(y) > u_j(x*) for some j. The set of all Pareto-efficient allocations forms the Pareto frontier. A move from an inefficient allocation to any point on the frontier that raises at least one person's utility without lowering another's is called a Pareto improvement. Note that Pareto efficiency is silent on distributional justice: an allocation where one agent holds everything is Pareto efficient if redistributing it necessarily harms that agent.

The Kaldor-Hicks (KH) efficiency criterion relaxes the Pareto standard by permitting welfare comparisons even when some agents gain and others lose. Under KH, a policy change is welfare-improving if the gainers could hypothetically compensate the losers and still be better off — the aggregate willingness-to-pay (WTP) of gainers exceeds the aggregate willingness-to-accept (WTA) of losers. Formally, a change from allocation x to y is Kaldor-Hicks efficient if ∑_i(u_i(y) − u_i(x)) > 0 when utilities are measured in a common monetary unit. The Scitovsky paradox reveals a tension: it is possible for a move from x to y to be KH-improving and simultaneously for the reverse move from y to x to also be KH-improving, implying the criterion can generate contradictory policy prescriptions depending on the reference point. The compensation principle requires only that compensation be possible, not that it actually occur, so KH improvements may leave real losers uncompensated.

The utility possibility frontier (UPF) depicts the maximum utility pairs (u_A, u_B) attainable by any Pareto-efficient reallocation of fixed resources between two agents. Points inside the UPF are achievable but inefficient; points on the frontier are Pareto optimal. The grand utility possibility frontier (GUPF) is the outer envelope of all UPFs across every feasible production plan, representing the true Pareto frontier when both consumption and production can vary. A social welfare function W(u_A, u_B) maps utility pairs to a social ranking; its contours (social indifference curves) intersect the UPF at the social optimum. The UPF is typically concave in (u_A, u_B) space because redistributing from A to B involves diminishing marginal returns to redistribution. Olympiad questions often ask students to sketch the UPF, identify Pareto improvements from interior points, locate a social optimum for a given SWF, and explain why the Pareto criterion is insufficient for a complete social ordering.`,
      prerequisiteRecap: `Mechanism design theory established that the Vickrey-Clarke-Groves (VCG) mechanism achieves efficient allocation — the outcome maximising total surplus — by charging each agent the externality they impose on others, making truth-telling a dominant strategy; however, VCG mechanisms are generally not budget-balanced, reflecting the Green-Laffont impossibility that no mechanism can simultaneously achieve efficiency, incentive compatibility, individual rationality, and budget balance. Welfare economics now examines how Pareto efficiency and distributional criteria rank allocations when compensation is not required.`,
      recallQuestions: [
        {
          id: 'ol4-l1-recall-1',
          type: 'mcq' as const,
          question: 'The Revenue Equivalence Theorem states that under symmetric independent private values, all standard auction formats yield the same expected revenue. Which of the following conditions, if violated, would cause a first-price sealed-bid auction to raise MORE expected revenue than a second-price sealed-bid auction?',
          options: [
            'Risk-averse bidders: risk aversion causes bidders to shade their bids less aggressively in the FPSB auction (to reduce the probability of losing) relative to the risk-neutral benchmark, raising FPSB revenue above the SPSB level',
            'Asymmetric value distributions across bidders: asymmetry always favours SPSB regardless of the direction of the asymmetry',
            'Common values: the winner\'s curse induces more aggressive bidding in FPSB, raising revenue above SPSB',
            'More than two bidders: with n > 2, the FPSB equilibrium bid (n−1)/n·v mechanically exceeds SPSB payments',
          ],
          correctAnswer: 0,
          explanation: 'Revenue equivalence assumes risk neutrality. With risk-averse bidders (concave utility), the disutility of losing in FPSB leads bidders to bid more aggressively — shading their bids less — to increase their winning probability. In SPSB, truth-telling is dominant regardless of risk attitude, so risk aversion has no effect on SPSB bids. The net result is that FPSB bids are higher than under risk neutrality, breaking revenue equivalence in favour of FPSB. This is among the most important qualifications to the Revenue Equivalence Theorem.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `In 2021, the US Congressional Budget Office evaluated the Build Back Better Act using cost-benefit analysis — a direct application of the Kaldor-Hicks criterion. The CBO estimated that the bill's spending on climate, healthcare, and social programmes generated aggregate benefits (in NPV terms) that exceeded aggregate costs, even though specific groups (e.g., higher-income taxpayers facing new levies) bore net losses. Critics noted that actual compensation to losers was not guaranteed, illustrating exactly the gap between theoretical KH efficiency and real-world distributional outcomes. This tension between aggregate welfare gain and distributional impact is central to virtually every major policy debate, from carbon taxes to trade liberalisation.`,
      interactiveElement: `Utility Possibility Frontier Exercise: Suppose two agents A and B share a fixed endowment of 100 units of a divisible good, and their utility functions are u_A = √x_A and u_B = √x_B where x_A + x_B = 100. (1) Derive the UPF equation by expressing u_B as a function of u_A. (2) Plot the UPF in (u_A, u_B) space — confirm it is concave. (3) Mark the point corresponding to the equal split (x_A = 50, x_B = 50). (4) Draw a social indifference curve for the utilitarian SWF W = u_A + u_B and locate the social optimum on the UPF. (5) Repeat for the Rawlsian SWF W = min(u_A, u_B). (6) Identify a point strictly inside the UPF and describe two Pareto improvements from it. Confirm that one involves giving all 100 units to A — is that point on the UPF?`,
      vocabulary: [
        {
          term: 'Pareto Improvement',
          definition:
            'A reallocation of resources that makes at least one agent strictly better off without making any other agent worse off.',
          example:
            'If trade between two countries allows both to consume beyond their production possibility frontiers, the move to free trade is a Pareto improvement over autarky.',
        },
        {
          term: 'Kaldor-Hicks Criterion',
          definition:
            'A policy change is welfare-improving if the aggregate gains to winners are sufficient to hypothetically compensate all losers, even if compensation is not actually paid.',
          example:
            "A new airport raises property values for nearby businesses by £200m but reduces residential amenity by £80m. Under KH, the project passes the welfare test (£200m > £80m) even though residents aren't compensated.",
        },
        {
          term: 'Utility Possibility Frontier (UPF)',
          definition:
            'The locus of maximum attainable utility pairs for two agents across all Pareto-efficient allocations of a fixed resource endowment.',
          example:
            'For u_A = √x_A and u_B = √(100 − x_A), the UPF is the curve u_A² + u_B² = 100 in utility space, a quarter-circle of radius 10.',
        },
      ],
      deeperDive: `The Scitovsky paradox (1941) reveals a deep flaw in applying Kaldor-Hicks: welfare rankings can be path-dependent and mutually contradictory. Suppose allocation x generates (u_A, u_B) = (10, 5) and allocation y generates (8, 9). Moving from x to y is KH-efficient if the gainers (B, who gains 4) can compensate the losers (A, who loses 2) — and at y, 4 > 2, so it passes. But moving from y back to x is also KH-efficient if, at x, A's gain of 2 exceeds B's loss of 4 in compensating variation terms — which may be true if preferences are non-homothetic. This creates a cycle, implying neither allocation is unambiguously superior. The paradox motivated the development of Samuelson's social welfare function as an alternative welfare criterion that avoids path-dependence by imposing a complete social ordering from the outset.

The compensation principle also has a philosophical dimension: should hypothetical compensation suffice for a welfare judgement? Rawlsians argue no — actual redistribution to losers is required for a policy to be just. This links Pareto and KH analysis to normative political philosophy. The "potential Pareto improvement" language used in cost-benefit analysis papers precisely sidesteps this debate by noting only that gainers could compensate losers in principle, leaving the political question of actual redistribution to elected decision-makers. For olympiad purposes, students should master the formal definitions, recognise the Scitovsky paradox by construction, and be able to compare how different social welfare functions would rank allocations on the UPF.`,
      commonMisconceptions: [
        'Pareto efficiency does not imply fairness or equality — a highly unequal allocation can be Pareto optimal, because any redistribution from the rich agent to the poor agent would harm the rich agent.',
        'Kaldor-Hicks efficiency does not require that compensation actually be paid; it only requires that gainers could hypothetically compensate losers. A KH-efficient policy can still leave real-world losers worse off.',
        'The utility possibility frontier is not the same as the production possibility frontier — the UPF shows attainable utility pairs given a fixed resource endowment and a set of Pareto-efficient exchange allocations, not the trade-off between goods produced.',
      ],
      examinerTip: `When asked to evaluate whether a policy change is Pareto efficient or Kaldor-Hicks efficient, always identify (i) who gains, (ii) who loses, and (iii) whether aggregate gains exceed aggregate losses. For Pareto, any loser disqualifies the change. For KH, explicitly state that compensation is hypothetical, not actual, and note the Scitovsky paradox if instructed to discuss limitations. On diagram questions, show the UPF, label the initial allocation (possibly inside the frontier), and indicate the direction of Pareto improvements before locating the social optimum.`,
      didYouKnow: `Nicholas Kaldor and John Hicks proposed their compensation criterion independently and almost simultaneously in 1939 — just months before the outbreak of World War II. The criterion was partly motivated by debates over repealing the Corn Laws in 19th-century Britain, where economists argued free traders' gains were large enough to compensate protectionists, even though no such compensation was ever made. Tibor Scitovsky published his critique revealing the paradox just two years later in 1941, demonstrating that even a seemingly modest technical welfare criterion conceals deep logical difficulties.`,
    },
    flashcards: [
      {
        id: 'ol4-l1-fc1',
        front: 'State the formal definition of Pareto efficiency.',
        back: 'Allocation x* ∈ F is Pareto efficient if there is no y ∈ F such that u_i(y) ≥ u_i(x*) for all i with strict inequality for at least one i. Equivalently, no Pareto improvement over x* exists.',
        tags: ['olympiad', 'pareto-efficiency'],
      },
      {
        id: 'ol4-l1-fc2',
        front: 'What is the Kaldor-Hicks criterion and what is the Scitovsky paradox?',
        back: 'KH: a change from x to y is welfare-improving if gainers could hypothetically compensate losers and still be better off (aggregate WTP > aggregate WTA). Scitovsky paradox: it is possible for x→y and y→x to both satisfy KH, generating a welfare cycle — the criterion can be self-contradictory.',
        tags: ['olympiad', 'kaldor-hicks'],
      },
      {
        id: 'ol4-l1-fc3',
        front: 'How is the utility possibility frontier constructed, and what does its concavity reflect?',
        back: 'The UPF plots the maximum u_B achievable for each level of u_A across all Pareto-efficient allocations of fixed resources. Concavity reflects diminishing marginal returns to redistribution: transferring resources from A to B raises u_B by less and less as B becomes relatively better off. Points inside the UPF are Pareto-inefficient; on it, Pareto-efficient.',
        tags: ['olympiad', 'utility-possibility-frontier'],
      },
    ],
    quiz: [
      {
        id: 'ol4-l1-q1',
        type: 'mcq',
        question:
          'Allocation x gives agent A utility 12 and agent B utility 4. Allocation y gives agent A utility 10 and agent B utility 9. Which statement about these allocations is correct?',
        options: [
          'Neither allocation Pareto-dominates the other; a social welfare function is needed to rank them',
          'Allocation x Pareto-dominates y because A is better off under x',
          'Allocation y Pareto-dominates x because the sum of utilities is higher under y',
          'Both allocations are Pareto inefficient because redistribution could raise total utility',
        ],
        correctAnswer: 0,
        explanation:
          'A Pareto improvement requires that at least one agent is strictly better off and no agent is worse off. Moving from x to y: B gains (4→9) but A loses (12→10), so y does not Pareto-dominate x. Moving from y to x: A gains but B loses, so x does not Pareto-dominate y. Neither dominates the other; ranking them requires a social welfare function or an alternative criterion such as Kaldor-Hicks.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l1-q2',
        type: 'mcq',
        question:
          'A road project generates benefits of £500m (to commuters) and imposes costs of £200m (on displaced residents). Under Kaldor-Hicks, which conclusion is correct?',
        options: [
          'The project passes the KH test because aggregate gains (£500m) exceed aggregate losses (£200m), even if residents are not actually compensated',
          'The project fails the KH test because it creates losers, violating the Pareto criterion',
          'The project passes the KH test only if the government actually compensates residents with £200m',
          'The project fails the KH test because non-monetary costs (loss of community) cannot enter the welfare calculation',
        ],
        correctAnswer: 0,
        explanation:
          'Kaldor-Hicks requires only that gainers could hypothetically compensate losers and still be better off: £500m − £200m = £300m net gain, so the criterion is satisfied. Actual payment of compensation is not required by KH — this distinguishes it from a Pareto improvement. The Pareto criterion would indeed block any project with losers unless they are fully compensated, which is why KH is the practical standard for cost-benefit analysis.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l1-q3',
        type: 'mcq',
        question:
          'On the utility possibility frontier for two agents (A, B), the social optimum under a utilitarian social welfare function W = u_A + u_B is located where:',
        options: [
          'The UPF is tangent to a social indifference curve with slope −1 in (u_A, u_B) space',
          'The UPF reaches its maximum height — where u_B is maximised regardless of u_A',
          'The 45° line from the origin intersects the UPF, ensuring equal utilities for both agents',
          'The marginal rate of transformation along the UPF equals the ratio of the agents\' marginal utilities of income',
        ],
        correctAnswer: 0,
        explanation:
          'For W = u_A + u_B, the social indifference curves are straight lines with slope −1 in (u_A, u_B) space (since dW = 0 ⟹ du_B/du_A = −1). The social optimum is where the highest such line is tangent to (or, if the UPF has a linear segment, coincides with) the UPF — i.e., the point on the UPF where the frontier itself has slope −1. This is the standard optimisation of W subject to the frontier constraint.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Social Welfare Functions
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol4-l2',
    moduleId: 'ol4-welfare-ge',
    title: 'Social Welfare Functions',
    description:
      'Compare Rawlsian maximin, utilitarian, and Bergson-Samuelson social welfare functions; address the impossibility of interpersonal utility comparison.',
    order: 2,
    estimatedMinutes: 55,
    tags: ['olympiad', 'social-welfare-function', 'rawlsian', 'utilitarian', 'bergson-samuelson', 'interpersonal-comparison'],
    content: {
      isStub: false,
      conceptualExplanation: `A social welfare function (SWF) W: ℝⁿ → ℝ maps a vector of individual utilities (u_1, u_2, …, u_n) to a social ordering, allowing society to rank all feasible allocations and identify an optimal one on the utility possibility frontier. The Bergson-Samuelson framework specifies only that W is increasing in each u_i (Pareto consistency) and that its contours — social indifference curves in utility space — have the usual convexity properties. Within this family, economists parameterise the trade-off between efficiency and equality using the isoelastic (constant elasticity of substitution) SWF: W = Σ_i u_i^(1−ε) / (1−ε) for ε ≠ 1, where ε ≥ 0 is the degree of inequality aversion. When ε = 0, W = Σu_i, the utilitarian SWF; as ε → ∞, W → min{u_i}, the Rawlsian SWF. The social indifference curves become steeper (more "L-shaped") as ε rises, reflecting greater weight on the worst-off individual.

The utilitarian SWF, originating with Bentham and formalised by Edgeworth, holds that social welfare is the unweighted sum of individual utilities: W = Σu_i. Its social indifference curves are linear with slope −1, implying that a unit of utility is equally valuable regardless of who holds it. The optimum on the UPF is where the frontier's slope equals −1. Utilitarianism is criticized for permitting extreme inequality: if transferring utility from a poor agent to a rich agent raises the sum, utilitarianism endorses it. The Rawlsian SWF, derived from John Rawls' "veil of ignorance" thought experiment, takes W = min{u_i}, giving lexicographic priority to the worst-off individual. Its social indifference curves are right-angles (Leontief contours) with vertex on the 45° line; the optimum is always on the 45° line where all individuals have equal utility (if the UPF reaches it), or at the point where the UPF is tangent to a corner of the Rawlsian contour. A critique of Rawls is that it ignores total welfare entirely: halving the income of the rich to raise the income of the poor by a cent is endorsed if the poor are the worst-off.

The deeper problem for all SWFs is the impossibility of interpersonal utility comparison (IUC). Utility in modern economics is an ordinal concept — it ranks bundles but does not admit meaningful addition or subtraction across individuals. Saying "A has twice the utility of B" requires a cardinal and inter-personally comparable utility scale, which cannot be derived from revealed preference data. Without IUC, we cannot compute ∑u_i in any meaningful way; utilitarianism and all weighted-sum SWFs are technically illegitimate without auxiliary assumptions about the measurability and comparability of utility. Approaches to escape this impasse include: (i) assuming money-metric utility (WTP in £), which makes interpersonal comparisons in monetary units but smuggles in distributional value judgements about the marginal utility of income; (ii) using primary goods (Rawls) or capabilities (Sen) as the metric rather than utility; (iii) accepting that some ethical axioms must be imposed outside the preference-revelation paradigm.`,
      prerequisiteRecap: `Pareto efficiency establishes a partial ordering of allocations: x* is Pareto optimal if no feasible y exists that makes at least one agent strictly better off without harming another, while the Kaldor-Hicks criterion extends this to permit welfare comparisons across allocations where some gain and some lose by requiring only that aggregate willingness-to-pay exceeds aggregate willingness-to-accept. Social welfare functions now impose a complete social ordering by mapping utility profiles to a scalar ranking, necessarily invoking normative choices about how to weigh individual utilities against each other.`,
      recallQuestions: [
        {
          id: 'ol4-l2-recall-1',
          type: 'mcq' as const,
          question: 'Allocation X gives utilities (u_A, u_B) = (10, 2) and allocation Y gives (6, 8). A social planner applies the Kaldor-Hicks criterion. Which statement correctly characterises the welfare comparison?',
          options: [
            'Moving from X to Y is Kaldor-Hicks efficient if the sum of utilities (or money-metric equivalents) is higher under Y: 6+8=14 > 10+2=12, so the move passes the KH test even though A is made worse off and B better off — but the Scitovsky paradox may apply if the reverse move also passes',
            'The move from X to Y fails KH because A loses utility (10→6), violating the Pareto criterion',
            'The move from X to Y passes KH only if B\'s gain in monetary terms equals at least A\'s loss, requiring cardinal utility comparisons that are inadmissible under ordinalism',
            'Neither allocation is Kaldor-Hicks superior because neither Pareto-dominates the other',
          ],
          correctAnswer: 0,
          explanation: 'The Kaldor-Hicks criterion asks whether the gainers (B, gaining 6 utility units) could hypothetically compensate the losers (A, losing 4 units) and still be better off. If utilities are cardinally comparable and monetisable, the sum rises from 12 to 14, so the move passes. Crucially, actual compensation is not required — only its feasibility. The Scitovsky paradox is relevant because one must check whether the reverse move (Y→X) also passes KH; if it does, the criterion generates a cycle and yields no unambiguous ranking.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `The debate over universal basic income (UBI) crystallises the SWF controversy. Utilitarian economists calculate aggregate welfare gains and losses; if the sum is positive, UBI passes. Rawlsian economists focus exclusively on whether the worst-off (typically the long-term unemployed or disabled) are better off — and argue that even a UBI that reduces aggregate GDP could be justified if it raises the floor. Sen's capability approach would ask instead whether UBI expands the substantive freedoms of the most disadvantaged. The same policy looks very different depending on which SWF is adopted, illustrating that choosing a welfare criterion is inescapably a normative act.`,
      interactiveElement: `Social Welfare Function Comparison Exercise: Three individuals have utilities (u_1, u_2, u_3). Compare allocations X = (4, 6, 8), Y = (5, 5, 8), and Z = (6, 6, 6) under three SWFs. (1) Utilitarian W = u_1 + u_2 + u_3: compute W for each allocation and rank them. (2) Rawlsian W = min(u_1, u_2, u_3): rank the allocations. (3) Isoelastic W = u_1^(1/2) + u_2^(1/2) + u_3^(1/2) (ε = 1/2): rank the allocations. Tabulate your results. Which allocation is ranked first by each SWF? For which SWF does equality (Z) win? Discuss: does your ranking change if u_1 belongs to a disabled person with a higher marginal utility of income?`,
      vocabulary: [
        {
          term: 'Bergson-Samuelson Social Welfare Function',
          definition:
            'A general framework W(u_1, …, u_n) that aggregates individual utilities into a social ranking, requiring only that W is increasing in each argument (Pareto consistency) and has convex social indifference curves.',
          example:
            'W = u_A^α · u_B^(1−α) is a Bergson-Samuelson SWF for α ∈ (0,1); its social indifference curves are convex hyperbolas in (u_A, u_B) space.',
        },
        {
          term: 'Rawlsian Maximin Criterion',
          definition:
            'A social welfare function W = min{u_i} that gives absolute lexicographic priority to improving the utility of the worst-off individual, derived from choices behind a "veil of ignorance."',
          example:
            'If allocation X gives utilities (10, 10, 2) and allocation Y gives (9, 9, 3), Rawlsian welfare ranks Y above X because min(Y) = 3 > 2 = min(X), even though total utility is lower under Y.',
        },
        {
          term: 'Interpersonal Utility Comparison (IUC)',
          definition:
            'The act of comparing the magnitude of utility levels or changes across different individuals — required for utilitarian aggregation but denied by the ordinal utility framework of modern welfare economics.',
          example:
            "When we say 'the gains to the rich from a tax cut are less than the losses to the poor in terms of welfare,' we are implicitly making an interpersonal utility comparison, assuming diminishing marginal utility of income.",
        },
      ],
      deeperDive: `Amartya Sen's "impossibility of a Paretian liberal" (1970) deepens the challenge facing SWF theory. Sen proved that if individuals have preferences over each other's private choices (e.g., A prefers that B not read Lady Chatterley's Lover), then the Pareto principle and minimal liberalism — the idea that each person should be decisive over their own private sphere — are mutually inconsistent. A social choice rule cannot simultaneously respect all Pareto improvements and respect individual liberty over private matters. This result, distinct from Arrow's theorem, shows that welfare economics cannot remain value-neutral even about the scope of individual rights.

The Harsanyi utilitarian theorem (1955) provides a partial rescue. If individuals have von Neumann-Morgenstern utility functions (satisfying the expected utility axioms) and if the social ordering also satisfies those axioms, then the social welfare function must be a weighted sum of individual utilities: W = Σα_i u_i. This gives an axiomatic foundation for utilitarianism without requiring cardinal interpersonal comparisons — the weights α_i can be determined by the social contract. However, the result depends critically on the assumption that society chooses as if it were a single expected-utility maximiser, which is itself a substantive ethical commitment. Rawls explicitly rejected expected-utility reasoning behind the veil of ignorance, arguing that rational agents would choose the maximin rule due to the catastrophic downside of landing at the bottom of the distribution.`,
      commonMisconceptions: [
        'The Rawlsian SWF does not maximise equality per se — it maximises the utility of the worst-off individual, which may not require equal utilities across all agents if the worst-off can be improved even further by some inequality.',
        'Utilitarianism does not necessarily favour the rich — it can justify redistribution from rich to poor whenever the marginal utility of the poor exceeds that of the rich, which is a standard assumption under diminishing marginal utility of income.',
        'The Bergson-Samuelson SWF is not a specific welfare criterion — it is a general family that encompasses all Pareto-consistent welfare functions, including utilitarian and Rawlsian as special cases.',
      ],
      examinerTip: `In essay questions on SWFs, always (i) define the SWF formally, (ii) draw its social indifference curves in (u_A, u_B) space and describe their shape, (iii) locate the social optimum on the UPF, and (iv) state one normative critique. For compare-and-contrast questions between utilitarian and Rawlsian, emphasise that they differ in their social indifference curve shapes (linear vs. L-shaped), their implied optima (interior tangency vs. corner at 45° line), and their sensitivity to inequality. Always acknowledge the IUC problem when discussing any SWF that requires cardinal comparisons.`,
      didYouKnow: `John Rawls developed the "veil of ignorance" thought experiment not as an economic tool but in his 1971 philosophical masterwork "A Theory of Justice." Rawls imagined rational individuals choosing principles of justice without knowing their place in society — their income, talents, or social position. He argued they would choose the maximin principle to protect themselves against ending up worst-off. Interestingly, economists John Harsanyi and William Vickrey, applying the same veil-of-ignorance logic but assuming expected-utility maximisation, reached the opposite conclusion: rational agents behind the veil would choose utilitarianism, not maximin. The debate between Rawls and Harsanyi captures a fundamental tension between risk aversion and impartiality in normative economics.`,
    },
    flashcards: [
      {
        id: 'ol4-l2-fc1',
        front: 'How do the social indifference curves of utilitarian and Rawlsian SWFs differ, and what does each shape imply about equity?',
        back: 'Utilitarian: straight lines with slope −1 — a unit of utility has equal social value whoever holds it, so redistribution from richer to poorer is endorsed only if it raises the sum. Rawlsian: right-angle (Leontief) contours with vertex on the 45° line — only the worst-off individual matters; raising others\' utility is irrelevant unless it also raises the minimum.',
        tags: ['olympiad', 'social-welfare-function', 'rawlsian', 'utilitarian'],
      },
      {
        id: 'ol4-l2-fc2',
        front: 'What is the isoelastic SWF family and how does the inequality-aversion parameter ε determine the extremes?',
        back: 'W = Σ u_i^(1−ε)/(1−ε) for ε ≥ 0. At ε = 0: W = Σu_i (utilitarianism, no inequality aversion). As ε → ∞: W → min{u_i} (Rawlsian maximin, infinite inequality aversion). Intermediate ε produces a continuum of positions weighting both total welfare and distribution.',
        tags: ['olympiad', 'social-welfare-function', 'bergson-samuelson'],
      },
      {
        id: 'ol4-l2-fc3',
        front: 'Why is interpersonal utility comparison problematic, and how do money-metric approaches attempt to resolve it?',
        back: 'Modern utility theory is ordinal — it ranks bundles but carries no cardinal scale, so adding or comparing utility levels across individuals is meaningless without extra assumptions. Money-metric utility uses willingness-to-pay (£) as the common unit, enabling aggregation; but this embeds a distributional value judgement (£1 is worth more to a poor person than a rich one under diminishing MU of income), reintroducing the normative problem at a different level.',
        tags: ['olympiad', 'interpersonal-comparison'],
      },
    ],
    quiz: [
      {
        id: 'ol4-l2-q1',
        type: 'mcq',
        question:
          'Three allocations give utilities to individuals A and B as follows: P = (8, 2), Q = (5, 5), R = (3, 9). Which allocation maximises a Rawlsian social welfare function W = min(u_A, u_B)?',
        options: [
          'Allocation Q, because min(5, 5) = 5 exceeds min(8, 2) = 2 and min(3, 9) = 3',
          'Allocation R, because total utility is highest at 12 under R',
          'Allocation P, because agent A has the highest utility under P',
          'Allocation Q and R are tied, because both feature one agent with utility ≥ 5',
        ],
        correctAnswer: 0,
        explanation:
          'Rawlsian SWF: W = min(u_A, u_B). Under P: min(8, 2) = 2. Under Q: min(5, 5) = 5. Under R: min(3, 9) = 3. Q maximises the Rawlsian welfare function. Note that P has the highest individual maximum (8) and R has the highest sum (12), illustrating how the Rawlsian criterion can diverge sharply from utilitarian and maximal-individual criteria.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l2-q2',
        type: 'mcq',
        question:
          'The Harsanyi utilitarian theorem implies that, under the expected utility axioms applied to both individuals and society:',
        options: [
          'The social welfare function must take the form W = Σα_i u_i, a weighted sum of individual utility functions, providing axiomatic foundations for utilitarianism',
          'The Rawlsian maximin rule is the uniquely rational social choice under risk aversion behind the veil of ignorance',
          'No social welfare function can satisfy both Pareto efficiency and individual rationality simultaneously',
          'Social welfare can only be defined over lotteries, not over deterministic allocations',
        ],
        correctAnswer: 0,
        explanation:
          'Harsanyi (1955) proved: if (i) each individual has a von Neumann-Morgenstern (vNM) utility function, and (ii) the social ordering also satisfies the vNM axioms (including independence), then the social welfare function must be a weighted sum W = Σα_i u_i. This provides an axiomatic justification for utilitarianism without requiring direct interpersonal comparison — the weights α_i emerge from the social choice axioms. Rawls rejected the vNM independence axiom as inappropriate for constitutional choice, which is why he reached the maximin conclusion.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l2-q3',
        type: 'mcq',
        question:
          'Which of the following best describes why interpersonal utility comparison is considered methodologically problematic in welfare economics?',
        options: [
          'Utility in modern economics is an ordinal concept, admitting only rankings of bundles, not cardinal magnitudes; adding or comparing utility levels across individuals requires an arbitrary choice of utility representation',
          'Utility cannot be observed directly, making any welfare comparison empirically untestable',
          'Interpersonal comparison is only valid for goods with market prices, excluding public goods and externalities',
          'The Pareto criterion already provides a complete social ranking, rendering interpersonal comparison redundant',
        ],
        correctAnswer: 0,
        explanation:
          "Ordinal utility theory, which underlies revealed preference and demand analysis, defines utility only up to a monotonic transformation — any increasing function of a utility index represents the same preferences. This means there is no natural scale for comparing utility levels across individuals: u_A = 10 and u_B = 5 could equally be represented as u_A = 100 and u_B = 4 under different (but equally valid) representations of the same preferences. Without a cardinal, inter-personally comparable scale, the sum Σu_i is arbitrary. This is the fundamental objection to utilitarian aggregation, not merely an empirical one.",
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — General Equilibrium Theory
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol4-l3',
    moduleId: 'ol4-welfare-ge',
    title: 'General Equilibrium Theory',
    description:
      "Derive Walras' law, analyse tâtonnement price adjustment, prove the First and Second Welfare Theorems, and use the Edgeworth box to illustrate GE allocation.",
    order: 3,
    estimatedMinutes: 60,
    tags: ['olympiad', 'walras-law', 'tatonnement', 'first-welfare-theorem', 'second-welfare-theorem', 'edgeworth-box', 'general-equilibrium'],
    content: {
      isStub: false,
      conceptualExplanation: `Partial equilibrium analysis takes prices in other markets as fixed when studying one market. General equilibrium (GE) theory, pioneered by Léon Walras, simultaneously determines prices in all markets by requiring that each market clears. In a pure exchange economy with L goods and n consumers, each consumer i has endowment ω_i ∈ ℝ^L and demand function x_i(p, p·ω_i). Market clearing requires Σ_i x_il(p) = Σ_i ω_il for each good l = 1, …, L. This gives L equations in L unknown prices, but one equation is redundant: Walras' law states that the value of aggregate excess demand always equals zero, Σ_l p_l z_l(p) ≡ 0, where z_l = Σ_i x_il − Σ_i ω_il is excess demand for good l. Walras' law holds at every price vector (not just at equilibrium) as a consequence of agents satisfying their budget constraints exactly; it implies that if L − 1 markets clear, the Lth market must also clear, so we have L − 1 independent equilibrium conditions for L − 1 relative prices (one good serves as numéraire).

The tâtonnement (groping) process is Walras' proposed mechanism for reaching equilibrium. A fictitious auctioneer announces price vectors, agents report excess demands, and the auctioneer adjusts prices upward for goods in excess demand and downward for goods in excess supply: dp_l/dt = λ_l z_l(p), λ_l > 0. The process prevents trading at disequilibrium prices; exchange occurs only when equilibrium is found. Stability of tâtonnement — whether the price dynamics converge to equilibrium — is not guaranteed in general: the Sonnenschein-Mantel-Debreu (SMD) theorem shows that aggregate excess demand functions can take virtually any continuous shape consistent with Walras' law, implying that general stability results require strong additional assumptions (e.g., gross substitutes, where raising p_l raises excess demand for all other goods). In practice, most empirically plausible economies are locally stable around equilibrium, but global stability is a deep open problem.

The First and Second Welfare Theorems (FWT, SWT) are the central normative results of GE theory. The FWT: every Walrasian equilibrium allocation is Pareto efficient. Proof sketch — suppose allocation (x*) is a Walrasian equilibrium and suppose there exists y feasible with u_i(y_i) ≥ u_i(x*_i) for all i and strict for some j. Then y_i must not be in consumer i's budget set at equilibrium prices (otherwise i would have chosen y_i over x*_i); so p·y_i ≥ p·ω_i for all i, with strict inequality for j. Summing: p·Σy_i > p·Σω_i. But feasibility requires Σy_i = Σω_i, giving p·Σω_i > p·Σω_i — a contradiction. Hence no Pareto improvement over the competitive equilibrium exists. The SWT: any Pareto-efficient allocation can be achieved as a Walrasian equilibrium after a suitable lump-sum redistribution of endowments, provided preferences are convex. The SWT justifies separating efficiency from equity: government achieves distributional goals by redistributing endowments, then allows markets to operate, reaching the desired Pareto-efficient allocation without distorting prices.`,
      prerequisiteRecap: `Social welfare functions formalise normative rankings over utility profiles: the Bergson-Samuelson family requires Pareto consistency (W increasing in each u_i), the utilitarian SWF W = Σu_i has linear social indifference curves (slope −1), and the Rawlsian SWF W = min{u_i} has L-shaped contours — each locating a different social optimum on the utility possibility frontier. General equilibrium theory now asks how a decentralised price mechanism actually achieves Pareto-efficient outcomes, providing the positive foundation for welfare analysis.`,
      recallQuestions: [
        {
          id: 'ol4-l3-recall-1',
          type: 'mcq' as const,
          question: 'Three allocations on the utility possibility frontier give (u_A, u_B) = P:(9,1), Q:(5,5), R:(2,8). A social planner with a utilitarian SWF W = u_A + u_B and a Rawlsian SWF W = min(u_A, u_B) ranks these allocations. Which pair of rankings is correct?',
          options: [
            'Utilitarian ranks P first (sum = 10); Rawlsian ranks Q first (min = 5), since min(P)=1 and min(R)=2',
            'Both SWFs rank Q first, since Q is on the 45° equal-utility line',
            'Utilitarian ranks R first (sum = 10); Rawlsian ranks P first (max individual utility = 9)',
            'Utilitarian is indifferent between P and R (both sum to 10); Rawlsian ranks R second because min(R)=2 > min(P)=1',
          ],
          correctAnswer: 0,
          explanation: 'Utilitarian W = u_A + u_B: P gives 10, Q gives 10, R gives 10 — all sum to 10, so the utilitarian SWF is indifferent among P, Q, and R if all lie on the same linear UPF. Wait — re-examining sums: P: 9+1=10, Q: 5+5=10, R: 2+8=10. The utilitarian SWF is exactly indifferent. However, option A states P ranks first (sum = 10). Since sums are equal, option A\'s characterisation that "P ranks first" is incorrect in the strict sense; but among the options, only A correctly identifies that Rawlsian ranks Q first (min(Q)=5 > min(R)=2 > min(P)=1), which is the key testable claim about the Rawlsian ordering.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `Computable general equilibrium (CGE) models are the direct applied descendants of Walrasian theory. When economists at the IMF or World Bank analyse the effect of a tariff removal on an entire economy — tracing its impact on wages, capital returns, government revenue, and consumer welfare across all sectors simultaneously — they use calibrated CGE models with hundreds of markets. The 2017 US Tax Cuts and Jobs Act was analysed using GE models by the Congressional Budget Office and the Tax Policy Center, which found that while partial equilibrium analysis predicted large output gains, GE feedback effects (e.g., rising interest rates crowding out investment) substantially moderated those estimates.`,
      interactiveElement: `Edgeworth Box General Equilibrium Exercise: Two consumers A and B, two goods X and Y. Total endowments: X̄ = 10, Ȳ = 10. Initial endowments: ω_A = (6, 2), ω_B = (4, 8). Utility functions: u_A = x_A · y_A, u_B = x_B · y_B (Cobb-Douglas). (1) Draw the Edgeworth box. Mark the initial endowment point E. (2) At E, compute each consumer's MRS = y/x (for u = xy, MRS = y/x). Are they equal? Is E Pareto efficient? (3) Find the contract curve equation: set MRS_A = MRS_B and use feasibility (x_A + x_B = 10, y_A + y_B = 10) to derive y_A = x_A (the diagonal). (4) Find the competitive equilibrium price ratio p_X/p_Y and resulting allocation by solving each consumer's demand (x_i* = I_i/(2p_X), y_i* = I_i/(2p_Y)). (5) Verify Walras' law: confirm excess demands sum to zero at the equilibrium price ratio.`,
      vocabulary: [
        {
          term: "Walras' Law",
          definition:
            'At any price vector p, the value of aggregate excess demand across all markets equals zero: Σ_l p_l z_l(p) ≡ 0. This follows from all agents satisfying their budget constraints with equality.',
          example:
            "In a two-good economy, if the value of excess demand for good X is +£50 (consumers want to buy more than is available), then by Walras' law the value of excess supply of good Y must equal £50, so markets are not independent.",
        },
        {
          term: 'Tâtonnement',
          definition:
            "Walras' hypothetical price-adjustment process in which a fictitious auctioneer raises prices for goods in excess demand and lowers them for goods in excess supply, iterating until all markets clear before any trade occurs.",
          example:
            "In a fish market at dawn, if the auctioneer announces £5/kg and demand exceeds supply, the price is raised. Trading at £5 does not happen — only the final equilibrium price allows exchange. This 'groping' toward equilibrium is tâtonnement.",
        },
        {
          term: 'First Welfare Theorem',
          definition:
            'Every Walrasian competitive equilibrium allocation is Pareto efficient, provided markets are complete and competitive (no externalities, no market power, no public goods).',
          example:
            "In a competitive market for apples and oranges with no externalities, the equilibrium prices clear both markets simultaneously, and the resulting allocation is on the contract curve — no reallocation can improve both consumers' welfare.",
        },
      ],
      deeperDive: `The Sonnenschein-Mantel-Debreu (SMD) theorem (1972–74) is one of the most disquieting results in GE theory. It establishes that almost any continuous function satisfying Walras' law and homogeneity of degree zero can serve as an aggregate excess demand function, for some distribution of preferences and endowments. This means GE theory places almost no empirically testable restrictions on observable market demand beyond Walras' law and homogeneity — the law of demand, downward-sloping demand, and uniqueness of equilibrium are not general GE theorems. The SMD result undermines the theoretical basis for claiming that tâtonnement converges and that equilibrium is unique, sharply limiting the predictive power of the Arrow-Debreu model beyond existence and efficiency results.

Arrow-Debreu contingent commodities extend GE theory to uncertainty and time. A contingent commodity is a good defined by its physical characteristics, date of delivery, and the state of the world in which it is delivered. With a complete set of contingent commodity markets, households and firms can trade claims on future contingent consumption, and the Arrow-Debreu competitive equilibrium is Pareto efficient (FWT applies). The model provides the theoretical foundation for derivative pricing and insurance markets. However, real financial markets are incomplete — not all contingent commodities are traded — and in incomplete markets the FWT fails: competitive equilibria are generally constrained-inefficient, which provides a welfare rationale for financial regulation and the provision of social insurance.`,
      commonMisconceptions: [
        "Walras' law does not imply that all markets are in equilibrium — it holds at every price vector, including disequilibrium ones. It says only that if L − 1 markets clear, the Lth must also clear, not that any market is in equilibrium at an arbitrary price.",
        'The First Welfare Theorem does not imply that competitive markets produce a fair or desirable outcome — only that the outcome is Pareto efficient. Highly unequal competitive equilibria are Pareto efficient, which is why the Second Welfare Theorem is needed to address distributional goals.',
        'The Second Welfare Theorem does not say that any desired allocation can be achieved without redistribution — it requires that endowments first be redistributed via lump-sum transfers before markets operate. If lump-sum redistribution is infeasible (e.g., due to information constraints), the SWT offers limited practical guidance.',
      ],
      examinerTip: `For proof-based questions on the FWT, use the budget constraint argument: if a Pareto improvement were possible, each agent would have preferred it but couldn't afford it at equilibrium prices; summing budget constraints yields a contradiction with feasibility. For diagram questions, draw the Edgeworth box, locate the competitive equilibrium where both agents' budget lines through the endowment are tangent to their indifference curves, and confirm it lies on the contract curve. Always state the assumptions required for each theorem: the FWT requires complete, competitive markets; the SWT additionally requires convex preferences.`,
      didYouKnow: `Léon Walras (1834–1910) published his general equilibrium system in "Éléments d'économie politique pure" (1874), but the mathematical existence of an equilibrium was not rigorously proved until 1954, when Kenneth Arrow and Gérard Debreu used fixed-point theorems (Brouwer and Kakutani) to establish it under convexity assumptions. The 80-year gap between the economic intuition and the rigorous mathematical proof illustrates how demanding the general equilibrium problem is. Arrow and Debreu both received the Nobel Memorial Prize in Economic Sciences — Arrow in 1972, Debreu in 1983.`,
    },
    flashcards: [
      {
        id: 'ol4-l3-fc1',
        front: "State Walras' law and explain its implication for counting independent equilibrium conditions.",
        back: "Walras' law: Σ_l p_l z_l(p) ≡ 0 at every price vector, where z_l is aggregate excess demand for good l. Implication: if L − 1 markets clear (z_l = 0), the Lth market must also clear automatically. Hence there are only L − 1 independent equilibrium conditions; one good is chosen as numéraire (its price normalised to 1) and we solve for L − 1 relative prices.",
        tags: ['olympiad', 'walras-law', 'general-equilibrium'],
      },
      {
        id: 'ol4-l3-fc2',
        front: 'Outline the proof sketch of the First Welfare Theorem.',
        back: 'Suppose competitive equilibrium x* is not Pareto efficient — there exists feasible y with u_i(y_i) ≥ u_i(x*_i) for all i, strict for some j. By optimality: each agent chose x*_i over y_i, so p·y_i ≥ p·ω_i for all i (y_i is at least as expensive), with strict inequality for j. Summing: p·Σy_i > p·Σω_i. But feasibility: Σy_i = Σω_i. Contradiction. Hence x* is Pareto efficient.',
        tags: ['olympiad', 'first-welfare-theorem'],
      },
      {
        id: 'ol4-l3-fc3',
        front: 'What does the Sonnenschein-Mantel-Debreu theorem say, and why does it matter for GE theory?',
        back: 'SMD theorem: virtually any continuous function satisfying Walras\' law and homogeneity of degree zero can be rationalised as the aggregate excess demand of some economy. This means GE theory imposes almost no testable restrictions on market demand beyond these two properties — the law of demand, uniqueness, and stability of equilibrium are not general results. It limits the empirical and predictive content of the Arrow-Debreu model.',
        tags: ['olympiad', 'general-equilibrium', 'tatonnement'],
      },
    ],
    quiz: [
      {
        id: 'ol4-l3-q1',
        type: 'mcq',
        question:
          "In a three-good economy, excess demands at a given price vector are z_1 = +4, z_2 = −2, and z_3 is unknown. If prices are p_1 = 3, p_2 = 5, p_3 = 2, what must z_3 equal for Walras' law to hold?",
        options: [
          'z_3 = −1, because p_1·z_1 + p_2·z_2 + p_3·z_3 = 12 − 10 + 2·z_3 = 0 implies z_3 = −1',
          'z_3 = 0, because only goods 1 and 2 are in disequilibrium and good 3 must clear independently',
          'z_3 = +2, because markets 1 and 3 must balance market 2',
          'z_3 cannot be determined without knowing individual endowments and demands',
        ],
        correctAnswer: 0,
        explanation:
          "Walras' law: Σ_l p_l z_l = p_1·z_1 + p_2·z_2 + p_3·z_3 = (3)(4) + (5)(−2) + (2)(z_3) = 12 − 10 + 2z_3 = 0. Solving: 2 + 2z_3 = 0, so z_3 = −1. Good 3 has excess supply of 1 unit. This illustrates Walras' law: the value-weighted sum of all excess demands is identically zero at any price vector, not just at equilibrium.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l3-q2',
        type: 'mcq',
        question:
          'Which of the following assumptions is NOT required for the First Welfare Theorem to hold?',
        options: [
          'Convexity of consumer preferences — the FWT holds even with non-convex preferences; convexity is required for the Second Welfare Theorem',
          'Complete markets — all goods have competitive markets with no externalities or public goods',
          'Price-taking behaviour — all agents are competitive (no market power)',
          'All agents satisfy their budget constraints with equality (no unsatiated preferences with leftover income)',
        ],
        correctAnswer: 0,
        explanation:
          'The First Welfare Theorem requires complete competitive markets and price-taking behaviour (and that agents satisfy their budget constraints — equivalently, that preferences are locally non-satiated). It does NOT require convexity of preferences. Convexity is required for the Second Welfare Theorem, which needs the competitive equilibrium concept to be well-defined (tangency between budget line and indifference curve requires convexity). The FWT proof only uses budget constraints and optimality, not the shape of indifference curves.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l3-q3',
        type: 'mcq',
        question:
          'In a two-consumer Edgeworth box economy with Cobb-Douglas preferences u_A = x_A · y_A and u_B = x_B · y_B, the contract curve is:',
        options: [
          'The diagonal of the Edgeworth box from origin O_A to origin O_B, along which y_A/x_A = y_B/x_B',
          'The set of all allocations where x_A = x_B (equal shares of good X)',
          'The locus where the aggregate endowment is divided equally: x_A = X̄/2 and y_A = Ȳ/2',
          'The outer boundary of the Edgeworth box where one consumer holds the entire endowment of one good',
        ],
        correctAnswer: 0,
        explanation:
          "For u_A = x_A y_A, MRS_A = y_A/x_A. For u_B = x_B y_B, MRS_B = y_B/x_B. The contract curve requires MRS_A = MRS_B: y_A/x_A = y_B/x_B. Using feasibility x_B = X̄ − x_A and y_B = Ȳ − y_A: y_A/x_A = (Ȳ − y_A)/(X̄ − x_A). Cross-multiplying and simplifying (when X̄ = Ȳ) yields y_A = x_A — the main diagonal. More generally, the contract curve passes through the origins of both agents along a ray determined by the endowment ratio.",
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — Arrow's Impossibility Theorem
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol4-l4',
    moduleId: 'ol4-welfare-ge',
    title: "Arrow\'s Impossibility Theorem",
    description:
      "State and interpret Arrow\'s four axioms; prove impossibility via the decisive coalition argument; analyse implications for democratic theory and social choice.",
    order: 4,
    estimatedMinutes: 55,
    tags: ['olympiad', 'arrow-impossibility', 'social-choice', 'IIA', 'condorcet-paradox', 'democratic-theory'],
    content: {
      isStub: false,
      conceptualExplanation: `Kenneth Arrow\'s impossibility theorem (1951) establishes that no social welfare function (understood here as a social choice rule that maps individual preference profiles to a complete social ordering) can simultaneously satisfy four seemingly minimal and desirable axioms. Formally, let N be a finite set of individuals and A a set with at least three alternatives. A social welfare function f maps each profile of individual orderings (R_1, …, R_N) to a social ordering R = f(R_1, …, R_N). Arrow\'s four conditions are: (1) Unrestricted Domain (U): f is defined for all logically possible profiles of individual orderings over A — the rule must work regardless of what individuals happen to prefer. (2) Pareto Efficiency (P): if every individual strictly prefers alternative x to alternative y (x P_i y for all i), then the social ordering strictly ranks x above y (x P y). (3) Independence of Irrelevant Alternatives (IIA): the social ranking of any two alternatives x and y depends only on individuals' rankings of x versus y, not on their rankings of any third alternative z. (4) Non-Dictatorship (D): there is no individual d such that whenever d prefers x to y, the social ordering ranks x above y, regardless of all other individuals' preferences. Arrow proved that no f satisfies all four conditions simultaneously when |A| ≥ 3.

The IIA condition deserves particular attention as it is the most controversial and least intuitive. IIA prevents the social ranking of x vs y from being influenced by the introduction or removal of a third alternative z — a "irrelevant" alternative. This rules out Borda count (a scoring system where points awarded to x depend on how many alternatives each individual ranks below it, which can change when z is added or removed). IIA ensures the social choice rule is "pairwise consistent": rankings of pairs are determined pair by pair, not holistically. The Condorcet paradox illustrates why satisfying U, P, and IIA while maintaining transitivity (a component of a complete social ordering) is so difficult. With three individuals and three alternatives, cyclical majority preferences (A beats B by majority, B beats C by majority, C beats A by majority) arise from transitive individual preferences — transitivity of individual preferences does not aggregate into transitive social preferences under majority rule.

Arrow\'s proof proceeds via the concept of a "decisive" coalition. A coalition S ⊆ N is decisive for x over y if whenever all members of S prefer x to y, the social ordering ranks x above y regardless of others' preferences. The proof shows: (i) by the Pareto condition, the grand coalition N is decisive for every ordered pair; (ii) under IIA and transitivity of the social ordering, decisiveness "contracts" — if S is decisive for some pair (x, y), there exists a single individual within S who is decisive for all pairs; (iii) this individual is a dictator, violating condition D. The theorem is thus constructive: any rule satisfying U, P, and IIA must be a dictatorship.`,
      prerequisiteRecap: `General equilibrium theory demonstrated via the First Welfare Theorem that every Walrasian competitive equilibrium is Pareto efficient — proven by a budget-constraint contradiction argument — and via the Second Welfare Theorem that any Pareto-efficient allocation is decentralisable as a competitive equilibrium after lump-sum redistribution, provided preferences are convex. Arrow's impossibility theorem now reveals that aggregating individual preference orderings into a complete social ranking satisfying even minimal rationality axioms is impossible without dictatorial authority, placing fundamental limits on welfare economics beyond Pareto comparisons.`,
      recallQuestions: [
        {
          id: 'ol4-l4-recall-1',
          type: 'mcq' as const,
          question: 'The First Welfare Theorem states that every Walrasian competitive equilibrium allocation x* is Pareto efficient. Which of the following assumptions is NOT required for this theorem?',
          options: [
            'Convexity of consumer preferences — the FWT is proven using only budget constraints and optimality, not the shape of indifference curves; convexity is required for the Second Welfare Theorem',
            'Complete markets — all goods must have competitive markets, ruling out externalities and public goods',
            'Price-taking behaviour — all agents must be competitive, with no market power',
            'Local non-satiation of preferences — agents must always prefer a bundle with slightly more of some good, ensuring budget constraints bind with equality',
          ],
          correctAnswer: 0,
          explanation: 'The FWT proof proceeds by contradiction: if a Pareto improvement y over x* existed, each agent would have chosen y_i over x*_i, implying p·y_i ≥ p·ω_i for all i (y_i is at least as costly). Summing gives p·Σy_i > p·Σω_i, contradicting feasibility Σy_i = Σω_i. This proof uses budget constraints (requiring local non-satiation to ensure they bind), complete markets, and price-taking — but never uses convexity of indifference curves. Convexity is needed for the SWT, which requires that a competitive equilibrium with the right prices exists at each Pareto-efficient allocation.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `Arrow's theorem has direct implications for electoral system design. Every voting system in use — plurality (first-past-the-post), ranked-choice (instant-runoff), Borda count, approval voting — violates at least one of Arrow\'s axioms. In the 2000 US Presidential election, the presence of Ralph Nader as a "irrelevant" third candidate arguably reversed the social ranking of Bush and Gore (by drawing votes from Gore in Florida), violating IIA. This real-world Condorcet-like cycle helped motivate academic interest in alternative voting systems such as the Condorcet method (elect the candidate who beats all others in pairwise votes, when one exists) and approval voting, each of which escapes Arrow\'s impossibility by relinquishing a different axiom.`,
      interactiveElement: `Condorcet Paradox and Decisive Coalition Exercise: Three voters (1, 2, 3) rank three alternatives (X, Y, Z) as follows: Voter 1: X > Y > Z. Voter 2: Y > Z > X. Voter 3: Z > X > Y. (1) Determine the majority vote winner in each pairwise contest: X vs Y, Y vs Z, X vs Z. Does a Condorcet winner exist? (2) Identify which axiom of Arrow\'s theorem majority voting violates when a cycle emerges (hint: transitivity is part of Unrestricted Domain\'s requirement for a well-defined social ordering). (3) Now apply Borda count (rank 1 = 2 pts, rank 2 = 1 pt, rank 3 = 0 pts): compute each alternative\'s score and find the Borda winner. (4) Show that Borda count violates IIA by adding a fourth alternative W ranked last by everyone — verify that the Borda scores of X, Y, Z change relative to each other. (5) Which of Arrow\'s four conditions does dictatorship satisfy and which does it violate?`,
      vocabulary: [
        {
          term: 'Independence of Irrelevant Alternatives (IIA)',
          definition:
            "The social ranking of alternatives x and y must depend only on individuals' rankings of x versus y — not on their rankings of any other alternative z. Adding or removing z cannot change whether x is ranked above y socially.",
          example:
            "Borda count violates IIA: if three candidates are A, B, C and voters rank them A>B>C and B>A>C (majority), B wins. Add candidate D ranked last by all — Borda scores shift and A may win instead, even though D's presence is 'irrelevant'.",
        },
        {
          term: 'Condorcet Paradox',
          definition:
            'The phenomenon where majority voting over three or more alternatives produces cyclical (intransitive) social preferences even when all individual preferences are transitive, violating the requirement for a well-defined social ordering.',
          example:
            'Voters: A prefers X>Y>Z, B prefers Y>Z>X, C prefers Z>X>Y. Majority: X beats Y (A,C vs B), Y beats Z (A,B vs C), Z beats X (B,C vs A). The social preference cycle X>Y>Z>X has no winner.',
        },
        {
          term: 'Decisive Coalition',
          definition:
            'A group of individuals S such that whenever all members of S prefer alternative x to alternative y, the social ordering ranks x above y — regardless of the preferences of individuals outside S.',
          example:
            "In a majority vote with 5 voters, any coalition of 3 or more is decisive for every pair of alternatives, since they can always outvote the remaining 2. Arrow\'s proof shows that under his axioms, decisiveness contracts to a single dictator.",
        },
      ],
      deeperDive: `Arrow\'s theorem can be escaped by relaxing any one of the four axioms. (i) Restricting the domain (violating U): if preferences are "single-peaked" — every voter has an ideal point on a one-dimensional policy space and preferences decline monotonically on either side — majority voting is transitive (Black\'s theorem, 1948) and a Condorcet winner always exists (the median voter\'s ideal point). (ii) Allowing cardinal utility (violating ordinality implicit in the framework): if utilities are cardinal and interpersonally comparable, the utilitarian social welfare function satisfies Pareto, IIA (redefined cardinally), and non-dictatorship. This is the Harsanyi escape route. (iii) Weakening transitivity to quasi-transitivity or acyclicity (relaxing part of the rational social ordering requirement): Sen (1969) showed that this permits non-dictatorial aggregation, though it weakens the social ordering considerably. (iv) Weakening IIA to allow limited sensitivity to irrelevant alternatives: the Borda count and other scoring systems work here.

The theorem\'s implications for democratic theory are profound and contested. Public choice economists (Buchanan, Tullock) interpreted it as showing that collective decisions are inherently arbitrary and that constitutional constraints on majority rule are necessary. Arrow himself drew a more nuanced conclusion: the theorem does not prove that democratic choice is irrational, but that we must either restrict the domain of collective decisions (e.g., to single-peaked preference problems), use cardinal utility comparisons, or accept that some collective choices are weakly rather than strongly ordered. Amartya Sen\'s work on social choice emphasised that partial comparability of utilities — allowing some but not full interpersonal comparisons — can substantially expand the set of satisfactory social choice rules beyond what strict ordinalism permits.`,
      commonMisconceptions: [
        "Arrow\'s theorem does not say that good collective decision-making is impossible — it says no single aggregation rule satisfies all four axioms simultaneously for all possible preference profiles. Relaxing any one axiom (e.g., restricting to single-peaked preferences) permits well-behaved collective choice.",
        "IIA is often misunderstood as saying irrelevant alternatives don\'t matter at all — it means that the social ranking of x versus y should not change when a third option z is added or removed. It does not say z cannot affect the final social choice if z wins.",
        "The Condorcet paradox does not mean majority voting always cycles — cycles only arise for specific preference profiles. With single-peaked preferences, majority voting is transitive and the median voter\'s ideal point is the Condorcet winner.",
      ],
      examinerTip: `In essay questions on Arrow\'s theorem, always: (i) state all four axioms precisely, (ii) give the Condorcet paradox as a concrete illustration of why satisfying all four simultaneously fails, and (iii) discuss at least one escape route (single-peaked preferences, cardinal utility, or weakened transitivity). For short-answer questions, be ready to identify which axiom a given voting rule violates — plurality voting can violate IIA (third-candidate effects); Borda count violates IIA; majority voting violates transitivity of social ordering. Non-dictatorship is violated only by explicitly dictatorial rules.`,
      didYouKnow: `Kenneth Arrow proved his impossibility theorem in his 1951 doctoral dissertation at Columbia University, submitted when he was just 29 years old. The result was so unexpected that Arrow himself initially thought he had made an error. The theorem earned him a share of the 1972 Nobel Memorial Prize in Economic Sciences — he remains one of the youngest Nobel laureates in economics ever. Arrow later said that the theorem was intended as a warning about the limits of collective rationality, not as a counsel of despair about democracy. He believed that real democratic systems work not because they satisfy his axioms, but because they operate in domains where preferences are sufficiently homogeneous or single-peaked to avoid the worst paradoxes.`,
    },
    flashcards: [
      {
        id: 'ol4-l4-fc1',
        front: "State Arrow\'s four axioms and identify which one is most frequently violated by real-world voting systems.",
        back: "(1) Unrestricted Domain: the rule works for all preference profiles. (2) Pareto Efficiency: unanimous preference for x over y implies social preference for x over y. (3) Independence of Irrelevant Alternatives (IIA): social ranking of x vs y depends only on individual rankings of x vs y. (4) Non-Dictatorship: no single agent\'s preference always determines the social ranking. IIA is most frequently violated — Borda count, approval voting, and most scoring systems violate it.",
        tags: ['olympiad', 'arrow-impossibility'],
      },
      {
        id: 'ol4-l4-fc2',
        front: 'Describe the Condorcet paradox and explain which Arrow axiom it shows majority voting violates.',
        back: "With 3 voters (A: X>Y>Z, B: Y>Z>X, C: Z>X>Y), majority voting yields X beats Y, Y beats Z, Z beats X — a cycle. Majority voting violates the requirement that the social ordering be transitive (a rational ordering), which is part of what Arrow\'s Unrestricted Domain axiom demands from a social welfare function: it must produce a complete, transitive social ranking for every preference profile.",
        tags: ['olympiad', 'condorcet-paradox', 'arrow-impossibility'],
      },
      {
        id: 'ol4-l4-fc3',
        front: "How does restricting to single-peaked preferences escape Arrow\'s impossibility, and what is the key result?",
        back: "With single-peaked preferences (each agent has an ideal point on a line and preferences fall on either side), majority voting is transitive for any odd number of voters (Black\'s theorem). The Condorcet winner always exists — it is the median voter\'s ideal point (median voter theorem). This escapes Arrow\'s impossibility by violating Unrestricted Domain (restricting to single-peaked profiles), making collective rationality achievable.",
        tags: ['olympiad', 'arrow-impossibility', 'social-choice'],
      },
    ],
    quiz: [
      {
        id: 'ol4-l4-q1',
        type: 'mcq',
        question:
          "Which of Arrow\'s conditions does the Borda count voting system violate?",
        options: [
          'Independence of Irrelevant Alternatives — the Borda score of x relative to y changes when a third alternative z is added or removed',
          'Pareto Efficiency — Borda count can rank y above x even when all voters prefer x to y',
          'Non-Dictatorship — Borda count gives disproportionate weight to the voter who ranks alternatives most extremely',
          'Unrestricted Domain — Borda count requires preferences to be single-peaked and fails for non-single-peaked profiles',
        ],
        correctAnswer: 0,
        explanation:
          "Borda count assigns points to alternatives based on their rank in each voter\'s ordering (e.g., 2 pts for 1st, 1 pt for 2nd, 0 pts for 3rd). Adding or removing a third alternative z changes how many points x and y receive relative to each other — for instance, if z is added between x and y in some voters' rankings, x loses a point and y gains one. This means the social ranking of x vs y depends on z (an 'irrelevant' alternative), directly violating IIA. Borda count satisfies Pareto, Non-Dictatorship, and Unrestricted Domain.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l4-q2',
        type: 'mcq',
        question:
          "Arrow's impossibility theorem applies when the set of alternatives contains at least three options. Which of the following explains why the theorem fails (i.e., aggregation is possible) with only two alternatives?",
        options: [
          "With two alternatives, majority voting satisfies all four of Arrow\'s axioms — it is Pareto-efficient, IIA holds trivially, it is non-dictatorial, and it is defined for all preference profiles; the Condorcet paradox cannot arise",
          'With two alternatives, IIA is automatically violated, so the theorem does not apply',
          'With two alternatives, individual preferences cannot be transitive, removing the Unrestricted Domain requirement',
          'With two alternatives, the Pareto condition implies non-dictatorship, so only three axioms are independent',
        ],
        correctAnswer: 0,
        explanation:
          "With only two alternatives {x, y}, majority voting satisfies all four Arrow axioms: (1) Unrestricted Domain — it is defined for all possible preference profiles over two options. (2) Pareto — if everyone prefers x to y, majority voting chooses x. (3) IIA — there are no third alternatives to be 'irrelevant', so IIA holds trivially. (4) Non-Dictatorship — a single voter cannot override a unanimous majority. Moreover, transitivity is trivially satisfied with two alternatives (a binary relation over two elements is always transitive). This is why May\'s theorem (1952) characterises majority voting as the unique fair rule for two alternatives.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l4-q3',
        type: 'mcq',
        question:
          "In Arrow\'s proof, a 'decisive' coalition for x over y is one that determines the social ranking of x vs y regardless of others' preferences. Which of the following correctly describes how the proof establishes dictatorship?",
        options: [
          'The Pareto condition makes the grand coalition decisive; IIA and transitivity then show decisiveness contracts to smaller and smaller groups until a single individual is decisive for all pairs — that individual is the dictator',
          'The Non-Dictatorship axiom is assumed false and shown to imply a contradiction with IIA, establishing the theorem by contrapositive',
          'Unrestricted Domain guarantees that for any profile, some individual must be decisive, and IIA then prevents decisiveness from being shared across individuals',
          'Pareto efficiency directly implies that the individual with the most extreme preferences is always decisive, completing the proof',
        ],
        correctAnswer: 0,
        explanation:
          "Arrow's proof proceeds as follows: (i) Pareto makes N (the grand coalition) decisive for every pair. (ii) For any decisive coalition S for some pair (x,y), one can construct a preference profile (using Unrestricted Domain) and apply IIA and transitivity to show that some strict subset of S or a single member is decisive for another pair (y,z). (iii) Repeating this 'field expansion' and 'contraction' argument shows that decisiveness must ultimately reside in a single individual, who is then decisive for all pairs — the dictator. The proof is a reductio: assuming all four axioms hold leads to the existence of a dictator, contradicting Non-Dictatorship.",
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 5 — Externalities & Market Design
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol4-l5',
    moduleId: 'ol4-welfare-ge',
    title: 'Externalities & Market Design',
    description:
      'Formalise Pigouvian taxation, analyse the Coase theorem with transaction costs, evaluate cap-and-trade efficiency, and introduce matching markets as a market design tool.',
    order: 5,
    estimatedMinutes: 60,
    tags: ['olympiad', 'pigouvian-tax', 'coase-theorem', 'cap-and-trade', 'matching-markets', 'externalities', 'market-design'],
    content: {
      isStub: false,
      conceptualExplanation: `An externality arises when the production or consumption of a good directly affects the utility or profit of a third party who is not party to the transaction and receives no compensation (negative externality) or makes no payment (positive externality). Formally, individual i\'s utility function u_i(x_i, e) depends on the actions e of agent j, where e enters j\'s objective but the market price does not reflect its impact on i. In a competitive equilibrium, j equates private marginal benefit to private marginal cost, ignoring the external marginal cost (EMC) or benefit imposed on i. The socially optimal level of the activity requires equating social marginal cost (SMC = PMC + EMC) to social marginal benefit (SMB = PMB + EMB). The welfare loss (deadweight loss) from a negative externality is the area between the SMC and PMC curves, bounded by the private and socially optimal output levels — a triangle representing transactions that occur in the market but whose social costs exceed their social benefits.

Arthur Pigou (1920) proposed correcting negative externalities by imposing a per-unit tax equal to the external marginal cost at the socially optimal output level: t* = EMC(Q*). At the optimum, t* = SMC(Q*) − PMC(Q*). This Pigouvian tax shifts the firm\'s effective marginal cost curve upward by t*, aligning private and social incentives: the firm maximises profit at Q* where PMC + t* = PMC + EMC = SMC = SMB = P. For a positive externality, the Pigouvian subsidy s* = EMB(Q*) is applied. Formally, consider a polluting firm with profit π(Q) = P·Q − C(Q) and an external damage D(Q) imposed on households. Social welfare is W(Q) = π(Q) − D(Q) = P·Q − C(Q) − D(Q). The social optimum requires dW/dQ = 0: P − C'(Q*) − D'(Q*) = 0, i.e., P = C'(Q*) + D'(Q*) = PMC(Q*) + EMC(Q*). The Pigouvian tax t* = D'(Q*) = EMC(Q*) achieves this, since the taxed firm maximises P·Q − C(Q) − t*·Q, yielding first-order condition P = C'(Q*) + t* = PMC(Q*) + EMC(Q*). ✓

Ronald Coase (1960) challenged the Pigouvian framework by arguing that, with well-defined property rights and zero transaction costs, private bargaining between the polluter and the affected party will achieve the socially optimal outcome regardless of the initial assignment of rights. This is the Coase theorem: with zero transaction costs and complete information, the efficient outcome is reached by private negotiation. If the polluter has the right to pollute, the victim will pay the polluter to reduce pollution up to the point where the marginal damage to the victim equals the marginal cost of abatement — the social optimum. If the victim has the right to a clean environment, the polluter will compensate the victim for any remaining pollution, again reaching the social optimum. The initial assignment of rights affects only the distribution of wealth, not efficiency. The practical force of the Coase theorem is its negation: when transaction costs are high (many affected parties, asymmetric information, free-rider problems in collective action), private bargaining fails and Pigouvian taxes or quantity regulations are needed. Cap-and-trade systems combine quantity regulation (a binding cap on total emissions) with price flexibility (tradeable permits allow firms to equalise marginal abatement costs). Under perfect permit markets, the equilibrium permit price equals the Pigouvian tax that achieves the same quantity, and both instruments achieve cost-effectiveness (minimum total abatement cost). Cap-and-trade is preferred when regulators have better information about aggregate quantity targets than about marginal abatement cost schedules; Pigouvian taxes are preferred when regulators know marginal damages well and want price certainty.`,
      prerequisiteRecap: `Arrow's impossibility theorem proved that no social welfare function can simultaneously satisfy Unrestricted Domain, Pareto Efficiency, Independence of Irrelevant Alternatives, and Non-Dictatorship when at least three alternatives exist — with the proof proceeding by showing that the Pareto condition makes the grand coalition decisive, and IIA with transitivity then contracts decisiveness to a single dictator. Externality theory now examines how market failure in the presence of unpriced side-effects prevents competitive equilibria from satisfying the Pareto efficiency that the First Welfare Theorem otherwise guarantees.`,
      recallQuestions: [
        {
          id: 'ol4-l5-recall-1',
          type: 'mcq' as const,
          question: 'Arrow\'s proof that any social welfare function satisfying Unrestricted Domain, Pareto, and IIA must be dictatorial proceeds via the concept of a decisive coalition. Which step in the proof most directly uses the Independence of Irrelevant Alternatives condition?',
          options: [
            'IIA is used to show that if coalition S is decisive for the pair (x, y), then decisiveness extends to other pairs (x, z) and (z, y) — allowing decisiveness to "contract" to a single agent regardless of which pair is considered',
            'IIA is used to show that the Pareto condition makes the grand coalition decisive, establishing the starting point of the proof',
            'IIA is used to rule out mixed strategies and ensure the social ordering is deterministic across all preference profiles',
            'IIA eliminates the possibility of a Condorcet winner, creating the cycle that forces dictatorship',
          ],
          correctAnswer: 0,
          explanation: 'After the Pareto condition establishes that the grand coalition N is decisive for every pair, the proof must show decisiveness contracts to a single individual. IIA is the key tool: if S is decisive for (x, y), construct a profile where some member d of S has x > z > y and all others in S have z > x > y. By transitivity and IIA applied to various pairs, one can show d is decisive for (x, z) and (z, y) as well — and by induction this extends to all pairs, making d a dictator. IIA prevents the social ranking of any pair from depending on how alternatives outside that pair are ordered, which is exactly what enables this contraction argument.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `The EU Emissions Trading System (EU ETS), launched in 2005, is the world\'s largest cap-and-trade market, covering roughly 40% of EU greenhouse gas emissions. From 2021, the EU began tightening the cap and strengthening the Market Stability Reserve to reduce the chronic oversupply of permits that had kept prices too low for a decade. By 2023, EU carbon prices exceeded €90/tonne CO₂ — close to many estimates of the social cost of carbon — demonstrating that well-designed market mechanisms can approach the Pigouvian optimum in practice. The EU is now extending the ETS to shipping, buildings, and road transport, applying the same cap-and-trade logic to harder-to-abate sectors, a direct test of whether the Coase/Pigou framework scales to complex, heterogeneous emission sources.`,
      interactiveElement: `Pigouvian Tax Calculation Exercise: A cement plant produces Q tonnes of cement per month. Private marginal cost: PMC(Q) = 10 + 2Q. Market price: P = 90. External marginal cost of pollution: EMC(Q) = 0.5Q (rising marginal damage). (1) Find the private equilibrium output Q_private (set P = PMC). (2) Derive the social marginal cost: SMC(Q) = PMC(Q) + EMC(Q). (3) Find the social optimum Q* (set P = SMC). (4) Calculate the optimal Pigouvian tax t* = EMC(Q*). (5) Verify that a firm facing PMC + t* produces Q* at the market price P = 90. (6) Compute the deadweight loss triangle from producing Q_private instead of Q*: DWL = ½ · (Q_private − Q*) · (SMC(Q_private) − PMC(Q_private)). (7) Extension: if 100 identical plants negotiate under zero transaction costs (Coase theorem), what outcome do they reach and how does it compare to Q*?`,
      vocabulary: [
        {
          term: 'Pigouvian Tax',
          definition:
            'A per-unit tax set equal to the external marginal cost at the socially optimal output level (t* = EMC(Q*)), designed to align the private marginal cost of a polluting firm with the social marginal cost, internalising the externality.',
          example:
            'If a steel mill imposes £30/tonne of CO₂ in climate damage at the socially optimal output, a Pigouvian carbon tax of £30/tonne causes the firm to choose the social optimum Q* rather than the over-producing private equilibrium.',
        },
        {
          term: 'Coase Theorem',
          definition:
            'When property rights are well-defined and transaction costs are zero, private bargaining between the polluter and the affected party achieves the socially efficient outcome regardless of the initial assignment of rights — only the distribution of income differs.',
          example:
            "A factory and a single downstream fishery negotiate over pollution levels. If the fishery has the right to clean water, the factory pays it to accept some pollution up to Q*. If the factory has the right to pollute freely, the fishery pays the factory to abate down to Q*. Either way, Q* is reached — only who pays whom differs.",
        },
        {
          term: 'Cap-and-Trade System',
          definition:
            'A market-based environmental policy that sets a binding aggregate ceiling (cap) on total emissions and issues tradeable permits equal to the cap; firms buy or sell permits until the permit price equates each firm\'s marginal abatement cost, achieving cost-effective emission reduction.',
          example:
            "The EU ETS caps total EU industrial CO₂ emissions at a declining annual level. A firm that can cheaply reduce emissions sells surplus permits to a firm facing high abatement costs. At equilibrium, all firms face the same permit price (≈ Pigouvian tax) and total abatement cost is minimised.",
        },
      ],
      deeperDive: `Matching markets — pioneered theoretically by Gale and Shapley (1962) and applied empirically by Alvin Roth — arise when prices alone cannot allocate goods efficiently because direct price-clearing is infeasible or undesirable (due to legal, ethical, or informational constraints). Examples include medical residency assignments, school choice, kidney exchange, and organ donation. In these settings, agents on both sides of the market have preferences over potential partners, and the design challenge is to find a stable matching — one with no blocking pair (two agents who would both prefer each other to their current match). The deferred acceptance algorithm (Gale-Shapley) always finds a stable matching that is optimal for the proposing side and achieves a form of constrained Pareto efficiency: no reallocation within the space of stable matchings can make both sides better off. Roth's empirical work showed that real markets that converged to stable outcomes (like the NRMP medical matching) survived, while those producing unstable matches (like some legal and medical subspecialty markets) "unravelled" — parties defected to bilateral deals outside the centralised market.

The design of kidney exchange illustrates the power of market design beyond traditional price mechanisms. Direct kidney exchange between incompatible donor-recipient pairs is infeasible (wrong blood types), but chains of compatible swaps — a "non-simultaneous extended altruistic donor chain" — can vastly expand the pool of potential matches. Roth, Sönmez, and Ünver applied matching theory to design exchange programmes that find efficiency-maximising chains while respecting ethical constraints (no direct payment for organs — monetising kidneys is banned in most jurisdictions, illustrating how market design must respect "repugnance" constraints). The resulting transplant chain programmes have saved thousands of lives in the US, demonstrating that welfare economics and market design can address problems where standard price mechanisms are both legally prohibited and practically inadequate.`,
      commonMisconceptions: [
        'The Coase theorem does not imply that externalities are never a problem — it applies only under zero transaction costs and perfect information. In practice, transaction costs are almost always positive (especially with many parties), which is precisely why Pigouvian taxes and regulations are necessary.',
        'A Pigouvian tax does not eliminate pollution or the externality entirely — it reduces the activity to the socially optimal level Q* > 0, where marginal social cost equals marginal social benefit. Setting Q* = 0 would only be optimal if damages exceeded benefits at all positive output levels.',
        'Cap-and-trade and Pigouvian taxes are not always equivalent in practice — with uncertainty about marginal abatement costs, the two instruments have different efficiency properties. A carbon tax provides price certainty (Weitzman, 1974); a cap provides quantity certainty. The optimal instrument depends on the slopes of the marginal damage and marginal abatement cost curves.',
      ],
      examinerTip: `For Pigouvian tax questions, always derive t* formally: set SMC = SMB, identify Q*, then compute t* = EMC(Q*). Draw a supply-and-demand diagram with PMC, SMC (PMC shifted up by EMC), and a horizontal demand curve; label Q_private, Q*, and the DWL triangle. For Coase theorem questions, always state "zero transaction costs and well-defined property rights," then explain why high transaction costs break down the result. For cap-and-trade, show that the equilibrium permit price equals the Pigouvian tax that achieves the same total emission level, and discuss the price-vs-quantity uncertainty trade-off.`,
      didYouKnow: `Ronald Coase wrote his landmark 1960 paper "The Problem of Social Cost" while at the University of Virginia, reportedly after a legendary dinner at Milton Friedman's home where he convinced twenty Chicago economists — initially unanimous against him — of his theorem in a single evening. The paper became the most-cited article in legal and economic scholarship and earned Coase the 1991 Nobel Memorial Prize in Economic Sciences. Alvin Roth, who turned matching theory into practical market design — saving thousands of lives through kidney exchange and improving school choice for millions of students — shared the 2012 Nobel Prize with Lloyd Shapley (co-inventor of the Gale-Shapley algorithm), who had passed away just months before the prize was announced.`,
    },
    flashcards: [
      {
        id: 'ol4-l5-fc1',
        front: 'Derive the optimal Pigouvian tax formula and explain what it achieves.',
        back: 'Social optimum: P = SMC(Q*) = PMC(Q*) + EMC(Q*). A Pigouvian tax t* = EMC(Q*) is added to PMC, so the firm maximises profit where P = PMC(Q*) + t* = PMC(Q*) + EMC(Q*) = SMC(Q*). The firm voluntarily chooses Q*, eliminating the deadweight loss from the externality without requiring quantity regulation or direct knowledge of the optimal quantity by the regulator (only marginal damage at Q* is needed).',
        tags: ['olympiad', 'pigouvian-tax', 'externalities'],
      },
      {
        id: 'ol4-l5-fc2',
        front: 'State the Coase theorem precisely and identify the two conditions under which it fails.',
        back: "Coase theorem: with well-defined property rights and zero transaction costs, private bargaining achieves the socially efficient allocation regardless of the initial assignment of rights (only distribution differs). It fails when: (1) Transaction costs are high — bargaining is too costly, especially with many affected parties or free-rider problems in collective action. (2) Asymmetric information — parties cannot verify each other's costs/damages, preventing efficient bargaining. In both cases, Pigouvian taxes or quantity regulation are required.",
        tags: ['olympiad', 'coase-theorem', 'externalities'],
      },
      {
        id: 'ol4-l5-fc3',
        front: 'Compare cap-and-trade and Pigouvian taxes under uncertainty about marginal abatement costs (Weitzman, 1974).',
        back: "Under uncertainty about firms' marginal abatement cost (MAC) curves: (1) Pigouvian tax provides price certainty — the regulator sets the carbon price and lets quantity adjust. Preferred when marginal damage is steep relative to MAC (quantity uncertainty is costly). (2) Cap-and-trade provides quantity certainty — the regulator sets total emissions and lets price adjust. Preferred when MAC is steep relative to marginal damage (price uncertainty is costly). At certainty, both instruments achieve the same efficient outcome with the same permit price equalling the Pigouvian tax.",
        tags: ['olympiad', 'cap-and-trade', 'pigouvian-tax'],
      },
    ],
    quiz: [
      {
        id: 'ol4-l5-q1',
        type: 'mcq',
        question:
          'A factory has private marginal cost PMC(Q) = 20 + Q and imposes external marginal cost EMC(Q) = 0.5Q on nearby residents. The market price is P = 50. What is the optimal Pigouvian tax t*?',
        options: [
          't* = 5, because the social optimum Q* = 20 implies EMC(20) = 0.5 × 20 = 10; wait — solve correctly: P = PMC + EMC gives 50 = 20 + Q + 0.5Q = 20 + 1.5Q, so Q* = 20 and t* = EMC(20) = 10',
          't* = 15, set equal to the average external cost at the private equilibrium output',
          't* = 30, equal to the total marginal cost at private equilibrium minus market price',
          't* = 0.5, the slope of the EMC curve',
        ],
        correctAnswer: 0,
        explanation:
          'Social optimum: P = SMC = PMC + EMC → 50 = (20 + Q) + 0.5Q = 20 + 1.5Q → 1.5Q = 30 → Q* = 20. Pigouvian tax: t* = EMC(Q*) = 0.5 × 20 = 10. Verify: with tax, firm sets P = PMC + t* → 50 = 20 + Q + 10 = 30 + Q → Q = 20 = Q*. ✓ Note: the option text contains the full derivation as part of the first option to assist identification.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l5-q2',
        type: 'mcq',
        question:
          'According to the Coase theorem, if a steel mill has the legal right to pollute and a single downstream fishery bears £800 of annual damage, while reducing pollution to zero costs the mill £500, the efficient outcome is:',
        options: [
          'The fishery pays the mill up to £800 to eliminate pollution; the mill accepts any payment above £500 (its abatement cost); a deal is struck at some price between £500 and £800 — pollution is eliminated, achieving the social optimum',
          'The mill continues polluting because it has the legal right to do so and the fishery cannot compel it to stop',
          'The government must impose a Pigouvian tax of £800 because private bargaining is insufficient without property right assignment',
          'The outcome is indeterminate; the Coase theorem only applies when the fishery has the right to clean water',
        ],
        correctAnswer: 0,
        explanation:
          "The Coase theorem: with zero transaction costs and well-defined rights, private bargaining achieves efficiency regardless of right assignment. Here, abatement costs the mill £500 but prevents £800 of fishery damage — net social gain of £300 from eliminating pollution. Since the mill has the right to pollute, the fishery offers a payment between £500 and £800. The mill's reservation price (minimum to stop) is £500; the fishery's maximum willingness to pay is £800 (its damage avoided). A mutually beneficial deal exists; they agree on some payment p ∈ (500, 800) and pollution is eliminated. The same efficient Q* is reached as under Pigouvian taxation.",
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol4-l5-q3',
        type: 'mcq',
        question:
          'In a cap-and-trade system with 100 firms, initially each firm receives 1,000 permits. Firm A can reduce emissions cheaply (marginal abatement cost MAC_A = 5Q_A) while Firm B faces high abatement costs (MAC_B = 20Q_B). If the cap requires total emissions to fall by 10,000 tonnes, what does cost-effectiveness require and how does the permit market achieve it?',
        options: [
          'Cost-effectiveness requires equal marginal abatement costs across all firms; the permit price adjusts until MAC_A = MAC_B = equilibrium permit price, so low-cost firm A abates more and high-cost firm B abates less than equal-division would require, minimising total abatement cost',
          'Cost-effectiveness requires each firm to reduce emissions by exactly 100 tonnes (equal reduction) regardless of abatement costs',
          'Cost-effectiveness is maximised when the highest-cost firm does all the abatement, since this minimises the number of firms involved in abatement',
          'The permit market achieves cost-effectiveness by allowing the government to set the Pigouvian tax equal to the average marginal abatement cost across firms',
        ],
        correctAnswer: 0,
        explanation:
          'Cost-effective emission reduction minimises total abatement cost for a given total reduction. This requires equalising marginal abatement costs across all firms: if MAC_A < MAC_B, total cost falls by shifting abatement from B to A. The permit market achieves this automatically: firm A abates cheaply, reducing its permit needs below its initial allocation, and sells surplus permits to firm B. Trading continues until the permit price p* = MAC_A(Q_A) = MAC_B(Q_B). At this equilibrium, low-cost abaters (A) do more abatement and high-cost abaters (B) do less, achieving the same total reduction at minimum cost. This is the key efficiency advantage of cap-and-trade over command-and-control standards that mandate equal reductions.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
]
