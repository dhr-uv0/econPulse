import type { CurriculumModule, Lesson } from '@/lib/types'

// ── DECA UNIT 1 — DECA Events Overview and Competitive Mindset ────────────────

const dc1Lessons: Lesson[] = [
  {
    id: 'dc1-l1', moduleId: 'dc1-overview', title: 'DECA Events with Economics Content — Full Map', description: 'Identify every DECA event touching economics: PF&A, BFS, ECO, BLTDM, and integrated cluster exams.', order: 1, estimatedMinutes: 25, tags: ['DECA', 'events', 'overview'],
    flashcards: [
      { id: 'fc-dc1-l1-1', front: 'Which DECA event focuses exclusively on personal finance and economics concepts?', back: 'The Personal Financial Literacy (PFL) event and the Economics event (ECO) are the most directly economics-focused. ECO tests macro and micro theory while PFL covers budgeting, credit, investing, and retirement planning in a personal context.', hint: 'Think about which events have "economics" or "financial literacy" in the title.', tags: ['DECA', 'events', 'overview'] },
      { id: 'fc-dc1-l1-2', front: 'What does BFS stand for in DECA, and what economic content does it test?', back: 'BFS stands for Business Finance Series. It tests financial analysis skills including ratio analysis, capital budgeting, cost-benefit analysis, and the economic environment in which financial decisions are made — including interest rates, inflation, and economic cycles.', hint: 'Finance and economics overlap heavily in this event.', tags: ['DECA', 'events', 'overview'] },
      { id: 'fc-dc1-l1-3', front: 'What is a DECA cluster exam, and how does economics appear in it?', back: 'A cluster exam is a 100-question multiple-choice test covering the business administration core and a career cluster (e.g., Finance, Marketing, Hospitality). Economics content appears in the core section — covering supply and demand, market structures, economic indicators, and government policy — and in cluster-specific applied questions.', hint: 'Every DECA competitive event begins with this written component.', tags: ['DECA', 'events', 'overview'] },
    ],
    quiz: [
      { id: 'q-dc1-l1-1', type: 'mcq', question: 'A DECA competitor wants to compete in an event that requires both a written exam and a role-play centred on financial analysis decisions. Which event best fits that description?', options: ['Business Finance Series (BFS)', 'Principles of Business Administration (PBA)', 'Sports and Entertainment Marketing (SEM)', 'Hospitality and Tourism Management (HTM)'], correctAnswer: 0, explanation: 'BFS combines a cluster exam with a role-play scenario built around financial analysis and business finance decisions, making it the strongest fit. The other events focus on marketing, general business principles, or hospitality rather than financial analysis.', marks: 2, difficulty: 'standard' },
      { id: 'q-dc1-l1-2', type: 'mcq', question: 'Which of the following statements about the DECA cluster exam is accurate?', options: ['It covers the business administration core plus career-cluster-specific content, and economics concepts appear in both sections.', 'It is an optional component that competitors may skip if they prefer to focus solely on the role-play.', 'It tests only accounting and finance regardless of the career cluster chosen.', 'It is graded solely on a pass/fail basis and does not affect the overall competitive ranking.'], correctAnswer: 0, explanation: 'The cluster exam is mandatory and counts toward the overall score. It includes a shared business administration core — where economics is tested — plus cluster-specific questions. Competitors cannot skip it, and the score directly affects their ranking.', marks: 2, difficulty: 'standard' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `DECA offers more than 25 competitive events, and economics content is woven through a surprising number of them. The most direct pathway is the Economics event (ECO), a written exam and case study that tests micro and macro theory in applied business contexts. But competitors in Business Finance Series (BFS), Personal Financial Literacy (PFL), and Business Law and Ethics Team Decision Making (BLTDM) also encounter economic reasoning regularly — from interpreting interest rate changes to evaluating regulatory trade-offs. Understanding which events touch economics, and how deeply, lets you prioritise your study time efficiently rather than preparing for content that will not appear on your specific event's exam.\n\nEvery DECA competitive event that includes a written component uses the cluster exam format: a 100-question multiple-choice test divided between the shared Business Administration Core and the career-cluster content area. Economics concepts appear in the core section in every cluster exam — no competitor can avoid them. Common core economics topics include supply-and-demand analysis, market structures, the role of competition, economic indicators (GDP, CPI, unemployment), and the impact of fiscal and monetary policy on business conditions. Mapping your event to its exam blueprint at the start of your preparation season is the single most efficient study move you can make. Download the current DECA performance indicator list and highlight every indicator tagged to economics — that list is your true study guide.`,
      prerequisiteRecap: `The foundational economics concepts you bring to DECA — supply and demand, market equilibrium, and how price signals allocate resources — are the same tools judges expect you to apply in role-play scenarios; this first DECA module maps those economic concepts to the specific events and cluster exam sections where they appear.`,
      recallQuestions: [
        {
          id: 'dc1-l1-recall-1',
          type: 'mcq' as const,
          question: 'In a competitive market, a price above the equilibrium level will cause:',
          options: [
            'A surplus — quantity supplied exceeds quantity demanded, putting downward pressure on price back toward equilibrium',
            'A shortage — quantity demanded exceeds quantity supplied, pushing price upward',
            'No change, because prices are set by producers and do not respond to market conditions',
            'An increase in demand that eliminates the surplus automatically within one business cycle',
          ],
          correctAnswer: 0,
          explanation: 'When price is above equilibrium, producers are willing to supply more than consumers are willing to buy at that price, creating a surplus (excess supply). Competitive pressure causes sellers to lower prices to move inventory, driving the market back toward the equilibrium price where quantity supplied equals quantity demanded.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'dc1-l2', moduleId: 'dc1-overview', title: 'The DECA Role-Play Framework', description: 'Decode the role-play structure: situation reading time, presentation minutes, judge interaction, and the five-criterion score sheet.', order: 2, estimatedMinutes: 30, tags: ['DECA', 'role-play', 'framework'],
    flashcards: [
      { id: 'fc-dc1-l2-1', front: 'How much time does a DECA competitor typically have to read the role-play situation and prepare before entering the judge\'s room?', back: 'Competitors receive 10 minutes to read the role-play situation and organise their thinking before the presentation begins. This preparation time is taken outside the judging room; no notes may be brought in unless the event rules explicitly allow it.', hint: 'Ten minutes outside, then you present.', tags: ['DECA', 'role-play', 'framework'] },
      { id: 'fc-dc1-l2-2', front: 'What are the two phases of a standard DECA role-play interaction with the judge?', back: 'Phase 1 is the Presentation phase (typically up to 10 minutes), in which the competitor presents their solution to the role-play scenario. Phase 2 is the Judge Interaction phase (typically up to 5 minutes), in which the judge asks follow-up questions to probe depth of understanding and adaptability.', hint: 'Present first, then answer the judge\'s questions.', tags: ['DECA', 'role-play', 'framework'] },
      { id: 'fc-dc1-l2-3', front: 'What does the DECA judge score sheet\'s "Recommended for Recognition" checkbox indicate?', back: 'After scoring all five criteria, the judge checks "Recommended for Recognition" if the competitor\'s overall performance meets a high enough standard to potentially place at the competition level. Being recommended does not guarantee an award but is required to be considered for one.', hint: 'It is the judge\'s overall quality endorsement, separate from the numeric score.', tags: ['DECA', 'role-play', 'framework'] },
    ],
    quiz: [
      { id: 'q-dc1-l2-1', type: 'mcq', question: 'During the judge interaction phase of a DECA role-play, the judge asks a follow-up question the competitor did not anticipate. What is the best strategy?', options: ['Pause briefly, acknowledge the question directly, apply your economic or business reasoning to the new angle, and give a concise answer tied back to your original recommendation.', 'Repeat your original presentation point most closely related to the question and hope it satisfies the judge.', 'Tell the judge you did not cover that topic and ask to move on.', 'Ask the judge to clarify the question multiple times to buy additional thinking time.'], correctAnswer: 0, explanation: 'Judges value adaptability and depth. The strongest competitors acknowledge the question, think through it using the same frameworks they applied in the presentation, and connect their answer to their prior recommendation. Repeating content or deflecting signals a lack of genuine understanding.', marks: 2, difficulty: 'standard' },
      { id: 'q-dc1-l2-2', type: 'mcq', question: 'A competitor finishes their DECA role-play presentation in 6 minutes out of the allotted 10. The judge has not yet asked questions. What should the competitor do?', options: ['Summarise their key recommendation concisely and invite the judge to begin the interaction phase.', 'Fill the remaining time by repeating the problem statement from the role-play card.', 'Apologise for finishing early and stand silently until the judge speaks.', 'Add entirely new solutions not mentioned in the original presentation to fill time.'], correctAnswer: 0, explanation: 'Finishing under the time limit is acceptable. The best move is a clean, confident summary that reinforces the key recommendation and smoothly transitions to the judge interaction phase. Padding with repetition or unplanned content weakens the presentation; silence is awkward and wastes an opportunity to make a final positive impression.', marks: 2, difficulty: 'standard' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The DECA role-play is a structured, time-limited business simulation designed to test whether a competitor can apply knowledge under pressure — exactly the conditions that characterise real business decision-making. The format is consistent across most events: competitors receive a situation card describing a business problem and their role (usually as a newly hired consultant or manager), take 10 minutes to prepare outside the room, then spend up to 10 minutes presenting their analysis and recommendations to the judge, who plays the role of a company executive. A 5-minute judge interaction period follows, during which the judge probes the competitor's reasoning with follow-up questions. Understanding this structure before your first competition removes a significant source of anxiety and lets you channel your energy into substance rather than logistics.\n\nEvery second of your 10-minute presentation is governed by a five-criterion score sheet the judge uses in real time. The criteria typically assess knowledge and skills application, identification of the problem, recommended action plan, professional manner, and — often — the quality of reasoning under judge questioning. A competitor who spends 8 minutes describing the problem and only 2 minutes on recommendations will score poorly on the action-plan criterion regardless of how thorough the analysis was. Treat the score sheet as your presentation outline: allocate time to each criterion proportionally to its weight. Practice by obtaining real DECA judge sheets from your state's DECA chapter or the national website, then have a coach or teammate score you against those criteria after every mock role-play.`,
      prerequisiteRecap: `The previous lesson mapped the DECA events landscape and showed that economics concepts — supply and demand, market structures, economic indicators — appear in every cluster exam; the role-play framework now gives you the structural template for turning that economic knowledge into scored presentations.`,
      recallQuestions: [
        {
          id: 'dc1-l2-recall-1',
          type: 'mcq' as const,
          question: 'Which statement best describes the economics content tested in the DECA Business Administration Core?',
          options: [
            'Supply-and-demand analysis, market structures, economic indicators like GDP and CPI, and the impact of fiscal and monetary policy on business conditions appear in every cluster exam',
            'The Business Administration Core only tests accounting and marketing concepts; economics is reserved for the ECO event',
            'Economic indicators are only tested in the Finance cluster exam, not in Marketing or Hospitality events',
            'The cluster exam is purely essay-based, with no multiple-choice questions on economics concepts',
          ],
          correctAnswer: 0,
          explanation: 'The Business Administration Core is a mandatory section of every DECA cluster exam. It consistently tests fundamental economics concepts — supply and demand, market equilibrium, market structures, GDP, inflation, unemployment, and government policy — regardless of whether the competitor\'s event is in Finance, Marketing, or another cluster. No DECA competitor can skip this content.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'dc1-l3', moduleId: 'dc1-overview', title: 'What Judges Score and How', description: 'Walk through the DECA performance indicator rubric; understand how to hit Advanced Exemplary marks on each criterion.', order: 3, estimatedMinutes: 25, tags: ['DECA', 'judging', 'rubric'],
    flashcards: [
      { id: 'fc-dc1-l3-1', front: 'What score level corresponds to "Advanced Exemplary" on the DECA performance indicator rubric, and what distinguishes it?', back: '"Advanced Exemplary" is the highest performance band (typically scoring 4 out of 4 points per criterion). It is characterised by precise use of business and economic terminology, a fully developed and justified solution, and the ability to handle judge follow-up questions with depth and accuracy — going beyond minimum requirements.', hint: 'Maximum points, maximum depth, minimum vagueness.', tags: ['DECA', 'judging', 'rubric'] },
      { id: 'fc-dc1-l3-2', front: 'How many criteria does a typical DECA individual role-play score sheet contain, and what is the maximum total score?', back: 'Most individual DECA role-play score sheets contain five criteria, each scored 0–4 points, for a maximum of 20 points on the role-play component. This score is then combined with the written exam score to determine overall ranking.', hint: '5 criteria × 4 points each = 20 role-play points.', tags: ['DECA', 'judging', 'rubric'] },
      { id: 'fc-dc1-l3-3', front: 'What is the most common reason DECA judges give for not checking "Recommended for Recognition"?', back: 'The most frequently cited reasons are: the competitor identified the wrong core problem, the recommended action was generic (not tailored to the scenario), or the competitor could not adequately answer judge follow-up questions — indicating surface-level rather than genuine understanding.', hint: 'Wrong problem + vague solution + weak Q&A = no check.', tags: ['DECA', 'judging', 'rubric'] },
    ],
    quiz: [
      { id: 'q-dc1-l3-1', type: 'mcq', question: 'According to the DECA performance indicator rubric, which behaviour most clearly distinguishes an "Advanced Exemplary" response from a "Proficient" one?', options: ['The competitor uses precise industry and economic terminology and justifies their recommendation with specific data or logical reasoning, rather than making general statements.', 'The competitor speaks for the full 10 minutes without pausing.', 'The competitor mentions more performance indicators than required by the situation card.', 'The competitor dresses more formally than other participants.'], correctAnswer: 0, explanation: '"Advanced Exemplary" is defined by depth, precision, and justification — not by volume of content or time used. Judges award the highest marks when they can clearly see that the competitor understands why their recommendation works, supported by specific reasoning, data references, or economic logic.', marks: 2, difficulty: 'standard' },
      { id: 'q-dc1-l3-2', type: 'mcq', question: 'A DECA competitor scores 3 out of 4 on every criterion except "Recommended Action Plan," where they score 1. What does this most likely indicate?', options: ['The competitor understands the problem well but failed to translate that understanding into a specific, justified, and actionable recommendation.', 'The competitor did not study the written exam content thoroughly enough.', 'The competitor ran out of time during the presentation and could not finish.', 'The judge penalised the competitor for exceeding the time limit.'], correctAnswer: 0, explanation: 'A strong score on analysis but a weak score on the action plan is a classic pattern. It means the competitor diagnosed the situation correctly but then offered vague, generic, or insufficiently justified recommendations — the most common gap between good and great DECA performances.', marks: 2, difficulty: 'standard' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `DECA judging is not subjective in the way that a drama performance might be — it is criterion-referenced, meaning judges award points against a defined rubric, not against each other or against a vague impression of quality. Each criterion on the score sheet corresponds to a DECA performance indicator: a specific business skill or knowledge area drawn from the national curriculum. When a judge reads a situation card before your presentation, they already know which performance indicators will be tested and what "Advanced Exemplary" looks like for each one. Your job is to demonstrate mastery of those indicators explicitly, not to hope the judge infers it from your general business knowledge. Reviewing the performance indicator list for your event and practising language that maps directly to those indicators is the highest-leverage preparation activity available to you.\n\nHitting "Advanced Exemplary" on every criterion requires three things to co-occur: you must correctly identify the core business problem (not a symptom), you must propose a specific and justified action plan (not a generic best practice), and you must hold up under judge questioning by explaining the reasoning behind your recommendation rather than restating it. Most competitors who plateau at state competition score well on problem identification but fall short on justification — they tell the judge what to do but not persuasively why. In an economics-heavy role-play, "why" often involves referencing economic concepts: explaining that a price cut is risky because demand is price-inelastic, or that entering a new market makes sense given current GDP growth trends in that region. That level of applied economic reasoning is precisely what judges are trained to reward at Advanced Exemplary.`,
      prerequisiteRecap: `The previous lesson explained the role-play structure — 10-minute prep, presentation, and judge interaction phases; the judging rubric now reveals exactly what judges score in each phase, transforming the format knowledge into a strategic presentation roadmap.`,
      recallQuestions: [
        {
          id: 'dc1-l3-recall-1',
          type: 'mcq' as const,
          question: 'During the judge interaction phase of a DECA role-play, a competitor is asked an unexpected follow-up question about the pricing decision they recommended. What is the highest-scoring response strategy?',
          options: [
            'Acknowledge the question, apply economic reasoning — such as price elasticity of demand — to the new angle, and connect the answer back to the original recommendation',
            'Repeat the original recommendation in different words to show consistency and confidence',
            'Ask the judge to restate the question to buy additional thinking time',
            'Apologise for not covering that aspect and ask to move on to the next question',
          ],
          correctAnswer: 0,
          explanation: 'DECA judges score the interaction phase on depth of understanding and adaptability. The highest-scoring competitors acknowledge the new angle, reason through it using the same business and economic frameworks they applied in the presentation, and explicitly connect their answer to their prior recommendation — demonstrating genuine understanding rather than memorised content.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'dc1-l4', moduleId: 'dc1-overview', title: 'Competitive Mindset — Preparation Cadence', description: 'Build a DECA prep schedule from chapter to state to ICDC; set performance benchmarks; understand what separates top finalists.', order: 4, estimatedMinutes: 20, tags: ['DECA', 'preparation', 'strategy'],
    flashcards: [
      { id: 'fc-dc1-l4-1', front: 'What does ICDC stand for, and why is it the ultimate benchmark for DECA preparation?', back: 'ICDC stands for the International Career Development Conference — DECA\'s global championship, typically held each spring with tens of thousands of competitors from across the United States and internationally. It represents the highest competitive level, and preparing to perform at ICDC from the start of the season sets a higher performance ceiling than preparing only to advance locally.', hint: 'ICDC = DECA\'s version of nationals and internationals combined.', tags: ['DECA', 'preparation', 'strategy'] },
      { id: 'fc-dc1-l4-2', front: 'What is the recommended structure of a weekly DECA prep cadence during the competitive season?', back: 'A strong weekly cadence includes: (1) one cluster exam practice session (timed, scored against the answer key), (2) one to two role-play mock presentations with judge feedback, (3) review of missed exam questions with explanation, and (4) one session reviewing new performance indicators. Volume and consistency matter more than sporadic intensive cramming.', hint: 'Exam practice + role-play mocks + indicator review, weekly.', tags: ['DECA', 'preparation', 'strategy'] },
      { id: 'fc-dc1-l4-3', front: 'What single factor most consistently separates ICDC finalists from state-level competitors who do not advance?', back: 'ICDC finalists consistently demonstrate the ability to adapt their recommendation in real time during judge interaction — they do not simply defend their original answer but genuinely engage with the judge\'s alternative perspective, update their reasoning if warranted, and maintain composure. This adaptive thinking under pressure is the hardest skill to develop and the most reliably rewarded at the highest competition level.', hint: 'It is not more knowledge — it is adaptive reasoning under judge pressure.', tags: ['DECA', 'preparation', 'strategy'] },
    ],
    quiz: [
      { id: 'q-dc1-l4-1', type: 'mcq', question: 'A DECA competitor has 12 weeks before their state competition. Which preparation schedule is most aligned with how top DECA finalists train?', options: ['Weekly timed cluster exam practice, two role-play mocks per week with scored feedback, and cumulative review of missed performance indicators — starting from week one.', 'Intensive exam cramming in the two weeks before competition, with role-play practice only in the final week.', 'Focusing entirely on role-play presentation skills and ignoring the written exam until the week before competition.', 'Studying general business textbooks and waiting to practise role-plays until after advancing to state.'], correctAnswer: 0, explanation: 'Top competitors build habits through distributed practice across the full season. Cramming in the final weeks is a well-documented low-return strategy for performance under pressure. Consistent weekly reps on both the exam and the role-play — with deliberate review of errors — compound into the fluency that judges reward.', marks: 2, difficulty: 'standard' },
      { id: 'q-dc1-l4-2', type: 'mcq', question: 'Which benchmark is most useful for evaluating a competitor\'s cluster exam readiness relative to ICDC-level performance?', options: ['Consistently scoring above the published state average on released DECA practice exams under timed conditions.', 'Memorising the definitions of all 1,000+ DECA performance indicators without timed practice.', 'Scoring 100% on the chapter-level qualifying exam.', 'Completing as many practice exams as possible in the week before competition, regardless of score.'], correctAnswer: 0, explanation: 'Scoring above the state average on timed released exams is a validated proxy for competitive readiness because it mirrors real competition conditions. Memorising definitions without timed application, or performing well only on less-competitive local exams, does not predict ICDC-level performance with the same reliability.', marks: 2, difficulty: 'standard' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Competitive DECA preparation is a season-long process with three distinct competitive gates: chapter, state, and ICDC. Most competitors make the mistake of calibrating their preparation to the next gate rather than the final one. A competitor who trains only hard enough to advance from chapter to state typically arrives at state underprepared, because the gap between chapter-level and state-level performance is large — and the gap between state and ICDC is larger still. The mindset shift that separates consistent ICDC finalists from one-time state qualifiers is simple: treat every mock role-play as if the judge is an ICDC evaluator and every practice exam as if it counts toward your ranking. That standard, applied consistently across a 12–16 week season, produces the fluency and composure that judges at higher levels can immediately recognise.\n\nIn practical terms, a strong preparation cadence means distributing practice across the full season rather than front-loading content study and back-loading role-play mocks. Research on skill acquisition consistently shows that interleaved practice — mixing exam content review with role-play application and error correction — produces more durable performance than blocked practice of one skill at a time. Set measurable benchmarks: aim to score a specific percentile on released practice exams by week six, conduct a certain number of scored mock role-plays by week ten, and conduct at least two full simulated competitions (timed exam plus role-play in sequence) before your state event. Track your scores, identify recurring weak performance indicators, and allocate review time proportionally. The competitors who reach ICDC are rarely the ones who studied the most hours — they are the ones who studied the most strategically.`,
      prerequisiteRecap: `The previous lesson explained that DECA judges use a criterion-referenced rubric and that reaching Advanced Exemplary requires precise economic reasoning — not just problem identification; the preparation cadence now structures how to build that reasoning fluency systematically across the full competitive season.`,
      recallQuestions: [
        {
          id: 'dc1-l4-recall-1',
          type: 'mcq' as const,
          question: 'A DECA competitor scores 4/4 on problem identification but only 1/4 on "Recommended Action Plan." What does this pattern most likely indicate?',
          options: [
            'The competitor diagnosed the business situation accurately but failed to translate that understanding into a specific, justified, and actionable recommendation',
            'The competitor misidentified the core problem, causing the action plan score to suffer',
            'The competitor ran over the time limit, losing points on the action plan criterion',
            'The judge penalised the competitor for using too many economic terms in the action plan',
          ],
          correctAnswer: 0,
          explanation: 'A high problem-identification score combined with a low action-plan score is a classic DECA pattern: the competitor correctly diagnosed the situation but then offered vague, generic, or unjustified recommendations — for example, "improve marketing" without specifying how, to whom, at what cost, or backed by what economic logic. Bridging from strong diagnosis to specific, justified action is the skill gap most commonly separating state-level from ICDC-level performance.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
]

export const dc1Overview: CurriculumModule = {
  id: 'dc1-overview',
  title: 'DECA Events Overview and Competitive Mindset',
  description: 'Understand how DECA Economics events are structured and what judges are looking for.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 1,
  estimatedHours: 2,
  color: '#06b6d4',
  icon: 'Briefcase',
  lessons: dc1Lessons,
}
