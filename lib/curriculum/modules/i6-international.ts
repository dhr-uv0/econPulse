import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'i6-international',
  title: 'International Economics Foundations',
  description: 'Understand why countries trade, how exchange rates work, and the basics of the balance of payments.',
  tier: 'INTERMEDIATE' as const,
  track: 'INTERMEDIATE' as const,
  unit: 6,
  estimatedHours: 3,
  color: '#3b82f6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 1 — Comparative Advantage
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'i6-l1',
    moduleId: 'i6-international',
    title: 'Comparative Advantage — The Case for Trade',
    description:
      'Derive comparative advantage from opportunity costs; show why both parties gain from specialisation.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['comparative-advantage', 'specialisation', 'trade'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous module concluded by comparing fiscal and monetary policy in different scenarios — including the liquidity trap, where monetary policy loses effectiveness and fiscal spending becomes the primary tool. International economics extends the analysis beyond domestic borders, asking why countries trade, what determines the terms of that trade, and how exchange rates and the balance of payments link domestic and foreign economies.`,
      recallQuestions: [
        {
          id: 'i6-l1-recall-1',
          type: 'mcq' as const,
          question: 'In a liquidity trap, why does expansionary monetary policy fail to stimulate aggregate demand?',
          options: [
            'Interest rates are already near zero, so further cuts have negligible effect on borrowing costs or spending decisions.',
            'The central bank is prohibited by law from cutting rates below 2%.',
            'Commercial banks refuse to lend because reserve requirements are too high.',
            'Government debt is so large that households expect future tax rises and save instead of spending.',
          ],
          correctAnswer: 0,
          explanation: 'In a liquidity trap the policy rate is at or near its lower bound. Further reductions cannot meaningfully lower already-negligible borrowing costs, and firms and households prefer to hold cash regardless — monetary policy loses its transmission channel. This is why fiscal policy becomes the primary stabilisation tool.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'Portugal makes excellent wine; England weaves fine cloth. Even if England could produce both goods more efficiently than Portugal, both nations end up richer when they each focus on what they give up the least to produce. This 200-year-old insight — David Ricardo\'s comparative advantage — is still the central justification economists give for free trade today.',
      conceptualExplanation:
        'Comparative advantage is the ability of a producer to make a good at a lower opportunity cost than another producer. Opportunity cost here means how many units of Good B must be sacrificed to produce one extra unit of Good A. Crucially, comparative advantage does not require absolute advantage — a country can be less efficient at producing everything yet still have a comparative advantage in whatever it gives up the least to make.\n\nTo derive comparative advantage, set up a simple two-country, two-good production possibility table. Calculate the opportunity cost of each good in each country by dividing the alternative output. Whichever country faces the lower opportunity cost for a particular good holds the comparative advantage in that good, and should specialise in it. The other country then holds the comparative advantage in the remaining good — comparative advantage is always reciprocal in a two-good model.\n\nWhen countries specialise according to comparative advantage and then trade, world output of both goods rises compared with autarky (self-sufficiency). Individual countries also gain because they can consume beyond their own production possibility frontier when they can exchange exports for imports at a terms-of-trade ratio that lies between each country\'s domestic opportunity-cost ratios. This mutual gain is the fundamental economic case for free trade.',
      vocabulary: [
        {
          term: 'Comparative Advantage',
          definition:
            'The ability to produce a good at a lower opportunity cost than another producer or country.',
          example:
            'If Brazil sacrifices 0.5 units of steel per tonne of coffee, while Germany sacrifices 2 units, Brazil has a comparative advantage in coffee.',
        },
        {
          term: 'Absolute Advantage',
          definition:
            'The ability to produce more output per unit of input (or the same output with fewer inputs) than another producer.',
          example:
            'A country that can produce 100 cars per worker-year while another produces only 60 has an absolute advantage in car production.',
        },
        {
          term: 'Opportunity Cost',
          definition:
            'The value of the next-best alternative forgone when making an economic decision.',
          example:
            'If a farmer can grow either 4 tonnes of wheat or 2 tonnes of corn on the same plot, the opportunity cost of 1 tonne of corn is 2 tonnes of wheat.',
        },
      ],
      examinerTip:
        'Always derive comparative advantage from opportunity costs, not from raw output numbers. Many students lose marks by comparing absolute output figures. Show the opportunity-cost calculation explicitly: "Country A sacrifices X units of Y per unit of X, whereas Country B sacrifices Z units — therefore Country A has the comparative advantage in X." Also note that in a two-good model, if Country A has a comparative advantage in Good 1, Country B must have a comparative advantage in Good 2.',
      thinkAboutIt: {
        question: `Comparative advantage tells us that free trade raises global output — but does that justify free trade when one country achieves its low opportunity cost through child labour, poverty wages, or the absence of environmental regulation? Should the positive case for trade be separated from the normative question of whether the gains are worth their human and ecological cost?`,
        answer: `This is one of the most important tensions in international economics. The positive claim — that specialisation according to comparative advantage increases total output — can be mathematically correct even when the source of that advantage is morally troubling. A country that pollutes freely or exploits workers has lower production costs, giving it a genuine comparative advantage, but the "gains from trade" calculation ignores the social costs borne by workers and ecosystems not included in market prices. Economists often respond by separating the trade question from the labour-standards question: free trade raises the economic pie, and labour standards, environmental regulations, and redistribution are the appropriate tools to address exploitation. But critics argue that in practice the two cannot be separated — trade liberalisation creates competitive pressure that induces a "race to the bottom" on regulation. The honest answer is that comparative advantage is a positive principle describing what maximises output, not a normative verdict on whether that outcome is just; the ethical evaluation requires additional value judgments that economics alone cannot supply.`,
      },
    },
    flashcards: [
      {
        id: 'i6-l1-fc1',
        front: 'What is comparative advantage?',
        back: 'The ability to produce a good at a lower opportunity cost than another country. A country should specialise in and export the good in which its opportunity cost is lowest.',
        hint: 'Think opportunity cost, not absolute output.',
        tags: ['comparative-advantage', 'trade'],
      },
      {
        id: 'i6-l1-fc2',
        front: 'How do you calculate the opportunity cost of Good A in a simple two-good model?',
        back: 'Opportunity cost of one unit of A = (maximum output of B) ÷ (maximum output of A). Compare this ratio across countries to find who has the lower opportunity cost.',
        hint: 'Divide alternative output by own output.',
        tags: ['opportunity-cost', 'comparative-advantage'],
      },
      {
        id: 'i6-l1-fc3',
        front: 'Can a country have a comparative advantage in both goods in a two-good model?',
        back: 'No. Comparative advantage is always reciprocal in a two-good model. If Country A has a comparative advantage in Good 1, Country B must have the comparative advantage in Good 2.',
        hint: 'Opportunity costs are mirror images in a two-good world.',
        tags: ['comparative-advantage', 'specialisation'],
      },
      {
        id: 'i6-l1-fc4',
        front: 'What is autarky, and why does trade outperform it?',
        back: 'Autarky is self-sufficiency — producing everything domestically without trade. Trade allows countries to consume beyond their own PPF by exchanging exports for imports at favourable terms of trade, raising total world output.',
        hint: 'Think beyond the PPF.',
        tags: ['trade', 'specialisation'],
      },
      {
        id: 'i6-l1-fc5',
        front: 'Why might a country choose not to fully specialise even when comparative advantage dictates it should?',
        back: 'Full specialisation creates vulnerability: if the world price changes or demand collapses, the country has no domestic alternative industry. Diversification provides insurance against terms-of-trade shocks, maintains strategic industries, and preserves skills. In practice, most countries specialise partially rather than completely.',
        hint: 'Risk, strategic industries, and diversification.',
        tags: ['comparative-advantage', 'specialisation', 'trade'],
      },
      {
        id: 'i6-l1-fc6',
        front: 'What is the difference between dynamic and static comparative advantage?',
        back: 'Static comparative advantage reflects current opportunity costs based on existing factor endowments. Dynamic comparative advantage recognises that a country can deliberately build new advantages over time through investment in education, infrastructure, R&D, and industrial policy — the rationale behind the infant-industry argument and East Asian development strategies.',
        hint: 'Can comparative advantage be created, not just inherited?',
        tags: ['comparative-advantage', 'trade', 'development'],
      },
      {
        id: 'i6-l1-fc7',
        front: 'How does the Heckscher-Ohlin theorem extend Ricardo\'s comparative advantage?',
        back: 'While Ricardo explained comparative advantage by differences in labour productivity alone, Heckscher-Ohlin argues that countries will export goods that intensively use their abundant factor (e.g., a labour-abundant country exports labour-intensive goods) and import goods that intensively use their scarce factor. It grounds comparative advantage in factor endowments rather than technology differences.',
        hint: 'Factor endowments determine what you export.',
        tags: ['comparative-advantage', 'trade', 'factor-endowments'],
      },
    ],
    quiz: [
      {
        id: 'i6-l1-q1',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'Country A can produce 80 units of wheat or 40 units of cloth with its resources. Country B can produce 60 units of wheat or 60 units of cloth. Which statement is correct?',
        options: [
          'Country A has a comparative advantage in both goods.',
          'Country A has a comparative advantage in wheat; Country B has a comparative advantage in cloth.',
          'Country B has a comparative advantage in wheat; Country A has a comparative advantage in cloth.',
          'Neither country has a comparative advantage because Country A has an absolute advantage in wheat.',
        ],
        correctAnswer: 1,
        explanation:
          "Country A's opportunity cost of 1 unit of wheat = 40/80 = 0.5 cloth; Country B's = 60/60 = 1 cloth. A gives up less cloth per wheat, so A has the comparative advantage in wheat. Reciprocally, Country B has the comparative advantage in cloth (opportunity cost of 1 cloth = 1 wheat vs. A's 2 wheat).",
      },
      {
        id: 'i6-l1-q2',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'Which of the following best explains why a country with an absolute disadvantage in all goods can still benefit from trade?',
        options: [
          'Trade allows it to access foreign technology and eliminate the absolute disadvantage over time.',
          'The country can specialise in the good where its opportunity cost is relatively lower than its trading partner\'s, enabling mutual gains.',
          'Foreign aid compensates for the efficiency gap and makes trade worthwhile.',
          'Tariffs imposed by the more productive country force the less productive one to specialise.',
        ],
        correctAnswer: 1,
        explanation:
          "Comparative advantage, not absolute advantage, determines the gains from trade. Even if one country is less efficient in every good, each country has a relatively lower opportunity cost in at least one good. Specialising according to those relative costs and then trading raises consumption possibilities for both nations.",
      },
      {
        id: 'i6-l1-q3',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'When a country specialises according to comparative advantage and engages in free trade, what happens to its consumption possibilities?',
        options: [
          'They remain the same as under autarky because production possibilities are unchanged.',
          'They fall because some domestic industries shut down.',
          'They expand beyond the country\'s own production possibility frontier.',
          'They are determined solely by the trading partner\'s preferences.',
        ],
        correctAnswer: 2,
        explanation:
          'By exporting goods in which it has a comparative advantage and importing goods in which it does not, a country can reach consumption bundles that lie outside its own PPF. This is the core gain from trade — access to a larger set of goods than self-sufficiency allows.',
      },
      {
        id: 'i6-l1-q4',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country X can produce 120 tonnes of rice or 40 computers per year. Country Y can produce 60 tonnes of rice or 30 computers per year. Which country has the comparative advantage in computers, and what is its opportunity cost per computer?',
        options: [
          'Country X; opportunity cost = 3 tonnes of rice per computer.',
          'Country Y; opportunity cost = 2 tonnes of rice per computer.',
          'Country X; opportunity cost = 0.33 computers per tonne of rice.',
          'Country Y; opportunity cost = 0.5 computers per tonne of rice.',
        ],
        correctAnswer: 1,
        explanation:
          "Country X's opportunity cost of 1 computer = 120/40 = 3 tonnes of rice. Country Y's opportunity cost = 60/30 = 2 tonnes of rice. Country Y gives up fewer tonnes of rice per computer, so it has the comparative advantage in computers at an opportunity cost of 2 tonnes of rice. Country X, conversely, has the comparative advantage in rice (opportunity cost = 1/3 computer per tonne vs. Y's 1/2).",
      },
      {
        id: 'i6-l1-q5',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Which of the following is a valid criticism of the theory of comparative advantage as a practical guide to trade policy?',
        options: [
          'The theory is only valid when a country has an absolute advantage in at least one good.',
          'The theory assumes constant opportunity costs, ignores increasing returns to scale, and abstracts from transport costs, factor immobility, and adjustment costs for workers displaced from contracting industries.',
          'The theory predicts that large countries will always gain more from trade than small countries.',
          'The theory applies only to agricultural goods, not manufactured goods or services.',
        ],
        correctAnswer: 1,
        explanation:
          "Comparative advantage rests on several simplifying assumptions — constant opportunity costs (linear PPFs), perfect factor mobility within countries, no transport costs, and no economies of scale. In the real world, PPFs are bowed out (increasing opportunity costs), some workers cannot easily move between industries, and new trade theories highlight that economies of scale and market structure (not just opportunity costs) determine trade patterns. The adjustment costs for workers displaced by trade are real and can be severe even if aggregate gains are positive.",
      },
      {
        id: 'i6-l1-q6',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'The Heckscher-Ohlin theorem predicts that a labour-abundant developing country will export labour-intensive goods. In practice, the "Leontief Paradox" found that the US — a capital-rich country — exported relatively labour-intensive goods. What does this suggest?',
        options: [
          'The US had no comparative advantage in any good, so trade theory is flawed.',
          'Labour abundance is determined by quantity alone; skill and productivity differences mean that US labour may be effectively "capital-equivalent" despite lower headcounts.',
          'The Heckscher-Ohlin theorem proves that capital-abundant countries should always import labour-intensive goods.',
          'The paradox is explained entirely by US tariff policy, which forced labour-intensive exports.',
        ],
        correctAnswer: 1,
        explanation:
          "The Leontief Paradox highlighted that factor abundance must account for labour quality (human capital, skills, productivity), not just physical quantities. Highly skilled US workers may be so productive that they are effectively equivalent to multiple units of unskilled labour, making US exports 'human-capital-intensive' even if they appear labour-intensive in raw headcount terms. This led economists to develop the concept of human capital and refine factor endowment theory beyond simple physical measures.",
      },
      {
        id: 'i6-l1-q7',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A developing country currently exports raw cotton and imports textiles. The government argues it should develop a domestic textile industry by taxing cotton exports and subsidising textile production. This policy is best described as:',
        options: [
          'A free-trade policy exploiting comparative advantage in raw materials.',
          'An attempt to build dynamic comparative advantage in manufacturing by protecting infant industries.',
          'A terms-of-trade manipulation that harms the trading partner.',
          'A quota on imports that violates WTO rules.',
        ],
        correctAnswer: 1,
        explanation:
          "The policy is a classic infant-industry / dynamic comparative advantage strategy: by taxing raw material exports (making them less attractive to foreign buyers) and subsidising domestic processing, the government hopes to shift the economy up the value chain. The idea is that current static comparative advantage (raw cotton) may not reflect future comparative advantage (textiles with economies of scale) once domestic industries mature. East Asian economies used similar strategies successfully, though the 'picking winners' problem means such policies carry high risks of capture and permanent inefficiency.",
      },
      {
        id: 'i6-l1-q8',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Countries A and B both have a comparative advantage in the same good (wheat). Which statement must be true?',
        options: [
          'This is impossible in a two-country, two-good model — comparative advantage is always reciprocal.',
          'Both countries should specialise in wheat and neither will gain from trade.',
          'Country A should specialise in wheat and Country B in the other good, based on absolute advantage.',
          'The terms of trade are irrelevant because both countries produce the same good.',
        ],
        correctAnswer: 0,
        explanation:
          "In a two-country, two-good model, comparative advantage is mathematically reciprocal. If Country A has a lower opportunity cost in wheat, Country B necessarily has a lower opportunity cost in the other good. It is logically impossible for both countries to have a lower opportunity cost in the same good simultaneously, because opportunity costs are mirror images of each other (they sum to 1 when expressed as proportions of domestic production possibilities).",
      },
      {
        id: 'i6-l1-q9',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Free trade, based on comparative advantage, is often said to increase aggregate welfare. However, which of the following most accurately captures the distributional concern?',
        options: [
          'Free trade always makes every individual in every country better off.',
          'Free trade raises average welfare but can make specific groups — particularly workers in import-competing industries — significantly worse off, creating winners and losers within each country.',
          'Free trade only raises welfare for the exporting country; the importing country always loses.',
          'Distributional effects are irrelevant because trade raises GDP, and higher GDP always trickles down to all groups.',
        ],
        correctAnswer: 1,
        explanation:
          "Comparative advantage theory shows that aggregate gains from trade are positive, but the Stolper-Samuelson theorem (an extension of Heckscher-Ohlin) shows that opening trade raises the real return to a country's abundant factor and reduces the real return to its scarce factor. In a developed, capital-abundant country, workers in labour-intensive import-competing industries may face wage pressure or job losses. The aggregate gain is real, but it is not automatically shared — redistribution through taxes and transfers is required to ensure that all groups benefit.",
      },
      {
        id: 'i6-l1-q10',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country has a comparative advantage in producing coffee because of its climate. Over time, however, it invests heavily in education and technology, developing a comparative advantage in software. This is best explained by:',
        options: [
          'The Ricardian model, which predicts that climate determines comparative advantage permanently.',
          'The concept of dynamic comparative advantage, where factor endowments and productivity change through deliberate investment, shifting a country\'s pattern of specialisation over time.',
          'The Prebisch-Singer hypothesis, which predicts that primary commodity exporters will always transition to manufacturing.',
          'The Marshall-Lerner condition, which links currency depreciation to shifts in comparative advantage.',
        ],
        correctAnswer: 1,
        explanation:
          "Dynamic comparative advantage recognises that a country's comparative advantage is not fixed by nature. Through investment in human capital (education), physical capital (infrastructure), and technology (R&D), countries can deliberately change the goods in which they have a lower opportunity cost. South Korea's shift from low-cost textiles in the 1960s to semiconductors and automobiles by the 1990s is a celebrated real-world example — comparative advantage was constructed through policy and investment, not merely inherited.",
      },
    ],
    lessonAssignment: {
      prompt: `Using a production possibilities table with two countries and two goods of your choice, derive each country's comparative advantage by calculating opportunity costs. Then construct an argument for why both countries should specialise and trade, showing how they can each reach a consumption point beyond their own production possibility frontier.`,
      rubric: `Award points for:\n- Correctly constructing a two-country, two-good production possibilities table with plausible numbers (1 mark)\n- Accurately calculating the opportunity cost of each good in each country, showing working (2 marks)\n- Correctly identifying which country has the comparative advantage in each good, with justification referencing opportunity costs not absolute output (2 marks)\n- Identifying an exchange ratio (terms of trade) that falls between the two countries' domestic opportunity-cost ratios and explaining why it is mutually beneficial (2 marks)\n- Demonstrating with a specific numerical example that both countries can consume more of at least one good after specialisation and trade than under autarky (2 marks)\n- Acknowledging at least one real-world limitation of the theory (e.g. adjustment costs, constant opportunity costs assumption, factor immobility) (1 mark)`,
      exampleTopics: [
        'Wheat and laptops — a developed economy (high tech productivity) vs. a developing economy (cheap agricultural labour)',
        'Steel and wine — inspired by Ricardo\'s original England-Portugal example, updated with modern production data',
        'Cars and rice — Japan vs. a Southeast Asian agricultural economy, exploring how industrial policy shifted Japan\'s comparative advantage',
        'Financial services and cocoa — a small island economy specialising in offshore banking vs. a West African commodity exporter',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 2 — Terms of Trade and Gains from Trade
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'i6-l2',
    moduleId: 'i6-international',
    title: 'Terms of Trade and Gains from Trade',
    description:
      'Define the terms of trade, calculate ToT, and show how the distribution of gains depends on relative ToT.',
    order: 2,
    estimatedMinutes: 25,
    tags: ['terms-of-trade', 'gains-from-trade'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson established that comparative advantage — the ability to produce a good at a lower opportunity cost — determines which goods countries should specialise in and export. The terms of trade determine the actual exchange ratio at which specialised output is traded, and therefore how the total gains from specialisation are divided between trading partners.`,
      recallQuestions: [
        {
          id: 'i6-l2-recall-1',
          type: 'mcq' as const,
          question: 'Country A can produce 60 units of wheat or 30 units of cloth. Country B can produce 40 units of wheat or 40 units of cloth. Which statement is correct?',
          options: [
            'Country A has a comparative advantage in wheat; Country B has a comparative advantage in cloth.',
            'Country A has a comparative advantage in both goods because it can produce more wheat.',
            'Country B has a comparative advantage in wheat because it is less efficient overall.',
            'Neither country has a comparative advantage because the opportunity costs are identical.',
          ],
          correctAnswer: 0,
          explanation: 'Country A\'s opportunity cost of 1 wheat = 30/60 = 0.5 cloth; Country B\'s = 40/40 = 1 cloth. A gives up less cloth per unit of wheat, so A has the comparative advantage in wheat. Reciprocally, Country B has the comparative advantage in cloth (opportunity cost: 40/40 = 1 wheat vs. A\'s 60/30 = 2 wheat).',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'In the early 2000s, commodity-exporting nations in Latin America and Africa experienced a "terms of trade boom" as China\'s demand for raw materials drove up prices. Countries like Chile (copper) and Zambia (copper) suddenly found that each tonne of exports bought far more manufactured imports than before — a concrete illustration of how favourable terms of trade can dramatically improve living standards without any change in domestic productivity.',
      conceptualExplanation:
        'The terms of trade (ToT) measures the rate at which a country\'s exports exchange for imports on world markets. The most common formula expresses it as an index: ToT = (Index of Export Prices ÷ Index of Import Prices) × 100. A value above 100 means export prices have risen relative to import prices — the country can buy more imports per unit of exports — which is called an improvement in the terms of trade. A value below 100 signals a deterioration.\n\nThe terms of trade also determine how the overall gains from specialisation are divided between trading partners. In a simple two-good model, the actual exchange ratio (e.g., how many metres of cloth trade for one tonne of wheat) must fall somewhere between each country\'s domestic opportunity-cost ratio to make trade worthwhile for both parties. The closer the terms of trade are to a country\'s own opportunity-cost ratio, the smaller its share of the gains; the further away the ToT lies from its domestic ratio (and the closer it is to the partner\'s), the larger its gains.\n\nSeveral forces shift the terms of trade over time: changes in global demand for a country\'s exports, productivity changes that lower the cost of production, exchange rate movements, and commodity price cycles. Developing countries that export primary commodities often face the Prebisch-Singer hypothesis — a long-run tendency for commodity prices to fall relative to manufactured goods prices — implying a secular deterioration in their terms of trade. Whether or not this trend holds empirically, ToT volatility is a significant macroeconomic risk for commodity-dependent economies.',
      vocabulary: [
        {
          term: 'Terms of Trade (ToT)',
          definition:
            'The ratio of a country\'s export price index to its import price index, usually expressed as an index number with a base year = 100.',
          example:
            'If a country\'s export prices rise by 10 % while import prices rise by only 5 %, the ToT improves from 100 to approximately 105.',
        },
        {
          term: 'Improvement in Terms of Trade',
          definition:
            'A rise in the ToT index, meaning a given quantity of exports can now purchase more imports than before.',
          example:
            'An oil-exporting country benefits when global oil prices surge because each barrel buys more manufactured goods from abroad.',
        },
        {
          term: 'Prebisch-Singer Hypothesis',
          definition:
            'The proposition that primary commodity prices tend to decline relative to manufactured goods prices in the long run, causing a secular deterioration in the terms of trade for commodity-exporting developing countries.',
          example:
            'A coffee-exporting country may find that over decades it needs to export ever-larger quantities of coffee to import the same number of tractors.',
        },
      ],
      examinerTip:
        'Distinguish clearly between the level and the direction of change in the ToT. An "improvement" means the index rises (exports buy more imports), while a "deterioration" means it falls. Also remember that an improvement in the ToT is not always unambiguously good: if it is caused by falling demand for exports (rather than rising export prices), it may accompany a recession. Examiners often test whether students can identify the cause behind a ToT change as well as its direction.',
      thinkAboutIt: {
        question: `Many developing countries have followed the advice to specialise in their comparative advantage — typically primary commodities like coffee, cocoa, copper, or cotton. Yet decades later, many of these countries remain poor while countries that specialised in manufactured goods grew rich. Does the Prebisch-Singer hypothesis explain this "commodity trap," and what does it imply for the relationship between trade and development?`,
        answer: `The Prebisch-Singer hypothesis offers a powerful structural explanation: primary commodity prices tend to fall relative to manufactured goods prices over the long run, so countries locked into commodity exports must export ever-larger quantities just to maintain their purchasing power for imports. Several forces drive this: manufactured goods have higher income elasticity of demand (as the world grows richer, people spend more on manufactures than on food or raw materials), primary commodities face competition from synthetic substitutes, and productivity gains in agriculture and mining tend to lower rather than raise commodity prices. The "commodity trap" also has a political-economy dimension: commodity booms generate export revenue but often fail to stimulate broader industrial development, and resource windfalls can even crowd out manufacturing through Dutch Disease effects. The implication for policy is not necessarily protectionism but rather deliberate industrial policy, diversification, and investment in human capital — using commodity rents while they last to build a more diversified export base before the next terms-of-trade deterioration.`,
      },
    },
    flashcards: [
      {
        id: 'i6-l2-fc1',
        front: 'Write the formula for the terms of trade index.',
        back: 'ToT = (Index of Export Prices ÷ Index of Import Prices) × 100. A result above 100 indicates an improvement relative to the base year.',
        hint: 'Export prices in the numerator.',
        tags: ['terms-of-trade'],
      },
      {
        id: 'i6-l2-fc2',
        front: 'What does an improvement in the terms of trade mean for a country?',
        back: 'Each unit of exports now buys more imports than before. The country\'s purchasing power on world markets has increased — real income rises even if domestic output is unchanged.',
        hint: 'More imports per export unit.',
        tags: ['terms-of-trade', 'gains-from-trade'],
      },
      {
        id: 'i6-l2-fc3',
        front: 'How does the terms of trade determine the distribution of gains from trade between two countries?',
        back: 'The actual exchange ratio must lie between each country\'s domestic opportunity-cost ratio. The country whose ToT is closer to its trading partner\'s domestic ratio captures a larger share of the total gains from specialisation.',
        hint: 'Further from your own ratio = more gain.',
        tags: ['terms-of-trade', 'gains-from-trade'],
      },
      {
        id: 'i6-l2-fc4',
        front: 'What is the Prebisch-Singer hypothesis?',
        back: 'The long-run tendency for primary commodity prices to fall relative to manufactured goods prices, leading to a secular deterioration in the terms of trade for commodity-exporting developing countries.',
        hint: 'Primary vs. manufactured goods over time.',
        tags: ['terms-of-trade', 'development'],
      },
      {
        id: 'i6-l2-fc5',
        front: 'Why might an improvement in the terms of trade not always indicate economic success?',
        back: 'If export prices rise because foreign demand has collapsed (e.g., during a global recession that reduces the volume sold), or if a country\'s export industries become uncompetitive and lose market share, the ToT index can improve even as export revenues and employment fall. The cause matters as much as the direction of change.',
        hint: 'What if fewer exports are sold at the higher price?',
        tags: ['terms-of-trade', 'gains-from-trade'],
      },
      {
        id: 'i6-l2-fc6',
        front: 'What is Dutch Disease, and how does it relate to the terms of trade?',
        back: 'Dutch Disease occurs when a commodity boom (e.g., oil discovery) improves the terms of trade and causes currency appreciation, making non-commodity exports uncompetitive and causing deindustrialisation. The short-run terms-of-trade improvement can crowd out the manufacturing sector that might have generated long-run growth — a paradox of plenty.',
        hint: 'A currency appreciation can hurt your other export industries.',
        tags: ['terms-of-trade', 'development', 'exchange-rates'],
      },
      {
        id: 'i6-l2-fc7',
        front: 'Why do income elasticities of demand matter for the long-run terms of trade of developing countries?',
        back: 'Primary commodities (food, raw materials) have low income elasticity of demand — as global incomes rise, spending on them grows slowly. Manufactured goods and services have high income elasticity. This means that as the world grows richer, demand for primary commodities lags behind demand for manufactures, putting persistent downward pressure on commodity prices relative to manufactured goods — the mechanism behind the Prebisch-Singer deterioration.',
        hint: 'Engel\'s Law extended to international trade.',
        tags: ['terms-of-trade', 'development', 'elasticity'],
      },
    ],
    quiz: [
      {
        id: 'i6-l2-q1',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'A country\'s export price index rises from 100 to 120, while its import price index rises from 100 to 110. What has happened to the terms of trade?',
        options: [
          'The terms of trade have deteriorated because both indices rose.',
          'The terms of trade have improved because the export price index rose by more than the import price index.',
          'The terms of trade are unchanged because both indices started at 100.',
          'The terms of trade have deteriorated because import prices are now relatively cheaper.',
        ],
        correctAnswer: 1,
        explanation:
          'New ToT = (120 ÷ 110) × 100 ≈ 109. Because the ToT index has risen above 100 (base), the terms of trade have improved. Each unit of exports now buys approximately 9 % more imports than before.',
      },
      {
        id: 'i6-l2-q2',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'In a two-country, two-good model, Country X has a domestic opportunity cost of 1 wheat = 2 cloth, and Country Y has a domestic opportunity cost of 1 wheat = 0.5 cloth. Which terms of trade would make trade beneficial for both countries?',
        options: [
          '1 wheat = 3 cloth',
          '1 wheat = 1 cloth',
          '1 wheat = 0.25 cloth',
          '1 wheat = 2 cloth',
        ],
        correctAnswer: 1,
        explanation:
          'The ToT must lie strictly between the two domestic ratios: between 0.5 cloth and 2 cloth per wheat. Only 1 wheat = 1 cloth falls in this range, making trade mutually beneficial. A ratio of 2 cloth gives all the gains to Country Y; 0.5 cloth gives all the gains to Country X; 3 cloth is outside the range and Country X would not trade.',
      },
      {
        id: 'i6-l2-q3',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'According to the Prebisch-Singer hypothesis, which countries are most at risk of a long-run deterioration in their terms of trade?',
        options: [
          'High-income countries that export technology-intensive manufactured goods.',
          'Countries that export financial services and intellectual property.',
          'Developing countries that are heavily dependent on primary commodity exports.',
          'Countries with large trade surpluses and strong manufacturing sectors.',
        ],
        correctAnswer: 2,
        explanation:
          'The Prebisch-Singer hypothesis specifically identifies primary commodity exporters — often developing countries — as facing a secular decline in export prices relative to the manufactured goods they import. This erodes their purchasing power on world markets over time even if they export the same physical quantities.',
      },
      {
        id: 'i6-l2-q4',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country\'s export price index falls from 100 to 90, and its import price index also falls from 100 to 80. What has happened to the terms of trade, and what is the new index value?',
        options: [
          'Terms of trade have deteriorated; new index = 90.',
          'Terms of trade have improved; new index ≈ 112.5.',
          'Terms of trade are unchanged because both indices fell.',
          'Terms of trade have deteriorated; new index ≈ 88.9.',
        ],
        correctAnswer: 1,
        explanation:
          "New ToT = (90 ÷ 80) × 100 = 112.5. Even though both export and import prices fell, import prices fell by more. Each unit of exports now buys more imports than before — this is an improvement. The common misconception is that falling export prices always mean a deterioration; what matters is the relative change.",
      },
      {
        id: 'i6-l2-q5',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country A specialises in coffee and Country B in machinery. Over 20 years, coffee prices fall by 30% while machinery prices rise by 20%. What is the approximate change in Country A\'s terms of trade, and what is the likely long-run consequence?',
        options: [
          'ToT improves by about 10%; Country A benefits from higher real income.',
          'ToT deteriorates by about 42%; Country A must export increasing volumes of coffee to import the same quantity of machinery.',
          'ToT is unchanged because both prices moved in opposite directions.',
          'ToT deteriorates by 30%; Country A should impose tariffs on machinery to correct the imbalance.',
        ],
        correctAnswer: 1,
        explanation:
          "New ToT = (70 ÷ 120) × 100 ≈ 58.3, a deterioration of approximately 42 percentage points from the base of 100. Country A now receives far less purchasing power per unit of coffee exported. The consequence is that it must increase export volumes to buy the same amount of machinery — exactly the 'commodity trap' described by the Prebisch-Singer hypothesis. This illustrates why primary-commodity dependence can trap countries in a cycle of declining real income even without any domestic policy failure.",
      },
      {
        id: 'i6-l2-q6',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'If Country A improves its terms of trade by negotiating better export prices, what is the effect on its trading partner Country B (assuming a two-country world)?',
        options: [
          'Country B\'s terms of trade also improve because more trade creates larger mutual gains.',
          'Country B\'s terms of trade are unaffected because ToT is measured independently for each country.',
          'Country B\'s terms of trade deteriorate, because higher export prices for A mean higher import prices for B.',
          'Country B benefits because it can now import more at lower cost.',
        ],
        correctAnswer: 2,
        explanation:
          "In a two-country model, A's export prices are B's import prices. If A's export price index rises, B's import price index rises by the same amount. This means B's ToT = (B's export prices ÷ A's export prices) falls — B's terms of trade deteriorate exactly as A's improve. The gains from a ToT improvement for one country come partly at the expense of the partner: ToT gains are not purely mutual.",
      },
      {
        id: 'i6-l2-q7',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'An oil-exporting country discovers new reserves and dramatically increases oil production, flooding the world market. What is the likely effect on its own terms of trade?',
        options: [
          'Terms of trade improve because the country is exporting more oil.',
          'Terms of trade deteriorate because the flood of supply drives down the world oil price, reducing the export price index.',
          'Terms of trade are unchanged because the country is still exporting the same good.',
          'Terms of trade improve because increased production lowers domestic costs.',
        ],
        correctAnswer: 1,
        explanation:
          "A surge in supply of a commodity depresses its world price. If the country is large enough to influence the world price (not a price-taker), flooding the market drives down oil prices — its own export price index falls. Even if it exports more volume, each unit fetches less, potentially worsening the terms of trade. This is a key reason why commodity exporters do not always benefit from expanding supply, and why OPEC restricts output to support prices.",
      },
      {
        id: 'i6-l2-q8',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Which of the following real-world developments would be most consistent with the Prebisch-Singer hypothesis playing out for a sub-Saharan African country heavily dependent on cocoa exports?',
        options: [
          'The country\'s terms of trade improve steadily as global income growth boosts cocoa demand.',
          'Over several decades, the country needs to export progressively more cocoa to afford the same quantity of imported machinery, as cocoa prices lag manufactured goods inflation.',
          'The country industrialises rapidly because cocoa revenues fund infrastructure and education.',
          'The terms of trade remain stable because commodity prices are anchored to manufactured goods prices by WTO agreements.',
        ],
        correctAnswer: 1,
        explanation:
          "The Prebisch-Singer hypothesis specifically predicts this outcome: primary commodity prices grow more slowly than manufactured goods prices in the long run, so commodity exporters face a secular deterioration. The country must run faster (export more) just to stand still (import the same volume of manufactures). This pattern was widely observed in sub-Saharan Africa through much of the 1960s-1990s and is a foundational argument for diversification away from commodity dependence.",
      },
      {
        id: 'i6-l2-q9',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country experiences a sharp terms-of-trade improvement caused by a collapse in import prices (e.g., a global fall in oil prices) rather than a rise in export prices. Which statement best evaluates the welfare impact?',
        options: [
          'The welfare impact is identical regardless of whether the improvement came from export prices rising or import prices falling.',
          'The welfare impact is unambiguously negative because import prices falling means the country\'s trading partners are in recession.',
          'The welfare impact is more straightforwardly positive in this case: the country can import more at lower cost without needing to export more, and there is no corresponding loss of export revenue.',
          'The welfare impact depends on whether the country is running a trade surplus or deficit.',
        ],
        correctAnswer: 2,
        explanation:
          "The cause of a ToT change matters for welfare analysis. When the improvement comes from falling import prices (e.g., an oil-importing country benefits from low oil prices), it is an unambiguous real income gain — the same exports buy more imports. In contrast, when ToT improves because export volumes collapse (prices rise because supply has crashed), the index may rise even as export revenues and employment fall. This is why examiners reward students who identify not just the direction of the ToT change but its underlying cause.",
      },
      {
        id: 'i6-l2-q10',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A developing country government argues: "Our terms of trade have been deteriorating for 30 years. We should diversify away from primary commodities into manufacturing." An economist responds that this ignores comparative advantage. Which evaluation of this debate is most accurate?',
        options: [
          'The economist is correct: comparative advantage should permanently determine a country\'s export structure, regardless of long-run price trends.',
          'The government is correct: comparative advantage theory is irrelevant to developing countries because they can never compete with developed nations.',
          'Both have valid points: static comparative advantage supports specialisation in current strengths, but the Prebisch-Singer evidence supports building dynamic comparative advantage through industrial policy to escape long-run terms-of-trade deterioration.',
          'The debate is irrelevant because terms of trade are determined by the World Trade Organization and cannot be influenced by national policy.',
        ],
        correctAnswer: 2,
        explanation:
          "This is a classic tension between static and dynamic comparative advantage. The economist invoking comparative advantage is making a static argument about current opportunity costs. The government is invoking a dynamic argument: if current specialisation leads to secular deterioration in purchasing power, then deliberately shifting the economic structure — even at short-run efficiency cost — may improve long-run welfare. The East Asian experience (South Korea, Taiwan, Singapore) suggests that successful industrial policy can shift comparative advantage, though it requires capable institutions and carries risks of rent-seeking and permanent protection.",
      },
    ],
    lessonAssignment: {
      prompt: `A country's terms of trade improve significantly — its export price index rises from 100 to 130 while its import price index remains at 100. Analyse how this improvement in the terms of trade affects the country's standard of living, both in theory and in practice. Your answer should consider the source of the improvement and any potential negative side effects.`,
      rubric: `Award points for:\n- Correctly calculating the new terms of trade index (130) and identifying the improvement (1 mark)\n- Explaining the direct real-income effect: each unit of exports now buys 30% more imports, raising purchasing power and living standards (2 marks)\n- Discussing the source of the improvement — e.g., rising demand for exports signals strong growth and benefits employment and incomes (1 mark)\n- Identifying at least one potential negative side effect, such as Dutch Disease (currency appreciation making other exports uncompetitive), inflationary pressure from higher export prices domestically, or over-reliance on a single export sector (2 marks)\n- Distinguishing between short-run and long-run effects, especially if the improvement is driven by a commodity price cycle that may reverse (2 marks)\n- Applying the Prebisch-Singer hypothesis to argue that commodity-driven improvements may not be sustainable, and recommending diversification (2 marks)`,
      exampleTopics: [
        'A copper-exporting African nation benefits from a surge in global copper demand driven by the electric vehicle revolution',
        'An oil-exporting Gulf state experiences a terms-of-trade improvement as global energy prices spike following a geopolitical crisis',
        'A wheat-exporting country sees its terms of trade improve after a poor harvest elsewhere reduces world supply',
        'A small island economy specialising in tourism services finds its terms of trade improve as global disposable incomes rise',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 3 — Trade Barriers
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'i6-l3',
    moduleId: 'i6-international',
    title: 'Trade Barriers — Tariffs, Quotas, Subsidies',
    description:
      'Analyse the welfare effects of each barrier using supply-and-demand diagrams.',
    order: 3,
    estimatedMinutes: 35,
    tags: ['tariffs', 'quotas', 'trade-barriers', 'protectionism'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that the terms of trade (export price index ÷ import price index × 100) determines the division of gains from trade, and that an improvement means each unit of exports buys more imports. Trade barriers — tariffs, quotas, and subsidies — drive a wedge between domestic and world prices, distorting those gains and creating deadweight loss.`,
      recallQuestions: [
        {
          id: 'i6-l3-recall-1',
          type: 'mcq' as const,
          question: 'A country\'s export price index rises from 100 to 115, while its import price index rises from 100 to 105. What has happened to the terms of trade?',
          options: [
            'The terms of trade have improved because export prices rose by more than import prices.',
            'The terms of trade have deteriorated because both indices rose.',
            'The terms of trade are unchanged because both started at 100.',
            'The terms of trade have deteriorated because import prices are now relatively cheaper.',
          ],
          correctAnswer: 0,
          explanation: 'New ToT = (115 ÷ 105) × 100 ≈ 109.5. The ToT index has risen above 100 (base year), so the terms of trade have improved — each unit of exports now buys approximately 9.5% more imports than before.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'In 2018 the United States imposed tariffs of 25 % on steel imports, citing national security. American steel producers cheered — their domestic price rose and output expanded. But US manufacturers who use steel as an input saw costs jump, and economists estimated that for every steelworker job saved, consumers paid thousands of dollars more in higher prices. The episode is a textbook illustration of who wins and who loses from a tariff.',
      conceptualExplanation:
        'A tariff is a tax levied on imported goods. In a standard supply-and-demand diagram for a small open economy, the world price sets the domestic price under free trade. A tariff raises the domestic price above the world price by the tariff amount. This higher price benefits domestic producers (whose quantity supplied rises) and harms domestic consumers (whose quantity demanded falls and who pay more per unit). Government collects tariff revenue equal to the tariff per unit times the volume of imports after the tariff. The net welfare loss consists of two "deadweight loss triangles" — one representing the efficiency loss from domestic over-production, and one from the consumption that is no longer affordable. The consumer surplus loss exceeds the combined gains to producers and the government, leaving a net welfare loss to the domestic economy.\n\nA quota directly limits the quantity of a good that can be imported. Its welfare effects resemble those of a tariff: domestic price rises, consumer surplus falls, and domestic producer surplus rises. The key difference is that under a quota the revenue equivalent goes not to the government but to whoever holds the import licences — typically foreign exporters or domestic importers — unless the government auctions the licences. Because quota revenue accrues to licence-holders rather than the government, quotas can be economically inferior to tariffs if licences are granted free of charge.\n\nAn export subsidy is a government payment to domestic producers for each unit exported. This lowers the effective cost of production for exporters, shifts domestic supply outward in export markets, and lowers the world price (for a large country). For a small open economy, the domestic price rises above the world price (by the subsidy amount), consumers pay more for both imported and domestic goods, domestic producers expand output, but the government subsidy cost exceeds the gain to producers — again generating a net welfare loss. Import substitution subsidies (given to domestic producers competing with imports) raise similar welfare concerns. All three instruments share the feature of creating economic inefficiency by driving a wedge between domestic and world prices.',
      vocabulary: [
        {
          term: 'Tariff',
          definition:
            'A tax placed on imported goods, raising their domestic price above the world price and generating government revenue while reducing import volumes.',
          example:
            'A 25 % tariff on imported steel means a $1,000 tonne of foreign steel costs domestic buyers $1,250, boosting US producers but raising costs for manufacturers.',
        },
        {
          term: 'Import Quota',
          definition:
            'A direct quantitative limit on the amount of a good that can be imported in a given period.',
          example:
            'A quota of 500,000 cars per year on Japanese imports to the US caps supply regardless of price, pushing the domestic price above the world level.',
        },
        {
          term: 'Export Subsidy',
          definition:
            'A government payment to domestic producers for each unit of a good exported, lowering production costs and expanding export volumes but creating a domestic deadweight loss.',
          example:
            'An EU grain subsidy allows European wheat to be sold on world markets below production cost, undercutting farmers in developing countries.',
        },
      ],
      examinerTip:
        'Always draw the diagram when analysing trade barriers. Label the world price (Pw), the protected price (Pw + tariff or quota price), free-trade quantity supplied and demanded, post-barrier quantities, consumer surplus loss, producer surplus gain, government revenue rectangle, and the two deadweight loss triangles. Examiners reward labelled diagrams with explicit welfare analysis. For quotas, note that the "revenue rectangle" becomes a "quota rent" that accrues to licence-holders, not the government.',
      thinkAboutIt: {
        question: `Economists are nearly unanimous in opposing tariffs and quotas as economically inefficient — the welfare analysis consistently shows net deadweight losses. Yet democratic governments around the world impose trade barriers constantly. Why? If free trade makes the aggregate economy better off, why do politicians keep protecting specific industries?`,
        answer: `The answer lies in the political economy of concentrated benefits and diffuse costs. A tariff on steel, for example, provides large, visible, concentrated benefits to a relatively small number of steel workers and steelmakers — who are well-organised, politically vocal, and will campaign hard for protection. The costs are spread across millions of consumers and downstream manufacturers in the form of slightly higher prices — too small per person to motivate organised political opposition. This asymmetry means that even though the aggregate welfare loss exceeds the benefit to protected industries, the political calculus favours protection. Trade barriers are also used to signal toughness in negotiations, to punish geopolitical adversaries, or to respond to foreign subsidies. There is also a genuine public-choice problem: the economists calculating deadweight losses are not the ones facing job losses in a factory town. Politicians representing those communities rationally prioritise their constituents' concentrated losses over diffuse nationwide efficiency gains. This political economy insight — not a failure of economics — explains why free trade is easier to justify theoretically than to achieve politically.`,
      },
    },
    flashcards: [
      {
        id: 'i6-l3-fc1',
        front: 'What are the four welfare effects of a tariff on a small open economy?',
        back: '1. Consumer surplus falls (higher domestic price). 2. Producer surplus rises (domestic producers sell more at higher price). 3. Government gains tariff revenue. 4. There is a net deadweight loss (two triangles) because the consumer loss exceeds the producer gain plus revenue.',
        hint: 'Consumers lose, producers gain, government gains, net DWL remains.',
        tags: ['tariffs', 'welfare', 'protectionism'],
      },
      {
        id: 'i6-l3-fc2',
        front: 'How does the welfare analysis of a quota differ from that of a tariff?',
        back: 'The domestic price and output effects are similar, but the "revenue rectangle" under a quota becomes a quota rent that goes to licence-holders (not the government) unless licences are auctioned. This makes quotas potentially less efficient than tariffs.',
        hint: 'Who captures the revenue rectangle?',
        tags: ['quotas', 'tariffs', 'protectionism'],
      },
      {
        id: 'i6-l3-fc3',
        front: 'Name three common arguments governments use to justify trade barriers.',
        back: '1. Infant-industry argument (protect new industries until they achieve economies of scale). 2. National security / strategic industries. 3. Anti-dumping (foreign goods sold below cost). Others include job protection and revenue raising.',
        hint: 'Infant industry, security, dumping.',
        tags: ['protectionism', 'trade-barriers'],
      },
      {
        id: 'i6-l3-fc4',
        front: 'What are the two deadweight loss triangles created by a tariff?',
        back: 'Triangle 1 (production DWL): the extra domestic output produced at cost above the world price — resources wasted on inefficient production. Triangle 2 (consumption DWL): the consumer purchases that no longer happen because the domestic price is too high, even though the world price would have made them welfare-improving.',
        hint: 'One on each side of the imports rectangle.',
        tags: ['tariffs', 'deadweight-loss', 'welfare'],
      },
      {
        id: 'i6-l3-fc5',
        front: 'Why might a production subsidy to domestic firms be preferable to a tariff for addressing an infant-industry concern?',
        back: 'A production subsidy achieves the same goal of expanding domestic output but without raising consumer prices — consumers can still buy at the world price. This avoids the consumption deadweight loss triangle. The subsidy\'s cost falls on taxpayers rather than consumers, and it is more transparent. Economists call this the "targeting principle": the most efficient policy directly addresses the market failure without creating additional distortions.',
        hint: 'The targeting principle — address the distortion at its source.',
        tags: ['protectionism', 'trade-barriers', 'welfare'],
      },
      {
        id: 'i6-l3-fc6',
        front: 'What is "dumping" in international trade, and why is it controversial?',
        back: 'Dumping occurs when a foreign firm sells goods in a domestic market at a price below the cost of production (or below its home-market price). It is controversial because short-run dumping may harm domestic competitors and lead to predatory monopoly, but it also means foreign consumers are effectively subsidising cheap goods for importing countries. Anti-dumping tariffs can be legitimate or may be used as disguised protectionism against efficient foreign competitors.',
        hint: 'Selling below cost — who actually benefits?',
        tags: ['trade-barriers', 'protectionism', 'dumping'],
      },
      {
        id: 'i6-l3-fc7',
        front: 'How does a "voluntary export restraint" (VER) differ from a quota, and who benefits?',
        back: 'A VER is an agreement by a foreign exporter to limit its own exports to a country — it functions like a quota but is initiated by the exporting country, often under political pressure. The key difference from a government-imposed quota is that the quota rent accrues entirely to the foreign exporter (who can sell fewer units at a higher price), not to the importing country\'s government or domestic producers. This makes VERs particularly costly for importing-country consumers.',
        hint: 'The exporter limits their own sales — and captures the rent.',
        tags: ['trade-barriers', 'quotas', 'protectionism'],
      },
    ],
    quiz: [
      {
        id: 'i6-l3-q1',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'A small open economy imposes a tariff on imported textiles. Which group is unambiguously made worse off?',
        options: [
          'Domestic textile producers',
          'Domestic textile consumers',
          'The domestic government',
          'Foreign exporters of textiles',
        ],
        correctAnswer: 1,
        explanation:
          'A tariff raises the domestic price above the world price. Domestic consumers pay more and buy less — their consumer surplus falls unambiguously. Domestic producers gain (higher price, higher output); the government gains tariff revenue; foreign exporters face lower volumes but the welfare split for them depends on elasticities and market structure.',
      },
      {
        id: 'i6-l3-q2',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'Under a binding import quota with licences given free to importers, where does the "quota rent" go?',
        options: [
          'To the domestic government as tax revenue.',
          'To domestic consumers as lower prices.',
          'To the importers who hold the licences.',
          'It is destroyed as deadweight loss.',
        ],
        correctAnswer: 2,
        explanation:
          'The quota rent is the value of the right to import at the world price and sell at the higher domestic price. When licences are given free of charge to importers, those importers capture the rent — unlike a tariff, where the equivalent revenue goes to the government. Governments can recover the rent by auctioning licences.',
      },
      {
        id: 'i6-l3-q3',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'The infant-industry argument is used to justify protectionism. What is the main economic criticism of this argument?',
        options: [
          'Infant industries never become competitive, so protection is pointless.',
          'Governments lack the information to identify which industries will become competitive, and protection may become permanent rather than temporary.',
          'Tariffs cannot protect infant industries because imports continue despite higher prices.',
          'Infant industries already have access to capital markets, so subsidies are unnecessary.',
        ],
        correctAnswer: 1,
        explanation:
          'The main criticism is the "picking winners" problem: governments often lack the information to correctly identify which industries will achieve competitive economies of scale, and political pressure tends to make "temporary" protection permanent. Even when the argument is theoretically valid, a direct production subsidy is usually more efficient than a tariff because it avoids distorting consumer prices.',
      },
      {
        id: 'i6-l3-q4',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'In a tariff diagram for a small open economy, the world price is $10 and a tariff of $4 is imposed. Which of the following correctly identifies the government\'s tariff revenue?',
        options: [
          'The entire rectangle between the world price and the tariff price, multiplied by total domestic consumption after the tariff.',
          'The rectangle between the world price and the tariff price, multiplied only by the volume of imports after the tariff (not total consumption).',
          'The sum of the two deadweight loss triangles on either side of the imports rectangle.',
          'The increase in domestic producer surplus caused by the tariff.',
        ],
        correctAnswer: 1,
        explanation:
          "The government collects the tariff ($4 per unit) only on the units actually imported — which is domestic consumption minus domestic production at the new protected price. The full rectangle from Pw to (Pw + tariff) times total consumption would include the area that domestic producers also receive (producer surplus gain). The two DWL triangles represent efficiency losses, not revenue. Revenue = tariff per unit × import volume after the tariff.",
      },
      {
        id: 'i6-l3-q5',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Why might economists argue that an import subsidy given to domestic producers is a less distortionary form of protection than a tariff, even though both increase domestic production?',
        options: [
          'A production subsidy costs the government less than a tariff because fewer units are affected.',
          'A production subsidy raises domestic output without raising the domestic consumer price, thus avoiding the consumption deadweight loss triangle and allowing consumers to still buy at the world price.',
          'A production subsidy is more transparent than a tariff and therefore easier for the WTO to monitor.',
          'A production subsidy reduces imports to zero, which is the goal of protection.',
        ],
        correctAnswer: 1,
        explanation:
          "With a production subsidy, consumers still pay the world price — only domestic producers receive the additional payment. This means domestic consumption remains at the free-trade level, eliminating the consumption DWL triangle. The only efficiency loss is the production DWL triangle (inefficient domestic output). A tariff, by contrast, raises the consumer price, reducing consumption and creating both a production and consumption DWL. This illustrates the 'targeting principle': use the instrument closest to the distortion you want to correct.",
      },
      {
        id: 'i6-l3-q6',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A government imposes a tariff justified on national security grounds (protecting domestic steel production). Which of the following is the most convincing economic counter-argument?',
        options: [
          'National security is never a valid reason for any trade restriction.',
          'Domestic steel producers are already profitable, so there is no need for protection.',
          'The same national security objective could be achieved more efficiently by maintaining strategic stockpiles or direct production subsidies, without distorting consumer prices or imposing deadweight losses on the broader economy.',
          'Foreign steel producers will retaliate with their own tariffs, eliminating any national security benefit.',
        ],
        correctAnswer: 2,
        explanation:
          "Economists generally accept that national security can legitimately justify some protection — the issue is whether a tariff is the most efficient instrument. A stockpile maintained by government purchases, or a direct production subsidy to ensure a minimum domestic capacity, achieves the strategic objective without raising consumer prices or generating consumption deadweight loss. The tariff bluntly raises the domestic price for all users of steel, imposing costs on the many downstream industries to achieve a security goal that could be more precisely targeted.",
      },
      {
        id: 'i6-l3-q7',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country A imposes a 30% tariff on imported cars. As a result, domestic car prices rise, domestic car production increases, imports fall, and government revenue rises. Which group in Country A experiences a welfare loss that is NOT offset by any corresponding gain within the domestic economy?',
        options: [
          'Domestic car producers, who face higher production costs.',
          'Consumers who reduce their car purchases due to higher prices — the consumption deadweight loss triangle.',
          'The government, which must spend tariff revenue on administration.',
          'Foreign car producers, whose lost profits leave Country A permanently worse off.',
        ],
        correctAnswer: 1,
        explanation:
          "The net welfare loss from a tariff consists of two deadweight loss triangles. The consumption DWL represents consumers who would have purchased cars at the world price but no longer do so at the higher domestic price — the utility forgone by these consumers is a pure efficiency loss with no offsetting gain anywhere in the domestic economy. The production DWL similarly represents resources wasted on inefficient domestic production. The consumer surplus lost to producer surplus gain and government revenue merely redistributes welfare within the domestic economy; only the DWL triangles represent net losses.",
      },
      {
        id: 'i6-l3-q8',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'The US imposed "voluntary export restraints" (VERs) on Japanese car exports in the 1980s. Compared with an equivalent US tariff that reduced Japanese imports by the same amount, which statement is correct?',
        options: [
          'The VER is strictly equivalent to the tariff; all welfare effects are identical.',
          'Under the VER, Japanese automakers capture the quota rent (selling fewer cars at higher US prices), whereas a tariff would direct that revenue to the US government — making the VER more costly for the US.',
          'The VER benefits US consumers more than a tariff because Japanese producers voluntarily limit supply.',
          'Under the VER, US domestic car producers do not benefit because Japanese producers continue to sell as many cars.',
        ],
        correctAnswer: 1,
        explanation:
          "Under a VER, Japanese car manufacturers can sell fewer cars at the higher US price caused by restricted supply, capturing the quota rent themselves. This rent represents a transfer from US consumers to Japanese producers — a welfare loss for the US with no offsetting US government revenue. An equivalent tariff would capture the same revenue for the US Treasury. This is why most economists view VERs as inferior to tariffs from the importing country's perspective, even though VERs are sometimes preferred politically because they avoid WTO challenges as formal trade barriers.",
      },
      {
        id: 'i6-l3-q9',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A government responds to job losses in its manufacturing sector by imposing tariffs on competing imports. An economist argues this is an inefficient solution. Which of the following best captures why a wage subsidy or retraining programme might be preferable?',
        options: [
          'Wage subsidies cost less than tariffs because they do not require border controls.',
          'A wage subsidy or retraining programme directly addresses the real problem — worker displacement — without distorting the prices faced by all domestic consumers and without generating deadweight losses from inefficient production and foregone consumption.',
          'Tariffs are only effective if trading partners retaliate, which makes them a risky policy instrument.',
          'Retraining programmes are more popular with voters, making them politically superior to tariffs.',
        ],
        correctAnswer: 1,
        explanation:
          "This reflects the targeting principle: the underlying problem is worker displacement (a labour market issue), not import competition per se. A tariff addresses labour market adjustment indirectly, by distorting the goods market and imposing deadweight losses on all consumers in order to support employment in one sector. A wage subsidy or retraining programme targets the actual problem — affected workers — more precisely, at lower economic cost. The tariff forces all domestic consumers to subsidise jobs in one industry through higher prices; a direct programme makes the cost visible, transparent, and targeted.",
      },
      {
        id: 'i6-l3-q10',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country A and Country B engage in a tit-for-tat tariff war, each repeatedly raising tariffs on the other\'s exports. What is the most likely macroeconomic consequence for both countries?',
        options: [
          'Both countries benefit as domestic production expands in all protected sectors.',
          'Trade volumes collapse, real incomes fall in both countries as gains from specialisation are eliminated, and both countries are worse off than under free trade — the classic prisoner\'s dilemma of trade policy.',
          'One country wins the tariff war because it has a larger economy and can sustain higher tariffs longer.',
          'Trade volumes decline but GDP rises in both countries because domestic production replaces imports.',
        ],
        correctAnswer: 1,
        explanation:
          "A tariff war is a textbook example of a prisoner's dilemma: each country has an incentive to impose tariffs unilaterally (benefiting domestic producers, generating revenue), but when both do so, trade collapses and both are worse off than under free trade. The Great Depression provides the most cited historical example: the US Smoot-Hawley Tariff of 1930 triggered retaliatory tariffs worldwide, global trade volumes fell by roughly two-thirds between 1929 and 1933, and the collapse deepened the depression. This experience was the primary motivation for the GATT (now WTO) framework of multilateral tariff reduction.",
      },
    ],
    lessonAssignment: {
      prompt: `Using a clearly labelled supply-and-demand diagram, analyse the costs and benefits of a specific tariff imposed by a government of your choice on a named imported good. Your answer should identify all welfare effects, calculate or estimate the net welfare change, and evaluate whether the tariff is justified given the government's stated objective.`,
      rubric: `Award points for:\n- Drawing a correctly labelled diagram showing world price (Pw), tariff price (Pw + t), domestic supply and demand curves, and the resulting quantities (Qs, Qd before and after tariff) (2 marks)\n- Identifying and labelling all four areas: consumer surplus loss, producer surplus gain, government revenue rectangle, and the two deadweight loss triangles (2 marks)\n- Explaining in words who gains and who loses, with reference to specific groups (consumers, domestic producers, government, foreign exporters) (2 marks)\n- Stating that the net welfare effect is negative (consumer loss > producer gain + revenue) and explaining why (1 mark)\n- Evaluating the government's stated justification (e.g., infant industry, national security, job protection) and critically assessing whether the tariff is the most efficient instrument to achieve that goal (2 marks)\n- Suggesting a more efficient alternative policy instrument (e.g., production subsidy, retraining) and explaining why it avoids some of the tariff's welfare costs (1 mark)`,
      exampleTopics: [
        'US tariffs on Chinese solar panels — ostensibly to protect domestic green energy manufacturing, with implications for climate policy',
        'EU agricultural tariffs protecting European farmers from cheaper food imports — examining the trade-off between food security and consumer welfare',
        'Indian tariffs on imported smartphones — an infant-industry argument for developing domestic electronics manufacturing',
        'Australian tariffs on imported cars (now abolished) — examining the long-run consequences of removing protection and adjusting to free trade',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 4 — Exchange Rates
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'i6-l4',
    moduleId: 'i6-international',
    title: 'Exchange Rates — Fixed, Floating, Managed',
    description:
      'Explain how exchange rates are determined in the forex market and the effect of currency changes on trade.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['exchange-rates', 'forex', 'fixed-exchange-rate'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson analysed the welfare effects of trade barriers — a tariff raises the domestic price, benefits domestic producers and the government, harms consumers, and generates two deadweight loss triangles; a quota distributes the revenue rectangle to licence-holders rather than the government. Exchange rates are the prices that link domestic and foreign price levels, determining the competitiveness of exports and imports without requiring any explicit trade barrier.`,
      recallQuestions: [
        {
          id: 'i6-l4-recall-1',
          type: 'mcq' as const,
          question: 'A small open economy imposes a tariff on imported textiles. Which group is unambiguously made worse off?',
          options: [
            'Domestic textile consumers.',
            'Domestic textile producers.',
            'The domestic government.',
            'Foreign exporters of textiles.',
          ],
          correctAnswer: 0,
          explanation: 'A tariff raises the domestic price above the world price. Domestic consumers pay more and buy less — their consumer surplus falls unambiguously. Domestic producers gain (higher price, more output); the government gains tariff revenue; the effect on foreign exporters depends on elasticities.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'In 2015, Switzerland shocked financial markets by abandoning its three-year peg to the euro, allowing the Swiss franc to float freely. Within minutes the franc surged 30 % — a historic reminder of the enormous market forces that fixed exchange rate regimes must constantly resist, and of the disruption when a peg suddenly breaks. The event illustrates why the choice between fixed and floating rates is one of the most consequential decisions a central bank can make.',
      conceptualExplanation:
        'The foreign exchange (forex) market determines exchange rates through the supply of and demand for currencies. The exchange rate is the price of one currency expressed in another (e.g., USD per EUR). Demand for a currency comes from foreigners wishing to buy domestic goods, services, or assets; supply comes from domestic residents wishing to purchase foreign goods, services, or assets. In a freely floating system, the equilibrium exchange rate adjusts continuously to clear the market — no government intervention is required. An appreciation means a currency buys more foreign currency (its price rises); a depreciation means it buys less.\n\nUnder a fixed exchange rate regime, the government or central bank commits to maintaining the exchange rate at a predetermined level. To defend the peg, the central bank buys or sells its own currency using foreign exchange reserves, or adjusts interest rates to influence capital flows. A peg offers exchange rate certainty, which reduces transaction costs and encourages trade, but it sacrifices monetary policy independence and requires large reserves. If speculators believe the peg is unsustainable, they can force a devaluation by selling the currency en masse — as happened in the 1997 Asian financial crisis.\n\nA managed float (also called a dirty float) lies between the two extremes: the exchange rate is broadly market-determined, but the central bank intervenes selectively to smooth excessive volatility or resist sharp appreciations or depreciations. Most large economies today operate managed floats. The key transmission mechanism linking exchange rates to trade runs through relative prices: a depreciation makes exports cheaper for foreigners (boosting export volumes) and imports more expensive for domestic consumers (reducing import volumes), tending to improve the trade balance — subject to the Marshall-Lerner condition and J-curve dynamics.',
      vocabulary: [
        {
          term: 'Appreciation',
          definition:
            'A rise in the value of a floating currency relative to another, so it buys more foreign currency per unit.',
          example:
            'If the pound strengthens from $1.20 to $1.40 per £1, sterling has appreciated by about 17 % against the dollar.',
        },
        {
          term: 'Fixed Exchange Rate',
          definition:
            'An exchange rate regime in which a government or central bank pegs the domestic currency to another currency (or basket) and intervenes in forex markets to maintain the peg.',
          example:
            'Hong Kong has maintained a peg of approximately HKD 7.8 per USD since 1983, defended by the Hong Kong Monetary Authority buying and selling dollars.',
        },
        {
          term: 'Marshall-Lerner Condition',
          definition:
            'The condition under which a currency depreciation improves the trade balance: the sum of the price elasticities of demand for exports and imports must exceed one (in absolute value).',
          example:
            'If export demand elasticity is 0.7 and import demand elasticity is 0.5, their sum is 1.2 > 1, so depreciation will improve the trade balance in the long run.',
        },
      ],
      examinerTip:
        'Distinguish between appreciation/depreciation (floating rates) and revaluation/devaluation (fixed rates changed by government decision). When explaining exchange rate effects on trade, always go through the chain: currency change → price of exports/imports in foreign currency → volume of exports/imports → trade balance. Mention that the Marshall-Lerner condition must hold for depreciation to improve the trade balance, and note the J-curve effect (short-run deterioration before long-run improvement).',
      thinkAboutIt: {
        question: `It seems intuitive that a currency depreciation should improve a country's trade balance — exports become cheaper and imports become more expensive. Yet in practice the trade balance often worsens in the months immediately following a depreciation before eventually improving. Why doesn't depreciation work immediately, and what does the J-curve tell us about the relationship between exchange rates and trade?`,
        answer: `The J-curve effect occurs because the volumes of exports and imports adjust slowly to new prices, while the prices themselves change immediately. In the very short run, export and import contracts are fixed, so the country is selling roughly the same volume of exports at the same foreign-currency price, while paying more in domestic currency for the same volume of imports (because imports are priced in foreign currency that now costs more). The trade deficit in domestic-currency terms therefore widens immediately after depreciation. Only over time — as exporters respond to their improved competitiveness by expanding capacity, and as domestic consumers gradually switch away from now-expensive imports — do volumes adjust in the directions needed to improve the trade balance. The Marshall-Lerner condition specifies exactly when this adjustment is sufficient: the sum of the price elasticities of demand for exports and imports must exceed one. In the short run, both elasticities tend to be low (contracts are fixed, habits are sticky), so the Marshall-Lerner condition often fails initially. In the long run, elasticities rise as firms and consumers have time to respond, the condition is typically satisfied, and the trade balance improves — tracing the distinctive J shape over time.`,
      },
    },
    flashcards: [
      {
        id: 'i6-l4-fc1',
        front: 'What determines the exchange rate in a freely floating system?',
        back: 'Supply and demand in the forex market. Demand for a currency rises when foreigners want to buy the country\'s exports or assets; supply rises when domestic residents want to purchase foreign goods or assets. The equilibrium rate clears the market.',
        hint: 'Supply and demand for currencies.',
        tags: ['exchange-rates', 'forex'],
      },
      {
        id: 'i6-l4-fc2',
        front: 'What is the difference between a depreciation and a devaluation?',
        back: 'Depreciation is a fall in the value of a floating currency driven by market forces. Devaluation is a deliberate government/central bank decision to lower a fixed or pegged exchange rate.',
        hint: 'Market-driven vs. policy decision.',
        tags: ['exchange-rates', 'fixed-exchange-rate'],
      },
      {
        id: 'i6-l4-fc3',
        front: 'State the Marshall-Lerner Condition.',
        back: 'A currency depreciation improves the current account (trade balance) if and only if the sum of the price elasticities of demand for exports and imports exceeds one in absolute value: |PED_x| + |PED_m| > 1.',
        hint: 'Sum of export and import elasticities > 1.',
        tags: ['exchange-rates', 'marshall-lerner', 'trade'],
      },
      {
        id: 'i6-l4-fc4',
        front: 'What is the J-curve effect?',
        back: 'After a currency depreciation, the trade balance initially worsens (because import volumes adjust slowly while import prices in domestic currency rise immediately) before improving as export and import volumes respond to the new prices — tracing a J shape over time.',
        hint: 'Short-run worsening, long-run improvement.',
        tags: ['exchange-rates', 'j-curve', 'trade'],
      },
      {
        id: 'i6-l4-fc5',
        front: 'What are the main advantages and disadvantages of a fixed exchange rate regime?',
        back: 'Advantages: exchange rate certainty reduces transaction costs, encourages trade and investment, provides an anchor against inflation. Disadvantages: sacrifices monetary policy independence (cannot set interest rates freely), requires large foreign reserves, vulnerable to speculative attacks if speculators doubt the peg\'s sustainability.',
        hint: 'Certainty vs. flexibility trade-off.',
        tags: ['fixed-exchange-rate', 'exchange-rates'],
      },
      {
        id: 'i6-l4-fc6',
        front: 'How does a rise in domestic interest rates affect a floating exchange rate, and through what mechanism?',
        back: 'Higher domestic interest rates attract foreign capital seeking better returns on financial assets (bonds, deposits). This increases demand for the domestic currency as foreigners buy it to invest — causing currency appreciation. This is the interest rate parity / capital flows channel, and it explains why central bank rate decisions move exchange rates even before they affect inflation or output.',
        hint: 'Higher rates attract capital inflows, boosting currency demand.',
        tags: ['exchange-rates', 'forex', 'monetary-policy'],
      },
      {
        id: 'i6-l4-fc7',
        front: 'What is "purchasing power parity" (PPP), and why does it matter for exchange rate analysis?',
        back: 'PPP states that in the long run, exchange rates should adjust so that a basket of goods costs the same in all countries when expressed in a common currency. If a country has persistently higher inflation than its trading partners, PPP predicts its currency will depreciate to maintain competitiveness. PPP is a useful long-run anchor for exchange rate analysis, though short-run rates can deviate significantly due to capital flows, speculation, and trade frictions.',
        hint: 'One price globally — in the long run.',
        tags: ['exchange-rates', 'ppp', 'inflation'],
      },
    ],
    quiz: [
      {
        id: 'i6-l4-q1',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'If the UK\'s inflation rate rises significantly above the eurozone\'s, what is the likely effect on the pound-euro exchange rate under a floating system, and why?',
        options: [
          'The pound appreciates because higher inflation signals a stronger economy.',
          'The pound depreciates because higher domestic prices make UK exports less competitive and reduce demand for pounds.',
          'The exchange rate is unaffected because monetary policy targets inflation, not the exchange rate.',
          'The pound appreciates because the Bank of England will raise interest rates, attracting capital inflows.',
        ],
        correctAnswer: 1,
        explanation:
          'Higher UK inflation makes British goods more expensive relative to eurozone goods, reducing foreign demand for UK exports and thus the demand for pounds. At the same time, UK residents find eurozone goods relatively cheaper, increasing the supply of pounds. Both effects push the pound\'s value down — a depreciation. (Note: if the Bank of England responds by hiking rates, there could be an offsetting capital inflow effect, but the base question describes the direct competitiveness channel.)',
      },
      {
        id: 'i6-l4-q2',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'A country operates a fixed exchange rate and faces downward pressure on its currency. Which policy tool can the central bank use to defend the peg?',
        options: [
          'Lower domestic interest rates to stimulate capital outflows.',
          'Use foreign exchange reserves to buy domestic currency in the forex market.',
          'Impose import tariffs to reduce the demand for foreign currency.',
          'Depreciate the currency to restore competitiveness.',
        ],
        correctAnswer: 1,
        explanation:
          'To defend a peg under selling pressure, the central bank buys its own currency using foreign exchange reserves, increasing demand for the domestic currency and supporting its price. Alternatively, it can raise interest rates to attract capital inflows, which also boosts demand. Lowering rates would worsen the pressure; tariffs affect trade not the forex market directly; and depreciating the currency abandons the peg.',
      },
      {
        id: 'i6-l4-q3',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'The Marshall-Lerner condition states that a depreciation will improve the trade balance if:',
        options: [
          'The price elasticity of demand for exports exceeds one.',
          'The price elasticity of demand for imports exceeds one.',
          'The sum of the price elasticities of demand for exports and imports exceeds one in absolute value.',
          'The current account deficit is larger than the capital account surplus.',
        ],
        correctAnswer: 2,
        explanation:
          'The Marshall-Lerner condition requires |PED_x| + |PED_m| > 1. If this holds, the volume effects of cheaper exports and more expensive imports outweigh the price effects, and the trade balance improves. If both elasticities are very low (inelastic), the higher import prices worsen the trade balance even though volumes barely change.',
      },
      {
        id: 'i6-l4-q4',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country A\'s currency depreciates by 20%. The price elasticity of demand for its exports is 0.4 and the price elasticity of demand for its imports is 0.5. What will happen to the trade balance in the long run?',
        options: [
          'The trade balance will improve because exports are now cheaper for foreigners.',
          'The trade balance will worsen because the Marshall-Lerner condition is not satisfied (0.4 + 0.5 = 0.9 < 1).',
          'The trade balance will be unchanged because the J-curve effect exactly offsets the depreciation.',
          'The trade balance will improve because import prices rise, reducing import volumes by more than enough to offset any volume effects.',
        ],
        correctAnswer: 1,
        explanation:
          "The Marshall-Lerner condition requires |PED_x| + |PED_m| > 1. Here, 0.4 + 0.5 = 0.9, which is less than 1. This means the volume responses to the depreciation are not large enough to outweigh the price effects. Exports become cheaper but do not attract enough additional foreign demand, and imports become more expensive but domestic consumers do not reduce their import spending sufficiently. The trade balance worsens rather than improves — the depreciation 'fails' in terms of trade balance adjustment.",
      },
      {
        id: 'i6-l4-q5',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Why do price elasticities of demand for exports and imports tend to be lower in the short run than in the long run, and what does this imply for the J-curve?',
        options: [
          'In the short run, governments impose tariffs to prevent volume adjustment; in the long run, tariffs are removed.',
          'In the short run, contracts are fixed and habits persist, so export/import volumes respond slowly to price changes. In the long run, firms and consumers adjust fully, elasticities rise, and the Marshall-Lerner condition is more likely to be satisfied — explaining the J-curve\'s initial deterioration and eventual improvement.',
          'In the short run, exchange rates move more than prices, so elasticities appear lower than they actually are.',
          'There is no difference between short-run and long-run elasticities; the J-curve is caused solely by invoicing currency conventions.',
        ],
        correctAnswer: 1,
        explanation:
          "Adjustment takes time: exporters cannot instantly expand capacity; importers have existing supply contracts; consumers have established purchasing habits; firms are locked into pricing agreements. In the immediate aftermath of depreciation, volumes barely change, so higher import prices (in domestic currency) raise the import bill while export revenues are little changed — the trade balance worsens. As time passes, firms and households adjust to new relative prices, elasticities effectively rise, and the trade balance improves — the long end of the J. This is why the J-curve is fundamentally about the time lag in quantity adjustment.",
      },
      {
        id: 'i6-l4-q6',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A speculative attack on a country\'s fixed exchange rate occurs when currency traders simultaneously sell large amounts of the domestic currency. Why might a speculative attack become self-fulfilling, even if the initial peg was sustainable?',
        options: [
          'The attack forces the government to lower interest rates, which always causes inflation and undermines the peg.',
          'Massive selling depletes foreign exchange reserves rapidly; if the central bank cannot buy enough domestic currency to maintain the peg, it is forced to devalue, confirming the speculators\' expectation and rewarding the attack.',
          'A speculative attack improves the current account by reducing import demand, making the peg unsustainable.',
          'Speculative attacks only work against countries with current account deficits; surplus countries are immune.',
        ],
        correctAnswer: 1,
        explanation:
          "A speculative attack is self-fulfilling precisely because defending the peg requires spending foreign reserves to buy domestic currency. If speculators sell en masse, the central bank must spend reserves at an accelerating rate. If reserves run low, the market anticipates the inevitable devaluation — which encourages more speculators to join the attack to profit from the devaluation. This creates a coordination game: even if the peg was initially sustainable, the collective action of speculators expecting devaluation can make it unsustainable. This was the mechanism behind the 1992 Black Wednesday attack on the pound and the 1997 Asian crisis.",
      },
      {
        id: 'i6-l4-q7',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country\'s central bank raises interest rates to defend a currency peg. What are the likely domestic macroeconomic consequences of this decision?',
        options: [
          'Higher interest rates stimulate consumer spending and investment, boosting GDP alongside the peg.',
          'Higher interest rates reduce domestic borrowing and investment, potentially causing a recession — illustrating the trade-off between exchange rate stability and domestic macroeconomic stability.',
          'Higher interest rates reduce inflation but have no effect on output or employment.',
          'Higher interest rates automatically eliminate the current account deficit, removing the need to defend the peg.',
        ],
        correctAnswer: 1,
        explanation:
          "This is the fundamental tension of fixed exchange rate regimes: using interest rates to defend the peg sacrifices domestic monetary policy autonomy. Higher rates attract capital inflows (supporting the currency) but also raise the cost of borrowing for firms and households, reducing investment and consumer spending — potentially tipping the economy into recession. During the 1997 Asian crisis, Thailand, South Korea, and Indonesia raised interest rates sharply to defend their pegs, but this deepened their domestic recessions severely. This dilemma — the 'impossible trinity' (fixed rate + free capital flows + independent monetary policy: you can only have two) — explains why many countries abandoned hard pegs.",
      },
      {
        id: 'i6-l4-q8',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country running a persistent current account deficit sees its currency depreciate significantly under a floating exchange rate. According to economic theory, what sequence of adjustments should follow?',
        options: [
          'Depreciation immediately eliminates the deficit by reducing imports to zero and maximising exports.',
          'Depreciation initially worsens the current account deficit (J-curve), then gradually improves it as export volumes rise and import volumes fall, provided the Marshall-Lerner condition is satisfied in the long run.',
          'Depreciation has no effect on the current account because the current account is determined by domestic savings and investment, not relative prices.',
          'Depreciation reduces the current account deficit immediately but worsens the capital account, leaving the overall balance of payments unchanged.',
        ],
        correctAnswer: 1,
        explanation:
          "Theory predicts: depreciation → exports cheaper (in foreign currency) → export volumes rise over time; imports more expensive (in domestic currency) → import volumes fall over time. But immediately after depreciation, the volume effects are small (contracts are fixed, habits persist), while the price effects hit immediately — the trade deficit may worsen in the short run (J-curve). Over 12-24 months, as volumes adjust and if |PED_x| + |PED_m| > 1, the current account improves. Note that some economists (notably in the Keynesian-structuralist tradition) do argue that current account balances are primarily determined by savings-investment gaps rather than relative prices — this is a genuine area of debate in macroeconomics.",
      },
      {
        id: 'i6-l4-q9',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country X has a floating exchange rate and runs a current account deficit. Its trading partner Country Y maintains a pegged exchange rate and runs a large surplus. Country X argues that Country Y is "manipulating" its currency to maintain an artificially competitive exchange rate. What is the strongest economic argument supporting Country X\'s complaint?',
        options: [
          'Country Y is violating comparative advantage by keeping its exchange rate fixed.',
          'By pegging its currency below its market-clearing value, Country Y prevents the normal floating adjustment (surplus → currency appreciation → reduced competitiveness) from occurring, effectively subsidising its exporters and disadvantaging Country X\'s producers without market justification.',
          'All fixed exchange rate regimes constitute currency manipulation and should be banned.',
          'Country Y\'s surplus means it has a comparative advantage in all goods, which comparative advantage theory cannot explain.',
        ],
        correctAnswer: 1,
        explanation:
          "Under a floating rate, a persistent current account surplus would cause currency appreciation, restoring competitive balance. By pegging below market value and accumulating reserves to prevent appreciation, a surplus country effectively locks in an undervalued exchange rate — an implicit subsidy to its export sector. This prevents the automatic adjustment mechanism from working and keeps the surplus country's goods artificially cheap for trading partners. China was frequently accused of this in the 2000s-2010s. The economic argument is that the peg distorts relative prices in the same way an export subsidy would, but more broadly.",
      },
      {
        id: 'i6-l4-q10',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'The "impossible trinity" (or "trilemma") in international monetary economics states that a country cannot simultaneously maintain:',
        options: [
          'Low inflation, full employment, and a balanced current account.',
          'A fixed exchange rate, free capital mobility, and an independent monetary policy — it can only achieve two of the three.',
          'A floating exchange rate, high growth, and price stability.',
          'Free trade, balanced budgets, and stable exchange rates.',
        ],
        correctAnswer: 1,
        explanation:
          "The impossible trinity, formalised by Robert Mundell, states that a country can only achieve two of three objectives simultaneously: (1) a fixed exchange rate, (2) free capital mobility, and (3) an independent monetary policy. If capital flows freely and you fix the exchange rate, you must set interest rates to defend the peg (losing monetary policy independence). If you want monetary policy independence and free capital flows, you must let the exchange rate float. The eurozone chose (1) and (2) — a fixed rate among members and free capital flows — but surrendered national monetary policy. China historically chose (1) and (3) — fixed rate and monetary policy independence — by controlling capital flows. The UK post-1992 chose (2) and (3) after abandoning the ERM peg.",
      },
    ],
    lessonAssignment: {
      prompt: `A country's currency depreciates by 20% against its major trading partners. Analyse the effects of this depreciation on the country's trade balance, domestic inflation, and economic growth. Your answer should incorporate the J-curve effect, the Marshall-Lerner condition, and the transmission mechanisms linking exchange rate changes to the broader macroeconomy.`,
      rubric: `Award points for:\n- Explaining the immediate effect on export and import prices (exports cheaper in foreign currency, imports more expensive in domestic currency) and the J-curve: initial worsening of the trade balance as volumes are slow to adjust (2 marks)\n- Applying the Marshall-Lerner condition to determine whether the trade balance improves in the long run, with a clear statement of the condition (|PED_x| + |PED_m| > 1) and an explanation of why elasticities are higher in the long run (2 marks)\n- Analysing the inflationary effect: more expensive imports raise the cost of imported goods and raw materials, creating cost-push inflation and potentially reducing real wages (2 marks)\n- Analysing the growth effects: improved export competitiveness may boost net exports and aggregate demand (via the X-M component of AD), but higher import costs and inflation can dampen consumption and investment (2 marks)\n- Evaluating the overall net effect on the economy, acknowledging that outcomes depend on the structure of the economy (degree of import dependence, export elasticity, spare capacity) and the monetary policy response (1 mark)\n- Reaching a reasoned conclusion about whether the depreciation is net beneficial or harmful, supported by the analysis above (1 mark)`,
      exampleTopics: [
        'The UK pound\'s depreciation after the 2016 Brexit referendum — examining actual data on inflation, export growth, and living standards',
        'Turkey\'s sharp currency depreciation in 2021-2022 — a case study of high import dependence and severe inflation consequences',
        'Japan\'s deliberate yen depreciation under Abenomics — examining whether it succeeded in boosting exports and ending deflation',
        'An emerging market economy (e.g., India or Brazil) facing a depreciation triggered by capital outflows during a global risk-off episode',
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Lesson 5 — Balance of Payments
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'i6-l5',
    moduleId: 'i6-international',
    title: 'Balance of Payments — Current, Capital, Financial Accounts',
    description:
      'Define each account, explain why the BoP always balances, and trace through a current account deficit.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['balance-of-payments', 'current-account', 'capital-account'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that exchange rates are determined by supply and demand for currencies in the forex market, and that a depreciation improves trade competitiveness (subject to the Marshall-Lerner condition) but follows a J-curve: the trade balance initially worsens before improving as export and import volumes adjust. The balance of payments is the accounting framework that records all the currency flows that drive those forex market movements.`,
      recallQuestions: [
        {
          id: 'i6-l5-recall-1',
          type: 'mcq' as const,
          question: 'The Marshall-Lerner condition states that a currency depreciation will improve the trade balance if:',
          options: [
            'The sum of the price elasticities of demand for exports and imports exceeds one in absolute value.',
            'The price elasticity of demand for exports alone exceeds one.',
            'The price elasticity of demand for imports alone exceeds one.',
            'The current account deficit is smaller than the capital account surplus.',
          ],
          correctAnswer: 0,
          explanation: 'The Marshall-Lerner condition requires |PED_x| + |PED_m| > 1. If this holds, the volume effects (more exports sold, fewer imports bought) outweigh the price effects of depreciation, and the trade balance improves. If both elasticities are very low, higher import prices worsen the balance even as volumes barely change.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'The United States has run a current account deficit every year since 1982, importing far more goods and services than it exports. Yet the dollar has not collapsed. The reason: the US simultaneously runs a financial account surplus — foreigners pour money into US Treasury bonds, equities, and real estate. Understanding how these two sides of the balance of payments are linked explains one of the most discussed puzzles in international economics.',
      conceptualExplanation:
        'The balance of payments (BoP) is a systematic record of all economic transactions between residents of one country and the rest of the world over a given period. It is divided into three main accounts. The current account records trade in goods (the visible or merchandise trade balance), trade in services (the invisible balance), primary income (wages, profits, and investment income flowing across borders), and secondary income (unilateral transfers such as foreign aid and remittances). A current account surplus means a country is a net lender to the world; a deficit means it is a net borrower.\n\nThe capital account (small in most countries) records capital transfers — such as debt forgiveness and migrants\' assets brought into a country — and the acquisition of non-produced, non-financial assets (e.g., land, patents sold to foreigners). The financial account records net changes in financial assets and liabilities: foreign direct investment (FDI), portfolio investment (equities and bonds), other investment (bank loans), and changes in official foreign exchange reserves. A financial account surplus means foreigners are acquiring more domestic assets than residents are acquiring abroad.\n\nThe fundamental principle of the BoP is that it always sums to zero (in theory, before statistical discrepancies). This is because every international transaction has two sides recorded with opposite signs under double-entry bookkeeping. A current account deficit must be financed by a corresponding surplus in the capital plus financial accounts — either by attracting foreign investment, borrowing from abroad, or running down reserve assets. The mirror relationship between the current account and the financial account means that persistent current account deficits require persistent capital inflows, which can accumulate into large external debt obligations and create vulnerability to sudden reversals of capital flows.',
      vocabulary: [
        {
          term: 'Current Account',
          definition:
            'The component of the balance of payments that records trade in goods and services, primary income flows (investment income, compensation of employees), and secondary income (transfers such as remittances and foreign aid).',
          example:
            'Germany\'s large current account surplus reflects its persistent goods trade surplus — it exports far more cars and machinery than it imports.',
        },
        {
          term: 'Financial Account',
          definition:
            'The component of the balance of payments that records net changes in a country\'s financial assets and liabilities with the rest of the world, including FDI, portfolio investment, and changes in reserve assets.',
          example:
            'When a Chinese company builds a factory in the US, this records as FDI inflow in the US financial account (and an outflow in China\'s).',
        },
        {
          term: 'Double-Entry Bookkeeping',
          definition:
            'The accounting principle underlying the BoP: every transaction generates two entries of equal value but opposite sign, ensuring the overall balance of payments sums to zero.',
          example:
            'A US firm exports $1m of software (credit in current account) and receives payment into a US bank account (debit in financial account) — the net effect on the BoP is zero.',
        },
      ],
      examinerTip:
        'Examiners frequently ask why the BoP "always balances." The answer is double-entry bookkeeping — every transaction has a credit and a debit. Then show the mirror relationship: current account deficit = financial + capital account surplus. Also be precise about terminology: the "capital account" in the modern IMF framework is small and distinct from the "financial account" — many textbooks use "capital account" loosely to mean what the IMF calls the financial account. Check which convention your syllabus uses and be consistent.',
      thinkAboutIt: {
        question: `The United States has run a current account deficit for over four decades — yet this is frequently cited as evidence of economic strength rather than weakness. How can a persistent deficit be a sign of strength? And when, if ever, should a country be genuinely concerned about its current account deficit?`,
        answer: `A current account deficit simply means a country is spending more on foreign goods, services, and income payments than it receives. This must be financed by a financial account surplus — foreigners are investing in the country. For the US, this reflects the extraordinary global demand for dollar-denominated assets: US Treasury bonds are considered the world's safest store of value, and US equities and property attract global capital. In this sense, a current account deficit reflects the world's desire to invest in the US — a mark of confidence, not weakness. Similarly, a rapidly growing developing economy may run a current account deficit because productive investment opportunities are so abundant that they attract foreign capital beyond what domestic savings can fund — which can accelerate growth and be entirely sustainable. The deficit becomes genuinely problematic when it reflects excessive consumption rather than productive investment, when it is financed by short-term "hot money" that can flee suddenly, when the resulting foreign debt accumulates faster than the economy grows, or when the deficit is associated with an overvalued exchange rate that prevents adjustment. The distinction matters enormously for policy: blindly targeting a current account balance can sacrifice growth, while ignoring structural deficits can leave a country vulnerable to sudden stops in capital inflows.`,
      },
    },
    flashcards: [
      {
        id: 'i6-l5-fc1',
        front: 'List the three main accounts in the balance of payments.',
        back: '1. Current account (trade in goods and services, primary and secondary income). 2. Capital account (capital transfers, non-produced non-financial assets). 3. Financial account (FDI, portfolio investment, other investment, reserve assets).',
        hint: 'Current, Capital, Financial.',
        tags: ['balance-of-payments'],
      },
      {
        id: 'i6-l5-fc2',
        front: 'Why does the balance of payments always sum to zero?',
        back: 'Because of double-entry bookkeeping: every international transaction is recorded twice — once as a credit and once as a debit of equal value. The credits and debits always cancel out across all accounts (before statistical errors and omissions).',
        hint: 'Double-entry accounting.',
        tags: ['balance-of-payments'],
      },
      {
        id: 'i6-l5-fc3',
        front: 'If a country has a current account deficit, what must be true of its other BoP accounts?',
        back: 'The capital and financial accounts must together show a surplus of equal magnitude. The current account deficit is financed by net capital inflows — foreigners acquiring more domestic assets than residents acquire abroad, or a drawing down of reserve assets.',
        hint: 'Mirror relationship: CA deficit = KA + FA surplus.',
        tags: ['balance-of-payments', 'current-account'],
      },
      {
        id: 'i6-l5-fc4',
        front: 'What is the difference between the visible trade balance and the current account balance?',
        back: 'The visible trade balance (goods balance) covers only trade in physical goods — exports minus imports of merchandise. The current account also includes the invisibles balance (services), primary income (investment income, wages), and secondary income (transfers like remittances and foreign aid), so it is broader.',
        hint: 'Goods only vs. goods + services + income + transfers.',
        tags: ['current-account', 'balance-of-payments'],
      },
      {
        id: 'i6-l5-fc5',
        front: 'What is the difference between FDI and portfolio investment in the financial account?',
        back: 'FDI (foreign direct investment) involves acquiring a lasting interest in a foreign enterprise — typically owning 10% or more of a company — giving the investor significant influence or control. Portfolio investment involves purchasing foreign equities or bonds without seeking control. FDI is generally considered more stable; portfolio investment ("hot money") can exit rapidly during crises, creating financial instability.',
        hint: 'Control vs. passive financial stake.',
        tags: ['balance-of-payments', 'financial-account', 'FDI'],
      },
      {
        id: 'i6-l5-fc6',
        front: 'What is a "sudden stop," and why is it dangerous for an economy with a current account deficit?',
        back: 'A sudden stop is an abrupt halt to foreign capital inflows into a country. An economy running a current account deficit depends on continuous financial account inflows to fund the gap. If foreign investors suddenly withdraw — due to a loss of confidence, contagion from elsewhere, or rising global interest rates — the country may be unable to finance imports, leading to a sharp depreciation, rising inflation, and a forced recession. Sudden stops triggered the 1997 Asian crisis and the 2001 Argentine crisis.',
        hint: 'Capital inflows dry up — the current account must adjust violently.',
        tags: ['balance-of-payments', 'current-account', 'financial-crisis'],
      },
      {
        id: 'i6-l5-fc7',
        front: 'How do worker remittances affect the current account, and why do they matter for developing countries?',
        back: 'Remittances — money sent home by workers living abroad — are recorded as credits in the secondary income component of the current account (they are unilateral transfers from foreign residents to domestic residents). For many developing countries (e.g., Philippines, Nepal, Tajikistan), remittances exceed FDI and official development aid as a source of foreign exchange, directly supporting household incomes, consumption, and the exchange rate.',
        hint: 'Secondary income — a crucial but often overlooked current account credit.',
        tags: ['current-account', 'balance-of-payments', 'development'],
      },
    ],
    quiz: [
      {
        id: 'i6-l5-q1',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'Which of the following transactions would be recorded as a credit in the UK\'s current account?',
        options: [
          'A UK resident purchases shares in a US company.',
          'A German tourist spends money at a London hotel.',
          'The UK government provides foreign aid to a developing country.',
          'A UK company builds a factory in Poland.',
        ],
        correctAnswer: 1,
        explanation:
          'When a German tourist spends money at a London hotel, the UK is exporting a service (tourism) to a foreign resident — this is a credit (inflow) in the UK\'s services trade balance, which is part of the current account. Purchasing foreign shares records in the financial account; foreign aid is a secondary income debit; building a factory abroad is FDI outflow in the financial account.',
      },
      {
        id: 'i6-l5-q2',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'A country persistently runs a large current account deficit. Which of the following is the most likely consequence over time?',
        options: [
          'The country accumulates foreign exchange reserves rapidly.',
          'The country builds up net external liabilities as foreigners accumulate claims on domestic assets.',
          'Domestic interest rates fall because capital is flowing out of the country.',
          'The current account deficit automatically corrects within one year through exchange rate adjustment.',
        ],
        correctAnswer: 1,
        explanation:
          'A persistent current account deficit must be financed by net capital inflows (financial account surplus), meaning foreigners are continuously accumulating claims on the country — buying its bonds, equities, property, or making loans. Over time this builds up net external liabilities (foreign debt), which requires future income outflows (interest and profit payments) that can further worsen the current account.',
      },
      {
        id: 'i6-l5-q3',
        type: 'mcq',
        difficulty: 'standard',
        marks: 1,
        question:
          'In the IMF\'s balance of payments framework, which account records foreign direct investment flows?',
        options: [
          'The current account, under primary income.',
          'The capital account, under capital transfers.',
          'The financial account, under direct investment.',
          'The reserve account, under official settlements.',
        ],
        correctAnswer: 2,
        explanation:
          'Under the IMF\'s BPM6 framework, the financial account records FDI, portfolio investment, financial derivatives, other investment, and reserve assets. FDI specifically sits under the "direct investment" subcategory of the financial account. Primary income in the current account records the returns on those investments (dividends, retained earnings, interest) once they have been established.',
      },
      {
        id: 'i6-l5-q4',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A multinational corporation based in the US earns $500 million in profits from its subsidiary in Germany and repatriates the money to the US. How does this transaction affect the German balance of payments?',
        options: [
          'It is a credit in Germany\'s financial account because FDI is flowing out.',
          'It is a debit in Germany\'s current account under primary income, because profit is flowing out of Germany to a foreign investor.',
          'It is a credit in Germany\'s current account because Germany is exporting financial services.',
          'It has no effect on Germany\'s balance of payments because the subsidiary is a German company.',
        ],
        correctAnswer: 1,
        explanation:
          "When a US-owned subsidiary in Germany repatriates profits to the US, Germany is making an income payment to a foreign investor. This is recorded as a debit in Germany's primary income account (part of the current account) — Germany is 'sending' investment income abroad. This is precisely why countries with large stocks of foreign-owned investment (like many developing nations) can have current account deficits even if their goods and services trade balance is in surplus: the investment income outflows are a persistent drain.",
      },
      {
        id: 'i6-l5-q5',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Country A has a current account deficit of $50 billion and a capital account surplus of $5 billion. What must be true of its financial account (ignoring statistical discrepancies)?',
        options: [
          'The financial account must show a surplus of $45 billion.',
          'The financial account must show a deficit of $55 billion.',
          'The financial account must show a surplus of $55 billion.',
          'The financial account must be in balance because the current account deficit and capital account surplus are on different sides of the accounts.',
        ],
        correctAnswer: 0,
        explanation:
          "The BoP must sum to zero: Current Account + Capital Account + Financial Account = 0. Therefore: -$50bn + $5bn + Financial Account = 0, so Financial Account = +$45bn. The financial account surplus of $45 billion (net capital inflows of $45 billion) plus the capital account surplus of $5 billion together finance the $50 billion current account deficit. This illustrates the mirror identity: CA deficit = KA + FA surplus.",
      },
      {
        id: 'i6-l5-q6',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A country receives a large inflow of portfolio investment (foreign purchases of domestic government bonds). How does this appear in the balance of payments, and what risk does it create?',
        options: [
          'It appears as a current account credit and creates no particular risk because bond investment is always safe.',
          'It appears as a financial account credit (capital inflow) and creates vulnerability to sudden capital outflow ("sudden stop"), which could force a sharp depreciation and economic crisis if foreign investors simultaneously sell their holdings.',
          'It appears as a capital account credit and improves the country\'s net international investment position permanently.',
          'It appears as a debit in the financial account because the country is incurring a liability to foreigners.',
        ],
        correctAnswer: 1,
        explanation:
          "Foreign purchases of domestic bonds are recorded as a credit in the financial account (net capital inflow — foreigners are acquiring domestic assets). The risk is that portfolio investment, unlike FDI, is highly mobile. If foreign investors lose confidence — due to political instability, rising global interest rates, or contagion — they can sell the bonds rapidly, creating a 'sudden stop.' The resulting surge in supply of domestic currency causes sharp depreciation, raises domestic interest rates (as bond prices fall), and can trigger a financial crisis. This is exactly what happened in many emerging markets during the 2013 'taper tantrum' when the US Fed signalled rate rises.",
      },
      {
        id: 'i6-l5-q7',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Germany has run a large current account surplus for over a decade. Some economists argue this is problematic for the global economy. What is the strongest argument for this view?',
        options: [
          'A current account surplus means Germany is importing too many goods, which harms its trading partners.',
          'Germany\'s persistent surplus means it is a net lender to the rest of the world; the corresponding deficits in other countries (especially eurozone partners) require those countries to borrow continuously, potentially accumulating unsustainable debt — particularly problematic because they cannot devalue within the eurozone.',
          'Current account surpluses are always a sign of an overvalued currency, which harms German exporters.',
          'A current account surplus means Germany is not investing enough domestically, which reduces global aggregate demand.',
        ],
        correctAnswer: 1,
        explanation:
          "In a system of fixed exchange rates (like the eurozone), surpluses and deficits cannot self-correct through exchange rate adjustment. Germany's persistent surplus means its eurozone trading partners (e.g., Greece, Italy, Spain) must run offsetting deficits, financed by borrowing from Germany and others. Over time, deficit countries accumulate large external debts. Without the ability to devalue their currency to restore competitiveness, the adjustment burden falls entirely on 'internal devaluation' (wage and price cuts), which is economically painful and politically difficult. This imbalance was a central structural cause of the eurozone crisis of 2010-2015.",
      },
      {
        id: 'i6-l5-q8',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'A developing country receives significant FDI as foreign firms build factories. Initially this creates a financial account surplus. What is the long-run effect on the current account?',
        options: [
          'The current account permanently improves because FDI creates exports from the new factories.',
          'The current account effect is ambiguous in the short run but the current account is likely to worsen in the long run as profit repatriation by foreign investors creates persistent primary income outflows, even if export revenues from the factories initially improve the goods trade balance.',
          'There is no long-run effect because FDI is a one-time transaction that does not affect the current account.',
          'The current account improves permanently because FDI replaces imports of manufactured goods.',
        ],
        correctAnswer: 1,
        explanation:
          "FDI creates a nuanced, dynamic BoP story. Initially: financial account credit (foreign investment in). Over time: the factories may export goods (current account credit) but also import machinery, components, and management fees (current account debits). Most importantly, as the investment matures, profit repatriation begins: the foreign parent company repatriates dividends and retained earnings, creating persistent primary income debits in the current account. Many developing countries that attracted large FDI inflows in the 1990s found that by the 2000s their primary income accounts had turned sharply negative as profit repatriation exceeded new FDI inflows — a reminder that FDI's long-run BoP effects depend critically on reinvestment vs. repatriation decisions.",
      },
      {
        id: 'i6-l5-q9',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'The United States runs a persistent current account deficit of around 3-4% of GDP. A policymaker argues this proves the US is "living beyond its means" and must be corrected urgently. What is the most sophisticated economic counter-argument?',
        options: [
          'Current account deficits are always good because they mean the country is consuming more than it produces.',
          'The deficit is sustainable as long as GDP growth exceeds the interest rate on external debt, and the US deficit largely reflects the global demand for dollar-denominated safe assets rather than excessive domestic consumption — meaning it can persist indefinitely without crisis.',
          'The deficit is irrelevant because the BoP always balances, so a current account deficit is automatically offset by a financial account surplus.',
          'The US should impose tariffs to reduce imports and eliminate the deficit, restoring economic health.',
        ],
        correctAnswer: 1,
        explanation:
          "The US current account deficit is qualitatively different from a developing-country deficit in several ways. The US issues the world's reserve currency, so the global demand for dollar assets (US Treasuries, equities, property) is structural — not speculative. Foreigners holding dollars essentially provide the US with cheap financing for its deficit. The relevant sustainability criterion is whether GDP growth can outpace the accumulation of net foreign liabilities — and for the US, with reserve currency status and deep capital markets, this has been feasible for decades. This is Keynes's insight that the surplus country (which accumulates claims) bears as much responsibility for global imbalances as the deficit country — demanding adjustment from deficit countries alone is asymmetric and potentially contractionary for world demand.",
      },
      {
        id: 'i6-l5-q10',
        type: 'mcq',
        difficulty: 'higher',
        marks: 1,
        question:
          'Which of the following best explains why a current account deficit financed primarily by FDI is considered less risky than one financed primarily by short-term portfolio investment?',
        options: [
          'FDI generates higher returns for the host country than portfolio investment.',
          'FDI represents a long-term commitment — physical assets cannot be withdrawn overnight — whereas portfolio investments can be liquidated instantly, making sudden stops and currency crises far more likely when deficits are financed by short-term flows.',
          'Portfolio investment is always speculative, while FDI represents genuine productive activity.',
          'Current account deficits financed by FDI do not appear in the financial account, so they do not create external liabilities.',
        ],
        correctAnswer: 1,
        explanation:
          "The key distinction is reversibility and maturity. FDI involves building factories, acquiring companies, or developing resources — physical commitments that cannot be reversed quickly. Even if a foreign firm decides to exit, it takes years to sell or wind down a physical operation. Portfolio investment (bonds, equities) can be sold in seconds on electronic markets. A country whose current account deficit is financed by FDI has relatively stable financing; a country relying on short-term portfolio flows is vulnerable to sudden reversals triggered by changes in global risk appetite, interest rate differentials, or political events. This is why the IMF and development economists emphasise 'quality of financing' not just deficit size when assessing external vulnerability.",
      },
    ],
    lessonAssignment: {
      prompt: `A large and persistent current account deficit is often cited as a sign of economic fragility requiring urgent policy correction. Evaluate this claim, drawing on the balance of payments accounting framework, the possible causes of a current account deficit, and the conditions under which such a deficit may or may not represent a genuine threat to macroeconomic stability.`,
      rubric: `Award points for:\n- Accurately defining the current account deficit and explaining the mirror relationship with the financial account (CA deficit = FA + KA surplus), demonstrating BoP accounting understanding (2 marks)\n- Identifying multiple possible causes of a current account deficit: low domestic savings, high investment, strong economic growth attracting imports, loss of export competitiveness, deteriorating terms of trade, or structural dependence on imports (2 marks)\n- Presenting the case for concern: accumulation of net external liabilities, vulnerability to sudden stops in capital inflows, risk of currency crisis, potential for unsustainable foreign debt burden, especially if financed by short-term portfolio flows rather than FDI (2 marks)\n- Presenting the counter-argument: deficits can reflect economic strength (high investment, reserve currency status, global confidence), and are not inherently problematic if GDP growth exceeds the cost of external debt and financing is long-term (2 marks)\n- Applying relevant real-world evidence — e.g. the US (structural deficit with reserve currency), Greece/eurozone crisis (deficit as genuine weakness), East Asian economies (investment-led deficits that fuelled growth before sudden stops in 1997) (1 mark)\n- Reaching a nuanced conclusion that the deficit is not inherently good or bad — the composition, causes, financing structure, and macroeconomic context determine whether it is sustainable (1 mark)`,
      exampleTopics: [
        'The United States — decades of current account deficits underwritten by global demand for dollar assets, questioning whether the "exorbitant privilege" makes the deficit sustainable indefinitely',
        'Greece in the 2000s — a eurozone member unable to devalue, whose current account deficit was financed by cheap borrowing until the 2010 sovereign debt crisis',
        'Australia — a developed economy that has run current account deficits for almost its entire modern history, financed largely by FDI into its resource sector',
        'A hypothetical emerging market economy experiencing a sudden stop — analysing the crisis dynamics when capital inflows reverse',
      ],
    },
  },
]
