import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ib8-dev-b',
  title: 'IB Development B — Strategies & HL Topics',
  description: 'Development strategies, sustainability, and HL international economics extensions for IB.',
  tier: 'IB' as const,
  track: 'IB_HL' as const,
  unit: 8,
  estimatedHours: 4,
  color: '#8b5cf6',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Development Strategies
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ib8-l1',
    moduleId: 'ib8-dev-b',
    title: 'Development Strategies',
    description:
      'Compare market-led and interventionist approaches to development; evaluate Washington Consensus, ISI, export-led growth, and microfinance.',
    order: 1,
    estimatedMinutes: 45,
    tags: ['development-strategies', 'washington-consensus', 'ISI', 'export-led', 'microfinance', 'IB-HL'],
    content: {
      isStub: false,
      prerequisiteRecap: `IB7 examined how trade through comparative advantage offers a path to development, but risks of commodity dependence and deteriorating terms of trade can trap LEDCs in low-value specialisation; development strategies now evaluate the contrasting policy frameworks — market-led versus interventionist — that countries have used to escape these traps and build industrial capacity.`,
      recallQuestions: [
        {
          id: 'ib8-l1-recall-1',
          type: 'mcq' as const,
          question: 'The "kicking away the ladder" argument, made by Ha-Joon Chang, holds that:',
          options: [
            'Rich countries developed using tariffs and industrial policy, then advocated free trade for developing countries through the WTO and IMF — denying others the same policy tools they had used',
            'Comparative advantage theory is invalid because it was developed by economists in rich countries who ignored developing-country realities',
            'Fair trade certification is counterproductive because it entrenches commodity dependence rather than encouraging diversification',
            'Foreign aid undermines development by creating dependency and weakening domestic institutions',
          ],
          correctAnswer: 0,
          explanation: 'Ha-Joon Chang argued in "Kicking Away the Ladder" (2002) that today\'s rich countries — including the UK, US, Germany, Japan, and South Korea — developed behind protectionist walls using active industrial policy. Once industrialised, they promoted free trade through international institutions, effectively denying developing countries the same policy space they had used — removing the "ladder" they had climbed.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      realWorldHook:
        'South Korea and many Latin American economies began industrialising at similar income levels in the 1960s. South Korea pursued aggressive export-led growth backed by strategic state intervention — directing credit to chosen industries, subsidising technology imports, and targeting foreign markets. Much of Latin America instead turned inward with import-substitution industrialisation (ISI), shielding domestic producers behind high tariff walls. By 2000, South Korea\'s GDP per capita had grown roughly ten-fold in real terms; many ISI economies grappled with debt crises and stagnant productivity. The contrast is one of the most-studied natural experiments in development economics.',
      conceptualExplanation:
        'Development strategies broadly divide into market-led and interventionist camps. Market-led approaches hold that liberalising trade, privatising state enterprises, deregulating factor markets, and maintaining fiscal discipline unleash entrepreneurial dynamism and allocative efficiency. The Washington Consensus — a set of ten policy prescriptions promoted by the IMF and World Bank in the 1980s and 1990s — epitomises this view. It advocated trade liberalisation, privatisation, deregulation, and sound money as the universal recipe for growth. Critics argue that it ignored institutional preconditions and produced painful social costs when applied as a rigid template, particularly in Sub-Saharan Africa and post-Soviet economies.\n\nInterventionist strategies accept that markets in developing countries are riddled with failures — imperfect information, missing credit markets, externalities, and infant-industry dynamics — that justify state coordination. Import-substitution industrialisation (ISI) aims to build domestic manufacturing by shielding infant industries from foreign competition through tariffs, quotas, and subsidies. Pioneered in Latin America from the 1950s, ISI did succeed in building an industrial base but eventually produced inefficient, high-cost firms dependent on continued protection, chronic balance-of-payments deficits, and inflationary public spending. Export-led growth, by contrast, disciplines domestic producers through global competition while exploiting economies of scale in world markets. The East Asian Tigers (South Korea, Taiwan, Singapore, Hong Kong) combined state industrial policy with export orientation — a hybrid that neither pure camp fully acknowledges.\n\nMicrofinance represents a targeted interventionist tool aimed at the poorest households excluded from formal credit markets. Institutions such as Grameen Bank (Bangladesh) provide small collateral-free loans — often to women — to fund micro-enterprises. Supporters argue that access to credit breaks poverty traps by financing productive assets. Critics note that many rigorous randomised control trials (RCTs) find modest average income effects, high interest rates, and risks of debt spirals for the most vulnerable borrowers. The debate illustrates the broader tension in development economics between optimism about targeted interventions and the demand for robust evaluation evidence.',
      vocabulary: [
        {
          term: 'Washington Consensus',
          definition:
            'A set of ten market-oriented policy prescriptions — including fiscal discipline, trade liberalisation, privatisation, and deregulation — promoted by the IMF, World Bank, and US Treasury as a development template during the 1980s–90s.',
          example:
            'Bolivia adopted Washington Consensus "shock therapy" in 1985, rapidly cutting inflation but facing persistent poverty and social unrest.',
        },
        {
          term: 'Import-Substitution Industrialisation (ISI)',
          definition:
            'A development strategy that uses tariffs, quotas, and subsidies to protect domestic industries from foreign competition, aiming to build self-sufficient manufacturing capacity.',
          example:
            'Brazil\'s ISI policies in the 1950s–70s built a domestic car industry behind high import barriers, but cars were expensive and fuel-inefficient by world standards.',
        },
        {
          term: 'Microfinance',
          definition:
            'The provision of small loans, savings accounts, and insurance to low-income individuals and micro-enterprises that lack access to conventional banking.',
          example:
            'Grameen Bank in Bangladesh has disbursed billions of dollars in small loans — averaging under $200 — primarily to rural women to fund livestock, weaving, and small trade.',
        },
      ],
      interactiveElement:
        'Policy Sorting Exercise: Classify each policy as market-led (M) or interventionist (I): (1) Reducing the top corporate tax rate from 35% to 20% — M. (2) Imposing a 25% tariff on imported steel to protect a domestic infant industry — I. (3) Privatising the national telecommunications company — M. (4) Providing subsidised credit to small farmers through a state development bank — I. (5) Signing a free-trade agreement to eliminate bilateral tariffs — M. Now consider: Could export-led growth be both M and I? Explain in two sentences.',
      deeperDive:
        'HL students should be prepared to evaluate development strategies using the criteria of economic growth, equity, sustainability, and resilience. The Washington Consensus has been substantially revised into a "Post-Washington Consensus" that acknowledges the importance of institutions, governance, and social capital. Dani Rodrik\'s "trilemma of the world economy" — the impossibility of simultaneously maintaining deep economic integration, national sovereignty, and democratic politics — frames why one-size-fits-all prescriptions consistently underperform: countries must make real political-economy trade-offs that no technocratic formula can elide.\n\nFor Paper 1 essays, strong candidates distinguish between the conditions under which each strategy works. Export-led growth requires a competitive exchange rate, a disciplined workforce, and access to foreign markets — conditions that were met in East Asia but not always in Africa. ISI requires a domestic market large enough to achieve minimum efficient scale and a state capable of picking and eventually weaning winners. Microfinance works best when complemented by financial literacy training, savings products, and functioning legal systems that protect borrower rights. The examiner rewards students who explain why the same policy can succeed in one context and fail in another, rather than simply cataloguing pros and cons.',
      commonMisconceptions: [
        'The Washington Consensus is not synonymous with "free markets do everything." It included institution-building elements (property rights, fiscal discipline) and was never a pure laissez-faire manifesto — though it was often implemented that way by zealous reformers.',
        'ISI did not simply fail universally. South Korea and Taiwan used ISI-style infant-industry protection selectively and temporarily, then pivoted to export orientation once industries matured — the key was conditionality and exit, not permanent protection.',
        'Microfinance is not a silver bullet for poverty reduction. Meta-analyses of RCTs show it raises consumption modestly on average, but the gains are heterogeneous; some borrowers thrive while others fall into debt distress, making program design and targeting crucial.',
      ],
      examinerTip:
        'IB Paper 1 essays on development strategies demand a two-sided evaluation. Do not simply list advantages and disadvantages — synthesise by explaining which conditions determine which strategy is more appropriate. Use real country examples (Grameen Bank for microfinance, South Korea for export-led, Brazil/Argentina for ISI failures) to anchor each claim. For a top-band response, conclude with a justified judgement: e.g., "export-led growth is most suitable for small open economies with disciplined industrial policy, while interventionist microfinance programs add greatest value where financial markets are absent and social capital is strong."',
      didYouKnow:
        'Muhammad Yunus, the founder of Grameen Bank, won the Nobel Peace Prize in 2006 — not the Economics Prize — because the committee saw access to credit as a tool of peace and human dignity, not merely an economic mechanism.',
    },
    flashcards: [
      {
        id: 'ib8-l1-fc1',
        front: 'What are the core tenets of the Washington Consensus?',
        back: 'Fiscal discipline, tax reform, financial liberalisation, competitive exchange rates, trade liberalisation, FDI openness, privatisation, deregulation, and secure property rights. It represented the dominant market-led development template of the 1980s–90s.',
        tags: ['washington-consensus', 'development-strategies', 'IB-HL'],
      },
      {
        id: 'ib8-l1-fc2',
        front: 'What is the key difference between ISI and export-led growth?',
        back: 'ISI (import-substitution industrialisation) protects domestic industries from foreign competition using tariffs and subsidies, targeting the home market. Export-led growth exposes domestic producers to world competition and uses export revenues to drive expansion — exemplified by South Korea and Taiwan.',
        tags: ['ISI', 'export-led', 'development-strategies'],
      },
      {
        id: 'ib8-l1-fc3',
        front: 'Why might microfinance fail to generate sustained income growth?',
        back: 'High interest rates can trap borrowers in debt; loans often fund consumption rather than productive investment; without complementary services (training, markets, savings), micro-enterprises remain subsistence-level. RCTs find modest average effects with wide individual variation.',
        tags: ['microfinance', 'development', 'evaluation'],
      },
    ],
    quiz: [
      {
        id: 'ib8-l1-q1',
        type: 'mcq',
        question: 'Which of the following best describes import-substitution industrialisation (ISI)?',
        options: [
          'Using tariffs and subsidies to protect domestic manufacturing from foreign competition',
          'Attracting foreign direct investment by eliminating all trade barriers',
          'Specialising in primary commodity exports to earn foreign exchange',
          'Privatising state enterprises to improve productive efficiency',
        ],
        correctAnswer: 0,
        explanation:
          'ISI deliberately shields infant industries from import competition through tariffs, quotas, and subsidies to build domestic industrial capacity — the opposite of liberalisation.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l1-q2',
        type: 'mcq',
        question: 'The Washington Consensus is best characterised as a set of policies promoting:',
        options: [
          'State ownership of strategic industries and controlled capital flows',
          'Market liberalisation, fiscal discipline, and privatisation',
          'Infant-industry protection and managed exchange rates',
          'Universal basic income and expanded social transfers',
        ],
        correctAnswer: 1,
        explanation:
          'The Washington Consensus centred on market-friendly reforms: fiscal austerity, trade openness, privatisation, deregulation, and property-rights protection.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l1-q3',
        type: 'mcq',
        question: 'A critical evaluation of microfinance as a development strategy notes that:',
        options: [
          'It always raises household income above the poverty line within two years',
          'Rigorous RCT evidence finds large, uniformly positive income effects',
          'High interest rates and lack of complementary services can limit effectiveness and cause debt distress',
          'It is only effective in high-income countries with developed financial systems',
        ],
        correctAnswer: 2,
        explanation:
          'RCT meta-analyses reveal modest and heterogeneous income effects; high interest rates and absent training or savings products limit gains and can harm the most vulnerable borrowers.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Poverty, Inequality & Redistribution
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ib8-l2',
    moduleId: 'ib8-dev-b',
    title: 'Poverty, Inequality & Redistribution',
    description:
      'Distinguish absolute from relative poverty; interpret the Lorenz curve and Gini coefficient; evaluate progressive taxation and conditional cash transfers.',
    order: 2,
    estimatedMinutes: 45,
    tags: ['poverty', 'inequality', 'lorenz-curve', 'gini', 'redistribution', 'CCT', 'IB-HL'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson compared market-led development strategies such as the Washington Consensus with interventionist approaches like ISI and microfinance, finding that no single strategy is universally optimal; poverty and inequality measurement now provides the distributional lens for evaluating whether growth strategies are reaching the poorest and reducing the Gini coefficient.`,
      recallQuestions: [
        {
          id: 'ib8-l2-recall-1',
          type: 'mcq' as const,
          question: 'Import-substitution industrialisation (ISI) protects domestic infant industries from foreign competition primarily through:',
          options: [
            'Tariffs, quotas, and subsidies that raise the cost of competing imports and lower the cost of domestic production',
            'Currency depreciation that makes domestic goods cheaper than imported alternatives across all sectors',
            'Public ownership of manufacturing firms to ensure production at minimum cost',
            'Free trade agreements that give domestic firms preferential access to export markets',
          ],
          correctAnswer: 0,
          explanation: 'ISI uses trade protection instruments — tariffs and quotas to raise import prices plus subsidies to lower domestic production costs — to give infant industries time to develop economies of scale and learning-by-doing before facing full international competition. Its limitation was that protection often became permanent, producing high-cost, inefficient firms dependent on continued government support.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      realWorldHook:
        'Brazil\'s Bolsa Família programme — a conditional cash transfer (CCT) that provides monthly payments to poor families on condition that children attend school and receive vaccinations — lifted roughly 28 million people out of extreme poverty between 2003 and 2014 and contributed to a measurable fall in Brazil\'s Gini coefficient from 0.59 to 0.53. The programme costs less than 0.5% of GDP yet is widely cited as one of the most cost-effective anti-poverty interventions ever evaluated, combining redistributive cash transfers with human capital investment incentives in a single instrument.',
      conceptualExplanation:
        'Poverty is measured in two distinct ways. Absolute poverty is defined by a fixed real income threshold — the inability to afford a minimum bundle of goods necessary for survival. The World Bank\'s international poverty line (currently $2.15 per person per day at 2017 purchasing power parity) is the most widely used absolute benchmark. Relative poverty, by contrast, is defined in relation to the living standards of the wider society, typically as income below 50% or 60% of the national median. A person can escape absolute poverty as a country grows richer while remaining in relative poverty if growth is unevenly distributed — illustrating why the two measures can move in opposite directions.\n\nIncome inequality within a country is depicted graphically by the Lorenz curve — a plot of cumulative income share (y-axis) against cumulative population share (x-axis), ranked from poorest to richest. Perfect equality would produce a 45-degree diagonal (the line of equality). Real distributions bow below this line; the further the bow, the greater the inequality. The Gini coefficient quantifies inequality as the ratio of the area between the line of equality and the Lorenz curve (area A) to the total area below the line of equality (A + B). Gini = A / (A + B), ranging from 0 (perfect equality) to 1 (one person holds all income). Nordic countries typically report Gini coefficients of 0.25–0.30; highly unequal economies such as South Africa exceed 0.60.\n\nGovernments redistribute income through progressive taxation (marginal tax rates rise with income, so higher earners pay a larger proportion) and targeted spending. Direct taxes — income tax, capital gains tax, inheritance tax — are the primary progressive instruments. Transfer payments — unemployment benefits, disability payments, pensions — supplement the incomes of lower earners. Conditional cash transfers (CCTs) link payments to behavioural requirements: school attendance, health check-ups, or vaccination. By conditioning transfers on investments in human capital, CCTs aim to break intergenerational poverty traps rather than merely sustaining consumption.',
      vocabulary: [
        {
          term: 'Gini Coefficient',
          definition:
            'A scalar measure of income inequality ranging from 0 (perfect equality) to 1 (perfect inequality), calculated as the area between the Lorenz curve and the line of equality divided by the total area below the line of equality.',
          example:
            'Sweden\'s Gini coefficient is approximately 0.27, while South Africa\'s is around 0.63 — among the highest in the world.',
        },
        {
          term: 'Lorenz Curve',
          definition:
            'A graphical representation of income distribution plotting cumulative income share against cumulative population share, ranked from poorest to richest.',
          example:
            'If the bottom 40% of a population earns only 10% of total income, the Lorenz curve passes through the point (0.40, 0.10), well below the line of perfect equality.',
        },
        {
          term: 'Conditional Cash Transfer (CCT)',
          definition:
            'A social protection programme that provides regular cash payments to poor households contingent on meeting specified behavioural conditions, typically related to children\'s education and health.',
          example:
            'Mexico\'s Oportunidades (now Prospera) paid monthly stipends to mothers in extreme poverty if their children maintained 85% school attendance and attended regular health clinic visits.',
        },
      ],
      interactiveElement:
        'Lorenz Curve Reading: A country has five income quintiles with the following cumulative income shares: bottom 20% own 5%, bottom 40% own 13%, bottom 60% own 26%, bottom 80% own 48%, top 100% own 100%. Plot these points and sketch the Lorenz curve. Now estimate the Gini coefficient using the approximation: Gini ≈ 1 − 2 × (area under Lorenz curve). Approximate area under the curve using the trapezoid rule for the five segments. Compare your estimate to Sweden (Gini ≈ 0.27) — is this country more or less equal? Now consider: if a CCT programme raised the bottom quintile\'s share from 5% to 8%, how would the Lorenz curve shift and what would happen to the Gini?',
      deeperDive:
        'HL candidates should evaluate redistribution policies against multiple criteria. Progressive taxation reduces the Gini coefficient but may affect incentives to work and invest if marginal rates are very high — the empirical literature suggests rate increases beyond roughly 70% generate significant behavioural distortions, though the exact threshold is contested. CCTs score well on targeting efficiency (payments go to the genuinely poor) and on generating positive human capital externalities, but conditionality can be paternalistic and imposes compliance costs on the poorest households who may face practical barriers to meeting conditions (distant schools, no transport).\n\nThe relationship between growth and inequality is captured by the Kuznets curve hypothesis — an inverted-U relationship suggesting inequality first rises as economies industrialise (workers shift from low-productivity agriculture to higher-productivity but unequally paid manufacturing) and then falls as broad-based education and political pressure for redistribution take hold. The empirical evidence is mixed: some economies follow the Kuznets trajectory, others do not. More recent work (e.g., Piketty\'s Capital in the 21st Century) argues that returns to capital consistently outpace economic growth (r > g), leading to permanently rising inequality in advanced economies absent deliberate redistribution policy — a claim that generates vigorous academic debate.',
      commonMisconceptions: [
        'A falling Gini coefficient does not always mean absolute poverty is declining — if all incomes fall proportionally (e.g., during a recession), inequality may decrease while more people sink into absolute poverty.',
        'Progressive taxation does not mean everyone pays higher taxes than under a flat tax — it means the marginal rate rises with income. Low earners can pay a lower effective rate under a progressive system than they would under a flat rate that raises the same revenue.',
        'The Lorenz curve shows income distribution, not wealth distribution — wealth Gini coefficients are typically much higher (often above 0.7 even in egalitarian societies) because wealth accumulates over time and is more concentrated than annual income flows.',
      ],
      examinerTip:
        'When drawing the Lorenz curve in an IB diagram question, always label both axes correctly (cumulative % of income on y-axis; cumulative % of population on x-axis), mark the line of perfect equality, shade area A between the line and curve, and label area B below the curve. State explicitly that Gini = A/(A+B). For Paper 1 essays on redistribution, structure your evaluation using at least two policy instruments, assess each against equity and efficiency criteria, and conclude with a justified recommendation — IB mark schemes explicitly reward reasoned conclusions over open-ended "it depends" endings.',
      didYouKnow:
        'The Gini coefficient was developed by Italian statistician Corrado Gini in 1912 — more than a century ago — yet it remains the most widely cited single-number summary of inequality used by governments, the World Bank, and the OECD today.',
    },
    flashcards: [
      {
        id: 'ib8-l2-fc1',
        front: 'What does the Gini coefficient measure and what are its limits?',
        back: 'It measures income inequality on a 0–1 scale (0 = perfect equality, 1 = all income to one person). Limits: two countries with the same Gini can have very different Lorenz curve shapes; it measures income not wealth; it says nothing about absolute living standards.',
        tags: ['gini', 'inequality', 'lorenz-curve'],
      },
      {
        id: 'ib8-l2-fc2',
        front: 'Distinguish absolute poverty from relative poverty.',
        back: 'Absolute poverty: income below a fixed real threshold needed for minimum survival (e.g., $2.15/day PPP). Relative poverty: income below a fraction of national median (e.g., 60%), so it moves with societal living standards and captures social exclusion.',
        tags: ['poverty', 'absolute-poverty', 'relative-poverty'],
      },
      {
        id: 'ib8-l2-fc3',
        front: 'How do conditional cash transfers (CCTs) aim to break intergenerational poverty?',
        back: 'By linking cash payments to human capital investments (school attendance, health check-ups), CCTs raise current consumption AND improve children\'s education and health — reducing the probability that poverty passes from parents to children.',
        tags: ['CCT', 'redistribution', 'poverty-trap'],
      },
    ],
    quiz: [
      {
        id: 'ib8-l2-q1',
        type: 'mcq',
        question: 'If the Lorenz curve of Country X lies closer to the line of perfect equality than that of Country Y, which conclusion is correct?',
        options: [
          'Country X has a higher Gini coefficient than Country Y',
          'Country X has a lower Gini coefficient than Country Y',
          'Country X has a higher absolute poverty rate than Country Y',
          'Country X has a lower GDP per capita than Country Y',
        ],
        correctAnswer: 1,
        explanation:
          'A Lorenz curve closer to the line of equality means area A (between the curve and the line) is smaller, so Gini = A/(A+B) is lower — indicating less inequality.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l2-q2',
        type: 'mcq',
        question: 'A government replaces a flat income tax with a progressive income tax collecting the same total revenue. What is the most likely effect on the Lorenz curve?',
        options: [
          'The Lorenz curve shifts further from the line of equality, raising the Gini coefficient',
          'The Lorenz curve shifts closer to the line of equality, lowering the Gini coefficient',
          'The Lorenz curve is unchanged because total revenue is the same',
          'The Lorenz curve rotates clockwise, increasing inequality at the top',
        ],
        correctAnswer: 1,
        explanation:
          'A progressive tax takes a larger share from higher earners, redistributing after-tax income toward lower earners — shifting the Lorenz curve upward toward the line of equality and reducing the Gini.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l2-q3',
        type: 'mcq',
        question: 'Which statement about conditional cash transfers (CCTs) represents a valid criticism?',
        options: [
          'CCTs always increase income inequality because only the wealthy can access them',
          'CCTs impose compliance costs and conditionality may exclude the poorest who cannot meet requirements',
          'CCTs are fiscally unsustainable because they must exceed 10% of GDP to be effective',
          'CCTs reduce human capital formation by incentivising families to keep children at home',
        ],
        correctAnswer: 1,
        explanation:
          'Conditionality can exclude the most marginalised households who face practical barriers (distance, illness, documentation requirements) to meeting conditions — a valid equity concern even for well-designed programmes.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — Sustainability & Environmental Economics
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ib8-l3',
    moduleId: 'ib8-dev-b',
    title: 'Sustainability & Environmental Economics',
    description:
      'Analyse sustainable development, carbon taxes, cap-and-trade systems, and the tragedy of the commons; evaluate policy trade-offs between growth and environment.',
    order: 3,
    estimatedMinutes: 45,
    tags: ['sustainability', 'environmental-economics', 'carbon-tax', 'cap-and-trade', 'tragedy-of-commons', 'IB-HL'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed how the Gini coefficient and Lorenz curve measure income inequality and how conditional cash transfers can reduce it; sustainability now broadens the equity concern to intergenerational equity — asking whether current development strategies deplete environmental capital at the expense of future generations.`,
      recallQuestions: [
        {
          id: 'ib8-l3-recall-1',
          type: 'mcq' as const,
          question: 'The Gini coefficient rises when the Lorenz curve moves further from the line of perfect equality. In a country with a Gini of 0.60, which redistribution policy most directly shifts the Lorenz curve toward the diagonal?',
          options: [
            'A progressive income tax combined with conditional cash transfers targeted at the poorest quintile, which simultaneously reduces top incomes and raises bottom incomes',
            'A flat consumption tax that applies the same rate to all goods regardless of income level',
            'Trade liberalisation that raises aggregate GDP growth, relying on the trickle-down effect',
            'A reduction in corporate taxes that attracts FDI and increases average wages economy-wide',
          ],
          correctAnswer: 0,
          explanation: 'A progressive tax takes proportionally more from higher earners (reducing the income share of upper quintiles) while CCTs add income to the poorest households (raising their share). Together, these two mechanisms shift the Lorenz curve upward toward the line of perfect equality, directly reducing the Gini coefficient — the most reliable combination for measurably improving income distribution.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      realWorldHook:
        'Sweden introduced a carbon tax in 1991 at a rate equivalent to roughly $30 per tonne of CO₂. By 2023, the rate had risen to approximately $130 per tonne — the highest in the world. Over the same period, Sweden\'s greenhouse gas emissions fell by more than 25% while GDP nearly doubled. The Swedish experience is frequently cited as the strongest real-world evidence that a well-designed carbon price can decouple economic growth from carbon emissions, though critics note Sweden\'s industrial structure and access to hydropower made the transition easier than it would be for coal-dependent economies.',
      conceptualExplanation:
        'Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs — the definition established by the Brundtland Commission in 1987. It requires that human activity stay within planetary boundaries: ecological systems must not be degraded faster than they can regenerate, and non-renewable resources must be managed so that their depletion does not outpace the discovery of substitutes or the development of alternatives. Standard GDP growth metrics systematically ignore environmental degradation — a factory that pollutes a river contributes positively to GDP both through its output and through the clean-up costs it generates, without any deduction for the ecological damage done.\n\nThe core market failure driving environmental problems is the negative externality: the private cost of polluting activity falls below its social cost, so firms and households over-produce pollution relative to the socially optimal level. Two principal policy instruments attempt to close this gap. A Pigouvian carbon tax sets a price per tonne of emissions equal to the marginal external cost, internalising the externality and shifting the supply curve of polluting goods upward until quantity falls to the social optimum. The advantage is price certainty: emitters know exactly what they must pay. The disadvantage is quantity uncertainty: the government cannot know precisely how much emissions will fall in response to a given tax rate. Cap-and-trade (emissions trading scheme, ETS) takes the opposite approach: a regulatory authority sets a binding cap on total emissions, issues tradeable permits, and allows firms to buy and sell them. Quantity is certain; price is market-determined. The EU Emissions Trading System — the world\'s largest carbon market — covers around 40% of EU greenhouse gas emissions.\n\nThe tragedy of the commons, identified by ecologist Garrett Hardin in 1968, describes the overexploitation of shared (common-pool) resources. Each individual user has an incentive to extract as much as possible before others do, even though collective overuse destroys the resource for everyone. Classic examples include ocean fisheries, shared groundwater aquifers, and the atmosphere as a carbon sink. Solutions include privatisation (assign property rights so owners internalise long-run costs), government regulation (quotas, permits, bans), and community governance — Nobel laureate Elinor Ostrom\'s research showed that communities frequently develop effective self-governing institutions to manage commons without either privatisation or state control.',
      vocabulary: [
        {
          term: 'Sustainable Development',
          definition:
            'Development that meets present needs without compromising the ability of future generations to meet their own needs, balancing economic growth with ecological and social sustainability.',
          example:
            'Norway\'s Government Pension Fund invests oil revenues to preserve wealth for future generations after oil reserves are exhausted — an institutional expression of sustainable development thinking.',
        },
        {
          term: 'Carbon Tax (Pigouvian Tax)',
          definition:
            'A tax levied per unit of carbon dioxide (or CO₂-equivalent) emitted, set to equal the marginal external cost of emissions so that polluters face the full social cost of their activity.',
          example:
            'Sweden\'s carbon tax of ~$130/tonne applies to fossil fuels used in heating and transport, incentivising firms and households to switch to lower-carbon alternatives.',
        },
        {
          term: 'Tragedy of the Commons',
          definition:
            'The overexploitation of a shared resource because individual users, each acting rationally in their own self-interest, collectively deplete or damage the resource to everyone\'s detriment.',
          example:
            'North Atlantic cod stocks collapsed in the 1990s because each fishing nation had an incentive to maximise its catch before others did, despite knowing that collective overfishing would destroy the fishery.',
        },
      ],
      interactiveElement:
        'Carbon Tax vs. Cap-and-Trade Comparison: A government must reduce emissions from 100 Mt to 80 Mt. Option A: Carbon tax of $40/tonne — firms reduce emissions until their marginal abatement cost equals $40; suppose this achieves a 15 Mt reduction (to 85 Mt, not the target). Option B: Cap at 80 Mt with tradeable permits — firms that can abate cheaply (below market permit price) sell permits; firms for which abatement is costly buy them. The cap guarantees the 80 Mt outcome. Now answer: (1) Which instrument guarantees the quantity target? (2) Which provides cost certainty for firms? (3) If the government is uncertain about firms\' abatement costs, which instrument risks missing the environmental target? Sketch a supply-and-demand diagram for permits showing how the permit price is determined.',
      deeperDive:
        'HL IB candidates should evaluate environmental policies against equity as well as efficiency criteria. Carbon taxes are regressive unless revenues are recycled: low-income households spend a higher proportion of income on energy and transport, so a flat carbon tax takes a larger fraction of their budget. Revenue recycling — paying a dividend to all citizens, reducing payroll taxes, or funding green investment — can address this but requires political will. Cap-and-trade schemes face the problem of permit allocation: free allocation (grandfathering) to existing emitters is politically easy but rewards historical polluters; auctioning permits raises revenue but faces industry opposition. The EU ETS\'s initial credibility problems stemmed from excessive free permits that drove the carbon price near zero in its early years.\n\nSustainability economics introduces concepts beyond standard welfare analysis. The precautionary principle holds that when evidence of irreversible damage is strong but uncertain, policy should err on the side of caution rather than waiting for scientific consensus — particularly relevant for biodiversity loss, where extinction is permanent. Environmental Kuznets curves hypothesise that pollution first rises then falls with per capita income as societies grow wealthy enough to demand environmental quality and fund clean technology. Empirical evidence supports this U-shape for local pollutants (air particulates, water contamination) but is weak for global pollutants like CO₂, partly because wealthy nations offshore pollution-intensive production to poorer countries.',
      commonMisconceptions: [
        'Cap-and-trade does not eliminate emissions — it caps them at the policy-set limit. Individual firms can still emit freely as long as they hold enough permits; the system guarantees the aggregate cap, not zero pollution at any source.',
        'A carbon tax does not necessarily hurt economic growth. Revenues can be recycled to cut distortionary taxes (e.g., income or payroll taxes), potentially yielding a "double dividend" — reduced emissions and improved economic efficiency simultaneously.',
        'The tragedy of the commons does not apply to all shared resources — it specifically applies to rival, non-excludable resources. Elinor Ostrom\'s Nobel-winning research demonstrated that communities often successfully self-govern commons through social norms, monitoring, and graduated sanctions without requiring privatisation or state intervention.',
      ],
      examinerTip:
        'For IB Paper 1 on environmental economics, always illustrate market failure with a correctly labelled negative externality diagram: show MSC above MPC, mark the free-market equilibrium (where P = MPC) and the social optimum (where P = MSC), shade the welfare loss triangle, and indicate how a Pigouvian tax shifts MPC up to MSC. When evaluating carbon taxes versus cap-and-trade, use the criteria of certainty (quantity vs. price), cost-effectiveness (both achieve least-cost abatement when well-designed), revenue effects, and distributional impacts. Top-band responses explicitly acknowledge conditions under which each is preferable.',
      didYouKnow:
        'The concept of "ecosystem services" — valuing what nature provides for free (clean water filtration, pollination, flood control) — suggests global ecosystems provide services worth an estimated $125–$145 trillion per year, roughly 1.5 times global GDP, most of which never appears in any national account.',
    },
    flashcards: [
      {
        id: 'ib8-l3-fc1',
        front: 'What is the key trade-off between a carbon tax and a cap-and-trade scheme?',
        back: 'Carbon tax: price certainty (firms know cost per tonne) but uncertain quantity of emission reductions. Cap-and-trade: quantity certainty (the cap guarantees total emissions) but price uncertainty (permit price fluctuates with supply and demand).',
        tags: ['carbon-tax', 'cap-and-trade', 'environmental-policy'],
      },
      {
        id: 'ib8-l3-fc2',
        front: 'What is the tragedy of the commons and what are three solutions?',
        back: 'Overexploitation of a shared rival resource because individual incentives diverge from collective welfare. Solutions: (1) Privatisation — assign property rights; (2) Government regulation — quotas, permits, bans; (3) Community self-governance — social norms, monitoring, and graduated sanctions (Ostrom).',
        tags: ['tragedy-of-commons', 'environmental-economics', 'market-failure'],
      },
      {
        id: 'ib8-l3-fc3',
        front: 'Why is GDP growth an inadequate measure of sustainable development?',
        back: 'GDP counts environmental clean-up costs as positive contributions, ignores resource depletion, and excludes non-market ecosystem services. It can rise while natural capital is destroyed, giving a misleading picture of long-run welfare. Alternatives include Genuine Progress Indicator (GPI) and Inclusive Wealth Index.',
        tags: ['sustainable-development', 'GDP', 'environmental-economics'],
      },
    ],
    quiz: [
      {
        id: 'ib8-l3-q1',
        type: 'mcq',
        question: 'A carbon tax set equal to the marginal external cost of emissions will:',
        options: [
          'Eliminate all carbon emissions in the economy',
          'Shift the marginal private cost curve upward until the market produces at the social optimum',
          'Guarantee a specific quantity of emissions reduction regardless of firm responses',
          'Only be effective if combined with a cap-and-trade scheme',
        ],
        correctAnswer: 1,
        explanation:
          'A Pigouvian carbon tax adds the marginal external cost to private costs, shifting MPC up to MSC so firms internalise the externality and produce at the socially optimal level — but it guarantees price, not quantity.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l3-q2',
        type: 'mcq',
        question: 'The tragedy of the commons occurs because:',
        options: [
          'Common resources are non-rival and non-excludable, leading to under-use',
          'Individual users have an incentive to maximise extraction of a shared rival resource before others do, leading to overuse',
          'Governments always set quotas too high, causing excess extraction',
          'Private property rights always lead to more efficient resource use than communal ownership',
        ],
        correctAnswer: 1,
        explanation:
          'The tragedy arises from the combination of rivalry (one person\'s use reduces availability for others) and non-excludability (users cannot be prevented from extracting), creating a divergence between individual and collective rational behaviour.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l3-q3',
        type: 'mcq',
        question: 'Which of the following is a valid criticism of carbon taxes on equity grounds?',
        options: [
          'They raise the price of low-carbon substitutes, discouraging green investment',
          'They are regressive because low-income households spend a higher proportion of income on carbon-intensive goods like energy and transport',
          'They generate no government revenue, leaving no funds for redistribution',
          'They only reduce emissions in sectors with elastic demand, leaving heavy industry unaffected',
        ],
        correctAnswer: 1,
        explanation:
          'Carbon taxes are regressive in their direct impact: lower-income households allocate more of their budget to energy and fuel, so a flat per-tonne charge takes a larger share of their income. Revenue recycling can address this but is not automatic.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — HL: Terms of Trade & J-Curve
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ib8-l4',
    moduleId: 'ib8-dev-b',
    title: 'HL — Terms of Trade & the J-Curve',
    description:
      'Calculate and interpret the terms of trade index; analyse deterioration effects on developing economies; explain the J-curve following a currency depreciation.',
    order: 4,
    estimatedMinutes: 48,
    tags: ['terms-of-trade', 'J-curve', 'depreciation', 'Marshall-Lerner', 'HL', 'IB-HL'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson examined how carbon taxes and cap-and-trade schemes address the negative externality of pollution; the terms of trade and J-curve now shift focus from environmental costs to the international price dimension of development — how the relative prices of a country's exports and imports determine the real purchasing power of its trade earnings.`,
      recallQuestions: [
        {
          id: 'ib8-l4-recall-1',
          type: 'mcq' as const,
          question: 'A Pigouvian carbon tax set equal to the marginal external cost of emissions will:',
          options: [
            'Shift the marginal private cost curve upward until the market produces at the social optimum where MSC equals MSB, internalising the externality',
            'Eliminate all carbon emissions in the economy by making fossil fuel use prohibitively expensive',
            'Guarantee a specific quantity of emissions reduction regardless of how firms respond to the tax',
            'Only reduce emissions in sectors with elastic demand, leaving carbon-intensive industries unaffected',
          ],
          correctAnswer: 0,
          explanation: 'A Pigouvian tax adds the marginal external cost to private costs, raising the effective supply curve from MPC to MSC. Firms reduce output until the new market equilibrium occurs where MSC = MSB — the social optimum. The tax guarantees price, not quantity: the actual emissions reduction depends on how firms and consumers respond to the higher price.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      realWorldHook:
        'When global commodity prices collapsed between 2014 and 2016 — oil fell from $115 to $30 per barrel, copper and iron ore roughly halved — commodity-dependent economies from Venezuela to Zambia experienced a dramatic deterioration in their terms of trade. Export revenues crashed while import costs remained relatively stable, squeezing foreign exchange reserves and government budgets. The IMF estimated that for every 10% fall in commodity prices, commodity-exporting developing countries lost roughly 1.5% of GDP in export revenues. The episode starkly illustrated how terms-of-trade deterioration can transmit global price shocks directly into domestic economic crises for countries locked into primary-product export structures.',
      conceptualExplanation:
        'The terms of trade (ToT) measure the relative price of a country\'s exports in terms of its imports. The standard formula is: ToT = (Index of export prices / Index of import prices) × 100. A ToT index above 100 (relative to a base year) means export prices have risen relative to import prices — the country can buy more imports for each unit of exports, representing an improvement. A ToT below 100 indicates deterioration: each unit of export buys fewer imports than before. For many developing economies, terms of trade are essentially the global price of their primary commodity exports relative to the prices of manufactured goods and services they import — making them highly vulnerable to commodity price cycles over which they have no control.\n\nA terms-of-trade deterioration for a primary exporter works through several channels. The income effect is direct: export revenues fall relative to import costs, shrinking the current account and reducing foreign exchange inflows. The fiscal effect hits government budgets when commodity revenues fund public services (the "resource curse" dynamic in reverse). The structural effect is longer-run: if export prices remain depressed, the opportunity cost of remaining locked in primary production rises, but capital constraints and lack of diversification slow the transition to higher-value manufacturing. The Prebisch-Singer hypothesis (developed in the 1950s) argues that there is a secular tendency for primary commodity prices to fall relative to manufactured goods prices over the long run, implying a structural worsening of ToT for commodity exporters — an empirical claim that remains contested but has influenced development policy for decades.\n\nThe J-curve describes the short-run current account dynamic following a currency depreciation. When a country\'s exchange rate depreciates, its exports become cheaper in foreign currency and its imports become more expensive in domestic currency. In the long run — if the Marshall-Lerner condition holds (the sum of price elasticities of demand for exports and imports exceeds 1) — the current account improves. But in the short run, export and import volumes are relatively inelastic because trade contracts are pre-signed, supply chains take time to adjust, and consumers need time to find substitutes. The immediate effect of depreciation is therefore a worsening of the current account (the import bill rises in domestic currency while export revenues lag), before the volume adjustments kick in and the account improves — tracing a J-shape over time.',
      vocabulary: [
        {
          term: 'Terms of Trade (ToT)',
          definition:
            'A measure of a country\'s relative export prices expressed as an index: (export price index / import price index) × 100. An improvement means exports buy relatively more imports.',
          example:
            'If Australia\'s iron ore export prices rise 20% while its manufactured import prices rise only 5%, the ToT index rises from 100 to approximately 114 — an improvement.',
        },
        {
          term: 'J-Curve Effect',
          definition:
            'The short-run deterioration then long-run improvement in the current account balance following a currency depreciation, caused by the lag between price changes and quantity adjustments in trade volumes.',
          example:
            'After the UK pound fell sharply post-Brexit referendum in 2016, the UK current account deficit initially widened before export volumes gradually responded to more competitive export prices.',
        },
        {
          term: 'Prebisch-Singer Hypothesis',
          definition:
            'The proposition that the long-run terms of trade of primary commodity exporters tend to deteriorate relative to manufactured goods exporters, trapping developing countries in commodity dependence.',
          example:
            'Real cocoa prices in the 1980s and 1990s were dramatically lower than in the 1950s when adjusted for inflation, consistent with the Prebisch-Singer prediction for West African exporters.',
        },
      ],
      interactiveElement:
        'Terms of Trade Calculation: In Year 1, a country\'s export price index is 120 and import price index is 100 (ToT = 120). In Year 2, export prices fall to 96 and import prices rise to 110. Calculate the Year 2 ToT: ToT = (96/110) × 100 = 87.3. Has the ToT improved or deteriorated? By how many index points? Now: If this country exports copper and imports machinery, and the ToT falls from 120 to 87.3, what happens to (a) its current account, (b) government revenues if copper is taxed, and (c) incentives to diversify exports? J-Curve Sketch: Draw a current account balance vs. time graph. Mark a depreciation at t=0. Show the J-shape: immediate dip (short-run worsening), then recovery above original level (long-run improvement). Label the inflection point where volume effects overtake price effects.',
      deeperDive:
        'HL IB candidates should be able to explain the J-curve using price elasticity logic. The short-run inelasticity of trade volumes occurs for several reasons: import and export contracts are denominated in foreign currency and cannot be immediately renegotiated; consumers and firms need time to identify and switch to substitutes; production capacity for exports cannot expand overnight; and global value chains mean that even "exports" contain significant imported content, so depreciation raises both the cost of imports and the cost of producing exports. The lag from depreciation to volume adjustment is typically 12–24 months, though it varies by country and sector.\n\nFor the Marshall-Lerner condition (covered fully in Lesson 5), the key insight at this stage is that the J-curve eventually resolves upward only if the sum of the PED for exports and PED for imports exceeds 1 in absolute terms. If the ML condition is not met, the J-curve never recovers — the current account deteriorates permanently after depreciation. This can occur in highly commodity-dependent economies where both exports (commodities with inelastic global demand) and imports (essential capital goods and food with no domestic substitutes) are price-inelastic. HL students should be able to connect the ToT, J-curve, and ML condition in a coherent narrative explaining why depreciation may help current account adjustment in developed economies but less reliably in primary commodity exporters.',
      commonMisconceptions: [
        'A terms-of-trade improvement is not always beneficial for all sectors — if export prices rise because global demand for a country\'s commodity surges, it can cause "Dutch disease": the export sector booms, the exchange rate appreciates, and manufacturing exports become uncompetitive, hollowing out industrial capacity.',
        'The J-curve does not mean the current account always returns to its original level — the long-run outcome depends on whether the Marshall-Lerner condition is satisfied. If combined PED < 1, the current account may settle at a permanently worse level after depreciation.',
        'Terms of trade are not the same as the balance of trade. Terms of trade compare price indices; the balance of trade compares the monetary value of exports and imports. A ToT improvement can coexist with a trade deficit if export volumes fall more than prices rise.',
      ],
      examinerTip:
        'HL IB students must be able to sketch the J-curve and label it correctly: x-axis = time, y-axis = current account balance (or sometimes just net exports). Mark the depreciation at t=0, show the initial dip below the original balance (short-run worsening), the inflection point, and the recovery above the original balance (assuming ML holds). Examiners also expect you to explain the mechanism: in the short run, volumes are sticky so the currency effect dominates (import bill rises, export revenue in domestic currency lags); in the long run, volumes adjust as price signals take effect.',
      didYouKnow:
        'The term "J-curve" was popularised in economics by Stephen Magee in a 1973 paper — but the same concept (short-run worsening before long-run improvement) appears in politics, finance, and private equity, all borrowing the same visual metaphor.',
    },
    flashcards: [
      {
        id: 'ib8-l4-fc1',
        front: 'How is the terms of trade index calculated and what does an improvement mean?',
        back: 'ToT = (Export Price Index / Import Price Index) × 100. An improvement (index rising above base) means export prices have risen relative to import prices — each unit of exports buys more imports, improving purchasing power in trade. A deterioration is the reverse.',
        tags: ['terms-of-trade', 'international-economics', 'IB-HL'],
      },
      {
        id: 'ib8-l4-fc2',
        front: 'Explain the J-curve effect after a currency depreciation.',
        back: 'Short run: trade volumes are inelastic (contracts, lags in finding substitutes), so the import bill rises in domestic currency while export volumes do not yet increase — current account worsens. Long run: volumes adjust as buyers respond to price changes — current account improves, tracing a J-shape over time.',
        tags: ['J-curve', 'depreciation', 'current-account'],
      },
      {
        id: 'ib8-l4-fc3',
        front: 'What is the Prebisch-Singer hypothesis?',
        back: 'The long-run secular tendency for primary commodity prices to fall relative to manufactured goods prices, implying a structural deterioration in terms of trade for commodity-exporting developing countries over time.',
        tags: ['Prebisch-Singer', 'terms-of-trade', 'development'],
      },
    ],
    quiz: [
      {
        id: 'ib8-l4-q1',
        type: 'mcq',
        question: 'A country\'s export price index rises from 100 to 115 while its import price index rises from 100 to 125. What happens to its terms of trade?',
        options: [
          'Terms of trade improve from 100 to 115',
          'Terms of trade deteriorate from 100 to 92',
          'Terms of trade are unchanged because both indices rose',
          'Terms of trade improve because export prices rose absolutely',
        ],
        correctAnswer: 1,
        explanation:
          'ToT = (115/125) × 100 = 92. Because import prices rose more than export prices, each unit of exports now buys fewer imports — a deterioration from 100 to 92.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l4-q2',
        type: 'mcq',
        question: 'The J-curve predicts that immediately following a depreciation, the current account balance will:',
        options: [
          'Improve immediately as exports become cheaper for foreign buyers',
          'Remain unchanged because trade contracts are already signed in domestic currency',
          'Worsen in the short run because import costs rise while export volumes have not yet adjusted',
          'Improve in the short run as the currency falls in value',
        ],
        correctAnswer: 2,
        explanation:
          'In the short run, trade volumes are sticky. Import costs rise in domestic currency (more expensive imports), while export volumes take time to respond to lower foreign-currency prices. The current account worsens before eventual volume adjustment improves it.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l4-q3',
        type: 'mcq',
        question: 'The Prebisch-Singer hypothesis implies that over the long run, developing countries that specialise in primary commodity exports will experience:',
        options: [
          'A secular improvement in terms of trade as global demand for commodities rises',
          'A secular deterioration in terms of trade as commodity prices fall relative to manufactured goods prices',
          'Stable terms of trade because commodity and manufactured goods prices move in parallel',
          'Rapid industrialisation as commodity revenues fund manufacturing investment',
        ],
        correctAnswer: 1,
        explanation:
          'Prebisch and Singer argued that demand for primary commodities is income-inelastic while demand for manufactures is income-elastic, creating a long-run relative price decline for commodities — a terms-of-trade deterioration for exporters.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 5 — HL: Marshall-Lerner Condition & Current Account
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ib8-l5',
    moduleId: 'ib8-dev-b',
    title: 'HL — Marshall-Lerner Condition & Current Account Adjustment',
    description:
      'State and apply the full Marshall-Lerner condition; evaluate current account rebalancing strategies; analyse capital flow interactions with the current account.',
    order: 5,
    estimatedMinutes: 50,
    tags: ['Marshall-Lerner', 'current-account', 'PED', 'capital-flows', 'rebalancing', 'HL', 'IB-HL'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed how terms of trade deterioration harms commodity-exporting developing countries and introduced the J-curve as the short-run dynamic after a depreciation; the Marshall-Lerner condition now provides the formal elasticity criterion that determines whether that depreciation will eventually succeed in improving the current account.`,
      recallQuestions: [
        {
          id: 'ib8-l5-recall-1',
          type: 'mcq' as const,
          question: 'A country\'s terms of trade index falls from 110 to 88. This means:',
          options: [
            'Export prices have fallen relative to import prices — the country must now export more goods to purchase the same quantity of imports, reducing the real purchasing power of its exports',
            'The exchange rate has appreciated, making imports cheaper in domestic currency',
            'The country\'s current account has moved from deficit to surplus as exports become more competitive',
            'Import prices have fallen relative to export prices, improving the real income of domestic consumers',
          ],
          correctAnswer: 0,
          explanation: 'A ToT index below the base year (or a fall from 110 to 88) means the ratio of export prices to import prices has deteriorated: exports buy fewer imports than before. The country\'s real purchasing power per unit exported has fallen, requiring more export volume to finance the same import quantity — a structural challenge particularly acute for primary commodity exporters facing the Prebisch-Singer dynamic.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      realWorldHook:
        'When China\'s renminbi (RMB) was revalued upward by 2.1% against the US dollar in July 2005 and allowed to appreciate gradually thereafter, US policymakers expected a rapid improvement in America\'s bilateral trade deficit. The correction was far slower than anticipated. Economists attributed this partly to the Marshall-Lerner condition: US demand for Chinese goods (electronics, clothing, consumer goods) was relatively price-inelastic because few other countries offered comparable manufacturing at similar scale and quality. The episode illustrated that a currency appreciation does not automatically fix a trade imbalance — the effectiveness depends critically on the price elasticities of demand for each country\'s exports and imports.',
      conceptualExplanation:
        'The Marshall-Lerner (ML) condition specifies the minimum price elasticity requirements for a currency depreciation to improve a country\'s current account balance (specifically its trade balance). In formal terms: a depreciation improves the current account if and only if the sum of the absolute values of the price elasticity of demand for exports (PED_x) and the price elasticity of demand for imports (PED_m) exceeds 1, i.e., |PED_x| + |PED_m| > 1. If the sum equals exactly 1, a depreciation leaves the current account unchanged. If the sum is less than 1, a depreciation worsens the current account. The condition is derived by differentiating the trade balance (export revenue minus import expenditure) with respect to the exchange rate and finding the sign of the derivative.\n\nIntuitively, the ML condition captures whether the quantity effect of depreciation outweighs the price effect. Depreciation makes exports cheaper (in foreign currency) and imports more expensive (in domestic currency). Export revenue rises only if demand for exports is elastic enough that the quantity increase more than compensates for the lower foreign-currency price. Import expenditure falls only if demand for imports is elastic enough that the quantity reduction more than compensates for the higher domestic-currency price. When both demands are inelastic (|PED_x| + |PED_m| < 1), the price effects dominate: foreign buyers do not buy enough more of the now-cheaper exports, and domestic buyers do not reduce import purchases enough, leaving the trade balance worse. Short-run inelasticity is why the J-curve occurs; ML is usually satisfied in the long run as consumers and firms adjust.\n\nCurrent account rebalancing — reducing a persistent deficit or surplus — can occur through several mechanisms beyond the exchange rate. Expenditure-reducing policies (fiscal consolidation, monetary tightening) depress domestic income and thus import demand, directly reducing the trade deficit but potentially at the cost of growth and employment. Expenditure-switching policies (depreciation, tariffs, subsidies) shift demand from foreign to domestic goods. Supply-side policies (productivity improvements, export diversification) raise the competitiveness and non-price attractiveness of exports over the long run. Capital flows complicate adjustment: under floating exchange rates, a current account deficit is necessarily matched by a capital account surplus (foreign capital financing the deficit). If the capital inflow is driven by speculative hot money rather than long-term FDI, sudden reversals can trigger currency crises — making current account sustainability dependent on the composition as well as the size of capital flows.',
      vocabulary: [
        {
          term: 'Marshall-Lerner Condition',
          definition:
            'The condition that a currency depreciation will improve the current account balance if and only if the sum of the absolute price elasticities of demand for exports and imports exceeds 1: |PED_x| + |PED_m| > 1.',
          example:
            'If a country\'s PED for exports is 0.9 and PED for imports is 0.7, the sum is 1.6 > 1 — depreciation will improve the current account. If PED_x = 0.3 and PED_m = 0.4, sum = 0.7 < 1 — depreciation worsens it.',
        },
        {
          term: 'Expenditure-Switching Policy',
          definition:
            'A policy that shifts domestic and foreign expenditure from imported goods to domestically produced goods, improving the trade balance. Examples include currency depreciation, import tariffs, and export subsidies.',
          example:
            'A 15% depreciation of the Australian dollar makes imported European wine more expensive and Australian wine cheaper for international buyers, switching both domestic and foreign spending toward Australian products.',
        },
        {
          term: 'Capital Account (Financial Account)',
          definition:
            'The section of the balance of payments recording cross-border flows of financial assets — foreign direct investment, portfolio investment, and other capital movements. Under a floating exchange rate, the current account and capital/financial account must sum to zero.',
          example:
            'The United States runs a persistent current account deficit financed by a capital account surplus — foreign investors (governments, pension funds, multinationals) invest in US Treasury bonds and equities, providing the dollar financing for excess US imports.',
        },
      ],
      interactiveElement:
        'Marshall-Lerner Condition Practice: Determine whether depreciation improves the current account in each scenario by applying |PED_x| + |PED_m| > 1:\n\n1. PED_x = 0.8, PED_m = 0.6 → Sum = 1.4 > 1 → YES, depreciation improves the current account.\n2. PED_x = 0.3, PED_m = 0.5 → Sum = 0.8 < 1 → NO, depreciation worsens the current account.\n3. PED_x = 0.5, PED_m = 0.5 → Sum = 1.0 = 1 → NEUTRAL, no change in current account.\n4. PED_x = 1.2, PED_m = 0.4 → Sum = 1.6 > 1 → YES.\n\nNow interpret: Scenario 2 could describe a commodity exporter (inelastic commodity exports, inelastic essential imports). Scenario 1 could describe a diversified manufacturer (elastic demand for branded goods). Which type of economy benefits more from a depreciation strategy? Why might an IMF-recommended depreciation fail to restore balance in scenario 2?',
      deeperDive:
        'HL candidates should be able to derive the intuition behind the ML condition without formal calculus, and apply it to evaluate exchange rate policy in specific country contexts. A common HL exam question asks students to assess whether depreciation is an appropriate policy response to a current account deficit, requiring judgment about the likely elasticities in that economy. Primary commodity exporters typically face inelastic demand from global buyers (the world price is set on commodity exchanges; quantity demanded is determined by industrial cycles, not price of the individual exporting country) and inelastic demand for essential imports (capital equipment, food, energy). The ML condition may not be satisfied, making depreciation an ineffective or even counterproductive current account tool for such economies.\n\nThe interaction between the current account and capital flows is essential for HL analysis. A current account deficit means a country is net borrowing from the rest of the world — consuming more than it produces. This is financed by a capital account surplus: foreigners acquire domestic assets (bonds, equities, property, FDI). Whether this is sustainable depends on confidence. If foreign investors become concerned about debt sustainability, currency overvaluation, or political risk, capital flows can reverse rapidly, forcing the exchange rate to depreciate sharply (a currency crisis), which may or may not improve the current account depending on the ML condition. The 1997–98 Asian financial crisis, the 2001 Argentine crisis, and the 2013 "taper tantrum" affecting emerging markets all involved sudden capital flow reversals interacting with current account vulnerabilities — making this nexus one of the most policy-relevant areas in international macroeconomics.',
      commonMisconceptions: [
        'The Marshall-Lerner condition is not automatically satisfied just because a country depreciates. Commodity-dependent economies often find that |PED_x| + |PED_m| < 1 in the short run and even the medium run, making depreciation an ineffective or harmful current account tool.',
        'A current account deficit is not inherently bad. If it is financed by long-term productive FDI (building factories, infrastructure), the imported capital raises future productive capacity and export potential. The problem arises when deficits are financed by short-term speculative flows that can reverse suddenly.',
        'Expenditure-switching and expenditure-reducing policies are not substitutes — they operate through different mechanisms and have different costs. Depreciation switches demand but risks inflation and J-curve worsening; fiscal austerity reduces demand but suppresses growth. Effective adjustment typically requires both, calibrated to country circumstances.',
      ],
      examinerTip:
        'For HL IB Paper 1 essays on the Marshall-Lerner condition, always: (1) state the full condition (|PED_x| + |PED_m| > 1) and explain the logic in words; (2) connect it explicitly to the J-curve (short-run ML not satisfied because volumes sticky, long-run ML typically satisfied); (3) evaluate whether depreciation is likely to work for the specific economy in the question, using elasticity reasoning; (4) acknowledge capital flow effects — a depreciation may attract speculative inflows or trigger capital flight, complicating the simple trade-balance story. Examiners reward candidates who demonstrate understanding that the ML condition is a necessary but not sufficient condition for depreciation to successfully rebalance a current account.',
      didYouKnow:
        'The Marshall-Lerner condition is named after two economists — Alfred Marshall (1842–1924) and Abba Lerner (1903–1982) — who developed the underlying mathematics independently, decades apart. Lerner formalised it most precisely in his 1944 book "The Economics of Control," long before empirical economists had the trade data to rigorously test it.',
    },
    flashcards: [
      {
        id: 'ib8-l5-fc1',
        front: 'State the Marshall-Lerner condition and explain what happens when it is not met.',
        back: 'ML condition: |PED_x| + |PED_m| > 1 — depreciation improves the current account only if the sum of export and import demand elasticities exceeds 1. If the sum < 1, depreciation worsens the current account because volume changes are insufficient to offset the adverse price effects.',
        tags: ['Marshall-Lerner', 'depreciation', 'current-account', 'IB-HL'],
      },
      {
        id: 'ib8-l5-fc2',
        front: 'Distinguish expenditure-switching from expenditure-reducing policies for current account adjustment.',
        back: 'Expenditure-switching: shifts demand from foreign to domestic goods (depreciation, tariffs, subsidies) — improves trade balance by changing relative prices. Expenditure-reducing: cuts total domestic demand (fiscal austerity, monetary tightening) — reduces imports by shrinking income, at the cost of lower output and employment.',
        tags: ['current-account', 'rebalancing', 'expenditure-policy'],
      },
      {
        id: 'ib8-l5-fc3',
        front: 'How does a current account deficit relate to capital flows under a floating exchange rate?',
        back: 'A current account deficit is necessarily matched by a capital account (financial account) surplus — the country is a net borrower from the rest of the world, financed by foreign purchases of domestic assets. Sudden reversals of these capital flows (sudden stop) can trigger currency crises and force rapid, disorderly current account adjustment.',
        tags: ['current-account', 'capital-flows', 'balance-of-payments'],
      },
    ],
    quiz: [
      {
        id: 'ib8-l5-q1',
        type: 'mcq',
        question: 'A country has a price elasticity of demand for exports of 0.6 and for imports of 0.8. If the currency depreciates by 10%, what happens to the current account?',
        options: [
          'The current account worsens because |PED_x| + |PED_m| = 1.4 > 1',
          'The current account improves because |PED_x| + |PED_m| = 1.4 > 1',
          'The current account is unchanged because the PEDs cancel out',
          'The current account worsens because |PED_x| + |PED_m| = 0.7 < 1',
        ],
        correctAnswer: 1,
        explanation:
          '|PED_x| + |PED_m| = 0.6 + 0.8 = 1.4 > 1, so the Marshall-Lerner condition is satisfied and the depreciation will improve the current account in the long run (subject to the J-curve in the short run).',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l5-q2',
        type: 'mcq',
        question: 'Which type of economy is most likely to fail to satisfy the Marshall-Lerner condition even in the long run?',
        options: [
          'A highly diversified manufacturing exporter with many global competitors',
          'A primary commodity exporter with inelastic global demand for its exports and inelastic import demand for essential capital goods',
          'A services economy specialising in tourism and financial services',
          'A large economy with a developed consumer goods sector and elastic import demand',
        ],
        correctAnswer: 1,
        explanation:
          'Commodity exporters face world price-determined demand (inelastic PED_x) and essential capital/food imports with few substitutes (inelastic PED_m). The sum of elasticities may remain below 1, making depreciation ineffective or counterproductive for current account adjustment.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib8-l5-q3',
        type: 'mcq',
        question: 'Under a floating exchange rate, a persistent current account deficit must be accompanied by:',
        options: [
          'A government budget surplus of equal size',
          'A capital account (financial account) surplus of equal size, as foreigners finance the deficit by acquiring domestic assets',
          'A depreciation of the exchange rate sufficient to eliminate the deficit',
          'A reduction in foreign exchange reserves equal to the deficit',
        ],
        correctAnswer: 1,
        explanation:
          'The balance of payments must balance: current account + capital/financial account = 0 (abstracting from errors and omissions). A current account deficit is always matched by a capital account surplus — the country is a net borrower from abroad.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },
]
