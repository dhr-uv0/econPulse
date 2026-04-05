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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
]
