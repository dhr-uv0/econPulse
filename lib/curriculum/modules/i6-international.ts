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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
]
