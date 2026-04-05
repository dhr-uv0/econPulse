import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'i1-costs',
  title: 'Deep Microeconomics — Costs and Production',
  description: 'Understand how firms make production decisions and why cost structure determines market structure.',
  tier: 'INTERMEDIATE' as const,
  track: 'INTERMEDIATE' as const,
  unit: 1,
  estimatedHours: 4,
  color: '#3b82f6',
  icon: 'TrendingUp',
}

export const lessons: Lesson[] = [
  // ── Lesson 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l1',
    moduleId: 'i1-costs',
    title: 'Short Run vs. Long Run in Production',
    description: 'Define the short run and long run; introduce the production function concept.',
    order: 1,
    estimatedMinutes: 25,
    tags: ['short-run', 'long-run', 'production'],
    content: {
      isStub: false,
      conceptualExplanation:
        'In economics, time is not measured by the clock — it is measured by which inputs a firm can change. The **short run** is any period in which at least one factor of production is fixed and cannot be altered regardless of how much output the firm wants to produce. Typically this fixed factor is capital: a bakery cannot add a second industrial oven overnight, so in the short run it must squeeze more output from existing equipment by hiring more workers or buying more flour. Because one input is stuck, the firm faces constraints that make it impossible to scale freely.\n\n' +
        'The **long run** is the planning horizon over which every factor of production becomes variable. Given enough time, a firm can build a new factory, lease additional land, retrain its entire workforce, or adopt a completely different technology. In the long run there are no fixed costs — only variable costs — because all resources can be adjusted. This distinction matters enormously: decisions about hiring extra staff are short-run decisions, while decisions about building a second production plant are long-run decisions requiring entirely different analysis.\n\n' +
        'The **production function** formalises this by expressing the maximum output (Q) a firm can produce from given quantities of inputs, typically written Q = f(K, L) where K is capital and L is labour. In the short run, K is fixed (K̄), so the firm only varies L. In the long run, both K and L can change. Understanding the production function is the foundation for all cost analysis: because costs are simply the prices of inputs multiplied by the quantities used, the shape of the production function directly determines the shape of every cost curve a firm faces.',
      prerequisiteRecap: `In the FOUNDATIONS tier you studied government intervention — taxes, subsidies, and price controls — and how they create deadweight loss by preventing markets from reaching allocative efficiency (P = MC). This module builds on that efficiency benchmark by examining how firms' internal production and cost structures determine the output and pricing decisions that either achieve or fall short of it.`,
      recallQuestions: [
        {
          id: 'i1-l1-recall-1',
          type: 'mcq' as const,
          question: 'A government imposes a price ceiling below the market equilibrium price. Which of the following best describes the welfare outcome?',
          options: [
            'Consumer surplus rises, producer surplus falls, and there is a net deadweight loss.',
            'Both consumer surplus and producer surplus rise, so total welfare increases.',
            'Producer surplus rises and consumer surplus falls, with no deadweight loss.',
            'Total surplus is unchanged because gains to consumers offset losses to producers exactly.',
          ],
          correctAnswer: 0,
          explanation: 'A price ceiling below equilibrium reduces quantity traded below the efficient level. Consumers who buy gain surplus, but the deadweight loss from units no longer traded means total surplus (consumer + producer) falls. This is the core inefficiency result from government intervention studied in FOUNDATIONS.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      realWorldHook:
        'When a coffee shop gets a weekend rush, the owner cannot install a second espresso machine in minutes — that machine is a fixed capital input. Instead, they call in an extra barista (a variable labour input). This is a textbook short-run response. By contrast, when Starbucks decides to open 500 new locations over three years, every input — land, machines, staff, supply contracts — is up for negotiation. That multi-year expansion plan is a long-run decision, which is why the company\'s economists think about it with completely different models.',
      vocabulary: [
        {
          term: 'Short run',
          definition: 'The production period in which at least one factor of production (usually capital) is fixed and cannot be varied.',
          example: 'A restaurant can hire a second chef this week (variable labour) but cannot expand its kitchen overnight (fixed capital).',
        },
        {
          term: 'Long run',
          definition: 'The planning horizon over which all factors of production are variable and the firm can freely adjust every input.',
          example: 'Amazon building a new fulfilment centre is a long-run decision because it involves changing the firm\'s entire capital stock.',
        },
        {
          term: 'Production function',
          definition: 'A mathematical relationship showing the maximum output a firm can produce from any given combination of inputs.',
          example: 'If Q = f(K, L) and K is fixed at 2 machines, the firm can only increase Q by employing more workers L.',
        },
      ],
      examinerTip:
        'Examiners frequently ask students to classify decisions as short-run or long-run. Always ground your answer in whether any factor is fixed. Never define the short run as "less than one year" — the length of the short run is industry-specific and can be days (a fruit stall) or decades (a nuclear power plant).',
    },
    flashcards: [
      {
        id: 'i1-l1-fc1',
        front: 'What defines the short run in production theory?',
        back: 'At least one factor of production is fixed and cannot be varied, regardless of the desired output level.',
        hint: 'Think about which input a firm cannot change quickly.',
        tags: ['short-run', 'production'],
      },
      {
        id: 'i1-l1-fc2',
        front: 'What defines the long run in production theory?',
        back: 'All factors of production are variable; the firm can freely adjust every input, so there are no fixed costs.',
        hint: 'Long run = full flexibility.',
        tags: ['long-run', 'production'],
      },
      {
        id: 'i1-l1-fc3',
        front: 'Write the general form of a two-input production function.',
        back: 'Q = f(K, L), where Q is output, K is capital, and L is labour. In the short run K is fixed (K̄); in the long run both vary.',
        hint: 'Two letters for two inputs.',
        tags: ['production function'],
      },
      {
        id: 'i1-l1-fc4',
        front: 'Why is the length of the short run industry-specific?',
        back: 'It depends on how long it takes to adjust the fixed factor. A fruit stall can change its table in a day; a power plant may take years to commission new capacity.',
        hint: 'Capital adjustment speed varies widely.',
        tags: ['short-run', 'long-run'],
      },
    ],
    quiz: [
      {
        id: 'i1-l1-q1',
        type: 'mcq',
        question: 'A textile factory wants to double output next month. It can hire more workers immediately but cannot install new looms for six months. Which statement best describes this situation?',
        options: [
          'The factory is operating in the short run because capital (looms) is fixed.',
          'The factory is operating in the long run because it plans to install more looms eventually.',
          'The factory is operating in the short run because labour is the only factor of production.',
          'The factory is in the long run because output can still increase.',
        ],
        correctAnswer: 0,
        explanation: 'The short run is defined by at least one fixed factor — here, looms (capital) cannot be changed for six months. The ability to vary labour does not change this classification.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l1-q2',
        type: 'mcq',
        question: 'Which of the following is a long-run decision?',
        options: [
          'A car manufacturer builds an entirely new assembly plant in a new country.',
          'A bakery hires two extra workers for the holiday season.',
          'A restaurant extends its opening hours from 8 pm to 10 pm.',
          'A retailer orders more inventory to meet Christmas demand.',
        ],
        correctAnswer: 0,
        explanation: 'Building a new assembly plant changes the firm\'s capital stock — a factor that is fixed in the short run. All other options involve adjusting variable inputs (labour, hours, inventory) and are therefore short-run decisions.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l1-q3',
        type: 'mcq',
        question: 'In the production function Q = f(K̄, L), what does the bar over K signify?',
        options: [
          'Capital is fixed and cannot be varied in the current time period.',
          'Capital is the most important input in production.',
          'Capital is measured in units of labour-equivalents.',
          'Capital is zero and the firm uses only labour.',
        ],
        correctAnswer: 0,
        explanation: 'A bar over a variable in economics conventionally denotes that the quantity is fixed (held constant). K̄ means capital is at a set level that the firm cannot change — the defining characteristic of the short run.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l2',
    moduleId: 'i1-costs',
    title: 'The Law of Diminishing Marginal Returns',
    description: 'Explain why adding variable inputs to a fixed factor eventually yields smaller output increments.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['diminishing-returns', 'marginal-product'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson established that in the short run at least one factor of production is fixed — typically capital — while labour is variable, and that the firm's production function Q = f(K̄, L) captures this constraint. The Law of Diminishing Marginal Returns explains what happens to output as the firm adds more of that variable labour input to the fixed capital stock.`,
      recallQuestions: [
        {
          id: 'i1-l2-recall-1',
          type: 'mcq' as const,
          question: 'In the short-run production function Q = f(K̄, L), what does the bar over K represent?',
          options: [
            'Capital is fixed and cannot be varied in the current time period.',
            'Capital is the only input that generates output.',
            'Capital is measured in the same units as labour.',
            'Capital is zero and the firm relies entirely on labour.',
          ],
          correctAnswer: 0,
          explanation: 'A bar over a variable in economics denotes that it is held constant — K̄ means capital is fixed at a set level. This is the defining characteristic of the short run: at least one factor cannot be adjusted, regardless of how much output the firm desires.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'The **Law of Diminishing Marginal Returns** (LDMR) states that as successive units of a variable input (typically labour) are added to a fixed factor (typically capital), the marginal product of the variable input will eventually fall. Marginal product (MP) is the extra output gained from employing one additional unit of the variable input, holding all other inputs constant. Early workers may benefit from specialisation and better use of fixed equipment, so MP initially rises — this is the phase of increasing returns. But once the fixed factor becomes congested, each new worker adds less to total output than the previous one.\n\n' +
        'It is critical to understand what the law does and does not say. It does **not** say that additional workers make things worse (negative MP is possible eventually, but the law only guarantees diminishing positive returns). It does not apply in the long run — if the firm can expand both labour and capital, returns may remain constant or even increase. The law is strictly a **short-run** phenomenon, operating because one factor is fixed. It is also universal: it applies to agriculture, manufacturing, professional services, and even studying — the first hour of revision yields more than the fifth hour in the same sitting.\n\n' +
        'Graphically, total product (TP) first rises at an increasing rate (MP rising), then rises at a decreasing rate (MP falling but positive), and potentially falls (MP negative). The MP curve reaches its peak at the inflection point of the TP curve and crosses the average product (AP) curve at AP\'s maximum. These relationships are not arbitrary — they follow directly from the mathematics of the production function and are essential for deriving the shapes of short-run cost curves.',
      realWorldHook:
        'Imagine a food truck with one grill and a fixed serving window. The first cook can prepare and serve meals efficiently. A second cook helps — one grills while the other takes orders — so output more than doubles. But squeeze in a fifth cook and they\'re bumping into each other; each additional cook adds less than the last. By the time you have eight people in a food truck designed for two, extra cooks may actually get in the way and output falls. This crowding of a fixed resource (the truck and grill) is diminishing marginal returns made tangible.',
      vocabulary: [
        {
          term: 'Marginal product (MP)',
          definition: 'The additional output produced by employing one more unit of a variable input, holding all other inputs constant.',
          example: 'If 4 workers produce 100 units and 5 workers produce 118 units, the marginal product of the 5th worker is 18 units.',
        },
        {
          term: 'Average product (AP)',
          definition: 'Total output divided by the number of units of the variable input employed.',
          example: 'If 5 workers produce 100 units, average product of labour is 20 units per worker.',
        },
        {
          term: 'Law of Diminishing Marginal Returns',
          definition: 'In the short run, as more units of a variable input are added to a fixed factor, marginal product will eventually decline.',
          example: 'A farm with 10 acres (fixed land) will find that each additional farmhand beyond a certain point adds less wheat output than the previous one.',
        },
      ],
      examinerTip:
        'Always state three things when applying the LDMR: (1) it is a short-run concept, (2) at least one factor must be fixed, and (3) you are adding units of the variable input. Many students lose marks by applying it to the long run or forgetting to specify the fixed factor. Also distinguish it from diseconomies of scale, which is a long-run concept.',
    },
    flashcards: [
      {
        id: 'i1-l2-fc1',
        front: 'Define marginal product of labour (MPL).',
        back: 'The additional output produced when one more worker is hired, with all other inputs (especially capital) held constant.',
        hint: 'Marginal = extra/additional.',
        tags: ['marginal-product'],
      },
      {
        id: 'i1-l2-fc2',
        front: 'State the Law of Diminishing Marginal Returns.',
        back: 'In the short run, as successive units of a variable input are added to a fixed factor, the marginal product of the variable input will eventually decrease.',
        hint: 'Key words: short run, variable, fixed, eventually.',
        tags: ['diminishing-returns'],
      },
      {
        id: 'i1-l2-fc3',
        front: 'Where does the MP curve intersect the AP curve?',
        back: 'MP intersects AP at AP\'s maximum point. When MP > AP, AP is rising; when MP < AP, AP is falling.',
        hint: 'Think of the class average analogy.',
        tags: ['marginal-product', 'average-product'],
      },
      {
        id: 'i1-l2-fc4',
        front: 'Why does the LDMR apply only in the short run?',
        back: 'Because it requires at least one fixed factor. In the long run, all factors are variable, so the firm can scale up capital alongside labour and avoid congestion.',
        hint: 'No fixed factor = no LDMR.',
        tags: ['diminishing-returns', 'short-run'],
      },
    ],
    quiz: [
      {
        id: 'i1-l2-q1',
        type: 'mcq',
        question: 'A firm employs workers on a fixed assembly line. The 6th worker adds 20 units to output, and the 7th worker adds 15 units. Which of the following is true?',
        options: [
          'Diminishing marginal returns have set in by the 7th worker.',
          'Total output is falling from the 6th to the 7th worker.',
          'The average product of labour is at its maximum at the 7th worker.',
          'The firm is operating in the long run.',
        ],
        correctAnswer: 0,
        explanation: 'The marginal product fell from 20 to 15, which means diminishing marginal returns have set in. Total output is still rising (just more slowly), so option B is wrong. AP maximum occurs where MP = AP, not here. This is a short-run scenario.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l2-q2',
        type: 'mcq',
        question: 'Which condition is necessary for the Law of Diminishing Marginal Returns to apply?',
        options: [
          'At least one factor of production must be fixed.',
          'The firm must be in the long run.',
          'All factors of production must be variable.',
          'The firm must be producing at maximum output.',
        ],
        correctAnswer: 0,
        explanation: 'The LDMR is a short-run law that requires a fixed factor. Without a fixed factor (i.e., in the long run), there is no congestion effect and returns need not diminish.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l2-q3',
        type: 'mcq',
        question: 'As a firm moves from the region where MP > AP to MP < AP, what happens to AP?',
        options: [
          'AP begins to fall.',
          'AP begins to rise.',
          'AP stays constant.',
          'AP becomes negative.',
        ],
        correctAnswer: 0,
        explanation: 'When MP is above AP, each new worker pulls the average up. Once MP drops below AP, each new worker pulls the average down — so AP begins to fall. AP peaks exactly where MP = AP.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l3',
    moduleId: 'i1-costs',
    title: 'Total, Fixed, Variable, Average, and Marginal Costs',
    description: 'Build each cost curve from scratch, understand their shapes, and identify the MC-ATC relationship.',
    order: 3,
    estimatedMinutes: 40,
    tags: ['cost-curves', 'TC', 'FC', 'VC', 'ATC', 'MC'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson showed that because capital is fixed in the short run, each additional worker eventually adds less to output than the previous one — the Law of Diminishing Marginal Returns. This directly determines the shape of every short-run cost curve: when MPL is falling, the cost of producing each extra unit (marginal cost) is rising.`,
      recallQuestions: [
        {
          id: 'i1-l3-recall-1',
          type: 'mcq' as const,
          question: 'A firm employs workers on a fixed production line. The 8th worker adds 12 units to output, and the 9th worker adds 8 units. Which statement is correct?',
          options: [
            'Diminishing marginal returns have set in by the 9th worker, because marginal product has fallen.',
            'The firm is in the long run because output is still increasing.',
            'Average product is at its maximum at the 9th worker.',
            'Total product is falling from the 8th to the 9th worker.',
          ],
          correctAnswer: 0,
          explanation: 'Diminishing marginal returns set in when marginal product falls — here MPL dropped from 12 to 8. Total product is still rising (just more slowly), so it has not fallen. This is a short-run phenomenon requiring at least one fixed factor.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'Every firm\'s cost structure can be decomposed into components that each tell a different story. **Total Fixed Cost (TFC)** does not change with output — it must be paid even if the firm produces nothing. Rent, insurance premiums, and salaried managers are classic examples. On a graph, TFC is a horizontal line. **Total Variable Cost (TVC)** rises as output increases because more variable inputs must be purchased. Due to the Law of Diminishing Marginal Returns, TVC rises at a decreasing rate at first (when MP is rising) and then at an increasing rate (when MP is falling). **Total Cost (TC) = TFC + TVC** and therefore TC has the same shape as TVC — just shifted upward by the constant amount of TFC.\n\n' +
        'Dividing these totals by output yields the average cost concepts. **Average Fixed Cost (AFC) = TFC / Q** continuously declines as output rises — fixed costs are "spread" over more units. **Average Variable Cost (AVC) = TVC / Q** is U-shaped because of diminishing returns: it falls initially, reaches a minimum, then rises. **Average Total Cost (ATC) = TC / Q = AFC + AVC** is also U-shaped, but its minimum point lies to the right of AVC\'s minimum because AFC is still falling and pulling ATC down even after AVC starts to rise.\n\n' +
        '**Marginal Cost (MC) = ΔTC / ΔQ = ΔTVC / ΔQ** (since fixed costs don\'t change) measures the cost of producing one more unit. MC is U-shaped, falling when MP is rising and rising when MP is falling — MC and MP are mirror images through the cost-output relationship. The pivotal rule: **MC intersects both AVC and ATC at their minimum points.** This happens because of the same mathematical logic as the MP-AP relationship: when MC is below an average, the average falls; when MC is above an average, the average rises. This rule is essential for understanding firm decisions.',
      realWorldHook:
        'Think of running a food delivery service. Your fixed costs — the app subscription, a van lease, business insurance — don\'t change whether you deliver 10 or 1,000 parcels a month. Your variable costs — fuel, packaging, driver overtime — rise with every delivery. At low volumes, your average total cost per parcel is sky-high because fixed costs dominate. As you deliver more, those fixed costs spread thinner and ATC falls. Eventually, if you push volume too hard, variable costs (fuel, wear, traffic delays) soar and ATC rises again. The sweet spot — the minimum of your ATC curve — is the volume at which you are technically most efficient.',
      vocabulary: [
        {
          term: 'Marginal cost (MC)',
          definition: 'The additional cost incurred from producing one more unit of output; equal to the change in total (variable) cost divided by the change in output.',
          example: 'If producing 50 units costs £500 and producing 51 units costs £511, the marginal cost of the 51st unit is £11.',
        },
        {
          term: 'Average total cost (ATC)',
          definition: 'Total cost divided by the quantity of output produced; also equal to AFC + AVC.',
          example: 'If TC = £600 at Q = 30, then ATC = £20 per unit.',
        },
        {
          term: 'Total fixed cost (TFC)',
          definition: 'Costs that do not vary with the level of output and must be paid even when output is zero.',
          example: 'A factory\'s annual lease of £120,000 is a fixed cost — it remains constant whether the factory produces 1 unit or 100,000 units.',
        },
      ],
      examinerTip:
        'Master the MC-ATC relationship before your exam. Draw both curves, then label where MC crosses ATC — that is the minimum of ATC. If a question asks "at what output is the firm productively efficient?" the answer is always the minimum ATC, which is where MC = ATC. Similarly, MC crosses AVC at AVC\'s minimum. Never confuse minimum AVC with minimum ATC — ATC\'s minimum is always to the right.',
    },
    flashcards: [
      {
        id: 'i1-l3-fc1',
        front: 'What is the formula for Marginal Cost (MC)?',
        back: 'MC = ΔTC / ΔQ = ΔTVC / ΔQ. Fixed costs do not change with output, so they contribute nothing to MC.',
        hint: 'Only variable costs matter for marginal cost.',
        tags: ['MC', 'cost-curves'],
      },
      {
        id: 'i1-l3-fc2',
        front: 'Why is the ATC curve U-shaped?',
        back: 'At low output, high AFC dominates, pulling ATC down as output rises. At higher output, rising AVC (due to diminishing returns) eventually outweighs the falling AFC, causing ATC to rise again.',
        hint: 'Two forces acting in opposite directions.',
        tags: ['ATC', 'cost-curves'],
      },
      {
        id: 'i1-l3-fc3',
        front: 'Where does MC intersect ATC, and why?',
        back: 'MC intersects ATC at ATC\'s minimum. When MC < ATC, producing more lowers ATC; when MC > ATC, producing more raises ATC. The crossover is the lowest point.',
        hint: 'Same logic as MP and AP.',
        tags: ['MC', 'ATC'],
      },
      {
        id: 'i1-l3-fc4',
        front: 'Why does AFC fall continuously as output rises?',
        back: 'AFC = TFC / Q. Since TFC is constant, dividing by a larger Q always yields a smaller result — fixed costs are spread over more units.',
        hint: 'Same numerator, bigger denominator.',
        tags: ['AFC', 'FC'],
      },
    ],
    quiz: [
      {
        id: 'i1-l3-q1',
        type: 'mcq',
        question: 'A firm\'s total cost rises from £840 to £870 when output increases from 20 to 21 units. What is the marginal cost of the 21st unit?',
        options: [
          '£30',
          '£41.43',
          '£42',
          '£870',
        ],
        correctAnswer: 0,
        explanation: 'MC = ΔTC / ΔQ = (£870 − £840) / (21 − 20) = £30 / 1 = £30.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l3-q2',
        type: 'mcq',
        question: 'At what output level is average total cost at its minimum?',
        options: [
          'Where marginal cost equals average total cost.',
          'Where marginal cost equals average fixed cost.',
          'Where total variable cost equals total fixed cost.',
          'Where average fixed cost equals average variable cost.',
        ],
        correctAnswer: 0,
        explanation: 'ATC is at its minimum where MC = ATC. This is the point of productive efficiency. When MC < ATC, ATC is still falling; when MC > ATC, ATC is rising. The crossing point is therefore ATC\'s lowest value.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l3-q3',
        type: 'mcq',
        question: 'Which cost curve is always declining as output increases?',
        options: [
          'Average fixed cost (AFC)',
          'Average variable cost (AVC)',
          'Average total cost (ATC)',
          'Marginal cost (MC)',
        ],
        correctAnswer: 0,
        explanation: 'AFC = TFC / Q. Since TFC is constant and Q increases, AFC always falls. AVC, ATC, and MC are all U-shaped — they fall then rise.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l4',
    moduleId: 'i1-costs',
    title: 'Economies and Diseconomies of Scale',
    description: 'Explain long-run average cost, the U-shape of LRAC, and why big firms can be cheaper or more expensive.',
    order: 4,
    estimatedMinutes: 30,
    tags: ['economies-of-scale', 'LRAC'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson built each short-run cost curve — TFC, TVC, TC, AFC, AVC, ATC, and MC — from first principles and established that MC intersects both AVC and ATC at their minimum points. Long-run cost analysis extends this framework to the planning horizon where all inputs are variable and the firm can choose its optimal scale of operation.`,
      recallQuestions: [
        {
          id: 'i1-l4-recall-1',
          type: 'mcq' as const,
          question: 'At what output level is average total cost (ATC) at its minimum?',
          options: [
            'Where marginal cost (MC) equals average total cost (ATC).',
            'Where marginal cost (MC) equals average fixed cost (AFC).',
            'Where total variable cost equals total fixed cost.',
            'Where average fixed cost reaches zero.',
          ],
          correctAnswer: 0,
          explanation: 'ATC is minimised at the output where MC = ATC. When MC lies below ATC, each extra unit pulls the average down; when MC exceeds ATC, each extra unit pulls it up. The crossing point is therefore ATC\'s lowest value — the point of productive efficiency in the short run.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'In the long run, all inputs are variable, and the firm can choose any scale of operation it wishes. The **Long-Run Average Cost (LRAC)** curve is constructed by taking the lowest possible average cost at each output level, given that all inputs can be optimally adjusted. Because the firm can choose the most efficient short-run plant for every output level, the LRAC forms an "envelope" below all the possible short-run ATC curves. The typical LRAC is U-shaped — but the reasons for its shape are entirely different from the short-run ATC\'s U-shape, which stems from diminishing returns.\n\n' +
        '**Economies of scale** occur in the downward-sloping region of the LRAC: as output expands, long-run average cost falls. The sources include specialisation of labour and management, technical economies (larger machines are often cheaper per unit of output), purchasing economies (bulk discounts on inputs), financial economies (large firms borrow at lower interest rates), and risk-spreading. These internal economies explain why bigger firms can often undercut smaller rivals on price without sacrificing profit margins.\n\n' +
        '**Diseconomies of scale** occur in the upward-sloping region: as a firm grows beyond its optimal size, LRAC begins to rise. The primary culprit is managerial diseconomy — co-ordinating a vast organisation becomes increasingly difficult and bureaucratic, leading to inefficiency, slow decision-making, and communication failures. The minimum point of the LRAC curve — the **Minimum Efficient Scale (MES)** — is where a firm achieves its lowest possible long-run average cost. Industries where the MES is large relative to total market demand tend toward natural monopolies or oligopolies, because only a few large firms can operate efficiently.',
      realWorldHook:
        'Amazon\'s fulfilment network is a case study in economies of scale. By centralising warehousing, using massive robotic sorting systems, and negotiating bulk shipping rates, Amazon can deliver a package more cheaply per unit than a small local retailer. Every new warehouse and delivery van lowers their per-item cost further — up to a point. But managing hundreds of warehouses across dozens of countries also creates coordination nightmares, regulatory complexity, and communication failures — the seeds of diseconomies of scale. Finding the balance between these forces defines Amazon\'s logistics strategy.',
      vocabulary: [
        {
          term: 'Long-Run Average Cost (LRAC)',
          definition: 'The lowest possible average cost of production at each output level when all inputs are variable and the firm can choose its optimal scale.',
          example: 'A car manufacturer\'s LRAC falls as it expands from 100,000 to 500,000 cars per year due to specialisation and technical efficiency.',
        },
        {
          term: 'Economies of scale',
          definition: 'The reduction in long-run average cost that occurs as a firm increases its scale of production.',
          example: 'A supermarket buying 10,000 tonnes of flour receives a bulk discount unavailable to a small bakery — a purchasing economy of scale.',
        },
        {
          term: 'Minimum Efficient Scale (MES)',
          definition: 'The lowest output level at which a firm fully exploits all economies of scale, reaching its minimum long-run average cost.',
          example: 'If a steel plant\'s LRAC stops falling at 2 million tonnes per year, that is its MES — the optimal plant size for cost efficiency.',
        },
      ],
      examinerTip:
        'Do not confuse economies of scale (long-run, all inputs variable) with increasing returns to a variable factor (short-run LDMR concept). Examiners specifically reward answers that identify the source of economies of scale — e.g., technical, purchasing, managerial, financial, or risk-bearing. Simply writing "bigger is cheaper" will not earn full marks. Similarly, for diseconomies, identify management coordination problems specifically.',
    },
    flashcards: [
      {
        id: 'i1-l4-fc1',
        front: 'What is the LRAC curve and how is it derived?',
        back: 'The Long-Run Average Cost curve shows the lowest possible ATC at each output level when all inputs are variable. It is the envelope of all short-run ATC curves.',
        hint: 'Long run = no fixed factors; the firm picks the best plant size.',
        tags: ['LRAC', 'economies-of-scale'],
      },
      {
        id: 'i1-l4-fc2',
        front: 'List three internal economies of scale.',
        back: '1. Technical economies (larger machines cost less per unit of output). 2. Purchasing economies (bulk-buying discounts). 3. Financial economies (large firms borrow at lower interest rates).',
        hint: 'Think of why a large factory beats a small one on cost.',
        tags: ['economies-of-scale'],
      },
      {
        id: 'i1-l4-fc3',
        front: 'What causes diseconomies of scale?',
        back: 'Primarily managerial diseconomies: as firms grow very large, coordination becomes harder, bureaucracy increases, communication breaks down, and decision-making slows — raising average costs.',
        hint: 'Too big to manage efficiently.',
        tags: ['economies-of-scale', 'LRAC'],
      },
      {
        id: 'i1-l4-fc4',
        front: 'What is the Minimum Efficient Scale (MES)?',
        back: 'The output level at which the firm first achieves its lowest long-run average cost — the bottom of the LRAC curve.',
        hint: 'The sweet spot for plant size.',
        tags: ['LRAC', 'MES'],
      },
    ],
    quiz: [
      {
        id: 'i1-l4-q1',
        type: 'mcq',
        question: 'A firm doubles all its inputs and finds that output more than doubles. What does this imply about its long-run average costs?',
        options: [
          'Long-run average cost is falling — the firm is experiencing economies of scale.',
          'Long-run average cost is rising — the firm is experiencing diseconomies of scale.',
          'Long-run average cost is unchanged — the firm has constant returns to scale.',
          'The result tells us nothing about long-run average costs.',
        ],
        correctAnswer: 0,
        explanation: 'If output more than doubles when all inputs double, average cost per unit falls — costs are rising more slowly than output. This is the definition of economies of scale (increasing returns to scale).',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l4-q2',
        type: 'mcq',
        question: 'Which of the following is the most likely cause of diseconomies of scale?',
        options: [
          'Increasing managerial complexity and communication failures as the firm expands.',
          'Rising raw material prices as the firm orders larger quantities.',
          'Higher interest rates charged by banks to large borrowers.',
          'Falling average fixed costs as output increases.',
        ],
        correctAnswer: 0,
        explanation: 'Managerial diseconomies — the difficulty of coordinating a very large organisation — are the primary internal cause of diseconomies of scale. Bulk orders usually mean lower (not higher) input prices, and large firms typically borrow more cheaply. Falling AFC is a short-run concept that lowers, not raises, costs.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l4-q3',
        type: 'mcq',
        question: 'An industry where Minimum Efficient Scale is very large relative to market demand is most likely to be:',
        options: [
          'A natural monopoly or oligopoly, since few firms can operate at efficient scale.',
          'Perfectly competitive, since many small firms can each reach MES easily.',
          'A monopolistically competitive market with easy entry and exit.',
          'Unaffected by MES, since MES is a short-run concept.',
        ],
        correctAnswer: 0,
        explanation: 'When MES is large relative to market demand, only a few — or perhaps just one — firm(s) can reach the minimum efficient scale. This naturally leads to monopoly or oligopoly. MES is a long-run concept, not a short-run one.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l5',
    moduleId: 'i1-costs',
    title: 'Revenue Concepts — TR, AR, MR',
    description: 'Define total, average, and marginal revenue; show how they differ under perfect competition vs. monopoly.',
    order: 5,
    estimatedMinutes: 25,
    tags: ['revenue', 'TR', 'AR', 'MR'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson introduced economies and diseconomies of scale and showed that the Long-Run Average Cost curve is U-shaped, with the minimum point — the Minimum Efficient Scale — representing the lowest achievable long-run average cost. Revenue concepts now complete the picture by explaining what a firm earns, which together with cost curves determines profit.`,
      recallQuestions: [
        {
          id: 'i1-l5-recall-1',
          type: 'mcq' as const,
          question: 'A firm doubles all of its inputs and finds that output more than doubles. What does this imply about its long-run average costs?',
          options: [
            'Long-run average cost is falling — the firm is experiencing economies of scale.',
            'Long-run average cost is rising — the firm is experiencing diseconomies of scale.',
            'Long-run average cost is unchanged — the firm has constant returns to scale.',
            'The result tells us nothing about long-run average costs.',
          ],
          correctAnswer: 0,
          explanation: 'If output rises faster than inputs, each unit of output is produced with proportionally fewer inputs — so average cost falls. This is the definition of economies of scale (increasing returns to scale), and the firm is on the downward-sloping portion of its LRAC curve.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        '**Total Revenue (TR)** is the total income a firm receives from selling its output: TR = Price × Quantity. **Average Revenue (AR)** is revenue per unit sold: AR = TR / Q = Price. This means AR is always equal to the market price, and therefore the AR curve is the firm\'s demand curve — a fact that examiners love to test. **Marginal Revenue (MR)** is the additional revenue earned from selling one more unit of output: MR = ΔTR / ΔQ. The relationship between MR and AR is the key to understanding different market structures.\n\n' +
        'Under **perfect competition**, a firm is a price-taker — it can sell any quantity at the market price without affecting that price. Therefore, every unit sold adds exactly the market price to TR, so MR = AR = Price. Graphically, the demand curve, AR curve, and MR curve are all the same horizontal line at the market price. TR rises linearly with output. This simplicity is what makes perfect competition the benchmark market structure in economic theory.\n\n' +
        'Under **monopoly** (and any firm with market power), the firm faces a downward-sloping demand curve. To sell more units, it must lower the price on **all** units sold (assuming no price discrimination). This means each additional unit sold adds less to TR than the price at which it is sold — so MR < AR (= Price). In fact, for a straight-line demand curve, the MR curve has the same vertical intercept but twice the slope of the demand/AR curve. TR rises, peaks (where MR = 0), and then falls as the firm enters the inelastic portion of demand. Understanding MR < AR under monopoly is fundamental to explaining why monopolists restrict output.',
      realWorldHook:
        'A wheat farmer selling into a commodity market cannot affect the global wheat price — if the price is £200 per tonne, every tonne sold adds exactly £200 to revenue. That is perfect competition: MR = Price. Contrast this with Apple deciding how many iPhones to sell. If Apple drops the price from £1,200 to £1,100 to sell 100,000 more phones, those 100,000 new sales add £1,100 each — but Apple also loses £100 on every one of the millions of iPhones it was already selling. The net addition to revenue (MR) is far less than the new price. This is why Apple is so reluctant to cut prices even when facing weaker demand.',
      vocabulary: [
        {
          term: 'Total Revenue (TR)',
          definition: 'The total income a firm receives from selling its output, calculated as price multiplied by quantity sold.',
          example: 'If a firm sells 200 units at £15 each, TR = £3,000.',
        },
        {
          term: 'Marginal Revenue (MR)',
          definition: 'The additional revenue a firm gains from selling one more unit of output.',
          example: 'If TR rises from £3,000 to £3,014 when output increases from 200 to 201 units, MR = £14.',
        },
        {
          term: 'Average Revenue (AR)',
          definition: 'Total revenue divided by the number of units sold; always equal to the price per unit and therefore identical to the demand curve.',
          example: 'If a monopolist sells 50 units at £40 each, AR = £40 — which is both the price and a point on the demand curve.',
        },
      ],
      examinerTip:
        'Always state "AR = demand curve" when discussing revenue in any market structure — it is a reliable mark-earner. For monopoly diagrams, draw the MR curve with the same intercept as AR but twice the gradient — many students draw it incorrectly as parallel to AR. Also remember: TR is maximised where MR = 0, not at maximum output.',
    },
    flashcards: [
      {
        id: 'i1-l5-fc1',
        front: 'Why does AR always equal the demand curve?',
        back: 'AR = TR/Q = (P × Q)/Q = P. Since AR equals price at every quantity, the AR curve traces out the same points as the demand curve.',
        hint: 'Cancel Q in the numerator and denominator.',
        tags: ['AR', 'revenue'],
      },
      {
        id: 'i1-l5-fc2',
        front: 'Why is MR < Price for a monopolist?',
        back: 'To sell an extra unit, a monopolist must lower its price on all existing units. The extra revenue gained (new price) is reduced by the revenue lost on previous units. So MR < Price = AR.',
        hint: 'Selling more means cutting the price for everyone.',
        tags: ['MR', 'monopoly'],
      },
      {
        id: 'i1-l5-fc3',
        front: 'Under perfect competition, what is the relationship between P, AR, and MR?',
        back: 'P = AR = MR. The firm is a price-taker, so each extra unit sold always adds exactly the market price to total revenue.',
        hint: 'Perfect competition = flat demand curve for the firm.',
        tags: ['MR', 'AR', 'perfect-competition'],
      },
      {
        id: 'i1-l5-fc4',
        front: 'At what point is TR maximised, and what is MR at that point?',
        back: 'TR is maximised where MR = 0. After that point, MR is negative and each extra unit sold actually reduces total revenue.',
        hint: 'Zero marginal addition = peak total.',
        tags: ['TR', 'MR'],
      },
    ],
    quiz: [
      {
        id: 'i1-l5-q1',
        type: 'mcq',
        question: 'A firm sells 100 units at £50 each. When it increases sales to 101 units, the price falls to £49.80. What is the marginal revenue of the 101st unit?',
        options: [
          '£29.80',
          '£49.80',
          '£50.00',
          '−£0.20',
        ],
        correctAnswer: 0,
        explanation: 'TR at 100 units = 100 × £50 = £5,000. TR at 101 units = 101 × £49.80 = £5,029.80. MR = £5,029.80 − £5,000 = £29.80. Note MR (£29.80) is well below the new price (£49.80) because the price cut applies to all 101 units.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l5-q2',
        type: 'mcq',
        question: 'In a perfectly competitive market, the market price is £25. A firm sells its 50th unit. What is the marginal revenue of that unit?',
        options: [
          '£25',
          'Less than £25',
          'More than £25',
          'Zero',
        ],
        correctAnswer: 0,
        explanation: 'In perfect competition, a firm is a price-taker. Every unit sold adds exactly the market price (£25) to total revenue, so MR = P = AR = £25 for every unit.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l5-q3',
        type: 'mcq',
        question: 'For a monopolist with a straight-line downward-sloping demand curve, how does the MR curve compare to the AR (demand) curve?',
        options: [
          'MR has the same vertical intercept as AR but falls at twice the rate.',
          'MR is parallel to AR but lies above it.',
          'MR is parallel to AR but lies below it.',
          'MR and AR are identical.',
        ],
        correctAnswer: 0,
        explanation: 'For a linear demand curve P = a − bQ, TR = aQ − bQ², so MR = a − 2bQ. The vertical intercept (a) is the same as AR = a − bQ, but MR has slope −2b — twice as steep. So MR lies below AR and reaches zero at half the quantity where AR (demand) reaches zero.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'i1-l6',
    moduleId: 'i1-costs',
    title: 'Profit Maximisation — The MR = MC Rule',
    description: 'Derive the universal profit-maximising rule and apply it to find output, price, and economic profit.',
    order: 6,
    estimatedMinutes: 35,
    tags: ['profit-maximisation', 'MR=MC'],
    content: {
      isStub: false,
      prerequisiteRecap: `The previous lesson defined Total Revenue (TR = P × Q), Average Revenue (AR = P, which traces the demand curve), and Marginal Revenue (MR = ΔTR/ΔQ), and showed that MR equals the market price under perfect competition but falls below price under monopoly. These revenue concepts combine with cost curves to yield the universal profit-maximising rule.`,
      recallQuestions: [
        {
          id: 'i1-l6-recall-1',
          type: 'mcq' as const,
          question: 'For a monopolist with a straight-line downward-sloping demand curve, how does the MR curve compare with the AR (demand) curve?',
          options: [
            'MR has the same vertical intercept as AR but falls at twice the rate.',
            'MR is parallel to AR but lies above it.',
            'MR and AR are identical because each unit still adds to revenue.',
            'MR is horizontal while AR slopes downward.',
          ],
          correctAnswer: 0,
          explanation: 'For a linear demand curve P = a − bQ, TR = aQ − bQ², so MR = a − 2bQ. The vertical intercept (a) matches AR = a − bQ, but MR has slope −2b — twice as steep. MR therefore lies below AR at all positive output levels.',
          marks: 1,
          difficulty: 'foundation' as const,
        },
      ],
      conceptualExplanation:
        'The goal of a profit-maximising firm is to choose the output level at which **Profit (π) = TR − TC** is greatest. A firm should expand output whenever the extra revenue from the next unit (MR) exceeds the extra cost of producing it (MC), since that unit adds to profit. It should stop expanding when MR < MC, because producing that unit destroys profit. The profit-maximising output is therefore the level at which **MR = MC**. This rule is universal — it applies to every market structure (perfect competition, monopoly, oligopoly, monopolistic competition) because it follows from pure mathematics: profit is maximised at the output where its rate of change equals zero, and dπ/dQ = MR − MC = 0.\n\n' +
        'To find the **profit-maximising price**, look up from the MR = MC output level to the demand/AR curve. The price the market will pay for that quantity is the profit-maximising price. This step is critical in monopoly diagrams — many students mistakenly read the price from the MR curve rather than the demand curve. **Economic profit** (or loss) can then be calculated as (AR − ATC) × Q, which equals the area of the rectangle between the AR and ATC curves at the profit-maximising output. If AR > ATC, the firm earns supernormal profit; if AR < ATC, it makes a loss; if AR = ATC, it earns only normal profit.\n\n' +
        'A subtlety worth noting: the MR = MC rule identifies profit maximisation only when the MC curve cuts the MR curve from below. If MC cuts MR from above (a second intersection), that is a profit-minimising point, not a maximum. In practice, with a U-shaped MC and a downward-sloping MR (or horizontal MR in perfect competition), the relevant intersection is always the right-hand one where MC is rising.',
      realWorldHook:
        'A cinema chain setting ticket prices is applying MR = MC, whether it knows it or not. Each empty seat costs almost nothing to fill (very low MC), and the extra revenue from one more customer (MR) is high — so they should sell tickets. But at some point, additional promotional spending, longer showings, and extra staff push marginal costs up, while heavy discounting pushes MR down. The profit-sweet-spot — where that extra ticket is just worth the extra cost — is exactly MR = MC. When cinemas offer "Tuesday two-for-one" deals, they are essentially price discriminating to capture customers whose MR still exceeds MC at a lower price, boosting total profit.',
      vocabulary: [
        {
          term: 'Profit maximisation',
          definition: 'The output level at which a firm maximises the difference between total revenue and total cost, achieved where MR = MC.',
          example: 'A monopolist producing 500 units where MR = MC = £30 is profit-maximising, even if it could charge a higher price for fewer units.',
        },
        {
          term: 'Supernormal profit',
          definition: 'Profit above the normal (opportunity cost) return; occurs when AR > ATC at the profit-maximising output.',
          example: 'If a firm\'s AR = £50 and ATC = £35 at Q = 200 units, supernormal profit = (£50 − £35) × 200 = £3,000.',
        },
        {
          term: 'Normal profit',
          definition: 'The minimum return needed to keep a firm in its current industry; included in average total cost as an opportunity cost. Earned when AR = ATC.',
          example: 'A small accountancy firm earning just enough to keep the owner from switching career is earning normal profit — zero economic profit.',
        },
      ],
      examinerTip:
        'In every profit-maximisation diagram question, follow this four-step procedure: (1) Find where MR = MC — this gives profit-maximising output Q*. (2) Go straight up to the demand/AR curve — this gives profit-maximising price P*. (3) Go horizontally across to the ATC curve at Q* — this gives ATC*. (4) Shade the rectangle between P* and ATC* over Q* units — this is economic profit (or loss if ATC* > P*). Skipping step 2 and reading price from the MR curve is the single most common error in market structure questions.',
    },
    flashcards: [
      {
        id: 'i1-l6-fc1',
        front: 'State the universal profit-maximising rule.',
        back: 'A firm maximises profit at the output level where Marginal Revenue (MR) equals Marginal Cost (MC), provided MC is rising (cutting MR from below).',
        hint: 'MR = MC — works in every market structure.',
        tags: ['profit-maximisation', 'MR=MC'],
      },
      {
        id: 'i1-l6-fc2',
        front: 'How do you find the profit-maximising PRICE on a diagram?',
        back: 'From the MR = MC output level (Q*), draw a vertical line up to the DEMAND (AR) curve — not the MR curve. The price on the vertical axis at that point is P*.',
        hint: 'Price is always read from the demand curve.',
        tags: ['profit-maximisation', 'price'],
      },
      {
        id: 'i1-l6-fc3',
        front: 'How is economic (supernormal) profit shown on a diagram?',
        back: 'Economic profit = (AR − ATC) × Q*. On a diagram, it is the area of the rectangle between the AR curve and the ATC curve, measured at output Q*.',
        hint: 'Area of a rectangle = height × width.',
        tags: ['profit-maximisation', 'supernormal-profit'],
      },
      {
        id: 'i1-l6-fc4',
        front: 'What is the difference between normal profit and supernormal profit?',
        back: 'Normal profit is the minimum return to keep the firm in the industry (AR = ATC; zero economic profit). Supernormal profit is any return above this (AR > ATC; positive economic profit).',
        hint: 'Normal profit is already included in the ATC curve.',
        tags: ['normal-profit', 'supernormal-profit'],
      },
    ],
    quiz: [
      {
        id: 'i1-l6-q1',
        type: 'mcq',
        question: 'A firm\'s marginal revenue is £40 and marginal cost is £28 at its current output. What should the firm do to maximise profit?',
        options: [
          'Increase output, because MR > MC and each additional unit adds to profit.',
          'Decrease output, because the firm is already over-producing.',
          'Keep output the same, because the gap between MR and MC is already profitable.',
          'Increase output until MR = £0.',
        ],
        correctAnswer: 0,
        explanation: 'When MR > MC, producing the next unit adds more to revenue than it adds to cost — so profit increases. The firm should expand until MR = MC. Stopping earlier leaves profit on the table.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l6-q2',
        type: 'mcq',
        question: 'At a monopolist\'s profit-maximising output, AR = £60 and ATC = £45. Output is 1,000 units. What is the firm\'s economic profit?',
        options: [
          '£15,000',
          '£60,000',
          '£45,000',
          '£105,000',
        ],
        correctAnswer: 0,
        explanation: 'Economic profit = (AR − ATC) × Q = (£60 − £45) × 1,000 = £15 × 1,000 = £15,000.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'i1-l6-q3',
        type: 'mcq',
        question: 'A firm earns zero economic profit. Which statement is correct?',
        options: [
          'The firm is earning normal profit and covering all its opportunity costs.',
          'The firm is making a loss and should shut down immediately.',
          'The firm\'s total revenue is zero.',
          'The firm has no incentive to stay in the industry.',
        ],
        correctAnswer: 0,
        explanation: 'Zero economic profit means the firm is earning normal profit — exactly covering all explicit and implicit (opportunity) costs, including the owner\'s opportunity cost of capital. The firm has every reason to stay in the industry, as it is earning a competitive return.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
