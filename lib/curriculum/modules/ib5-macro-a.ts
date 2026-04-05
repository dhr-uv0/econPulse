import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'ib5-macro-a',
  title: 'IB Macro A — Measuring the National Economy',
  description: 'GDP, business cycles, unemployment, inflation, and macroeconomic objectives for IB Paper 1 and Paper 2.',
  tier: 'IB' as const,
  track: 'IB_SL' as const,
  unit: 5,
  estimatedHours: 4,
  color: '#8b5cf6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: Measuring GDP ──────────────────────────────────────────────────
  {
    id: 'ib5-l1',
    moduleId: 'ib5-macro-a',
    title: 'Measuring GDP',
    description: 'Understand the expenditure approach to measuring GDP, the distinction between nominal and real GDP, GDP per capita, and the limitations of GDP as a welfare measure.',
    order: 1,
    estimatedMinutes: 40,
    tags: ['GDP', 'national income', 'expenditure approach', 'real vs nominal', 'IB macro'],
    content: {
      conceptualExplanation: `Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country's borders in a given time period — typically one year or one quarter. The expenditure approach, the most common method taught in IB Economics, calculates GDP by summing four components: Consumption (C), Investment (I), Government spending (G), and Net Exports (X − M). The formula GDP = C + I + G + (X − M) captures the total spending on an economy's output, where C represents household spending on goods and services, I covers business spending on capital goods and residential construction, G is government expenditure on public goods and services (excluding transfer payments), and (X − M) is exports minus imports, also called net exports or the trade balance.

Nominal GDP measures output using current prices, which means it can rise simply because prices have increased — not because more goods and services were produced. Real GDP corrects for this by using a base-year price level, effectively stripping out the effect of inflation. When economists talk about economic growth, they almost always mean growth in real GDP. GDP per capita divides real (or nominal) GDP by the total population, giving a rough estimate of average living standards and allowing fairer comparisons across countries of different sizes. A country with a large total GDP but an equally large population may have a lower standard of living than a smaller, wealthier nation.

Despite its widespread use, GDP has significant limitations as a measure of economic welfare. It ignores the distribution of income — a country could have high GDP while most citizens remain poor. It excludes non-market activities such as unpaid domestic work, volunteering, and the informal economy. It does not account for environmental degradation or resource depletion; a nation that clears its forests raises GDP in the short run but destroys long-run productive capacity. Finally, GDP says nothing about the quality of life dimensions captured by alternative measures such as the Human Development Index (HDI), the Genuine Progress Indicator (GPI), or Bhutan's Gross National Happiness index.`,

      realWorldHook: `In 2024, the International Monetary Fund ranked the United States first globally by nominal GDP (approximately $28 trillion) yet the U.S. ranked only around 10th in GDP per capita when compared to smaller, wealthier nations like Luxembourg and Singapore. Meanwhile, countries such as Costa Rica consistently score higher than the U.S. on the Happy Planet Index despite far lower GDP figures — illustrating vividly that GDP captures economic size and average output, but is an imperfect proxy for well-being, sustainability, or equality.`,

      interactiveElement: `Build a GDP table: Create a two-column table with the heading "GDP = C + I + G + (X − M)." In the first column list each component; in the second column assign a hypothetical dollar value (e.g., C = $12 trillion, I = $4 trillion, G = $3.5 trillion, X = $3 trillion, M = $3.2 trillion). Calculate total GDP. Now suppose all prices rise by 10% next year but quantities stay the same — recalculate nominal GDP and contrast it with real GDP (which stays the same). This exercise shows precisely why nominal GDP overstates actual output growth during inflationary periods.`,

      vocabulary: [
        {
          term: 'Gross Domestic Product (GDP)',
          definition: 'The total market value of all final goods and services produced within a country\'s borders during a specific time period.',
          example: 'If a Japanese-owned car factory in the United States produces vehicles, the output counts toward U.S. GDP, not Japan\'s GDP.',
        },
        {
          term: 'Real GDP',
          definition: 'GDP adjusted for changes in the price level using a base year, so that growth reflects changes in actual output rather than inflation.',
          example: 'If nominal GDP rose from $20 trillion to $22 trillion but the price level rose 10%, real GDP is unchanged at $20 trillion (in base-year prices).',
        },
        {
          term: 'GDP per Capita',
          definition: 'Real (or nominal) GDP divided by the total population, used as a rough measure of average living standards.',
          example: 'Norway\'s GDP per capita exceeds $80,000, making it one of the highest in the world, while India\'s is around $2,400 — even though India\'s total GDP is much larger.',
        },
      ],

      deeperDive: `At IB HL, students are expected to understand a second method of calculating GDP — the income approach — which sums all factor incomes (wages, rent, interest, and profit) earned in the production process. Theoretically, the expenditure approach and the income approach yield identical results because every dollar spent on output becomes a dollar of income for some factor of production. HL students should also be comfortable discussing the circular flow of income model in detail, including the roles of injections (investment, government spending, exports) and leakages (savings, taxes, imports) in determining equilibrium national income.

A crucial global comparison involves Purchasing Power Parity (PPP)-adjusted GDP. Because exchange rates do not perfectly reflect differences in price levels across countries, the IMF and World Bank publish GDP figures adjusted for PPP, which better reflects what a unit of currency can actually buy domestically. For example, China's GDP measured at market exchange rates is substantially smaller than the U.S. figure, but on a PPP basis China's economy is often reported as larger — because the renminbi buys significantly more within China than the exchange rate implies. IB examiners regularly set Paper 2 data-response questions around PPP-adjusted data, so students should be comfortable interpreting both nominal and PPP figures.`,

      commonMisconceptions: [
        'GDP includes all spending, including transfer payments like social security and unemployment benefits — in fact, government transfer payments are excluded from G because they do not represent purchases of newly produced goods or services.',
        'Higher nominal GDP always means a country is better off — in reality, if the price level rose faster than output, real GDP could be unchanged or even falling, so nominal GDP increases can be misleading.',
        'GDP per capita tells us how much the average person earns — GDP per capita is an average that hides income inequality; in a highly unequal economy, the median citizen may earn far less than the per-capita figure suggests.',
      ],

      examinerTip: `In Paper 2 data-response questions, always state whether a GDP figure you are referencing is nominal or real. Examiners award marks for this precision. When asked to "evaluate GDP as a measure of living standards," structure your answer with clear pros and cons, then conclude with a judgment — e.g., "Despite its utility as a measure of productive activity, GDP is an incomplete welfare indicator because it ignores distribution, environmental costs, and non-market production; composite measures like the HDI provide a more comprehensive picture."`,

      didYouKnow: `The concept of GDP was developed by economist Simon Kuznets for the U.S. Congress in 1934 during the Great Depression. Kuznets himself warned at the time that "the welfare of a nation can scarcely be inferred from a measurement of national income" — a caution economists are still repeating nearly a century later.`,

      prerequisiteRecap: `IB microeconomics covered how individual markets reach equilibrium through supply and demand, and how market structures such as monopolistic competition affect price and output; macroeconomics now zooms out to the whole economy, with GDP as the first tool for measuring total national output and comparing living standards across countries.`,
      recallQuestions: [
        {
          id: 'ib5-l1-recall-1',
          type: 'mcq' as const,
          question: 'In monopolistic competition, firms produce differentiated products. This market structure is relevant to GDP measurement because:',
          options: [
            'GDP counts the market value of all final goods and services produced, regardless of whether markets are competitive or monopolistic — differentiated products are included at the prices at which they are sold',
            'Only perfectly competitive industries contribute to GDP, so monopolistically competitive output is excluded',
            'Differentiated products are counted twice in GDP because they appear as both consumer goods and investment goods',
            'GDP only measures homogeneous commodities, which is why nominal and real GDP diverge',
          ],
          correctAnswer: 0,
          explanation: 'GDP uses market prices to value all final goods and services produced within a country\'s borders in a given period, regardless of the market structure of the industry. Whether a product is sold in a perfectly competitive or a monopolistically competitive market, its contribution to GDP is the price at which it is sold multiplied by the quantity produced.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],

      isStub: false,
    },
    flashcards: [
      {
        id: 'ib5-l1-fc1',
        front: 'State the expenditure approach formula for GDP.',
        back: 'GDP = C + I + G + (X − M), where C = Consumption, I = Investment, G = Government spending, and (X − M) = Net exports (exports minus imports).',
        tags: ['GDP', 'expenditure approach', 'formula'],
      },
      {
        id: 'ib5-l1-fc2',
        front: 'What is the difference between nominal GDP and real GDP?',
        back: 'Nominal GDP measures output at current prices; real GDP adjusts for inflation using a base-year price level, so it reflects actual changes in output rather than changes in prices.',
        tags: ['nominal GDP', 'real GDP', 'inflation adjustment'],
      },
      {
        id: 'ib5-l1-fc3',
        front: 'Give THREE limitations of GDP as a measure of economic welfare.',
        back: '1. Ignores income distribution (high GDP can coexist with severe inequality). 2. Excludes non-market production (unpaid domestic work, informal economy). 3. Does not account for environmental degradation or resource depletion.',
        tags: ['GDP limitations', 'welfare', 'HDI'],
      },
    ],
    quiz: [
      {
        id: 'ib5-l1-q1',
        type: 'mcq',
        question: 'A government increases spending on unemployment benefits by $50 billion. What is the effect on GDP calculated using the expenditure approach?',
        options: [
          'GDP is unchanged because transfer payments are not included in G.',
          'GDP rises by $50 billion because government spending increases.',
          'GDP falls by $50 billion because transfer payments are a leakage.',
          'GDP rises by more than $50 billion due to the multiplier effect on G.',
        ],
        correctAnswer: 0,
        explanation: 'Transfer payments such as unemployment benefits are excluded from the G component of GDP because they do not represent government purchases of newly produced goods or services — they simply redistribute existing income.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l1-q2',
        type: 'mcq',
        question: 'Country X has a nominal GDP of $500 billion this year, up from $450 billion last year. The GDP deflator rose from 100 to 110 over the same period. What happened to real GDP?',
        options: [
          'Real GDP rose from $450 billion to $454.5 billion.',
          'Real GDP rose from $450 billion to $500 billion.',
          'Real GDP fell from $450 billion to $440 billion.',
          'Real GDP is unchanged at $450 billion.',
        ],
        correctAnswer: 0,
        explanation: 'Real GDP = (Nominal GDP / GDP deflator) × 100 = ($500 billion / 110) × 100 ≈ $454.5 billion. This is a modest real increase compared to the $450 billion baseline, showing that much of the nominal growth was driven by rising prices.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l1-q3',
        type: 'mcq',
        question: 'Which of the following best explains why GDP per capita may overstate average living standards in a developing economy?',
        options: [
          'A high Gini coefficient means income is concentrated among a small wealthy elite, so most people earn far less than the per-capita average.',
          'GDP per capita uses nominal rather than real values, inflating the figure.',
          'Developing economies typically have higher price levels, making the figure appear larger in PPP terms.',
          'GDP per capita excludes government spending, understating public services available to citizens.',
        ],
        correctAnswer: 0,
        explanation: 'In highly unequal economies, a large share of national income accrues to a wealthy minority, pushing the average (per-capita) figure well above what most citizens actually receive. The Gini coefficient measures this inequality.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 2: Business Cycle & Output Gaps ───────────────────────────────────
  {
    id: 'ib5-l2',
    moduleId: 'ib5-macro-a',
    title: 'Business Cycle & Output Gaps',
    description: 'Analyse the phases of the business cycle, understand potential output, and distinguish between recessionary (deflationary) and inflationary output gaps.',
    order: 2,
    estimatedMinutes: 38,
    tags: ['business cycle', 'output gap', 'recession', 'potential output', 'IB macro'],
    content: {
      conceptualExplanation: `The business cycle describes the recurring pattern of expansion and contraction in economic activity over time. Plotted against a time axis, real GDP oscillates around a long-run trend called potential output (or full-employment output) — the level of real GDP an economy can sustain when all resources are used at their normal capacity. The cycle moves through four phases: expansion (rising real GDP, employment, and incomes), peak (the highest point before a downturn), contraction or recession (falling real GDP for at least two consecutive quarters, along with rising unemployment), and trough (the lowest point before recovery begins). After the trough, the economy enters a recovery phase where output begins growing again.

An output gap measures the difference between actual GDP and potential GDP. When actual GDP falls below potential, there is a recessionary gap (also called a deflationary gap in IB terminology): resources are under-utilised, unemployment is above the natural rate, and downward pressure on wages and prices tends to emerge. Expansionary fiscal or monetary policy is the typical policy response — governments may increase spending or cut taxes, and central banks may lower interest rates, to stimulate aggregate demand and close the gap. Conversely, when actual GDP exceeds potential — because demand is unusually strong and the economy is operating beyond normal capacity — there is an inflationary gap. Inflationary pressure builds, and contractionary policy (raising taxes, cutting spending, or hiking interest rates) is used to cool the economy.

Understanding output gaps matters because it tells policymakers where the economy is relative to its sustainable capacity. However, measuring potential output is notoriously difficult: economists use statistical filters and structural models to estimate it, and revisions are common. If a central bank wrongly believes the economy is at potential when it actually has spare capacity, it may tighten policy prematurely and worsen unemployment. Conversely, mistaking an inflationary gap for potential output can lead to excessive stimulus that fuels inflation — errors that have real consequences for millions of workers and businesses.`,

      realWorldHook: `The COVID-19 pandemic in 2020 produced the sharpest recessionary gap in modern history: U.S. real GDP contracted at an annualized rate of 31.4% in Q2 2020, and unemployment soared to nearly 15%. By contrast, the aggressive fiscal stimulus (including the $1.9 trillion American Rescue Plan in 2021) helped push actual GDP above estimated potential output by 2022, contributing to the highest U.S. inflation in 40 years — a textbook illustration of a policy-induced inflationary gap.`,

      interactiveElement: `Sketch a business cycle curve labelling: (1) peak, (2) trough, (3) recession phase, (4) recovery phase. Draw a horizontal dashed line representing potential output. On your diagram, shade the area where actual GDP is below potential and label it "recessionary/deflationary gap." Shade the area where actual GDP exceeds potential and label it "inflationary gap." Next to each shaded region, write one appropriate policy response — expansionary policy for the recessionary gap, contractionary policy for the inflationary gap.`,

      vocabulary: [
        {
          term: 'Potential Output',
          definition: 'The level of real GDP an economy can produce when all resources are employed at their normal (sustainable) rate of utilisation, consistent with stable inflation.',
          example: 'If an economy\'s potential output is $3 trillion but actual GDP is only $2.8 trillion, there is a $200 billion recessionary gap.',
        },
        {
          term: 'Recessionary (Deflationary) Gap',
          definition: 'The situation where actual real GDP is below potential output, leaving productive resources under-utilised and creating downward pressure on prices and wages.',
          example: 'During the 2008–09 financial crisis, most advanced economies operated with large recessionary gaps as unemployment surged and factories ran below capacity.',
        },
        {
          term: 'Inflationary Gap',
          definition: 'The situation where actual real GDP exceeds potential output, meaning resources are over-utilised, placing upward pressure on wages and the general price level.',
          example: 'In 2021–22 many economies experienced inflationary gaps as stimulus spending surged while supply chains were still disrupted, driving consumer price inflation sharply higher.',
        },
      ],

      deeperDive: `At IB HL, students encounter the Keynesian model, which distinguishes between short-run and long-run aggregate supply curves. In the Keynesian framework, the long-run aggregate supply (LRAS) curve is vertical at potential output, while the short-run aggregate supply (SRAS) curve is upward-sloping. A leftward shift in aggregate demand creates a recessionary gap along the SRAS, while a rightward shift beyond potential output creates an inflationary gap. HL students must also understand automatic stabilisers — mechanisms such as progressive taxation and unemployment benefits that automatically dampen the amplitude of the business cycle without requiring new policy decisions, reducing recessionary and inflationary gaps to some extent.

From a global comparative perspective, business cycles in emerging markets tend to be more volatile than those in advanced economies, partly because they are more exposed to commodity price swings and capital flow reversals. For instance, commodity-exporting nations like Brazil and Nigeria experience pronounced boom-bust cycles linked to oil or mineral prices. Additionally, economies that are highly open to trade (like Singapore or South Korea) are more susceptible to external demand shocks — a recession in a major trading partner can rapidly create a recessionary gap domestically, transmitted through falling export demand. This interdependence makes international coordination of macroeconomic policy increasingly important.`,

      commonMisconceptions: [
        'A recession means GDP is negative — technically, a recession is defined as two or more consecutive quarters of negative GDP growth (i.e., GDP declining), not a negative GDP level; GDP levels almost never become negative.',
        'Potential output is fixed and never changes — potential output grows over time as the economy accumulates capital, the labour force expands, and technology improves; it is a moving target, not a constant.',
        'An inflationary gap means prices are rising — it means the economy is producing beyond its sustainable capacity, which creates upward pressure on prices, but inflation may be slow to appear and depends on inflation expectations and wage dynamics.',
      ],

      examinerTip: `In diagram questions, always label the axes (Price Level on the vertical axis, Real GDP on the horizontal axis), draw and label the AD, SRAS, and LRAS curves, and explicitly identify whether the equilibrium is at, below, or above potential output. Examiners will not award diagram marks for unlabelled curves. When identifying output gaps in data-response questions, quote the specific data (e.g., "Real GDP is $X billion below the estimated potential of $Y billion") to demonstrate you can apply the concept to evidence.`,

      didYouKnow: `The term "business cycle" is somewhat misleading — economists have found that cycles are highly irregular in duration. U.S. expansions have lasted anywhere from 12 months (1980–81) to 128 months (2009–2020), while recessions have lasted from 2 months (2020) to 18 months (2007–2009). The "cycle" is a useful model, not a clockwork mechanism.`,

      prerequisiteRecap: `The previous lesson introduced GDP as a measure of national output and showed how real GDP is distinguished from nominal GDP by adjusting for inflation; the business cycle now describes how real GDP fluctuates over time around potential output, creating the output gaps that motivate macroeconomic policy.`,
      recallQuestions: [
        {
          id: 'ib5-l2-recall-1',
          type: 'mcq' as const,
          question: 'Real GDP differs from nominal GDP because:',
          options: [
            'Real GDP adjusts for changes in the price level using a base-year price index, so it reflects actual changes in output rather than changes in prices',
            'Real GDP includes transfer payments and informal-economy output that nominal GDP omits',
            'Real GDP is measured using purchasing power parity, while nominal GDP uses market exchange rates',
            'Real GDP only counts goods, while nominal GDP includes services as well',
          ],
          correctAnswer: 0,
          explanation: 'Nominal GDP is measured at current prices, so it can rise simply because prices increased. Real GDP uses a fixed base-year price level to remove the effect of inflation, ensuring that changes in real GDP reflect genuine changes in the quantity of goods and services produced — which is what the business cycle tracks.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],

      isStub: false,
    },
    flashcards: [
      {
        id: 'ib5-l2-fc1',
        front: 'Name the four phases of the business cycle in order.',
        back: 'Expansion → Peak → Contraction (Recession) → Trough. After the trough, the economy moves into recovery/expansion again.',
        tags: ['business cycle', 'phases', 'recession'],
      },
      {
        id: 'ib5-l2-fc2',
        front: 'What is a recessionary (deflationary) gap and what policy is used to close it?',
        back: 'A recessionary gap exists when actual real GDP is below potential output. Expansionary fiscal policy (increase G or cut taxes) or expansionary monetary policy (lower interest rates) is used to boost aggregate demand and close the gap.',
        tags: ['recessionary gap', 'output gap', 'expansionary policy'],
      },
      {
        id: 'ib5-l2-fc3',
        front: 'Define potential output and explain why it is difficult to measure.',
        back: 'Potential output is the level of real GDP produced when all resources are employed at their normal sustainable rate. It is difficult to measure because it cannot be directly observed — economists must estimate it using statistical models, and estimates are frequently revised.',
        tags: ['potential output', 'full employment', 'measurement'],
      },
    ],
    quiz: [
      {
        id: 'ib5-l2-q1',
        type: 'mcq',
        question: 'An economy\'s actual real GDP is $900 billion and its potential output is estimated at $950 billion. Which statement is most accurate?',
        options: [
          'The economy has a recessionary gap of $50 billion and unemployment is above the natural rate.',
          'The economy has an inflationary gap of $50 billion and inflation is accelerating.',
          'The economy is in a recession because GDP is below $950 billion.',
          'The economy has a balanced budget because spending equals potential output.',
        ],
        correctAnswer: 0,
        explanation: 'When actual GDP ($900bn) is below potential output ($950bn), there is a recessionary (deflationary) gap. This implies resources are under-utilised and unemployment exceeds the natural rate. It does not necessarily mean the economy is in a technical recession (two quarters of negative growth).',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l2-q2',
        type: 'mcq',
        question: 'Which of the following would most likely cause an economy to shift from a recessionary gap to an inflationary gap?',
        options: [
          'A large increase in government spending financed by borrowing, combined with interest rate cuts, boosting aggregate demand well above potential output.',
          'A fall in consumer confidence causing households to save more of their income.',
          'An increase in labour productivity that raises potential output faster than actual output.',
          'A central bank raising interest rates to reduce inflationary pressure.',
        ],
        correctAnswer: 0,
        explanation: 'Simultaneous expansionary fiscal policy (increased G) and expansionary monetary policy (lower interest rates) powerfully shift aggregate demand rightward. If demand surges beyond potential output, the economy moves from a recessionary gap into an inflationary gap — as occurred in several countries after 2020 pandemic stimulus.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l2-q3',
        type: 'mcq',
        question: 'In an AD/AS diagram, an inflationary gap is represented by:',
        options: [
          'Equilibrium real GDP to the right of the LRAS curve, where AD intersects SRAS at a price level above the long-run equilibrium.',
          'Equilibrium real GDP to the left of the LRAS curve, where AD intersects SRAS at a price level below the long-run equilibrium.',
          'A vertical SRAS curve intersecting AD at a price level below potential output.',
          'A horizontal LRAS curve intersecting AD at full-employment output.',
        ],
        correctAnswer: 0,
        explanation: 'An inflationary gap occurs when aggregate demand is so strong that the AD/SRAS intersection lies to the right of the LRAS (potential output) line. The price level is above its long-run equilibrium, and the economy is producing beyond sustainable capacity.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 3: Unemployment — IB Framework ────────────────────────────────────
  {
    id: 'ib5-l3',
    moduleId: 'ib5-macro-a',
    title: 'Unemployment — IB Framework',
    description: 'Classify the four types of unemployment, understand the natural rate of unemployment, and evaluate the economic and social costs of unemployment.',
    order: 3,
    estimatedMinutes: 38,
    tags: ['unemployment', 'cyclical', 'structural', 'frictional', 'natural rate', 'IB macro'],
    content: {
      conceptualExplanation: `Unemployment occurs when individuals who are willing and able to work at the prevailing wage rate cannot find employment. IB Economics identifies four main types. Cyclical (demand-deficient) unemployment arises when aggregate demand falls below the level needed to employ all workers — it is the dominant form during recessions. Structural unemployment results from a mismatch between the skills workers possess and the skills employers require, often caused by technological change, globalisation, or the decline of entire industries (e.g., coal mining or textile manufacturing). Frictional unemployment is short-term and arises naturally as workers search for new jobs or as employers search for suitable candidates — it exists even in healthy economies because matching workers to vacancies takes time. Seasonal unemployment occurs when demand for labour fluctuates predictably with the seasons, as in agriculture, tourism, or construction in regions with harsh winters.

The natural rate of unemployment (NRU), sometimes called the non-accelerating inflation rate of unemployment (NAIRU), is the unemployment rate consistent with stable inflation and full use of the economy's productive capacity. It equals the sum of frictional and structural unemployment. The NRU is not zero because some frictional and structural unemployment always exists. When actual unemployment falls below the NRU, wage and price pressures build — firms compete for scarce workers, driving wages up and ultimately feeding inflation. When actual unemployment exceeds the NRU, the economy has a recessionary gap. The NRU varies across countries: generous unemployment benefits may raise it (by reducing job-search urgency), while active labour market policies can lower it.

The costs of unemployment extend well beyond lost output. Economic costs include reduced tax revenues, increased government spending on unemployment benefits, depreciation of human capital (skills atrophy during prolonged joblessness), and the opportunity cost of foregone production (often called the "output gap"). Social and personal costs include psychological harm (higher rates of depression, anxiety, and suicide among the long-term unemployed), increased rates of crime and social exclusion, family breakdown, and loss of self-esteem. Policymakers target low unemployment not only for efficiency reasons but because the human costs of job loss are profound and often long-lasting — a phenomenon economists call "scarring."`,

      realWorldHook: `Following the 2008 global financial crisis, youth unemployment in Spain peaked at an extraordinary 56% in 2013. Studies published in the European Economic Review found that young people who entered the labour market during this period faced persistently lower wages and higher unemployment rates for more than a decade — a stark illustration of the long-run scarring effect of cyclical unemployment. Meanwhile Germany, which maintained low unemployment through short-time work (Kurzarbeit) subsidies, emerged from the crisis with a much healthier labour market and avoided much of this human cost.`,

      interactiveElement: `Classify the following scenarios into the correct type of unemployment: (1) A coal miner in West Virginia loses her job as the plant closes permanently due to the shift to renewable energy. (2) A hotel receptionist is laid off in December as tourist season ends. (3) A software engineer quits his job and takes two months to find a better-paying position. (4) A construction worker is laid off during a recession when house-building projects are cancelled. For each, state the type of unemployment and identify one appropriate policy response (e.g., retraining programmes for structural, interest rate cuts for cyclical).`,

      vocabulary: [
        {
          term: 'Cyclical (Demand-Deficient) Unemployment',
          definition: 'Unemployment caused by insufficient aggregate demand in the economy, typically rising during recessions and falling during expansions.',
          example: 'During the 2008–09 recession, millions of workers in the construction and financial sectors lost their jobs as spending collapsed — classic cyclical unemployment.',
        },
        {
          term: 'Structural Unemployment',
          definition: 'Unemployment resulting from a mismatch between workers\' skills and the requirements of available jobs, often driven by technological change or shifts in the industrial structure of the economy.',
          example: 'Factory workers displaced by automation in the auto industry may be structurally unemployed if they lack the digital skills needed in growing sectors like software development.',
        },
        {
          term: 'Natural Rate of Unemployment (NRU)',
          definition: 'The unemployment rate that exists when the labour market is in long-run equilibrium — equal to frictional plus structural unemployment — at which inflation is stable.',
          example: 'If an economy\'s NRU is 4% and the actual unemployment rate falls to 3%, labour markets are very tight and wage inflation is likely to accelerate.',
        },
      ],

      deeperDive: `At IB HL, students should understand the distinction between the short-run and long-run Phillips curves. In the short run, there appears to be a trade-off between unemployment and inflation — lower unemployment is associated with higher inflation. However, in the long run, the Phillips curve is vertical at the natural rate of unemployment: attempts to keep unemployment permanently below the NRU simply generate accelerating inflation without any sustained reduction in unemployment. This insight, developed independently by Milton Friedman and Edmund Phelps in the late 1960s, forms a cornerstone of modern macroeconomics and underpins the inflation-targeting frameworks used by central banks worldwide.

Cross-country comparisons reveal substantial variation in natural unemployment rates. Nordic countries like Denmark combine relatively generous unemployment benefits with highly active labour market policies (rapid retraining, job placement services) — a model called "flexicurity" — achieving low structural unemployment despite high social protection. By contrast, countries with rigid labour regulations and weaker retraining infrastructure tend to have higher structural unemployment. This suggests that the NRU is not an immutable constant but can be reduced through well-designed supply-side policies without generating inflationary pressure, a key policy insight for IB evaluation questions.`,

      commonMisconceptions: [
        'Full employment means zero unemployment — full employment means unemployment equals the natural rate (frictional + structural), which is typically 4–5% in advanced economies; zero unemployment is neither achievable nor desirable because some search unemployment always exists.',
        'Unemployment benefits cause unemployment — benefits can marginally increase frictional unemployment by reducing the urgency of job search, but the main causes of high unemployment are cyclical (weak demand) or structural (skills mismatches); removing benefits without addressing root causes rarely solves the problem.',
        'Seasonal and cyclical unemployment are the same thing — seasonal unemployment follows a predictable annual pattern tied to weather or calendar (e.g., summer tourism), while cyclical unemployment tracks the unpredictable ups and downs of the business cycle and can last years.',
      ],

      examinerTip: `When a Paper 1 essay asks you to "explain the economic costs of unemployment," go beyond the obvious (lost output) and include: reduced tax revenues, increased government transfer payments, human capital depreciation, and regional multiplier effects. For full marks, connect costs to specific types — e.g., structural unemployment carries particularly high human capital costs because skills can become permanently obsolete. Always distinguish economic costs from social costs if the question invites it.`,

      didYouKnow: `The official unemployment rate systematically understates joblessness because it only counts people actively seeking work. Economists use broader measures — such as the U-6 rate in the United States — which includes "marginally attached workers" (those who want a job but have stopped looking) and people working part-time who would prefer full-time work. During the depths of the 2008–09 recession, the U.S. U-6 rate reached nearly 17%, almost double the headline U-3 rate of 9.5%.`,

      prerequisiteRecap: `The previous lesson showed how a recessionary gap opens when actual real GDP falls below potential output; unemployment is the human labour-market consequence of that gap — cyclical unemployment rises when the economy contracts, directly linking the business cycle to labour market conditions.`,
      recallQuestions: [
        {
          id: 'ib5-l3-recall-1',
          type: 'mcq' as const,
          question: 'A recessionary (deflationary) gap exists when:',
          options: [
            'Actual real GDP is below potential output, meaning resources — including labour — are underutilised and unemployment exceeds the natural rate',
            'Actual real GDP exceeds potential output, creating upward pressure on wages and prices',
            'The government budget is in deficit, reducing aggregate demand below the full-employment level',
            'The price level falls below the central bank\'s inflation target, triggering deflationary expectations',
          ],
          correctAnswer: 0,
          explanation: 'A recessionary gap occurs when actual GDP is below potential output — the economy is producing less than it sustainably can. The result is underutilised labour and capital: unemployment rises above the natural rate, which is why cyclical unemployment is sometimes called demand-deficient unemployment.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],

      isStub: false,
    },
    flashcards: [
      {
        id: 'ib5-l3-fc1',
        front: 'List the four types of unemployment recognised in IB Economics.',
        back: '1. Cyclical (demand-deficient) — caused by recession/weak aggregate demand. 2. Structural — caused by skills mismatch due to industrial change. 3. Frictional — caused by job-search time between positions. 4. Seasonal — caused by predictable seasonal fluctuations in labour demand.',
        tags: ['unemployment types', 'cyclical', 'structural', 'frictional', 'seasonal'],
      },
      {
        id: 'ib5-l3-fc2',
        front: 'What is the Natural Rate of Unemployment (NRU)?',
        back: 'The NRU is the unemployment rate consistent with stable inflation, equal to frictional + structural unemployment. It represents the long-run equilibrium of the labour market and is not zero because some search and mismatch unemployment always exists.',
        tags: ['natural rate', 'NRU', 'NAIRU', 'frictional', 'structural'],
      },
      {
        id: 'ib5-l3-fc3',
        front: 'State TWO economic and TWO social costs of unemployment.',
        back: 'Economic: (1) Lost output (output gap / foregone GDP). (2) Reduced tax revenues and higher government transfer spending. Social: (1) Psychological harm — higher rates of depression, anxiety, and suicide. (2) Long-run scarring — lower lifetime earnings and weaker career prospects for the long-term unemployed.',
        tags: ['costs of unemployment', 'social costs', 'economic costs'],
      },
    ],
    quiz: [
      {
        id: 'ib5-l3-q1',
        type: 'mcq',
        question: 'A car manufacturer replaces 2,000 assembly-line workers with robotic welding systems. The displaced workers lack the programming skills needed to maintain the robots. This situation is best described as:',
        options: [
          'Structural unemployment, because a skills mismatch has been created by technological change.',
          'Cyclical unemployment, because aggregate demand for labour has fallen.',
          'Frictional unemployment, because the workers are temporarily between jobs.',
          'Seasonal unemployment, because production fluctuates with consumer demand cycles.',
        ],
        correctAnswer: 0,
        explanation: 'When technological change (automation) eliminates jobs requiring old skills and creates new jobs requiring different skills that current workers do not have, the result is a skills mismatch — the defining characteristic of structural unemployment. Retraining programmes are the appropriate policy response.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l3-q2',
        type: 'mcq',
        question: 'If an economy\'s actual unemployment rate falls below its natural rate of unemployment, what is the most likely macroeconomic consequence?',
        options: [
          'Upward pressure on wages and inflation, as firms compete for scarce workers.',
          'A recessionary gap opens, requiring expansionary fiscal policy.',
          'The government\'s budget deficit increases due to lower tax revenues.',
          'Frictional unemployment increases as more workers search for better-paying jobs.',
        ],
        correctAnswer: 0,
        explanation: 'When unemployment falls below the NRU, the labour market is tighter than its long-run equilibrium. Firms must offer higher wages to attract scarce workers, increasing production costs and consumer spending — both of which generate inflationary pressure. This is the basis of the short-run Phillips curve trade-off.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l3-q3',
        type: 'mcq',
        question: 'Which policy would MOST directly reduce structural unemployment?',
        options: [
          'Government-funded retraining and vocational education programmes to update workers\' skills.',
          'Central bank interest rate cuts to stimulate aggregate demand.',
          'Increased unemployment benefit payments to support displaced workers.',
          'Expansionary fiscal policy to close the recessionary gap.',
        ],
        correctAnswer: 0,
        explanation: 'Structural unemployment is caused by skills mismatches. Retraining programmes directly address the root cause by equipping workers with skills demanded by employers in growing industries. Interest rate cuts and fiscal stimulus address cyclical unemployment (weak demand) rather than structural mismatch.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 4: Inflation — CPI & Causes ───────────────────────────────────────
  {
    id: 'ib5-l4',
    moduleId: 'ib5-macro-a',
    title: 'Inflation — CPI & Causes',
    description: 'Measure inflation using the CPI, distinguish demand-pull, cost-push, and built-in inflation, and evaluate the IB approach to deflation risks.',
    order: 4,
    estimatedMinutes: 37,
    tags: ['inflation', 'CPI', 'demand-pull', 'cost-push', 'deflation', 'IB macro'],
    content: {
      conceptualExplanation: `Inflation is a sustained increase in the general price level of goods and services in an economy. It is measured using a price index — most commonly the Consumer Price Index (CPI). To construct the CPI, statisticians survey household spending to determine a representative "basket" of goods and services. Each item is assigned a weight reflecting its share of typical spending. The CPI compares the cost of this basket in the current period to its cost in a base period: CPI = (Cost of basket in current year / Cost of basket in base year) × 100. The annual percentage change in the CPI gives the inflation rate. The CPI has limitations: it may not represent all households equally, it struggles to capture quality improvements, and it is slow to adjust when consumer spending patterns shift.

IB Economics recognises three main causes of inflation. Demand-pull inflation occurs when aggregate demand grows faster than aggregate supply — "too much money chasing too few goods." This is often associated with rapid economic growth, excessive government spending, or very loose monetary policy. In an AD/AS diagram, demand-pull inflation is shown by a rightward shift of the AD curve, raising both the price level and real output (at least in the short run). Cost-push inflation arises from increases in production costs — most commonly higher oil prices, rising wages not matched by productivity gains, or supply chain disruptions — which reduce aggregate supply. In the AD/AS model, a leftward shift of the SRAS curve raises prices while reducing output, creating the painful combination known as stagflation. Built-in (wage-price spiral) inflation occurs when workers, expecting future inflation, demand higher wages; firms then pass higher labour costs on through higher prices, which in turn validates workers' inflation expectations, creating a self-reinforcing cycle.

Deflation — a sustained fall in the general price level — may seem beneficial at first glance (prices are lower!) but carries serious macroeconomic risks. When consumers expect prices to keep falling, they delay spending, reducing aggregate demand further. Businesses see falling revenues and cut investment and employment. The real burden of debt increases because debts are fixed in nominal terms while the value of money rises. This "deflationary spiral" can be extremely difficult to escape — Japan's "Lost Decade(s)" from the 1990s onward provides the most studied real-world example. The IB syllabus explicitly requires students to evaluate the costs of both inflation and deflation, making it a frequent essay and data-response topic.`,

      realWorldHook: `In June 2022, U.S. CPI inflation reached 9.1% — the highest in 40 years — driven by a combination of demand-pull pressures (massive pandemic stimulus) and cost-push shocks (Russia's invasion of Ukraine sharply raising global energy and food prices). This episode illustrated how multiple causes of inflation can operate simultaneously, complicating the central bank's task. The Federal Reserve responded by raising interest rates from near zero to over 5% between March 2022 and July 2023, the fastest tightening cycle in decades — demonstrating real-world application of contractionary monetary policy to reduce demand-pull inflation.`,

      interactiveElement: `Calculate the CPI and inflation rate using the following data. A representative basket in the base year costs $800 (Food: $320, Housing: $280, Transport: $120, Other: $80). In the current year, the same basket costs $872 (Food: $368, Housing: $295, Transport: $133, Other: $76). Step 1: Calculate the CPI for the current year. Step 2: Calculate the inflation rate. Step 3: Identify which basket component contributed most to inflation. Step 4: Suggest whether the inflation appears demand-pull or cost-push based on the pattern of price changes (hint: food and transport spiked most — what might cause that?).`,

      vocabulary: [
        {
          term: 'Consumer Price Index (CPI)',
          definition: 'A measure of the average change in prices paid by consumers for a representative basket of goods and services, used to calculate the inflation rate.',
          example: 'If the CPI rises from 100 to 107 over a year, the inflation rate is 7% — meaning the basket of goods that cost $100 now costs $107.',
        },
        {
          term: 'Demand-Pull Inflation',
          definition: 'Inflation caused by an increase in aggregate demand that outpaces the economy\'s productive capacity, illustrated by a rightward shift of the AD curve raising the price level.',
          example: 'The massive government spending and central bank asset purchases during 2020–21 shifted aggregate demand rightward, contributing to demand-pull inflation in 2022 across many economies.',
        },
        {
          term: 'Cost-Push Inflation',
          definition: 'Inflation caused by an increase in production costs (e.g., oil prices, wages) that shifts the SRAS curve leftward, raising the price level while reducing real output.',
          example: 'The 1973 OPEC oil embargo quadrupled oil prices, sharply increasing production costs across Western economies and triggering severe cost-push inflation and stagflation.',
        },
      ],

      deeperDive: `IB HL students should understand that the GDP deflator is an alternative, broader measure of price-level changes that covers all goods and services produced domestically — unlike the CPI, which covers only a fixed consumer basket. The GDP deflator is calculated as (Nominal GDP / Real GDP) × 100. Because it is not based on a fixed basket, it automatically adjusts for changes in spending patterns and newly introduced goods, making it a more comprehensive (though less timely) inflation indicator. Examiners sometimes include both CPI and GDP deflator data in Paper 2 stimulus material, expecting students to compare and interpret both measures.

Cross-country comparison reveals dramatically different inflation experiences. Hyperinflation — inflation above 50% per month — has occurred in Zimbabwe (2007–09, with annual rates exceeding 89.7 sextillion percent at its peak) and Venezuela (over 1,000,000% in 2018). These cases were primarily caused by governments financing large fiscal deficits by instructing central banks to print money — a monetarist perspective captured by the quantity theory of money (MV = PQ). In contrast, Japan spent much of the period 1990–2020 battling deflation rather than inflation, implementing quantitative easing and negative interest rates in attempts to escape the deflationary trap — with only partial success. These contrasting cases make excellent evaluation material for IB essays on inflation and monetary policy.`,

      commonMisconceptions: [
        'Deflation is always good because prices fall — deflation can trigger a deflationary spiral where falling prices lead to delayed spending, falling revenues, unemployment, and further price falls, potentially trapping an economy in prolonged stagnation as Japan\'s experience demonstrated.',
        'Inflation only hurts people — moderate, stable, and predictable inflation (typically 2% as targeted by most central banks) is associated with healthy demand growth and provides central banks with room to cut interest rates in a downturn; it is extreme or volatile inflation that is harmful.',
        'The CPI measures the cost of living for all households equally — the CPI is based on spending patterns of a representative household and can misrepresent inflation experienced by low-income households (who spend more on food and energy) or retirees (who face different healthcare cost pressures).',
      ],

      examinerTip: `Paper 1 and Paper 2 questions frequently ask students to "distinguish between demand-pull and cost-push inflation using an AD/AS diagram." Ensure you draw two separate diagrams: one showing AD shifting right (demand-pull) with rising price level and rising output; another showing SRAS shifting left (cost-push) with rising price level but falling output. The key evaluative insight is that cost-push inflation presents a policy dilemma — contractionary policy reduces inflation but worsens the output fall, while expansionary policy reduces the output fall but worsens inflation.`,

      didYouKnow: `The German Weimar Republic hyperinflation of 1921–1923 became so severe that workers were paid twice daily so they could spend their wages before they lost value. At its peak, the exchange rate reached 4.2 trillion marks per U.S. dollar. Wheelbarrows of cash were used to buy a loaf of bread — an extreme illustration of what happens when a government finances war reparations by printing money without limit.`,

      prerequisiteRecap: `The previous lesson identified the four types of unemployment and showed that the natural rate equals frictional plus structural unemployment; inflation now completes the macroeconomic picture by explaining what happens to the price level when aggregate demand or supply shifts — and why unemployment and inflation are linked through the labour market.`,
      recallQuestions: [
        {
          id: 'ib5-l4-recall-1',
          type: 'mcq' as const,
          question: 'Which type of unemployment would most likely fall when a government uses expansionary fiscal policy to close a recessionary gap?',
          options: [
            'Cyclical (demand-deficient) unemployment, because the increase in aggregate demand raises output and creates new jobs for workers displaced by the recession',
            'Structural unemployment, because increased spending retrains workers for new industries',
            'Frictional unemployment, because higher growth reduces the time workers spend searching for jobs',
            'Seasonal unemployment, because fiscal stimulus smooths out seasonal demand fluctuations',
          ],
          correctAnswer: 0,
          explanation: 'Cyclical unemployment arises from insufficient aggregate demand during contractions. Expansionary fiscal policy (higher G or lower taxes) shifts AD rightward, closing the recessionary gap and increasing the demand for labour — directly reducing cyclical unemployment. Structural and frictional unemployment reflect skills mismatches and search frictions, which fiscal stimulus does not directly address.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],

      isStub: false,
    },
    flashcards: [
      {
        id: 'ib5-l4-fc1',
        front: 'How is the CPI calculated? State the formula and explain what it measures.',
        back: 'CPI = (Cost of basket in current year / Cost of basket in base year) × 100. It measures the average price change of a representative basket of consumer goods and services relative to a base period. The annual percentage change in CPI gives the inflation rate.',
        tags: ['CPI', 'inflation measurement', 'price index'],
      },
      {
        id: 'ib5-l4-fc2',
        front: 'Distinguish between demand-pull and cost-push inflation using AD/AS analysis.',
        back: 'Demand-pull: AD shifts right → price level rises AND real output rises. Cost-push: SRAS shifts left → price level rises BUT real output falls (stagflation). The key difference is the output effect — demand-pull raises output while cost-push reduces it.',
        tags: ['demand-pull', 'cost-push', 'AD/AS', 'stagflation'],
      },
      {
        id: 'ib5-l4-fc3',
        front: 'Why is deflation considered dangerous in IB Economics?',
        back: 'Deflation creates a deflationary spiral: falling prices → consumers delay spending → falling aggregate demand → falling revenues → unemployment → further price falls. Real debt burdens also rise (debts are fixed in nominal terms). Japan\'s Lost Decade is the key example.',
        tags: ['deflation', 'deflationary spiral', 'Japan', 'debt burden'],
      },
    ],
    quiz: [
      {
        id: 'ib5-l4-q1',
        type: 'mcq',
        question: 'A representative consumer basket cost $500 in the base year and $545 in the current year. What is the CPI and the inflation rate?',
        options: [
          'CPI = 109; inflation rate = 9%.',
          'CPI = 91.7; inflation rate = 8.3%.',
          'CPI = 109; inflation rate = 4.5%.',
          'CPI = 100; inflation rate = 9%.',
        ],
        correctAnswer: 0,
        explanation: 'CPI = ($545 / $500) × 100 = 109. The inflation rate = ((109 − 100) / 100) × 100 = 9%. The base-year CPI is always 100 by definition, so the inflation rate equals CPI − 100.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l4-q2',
        type: 'mcq',
        question: 'A sharp rise in global oil prices causes production costs to increase across most industries. Using AD/AS analysis, the most likely outcome is:',
        options: [
          'The SRAS curve shifts left, raising the price level and reducing real output — stagflation.',
          'The AD curve shifts right, raising both the price level and real output.',
          'The LRAS curve shifts right, increasing potential output and reducing the price level.',
          'The SRAS curve shifts right, reducing the price level and increasing real output.',
        ],
        correctAnswer: 0,
        explanation: 'Higher oil prices increase production costs for virtually all firms, shifting the SRAS curve leftward. This raises the general price level (cost-push inflation) while simultaneously reducing real output — the combination called stagflation. This is fundamentally different from demand-pull inflation, where both price and output move in the same direction.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l4-q3',
        type: 'mcq',
        question: 'Which of the following best explains the "deflationary spiral" risk associated with sustained deflation?',
        options: [
          'Consumers postpone purchases expecting further price falls, reducing aggregate demand, which causes further price falls, creating a self-reinforcing cycle of declining output and rising unemployment.',
          'Central banks cut interest rates to zero, causing currency depreciation and import price inflation.',
          'Governments increase spending to boost demand, causing budget deficits that raise interest rates and crowd out investment.',
          'Firms raise prices to compensate for falling sales revenue, generating cost-push inflation alongside falling output.',
        ],
        correctAnswer: 0,
        explanation: 'The deflationary spiral works through expectations: if consumers believe prices will be lower tomorrow, they delay spending today, weakening aggregate demand and driving prices lower still. Combined with rising real debt burdens (as the value of money rises), this can trap an economy in a prolonged slump — as Japan experienced during its "Lost Decades."',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 5: Macroeconomic Objectives & Conflicts ───────────────────────────
  {
    id: 'ib5-l5',
    moduleId: 'ib5-macro-a',
    title: 'Macroeconomic Objectives & Conflicts',
    description: 'Identify the four main macroeconomic objectives, analyse policy conflicts — especially the Phillips curve trade-off — and evaluate how policymakers balance competing goals.',
    order: 5,
    estimatedMinutes: 40,
    tags: ['macroeconomic objectives', 'Phillips curve', 'policy conflicts', 'BoP', 'IB macro'],
    content: {
      conceptualExplanation: `Most governments pursue four core macroeconomic objectives simultaneously: (1) low and stable inflation (most central banks target around 2%); (2) low unemployment (ideally near the natural rate); (3) sustainable economic growth (positive, stable real GDP growth); and (4) balance of payments (BoP) equilibrium (avoiding persistent current account deficits or surpluses that destabilise the exchange rate or accumulate unsustainable debt). Some syllabi also include equitable income distribution as a fifth objective, recognising that growth accompanied by extreme inequality may fail to improve social welfare. These objectives are interrelated, and pursuing one often makes another harder to achieve — the central tension of macroeconomic policy.

The most famous conflict is the short-run Phillips curve trade-off between inflation and unemployment. Empirically observed in the UK by A.W. Phillips in 1958, the curve shows that lower unemployment is associated with higher inflation in the short run, because a tight labour market pushes wages and prices upward. Governments that stimulate aggregate demand to reduce unemployment may find that inflation accelerates; conversely, contractionary policy to fight inflation tends to raise unemployment. This conflict was dramatically illustrated in the early 1980s when the U.S. Federal Reserve raised interest rates sharply to crush double-digit inflation, triggering a severe recession that pushed unemployment above 10%. The long-run Phillips curve, however, is vertical at the natural rate of unemployment: in the long run, attempts to keep unemployment permanently below the NRU simply generate accelerating inflation without sustained employment gains.

Additional conflicts abound. Expansionary fiscal policy (cutting taxes or raising spending) can boost growth but may worsen the current account by stimulating import spending, creating a BoP conflict. A policy of maintaining a competitive (weak) exchange rate supports exports and growth but can import inflation. Supply-side policies (deregulation, privatisation, investment in education) can raise potential output and reduce structural unemployment without generating inflation — making them particularly attractive as policies that avoid short-run conflicts — but they operate slowly, often over a decade, and their effects are uncertain. Understanding these tensions is essential for IB evaluation, which always requires students to consider trade-offs and context rather than treating policy prescriptions as universally correct.`,

      realWorldHook: `The Bank of England's challenge in 2023 vividly illustrates macroeconomic objective conflicts. With CPI inflation at over 10% (driven by post-pandemic demand and energy price shocks from the Ukraine war), the Bank raised interest rates from 0.1% to 5.25% to restore price stability. But this same policy slowed growth, cooled the housing market, increased mortgage costs for millions of households, and raised recession risks — a textbook conflict between the inflation objective and the growth/unemployment objectives. The Bank openly acknowledged the trade-off, framing its decisions as "striking the right balance" between controlling inflation and avoiding unnecessary economic hardship.`,

      interactiveElement: `Draw a short-run Phillips curve on a graph with unemployment (%) on the x-axis and inflation rate (%) on the y-axis. Plot two points: Point A (unemployment = 3%, inflation = 7%) and Point B (unemployment = 7%, inflation = 2%). Draw a downward-sloping curve through these points. Now draw a vertical long-run Phillips curve at the natural rate of unemployment (e.g., 5%). Annotate: (a) which point represents an inflationary gap, (b) which represents a recessionary gap, (c) what happens in the long run if the government tries to maintain unemployment at 3% through expansionary policy (the curve shifts outward as inflation expectations rise). This exercise shows why policymakers cannot exploit the Phillips curve permanently.`,

      vocabulary: [
        {
          term: 'Phillips Curve',
          definition: 'A curve showing the short-run inverse relationship between the unemployment rate and the inflation rate: lower unemployment is associated with higher inflation, and vice versa.',
          example: 'When the UK unemployment rate fell from 6% to 3% during the 1960s boom, wage inflation accelerated — consistent with a movement up and to the left along the short-run Phillips curve.',
        },
        {
          term: 'Balance of Payments (BoP) Equilibrium',
          definition: 'A macroeconomic objective of avoiding persistent and large imbalances in the current account — neither a large deficit (more imports than exports creating unsustainable foreign debt) nor a large surplus (which can cause currency appreciation and trading partner resentment).',
          example: 'Germany\'s persistent current account surplus (exceeding 7% of GDP in some years) has attracted criticism from trading partners and the IMF as an imbalance that depresses domestic consumption and disadvantages deficit countries.',
        },
        {
          term: 'Supply-Side Policies',
          definition: 'Policies aimed at increasing the productive capacity of the economy (shifting LRAS rightward) by improving the quantity or quality of factors of production — including education, retraining, deregulation, and investment incentives.',
          example: 'The UK\'s apprenticeship levy (2017) funds workplace training to reduce structural unemployment and raise productivity — a supply-side policy targeting both the growth and unemployment objectives simultaneously.',
        },
      ],

      deeperDive: `IB HL students should understand the expectations-augmented Phillips curve developed by Friedman and Phelps, which adds inflationary expectations to the basic model. If workers and firms form adaptive expectations — adjusting their expectations based on past inflation — then policymakers who try to exploit the short-run trade-off will find that the short-run Phillips curve shifts upward over time as expectations adjust. The economy ends up with the same unemployment rate (at the NRU) but higher inflation, explaining the stagflation of the 1970s. If expectations are rational (as the New Classical school argues), the trade-off disappears even in the short run, because economic agents immediately anticipate and counteract predictable policy changes. The practical implication is that credible, independent central banks — which anchor inflation expectations through transparent communication — can make the short-run trade-off more favourable by preventing the upward drift in expectations.

From a global policy perspective, the conflict between growth and BoP equilibrium is particularly acute for developing economies. Countries that pursue rapid import-led growth — importing capital goods to develop their manufacturing base — often run persistent current account deficits, financed by capital inflows. This strategy was successful for South Korea and Taiwan in the 1970s–90s but created vulnerability when capital flows reversed (as in the 1997 Asian financial crisis). Conversely, export-led growth strategies (China, Germany) build current account surpluses but generate global imbalances and trade tensions, illustrating that no single growth model avoids all macroeconomic objective conflicts in the global context.`,

      commonMisconceptions: [
        'Governments can achieve all four macroeconomic objectives simultaneously through good policy — in practice, there are genuine short-run trade-offs (especially inflation vs. unemployment) that mean improving performance on one objective often temporarily worsens another; policy choices involve real sacrifices.',
        'The Phillips curve proves that higher inflation always reduces unemployment — the long-run Phillips curve is vertical at the NRU, so in the long run there is no trade-off; the inverse relationship only holds in the short run while inflation expectations remain anchored, and even then it is not stable across time periods.',
        'A current account surplus is always desirable — a surplus means the country is a net lender to the rest of the world and consuming less than it produces, which can reflect weak domestic demand; large and persistent surpluses create global imbalances and can trigger trade disputes or retaliatory tariffs.',
      ],

      examinerTip: `IB Paper 1 Section B essays frequently ask students to "evaluate the view that governments face unavoidable trade-offs in pursuing macroeconomic objectives." A strong response structures the body around specific conflicts (inflation–unemployment, growth–BoP equilibrium, growth–inflation), uses relevant diagrams (AD/AS and Phillips curve), and then evaluates: trade-offs may be reduced (but not eliminated) by supply-side policies that raise potential output, and by credible central bank independence that anchors inflation expectations. A well-structured conclusion should make a clear judgment about whether trade-offs are "unavoidable" given these qualifications, rather than simply listing conflicts.`,

      didYouKnow: `The Phillips curve relationship broke down spectacularly in the 1970s when many economies experienced stagflation — simultaneously high unemployment AND high inflation. This was triggered by supply-side oil price shocks (cost-push inflation) that had nothing to do with aggregate demand. The breakdown of the simple Phillips curve relationship led directly to the development of the expectations-augmented model and fundamentally changed how central banks think about inflation targeting.`,

      prerequisiteRecap: `The previous lesson explained how the CPI measures inflation and how demand-pull versus cost-push shocks affect the price level through AD and SRAS shifts; macroeconomic objectives now integrate inflation and unemployment into the full policy framework, revealing the trade-offs governments face when pursuing all four goals simultaneously.`,
      recallQuestions: [
        {
          id: 'ib5-l5-recall-1',
          type: 'mcq' as const,
          question: 'Which AD/AS diagram correctly shows cost-push inflation?',
          options: [
            'The SRAS curve shifts leftward, raising the price level and reducing real output simultaneously — stagflation',
            'The AD curve shifts rightward, raising both the price level and real output',
            'The LRAS curve shifts rightward, increasing potential output and reducing inflation',
            'The SRAS curve shifts rightward, raising output and reducing the price level',
          ],
          correctAnswer: 0,
          explanation: 'Cost-push inflation arises from higher production costs (e.g., oil prices, wages) that shift SRAS leftward. This simultaneously raises the price level and reduces real output — the combination called stagflation. Unlike demand-pull inflation (where AD shifts right and output rises), cost-push creates a dilemma for policymakers because any policy that reduces inflation worsens the output fall.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],

      isStub: false,
    },
    flashcards: [
      {
        id: 'ib5-l5-fc1',
        front: 'State the FOUR main macroeconomic objectives of government.',
        back: '1. Low and stable inflation (typically targeting ~2%). 2. Low unemployment (near the natural rate). 3. Sustainable economic growth (stable positive real GDP growth). 4. Balance of payments equilibrium (avoiding persistent current account imbalances).',
        tags: ['macroeconomic objectives', 'inflation', 'unemployment', 'growth', 'BoP'],
      },
      {
        id: 'ib5-l5-fc2',
        front: 'Explain the short-run Phillips curve trade-off between inflation and unemployment.',
        back: 'In the short run, there is an inverse relationship: lower unemployment → higher inflation (tight labour markets push wages and prices up); higher unemployment → lower inflation (weak demand moderates wage and price growth). Expansionary policy moves the economy up-left along the curve; contractionary policy moves it down-right.',
        tags: ['Phillips curve', 'inflation', 'unemployment', 'trade-off'],
      },
      {
        id: 'ib5-l5-fc3',
        front: 'Why is the long-run Phillips curve vertical, and what does this imply for policy?',
        back: 'The long-run Phillips curve is vertical at the natural rate of unemployment because inflation expectations eventually adjust. In the long run, any attempt to keep unemployment permanently below the NRU simply generates accelerating inflation. Policy implication: monetary policy cannot permanently reduce unemployment below the NRU without ever-rising inflation.',
        tags: ['long-run Phillips curve', 'NRU', 'inflation expectations', 'monetary policy'],
      },
    ],
    quiz: [
      {
        id: 'ib5-l5-q1',
        type: 'mcq',
        question: 'A government uses expansionary fiscal policy to reduce unemployment below the natural rate. According to the expectations-augmented Phillips curve, what is the long-run outcome?',
        options: [
          'Unemployment returns to the natural rate but inflation is permanently higher, as workers adjust their wage demands to reflect higher inflation expectations.',
          'Unemployment remains permanently below the natural rate with stable inflation.',
          'The economy moves to a new long-run equilibrium with lower unemployment and higher output.',
          'Inflation falls as the economy grows, reducing the cost of the expansionary policy.',
        ],
        correctAnswer: 0,
        explanation: 'In the Friedman-Phelps model, the short-run gain in employment is temporary. As workers experience higher inflation, they raise wage demands to restore real purchasing power. Firms\' costs rise, reducing employment back to the NRU, but now with a higher inflation rate — stagflation. The short-run Phillips curve shifts upward.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l5-q2',
        type: 'mcq',
        question: 'Which of the following represents a conflict between the economic growth objective and the balance of payments objective?',
        options: [
          'Rapid GDP growth increases consumer incomes, leading to a surge in import spending that worsens the current account deficit.',
          'Lower unemployment reduces transfer payment spending, improving the government budget balance.',
          'Higher interest rates attract foreign capital inflows, strengthening the exchange rate and reducing export competitiveness.',
          'Supply-side investment raises productivity, simultaneously improving growth and export competitiveness.',
        ],
        correctAnswer: 0,
        explanation: 'When the economy grows rapidly, consumer incomes rise and spending on imports increases faster than export growth, widening the current account deficit — a direct conflict between growth and BoP equilibrium. This is why high-growth periods often coincide with deteriorating current accounts in import-oriented economies.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'ib5-l5-q3',
        type: 'mcq',
        question: 'Why are supply-side policies often considered preferable to demand-side policies when addressing the conflict between the inflation and unemployment objectives?',
        options: [
          'Supply-side policies raise potential output (shift LRAS right), allowing growth and lower unemployment without generating inflationary pressure — avoiding the short-run Phillips curve trade-off.',
          'Supply-side policies immediately reduce inflation by lowering interest rates and increasing the money supply.',
          'Supply-side policies are more politically popular and can be implemented more quickly than fiscal policy changes.',
          'Supply-side policies directly increase aggregate demand, creating jobs without affecting the price level.',
        ],
        correctAnswer: 0,
        explanation: 'By expanding the economy\'s productive capacity (LRAS shifts right), supply-side policies allow real GDP and employment to grow without the demand-side inflationary pressure that creates the Phillips curve trade-off. However, their main drawback is that they operate slowly (over years or decades) and have uncertain effects — making them a long-run complement to, rather than replacement for, demand-side stabilisation.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },
]
