import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f6-intro-macro',
  title: 'Introduction to Macroeconomics',
  description: 'Zoom out from individual markets to the whole economy — measuring it, tracking its health, and understanding its cycles.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 6,
  estimatedHours: 2,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: GDP ──────────────────────────────────────────────────────────
  {
    id: 'f6-l1',
    moduleId: 'f6-intro-macro',
    title: 'Measuring the Economy — GDP',
    description:
      'Define GDP and its four components (C+I+G+NX), distinguish nominal from real GDP, and explain why GDP is an imperfect welfare measure.',
    order: 1,
    estimatedMinutes: 30,
    tags: ['GDP', 'national-income', 'real-vs-nominal'],
    content: {
      realWorldHook:
        'Every three months, governments around the world release a single number that can send stock markets soaring or crashing and determine whether a prime minister keeps their job. That number is GDP — and understanding what it really measures (and what it misses) is the starting point for all of macroeconomics.',
      prerequisiteRecap: `The previous module examined why governments intervene in markets — correcting externalities, providing public goods, and regulating prices — with all analysis focused on individual markets. Macroeconomics now zooms out to the entire economy: GDP is the measure that aggregates all those individual markets into a single national output figure, enabling the study of economy-wide performance rather than one market at a time.`,

      recallQuestions: [
        {
          id: 'f6-l1-recall-1',
          type: 'mcq' as const,
          question: 'National defence is a classic example of a public good. Which two properties make it a public good rather than a private good?',
          options: [
            'It is provided by the government and funded by taxation.',
            'It is non-rival (protecting one citizen does not reduce protection for others) and non-excludable (all residents are protected regardless of payment).',
            'It is rival (one soldier cannot defend two places at once) and excludable (only taxpayers are protected).',
            'It creates positive externalities and is subject to Pigouvian subsidies.',
          ],
          correctAnswer: 1,
          explanation: 'A public good is defined by two economic properties: non-rivalry (one person\'s consumption does not reduce availability for others) and non-excludability (it is impossible to prevent non-payers from benefiting). National defence satisfies both — it protects all residents simultaneously regardless of individual tax contributions.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country\'s borders during a specific time period, usually a calendar year or quarter. "Final" is a key word: we only count goods sold to their end users, not intermediate goods used in production, to avoid double-counting. For example, the steel that goes into a car is not counted separately — its value is captured in the price of the car itself.\n\nEconomists break GDP into four spending components, summarised by the identity Y = C + I + G + NX. Consumption (C) is spending by households on goods and services — everything from groceries to streaming subscriptions — and is typically the largest component in most economies. Investment (I) is spending on capital goods (machinery, buildings, inventory) by firms, not to be confused with buying stocks, which is financial investment. Government spending (G) covers public goods and services provided by the state, such as defence, roads, and teachers\' salaries, but excludes transfer payments like pensions, since those are not payments for newly produced output.\n\nNet exports (NX = exports − imports) captures the foreign sector. When a country sells more abroad than it buys, NX is positive, adding to GDP; when it imports more than it exports, NX is negative. This reflects the fact that GDP measures domestically produced output — foreign-made imports must be subtracted even though households spent money on them.\n\nA crucial distinction is between nominal GDP and real GDP. Nominal GDP values output at current prices, so it rises whenever prices rise, even if actual production is unchanged. Real GDP adjusts for inflation by valuing output at prices from a fixed base year, giving a true picture of whether an economy is actually producing more. The GDP deflator — the ratio of nominal to real GDP — is one way economists measure the overall price level.',
      vocabulary: [
        {
          term: 'Gross Domestic Product (GDP)',
          definition:
            'The total market value of all final goods and services produced within a country\'s borders in a given period.',
          example:
            'If a country produces $1 trillion of goods and services in a year, its GDP for that year is $1 trillion.',
        },
        {
          term: 'Nominal GDP',
          definition:
            'GDP measured at current market prices, unadjusted for inflation.',
          example:
            'If output rises 3% and prices rise 2%, nominal GDP rises about 5%, overstating real growth.',
        },
        {
          term: 'Real GDP',
          definition:
            'GDP adjusted for changes in the price level, allowing genuine comparisons of output over time.',
          example:
            'Using 2020 as the base year, a country\'s 2024 real GDP strips out price increases since 2020.',
        },
        {
          term: 'Net Exports (NX)',
          definition:
            'The value of a country\'s exports minus the value of its imports; the foreign-sector component of GDP.',
          example:
            'If a country exports $200 bn and imports $250 bn, NX = −$50 bn, reducing GDP.',
        },
      ],
      deeperDive:
        'GDP can be measured in three equivalent ways: the expenditure approach (C+I+G+NX), the income approach (summing all factor incomes — wages, profits, rent, interest), and the output/value-added approach (summing the value added at each stage of production). In theory all three give the same answer, though in practice statistical discrepancies arise. Most countries\' headline figures use the expenditure approach.\n\nDespite its ubiquity, GDP is a famously imperfect measure of societal well-being. It ignores the distribution of income — a country where wealth is highly concentrated can have high GDP but widespread poverty. It excludes unpaid work such as caring for children or elderly relatives, which contributes enormously to welfare. It counts spending on cigarettes and car crashes (emergency services) as positive contributions. Economists and policymakers increasingly supplement GDP with broader measures like the Human Development Index (HDI), which incorporates health and education alongside income, or Bhutan\'s Gross National Happiness Index.',
      commonMisconceptions: [
        'GDP counts all spending, including on intermediate goods. False — only final goods and services are counted to avoid double-counting the value of inputs like steel or flour.',
        'A rising nominal GDP always means the economy is growing. False — if prices rise faster than output, real GDP can stagnate or fall even as nominal GDP climbs.',
        'Investment in GDP means buying shares or bonds. False — in the national accounts, investment (I) means spending on physical capital goods; purchasing financial assets is not directly included in GDP.',
      ],
      examinerTip:
        'When a question asks you to calculate GDP using expenditure components, remember to subtract imports (they are already embedded in C, I, and G figures). Also be precise: government transfer payments (benefits, pensions) are NOT included in G because no new output is produced in exchange.',
      didYouKnow:
        'The phrase "Gross Domestic Product" was largely developed by economist Simon Kuznets for the U.S. Congress in 1934 — yet Kuznets himself warned Congress that "the welfare of a nation can scarcely be inferred from a measurement of national income." His caution is still quoted by critics of GDP-centric policymaking nearly a century later.',
      thinkAboutIt: {
        question: 'GDP per capita in Country A is $50,000 and in Country B it is $15,000. Can we conclude that citizens of Country A have a better quality of life? What might GDP miss?',
        answer: 'Not necessarily. GDP per capita is an average that conceals inequality — Country A could have extreme wealth concentrated among a small elite while most citizens live in poverty. GDP also ignores non-market production such as unpaid care work, leisure time, and environmental quality, all of which affect well-being directly. Country B might have stronger social cohesion, lower working hours, cleaner air, and universal healthcare that GDP fails to capture. Broader indices like the HDI, which combines income, life expectancy, and education, regularly reveal large gaps between GDP rank and genuine human development rank.',
      },
    },
    flashcards: [
      {
        id: 'f6-l1-fc1',
        front: 'What does the acronym GDP stand for, and what does it measure?',
        back: 'Gross Domestic Product — the total market value of all final goods and services produced within a country\'s borders in a given time period.',
        hint: 'Think "domestic" = within borders, "gross" = before depreciation.',
        tags: ['GDP', 'national-income'],
      },
      {
        id: 'f6-l1-fc2',
        front: 'State the expenditure equation for GDP.',
        back: 'GDP = C + I + G + NX, where C = consumption, I = investment, G = government spending, NX = net exports (exports − imports).',
        hint: 'Remember: four components, the last one can be negative.',
        tags: ['GDP', 'expenditure-approach'],
      },
      {
        id: 'f6-l1-fc3',
        front: 'What is the difference between nominal and real GDP?',
        back: 'Nominal GDP is measured at current prices; real GDP is adjusted for inflation using a base-year price level, so it reflects actual changes in output.',
        hint: 'Real removes the illusion created by rising prices.',
        tags: ['real-vs-nominal', 'GDP'],
      },
      {
        id: 'f6-l1-fc4',
        front: 'Why are intermediate goods excluded from GDP?',
        back: 'To avoid double-counting. The value of intermediate inputs (e.g. steel) is already embedded in the price of the final product (e.g. a car).',
        hint: 'Final goods only — the last stage of production.',
        tags: ['GDP', 'double-counting'],
      },
      {
        id: 'f6-l1-fc5',
        front: 'Give two reasons why GDP is an imperfect measure of living standards.',
        back: '1) It ignores income distribution — high GDP can coexist with widespread poverty. 2) It excludes unpaid work (e.g. childcare) and household production that contribute to welfare.',
        hint: 'Think about what GDP leaves out, not just what it includes.',
        tags: ['GDP', 'welfare'],
      },
      {
        id: 'f6-l1-fc6',
        front: 'What is the Human Development Index (HDI) and how does it differ from GDP per capita?',
        back: 'The HDI is a composite index published by the UN that combines three dimensions: income (GNI per capita), health (life expectancy at birth), and education (mean and expected years of schooling). Unlike GDP per capita, which captures only economic output, HDI acknowledges that well-being also depends on how long and how educated a life people live.',
        hint: 'Three pillars: income, health, education — GDP covers only one.',
        tags: ['HDI', 'GDP', 'welfare'],
      },
      {
        id: 'f6-l1-fc7',
        front: 'What is the GDP deflator and how is it calculated?',
        back: 'The GDP deflator is a broad price index that measures the price level of all goods and services included in GDP. It is calculated as: GDP Deflator = (Nominal GDP ÷ Real GDP) × 100. Unlike the CPI, it covers all domestically produced goods and services, not just a fixed consumer basket.',
        hint: 'Deflator = Nominal ÷ Real × 100 — broader than CPI.',
        tags: ['GDP', 'deflator', 'real-vs-nominal'],
      },
    ],
    quiz: [
      {
        id: 'f6-l1-q1',
        type: 'mcq',
        question:
          'A country exports $300 billion of goods and imports $350 billion. What is the value of net exports (NX) and how does it affect GDP?',
        options: [
          'NX = −$50 bn; it reduces GDP by $50 bn',
          'NX = +$50 bn; it increases GDP by $50 bn',
          'NX = $650 bn; it increases GDP by $650 bn',
          'NX = $0; imports and exports cancel each other out',
        ],
        correctAnswer: 0,
        explanation:
          'NX = exports − imports = $300 bn − $350 bn = −$50 bn. A trade deficit means net exports is negative, which reduces GDP in the expenditure equation.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q2',
        type: 'mcq',
        question:
          'Nominal GDP rises from $2 trillion to $2.2 trillion between two years, but the price level also rises by 10%. What has happened to real GDP?',
        options: [
          'Real GDP is unchanged — all of the nominal increase was due to inflation',
          'Real GDP rose by 10%',
          'Real GDP rose by 20%',
          'Real GDP fell by 10%',
        ],
        correctAnswer: 0,
        explanation:
          'A 10% rise in prices on a $2 trillion base gives $2.2 trillion nominal GDP, but real output is the same. Real GDP = nominal GDP / price index. Here 2.2 / 1.10 = 2.0 — unchanged.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q3',
        type: 'mcq',
        question:
          'Which of the following is counted as Investment (I) in the GDP expenditure approach?',
        options: [
          'A firm purchases a new factory building',
          'A household buys shares on the stock exchange',
          'The government pays unemployment benefits',
          'A consumer buys a foreign-made television',
        ],
        correctAnswer: 0,
        explanation:
          'Investment (I) in national accounts refers to spending on physical capital — machinery, buildings, and inventories. Buying shares is financial investment (not in GDP); unemployment benefits are transfer payments (not in G); foreign-made goods are subtracted via imports.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q4',
        type: 'mcq',
        question:
          'Country X has nominal GDP of $600 billion and a GDP deflator of 120. What is Country X\'s real GDP?',
        options: [
          '$500 billion',
          '$720 billion',
          '$480 billion',
          '$600 billion',
        ],
        correctAnswer: 0,
        explanation:
          'Real GDP = (Nominal GDP ÷ GDP Deflator) × 100 = ($600 bn ÷ 120) × 100 = $500 bn. The deflator of 120 means prices are 20% higher than in the base year, so real output is lower than nominal.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q5',
        type: 'mcq',
        question:
          'Which of the following transactions would NOT be included in a country\'s GDP?',
        options: [
          'A parent spending 20 hours a week caring for their own children at home',
          'A restaurant selling meals to customers',
          'A construction firm building a new office block',
          'The government hiring teachers for public schools',
        ],
        correctAnswer: 0,
        explanation:
          'GDP only counts market transactions involving final goods and services. Unpaid household production — such as home childcare — has no market price and is excluded. The other three are all market transactions producing new goods or services counted in GDP.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q6',
        type: 'mcq',
        question:
          'A baker buys flour for $2, turns it into bread, and sells the bread for $5. How much does this entire sequence contribute to GDP?',
        options: [
          '$5 — only the final sale of bread is counted',
          '$7 — both the flour purchase and bread sale are counted',
          '$3 — only the value added by the baker is counted',
          '$2 — only the intermediate good (flour) is counted',
        ],
        correctAnswer: 0,
        explanation:
          'GDP counts only final goods to avoid double-counting. The bread ($5) is the final product; the flour ($2) is an intermediate good whose value is already embedded in the bread price. The value-added approach gives the same answer: $5 − $2 = $3 of value added at the baking stage, plus the miller\'s earlier value added totalling $5.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q7',
        type: 'mcq',
        question:
          'A country\'s GDP per capita is $40,000, placing it among the world\'s wealthiest nations. Yet its HDI rank is significantly lower than its GDP rank. Which of the following could best explain this gap?',
        options: [
          'High income inequality means wealth is concentrated among a few, while life expectancy and education levels remain low for most citizens',
          'The country has a large trade surplus, inflating its GDP figure',
          'The country\'s CPI is higher than average, overstating real income',
          'The country invests heavily in capital goods, boosting investment (I) in GDP',
        ],
        correctAnswer: 0,
        explanation:
          'HDI incorporates health and education alongside income. A country can have high average GDP per capita but low HDI if income is highly concentrated (skewing the average upward) while the majority of the population has poor access to healthcare and education. The other options do not explain an HDI shortfall relative to GDP.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q8',
        type: 'mcq',
        question:
          'Using the expenditure approach, calculate GDP given: Consumption = $800 bn, Investment = $200 bn, Government spending = $300 bn, Exports = $150 bn, Imports = $200 bn.',
        options: [
          '$1,250 billion',
          '$1,450 billion',
          '$1,650 billion',
          '$1,200 billion',
        ],
        correctAnswer: 0,
        explanation:
          'GDP = C + I + G + NX = $800 + $200 + $300 + ($150 − $200) = $800 + $200 + $300 − $50 = $1,250 bn. Remember: NX = exports − imports = −$50 bn, which reduces GDP because imports represent spending on foreign-produced goods.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q9',
        type: 'mcq',
        question:
          'Which of the following is the best example of a transfer payment that is excluded from Government spending (G) in the GDP calculation?',
        options: [
          'Monthly pension payments to retired citizens',
          'Salaries paid to police officers',
          'Government spending on building a new highway',
          'Funding for public schools',
        ],
        correctAnswer: 0,
        explanation:
          'Transfer payments (pensions, unemployment benefits, welfare) are excluded from G in GDP because the government receives no current production in return — no new good or service is created. Police salaries, highway construction, and school funding all involve the government purchasing newly produced services or goods, so they count in G.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l1-q10',
        type: 'mcq',
        question:
          'Two countries both have real GDP growth of 4% this year. Country A has a population growth of 3%; Country B has population growth of 1%. Which country experienced faster growth in living standards, as measured by real GDP per capita?',
        options: [
          'Country B, because its real GDP per capita grew by approximately 3% versus roughly 1% for Country A',
          'Country A, because it produced more total output in absolute terms',
          'Both equally — real GDP growth rate is the only relevant measure',
          'Country A, because higher population growth signals a stronger economy',
        ],
        correctAnswer: 0,
        explanation:
          'Real GDP per capita = Real GDP ÷ Population. Country B: 4% − 1% ≈ 3% per capita growth. Country A: 4% − 3% ≈ 1% per capita growth. Per capita GDP better captures individual living standards than total GDP, since more people sharing the same output means each person is not necessarily better off.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Find a recent news article (within the past 12 months) reporting on a country\'s GDP growth or decline. Write a 400–500 word analysis that: (1) summarises what the GDP figure shows, (2) identifies at least two important aspects of economic welfare that this GDP figure fails to capture, and (3) explains what additional data you would want to see to get a fuller picture of that country\'s living standards.',
      rubric: 'Accurate summary of the GDP news story (2 pts). Two well-explained GDP limitations with specific reference to the chosen country (4 pts — 2 pts each). Identification of at least two alternative or complementary indicators (e.g. HDI, Gini coefficient, life expectancy) with explanation of what they add (3 pts). Quality of economic reasoning and use of correct terminology (1 pt). Total: 10 pts.',
      exampleTopics: [
        'India\'s recent GDP growth versus its HDI ranking — what does the gap reveal?',
        'U.S. GDP growth and income inequality: can a rising aggregate mask stagnant median incomes?',
        'Nigeria\'s GDP versus its poverty rate — Africa\'s largest economy and its distribution challenge',
        'Japan\'s shrinking nominal GDP and the role of yen depreciation vs. real output changes',
        'A Nordic country (e.g. Norway or Denmark): why does high GDP correlate with high HDI there but not everywhere?',
      ],
    },
  },

  // ── Lesson 2: The Business Cycle ──────────────────────────────────────────
  {
    id: 'f6-l2',
    moduleId: 'f6-intro-macro',
    title: 'The Business Cycle',
    description:
      'Describe the four phases of expansion, peak, contraction, and trough; introduce leading and lagging indicators.',
    order: 2,
    estimatedMinutes: 25,
    tags: ['business-cycle', 'recession', 'expansion'],
    content: {
      realWorldHook:
        'Economies don\'t grow in a straight line. The global financial crisis of 2008 wiped out millions of jobs in months; the COVID-19 shock of 2020 caused the sharpest single-quarter contraction ever recorded — and then one of the fastest recoveries. These violent swings are not random accidents; they follow a recognisable pattern economists call the business cycle.',
      prerequisiteRecap: `The previous lesson defined GDP as the total market value of all final goods and services produced within a country's borders, and distinguished real from nominal GDP. The business cycle describes how real GDP fluctuates over time — rising during expansions and falling during contractions — making GDP the central variable used to identify where an economy sits in the cycle.`,

      recallQuestions: [
        {
          id: 'f6-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which of the following is correctly counted as Investment (I) in the GDP expenditure approach?',
          options: [
            'A household purchases shares in a publicly listed company.',
            'A firm builds a new warehouse to store its manufactured goods.',
            'The government pays unemployment benefits to out-of-work citizens.',
            'A consumer buys an imported television set.',
          ],
          correctAnswer: 1,
          explanation: 'Investment (I) in national accounts refers to spending on physical capital goods — machinery, buildings, and inventories. Building a new warehouse is spending on physical capital and counts as I. Buying shares is financial investment (not in GDP); unemployment benefits are transfer payments (excluded from G); imported goods are subtracted via the NX term.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f6-l2-recall-2',
          type: 'mcq' as const,
          question: 'Nominal GDP rises by 8% while the price level rises by 8%. What has happened to real GDP?',
          options: [
            'Real GDP rose by 16% because both nominal growth and inflation contributed.',
            'Real GDP is unchanged — the entire nominal increase was due to inflation, not real output growth.',
            'Real GDP fell by 8% because inflation outpaced nominal growth.',
            'Real GDP rose by 8% because nominal GDP always equals real GDP.',
          ],
          correctAnswer: 1,
          explanation: 'Real GDP adjusts nominal GDP for inflation. If prices rose by exactly 8% and nominal GDP also rose by exactly 8%, there is no change in real output — the economy produced the same quantity of goods and services, just at higher prices. Real GDP = Nominal GDP ÷ Price Index.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'The business cycle describes the recurring fluctuations in economic activity around a long-run growth trend. Real GDP, employment, and income all rise and fall together in a broadly predictable sequence of four phases. Understanding where an economy sits in this cycle helps businesses plan investment, workers anticipate job opportunities, and governments design appropriate policies.\n\nThe expansion phase is characterised by rising real GDP, falling unemployment, growing consumer confidence, and increasing business investment. Firms hire more workers, incomes rise, spending picks up, and optimism becomes self-reinforcing. Expansions can last for years — the U.S. expansion from 2009 to 2020 was the longest on record at 128 months. Eventually, the economy reaches a peak: the highest point of economic activity before output begins to decline. Inflation often accelerates near the peak as the economy operates at or beyond its capacity.\n\nContraction (also called a recession when it lasts at least two consecutive quarters of negative real GDP growth) follows the peak. Output falls, firms cut back production and lay off workers, unemployment rises, and consumer spending weakens. Business confidence deteriorates, investment dries up, and the decline can become self-reinforcing through what economists call a negative multiplier effect. The trough is the lowest point in the cycle, where output and employment are at their minimum before recovery begins.\n\nAfter the trough, the cycle starts again with a new expansion. Economic indicators are classified by when they move relative to the cycle. Leading indicators change before the economy does and are used to forecast turning points — examples include new building permits, stock market indices, and consumer confidence surveys. Lagging indicators, such as the unemployment rate and the average duration of unemployment, change after the economy has already shifted, confirming that a turning point has occurred.',
      vocabulary: [
        {
          term: 'Business Cycle',
          definition:
            'The recurring pattern of expansion and contraction in economic activity around a long-run trend.',
          example:
            'The U.S. economy has experienced over 30 business cycles since the Civil War.',
        },
        {
          term: 'Recession',
          definition:
            'A period of significant economic decline, commonly defined as two consecutive quarters of negative real GDP growth.',
          example:
            'In 2020 Q1–Q2, most major economies entered recession due to COVID-19 lockdowns.',
        },
        {
          term: 'Leading Indicator',
          definition:
            'An economic variable that tends to change before the economy as a whole changes, used to predict future activity.',
          example:
            'A drop in new housing permits often signals an upcoming economic slowdown months in advance.',
        },
        {
          term: 'Lagging Indicator',
          definition:
            'An economic variable that changes after the economy has already begun to follow a particular pattern.',
          example:
            'The unemployment rate typically peaks several months after a recession has officially ended.',
        },
      ],
      deeperDive:
        'Not all recessions are alike in depth or duration. The 1929–33 Great Depression saw U.S. GDP fall by around 30% and unemployment reach 25%. The 2020 COVID recession lasted only two months in the U.S. (the shortest on record) yet saw an unprecedented 31.4% annualised quarterly contraction. The speed of recovery also varies: "V-shaped" recoveries are sharp and swift; "L-shaped" recoveries involve a prolonged period at the bottom before growth resumes, as seen in Japan\'s "Lost Decade" of the 1990s.\n\nGovernments and central banks use fiscal and monetary policy to smooth the cycle — stimulating during contractions and cooling during overheated expansions. These stabilisation policies are imperfect, partly because of the time lags involved: it takes months for new legislation to pass and for interest-rate changes to filter through to consumer spending. Leading indicators are therefore invaluable tools: the U.S. Conference Board\'s Leading Economic Index aggregates ten indicators to give advance warning of turning points, typically by three to twelve months.',
      commonMisconceptions: [
        '"Two negative quarters" is the only definition of recession. In practice, bodies like the U.S. National Bureau of Economic Research (NBER) declare recessions based on a broader set of criteria including employment, income, and industrial output — depth, breadth, and duration all matter.',
        'A recession means negative growth every single month. A recession covers the overall contraction phase; individual months within it can still show positive GDP if they happen to be unusually strong.',
        'The business cycle is perfectly regular and predictable. Cycles vary enormously in length and amplitude. No two are identical, and economists cannot predict exact turning points — only the broad pattern.',
      ],
      examinerTip:
        'Exam questions often ask you to identify where an economy is in the business cycle from data (e.g. unemployment rising, GDP falling = contraction). Practise annotating business cycle diagrams and labelling all four phases correctly. Note that "recovery" is sometimes used as a synonym for early expansion.',
      didYouKnow:
        'The term "recession" was popularised in the 1950s partly as a euphemism to avoid the frightening connotations of "depression." Before that, economic downturns were simply called panics or crises — terms that, ironically, may have been more honest about public sentiment.',
      thinkAboutIt: {
        question: 'A government announces that the recession is officially over because GDP grew for one quarter. Should workers and businesses celebrate? What would you want to check before concluding that the economy has truly recovered?',
        answer: 'One quarter of positive growth after a recession ends the technical definition of contraction, but it does not necessarily mean the labour market or living standards have recovered. Unemployment is a lagging indicator and typically keeps rising for months after GDP turns positive, as firms wait to confirm the recovery before rehiring. You would want to examine whether GDP growth is sustained over multiple quarters, whether unemployment is falling, whether consumer confidence is recovering, and whether the level of real GDP has returned to its pre-recession peak — not just whether the growth rate is positive. A single positive quarter could be a "dead-cat bounce" rather than the start of a genuine expansion.',
      },
    },
    flashcards: [
      {
        id: 'f6-l2-fc1',
        front: 'List the four phases of the business cycle in order.',
        back: 'Expansion → Peak → Contraction (Recession) → Trough, then back to Expansion.',
        hint: 'Think of a wave: rising, crest, falling, trough.',
        tags: ['business-cycle'],
      },
      {
        id: 'f6-l2-fc2',
        front: 'What is the common definition of a recession?',
        back: 'Two or more consecutive quarters of negative real GDP growth.',
        hint: 'Two consecutive = at least six months of decline.',
        tags: ['recession', 'business-cycle'],
      },
      {
        id: 'f6-l2-fc3',
        front: 'What is a leading economic indicator? Give one example.',
        back: 'A variable that changes before the broader economy, used to predict turning points. Example: new housing building permits.',
        hint: 'It "leads" the way — changes first.',
        tags: ['leading-indicator', 'business-cycle'],
      },
      {
        id: 'f6-l2-fc4',
        front: 'What characterises the peak of the business cycle?',
        back: 'The highest point of economic activity before output begins to decline; often accompanied by low unemployment and rising inflation.',
        hint: 'The top of the wave before it crashes.',
        tags: ['business-cycle', 'peak'],
      },
      {
        id: 'f6-l2-fc5',
        front: 'Why is the unemployment rate described as a lagging indicator?',
        back: 'Firms are slow to hire and fire — unemployment keeps rising even after GDP has begun to recover, and only falls once the expansion is well established.',
        hint: 'It confirms a turning point that has already happened.',
        tags: ['unemployment', 'lagging-indicator'],
      },
      {
        id: 'f6-l2-fc6',
        front: 'What is the difference between a "V-shaped" and an "L-shaped" recovery?',
        back: 'A V-shaped recovery is rapid: output falls sharply then bounces back quickly to its previous trend. An L-shaped recovery involves a steep decline followed by a prolonged period of stagnation at a lower level before growth resumes — as seen in Japan\'s "Lost Decade" of the 1990s.',
        hint: 'The letter shape describes the GDP path over time after a recession.',
        tags: ['recession', 'business-cycle', 'recovery'],
      },
      {
        id: 'f6-l2-fc7',
        front: 'What is the NBER\'s approach to declaring a recession, and how does it differ from the "two-quarter rule"?',
        back: 'The U.S. National Bureau of Economic Research (NBER) declares recessions based on depth, breadth, and duration across multiple indicators — including employment, real income, industrial production, and real retail sales — not just two consecutive quarters of negative GDP. This means NBER can declare a recession that is brief but severe, or refuse to declare one with two negative quarters if other indicators remain healthy.',
        hint: 'NBER uses a holistic scorecard; the two-quarter rule is a shortcut.',
        tags: ['recession', 'NBER', 'business-cycle'],
      },
    ],
    quiz: [
      {
        id: 'f6-l2-q1',
        type: 'mcq',
        question:
          'An economy has recorded negative real GDP growth for three consecutive quarters and unemployment is rising. Which phase of the business cycle best describes this situation?',
        options: [
          'Contraction (recession)',
          'Expansion',
          'Peak',
          'Trough',
        ],
        correctAnswer: 0,
        explanation:
          'Falling real GDP for multiple quarters combined with rising unemployment is the hallmark of the contraction (recession) phase. The trough is the turning point at the bottom, not the sustained decline.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q2',
        type: 'mcq',
        question:
          'Which of the following is best classified as a leading economic indicator?',
        options: [
          'New orders for manufactured goods',
          'The average duration of unemployment',
          'The outstanding value of commercial loans',
          'Labour cost per unit of output',
        ],
        correctAnswer: 0,
        explanation:
          'New orders for manufactured goods signal future production decisions and tend to move before GDP — making them a leading indicator. The other options are lagging indicators: they reflect conditions after the turning point has occurred.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q3',
        type: 'mcq',
        question:
          'What typically happens to inflation as an economy approaches the peak of the business cycle?',
        options: [
          'Inflation tends to accelerate because the economy is operating near or above full capacity',
          'Inflation falls sharply because consumers stop spending',
          'Inflation is unaffected by the business cycle',
          'Inflation turns negative (deflation) due to overproduction',
        ],
        correctAnswer: 0,
        explanation:
          'Near the peak, labour and capital are fully employed, pushing up wages and costs. Strong consumer demand allows firms to raise prices, so inflation accelerates. Deflation is more associated with deep recessions, not peaks.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q4',
        type: 'mcq',
        question:
          'A country\'s real GDP grows at 3% in Q1, −0.5% in Q2, −1.2% in Q3, and 0.4% in Q4. According to the common two-quarter rule, when did the recession begin and end?',
        options: [
          'Began in Q2, ended before Q4 (the trough was Q3)',
          'Began in Q1, ended in Q4',
          'There was no recession because Q4 was positive',
          'Began in Q3 and had not ended by year\'s end',
        ],
        correctAnswer: 0,
        explanation:
          'Two consecutive quarters of negative real GDP growth (Q2 and Q3) meet the technical recession definition, so the recession began in Q2. The trough — the lowest point — is Q3. The Q4 positive reading signals the start of recovery, meaning the recession ended at the Q3 trough. Q1 was still growing so is not part of the recession.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q5',
        type: 'mcq',
        question:
          'During the expansion phase of the business cycle, which of the following is most likely to occur simultaneously?',
        options: [
          'Rising real GDP, falling unemployment, and increasing consumer confidence',
          'Rising real GDP, rising unemployment, and falling consumer confidence',
          'Falling real GDP, falling unemployment, and rising inflation',
          'Falling real GDP, rising unemployment, and falling consumer confidence',
        ],
        correctAnswer: 0,
        explanation:
          'During an expansion, real GDP rises as firms produce more, unemployment falls as firms hire more workers, and consumer confidence improves as incomes grow and job security increases. The other combinations describe contraction or internally inconsistent scenarios.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q6',
        type: 'mcq',
        question:
          'A central bank notices that new building permits have fallen sharply for three consecutive months, the stock market index has dropped 15%, and consumer confidence surveys have turned deeply negative. What should the central bank infer from these data?',
        options: [
          'These are leading indicators suggesting a downturn is likely in the coming months, and the central bank may consider loosening monetary policy pre-emptively',
          'These are lagging indicators confirming a recession already under way, so the central bank should wait for official GDP data before acting',
          'These data are irrelevant to monetary policy, which responds only to inflation',
          'These are coincident indicators showing the economy is currently at its trough',
        ],
        correctAnswer: 0,
        explanation:
          'Building permits, stock market indices, and consumer confidence surveys are all classified as leading indicators — they typically change three to twelve months before the economy as a whole turns. Their simultaneous deterioration is a strong forward-looking signal, giving the central bank reason to act early rather than wait for lagging confirmation.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q7',
        type: 'mcq',
        question:
          'The unemployment rate in Country Z peaks at 9.5% six months after the NBER officially declared the recession over. Which concept does this best illustrate?',
        options: [
          'Unemployment is a lagging indicator — it continues rising even after GDP has turned positive',
          'The NBER made an error in declaring the recession over',
          'Unemployment is a leading indicator that predicts future recessions',
          'Structural unemployment rose sharply during the recovery phase',
        ],
        correctAnswer: 0,
        explanation:
          'The classic feature of the unemployment rate as a lagging indicator is that it keeps rising after the official end of a recession, because firms wait to confirm the recovery is sustained before rehiring. A peak six months after recession end is entirely typical and does not indicate an NBER error.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q8',
        type: 'mcq',
        question:
          'An economy is in the contraction phase. The government increases spending on infrastructure to stimulate demand. Which of the following best describes the intended effect in business cycle terms?',
        options: [
          'Shift the trough upward and shorten the contraction, moving the economy toward recovery sooner',
          'Move the economy from the peak to the trough more quickly',
          'Permanently eliminate future business cycles',
          'Reduce inflation by increasing aggregate supply',
        ],
        correctAnswer: 0,
        explanation:
          'Fiscal stimulus during a contraction is designed to boost aggregate demand, softening the downturn and accelerating the recovery. The goal is to raise the floor of the trough and shorten its duration — not to eliminate cycles (which is impossible) or to speed up reaching the trough (which is the opposite of what policymakers want).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q9',
        type: 'mcq',
        question:
          'Japan experienced stagnant growth for most of the 1990s and 2000s following the collapse of its asset-price bubble. Economists call this an "L-shaped" recovery. What does this shape imply about the recovery path?',
        options: [
          'Output fell sharply and then remained at a lower level for a prolonged period rather than bouncing back quickly',
          'Output fell and then recovered rapidly back to its pre-recession peak within two quarters',
          'Output fell, then fell again, creating a double-dip recession',
          'Output was unchanged — the L-shape refers to unemployment, not GDP',
        ],
        correctAnswer: 0,
        explanation:
          'An L-shaped recovery means the GDP path literally resembles an "L": a sharp vertical drop followed by a long horizontal plateau at a depressed level. Japan\'s "Lost Decade" — actually closer to two lost decades — is the textbook example, with deflation, banking-sector weakness, and weak demand preventing a swift return to trend growth.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l2-q10',
        type: 'mcq',
        question:
          'Which of the following pairs correctly matches each indicator with its classification?',
        options: [
          'New housing permits (leading) and average duration of unemployment (lagging)',
          'Average duration of unemployment (leading) and new housing permits (lagging)',
          'Stock market index (lagging) and labour cost per unit of output (leading)',
          'Consumer confidence survey (lagging) and commercial bank loans outstanding (leading)',
        ],
        correctAnswer: 0,
        explanation:
          'New housing permits signal future construction activity and typically turn down months before GDP, making them a leading indicator. Average duration of unemployment rises after a recession is under way and falls only well into recovery, making it a lagging indicator. The other pairings reverse the correct classifications.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a country that experienced a clearly identifiable recession in the past 20 years (e.g. the U.S. in 2008–09, the UK in 2020, Greece in 2010–13, or another of your choice). Write a 400–500 word case study that: (1) identifies the phase of the business cycle the country entered and the approximate dates, (2) describes two leading indicators that signalled the downturn before it officially began, (3) explains what happened to unemployment during and after the recession (as a lagging indicator), and (4) evaluates whether the recovery was V-shaped, L-shaped, or another pattern.',
      rubric: 'Correct identification of the recession with approximate dates and supporting GDP data (2 pts). Two leading indicators described with explanation of why they qualify as leading (3 pts). Accurate account of unemployment behaviour as a lagging indicator, with data if possible (2 pts). Justified characterisation of the recovery shape with reasoning (2 pts). Quality of economic language and analysis (1 pt). Total: 10 pts.',
      exampleTopics: [
        'The U.S. Great Recession (2007–09): housing permits, yield curve inversion, and the slow unemployment recovery',
        'The COVID-19 recession (2020): unprecedented speed of contraction and the V-shaped recovery in most economies',
        'Greece\'s sovereign debt crisis (2010–13): a near-L-shaped contraction with prolonged high unemployment',
        'The UK in 2022–23: flirting with recession amid energy shocks — did leading indicators predict it?',
        'China\'s post-COVID reopening (2023): were the leading indicators reliable predictors of the recovery pace?',
      ],
    },
  },

  // ── Lesson 3: Unemployment ─────────────────────────────────────────────────
  {
    id: 'f6-l3',
    moduleId: 'f6-intro-macro',
    title: 'Unemployment — Types and Measurement',
    description:
      'Define frictional, structural, cyclical, and seasonal unemployment; explain why the official unemployment rate can be misleading.',
    order: 3,
    estimatedMinutes: 25,
    tags: ['unemployment', 'frictional', 'structural', 'cyclical'],
    content: {
      realWorldHook:
        'When governments announce unemployment figures, politicians and journalists often argue about whether the "real" number is higher or lower than the headline rate. They\'re onto something: the official unemployment rate is a narrower measure than most people assume, and understanding the different types of unemployment is essential to designing policies that actually fix the problem.',
      prerequisiteRecap: `The previous lesson described the four phases of the business cycle — expansion, peak, contraction, and trough — and noted that unemployment rises during contractions and falls during expansions. Unemployment is a key indicator of where the economy sits in the cycle, but different types of unemployment have different causes and call for different policies, which is why classifying them matters.`,

      recallQuestions: [
        {
          id: 'f6-l3-recall-1',
          type: 'mcq' as const,
          question: 'During which phase of the business cycle is cyclical unemployment at its highest, and why?',
          options: [
            'During the expansion phase, because more workers are needed and wages rise.',
            'At the peak, because the economy is overheating and workers are all employed.',
            'At the trough, because aggregate demand has fallen to its lowest point and firms need the fewest workers.',
            'During the recovery, because firms are still cautious about hiring.',
          ],
          correctAnswer: 2,
          explanation: 'Cyclical unemployment is caused by insufficient aggregate demand. It rises throughout the contraction phase and peaks at the trough — the lowest point of economic activity — when demand, output, and employment are all at their minimum. As recovery begins, cyclical unemployment starts to fall.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Unemployment occurs when people who are willing and able to work at the prevailing wage cannot find a job. To be counted as officially unemployed in most countries, a person must be of working age, without a job, actively seeking work, and available to start immediately. The unemployment rate is the percentage of the labour force that is unemployed, where the labour force comprises both the employed and the unemployed (but not those who have stopped looking).\n\nFrictional unemployment arises from the time it takes workers to find jobs that match their skills and preferences, even when those jobs exist. It is a natural feature of a dynamic economy: new graduates searching for their first role, workers who have voluntarily quit to find something better, and firms taking time to evaluate candidates all generate frictional unemployment. A small amount is considered healthy — it reflects workers upgrading to better-matched jobs. Structural unemployment is more serious and longer-lasting. It occurs when there is a mismatch between the skills workers have and the skills employers need, often caused by technological change or shifts in industrial composition. Factory workers displaced by automation, or coal miners in a region transitioning to renewable energy, face structural unemployment. Retraining takes time and is not always successful, making structural unemployment persistent.\n\nCyclical unemployment is directly caused by a downturn in the business cycle — when aggregate demand falls, firms produce less and need fewer workers. It rises sharply in recessions and falls during expansions. Seasonal unemployment follows predictable calendar patterns: ski instructors are out of work in summer, and farm labourers are laid off after the harvest. Because seasonality is predictable, most reported unemployment figures are "seasonally adjusted" to strip it out.\n\nThe official unemployment rate misses several groups. Underemployed workers — those working part-time who want full-time work, or highly qualified workers in roles beneath their skill level — are not counted as unemployed. Discouraged workers, who have given up looking for work because they believe none is available, are excluded from the labour force entirely and therefore from the unemployment rate. These omissions mean the headline rate can understate the true slack in the labour market, particularly in deep recessions.',
      vocabulary: [
        {
          term: 'Frictional Unemployment',
          definition:
            'Short-term unemployment arising from the time workers spend searching for suitable jobs, even when vacancies exist.',
          example:
            'A software engineer who leaves one tech firm and spends two months finding a better-paying role is frictionally unemployed during that search.',
        },
        {
          term: 'Structural Unemployment',
          definition:
            'Long-term unemployment caused by a mismatch between workers\' skills and the skills demanded by employers, often due to technological change.',
          example:
            'Typists who lost jobs to word-processing software in the 1980s were structurally unemployed.',
        },
        {
          term: 'Cyclical Unemployment',
          definition:
            'Unemployment caused by insufficient aggregate demand during an economic downturn.',
          example:
            'Construction workers laid off during the 2008–09 recession because new housing projects dried up.',
        },
        {
          term: 'Discouraged Worker',
          definition:
            'A person who has stopped actively seeking work because they believe no jobs are available for them; excluded from official unemployment figures.',
          example:
            'Someone who searched unsuccessfully for a year and stopped applying is a discouraged worker and is not counted in the headline unemployment rate.',
        },
      ],
      deeperDive:
        'The concept of the Natural Rate of Unemployment (NRU), also called the Non-Accelerating Inflation Rate of Unemployment (NAIRU), holds that some unemployment always exists even in a healthy, fully employed economy — essentially the sum of frictional and structural unemployment. Policymakers cannot push unemployment below the NRU without triggering accelerating inflation, because labour markets become so tight that wages and costs spiral upward. Estimates of the NRU vary by country and era, but for developed economies it typically falls in the 4–6% range.\n\nThe U.S. Bureau of Labor Statistics publishes six measures of labour underutilisation, labelled U-1 through U-6. The headline rate is U-3; U-6 adds part-time workers who want full-time work and "marginally attached" workers including discouraged workers. During the aftermath of the 2008 financial crisis, U-6 in the U.S. reached 17%, nearly double the U-3 rate of 10%, illustrating how dramatically the official rate can undercount true labour market distress.',
      commonMisconceptions: [
        'Zero unemployment would be ideal. In practice, zero unemployment is neither achievable nor desirable — frictional unemployment is a sign of a dynamic economy where workers are improving their job match. Pushing to zero would require eliminating all job-to-job mobility.',
        'All unemployment has the same policy solution. Different types demand different policies: cyclical unemployment calls for demand stimulus (fiscal or monetary); structural unemployment requires retraining, education, and labour market reforms. Applying the wrong tool can waste resources.',
        'If the unemployment rate falls, labour market conditions are definitely improving. A falling rate can be misleading if it\'s driven by discouraged workers leaving the labour force rather than people actually finding jobs.',
      ],
      examinerTip:
        'Exam questions frequently ask you to classify a type of unemployment from a scenario and then recommend an appropriate policy. Match the type to the cause: demand deficiency → cyclical (fix with stimulus); skill mismatch → structural (fix with retraining); search time → frictional (fix with job-matching services). Always justify your classification.',
      didYouKnow:
        'During the Great Depression, the U.S. unemployment rate reached approximately 25% — meaning one in four workers had no job. Today\'s official definition wasn\'t formalised then, so some economic historians argue the true rate may have been even higher once workers who had given up searching are included.',
      thinkAboutIt: {
        question: 'If the unemployment rate falls from 6% to 5%, does that necessarily mean more people found jobs? Explain two scenarios that could produce this result.',
        answer: 'Not necessarily. Scenario 1: genuine improvement — 100,000 previously unemployed workers found jobs, lowering the count of unemployed and reducing the rate. Scenario 2: labour-force exit — 100,000 discouraged workers stopped searching and were reclassified as outside the labour force, removing them from both the numerator (unemployed) and denominator (labour force). In scenario 2, the rate falls mathematically even though no new jobs were created and the economy may actually have worsened, as more people have given up hope. This is why economists look beyond the headline rate to participation rates, the U-6 measure, and other indicators of true labour-market health.',
      },
    },
    flashcards: [
      {
        id: 'f6-l3-fc1',
        front: 'Define frictional unemployment and explain why some of it is considered healthy.',
        back: 'Frictional unemployment is short-term joblessness while workers search for suitable roles. It is healthy because it reflects workers improving their job match, contributing to a more productive allocation of labour.',
        hint: 'Think "friction" in the job-search process — normal wear and tear.',
        tags: ['frictional', 'unemployment'],
      },
      {
        id: 'f6-l3-fc2',
        front: 'What causes structural unemployment?',
        back: 'A mismatch between the skills workers have and the skills employers need, often caused by technological change, automation, or shifts in the industrial structure of the economy.',
        hint: 'Structure of the economy changes; workers\' skills do not (yet).',
        tags: ['structural', 'unemployment'],
      },
      {
        id: 'f6-l3-fc3',
        front: 'What is cyclical unemployment and when is it highest?',
        back: 'Unemployment caused by a fall in aggregate demand during an economic downturn. It is highest during the trough of the business cycle (deepest point of a recession).',
        hint: 'Follows the cycle — up in recessions, down in expansions.',
        tags: ['cyclical', 'unemployment', 'business-cycle'],
      },
      {
        id: 'f6-l3-fc4',
        front: 'Who are "discouraged workers" and why are they excluded from the official unemployment rate?',
        back: 'People who have stopped looking for work because they believe no jobs are available. They are excluded because the official definition requires active job-seeking — so they are not counted in the labour force at all.',
        hint: 'No active search = not in the labour force = not counted.',
        tags: ['discouraged-workers', 'unemployment', 'measurement'],
      },
      {
        id: 'f6-l3-fc5',
        front: 'What is the Natural Rate of Unemployment?',
        back: 'The level of unemployment that exists even when the economy is at full capacity — composed of frictional and structural unemployment. It represents the lowest sustainable unemployment rate without triggering accelerating inflation.',
        hint: 'Also called NAIRU: Non-Accelerating Inflation Rate of Unemployment.',
        tags: ['natural-rate', 'unemployment'],
      },
      {
        id: 'f6-l3-fc6',
        front: 'What is NAIRU and why can\'t policymakers push unemployment below it without consequences?',
        back: 'NAIRU (Non-Accelerating Inflation Rate of Unemployment) is the unemployment rate at which inflation is stable. If policymakers use stimulus to push unemployment below NAIRU, labour markets become so tight that wage demands accelerate, firms raise prices to protect margins, and inflation spirals upward — eventually forcing a painful policy reversal.',
        hint: 'Below NAIRU = too-tight labour market = wage-price spiral.',
        tags: ['NAIRU', 'natural-rate', 'unemployment', 'inflation'],
      },
      {
        id: 'f6-l3-fc7',
        front: 'What is the U-6 measure of unemployment and why does it exceed the headline U-3 rate?',
        back: 'U-6 is the broadest U.S. measure of labour underutilisation: it adds to the U-3 count all "marginally attached" workers (including discouraged workers) and people working part-time who want full-time work. It exceeds U-3 because it captures the hidden slack the headline rate ignores. During the 2009 recession trough, U-3 was ~10% while U-6 reached ~17%.',
        hint: 'U-3 = headline; U-6 = headline + underemployed + discouraged.',
        tags: ['U-6', 'unemployment', 'measurement', 'discouraged-workers'],
      },
    ],
    quiz: [
      {
        id: 'f6-l3-q1',
        type: 'mcq',
        question:
          'A large textile factory closes because cheaper automated machines replace manual workers. The displaced workers struggle to find jobs because their sewing skills are no longer in demand. Which type of unemployment does this illustrate?',
        options: [
          'Structural unemployment',
          'Frictional unemployment',
          'Cyclical unemployment',
          'Seasonal unemployment',
        ],
        correctAnswer: 0,
        explanation:
          'The workers\' skills no longer match the needs of the modern labour market — this is a skill mismatch caused by technological change, the defining feature of structural unemployment.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q2',
        type: 'mcq',
        question:
          'The official unemployment rate falls from 7% to 6%. An economist argues this does not necessarily mean the labour market has improved. Which of the following best supports that argument?',
        options: [
          'Discouraged workers who left the labour force are not counted, so the rate can fall even if fewer people have jobs',
          'The unemployment rate always overstates the true level of joblessness',
          'Frictional unemployment has risen, offsetting any cyclical improvement',
          'Seasonal adjustment always reduces the measured unemployment rate',
        ],
        correctAnswer: 0,
        explanation:
          'If discouraged workers stop searching and leave the labour force, they are removed from both the numerator and denominator, mathematically lowering the rate — even if no one found a job. This is a key limitation of the official measure.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q3',
        type: 'mcq',
        question:
          'Which policy is most appropriate to reduce structural unemployment?',
        options: [
          'Government-funded retraining and skills programmes',
          'Cutting interest rates to stimulate aggregate demand',
          'Increasing government spending on infrastructure',
          'Reducing income taxes to boost consumer spending',
        ],
        correctAnswer: 0,
        explanation:
          'Structural unemployment stems from a skills mismatch; retraining programmes directly address that cause. The other options are demand-side tools better suited to reducing cyclical unemployment.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q4',
        type: 'mcq',
        question:
          'The labour force in Country P is 50 million people. Of these, 47.5 million are employed. What is the unemployment rate?',
        options: [
          '5%',
          '4.75%',
          '2.5%',
          '95%',
        ],
        correctAnswer: 0,
        explanation:
          'Unemployment rate = (unemployed ÷ labour force) × 100. Unemployed = 50m − 47.5m = 2.5m. Rate = (2.5m ÷ 50m) × 100 = 5%. The denominator is the total labour force (employed + unemployed), not just the employed.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q5',
        type: 'mcq',
        question:
          'A ski instructor works full-time in winter but is unemployed every summer despite actively seeking work. Which type of unemployment best describes her summer joblessness?',
        options: [
          'Seasonal unemployment',
          'Frictional unemployment',
          'Structural unemployment',
          'Cyclical unemployment',
        ],
        correctAnswer: 0,
        explanation:
          'Her unemployment follows a predictable, calendar-driven pattern tied to the season — the definition of seasonal unemployment. It is distinct from frictional (searching for a better match) and structural (skills mismatch) unemployment, and is not caused by a business-cycle downturn.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q6',
        type: 'mcq',
        question:
          'A government announces that "full employment" has been achieved. An economist responds that full employment does not mean zero unemployment. Which concept best explains why some unemployment persists even at full employment?',
        options: [
          'The Natural Rate of Unemployment (NRU) — frictional and structural unemployment always exist in a dynamic economy',
          'Cyclical unemployment — it can never be completely eliminated by policy',
          'Seasonal unemployment — calendar-driven unemployment is always present',
          'Discouraged workers — their exclusion artificially holds the rate at zero',
        ],
        correctAnswer: 0,
        explanation:
          'Full employment is defined as the economy operating at its NRU (or NAIRU), not at zero unemployment. Frictional unemployment (job search) and structural unemployment (skills mismatch) always exist in a dynamic economy. Only cyclical unemployment is zero at full employment; the NRU typically sits at 4–6% in developed economies.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q7',
        type: 'mcq',
        question:
          'Country Q\'s headline unemployment rate (U-3) is 6%. Its broader U-6 measure, which includes discouraged workers and the underemployed, is 11%. What does the gap between these two figures suggest?',
        options: [
          'There is significant hidden labour market slack — many workers are either underemployed or have given up searching',
          'The official rate must be wrong because U-6 cannot exceed U-3',
          'Frictional unemployment has risen sharply, driving up the U-6 rate',
          'The economy is at full employment because U-3 is close to the natural rate',
        ],
        correctAnswer: 0,
        explanation:
          'A large U-6 minus U-3 gap signals substantial hidden underutilisation of labour. The 5 percentage point difference means roughly 5% of the labour force equivalent are either working part-time involuntarily or have become too discouraged to search — both signs of a weaker labour market than the headline rate suggests.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q8',
        type: 'mcq',
        question:
          'A recent economics graduate spends 10 weeks searching for a job that matches her qualifications before accepting a role. Which type of unemployment did she experience, and is it a concern for policymakers?',
        options: [
          'Frictional unemployment — a small amount is considered normal and even beneficial as it reflects workers finding well-matched jobs',
          'Structural unemployment — her degree-level skills are no longer demanded',
          'Cyclical unemployment — the economy must be in recession if graduates cannot find work',
          'Seasonal unemployment — graduate hiring follows predictable seasonal cycles',
        ],
        correctAnswer: 0,
        explanation:
          'Job search after graduation is a textbook example of frictional unemployment — a temporary mismatch between worker and job while searching, not a skills deficit or a demand shortage. Some frictional unemployment is healthy: it allows workers to find better-matched positions, improving productivity. It becomes a concern only if search periods grow excessively long, suggesting information or market failures.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q9',
        type: 'mcq',
        question:
          'During a deep recession, the government introduces a large stimulus package to boost aggregate demand. Which type of unemployment is this policy most directly designed to reduce?',
        options: [
          'Cyclical unemployment',
          'Structural unemployment',
          'Frictional unemployment',
          'Seasonal unemployment',
        ],
        correctAnswer: 0,
        explanation:
          'Cyclical unemployment is caused by insufficient aggregate demand in a recession. A fiscal stimulus package (increased government spending or tax cuts) directly boosts demand, encouraging firms to rehire. It has little effect on structural unemployment (which requires retraining) or frictional unemployment (which is natural search time) or seasonal unemployment (which follows predictable patterns).',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l3-q10',
        type: 'mcq',
        question:
          'An economy\'s unemployment rate is 4% and the NRU is estimated at 4.5%. Policymakers push for further stimulus to reduce unemployment below 4%. According to the NAIRU concept, what is the likely consequence?',
        options: [
          'Accelerating inflation, as labour markets become too tight and wage demands spiral upward',
          'Falling inflation, because more employment means more output and lower prices',
          'A permanent reduction in unemployment to 3% with no inflationary cost',
          'A recession, because stimulus always overshoots and causes a downturn',
        ],
        correctAnswer: 0,
        explanation:
          'At 4%, unemployment is already below the NRU of 4.5%, meaning the labour market is tighter than sustainable. Further stimulus pushes unemployment even lower, creating excess labour demand, accelerating wage growth, rising production costs, and ultimately higher inflation — the scenario NAIRU is designed to warn against. There is no free lunch in pushing below the natural rate.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Select a country that has experienced a significant unemployment challenge in the past decade (e.g. Spain during the eurozone crisis, the U.S. post-2008, South Africa today, or another of your choice). Write a 400–500 word analysis that: (1) describes the level and main type(s) of unemployment the country faced, (2) explains what caused this unemployment using the correct economic classification, (3) evaluates the policies the government or central bank used to address it, and (4) assesses whether the headline unemployment rate fully captured the labour-market problem, citing any evidence of discouraged workers or underemployment.',
      rubric: 'Correct identification of unemployment type(s) with supporting data or evidence (2 pts). Causal explanation using precise economic terminology (2 pts). Evaluation of at least two policies with explanation of which type of unemployment each targeted (3 pts). Critical assessment of headline rate limitations with reference to hidden unemployment measures (2 pts). Quality of economic reasoning and accuracy (1 pt). Total: 10 pts.',
      exampleTopics: [
        'Spain 2012–14: youth unemployment above 50% — was it structural, cyclical, or both?',
        'South Africa today: persistently high unemployment — structural causes and the role of skills mismatch',
        'The U.S. after the 2008 financial crisis: the U-3 vs U-6 divergence and the role of discouraged workers',
        'Germany\'s "employment miracle" during the 2008–09 recession — how did Kurzarbeit (short-time work) prevent cyclical unemployment?',
        'The UK post-Brexit labour market: have structural mismatches emerged as EU workers returned home?',
      ],
    },
  },

  // ── Lesson 4: Inflation ────────────────────────────────────────────────────
  {
    id: 'f6-l4',
    moduleId: 'f6-intro-macro',
    title: 'Inflation — Measurement and Causes',
    description:
      'Explain how the CPI is constructed, distinguish demand-pull from cost-push inflation, and introduce hyperinflation.',
    order: 4,
    estimatedMinutes: 25,
    tags: ['inflation', 'CPI', 'demand-pull', 'cost-push'],
    content: {
      realWorldHook:
        'In 2022, households across Europe and North America opened their energy bills and grocery receipts to find prices 8–11% higher than a year earlier — the highest inflation in four decades. Central banks scrambled to raise interest rates. Millions of workers demanded pay rises just to stand still. Inflation — the sustained rise in the general price level — can quietly erode living standards, redistribute wealth, and destabilise entire economies.',
      prerequisiteRecap: `The previous lesson classified unemployment into frictional, structural, and cyclical types, noting that cyclical unemployment rises during contractions and falls during expansions. Inflation and unemployment are closely linked macroeconomic concerns — near the business cycle peak, low unemployment often coincides with rising inflation as demand outstrips capacity, making it essential to understand how inflation is measured and what causes it.`,

      recallQuestions: [
        {
          id: 'f6-l4-recall-1',
          type: 'mcq' as const,
          question: 'A highly skilled software engineer loses her job because her company replaces her role with an AI tool. She struggles to find new work because her coding skills are no longer in demand. Which type of unemployment does this illustrate?',
          options: [
            'Frictional unemployment, because she is between jobs temporarily.',
            'Cyclical unemployment, because the economy is in recession.',
            'Structural unemployment, because technological change has created a skills mismatch.',
            'Seasonal unemployment, because tech hiring follows a predictable calendar pattern.',
          ],
          correctAnswer: 2,
          explanation: 'The engineer\'s skills no longer match what employers need, caused by technological change (AI). This is the defining feature of structural unemployment — a mismatch between workers\' skills and the structure of the modern economy. It is typically long-lasting and requires retraining to resolve.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f6-l4-recall-2',
          type: 'mcq' as const,
          question: 'The official unemployment rate falls from 8% to 7%. An economist warns this may not reflect genuine labour market improvement. Which explanation best supports this warning?',
          options: [
            'Frictional unemployment always rises when cyclical unemployment falls.',
            'Discouraged workers who stopped searching have left the labour force, mechanically lowering the rate without anyone finding a job.',
            'The natural rate of unemployment automatically adjusts to match the official rate.',
            'Seasonal adjustment always understates the true unemployment rate.',
          ],
          correctAnswer: 1,
          explanation: 'Discouraged workers are excluded from the labour force because they are not actively seeking work. If they stop searching, they are removed from both the numerator (unemployed) and denominator (labour force), which can lower the official rate even if no new jobs were created — a known limitation of the headline unemployment measure.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Inflation is a sustained increase in the general price level of goods and services in an economy over time. It is measured as a percentage change, typically annually. The key word is "sustained" — a one-off price spike (say, petrol after a hurricane) is not inflation. Inflation must be broad-based, affecting many goods and services, and ongoing.\n\nThe most commonly used measure is the Consumer Price Index (CPI). Statistical agencies construct the CPI by first surveying household spending patterns to produce a "basket" of goods and services that represents typical consumption — food, housing, transport, clothing, healthcare, and so on. Each category is weighted by how large a share of household budgets it typically occupies. Statisticians then track the price of this basket each month. The CPI for a given period is the ratio of the cost of the basket in that period to the cost of the same basket in a base year, multiplied by 100. The inflation rate is the percentage change in the CPI from one period to the next.\n\nEconomists distinguish two main causes of inflation. Demand-pull inflation occurs when aggregate demand in the economy grows faster than the economy\'s productive capacity. "Too much money chasing too few goods" is the classic description. This typically happens during strong economic booms, when consumer confidence is high, credit is cheap, or governments are running large fiscal stimulus programmes. Because firms cannot immediately increase output, they respond to excess demand by raising prices. Cost-push inflation originates on the supply side: rising production costs — energy prices, raw materials, wages — squeeze firms\' profit margins, and to preserve profitability, firms pass higher costs on to consumers through higher prices. The 1970s oil shocks, when OPEC dramatically cut oil supply, caused severe cost-push inflation across the developed world.\n\nAt the extreme end of the inflation spectrum sits hyperinflation — conventionally defined as inflation exceeding 50% per month. Hyperinflation destroys the purchasing power of money so rapidly that it can cause a complete breakdown of the monetary system. The classic cases are Weimar Germany in 1923 (prices doubling every few days) and Zimbabwe in 2008–09 (annual inflation estimated in the hundreds of millions of percent). Hyperinflation almost always results from governments financing enormous fiscal deficits by printing money, flooding the economy with currency that chases a fixed or shrinking supply of goods.',
      vocabulary: [
        {
          term: 'Inflation',
          definition:
            'A sustained increase in the general price level of goods and services in an economy, reducing the purchasing power of money.',
          example:
            'If inflation is 5%, a basket of goods costing £100 today will cost £105 in a year.',
        },
        {
          term: 'Consumer Price Index (CPI)',
          definition:
            'A measure of the average change over time in the prices paid by consumers for a fixed basket of goods and services.',
          example:
            'If the CPI rises from 100 to 108, the inflation rate over that period is 8%.',
        },
        {
          term: 'Demand-Pull Inflation',
          definition:
            'Inflation caused by aggregate demand growing faster than the economy\'s productive capacity, pulling prices upward.',
          example:
            'A booming economy with rising wages and easy credit leads consumers to spend more, driving up prices.',
        },
        {
          term: 'Cost-Push Inflation',
          definition:
            'Inflation caused by rising production costs (e.g. energy, wages, raw materials) that firms pass on to consumers as higher prices.',
          example:
            'A global oil price spike raises transport and manufacturing costs, pushing up prices across the economy.',
        },
      ],
      deeperDive:
        'The CPI has well-known limitations. It uses a fixed basket, so it cannot immediately account for consumers substituting cheaper goods when one product becomes expensive (substitution bias). It may also be slow to capture quality improvements — a new laptop may cost the same as last year\'s but be far more powerful, meaning its true price in quality-adjusted terms has fallen. For these reasons, the CPI tends to slightly overstate the true cost of living increase. Some central banks and governments use alternative measures: the PCE (Personal Consumption Expenditures) deflator in the United States, or the GDP deflator, which covers a broader range of goods and services.\n\nMild inflation (typically targeted at 2% by most central banks) is considered beneficial: it gives firms room to adjust real wages downward without cutting nominal pay (since workers resist nominal pay cuts), it incentivises spending rather than hoarding (a small deflation threat encourages people to spend now rather than wait for lower prices), and it provides monetary policy with room to cut interest rates in a downturn. Deflation — falling prices — sounds attractive but is economically dangerous: if consumers expect prices to keep falling, they delay purchases, firms earn less revenue, they cut jobs, incomes fall, demand falls further, and a deflationary spiral can set in. Japan\'s experience in the 1990s and 2000s is the most frequently cited modern example.',
      commonMisconceptions: [
        'Inflation means every individual price is rising. Inflation is measured across a basket — individual prices can fall (e.g. electronics) even while the general price level rises.',
        'High inflation is always caused by excessive money printing. While money supply growth is a long-run determinant (as the quantity theory of money states), short-run inflation can be caused by supply shocks, demand surges, or wage-price spirals without any change in the money supply.',
        'Deflation (falling prices) is always good for consumers. Deflation can trigger a deflationary spiral — falling prices → deferred spending → falling revenues → unemployment → even less spending — which is more damaging than moderate inflation.',
      ],
      examinerTip:
        'Exam questions often present a scenario and ask whether inflation is demand-pull or cost-push. Key diagnostic: if it originates from rising spending / booming economy → demand-pull; if it originates from rising costs (oil, wages, supply chain disruption) → cost-push. Both can cause stagflation (inflation + stagnation) if cost-push shocks are severe enough to reduce output simultaneously.',
      didYouKnow:
        'At its worst in November 2008, Zimbabwe\'s monthly inflation rate was estimated at 79.6 billion percent. Prices effectively doubled every 24.7 hours. The government eventually abandoned the Zimbabwean dollar in 2009 and switched to a basket of foreign currencies — effectively outsourcing its monetary policy to other countries\' central banks.',
      thinkAboutIt: {
        question: 'In 2022, inflation in the UK and U.S. surged to multi-decade highs. Some economists blamed excessive government stimulus (demand-pull); others blamed the energy and supply-chain crisis triggered by the pandemic and Russia\'s invasion of Ukraine (cost-push). Does it matter which cause is correct, and why might central banks respond differently to each?',
        answer: 'It matters enormously. Demand-pull inflation means aggregate demand is too high relative to supply, so raising interest rates to cool spending directly addresses the root cause. Cost-push inflation means supply has contracted — raising interest rates reduces demand and output further, potentially causing a recession without fully solving the underlying cost problem. In 2022, inflation was likely a combination of both, making the correct policy response genuinely difficult. Central banks that tightened aggressively (like the U.S. Federal Reserve) risked causing unemployment; those that moved slowly risked entrenching inflation expectations. The debate illustrates why correctly diagnosing the source of inflation is a prerequisite for good policy.',
      },
    },
    flashcards: [
      {
        id: 'f6-l4-fc1',
        front: 'How is the Consumer Price Index (CPI) constructed?',
        back: 'Statisticians create a weighted basket of goods and services representing typical household spending, track the cost of that basket over time, and express changes as a percentage relative to a base year.',
        hint: 'Basket → weights → track prices → compare to base year.',
        tags: ['CPI', 'inflation', 'measurement'],
      },
      {
        id: 'f6-l4-fc2',
        front: 'What is demand-pull inflation? Give one cause.',
        back: 'Inflation caused by aggregate demand rising faster than productive capacity — "too much money chasing too few goods." Cause: a rapid increase in consumer spending driven by easy credit or high confidence.',
        hint: 'Demand is pulling prices up from below.',
        tags: ['demand-pull', 'inflation'],
      },
      {
        id: 'f6-l4-fc3',
        front: 'What is cost-push inflation? Give one cause.',
        back: 'Inflation caused by rising production costs that firms pass on to consumers. Cause: a sharp rise in global oil prices increases transport and manufacturing costs economy-wide.',
        hint: 'Costs are pushing prices up from the supply side.',
        tags: ['cost-push', 'inflation'],
      },
      {
        id: 'f6-l4-fc4',
        front: 'Why is mild deflation (falling prices) considered economically dangerous?',
        back: 'Falling prices encourage consumers to delay purchases (waiting for further falls), reducing demand. This cuts firm revenues → job losses → lower incomes → less spending → deeper deflation — a self-reinforcing deflationary spiral.',
        hint: 'Why buy today what will be cheaper tomorrow? That thinking kills economies.',
        tags: ['deflation', 'inflation'],
      },
      {
        id: 'f6-l4-fc5',
        front: 'What is hyperinflation and what typically causes it?',
        back: 'Hyperinflation is conventionally defined as inflation exceeding 50% per month. It is typically caused by governments financing massive deficits by printing money, rapidly expanding the money supply relative to output.',
        hint: 'Weimar Germany, Zimbabwe — governments printing money to cover debts.',
        tags: ['hyperinflation', 'inflation'],
      },
      {
        id: 'f6-l4-fc6',
        front: 'What is the "substitution bias" in the CPI and why does it cause the CPI to overstate inflation?',
        back: 'Substitution bias arises because the CPI uses a fixed basket of goods. When the price of one item rises, consumers rationally switch to cheaper substitutes — but the CPI keeps measuring the now-more-expensive original item. By not reflecting this substitution, the CPI overstates how much consumers actually spend to maintain their standard of living.',
        hint: 'Fixed basket cannot adapt when consumers switch — overstates cost of living.',
        tags: ['CPI', 'inflation', 'measurement', 'substitution-bias'],
      },
      {
        id: 'f6-l4-fc7',
        front: 'What is stagflation and which type of inflation typically causes it?',
        back: 'Stagflation is the simultaneous occurrence of high inflation and stagnant or falling economic output (often with rising unemployment). It is typically caused by a severe cost-push shock — such as an oil price spike — which raises prices across the economy while reducing productive capacity and output at the same time.',
        hint: 'Stagnation + inflation = stagflation; caused by supply shocks, not demand booms.',
        tags: ['stagflation', 'cost-push', 'inflation'],
      },
    ],
    quiz: [
      {
        id: 'f6-l4-q1',
        type: 'mcq',
        question:
          'A global shortage of semiconductors causes production costs for electronics and automobiles to rise sharply. Firms raise consumer prices to protect their profit margins. Which type of inflation does this illustrate?',
        options: [
          'Cost-push inflation',
          'Demand-pull inflation',
          'Hyperinflation',
          'Deflation',
        ],
        correctAnswer: 0,
        explanation:
          'Rising input costs (semiconductors) squeeze firm margins, and firms pass these higher costs on to consumers — this is the definition of cost-push inflation. There is no indication that aggregate demand has increased.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q2',
        type: 'mcq',
        question:
          'If the CPI rises from 120 to 126 over one year, what is the annual inflation rate?',
        options: [
          '5%',
          '6%',
          '20%',
          '26%',
        ],
        correctAnswer: 0,
        explanation:
          'Inflation rate = (126 − 120) / 120 × 100 = 6 / 120 × 100 = 5%. Always divide the change by the base (starting) value, not the new value.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q3',
        type: 'mcq',
        question:
          'Which of the following is a known limitation of the CPI as a measure of inflation?',
        options: [
          'It cannot immediately account for consumers switching to cheaper substitutes when one good becomes expensive',
          'It measures price changes for all goods produced in the economy, including investment goods',
          'It is recalculated only every five years, making it an unreliable monthly indicator',
          'It excludes food and energy prices entirely',
        ],
        correctAnswer: 0,
        explanation:
          'The substitution bias is a well-documented CPI flaw: the fixed basket cannot reflect consumers\' rational switch to cheaper alternatives when relative prices change. The other options are incorrect: the CPI covers consumer goods only (not investment goods), is calculated monthly, and typically includes food and energy in the headline measure.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q4',
        type: 'mcq',
        question:
          'The CPI in Year 1 is 105 and in Year 2 it is 110.25. What is the inflation rate between Year 1 and Year 2?',
        options: [
          '5%',
          '5.25%',
          '10.25%',
          '4.75%',
        ],
        correctAnswer: 0,
        explanation:
          'Inflation rate = (110.25 − 105) / 105 × 100 = 5.25 / 105 × 100 = 5%. Always use the earlier period (Year 1) as the base. The answer is exactly 5%, not 5.25% — the absolute CPI level is not the inflation rate.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q5',
        type: 'mcq',
        question:
          'A worker\'s nominal wage rises from $50,000 to $52,000 over a year in which inflation is 5%. What has happened to the worker\'s real wage?',
        options: [
          'It has fallen by approximately 1% — the nominal rise did not keep up with inflation',
          'It has risen by 4% because nominal wages rose',
          'It is unchanged because the nominal increase matches inflation',
          'It has risen by 2% — the nominal increase minus inflation',
        ],
        correctAnswer: 0,
        explanation:
          'Real wage change ≈ nominal wage growth − inflation = 4% − 5% = −1%. The worker\'s pay rose 4% ($50k to $52k) but prices rose 5%, so purchasing power actually fell by roughly 1%. Rising nominal wages can mask declining real wages when inflation exceeds wage growth.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q6',
        type: 'mcq',
        question:
          'During a post-pandemic boom, consumer spending surges as households spend accumulated savings. Supply chains are still disrupted, limiting firms\' ability to increase output quickly. What type of inflation is most likely, and why?',
        options: [
          'Demand-pull inflation, because booming demand is outstripping limited productive capacity',
          'Cost-push inflation, because supply chain disruptions raise input costs only',
          'Deflation, because supply shortages reduce output and thus prices',
          'Hyperinflation, because pandemic disruptions typically cause monetary collapse',
        ],
        correctAnswer: 0,
        explanation:
          'When aggregate demand surges (spending of accumulated savings) while supply capacity is constrained (disrupted supply chains), the "too much money chasing too few goods" condition for demand-pull inflation is satisfied. Note that supply chain disruptions could simultaneously contribute cost-push elements — making 2021–22 a hybrid case — but the primary driver described here is demand exceeding supply.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q7',
        type: 'mcq',
        question:
          'Which of the following best explains why most central banks target an inflation rate of around 2% rather than aiming for 0%?',
        options: [
          'Mild positive inflation provides a buffer against deflation and allows real wages to adjust downward without nominal pay cuts',
          'Zero inflation would permanently eliminate the business cycle',
          'A 2% target is required by international monetary law',
          'Higher inflation always stimulates more economic growth',
        ],
        correctAnswer: 0,
        explanation:
          'A 2% inflation target provides insurance against deflation (with its dangerous spiral) and gives firms the ability to cut real labour costs by keeping nominal wages flat while prices rise — important because workers strongly resist nominal pay cuts. It also gives monetary policy "room" to cut real interest rates in a downturn before hitting the zero lower bound.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q8',
        type: 'mcq',
        question:
          'A country experiences rising inflation alongside falling GDP and rising unemployment. Which term best describes this combination, and which type of inflation is the most likely cause?',
        options: [
          'Stagflation, most likely caused by a cost-push shock reducing supply while raising prices',
          'Deflation, caused by demand-pull inflation reversing sharply',
          'Hyperinflation, caused by the government printing money to fund deficits',
          'Disinflation, caused by falling demand bringing prices down gradually',
        ],
        correctAnswer: 0,
        explanation:
          'Stagflation — the combination of high inflation and economic stagnation — is the hallmark of a severe cost-push shock. When rising input costs (e.g. oil prices) simultaneously raise the price level and reduce productive capacity, output falls and unemployment rises while inflation accelerates. The 1970s OPEC oil shocks are the canonical historical example.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q9',
        type: 'mcq',
        question:
          'In a hyperinflationary economy, which of the following behaviours by citizens would be most rational and commonly observed?',
        options: [
          'Converting cash to physical goods or foreign currencies as quickly as possible, since money loses value by the hour',
          'Saving large amounts of domestic currency in bank accounts to earn high interest',
          'Reducing spending immediately to protect the purchasing power of savings',
          'Borrowing heavily in foreign currency to take advantage of low real interest rates',
        ],
        correctAnswer: 0,
        explanation:
          'In hyperinflation, the domestic currency\'s purchasing power collapses so rapidly that holding cash is irrational. Citizens rationally "flight to value": converting money into physical goods (food, land, foreign currencies) immediately, since goods retain real value while currency does not. This behaviour accelerates the velocity of money and worsens the hyperinflation further.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l4-q10',
        type: 'mcq',
        question:
          'The basket used to calculate the CPI assigns a 30% weight to housing costs, 20% to food, 15% to transport, and the remainder to other categories. If housing costs rise by 10% and all other prices are unchanged, what is the approximate impact on the overall CPI?',
        options: [
          'The CPI rises by approximately 3%',
          'The CPI rises by approximately 10%',
          'The CPI rises by approximately 30%',
          'The CPI rises by approximately 0.3%',
        ],
        correctAnswer: 0,
        explanation:
          'Each component contributes its weight × price change to the overall CPI change. Housing contribution = 30% × 10% = 3%. All other prices are unchanged, so their contributions are zero. Total CPI change ≈ 3%. This illustrates why heavily-weighted categories like housing and energy can drive the headline inflation rate even if most individual prices are stable.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Analyse the inflation surge of 2021–2023 in either the United States, the United Kingdom, or the Eurozone. Write a 400–500 word analysis that: (1) describes what happened to the CPI or equivalent price index during this period, using specific data, (2) applies the demand-pull vs cost-push framework to explain the causes, identifying evidence for each, (3) evaluates the central bank\'s response (interest rate increases) and explains which type of inflation the policy was designed to address, and (4) assesses whether the policy response was appropriate given the nature of the inflation.',
      rubric: 'Accurate description of the inflation episode with specific CPI data and dates (2 pts). Application of demand-pull and cost-push framework with evidence for each cause (3 pts). Correct explanation of how interest rate increases address inflation, with identification of the target type (2 pts). Balanced evaluation of the policy response, acknowledging trade-offs (2 pts). Quality of economic reasoning and use of correct terminology (1 pt). Total: 10 pts.',
      exampleTopics: [
        'U.S. inflation 2021–23: the role of fiscal stimulus cheques (demand-pull) vs energy and supply-chain shocks (cost-push)',
        'UK inflation 2022–23: energy price cap removal, Brexit supply disruptions, and wage-price spiral concerns',
        'Eurozone inflation and the ECB\'s delayed rate rises — was the central bank too slow to act?',
        'Turkey\'s inflation crisis (2021–22): a case study in what happens when a central bank cuts rates during high inflation',
        'India\'s food-price inflation: how agriculture supply shocks create cost-push inflation in emerging economies',
      ],
    },
  },

  // ── Lesson 5: AD/AS Overview ───────────────────────────────────────────────
  {
    id: 'f6-l5',
    moduleId: 'f6-intro-macro',
    title: 'Aggregate Demand and Aggregate Supply Overview',
    description:
      'Preview the AD/AS framework as the macroeconomic analogue to supply and demand.',
    order: 5,
    estimatedMinutes: 20,
    tags: ['AD', 'AS', 'macroeconomics'],
    content: {
      realWorldHook:
        'In microeconomics, you learned how supply and demand determine prices and quantities in individual markets. Macroeconomists use a powerful parallel framework — Aggregate Demand and Aggregate Supply — to explain the big questions: Why does the whole economy sometimes overheat? Why do recessions happen? Why can\'t a central bank simply make everyone richer by printing money? AD/AS is the model you\'ll use to answer all of these.',
      prerequisiteRecap: `The previous lesson distinguished demand-pull inflation (aggregate demand rising faster than productive capacity) from cost-push inflation (rising production costs pushing prices up). The AD/AS framework is the macroeconomic model that makes these distinctions precise: demand-pull inflation is a rightward shift of the AD curve, while cost-push inflation is a leftward shift of the SRAS curve — and the model also explains how business cycle phases, unemployment, and GDP all interact.`,

      recallQuestions: [
        {
          id: 'f6-l5-recall-1',
          type: 'mcq' as const,
          question: 'In 2022, a global energy price shock caused by supply disruptions dramatically raised production costs for firms across the economy. Prices rose while output fell. Which type of inflation does this illustrate?',
          options: [
            'Demand-pull inflation, because consumer spending drove prices up.',
            'Cost-push inflation, because rising input costs were passed on to consumers as higher prices.',
            'Hyperinflation, because the price rise exceeded 50% per month.',
            'Deflation, because output fell while prices rose.',
          ],
          correctAnswer: 1,
          explanation: 'When rising production costs (energy prices) squeeze firm margins and firms pass these on to consumers, this is cost-push inflation — it originates from the supply side. The simultaneous fall in output is what makes cost-push inflation particularly damaging: it produces stagflation (inflation and stagnation together), unlike demand-pull inflation which raises both prices and output.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f6-l5-recall-2',
          type: 'mcq' as const,
          question: 'The Consumer Price Index rises from 115 to 126.5 over one year. What is the annual inflation rate?',
          options: [
            '10%',
            '9.6%',
            '11.5%',
            '5%',
          ],
          correctAnswer: 0,
          explanation: 'Inflation rate = (126.5 − 115) / 115 × 100 = 11.5 / 115 × 100 = 10%. Always divide the change by the base (starting) CPI value, not the new value.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],

      conceptualExplanation:
        'Aggregate Demand (AD) is the total demand for all goods and services in an economy at different price levels. Just as individual demand curves slope downward, the AD curve slopes downward: when the overall price level rises, real wealth falls (the real-wealth effect), borrowing becomes more expensive (the interest-rate effect), and exports become less competitive abroad (the international-trade effect) — all reducing the quantity of real GDP demanded. AD is composed of the same four components as GDP: C + I + G + NX. Any change in these components shifts the entire AD curve: a rise in consumer confidence boosts C, shifting AD right; a tax increase reduces disposable income and shifts AD left.\n\nAggregate Supply (AS) represents the total quantity of goods and services that all firms in the economy are willing and able to produce at different price levels. Economists distinguish between Short-Run Aggregate Supply (SRAS) and Long-Run Aggregate Supply (LRAS). The SRAS curve slopes upward: when the overall price level rises, firms can charge more for their output even if input costs haven\'t risen yet, increasing profit margins and incentivising greater production. The LRAS curve is vertical, representing the economy\'s potential output — the level of real GDP that can be sustained when all resources are fully and efficiently employed. In the long run, the price level does not affect potential output; only improvements in technology, capital, or workforce quality can shift LRAS outward.\n\nThe macroeconomic equilibrium occurs where AD intersects SRAS. The intersection determines both the equilibrium real GDP (output) and the equilibrium price level simultaneously. If this intersection is to the left of LRAS, the economy has a recessionary gap — actual output is below potential, unemployment is above its natural rate. If the intersection is to the right of LRAS, the economy has an inflationary gap — it is overheating, demand exceeds sustainable capacity, and inflation accelerates.\n\nThe AD/AS model integrates everything studied so far in macroeconomics. Business cycle phases correspond to shifts in the AD/SRAS intersection relative to LRAS: expansions push output toward and beyond potential; recessions pull it below. Demand-pull inflation is an AD shift to the right beyond LRAS; cost-push inflation is a leftward SRAS shift. Fiscal and monetary policy tools are evaluated by how they shift AD or influence SRAS. The model will be developed in much greater depth in subsequent modules — this lesson gives you the conceptual map.',
      vocabulary: [
        {
          term: 'Aggregate Demand (AD)',
          definition:
            'The total demand for all final goods and services in an economy at each overall price level, comprising C + I + G + NX.',
          example:
            'A government stimulus package raises G, shifting the AD curve to the right and increasing equilibrium output.',
        },
        {
          term: 'Aggregate Supply (AS)',
          definition:
            'The total quantity of goods and services that firms in an economy are willing and able to produce at each overall price level.',
          example:
            'Rising production costs (e.g. a minimum wage increase) shift SRAS to the left, reducing output and raising the price level.',
        },
        {
          term: 'Recessionary Gap',
          definition:
            'A situation where the economy\'s actual output (real GDP) is below its potential output, associated with unemployment above the natural rate.',
          example:
            'During the 2008–09 recession, most developed economies operated with a recessionary gap as AD fell sharply.',
        },
        {
          term: 'Inflationary Gap',
          definition:
            'A situation where the economy\'s actual output exceeds its potential output, putting upward pressure on wages and prices.',
          example:
            'An overheating economy in a boom may experience an inflationary gap, prompting the central bank to raise interest rates.',
        },
      ],
      deeperDive:
        'The shape of the SRAS curve reflects the stickiness of wages and prices in the short run. Contracts fix wages and some input prices for months or years, so firms cannot immediately adjust costs when the overall price level changes. In the very short run, some economists argue even output prices are sticky, giving rise to models like the Keynesian horizontal AS (all adjustment comes through output, not prices) and the Classical vertical AS (all adjustment is through prices, no real output change). The AD/AS model presented here sits between these extremes as the standard mainstream synthesis.\n\nIn the long run, wages and input prices fully adjust. If the economy is in a recessionary gap, deflation (or at least disinflation) gradually lowers costs, shifting SRAS to the right until the economy self-corrects back to potential output. If it is in an inflationary gap, rising wages shift SRAS to the left, pushing real GDP back to potential at a higher price level. This self-correcting mechanism is theoretically elegant but can be painfully slow — Keynes famously remarked that "in the long run, we are all dead," justifying active short-run policy intervention to speed the adjustment.',
      commonMisconceptions: [
        'The AD curve slopes downward for the same reason as a microeconomic demand curve (income and substitution effects between goods). The AD curve slopes downward for different reasons: the real-wealth effect, interest-rate effect, and international-trade effect operate at the macroeconomic level on the overall price level, not relative prices between goods.',
        'LRAS can shift when the government spends more. Government spending shifts AD, not LRAS. LRAS can only shift outward through improvements in productive capacity: better technology, more capital, a larger or more skilled workforce.',
        'Equilibrium in AD/AS means the economy is at full employment. The AD/SRAS intersection gives the short-run equilibrium, which can be above or below full employment (LRAS). Only when all three curves intersect is the economy at full employment with price stability.',
      ],
      examinerTip:
        'When drawing AD/AS diagrams in exams, always label all axes (Price Level on the vertical axis, Real GDP on the horizontal), include LRAS as a vertical line, and clearly show the direction of any shifts with arrows. For any policy question, identify which curve shifts, the direction of the shift, and the resulting change in both the price level and real GDP.',
      didYouKnow:
        'The AD/AS model as taught today is a synthesis developed primarily in the 1970s–80s to reconcile Keynesian and Monetarist insights. Neither John Maynard Keynes (writing in the 1930s) nor Milton Friedman (writing in the 1960s–70s) used this exact diagram — it was largely codified by textbook authors like Robert Gordon and N. Gregory Mankiw seeking a teachable middle ground between the two schools.',
      thinkAboutIt: {
        question: 'If the government cuts taxes to stimulate the economy, does this shift AD or SRAS or LRAS? What happens in the short run and long run?',
        answer: 'A tax cut increases households\' disposable income, boosting consumption (C) and therefore shifting AD to the right — it does not directly shift SRAS or LRAS. In the short run, the rightward AD shift moves the AD/SRAS intersection to a higher level of real GDP and a higher price level, reducing the recessionary gap and lowering unemployment. In the long run, if the economy was already at potential output, wages rise to match the higher price level, shifting SRAS left until real GDP returns to its original LRAS level at a permanently higher price level — the long-run effect is purely inflationary with no lasting output gain. This is why Keynesians favour stimulus during recessions (when there is slack) and why supply-side economists argue that tax cuts must be paired with productivity improvements to have lasting real effects.',
      },
    },
    flashcards: [
      {
        id: 'f6-l5-fc1',
        front: 'Why does the Aggregate Demand curve slope downward?',
        back: 'Three effects: (1) Real-wealth effect — higher prices erode purchasing power; (2) Interest-rate effect — higher prices raise interest rates, reducing investment; (3) International-trade effect — higher domestic prices make exports less competitive, reducing NX.',
        hint: 'Three distinct reasons — not the same as microeconomic substitution.',
        tags: ['AD', 'macroeconomics'],
      },
      {
        id: 'f6-l5-fc2',
        front: 'What is the difference between SRAS and LRAS?',
        back: 'SRAS slopes upward (short-run: input costs are sticky so higher prices raise profit margins and output). LRAS is vertical at potential GDP (long-run: all costs adjust, so the price level does not affect real output).',
        hint: 'Short run: sticky wages → upward slope. Long run: fully flexible → vertical.',
        tags: ['AS', 'SRAS', 'LRAS'],
      },
      {
        id: 'f6-l5-fc3',
        front: 'What is a recessionary gap and what does it imply about unemployment?',
        back: 'A recessionary gap occurs when actual real GDP is below potential output (LRAS). It implies unemployment is above the natural rate — there is spare capacity in the economy.',
        hint: 'Left of LRAS = below potential = too many idle workers.',
        tags: ['recessionary-gap', 'AD', 'AS'],
      },
      {
        id: 'f6-l5-fc4',
        front: 'How does demand-pull inflation appear on an AD/AS diagram?',
        back: 'AD shifts to the right, moving the equilibrium along SRAS to a higher price level and higher real GDP. If the new equilibrium exceeds LRAS, the economy is overheating — this is an inflationary gap.',
        hint: 'AD right → higher P and higher Y in the short run.',
        tags: ['demand-pull', 'AD', 'AS'],
      },
      {
        id: 'f6-l5-fc5',
        front: 'What can shift the Long-Run Aggregate Supply (LRAS) curve outward?',
        back: 'Improvements in productive capacity: technological progress, investment in physical capital, growth in the labour force, improvements in education and skills, and better institutions or property rights.',
        hint: 'Only real productive capacity improvements move LRAS — not demand-side policies.',
        tags: ['LRAS', 'AS', 'economic-growth'],
      },
      {
        id: 'f6-l5-fc6',
        front: 'Name the three reasons the AD curve slopes downward and briefly explain each.',
        back: '(1) Real-wealth effect: a higher price level erodes the real value of money holdings, making consumers feel poorer and spend less. (2) Interest-rate effect: higher prices raise demand for money, pushing interest rates up, reducing investment and durable-goods purchases. (3) International-trade effect: higher domestic prices make exports more expensive abroad and imports cheaper at home, reducing net exports (NX).',
        hint: 'Wealth, interest rates, trade — all reduce real GDP demanded when the price level rises.',
        tags: ['AD', 'macroeconomics', 'slopes'],
      },
      {
        id: 'f6-l5-fc7',
        front: 'What is the long-run self-correction mechanism in the AD/AS model?',
        back: 'If the economy is in a recessionary gap (output below potential), unemployment above the NRU puts downward pressure on wages; falling wages shift SRAS rightward until output returns to potential at a lower price level. If in an inflationary gap, tight labour markets push wages up, shifting SRAS left until output returns to potential at a higher price level. In both cases, the economy self-corrects — but slowly.',
        hint: 'Wage flexibility shifts SRAS to restore long-run equilibrium at LRAS.',
        tags: ['SRAS', 'LRAS', 'self-correction', 'macroeconomics'],
      },
    ],
    quiz: [
      {
        id: 'f6-l5-q1',
        type: 'mcq',
        question:
          'The government introduces a large tax cut for households, raising disposable income. Using the AD/AS framework, what is the most likely short-run effect?',
        options: [
          'AD shifts right, raising both the price level and real GDP',
          'SRAS shifts right, lowering the price level and raising real GDP',
          'LRAS shifts right, increasing potential output',
          'AD shifts left, lowering the price level and real GDP',
        ],
        correctAnswer: 0,
        explanation:
          'A household tax cut increases disposable income and boosts consumption (C), shifting AD to the right. In the short run this raises both real GDP and the overall price level along the upward-sloping SRAS. Tax cuts do not directly shift SRAS or LRAS.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q2',
        type: 'mcq',
        question:
          'An economy\'s actual real GDP is below its potential output (LRAS). Which statement correctly describes this situation?',
        options: [
          'The economy has a recessionary gap, with unemployment above the natural rate',
          'The economy has an inflationary gap, with inflation accelerating',
          'The economy is at long-run equilibrium with full employment',
          'LRAS will automatically shift left to match actual output',
        ],
        correctAnswer: 0,
        explanation:
          'When actual output falls short of potential (LRAS), the economy has a recessionary gap. Resources including labour are underutilised, so unemployment exceeds the natural rate. This is the opposite of an inflationary gap, and LRAS does not shift left — it reflects maximum sustainable capacity.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q3',
        type: 'mcq',
        question:
          'A major drought destroys a large share of agricultural output, raising food prices and increasing production costs across the economy. How does this appear in the AD/AS model?',
        options: [
          'SRAS shifts left, raising the price level and reducing real GDP (stagflation)',
          'AD shifts left, lowering both the price level and real GDP',
          'LRAS shifts left, permanently reducing potential output',
          'SRAS shifts right, lowering the price level and raising real GDP',
        ],
        correctAnswer: 0,
        explanation:
          'A supply shock that raises costs shifts SRAS to the left. The economy moves to a new short-run equilibrium with a higher price level and lower real GDP — the combination of inflation and falling output known as stagflation. This is cost-push inflation in the AD/AS model.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q4',
        type: 'mcq',
        question:
          'Which of the following correctly explains why the AD curve slopes downward, and distinguishes it from a microeconomic demand curve?',
        options: [
          'AD slopes down because of the real-wealth, interest-rate, and international-trade effects — not because of substitution between goods as in microeconomics',
          'AD slopes down for the same reason as microeconomic demand — consumers substitute cheaper goods when prices rise',
          'AD slopes down because firms produce less when the price level rises, reducing income',
          'AD slopes down because a higher price level always triggers a recession',
        ],
        correctAnswer: 0,
        explanation:
          'This is a critical distinction: the AD curve\'s downward slope reflects three macroeconomic effects (wealth, interest-rate, trade) operating on the overall price level, not relative prices between goods. Microeconomic substitution between goods does not operate at the aggregate level — when all prices rise, there are no cheaper substitutes within the economy to switch to.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q5',
        type: 'mcq',
        question:
          'A central bank raises interest rates to cool an overheating economy. In the AD/AS model, what is the primary short-run effect?',
        options: [
          'AD shifts left, reducing both the price level and real GDP',
          'SRAS shifts left, raising the price level and reducing real GDP',
          'LRAS shifts left, permanently reducing potential output',
          'AD shifts right, raising the price level further',
        ],
        correctAnswer: 0,
        explanation:
          'Higher interest rates make borrowing more expensive, reducing investment (I) and consumer spending on credit (C). They may also attract foreign capital, appreciating the exchange rate and reducing NX. All of these reduce the components of AD, shifting it left — the intended effect of contractionary monetary policy to reduce an inflationary gap.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q6',
        type: 'mcq',
        question:
          'A government invests heavily in education and infrastructure, increasing the skills of the workforce and the economy\'s productive capacity over 10 years. In the AD/AS model, which curve shifts and in which direction?',
        options: [
          'LRAS shifts right, increasing potential output at every price level',
          'AD shifts right, increasing current real GDP',
          'SRAS shifts right, temporarily reducing the price level',
          'LRAS shifts left, because government spending crowds out private investment',
        ],
        correctAnswer: 0,
        explanation:
          'Increases in human capital (skilled workforce) and physical infrastructure permanently raise the economy\'s productive capacity — this shifts LRAS rightward. AD may also shift right in the short run due to higher government spending (G), but the long-run supply-side improvement is represented by LRAS. LRAS shifts outward only through genuine improvements to productive potential.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q7',
        type: 'mcq',
        question:
          'In the AD/AS model, the economy is in long-run equilibrium where AD, SRAS, and LRAS all intersect. Consumer confidence then collapses due to a financial crisis, reducing spending sharply. What is the new short-run equilibrium, and what gap has appeared?',
        options: [
          'AD shifts left; new equilibrium is to the left of LRAS at a lower price level and lower real GDP — a recessionary gap',
          'SRAS shifts right; new equilibrium is to the right of LRAS — an inflationary gap',
          'LRAS shifts left to meet the new AD — no gap appears',
          'AD shifts left; new equilibrium is to the right of LRAS — an inflationary gap',
        ],
        correctAnswer: 0,
        explanation:
          'Collapsing consumer confidence reduces C, shifting AD to the left. The new AD/SRAS intersection is to the left of LRAS: real GDP is below potential and a recessionary gap opens. Price level falls slightly along the SRAS. This is the AD/AS representation of a demand-driven recession.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q8',
        type: 'mcq',
        question:
          'According to the long-run self-correction mechanism in the AD/AS model, what will happen to SRAS if the economy remains in a recessionary gap for an extended period?',
        options: [
          'Unemployment above the natural rate puts downward pressure on wages, lowering costs and eventually shifting SRAS right until output returns to potential',
          'LRAS shifts left to meet actual output, eliminating the gap permanently',
          'AD automatically shifts right as the government must intervene',
          'SRAS shifts left further as firms raise prices to compensate for lower volumes',
        ],
        correctAnswer: 0,
        explanation:
          'In a recessionary gap, unemployment is above the NRU. Excess labour supply puts downward pressure on wages over time. As wages fall, production costs decrease, and SRAS gradually shifts rightward until the AD/SRAS intersection returns to the LRAS level — restoring full employment at a lower price level. This is the classical self-correction, though it can take years.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q9',
        type: 'mcq',
        question:
          'An economy operating with an inflationary gap (actual GDP above potential) experiences a simultaneous negative supply shock. What is the most likely combined outcome?',
        options: [
          'Severe stagflation — rising prices accelerated further by the supply shock, combined with falling output toward or below potential',
          'The supply shock cancels out the inflationary gap, returning the economy to equilibrium',
          'Real GDP rises above potential further as supply increases',
          'The price level falls as the supply shock reduces productive capacity',
        ],
        correctAnswer: 0,
        explanation:
          'Starting from an inflationary gap (already above potential, high inflation risk), a negative supply shock (leftward SRAS shift) simultaneously worsens inflation (higher price level) and reduces real GDP. The outcome is severe stagflation — the worst possible macroeconomic scenario combining both overheating and contraction pressures at once.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f6-l5-q10',
        type: 'mcq',
        question:
          'Keynes famously argued that "in the long run, we are all dead." In the context of the AD/AS model\'s self-correction mechanism, what policy implication did he draw from this?',
        options: [
          'Governments should use active fiscal stimulus to close recessionary gaps rather than waiting for slow wage adjustments to shift SRAS rightward',
          'Long-run growth is impossible because all economies eventually decline',
          'Monetary policy is always more effective than fiscal policy in closing recessionary gaps',
          'LRAS is irrelevant to economic policymaking and should be ignored',
        ],
        correctAnswer: 0,
        explanation:
          'Keynes was critiquing the classical argument that economies self-correct via wage flexibility over time. He argued that self-correction through falling wages is too slow and too painful — unemployment can persist for years or decades. Active government intervention (fiscal stimulus to shift AD right) can close recessionary gaps faster and with less human cost than waiting for the long-run SRAS adjustment.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
    lessonAssignment: {
      prompt: 'Choose a recent government stimulus or central bank policy decision (e.g. the U.S. CARES Act 2020, the ECB\'s 2022–23 rate hikes, the UK\'s 2022 mini-budget, or Japan\'s quantitative easing programme). Write a 400–500 word AD/AS analysis that: (1) identifies which curve(s) the policy was intended to shift and in which direction, (2) diagrams or clearly describes the shift(s) and the resulting change in equilibrium price level and real GDP, (3) identifies whether the policy was addressing a recessionary gap, an inflationary gap, or attempting to shift LRAS, and (4) evaluates whether the short-run and long-run outcomes aligned with the policy intent.',
      rubric: 'Correct identification of which AD/AS curve(s) the policy shifts and direction (2 pts). Clear description (or diagram) of the shift with accurate label of new equilibrium price level and real GDP (3 pts). Correct identification of the gap type being addressed (or supply-side intent) with justification (2 pts). Balanced evaluation of short-run vs long-run outcomes, acknowledging unintended effects where relevant (2 pts). Use of correct economic terminology throughout (1 pt). Total: 10 pts.',
      exampleTopics: [
        'U.S. CARES Act (2020): massive AD rightward shift during a recession — did it overshoot into an inflationary gap?',
        'U.S. Federal Reserve rate hikes (2022–23): contractionary monetary policy to shift AD left and close an inflationary gap',
        'UK mini-budget (September 2022): unfunded tax cuts shifting AD right during high inflation — what went wrong?',
        'Japan\'s Abenomics (2013–): monetary expansion plus fiscal stimulus plus structural reforms — the three arrows and LRAS',
        'ECB\'s negative interest rates (2014–22): an attempt to stimulate AD in a recessionary gap — did it work?',
      ],
    },
  },
]
