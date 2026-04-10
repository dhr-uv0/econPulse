import type { Lesson } from '@/lib/types'

export const moduleInfo = {
  id: 'f1-thinking',
  title: 'The Economic Way of Thinking',
  description:
    'Develop the mental habits economists use to analyse every decision, from what to eat for lunch to how nations allocate resources.',
  tier: 'FOUNDATIONS' as const,
  track: 'FOUNDATIONS' as const,
  unit: 1,
  estimatedHours: 2.5,
  color: '#22c55e',
  icon: 'BookOpen',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: What Is Economics? ────────────────────────────────────────────
  {
    id: 'f1-l1',
    moduleId: 'f1-thinking',
    title: 'What Is Economics?',
    description:
      'Define economics as the study of scarcity-driven choice; distinguish microeconomics from macroeconomics and positive from normative statements.',
    order: 1,
    estimatedMinutes: 30,
    tags: ['foundations', 'scarcity', 'methodology'],
    content: {
      realWorldHook: `In 2007, New York City upgraded its 13,000 taxi cabs with touchscreen payment terminals. The screens were pre-programmed with three suggested tip amounts: 20%, 25%, and 30% — all calculated on the total fare including tolls, which made them feel smaller. Before the screens, the average tip was around 10%. After? It jumped to nearly 22% overnight. No one forced cab passengers to tip more. The city didn't pass a law. Drivers didn't ask. The only thing that changed was the *default* presented to people at a moment when they were in a hurry and not thinking carefully. That is an incentive — not a fine, not a reward, just a nudge built into the choice architecture. And it transferred hundreds of millions of dollars from passengers to drivers over the following years. Economics isn't just about big policy decisions or GDP figures. It's about understanding why people do what they do — and realising that tiny, invisible design choices shape enormous outcomes.`,

      conceptualExplanation: `## What Is Economics?

Economics is the social science that studies how individuals, businesses, governments, and entire societies make decisions about allocating **scarce resources** to satisfy their unlimited wants. At its heart, economics asks: because we cannot have everything, *what do we choose* — and *why*?

The discipline's central insight is simple but profound: **resources are scarce, but human wants are unlimited**. There is only so much land, labour, capital, and entrepreneurial talent available at any moment. This gap between "what we want" and "what we have" forces every individual, firm, and government to make choices — and every choice has consequences. Economics gives us a rigorous toolkit for understanding those consequences.

### Microeconomics vs. Macroeconomics

Economists divide their field into two broad branches:

**Microeconomics** zooms in on individual decision-makers — a single consumer choosing between products, a firm setting its price, or one market finding equilibrium. If you want to understand why a cinema charges less for afternoon showings than evening ones, microeconomics is your lens.

**Macroeconomics** zooms out to the economy as a whole. It studies why a country's total output grows or shrinks, what causes inflation, why unemployment rises in recessions, and how central bank interest rates affect millions of people simultaneously. Both branches share the same underlying logic — scarce resources, rational decision-making, trade-offs — but operate at very different scales.

### Positive vs. Normative Statements

One of the most important distinctions economists make is between **positive** and **normative** statements.

A **positive statement** is a factual, testable claim about the way the world *is*: "Raising the minimum wage by 20% reduces teenage employment in fast food." You can agree or disagree, but you can investigate it with data.

A **normative statement** involves a value judgement about the way the world *should be*: "The minimum wage *should* be higher." No amount of data alone can settle this — it depends on what you believe is fair. Keeping these two types of statements separate is essential for clear thinking. Economists can help inform policy debates with evidence, but the value judgements at the core of those debates belong to citizens, not just economists.`,

      vocabulary: [
        {
          term: 'Economics',
          definition: 'The social science studying how individuals and societies allocate scarce resources among competing uses to satisfy unlimited wants.',
          example: 'When a student decides whether to spend Saturday working a part-time job or studying, they are navigating an economic trade-off.',
        },
        {
          term: 'Scarcity',
          definition: 'The condition that exists because human wants exceed the limited resources available — the fundamental economic problem.',
          example: 'A city council faces scarcity when it has a fixed budget and must choose between repaving roads or expanding public parks.',
        },
        {
          term: 'Incentive',
          definition: 'Something that motivates a person or organisation to act in a particular way, by changing the costs or benefits of a choice.',
          example: 'A $5 fine for being late shifts behaviour — but as the daycare study showed, the *type* of incentive matters as much as its size.',
        },
        {
          term: 'Positive statement',
          definition: 'An objective, fact-based claim about the way the world *is*, which can be tested or verified with evidence.',
          example: '"Countries with higher literacy rates tend to have higher GDP per capita" is a positive statement — it is empirically testable.',
        },
        {
          term: 'Normative statement',
          definition: 'A value-based claim about the way the world *should* be; it involves opinions and cannot be settled by evidence alone.',
          example: '"The government should provide free university education" is normative — it reflects a value judgement about fairness.',
        },
        {
          term: 'Microeconomics',
          definition: 'The branch of economics that studies decisions of individual agents — consumers, firms, and single markets.',
          example: 'Why Starbucks charges more in airports than on the high street is a microeconomic question.',
        },
        {
          term: 'Macroeconomics',
          definition: 'The branch of economics that studies the economy as a whole — total output, inflation, unemployment, and national policy.',
          example: 'Why the UK economy grew by 1.8% last year while Germany\'s shrank is a macroeconomic question.',
        },
      ],

      deeperDive: `The daycare study illustrates what economists call the **crowding-out effect of extrinsic incentives**: when you replace a social norm (moral obligation) with a financial incentive, you can destroy the social norm permanently. This matters enormously for public policy. Paying people to donate blood, for example, can reduce donations — because the act shifts from a noble gift to a low-paid transaction. Economics doesn't just study prices; it studies how all types of incentives — social, moral, financial — interact and sometimes undercut each other.

The discipline traces its origins to Adam Smith's 1776 *The Wealth of Nations*, which asked why some nations prosper. Smith's insight — that individuals pursuing self-interest in competitive markets can inadvertently benefit society — laid the groundwork for modern economics. But today's field is far broader. Behavioural economics challenges the assumption of pure rationality. Environmental economics prices the atmosphere. Development economics studies why some countries remain poor despite decades of aid. The common thread is always the same: scarce resources, choices, and consequences.`,

      commonMisconceptions: [
        'Economics is only about money and finance. In reality, economists study any situation involving scarce resources and choice — including time, attention, relationships, and environmental quality.',
        'Positive economics is "good" and normative is "bad" or unscientific. These terms simply describe *what is* versus *what ought to be* — both are essential to economic discourse.',
        'Microeconomics and macroeconomics are completely separate. In reality, macroeconomic outcomes emerge from millions of microeconomic decisions; the two branches constantly inform each other.',
        '"Incentives" just means money. As the daycare study showed, social norms, moral obligations, and reputation are all powerful incentives that can be strengthened or destroyed by policy design.',
      ],

      examinerTip: `When asked to "distinguish between positive and normative statements," always look for value-laden language — words like *should*, *ought*, *better*, or *fairer* signal a normative claim. If a statement can be investigated with data alone, it is positive. Give one clear example of each to show you understand the distinction, not just the definition.`,

      didYouKnow: `The word "economics" comes from the ancient Greek *oikonomia*, meaning "household management." The Greek philosopher Xenophon used it to describe the efficient running of an estate — proof that the core idea of managing scarce resources wisely is as old as civilisation itself.`,

      thinkAboutIt: {
        question: `A friend says: "I'm going to the free concert in the park tonight — it doesn't cost anything." What would an economist say in response?`,
        answer: `The concert isn't truly free. Your friend is spending a scarce resource — their time — that has an opportunity cost. They could have spent those hours working, studying, sleeping, or doing anything else of value. Even with no price tag, attending has a real economic cost. This is TANSTAAFL in action: "There Ain't No Such Thing As A Free Lunch." Every choice uses up something scarce, even when money isn't involved.`,
      },

      diagram: 'micro-macro' as const,
    },

    flashcards: [
      {
        id: 'f1-l1-fc1',
        front: 'What is economics?',
        back: 'The social science studying how individuals and societies allocate scarce resources among competing uses to satisfy unlimited wants.',
        tags: ['foundations', 'definition'],
      },
      {
        id: 'f1-l1-fc2',
        front: 'What is the difference between microeconomics and macroeconomics?',
        back: 'Microeconomics studies individual decision-makers and markets. Macroeconomics studies the economy as a whole — GDP, inflation, unemployment, and national policy.',
        tags: ['foundations', 'methodology'],
      },
      {
        id: 'f1-l1-fc3',
        front: 'Give an example of a positive economic statement.',
        back: '"A 10% rise in cigarette taxes reduces teenage smoking by approximately 7%." It is testable with real-world data.',
        tags: ['methodology'],
      },
      {
        id: 'f1-l1-fc4',
        front: 'Give an example of a normative economic statement.',
        back: '"The government should ban zero-hours contracts." It expresses a value judgement — cannot be settled by evidence alone.',
        tags: ['methodology'],
      },
      {
        id: 'f1-l1-fc5',
        front: 'Why is scarcity the central economic problem?',
        back: 'Because human wants are unlimited but resources (land, labour, capital, enterprise) are finite — every individual and society must make choices, and all economic questions flow from this constraint.',
        tags: ['foundations', 'scarcity'],
      },
      {
        id: 'f1-l1-fc6',
        front: 'What is an incentive in economics?',
        back: 'Something that motivates action by changing the costs or benefits of a choice. Incentives can be financial, social, or moral — and good policy design must consider all three.',
        tags: ['foundations', 'incentives'],
      },
      {
        id: 'f1-l1-fc7',
        front: 'What did NYC\'s taxi tip screen redesign reveal about incentives?',
        back: 'Pre-setting tip options at 20%, 25%, and 30% more than doubled average tips — with no law, no pressure, no extra pay. Changing the default choice is itself a powerful incentive that shapes behaviour invisibly.',
        tags: ['incentives', 'foundations'],
      },
    ],

    lessonAssignment: {
      prompt: 'In your own words, explain the difference between a positive and a normative economic statement. Give one original example of each (not from the lesson). Then: identify whether the following is positive or normative, and explain why — "The government should reduce income taxes to stimulate economic growth."',
      rubric: `Award points for:
- Correct definition of positive statement (factual/testable) with an accurate original example (3 pts)
- Correct definition of normative statement (value judgement) with an accurate original example (3 pts)
- Correct identification that the given statement is normative (it contains "should") AND explanation of why (2 pts)
- Use of appropriate economic vocabulary (incentive, scarcity, etc.) (1 pt)
- Clarity and coherence of writing (1 pt)
Deduct for: confusing positive with normative, using the lesson's exact examples verbatim (no credit for copying), vague explanations.`,
      exampleTopics: [
        'Define each type of statement in your own words — avoid copying the lesson definition directly',
        'Create one original example per type (think about school, sport, government, or everyday life)',
        'For the given statement, explain specifically which word(s) make it normative or positive',
        'Use at least two vocabulary words from this lesson (e.g. scarcity, incentive, normative, positive)',
      ],
    },

    quiz: [
      {
        id: 'f1-l1-q1',
        type: 'mcq',
        question: 'Which of the following is a normative economic statement?',
        options: [
          'When the price of petrol rises, consumers buy less of it.',
          'The unemployment rate fell from 5% to 4.2% last year.',
          'The government should prioritise reducing income inequality over economic growth.',
          'An increase in the money supply tends to raise the price level over time.',
        ],
        correctAnswer: 2,
        explanation: 'Option C contains the value judgement "should prioritise," making it normative. Options A, B, and D are factual claims testable against evidence — they are positive statements.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q2',
        type: 'mcq',
        question: 'Macroeconomics is best described as the branch of economics that studies:',
        options: [
          'How individual consumers decide what goods to purchase.',
          'The pricing decisions of a single monopoly firm.',
          'The overall performance of a national economy, including GDP and inflation.',
          'The cost structures of firms in a particular industry.',
        ],
        correctAnswer: 2,
        explanation: 'Macroeconomics examines economy-wide aggregates such as national output (GDP), the general price level (inflation), and total employment. Options A, B, and D describe microeconomic topics.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q3',
        type: 'mcq',
        question: 'The fundamental economic problem exists because:',
        options: [
          'Governments do not distribute income fairly across society.',
          'Human wants are unlimited while productive resources are scarce.',
          'Technology has not yet advanced enough to satisfy basic human needs.',
          'Free markets always produce too little of essential goods.',
        ],
        correctAnswer: 1,
        explanation: 'Scarcity — the gap between unlimited wants and finite resources — is the universal starting point of economics. It applies regardless of a country\'s government type or technological level.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q4',
        type: 'mcq',
        question: 'Which of the following is a positive economic statement?',
        options: [
          'Taxes on sugary drinks should be increased to reduce obesity.',
          'The government ought to spend more on public transport.',
          'A 10% increase in cigarette prices reduces teen smoking by about 7%.',
          'Income inequality in the UK is unacceptably high.',
        ],
        correctAnswer: 2,
        explanation: 'Option C is a factual, testable claim about the relationship between price and smoking behaviour — a positive statement. Options A, B, and D all contain value judgements ("should," "ought," "unacceptably").',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q5',
        type: 'mcq',
        question: 'NYC taxi payment screens pre-set tip options at 20%, 25%, and 30%, more than doubling average tips. This best illustrates which economic principle?',
        options: [
          'Higher prices always reduce demand for a service.',
          'Incentives shape behaviour — even without force, changing the default option changes what people choose.',
          'Government regulation always improves market outcomes.',
          'People always tip the mathematically correct amount when given clear options.',
        ],
        correctAnswer: 1,
        explanation: 'The screens didn\'t force anyone to tip more — they just changed which option required the least effort. This is a choice-architecture incentive: by making 20%+ the path of least resistance, the design shifted behaviour at scale. Incentives don\'t have to be fines or rewards; they can be defaults.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q6',
        type: 'mcq',
        question: 'A student deciding whether to spend an extra hour studying or attending a social event is best described as an example of:',
        options: [
          'Macroeconomic decision-making.',
          'Normative analysis.',
          'Microeconomic decision-making under scarcity.',
          'A positive statement about resource allocation.',
        ],
        correctAnswer: 2,
        explanation: 'This is a microeconomic decision — an individual allocating their scarce resource (time) between competing uses. Scarcity of time forces the choice.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q7',
        type: 'mcq',
        question: 'Which of the following pairs contains one positive and one normative statement?',
        options: [
          '"Inflation is rising" and "Unemployment is 4%"',
          '"The minimum wage should be £15" and "Raising the minimum wage reduces teen employment"',
          '"Free markets are good" and "Command economies are bad"',
          '"Taxes are too high" and "Government should cut spending"',
        ],
        correctAnswer: 1,
        explanation: '"The minimum wage should be £15" is normative (contains "should"). "Raising the minimum wage reduces teen employment" is positive — it is an empirical claim testable with data.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l1-q8',
        type: 'mcq',
        question: 'Why can normative economic statements not be resolved by evidence alone?',
        options: [
          'Because economists do not have access to enough data.',
          'Because they involve value judgements about what is fair or desirable, which data cannot settle.',
          'Because they apply only to macroeconomic situations.',
          'Because they are always false and therefore untestable.',
        ],
        correctAnswer: 1,
        explanation: 'Normative statements express what *should* be. Whether the government should tax the rich more depends on values like fairness and efficiency — reasonable people can disagree even when they share the same facts.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q9',
        type: 'mcq',
        question: 'Which of the following is the best definition of an "incentive" in economics?',
        options: [
          'A financial reward paid by the government to encourage specific behaviour.',
          'Any factor that motivates a person or organisation to act by altering the costs or benefits of a choice.',
          'The opportunity cost of choosing one option over another.',
          'A price signal generated by the market mechanism.',
        ],
        correctAnswer: 1,
        explanation: 'Incentives are broader than financial rewards — they include social norms, reputation, moral obligation, and legal consequences. The key idea is that they change the perceived costs or benefits of a decision.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l1-q10',
        type: 'mcq',
        question: 'An economist studies why the price of avocados increased by 40% after a drought in Mexico. This is an example of:',
        options: [
          'Macroeconomics, because it involves international trade.',
          'Normative analysis, because it involves judgements about fair prices.',
          'Microeconomics, because it focuses on a single market and its price behaviour.',
          'Behavioural economics, because it involves consumer psychology.',
        ],
        correctAnswer: 2,
        explanation: 'Studying price changes in a specific market (avocados) is microeconomics — it analyses the behaviour of individual markets and the forces (drought affecting supply) that drive price changes within them.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Scarcity, Choice, and Opportunity Cost ────────────────────────
  {
    id: 'f1-l2',
    moduleId: 'f1-thinking',
    title: 'Scarcity, Choice, and Opportunity Cost',
    description: 'Explain why unlimited wants collide with finite resources, and why every real choice has a hidden cost — the next-best alternative forgone.',
    order: 2,
    estimatedMinutes: 30,
    tags: ['scarcity', 'opportunity-cost'],
    content: {
      prerequisiteRecap: `You have seen how scarcity forces every individual and society to make choices, and that economics studies those choices. Now we dig into the hidden cost that accompanies every decision: opportunity cost, the value of the next-best alternative you give up whenever you choose.`,

      recallQuestions: [
        {
          id: 'f1-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which of the following is a normative economic statement?',
          options: [
            'Raising the minimum wage increases unemployment among teenagers.',
            'GDP grew by 2.1% last year.',
            'The government should increase spending on renewable energy.',
            'A higher price leads to a lower quantity demanded, all else equal.',
          ],
          correctAnswer: 2,
          explanation: 'Option C contains "should" — a value judgement. The other options are factual claims testable with data (positive statements).',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `Every year, thousands of American students are accepted to Ivy League universities and turn them down. Not because they can't afford it — many receive full scholarships. They turn them down because they've been accepted somewhere else, or have a job offer, or want to start a company. From the outside, this looks crazy. You're turning down *Harvard*. But the acceptance letter isn't free. Four years at Harvard costs you four years of *something else* — a salary, a business, an apprenticeship, a life somewhere else. The scholarship covers tuition. It doesn't cover time. This is why the children of billionaires still face a real economic decision when they choose a university — because even when money isn't scarce, time always is. Opportunity cost doesn't care how wealthy you are. Every choice you make eliminates every other choice you could have made in that same moment. The question economics forces you to ask isn't "Can I afford this?" — it's "What am I giving up to have it?"`,

      conceptualExplanation: `## Scarcity, Choice, and Opportunity Cost

Scarcity is the starting gun that fires before every economic race. Because we cannot have everything we want, we must choose — and choosing one thing *always* means not choosing something else. This is such a powerful and universal insight that economists have given it a name: **opportunity cost**. The opportunity cost of any decision is the value of the *next-best alternative* you give up when you make that choice.

Notice what opportunity cost is *not*. It is not every possible thing you could have done instead — only the single best alternative forgone. If you spend Saturday afternoon at the cinema, your opportunity cost is whatever you would have chosen to do *second* — perhaps the nap you planned, or the study session you needed. You cannot count both; opportunity cost is always singular.

### Why "Free" Things Are Never Really Free

Opportunity cost teaches us that even things with no price tag still have a cost. A free outdoor concert costs you the time you could have spent elsewhere. A government road project "funded by existing taxes" has an opportunity cost: the schools, hospitals, or tax cuts that same money could have funded. Economists capture this with **TANSTAAFL — There Ain't No Such Thing As A Free Lunch**.

### Scarcity Is Universal

It is tempting to think very wealthy people or nations have escaped scarcity. They have not. A billionaire still has only 24 hours a day. A wealthy country must still decide how to allocate skilled workers, land, and capital. Scarcity is not primarily about poverty — it is a logical condition that follows from unlimited wants meeting finite resources, regardless of how rich you are.

### Three Fundamental Economic Questions

Because scarcity forces choice, every society — rich or poor, capitalist or socialist — must answer three questions:
- **What to produce?** (Which goods and services?)
- **How to produce it?** (Which combination of resources and technology?)
- **For whom to produce it?** (Who gets the output and in what quantities?)

How a society answers these three questions defines its economic system. But regardless of the system, scarcity means there are always trade-offs.`,

      vocabulary: [
        {
          term: 'Opportunity cost',
          definition: 'The value of the next-best alternative forgone when a choice is made; the true cost of any decision.',
          example: 'A student who spends an evening watching TV has an opportunity cost of the revision they could have done instead.',
        },
        {
          term: 'Trade-off',
          definition: 'The situation in which gaining more of one thing requires accepting less of another, because of scarcity.',
          example: 'A government faces a trade-off when increasing defence spending means reducing the education budget.',
        },
        {
          term: 'TANSTAAFL',
          definition: '"There Ain\'t No Such Thing As A Free Lunch" — every resource use has an opportunity cost, even when no money changes hands.',
          example: 'A "free" NHS appointment has an opportunity cost: the time of doctors and nurses who could be treating other patients.',
        },
        {
          term: 'Factors of production',
          definition: 'The scarce resources used to produce goods and services: land (natural resources), labour (human effort), capital (machinery/equipment), and enterprise (entrepreneurship).',
          example: 'A bakery uses land (premises), labour (bakers), capital (ovens), and enterprise (the owner\'s risk-taking and ideas).',
        },
        {
          term: 'Sunk cost',
          definition: 'A cost already incurred that cannot be recovered — rational decision-makers ignore sunk costs and focus only on future costs and benefits.',
          example: 'You paid £40 for a concert ticket but feel ill on the night. The £40 is sunk — your decision to go or stay home should be based on current wellbeing, not past spending.',
        },
      ],

      deeperDive: `Opportunity cost has profound implications in business. An economist calculates *economic profit* — revenue minus all costs *including* opportunity cost — rather than just accounting profit (revenue minus cash expenses). A firm earning £50,000 in accounting profit but forgoing £80,000 it could earn elsewhere is economically losing £30,000. This is why economists are sceptical of the phrase "there's nothing better to do" — there is *always* an alternative use of any resource.

For public policy, opportunity cost is equally critical. When governments spend money on one programme, the true cost isn't the monetary figure — it's the best alternative programme foregone. Every hospital built is a school not built (or a tax cut not given). Thinking in opportunity costs forces honest trade-off analysis rather than treating public spending as if it were free.`,

      commonMisconceptions: [
        'Opportunity cost is the same as monetary cost. In fact, opportunity cost applies to time, enjoyment, relationships, and any scarce resource — not just money.',
        'Opportunity cost includes everything you could have done. It is strictly the *single* next-best alternative, not a list of every option you declined.',
        'Wealthy people do not face opportunity costs. Even billionaires face scarcity of time — every minute spent on one activity is a minute not spent on the next-best alternative.',
        'Sunk costs should affect future decisions. Once spent, sunk costs are gone regardless of what you do next. Only future marginal costs and benefits are relevant.',
      ],

      examinerTip: `When describing opportunity cost, always name the *specific* next-best alternative — not just "what you gave up." Examiners award marks for precision: state what was chosen, what was sacrificed, and why that sacrifice is the opportunity cost. Never list multiple alternatives — pick the single best one forgone.`,

      didYouKnow: `The phrase "There Ain't No Such Thing As A Free Lunch" was popularised by Nobel Prize-winning economist Milton Friedman, but it appeared in American saloons in the 1800s — where "free" bar snacks were offered to attract paying drinkers. TANSTAAFL was understood by barkeepers long before economists named it.`,

      thinkAboutIt: {
        question: `You've paid £15 for a cinema ticket and sat down. Ten minutes in, it's clearly terrible. Should you stay or leave?`,
        answer: `Leave — if you'd rather be somewhere else. The £15 is a sunk cost: it's gone whether you watch the film or not. The only relevant question is what's worth more for the next two hours: sitting through a bad film, or doing something you'd actually enjoy? People who stay "to get their money's worth" are letting a sunk cost distort a forward-looking decision. The rational choice ignores what's already spent and focuses only on future costs and benefits.`,
      },

      diagram: 'opportunity-cost' as const,
    },

    flashcards: [
      {
        id: 'f1-l2-fc1',
        front: 'What is opportunity cost?',
        back: 'The value of the next-best alternative forgone when a choice is made. It is the true economic cost of any decision.',
        tags: ['opportunity-cost', 'foundations'],
      },
      {
        id: 'f1-l2-fc2',
        front: 'Why is opportunity cost always the NEXT-BEST alternative, not all alternatives?',
        back: 'Because you can only give up the one thing you would have chosen second. All other options were already less preferred and therefore not the real sacrifice.',
        tags: ['opportunity-cost'],
      },
      {
        id: 'f1-l2-fc3',
        front: 'What are the four factors of production?',
        back: 'Land (natural resources), Labour (human effort), Capital (man-made tools and machinery), and Enterprise (entrepreneurship — organising the other three and bearing risk).',
        tags: ['scarcity', 'foundations'],
      },
      {
        id: 'f1-l2-fc4',
        front: 'What does TANSTAAFL stand for and what does it mean?',
        back: '"There Ain\'t No Such Thing As A Free Lunch." Every resource use has an opportunity cost — even things with no price tag consume scarce time, effort, or other resources.',
        tags: ['opportunity-cost', 'scarcity'],
      },
      {
        id: 'f1-l2-fc5',
        front: 'What are the three fundamental economic questions every society must answer?',
        back: '1. What to produce? 2. How to produce it? 3. For whom to produce it? Scarcity makes these unavoidable for every economic system.',
        tags: ['scarcity', 'foundations'],
      },
      {
        id: 'f1-l2-fc6',
        front: 'What is a sunk cost, and why should it be ignored?',
        back: 'A cost already incurred that cannot be recovered. It should be ignored in future decisions because it cannot change — only future marginal costs and benefits matter.',
        tags: ['opportunity-cost', 'rational-choice'],
      },
      {
        id: 'f1-l2-fc7',
        front: 'Why do even full-scholarship students at elite universities still face an opportunity cost?',
        back: 'A scholarship covers tuition but not time. Four years spent studying is four years not spent earning, building a business, or pursuing other paths. Time is always scarce — so even a "free" education has an opportunity cost.',
        tags: ['opportunity-cost', 'foundations'],
      },
    ],

    lessonAssignment: {
      prompt: 'A university student is deciding whether to take an unpaid internship over the summer. The internship would provide valuable experience but no salary. Her next-best alternative is a paid retail job earning £2,400 over the summer. Using the concept of opportunity cost, analyse the student\'s decision. Is the internship truly "free"? What should she consider when making her choice? Make sure to identify ALL relevant opportunity costs — not just the financial ones.',
      rubric: `Award points for:
- Correctly identifying that the internship is NOT free — it has an opportunity cost (2 pts)
- Explicitly naming the opportunity cost as the £2,400 salary (or the retail job experience) — the next-best alternative (2 pts)
- Recognising non-monetary opportunity costs: social life, time, stress, other summer experiences (2 pts)
- Mentioning TANSTAAFL or the principle that all choices carry hidden costs (1 pt)
- Logical, structured analysis that leads to a reasoned conclusion (2 pts)
- Use of economic vocabulary: opportunity cost, trade-off, scarcity, factors of production (1 pt)
Deduct for: listing multiple opportunity costs without identifying the single best alternative forgone, ignoring non-monetary costs, confusing sunk cost with opportunity cost.`,
      exampleTopics: [
        'Define opportunity cost and explain why "free" doesn\'t mean costless',
        'Identify the financial opportunity cost (the salary forgone)',
        'Identify at least one non-financial opportunity cost (time, social life, etc.)',
        'Conclude: what should she weigh when making the decision?',
        'Use vocabulary: opportunity cost, trade-off, TANSTAAFL',
      ],
    },

    quiz: [
      {
        id: 'f1-l2-q1',
        type: 'mcq',
        question: 'Maria gives up a £30,000 salary to study full-time for a master\'s degree costing £15,000 in tuition. What is the opportunity cost of her decision?',
        options: [
          '£15,000 (tuition fees only)',
          '£30,000 (salary forgone only)',
          '£45,000 (tuition plus salary)',
          'Zero, because education is an investment',
        ],
        correctAnswer: 1,
        explanation: 'Opportunity cost is the next-best alternative forgone — the £30,000 salary she would have earned by working instead. Tuition is a monetary (accounting) cost, not the opportunity cost. The two should not be combined.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q2',
        type: 'mcq',
        question: 'Which statement best explains why scarcity applies even to very wealthy countries?',
        options: [
          'Wealthy countries have higher population growth, increasing demand faster than supply.',
          'Even rich nations have finite resources and face trade-offs in how they allocate them.',
          'Scarcity is caused by unfair distribution of wealth and disappears once redistribution occurs.',
          'Wealthy countries face scarcity only in non-renewable natural resources.',
        ],
        correctAnswer: 1,
        explanation: 'Scarcity is a universal condition rooted in unlimited wants meeting finite resources — not caused by poverty or inequality. A wealthy country still has limited land, labour, capital, and enterprise, and must make choices among competing uses.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q3',
        type: 'mcq',
        question: 'TANSTAAFL is best illustrated by which of the following?',
        options: [
          'A government offers citizens a tax refund funded by cutting arts subsidies.',
          'A supermarket reduces food prices by 50% to attract customers.',
          'A student receives a full scholarship and pays no tuition, but spends four years studying instead of working.',
          'A firm raises wages to reduce staff turnover.',
        ],
        correctAnswer: 2,
        explanation: 'Even with a full scholarship, the student bears the opportunity cost of four years that could have been spent earning, gaining experience, or pursuing other goals. "Free" tuition does not eliminate the real cost of attending university.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q4',
        type: 'mcq',
        question: 'You bought a £50 non-refundable cinema ticket but feel unwell on the day. According to economic reasoning, you should:',
        options: [
          'Go, because you\'ve already spent the £50.',
          'Go, because skipping means wasting money.',
          'Decide based on whether the benefit of attending now exceeds the cost of going while unwell.',
          'Not go, because the opportunity cost of being ill is always too high.',
        ],
        correctAnswer: 2,
        explanation: 'The £50 is a sunk cost — it\'s gone regardless of your decision. The rational choice is to compare the marginal benefit of attending (enjoyment) against the marginal cost (discomfort of being unwell). Sunk costs should never influence forward-looking decisions.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q5',
        type: 'mcq',
        question: 'A government spends £5 billion on a new motorway. The opportunity cost is best described as:',
        options: [
          'The construction materials used to build the motorway.',
          'The £5 billion in tax revenue collected from citizens.',
          'The hospitals, schools, or other projects that £5 billion could have funded instead.',
          'The economic growth generated by improved transport links.',
        ],
        correctAnswer: 2,
        explanation: 'Opportunity cost is the next-best alternative foregone — the single most valuable thing the £5 billion could have funded instead of the motorway. The construction materials and tax revenue are inputs, not opportunity costs.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q6',
        type: 'mcq',
        question: 'Which of the following is NOT a factor of production?',
        options: [
          'A combine harvester used on a farm.',
          'A software engineer\'s programming skills.',
          'A £50 note in a consumer\'s wallet.',
          'A plot of agricultural land.',
        ],
        correctAnswer: 2,
        explanation: 'Money is not a factor of production — it is a medium of exchange, not a productive resource itself. The four factors of production are land, labour, capital (physical tools and machinery), and enterprise.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l2-q7',
        type: 'mcq',
        question: 'A student spends Saturday gaming instead of working a part-time job that would have paid £60. What is the opportunity cost of gaming?',
        options: [
          'The cost of the gaming equipment already owned.',
          'The £60 in wages the student chose not to earn.',
          'All the other activities the student could have done on Saturday.',
          'Zero, because gaming is a leisure activity with no economic value.',
        ],
        correctAnswer: 1,
        explanation: 'Opportunity cost is the single next-best alternative foregone — the £60 part-time wage the student would have earned otherwise. It is not every possible alternative (only the best one), and leisure activities absolutely have opportunity costs.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q8',
        type: 'mcq',
        question: 'The Freakonomics analysis of street-level drug dealing showed that most dealers earned below minimum wage. What does this reveal about opportunity cost?',
        options: [
          'That drug dealing has no economic opportunity cost because it is illegal.',
          'That people sometimes underestimate their opportunity cost, accepting worse alternatives than they realise.',
          'That opportunity cost only applies when comparing legal activities.',
          'That the three fundamental economic questions do not apply to informal economies.',
        ],
        correctAnswer: 1,
        explanation: 'Most dealers earned less than they could have working a legitimate job. They underestimated their true opportunity cost — the foregone legitimate wage plus foregone safety. Opportunity cost applies to all choices, legal or otherwise.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l2-q9',
        type: 'mcq',
        question: 'Which of the three fundamental economic questions does a firm primarily answer when it decides to produce electric vehicles instead of petrol cars?',
        options: [
          'How to produce?',
          'For whom to produce?',
          'What to produce?',
          'Why to produce?',
        ],
        correctAnswer: 2,
        explanation: '"What to produce?" asks which goods and services a society or firm should create. Choosing electric vehicles over petrol cars is a decision about *what* to make, not how or for whom.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l2-q10',
        type: 'mcq',
        question: 'Why do economists say that time spent attending a free public concert is not truly "free"?',
        options: [
          'Because someone always pays for the concert through taxes.',
          'Because time is a scarce resource, and attending uses time that has an opportunity cost.',
          'Because enjoyment from concerts cannot be measured in economic terms.',
          'Because free concerts are always subsidised and therefore distort market prices.',
        ],
        correctAnswer: 1,
        explanation: 'TANSTAAFL: even when money changes hands for nothing, the time spent attending is a scarce resource with an opportunity cost. You could have used that time for work, study, or another activity. Nothing is truly free when resources — including time — are involved.',
        marks: 1,
        difficulty: 'foundation',
      },
    ],
  },

  // ── Lesson 3: The Production Possibilities Frontier ─────────────────────────
  {
    id: 'f1-l3',
    moduleId: 'f1-thinking',
    title: 'The Production Possibilities Frontier',
    description: 'Use the PPF diagram to visualise trade-offs, efficiency, opportunity cost, and what economic growth actually means.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['PPF', 'efficiency', 'growth'],
    content: {
      prerequisiteRecap: `You have explored how every choice carries an opportunity cost — the value of the next-best alternative forgone. The PPF makes that abstract idea concrete and visual: it plots every possible trade-off between two goods when resources are fully used, so you can literally see opportunity cost as the slope of the curve.`,

      recallQuestions: [
        {
          id: 'f1-l3-recall-1',
          type: 'mcq' as const,
          question: 'Maria turns down a £30,000 salary to study full-time. What is the opportunity cost of her decision?',
          options: [
            'The tuition fees she pays for the course.',
            'The £30,000 salary she forgoes.',
            'The sum of tuition fees and the forgone salary.',
            'Zero, because education is an investment in her future.',
          ],
          correctAnswer: 1,
          explanation: 'Opportunity cost is the single next-best alternative foregone — the £30,000 salary she would have earned by working.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
        {
          id: 'f1-l3-recall-2',
          type: 'mcq' as const,
          question: 'Which principle does TANSTAAFL most directly illustrate?',
          options: [
            'Scarcity affects only poor individuals and nations.',
            'Every resource use has an opportunity cost, even when no money changes hands.',
            'Free markets always allocate resources efficiently.',
            'Opportunity cost includes every alternative you declined, not just the best one.',
          ],
          correctAnswer: 1,
          explanation: '"There Ain\'t No Such Thing As A Free Lunch" captures the idea that even things with no price tag consume scarce resources — time, effort, or money — so there is always an opportunity cost.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `During World War II, the United States had to answer a question no peacetime economy ever faces quite so brutally: how many consumer goods are you willing to give up to win a war? Between 1941 and 1945, civilian car production essentially stopped. Factories that had been making Chevrolets were making tanks. Nylon that had gone into women's stockings now went into parachutes. Butter was rationed so that military rations could be shipped overseas. This wasn't a failure of the economy — it was the economy doing exactly what a PPF describes. The country moved along its production possibilities curve, sacrificing consumer goods to maximise military output. And then something interesting happened: all that wartime investment in factories, logistics, and technology shifted the PPF *outward*. By 1946, the US could produce *more* consumer goods than before the war, because the war had forced an explosion in productive capacity. The curve didn't just move — it grew.`,

      conceptualExplanation: `## The Production Possibilities Frontier

The **Production Possibilities Frontier (PPF)** is one of economics' most powerful diagrams. It shows the maximum combinations of two goods an economy can produce when all its resources are **fully and efficiently employed**.

Imagine an economy that produces only two things — consumer goods (phones, food, clothing) and capital goods (machines, factories, infrastructure). If every resource goes into consumer goods, you produce maximum consumer goods and zero capital goods. Reverse all resources, and you get the opposite extreme. Between these extremes lies every possible combination — plot them all and you get the PPF: a curve bowing outward from the origin.

### Points On, Inside, and Outside the PPF

The location of a point relative to the PPF carries precise meaning:
- **On the PPF**: Productive efficiency — the economy is using all resources and cannot produce more of one good without sacrificing some of the other.
- **Inside the PPF** (closer to the origin): Inefficiency — resources are unemployed or misallocated. More of *both* goods could be produced.
- **Outside the PPF**: Currently unattainable — beyond the economy's capacity with existing resources and technology.

### Why the PPF Curves Outward

The PPF bows outward because of the **law of increasing opportunity cost**. Resources are not perfectly adaptable between uses. A farmland is better suited to agriculture than manufacturing; a software engineer is more productive writing code than driving a tractor. As you shift more resources from one good to another, you first move the resources *least suited* to their current use and *most suited* to the new one. As you keep shifting, you're forced to use progressively less-suited resources, making each additional unit more costly in terms of the other good given up.

### Economic Growth and the PPF

Economic growth shifts the entire PPF **outward** — meaning more of *both* goods can now be produced. This happens when:
- The quantity of resources increases (more workers, more capital)
- The quality of resources improves (better technology, higher skills)

Critically, the *composition* of output today matters for growth tomorrow. An economy producing more capital goods now will have a larger PPF in the future — it is building the productive machinery needed for greater output later.`,

      vocabulary: [
        {
          term: 'Production Possibilities Frontier (PPF)',
          definition: 'A curve showing the maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed.',
          example: 'A PPF for guns and butter shows that producing more guns (military goods) means producing less butter (civilian goods), given fixed resources.',
        },
        {
          term: 'Productive efficiency',
          definition: 'Producing at maximum output given available resources and technology — represented by a point on (not inside) the PPF.',
          example: 'A factory running at full capacity with no idle workers or machines is productively efficient.',
        },
        {
          term: 'Allocative efficiency',
          definition: 'Producing the combination of goods that best matches what society actually wants — the "right" point on the PPF, not just any point on it.',
          example: 'If consumers want more housing and less office space but the economy keeps building offices, it is on the PPF but not at the allocatively efficient point.',
        },
        {
          term: 'Law of increasing opportunity cost',
          definition: 'As production of one good increases, the opportunity cost of each additional unit rises, because resources are not perfectly adaptable between uses.',
          example: 'Shifting the first 1,000 workers from farming to manufacturing is cheap in lost food; shifting the 10,000th worker costs far more food output.',
        },
        {
          term: 'Economic growth',
          definition: 'An outward shift of the entire PPF — the economy can now produce more of all goods due to increased resources or improved technology.',
          example: 'The invention of the steam engine shifted Britain\'s PPF outward during the Industrial Revolution, enabling far greater total production.',
        },
      ],

      deeperDive: `The PPF also illuminates development strategy. Countries that invest heavily in capital goods today — accepting lower consumption now — can achieve a much larger PPF in the future. South Korea's remarkable transformation from the 1960s onward partly reflects this: high savings rates funded capital accumulation, which expanded productive capacity, which enabled higher consumption later. By contrast, an economy that devotes all resources to immediate consumption maintains living standards today but faces a PPF that grows slowly.

It is equally important to recognise what the PPF deliberately leaves out. Real economies produce millions of goods, not two. Resources are not always fully employed (the 2008 crisis left most economies well inside their PPFs). And the fixed-technology assumption breaks down over long time horizons. Understanding the PPF means appreciating both what it reveals and what it simplifies.`,

      commonMisconceptions: [
        'A point inside the PPF means the economy could grow more. Wrong — a point inside signals *inefficiency* (idle or misallocated resources), not a growth situation. Growth is an outward shift of the curve itself.',
        'The PPF is a straight line. For most realistic scenarios it curves outward due to the law of increasing opportunity cost. A straight PPF only applies if resources are perfectly interchangeable — a special case.',
        'Moving along the PPF is economic growth. Moving along the PPF is a trade-off within existing capacity. Growth is an *outward shift* of the entire curve.',
      ],

      examinerTip: `In diagram questions, always label both axes clearly, mark the curve as "PPF," and show three key points: one on the curve (efficient), one inside (inefficient/attainable), and one outside (unattainable). If asked about economic growth, draw a second PPF shifted outward and explain *why* it shifted. Never confuse movement along the curve (a trade-off) with a shift of the curve (growth).`,

      didYouKnow: `The PPF concept was first formalised by economist Gottfried Haberler in 1936 to analyse international trade theory, but it has since become the universal first diagram of almost every introductory economics course worldwide — a testament to how much explanatory power a simple two-axis graph can carry.`,

      diagram: 'ppf' as const,

      thinkAboutIt: {
        question: `A country reduces its unemployment rate from 8% to 4%. Has it experienced economic growth? How would you show this on a PPF diagram?`,
        answer: `No — this is not economic growth. Reducing unemployment moves the economy from a point *inside* the PPF (where resources were sitting idle) to a point *on* the PPF (where resources are now fully used). Economic growth would be an *outward shift* of the entire curve — meaning the country can now produce more of everything, because its productive capacity has increased. Getting people back to work is valuable, but it's efficiency improvement, not growth. Growth requires more resources, better technology, or improved skills.`,
      },
    },

    flashcards: [
      {
        id: 'f1-l3-fc1',
        front: 'What does a point inside the PPF represent?',
        back: 'Productive inefficiency — the economy is not fully utilising its resources (e.g., unemployment or misallocation). More of both goods could be produced.',
        tags: ['PPF', 'efficiency'],
      },
      {
        id: 'f1-l3-fc2',
        front: 'What does a point outside the PPF represent?',
        back: 'An unattainable combination — the economy currently lacks the resources or technology to produce that much. It becomes attainable only if the PPF shifts outward (economic growth).',
        tags: ['PPF', 'growth'],
      },
      {
        id: 'f1-l3-fc3',
        front: 'Why does the PPF bow outward rather than being a straight line?',
        back: 'Because of the law of increasing opportunity cost: resources are not perfectly adaptable between uses, so shifting more production toward one good requires ever-larger sacrifices of the other.',
        tags: ['PPF', 'opportunity-cost'],
      },
      {
        id: 'f1-l3-fc4',
        front: 'What causes an outward shift of the entire PPF?',
        back: 'Economic growth — specifically, an increase in the quantity or quality of resources (more labour, more capital) or improved technology that raises productive capacity.',
        tags: ['PPF', 'growth'],
      },
      {
        id: 'f1-l3-fc5',
        front: 'What is the difference between moving along the PPF and shifting the PPF?',
        back: 'Moving along the PPF is a trade-off within existing capacity. Shifting the PPF outward is economic growth — the economy can now produce more of both goods.',
        tags: ['PPF', 'efficiency', 'growth'],
      },
      {
        id: 'f1-l3-fc6',
        front: 'What is allocative efficiency?',
        back: 'Producing the combination of goods that best matches what society actually wants. A point on the PPF is productively efficient; whether it\'s allocatively efficient depends on whether it reflects social preferences.',
        tags: ['PPF', 'efficiency'],
      },
      {
        id: 'f1-l3-fc7',
        front: 'How did GM\'s COVID ventilator pivot illustrate the PPF?',
        back: 'GM moved along the US PPF — producing more ventilators at the cost of fewer cars. It also revealed the economy had been inside its PPF (underutilised capacity existed). Moving to the frontier was possible without growth — just better resource deployment.',
        tags: ['PPF', 'efficiency'],
      },
    ],

    lessonAssignment: {
      prompt: 'An economy currently produces only food and clothing. It is operating at a point inside its PPF. Describe what this means in practical terms — what is actually happening in this economy? Then explain two different ways this economy could move to a point ON its PPF, and two ways it could shift its PPF outward. For each, give a specific, real-world example.',
      rubric: `Award points for:
- Correctly explaining that inside the PPF = inefficiency (unemployment, idle factories, misallocated resources) with a practical description (2 pts)
- First method to reach the PPF frontier: e.g., reducing unemployment, putting idle workers back to work (1.5 pts)
- Second method to reach the frontier: e.g., better allocation of existing resources (1.5 pts)
- First way to shift PPF outward: e.g., investment in new technology, immigration increasing labour force (1.5 pts)
- Second way to shift PPF outward: e.g., capital accumulation, discovery of natural resources (1.5 pts)
- All four points illustrated with specific real-world examples (1 pt each = 2 pts total)
Deduct for: confusing movement along PPF with outward shift, describing growth as just "producing more" without explaining why capacity increased.`,
      exampleTopics: [
        'What does "inside the PPF" look like in a real economy? (Think: factories, workers, unemployment)',
        'Two methods to reach the PPF without growth (use what already exists more efficiently)',
        'Two methods to shift the PPF outward (increase productive capacity)',
        'Include one specific real-world example for each method',
        'Use vocabulary: productive efficiency, economic growth, law of increasing opportunity cost',
      ],
    },

    quiz: [
      {
        id: 'f1-l3-q1',
        type: 'mcq',
        question: 'An economy is currently producing at a point inside its PPF. This most likely indicates that:',
        options: [
          'The economy has experienced technological progress.',
          'Resources are unemployed or being used inefficiently.',
          'The economy is producing at its maximum potential output.',
          'The economy needs to shift its PPF outward to reach that point.',
        ],
        correctAnswer: 1,
        explanation: 'A point inside the PPF signals productive inefficiency — some resources are idle (e.g., unemployed workers) or misallocated. The economy could produce more of both goods by using its resources more fully and effectively.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q2',
        type: 'mcq',
        question: 'A country discovers large oil reserves and invests heavily in new technology. On a PPF diagram, this would be shown as:',
        options: [
          'A movement from a point on the PPF to a point inside it.',
          'A movement along the PPF from one efficient combination to another.',
          'An outward shift of the entire PPF.',
          'No change to the PPF, because the oil was already there.',
        ],
        correctAnswer: 2,
        explanation: 'New natural resources and improved technology increase productive capacity, shifting the entire PPF outward. This is economic growth — more of all goods can now be produced simultaneously.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q3',
        type: 'mcq',
        question: 'The law of increasing opportunity cost explains why the PPF is bowed outward. This law states that:',
        options: [
          'As more of a good is produced, its price falls due to economies of scale.',
          'Each additional unit of a good produced requires giving up increasing amounts of the other good.',
          'Resources become more productive the longer they are used in one industry.',
          'Opportunity cost is constant along any straight PPF.',
        ],
        correctAnswer: 1,
        explanation: 'Resources are not perfectly interchangeable. As you shift more resources toward one good, you use resources increasingly ill-suited to producing it — so each extra unit costs more of the other good foregone.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q4',
        type: 'mcq',
        question: 'During COVID-19, GM shifted production from cars to ventilators. On a PPF diagram, this represents:',
        options: [
          'An outward shift of the PPF due to new technology.',
          'The economy moving from inside the PPF to a point on it.',
          'A movement along the existing PPF — more ventilators, fewer cars.',
          'The economy moving outside the PPF due to wartime conditions.',
        ],
        correctAnswer: 2,
        explanation: 'Shifting production from cars to ventilators is a movement *along* the existing PPF — a trade-off within existing capacity. The productive capacity didn\'t grow; the allocation of it changed.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l3-q5',
        type: 'mcq',
        question: 'A country is on its PPF producing 500 units of food and 300 units of clothing. If it wants to produce 400 units of clothing, what must happen?',
        options: [
          'It must shift its PPF outward through technological progress.',
          'It must give up some food production to free resources for clothing.',
          'It can increase clothing without any trade-off if currently inefficient.',
          'It must import resources from other countries.',
        ],
        correctAnswer: 1,
        explanation: 'Being *on* the PPF means all resources are already fully employed. To produce more clothing, the economy must reallocate resources away from food — giving up some food output.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q6',
        type: 'mcq',
        question: 'What does productive efficiency mean in the context of the PPF?',
        options: [
          'Producing the combination of goods that consumers prefer most.',
          'Producing at the lowest possible cost using the cheapest inputs.',
          'Using all available resources fully — represented by being on the PPF.',
          'Maximising the production of the most valuable good only.',
        ],
        correctAnswer: 2,
        explanation: 'Productive efficiency means all resources are fully and effectively employed — you are on the PPF. Allocative efficiency (what consumers want most) is a separate concept — you can be productively efficient but allocatively inefficient.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l3-q7',
        type: 'mcq',
        question: 'If an economy\'s PPF is a straight line rather than bowed outward, this implies:',
        options: [
          'The economy is experiencing rapid technological growth.',
          'Resources are perfectly adaptable between the two goods — opportunity cost is constant.',
          'The economy is always productively inefficient.',
          'Economic growth is impossible in this economy.',
        ],
        correctAnswer: 1,
        explanation: 'A straight-line PPF implies constant opportunity cost — each unit of one good given up always yields the same amount of the other. This only happens if all resources are perfectly suited to producing either good, which is a special theoretical case.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l3-q8',
        type: 'mcq',
        question: 'A developing country focuses its investment on building factories and training engineers rather than producing consumer goods. In PPF terms, this is best described as:',
        options: [
          'Sacrificing capital goods for consumer goods today to grow tomorrow.',
          'Accepting fewer consumer goods today to shift the PPF outward in the future.',
          'Moving inside the PPF to save resources.',
          'Moving from an inefficient to an efficient point on the existing PPF.',
        ],
        correctAnswer: 1,
        explanation: 'By investing in capital goods (factories, skills) today rather than consumer goods, the country accepts a lower point on the consumer goods axis now. But this builds productive capacity — shifting the PPF outward in the future, as South Korea\'s development model demonstrated.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l3-q9',
        type: 'mcq',
        question: 'Which of the following would move an economy from a point inside its PPF to a point on it?',
        options: [
          'Discovering new oil reserves.',
          'Reducing the unemployment rate from 8% to 4%.',
          'Introducing superior production technology.',
          'Increasing immigration to grow the labour force.',
        ],
        correctAnswer: 1,
        explanation: 'Reducing unemployment puts previously idle workers back to work — moving the economy from inside the PPF (inefficient) to on it (efficient). Discovering oil reserves, better technology, or more workers would shift the PPF outward (growth), not just move to the frontier.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l3-q10',
        type: 'mcq',
        question: 'Allocative efficiency differs from productive efficiency in that allocative efficiency requires:',
        options: [
          'Being on the PPF with all resources fully employed.',
          'Producing the combination of goods that best reflects what society wants.',
          'Minimising the cost of production for a given level of output.',
          'Maximising the total quantity of goods produced.',
        ],
        correctAnswer: 1,
        explanation: 'Productive efficiency = being on the PPF (no waste). Allocative efficiency = being at the right *point* on the PPF — the combination society actually values most. An economy can be productively efficient but still produce the "wrong" goods relative to what people want.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 4: Economic Systems ───────────────────────────────────────────────
  {
    id: 'f1-l4',
    moduleId: 'f1-thinking',
    title: 'Economic Systems: Markets, Command, and Mixed',
    description: 'Compare how different societies answer the three fundamental questions and why no pure system exists in practice.',
    order: 4,
    estimatedMinutes: 30,
    tags: ['economic-systems', 'markets'],
    content: {
      prerequisiteRecap: `The PPF showed us that every economy faces hard trade-offs between competing goods, and that a point inside the curve signals wasted resources. Now we ask: what institutional arrangements — markets, governments, or a mix — determine which point on the PPF a society actually chooses to occupy?`,

      recallQuestions: [
        {
          id: 'f1-l4-recall-1',
          type: 'mcq' as const,
          question: 'On a PPF diagram, what does a point inside (below) the curve represent?',
          options: [
            'The economy is producing at maximum efficiency.',
            'The economy is producing an unattainable combination of goods.',
            'Resources are unemployed or misallocated — the economy is inefficient.',
            'The economy has experienced economic growth.',
          ],
          correctAnswer: 2,
          explanation: 'A point inside the PPF indicates productive inefficiency — resources are idle or poorly allocated, so the economy could produce more of both goods.',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `In 1991, the Soviet Union collapsed after seven decades of central planning. Among the stranger relics it left behind: a country that had too many left shoes and not enough right shoes. This sounds like a joke, but it's documented. Factories had been assigned production quotas for shoes — measured in pairs, but the quotas were easier to hit by producing more of the simpler left shoe. No market signal existed to correct this, because there was no market. Consumers couldn't vote with their wallets. Planners in Moscow couldn't know what was actually on shelves in Siberia. Compare this to what happens in a supermarket when a product runs low: the price nudges up, the supplier notices, production increases, and the shelf refills — all without a single phone call to a central authority. The price mechanism isn't glamorous. It's just millions of quiet signals, all firing at once, doing the coordination job that the Soviet Union needed a hundred thousand bureaucrats to attempt — and still got wrong.`,

      conceptualExplanation: `## Economic Systems: Markets, Command, and Mixed

Every society must answer the three fundamental economic questions — what to produce, how, and for whom. The answer depends on its **economic system**: the set of institutions and mechanisms a society uses to organise production and distribution.

### The Market Economy

In a **market economy**, the three questions are answered primarily through the **price mechanism** — the interaction of supply and demand in voluntary exchanges. Prices act as signals: a rising price tells producers that more of a good is wanted and rewards them for supplying it. A falling price signals the opposite. Resources flow toward their most valued uses through millions of decentralised decisions made by consumers and firms pursuing their own interests. Adam Smith called this the "invisible hand."

Strengths: efficiency, innovation, consumer choice, and the powerful ability to process vast amounts of dispersed information through prices.
Weaknesses: inequality, market failures (pollution, public goods), and instability (financial crises).

### The Command Economy

In a **command economy**, the government makes most decisions about what to produce, how, and who receives the output. Classic examples: the Soviet Union, Maoist China. Central planners set production targets, allocate resources, and administer prices.

Theoretical advantages: ability to pursue social goals (equality, rapid industrialisation) and avoid market instability.
In practice: command economies have struggled with two fundamental problems — the **information problem** (no central authority can gather the dispersed knowledge that millions of price signals convey) and the **incentive problem** (no one has a strong reason to innovate or work hard when profits go to the state).

### Mixed Economies: The Real World

No pure market or command economy exists. Every real-world economy is a **mixed economy** combining market forces with government intervention. The United States relies heavily on markets but regulates industries, provides public education and healthcare programmes, and collects taxes. Scandinavian countries combine market mechanisms with expansive welfare states. China maintains significant state ownership alongside vibrant private markets.

The question is never "market or government?" but rather "what is the right *mix* for this society at this time?" — and that is at the heart of most real political and economic debates.`,

      vocabulary: [
        {
          term: 'Market economy',
          definition: 'An economic system in which the three fundamental questions are answered primarily through the price mechanism — the interaction of supply and demand.',
          example: 'In the US, decisions about what coffee shops produce, how they produce it, and who buys it are determined by market prices and voluntary exchange.',
        },
        {
          term: 'Command economy',
          definition: 'An economic system in which the government makes most decisions about production, resource allocation, and distribution of output.',
          example: 'The Soviet Union\'s Gosplan agency set annual production targets for steel, grain, and consumer goods across the entire economy.',
        },
        {
          term: 'Mixed economy',
          definition: 'An economic system combining elements of both market and command economies; all real-world economies are mixed to varying degrees.',
          example: 'The UK has private markets for most goods but also the government-run National Health Service and extensive financial regulation.',
        },
        {
          term: 'Price mechanism',
          definition: 'The system by which rising and falling prices automatically coordinate the decisions of buyers and sellers, allocating resources to their most valued uses.',
          example: 'When a drought cuts wheat supply, rising wheat prices signal farmers to grow more wheat and bakers to use less — without any central coordinator.',
        },
        {
          term: 'Invisible hand',
          definition: 'Adam Smith\'s metaphor for the way self-interested individuals in competitive markets inadvertently promote broader social benefit through the price mechanism.',
          example: 'A bakery owner bakes bread to make profit, not to feed the neighbourhood — yet in doing so, they serve both goals simultaneously.',
        },
      ],

      deeperDive: `The debate between market and command approaches defined much of the 20th century's geopolitical conflict. The Soviet Union's collapse in 1991 is widely interpreted as evidence of the limits of central planning: Hayek's "knowledge problem" (identified in 1945) meant no planning authority could replicate the billions of simultaneous signals that decentralised price systems generate.

Yet the market system is not without critics. The 2008 financial crisis demonstrated that even sophisticated market economies can produce catastrophic instability. Market economies tend to generate inequality, under-provide public goods (clean air, national defence), and overproduce goods with negative externalities (carbon emissions). This is precisely why even the most market-oriented governments intervene — through regulation, taxation, spending, and public services. Understanding *when markets work well* and *when they fail* is one of the central questions of modern economics.`,

      commonMisconceptions: [
        'The United States is a pure free-market economy. The US government spends roughly 35% of GDP, regulates industries extensively, and provides national defence, roads, and public schools — making it unmistakably a mixed economy.',
        'Command economies always fail. While historical command economies had serious problems, the degree of planning and quality of institutions both matter. Some planning exists in every economy.',
        'The "invisible hand" means markets always produce the best outcome for society. Smith\'s insight applied to competitive markets under certain conditions. When those conditions fail — monopoly, externalities, information gaps — market outcomes can be far from optimal.',
      ],

      examinerTip: `When comparing economic systems, always evaluate *both* advantages and disadvantages of each, and link your argument to the three fundamental questions (what, how, for whom). Examiners reward balanced analysis. Avoid dismissing command economies entirely — acknowledge what they *can* achieve before explaining their limitations.`,

      didYouKnow: `North Korea and Cuba are among the last countries operating close to the command model — yet even they have allowed informal market activity to emerge over time, illustrating how difficult it is to suppress market forces when people have unmet wants and something to trade.`,

      thinkAboutIt: {
        question: `A government sets the price of bread at £1 to make it affordable for everyone. What does an economist predict will happen next?`,
        answer: `If £1 is below the market equilibrium price, producers lose money on every loaf they sell — so they produce less, or stop entirely. Shelves empty. Queues form. The policy intended to help people buy bread ends up meaning there's no bread to buy. This is the information and incentive problem in action: the price signal that would normally tell producers "make more" has been disabled. The result is a shortage — the opposite of what was intended. This is why even well-meaning price controls tend to backfire, and why the price mechanism, despite its flaws, is extraordinarily difficult to replace.`,
      },

      diagram: 'economic-systems' as const,
    },

    flashcards: [
      {
        id: 'f1-l4-fc1',
        front: 'What are the three fundamental economic questions every society must answer?',
        back: '1. What to produce? 2. How to produce it? 3. For whom to produce it? The economic system determines how these questions are answered.',
        tags: ['economic-systems', 'foundations'],
      },
      {
        id: 'f1-l4-fc2',
        front: 'How does a market economy answer the three fundamental questions?',
        back: 'Through the price mechanism: supply and demand in free markets signal what to produce, which production methods are cost-effective, and who can afford the output.',
        tags: ['economic-systems', 'markets'],
      },
      {
        id: 'f1-l4-fc3',
        front: 'What is the main information problem facing command economies?',
        back: 'Central planners cannot gather or process the vast dispersed information that millions of price signals automatically convey in a market system — leading to chronic misallocation of resources.',
        tags: ['economic-systems'],
      },
      {
        id: 'f1-l4-fc4',
        front: 'Why do all real-world economies qualify as mixed economies?',
        back: 'Because every economy combines some market activity (private enterprise, voluntary exchange) with some government intervention (regulation, public spending, taxation). No purely market or command economy exists in practice.',
        tags: ['economic-systems', 'markets'],
      },
      {
        id: 'f1-l4-fc5',
        front: 'What is the "invisible hand"?',
        back: 'Adam Smith\'s metaphor for the way self-interested individuals acting in competitive markets inadvertently promote the broader good of society through the price mechanism.',
        tags: ['economic-systems', 'markets'],
      },
      {
        id: 'f1-l4-fc6',
        front: 'What lesson does Venezuela\'s economic crisis offer about command economies?',
        back: 'Setting prices below market rates destroyed the incentive to produce — companies stopped supplying, shelves emptied, and a black market emerged. Information and incentive problems are not solved by government control alone.',
        tags: ['economic-systems'],
      },
      {
        id: 'f1-l4-fc7',
        front: 'What two fundamental problems undermine command economies?',
        back: '1. The information problem: no central planner can replicate the dispersed knowledge that prices convey. 2. The incentive problem: without profit motive, innovation and effort are suppressed.',
        tags: ['economic-systems'],
      },
    ],

    lessonAssignment: {
      prompt: 'Compare a market economy and a command economy in answering the question "What to produce?" Use a specific real-world example for each system. Then explain: why do all real-world economies end up as "mixed" economies — and give one example of a situation where even a strongly market-oriented country chooses government intervention instead of leaving it to markets.',
      rubric: `Award points for:
- Clear comparison of how market vs. command economies answer "What to produce?" — using price signals vs. central planning (3 pts)
- Specific real-world example for market economy (e.g., US automotive market responding to consumer preferences) (1.5 pts)
- Specific real-world example for command economy (e.g., Soviet Gosplan setting steel production targets) (1.5 pts)
- Logical explanation of why all economies become mixed (market failures, public goods, inequality, instability) (2 pts)
- Example of government intervention in a market economy (e.g., US FDA regulating food safety, public schools, national defence) (1 pt)
- Use of key vocabulary: price mechanism, invisible hand, command economy, mixed economy, information problem (1 pt)`,
      exampleTopics: [
        'How does the price mechanism in market economies answer "What to produce?"',
        'How does central planning in command economies answer the same question?',
        'Give one concrete real-world example for each system',
        'Why do even the most market-oriented economies (US, UK) still have government intervention?',
        'Name one specific example of government intervention in an otherwise market economy and explain why',
      ],
    },

    quiz: [
      {
        id: 'f1-l4-q1',
        type: 'mcq',
        question: 'In a pure market economy, the question "For whom to produce?" is primarily answered by:',
        options: [
          'Government planners who assess the needs of each social group.',
          'The ability and willingness of consumers to pay — determined by income and prices.',
          'A committee of firms that agree on fair distribution.',
          'Tradition and historical patterns of resource ownership.',
        ],
        correctAnswer: 1,
        explanation: 'In a market economy, goods go to those who can and are willing to pay the market price. Distribution is determined by income (purchasing power) and relative prices — not planning or tradition.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q2',
        type: 'mcq',
        question: 'The most significant disadvantage of a command economy, identified by Friedrich Hayek, is:',
        options: [
          'Command economies always produce too much output, causing inflation.',
          'Central planners lack the information that market prices automatically generate, leading to misallocation.',
          'Command economies cannot produce public goods such as national defence.',
          'Workers in command economies are paid wages that are too high.',
        ],
        correctAnswer: 1,
        explanation: 'Hayek\'s "knowledge problem": no central authority can gather and process the dispersed, local information encoded in millions of market prices. This leads to chronic mismatches between what is planned and what consumers actually need.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q3',
        type: 'mcq',
        question: 'Which statement about mixed economies is most accurate?',
        options: [
          'Mixed economies are found only in developing countries transitioning between systems.',
          'All real-world economies are mixed, combining market forces with varying degrees of government intervention.',
          'A mixed economy always performs worse than a pure market economy.',
          'Mixed economies exist only where private and public firms compete directly in the same industry.',
        ],
        correctAnswer: 1,
        explanation: 'Every functioning economy — from the United States to Sweden to Singapore — combines markets with government activity. The differences are in the *degree and type* of intervention, not in whether it exists at all.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q4',
        type: 'mcq',
        question: 'Venezuela\'s economic crisis (2010s) illustrates which key problem with command-style intervention?',
        options: [
          'That government-run companies always produce lower-quality goods.',
          'That setting prices below market rates destroys the incentive to produce, causing shortages.',
          'That oil-dependent economies always face political instability.',
          'That central planning is only ineffective in democracies.',
        ],
        correctAnswer: 1,
        explanation: 'When Venezuela mandated prices below production costs, companies had no incentive to supply food — they would lose money on every unit sold. Supply collapsed, shelves emptied, and the black market flourished. This is a textbook information and incentive failure of price controls.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l4-q5',
        type: 'mcq',
        question: 'Adam Smith\'s "invisible hand" suggests that:',
        options: [
          'Government should direct firms to produce socially beneficial goods.',
          'Self-interested individuals in competitive markets inadvertently promote the public good through price signals.',
          'Market economies require a central authority to coordinate resource allocation.',
          'Prices are manipulated by powerful firms to maximise their own profits.',
        ],
        correctAnswer: 1,
        explanation: 'Smith argued that individuals pursuing self-interest (e.g., profit) in competitive markets are led "as if by an invisible hand" to outcomes that benefit society — through prices that coordinate supply and demand without any central planner.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q6',
        type: 'mcq',
        question: 'Singapore has high levels of government ownership and intervention yet consistently ranks among the world\'s most economically free nations. This best illustrates that:',
        options: [
          'Government ownership always improves economic efficiency.',
          'The quality and design of institutions matters more than the simple label "market" or "command."',
          'Small countries can afford more government intervention than large ones.',
          'Economic freedom rankings are inaccurate measures of market activity.',
        ],
        correctAnswer: 1,
        explanation: 'Singapore shows that the binary of "market vs. command" is too simplistic. Strategic, well-designed government intervention in a highly competitive market framework can produce excellent outcomes — the key is *how* governments intervene, not just *whether* they do.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'f1-l4-q7',
        type: 'mcq',
        question: 'A country\'s government provides national defence, public roads, and a public education system while allowing private markets to supply most other goods. This is best described as:',
        options: [
          'A command economy.',
          'A traditional economy.',
          'A pure market economy.',
          'A mixed economy.',
        ],
        correctAnswer: 3,
        explanation: 'Any economy combining government provision of some goods with market provision of others is a mixed economy. This description — essentially that of the United States, UK, or most modern nations — is the defining feature of mixed economies.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q8',
        type: 'mcq',
        question: 'The price mechanism in a market economy coordinates resource allocation primarily through:',
        options: [
          'Government directives telling firms what to produce.',
          'Negotiation between workers\' unions and employer associations.',
          'Rising and falling prices that signal where resources are most valued.',
          'Consumer surveys about preferences published by national statistics agencies.',
        ],
        correctAnswer: 2,
        explanation: 'Prices are the market\'s communication system. A rising price signals high demand and attracts more supply; a falling price signals oversupply and causes production to fall. This happens automatically without any central coordinator.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l4-q9',
        type: 'mcq',
        question: 'Which of the following is a strength of a market economy compared to a command economy?',
        options: [
          'It distributes income more equally across all citizens.',
          'It eliminates the business cycle and prevents recessions.',
          'It efficiently processes dispersed information through price signals without central direction.',
          'It ensures all public goods are adequately provided.',
        ],
        correctAnswer: 2,
        explanation: 'The market\'s greatest strength is its information-processing power. Millions of buyers and sellers encode local knowledge into prices — a feat no central planner can replicate. Markets don\'t guarantee equality, prevent recessions, or provide public goods adequately.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l4-q10',
        type: 'mcq',
        question: 'Why does even a strongly market-oriented country like the US intervene in markets through regulation, public goods, and taxation?',
        options: [
          'Because pure market economies are prohibited by international law.',
          'Because markets sometimes fail — producing inequality, under-providing public goods, and generating negative externalities.',
          'Because consumers always prefer government-provided goods over privately supplied ones.',
          'Because government intervention always produces better outcomes than market allocation.',
        ],
        correctAnswer: 1,
        explanation: 'Market failures — including inequality of outcomes, under-provision of public goods (national defence, clean air), and negative externalities (pollution) — mean even strongly market-oriented governments must intervene selectively. The goal is not to replace markets but to correct their specific failures.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: Thinking at the Margin ────────────────────────────────────────
  {
    id: 'f1-l5',
    moduleId: 'f1-thinking',
    title: 'Thinking at the Margin',
    description: 'Introduce marginal analysis — why rational decision-making compares marginal benefit to marginal cost, not totals or averages.',
    order: 5,
    estimatedMinutes: 30,
    tags: ['marginal-analysis', 'rational-choice'],
    content: {
      prerequisiteRecap: `You have examined how market and command systems answer the three fundamental questions — and how the "invisible hand" of prices processes information that no planner could. Now we zoom into the individual decision-maker: how does a *rational* person actually decide? The answer is: at the margin.`,

      recallQuestions: [
        {
          id: 'f1-l5-recall-1',
          type: 'mcq' as const,
          question: 'In a market economy, the question "What to produce?" is primarily answered by:',
          options: [
            'Government planners setting production targets.',
            'Consumer surveys published by national statistics offices.',
            'Price signals — goods become more profitable to produce when demand rises.',
            'Tradition and established industry practices.',
          ],
          correctAnswer: 2,
          explanation: 'In a market economy, rising prices signal high demand and make production more profitable — attracting resources into that good. Prices are the market\'s automatic answer to "what to produce?"',
          marks: 1 as const,
          difficulty: 'foundation' as const,
        },
      ],

      realWorldHook: `A hospital in the UK once calculated the cost of keeping a patient in a bed for one extra day: roughly £400. Then it calculated what that same £400 could buy if spent on preventive community care — GP visits, medication reminders, home check-ins for elderly patients. The answer: it could prevent around three future hospital admissions, each lasting several days. Nobody had done this comparison before. The hospital had always optimised for treating patients in front of them — a perfectly rational goal. But nobody had asked the marginal question: does the next pound spent *here* do more good than the next pound spent *there*? When they finally did, they redesigned their entire discharge process around that single insight. This is what marginal thinking looks like in practice. It's not about being cold or calculating — it's about being honest that every decision has a "next unit" hiding inside it, and that the right question is almost always: *is this specific next step worth its specific next cost?*`,

      conceptualExplanation: `## Thinking at the Margin

One of the most distinctive habits of economic thinking is analysing decisions **at the margin**. "At the margin" simply means "one more unit" — one more hour of work, one more slice of pizza, one more unit of output, one more dollar of spending. Economists argue that rational decision-makers don't ask "Should I work or not?" — they ask "Should I work *one more hour* given what I'd gain and what it would cost me?" This incremental approach is the essence of **marginal analysis**.

The key tool is comparing:
- **Marginal benefit (MB)**: the additional benefit gained from one more unit
- **Marginal cost (MC)**: the additional cost of producing or consuming that extra unit

The rational decision rule is: **take an action if MB ≥ MC; stop when MC > MB**. If marginal benefit exceeds marginal cost, doing more adds to net benefit. If marginal cost exceeds marginal benefit, doing more *destroys* net benefit. The optimum is where the two are equal.

### Why Totals and Averages Can Mislead

A common mistake is using total or average values to make marginal decisions. Suppose you have eaten three slices of pizza and are deciding whether to have a fourth. The *total* enjoyment from all four slices might be enormous, and the *average* enjoyment per slice might be high — but neither tells you whether *this fourth slice* is worth eating. What matters is the marginal benefit of the fourth slice against its marginal cost. This is also why **sunk costs** — costs already incurred — should be ignored in forward-looking decisions. Only future marginal costs and benefits are relevant.

### Diminishing Marginal Benefit

As you consume more of something, additional units typically provide *less* satisfaction than earlier units. Your first coffee of the day is wonderful; your fifth is barely felt. Your first hour of studying is productive; your sixth might be nearly useless. This is **diminishing marginal benefit** — and it means the rational decision is rarely to maximise the quantity consumed, but to stop at the point where MB = MC.

### Marginal Thinking Everywhere

Firms deciding how many workers to hire ask: does this worker's additional output (marginal revenue product) exceed the wage (marginal cost)? Governments deciding whether to build one more kilometre of motorway ask: does the additional value to drivers exceed the construction and environmental cost? Students deciding whether to study one more hour ask: does the expected grade improvement justify the time and effort? In every case, the margin — not the total — drives the rational choice.`,

      vocabulary: [
        {
          term: 'Marginal analysis',
          definition: 'The process of making decisions by comparing the additional (marginal) benefit of an action with its additional (marginal) cost.',
          example: 'A baker uses marginal analysis when deciding whether to bake a 101st loaf: if the extra revenue exceeds the extra cost of ingredients and labour, baking it adds to profit.',
        },
        {
          term: 'Marginal benefit (MB)',
          definition: 'The additional benefit — satisfaction, revenue, or utility — gained from consuming or producing one more unit.',
          example: 'The marginal benefit of a fifth coffee is the extra alertness it provides — typically much lower than the benefit of the first cup.',
        },
        {
          term: 'Marginal cost (MC)',
          definition: 'The additional cost incurred by producing or consuming one more unit of a good or service.',
          example: 'If producing 100 widgets costs £500 and producing 101 costs £506, the marginal cost of the 101st widget is £6.',
        },
        {
          term: 'Sunk cost',
          definition: 'A cost already incurred and unrecoverable — rational decision-makers ignore sunk costs and focus only on future marginal costs and benefits.',
          example: 'You paid £20 for a concert ticket and feel ill. The £20 is sunk — going or staying home should be decided on current wellbeing, not money already spent.',
        },
        {
          term: 'Diminishing marginal benefit',
          definition: 'The principle that each additional unit of a good provides less additional satisfaction than the previous unit.',
          example: 'The first hour of gaming is thrilling; by hour six, the marginal benefit has fallen dramatically — possibly below the marginal cost of the time.',
        },
      ],

      deeperDive: `Marginal analysis underlies much of modern economics. Environmental economics uses it to design efficient pollution policy: the optimal level of abatement is where the marginal cost of reducing one more unit of pollution equals the marginal benefit (damage avoided). Healthcare economics uses it to evaluate whether an additional diagnostic test is worth its cost. Taxation theory uses it to set rates where the marginal deadweight loss equals the marginal social benefit of public spending.

There's also an important mathematical relationship between marginal and average values: when the marginal value is above the average, the average rises; when below, the average falls. This is why a student's average grade rises when they score above their current average, and falls when they score below. In cost analysis, it explains why marginal cost curves intersect average cost curves at their minimum points — a result crucial to understanding competitive firm behaviour.`,

      commonMisconceptions: [
        'Rational people always maximise total benefit, so they should do as much as possible of anything they enjoy. Rational decision-making maximises *net* benefit (total benefit minus total cost), which means stopping when MC > MB — not maximising quantity.',
        'Sunk costs should influence future decisions because "you\'ve already paid for it." Sunk costs are irrelevant — they cannot be changed by what you do next. Acting on sunk costs leads to the "sunk cost fallacy."',
        'Marginal cost is always lower than average cost. Marginal cost can be above or below average cost depending on the stage of production — it equals average cost only at the minimum of the average cost curve.',
      ],

      examinerTip: `When answering questions about marginal analysis, always state the decision rule explicitly: "A rational agent will continue as long as marginal benefit exceeds marginal cost, and stop where MB = MC." If given a table of data, calculate the marginal values column by column before drawing conclusions — never use totals or averages to make a marginal decision.`,

      didYouKnow: `The concept of "marginal utility" — the additional satisfaction from one more unit — was independently developed in the early 1870s by three economists in three countries: William Stanley Jevons (UK), Carl Menger (Austria), and Léon Walras (France). This simultaneous discovery is the "Marginal Revolution" and fundamentally transformed economics from a focus on total value to incremental, margin-based reasoning.`,

      diagram: 'mb-mc' as const,

      thinkAboutIt: {
        question: `A firm is making a healthy £100,000 annual profit. Should it expand production? What is the right question to ask?`,
        answer: `"Are we profitable?" is the wrong question for this decision. The right question is: does the *next unit* of production earn more than it costs? (MB ≥ MC?). The firm should expand only if the additional revenue from the next unit exceeds its additional cost. If MC > MB on the next unit, expanding actually *destroys* value — even if overall profit is positive. Many businesses make the mistake of expanding because they're profitable in total, without checking whether the marginal unit is worth it. The MB = MC rule prevents this.`,
      },
    },

    flashcards: [
      {
        id: 'f1-l5-fc1',
        front: 'What is the rational decision rule in marginal analysis?',
        back: 'Take an action if marginal benefit (MB) ≥ marginal cost (MC). Continue expanding until MB = MC. Stop if MC > MB, as doing more reduces net benefit.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc2',
        front: 'What is marginal cost?',
        back: 'The additional cost of producing or consuming one more unit. Calculated as the change in total cost when output increases by one unit.',
        tags: ['marginal-analysis'],
      },
      {
        id: 'f1-l5-fc3',
        front: 'What is a sunk cost, and why should it be ignored?',
        back: 'A cost already spent that cannot be recovered. It should be ignored in future decisions because it cannot change — only future marginal costs and benefits are relevant.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc4',
        front: 'What is diminishing marginal benefit?',
        back: 'The principle that each additional unit of a good provides less additional satisfaction than the previous one. The first coffee is great; the fifth barely helps.',
        tags: ['marginal-analysis'],
      },
      {
        id: 'f1-l5-fc5',
        front: 'How do airlines apply marginal thinking to last-minute pricing?',
        back: 'Once fixed costs (aircraft, crew, fuel) are paid, the marginal cost of one more passenger is tiny. Any ticket price above that marginal cost adds to profit — so airlines discount unsold seats heavily rather than fly empty.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc6',
        front: 'What is the sunk cost fallacy?',
        back: 'Continuing a losing course of action because of past investment, rather than evaluating only future costs and benefits. E.g., watching a bad film because you already paid for it.',
        tags: ['marginal-analysis', 'rational-choice'],
      },
      {
        id: 'f1-l5-fc7',
        front: 'What is the relationship between marginal and average values?',
        back: 'When the marginal value is above the average, the average rises. When marginal is below average, the average falls. Marginal equals average at the average\'s minimum (or maximum) point.',
        tags: ['marginal-analysis'],
      },
    ],

    lessonAssignment: {
      prompt: 'You are advising a small bakery owner. She currently bakes 200 loaves per day. Each loaf sells for £3. The table below shows her costs at different output levels:\n\n200 loaves: Total cost = £400 (MC of 200th loaf = £2.50)\n201 loaves: Total cost = £402.80 (MC of 201st loaf = £2.80)\n202 loaves: Total cost = £406.10 (MC of 202nd loaf = £3.30)\n\nUsing marginal analysis, advise the bakery owner: should she bake 201 loaves? Should she bake 202? Explain your reasoning for each decision, using the MB = MC rule. Then explain why she should ignore the fact that she has already spent £400 today on fixed costs (ovens, rent, salaries) when making this decision.',
      rubric: `Award points for:
- Correctly identifying MB = £3 (the selling price of each additional loaf) (1 pt)
- Correctly advising to bake the 201st loaf because MB (£3) > MC (£2.80) — profit increases by £0.20 (2 pts)
- Correctly advising NOT to bake the 202nd loaf because MC (£3.30) > MB (£3) — it would reduce profit by £0.30 (2 pts)
- Clear application of the MB ≥ MC / stop when MC > MB rule (2 pts)
- Correct explanation that the £400 fixed costs are sunk — they are already spent and cannot be recovered, so they should not affect the decision about marginal production (2 pts)
- Use of vocabulary: marginal cost, marginal benefit, sunk cost, sunk cost fallacy (1 pt)`,
      exampleTopics: [
        'What is the marginal benefit of each additional loaf? (The selling price)',
        'Compare MB vs. MC for loaf 201 — should she bake it?',
        'Compare MB vs. MC for loaf 202 — should she bake it?',
        'Explain the MB = MC decision rule in your own words',
        'Why are the £400 in fixed costs irrelevant to these decisions? (Sunk cost)',
      ],
    },

    quiz: [
      {
        id: 'f1-l5-q1',
        type: 'mcq',
        question: 'A student has already spent three hours revising. She is deciding whether to study a fourth hour. According to marginal analysis, she should study the fourth hour if:',
        options: [
          'Her total revision time will be four hours, which is more than most students.',
          'The average benefit per hour of revision is still positive.',
          'The expected improvement in her grade from the fourth hour exceeds the opportunity cost of that hour.',
          'She has already invested three hours and should not waste that effort.',
        ],
        correctAnswer: 2,
        explanation: 'Marginal analysis compares the marginal benefit (grade improvement from the 4th hour) to the marginal cost (opportunity cost of the time). Options A and B use total/average values, which are irrelevant. Option D is the sunk cost fallacy.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q2',
        type: 'mcq',
        question: 'A firm produces 500 units per day. The marginal cost of the 501st unit is £12, and the marginal revenue (benefit) of selling it is £9. The firm should:',
        options: [
          'Produce the 501st unit, because marginal revenue is still positive.',
          'Produce the 501st unit if total profit is positive.',
          'Not produce the 501st unit, because marginal cost exceeds marginal benefit.',
          'Not produce the 501st unit, because the average cost is too high.',
        ],
        correctAnswer: 2,
        explanation: 'When MC (£12) > MB (£9), producing the extra unit costs more than it earns — reducing net profit by £3. The rational decision is to stop at 500 units. Whether total profit is positive is irrelevant to the marginal decision.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q3',
        type: 'mcq',
        question: 'James paid £50 for a non-refundable gym membership. After three weeks he finds he dislikes the gym. According to economic reasoning, James should:',
        options: [
          'Continue going to the gym to get value from the £50 already spent.',
          'Decide based on the future benefit of gym use versus the opportunity cost of his time.',
          'Stop going immediately since all future gym visits have a marginal cost above zero.',
          'Go exactly until the total benefit equals £50 to break even.',
        ],
        correctAnswer: 1,
        explanation: 'The £50 is a sunk cost — it\'s gone regardless of his decision. James should compare only the marginal benefit of each future gym visit (health, enjoyment) against the marginal cost (time, discomfort). If MB < MC, he should stop going.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q4',
        type: 'mcq',
        question: 'Why do airlines sell last-minute seats at steep discounts rather than flying with empty seats?',
        options: [
          'Because airlines are legally required to fill all seats before departure.',
          'Because the marginal cost of an additional passenger is very low once fixed costs are paid.',
          'Because empty seats increase fuel consumption significantly.',
          'Because discounted tickets attract higher-spending passengers on average.',
        ],
        correctAnswer: 1,
        explanation: 'Once a flight\'s fixed costs (aircraft, crew, fuel) are covered, the marginal cost of one more passenger is tiny — some snacks and a fraction of fuel. Any ticket price above that marginal cost adds to profit, so selling deeply discounted seats beats flying empty.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q5',
        type: 'mcq',
        question: 'Diminishing marginal benefit means that:',
        options: [
          'Each additional unit of a good costs more to produce than the last.',
          'Total benefit eventually falls to zero as more of a good is consumed.',
          'Each additional unit of a good consumed provides less additional satisfaction than the previous one.',
          'Marginal benefit is always less than average benefit.',
        ],
        correctAnswer: 2,
        explanation: 'Diminishing marginal benefit captures the intuition that the first unit of something is typically most valuable. Your first coffee of the day is wonderful; the fifth barely registers. As consumption increases, each additional unit adds less satisfaction.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q6',
        type: 'mcq',
        question: 'At which point should a rational decision-maker stop increasing an activity?',
        options: [
          'When total benefit is maximised.',
          'When average benefit equals average cost.',
          'When marginal cost exceeds marginal benefit.',
          'When total cost equals total revenue.',
        ],
        correctAnswer: 2,
        explanation: 'The rational rule is: continue as long as MB ≥ MC; stop when MC > MB. At the point where MC first exceeds MB, the next unit of activity destroys net benefit rather than creating it.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q7',
        type: 'mcq',
        question: 'A government is deciding whether to build one more kilometre of motorway. The additional cost is £50 million. The additional benefit (reduced travel times, lower accident rates) is estimated at £35 million. According to marginal analysis:',
        options: [
          'Build it, because the total motorway network benefits are large.',
          'Build it, because infrastructure always generates long-run returns.',
          'Do not build it, because the marginal cost (£50m) exceeds the marginal benefit (£35m).',
          'Do not build it, because government should not spend on roads.',
        ],
        correctAnswer: 2,
        explanation: 'Marginal analysis compares only the costs and benefits of the *additional* kilometre. Since MC (£50m) > MB (£35m), building this kilometre destroys £15m of net value. The total value of the existing network is irrelevant to this marginal decision.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l5-q8',
        type: 'mcq',
        question: 'Which of the following best illustrates the sunk cost fallacy?',
        options: [
          'A firm stops production when marginal cost exceeds marginal revenue.',
          'A student quits a degree course because the opportunity cost of continuing outweighs the expected benefits.',
          'A cinema-goer watches a bad film to the end because they already paid £15 for the ticket.',
          'An airline offers last-minute discounts because fixed costs are already covered.',
        ],
        correctAnswer: 2,
        explanation: 'The cinema-goer is committing the sunk cost fallacy — staying because of the £15 already spent, when the rational decision should be based only on whether the *remaining* time watching is worth more than leaving. The £15 is gone either way.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'f1-l5-q9',
        type: 'mcq',
        question: 'If producing 10 units costs £100 and producing 11 units costs £108, the marginal cost of the 11th unit is:',
        options: [
          '£100',
          '£108',
          '£8',
          '£9.82 (average cost)',
        ],
        correctAnswer: 2,
        explanation: 'Marginal cost = change in total cost ÷ change in quantity = (£108 - £100) ÷ (11 - 10) = £8. It is neither the total cost nor the average cost — it is the *additional* cost of producing that specific extra unit.',
        marks: 1,
        difficulty: 'foundation',
      },
      {
        id: 'f1-l5-q10',
        type: 'mcq',
        question: 'The Marginal Revolution of the 1870s transformed economics by shifting focus from:',
        options: [
          'Trade theory to domestic production.',
          'Government planning to free markets.',
          'Total and average values to incremental (marginal) analysis of decisions.',
          'Normative statements to positive empirical research.',
        ],
        correctAnswer: 2,
        explanation: 'Jevons, Menger, and Walras independently developed the idea that economic value is determined at the margin — the additional unit — rather than by totals or averages. This reframing enabled modern price theory, consumer theory, and firm theory.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },
]
