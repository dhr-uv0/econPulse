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
      thinkAboutIt: {
        question: `If consumers become pessimistic about the future and cut spending, nothing 'real' in the economy has changed — no factories burned down, no workers got sick. Yet this psychological shift can trigger an actual recession with real job losses. How is that possible?`,
        answer: `This is the paradox of thrift in action. When one person saves more, they're prudent. When everyone simultaneously saves more, aggregate demand falls — firms see lower revenues, cut production, lay off workers, and those workers then spend even less. The expectation of recession becomes self-fulfilling. This is why Keynes argued that animal spirits — the confidence and expectations of businesses and consumers — are as real an economic force as physical capital or labour productivity. The AD model captures this: a shift in confidence shifts the entire AD curve, with no change in the economy's underlying productive capacity.`,
      },
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
      {
        id: 'i4-l1-fc5',
        front: 'What is the paradox of thrift and how does it relate to the AD curve?',
        back: 'The paradox of thrift: when all households simultaneously increase saving (individually rational), aggregate demand falls — reducing firm revenues, triggering layoffs, and lowering income so much that total saving may not even rise. This shows up as a leftward shift of the AD curve driven by a drop in consumer spending.',
        hint: 'Individual prudence can become collective folly when everyone does it at once.',
        tags: ['aggregate-demand', 'Keynesian'],
      },
      {
        id: 'i4-l1-fc6',
        front: 'How do animal spirits affect the AD curve?',
        back: 'Animal spirits — Keynes\'s term for the confidence and expectations of businesses and consumers — directly affect investment (I) and consumption (C). A surge of optimism raises both, shifting AD rightward even with no change in policy or fundamentals. A collapse in confidence can shift AD leftward and trigger recession with no physical change in productive capacity.',
        hint: 'Expectations are as real an economic force as physical capital — they act through C and I.',
        tags: ['aggregate-demand', 'shifts'],
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
      {
        id: 'i4-l1-q4',
        type: 'mcq',
        question: 'According to the interest rate effect, why does a higher domestic price level reduce the quantity of aggregate demand?',
        options: [
          'Higher prices reduce the real value of wealth, making households feel poorer.',
          'Higher prices increase the demand for money, pushing interest rates up and reducing investment and durable-goods purchases.',
          'Higher prices make domestic exports less competitive, reducing net exports.',
          'Higher prices lead the central bank to increase the money supply, causing inflation.',
        ],
        correctAnswer: 1,
        explanation: 'The interest rate effect works as follows: a higher price level means households need more money for transactions → money demand rises → interest rates are bid up → investment and purchases of consumer durables fall → quantity of AD demanded falls. Options A and C describe the wealth effect and exchange rate effect respectively. Option D is a monetary policy response, not the interest rate effect.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q5',
        type: 'mcq',
        question: 'Which of the following changes would cause a leftward shift of the aggregate demand curve?',
        options: [
          'A large fall in income tax rates that boosts consumer disposable income.',
          'A sharp depreciation of the domestic currency making exports cheaper abroad.',
          'A rise in household debt levels that leads consumers to cut back on new spending.',
          'An increase in business optimism that leads firms to raise capital investment.',
        ],
        correctAnswer: 2,
        explanation: 'Rising household debt burdens prompt consumers to reduce spending to repair their balance sheets — a negative consumption shock that shifts AD leftward. Options A and D are positive demand shocks (shift AD right). Option B is a favourable exchange rate movement that boosts net exports and shifts AD right.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q6',
        type: 'mcq',
        question: 'In the national income identity AD = C + I + G + (X − M), if a government simultaneously cuts spending (G) while a foreign boom raises export demand (X), the net effect on AD depends on:',
        options: [
          'Whether the price level rises or falls.',
          'The relative size of the decrease in G and the increase in X.',
          'Whether the central bank raises or lowers interest rates.',
          'The direction of any change in the SRAS curve.',
        ],
        correctAnswer: 1,
        explanation: 'Both G and X are components of AD. A fall in G shifts AD left; a rise in X shifts AD right. The net effect depends entirely on which change is larger in magnitude. The price level, central bank policy, and SRAS are not determinants of this comparison — the question is purely about the relative size of the two AD components changing in opposite directions.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q7',
        type: 'mcq',
        question: 'A central bank cuts its benchmark interest rate from 5% to 3%. Through which two components of AD is the primary transmission mechanism most directly felt?',
        options: [
          'Government spending (G) and net exports (X − M).',
          'Consumption (C) and investment (I), as cheaper borrowing raises spending by households and firms.',
          'Net exports (X − M) only, via the exchange rate effect.',
          'Government spending (G) only, because the central bank controls fiscal policy.',
        ],
        correctAnswer: 1,
        explanation: 'A central bank rate cut lowers the cost of borrowing. Households respond by increasing spending on credit-financed goods (cars, appliances) — boosting C. Firms respond by expanding capital investment projects that previously did not meet their hurdle rate — boosting I. While exchange rate effects may also shift NX, the most direct and immediate channels are C and I. The central bank does not control G (that is fiscal policy).',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q8',
        type: 'mcq',
        question: 'Country A has a very open economy (high ratio of trade to GDP) and Country B is relatively closed. A global recession reduces foreign income. Which country experiences the larger leftward shift in AD, and why?',
        options: [
          'Country B, because closed economies rely more on domestic demand.',
          'Country A, because a larger share of its AD depends on export demand, which falls when foreign incomes drop.',
          'Both countries shift equally, since the global recession affects the price level identically.',
          'Neither country is affected; only domestic demand influences AD.',
        ],
        correctAnswer: 1,
        explanation: 'A global recession reduces foreign income, causing foreign consumers and businesses to buy fewer imports from Country A and Country B. Because Country A\'s exports represent a much larger share of its GDP (high trade openness), the same fall in foreign demand produces a proportionally larger reduction in X, and thus a larger leftward shift in AD. Country B\'s smaller export sector is less exposed.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q9',
        type: 'mcq',
        question: 'Which statement about the wealth effect and the AD curve is correct?',
        options: [
          'The wealth effect explains why the AD curve shifts rightward when income tax rates fall.',
          'The wealth effect causes a movement along the AD curve: at a higher price level, the real value of fixed-value assets falls, reducing consumption.',
          'The wealth effect shifts the AD curve rightward when the price level rises.',
          'The wealth effect operates exclusively through changes in real estate prices.',
        ],
        correctAnswer: 1,
        explanation: 'The wealth effect is one of the three mechanisms that explain why the AD curve slopes downward — it causes a movement along the curve, not a shift. When the price level rises, the real purchasing power of nominally fixed assets (savings, bonds) falls, making households feel poorer and reducing consumption. A tax cut shifts AD (changing a non-price-level determinant). The wealth effect operates through all nominally fixed assets, not only real estate.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l1-q10',
        type: 'mcq',
        question: 'Which of the following best illustrates the "paradox of thrift" in the context of the AD curve?',
        options: [
          'A single household increases saving and its financial position improves, shifting the AD curve right.',
          'All households simultaneously increase saving, reducing aggregate consumption, shifting AD left, and potentially leaving total saving unchanged or lower as income falls.',
          'The government increases saving by running a budget surplus, automatically shifting AD right.',
          'Higher saving always raises investment one-for-one, leaving AD unchanged.',
        ],
        correctAnswer: 1,
        explanation: 'The paradox of thrift: individually rational saving (when done by all simultaneously) reduces aggregate demand — firms earn less revenue, cut production, lay off workers, and income falls. The loss of income can offset the increased saving rate, leaving total saving no higher. This is reflected as a leftward shift of the AD curve driven by a fall in C. Option D (classical loanable-funds view) ignores the demand-side contraction. Options A and C misidentify the direction or agent of saving.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `Using the AD model, explain how a collapse in business confidence can cause a recession even when the economy's productive potential is unchanged. In your answer: (i) define aggregate demand and explain its components, (ii) show how a negative confidence shock affects investment and consumption, (iii) draw a fully labelled AD/AS diagram showing the effect on real GDP and the price level.`,
      rubric: `Award points for:\n- Define AD as the total planned expenditure on domestically produced goods and services at each price level, including all four components C + I + G + (X − M) (2pt)\n- Identify that confidence affects both I (animal spirits / expected profitability) and C (consumer expectations), explaining the mechanism (2pt)\n- Diagram: correctly drawn AD/AS with initial equilibrium at LRAS, AD shifting leftward, new short-run equilibrium labelled with lower Y and lower P (3pt)\n- Use of correct economic vocabulary throughout (AD, SRAS, LRAS, output gap, recessionary gap) (2pt)\n- Clarity and logical structure of argument (1pt)`,
      exampleTopics: [
        'Define each component of AD using the formula C+I+G+(X-M)',
        'Explain why business and consumer expectations are self-fulfilling — the animal spirits argument',
        'Draw the AD/AS diagram with initial equilibrium, then AD shifting left, labelling new Y and P',
        'Consider whether government can offset the confidence shock through fiscal policy',
      ],
    },
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
      thinkAboutIt: {
        question: `During a recession, firms need to cut costs. The obvious solution is to reduce wages — workers are being paid more than necessary given how many people want jobs. Yet wages rarely fall even in severe recessions. Why are wages 'sticky downward'?`,
        answer: `Wages are sticky for several mutually reinforcing reasons. First, morale and efficiency wages: if a firm cuts wages, its best workers — who have the most outside options — will leave first, leaving it with a less productive workforce. Second, many workers are protected by employment contracts or collective bargaining agreements that set wages for fixed periods. Third, nominal wage cuts feel like a direct loss (loss aversion) in a way that not getting a raise doesn't. Fourth, menu costs: renegotiating thousands of individual wage contracts is costly and disruptive. Together these forces mean that in the short run, when demand falls, firms reduce output and employment rather than wages — which is exactly why the SRAS curve slopes upward rather than being vertical.`,
      },
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
      {
        id: 'i4-l2-fc5',
        front: 'What are efficiency wages and why do they make wages sticky downward?',
        back: 'Efficiency wages are wages set above the market-clearing level to retain productive workers and maintain morale. Cutting wages risks losing the firm\'s most skilled employees (who have the best outside options), reducing average productivity. The cost of lower productivity can exceed the wage saving, making firms reluctant to cut wages even in a recession.',
        hint: 'A wage cut that causes your best workers to quit may cost more than the wage saving itself.',
        tags: ['sticky-wages', 'SRAS'],
      },
      {
        id: 'i4-l2-fc6',
        front: 'Why does cost-push inflation produce an SRAS shift rather than an AD shift?',
        back: 'Cost-push inflation arises when input costs (wages, energy, raw materials) rise, making it more expensive to produce any given level of output. Because the cause is on the supply side — firms\' costs are higher at every price level — the SRAS curve shifts leftward. AD is unchanged because the shock does not directly alter households\', firms\', or the government\'s spending plans.',
        hint: 'Ask: does the shock change spending plans (AD) or production costs (SRAS)?',
        tags: ['SRAS', 'supply-shock'],
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
      {
        id: 'i4-l2-q4',
        type: 'mcq',
        question: 'A firm signs a two-year wage contract with its workers at $30 per hour. Six months later, the price level falls by 5%. What happens to the firm\'s real labour costs?',
        options: [
          'Real labour costs fall because the nominal wage is fixed while prices fall.',
          'Real labour costs rise because the nominal wage is fixed while the price level falls, so each dollar of wages buys more in real terms.',
          'Real labour costs are unchanged because price level changes affect both wages and output prices equally.',
          'Real labour costs fall because the contract automatically adjusts wages for inflation.',
        ],
        correctAnswer: 1,
        explanation: 'Real labour cost = nominal wage / price level. With the nominal wage fixed at $30 and the price level falling 5%, the real cost of labour rises — the firm is paying more in real terms than before. This squeeze on profit margins is why firms cut output and employment in a downturn rather than wages, and why the SRAS curve slopes upward.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q5',
        type: 'mcq',
        question: 'Workers in a major industry negotiate a large wage increase in anticipation of future inflation. Before the price level actually rises, what happens in the AD/AS model?',
        options: [
          'AD shifts rightward because workers have higher income to spend.',
          'SRAS shifts rightward because higher wages boost worker productivity.',
          'SRAS shifts leftward because higher expected-inflation wage settlements raise firms\' costs at every price level.',
          'LRAS shifts rightward because higher wages attract more workers into the labour force.',
        ],
        correctAnswer: 2,
        explanation: 'Wage settlements based on expected inflation raise firms\' labour costs before the price level has actually risen. Since costs are higher at every price level, firms supply less output — the SRAS curve shifts leftward. This is a key mechanism linking inflation expectations to actual cost-push pressures. The AD curve is unaffected by the wage settlement itself.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q6',
        type: 'mcq',
        question: 'Which of the following best explains why the SRAS curve is upward-sloping rather than vertical?',
        options: [
          'Firms always pass on all cost increases to consumers as higher prices.',
          'In the short run, nominal wages are sticky, so a higher price level raises firms\' revenues relative to their fixed wage costs, improving margins and incentivising more output.',
          'The government fixes prices in the short run but allows them to adjust in the long run.',
          'Aggregate demand always increases when the price level rises.',
        ],
        correctAnswer: 1,
        explanation: 'The SRAS slopes upward because nominal wages are sticky in the short run. When the price level rises while wages remain fixed, revenues rise relative to labour costs — profit margins improve and firms expand output. If wages adjusted instantly, the SRAS would be vertical (like LRAS). Option A confuses pricing power with the SRAS slope. Option C is factually incorrect. Option D reverses the AD relationship.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q7',
        type: 'mcq',
        question: 'A major improvement in worker productivity (output per worker) occurs due to new technology. What happens to the SRAS curve?',
        options: [
          'SRAS shifts leftward because firms must invest more in technology, raising costs.',
          'SRAS shifts rightward because firms can produce more output at the same cost, reducing the per-unit cost of production.',
          'There is a movement along the SRAS curve as firms respond to higher output.',
          'Only the LRAS shifts; SRAS is unaffected by productivity changes.',
        ],
        correctAnswer: 1,
        explanation: 'A productivity improvement means each worker produces more output with the same wage payment — the cost per unit of output falls. Since firms can now supply more at every price level (or equivalently, supply the same amount at a lower price level), the SRAS shifts rightward. Both SRAS and LRAS can shift rightward from a productivity improvement, though for different reasons: SRAS because of lower current unit costs, LRAS because productive capacity has increased.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q8',
        type: 'mcq',
        question: 'An economy is operating above potential GDP (inflationary gap). According to the SRAS model, what adjustment process will bring it back to long-run equilibrium?',
        options: [
          'Firms will voluntarily cut prices to reduce the price level back to its original level.',
          'Tight labour markets will push nominal wages up, raising production costs, shifting SRAS leftward until output returns to Y*.',
          'The government must raise taxes to reduce aggregate demand.',
          'The central bank will automatically raise interest rates, eliminating the gap immediately.',
        ],
        correctAnswer: 1,
        explanation: 'When output exceeds potential (inflationary gap), the unemployment rate is below its natural rate and labour markets are tight. Workers successfully bargain for higher nominal wages. Rising wages increase firms\' production costs at every output level, shifting SRAS leftward. Output returns to Y* at a higher price level. This is the classical self-correcting mechanism operating through the SRAS. Options C and D describe policy interventions, not the automatic mechanism.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q9',
        type: 'mcq',
        question: 'Why might wages be sticky downward but not upward? What does this asymmetry imply for recovery from recessions versus booms?',
        options: [
          'Wages rise and fall symmetrically; there is no asymmetry in wage adjustment.',
          'Wages are stickier downward because workers resist nominal pay cuts (contracts, loss aversion, fairness), meaning recessions persist longer than booms while the economy waits for wages to fall.',
          'Wages are stickier upward because firms resist paying more; this means economies recover from recessions quickly.',
          'The asymmetry only matters in highly unionised economies and is irrelevant elsewhere.',
        ],
        correctAnswer: 1,
        explanation: 'Workers strongly resist nominal wage cuts — they feel like a direct loss (loss aversion), are often blocked by contracts and minimum wage laws, and signal poor employer-employee relations. Wages rise more readily when labour markets tighten. This asymmetry means that in an inflationary gap, wages rise relatively quickly (SRAS shifts left, self-correcting). In a recessionary gap, wages fall only slowly, prolonging the period below potential. This asymmetry is a core justification for Keynesian activist policy.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l2-q10',
        type: 'mcq',
        question: 'Which combination of events would most likely cause the SRAS curve to shift rightward (increase in SRAS)?',
        options: [
          'A rise in oil prices combined with workers negotiating higher wages.',
          'A fall in commodity prices combined with a productivity-boosting technological innovation.',
          'A government increase in the minimum wage combined with tighter environmental regulations.',
          'A currency depreciation making imported inputs more expensive.',
        ],
        correctAnswer: 1,
        explanation: 'Both a fall in commodity prices (lower input costs) and a productivity improvement (lower per-unit labour costs) reduce firms\' costs of production at every output level, shifting SRAS rightward. Options A, C, and D all raise production costs: higher oil prices, higher minimum wages, stricter regulations, and costlier imported inputs each shift SRAS leftward.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `Explain why the Short-Run Aggregate Supply (SRAS) curve slopes upward, using the concept of sticky wages and prices. Then use a diagram to show how an increase in wage costs shifts the SRAS curve, and explain the resulting effects on real GDP and the price level.`,
      rubric: `Award points for:\n- Explain why SRAS slopes upward: nominal wages are sticky in the short run, so a higher price level raises revenues relative to fixed wage costs, improving profit margins and incentivising more output (3pt)\n- Correctly draw SRAS shifting leftward after a wage cost increase, with fully labelled axes, original and new SRAS curves, and new short-run equilibrium (3pt)\n- Correctly identify the stagflation outcome: higher price level and lower real GDP (2pt)\n- Real-world example of wage cost increase (e.g., minimum wage rise, wage settlements above productivity growth) (1pt)\n- Correct use of economic vocabulary throughout (SRAS, sticky wages, cost-push, output gap) (1pt)`,
      exampleTopics: [
        'Explain sticky wages: efficiency wages, contracts, loss aversion, menu costs',
        'Draw the SRAS shifting left and label the new equilibrium',
        'Identify that both P rises and Y falls — this is cost-push inflation',
        'Give a real example: oil price shocks of 1973 shifted SRAS left globally',
      ],
    },
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
      thinkAboutIt: {
        question: `The Classical school says the economy always returns to full employment in the long run because wages and prices are fully flexible. The Keynesian school is sceptical. Keynes famously said 'in the long run we are all dead.' What did he mean, and why does it matter for policy?`,
        answer: `Keynes wasn't being flippant — he was making a serious point about time horizons and human welfare. The Classical self-correction mechanism works eventually: if unemployment rises, wages fall, costs fall, SRAS shifts right, and output recovers. But 'eventually' could mean years or decades of mass unemployment, poverty, and social unrest. The 1930s Great Depression lasted a decade even with supposedly self-correcting markets. Keynes argued that policymakers cannot tell unemployed workers to wait for the long run — the human cost is too high. This is why he advocated active fiscal stimulus to speed up the adjustment. The LRAS vs SRAS debate is ultimately a debate about how fast markets self-correct and whether that speed is fast enough to make government intervention unnecessary.`,
      },
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
      {
        id: 'i4-l3-fc5',
        front: 'What is the Classical dichotomy and what does it imply for the LRAS curve?',
        back: 'The Classical dichotomy holds that in the long run, real variables (output, employment, real interest rate) are determined by real factors only, while nominal variables (price level, wages) can adjust freely. This implies that changes in the price level do not affect long-run output — the LRAS is vertical. Money is a "veil" over the real economy.',
        hint: 'If nominal and real variables are independent in the long run, what shape must LRAS take?',
        tags: ['LRAS', 'classical'],
      },
      {
        id: 'i4-l3-fc6',
        front: 'Give two real-world examples of events that would shift LRAS rightward and explain why each qualifies.',
        back: '(1) A major breakthrough in renewable energy technology raises total factor productivity across the economy, allowing more output from the same inputs — LRAS shifts right. (2) A sustained rise in the university graduation rate increases the human capital of the labour force, raising productive capacity — LRAS shifts right. Both qualify because they increase the economy\'s potential output, not just current costs.',
        hint: 'LRAS shifts require a change in what the economy can produce at full employment — not just what it currently costs to produce.',
        tags: ['LRAS', 'shifts'],
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
      {
        id: 'i4-l3-q4',
        type: 'mcq',
        question: 'According to the Classical model, what will happen to real output if the central bank doubles the money supply?',
        options: [
          'Real output doubles in the long run because more money funds more production.',
          'Real output rises temporarily in the short run but returns to Y* in the long run as prices rise proportionally.',
          'Real output falls because inflation erodes purchasing power.',
          'Real output rises permanently because investment is higher with more money in circulation.',
        ],
        correctAnswer: 1,
        explanation: 'The Classical dichotomy holds that in the long run, changes in nominal variables (money supply) affect only other nominal variables (price level). Doubling the money supply eventually doubles the price level, leaving real output unchanged at Y*. In the short run, sticky wages may create a temporary expansion, but the long-run effect on real output is zero — the economy returns to the vertical LRAS.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q5',
        type: 'mcq',
        question: 'A country experiences a decade of rapid technological progress. How does this affect the LRAS, and what does the economy look like at the new long-run equilibrium?',
        options: [
          'LRAS shifts leftward; potential output falls and the price level rises.',
          'LRAS shifts rightward; potential output rises and, if AD is unchanged, the price level falls.',
          'LRAS is unaffected; only SRAS shifts when technology improves.',
          'LRAS shifts rightward; the price level must also rise to maintain equilibrium.',
        ],
        correctAnswer: 1,
        explanation: 'Technological progress raises total factor productivity — the economy can produce more output from the same inputs. This expands potential GDP, shifting LRAS rightward. If AD remains unchanged, the new long-run equilibrium has higher real output and a lower price level. This is the mechanism behind long-run economic growth with stable or falling prices.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q6',
        type: 'mcq',
        question: 'The Keynesian view suggests the aggregate supply curve is relatively flat at low output levels. What policy implication does this create?',
        options: [
          'Fiscal policy is ineffective at low output levels because the price level rises too quickly.',
          'Expansionary fiscal policy can raise real output substantially at low output levels with little inflationary pressure, since there is significant spare capacity.',
          'The government should always avoid stimulus because it will cause hyperinflation.',
          'Monetary policy is more powerful than fiscal policy at all output levels.',
        ],
        correctAnswer: 1,
        explanation: 'A flat (Keynesian) aggregate supply curve at low output means that spare capacity is large — firms can expand production without bidding up costs or prices significantly. In this zone, expansionary fiscal policy is relatively effective: it raises real GDP substantially with limited inflationary consequences. As the economy approaches full capacity (Y*), the curve steepens and further stimulus becomes more inflationary than growth-enhancing.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q7',
        type: 'mcq',
        question: 'What is the hysteresis effect and why is it relevant to the LRAS?',
        options: [
          'Hysteresis means the economy always returns to the same potential GDP regardless of shocks.',
          'Hysteresis means a temporary recession can permanently reduce potential GDP by causing skill erosion and capital loss, shifting LRAS leftward.',
          'Hysteresis means recessions automatically cause LRAS to shift rightward as costs fall.',
          'Hysteresis is only relevant to inflation, not to output or employment.',
        ],
        correctAnswer: 1,
        explanation: 'Hysteresis describes a path-dependent process: a temporary negative demand shock, if prolonged, causes permanent damage to the economy\'s productive capacity. Long-term unemployment leads to skill erosion; firms cut R&D and capital investment; workers leave the labour force permanently. These effects reduce the economy\'s potential output and shift the LRAS leftward — the recession\'s damage outlasts the downturn itself.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q8',
        type: 'mcq',
        question: 'Country A has very flexible labour markets (wages adjust quickly). Country B has very rigid labour markets (wages adjust slowly). If both face an identical negative demand shock, what does the LRAS model predict?',
        options: [
          'Both countries will recover in the same amount of time.',
          'Country A will recover faster, as falling wages shift SRAS right more quickly, returning output to Y* sooner.',
          'Country B will recover faster because rigid wages prevent deflation.',
          'Neither country will recover without government intervention.',
        ],
        correctAnswer: 1,
        explanation: 'In the Classical LRAS model, recovery from a recessionary gap depends on wages falling to reduce costs and shift SRAS rightward. Country A\'s flexible wages adjust quickly, shifting SRAS right and restoring Y* faster. Country B\'s rigid wages slow the adjustment — the self-correcting mechanism is slower, prolonging the recession. This is the empirical basis for debates about labour market flexibility and recession recovery.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q9',
        type: 'mcq',
        question: 'Which of the following would cause a leftward shift of the LRAS curve?',
        options: [
          'A rise in oil prices increasing production costs for all firms.',
          'A large-scale emigration of skilled workers reducing the economy\'s productive labour force.',
          'An increase in government spending raising aggregate demand.',
          'A fall in the price level reducing the real value of household savings.',
        ],
        correctAnswer: 1,
        explanation: 'LRAS reflects the economy\'s productive capacity. A large-scale emigration of skilled workers reduces the size and quality of the labour force — a key factor of production — permanently lowering potential GDP and shifting LRAS leftward. A rise in oil prices shifts SRAS (not LRAS). An increase in G shifts AD. A fall in the price level causes a movement along the AD curve, not an LRAS shift.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l3-q10',
        type: 'mcq',
        question: 'Keynes said "in the long run we are all dead." What was the policy implication he drew from this observation?',
        options: [
          'Governments should always prioritise long-run growth over short-run stabilisation.',
          'Because the self-correcting mechanism operates slowly and inflicts severe hardship, governments should use active fiscal and monetary policy to restore full employment more quickly.',
          'Since everyone dies eventually, economic policy is irrelevant to human welfare.',
          'The Classical model is correct and economies always self-correct without government intervention.',
        ],
        correctAnswer: 1,
        explanation: 'Keynes\'s remark was a critique of the Classical argument that markets self-correct in the long run. His point: the long run may take a decade or more of mass unemployment, poverty, and social unrest. The human cost of waiting for self-correction is unacceptably high. Therefore, governments should use active fiscal policy — shifting AD right — to speed up recovery rather than waiting for wages and prices to adjust. This is the normative foundation of Keynesian macroeconomic policy.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `Compare the Keynesian and Classical views on the shape of the aggregate supply curve in the long run. Explain what each view implies for the appropriate role of government in managing the macroeconomy, and evaluate which view is better supported by evidence from recessions.`,
      rubric: `Award points for:\n- Explain Classical LRAS: vertical at Y*, wages and prices fully flexible, economy self-corrects quickly (2pt)\n- Explain Keynesian view: flat/L-shaped AS at low output, wages are sticky, involuntary unemployment possible for extended periods (2pt)\n- Policy implications: Classical advocates hands-off approach (self-correction); Keynesian advocates active fiscal stimulus to close output gaps (2pt)\n- Real-world evidence: reference at least one major recession where self-correction was slow (Great Depression 1930s, 2008 GFC) (2pt)\n- Balanced evaluation stating which view the student finds more persuasive and why, with explicit reasoning (2pt)`,
      exampleTopics: [
        'Draw both the Classical vertical LRAS and the Keynesian horizontal/L-shaped AS',
        'Explain the self-correction mechanism and its limitations',
        'Reference a real recession where the economy did NOT quickly self-correct',
        'Give your verdict: which view better explains macroeconomic reality and why',
      ],
    },
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
      thinkAboutIt: {
        question: `In 2008, banks stopped lending, consumers stopped spending, and firms stopped investing — all at the same time. Unemployment rose to 10% in the US. According to the Classical model, this should have corrected itself quickly as wages and prices fell. It didn't. What went wrong with the self-correction mechanism?`,
        answer: `Several factors blocked the self-correction. First, the zero lower bound: interest rates were cut to nearly zero, removing the central bank's main tool. Second, debt deflation: falling prices increased the real value of outstanding debt, making households and firms cut spending further to service debt — a Fisherian debt spiral. Third, animal spirits: with banks failing and uncertainty maximal, neither consumers nor firms were willing to spend no matter how low interest rates went. Fourth, aggregate demand externalities: each firm that cut wages or prices helped itself but worsened the demand environment for all others, a coordination failure. This is why the 2008 GFC required the largest peacetime fiscal and monetary stimulus in history — the self-correction mechanism was overwhelmed.`,
      },
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
      {
        id: 'i4-l4-fc5',
        front: 'What is debt deflation and why does it deepen a recessionary gap?',
        back: 'Debt deflation (Irving Fisher\'s theory): when the price level falls during a recession, the real value of outstanding nominal debt rises. Households and firms must spend more of their income on debt repayment, reducing consumption and investment further. This deepens the recessionary gap and can cause a self-reinforcing spiral where falling AD causes more deflation, which raises real debt burdens, which further reduces AD.',
        hint: 'Nominal debt is fixed; falling prices raise its real burden — this is a vicious cycle.',
        tags: ['demand-shock', 'recessionary-gap'],
      },
      {
        id: 'i4-l4-fc6',
        front: 'What is the zero lower bound and why does it matter for demand shocks?',
        back: 'The zero lower bound (ZLB) is the constraint that nominal interest rates cannot be cut below approximately zero (since holding cash always yields 0%). When a severe negative demand shock drives policy rates to near zero, the central bank loses its main tool for stimulating AD. Conventional monetary policy becomes ineffective, potentially trapping the economy in a recessionary gap — justifying unconventional tools like quantitative easing or fiscal stimulus.',
        hint: 'When interest rates hit zero, the central bank cannot cut further — what then?',
        tags: ['demand-shock', 'monetary-policy'],
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
      {
        id: 'i4-l4-q4',
        type: 'mcq',
        question: 'An economy starts at long-run equilibrium. A major fiscal stimulus package increases government spending. Trace the full adjustment path back to long-run equilibrium.',
        options: [
          'AD shifts right → inflationary gap → wages rise → SRAS shifts left → output returns to Y* at higher price level.',
          'AD shifts right → recessionary gap → wages fall → SRAS shifts right → output returns to Y* at lower price level.',
          'SRAS shifts right → output rises above Y* → AD shifts left → equilibrium restored.',
          'AD shifts right → LRAS shifts right → potential output rises permanently.',
        ],
        correctAnswer: 0,
        explanation: 'Starting from long-run equilibrium, a fiscal stimulus shifts AD rightward → new short-run equilibrium has Y > Y* (inflationary gap) and higher price level → tight labour markets push nominal wages up → rising wages increase production costs → SRAS shifts leftward → long-run equilibrium restored at Y* but at an even higher price level. Government spending does not shift LRAS (that requires changes in productive capacity).',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q5',
        type: 'mcq',
        question: 'Why might a positive demand shock cause permanent inflation rather than just a temporary price level increase?',
        options: [
          'Because the self-correcting mechanism shifts SRAS rightward, permanently raising output.',
          'Because the inflationary gap triggers rising wages, which embed higher costs into the economy\'s cost structure even after output returns to Y*.',
          'Because AD automatically shifts right again after the initial shock, compounding the price rise.',
          'Because LRAS shifts rightward, validating the higher price level as the new equilibrium.',
        ],
        correctAnswer: 1,
        explanation: 'A positive demand shock and the resulting inflationary gap leads to higher nominal wages (self-correcting mechanism). Once wage settlements are made at the higher level, these become embedded in firms\' cost structures. Even after output returns to Y*, the price level remains permanently higher because the wage-price interaction has shifted the entire cost base of the economy upward.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q6',
        type: 'mcq',
        question: 'What is the key difference between how a Classical economist and a Keynesian economist would respond to a persistent recessionary gap?',
        options: [
          'Classical: use expansionary fiscal policy immediately; Keynesian: wait for wages to fall.',
          'Classical: wait for falling wages to shift SRAS right and restore Y* automatically; Keynesian: use fiscal or monetary stimulus to shift AD right and close the gap faster.',
          'Classical: raise interest rates to prevent debt deflation; Keynesian: cut taxes to boost consumption.',
          'Both schools agree on the diagnosis but differ only on which specific policy tool to use.',
        ],
        correctAnswer: 1,
        explanation: 'The Classical economist trusts the self-correcting mechanism: wages will eventually fall, SRAS will shift right, and the economy will return to Y* without intervention. The Keynesian economist doubts this adjustment is fast enough and advocates using fiscal policy (raise G, cut taxes) or monetary policy (cut interest rates) to shift AD rightward and close the gap actively. The fundamental disagreement is about speed of adjustment, not just policy tools.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q7',
        type: 'mcq',
        question: 'The 2020 COVID-19 pandemic caused a massive negative demand shock. Which of the following transmission channels best explains how it reduced aggregate demand?',
        options: [
          'The pandemic raised oil prices, shifting SRAS leftward and reducing output.',
          'Lockdowns directly prevented consumption and investment, while uncertainty collapsed business confidence, shifting AD leftward.',
          'The pandemic reduced the labour force, shifting LRAS leftward and reducing potential output.',
          'Government stimulus programmes shifted AD leftward by increasing national debt.',
        ],
        correctAnswer: 1,
        explanation: 'The COVID shock was primarily a demand shock transmitted through multiple channels: lockdowns physically prevented consumer spending (fall in C), business closures halted investment (fall in I), and extreme uncertainty caused firms to cancel spending plans. All of these shift AD leftward. While supply chains were also disrupted (SRAS shift), the dominant initial shock was to AD. Government stimulus subsequently shifted AD rightward. LRAS is affected by structural factors, not temporary demand disruptions.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q8',
        type: 'mcq',
        question: 'An economy operating above potential GDP (inflationary gap) chooses NOT to implement any policy. What is the long-run price level and output outcome?',
        options: [
          'Output stays above Y* permanently and the price level stabilises.',
          'Output returns to Y* through rising wages shifting SRAS left; the price level ends up higher than it was before the shock.',
          'Output returns to Y* through falling prices shifting AD right; the price level returns to its pre-shock level.',
          'Output returns to Y* with no change in the price level.',
        ],
        correctAnswer: 1,
        explanation: 'In an inflationary gap, labour markets are tight and workers successfully bargain for higher nominal wages. Rising wages raise production costs, shifting SRAS leftward. The long-run equilibrium is back at Y* — but the SRAS shift occurred at a higher price level than the original equilibrium, so the final price level is higher than both the original and the short-run inflationary equilibrium. This is the Classical self-correction in action.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q9',
        type: 'mcq',
        question: 'Which of the following scenarios would generate the largest negative demand shock?',
        options: [
          'A small rise in income tax affecting only the top 1% of earners.',
          'A financial crisis that simultaneously destroys household wealth, tightens bank lending, collapses business confidence, and triggers a government austerity programme.',
          'A modest rise in oil prices that slightly increases production costs.',
          'A small appreciation of the domestic currency reducing export competitiveness slightly.',
        ],
        correctAnswer: 1,
        explanation: 'A financial crisis that triggers multiple simultaneous negative shocks is the most severe scenario. It hits every component of AD at once: wealth destruction reduces C; a credit crunch reduces I; collapsing business confidence further reduces I; austerity reduces G. The compounding of these channels explains why financial crises produce much larger and more persistent recessions than other negative demand shocks.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l4-q10',
        type: 'mcq',
        question: 'If government uses contractionary fiscal policy (tax rise) to close an inflationary gap, what is the advantage over waiting for self-correction?',
        options: [
          'Fiscal policy permanently reduces the price level while self-correction only raises it.',
          'Fiscal policy closes the gap more quickly, limiting the inflationary wage-price spiral that would otherwise develop.',
          'Fiscal policy shifts LRAS, while self-correction only shifts SRAS.',
          'Fiscal policy avoids unemployment, which self-correction necessarily causes.',
        ],
        correctAnswer: 1,
        explanation: 'Contractionary fiscal policy (e.g., a tax rise) shifts AD leftward, bringing output back toward Y* without waiting for the wage-price spiral to develop and then unwind. The advantage is speed and the prevention of entrenched inflation expectations: if wages rise and embed higher cost structures before the gap closes, inflation becomes harder to reduce. Active policy can close the gap before expectations become de-anchored.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `Using an AD/AS diagram, analyse the effects of the 2008 global financial crisis on a major economy of your choice. Explain why the negative demand shock was so severe, what government policy responses were used, and whether those responses were appropriate.`,
      rubric: `Award points for:\n- Correctly drawn AD/AS diagram with AD shifting leftward from long-run equilibrium, labelled new short-run equilibrium showing lower Y and lower P (2pt)\n- Explain why the shock was severe: identify at least two amplifying mechanisms (banking crisis, credit crunch, wealth destruction, collapse of confidence, zero lower bound) (2pt)\n- Identify at least two policy responses used in practice (e.g., bank bailouts, quantitative easing, fiscal stimulus packages, near-zero interest rates) (2pt)\n- Evaluation of policy effectiveness: compare recovery speeds, use evidence, acknowledge limitations (crowding out, debt sustainability, time lags) (2pt)\n- Correct use of economic vocabulary (AD, SRAS, LRAS, recessionary gap, quantitative easing) (2pt)`,
      exampleTopics: [
        'Identify the transmission mechanism: banking crisis → credit crunch → fall in I → AD shifts left',
        'Draw the diagram: AD shifts left, real GDP falls, price level may fall (deflation risk)',
        'Identify at least two policy responses used (e.g., bank bailouts, fiscal stimulus, near-zero interest rates)',
        'Evaluate: did the policies work? Compare recovery speeds across countries that used different approaches',
      ],
    },
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
      thinkAboutIt: {
        question: `During stagflation, both inflation and unemployment are high simultaneously. A policymaker can use expansionary policy to reduce unemployment, but this makes inflation worse. Or they can use contractionary policy to reduce inflation, but this makes unemployment worse. There is no obvious 'correct' answer. How should a policymaker choose?`,
        answer: `This is the core policy trilemma of stagflation, and the answer depends on the policymaker's loss function — how much they weight inflation vs unemployment. The Volcker disinflation of 1979-82 shows one approach: the Fed prioritised killing inflation even at the cost of a deep recession (unemployment hit 10.8%). The logic was that high inflation, once embedded in expectations, would require ever-larger doses of unemployment to control, so the one-time pain of a sharp recession was worth it. An alternative approach — accepting higher long-run inflation in exchange for lower unemployment — risks inflation becoming entrenched via wage-price spirals. Most modern central banks now use inflation targeting because they judge inflation expectations as harder to re-anchor once lost.`,
      },
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
      {
        id: 'i4-l5-fc5',
        front: 'What was the Volcker disinflation and what does it illustrate about the policy response to stagflation?',
        back: 'The Volcker disinflation (1979–82): Fed Chairman Paul Volcker raised US interest rates to nearly 20% to crush inflation, accepting a severe recession (unemployment peaked at 10.8%). It illustrates the contractionary approach to stagflation — prioritise killing inflation even at the cost of higher unemployment — based on the logic that entrenched inflation expectations are costlier to deal with later than accepting a sharp near-term recession.',
        hint: 'Sometimes the cure is more painful than the disease — but the long-term gain may justify it.',
        tags: ['stagflation', 'supply-shock'],
      },
      {
        id: 'i4-l5-fc6',
        front: 'What is a wage-price spiral and how does it relate to supply shocks?',
        back: 'A wage-price spiral: after an adverse supply shock raises prices, workers demand higher nominal wages to maintain real purchasing power. Higher wages raise firms\' costs, causing another round of price increases, which prompts further wage demands — a self-reinforcing inflationary cycle. Supply shocks can trigger this spiral if policymakers accommodate the initial price rise with expansionary policy, validating the higher inflation and starting the next round of wage negotiations at a higher base.',
        hint: 'Higher prices → higher wage demands → higher costs → higher prices again — a vicious cycle.',
        tags: ['stagflation', 'supply-shock'],
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
      {
        id: 'i4-l5-q4',
        type: 'mcq',
        question: 'A government facing stagflation decides to do nothing — no fiscal or monetary policy change. What does the self-correcting mechanism predict will happen over time?',
        options: [
          'The economy will remain in stagflation permanently because AD and SRAS cannot self-adjust.',
          'Eventually, recession-driven unemployment will reduce workers\' bargaining power, nominal wages will fall, SRAS will shift rightward, and output will recover — but the higher price level from the initial supply shock may persist.',
          'The price level will automatically return to its pre-shock level as firms compete for customers.',
          'AD will shift rightward as consumers adjust to higher prices, restoring the original equilibrium.',
        ],
        correctAnswer: 1,
        explanation: 'With no policy intervention, stagflation produces a recessionary gap (Y < Y*). Over time, the persistent unemployment weakens workers\' bargaining power, causing nominal wages to fall. Lower wages reduce firms\' costs, shifting SRAS rightward. Output recovers toward Y*. However, the price level does not necessarily return to its pre-shock level — it depends on how far wages ultimately fall. The self-correction can be very slow due to wage stickiness.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q5',
        type: 'mcq',
        question: 'Why did the 1973 OPEC oil embargo cause "stagflation" rather than just "stagnation" or just "inflation"?',
        options: [
          'Because the embargo shifted AD leftward, simultaneously raising unemployment and lowering prices.',
          'Because oil is a key input across the entire economy, so the cost shock shifted SRAS leftward, simultaneously reducing output (raising unemployment) and raising the price level (causing inflation).',
          'Because the embargo destroyed physical capital, shifting LRAS leftward and reducing potential output permanently.',
          'Because governments responded to the embargo with both tax increases and money printing at the same time.',
        ],
        correctAnswer: 1,
        explanation: 'Oil is a pervasive input — transport, manufacturing, heating, agriculture all depend on it. A quadrupling of oil prices raised costs across virtually every sector simultaneously, shifting SRAS leftward. A leftward SRAS shift with unchanged AD produces the defining feature of stagflation: higher price level AND lower real output (higher unemployment). This is why it was unprecedented — standard macroeconomic models predicted that inflation and unemployment should not both rise simultaneously.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q6',
        type: 'mcq',
        question: 'A government uses contractionary monetary policy to combat stagflation caused by an oil price shock. What is the most likely outcome?',
        options: [
          'Both inflation and unemployment fall, resolving the stagflation.',
          'Inflation falls but the recession deepens — output falls further below Y* and unemployment rises.',
          'Output recovers toward Y* while inflation remains unchanged.',
          'The policy has no effect because supply shocks cannot be addressed by monetary policy.',
        ],
        correctAnswer: 1,
        explanation: 'Contractionary monetary policy (raising interest rates) shifts AD leftward. Starting from the stagflation equilibrium (lower Y, higher P), an AD shift left reduces the price level (helpful for inflation) but further reduces real output (worsening the recession). Unemployment rises. This is the core policy dilemma: any AD-based tool that fights one symptom of stagflation worsens the other. Only a rightward SRAS shift (e.g., a reversal of the oil shock) can resolve both problems simultaneously.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q7',
        type: 'mcq',
        question: 'Which combination of macroeconomic outcomes is uniquely associated with an adverse supply shock?',
        options: [
          'Rising real GDP and rising price level.',
          'Falling real GDP and falling price level.',
          'Falling real GDP and rising price level (stagflation).',
          'Rising real GDP and falling price level.',
        ],
        correctAnswer: 2,
        explanation: 'An adverse supply shock (leftward SRAS shift) is the only standard AD/AS scenario that produces simultaneously falling real GDP and a rising price level — stagflation. A negative demand shock produces falling GDP AND falling prices. A positive demand shock produces rising GDP and rising prices. A favourable supply shock produces rising GDP and falling prices.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q8',
        type: 'mcq',
        question: 'The rapid fall in semiconductor chip prices during the 1990s reduced production costs for a wide range of industries. What type of shock was this, and what were its macroeconomic effects?',
        options: [
          'Adverse supply shock: SRAS shifted left, causing stagflation.',
          'Positive demand shock: AD shifted right, raising output and the price level.',
          'Favourable supply shock: SRAS shifted right, raising output while reducing the price level.',
          'Neutral technology shock: no effect on AD or SRAS curves.',
        ],
        correctAnswer: 2,
        explanation: 'Falling semiconductor prices reduced production costs across many industries, shifting SRAS rightward — a favourable supply shock. The macroeconomic effect is higher real output and a lower (or stable) price level. This is consistent with the "non-inflationary growth" experienced in the US in the 1990s, where the economy expanded rapidly with unusually low inflation. Both SRAS and LRAS shifted rightward as productivity and productive capacity increased.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q9',
        type: 'mcq',
        question: 'A persistent supply shock (e.g., permanently higher energy prices) affects both SRAS and potentially LRAS. What distinguishes the SRAS effect from the LRAS effect?',
        options: [
          'SRAS shifts affect the price level; LRAS shifts affect only real output.',
          'SRAS shifts reflect changes in current production costs; LRAS shifts occur only if the shock permanently alters the economy\'s productive capacity.',
          'SRAS shifts are temporary; LRAS shifts are always reversed within a year.',
          'There is no distinction — any SRAS shift automatically causes an identical LRAS shift.',
        ],
        correctAnswer: 1,
        explanation: 'A supply shock shifts SRAS because it changes current production costs. An oil price rise immediately raises the cost of producing any given level of output → SRAS shifts left. The LRAS shifts only if the shock permanently changes the economy\'s productive capacity — e.g., if permanently higher energy prices destroy enough capital or cause enough capital flight to reduce the long-run capital stock. Short-lived shocks affect SRAS without necessarily affecting LRAS.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l5-q10',
        type: 'mcq',
        question: 'Which policy response would be most effective at resolving stagflation without worsening either inflation or unemployment?',
        options: [
          'Expanding AD through fiscal stimulus.',
          'Contracting AD through tight monetary policy.',
          'Implementing supply-side policies that reverse the cost shock (e.g., energy diversification, productivity improvements) to shift SRAS rightward.',
          'Doing nothing and waiting for the self-correcting mechanism.',
        ],
        correctAnswer: 2,
        explanation: 'Stagflation arises from a leftward SRAS shift. The only AD-neutral solution is to shift SRAS back rightward — addressing the supply-side root cause. Policies that reduce energy dependence, boost productivity, or reverse the cost shock can shift SRAS right, simultaneously lowering the price level and raising output. This avoids the trade-off inherent in AD policies. Options A and B each fix one problem while worsening the other. Option D works eventually but is very slow and painful.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `The oil price shocks of the 1970s caused stagflation in many developed economies. Using AD/AS diagrams, explain how a negative supply shock causes stagflation, and evaluate the policy options available to a government facing this situation.`,
      rubric: `Award points for:\n- Correctly drawn AD/AS diagram with SRAS shifting leftward from long-run equilibrium, with new short-run equilibrium labelled showing higher P and lower Y (2pt)\n- Stagflation correctly identified and explained: simultaneous higher price level and lower real GDP / higher unemployment (2pt)\n- Policy dilemma clearly explained: expansionary policy worsens inflation; contractionary policy worsens the recession — there is no pain-free AD-based solution (2pt)\n- Real-world policy example: reference the Volcker disinflation, Thatcher policies, or 1970s OPEC response with correct details (2pt)\n- Evaluation of best approach with clear reasoning: which outcome is less harmful and why, acknowledging the trade-offs involved (2pt)`,
      exampleTopics: [
        'Draw SRAS shifting left and label the stagflation equilibrium',
        'Explain the policy dilemma: why there is no pain-free solution',
        'Compare the Volcker approach (crush inflation first) vs. accommodating the shock',
        'Give your verdict: what should a government prioritise — reducing inflation or unemployment — and why?',
      ],
    },
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
      thinkAboutIt: {
        question: `The multiplier formula gives k = 1/(1-MPC). If the MPC is 0.9, the multiplier is 10 — meaning £1 of government spending creates £10 of GDP. Yet in the real world, economists estimate the fiscal multiplier is typically between 0.5 and 1.5. What causes the real-world multiplier to be so much smaller than the theoretical one?`,
        answer: `The theoretical multiplier assumes all extra income gets re-spent within the domestic economy. In reality, three leakages drain the multiplier at every round. First, taxation: the government takes a share of each income increase, reducing what's available to spend. Second, saving: households save a fraction of extra income, not just 1-MPC of it. Third, imports: some spending leaks abroad on foreign goods, boosting other countries' GDP rather than the domestic economy. Beyond leakages, the multiplier is further compressed by crowding out (if government spending raises interest rates, it displaces private investment) and Ricardian equivalence (consumers anticipating future tax rises may save the stimulus rather than spend it). In an open economy with high import propensity and a large tax rate, the real multiplier can be well below 1.`,
      },
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
      {
        id: 'i4-l6-fc5',
        front: 'What is crowding out and how does it reduce the fiscal multiplier?',
        back: 'Crowding out: when government increases spending (often financed by borrowing), it increases demand for loanable funds, pushing up interest rates. Higher interest rates reduce private investment and consumer borrowing — partially offsetting the government\'s spending injection. This reduces the net increase in AD below the initial ΔG, compressing the effective multiplier. In a liquidity trap (rates already at zero), crowding out is minimal — one reason Keynesians argue stimulus is most effective during deep recessions.',
        hint: 'Government borrowing competes with private borrowing for funds — who wins?',
        tags: ['multiplier', 'Keynesian'],
      },
      {
        id: 'i4-l6-fc6',
        front: 'What is Ricardian equivalence and why would it reduce the multiplier to zero?',
        back: 'Ricardian equivalence (Robert Barro): rational consumers know that government borrowing today means higher taxes tomorrow. If they anticipate the future tax bill, they save the entire stimulus now to pay it later — the MPC from deficit-financed spending is zero and the multiplier collapses to zero. In practice, this is an extreme result; most consumers are credit-constrained or short-sighted. But the principle shows that the multiplier is smaller when consumers are forward-looking and fiscal credibility is high.',
        hint: 'If consumers know the stimulus will be taxed back, why would they spend it?',
        tags: ['multiplier', 'Keynesian'],
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
      {
        id: 'i4-l6-q4',
        type: 'mcq',
        question: 'An economy has an MPC of 0.8. The government increases spending by £100 billion. Using the simple multiplier, what is the predicted increase in equilibrium GDP?',
        options: [
          '£100 billion.',
          '£400 billion.',
          '£500 billion.',
          '£800 billion.',
        ],
        correctAnswer: 2,
        explanation: 'MPS = 1 − 0.8 = 0.2. Multiplier k = 1 / 0.2 = 5. ΔY = 5 × £100bn = £500 billion. Option A ignores the multiplier entirely. Option B uses k = 4, which would correspond to MPS = 0.25 (MPC = 0.75). Option D uses k = 8, which would correspond to MPS = 0.125.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q5',
        type: 'mcq',
        question: 'In a highly open economy where households spend 30% of every additional pound on imports, and face a 25% income tax rate, which statement about the fiscal multiplier is most accurate?',
        options: [
          'The multiplier is the same as in a closed economy because taxes and imports cancel out.',
          'The multiplier is larger than in a closed economy because more money circulates internationally.',
          'The multiplier is smaller than in a closed economy because each round of spending loses more to tax and import leakages before returning as domestic income.',
          'Taxes increase the multiplier because they reduce saving.',
        ],
        correctAnswer: 2,
        explanation: 'In an open economy with taxes, the effective multiplier uses the formula k = 1 / (1 − MPC(1−t) + m), where t is the tax rate and m is the import propensity. Additional leakages from tax (25% of each income round is taken) and imports (30% of spending leaks abroad) dramatically reduce how much of each income round returns as domestic spending — the effective multiplier is substantially below the simple 1/MPS.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q6',
        type: 'mcq',
        question: 'A government cuts income taxes by £50 billion with MPC = 0.75. What is the expected change in GDP using the tax-cut multiplier?',
        options: [
          '£200 billion increase.',
          '£37.5 billion increase.',
          '£150 billion increase.',
          '£50 billion increase.',
        ],
        correctAnswer: 2,
        explanation: 'The tax-cut multiplier = MPC / MPS = 0.75 / 0.25 = 3. ΔY = 3 × £50bn = £150 billion. Alternatively: the government spending multiplier would be k = 1/0.25 = 4, giving £200bn (Option A) — but a tax cut is smaller because households save MPS × £50bn in the first round. The tax-cut multiplier is always MPC × (government spending multiplier).',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q7',
        type: 'mcq',
        question: 'Why is the fiscal multiplier typically larger during a deep recession than during a boom?',
        options: [
          'During a recession, the government borrows at higher interest rates, increasing the money supply more.',
          'During a recession, there is spare capacity, so increased spending raises output rather than just prices; in a boom near Y*, additional spending is more inflationary and crowds out private investment.',
          'During a boom, households have higher MPC, making the multiplier smaller.',
          'During a recession, imports fall to zero, eliminating all leakages.',
        ],
        correctAnswer: 1,
        explanation: 'The multiplier is larger during a deep recession because the economy has substantial spare capacity (Y << Y*). Increased government spending can be met by putting idle workers and capital back to work — output rises rather than prices. Near full employment (a boom), the economy is near the vertical LRAS, so additional AD primarily raises the price level (inflation) rather than output, and crowding out is more severe as interest rates rise. The Keynesian case for fiscal stimulus is therefore strongest precisely when the economy is furthest below potential.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q8',
        type: 'mcq',
        question: 'What does it mean for the multiplier if Ricardian equivalence holds perfectly?',
        options: [
          'The multiplier doubles because households increase investment with their tax savings.',
          'The multiplier falls to zero because rational households save the entire deficit-financed stimulus in anticipation of future tax rises.',
          'The multiplier equals the MPC because only some households are rational.',
          'The multiplier is unaffected because Ricardian equivalence applies only to monetary policy.',
        ],
        correctAnswer: 1,
        explanation: 'Under perfect Ricardian equivalence, rational households recognise that deficit-financed government spending implies future tax increases of equal present value. They save the entire fiscal stimulus today to pay the future tax bill — the MPC from the stimulus is zero and the multiplier collapses to zero. In practice, perfect Ricardian equivalence is unlikely (credit-constrained households cannot smooth consumption perfectly), but the principle implies the multiplier is reduced when consumers are forward-looking.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q9',
        type: 'mcq',
        question: 'A government runs a "balanced budget" fiscal expansion — it increases spending by £100 billion AND raises taxes by £100 billion. Using the multiplier framework, what is the net effect on GDP?',
        options: [
          'Zero net effect, since the tax rise exactly cancels the spending increase.',
          'A positive net effect of approximately £100 billion — the balanced budget multiplier equals 1.',
          'A negative net effect, since tax rises shrink the economy more than spending expands it.',
          'The effect cannot be determined without knowing the interest rate.',
        ],
        correctAnswer: 1,
        explanation: 'The balanced budget multiplier theorem: a simultaneous equal increase in G and T of £100bn produces a net GDP increase of approximately £100bn. Why? The spending multiplier is 1/MPS = e.g. 4, giving +£400bn. The tax multiplier is MPC/MPS = e.g. 3, giving −£300bn. Net = +£100bn. The spending has a larger multiplier than the tax, so the balanced budget expansion is not neutral. This result holds under the simple Keynesian framework.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'i4-l6-q10',
        type: 'mcq',
        question: 'Which of the following changes would reduce the size of the Keynesian spending multiplier?',
        options: [
          'A fall in the marginal propensity to save.',
          'An increase in the marginal propensity to consume.',
          'An increase in income tax rates, reducing the amount of each income round available for spending.',
          'A reduction in imports as a share of consumer spending.',
        ],
        correctAnswer: 2,
        explanation: 'Higher income tax rates are a leakage from the circular flow: each time income is earned, a larger fraction is taken in tax before it can be re-spent. This reduces the effective re-spending at each round of the multiplier process, lowering the effective multiplier. Options A and B both lower MPS / raise MPC, which increase the multiplier. Option D reduces import leakages, which would increase the multiplier.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
    lessonAssignment: {
      prompt: `A government announces a £20 billion increase in infrastructure spending. Using the concept of the multiplier, explain how this injection could affect national income. Calculate the theoretical maximum impact if the MPC = 0.75, then explain why the actual impact will be lower. Evaluate whether this policy is likely to be effective.`,
      rubric: `Award points for:\n- Correctly state the multiplier formula k = 1 / (1 − MPC) = 1 / MPS, calculate k = 1 / 0.25 = 4, and compute ΔY = 4 × £20bn = £80bn (3pt)\n- Identify and explain at least two leakages that reduce the real-world multiplier below the theoretical maximum (taxation reduces disposable income at each round; saving withdraws income from the spending stream; imports leak spending abroad) (3pt)\n- Diagram showing the injection shifting AD rightward by more than £20bn (the full multiplied amount), with correctly labelled axes (2pt)\n- Evaluation of policy effectiveness citing contextual factors: multiplier is larger in a recession (spare capacity) than in a boom; larger in a closed economy than an open one; may be reduced by crowding out or Ricardian equivalence (2pt)`,
      exampleTopics: [
        'State the multiplier formula: k = 1 / (1 - MPC) and calculate the theoretical maximum',
        'Identify the three main leakages: taxation, saving, and imports',
        'Draw the AD/AS diagram showing AD shifting right by more than £20bn',
        'Evaluate: is the multiplier larger in a recession or a boom? In a closed or open economy? Why?',
      ],
    },
  },
]
