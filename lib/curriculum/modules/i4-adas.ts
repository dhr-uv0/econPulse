import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'i4-adas',
  title: 'The AD/AS Framework',
  description: 'Build the workhorse model of macroeconomics and use it to analyse economic fluctuations and policy.',
  tier: 'INTERMEDIATE' as const,
  track: 'INTERMEDIATE' as const,
  unit: 4,
  estimatedHours: 4,
  color: '#3b82f6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ── Lesson 1 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l1',
    moduleId: 'i4-adas',
    title: 'Aggregate Demand — Components and Shifts',
    description:
      'Derive the AD curve from the wealth, interest rate, and exchange rate effects; identify all factors that shift AD.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['aggregate-demand', 'AD-curve', 'shifts'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous module concluded by measuring income inequality with the Lorenz curve and Gini coefficient, and identifying skill-biased technological change, globalisation, and declining union power as drivers of rising inequality. The AD/AS framework now shifts perspective from individual markets and factor markets to the macroeconomy as a whole, asking what determines the overall price level and real output.`,
      recallQuestions: [
        {
          id: 'i4-l1-recall-1',
          type: 'mcq' as const,
          question: 'Country A has a Gini coefficient of 0.28 and Country B has a Gini of 0.52. Which conclusion is correct?',
          options: [
            'Country A has a more equal income distribution than Country B.',
            'Country B has a higher average income than Country A.',
            'Country A must have a higher GDP per capita than Country B.',
            'Country B has fewer people living in poverty than Country A.',
          ],
          correctAnswer: 0,
          explanation: 'A lower Gini coefficient means the Lorenz curve is closer to the line of perfect equality — income is distributed more evenly. The Gini says nothing directly about average incomes, poverty headcounts, or GDP per capita.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'After the 2008 financial crisis, household wealth in the United States fell by roughly $13 trillion almost overnight as housing prices collapsed and stock markets plunged. Consumer spending cratered, illustrating how a single blow to wealth can drag an entire economy\'s aggregate demand downward — a real-world demonstration of the wealth effect that anchors the AD curve.',
      conceptualExplanation:
        'Aggregate demand (AD) represents the total quantity of goods and services that all sectors of an economy — households, firms, government, and the rest of the world — plan to purchase at each price level. Unlike a single market\'s demand curve, AD slopes downward for three distinct reasons that all operate through the price level. The wealth effect states that a higher price level erodes the real value of financial assets, making households feel poorer and spend less. The interest rate effect holds that a higher price level raises money demand, pushing up interest rates, which discourages investment and durable-goods purchases. The exchange rate effect argues that higher domestic prices make exports less competitive and imports cheaper, shrinking net exports. Together these three effects guarantee a downward-sloping relationship between the price level and real GDP demanded.\n\nThe components of aggregate demand map directly onto the national income accounting identity: AD = C + I + G + (X − M). Consumption (C) is driven by disposable income, consumer confidence, wealth, and the interest rate on credit. Investment (I) depends on real interest rates, expected profitability, and business confidence. Government spending (G) is a policy variable set by fiscal authorities. Net exports (X − M) respond to domestic income, foreign income, exchange rates, and relative price levels. Any change in one of these underlying determinants — without a change in the domestic price level — produces a shift of the entire AD curve rather than a movement along it.\n\nShifts of the AD curve are central to macroeconomic analysis. Expansionary fiscal policy (higher G or lower taxes) shifts AD rightward; contractionary policy shifts it leftward. A central bank that cuts interest rates stimulates I and C, shifting AD right. A depreciation of the domestic currency boosts exports and reduces imports, also shifting AD right. Consumer or business confidence shocks can move the curve independently of any policy action — a surge of optimism raises C and I simultaneously, creating a powerful rightward shift. Understanding which component is moving, and why, allows economists to predict the magnitude and composition of the overall demand change.',
      vocabulary: [
        {
          term: 'Wealth Effect',
          definition:
            'The mechanism by which a change in the price level alters the real purchasing power of consumers\' financial assets, causing a change in consumption spending.',
          example:
            'When inflation erodes the real value of savings accounts, households cut back spending — illustrating the wealth effect pulling the quantity of AD demanded lower at that price level.',
        },
        {
          term: 'Interest Rate Effect',
          definition:
            'The channel through which a higher price level raises money demand, pushing up interest rates and reducing interest-sensitive spending such as investment and consumer durables.',
          example:
            'A rise in the price level prompts firms to hold more money for transactions; competition for limited money supply bids interest rates up, cooling investment — a movement along the AD curve.',
        },
        {
          term: 'Exchange Rate Effect',
          definition:
            'The mechanism by which a higher domestic price level makes domestically produced goods more expensive relative to foreign goods, reducing exports and increasing imports, thereby lowering net exports and the quantity of AD demanded.',
          example:
            'If US prices rise relative to European prices, American cars become pricier for Europeans, reducing US exports and lowering the quantity of US AD demanded at that price level.',
        },
      ],
      examinerTip:
        'Examiners frequently ask students to distinguish a movement along the AD curve (caused solely by a change in the domestic price level) from a shift of the AD curve (caused by any other determinant). Always start your answer by identifying which component of AD is affected (C, I, G, or NX) and why the price level itself is not the trigger. Drawing a clearly labelled diagram with the original and new AD curves, and marking the shift with an arrow, consistently earns full marks.',
    },
    flashcards: [
      {
        id: 'i4-l1-fc1',
        front: 'What are the three effects that explain the downward slope of the AD curve?',
        back: 'The wealth effect (higher prices reduce real asset values → less C), the interest rate effect (higher prices raise money demand → higher interest rates → less I), and the exchange rate effect (higher prices make exports pricier → less NX).',
        hint: 'Think about how a price-level rise affects assets, borrowing costs, and trade competitiveness.',
        tags: ['aggregate-demand', 'AD-curve'],
      },
      {
        id: 'i4-l1-fc2',
        front: 'List the four components of aggregate demand.',
        back: 'Consumption (C), Investment (I), Government spending (G), and Net Exports (X − M). Together: AD = C + I + G + (X − M).',
        hint: 'The national income identity is your memory aid.',
        tags: ['aggregate-demand', 'components'],
      },
      {
        id: 'i4-l1-fc3',
        front: 'What is the difference between a movement along the AD curve and a shift of the AD curve?',
        back: 'A movement along the AD curve is caused exclusively by a change in the domestic price level (the variable on the vertical axis). A shift of the AD curve is caused by any change in a determinant of AD other than the price level, such as taxes, interest rates, consumer confidence, or exchange rates.',
        hint: 'Ask: is the price level the cause, or is something else changing?',
        tags: ['AD-curve', 'shifts'],
      },
      {
        id: 'i4-l1-fc4',
        front: 'Give two examples of events that shift AD to the right.',
        back: 'Any two of: (1) a cut in income taxes that raises disposable income and consumer spending; (2) a central bank interest rate cut that cheapens borrowing and boosts investment; (3) a surge in consumer confidence; (4) a currency depreciation that makes exports cheaper abroad; (5) an increase in government spending.',
        hint: 'Think about what could make households, firms, government, or foreigners want to buy more at every price level.',
        tags: ['AD-curve', 'shifts'],
      },
    ],
    quiz: [
      {
        id: 'i4-l1-q1',
        type: 'mcq',
        question:
          'Which of the following best explains why the aggregate demand curve slopes downward?',
        options: [
          'Consumers substitute cheaper goods for more expensive ones within the domestic economy.',
          'A higher price level reduces real wealth, raises interest rates, and reduces net exports, all lowering the quantity of real GDP demanded.',
          'Firms produce less output when prices are high because costs rise proportionally.',
          'Higher prices reduce nominal GDP, causing firms to cut employment and production.',
        ],
        correctAnswer: 1,
        explanation:
          'The AD curve slopes downward because of three effects that link the price level to the quantity of real output demanded: the wealth effect, the interest rate effect, and the exchange rate effect. Option A describes a microeconomic substitution effect, not an AD explanation. Options C and D confuse supply-side reasoning or nominal vs. real distinctions.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l1-q2',
        type: 'mcq',
        question:
          'A booming housing market causes household wealth to rise significantly. What is the most direct macroeconomic effect?',
        options: [
          'The SRAS curve shifts rightward as construction costs fall.',
          'The AD curve shifts leftward because higher asset prices raise interest rates.',
          'The AD curve shifts rightward because higher wealth stimulates consumer spending.',
          'There is a movement along the AD curve due to a change in the price level.',
        ],
        correctAnswer: 2,
        explanation:
          'Rising household wealth — via the wealth effect — increases consumers\' willingness and ability to spend at every price level, shifting the entire AD curve to the right. This is a shift (change in a non-price-level determinant), not a movement along the curve. The SRAS curve is unaffected by household wealth.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l1-q3',
        type: 'mcq',
        question:
          'If the domestic currency appreciates significantly against trading partners\' currencies, the most likely short-run effect on aggregate demand is:',
        options: [
          'AD shifts right because import prices fall, boosting real household purchasing power for all goods.',
          'AD shifts left because exports become more expensive abroad and imports become cheaper domestically, reducing net exports.',
          'AD is unchanged because the central bank will offset currency movements with interest rate changes.',
          'There is a movement along the AD curve to a higher quantity demanded as the price level falls.',
        ],
        correctAnswer: 1,
        explanation:
          'Currency appreciation makes domestic exports more expensive for foreigners (reducing X) and makes imports cheaper for domestic consumers (raising M). Both effects reduce net exports (X − M), a component of AD, shifting the AD curve leftward. The other options either misidentify the direction, assume central bank intervention that is not stated, or confuse a shift with a movement along the curve.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l2',
    moduleId: 'i4-adas',
    title: 'Short-Run Aggregate Supply — Wage Stickiness',
    description:
      'Derive SRAS assuming sticky wages and prices; explain why the economy can operate below or above full employment.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['SRAS', 'sticky-wages', 'output-gap'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson derived the aggregate demand curve, showing it slopes downward because a higher price level reduces real wealth, raises interest rates, and erodes export competitiveness — and identified the four components (C + I + G + NX) that can shift the entire curve. Short-run aggregate supply explains what happens on the supply side of this macroeconomic model, particularly why firms respond differently to price-level changes in the short run versus the long run.`,
      recallQuestions: [
        {
          id: 'i4-l2-recall-1',
          type: 'mcq' as const,
          question: 'A booming housing market causes household wealth to rise significantly. What is the most direct effect on the AD curve?',
          options: [
            'AD shifts rightward because higher wealth stimulates consumer spending at every price level.',
            'AD shifts leftward because higher asset prices raise interest rates.',
            'There is a movement along the AD curve due to a change in the price level.',
            'The SRAS curve shifts rightward as construction costs fall.',
          ],
          correctAnswer: 0,
          explanation: 'Rising household wealth — via the wealth effect — increases consumers\' willingness and ability to spend at every price level, shifting the entire AD curve rightward. This is a shift of AD (a non-price-level determinant changed), not a movement along it.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'During the Great Recession (2008–2009), US unemployment soared above 10 % even as the price level continued to inch upward. Wages did not fall quickly enough to clear the labour market — union contracts, minimum wage laws, and workers\' resistance to nominal pay cuts all kept wages sticky downward. This real-world episode is a near-perfect illustration of the short-run aggregate supply model built on wage stickiness.',
      conceptualExplanation:
        'The short-run aggregate supply (SRAS) curve describes the positive relationship between the price level and the quantity of real output that firms are willing and able to produce, holding input costs — especially nominal wages — fixed. The core assumption is that nominal wages are "sticky": they do not adjust instantly to changes in the price level because of multi-year labour contracts, minimum wage legislation, efficiency-wage considerations, and the psychological resistance of workers to nominal pay cuts. When the price level rises while wages remain unchanged, firms\' profit margins improve, incentivising them to hire more workers and expand output. When the price level falls while wages stay put, real labour costs rise, squeezing profits and prompting firms to cut output. The result is an upward-sloping SRAS curve.\n\nThe SRAS curve shifts when the underlying input costs change. The most important shifter is expected inflation: if workers anticipate higher prices in the future, they will bargain for higher nominal wages in the next contract cycle, raising firms\' costs and shifting SRAS leftward (supply decreases). Other shifters include changes in commodity prices (especially energy and raw materials), changes in the price of imported inputs, productivity improvements, and government supply-side policies such as subsidies or regulations. A rightward SRAS shift means firms are willing to supply more output at every price level; a leftward shift means they supply less.\n\nBecause wages are sticky in the short run but fully flexible in the long run, the economy can find itself operating at a level of output different from its long-run potential (full-employment output, Y*). When actual output (Y) exceeds Y*, the economy is in an inflationary gap — unemployment is below its natural rate, labour markets are tight, and upward wage pressure is building. When Y falls short of Y*, the economy is in a recessionary gap — workers are unemployed and capacity is idle. Both gaps are temporary: the self-correcting mechanism eventually pushes wages and the SRAS curve back toward long-run equilibrium, though the speed of adjustment is hotly debated.',
      vocabulary: [
        {
          term: 'Sticky Wages',
          definition:
            'The tendency of nominal wages to adjust slowly to changes in economic conditions, particularly downward, due to contracts, laws, and social norms — the key assumption behind the upward-sloping SRAS curve.',
          example:
            'A three-year collective bargaining agreement locks in a $25/hour wage rate even if the price level falls and the real wage rises above market-clearing, causing firms to cut employment rather than reduce wages.',
        },
        {
          term: 'Short-Run Aggregate Supply (SRAS)',
          definition:
            'The positive relationship between the price level and the quantity of real GDP that firms willingly produce in the short run, when nominal input costs (especially wages) are held constant.',
          example:
            'If consumer prices rise 3 % while wage contracts are fixed, firms\' profit margins increase and they hire additional workers to produce more output — illustrated as a movement up along the SRAS curve.',
        },
        {
          term: 'Output Gap',
          definition:
            'The difference between an economy\'s actual real GDP and its potential (full-employment) GDP, expressed as a percentage of potential GDP; positive when actual output exceeds potential (inflationary gap) and negative when actual output falls short (recessionary gap).',
          example:
            'If potential GDP is $20 trillion and actual GDP is $19 trillion, there is a negative output gap of 5 %, indicating significant spare capacity and high unemployment.',
        },
      ],
      examinerTip:
        'When drawing AD/AS diagrams, label the SRAS curve clearly and mark the short-run equilibrium price level and output. If a question asks about wage stickiness, explain the mechanism explicitly: wages do not fall quickly → real labour costs rise → firms reduce hiring and output. Avoid the common error of saying "SRAS shifts because the price level changed" — price-level changes cause movements along SRAS, not shifts.',
    },
    flashcards: [
      {
        id: 'i4-l2-fc1',
        front: 'Why does the SRAS curve slope upward?',
        back: 'Because nominal wages are sticky in the short run. When the price level rises, output prices increase while wages remain fixed, improving profit margins and incentivising firms to produce more. A lower price level with fixed wages squeezes profits and reduces output.',
        hint: 'Focus on what happens to firm profitability when prices change but wages do not.',
        tags: ['SRAS', 'sticky-wages'],
      },
      {
        id: 'i4-l2-fc2',
        front: 'Name three factors that shift the SRAS curve.',
        back: '(1) Changes in input prices (e.g., oil prices — a rise shifts SRAS left); (2) Changes in expected inflation (higher expectations shift SRAS left as workers demand higher wages); (3) Changes in productivity (an improvement shifts SRAS right, lowering per-unit costs).',
        hint: 'Think: what can change firms\' costs of production independently of the current price level?',
        tags: ['SRAS', 'shifts'],
      },
      {
        id: 'i4-l2-fc3',
        front: 'What is a recessionary gap and what does it look like on an AD/AS diagram?',
        back: 'A recessionary gap occurs when actual real GDP (Y) is less than potential GDP (Y*). On the diagram, the short-run equilibrium (intersection of AD and SRAS) lies to the left of the LRAS curve, with output below full employment and the price level below long-run equilibrium.',
        hint: 'Less-than-potential output = spare capacity = high unemployment.',
        tags: ['output-gap', 'recessionary-gap'],
      },
      {
        id: 'i4-l2-fc4',
        front: 'Why are wages considered sticky downward but not upward?',
        back: 'Workers strongly resist nominal wage cuts (money illusion, fairness norms, union contracts), so wages rarely fall quickly. However, wages can rise more readily when labour markets tighten because workers bargain for increases. This asymmetry means the economy adjusts faster to positive demand shocks than to negative ones.',
        hint: 'Think about human psychology and institutional constraints on wage reductions.',
        tags: ['sticky-wages', 'output-gap'],
      },
    ],
    quiz: [
      {
        id: 'i4-l2-q1',
        type: 'mcq',
        question:
          'The short-run aggregate supply curve slopes upward primarily because:',
        options: [
          'Firms can always hire additional workers at the same wage when output prices rise.',
          'Nominal wages are slow to adjust, so rising output prices improve profit margins and encourage greater production.',
          'Higher output prices reduce consumer purchasing power, leading firms to sell more units to maintain revenue.',
          'The government fixes nominal wages, allowing firms to profit when the price level rises.',
        ],
        correctAnswer: 1,
        explanation:
          'The SRAS curve slopes upward because nominal wages are sticky. When the price level rises while wages are fixed, profit margins widen and firms expand output. Option A ignores the stickiness. Option C describes a demand-side mechanism, not a supply mechanism. Option D is factually incorrect — governments do not generally fix all wages.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l2-q2',
        type: 'mcq',
        question:
          'Oil prices spike globally, raising production costs for most industries. What happens to the SRAS curve?',
        options: [
          'SRAS shifts rightward because higher oil prices represent greater resource availability.',
          'There is a movement along the SRAS curve as firms respond to the higher price level.',
          'SRAS shifts leftward because higher input costs reduce the amount firms are willing to supply at every price level.',
          'SRAS is unaffected; only the AD curve changes when oil prices rise.',
        ],
        correctAnswer: 2,
        explanation:
          'An oil price spike raises production costs across the economy. Since firms face higher costs at every price level, they are willing to supply less output — the SRAS curve shifts leftward (decreases). This is a classic adverse supply shock. Options A and D are incorrect directions; Option B confuses a shift with a movement along the curve.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l2-q3',
        type: 'mcq',
        question:
          'An economy\'s actual real GDP is $18 trillion while potential GDP is $20 trillion. This situation is best described as:',
        options: [
          'An inflationary gap of $2 trillion, with unemployment below its natural rate.',
          'A recessionary gap of $2 trillion, with unemployment above its natural rate.',
          'Long-run equilibrium, because the economy always produces at potential.',
          'A supply-side surplus, caused by excessive government spending.',
        ],
        correctAnswer: 1,
        explanation:
          'When actual GDP ($18 trillion) is below potential GDP ($20 trillion), the economy has a recessionary (negative) output gap of $2 trillion. Resources are underutilised, so unemployment exceeds its natural rate. An inflationary gap would require actual GDP to exceed potential. The economy does not automatically remain at potential — that is the point of the SRAS model.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l3',
    moduleId: 'i4-adas',
    title: 'Long-Run Aggregate Supply — Classical vs. Keynesian',
    description:
      'Contrast the vertical LRAS (classical) with the Keynesian view; understand the output gap concept.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['LRAS', 'classical', 'Keynesian'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that the SRAS curve slopes upward because nominal wages are sticky: when the price level rises while wages remain fixed, profit margins improve and firms expand output. The long-run aggregate supply curve asks what happens once wages fully adjust — and whether the economy automatically returns to its potential output.`,
      recallQuestions: [
        {
          id: 'i4-l3-recall-1',
          type: 'mcq' as const,
          question: 'Oil prices spike globally, raising production costs for most industries. What happens to the SRAS curve?',
          options: [
            'SRAS shifts leftward because higher input costs reduce the amount firms are willing to supply at every price level.',
            'SRAS shifts rightward because higher oil prices represent greater resource availability.',
            'There is a movement along the SRAS curve as firms respond to the higher price level.',
            'SRAS is unaffected; only the AD curve changes when oil prices rise.',
          ],
          correctAnswer: 0,
          explanation: 'An oil price spike raises production costs at every output level, so firms are willing to supply less at any given price level — the SRAS curve shifts leftward. This is a supply-side shifter (changing input costs), not a price-level change, so it shifts the curve rather than moving along it.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'The Great Depression of the 1930s shattered confidence in the classical view that markets self-correct quickly. Unemployment in the US reached 25 % and persisted for nearly a decade, prompting John Maynard Keynes to argue that the economy could be stuck in a low-output equilibrium indefinitely without government intervention — a direct challenge to the vertical LRAS and the self-correcting mechanism that underpins it.',
      conceptualExplanation:
        'The long-run aggregate supply (LRAS) curve represents the economy\'s potential output — the level of real GDP produced when all resources are fully employed at their natural rates. In the classical view, the LRAS curve is perfectly vertical at potential GDP (Y*). This verticality reflects the classical dichotomy: in the long run, the price level affects only nominal variables while real variables — output, employment, and the real interest rate — are determined solely by real factors such as technology, the capital stock, and the size and skill of the labour force. Because prices and wages are fully flexible in the long run, markets always clear, and the economy gravitates back to Y* regardless of demand conditions.\n\nThe Keynesian perspective challenges the speed and reliability of this self-correction. Keynes argued that wages and prices — especially wages — can be extremely sticky downward, making the self-correcting mechanism slow, painful, and uncertain. In the extreme Keynesian case, the aggregate supply curve is horizontal at the prevailing price level up to full-employment output, meaning the economy can be trapped far below potential for a prolonged period. Most modern economists occupy the middle ground: they accept a vertical LRAS in the very long run but recognise that the adjustment can take years, during which prolonged recessions cause permanent "scarring" — loss of skills, capital depreciation, and hysteresis in unemployment.\n\nThe LRAS curve shifts when the economy\'s productive capacity changes. Improvements in technology, increases in the capital stock (through investment), growth in the labour force (population or immigration), and improvements in human capital (education and training) all shift LRAS rightward, raising potential output. Conversely, natural disasters, institutional deterioration, or capital destruction reduce potential output and shift LRAS leftward. Understanding what drives LRAS is crucial for analysing long-run economic growth as distinct from short-run cyclical fluctuations.',
      vocabulary: [
        {
          term: 'Long-Run Aggregate Supply (LRAS)',
          definition:
            'The vertical relationship between the price level and real GDP at the economy\'s potential output level (Y*), where all resources are fully employed and wages and prices are fully flexible.',
          example:
            'If an economy\'s potential GDP is $25 trillion, its LRAS curve is a vertical line at $25 trillion, indicating that in the long run output is fixed at this level regardless of the price level.',
        },
        {
          term: 'Classical Dichotomy',
          definition:
            'The theoretical separation of real and nominal variables: in the long run, changes in the money supply or price level affect only nominal variables (prices, wages) and leave real variables (output, employment) unchanged.',
          example:
            'A doubling of the money supply, according to classical theory, simply doubles the price level in the long run without changing real GDP or the real interest rate.',
        },
        {
          term: 'Hysteresis',
          definition:
            'The phenomenon whereby a temporary demand shock causes permanent changes in the economy\'s potential output, typically because prolonged unemployment leads to skill erosion and workers become structurally unemployable.',
          example:
            'After the 2008 crisis, many long-term unemployed workers lost skills or exited the labour force permanently, reducing potential GDP even after the recession ended — a hysteresis effect that shifted LRAS leftward.',
        },
      ],
      examinerTip:
        'A common exam mistake is confusing what shifts LRAS with what shifts SRAS. LRAS shifts only when productive capacity changes (technology, capital, labour supply, human capital). SRAS shifts when input costs change. On any diagram, draw LRAS as a perfectly vertical line at Y* and label it clearly. If asked to compare classical and Keynesian views, the core contrast is the speed of price/wage adjustment and thus the reliability of self-correction.',
    },
    flashcards: [
      {
        id: 'i4-l3-fc1',
        front: 'Why is the LRAS curve vertical?',
        back: 'Because in the long run all prices and wages are fully flexible, so markets clear and the economy produces at its potential output (Y*) regardless of the price level. The price level affects only nominal, not real, variables in the long run.',
        hint: 'Think about the classical dichotomy — real variables are determined by real factors, not nominal ones.',
        tags: ['LRAS', 'classical'],
      },
      {
        id: 'i4-l3-fc2',
        front: 'What is the core Keynesian critique of the classical self-correcting mechanism?',
        back: 'Keynes argued that wages and prices are very sticky downward, making self-correction slow and unreliable. An economy can remain trapped well below potential output for years or even decades, justifying active fiscal or monetary policy intervention to restore full employment.',
        hint: 'Recall the Great Depression — markets did not quickly self-correct.',
        tags: ['Keynesian', 'LRAS'],
      },
      {
        id: 'i4-l3-fc3',
        front: 'Name three factors that shift the LRAS curve to the right.',
        back: '(1) Technological progress that raises total factor productivity; (2) Growth in the capital stock through net investment; (3) An increase in the size or skill (human capital) of the labour force.',
        hint: 'LRAS shifts reflect changes in the economy\'s productive capacity — think of the factors of production.',
        tags: ['LRAS', 'shifts'],
      },
      {
        id: 'i4-l3-fc4',
        front: 'What is hysteresis and why does it matter for the LRAS?',
        back: 'Hysteresis is the process by which a temporary recession permanently reduces potential output. Long-term unemployed workers lose skills; firms reduce R&D investment; capital depreciates. These effects can shift the LRAS leftward, meaning the recession\'s damage outlasts the downturn itself.',
        hint: 'Think about what happens to workers and capital during a prolonged slump.',
        tags: ['LRAS', 'Keynesian'],
      },
    ],
    quiz: [
      {
        id: 'i4-l3-q1',
        type: 'mcq',
        question:
          'The LRAS curve is vertical because in the long run:',
        options: [
          'Government spending is fixed and cannot change real output.',
          'Wages and prices are fully flexible, so the economy always returns to potential GDP regardless of the price level.',
          'Firms maximise profit only at one specific level of output.',
          'The central bank sets a fixed target for real GDP growth.',
        ],
        correctAnswer: 1,
        explanation:
          'The verticality of LRAS follows from full price and wage flexibility in the long run. When all nominal variables can adjust, the economy\'s real output is pinned at its potential (Y*) by real factors — technology, capital, and labour supply — not by the price level. None of the other options reflect the underlying reason for the vertical LRAS.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l3-q2',
        type: 'mcq',
        question:
          'A wave of immigration significantly increases the size of a country\'s labour force. What is the most likely long-run effect on LRAS?',
        options: [
          'LRAS shifts leftward because more workers bid down wages, reducing firm incentives to invest.',
          'There is no effect on LRAS; immigration only affects SRAS.',
          'LRAS shifts rightward because the economy\'s productive capacity — potential GDP — has increased.',
          'LRAS shifts rightward only if the immigrants are highly skilled professionals.',
        ],
        correctAnswer: 2,
        explanation:
          'An increase in the labour force expands the economy\'s total productive capacity, shifting LRAS rightward (raising potential GDP). This holds regardless of the skill composition of the immigrants, though the magnitude of the shift may differ. LRAS always reflects productive capacity, and more workers increase that capacity.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l3-q3',
        type: 'mcq',
        question:
          'Which statement best captures the key difference between the classical and Keynesian views of aggregate supply?',
        options: [
          'Classical economists believe government spending always raises output; Keynesians believe it never does.',
          'Classical economists argue prices and wages adjust rapidly, returning the economy to potential quickly; Keynesians argue adjustment is slow and unreliable, requiring policy intervention.',
          'Keynesians believe LRAS is vertical; classical economists believe it is upward-sloping.',
          'Classical economists focus on the short run; Keynesians focus exclusively on the long run.',
        ],
        correctAnswer: 1,
        explanation:
          'The fundamental debate is about the speed of price and wage adjustment. Classical economists trust the self-correcting mechanism to restore full employment quickly, making stabilisation policy unnecessary or harmful. Keynesians doubt this speed, arguing that prolonged recessions justify active demand management. Options A, C, and D each reverse or misstate the two schools\' positions.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l4',
    moduleId: 'i4-adas',
    title: 'Demand Shocks and the Economy',
    description:
      'Trace through positive and negative AD shocks — inflationary gaps, recessionary gaps, and the self-correcting mechanism.',
    order: 4,
    estimatedMinutes: 35,
    tags: ['demand-shock', 'inflationary-gap', 'recessionary-gap'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson contrasted the classical view (LRAS is vertical because wages and prices are fully flexible, so the economy self-corrects quickly) with the Keynesian view (wages are sticky downward, so self-correction is slow and unreliable). Demand shocks put this debate into sharp relief — they are the events that push the economy away from the LRAS, creating the output gaps that test whether self-correction or policy intervention is needed.`,
      recallQuestions: [
        {
          id: 'i4-l4-recall-1',
          type: 'mcq' as const,
          question: 'The LRAS curve is vertical because in the long run:',
          options: [
            'Wages and prices are fully flexible, so the economy always produces at potential GDP regardless of the price level.',
            'Government spending is fixed and cannot alter real output.',
            'Firms maximise profit only at one specific output level.',
            'The central bank sets a fixed target for real GDP growth.',
          ],
          correctAnswer: 0,
          explanation: 'The verticality of LRAS follows from full price and wage flexibility in the long run. When all nominal variables can adjust, the economy\'s real output is pinned at its potential (Y*) by real factors — technology, capital stock, and labour supply — not by the price level.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'The COVID-19 pandemic delivered one of history\'s most abrupt negative demand shocks: lockdowns simultaneously destroyed consumer spending, collapsed business investment, and severed global supply chains. Within months, the US economy shed 22 million jobs and real GDP plunged at an annualised rate of 31 % in Q2 2020 — a textbook recessionary gap playing out in real time. The subsequent surge in government transfers and pent-up demand then created an inflationary gap that drove inflation to 40-year highs by 2022.',
      conceptualExplanation:
        'A demand shock is any sudden change in aggregate demand that is not initiated by a change in the price level. A positive demand shock (rightward AD shift) could stem from a tax cut, a burst of consumer optimism, a foreign economic boom raising export demand, or expansionary monetary policy. A negative demand shock (leftward AD shift) could reflect a financial crisis reducing wealth and credit availability, a collapse in business confidence, or austerity fiscal policy. In both cases, the impact is first felt in the goods and labour markets before gradually feeding back through wages and prices.\n\nWhen AD increases and the economy was initially at long-run equilibrium (AD intersecting SRAS at the LRAS level), the new short-run equilibrium has both higher output and a higher price level. The economy now operates above potential — an inflationary gap. In this state, unemployment is below its natural rate, labour markets are tight, and workers successfully bargain for higher nominal wages. Rising wages shift SRAS leftward over time, restoring long-run equilibrium at a higher price level but back at Y*. Conversely, a negative AD shock creates a recessionary gap: output falls below potential, unemployment rises, and eventually wage bargaining weakens — nominal wages fall (slowly, due to stickiness), shifting SRAS rightward and restoring equilibrium at a lower price level but again at Y*.\n\nThe self-correcting mechanism is the process by which the economy, left to itself, eventually returns to potential GDP through SRAS adjustments driven by wage changes. Classical economists trust this mechanism to work quickly; Keynesians argue it can take many years, during which real hardship is inflicted on unemployed workers and underutilised capital. This debate is the foundation for the case for (Keynesian) or against (classical) active stabilisation policy. In practice, most central banks and governments intervene to accelerate the return to potential, shifting AD back rather than waiting for SRAS to adjust.',
      vocabulary: [
        {
          term: 'Demand Shock',
          definition:
            'A sudden, unexpected change in aggregate demand — positive (rightward AD shift) or negative (leftward AD shift) — that moves the economy away from its long-run equilibrium output.',
          example:
            'A sudden collapse in consumer confidence following a stock market crash reduces consumption spending at every price level, shifting AD leftward — a negative demand shock that opens a recessionary gap.',
        },
        {
          term: 'Inflationary Gap',
          definition:
            'The positive difference between actual real GDP and potential GDP (Y > Y*), occurring when aggregate demand is so strong that the economy operates above full employment, creating upward pressure on wages and prices.',
          example:
            'During the post-COVID spending boom, robust consumer demand and fiscal stimulus pushed US output and employment beyond full-employment levels, creating an inflationary gap visible in rising wage growth and accelerating CPI.',
        },
        {
          term: 'Self-Correcting Mechanism',
          definition:
            'The process by which an economy automatically returns to potential GDP over time, as wage adjustments shift the SRAS curve: wages rise in an inflationary gap (shifting SRAS left) and fall — slowly — in a recessionary gap (shifting SRAS right).',
          example:
            'After a positive demand shock, tight labour markets push wages up over the next 1–2 years; this raises production costs, shifts SRAS leftward, and returns the economy to Y* at a higher price level without any policy action.',
        },
      ],
      examinerTip:
        'Exam questions on demand shocks require a step-by-step diagrammatic analysis: (1) draw initial long-run equilibrium, (2) shift AD and mark the new short-run equilibrium, (3) identify the gap (inflationary or recessionary), (4) describe the self-correcting mechanism (SRAS shift) and the final long-run equilibrium. Always state what happens to both the price level and real GDP at each stage. A common mistake is forgetting to show the SRAS shift back to long-run equilibrium.',
    },
    flashcards: [
      {
        id: 'i4-l4-fc1',
        front: 'What is the sequence of events following a negative demand shock, according to the self-correcting mechanism?',
        back: '(1) AD shifts left → lower output (Y < Y*) and lower price level (recessionary gap); (2) unemployment rises above natural rate; (3) over time, wage bargaining weakens and nominal wages fall; (4) lower wages reduce production costs → SRAS shifts right; (5) output returns to Y* at a lower price level.',
        hint: 'Follow the chain: AD falls → gap opens → wages adjust → SRAS moves → equilibrium restores.',
        tags: ['demand-shock', 'recessionary-gap'],
      },
      {
        id: 'i4-l4-fc2',
        front: 'What distinguishes an inflationary gap from simple inflation?',
        back: 'An inflationary gap is a structural imbalance where actual output exceeds potential output (Y > Y*), indicating the economy is overheating. Simple inflation can occur at or near potential GDP (e.g., due to cost-push or money-supply growth) without an inflationary gap. The gap specifically refers to the output deviation from Y*, not just rising prices.',
        hint: 'The gap is about the output level relative to potential, not just about price changes.',
        tags: ['inflationary-gap', 'demand-shock'],
      },
      {
        id: 'i4-l4-fc3',
        front: 'Why might the self-correcting mechanism work more slowly for a recessionary gap than for an inflationary gap?',
        back: 'Because wages are sticky downward. Workers resist nominal pay cuts due to contracts, minimum wage laws, fairness norms, and money illusion. In an inflationary gap, wages can rise relatively quickly as workers bargain for increases. In a recessionary gap, wages fall only gradually, prolonging the adjustment process.',
        hint: 'The asymmetry lies in wage stickiness — it is much easier for wages to go up than down.',
        tags: ['recessionary-gap', 'sticky-wages'],
      },
      {
        id: 'i4-l4-fc4',
        front: 'What policy tools can governments use to close a recessionary gap instead of waiting for self-correction?',
        back: 'Expansionary fiscal policy (increase G or cut taxes to shift AD right) and expansionary monetary policy (cut interest rates or engage in quantitative easing to boost I and C, shifting AD right). Both aim to restore Y* more quickly than the self-correcting mechanism.',
        hint: 'Think about which tools shift AD rightward back to the LRAS level.',
        tags: ['demand-shock', 'recessionary-gap'],
      },
    ],
    quiz: [
      {
        id: 'i4-l4-q1',
        type: 'mcq',
        question:
          'An economy is initially at long-run equilibrium. Consumer confidence suddenly plummets, reducing household spending. Which of the following correctly describes the short-run outcome?',
        options: [
          'AD shifts right, creating an inflationary gap with higher output and prices.',
          'SRAS shifts left, creating stagflation with lower output and higher prices.',
          'AD shifts left, creating a recessionary gap with lower output and a lower price level.',
          'LRAS shifts left, permanently reducing potential GDP.',
        ],
        correctAnswer: 2,
        explanation:
          'A collapse in consumer confidence reduces consumption (C), shifting AD leftward. Starting from long-run equilibrium, the new short-run equilibrium has lower output (Y < Y*) — a recessionary gap — and a lower price level. SRAS is unchanged (no input cost change), and LRAS is unchanged (no change in productive capacity).',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l4-q2',
        type: 'mcq',
        question:
          'An economy is experiencing an inflationary gap. According to the self-correcting mechanism, what will happen over time without policy intervention?',
        options: [
          'Wages will fall as firms cut employment, shifting SRAS rightward and eliminating the gap.',
          'Wages will rise as labour markets are tight, shifting SRAS leftward and returning output to potential at a higher price level.',
          'AD will automatically shift leftward as consumers become aware of the inflationary gap.',
          'The government must intervene; the economy cannot self-correct from an inflationary gap.',
        ],
        correctAnswer: 1,
        explanation:
          'In an inflationary gap (Y > Y*), unemployment is below its natural rate and labour markets are tight. Workers successfully negotiate higher nominal wages. Rising wages increase production costs, shifting SRAS leftward. The new long-run equilibrium is back at Y* but with a higher price level. No policy intervention is needed — this is the self-correcting mechanism in action.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l4-q3',
        type: 'mcq',
        question:
          'Which of the following events would create a positive demand shock?',
        options: [
          'A rise in oil prices increases production costs across the economy.',
          'The central bank raises interest rates to combat inflation.',
          'A foreign trading partner experiences rapid economic growth, significantly increasing demand for domestic exports.',
          'A government announces a major spending cut to reduce the fiscal deficit.',
        ],
        correctAnswer: 2,
        explanation:
          'Rapid growth in a trading partner boosts demand for domestic exports, increasing net exports (X − M) — a component of AD — shifting the AD curve rightward. This is a positive demand shock. A rise in oil prices is a supply shock (shifts SRAS). A central bank rate hike reduces investment and consumption, creating a negative demand shock. A spending cut is contractionary fiscal policy, also a negative demand shock.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l5',
    moduleId: 'i4-adas',
    title: 'Supply Shocks — Stagflation and Growth',
    description:
      'Analyse adverse and favourable supply shocks and their simultaneous effects on inflation and output.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['supply-shock', 'stagflation', 'oil-prices'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson traced demand shocks through the AD/AS diagram — a negative demand shock opens a recessionary gap (Y < Y*), and the self-correcting mechanism closes it slowly as falling wages shift SRAS rightward. Supply shocks work differently: they originate on the supply side and move inflation and output in opposite directions, creating the policy dilemma known as stagflation.`,
      recallQuestions: [
        {
          id: 'i4-l5-recall-1',
          type: 'mcq' as const,
          question: 'An economy is initially at long-run equilibrium. Consumer confidence suddenly plummets, reducing household spending. Which of the following correctly describes the short-run outcome?',
          options: [
            'AD shifts left, creating a recessionary gap with lower output and a lower price level.',
            'AD shifts right, creating an inflationary gap with higher output and prices.',
            'SRAS shifts left, creating stagflation with lower output and a higher price level.',
            'LRAS shifts left, permanently reducing potential GDP.',
          ],
          correctAnswer: 0,
          explanation: 'A collapse in consumer confidence reduces consumption (C), shifting AD leftward. From long-run equilibrium, the new short-run equilibrium has lower output (Y < Y*) — a recessionary gap — and a lower price level. SRAS and LRAS are unchanged.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'The 1973 OPEC oil embargo quadrupled crude oil prices almost overnight, delivering a catastrophic adverse supply shock to Western economies. The result was stagflation — a word that did not exist before the 1970s — combining double-digit inflation with rising unemployment and stagnant growth. Standard Keynesian demand management could address one symptom only at the cost of worsening the other, leaving policymakers largely powerless until the shock reversed.',
      conceptualExplanation:
        'A supply shock is a sudden change in production costs or productive capacity that shifts the short-run aggregate supply curve independently of the price level. An adverse supply shock — such as a spike in energy prices, a drought destroying agricultural output, or a pandemic disrupting supply chains — shifts SRAS leftward. The result is stagflation: both a higher price level and lower real output simultaneously. This combination is particularly pernicious for policymakers because the standard AD-management tools create a cruel trade-off: expanding AD to restore output worsens inflation; contracting AD to fight inflation deepens the recession.\n\nA favourable supply shock moves in the opposite direction. Technological breakthroughs, falling commodity prices, or major productivity improvements shift SRAS rightward. Output rises while the price level falls — a "free lunch" of higher growth and lower inflation. The technology-driven productivity boom of the 1990s in the United States is often cited as a favourable supply shock that extended the expansion while keeping inflation subdued. Similarly, the shale energy revolution of the 2010s reduced US energy input costs, shifting SRAS rightward and providing a growth dividend.\n\nIt is essential to distinguish between SRAS shifts (supply shocks affecting current production costs) and LRAS shifts (changes in the economy\'s productive capacity). An adverse supply shock — say an oil price spike — shifts SRAS leftward but does not necessarily shift LRAS, since potential output depends on the full resource base, not current input prices. However, if a supply shock is persistent enough to affect the capital stock or labour participation (through hysteresis), it may eventually shift LRAS as well. A technological advance, by contrast, shifts both SRAS rightward (lower current costs) and LRAS rightward (higher potential output) simultaneously.',
      vocabulary: [
        {
          term: 'Supply Shock',
          definition:
            'A sudden, unexpected change in production costs or productive capacity that shifts the SRAS curve, causing simultaneous changes in the price level and real output.',
          example:
            'A drought that destroys a large share of the grain harvest raises food production costs across the economy, shifting SRAS leftward and causing output to fall and prices to rise simultaneously.',
        },
        {
          term: 'Stagflation',
          definition:
            'The simultaneous occurrence of stagnating (or falling) real output and rising inflation, typically caused by an adverse supply shock shifting SRAS leftward.',
          example:
            'The 1970s OPEC oil embargoes caused stagflation in many Western economies: GDP growth slowed or turned negative while consumer price inflation reached double digits.',
        },
        {
          term: 'Favourable Supply Shock',
          definition:
            'An unexpected development that lowers production costs or raises productivity, shifting SRAS rightward and producing higher output alongside lower inflation.',
          example:
            'The rapid fall in the price of semiconductor chips in the 1990s reduced costs for a wide range of manufacturers, shifting SRAS rightward and contributing to the "non-inflationary growth" of that decade.',
        },
      ],
      examinerTip:
        'Supply shocks are a favourite exam topic because they test whether students understand the distinction between AD and SRAS shifts. The diagnostic question is: does the shock affect demand (spending plans) or production costs/capacity? An oil price spike raises costs → SRAS shifts left. Always draw the stagflation result explicitly: the new equilibrium has higher P and lower Y. Then discuss the policy dilemma: any AD-based response improves one problem while worsening the other.',
    },
    flashcards: [
      {
        id: 'i4-l5-fc1',
        front: 'What is stagflation and which curve shift produces it?',
        back: 'Stagflation is the combination of stagnant (or falling) real output and rising inflation. It is produced by a leftward shift of the SRAS curve (an adverse supply shock), which simultaneously raises the price level and reduces real GDP.',
        hint: 'Only a leftward SRAS shift can simultaneously raise prices and cut output.',
        tags: ['stagflation', 'supply-shock'],
      },
      {
        id: 'i4-l5-fc2',
        front: 'Why do adverse supply shocks create a policy dilemma?',
        back: 'Because the standard policy tools operate through AD. Expanding AD (to fight falling output) makes inflation worse. Contracting AD (to fight inflation) deepens the recession. There is no AD-based policy that can simultaneously restore output and reduce inflation — policymakers must choose which problem to prioritise.',
        hint: 'Think about what AD expansion or contraction does to each symptom of stagflation.',
        tags: ['stagflation', 'supply-shock'],
      },
      {
        id: 'i4-l5-fc3',
        front: 'What is a favourable supply shock and what are its effects on the price level and output?',
        back: 'A favourable supply shock is an unexpected development that lowers production costs or raises productivity, shifting SRAS rightward. The effects are simultaneously higher real GDP and a lower price level — a rare "free lunch" in macroeconomics.',
        hint: 'The opposite of stagflation: a rightward SRAS shift gives more output and lower prices.',
        tags: ['supply-shock', 'favourable'],
      },
      {
        id: 'i4-l5-fc4',
        front: 'How does a supply shock differ from a demand shock in terms of its effects on inflation and output?',
        back: 'A demand shock moves inflation and output in the same direction: a positive demand shock raises both; a negative one lowers both. A supply shock moves them in opposite directions: an adverse shock raises inflation while cutting output (stagflation); a favourable shock lowers inflation while raising output.',
        hint: 'Demand shocks: price and quantity move together. Supply shocks: they move apart.',
        tags: ['supply-shock', 'demand-shock'],
      },
    ],
    quiz: [
      {
        id: 'i4-l5-q1',
        type: 'mcq',
        question:
          'An unexpected doubling of global oil prices shifts which curve in which direction, and what is the resulting short-run outcome?',
        options: [
          'AD shifts left; output falls and prices fall.',
          'SRAS shifts left; output falls and the price level rises (stagflation).',
          'LRAS shifts left; potential GDP permanently falls.',
          'SRAS shifts right; output rises and the price level falls.',
        ],
        correctAnswer: 1,
        explanation:
          'Oil is a key production input. A price spike raises costs for firms across the economy, shifting SRAS leftward. The new short-run equilibrium has lower real GDP and a higher price level — classic stagflation. AD is unchanged (no change in spending plans at the initial price level). LRAS reflects long-run capacity; oil price spikes affect SRAS, not necessarily LRAS.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l5-q2',
        type: 'mcq',
        question:
          'A government facing stagflation chooses to use expansionary fiscal policy to boost aggregate demand. What is the likely trade-off?',
        options: [
          'Output will fall further while inflation is reduced.',
          'Both output and inflation will fall, resolving the stagflation.',
          'Output will recover toward potential, but inflation will worsen further.',
          'The policy will have no effect because the SRAS curve is vertical during stagflation.',
        ],
        correctAnswer: 2,
        explanation:
          'Expansionary fiscal policy shifts AD rightward, which raises real output toward Y* but also pushes the price level higher — worsening inflation. This is the core policy dilemma of stagflation: you can partially fix the output problem but at the cost of more inflation. Option A reverses the outcome; Option B is incorrect because AD expansion raises prices; Option D is wrong because the SRAS is not vertical.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l5-q3',
        type: 'mcq',
        question:
          'Which of the following is an example of a favourable supply shock?',
        options: [
          'A central bank cuts interest rates, boosting consumer borrowing and spending.',
          'A major technological breakthrough dramatically reduces manufacturing costs across the economy.',
          'The government increases spending on infrastructure, raising aggregate demand.',
          'A currency depreciation makes imported inputs more expensive.',
        ],
        correctAnswer: 1,
        explanation:
          'A technological breakthrough that lowers manufacturing costs shifts SRAS rightward, increasing output and reducing the price level — the hallmarks of a favourable supply shock. Options A and C shift AD rightward (demand-side policies). Option D raises input costs for imported materials, which is an adverse supply shock (shifts SRAS leftward).',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 6 ────────────────────────────────────────────────────────────────
  {
    id: 'i4-l6',
    moduleId: 'i4-adas',
    title: 'The Multiplier Effect',
    description:
      'Derive the Keynesian spending multiplier from the marginal propensity to consume.',
    order: 6,
    estimatedMinutes: 35,
    tags: ['multiplier', 'MPC', 'Keynesian'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that adverse supply shocks shift SRAS leftward, producing stagflation — the simultaneous combination of rising prices and falling output — and creating a cruel policy dilemma where any AD-based response worsens one of the two problems. The multiplier effect now explains how strongly an initial change in spending (government or otherwise) amplifies through the economy to shift AD.`,
      recallQuestions: [
        {
          id: 'i4-l6-recall-1',
          type: 'mcq' as const,
          question: 'An unexpected doubling of global oil prices shifts which curve, and what is the resulting short-run outcome?',
          options: [
            'SRAS shifts left; output falls and the price level rises (stagflation).',
            'AD shifts left; output falls and the price level falls.',
            'LRAS shifts left; potential GDP permanently falls.',
            'SRAS shifts right; output rises and the price level falls.',
          ],
          correctAnswer: 0,
          explanation: 'Oil is a key production input. A price spike raises costs for firms across the economy, shifting SRAS leftward. The new short-run equilibrium has lower real GDP and a higher price level — classic stagflation. AD is unchanged because the shock does not alter spending plans at the initial price level.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'During the 2009 American Recovery and Reinvestment Act, the Obama administration\'s economists estimated that every dollar of government spending would generate approximately $1.50 of economic activity — a multiplier of 1.5. This figure was hotly debated: critics using classical models put it close to zero, while Keynesians cited evidence suggesting it could exceed 2 during deep recessions. The multiplier\'s magnitude determines whether fiscal stimulus is a powerful policy tool or an ineffective one.',
      conceptualExplanation:
        'The Keynesian spending multiplier describes the amplified effect that an initial change in autonomous spending has on total economic output. The intuition is straightforward: when the government spends $100 million building a road, that money becomes income for construction workers and materials suppliers. Those recipients spend a fraction of their new income — determined by the marginal propensity to consume (MPC) — on goods and services, generating income for others, who in turn spend a fraction of that income, and so on in an infinite chain. The total change in output is thus a multiple of the initial spending injection.\n\nThe multiplier (k) is derived algebraically from the MPC. In each round of spending, a fraction equal to the MPC is re-spent and a fraction equal to the marginal propensity to save (MPS = 1 − MPC) leaks out of the spending stream. Summing the geometric series yields: k = 1 / (1 − MPC) = 1 / MPS. If MPC = 0.8, then MPS = 0.2 and k = 5: a $1 billion injection of government spending ultimately raises GDP by $5 billion. The formula ΔY = k × ΔG (or ΔC, or ΔI) captures this relationship. A higher MPC means a larger multiplier because more of each round of income is re-spent rather than saved.\n\nIn practice, the simple multiplier overstates the real-world effect because it ignores several leakages: taxes (the government takes a fraction of each round of income), imports (spending on foreign goods does not circulate in the domestic economy), and the interest rate effect (government borrowing can "crowd out" private investment by pushing up interest rates). Incorporating taxes (t) and import leakages (m) gives the open-economy multiplier: k = 1 / (1 − MPC(1 − t) + m). Understanding these leakages is essential for evaluating the effectiveness of fiscal policy in open versus closed economies and at different points in the business cycle.',
      vocabulary: [
        {
          term: 'Marginal Propensity to Consume (MPC)',
          definition:
            'The fraction of each additional dollar of disposable income that households spend on consumption rather than save. MPC = ΔC / ΔY_d, where 0 < MPC < 1.',
          example:
            'If a household receives an extra $1,000 in income and spends $800 on goods and services, its MPC is 0.8 — it consumes 80 cents of every additional dollar earned.',
        },
        {
          term: 'Spending Multiplier',
          definition:
            'The ratio by which an initial change in autonomous spending (government expenditure, investment, exports) is amplified into a larger change in equilibrium real GDP. Multiplier k = 1 / (1 − MPC) = 1 / MPS.',
          example:
            'With an MPC of 0.75 (MPS = 0.25), the spending multiplier is 4. A $500 million increase in government spending raises equilibrium GDP by $2 billion (4 × $500m).',
        },
        {
          term: 'Leakages',
          definition:
            'Flows of income that are withdrawn from the circular flow of spending and income — primarily saving, taxation, and imports — that reduce the size of the actual multiplier below the simple formula\'s prediction.',
          example:
            'In an open economy with a 20 % tax rate and an import propensity of 10 %, each round of spending leaks 30 cents in taxes and imports before it returns as domestic income, substantially reducing the effective multiplier.',
        },
      ],
      examinerTip:
        'Multiplier calculations are a reliable source of marks in quantitative sections. Memorise k = 1 / MPS (or equivalently 1 / (1 − MPC)) and practise deriving ΔY = k × ΔAutonomous spending. Common pitfalls: forgetting that MPS = 1 − MPC; confusing a tax cut multiplier (which is k × MPC, not k, because some of the tax saving is saved, not spent) with a government spending multiplier; and ignoring the effect of leakages in open economies. Always show your working step by step.',
    },
    flashcards: [
      {
        id: 'i4-l6-fc1',
        front: 'What is the formula for the simple Keynesian spending multiplier?',
        back: 'k = 1 / (1 − MPC) = 1 / MPS, where MPC is the marginal propensity to consume and MPS = 1 − MPC is the marginal propensity to save. The change in equilibrium GDP is ΔY = k × ΔAutonomous Spending.',
        hint: 'The multiplier equals one divided by the "leakage rate" — the share of income that does not return as spending.',
        tags: ['multiplier', 'MPC'],
      },
      {
        id: 'i4-l6-fc2',
        front: 'If MPC = 0.75, what is the spending multiplier? How much does GDP change if government spending rises by $200 billion?',
        back: 'MPS = 1 − 0.75 = 0.25. Multiplier k = 1 / 0.25 = 4. Change in GDP = 4 × $200 billion = $800 billion.',
        hint: 'Step 1: find MPS. Step 2: k = 1/MPS. Step 3: ΔY = k × ΔG.',
        tags: ['multiplier', 'MPC'],
      },
      {
        id: 'i4-l6-fc3',
        front: 'Why is the real-world multiplier smaller than the simple formula predicts?',
        back: 'Because of leakages that withdraw spending from the circular flow before it can generate another round of income: (1) saving (captured by MPS); (2) taxes (government takes a share of each round of income); (3) imports (spending on foreign goods does not cycle through the domestic economy). These additional leakages reduce the effective multiplier significantly in open economies.',
        hint: 'The simple multiplier assumes a closed economy with no taxes — neither is realistic.',
        tags: ['multiplier', 'Keynesian'],
      },
      {
        id: 'i4-l6-fc4',
        front: 'Why is the tax-cut multiplier smaller than the government spending multiplier?',
        back: 'Because a government spending increase directly injects $1 of spending per dollar into the economy. A tax cut of $1 gives households an extra $1 of disposable income, but they save a fraction (MPS) of it. So the first round of spending from a tax cut is only $MPC × tax cut, making the tax-cut multiplier = MPC × k = MPC / MPS, which is less than k = 1 / MPS.',
        hint: 'Government spending is 100 % injected; a tax cut is only MPC % injected in the first round.',
        tags: ['multiplier', 'MPC', 'Keynesian'],
      },
    ],
    quiz: [
      {
        id: 'i4-l6-q1',
        type: 'mcq',
        question:
          'An economy has a marginal propensity to consume of 0.6. What is the spending multiplier, and how much will GDP change if investment increases by $50 billion?',
        options: [
          'Multiplier = 2.5; GDP rises by $125 billion.',
          'Multiplier = 1.67; GDP rises by $83.5 billion.',
          'Multiplier = 0.4; GDP rises by $20 billion.',
          'Multiplier = 6; GDP rises by $300 billion.',
        ],
        correctAnswer: 0,
        explanation:
          'MPS = 1 − MPC = 1 − 0.6 = 0.4. Multiplier k = 1 / 0.4 = 2.5. ΔY = 2.5 × $50 billion = $125 billion. Option B uses 1/MPC by mistake. Option C uses MPS as the multiplier. Option D uses 1/MPC(1−MPC), an incorrect formula.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l6-q2',
        type: 'mcq',
        question:
          'Which of the following will increase the size of the spending multiplier?',
        options: [
          'An increase in the marginal propensity to save.',
          'A higher income tax rate that withdraws more income from the circular flow.',
          'An increase in the marginal propensity to consume.',
          'Greater openness to international trade, raising the import propensity.',
        ],
        correctAnswer: 2,
        explanation:
          'The multiplier k = 1 / MPS = 1 / (1 − MPC). A higher MPC means a lower MPS, which means a larger multiplier. Options A, B, and D all increase leakages (saving, tax, or import withdrawals), which reduce the multiplier. The multiplier grows when households re-spend a larger share of each additional dollar of income.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i4-l6-q3',
        type: 'mcq',
        question:
          'Why is the multiplier effect on GDP from a $1 billion tax cut generally smaller than from a $1 billion increase in government spending?',
        options: [
          'Tax cuts reduce the marginal propensity to consume, whereas government spending increases it.',
          'Government spending directly adds $1 billion to GDP in the first round; households save a fraction of the tax cut before spending the rest, so less than $1 billion enters the spending stream initially.',
          'Tax cuts shift the LRAS curve, which is not captured by the multiplier formula.',
          'Government spending raises interest rates, which magnifies the multiplier further.',
        ],
        correctAnswer: 1,
        explanation:
          'A government spending increase directly injects the full $1 billion into aggregate demand in the first round. A tax cut gives households $1 billion of additional disposable income, but they save a fraction (MPS) of it; only MPC × $1 billion enters the spending stream initially. This makes the tax-cut multiplier equal to MPC / MPS, which is smaller than the spending multiplier 1 / MPS. Options A, C, and D each contain factual errors or confuse different mechanisms.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
