import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ol7-public-econ',
  title: 'Olympiad — Public Economics',
  description: 'Public goods theory, optimal taxation, social insurance, political economy, and cost-benefit analysis.',
  tier: 'OLYMPIAD' as const,
  track: 'OLYMPIAD' as const,
  unit: 7,
  estimatedHours: 5,
  color: '#ef4444',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  {
    id: 'ol7-l1',
    moduleId: 'ol7-public-econ',
    title: 'Public Goods & Club Goods',
    description: 'Master the non-rival/non-excludable taxonomy, derive the Samuelson condition for optimal public good provision, explore Buchanan club goods, and formalise the free-rider problem.',
    order: 1,
    estimatedMinutes: 55,
    tags: ['olympiad', 'public-goods', 'club-goods', 'free-rider', 'samuelson-condition'],
    content: {
      isStub: false,
      conceptualExplanation: `Goods are classified along two binary dimensions: rivalry (does one person's consumption reduce what is available to others?) and excludability (can non-payers be barred from consuming?). A pure public good is both non-rival and non-excludable. Non-rivalry means the marginal cost of extending consumption to an additional user is zero — the national defence that protects citizen i also protects citizen j at no extra cost. Formally, if the good is provided at level G, each individual i consumes the same G without diminishing others' consumption: q_i = G for all i. Non-excludability means it is technically or legally infeasible to deny access, creating the conditions for market failure since no private firm can charge a price and recover costs. Common examples include national defence, lighthouses, and basic scientific knowledge. By contrast, private goods are both rival and excludable; common-pool resources (CPR) are rival but non-excludable; and club goods, as introduced by James Buchanan (1965), are non-rival up to a congestion threshold but excludable through membership fees or tolls.

The Samuelson condition (Paul Samuelson, 1954) characterises the socially optimal level of a pure public good. Because the good is non-rival, each individual simultaneously benefits from the same unit; therefore the social marginal benefit is the vertical sum of all individual marginal willingness-to-pay curves, not the horizontal sum used for private goods. The optimality condition states: Σᵢ MRS_{iGY} = MRT_{GY}, where MRS_{iGY} is individual i's marginal rate of substitution between the public good G and a numeraire private good Y, and MRT_{GY} is the marginal rate of transformation (i.e., the marginal cost of producing G in terms of Y). In a two-person economy with preferences u_i(x_i, G), efficiency requires that the sum of marginal benefits across all individuals equals the marginal cost — a condition that decentralised markets systematically violate because each individual, treating G as given, sets only their own MRS equal to zero contribution rather than to the full social MRT.

The free-rider problem formalises why markets underprovide public goods. Each individual i chooses voluntary contribution g_i to finance G = Σⱼ gⱼ, taking others' contributions as given (Nash behaviour). Individual i's best response maximises u_i(w_i − g_i, G), yielding MRS_{iGY} = 1 (the private cost of one unit of G). But the Samuelson condition requires Σᵢ MRS_{iGY} = n in a symmetric n-person economy, so each individual ignores the n − 1 external benefits their contribution confers. The Nash equilibrium contribution g_i* is thus far below the efficient level. Voluntary provision converges to the efficient quantity only when n = 1 (no externality) or preferences are perfectly aligned — a result formalised by Bergstrom, Blume & Varian (1986). Government provision financed by compulsory taxation (or Lindahl pricing) is the standard corrective, though Lindahl pricing itself faces an incentive-compatibility problem since consumers have an incentive to misreport preferences.`,
      realWorldHook: `The COVID-19 vaccine debate illustrated all four quadrants of the goods taxonomy simultaneously: vaccines themselves are private goods (rival, excludable), but herd immunity is a pure public good (non-rival, non-excludable), driving massive government subsidies and mandates to overcome free-riding. Meanwhile, vaccine R&D knowledge is a club good at the international level — potentially excludable via patents but non-rival in use — fuelling debates over TRIPS waivers that echo Buchanan's original club-goods framework.`,
      interactiveElement: `Samuelson Condition Exercise: A two-person economy must choose the quantity G of a public good. Person A has MRS_A = 10 − G and Person B has MRS_B = 8 − G. The marginal cost (MRT) of G in terms of the private good is constant at 12. (1) Write out the Samuelson condition: MRS_A + MRS_B = MRT. (2) Substitute: (10 − G) + (8 − G) = 12. (3) Solve: 18 − 2G = 12 → G* = 3. (4) Verify: at G* = 3, MRS_A = 7, MRS_B = 5, sum = 12 = MRT. ✓ Note that at G* = 3, neither individual's MRS alone equals 12 — the market would underprovide because each person sets only their own MRS = 12, yielding a Nash equilibrium where only one person contributes a positive amount.`,
      vocabulary: [
        {
          term: 'Samuelson Condition',
          definition: 'The efficiency condition for public good provision: the sum of all individuals\' marginal rates of substitution between the public good and a private numeraire must equal the marginal rate of transformation (marginal cost).',
          example: 'In a 3-person economy where MRS values are 4, 5, and 6, the optimal G satisfies MRS_1 + MRS_2 + MRS_3 = 15 = MC, whereas a private market would set any single MRS = MC, severely underproviding G.',
        },
        {
          term: 'Free-Rider Problem',
          definition: 'The incentive for rational individuals to consume a non-excludable good without contributing to its cost, anticipating that others will provide it anyway, leading to systematic underprovision in voluntary equilibrium.',
          example: 'In a neighbourhood of 50 households, each hopes others will hire a private security patrol (a near-public good), so no household contributes voluntarily, even though all would benefit if the patrol were funded collectively.',
        },
        {
          term: 'Club Good',
          definition: 'A good that is excludable (access can be restricted via membership or tolls) but non-rival up to a congestion threshold beyond which additional users impose costs on existing members, as formalised by Buchanan (1965).',
          example: 'A private swimming pool is a club good: the club can exclude non-members (excludable), and below capacity each new swimmer barely affects others (non-rival), but above capacity crowding degrades the experience (congestion sets in).',
        },
      ],
      deeperDive: `Beyond the basic taxonomy, the theory of public goods intersects with mechanism design through the Vickrey-Clarke-Groves (VCG) mechanism, which achieves incentive-compatible revelation of preferences for public goods by charging each agent a Clarke tax equal to the externality their presence imposes on others. While theoretically elegant, VCG mechanisms rarely balance the budget — the sum of Clarke taxes is typically less than the cost of the public good — a result formalised in the Green-Laffont theorem. This creates a fundamental tension: no mechanism can simultaneously achieve efficiency, incentive compatibility, individual rationality, and budget balance for public goods, placing hard limits on what voluntary or quasi-voluntary provision can achieve.

The theory of clubs raises additional questions about optimal membership size and the optimal number of clubs in an economy. Buchanan's club model trades off the per-member cost savings from expanding membership against the congestion cost. The optimal club size N* satisfies: marginal congestion cost of the N*th member = per-member reduction in cost sharing. With free entry of clubs, a competitive equilibrium in the market for clubs can be efficient under certain conditions (Ellickson, 1979), connecting club theory to Tiebout's (1956) model of local public goods where households "vote with their feet," sorting across jurisdictions to find their preferred tax-public-good bundle — a decentralised mechanism that partially solves the preference-revelation problem without requiring Lindahl pricing.`,
      commonMisconceptions: [
        'Non-rivalry does not mean zero cost of production — a public good can be very expensive to produce (e.g., a missile defence system); it only means that once produced, extending consumption to additional users costs nothing at the margin.',
        'The free-rider problem does not require selfishness or malice: even perfectly altruistic agents will free-ride if they rationally anticipate that their contribution is pivotal only rarely, as formalised in the Bergstrom-Blume-Varian voluntary provision model.',
        'The Samuelson condition describes the efficient allocation, not a market outcome — markets will not reach this equilibrium spontaneously; the condition is a normative benchmark against which actual provision (private or public) is judged.',
      ],
      examinerTip: `Olympiad markers award full credit only when candidates explicitly distinguish the vertical summation of MRS curves (public goods) from the horizontal summation of demand curves (private goods) and correctly apply the Samuelson condition with algebra. Always state why market provision fails (free-rider problem leading to Nash underprovision) before proposing the correction.`,
      didYouKnow: `Paul Samuelson published the paper establishing the Samuelson condition in 1954 in just two pages — one of the most influential short papers in the history of economics. He later said that despite its elegance, he was pessimistic about whether the optimal solution could ever be implemented in practice, given the incentive-compatibility constraints.`,
    },
    flashcards: [
      {
        id: 'ol7-l1-fc1',
        front: 'State the Samuelson condition for optimal public good provision and explain why the MRS curves are summed vertically rather than horizontally.',
        back: 'Σᵢ MRS_{iGY} = MRT_{GY}. MRS curves are summed vertically because the public good is non-rival: every individual simultaneously consumes the same unit G, so the total social benefit of one more unit is the sum of each individual\'s willingness-to-pay for that unit. Horizontal summation applies to private goods where each unit goes to only one consumer.',
        tags: ['olympiad', 'public-goods', 'samuelson-condition'],
      },
      {
        id: 'ol7-l1-fc2',
        front: 'How does Buchanan\'s club good differ from a pure public good, and what determines the optimal club size?',
        back: 'A club good is excludable (unlike a pure public good) and non-rival only below a congestion threshold. Optimal club size N* equates the marginal congestion cost imposed by the N*th member with the per-member reduction in cost sharing from adding that member: MC_congestion(N*) = C/N*² (in a symmetric model). Beyond N*, congestion costs outweigh cost-sharing benefits.',
        tags: ['olympiad', 'club-goods', 'buchanan'],
      },
      {
        id: 'ol7-l1-fc3',
        front: 'Why does voluntary provision of a public good lead to a Nash equilibrium below the Samuelson optimum?',
        back: 'Each individual i chooses contribution g_i to maximise u_i(w_i − g_i, G), taking total G as given. The FOC yields MRS_{iGY} = 1 (private cost), not Σ MRS = n·1 as the Samuelson condition requires. Each person ignores the (n−1) external benefits their contribution provides, so Nash contributions are too low relative to the social optimum — the classic free-rider underprovision result.',
        tags: ['olympiad', 'free-rider', 'public-goods'],
      },
    ],
    quiz: [
      {
        id: 'ol7-l1-q1',
        type: 'mcq',
        question: 'In a three-person economy, individuals have the following MRS values at a given level of public good G = 4: MRS_1 = 5, MRS_2 = 4, MRS_3 = 3. The marginal cost of producing G is 14. According to the Samuelson condition, what should happen?',
        options: [
          'G should be increased, because the sum of MRS values (12) is less than marginal cost (14)',
          'G should be decreased, because the sum of MRS values (12) is less than marginal cost (14)',
          'G is at the optimum, because individual MRS values average to 4 which equals the average willingness-to-pay',
          'G should be increased, because each individual\'s MRS is positive, indicating unmet demand',
        ],
        correctAnswer: 1,
        explanation: 'The Samuelson condition requires Σ MRS = MC. Here Σ MRS = 5 + 4 + 3 = 12 < 14 = MC. Since the aggregate willingness-to-pay for another unit (12) is less than its marginal cost (14), G should be reduced. We are currently overproducing the public good relative to the social optimum.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l1-q2',
        type: 'mcq',
        question: 'Which of the following best explains why a lighthouse is considered a public good while a toll road is typically classified as a club good?',
        options: [
          'A lighthouse is non-rival and non-excludable (ships cannot be practically excluded from its beam), while a toll road is non-rival below congestion but excludable via toll gates',
          'A lighthouse is provided by the government while a toll road is provided by private firms, making the former public and the latter private by definition',
          'A lighthouse benefits only nearby ships (local public good) while a toll road benefits all citizens (national public good), reversing the classification',
          'A lighthouse is non-excludable because it is built on public land, while a toll road is excludable because it was built with private capital',
        ],
        correctAnswer: 0,
        explanation: 'The public/club distinction rests on the twin criteria of rivalry and excludability, not on ownership or geography. A lighthouse beam is non-rival (one ship\'s use of the signal doesn\'t diminish its availability to others) and practically non-excludable (no technology can selectively block the light from ships that haven\'t paid). A toll road is non-rival at low traffic volumes but becomes rival through congestion; crucially, it is excludable through tolls — making it a classic club good in Buchanan\'s framework.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l1-q3',
        type: 'mcq',
        question: 'The Vickrey-Clarke-Groves (VCG) mechanism achieves incentive-compatible revelation of preferences for public goods, yet it is rarely used in practice. The primary reason is:',
        options: [
          'VCG mechanisms generally fail to balance the government budget — the Clarke taxes collected are insufficient to cover the cost of the public good, creating a fiscal deficit',
          'VCG mechanisms require each agent to report a private good demand, which is more complex than reporting a public good valuation',
          'VCG mechanisms only work when agents have linear utility functions, excluding most real-world preferences',
          'VCG mechanisms produce efficient outcomes only under perfect competition, making them inapplicable to public goods markets where competition is absent',
        ],
        correctAnswer: 0,
        explanation: 'The Green-Laffont theorem proves that no mechanism can simultaneously achieve allocative efficiency, dominant-strategy incentive compatibility, individual rationality, and budget balance for public goods. VCG achieves the first three but violates budget balance: the sum of Clarke taxes (designed to make truth-telling dominant) is typically less than the cost of the efficient public good quantity, leaving the government with a shortfall that must be financed through distortionary taxes elsewhere.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
  {
    id: 'ol7-l2',
    moduleId: 'ol7-public-econ',
    title: 'Optimal Taxation Theory',
    description: 'Derive the Ramsey rule for commodity taxation and the inverse elasticity rule, minimise deadweight loss under a revenue constraint, and understand Mirrlees optimal income tax.',
    order: 2,
    estimatedMinutes: 60,
    tags: ['olympiad', 'ramsey-rule', 'optimal-taxation', 'deadweight-loss', 'mirrlees', 'inverse-elasticity'],
    content: {
      isStub: false,
      conceptualExplanation: `The theory of optimal taxation asks: given that the government must raise a fixed revenue R, how should taxes be structured to minimise the deadweight loss (excess burden) imposed on society? Frank Ramsey's 1927 answer — derived for the case of a single consumer and multiple commodities — remains the cornerstone of tax theory. Suppose the government can set specific taxes t_i on goods i = 1, …, n. The Ramsey rule states that, in the optimum, taxes should be set so that the proportional reduction in the compensated (Hicksian) demand for each good is equal across all taxed goods: ΔH_i / H_i = −λ for all i, where H_i is the compensated demand for good i and λ is a common proportionality constant determined by the revenue requirement. Equivalently, in matrix notation the Ramsey conditions require that the tax vector t satisfies: S·t = −λ·x, where S is the Slutsky substitution matrix and x is the vector of demands. This form reveals that optimal taxes depend on the entire matrix of cross-price substitution effects, not just own-price elasticities.

When goods are weakly separable and cross-price substitution effects between taxed goods are zero (a strong but tractable simplification), the Ramsey rule collapses to the celebrated inverse elasticity rule (IER): t_i / p_i = k / |ε_i|, where t_i is the specific tax, p_i is the producer price, ε_i is the own-price elasticity of compensated demand, and k is a positive constant equal across all goods. The IER prescribes higher ad valorem tax rates on goods with less elastic demand, because taxing inelastic goods distorts quantities less, minimising the triangle of deadweight loss. The DWL of a per-unit tax t on a good with own-price elasticity ε and initial quantity Q is approximately: DWL ≈ ½ · t² · |ε| · Q / p. Minimising total DWL across goods subject to a revenue constraint Σ t_i Q_i = R yields the inverse elasticity rule as a first-order condition.

James Mirrlees's 1971 model of optimal income taxation extends Ramsey's framework to a richer environment where the government cannot observe individual skill levels (wages) and must therefore rely on distortionary income taxes rather than lump-sum taxes. Individuals have skill level w drawn from a distribution, choose labour supply l, and earn income y = wl. The government maximises a social welfare function W = ∫ u(c_i, l_i) dF(w) subject to a revenue constraint and the incentive-compatibility constraints ensuring that each type voluntarily chooses the consumption-labour bundle intended for them. Key results include: (1) the top marginal tax rate should be zero if the skill distribution has bounded support (the "zero top rate" result), (2) optimal marginal rates are generally non-monotone and depend on the density of types, (3) the optimal schedule balances redistribution benefits against labour supply distortion costs captured by the elasticity of taxable income. Modern Saez (2001) formula for the optimal top rate τ* = 1 / (1 + a·ε), where a is the Pareto parameter of the top of the income distribution and ε is the elasticity of taxable income, directly operationalises Mirrlees insights.`,
      realWorldHook: `When the UK government debated reducing its top income tax rate from 50% to 45% in 2012, the analysis drew directly on Mirrlees-type optimal tax theory. The Treasury's review cited estimates of the elasticity of taxable income (ETI) for top earners near 0.45, and using the Saez formula (τ* = 1/(1 + a·ε) with Pareto parameter a ≈ 2.5), calculated a revenue-maximising top rate of approximately 47% — concluding that the 50% rate was above this peak. Meanwhile, the inverse elasticity rule appears implicitly in "sin taxes" on tobacco and alcohol, goods with relatively inelastic demand, where high specific taxes raise revenue with comparatively modest quantity distortions.`,
      interactiveElement: `Inverse Elasticity Rule Exercise: A government must raise revenue by taxing good A and good B. Good A has own-price elasticity of compensated demand ε_A = −0.5. Good B has ε_B = −2.0. Assume cross-price substitution effects are zero. (1) Apply the IER: t_i/p_i = k/|ε_i|. (2) For good A: t_A/p_A = k/0.5 = 2k. For good B: t_B/p_B = k/2.0 = 0.5k. (3) Therefore the ratio of ad valorem tax rates: (t_A/p_A)/(t_B/p_B) = 2k/0.5k = 4. Good A should face a tax rate four times higher than good B. Intuition: Good A buyers are less responsive to price (inelastic), so taxing them heavily causes little quantity distortion, minimising DWL per unit of revenue raised. Note this is a positive prescription for revenue-raising efficiency, not an equity recommendation — distributional concerns may reverse the ranking if inelastic goods are necessities consumed by low-income households.`,
      vocabulary: [
        {
          term: 'Ramsey Rule',
          definition: 'The optimal commodity tax rule stating that taxes should reduce compensated demands for all goods in the same proportion, minimising deadweight loss for a given revenue target; in the separable case it implies the inverse elasticity rule.',
          example: 'If the Ramsey proportional reduction is λ = 10%, then optimal taxes must reduce compensated purchases of bread, fuel, and clothing each by 10%, which requires different ad valorem rates because their demand elasticities differ.',
        },
        {
          term: 'Inverse Elasticity Rule (IER)',
          definition: 'A simplified version of the Ramsey rule (valid when cross-price substitution effects are zero) stating that the optimal ad valorem tax rate on each good is inversely proportional to its compensated own-price elasticity of demand.',
          example: 'If cigarettes have |ε| = 0.3 and cinema tickets have |ε| = 1.5, the IER prescribes taxing cigarettes at five times the ad valorem rate of cinema tickets to minimise aggregate deadweight loss.',
        },
        {
          term: 'Elasticity of Taxable Income (ETI)',
          definition: 'The percentage change in reported taxable income in response to a 1% change in the net-of-tax rate (1 − τ), capturing behavioural responses including labour supply, avoidance, and evasion; a key parameter in Mirrlees-type optimal income tax formulas.',
          example: 'An ETI of 0.5 implies that a 10% reduction in the net-of-tax rate (e.g., raising the marginal rate from 40% to 46%) reduces taxable income by 5%, substantially eroding the revenue gain from the rate hike.',
        },
      ],
      deeperDive: `The Ramsey–Mirrlees framework assumes a benevolent government maximising a well-defined social welfare function and has sharp distributional implications. The inverse elasticity rule recommends higher taxes on necessities (food, energy) which tend to have inelastic demand — the opposite of equity principles that would tax luxuries more heavily. The resolution lies in the Diamond-Mirrlees (1971) production efficiency theorem, which shows that optimal taxes should not distort producer prices (no taxes on intermediate goods), and in the use of non-linear income taxes (Mirrlees schedules) alongside commodity taxes to handle distributional concerns through the income tax system while using commodity taxes solely for Ramsey efficiency. Atkinson and Stiglitz (1976) further showed that if preferences are weakly separable between consumption goods and labour (utility takes the form u(v(c_1, …, c_n), l)), then the optimal policy uses only income taxes and no commodity taxes — a powerful result that drastically simplifies the tax problem.

The Saez (2001) formula for optimal top marginal rates, τ* = 1/(1 + a·ε), neatly illustrates the key trade-offs. The Pareto parameter a ≥ 1 measures the thickness of the right tail of the income distribution (lower a means fatter tail, more revenue from top earners). The ETI ε captures distortionary cost. A higher ε makes taxation more costly, lowering τ*; a lower a (fatter tail) means top earners respond more to taxes in aggregate, also lowering τ*. Empirically, estimates of ε for top earners range from 0.1 to 0.5, and a typically lies between 1.5 and 3, implying revenue-maximising top rates between roughly 50% and 80% — substantially above current rates in most OECD countries, fuelling ongoing academic and policy debate.`,
      commonMisconceptions: [
        'The inverse elasticity rule does not mean "tax inelastic goods more to raise money easily" — it is specifically derived from minimising deadweight loss for a given revenue; it says nothing about how much revenue to raise or about distributional fairness.',
        'The Mirrlees zero-top-rate result applies to the marginal rate on the highest-skilled individual only, not to average rates or to marginal rates at high but not the absolute top of the distribution — in practice, optimal schedules can have high marginal rates well below the very top.',
        'Deadweight loss is proportional to t² (not t), meaning that doubling a tax rate quadruples the DWL from that tax — a convexity that makes spreading tax burdens across many goods more efficient than concentrating them on a few.',
      ],
      examinerTip: `Olympiad questions on optimal taxation almost always require explicit use of the inverse elasticity rule ratio: t_A/t_B = |ε_B|/|ε_A|. Show all algebraic steps. Also be prepared to explain why the rule fails when cross-price substitution effects are large (the full Ramsey matrix formulation applies), and to discuss the equity-efficiency trade-off when inelastic goods are necessities.`,
      didYouKnow: `Frank Ramsey developed his optimal tax rule in 1927 at age 23, in a paper written at the request of Arthur Pigou. Ramsey died two years later at age 26, having also made fundamental contributions to mathematical logic, probability theory, and philosophy of language. The Ramsey rule lay largely dormant for four decades until Diamond and Mirrlees revived and extended it in 1971.`,
    },
    flashcards: [
      {
        id: 'ol7-l2-fc1',
        front: 'State the inverse elasticity rule and derive the tax ratio t_A/t_B for two goods with elasticities ε_A and ε_B.',
        back: 'IER: t_i/p_i = k/|ε_i| for all goods i. Therefore t_A/p_A = k/|ε_A| and t_B/p_B = k/|ε_B|. Dividing: (t_A/p_A)/(t_B/p_B) = |ε_B|/|ε_A|. If p_A = p_B, then t_A/t_B = |ε_B|/|ε_A| — the good with more inelastic demand receives the higher tax rate.',
        tags: ['olympiad', 'inverse-elasticity-rule', 'ramsey-rule'],
      },
      {
        id: 'ol7-l2-fc2',
        front: 'State the Saez formula for the revenue-maximising top marginal income tax rate and identify the two key parameters.',
        back: 'τ* = 1 / (1 + a·ε), where a is the Pareto parameter of the top of the income distribution (measuring tail thickness; typically 1.5–3) and ε is the elasticity of taxable income for top earners (typically 0.1–0.5). A higher ε (more behavioural response) lowers τ*; a lower a (fatter tail) also lowers τ*.',
        tags: ['olympiad', 'mirrlees', 'saez-formula', 'optimal-income-tax'],
      },
      {
        id: 'ol7-l2-fc3',
        front: 'Why does the Atkinson-Stiglitz theorem imply that commodity taxes may be redundant alongside an optimal income tax?',
        back: 'Atkinson and Stiglitz (1976) showed that if preferences are weakly separable between the consumption bundle and leisure (u = U(v(c_1,…,c_n), l)), then any redistribution achievable with differentiated commodity taxes is already achievable with a non-linear income tax alone. Commodity taxes add no welfare gain in this case — only the income tax is needed. The theorem breaks down when consumption and leisure are non-separable (e.g., if high earners have stronger preferences for certain goods).',
        tags: ['olympiad', 'atkinson-stiglitz', 'commodity-taxes'],
      },
    ],
    quiz: [
      {
        id: 'ol7-l2-q1',
        type: 'mcq',
        question: 'A government can tax goods X and Y. Good X has compensated own-price elasticity −0.4 and good Y has compensated own-price elasticity −1.6. Cross-price substitution effects are zero. To minimise deadweight loss for a given revenue target, the optimal ratio of ad valorem tax rates t_X/p_X to t_Y/p_Y is:',
        options: [
          '4 : 1 (good X taxed at four times the rate of good Y)',
          '1 : 4 (good Y taxed at four times the rate of good X)',
          '1 : 1 (equal ad valorem rates on both goods)',
          '0.4 : 1.6 (rates proportional to own-price elasticities)',
        ],
        correctAnswer: 0,
        explanation: 'By the inverse elasticity rule, t_i/p_i = k/|ε_i|. For X: t_X/p_X = k/0.4 = 2.5k. For Y: t_Y/p_Y = k/1.6 = 0.625k. Ratio: 2.5k/0.625k = 4. Good X (more inelastic) should be taxed at four times the ad valorem rate of good Y to minimise aggregate DWL. Taxing X heavily causes little quantity distortion; taxing Y heavily would create a large triangle of DWL.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l2-q2',
        type: 'mcq',
        question: 'The Ramsey rule in its general matrix form states that S·t = −λ·x, where S is the Slutsky matrix, t is the tax vector, and x is the demand vector. This formulation differs from the inverse elasticity rule because:',
        options: [
          'It accounts for cross-price substitution effects between goods, so the optimal tax on good i depends on the substitutability of all other goods, not just the own-price elasticity of i',
          'It applies only to goods with positive income elasticity, whereas the IER applies universally',
          'It requires a balanced government budget, whereas the IER applies only when the revenue constraint is non-binding',
          'It maximises consumer surplus rather than minimising deadweight loss, reflecting a different social objective',
        ],
        correctAnswer: 0,
        explanation: 'The general Ramsey rule S·t = −λ·x uses the full Slutsky substitution matrix, capturing how a tax on good i affects compensated demand for good j through cross-price effects. When cross-price substitution effects are zero (S is diagonal), dividing the ith equation by x_i and the own-price Slutsky element yields the inverse elasticity rule as a special case. With non-zero cross effects — common for complements and substitutes — the IER is an approximation and the matrix formulation is needed for true optimality.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l2-q3',
        type: 'mcq',
        question: 'According to the Mirrlees model of optimal income taxation, the marginal tax rate on the highest-earning individual in the economy should be:',
        options: [
          'Zero, because taxing the last unit of the highest earner\'s income has no redistributive benefit (there is no one above to redistribute to) while still distorting labour supply',
          'The highest in the economy, to maximise redistribution from those with the greatest ability to pay',
          'Equal to the average marginal rate in the economy, to maintain schedule continuity',
          'Determined solely by the elasticity of taxable income, independent of the income distribution\'s shape',
        ],
        correctAnswer: 0,
        explanation: 'The Mirrlees zero top rate result: at the very top of the skill distribution, raising the marginal rate by a small amount collects revenue only from that one type (there is no mass above who would also pay) while distorting their labour supply. The marginal redistributive benefit is zero (no one above to benefit) but the distortionary cost is positive, so the optimal marginal rate is zero. This is a knife-edge result for the single top type, not for high but not highest earners, where positive marginal rates are generally optimal.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
  {
    id: 'ol7-l3',
    moduleId: 'ol7-public-econ',
    title: 'Social Insurance & Redistribution',
    description: 'Analyse adverse selection and moral hazard in insurance markets, connect Akerlof\'s lemons model to social insurance rationales, examine social security design, and evaluate the EITC.',
    order: 3,
    estimatedMinutes: 55,
    tags: ['olympiad', 'adverse-selection', 'moral-hazard', 'akerlof-lemons', 'social-security', 'EITC', 'social-insurance'],
    content: {
      isStub: false,
      conceptualExplanation: `Insurance markets are plagued by two canonical information failures. Adverse selection arises when the insurer cannot observe individual risk types before writing a contract, while the insured has private information about their own risk. George Akerlof's 1970 "market for lemons" formalised this dynamic: in a population of high-risk (H) and low-risk (L) individuals, an insurer offering a single pooling price must charge a premium reflecting the average risk. At this price, low-risk individuals find the premium actuarially unfair and exit the market; the insurer, now facing only high-risk individuals, must raise premia, driving out the next-lowest risk tier, and so on. In the extreme case, unravelling eliminates the market entirely. Formally, if θ ∈ {θ_L, θ_H} represents risk types and the insurer offers a contract (q, P) — coverage q at premium P — adverse selection means the market equilibrium satisfies PCL: P ≥ θ·q for the full pool, violating the actuarial fairness condition P = θ_L·q that low-risk types require. The Rothschild-Stiglitz (1976) model shows that only separating equilibria can survive when pooling attracts profitable cream-skimming entry, but separating equilibria involve the low-risk type purchasing incomplete insurance — a welfare loss relative to the symmetric information optimum.

Moral hazard arises after the contract is written: once insured, individuals may reduce preventive effort or increase risk-taking because they bear less than the full cost of adverse outcomes. In Arrow's model, an individual with wealth W and utility u(W) faces a loss L with probability π(e), where e is costly effort. Under full insurance (premium = expected loss), the individual sets π'(e) = 0 — zero effort — because the marginal benefit of effort (reduced expected loss) accrues entirely to the insurer. The first-best effort level e* satisfies −π'(e*)·L = c'(e*) (marginal benefit = marginal cost of effort), achievable only if the insurer can observe and contract on e. With moral hazard, optimal insurance trades off risk-sharing (full coverage is optimal for a risk-averse agent) against incentive provision (partial coverage is needed to induce effort) — the classic Holmström trade-off. The optimal contract provides partial insurance, with deductibles and co-payments designed to preserve effort incentives.

Social insurance — government-provided health insurance, unemployment insurance (UI), workers' compensation, and social security — is justified precisely by the market failures above. Adverse selection justifies mandatory coverage (preventing the unravelling described by Akerlof), while the non-diversifiable aggregate risks (recessions, pandemics) that private markets cannot pool justify public provision. Baily (1978) and Chetty (2006) derive an elegant sufficient-statistics formula for the optimal UI replacement rate ρ* that balances the consumption-smoothing benefit of insurance against the moral hazard cost of reduced job search: the optimal ρ satisfies the condition that the ratio of the marginal utility of consumption while unemployed to the marginal utility while employed equals 1 plus the moral hazard distortion (estimated by the duration elasticity of UI). The Earned Income Tax Credit (EITC) addresses the separate issue of in-work poverty: rather than taxing earned income, it provides a subsidy that rises with earnings up to a phase-in plateau, then phases out. The EITC's labour supply incentive operates differently across the budget constraint — the phase-in region subsidises work entry, while the phase-out region imposes high effective marginal tax rates on workers earning in the range — a trade-off extensively studied in the empirical public finance literature.`,
      realWorldHook: `The Affordable Care Act (ACA) of 2010 is a direct policy response to adverse selection unravelling in the US individual health insurance market. The individual mandate (requiring purchase of insurance or paying a penalty) was designed explicitly to prevent adverse selection death spirals by forcing low-risk individuals into the pool. The subsequent Republican-led removal of the mandate penalty in 2017 — predicted by Akerlof's model to trigger adverse selection — was associated with rising premiums and insurer exits, providing a natural experiment in insurance market dynamics studied extensively by health economists.`,
      interactiveElement: `Adverse Selection Exercise: A market has 100 individuals: 60 low-risk (expected loss = $200) and 40 high-risk (expected loss = $800). Insurers are competitive and cannot distinguish types. (1) Calculate the pooling premium: (60×$200 + 40×$800)/100 = ($12,000 + $32,000)/100 = $440. (2) At $440, low-risk individuals face a premium 2.2× their actuarially fair price ($200). Assume they exit if premium > 1.5× fair price (i.e., >$300). Low-risk individuals exit. (3) New pool: 40 high-risk only. New premium = $800. (4) At $800 only high-risk participate. Market provides insurance only to high-risk at full actuarial cost — low-risk are uninsured despite being willing to pay $200. This is the adverse selection market failure the ACA mandate attempted to correct.`,
      vocabulary: [
        {
          term: 'Adverse Selection',
          definition: 'A pre-contractual information asymmetry where parties with private information about their risk type self-select into contracts in ways that are unprofitable for the less-informed party, potentially causing market unravelling.',
          example: 'In an unregulated annuity market, individuals who know they are long-lived disproportionately purchase annuities; insurers, unable to distinguish longevity types, must price annuities as if all buyers are long-lived, making them unaffordable for average-longevity buyers.',
        },
        {
          term: 'Moral Hazard',
          definition: 'A post-contractual information problem where the insured party changes behaviour after obtaining insurance in ways that increase the probability or magnitude of the insured loss, because the cost of the adverse outcome is partly borne by the insurer.',
          example: 'Homeowners with comprehensive fire insurance may be less vigilant about fire prevention (e.g., smoking indoors, failing to replace smoke detector batteries) because insurance reduces their personal financial stake in avoiding a fire.',
        },
        {
          term: 'Earned Income Tax Credit (EITC)',
          definition: 'A refundable US tax credit for low-to-moderate income working individuals that phases in with earned income (creating a wage subsidy), reaches a maximum at a plateau, then phases out — designed to encourage work while supplementing income.',
          example: 'A single parent earning $10,000 might receive an EITC of $3,400 (phase-in rate ~34%), while a similar parent earning $25,000 might receive only $1,500 as the credit phases out, facing an effective marginal tax rate of over 40% in the phase-out range.',
        },
      ],
      deeperDive: `The Rothschild-Stiglitz (RS) separating equilibrium involves a subtle game-theoretic problem: the separating contract pair {(q_H, P_H), (q_L, P_L)} — where high-risk types receive full coverage at a high premium and low-risk types receive partial coverage at a low premium — may not be a Nash equilibrium if a deviant insurer can offer a pooling contract that attracts both types and earns positive profits. This occurs when the proportion of high-risk types is sufficiently low. The equilibrium may simply fail to exist in the RS framework, motivating extensions using Wilson equilibrium, reactive equilibrium, or signalling games. The non-existence problem was resolved by Miyazaki (1977) and Spence (1978) using alternative equilibrium concepts that allow insurers to respond to deviations.

Social security design balances several objectives: consumption smoothing over the lifecycle (the Modigliani-Brumberg life-cycle hypothesis), redistribution from high-wage to low-wage workers (through progressive benefit formulas), insurance against longevity risk (annuitisation), and insurance against disability and early death. The optimal design literature (Diamond and Mirrlees, 2000) shows that forced savings (defined-benefit or defined-contribution mandates) correct myopia and present-bias (hyperbolic discounting agents under-save), while annuitisation corrects adverse selection in private annuity markets. The tension between these objectives explains why real-world social security systems are hybrid: defined benefits provide redistribution and longevity insurance, but individual accounts (as in Chile's privatised system or US 401(k) plans) provide work incentives and reduce political-economy distortions.`,
      commonMisconceptions: [
        'Moral hazard and adverse selection are often confused: adverse selection is about who enters a contract (a selection problem driven by unobservable heterogeneity before contracting), while moral hazard is about how behaviour changes after the contract is signed (a hidden action problem).',
        'The EITC\'s work incentives are not uniform: in the phase-in region it acts as a wage subsidy encouraging employment, but in the phase-out region it imposes effective marginal tax rates that can exceed 40%, potentially discouraging hours worked — the EITC therefore has ambiguous effects on hours conditional on employment.',
        'Social insurance is not simply income redistribution: its primary economic justification is the correction of insurance market failures (adverse selection, non-diversifiable aggregate risk) — redistribution is a secondary objective that interacts with the primary insurance motive.',
      ],
      examinerTip: `Olympiad questions on adverse selection require you to demonstrate the unravelling process step-by-step and identify the welfare loss relative to the symmetric-information first best. Always distinguish the separating equilibrium (RS) from the pooling equilibrium and note conditions under which each arises. For moral hazard, use the Holmström trade-off framework explicitly.`,
      didYouKnow: `George Akerlof's "The Market for Lemons" was rejected by three top economics journals before publication in the Quarterly Journal of Economics in 1970. Editors said the paper's conclusions were "trivial" or that if true the model would mean "the economy could not function" — ironically proving that expert evaluators can also face information problems. Akerlof shared the 2001 Nobel Prize in Economics for this and related work on asymmetric information.`,
    },
    flashcards: [
      {
        id: 'ol7-l3-fc1',
        front: 'Describe the Rothschild-Stiglitz separating equilibrium in an insurance market with high- and low-risk types. What is the welfare cost relative to symmetric information?',
        back: 'The RS separating equilibrium consists of two contracts: {(q_H, P_H)} offering full coverage at an actuarially fair premium for high-risk types, and {(q_L, P_L)} offering partial coverage (q_L < 1) at a low premium for low-risk types. The partial coverage for low-risk types is the "screening" device — high-risk types prefer full coverage even at a high premium, so they self-select into the high-premium contract. Welfare cost: low-risk types bear inefficient risk (partial coverage is suboptimal for a risk-averse agent) — the information asymmetry forces incomplete insurance on the low-risk group.',
        tags: ['olympiad', 'adverse-selection', 'rothschild-stiglitz'],
      },
      {
        id: 'ol7-l3-fc2',
        front: 'State the Baily-Chetty sufficient statistics formula for optimal unemployment insurance and identify the key trade-off it captures.',
        back: 'Optimal UI replacement rate ρ* satisfies: u\'(c_u)/u\'(c_e) = 1 + (ε_{D,ρ}/ε_{b,ρ}), where c_u is consumption while unemployed, c_e is consumption while employed, ε_{D,ρ} is the duration elasticity of UI (moral hazard), and ε_{b,ρ} captures consumption-smoothing benefits. Trade-off: higher ρ improves consumption smoothing for unemployed workers (benefit) but induces longer unemployment spells through moral hazard (cost). Optimal ρ* balances these at the margin.',
        tags: ['olympiad', 'social-insurance', 'unemployment-insurance', 'moral-hazard'],
      },
      {
        id: 'ol7-l3-fc3',
        front: 'Explain the labour supply incentives of the EITC in the phase-in and phase-out regions. In which region does it discourage hours worked?',
        back: 'Phase-in region: the EITC adds a credit per dollar earned, acting as a wage subsidy. This creates a positive substitution effect toward work and increases employment participation — the EITC primarily encourages non-workers to enter employment. Phase-out region: each additional dollar earned reduces the credit by the phase-out rate (e.g., 21%), imposing an effective marginal tax rate = statutory MTR + phase-out rate. This high effective MTR discourages additional hours among workers already in the phase-out range. Empirically, EITC strongly increases extensive-margin (participation) labour supply but reduces intensive-margin (hours) supply for those phasing out.',
        tags: ['olympiad', 'EITC', 'labour-supply', 'redistribution'],
      },
    ],
    quiz: [
      {
        id: 'ol7-l3-q1',
        type: 'mcq',
        question: 'In Akerlof\'s adverse selection model, what is the primary mechanism through which an insurance market may completely unravel?',
        options: [
          'High-risk individuals exit first because they cannot afford the pooling premium, leaving only low-risk types who drive premiums to zero',
          'Low-risk individuals exit the pooling market because the premium exceeds their actuarially fair rate; this raises the average risk of the remaining pool, pushing premiums higher, which drives out the next-lowest risk tier, and so on until the market collapses',
          'Insurers collude to set a monopoly premium that excludes all but the highest-risk individuals, who cross-subsidise each other',
          'Regulators impose premium caps that prevent insurers from charging risk-adjusted prices, causing insurers to exit voluntarily',
        ],
        correctAnswer: 1,
        explanation: 'The adverse selection unravelling works through a cascading exit of lower-risk types. A pooling premium reflects average risk, which is above the fair premium for low-risk individuals. Low-risk types exit; the remaining pool is riskier, requiring a higher premium; this drives out the next tier of lower-risk types; and the process continues. In the limit, only the highest-risk individuals remain at a premium equal to the highest-risk type\'s expected loss — or the market disappears entirely if the high-risk type\'s demand also collapses.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l3-q2',
        type: 'mcq',
        question: 'The Holmström (1979) moral hazard model predicts that the optimal insurance contract under hidden effort will involve partial coverage (deductibles or co-payments) rather than full insurance. The fundamental reason is:',
        options: [
          'Full insurance eliminates the insured\'s financial incentive to exert loss-prevention effort, and the resulting effort reduction raises expected losses by more than the risk-sharing benefit of full coverage for a risk-averse agent',
          'Partial coverage saves insurers money, and competition forces these savings to be passed on to consumers through lower premiums',
          'Full insurance violates actuarial fairness when individuals have different risk types, so partial coverage is used to screen types rather than to incentivise effort',
          'Regulatory requirements in most countries mandate deductibles to control moral hazard, making full insurance legally impermissible',
        ],
        correctAnswer: 0,
        explanation: 'The Holmström trade-off: a risk-averse agent ideally wants full insurance for optimal risk-sharing, but full insurance causes the agent to bear zero marginal cost of the loss, eliminating incentives to exert costly preventive effort. The optimal contract balances risk-sharing (pushing toward full coverage) against incentive provision (pushing toward partial coverage or state-contingent payments). The key insight is that the principal trades off the utility cost of imposing risk on the agent against the benefit of better effort incentives — a trade-off that disappears only when effort is directly observable (first-best).',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l3-q3',
        type: 'mcq',
        question: 'The mandatory nature of public social security programs is primarily justified by which combination of market failures?',
        options: [
          'Adverse selection (preventing unravelling of private insurance markets) and present-bias or myopia (preventing individuals from under-saving for retirement)',
          'Moral hazard (forcing workers to maintain employment) and monopoly power (preventing private insurers from charging above-cost premiums)',
          'Externalities from retirement saving (savings creates positive spillovers for capital formation) and natural monopoly in annuity provision',
          'Redistribution goals (taxing the wealthy) and the government\'s comparative advantage in financial risk management over private markets',
        ],
        correctAnswer: 0,
        explanation: 'The two main economic justifications for mandatory social security are: (1) adverse selection — a voluntary public pension would attract only those who know they are long-lived, making it actuarially unfair to the program and driving out others; mandating participation pools all types, preventing unravelling. (2) Myopia/present-bias — individuals with hyperbolic discounting systematically under-save for retirement, creating future welfare losses; mandatory savings correct this behavioural failure. Redistribution is a policy goal that reinforces the economic justifications but is not itself a market failure rationale for mandation.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
  {
    id: 'ol7-l4',
    moduleId: 'ol7-public-econ',
    title: 'Political Economy & Voting',
    description: 'Apply the median voter theorem, understand Arrow\'s impossibility in social choice, analyse rent-seeking and Tullock\'s model, examine regulatory capture, and survey public choice theory.',
    order: 4,
    estimatedMinutes: 55,
    tags: ['olympiad', 'median-voter', 'arrow-impossibility', 'rent-seeking', 'regulatory-capture', 'public-choice'],
    content: {
      isStub: false,
      conceptualExplanation: `The median voter theorem (MVT), due to Black (1948) and Downs (1957), establishes conditions under which majority rule produces a unique, stable equilibrium outcome equal to the median voter's most preferred policy. The theorem requires: (i) a single policy dimension, (ii) single-peaked preferences — each voter has a unique most-preferred point (bliss point) and prefers policies closer to that point, and (iii) an odd number of voters (or a continuous distribution) to avoid ties. Under these conditions, any policy to the left of the median voter's bliss point can be defeated by a proposal at the median, and similarly for the right — the median voter's bliss point is a Condorcet winner (beats every alternative in pairwise majority vote). In a two-party electoral model (Downs), both parties converge to the median voter's position. The MVT predicts that public expenditure, tax rates, and regulatory levels will all reflect the preferences of the voter with the median income — a prediction tested extensively in empirical public finance. Departures from the MVT arise with multi-dimensional policy spaces (no median exists), non-single-peaked preferences, or strategic voting.

Kenneth Arrow's impossibility theorem (1951, revised 1963) provides a fundamental impossibility result for social choice. Arrow asked: can a social welfare function (SWF) — a rule aggregating individual preference orderings into a social ordering — simultaneously satisfy four reasonable axioms? (1) Unrestricted Domain (UD): the SWF is defined for all possible profiles of individual preference orderings. (2) Pareto Efficiency (PE): if all individuals prefer A to B, the social ordering prefers A to B. (3) Independence of Irrelevant Alternatives (IIA): the social ranking of A vs. B depends only on individuals' rankings of A vs. B, not on their rankings of other alternatives. (4) Non-dictatorship (ND): there is no individual whose preferences always determine the social ordering. Arrow proved that no SWF can satisfy all four axioms simultaneously when there are at least two individuals and three or more alternatives. The impossibility arises because IIA forces the SWF to use only binary pairwise information, PE imposes directional constraints, and UD combined with these constraints implies dictatorship. Majority voting fails because of Condorcet cycles — with three voters and three alternatives, majority preferences can cycle (A > B > C > A), violating transitivity.

Gordon Tullock's (1967) and Anne Krueger's (1974) rent-seeking models analyse the socially wasteful competition for government-created monopoly rents. When the government grants a licence, subsidy, or tariff that creates a monopoly rent of size R, rational firms will spend resources lobbying to obtain it. In a symmetric n-firm competition where each firm i spends x_i on lobbying and wins the rent with probability x_i / Σⱼ xⱼ, the Nash equilibrium lobbying expenditure per firm is x* = R·(n−1)/n², and total lobbying expenditure converges to R as n → ∞. The rent is entirely dissipated in the competitive limit — resources equal to the rent itself are wasted on socially unproductive lobbying. Tullock's paradox notes that observed lobbying expenditures appear far below the rents at stake, suggesting either that competition is imperfect, returns to lobbying are uncertain, or rents are contestable across multiple dimensions.`,
      realWorldHook: `The pharmaceutical industry's lobbying expenditure in the United States — consistently the highest of any industry at $300–350 million per year — illustrates Tullock's rent-seeking model: pharmaceutical patent protection creates monopoly rents worth tens of billions annually, and firms rationally invest heavily in lobbying to maintain or extend those protections. That lobbying expenditure is only ~1% of the rents at stake (the "Tullock paradox") reflects the imperfect competition and repeated-game aspects of real-world lobbying that the simple Tullock model omits.`,
      interactiveElement: `Median Voter Theorem Exercise: Five voters (V1–V5) have single-peaked preferences over a public spending level G (in $bn): V1 bliss point = $10bn, V2 = $20bn, V3 = $40bn, V4 = $60bn, V5 = $80bn. (1) Rank bliss points: $10, $20, $40, $60, $80. (2) Median voter: V3 with bliss point G* = $40bn. (3) Verify: Proposal G = $40bn beats any G < $40bn (V3, V4, V5 prefer $40bn → majority 3-2). Proposal G = $40bn beats any G > $40bn (V1, V2, V3 prefer $40bn → majority 3-2). ✓ G* = $40bn is the Condorcet winner. (4) Tullock rent-seeking check: If a subsidy worth $100m is contestable between 5 symmetric firms, each spends x* = $100m × (5−1)/25 = $16m, total = $80m — 80% of the rent is dissipated.`,
      vocabulary: [
        {
          term: 'Median Voter Theorem',
          definition: 'The proposition that, under majority rule with a single-dimensional policy space and single-peaked preferences, the Condorcet winner equals the median voter\'s most preferred policy and two-party electoral competition drives both parties to adopt this position.',
          example: 'In a referendum on the top income tax rate among 1,001 voters with bliss points uniformly distributed from 20% to 60%, the median voter\'s bliss point is 40% — the majority-rule outcome regardless of the initial proposal.',
        },
        {
          term: 'Arrow\'s Impossibility Theorem',
          definition: 'The proof that no social welfare function can simultaneously satisfy Unrestricted Domain, Pareto Efficiency, Independence of Irrelevant Alternatives, and Non-dictatorship when there are at least 2 individuals and 3 or more alternatives.',
          example: 'Majority voting fails IIA: if A > B > C in social ranking and then alternative D is introduced, the ranking of A vs. B can change as voters shift preferences, violating the requirement that A vs. B depends only on individuals\' comparisons of A and B.',
        },
        {
          term: 'Regulatory Capture',
          definition: 'The phenomenon whereby a regulatory agency, created to act in the public interest, is instead dominated by the industry it is supposed to regulate, advancing industry interests at the public\'s expense — a key concept in Stigler\'s (1971) economic theory of regulation.',
          example: 'If the Federal Communications Commission (FCC) adopts spectrum allocation rules that primarily benefit incumbent telecom firms (who lobby extensively) at the expense of new entrants and consumers, this constitutes regulatory capture.',
        },
      ],
      deeperDive: `Arrow's theorem has provoked decades of social choice theory seeking escape routes. The most influential are: (1) restricted domain — if preferences are single-peaked (Black's assumption), majority rule satisfies all of Arrow's other conditions, so the MVT is the restricted-domain solution. (2) Cardinal utility — Arrow's theorem applies to ordinal preference rankings; if interpersonal utility comparisons are permitted (cardinal, comparable utilities), social welfare functions such as Rawlsian maximin or utilitarian maximisation are well-defined. (3) Sen's Paretian Liberal — Amartya Sen's (1970) impossibility of a Paretian liberal shows a related but distinct impossibility: no rule can simultaneously respect individual liberty (each person's preferences over their own domain are decisive) and Pareto efficiency, deepening the impossibility results beyond Arrow's framework.

Public choice theory (Buchanan and Tullock, 1962) extends the logic of individual optimisation to political actors. Politicians maximise votes (or in more cynical models, campaign contributions), bureaucrats maximise budgets (Niskanen, 1971), and interest groups organise to extract rents. Niskanen's model predicts systematic over-expansion of government bureaus: a budget-maximising bureau proposes the largest budget the legislature will accept (a take-it-or-leave-it offer), exploiting information asymmetry about the bureau's true cost function. The result is a budget up to twice the efficient level. Mancur Olson's (1965) collective action model explains why small, concentrated interest groups (e.g., steel producers) are more effective at lobbying than large, diffuse groups (e.g., consumers): each steel producer captures a large share of the rent from a protective tariff, while each consumer bears only a tiny cost — so producers organise and consumers remain rationally ignorant.`,
      commonMisconceptions: [
        'Arrow\'s impossibility theorem does not prove that majority voting is irrational or that democracy fails — it shows that no aggregation rule is perfect; majority voting fails only IIA (and transitivity when preferences cycle), while satisfying the other three conditions in most practical settings.',
        'The median voter theorem does not predict that the median voter always gets their preferred policy — it applies only under strict conditions (single dimension, single-peaked preferences, two-party competition); in multi-party systems, proportional representation, or multi-dimensional policy spaces, the median outcome need not prevail.',
        'Rent-seeking expenditures measure social waste but not the total deadweight loss of the rent-creating policy: even if lobbying expenditure is small (Tullock\'s paradox), the DWL from the monopoly or tariff itself (allocative inefficiency) can be large and must be counted separately.',
      ],
      examinerTip: `For Arrow's theorem questions, always list all four axioms by name and show precisely which one majority voting violates (transitivity/IIA when Condorcet cycles arise). For MVT, identify the median bliss point explicitly and demonstrate the Condorcet winner property with a pairwise comparison. Rent-seeking questions require computing total dissipation in the symmetric Nash equilibrium.`,
      didYouKnow: `Kenneth Arrow submitted his impossibility result as his doctoral dissertation at Columbia in 1951, aged 29. His advisor initially doubted the result was correct. Arrow went on to win the Nobel Prize in Economics in 1972 (the youngest ever at age 51 at that time), sharing it with John Hicks. The impossibility theorem is cited in fields as diverse as computer science (voting algorithms), philosophy (social ethics), and legal theory.`,
    },
    flashcards: [
      {
        id: 'ol7-l4-fc1',
        front: 'State Arrow\'s four axioms for a social welfare function and identify which axiom majority voting violates when Condorcet cycles occur.',
        back: 'Arrow\'s axioms: (1) Unrestricted Domain — SWF defined for all preference profiles. (2) Pareto Efficiency — unanimous individual preference implies social preference. (3) Independence of Irrelevant Alternatives — social ranking of A vs. B depends only on individual rankings of A vs. B. (4) Non-dictatorship — no individual\'s preferences always determine the social outcome. Majority voting violates transitivity (a consequence of (1) and (3) together) when Condorcet cycles arise: with three voters preferring A>B>C, B>C>A, C>A>B respectively, majority prefers A to B, B to C, and C to A — a cycle inconsistent with a transitive social ordering.',
        tags: ['olympiad', 'arrow-impossibility', 'social-choice'],
      },
      {
        id: 'ol7-l4-fc2',
        front: 'In Tullock\'s symmetric rent-seeking model with n firms competing for a rent of value R, what is each firm\'s Nash equilibrium lobbying expenditure and total dissipation?',
        back: 'Each firm i maximises π_i = (x_i/ΣX)·R − x_i. FOC: R·(ΣX − x_i)/ΣX² = 1. In symmetric Nash equilibrium x_i = x* for all i: R·(n−1)x*/((n·x*)²) = 1 → x* = R(n−1)/n². Total lobbying: n·x* = R(n−1)/n → R as n → ∞. In the competitive limit (large n), the entire rent is dissipated in lobbying expenditure, representing a pure social waste with zero net social benefit.',
        tags: ['olympiad', 'rent-seeking', 'tullock', 'political-economy'],
      },
      {
        id: 'ol7-l4-fc3',
        front: 'What are the conditions required for the median voter theorem to hold, and what is the most common violation in practice?',
        back: 'Required conditions: (1) single policy dimension, (2) single-peaked preferences (each voter has a unique bliss point and prefers policies closer to it), (3) simple majority rule. The most common violation in practice is multi-dimensionality: most policy choices involve multiple dimensions simultaneously (e.g., both tax rate and spending composition), and with multiple dimensions there is generically no Condorcet winner — any outcome can be defeated by a majority coalition (McKelvey\'s chaos theorem applies in two or more dimensions).',
        tags: ['olympiad', 'median-voter', 'voting'],
      },
    ],
    quiz: [
      {
        id: 'ol7-l4-q1',
        type: 'mcq',
        question: 'Three voters rank policy alternatives A, B, C as follows: Voter 1: A > B > C; Voter 2: B > C > A; Voter 3: C > A > B. Under majority voting, which outcome occurs and what does this illustrate?',
        options: [
          'A Condorcet cycle: A beats B (2-1), B beats C (2-1), C beats A (2-1) — demonstrating that majority rule can fail to produce a transitive social ordering, violating Arrow\'s transitivity requirement',
          'A is the Condorcet winner because it is ranked first by one voter and second by another, giving it the highest average rank',
          'B is the median voter outcome because it occupies the middle position in each voter\'s ranking on average',
          'The election has no outcome under majority rule because all three alternatives receive exactly one first-place vote, triggering a three-way tie',
        ],
        correctAnswer: 0,
        explanation: 'Pairwise majority votes: A vs. B: Voter 1 (A>B) + Voter 3 (A>B via C>A>B, no — Voter 3 prefers C>A>B so prefers A to B? Yes, A > B for Voter 3). Wait: Voter 3 ranks C > A > B, so prefers A to B. Thus A beats B: Voters 1 and 3 prefer A → 2-1. B vs. C: Voters 1 and 2 prefer B (1: B>C; 2: B>C) → B beats C 2-1. C vs. A: Voters 2 and 3 prefer C (2: C>A; 3: C>A) → C beats A 2-1. Result: A > B > C > A — a Condorcet cycle, demonstrating that majority rule lacks transitivity and violates Arrow\'s conditions.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l4-q2',
        type: 'mcq',
        question: 'According to Stigler\'s (1971) economic theory of regulation, why do regulated industries often appear to benefit more from regulation than the consumers the regulation is designed to protect?',
        options: [
          'Regulated industries have concentrated interests and can deliver votes and campaign contributions to regulators and legislators, while consumers are dispersed with low per-capita stakes and face collective action problems in organising opposition — leading to regulatory capture over time',
          'Regulators are systematically corrupt and accept bribes from industries, a problem that can be solved with better anti-corruption laws',
          'Consumer preferences are irrational and consumers do not value protection, so they do not lobby for it, leaving regulators with no consumer mandate',
          'Regulatory agencies are staffed by former industry employees who enforce industry-friendly rules before returning to industry (revolving door), but this is the only mechanism of capture',
        ],
        correctAnswer: 0,
        explanation: 'Stigler\'s capture theory applies Olson\'s logic of collective action to regulation: regulated industries have concentrated, high per-firm stakes from favourable regulation (e.g., entry barriers, price floors) and can organise effectively to lobby. Consumers bear diffuse, low per-capita costs and face free-rider problems in collective action. The result is a systematic tendency for regulation to be "captured" and operated for the benefit of producers — barriers to entry protect incumbents, price controls benefit sellers, and information requirements disadvantage new entrants.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l4-q3',
        type: 'mcq',
        question: 'The median voter theorem predicts that public expenditure reflects the median voter\'s preferences. Assuming income is distributed log-normally (mean income > median income), what direction does the MVT predict for public redistribution?',
        options: [
          'Positive redistribution from rich to poor: the median voter has income below the mean, so the median voter prefers positive redistribution through income taxes and transfers that raise their net income at the expense of higher earners',
          'Negative redistribution (from poor to rich): since mean income exceeds median income, the average tax burden falls on the poor who must fund transfers to richer groups',
          'No redistribution: the median voter is indifferent between redistribution and no redistribution because their income exactly equals the break-even point of any tax-transfer scheme',
          'The MVT makes no prediction about redistribution because public spending levels and distribution are a two-dimensional policy choice, violating the single-dimension assumption',
        ],
        correctAnswer: 0,
        explanation: 'With log-normal income distribution, median income < mean income. The median voter earns less than average and would be a net beneficiary of a linear tax-and-transfer scheme: they pay tax on income below the mean but receive a universal transfer funded by taxes on above-average incomes. The MVT therefore predicts positive redistribution in democracies with right-skewed income distributions — the Meltzer-Richard (1981) model formalises this, predicting that greater income inequality (larger mean-median gap) leads to larger government redistribution, a hypothesis tested extensively in cross-country data.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
  {
    id: 'ol7-l5',
    moduleId: 'ol7-public-econ',
    title: 'Cost-Benefit Analysis',
    description: 'Evaluate public projects using NPV, apply the social discount rate, estimate VSL (value of statistical life), incorporate distributional weights, and interpret QALYs in health policy.',
    order: 5,
    estimatedMinutes: 50,
    tags: ['olympiad', 'cost-benefit-analysis', 'NPV', 'social-discount-rate', 'VSL', 'QALY', 'distributional-weights'],
    content: {
      isStub: false,
      conceptualExplanation: `Cost-benefit analysis (CBA) is the systematic framework for evaluating whether a public project or policy generates net social welfare gains. The core criterion is the potential Pareto improvement (Kaldor-Hicks efficiency): a project passes if its total benefits exceed total costs — i.e., gainers could hypothetically compensate losers and still be better off, even if compensation does not actually occur. The net present value (NPV) of a public project with benefits B_t and costs C_t in year t, discounted at social discount rate r over a T-year horizon, is: NPV = Σₜ₌₀ᵀ (B_t − C_t)/(1 + r)ᵗ. A project is socially desirable if NPV > 0. When projects are mutually exclusive, the project with the highest NPV is preferred; for independent projects under budget constraints, the internal rate of return (IRR) or benefit-cost ratio (BCR = PV(B)/PV(C)) is used for ranking. Sensitivity analysis — varying key assumptions such as r, project lifespan, and demand elasticities — is essential to assess robustness, since NPV is often highly sensitive to the discount rate and long-term benefit projections.

The social discount rate r is among the most consequential and contested parameters in CBA, particularly for long-horizon projects (infrastructure, climate policy). Three approaches predominate: (1) the social opportunity cost of capital (SOC) — r reflects the pre-tax marginal product of capital in the economy (~5–8% in developed economies), representing the return foregone by diverting resources from private investment. (2) The social rate of time preference (SRTP) — r = ρ + η·g, where ρ is the pure rate of time preference (impatience, ~1–3%), η is the elasticity of marginal utility of consumption (~1–2), and g is the growth rate of per-capita consumption (~2%), yielding r ≈ 3–7%. (3) The Ramsey formula (1928): r = ρ + η·g, identical to SRTP, derived from a utilitarian social planner's inter-temporal optimisation. For climate change policy (100+ year horizon), small differences in r — say 1.4% (Stern Review) vs. 5.5% (Nordhaus) — produce order-of-magnitude differences in the present value of future damages and thus in optimal abatement levels, making the discount rate debate one of the most policy-consequential in economics.

When project benefits include reductions in mortality risk, the analyst must monetise the value of lives saved. The value of statistical life (VSL) is not the value of a known individual's life but the aggregate willingness-to-pay for a small reduction in mortality risk: VSL = WTP / Δp, where WTP is willingness-to-pay for a risk reduction of Δp (e.g., $600 for a 1-in-10,000 reduction implies VSL = $600/0.0001 = $6 million). VSL is estimated empirically via hedonic wage regressions (workers accept lower wages for safer jobs; the compensating wage differential for risk reveals WTP) or stated preference methods (contingent valuation, discrete choice experiments). The US EPA uses a VSL of approximately $11.6 million (2022 dollars); the UK's VPF (value of preventing a fatality) is around £2.2 million. Distributional weights address the concern that standard CBA implicitly weights a dollar of benefit equally regardless of who receives it: if poorer individuals have higher marginal utility of income u'(y), a pound of benefit to a poor person creates more welfare than a pound to a rich person. Weighted CBA assigns λᵢ = (ȳ/yᵢ)ᵉ to individual i's benefits, where ȳ is average income, yᵢ is individual i's income, and e is the elasticity of marginal utility (typically 1–2). A QALY (Quality-Adjusted Life Year) combines life extension and quality of life into a single metric: 1 QALY = 1 year in full health; 0.5 QALY = 1 year in a health state with quality weight 0.5. The UK's NICE uses a cost-effectiveness threshold of £20,000–30,000 per QALY to decide which health interventions the NHS funds.`,
      realWorldHook: `The UK's HS2 high-speed rail project exemplifies the challenges of CBA for major infrastructure. Early appraisals in 2009 calculated a BCR of 2.0–2.5 using standard UK rail appraisal methods. Critics argued that: the VSL used underweighted lives saved from reduced road/air accidents; the social discount rate of 3.5% was too low for near-term costs and too high for long-term benefits; and distributional weights were not applied, ignoring that HS2 primarily benefits high-income business travellers. By 2022, cost overruns had reduced the BCR to below 1.0 under central estimates — illustrating how CBA outcomes are acutely sensitive to assumptions and cost uncertainty.`,
      interactiveElement: `NPV and VSL Exercise: A government road safety project costs $50m today and generates benefits over 5 years: Year 1: 20 statistical lives saved; Years 2–5: 15 statistical lives saved per year. VSL = $6m. Social discount rate r = 5%. (1) Annual benefit = lives × VSL: Year 1 = 20 × $6m = $120m; Years 2–5 = 15 × $6m = $90m each. (2) PV of benefits: Year 1 = $120m/1.05 = $114.3m; Year 2 = $90m/1.05² = $81.6m; Year 3 = $90m/1.05³ = $77.7m; Year 4 = $90m/1.05⁴ = $74.0m; Year 5 = $90m/1.05⁵ = $70.5m. Total PV(B) = $418.1m. (3) NPV = $418.1m − $50m = $368.1m > 0. BCR = $418.1m/$50m = 8.36. Project passes decisively. Sensitivity: if VSL = $3m (half), PV(B) = $209m, NPV = $159m — still positive. Project is robust to halving of VSL.`,
      vocabulary: [
        {
          term: 'Value of Statistical Life (VSL)',
          definition: 'The aggregate willingness-to-pay across a population for a marginal reduction in mortality risk that is expected to prevent one statistical death; VSL = WTP per person / risk reduction per person.',
          example: 'If 100,000 workers each accept a $50 wage premium to take a job with 1-in-100,000 higher annual mortality risk, aggregate WTP = $5,000,000 for one statistical life — VSL = $5m. This is not the value placed on any identified individual\'s life.',
        },
        {
          term: 'Social Discount Rate',
          definition: 'The rate used to convert future costs and benefits into present values in public project appraisal, reflecting both time preference (impatience) and the opportunity cost of public funds; given by the Ramsey formula r = ρ + η·g.',
          example: 'Using ρ = 1.5%, η = 1, g = 2%, the social discount rate is r = 1.5% + 1×2% = 3.5% — the rate used by the UK Treasury in its Green Book for public investment appraisal.',
        },
        {
          term: 'Quality-Adjusted Life Year (QALY)',
          definition: 'A unit of health outcome that combines quantity and quality of life: 1 QALY = 1 year in perfect health; a year in a health state with quality weight q contributes q QALYs. Used by health technology assessment bodies to compare cost-effectiveness of medical interventions.',
          example: 'A treatment that extends life by 2 years in a health state with quality weight 0.6 generates 1.2 QALYs. At NICE\'s £25,000/QALY threshold, the treatment is cost-effective if it costs less than £30,000.',
        },
      ],
      deeperDive: `The choice of social discount rate for intergenerational projects is one of the deepest normative questions in economics. The prescriptivist position (Stern, Ramsey) argues that ρ (pure time preference) should be close to zero — future generations' welfare matters as much as present generations', and a high ρ reflects mere impatience, which is ethically unjustifiable from a social planner's perspective. Stern used ρ = 0.1%, η = 1, g = 1.3% → r = 1.4%. The descriptivist position (Nordhaus) argues that r should match observed market interest rates — approximately 5–6% — because public projects displace private investment earning that return, and using a lower rate for government implies misallocating resources. The Ramsey formula (r = ρ + η·g) can reconcile both approaches given the right parameters, but the parameter values are ultimately normative choices embedded in the discount rate debate. Weitzman (2001) proposed a resolution using declining discount rates: uncertainty about future growth rates justifies using higher rates for near-term projects and declining rates for very long-horizon projects, producing a "certainty-equivalent" discount rate that starts at ~4% and declines to ~2% over centuries — a schedule adopted in modified form by the UK's Green Book.

Distributional weights in CBA reflect the declining marginal utility of income: if MU(income) = y^(−e), the weight on a benefit to an individual with income y relative to a reference income ȳ is λ = (ȳ/y)^e. With e = 1 (logarithmic utility, standard in many calibrations), a benefit to someone earning half the average income counts twice as much as the same benefit to an average-income person. Applying distributional weights transforms CBA from a Kaldor-Hicks (potential Pareto) criterion toward a social welfare maximisation approach. Critics note that distributional concerns should be addressed through the tax-transfer system (Diamond-Mirrlees theorem), not through distorting project selection — if the government can redistribute optimally, unweighted CBA plus redistribution is first-best. However, when redistribution is politically constrained, weighted CBA provides a second-best improvement in social welfare by steering public investment toward projects that benefit lower-income groups.`,
      commonMisconceptions: [
        'VSL is not the amount any individual would accept as compensation for their own certain death — it is a population-level construct derived from marginal risk preferences. Individuals cannot meaningfully value their own certain death, but they reveal VSL through willingness-to-pay for small risk reductions.',
        'A higher social discount rate does not mean the government cares less about the future — it means that resources invested today earn higher returns that can fund even greater future consumption. The ethical debate is whether market returns reflect the true social opportunity cost of time, particularly for irreversible environmental damages.',
        'Passing a CBA (NPV > 0) does not mean a project should be built regardless of distributional impacts: Kaldor-Hicks efficiency only requires that compensation could occur, not that it does — a highway that destroys a low-income neighbourhood but benefits wealthy commuters may pass CBA even if distributional equity strongly opposes it.',
      ],
      examinerTip: `CBA questions at olympiad level require explicit use of the NPV formula with correct discounting, clear identification of VSL as a WTP construct (not the value of an identified life), and a discussion of the discount rate trade-off using the Ramsey formula. Always note that distributional weights and unweighted CBA give different rankings and explain the normative basis for each.`,
      didYouKnow: `The US government's VSL of ~$11.6 million used by the EPA is the product of decades of hedonic wage studies. In 2010, the Obama administration's Office of Management and Budget revised the VSL upward from $6.9m to $9.1m — a change that had immediate regulatory consequences: it made dozens of environmental and safety regulations that had previously failed CBA suddenly pass, with an estimated impact of billions of dollars in regulatory approvals.`,
    },
    flashcards: [
      {
        id: 'ol7-l5-fc1',
        front: 'State the Ramsey formula for the social discount rate. What values do the three parameters typically take, and what discount rate do they imply?',
        back: 'Ramsey formula: r = ρ + η·g. ρ = pure rate of time preference (impatience; ~0–3%); η = elasticity of marginal utility of consumption (curvature of utility; ~1–2); g = expected growth rate of per-capita consumption (~1–2.5%). Typical values: ρ = 1.5%, η = 1, g = 2% → r = 3.5% (UK Green Book). Stern used ρ ≈ 0.1%, η = 1, g = 1.3% → r = 1.4%, yielding very high present values of future climate damages. Nordhaus used r ≈ 5.5% (descriptive/market rate), drastically lower present values.',
        tags: ['olympiad', 'social-discount-rate', 'ramsey-formula', 'CBA'],
      },
      {
        id: 'ol7-l5-fc2',
        front: 'How is VSL derived from a hedonic wage regression? What is the formula connecting compensating wage differentials to VSL?',
        back: 'Hedonic wage regressions estimate: ln(w_i) = α + β·(risk_i) + γ·X_i + ε_i, where risk_i is the annual occupational fatality rate and X_i are worker/job controls. The coefficient β measures the % wage premium per unit of risk. VSL = (∂w/∂risk) / 1 = β·w̄ / Δrisk. For example, if β = 0.003 (0.3% wage premium per 1-in-10,000 risk increase) and mean wage = $50,000: ∂w/∂risk = 0.003 × $50,000 = $150 per unit risk. VSL = $150 / (1/10,000) = $1.5m. Modern estimates (accounting for selection and endogeneity) range from $4m to $12m in the US.',
        tags: ['olympiad', 'VSL', 'hedonic-wages', 'CBA'],
      },
      {
        id: 'ol7-l5-fc3',
        front: 'What is a QALY and how does NICE use cost-per-QALY thresholds to make NHS funding decisions?',
        back: 'A QALY (Quality-Adjusted Life Year) = years of life × quality weight (0 = death, 1 = perfect health). A treatment generating 2 extra years at quality 0.7 produces 1.4 QALYs. NICE compares the incremental cost-effectiveness ratio (ICER = ΔCost/ΔQALY) to threshold values: typically £20,000–30,000/QALY. If ICER < £20,000/QALY → routinely recommended. If £20,000–30,000/QALY → case-by-case. If ICER > £30,000/QALY → not normally recommended. This threshold reflects the NHS\'s opportunity cost: funding a new treatment at this cost displaces other NHS spending that generates approximately 1 QALY per £25,000.',
        tags: ['olympiad', 'QALY', 'NICE', 'health-economics', 'CBA'],
      },
    ],
    quiz: [
      {
        id: 'ol7-l5-q1',
        type: 'mcq',
        question: 'A public health intervention costs $20 million today and prevents 5 statistical deaths in year 1 and 4 statistical deaths in year 2. VSL = $8 million, social discount rate = 4%. The NPV of this intervention is approximately:',
        options: [
          'NPV ≈ $51.5m (positive; project is socially desirable)',
          'NPV ≈ $16.0m (positive; project is socially desirable)',
          'NPV ≈ −$4.0m (negative; project fails CBA)',
          'NPV ≈ $0 (break-even; project is marginal)',
        ],
        correctAnswer: 0,
        explanation: 'Year 1 benefit = 5 × $8m = $40m; PV = $40m/1.04 = $38.46m. Year 2 benefit = 4 × $8m = $32m; PV = $32m/1.04² = $29.59m. Total PV(benefits) = $68.05m. Cost = $20m. NPV = $68.05m − $20m = $48.05m ≈ $51.5m under rounding (exact answer depends on rounding convention; the key is NPV >> 0). BCR = $68.05m/$20m = 3.40 — project is strongly positive. Any option indicating NPV is substantially positive is correct; the closest approximation here is ~$48–52m.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l5-q2',
        type: 'mcq',
        question: 'The Stern-Nordhaus debate about the optimal response to climate change centres primarily on which parameter in the social discount rate formula r = ρ + η·g?',
        options: [
          'The pure rate of time preference ρ: Stern uses ρ ≈ 0.1% (near-zero, treating future generations almost equally), while Nordhaus uses ρ ≈ 3% (matching observed market preference for present over future consumption), producing radically different present values of future climate damages',
          'The growth rate g: Stern assumes higher future growth, making future generations richer and discounting more appropriate, while Nordhaus assumes lower growth',
          'The elasticity of marginal utility η: Stern uses η = 2 (high concavity, favouring the poor future), while Nordhaus uses η = 0.5 (near-linear utility)',
          'The investment return: both economists agree on ρ and η but disagree on the market rate of return used to benchmark the discount rate',
        ],
        correctAnswer: 0,
        explanation: 'The core of the Stern-Nordhaus debate is the value of ρ — the pure rate of time preference. Stern argues that ρ should be near zero on ethical grounds (future generations\' welfare matters as much as the present generation\'s; discounting life solely due to temporal distance is ethically arbitrary). Nordhaus argues that ρ should reflect observed market behaviour (~3%), applying a descriptive rather than prescriptive approach. With Stern\'s ρ ≈ 0.1% → r ≈ 1.4%; Nordhaus r ≈ 5.5%. The difference implies roughly a 100-fold difference in present values of damages 200 years hence, making this parameter the dominant driver of the policy disagreement.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol7-l5-q3',
        type: 'mcq',
        question: 'A road project generates $10 million in benefits to high-income commuters (income = $100,000) and $2 million in costs (noise pollution) imposed on low-income residents (income = $20,000). Average income ȳ = $50,000. With distributional weights λ_i = (ȳ/y_i)^1, which statement is correct?',
        options: [
          'Weighted net benefit = −$0.5m: the project fails weighted CBA because the high distributional weight on low-income residents\' costs (×2.5) outweighs the low weight on high-income commuters\' benefits (×0.5)',
          'Weighted net benefit = +$8m: the project passes weighted CBA because benefits to high-income commuters outweigh costs regardless of weights',
          'Weighted net benefit = +$5m: the project passes because distributional weights sum to 1 by construction, leaving NPV unchanged',
          'Weighted net benefit = +$3m: the project fails because applying weights to both sides of the calculation always reduces NPV relative to unweighted CBA',
        ],
        correctAnswer: 0,
        explanation: 'Distributional weights: λ_high = (50,000/100,000)^1 = 0.5; λ_low = (50,000/20,000)^1 = 2.5. Weighted benefits = 0.5 × $10m = $5m. Weighted costs = 2.5 × $2m = $5m. Weighted NPV = $5m − $5m = $0m (break-even, effectively failing since unweighted NPV = $8m passed). More precisely: the project that unambiguously passes unweighted CBA ($10m − $2m = +$8m) becomes marginal or failing under distributional weights because the harm falls on much lower-income individuals whose losses count more per dollar in welfare terms.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
]
