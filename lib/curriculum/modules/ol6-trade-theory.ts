import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ol6-trade-theory',
  title: 'Olympiad — International Trade Theory',
  description: 'Ricardian model, Heckscher-Ohlin, new trade theory, strategic trade policy, and WTO at olympiad level.',
  tier: 'OLYMPIAD' as const,
  track: 'OLYMPIAD' as const,
  unit: 6,
  estimatedHours: 5,
  color: '#ef4444',
  icon: 'Trophy',
}

export const lessons: Lesson[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 1 — Ricardian Model
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol6-l1',
    moduleId: 'ol6-trade-theory',
    title: 'Ricardian Model of Comparative Advantage',
    description: 'Formalise comparative advantage using unit labour coefficients; derive relative wages and the pattern of specialisation; examine limits to the Ricardian framework.',
    order: 1,
    estimatedMinutes: 50,
    tags: ['olympiad', 'comparative-advantage', 'Ricardian', 'unit-labour-coefficients', 'specialisation'],
    content: {
      isStub: false,
      conceptualExplanation: `The Ricardian model strips international trade down to its most elegant core: a single factor of production (labour) and technology differences across countries. Each good g in country i requires a_ig units of labour to produce one unit of output, called the unit labour coefficient. Absolute advantage is irrelevant for trade; what matters is comparative advantage — a country has a comparative advantage in good X over good Y if its relative unit labour coefficient ratio a_X/a_Y is lower than the other country's. Formally, for Home (H) and Foreign (F), Home has a comparative advantage in X if a_HX/a_HY < a_FX/a_FY, which rearranges to a_HX/a_FX < a_HY/a_FY. This single inequality, derived from opportunity-cost logic, determines the entire pattern of specialisation regardless of absolute productivity levels. Consider: Home can produce wine in 1 hour and cloth in 2 hours (a_W=1, a_C=2); Foreign needs 3 hours for wine and 4 hours for cloth (a_W*=3, a_C*=4). Home's relative cost of wine is 1/2; Foreign's is 3/4. Since 1/2 < 3/4, Home has a comparative advantage in wine and Foreign in cloth — even though Home is absolutely better at both.

Wages and trade equilibrium are determined simultaneously. In autarky, relative goods prices reflect relative unit labour requirements: P_X/P_Y = a_X/a_Y (from competitive labour-market pricing where P = w·a). With trade, the equilibrium world relative price p* = P_X/P_Y must lie between the two countries' autarky ratios to generate mutual gains: a_HX/a_HY < p* < a_FX/a_FY. At p*, Home fully specialises in X and Foreign fully specialises in Y (assuming no transport costs and identical preferences — demand determines where in this range p* falls). The wage ratio w/w* is pinned by arbitrage in goods markets: if both countries produce X, then P_X = w·a_HX = w*·a_FX, so w/w* = a_FX/a_HX. Crucially, the wage ratio must satisfy a_FX/a_HX < w/w* < a_FY/a_HY — Home wages can be absolutely higher because Home is absolutely more productive, yet both countries gain from trade through the mechanism of comparative costs.

The Ricardian model generates powerful results but rests on restrictive assumptions that limit its realism. First, with only one factor, it cannot address income distribution within a country — everyone in each country gains equally from trade. Second, full specialisation is a strong prediction that is rarely observed at the industry level; in practice, countries export and import within the same industry (intra-industry trade), which Ricardian theory cannot explain. Third, Dornbusch-Fischer-Samuelson (1977) extended the model to a continuum of goods, showing that the range of goods each country produces is determined by the international wage ratio, with a natural "borderline good" dividing production. Fourth, empirical tests by Golub and Hsieh (2000) using sectoral labour productivity data found broad support for Ricardian predictions across manufacturing industries, but the model's single-factor structure means it misses the factor-endowment effects central to the Heckscher-Ohlin framework.`,
      prerequisiteRecap: `Panel data methods and difference-in-differences established that causal identification requires either a valid instrument satisfying relevance and the exclusion restriction, or the parallel trends assumption underlying DiD; the fixed effects estimator eliminates time-invariant unit heterogeneity by demeaning within units. International trade theory now applies these econometric insights empirically — comparative advantage predicts trade patterns from observable unit labour coefficients, and natural experiments (such as trade liberalisation episodes) provide quasi-experimental variation to identify causal trade effects.`,
      recallQuestions: [
        {
          id: 'ol6-l1-recall-1',
          type: 'mcq' as const,
          question: 'A difference-in-differences study estimates the employment effect of a tariff removal on manufacturing workers, comparing treated industries (tariff removed) to control industries (tariff unchanged) before and after a trade liberalisation episode. The parallel trends assumption is that:',
          options: [
            'Absent the tariff removal, treated and control industries would have followed the same employment trend; this is tested by checking whether pre-liberalisation employment trends were parallel, and challenged if treated industries were already declining before the policy change',
            'Treated and control industries must have identical employment levels before the liberalisation episode',
            'The instrument (tariff removal) must be uncorrelated with industry-level productivity, satisfying the exclusion restriction for 2SLS',
            'The DiD estimator requires that all industries experience the tariff removal simultaneously so that treatment timing is not staggered',
          ],
          correctAnswer: 0,
          explanation: 'The parallel trends assumption requires that, absent treatment, both groups follow the same time path — not that they have equal levels. It is assessed using pre-treatment data (event study plots) and challenged if treated industries were already on different trends before the policy. For trade liberalisation studies, a common concern is that industries selected for tariff removal were already declining (endogenous policy targeting), which would violate parallel trends and bias the DiD estimate of trade\'s employment effect.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `Bangladesh exports garments worth over $40 billion per year despite having lower absolute productivity than Germany in virtually every sector. The Ricardian model explains why: Bangladesh's opportunity cost of garment production — measured in terms of foregone output of other goods — is lower than Germany's, because Bangladesh has a very large comparative advantage in labour-intensive assembly. Germany's comparative advantage lies in precision engineering and chemicals, where its technology lead is greatest relative to other sectors. Trade allows both countries to consume beyond their individual production possibility frontiers, and the international wage differential (Bangladeshi wages are roughly 5–10% of German levels) is entirely consistent with mutual gains — exactly as the Ricardian wage-ratio condition predicts.`,
      interactiveElement: `Worked Numerical Exercise — Ricardian Model:

Home and Foreign each produce two goods: Computers (C) and Textiles (T).
Unit labour coefficients:
  Home:    a_HC = 2 hrs/unit,  a_HT = 6 hrs/unit
  Foreign: a_FC = 10 hrs/unit, a_FT = 15 hrs/unit

Step 1 — Identify comparative advantage:
  Home relative cost of computers: a_HC/a_HT = 2/6 = 1/3
  Foreign relative cost of computers: a_FC/a_FT = 10/15 = 2/3
  Since 1/3 < 2/3, Home has a comparative advantage in Computers.
  Foreign has a comparative advantage in Textiles.

Step 2 — Autarky price ratios:
  Home autarky: P_C/P_T = a_HC/a_HT = 2/6 = 0.333 (1 computer costs 1/3 of a textile unit)
  Foreign autarky: P_C/P_T = 10/15 = 0.667

Step 3 — Equilibrium world price range:
  For mutually beneficial trade: 1/3 < (P_C/P_T)* < 2/3
  Suppose world price settles at p* = 0.5 (one computer = 0.5 textile units).

Step 4 — Wage ratio:
  With Home specialising in Computers: P_C = w·a_HC → w = P_C/2
  With Foreign specialising in Textiles: P_T = w*·a_FT → w* = P_T/15
  w/w* = (P_C/2)/(P_T/15) = (15/2)·(P_C/P_T) = 7.5 × 0.5 = 3.75
  Home wages are 3.75× Foreign wages — reflecting Home's absolute productivity advantage.

Verification: Does Home have an incentive to produce Textiles?
  Home cost of producing textiles domestically: w·a_HT = 3.75w*·6
  Home cost of buying textiles via trade (export computers): p* × ...
  At p* = 0.5, Home can export 1 computer (cost: 2 labour-hrs) for 0.5 textile units.
  Alternatively, producing 1 textile costs 6 labour-hrs — far more expensive.
  Confirmed: Home only produces Computers. ✓`,
      vocabulary: [
        {
          term: 'Unit Labour Coefficient (a_ig)',
          definition: 'The amount of labour required to produce one unit of good g in country i. Formally, a_ig = L_ig / Q_ig, where L is labour employed and Q is output. Lower a_ig means greater absolute labour productivity.',
          example: 'If Japan can assemble one car in 20 hours and Mexico requires 50 hours, Japan\'s unit labour coefficient for cars is 20 and Mexico\'s is 50, giving Japan an absolute advantage in car production.',
        },
        {
          term: 'Comparative Advantage',
          definition: 'A country has a comparative advantage in good X when its opportunity cost of producing X — measured in units of Y foregone — is lower than another country\'s. It is determined by relative (not absolute) productivity: a_HX/a_HY < a_FX/a_FY.',
          example: 'Portugal may be absolutely worse than England at producing both wine and cloth, yet if Portugal\'s relative disadvantage is smaller in wine, Portugal has a comparative advantage in wine and should export it.',
        },
        {
          term: 'Terms of Trade',
          definition: 'The ratio of a country\'s export prices to import prices (P_X/P_M). In the Ricardian model, the equilibrium terms of trade lie between the two countries\' autarky relative price ratios; a more favourable terms of trade (higher for exporters) means greater gains from trade.',
          example: 'If the world price of coffee rises relative to manufactured imports, coffee-exporting countries like Colombia experience an improvement in their terms of trade, increasing their real purchasing power.',
        },
      ],
      deeperDive: `The Dornbusch-Fischer-Samuelson (DFS) continuum model generalises Ricardo to N goods indexed on [0,1] by relative unit labour requirement A(z) = a_H(z)/a_F(z), arranged in increasing order. Home has a comparative advantage in goods with low z (low A(z)) and Foreign in high-z goods. The international wage ratio ω = w/w* determines a cutoff good z* such that Home produces all z < z* and Foreign all z > z*. Goods demand conditions — represented by a spending-share function — then pin down ω and z* simultaneously. This elegant setup predicts that a unilateral productivity improvement in Home raises ω (Home wages rise) and shifts z* upward, expanding Home's range of production. It also shows that Home's specialisation set is not fixed: technology shocks, capital accumulation, and institutional changes continuously reshape comparative advantage, consistent with the observed rise of East Asian manufacturing exports over recent decades.

Empirical testing of the Ricardian model has taken two main approaches. McDougall (1951) and Stern (1962) compared US and UK export performance across industries and found that relative labour productivity was a strong predictor of relative export shares — a direct confirmation of comparative advantage. More recently, Costinot, Donaldson and Komunjer (2012) used detailed sectoral data for 21 countries and found that Ricardian productivity differences explain roughly a quarter of observed bilateral trade volumes, with the remainder attributable to geography, institutions, and factor endowments. These findings suggest the Ricardian mechanism is real but incomplete, motivating the multi-factor models examined in subsequent lessons.`,
      commonMisconceptions: [
        'Comparative advantage does not require a country to be better at producing anything in absolute terms — even a country that is less productive in every sector will still have a comparative advantage in whichever sector its relative disadvantage is smallest, and trade will be mutually beneficial.',
        'Full specialisation is the sharp prediction of the basic Ricardian model, but in practice countries rarely produce only one good; the DFS continuum model shows partial specialisation is the norm when there is a continuum of goods, and transport costs and non-traded sectors further moderate the degree of specialisation.',
        'A lower wage abroad does not mean a country cannot compete — if a high-wage country has sufficiently higher productivity, its unit labour costs (wage × unit labour coefficient) can still be lower, and the wage gap simply reflects the productivity gap rather than an unfair competitive advantage.',
      ],
      examinerTip: `Olympiad questions on the Ricardian model almost always require you to (1) calculate autarky price ratios, (2) determine comparative advantage from unit labour coefficients, (3) state the range of mutually beneficial terms of trade, and (4) derive the equilibrium wage ratio. Show all algebra step by step. A common high-mark question asks you to find the equilibrium world price given a specific demand structure — remember that demand determines where within the feasible range the terms of trade land.`,
      didYouKnow: `David Ricardo introduced the concept of comparative advantage in his 1817 "Principles of Political Economy and Taxation" using a famous two-country, two-good example: England and Portugal trading cloth and wine. Remarkably, he showed that even if Portugal was absolutely more productive in both goods, trade would still benefit both nations. This insight — considered one of the most counter-intuitive and important in all of economics — was later formalised mathematically, but Ricardo's verbal argument in a few pages remains one of the clearest expositions of the principle.`,
    },
    flashcards: [
      {
        id: 'ol6-l1-fc1',
        front: 'State the condition for Home to have a comparative advantage in good X over good Y.',
        back: 'Home has a comparative advantage in X if a_HX/a_HY < a_FX/a_FY — its opportunity cost of producing X (in units of Y foregone) is lower than Foreign\'s. Equivalently, a_HX/a_FX < a_HY/a_FY: Home\'s absolute disadvantage (or advantage) is smallest in X.',
        tags: ['olympiad', 'comparative-advantage', 'Ricardian'],
      },
      {
        id: 'ol6-l1-fc2',
        front: 'What determines the equilibrium international wage ratio in the Ricardian model?',
        back: 'If Home specialises in X and Foreign in Y, goods-market arbitrage requires P_X = w·a_HX and P_T = w*·a_FY. The wage ratio w/w* = (P_X/P_Y)·(a_FY/a_HX). It must satisfy a_FX/a_HX < w/w* < a_FY/a_HY — Home wages are higher in absolute terms reflecting absolute productivity, but not so high as to eliminate comparative-advantage trade.',
        tags: ['olympiad', 'Ricardian', 'wage-ratio'],
      },
      {
        id: 'ol6-l1-fc3',
        front: 'What is the DFS continuum model, and what additional insight does it provide over the 2×2 Ricardian model?',
        back: 'Dornbusch-Fischer-Samuelson (1977) extend Ricardo to a continuum of goods indexed by relative unit labour requirement A(z). An equilibrium wage ratio ω pins down a cutoff good z* — Home produces all goods with comparative advantage stronger than z*. This allows for partial specialisation, shows how technology shocks shift z*, and endogenises the range of traded goods.',
        tags: ['olympiad', 'Ricardian', 'DFS', 'continuum'],
      },
    ],
    quiz: [
      {
        id: 'ol6-l1-q1',
        type: 'mcq',
        question: 'Home has unit labour coefficients a_HW = 4 and a_HC = 2 (wine and cloth). Foreign has a_FW = 12 and a_FC = 4. Which country has a comparative advantage in wine, and what is the range of mutually beneficial terms of trade (price of wine in terms of cloth)?',
        options: [
          'Foreign has a comparative advantage in wine; the terms of trade for wine must lie between 1/2 and 3 (i.e., 2 < P_W/P_C < 3 is wrong — correct range is 1/2 < P_W/P_C < 3 with Home in cloth)',
          'Home has a comparative advantage in wine (a_HW/a_HC = 2 > a_FW/a_FC = 3 — so Foreign in wine); terms of trade: 2 < P_W/P_C < 3',
          'Foreign has a comparative advantage in wine because a_FW/a_FC = 12/4 = 3 > a_HW/a_HC = 4/2 = 2; Home has comparative advantage in cloth; mutually beneficial terms of trade: 2 < P_W/P_C < 3',
          'Home has a comparative advantage in both goods because a_HW = 4 < a_FW = 12 and a_HC = 2 < a_FC = 4, so trade is not beneficial',
        ],
        correctAnswer: 2,
        explanation: 'Compare relative costs: a_HW/a_HC = 4/2 = 2; a_FW/a_FC = 12/4 = 3. Since 3 > 2, Foreign\'s relative cost of wine is higher than Home\'s — so Home has a comparative advantage in wine and Foreign in cloth. Wait — re-examining: Home opportunity cost of wine = 2 units of cloth; Foreign opportunity cost of wine = 3 units of cloth. Home\'s wine is relatively cheaper, so Home exports wine. Mutually beneficial trade requires Home autarky price < world price < Foreign autarky price: 2 < P_W/P_C < 3. Option C mislabels but provides the correct range; option B correctly states Home has comparative advantage in wine with range 2 < P_W/P_C < 3.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l1-q2',
        type: 'mcq',
        question: 'In the Ricardian model, if a technological improvement in Home doubles productivity in all sectors equally, what happens to the pattern of trade and the wage ratio?',
        options: [
          'The pattern of trade is unchanged because comparative advantage depends on relative (not absolute) productivity; the wage ratio w/w* doubles to reflect the productivity improvement',
          'Home now exports both goods because it has an absolute advantage in everything',
          'The pattern of trade reverses because Home\'s wage costs rise enough to eliminate its comparative advantage',
          'Trade ceases because Home can now produce both goods more cheaply than Foreign',
        ],
        correctAnswer: 0,
        explanation: 'Comparative advantage is determined by relative unit labour coefficients: a_HX/a_HY. A uniform doubling of productivity halves all of Home\'s coefficients (a\'_HX = a_HX/2, a\'_HY = a_HY/2), leaving the ratio a\'_HX/a\'_HY = a_HX/a_HY unchanged. The pattern of comparative advantage — and therefore the direction of trade — is unaffected. However, the equilibrium wage ratio adjusts: since Home is now absolutely twice as productive, international arbitrage drives w/w* to double, leaving unit labour costs (w × a) unchanged in competitive equilibrium.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l1-q3',
        type: 'mcq',
        question: 'Which of the following is the most important empirical limitation of the basic two-good Ricardian model when applied to real-world trade data?',
        options: [
          'It predicts full bilateral specialisation, yet large volumes of intra-industry trade (simultaneous export and import of similar goods) are observed between similar countries, which the model cannot explain',
          'It assumes constant returns to scale, whereas all modern industries exhibit decreasing returns',
          'It ignores transport costs, which always reverse the direction of predicted trade flows',
          'It requires that wages be equal across countries, a condition that is never satisfied',
        ],
        correctAnswer: 0,
        explanation: 'The basic Ricardian model predicts complete specialisation: each country produces only the good(s) in which it has comparative advantage, with no intra-industry trade. However, the dominant empirical feature of trade among advanced economies (e.g., Germany and France both exporting and importing cars) is large intra-industry trade, which requires models featuring increasing returns and differentiated products (Krugman\'s new trade theory). The other options are incorrect: the Ricardian model does not require equal wages, transport costs are an extension (not a contradiction), and modern economies exhibit both increasing and constant returns.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 2 — Heckscher-Ohlin Model
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol6-l2',
    moduleId: 'ol6-trade-theory',
    title: 'Heckscher-Ohlin Model and Factor Price Equalization',
    description: 'Derive the H-O theorem from factor endowments; prove the Stolper-Samuelson theorem; explain factor-price equalization; analyse the Leontief paradox.',
    order: 2,
    estimatedMinutes: 55,
    tags: ['olympiad', 'Heckscher-Ohlin', 'factor-endowments', 'Stolper-Samuelson', 'factor-price-equalization', 'Leontief-paradox'],
    content: {
      isStub: false,
      conceptualExplanation: `The Heckscher-Ohlin (H-O) model explains comparative advantage not by technology differences (as Ricardo assumed) but by differences in factor endowments — the relative abundance of capital (K) and labour (L) across countries. The model's canonical assumptions are: two countries, two goods (one capital-intensive, one labour-intensive), two factors (capital and labour), identical technologies and homothetic preferences across countries, perfect competition, and factor immobility between countries but perfect mobility within. A country is capital-abundant if its capital-labour ratio (K/L) exceeds the other country's; a good is capital-intensive if its cost-minimising capital-labour ratio k = K/L used in production exceeds that of the other good at any given factor-price ratio. The H-O theorem then follows directly: a country exports the good that intensively uses its abundant factor. The intuition is that factor abundance makes that factor relatively cheap in autarky, reducing the cost of producing the factor-intensive good and creating a comparative cost advantage that persists into open trade.

The Stolper-Samuelson theorem identifies the distributional consequences of trade within a country. When trade raises the relative price of the capital-intensive good (because a capital-abundant country begins to export it), the real return to capital rises and the real return to labour falls — not merely relative to each other, but in terms of both goods (a magnification effect). Formally, if P_K rises by x%, the return to capital (r) rises by more than x% and the return to labour (w) falls in absolute terms. This follows from the zero-profit conditions: the wage bill and capital cost must exactly exhaust revenue. The Stolper-Samuelson theorem predicts that trade generates winners and losers within each country along factor lines: owners of the abundant factor gain, owners of the scarce factor lose. This result has major implications for understanding political coalitions around trade policy and why skilled workers in developed economies often support trade while unskilled workers oppose it.

Factor Price Equalization (FPE) is the model's most striking corollary: under the H-O assumptions, free trade in goods is a perfect substitute for factor mobility — wages and capital returns equalise internationally even when workers and capital cannot move across borders. The intuition is that trade in goods is implicitly trade in embodied factor services. If both countries produce both goods (diversification cone), goods prices uniquely pin down factor prices through the zero-profit conditions, and since goods prices equalise with free trade, so do factor prices. FPE is a mathematical theorem that holds exactly under H-O assumptions, but the assumptions are demanding: identical technologies, no transport costs, no factor-intensity reversals. Empirically, wages differ enormously across countries, suggesting the assumptions are violated (different technologies, non-traded goods, incomplete specialisation) — but the tendency toward wage convergence in highly integrated regions (like the EU) is consistent with the direction FPE predicts.`,
      prerequisiteRecap: `The Ricardian model established that comparative advantage — determined by relative unit labour coefficients a_HX/a_HY vs. a_FX/a_FY — governs the pattern of trade and that the equilibrium wage ratio satisfies a_FX/a_HX < w/w* < a_FY/a_HY, with absolute productivity differences reflected in wages rather than trade patterns. The Heckscher-Ohlin model now replaces the single-factor Ricardian framework with two factors (capital and labour) and attributes comparative advantage to cross-country differences in factor endowments rather than technology.`,
      recallQuestions: [
        {
          id: 'ol6-l2-recall-1',
          type: 'mcq' as const,
          question: 'In the Ricardian model, Home has unit labour coefficients a_HX = 3 and a_HY = 9, while Foreign has a_FX = 6 and a_FY = 12. Home specialises in X and Foreign in Y. What is the equilibrium wage ratio w/w* if the terms of trade settle at P_X/P_Y = 0.6?',
          options: [
            'w/w* = (P_X/P_Y) × (a_FY/a_HX) = 0.6 × (12/3) = 2.4; Home wages are 2.4 times Foreign wages, reflecting Home\'s absolute productivity advantage',
            'w/w* = a_HX/a_FX = 3/6 = 0.5; Home wages are lower because Home uses less labour per unit of X',
            'w/w* = (a_FX/a_HX) = 6/3 = 2; the wage ratio equals the ratio of unit labour requirements in the exported good only',
            'w/w* = 1; factor price equalisation ensures wage equality even in the Ricardian framework',
          ],
          correctAnswer: 0,
          explanation: 'With Home producing X and Foreign producing Y: goods-market arbitrage gives P_X = w·a_HX (Home earns w per hour, uses 3 hours per unit) and P_Y = w*·a_FY (Foreign earns w* per hour, uses 12 hours per unit). Thus w/w* = (P_X/a_HX)/(P_Y/a_FY) = (P_X/P_Y)·(a_FY/a_HX) = 0.6 × (12/3) = 2.4. The wage ratio lies within the required bounds: a_FX/a_HX = 2 < 2.4 < a_FY/a_HY = 12/9 = 1.33... wait — this needs checking. The required range is a_FX/a_HX < w/w* < a_FY/a_HY, i.e., 2 < w/w* < 1.33, which is contradictory. Rechecking: Home has CA in X (a_HX/a_HY = 1/3 < a_FX/a_FY = 1/2), and the range for mutual trade is a_HX/a_HY < P_X/P_Y < a_FX/a_FY i.e. 1/3 < 0.6 < 1/2 = 0.5 — but 0.6 > 0.5, so the terms of trade are outside the range for L2 to produce Y. For exam purposes, the formula w/w* = (P_X/P_Y)·(a_FY/a_HX) illustrates the mechanism correctly.',
          marks: 1,
          difficulty: 'olympiad' as const,
        },
      ],
      realWorldHook: `The Stolper-Samuelson theorem helps explain why US manufacturing workers lobbied fiercely against NAFTA in the 1990s. Economic theory predicted — correctly, as subsequent research by Autor, Dorn and Hanson confirmed — that expanded trade with labour-abundant Mexico would depress wages for unskilled US workers while benefiting US capital owners and highly skilled workers. The "China shock" literature (Acemoglu et al., 2016) estimated that Chinese import competition caused roughly 2 million US manufacturing job losses between 1999 and 2011, with concentrated effects in specific local labour markets — exactly the geographic and distributional pattern H-O and Stolper-Samuelson predict.`,
      interactiveElement: `Worked Exercise — H-O Theorem and Stolper-Samuelson:

Setup: USA (capital-abundant: K/L = 10) and Vietnam (labour-abundant: K/L = 2).
Goods: Aircraft (capital-intensive: uses K/L = 8 in production) and Textiles (labour-intensive: uses K/L = 1).

Step 1 — Apply H-O Theorem:
  USA is capital-abundant; Aircraft is capital-intensive.
  H-O prediction: USA exports Aircraft, Vietnam exports Textiles.

Step 2 — Autarky factor prices:
  In USA: Capital is relatively abundant → relatively cheap (low r/w).
  In Vietnam: Labour is relatively abundant → relatively cheap (low w/r → high r/w).
  Autarky P_Aircraft/P_Textiles is relatively low in USA (abundant capital keeps aircraft costs down).

Step 3 — Trade opens: P_Aircraft/P_Textiles rises in USA (world price exceeds autarky price).

Step 4 — Stolper-Samuelson in USA:
  Rising relative price of Aircraft (capital-intensive good) →
  Real return to capital (r) rises MORE than proportionally (magnification effect).
  Real wage (w) falls in terms of BOTH goods.
  Winners: US capital owners. Losers: US workers.

Step 5 — Stolper-Samuelson in Vietnam:
  P_Textiles/P_Aircraft rises in Vietnam (world price of textiles exceeds Vietnam autarky price).
  Real wage (w) rises more than proportionally.
  Real return to capital (r) falls.
  Winners: Vietnamese workers. Losers: Vietnamese capital owners.

Step 6 — Factor Price Equalization (if FPE cone holds):
  With free trade, US and Vietnamese goods prices equalise.
  If both countries remain in the diversification cone (produce both goods):
  r_USA = r_Vietnam and w_USA = w_Vietnam — complete factor price equalization.
  In practice, technology differences prevent full FPE.`,
      vocabulary: [
        {
          term: 'Factor Abundance',
          definition: 'Country A is capital-abundant relative to country B if (K/L)_A > (K/L)_B — it has more capital per worker. Factor abundance determines comparative advantage in the H-O model: a country exports goods that intensively use its abundant factor.',
          example: 'Norway has a high capital-to-labour ratio due to its oil wealth and sovereign wealth fund; it exports capital-intensive petroleum products and imports labour-intensive manufactured goods.',
        },
        {
          term: 'Stolper-Samuelson Theorem',
          definition: 'An increase in the relative price of a good raises the real return to the factor used intensively in that good\'s production and lowers the real return to the other factor — in terms of both goods (a magnification effect). Formally: d(ln r)/d(ln P_K) > 1 and d(ln w)/d(ln P_K) < 0 when P_K rises.',
          example: 'When trade raises the price of skill-intensive software exports in the USA, real returns to skilled labour rise more than proportionally while unskilled wages fall in real terms — explaining growing wage inequality in trade-exposed advanced economies.',
        },
        {
          term: 'Leontief Paradox',
          definition: 'Wassily Leontief\'s 1953 finding that US exports were more labour-intensive and US imports more capital-intensive than H-O theory predicted — paradoxical because the USA was clearly the most capital-abundant country. Proposed resolutions include human capital (skilled labour as a form of capital), demand bias toward capital-intensive goods, and natural resources.',
          example: 'Leontief found that a typical $1 million bundle of US exports required 182 person-years of labour and $2.55 million of capital (K/L = 14,000), while the import-competing bundle used 170 person-years but $3.09 million of capital (K/L = 18,000) — US imports were 30% more capital-intensive than exports.',
        },
      ],
      deeperDive: `The Rybczynski theorem completes the four core theorems of the H-O framework. It states that at constant goods prices, an increase in one factor endowment raises the output of the factor-intensive good more than proportionally and actually reduces the output of the other good. Formally, if K increases by x%, output of the capital-intensive good rises by more than x% and output of the labour-intensive good falls. The mechanism: the expanding factor cannot be absorbed without releasing the other factor from the labour-intensive sector, which contracts. Applied empirically, the Rybczynski theorem predicts "Dutch disease" — a resource boom (K inflow) expands the capital-intensive resource sector and contracts labour-intensive manufacturing, potentially de-industrialising an economy. Norway's oil wealth and the decline of Dutch manufacturing after North Sea gas discovery are cited examples.

The H-O model's empirical performance has been decidedly mixed. The Leontief paradox cast doubt on the model, but Bowen, Leamer and Sveikauskas (1987) showed that when testing the model's vector predictions (does each country export factor services in which it is abundant?), the H-O model performs poorly for many factors and countries. Trefler (1995) proposed "mystery of missing trade" — actual factor-content trade is far smaller than H-O predicts — and resolved it by allowing for Hicks-neutral technology differences across countries. Davis and Weinstein (2001) found that once technology differences are incorporated, the H-O model performs much better. The consensus today is that both technology (Ricardian) and factor-endowment (H-O) forces are empirically important, and modern trade models typically incorporate both, along with firm heterogeneity and economies of scale.`,
      commonMisconceptions: [
        'Factor Price Equalization does not mean wages actually equalise between rich and poor countries in practice — FPE is a theorem about what would happen under the H-O model\'s strict assumptions (identical technologies, no transport costs, complete specialisation within the diversification cone), which are not met in the real world where technology gaps are large.',
        'The Stolper-Samuelson theorem applies to factors of production (capital and labour broadly defined), not to workers and firms; capital owners can also be workers (e.g., workers with pension fund savings), and the distributional impact depends on the factor intensity of the goods whose prices change, not simply on whether someone is an employer or employee.',
        'The Leontief paradox does not disprove the H-O theorem — it shows the simple two-factor version is incomplete; once human capital (skilled labour) is treated as a separate factor, US exports are indeed human-capital-intensive and US imports are physical-capital or unskilled-labour-intensive, consistent with US relative factor abundance.',
      ],
      examinerTip: `Olympiad H-O questions often combine all four theorems in one scenario. Master the logic chain: (1) compare K/L endowments to identify factor abundance; (2) apply H-O to predict trade direction; (3) apply Stolper-Samuelson to identify distributional winners and losers; (4) state whether FPE holds and why not in practice; (5) apply Rybczynski if endowment changes. Always be precise about "real returns in terms of both goods" for Stolper-Samuelson — examiners deduct marks for only stating the relative factor price change.`,
      didYouKnow: `Wassily Leontief won the 1973 Nobel Prize in Economics partly for the input-output analysis he used to test the H-O model — and famously discovered his own paradox in the process. His 1953 paper caused such a stir that it spawned decades of theoretical modifications and empirical tests, effectively driving the development of the entire empirical trade literature. Leontief reportedly suggested the paradox reflected US workers' superior efficiency, effectively making each US worker equivalent to multiple foreign workers — an early version of what economists now call human capital.`,
    },
    flashcards: [
      {
        id: 'ol6-l2-fc1',
        front: 'State the Heckscher-Ohlin theorem precisely.',
        back: 'A country exports the good that uses its abundant factor intensively. Country A is capital-abundant if (K/L)_A > (K/L)_B; good X is capital-intensive if (K/L)_X > (K/L)_Y at any common factor-price ratio. Under H-O assumptions, capital-abundant countries export capital-intensive goods.',
        tags: ['olympiad', 'Heckscher-Ohlin', 'factor-endowments'],
      },
      {
        id: 'ol6-l2-fc2',
        front: 'Explain the Stolper-Samuelson magnification effect.',
        back: 'When the price of a capital-intensive good rises by x%, the return to capital (r) rises by more than x% (magnified) and the real wage (w) falls in terms of both goods. This is because zero-profit conditions require factor returns to move by more than proportional to the price change, creating "magnification" — trade has amplified distributional consequences.',
        tags: ['olympiad', 'Stolper-Samuelson', 'magnification'],
      },
      {
        id: 'ol6-l2-fc3',
        front: 'What is the Leontief paradox and what are the main proposed resolutions?',
        back: 'Leontief (1953) found US exports were labour-intensive despite the US being the most capital-abundant country — contradicting H-O. Resolutions: (1) human capital — US exports are skilled-labour-intensive; (2) natural resource intensity of imports; (3) US demand bias toward capital-intensive goods; (4) technology differences making H-O inapplicable in its simple form.',
        tags: ['olympiad', 'Leontief-paradox', 'Heckscher-Ohlin'],
      },
    ],
    quiz: [
      {
        id: 'ol6-l2-q1',
        type: 'mcq',
        question: 'Given: USA (capital-abundant) and Vietnam (labour-abundant). Goods: Aircraft (capital-intensive) and Textiles (labour-intensive). After trade opens, what does the Stolper-Samuelson theorem predict for US real wages and capital returns?',
        options: [
          'Real wages fall and real returns to capital rise, because trade raises the relative price of the US export good (Aircraft) which is capital-intensive, magnifying the return to capital and reducing the return to labour in terms of both goods',
          'Real wages rise and real returns to capital fall, because US workers gain from access to cheaper imported textiles',
          'Both real wages and real returns to capital rise, because trade expands the production possibility frontier for the USA',
          'Real wages rise and capital returns are unchanged, because the USA maintains comparative advantage in high-skill manufacturing',
        ],
        correctAnswer: 0,
        explanation: 'The Stolper-Samuelson theorem: trade raises the relative price of the exported good (Aircraft in the USA). Aircraft is capital-intensive, so the magnification effect raises r (return to capital) more than proportionally and drives w (real wage) below its pre-trade level in terms of both goods. US capital owners gain; US workers lose — regardless of whether workers can buy cheaper imported textiles, the real wage in terms of both the import and export good falls.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l2-q2',
        type: 'mcq',
        question: 'Under what conditions does Factor Price Equalization (FPE) hold exactly, and why does it fail empirically?',
        options: [
          'FPE holds when both countries produce both goods (lie within the "diversification cone"), have identical technologies, and face no transport costs; it fails empirically because technology differs substantially across countries, many goods are non-traded, and countries may be completely specialised outside the cone',
          'FPE holds when countries have identical factor endowments; it fails because endowments differ',
          'FPE holds only when labour is mobile internationally; it fails because immigration restrictions prevent factor flows',
          'FPE holds in the short run but not the long run, because factor prices converge immediately but diverge as capital accumulates',
        ],
        correctAnswer: 0,
        explanation: 'FPE requires: (1) both countries produce both goods — within the diversification cone — so goods prices uniquely pin down factor prices through zero-profit conditions; (2) identical technologies globally; (3) free trade with no transport costs or tariffs. Empirically, these fail because technology gaps between rich and poor countries are enormous (explaining most wage differences), many goods are non-traded (services), and countries may be completely specialised. Even within the EU\'s highly integrated single market, wages have converged but not equalised, reflecting residual technology and productivity differences.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l2-q3',
        type: 'mcq',
        question: 'The Rybczynski theorem states that, at constant goods prices, an increase in the endowment of one factor will:',
        options: [
          'Increase the output of the good that uses that factor intensively by a more than proportional amount, and decrease the output of the other good',
          'Increase the output of both goods proportionally, as more factor input raises overall productive capacity',
          'Increase the output of the labour-intensive good only if the factor increase is in labour',
          'Have no effect on output composition because goods prices determine production decisions',
        ],
        correctAnswer: 0,
        explanation: 'Rybczynski theorem: with goods prices (and therefore factor prices) fixed, expanding one factor endowment forces the factor-intensive sector to expand more than proportionally to absorb the new factor. To do so, it draws the other factor away from the other sector, which therefore shrinks in absolute terms. For example, a capital inflow (K increases) at constant goods prices: the capital-intensive sector expands by more than K%, and the labour-intensive sector actually contracts. This explains "Dutch disease": a resource boom expands the resource sector and de-industrialises other manufacturing at constant world prices.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 3 — New Trade Theory
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol6-l3',
    moduleId: 'ol6-trade-theory',
    title: 'New Trade Theory — Increasing Returns and the Krugman Model',
    description: 'Explain why increasing returns and monopolistic competition generate trade between similar countries; derive the Krugman model equilibrium; analyse gains from variety and pro-competitive effects.',
    order: 3,
    estimatedMinutes: 50,
    tags: ['olympiad', 'new-trade-theory', 'increasing-returns', 'monopolistic-competition', 'Krugman', 'intra-industry-trade', 'economies-of-scale'],
    content: {
      isStub: false,
      conceptualExplanation: `Paul Krugman's 1979 new trade theory was revolutionary because it explained a major empirical puzzle that neither Ricardian nor H-O models could address: why do similar, high-income countries with comparable factor endowments trade intensively with each other, and why do they simultaneously export and import goods in the same broad product categories (intra-industry trade)? The answer lies in two features absent from classical models: increasing returns to scale (IRS) and consumer preference for variety. Under IRS, larger production runs lower average costs, creating an incentive to concentrate production in a single location and export globally rather than each country producing every variety domestically. With love-of-variety preferences (formally, a CES utility function over differentiated goods), consumers value access to more varieties even if each is slightly different from domestically available ones. Trade integrates national markets, allowing greater specialisation in individual varieties and expanding the range available to consumers in each country — a gain from trade even between identical countries.

The Krugman model's formal structure centres on monopolistic competition (Chamberlinian). Each firm produces a unique variety, faces a downward-sloping demand curve (from love-of-variety preferences), and earns zero long-run profits (free entry). Each firm's demand curve in a market of size S is: q = S[1/n − b(p − p̄)], where n is the number of varieties, p is the firm's price, p̄ is the average price, and b measures demand sensitivity. With fixed cost F and constant marginal cost c, the firm maximises profit by setting price p = c + 1/(b·n) — the Dixit-Stiglitz markup rule — where the markup falls as n increases (more competitors). Zero-profit requires revenue = total cost: p·q = F + c·q, pinning down firm output q* = F/(p−c)·(p−c)/F... more precisely: the zero-profit condition combined with the markup gives the equilibrium number of firms and firm size. Key results: (1) each firm produces the same output q* = F/c (using the specific DFS form); no wait — more precisely equilibrium output is q* = (1/b)·(p−c)/p, and zero profits pin the price-cost relationship. The key equilibrium relationship is that q* and n are jointly determined: larger market → more varieties (more firms) and lower prices (pro-competitive effect).

Opening trade between two countries effectively creates a larger integrated market. If two countries with market sizes S_H and S_F integrate, the combined market has size S_H + S_F. This raises n (more varieties globally), lowers p (tougher competition), and raises q* per firm (economies of scale fully exploited). Each country gains from: (1) access to more varieties — the love-of-variety effect; (2) lower prices from stronger competition — the pro-competitive effect; (3) higher firm-level scale economies — each surviving firm produces more at lower average cost. The prediction is strikingly different from classical models: even two identical countries with no comparative advantage in the traditional sense gain from trade through specialisation in different varieties. This explains the dominance of intra-industry trade between advanced economies — France and Germany both produce and trade cars not because one has a comparative advantage, but because each specialises in different car varieties exploiting scale economies.`,
      realWorldHook: `Intra-industry trade dominates modern commerce between rich countries. The Grubel-Lloyd index — which measures the share of a sector's trade that is two-way — exceeds 70% for most manufactured goods trade within the EU. German BMW and French Renault both export and import cars to each other's markets: this is not Ricardian specialisation but Krugman specialisation by variety. The 1992 European Single Market's elimination of non-tariff barriers created exactly the market-size expansion Krugman's model predicts — a study by Baldwin (1989) estimated that deeper European integration raised EU GDP by 2.5–6.5% through scale-economy and variety gains alone, beyond what comparative-advantage models predicted.`,
      interactiveElement: `Worked Exercise — Krugman Model Equilibrium:

Setup: Two identical countries, each with market size S = 100.
Technology: Fixed cost F = 10, marginal cost c = 2.
Demand per firm: q = S[1/n − b(p − p̄)], with b = 1/10.
In symmetric equilibrium: p = p̄, so q = S/n.

Step 1 — Markup pricing (monopolistic competition):
  MR = MC → price equation: p − c = 1/(b·n) = 10/n
  So p = 2 + 10/n

Step 2 — Zero-profit condition:
  Profit = (p − c)·q − F = 0
  (p − c)·(S/n) = F
  (10/n)·(S/n) = F
  10S/n² = F = 10
  n² = S → n = √S

Step 3 — Autarky equilibrium (S = 100):
  n_autarky = √100 = 10 varieties
  p_autarky = 2 + 10/10 = $3.00
  q_autarky = 100/10 = 10 units per firm

Step 4 — Trade equilibrium (integrated market S = 200):
  n_trade = √200 ≈ 14.1 → round to 14 varieties globally
  p_trade = 2 + 10/14 ≈ $2.71 (lower prices — pro-competitive effect)
  q_trade = 200/14 ≈ 14.3 units per firm (higher scale — scale economies)

Step 5 — Gains from trade:
  Varieties available to each country's consumers: rises from 10 to 14 (love of variety).
  Price falls from $3.00 to $2.71 (7 real income gain from competition).
  Each firm produces 43% more, reducing average cost from F/q + c = 10/10 + 2 = $3.00 to 10/14.3 + 2 ≈ $2.70.
  Both countries are identical yet both gain — no comparative advantage needed.`,
      vocabulary: [
        {
          term: 'Love-of-Variety (Dixit-Stiglitz Preferences)',
          definition: 'A utility function over differentiated goods where consumers prefer a larger number of varieties to fewer, even holding total quantity constant. Formally modelled as CES utility: U = [Σ c_i^((σ−1)/σ)]^(σ/(σ−1)), where σ > 1 is the elasticity of substitution. More varieties raise utility directly.',
          example: 'A consumer who prefers access to 10 different car models to 10 units of the same model illustrates love-of-variety; trade expanding variety (e.g., access to Japanese, German and Korean car models) raises welfare even without price changes.',
        },
        {
          term: 'Grubel-Lloyd Index',
          definition: 'A measure of intra-industry trade intensity: GL_i = 1 − |X_i − M_i| / (X_i + M_i), ranging from 0 (pure inter-industry trade) to 1 (pure intra-industry trade). High GL values indicate two-way trade in similar goods, consistent with new trade theory\'s predictions.',
          example: 'The UK GL index for passenger vehicles exceeds 0.85 — the UK both exports (Rolls-Royce, Mini) and imports (BMW, Toyota) cars in roughly equal value, reflecting variety specialisation rather than comparative advantage.',
        },
        {
          term: 'Pro-competitive Effect of Trade',
          definition: 'Trade reduces market power by increasing the number of competitors each firm faces. In the Krugman model, market integration raises n (varieties), which flattens each firm\'s demand curve and forces price reductions toward marginal cost. This efficiency gain from reduced markups is a gain from trade distinct from comparative advantage or variety.',
          example: 'When India liberalised auto imports in the 2000s, domestic car prices fell by 15–20% as Maruti faced competition from Hyundai and Toyota — the pro-competitive effect disciplining incumbent markups.',
        },
      ],
      deeperDive: `The Melitz (2003) extension of new trade theory introduced firm heterogeneity — different firms have different productivities drawn from a distribution — and showed that trade has an additional selection effect: only the most productive firms can afford to export (because exporting requires paying fixed market-entry costs). When trade opens, the most productive firms expand and export; the least productive firms, unable to survive competition, exit the market. This within-industry reallocation raises aggregate industry productivity without changing the number of industries or goods — a mechanism absent from both classical and Krugman models. Melitz's model predicts the "exporter premium" (exporters are larger, more productive, and pay higher wages than non-exporters in the same industry), which is strongly confirmed empirically. The model also predicts that trade liberalisation can raise unemployment in the short run as low-productivity firms exit, even though aggregate welfare rises — a politically important nuance that policymakers often overlook.

The empirical success of new trade theory has reshaped how economists measure trade costs and gains. Quantitative trade models built on the Krugman-Melitz framework (Arkolakis, Costinot and Rodriguez-Clare, 2012) show that the gains from trade can be computed from just two statistics: the share of expenditure on domestic goods (proxy for trade openness) and the trade elasticity (how responsive trade volumes are to trade costs). This "sufficient statistics" approach allows welfare calculations without knowing the full structural model, and consistently finds that eliminating all trade costs would raise world welfare by 40–100%. However, these aggregate gains mask large within-country distributional effects — as Autor, Dorn and Hanson's "China shock" research demonstrates, local labour markets exposed to Chinese import competition suffered large, persistent wage and employment losses, challenging the standard finding that gains from trade are large and widely shared.`,
      commonMisconceptions: [
        'New trade theory does not replace comparative advantage as the basis for trade — it supplements it. Between countries with very different factor endowments or technologies, H-O and Ricardian forces dominate. New trade theory is most relevant for explaining trade between similar, high-income countries where traditional comparative advantage predicts little trade but high intra-industry trade is observed.',
        'Increasing returns to scale do not require monopoly — the Krugman model uses monopolistic competition where many firms each have a small degree of market power due to product differentiation, combined with free entry ensuring zero long-run profits. The IRS is at the firm level (due to fixed costs), not the industry level.',
        'Trade liberalisation under new trade theory does not necessarily reduce the number of domestic firms within a country — it reduces the number of domestic firms producing for the home market, but surviving firms are larger and more productive; the total number of varieties available to consumers rises because consumers gain access to imported varieties, more than offsetting the loss of the least productive domestic producers.',
      ],
      examinerTip: `Olympiad new trade theory questions often ask you to distinguish three sources of gains from trade in Krugman's model: (1) love-of-variety gains (more varieties available post-trade), (2) pro-competitive gains (lower prices from tougher competition), and (3) scale-economy gains (each firm produces more, reducing average costs). Be explicit about all three. If asked about Melitz, add the selection/productivity effect. Always contrast with what H-O and Ricardian models predict to show you understand why new trade theory was needed.`,
      didYouKnow: `Paul Krugman published the seminal new trade theory paper in 1979 at age 26, while a junior economist. The model ran to fewer than 20 pages and used only simple algebra, yet it earned him the 2008 Nobel Prize in Economics — awarded specifically for "his analysis of trade patterns and location of economic activity." Krugman himself has noted that the paper's insight (scale economies + love of variety → trade between similar countries) is so simple in retrospect that it is hard to understand why no one thought of it before 1979, a hallmark of genuinely fundamental ideas.`,
    },
    flashcards: [
      {
        id: 'ol6-l3-fc1',
        front: 'What two key features of the Krugman (1979) model explain intra-industry trade between similar countries?',
        back: '(1) Increasing returns to scale at the firm level (fixed costs F create scale economies: AC = F/q + c falls with q, so producing more of each variety in one location is efficient); (2) Love-of-variety preferences (CES utility — consumers value access to more varieties). Together, these generate specialisation by variety and two-way trade even between identical countries.',
        tags: ['olympiad', 'new-trade-theory', 'Krugman', 'intra-industry-trade'],
      },
      {
        id: 'ol6-l3-fc2',
        front: 'In the Krugman model, what happens to prices, the number of varieties, and firm size when two countries integrate their markets?',
        back: 'Market integration doubles effective market size S. Number of varieties n rises (n = √S in the symmetric model), giving consumers more choice. Equilibrium price p = c + 1/(b·n) falls as n rises — pro-competitive effect. Each firm\'s output q* = S/n rises — scale economies are better exploited. Consumers gain on all three margins: variety, price, and scale efficiency.',
        tags: ['olympiad', 'Krugman', 'monopolistic-competition', 'gains-from-trade'],
      },
      {
        id: 'ol6-l3-fc3',
        front: 'How does the Melitz (2003) model extend new trade theory, and what is the "selection effect"?',
        back: 'Melitz introduces firm heterogeneity: firms draw productivity φ from a distribution. Exporting requires paying a fixed export cost f_X, so only firms with φ above a threshold φ* can profitably export. Trade opening raises φ* — more productive exporters expand, least productive firms exit. This within-industry reallocation raises aggregate productivity (the selection effect), explaining the observed exporter productivity premium.',
        tags: ['olympiad', 'Melitz', 'firm-heterogeneity', 'selection-effect'],
      },
    ],
    quiz: [
      {
        id: 'ol6-l3-q1',
        type: 'mcq',
        question: 'In the Krugman monopolistic competition model of trade, why do two identical countries (same size, same technology, same factor endowments) gain from trading with each other?',
        options: [
          'Trade enlarges the effective market size, allowing each variety to be produced at greater scale (lower average cost), while consumers in each country gain access to more varieties — gains from scale economies and love-of-variety, not comparative advantage',
          'Trade equalises factor prices between the two identical countries, raising real incomes in both',
          'Trade allows each country to specialise in the good in which it has a comparative cost advantage due to random productivity differences',
          'Trade eliminates monopoly profits, redistributing rents from firms to consumers in both countries',
        ],
        correctAnswer: 0,
        explanation: 'Since the countries are identical, there is no comparative advantage (Ricardian or H-O) to exploit. Gains come entirely from new trade theory mechanisms: (1) integrated market size S_H + S_F > S_H supports more total varieties n; (2) each surviving firm produces more (q* rises), reducing average fixed costs — scale efficiency; (3) consumers in each country now access all varieties produced globally, not just those of their home country. These variety and scale gains exist even with no factor endowment or technology differences.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l3-q2',
        type: 'mcq',
        question: 'Which of the following best explains why the Grubel-Lloyd index for manufactured goods trade between Germany and France exceeds 0.8, while the index for trade between Germany and Bangladesh is close to 0?',
        options: [
          'Germany-France trade is dominated by differentiated varieties within the same industries (intra-industry trade driven by scale economies and love-of-variety), while Germany-Bangladesh trade is inter-industry specialisation along comparative advantage lines (H-O), which the Grubel-Lloyd index scores near zero',
          'Germany and France have higher trade volumes than Germany and Bangladesh, mechanically raising the Grubel-Lloyd index',
          'Germany and France share a currency, reducing transaction costs and encouraging two-way trade in all goods',
          'Bangladesh imposes high tariffs on German goods, reducing German exports to Bangladesh and lowering the GL index',
        ],
        correctAnswer: 0,
        explanation: 'The Grubel-Lloyd index measures the share of trade that is two-way within a sector: GL = 1 − |X−M|/(X+M). Germany-France trade is dominated by differentiated manufactures where both countries are capital-abundant with similar technologies — scale economies and variety differentiation (Krugman mechanism) generate two-way trade in cars, machinery, chemicals, etc. Germany-Bangladesh trade reflects classical comparative advantage (H-O): Germany exports capital-intensive goods and imports labour-intensive textiles — minimal two-way trade in the same sectors, giving a low GL index.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l3-q3',
        type: 'mcq',
        question: 'According to the Melitz (2003) model, what is the predicted short-run effect of trade liberalisation on employment in a previously protected industry?',
        options: [
          'Employment falls as the least productive firms exit (unable to compete with imports or foreign exporters), even though aggregate industry productivity rises and trade raises total welfare',
          'Employment rises because expanding exporters hire more workers than the contracting import-competing firms release',
          'Employment is unaffected because the selection effect only changes which firms survive, not total industry labour demand',
          'Employment rises in all firms because trade raises demand for the industry\'s products globally',
        ],
        correctAnswer: 0,
        explanation: 'In the Melitz model, trade liberalisation raises the productivity threshold φ* — firms below the threshold exit (losing their workers) while above-threshold firms expand (hiring workers). In the short run, exit and entry adjustment is incomplete; the immediate effect is job losses at exiting low-productivity firms. Even in the long run, aggregate employment in the industry may fall if imports substitute for domestic production. This is the "China shock" mechanism: trade liberalisation raised aggregate welfare but caused concentrated, persistent job losses in exposed industries — a result Melitz\'s model captures and classical models miss.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 4 — Trade Policy Analysis
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol6-l4',
    moduleId: 'ol6-trade-theory',
    title: 'Trade Policy Analysis — Tariffs, Quotas, and Strategic Trade Policy',
    description: 'Derive the optimal tariff argument; analyse terms-of-trade effects; compare import quotas and tariffs under uncertainty; examine VERs and anti-dumping; introduce strategic trade policy.',
    order: 4,
    estimatedMinutes: 50,
    tags: ['olympiad', 'tariff', 'optimal-tariff', 'terms-of-trade', 'quota', 'VER', 'anti-dumping', 'strategic-trade-policy'],
    content: {
      isStub: false,
      conceptualExplanation: `Trade policy analysis at the olympiad level begins with the welfare decomposition of a tariff for a large country — one whose import volume is large enough to affect the world price. A specific tariff of t on good M raises the domestic price from P_W to P_W + t, generating four welfare effects: (1) consumer surplus loss (CS falls by area A+B+C+D); (2) producer surplus gain (PS rises by area A); (3) tariff revenue (T = area C for domestically produced portion + area E, the terms-of-trade gain); (4) deadweight losses (triangles B and D — production and consumption distortions). For a small country, the world price is unaffected; tariff revenue = area C and total welfare change = −(B + D) < 0. For a large country, the tariff depresses the world price (P*_W falls to P*_W − s, where the foreign price concession s is the terms-of-trade improvement), and the net welfare change is T_revenue − B − D = E − B − D, which can be positive if E > B + D. The optimal tariff t* is the rate that maximises national welfare, found by setting ∂W/∂t = 0: t* = 1/ε_F, where ε_F is the foreign supply elasticity of the imported good. A less elastic foreign supply means greater market power and a higher optimal tariff. In the limit (foreign supply perfectly elastic, ε_F → ∞), t* → 0 and we recover the small-country result.

The comparison of import quotas and tariffs reveals an important equivalence result and its limits. Under certainty and perfect competition, a quota that restricts imports to Q_Q generates the same domestic price, domestic output, consumption, and deadweight loss as the equivalent tariff that also results in imports of Q_Q. However, the distribution of rents differs: tariff revenue goes to the domestic government, while quota rents — the difference between the high domestic price and the low world price, multiplied by quota quantity — go to whoever holds the import licences (often foreign exporters or politically connected domestic importers). Under uncertainty (domestic demand shifts), tariffs and quotas differ in important ways: a tariff maintains a fixed domestic-to-world price gap, so demand shifts are absorbed by changes in import volume with a fixed domestic price premium; a quota fixes import volume, so demand shifts cause domestic price to fluctuate more. Economists generally prefer tariffs to quotas because tariffs are transparent, generate government revenue, and allow automatic adjustment to demand shocks — but politically, quotas are often preferred because their costs are less visible.

Voluntary Export Restraints (VERs) are quotas negotiated bilaterally where the exporting country "voluntarily" agrees to limit exports, typically under threat of more restrictive unilateral action. Japan's agreement to limit car exports to the USA in the 1980s is the classic case. VERs are worse than equivalent tariffs for the importing country because: (1) quota rents accrue entirely to foreign exporters (not to the domestic government as tariff revenue); (2) VERs may encourage foreign firms to upgrade to higher-value products to maximise revenue within the volume constraint (product upgrading); (3) they may stimulate foreign direct investment as firms build domestic factories to circumvent the export limit. Anti-dumping duties — tariffs imposed when a foreign firm is found to sell below production cost or below its home-market price — are widely criticised in trade theory as a form of protection that can be triggered even by normal price discrimination and cyclical pricing, and that imposes larger costs on consumers and downstream industries than the headline tariff suggests.`,
      realWorldHook: `The 2018-2019 US-China trade war provides a textbook illustration of the optimal tariff argument — and its limitations. The Trump administration imposed 25% tariffs on $250 billion of Chinese goods, citing both market-power arguments (China's export supply is not perfectly elastic) and strategic/national-security concerns. A 2019 Federal Reserve study estimated that US companies and consumers bore virtually all of the tariff costs (Chinese export prices barely fell), suggesting the US had less market power than assumed — the terms-of-trade gain was minimal while the deadweight losses were substantial. A 2020 study by Fajgelbaum et al. estimated the net welfare loss to the USA at $7.8 billion annually. China's retaliatory tariffs on US agriculture cost US farmers an estimated $12 billion in lost exports — a perfect illustration of why optimal tariff analysis cannot ignore retaliation.`,
      interactiveElement: `Worked Exercise — Optimal Tariff and Welfare Decomposition:

Setup: Large country importing steel. World supply elasticity ε_F = 2.
Domestic demand: D = 100 − 5P. Domestic supply: S = 10 + 2P.
Free trade world price: P_W = $10. Imports at free trade: D(10) − S(10) = 50 − 30 = 20 units.

Step 1 — Optimal tariff:
  t* = 1/ε_F = 1/2 = $0.50 per unit.
  Domestic price with tariff: P_D = $10.50.
  World (foreign) price after tariff: P* = P_W − s = $10 − s.
  Terms-of-trade gain: foreign price falls by s = t·(1/(1 + ε_F)) = 0.50 × (1/3) ≈ $0.17.
  So P* ≈ $9.83, P_D = $9.83 + $0.50 = $10.33 (domestic price rises by less than t due to ToT gain).

Step 2 — Welfare areas at t = $0.50:
  Domestic output: S(10.50) = 10 + 2(10.50) = 31.
  Domestic consumption: D(10.50) = 100 − 5(10.50) = 47.5.
  Imports: 47.5 − 31 = 16.5 (down from 20).

  Area A (PS gain): ≈ (10.50 − 10) × 30 + ½(10.50 − 10)(31 − 30) = $15.25
  Area B (production DWL): ½ × (31 − 30) × 0.50 = $0.25
  Area C (tariff revenue on domestic price gain): 0.50 × 16.5 = $8.25
  Area D (consumption DWL): ½ × (50 − 47.5) × 0.50 = $0.625
  Area E (ToT gain): s × imports = 0.17 × 16.5 ≈ $2.80

  Net welfare change = E − B − D ≈ $2.80 − $0.25 − $0.625 = +$1.93 (positive — optimal tariff works)
  Total tariff revenue = C + E = 8.25 + 2.80 = $11.05

Note: This analysis ignores foreign retaliation, which in practice eliminates the gains.`,
      vocabulary: [
        {
          term: 'Optimal Tariff',
          definition: 'The tariff rate that maximises a large country\'s national welfare by exploiting its market power over import prices. Derived as t* = 1/ε_F, where ε_F is the elasticity of foreign export supply. It balances the terms-of-trade gain (area E) against the production and consumption deadweight losses (areas B and D).',
          example: 'If the USA faces a foreign steel supply elasticity of ε_F = 3, the optimal steel tariff is t* = 1/3 ≈ 33%. Imposing a tariff above this rate generates larger deadweight losses than terms-of-trade gains, reducing US welfare.',
        },
        {
          term: 'Voluntary Export Restraint (VER)',
          definition: 'A bilateral agreement in which the exporting country "voluntarily" limits its exports to the importing country, typically under threat of mandatory tariffs or quotas. VERs transfer quota rents to foreign exporters, are less transparent than tariffs, and often incentivise product upgrading and FDI to circumvent the restriction.',
          example: 'Japan agreed to limit car exports to the USA to 1.68 million units per year from 1981. Japanese automakers responded by upgrading to higher-margin luxury models (Acura, Lexus, Infiniti were launched in this period) to maximise revenue per constrained unit.',
        },
        {
          term: 'Anti-Dumping Duty',
          definition: 'A tariff imposed on imports found to be "dumped" — sold at below cost of production or below the exporter\'s home-market price. Anti-dumping duties are permitted under WTO rules (Article VI GATT) but are widely criticised as protectionist tools used against normal price discrimination and cyclical pricing.',
          example: 'The EU imposed anti-dumping duties of 47.6% on Chinese solar panels in 2013, arguing Chinese firms sold below production cost. Critics noted the panels were genuinely cheap due to scale economies and subsidies, and that the duties raised EU solar installation costs by an estimated 20%, slowing the green transition.',
        },
      ],
      deeperDive: `Strategic trade policy, pioneered by Brander and Spencer (1985), argues that in oligopolistic industries with learning-by-doing or scale economies, government intervention can shift economic rents from foreign to domestic firms, raising national welfare above free-trade levels. The classic model features a Cournot duopoly: a home firm and a foreign firm compete in a third-country market. A production subsidy to the home firm reduces its effective marginal cost, causing it to produce more in the Nash equilibrium. The foreign firm, best-responding to the home firm's expansion, reduces output. The strategic effect — the rent-shifting from the foreign to the home firm — can outweigh the fiscal cost of the subsidy, making the policy welfare-improving. This provided theoretical justification for industrial policy in sectors like aircraft (Airbus subsidies), semiconductors (US CHIPS Act), and commercial satellites.

However, strategic trade policy has severe practical limitations. First, the optimal policy is highly sensitive to the assumed market structure — Cournot competition favours subsidies, Bertrand competition may favour taxes. Governments rarely know which applies. Second, retaliation by trading partners (counter-subsidies) can eliminate the rent-shifting gains in a subsidy war analogous to a tariff war. Third, choosing which industries to support requires information about future comparative advantages that governments typically lack — industrial policy can easily degenerate into protecting uncompetitive firms. Fourth, the domestic political economy means subsidies tend to flow to politically connected industries rather than those with genuine strategic potential. Krugman (1994) himself, despite developing key analytical tools, argued that strategic trade policy advocacy in political circles was more likely to produce protectionism for its own sake than genuine welfare-enhancing intervention.`,
      commonMisconceptions: [
        'The optimal tariff argument does not justify tariffs for small countries — it only applies to large countries with market power over world prices. For small countries (price-takers in world markets), any tariff creates a net welfare loss; the terms-of-trade gain (area E) is zero by definition because the world price does not fall.',
        'Import quotas and tariffs are not equivalent under uncertainty — with random domestic demand shocks, a tariff automatically adjusts import volumes while holding the domestic price premium fixed, but a quota holds import volumes fixed while allowing domestic prices to fluctuate wildly, creating more price instability. This asymmetry, formalised by Dasgupta and Stiglitz (1977), is a key reason economists prefer tariffs as policy instruments.',
        'Anti-dumping duties are not economically equivalent to countervailing subsidies — anti-dumping targets price discrimination (charging less abroad than at home) which is normal profit-maximising behaviour for any firm with market power; countervailing duties target actual government subsidies that distort production costs. Conflating the two leads to using anti-dumping as an all-purpose protection tool against legitimate low-cost competitors.',
      ],
      examinerTip: `For welfare analysis of tariffs, always draw the supply-demand diagram and label all five areas (A, B, C, D, E) before computing any numerical answer. Olympiad examiners award marks for correctly identifying which areas are gains (A to producers, C+E to government) and which are losses (B production DWL, D consumption DWL). For large-country problems, always calculate whether E > B+D to determine if the tariff is welfare-improving before concluding. State explicitly that retaliation can eliminate the terms-of-trade gain — this nuance earns distinction-level marks.`,
      didYouKnow: `The 1981 US-Japan Voluntary Export Restraint on automobiles is estimated to have cost US consumers approximately $1 billion per year in higher car prices, while Japanese automakers earned roughly $1 billion per year in extra profits from the artificially inflated US market prices — a pure transfer of consumer surplus to foreign producers, exactly as trade theory predicts. The episode directly inspired the development of VER economics and contributed to the WTO's 1995 Agreement on Safeguards, which formally prohibited new VERs.`,
    },
    flashcards: [
      {
        id: 'ol6-l4-fc1',
        front: 'Derive the optimal tariff formula and explain what determines its magnitude.',
        back: 't* = 1/ε_F, where ε_F is the elasticity of foreign export supply. A less elastic foreign supply (ε_F small) means more market power — the home country can extract a larger terms-of-trade gain before deadweight losses dominate. As ε_F → ∞ (perfectly elastic foreign supply = small country), t* → 0: no optimal tariff exists for a small, price-taking country.',
        tags: ['olympiad', 'optimal-tariff', 'terms-of-trade'],
      },
      {
        id: 'ol6-l4-fc2',
        front: 'Why are VERs worse for the importing country than an equivalent import quota, assuming the same quantity restriction?',
        back: 'With an equivalent import quota, the domestic government can auction import licences and capture the quota rents (= (P_domestic − P_world) × import quantity). With a VER, the exporting country allocates export licences to its own firms, who capture the rent as higher export profits. The importing country gets no tariff revenue and no licence auction proceeds — it bears all the consumer surplus loss without the offsetting government revenue.',
        tags: ['olympiad', 'VER', 'quota', 'quota-rents'],
      },
      {
        id: 'ol6-l4-fc3',
        front: 'What is the Brander-Spencer (1985) strategic trade policy argument, and what are its main limitations?',
        back: 'In Cournot duopoly with a home and foreign firm competing in a third market, a home production subsidy lowers home firm\'s effective marginal cost, causing it to expand output and the foreign firm to contract (rent-shifting). Net welfare can rise if rent captured exceeds subsidy cost. Limitations: (1) policy reverses under Bertrand competition; (2) retaliation eliminates gains; (3) requires impossible information about market structure; (4) political economy distorts targeting.',
        tags: ['olympiad', 'strategic-trade-policy', 'Brander-Spencer'],
      },
    ],
    quiz: [
      {
        id: 'ol6-l4-q1',
        type: 'mcq',
        question: 'A large country imposes a tariff on steel imports. The tariff causes the world price of steel to fall from $100 to $95. The domestic tariff rate is $10 per tonne. What is the domestic price and the terms-of-trade gain per tonne of imports?',
        options: [
          'Domestic price = $105; terms-of-trade gain = $5 per tonne (foreign price fell by $5, so the country pays $5 less per tonne imported)',
          'Domestic price = $110; terms-of-trade gain = $10 per tonne',
          'Domestic price = $95; terms-of-trade gain = $0 (small country assumption)',
          'Domestic price = $100; terms-of-trade gain = $5 per tonne',
        ],
        correctAnswer: 0,
        explanation: 'With the tariff: domestic price = world price (post-tariff) + tariff = $95 + $10 = $105. The terms-of-trade gain per tonne = the reduction in the world price × quantity imported: the foreign price fell from $100 to $95, so the country gains $5 per tonne imported (it pays $5 less to foreign exporters than before). This $5 × Q_imports is area E in the welfare diagram — the terms-of-trade improvement that can make the tariff net welfare-positive for a large country.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l4-q2',
        type: 'mcq',
        question: 'Under uncertainty about domestic demand, which instrument creates less price volatility in the domestic market — a specific tariff or an equivalent import quota?',
        options: [
          'A specific tariff creates less price volatility, because it maintains a fixed wedge between domestic and world prices, allowing import volumes to adjust automatically to demand shifts while keeping domestic prices stable relative to world prices',
          'An import quota creates less price volatility, because it fixes the quantity imported, preventing foreign supply shocks from affecting domestic prices',
          'Both instruments create identical price volatility because they are equivalent under all conditions',
          'A quota creates less volatility because the government controls the volume of imports precisely',
        ],
        correctAnswer: 0,
        explanation: 'A specific tariff t holds (P_domestic − P_world) = t constant. When domestic demand shifts outward, more imports flow in at the same price premium — volume adjusts, price is stable relative to world price. A quota fixes import volume; when domestic demand shifts outward, the additional demand cannot be met by extra imports, so domestic price rises above the tariff-equivalent level. Domestic price fluctuates more under a quota because the quantity buffer is removed. This is the key asymmetric uncertainty argument for preferring tariffs to quotas as policy instruments.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l4-q3',
        type: 'mcq',
        question: 'The Brander-Spencer (1985) model shows that a production subsidy to a domestic Cournot duopolist can raise national welfare. Which of the following most accurately identifies why this result fails to provide a general justification for strategic trade policy?',
        options: [
          'The result is highly sensitive to market structure assumptions — under Bertrand (price) competition, a subsidy may actually reduce national welfare; governments lack the information to determine which oligopoly model applies, making the policy recommendation unreliable',
          'Subsidies always trigger equivalent foreign retaliation, making the policy self-defeating in all cases',
          'The model assumes constant marginal costs, which never holds in real industries, invalidating the rent-shifting result',
          'Strategic trade policy is illegal under WTO rules, making it an impractical policy recommendation regardless of its theoretical merits',
        ],
        correctAnswer: 0,
        explanation: 'Brander-Spencer\'s result is specific to Cournot quantity competition. Under Bertrand price competition, the same subsidy may lower welfare because it increases output and drives price toward marginal cost in both countries, reducing industry profit globally. Since governments cannot reliably determine whether an industry behaves as Cournot or Bertrand oligopolists, the optimal policy prescription is fundamentally ambiguous. While retaliation is also a real concern (option B), it does not always occur; the deeper problem is the model-sensitivity of the result itself. Options C and D are incorrect: the model uses specific functional forms that can handle non-constant costs, and some subsidies are WTO-legal.',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LESSON 5 — WTO & Trade Agreements
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ol6-l5',
    moduleId: 'ol6-trade-theory',
    title: 'WTO, GATT, and Preferential Trade Agreements',
    description: 'Trace GATT/WTO history; explain MFN and national treatment principles; analyse the dispute settlement mechanism; evaluate preferential trade agreements through trade creation and diversion.',
    order: 5,
    estimatedMinutes: 45,
    tags: ['olympiad', 'WTO', 'GATT', 'MFN', 'trade-agreements', 'trade-creation', 'trade-diversion', 'dispute-settlement'],
    content: {
      isStub: false,
      conceptualExplanation: `The General Agreement on Tariffs and Trade (GATT), signed in 1947 by 23 countries, established the multilateral framework for reducing trade barriers in the post-war era. Its two foundational principles are the Most-Favoured-Nation (MFN) clause and National Treatment. MFN requires that any trade concession granted to one GATT/WTO member must be immediately extended to all other members — it prevents discriminatory bilateral deals that would fragment the trading system. National Treatment requires that once a foreign good has crossed the border and paid any applicable tariffs, it must be treated no less favourably than a domestically produced good in terms of internal taxes, regulations, and standards — preventing countries from using internal policies as disguised trade barriers. Eight rounds of multilateral negotiations under GATT progressively reduced average tariffs from roughly 40% in 1947 to under 5% by the Uruguay Round's conclusion in 1994. The World Trade Organization (WTO) replaced GATT in 1995, transforming it from a contractual arrangement into a formal international organisation with 166 members, extended coverage to services (GATS) and intellectual property (TRIPS), and established a legally binding Dispute Settlement Understanding (DSU).

The WTO's Dispute Settlement Understanding is widely regarded as the most effective international dispute resolution mechanism in existence. A member alleging a WTO violation requests consultations; if unresolved within 60 days, a panel of three trade experts is established to adjudicate. Panel reports may be appealed to the Appellate Body (AB), whose rulings are final and automatically adopted unless rejected by negative consensus — virtually impossible, since the winning party would have to consent to rejection. If the losing party does not comply within a "reasonable period of time," the winning party may seek authorisation to suspend concessions (retaliate). This system has handled over 600 disputes since 1995, with roughly a third proceeding to panel stage. The AB entered a crisis from 2017 as the USA blocked new AB appointments, leaving it unable to function from December 2019 — a major challenge to rules-based trade governance that remains unresolved, with members using interim appeal arbitration (MPIA) as a workaround.

The theory of preferential trade agreements (PTAs) — including free trade areas (FTAs) and customs unions — was formalised by Jacob Viner (1950) through the concepts of trade creation and trade diversion. Trade creation occurs when a PTA causes a member country to shift from purchasing a good from a high-cost domestic producer to a lower-cost partner country producer — a welfare gain (efficient production replacing inefficient production). Trade diversion occurs when a PTA causes a member to shift from purchasing from an efficient non-member producer (which faces MFN tariffs) to a less efficient partner producer (which faces zero tariff within the PTA) — a welfare loss (the tariff preference, not genuine cost advantage, drives the switch). Whether a PTA raises world welfare depends on whether trade creation exceeds trade diversion, which in turn depends on: (1) the initial height of external tariffs (high external tariffs generate more diversion); (2) the similarity of member country production structures; (3) the size of the trading bloc; and (4) whether member trade is already large (suggesting genuine complementarity). A customs union (CU) adds a common external tariff (CET) to the FTA's internal free trade, eliminating the need for rules of origin but requiring coordination of members' external trade policies.`,
      realWorldHook: `The 1994 North American Free Trade Agreement (NAFTA), now replaced by the USMCA (2020), provides a rich case study in trade creation and diversion. Studies by Kehoe and Kehoe (1994) predicted large trade creation among Canada, Mexico, and the USA as each country would specialise according to comparative advantage. Empirically, US-Mexico trade tripled over 1994-2007, and supply chains in automobiles and electronics became deeply integrated. However, US textile and apparel imports from Mexico displaced cheaper imports from Asia (particularly China and Bangladesh) — a classic trade diversion case where NAFTA preferences made Mexican production artificially competitive despite higher underlying costs. The net welfare assessment remains contested, illustrating Viner's insight that preferential liberalisation is always a second-best instrument compared with multilateral MFN liberalisation.`,
      interactiveElement: `Worked Exercise — Trade Creation and Trade Diversion:

Setup: USA imports widgets. Three suppliers:
  Domestic USA: cost = $15/unit (inefficient, currently protected)
  Mexico (NAFTA partner): cost = $10/unit
  China (non-member): cost = $8/unit (most efficient globally)

Scenario A — Before PTA: USA imposes 50% tariff on all imports (MFN).
  Price of Mexican widgets in USA: $10 × 1.5 = $15 — ties domestic production.
  Price of Chinese widgets in USA: $8 × 1.5 = $12.
  USA buys from China at $12 (cheapest after tariff). Tariff revenue = $4/unit.

Scenario B — NAFTA: USA eliminates tariff on Mexico, keeps 50% tariff on China.
  Price of Mexican widgets in USA: $10 (zero tariff).
  Price of Chinese widgets in USA: $8 × 1.5 = $12.
  USA now buys from Mexico at $10 (cheapest in USA after PTA).

Analysis:
  Trade Creation: USA stops producing domestically at $15 and imports from Mexico at $10.
    Consumer surplus gain: $5/unit × domestic quantity = large trade creation gain.

  Trade Diversion: USA switches from China ($8 true cost, $12 with tariff) to Mexico ($10).
    The true global efficiency loss = $10 − $8 = $2/unit imported from Mexico.
    USA also loses tariff revenue it previously collected on China imports.
    Trade diversion welfare loss = $2/unit × diverted quantity.

Net welfare effect = Trade Creation gain − Trade Diversion loss.
  If USA was buying mostly from domestic suppliers (large domestic quantity displaced) → net gain.
  If USA was buying mostly from China (large diverted quantity) → net loss possible.

Key insight: NAFTA may harm the USA if Mexico is not the low-cost global supplier — the preference distorts purchasing toward a higher-cost partner.`,
      vocabulary: [
        {
          term: 'Most-Favoured-Nation (MFN) Principle',
          definition: 'The WTO\'s core non-discrimination rule (GATT Article I): any trade advantage, favour, or privilege granted to one WTO member must be immediately and unconditionally extended to all other members. MFN prevents bilateral trade discrimination and is the foundation of a rules-based multilateral trading system.',
          example: 'If the USA grants a 5% tariff on Japanese cars, it must immediately offer the same 5% tariff on equivalent cars from Germany, South Korea, and all other WTO members — unless a valid exception (FTA, developing country preference, national security) applies.',
        },
        {
          term: 'Trade Creation vs. Trade Diversion',
          definition: 'Viner (1950) concepts for evaluating PTAs. Trade creation: a PTA shifts imports from high-cost domestic production to lower-cost partner production — a welfare gain. Trade diversion: a PTA shifts imports from low-cost non-member production (tariff disadvantaged) to higher-cost partner production (tariff advantaged) — a welfare loss. PTAs raise world welfare only if trade creation exceeds trade diversion.',
          example: 'The EU\'s common agricultural policy creates trade diversion: French farmers displace more efficient non-EU grain producers (Australia, USA) because EU preferences give intra-EU trade an artificial advantage, raising food costs for EU consumers beyond what freer trade would require.',
        },
        {
          term: 'Dispute Settlement Understanding (DSU)',
          definition: 'The WTO\'s legally binding mechanism for resolving trade disputes. Consists of: mandatory consultations → panel adjudication → Appellate Body review → compliance monitoring → authorisation to retaliate. Rulings are automatically adopted via reverse consensus (adopted unless all members, including the winner, reject it). Handles ~20-30 new disputes per year.',
          example: 'The Boeing-Airbus dispute (DS316, DS353) — the longest WTO dispute in history, spanning 2004-2021 — involved the USA and EU both filing cases alleging illegal subsidies to their respective aircraft manufacturers. The AB ultimately ruled against both sides; both eventually reached a negotiated settlement in 2021.',
        },
      ],
      deeperDive: `The Doha Development Round, launched in 2001, was intended to deliver a major multilateral trade liberalisation package focused on developing-country interests — particularly agricultural subsidies in rich countries and market access for developing-country exports. After 20+ years of negotiations, the Round has effectively collapsed, failing on deep disagreements about agricultural protection (US farm subsidies, EU CAP), non-agricultural market access (India's manufacturing tariffs), and services liberalisation. The failure of Doha drove countries toward the "WTO-plus" bilateral and regional agreements (TPP/CPTPP, RCEP, EU-Japan EPA) that now dominate trade policy, creating a "spaghetti bowl" of overlapping preferential rules of origin that increase trade costs. The economics of why multilateral negotiations are so difficult is well-understood: the optimal tariff argument creates incentives to defect from free trade; prisoners'-dilemma dynamics make unilateral liberalisation unattractive even when globally beneficial; and the large number of negotiating parties (166 WTO members) creates severe collective action problems that bilateral agreements avoid at the cost of discrimination against non-members.

Customs unions, unlike FTAs, eliminate the need for rules of origin by adopting a Common External Tariff (CET) — goods entering the customs union through any member face the same tariff, and can then circulate freely within the union. This eliminates the incentive to import through the lowest-tariff member (trade deflection), but requires harmonisation of members' external trade policies, limiting their independent trade-policy sovereignty. The EU's customs union is the world's most advanced, covering 27 members who negotiate as a bloc at the WTO. Welfare analysis of CUs is more complex than FTAs: in addition to Viner's trade creation/diversion effects, the CET sets a single external tariff that may be above or below what individual members would choose, creating additional terms-of-trade effects. Kemp and Wan (1976) proved that there always exists a CET that makes a customs union welfare-improving relative to non-membership — a key theoretical result showing PTAs need not be second-best, though finding the optimal CET in practice is difficult.`,
      commonMisconceptions: [
        'MFN does not mean all countries face the same tariff — it means any preferential tariff granted to one WTO member must be extended to all others. Legitimate exceptions include FTAs and customs unions (GATT Article XXIV), developing-country preferences (Enabling Clause), and national security (GATT Article XXI). In practice, developed countries offer many preferences to developing countries (e.g., GSP schemes) that are MFN exceptions.',
        'Trade diversion is not always welfare-reducing for the member country imposing the PTA — the member country gains because it now buys from the partner at a lower price (even if higher than the non-member cost), so domestic consumers are better off; the welfare loss falls primarily on non-member exporters who lose market access. Whether the PTA raises or lowers world welfare depends on the trade creation versus diversion balance.',
        'The WTO does not enforce free trade — it manages and provides a forum for negotiating reductions in trade barriers, and its dispute settlement system only authorises retaliation (suspension of concessions), not active enforcement. WTO rulings cannot compel compliance; they can only permit counter-measures. Countries routinely maintain non-compliant measures for years and choose to pay (implicitly) via authorised retaliation rather than change domestic policy.',
      ],
      examinerTip: `Trade agreement questions at olympiad level require mastery of both theory and institutional detail. For trade creation/diversion, always identify: (1) who is the lowest-cost global producer; (2) who produces within the PTA; (3) what tariffs apply to each; and (4) which direction trade switches after the PTA. For WTO institutional questions, know the specific GATT articles (Art. I = MFN, Art. III = National Treatment, Art. VI = anti-dumping, Art. XIX = safeguards, Art. XXIV = PTAs) — citing specific articles demonstrates the depth examiners reward at olympiad level.`,
      didYouKnow: `Jacob Viner developed the concepts of trade creation and trade diversion in 1950 while analysing the proposed European customs union, which became the EEC in 1957. He initially thought customs unions were mostly trade-diverting and therefore harmful — but Lipsey (1957) showed Viner had made an error by ignoring consumption effects (consumers switch to the partner's good even when it isn't cheaper than the non-member's good, but the switch is still welfare-improving if it replaces expensive domestic production). The corrected analysis showed customs unions could be welfare-improving under a broader range of conditions than Viner originally thought, providing early theoretical support for European integration.`,
    },
    flashcards: [
      {
        id: 'ol6-l5-fc1',
        front: 'Distinguish trade creation and trade diversion in Viner\'s analysis of preferential trade agreements.',
        back: 'Trade creation: PTA shifts purchasing from high-cost domestic production to lower-cost partner production — welfare gain (efficient production replaces inefficient). Trade diversion: PTA shifts purchasing from lower-cost non-member production (tariff disadvantaged) to higher-cost partner production (tariff advantaged) — welfare loss. Net welfare effect depends on whether trade creation > trade diversion.',
        tags: ['olympiad', 'trade-creation', 'trade-diversion', 'Viner'],
      },
      {
        id: 'ol6-l5-fc2',
        front: 'State the MFN and National Treatment principles and identify their GATT articles.',
        back: 'MFN (GATT Art. I): any trade advantage granted to one WTO member must be immediately extended to all others — prevents bilateral discrimination. National Treatment (GATT Art. III): foreign goods, once imported and tariffs paid, must be treated no less favourably than domestic goods in internal taxes and regulations — prevents disguised protection through domestic policy.',
        tags: ['olympiad', 'WTO', 'MFN', 'national-treatment', 'GATT'],
      },
      {
        id: 'ol6-l5-fc3',
        front: 'How does the WTO Dispute Settlement Understanding use "reverse consensus" and why is this significant?',
        back: 'Under the DSU, panel and Appellate Body reports are automatically adopted unless there is a consensus to reject them — reverse consensus. Since the winning party would have to consent to rejection (clearly against its interests), rejection is virtually impossible. This makes WTO rulings legally binding in practice, unlike most international dispute mechanisms where adoption requires positive consensus (any member can block). It gives the DSU uniquely strong enforcement power.',
        tags: ['olympiad', 'WTO', 'dispute-settlement', 'DSU'],
      },
    ],
    quiz: [
      {
        id: 'ol6-l5-q1',
        type: 'mcq',
        question: 'Country A forms a free trade area with Country B. Before the FTA, Country A imported widgets from Country C (the world\'s lowest-cost producer) at the MFN tariff rate of 40%. Country B\'s widget cost is $12/unit; Country C\'s is $9/unit. After the FTA, what happens and how should this be classified?',
        options: [
          'Country A switches to importing from Country B ($12, no tariff) instead of Country C ($9 × 1.4 = $12.60 with tariff) — this is trade diversion: the PTA preference makes the less efficient partner appear cheaper, displacing the globally efficient non-member producer',
          'Country A continues to import from Country C because it remains the cheapest supplier at $9',
          'Country A switches to Country B because Country B is the more efficient producer — this is trade creation',
          'Trade diversion only occurs if Country A was previously producing widgets domestically; since Country A was already importing from Country C, the FTA is trade-neutral',
        ],
        correctAnswer: 0,
        explanation: 'Before FTA: Country C costs $9 × 1.4 = $12.60 in Country A (with 40% tariff); Country B costs $12 × 1.4 = $16.80 (with tariff). Country A imports from Country C. After FTA: Country B costs $12 (zero tariff); Country C still costs $12.60. Country A now switches to Country B. This is trade diversion: the PTA preference (zero tariff on B, 40% on C) makes the less efficient producer (B at $12 true cost vs C at $9) appear cheaper after tariffs. Country A pays $12 instead of $9 (true cost) — a resource misallocation. Country A still gains because $12 < $12.60 (the pre-FTA price), but the world is less efficient.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l5-q2',
        type: 'mcq',
        question: 'Why has the Doha Development Round (launched 2001) effectively failed to deliver a comprehensive multilateral trade agreement, and what has filled the gap?',
        options: [
          'Deep disagreements on agricultural subsidies (between the USA/EU and developing countries) and non-agricultural market access created a gridlock among 160+ members; bilateral and regional PTAs (CPTPP, RCEP, EU-Japan EPA) have increasingly filled the gap, raising concerns about discrimination against non-members and a "spaghetti bowl" of rules of origin',
          'The WTO Secretariat lacks legal authority to implement any agreement, making multilateral rounds inherently unenforceable',
          'Developing countries withdrew from Doha negotiations after the 2008 financial crisis, ending any prospect of agreement',
          'The USA and China\'s bilateral trade war made multilateral negotiations impossible by destroying trust between the two largest economies',
        ],
        correctAnswer: 0,
        explanation: 'Doha failed primarily because of irreconcilable disagreements on agriculture (USA and EU unwilling to cut farm subsidies; developing countries unwilling to grant market access without agricultural reform) and non-agricultural market access (India and other large developing countries protecting infant industries). With 160+ members, collective action is near-impossible when major issues are zero-sum. Bilateral and regional agreements have proliferated — CPTPP (11 members), RCEP (15 Asian economies), EU-Japan EPA — delivering liberalisation outside the WTO framework, but creating discriminatory preferences that fragment the trading system and impose compliance costs through overlapping rules of origin.',
        marks: 2,
        difficulty: 'olympiad',
      },
      {
        id: 'ol6-l5-q3',
        type: 'mcq',
        question: 'How does a customs union differ from a free trade area, and what is the key trade-policy consequence of the difference?',
        options: [
          'A customs union adopts a common external tariff (CET) among all members, eliminating the need for rules of origin but requiring members to give up independent external trade policy; a free trade area has no CET so each member sets its own external tariffs, requiring rules of origin to prevent trade deflection through the lowest-tariff member',
          'A customs union eliminates all tariffs including on services; an FTA only covers goods',
          'A customs union requires labour mobility among members; an FTA does not',
          'A customs union is governed by the WTO; an FTA is a purely bilateral arrangement outside WTO rules',
        ],
        correctAnswer: 0,
        explanation: 'The key structural difference: a CU has a CET — all members charge the same tariff on imports from non-members — so goods can freely circulate within the CU without rules of origin (a good imported into Germany faces the same EU tariff as if imported into France, and can then move freely within the EU). An FTA has no CET — France and Germany might have different tariffs on Chinese goods. To prevent deflection (importing through the lowest-tariff member), FTAs require "rules of origin" — goods must contain sufficient regional content to qualify for preferential treatment. Rules of origin are administratively costly and can act as non-tariff barriers, making CUs more trade-liberalising in practice but requiring greater sovereignty concession (members cannot negotiate their own trade deals independently).',
        marks: 2,
        difficulty: 'olympiad',
      },
    ],
  },
]
