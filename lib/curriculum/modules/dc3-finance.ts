import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'dc3-finance',
  title: 'DECA — Financial Literacy & Accounting',
  description: 'Financial statements, time value of money, investment basics, accounting, and DECA finance event prep.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 3,
  estimatedHours: 3,
  color: '#06b6d4',
  icon: 'Briefcase',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: Reading Financial Statements ────────────────────────────────────
  {
    id: 'dc3-l1',
    moduleId: 'dc3-finance',
    title: 'Reading Financial Statements',
    description: 'Learn to read and analyze the income statement, balance sheet, and cash flow statement using real numbers.',
    order: 1,
    estimatedMinutes: 40,
    tags: ['DECA', 'finance', 'financial-statements', 'accounting', 'income-statement', 'balance-sheet'],
    content: {
      conceptualExplanation: `Every public company is legally required to publish three core financial statements, and together they tell a complete story about a business's financial health. The income statement (also called the profit and loss statement or P&L) covers a period of time — a quarter or a year — and shows all revenues earned, all expenses incurred, and the resulting net income or net loss. Start at the top with revenue (sometimes called "net sales"), then subtract cost of goods sold (COGS) to get gross profit. Subtract operating expenses — things like salaries, rent, and marketing — to arrive at operating income (EBIT). After subtracting interest expense and taxes, you land at net income. If Apple reports $394 billion in revenue, $223 billion in COGS, and $54 billion in operating expenses, gross profit is $171 billion and operating income is $117 billion before interest and taxes — a 29.7% operating margin that signals an extraordinarily profitable core business.\n\nThe balance sheet is a snapshot at a single point in time — the last day of the reporting period — and is governed by one ironclad equation: Assets = Liabilities + Shareholders' Equity. Current assets (cash, accounts receivable, inventory) are those convertible to cash within a year; long-term assets (property, equipment, intangible assets like patents) are held longer. On the other side, current liabilities (accounts payable, short-term debt) are due within a year, while long-term liabilities include bonds and loans. Shareholders' equity — the residual claim — equals total assets minus total liabilities. If a firm has $500 million in assets and $300 million in liabilities, equity is $200 million. Analysts use ratios like the current ratio (current assets ÷ current liabilities) to assess short-term solvency; a ratio above 1.5 is generally healthy.\n\nThe cash flow statement reconciles net income with actual cash movement, divided into three sections: operating, investing, and financing activities. Operating cash flow starts with net income and adjusts for non-cash items — the most important being depreciation, which is added back because it reduced net income but required no cash payment. A company can report positive net income while bleeding cash if it is not collecting receivables efficiently; conversely, a firm may show a net loss while generating strong operating cash flow. Investing cash flow captures capital expenditures (spending on equipment and facilities) and asset sales — net negative investing cash flow is normal for a growing company. Financing cash flow tracks debt issuance/repayment and equity transactions like dividends and share buybacks. Free cash flow — operating cash flow minus capital expenditures — is arguably the single most important number for valuing a business because it represents the cash truly available to be returned to investors.`,
      realWorldHook: `When Amazon reported its 2022 annual results, its income statement showed a net loss of $2.7 billion — which sent inexperienced analysts into a panic. But the cash flow statement told a completely different story: operating cash flow was positive $46.8 billion, and the net loss was largely driven by a $12.7 billion mark-to-market loss on its investment in Rivian Automotive — an unrealized, non-cash charge. Meanwhile, Amazon Web Services contributed $22.8 billion in operating income on the income statement's segment breakdown, almost entirely offsetting losses in the retail divisions. This case perfectly illustrates why no single statement is sufficient: you need all three documents, read together, to understand what a business is actually doing financially.`,
      interactiveElement: `Practice reading a simplified income statement. A company reports: Revenue = $800,000 | COGS = $480,000 | Operating Expenses = $120,000 | Interest Expense = $20,000 | Tax Rate = 25%.
Step 1 — Gross Profit: $800,000 − $480,000 = $320,000. Gross margin = $320,000 ÷ $800,000 = 40%.
Step 2 — Operating Income (EBIT): $320,000 − $120,000 = $200,000. Operating margin = 25%.
Step 3 — EBT (Earnings Before Tax): $200,000 − $20,000 = $180,000.
Step 4 — Net Income: $180,000 × (1 − 0.25) = $135,000. Net margin = $135,000 ÷ $800,000 = 16.9%.
Now try: If COGS rises to $560,000 while all else stays the same, what is the new net income? Answer: Gross Profit = $240,000; EBIT = $120,000; EBT = $100,000; Net Income = $75,000 — a 44% drop in profit from a 17% rise in costs. This non-linear sensitivity is why cost control is mission-critical.`,
      vocabulary: [
        {
          term: 'Gross Profit Margin',
          definition: 'Revenue minus cost of goods sold, expressed as a percentage of revenue. Measures how efficiently a company produces its goods before overhead costs.',
          example: 'Nike reports revenue of $51 billion and COGS of $28 billion, giving a gross margin of ($51B − $28B) ÷ $51B = 45%. This high margin reflects the premium pricing power of its brand.',
        },
        {
          term: 'Current Ratio',
          definition: 'Current assets divided by current liabilities. A liquidity measure showing whether a company can cover short-term obligations with short-term assets.',
          example: 'A retailer with $600,000 in current assets and $350,000 in current liabilities has a current ratio of 1.71, meaning it has $1.71 in liquid resources for every $1.00 it owes within the next year.',
        },
        {
          term: 'Free Cash Flow (FCF)',
          definition: 'Operating cash flow minus capital expenditures. Represents the cash a company generates after maintaining and expanding its asset base — the truest measure of financial flexibility.',
          example: 'If a company generates $10 million in operating cash flow but spends $4 million on new equipment (capex), its FCF is $6 million — the amount available for dividends, debt repayment, or acquisitions.',
        },
      ],
      deeperDive: `Financial statement analysis becomes most powerful when you calculate and benchmark ratios across time and against competitors. The DuPont framework decomposes return on equity (ROE = Net Income ÷ Equity) into three drivers: net profit margin (how much profit per dollar of sales), asset turnover (how efficiently assets generate sales), and financial leverage (how much the company amplifies equity with debt). ROE = (Net Income/Sales) × (Sales/Assets) × (Assets/Equity). Two companies with identical 15% ROE may have achieved it completely differently — one through high margins with low leverage (a luxury brand), the other through thin margins with high asset turnover and aggressive borrowing (a grocery chain). Understanding which lever drove ROE is essential to assessing sustainability and risk.\n\nFor DECA competitions, the most frequently tested red flags in financial statements are: a widening gap between net income and operating cash flow (possible earnings management), a current ratio below 1.0 (acute liquidity risk), rapidly growing accounts receivable relative to revenue (customers not paying), and capital expenditures that consistently exceed operating cash flow (the company is burning cash to grow). When a role-play scenario hands you a set of financial figures, your first move should be to calculate three or four key ratios — gross margin, current ratio, debt-to-equity, and operating cash flow conversion — then frame your recommendation around fixing whichever ratio is most alarming. Judges award the highest marks to competitors who go beyond describing a problem to quantifying it precisely.`,
      commonMisconceptions: [
        'Profit and cash are the same thing. In reality, a business can be profitable on the income statement while running out of cash if it extends long payment terms to customers (high receivables) or pays suppliers quickly. The cash flow statement, not the income statement, reveals the actual cash position.',
        'A negative net income always means the business is failing. Many high-growth companies — including Amazon for most of its early years and Tesla through 2019 — reported net losses while building enormous competitive advantages. The cash flow statement and the balance sheet (particularly cash reserves and debt levels) provide a much fuller picture.',
        'Total assets equal total equity. This confuses one side of the balance sheet with the whole. Assets = Liabilities + Equity. If a company has $1 million in assets and $600,000 in liabilities, equity is only $400,000. Ignoring liabilities drastically overestimates how much of the business actually belongs to shareholders.',
      ],
      examinerTip: `In DECA Financial Services or Business Finance Series role-plays, you will almost always be given at least one financial figure — a revenue number, a cost percentage, or a ratio. Judges are specifically trained to reward competitors who use those numbers actively in their analysis rather than treating the scenario as a purely qualitative discussion. Before your presentation, calculate at least two derived figures from any numbers given (e.g., if you have revenue and COGS, compute gross margin). Then reference those calculations explicitly: "The gross margin of 38% is below the industry average of 45%, which tells us the core problem is cost of goods — not overhead — and that is where I am recommending we focus." That level of quantitative specificity is the clearest signal to a judge that you genuinely understand financial statements.`,
      didYouKnow: `The term "bottom line" — meaning the final result or conclusion — comes directly from accounting. The last line on an income statement, after all revenues, expenses, and taxes have been accounted for, is net income. Because it appears at the literal bottom of the statement, "the bottom line" entered everyday English as a synonym for the most important final outcome of any analysis or discussion.`,
      isStub: false,
      thinkAboutIt: {
        question: `Two companies each report a return on equity (ROE) of 18%. Company A has a net profit margin of 15%, low debt, and modest asset turnover. Company B has a net profit margin of only 3%, turns its assets over rapidly, and carries substantial debt. A DECA judge asks which company is the "better" investment. Using the DuPont framework, how would you break down each company's ROE, and what risk factor might lead you to prefer Company A even though the two ROE figures are identical?`,
        answer: `ROE = Net Profit Margin × Asset Turnover × Financial Leverage (Assets ÷ Equity). Company A appears to be reaching its 18% ROE primarily through a high margin and low leverage — a pattern typical of a premium or luxury-branded business that earns strong profit per dollar of sales without borrowing heavily. Company B reaches the same 18% through thin margins offset by very high asset turnover and, critically, heavy leverage — a pattern typical of a grocery chain or discount retailer that multiplies a small profit per sale across a large volume of transactions financed partly with debt. Although the two ROE numbers are mathematically identical, they are not equally sustainable or safe. Leverage amplifies ROE in good years but also amplifies losses in bad years, because interest and debt principal must still be paid even if sales fall. A judge should be told that Company A's ROE is lower-risk because it is not dependent on borrowed capital, while Company B's ROE could collapse or turn negative in a downturn if revenue drops and it cannot service its debt. A sound recommendation would prefer Company A for a risk-averse investor, or investigate Company B's debt-to-equity ratio and interest coverage further before recommending it despite the equal ROE.`,
      },
    },
    flashcards: [
      {
        id: 'dc3-l1-fc1',
        front: 'What is the fundamental accounting equation that governs the balance sheet?',
        back: 'Assets = Liabilities + Shareholders\' Equity. Assets are everything the company owns or controls; liabilities are what it owes to creditors; equity is the residual claim belonging to shareholders. If assets = $900,000 and liabilities = $550,000, then equity = $350,000.',
        tags: ['DECA', 'finance', 'balance-sheet', 'accounting-equation'],
      },
      {
        id: 'dc3-l1-fc2',
        front: 'How does free cash flow (FCF) differ from net income, and why is FCF often considered more informative?',
        back: 'FCF = Operating Cash Flow − Capital Expenditures. Net income includes non-cash items (depreciation, amortization, unrealized gains/losses) that distort the true cash picture. FCF shows the actual cash a business generates after sustaining its operations — the amount available to pay dividends, buy back shares, or repay debt. A company can have positive net income and negative FCF if it is investing heavily in growth.',
        tags: ['DECA', 'finance', 'cash-flow', 'free-cash-flow'],
      },
      {
        id: 'dc3-l1-fc3',
        front: 'What does a current ratio of 0.8 signal, and what are its implications for a business?',
        back: 'A current ratio below 1.0 means current liabilities exceed current assets — the company cannot fully cover its short-term obligations with short-term resources. This signals liquidity risk: if creditors demand payment, the company may need to sell long-term assets, take on new debt, or risk insolvency. A ratio of 0.8 means it has only $0.80 in liquid assets for every $1.00 owed within the next year.',
        tags: ['DECA', 'finance', 'liquidity', 'current-ratio'],
      },
    ],
    lessonAssignment: {
      prompt: `Riverbend Outdoor Supply, a mid-sized retailer, reports the following figures for the fiscal year: Revenue = $2,400,000 | COGS = $1,560,000 | Operating Expenses = $480,000 | Interest Expense = $60,000 | Tax Rate = 21% | Current Assets = $540,000 | Current Liabilities = $420,000 | Operating Cash Flow = $310,000 | Capital Expenditures = $180,000.

(a) Calculate gross profit, gross margin, operating income (EBIT), and operating margin. [5 marks]

(b) Calculate the current ratio and evaluate what it signals about Riverbend's short-term liquidity. [4 marks]

(c) Calculate free cash flow (FCF) and explain, using accrual accounting concepts, why FCF can differ from net income even in a profitable year. [5 marks]

(d) Using at least two of your calculations from (a)-(c), evaluate Riverbend's overall financial health and recommend one specific action management should take this year. [6 marks]`,
      rubric: `(a) Gross Profit = $2,400,000 − $1,560,000 = $840,000; Gross Margin = $840,000 ÷ $2,400,000 = 35% (2 pts). Operating Income (EBIT) = $840,000 − $480,000 = $360,000; Operating Margin = $360,000 ÷ $2,400,000 = 15% (3 pts). Total: 5 pts.

(b) Current Ratio = $540,000 ÷ $420,000 = 1.29 (2 pts). Correct evaluation: a ratio above 1.0 but below the 1.5+ "comfortably healthy" benchmark indicates adequate but not strong short-term liquidity — Riverbend can cover obligations but has limited cushion (2 pts). Total: 4 pts.

(c) FCF = Operating Cash Flow − Capex = $310,000 − $180,000 = $130,000 (2 pts). Correct explanation that net income includes non-cash items (e.g., depreciation) and accrual-based revenue/expense timing that does not match actual cash receipt or payment, so a profitable company can have materially different cash flow than net income (3 pts). Total: 5 pts.

(d) Full marks require: reference to at least two specific calculated figures (e.g., 35% gross margin, 1.29 current ratio, $130,000 FCF) (3 pts); a coherent overall health assessment consistent with those figures — moderate profitability and adequate but not strong liquidity (1 pt); and one specific, actionable recommendation tied to a weak point identified (e.g., build cash reserves or negotiate extended payables terms to strengthen the current ratio) (2 pts). Total: 6 pts.

Grand total: 20 marks.`,
      exampleTopics: [
        'Calculate gross margin and operating margin from raw revenue and cost figures, showing each step of the subtraction.',
        'Apply the current ratio formula to assess short-term liquidity and benchmark the result against the 1.5 "healthy" threshold.',
        'Distinguish free cash flow from net income using the concept of non-cash and accrual-based accounting items.',
        'Synthesize multiple ratios into a single, evidence-based recommendation rather than treating each calculation in isolation.',
      ],
    },
    quiz: [
      {
        id: 'dc3-l1-q1',
        type: 'mcq',
        question: 'A company reports net income of $200,000 but operating cash flow of only $50,000. Accounts receivable increased by $180,000 during the same period. What is the most likely explanation for this gap?',
        options: [
          'The company is recognizing revenue before collecting cash from customers, inflating net income relative to actual cash received.',
          'The company paid an unusually large dividend that reduced its cash balance.',
          'Depreciation expense was recorded on the income statement, reducing net income below operating cash flow.',
          'The company issued new shares, increasing equity but not affecting cash from operations.',
        ],
        correctAnswer: 0,
        explanation: 'A large increase in accounts receivable — $180,000 — means the company booked revenue (raising net income) but has not yet collected the cash. On the cash flow statement, increases in receivables are subtracted from net income when calculating operating cash flow. Depreciation would increase the gap the other way (adding back to cash). Dividends appear in financing activities, not operating cash flow.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'dc3-l1-q2',
        type: 'mcq',
        question: 'Which financial statement would you examine FIRST to determine whether a company can meet its debt obligations due within the next 12 months?',
        options: [
          'The balance sheet, specifically the current ratio (current assets ÷ current liabilities).',
          'The income statement, specifically the net profit margin.',
          'The cash flow statement, specifically the investing activities section.',
          'The income statement, specifically the gross profit margin.',
        ],
        correctAnswer: 0,
        explanation: 'Short-term debt obligations are a liquidity question — can the company pay what it owes soon? The balance sheet\'s current section directly shows current assets (available resources within a year) versus current liabilities (obligations due within a year). The current ratio formalizes this comparison. Net or gross profit margins measure profitability, not liquidity, and investing cash flows relate to long-term asset spending.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc3-l1-q3',
        type: 'mcq',
        question: 'A company has revenue of $1,000,000, COGS of $600,000, and operating expenses of $200,000. What is its operating margin?',
        options: [
          '20%, calculated as ($1,000,000 − $600,000 − $200,000) ÷ $1,000,000.',
          '40%, calculated as ($1,000,000 − $600,000) ÷ $1,000,000.',
          '80%, calculated as $800,000 ÷ $1,000,000.',
          '60%, calculated as ($1,000,000 − $200,000) ÷ $1,000,000.',
        ],
        correctAnswer: 0,
        explanation: 'Operating income (EBIT) = Revenue − COGS − Operating Expenses = $1,000,000 − $600,000 − $200,000 = $200,000. Operating margin = $200,000 ÷ $1,000,000 = 20%. Option B calculates gross margin (ignoring operating expenses). Options C and D use incorrect subtraction logic.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Time Value of Money ─────────────────────────────────────────────
  {
    id: 'dc3-l2',
    moduleId: 'dc3-finance',
    title: 'Time Value of Money',
    description: 'Master present value, future value, compound interest, NPV, and annuities with worked numerical examples.',
    order: 2,
    estimatedMinutes: 42,
    tags: ['DECA', 'finance', 'time-value', 'present-value', 'future-value', 'compound-interest', 'NPV'],
    content: {
      conceptualExplanation: `The time value of money (TVM) is the foundational principle of all finance: a dollar today is worth more than a dollar in the future, because today's dollar can be invested to earn a return. This single insight drives every major financial decision — from evaluating a business investment to choosing a mortgage, from pricing a bond to planning for retirement. The two core calculations are future value (FV) and present value (PV). Future value answers: "If I invest $X today at rate r for n periods, how much will I have?" FV = PV × (1 + r)ⁿ. Present value answers the reverse: "How much is $X received in n years worth to me today, given I could earn rate r?" PV = FV ÷ (1 + r)ⁿ, or equivalently, FV × (1 + r)⁻ⁿ. If you invest $2,000 today at 8% annually for 6 years, FV = $2,000 × (1.08)⁶ = $2,000 × 1.5869 = $3,174. Conversely, $3,174 received in 6 years is worth only $2,000 today at an 8% discount rate.\n\nCompound interest is what makes TVM non-linear and surprisingly powerful over long periods. When interest compounds, you earn returns not just on your principal but on the interest you've already accumulated — "interest on interest." The Rule of 72 is a mental shortcut: divide 72 by the annual interest rate to estimate how many years it takes to double your money. At 6% annually, your money doubles roughly every 72 ÷ 6 = 12 years. At 9%, it doubles every 8 years. Einstein is famously (if apocryphally) credited with calling compound interest the eighth wonder of the world — and the math backs him up. $10,000 invested at 7% for 30 years grows to $10,000 × (1.07)³⁰ = $76,123, a 661% gain from compounding alone, without a single additional dollar invested.\n\nNet Present Value (NPV) extends these concepts to business investment decisions. NPV calculates the present value of all future cash flows a project is expected to generate and subtracts the initial investment. If NPV > 0, the project creates value; if NPV < 0, it destroys value. The formula for an investment generating cash flow CF at each period is: NPV = −Initial Investment + CF₁/(1+r) + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ. A business considering a $50,000 machine that generates $15,000 per year for 4 years at a 10% discount rate: NPV = −$50,000 + $15,000/1.10 + $15,000/1.21 + $15,000/1.331 + $15,000/1.464 = −$50,000 + $13,636 + $12,397 + $11,270 + $10,245 = −$12,452. The negative NPV means this machine destroys value at a 10% hurdle rate — do not buy it. An annuity is a stream of equal payments over fixed periods, and there are shortcuts (annuity factors) for calculating PV and FV of annuities without summing every term individually.`,
      realWorldHook: `In 2012, Apple began paying a quarterly dividend and initiating share buybacks — effectively returning cash to shareholders rather than reinvesting it. A core question in that decision was the opportunity cost of capital: what return could Apple earn reinvesting internally versus what shareholders could earn elsewhere? This is pure TVM logic. By 2023, Apple had repurchased over $550 billion in shares since 2012, and the present value of those buybacks — discounted at shareholders' required rate of return — was a key driver of Apple's stock price appreciation. Every time a company's CFO models a potential acquisition, a new factory, or a product launch, they are building an NPV model: what is the present value of expected future cash flows, and does it exceed the cost today?`,
      interactiveElement: `Calculate: If you invest $1,000 today at 7% annual interest, how much do you have in 10 years?
FV = PV × (1 + r)ⁿ = $1,000 × (1.07)¹⁰ = $1,000 × 1.9672 = $1,967.

Now: What lump sum today equals $5,000 in 8 years at 6%?
PV = FV ÷ (1 + r)ⁿ = $5,000 ÷ (1.06)⁸ = $5,000 ÷ 1.5938 = $3,138.

NPV exercise: A project costs $20,000 upfront and returns $8,000 per year for 3 years. Discount rate = 10%.
Year 1 PV: $8,000 ÷ 1.10 = $7,273
Year 2 PV: $8,000 ÷ 1.21 = $6,612
Year 3 PV: $8,000 ÷ 1.331 = $6,011
Total PV of inflows: $19,896. NPV = $19,896 − $20,000 = −$104. Just barely negative — this project is on the borderline and a slightly higher cash flow or lower discount rate would tip it positive.

Rule of 72 check: At 7%, money doubles every 72 ÷ 7 ≈ 10.3 years. Confirm: $1,000 × (1.07)¹⁰ = $1,967 ≈ double. ✓`,
      vocabulary: [
        {
          term: 'Discount Rate',
          definition: 'The interest rate used to convert future cash flows into their present value equivalents. It reflects the opportunity cost of capital — what you could earn on an alternative investment of similar risk.',
          example: 'A company uses a 12% discount rate (its cost of capital) to evaluate projects. A promise of $112,000 one year from now has a PV of $112,000 ÷ 1.12 = $100,000 — exactly what you\'d need to invest today at 12% to get $112,000 in a year.',
        },
        {
          term: 'Net Present Value (NPV)',
          definition: 'The sum of the present values of all cash inflows from a project minus the initial investment. A positive NPV means the investment creates value above the required return; negative NPV destroys value.',
          example: 'A $30,000 investment that generates $12,000 per year for 3 years at a 10% discount rate: NPV = −$30,000 + ($12,000/1.10) + ($12,000/1.21) + ($12,000/1.331) = −$30,000 + $29,842 = −$158. Marginally negative — reject the project.',
        },
        {
          term: 'Annuity',
          definition: 'A series of equal cash payments made at regular intervals over a specified period. Present value of an annuity = Payment × [1 − (1+r)⁻ⁿ] ÷ r.',
          example: 'A $500 monthly car payment for 48 months at 6% annual (0.5% monthly): PV = $500 × [1 − (1.005)⁻⁴⁸] ÷ 0.005 = $500 × 42.58 = $21,290. This is the maximum loan principal those payments can support at that rate.',
        },
      ],
      deeperDive: `The internal rate of return (IRR) is the discount rate at which an investment's NPV equals exactly zero — the "break-even" return rate. If a project's IRR exceeds the company's cost of capital (hurdle rate), it creates value; if it falls below, it destroys value. IRR is popular in practice because it expresses the return on a project as a single percentage that managers can intuitively compare to their borrowing cost or required return. However, IRR has a critical flaw: for projects with unconventional cash flow patterns (multiple sign changes — e.g., a project that requires a large expense mid-life), there can be multiple IRRs, making the metric ambiguous. NPV does not have this problem and is theoretically superior, but both metrics are used extensively in corporate finance.\n\nInflation interacts critically with TVM calculations. A nominal interest rate includes the expected inflation premium; the real interest rate strips inflation out. The Fisher equation approximates: real rate ≈ nominal rate − inflation rate. If a bank offers 5% nominal interest and inflation runs at 3%, your real purchasing power grows by only 2%. For DECA scenarios involving long-term financial planning — retirement, infrastructure investment, long-term loans — always ask whether rates cited are real or nominal, and whether cash flows are in today's dollars or future nominal dollars. Mixing real rates with nominal cash flows (or vice versa) is one of the most common and consequential errors in financial analysis.`,
      commonMisconceptions: [
        'A higher future value always means a better investment. This ignores risk and time. $200 in 1 year may be preferable to $300 in 20 years if the discount rate is high enough (e.g., at 10%, $300 in 20 years has a PV of only $300 ÷ 6.727 = $44.60 — far less than $200 today). Future value comparisons must always be converted to present value using the appropriate discount rate before comparing options.',
        'Compound interest and simple interest grow at the same rate over long periods. Simple interest applies the rate only to the original principal each period. Compound interest applies it to the growing balance. $10,000 at 8% simple interest for 20 years = $10,000 + ($10,000 × 0.08 × 20) = $26,000. At 8% compound interest: $10,000 × (1.08)²⁰ = $46,610 — nearly double the simple-interest result. The gap widens dramatically with time.',
        'NPV and payback period always give the same investment recommendation. Payback period (how many years to recover the initial investment) ignores both the time value of money and cash flows after the payback point. A project with a 2-year payback might have a negative NPV if the discount rate is high enough, or be less valuable than a 4-year-payback project that generates enormous cash flows in later years. NPV is the correct decision metric; payback period is a supplementary liquidity check, not a valuation tool.',
      ],
      examinerTip: `DECA Finance event judges frequently give role-play scenarios that include a proposed investment with financial projections. Even without a calculator (some events allow one, some don't), you can demonstrate TVM literacy by applying the Rule of 72, identifying whether the discount rate is appropriate for the risk level described, and qualitatively assessing whether the stated payback period is reasonable given the cash flows. If you do have a calculator, always show your formula structure explicitly — write "FV = PV × (1+r)ⁿ" before substituting numbers, because judges are trained to award process credit even if there is a minor arithmetic error. Stating your discount rate assumption and briefly justifying it ("I'm using 10% as the hurdle rate because this is a moderately risky retail expansion") will consistently earn examiner marks that vague presenters miss.`,
      didYouKnow: `The concept of present value dates to medieval Italy, where merchants in Florence and Venice used early discounting calculations to price future trade contracts. The Medici banking family, who effectively invented modern banking in the 1400s, used time-value reasoning to price loans and currency exchange agreements across multiple European cities — centuries before the formal mathematics of finance were codified. Modern NPV analysis as taught in business schools traces back to Irving Fisher's 1930 book "The Theory of Interest," which rigorously established that the value of any asset is simply the present value of all future cash flows it generates.`,
      isStub: false,
      thinkAboutIt: {
        question: `A friend is deciding between two payout options: Option A pays $50,000 immediately. Option B pays $8,000 per year for 10 years, with the first payment one year from now. Your friend says Option B is clearly better because $8,000 × 10 = $80,000, which is far more than $50,000. Using time value of money reasoning and a 9% discount rate, explain why this comparison is flawed, and determine which option is actually worth more today.`,
        answer: `Your friend's reasoning simply adds up nominal dollar amounts without accounting for when each dollar arrives, which ignores the core premise of TVM — a dollar received later is worth less than a dollar received today because it forgoes the opportunity to earn a return in the meantime. To compare the two options fairly, Option B's ten payments must each be discounted back to present value and summed, using the annuity formula: PV = Payment × [1 − (1+r)⁻ⁿ] ÷ r = $8,000 × [1 − (1.09)⁻¹⁰] ÷ 0.09 = $8,000 × 6.418 = approximately $51,340. So Option B is indeed worth slightly more than Option A's $50,000 in present-value terms — but the true advantage is only about $1,340, not the naive $30,000 gap your friend calculated by simply adding nominal payments. This example also shows why the decision is sensitive to the discount rate: at a higher rate, say 12%, the annuity factor falls to about 5.650, making Option B worth only around $45,200 — less than Option A — which would flip the recommendation entirely. The lesson is that no comparison of cash flows received at different times is valid until every amount is converted to a common point in time using an appropriate discount rate.`,
      },
    },
    flashcards: [
      {
        id: 'dc3-l2-fc1',
        front: 'State the future value formula and use it: how much does $5,000 grow to in 7 years at 6% annual interest?',
        back: 'FV = PV × (1 + r)ⁿ = $5,000 × (1.06)⁷ = $5,000 × 1.5036 = $7,518. At 6% compounding annually, $5,000 grows to approximately $7,518 in 7 years. The Rule of 72 confirms the ballpark: money doubles every 12 years at 6%, so 7 years is a bit more than half a doubling — consistent with growing from $5,000 to ~$7,500.',
        tags: ['DECA', 'finance', 'TVM', 'future-value'],
      },
      {
        id: 'dc3-l2-fc2',
        front: 'What is NPV and what does a positive NPV tell a decision-maker?',
        back: 'NPV (Net Present Value) = Sum of present values of all future cash inflows − Initial investment. A positive NPV means the investment is expected to generate returns exceeding the required rate of return (discount rate) — it creates value. A negative NPV means the project\'s returns fall short of the hurdle rate. Decision rule: invest if NPV > 0, reject if NPV < 0.',
        tags: ['DECA', 'finance', 'NPV', 'investment-decision'],
      },
      {
        id: 'dc3-l2-fc3',
        front: 'What is the Rule of 72, and how is it applied?',
        back: 'The Rule of 72 estimates the number of years needed to double an investment: Years to double ≈ 72 ÷ annual interest rate. At 8%: 72 ÷ 8 = 9 years. At 4%: 72 ÷ 4 = 18 years. At 12%: 72 ÷ 12 = 6 years. It can also be reversed: if money doubles in 6 years, the implied annual return ≈ 72 ÷ 6 = 12%.',
        tags: ['DECA', 'finance', 'compound-interest', 'Rule-of-72'],
      },
    ],
    lessonAssignment: {
      prompt: `Fairhaven Bakery is deciding whether to purchase a new commercial oven for $75,000. The oven is expected to generate additional annual cash flow of $22,000 for 5 years. Fairhaven's required rate of return (discount rate) is 11%. As an alternative, the owner could instead invest the $75,000 in a low-risk fund expected to earn 6% annually.

(a) Calculate the future value of $75,000 invested at 6% for 5 years — the value of the "do nothing and invest instead" alternative. [4 marks]

(b) Calculate the Net Present Value (NPV) of the oven purchase at an 11% discount rate. Show the present value of each year's $22,000 cash flow individually before summing. [8 marks]

(c) State whether Fairhaven should buy the oven, justifying your answer with both the NPV result and a Rule of 72 estimate of how long the fund alternative takes to double. [4 marks]

(d) If Fairhaven's discount rate were instead 15% (reflecting higher perceived risk), recalculate the NPV and explain whether the purchase decision would change. [4 marks]`,
      rubric: `(a) FV = $75,000 × (1.06)⁵ = $75,000 × 1.3382 = $100,367 (correct formula 2 pts, correct answer 2 pts). Total: 4 pts.

(b) Year-by-year PV at 11%: Year 1 = $22,000 ÷ 1.11 = $19,820; Year 2 = $22,000 ÷ 1.2321 = $17,857; Year 3 = $22,000 ÷ 1.3676 = $16,088; Year 4 = $22,000 ÷ 1.5181 = $14,493; Year 5 = $22,000 ÷ 1.6851 = $13,054 (1 pt each, 5 pts total). Sum of PVs = $81,312; NPV = $81,312 − $75,000 = +$6,312 (3 pts for correct summation and NPV). Total: 8 pts.

(c) Correct recommendation: buy the oven, because NPV is positive (+$6,312), meaning the project's return exceeds the 11% hurdle rate (2 pts). Rule of 72 for the 6% alternative: 72 ÷ 6 = 12 years to double — much slower value creation than the oven's positive NPV at only a 5-year horizon (2 pts). Total: 4 pts.

(d) At 15%: Year 1 = $19,130; Year 2 = $16,636; Year 3 = $14,464; Year 4 = $12,579; Year 5 = $10,938; Sum = $73,747; NPV = $73,747 − $75,000 = −$1,253 (3 pts for correct recalculation). Correct conclusion that the decision flips to "do not buy" because NPV is now negative at the higher, riskier discount rate (1 pt). Total: 4 pts.

Grand total: 20 marks.`,
      exampleTopics: [
        'Apply the future value formula FV = PV × (1+r)ⁿ to evaluate a foregone investment alternative.',
        'Calculate NPV by discounting each individual cash flow to present value before summing and subtracting the initial investment.',
        'Use the Rule of 72 as a quick sanity check alongside a full NPV calculation.',
        'Show how a higher discount rate can flip an investment decision from accept to reject, illustrating sensitivity analysis.',
      ],
    },
    quiz: [
      {
        id: 'dc3-l2-q1',
        type: 'mcq',
        question: 'You invest $3,000 today at 5% annual compound interest. Approximately how many years will it take to double to $6,000?',
        options: [
          'Approximately 14.4 years, using the Rule of 72 (72 ÷ 5 = 14.4).',
          'Approximately 10 years, because 5% × 10 = 50% gain means doubling.',
          'Approximately 20 years, because 5% simple interest earns $150 per year and $3,000 ÷ $150 = 20 years.',
          'Approximately 7.2 years, calculated as 72 ÷ 10.',
        ],
        correctAnswer: 0,
        explanation: 'Rule of 72: 72 ÷ 5 = 14.4 years. Option B incorrectly uses simple-interest logic (adding 5% × principal each year gives 50% over 10 years, not a doubling). Option C correctly uses simple interest arithmetic but the question specifies compound interest. Option D applies the rule with the wrong rate (72 ÷ 10 would apply to a 10% rate).',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc3-l2-q2',
        type: 'mcq',
        question: 'A project requires a $40,000 investment today and is expected to return $14,000 per year for 3 years. The discount rate is 8%. Which statement correctly describes the NPV analysis?',
        options: [
          'NPV is approximately −$3,940, calculated by summing the PV of each $14,000 cash flow ($12,963 + $12,003 + $11,114 = $36,080) and subtracting $40,000 — the project destroys value at an 8% hurdle rate.',
          'NPV is positive because total undiscounted cash flows ($42,000) exceed the $40,000 investment.',
          'NPV is $2,000, calculated as $42,000 − $40,000 = $2,000, ignoring discounting.',
          'NPV cannot be calculated without knowing the project\'s IRR first.',
        ],
        correctAnswer: 0,
        explanation: 'Year 1: $14,000 ÷ 1.08 = $12,963. Year 2: $14,000 ÷ 1.1664 = $12,003. Year 3: $14,000 ÷ 1.2597 = $11,114. Total PV = $36,080. NPV = $36,080 − $40,000 = −$3,920 (approximately −$3,940). Options B and C ignore discounting entirely — comparing nominal cash flows to the investment cost without accounting for the time value of money. NPV is calculated independently of IRR.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'dc3-l2-q3',
        type: 'mcq',
        question: 'What is the present value of $10,000 to be received in 5 years, discounted at 6% annually?',
        options: [
          '$7,473, calculated as $10,000 ÷ (1.06)⁵ = $10,000 ÷ 1.3382.',
          '$13,382, calculated as $10,000 × (1.06)⁵.',
          '$8,000, calculated by subtracting 5 years of 6% simple interest.',
          '$10,000, because the future dollar amount is what the contract promises regardless of timing.',
        ],
        correctAnswer: 0,
        explanation: 'PV = FV ÷ (1+r)ⁿ = $10,000 ÷ (1.06)⁵ = $10,000 ÷ 1.3382 = $7,473. Option B calculates future value, not present value — reversing the direction. Option C applies simple interest incorrectly. Option D ignores the time value of money entirely — the defining error in financial analysis.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Investment & Risk ───────────────────────────────────────────────
  {
    id: 'dc3-l3',
    moduleId: 'dc3-finance',
    title: 'Investment & Risk',
    description: 'Compare stocks vs. bonds, understand diversification, the risk-return tradeoff, portfolio basics, and index funds.',
    order: 3,
    estimatedMinutes: 38,
    tags: ['DECA', 'finance', 'investing', 'stocks', 'bonds', 'diversification', 'risk-return', 'portfolio'],
    content: {
      conceptualExplanation: `Investment is the deployment of capital today with the expectation of receiving more capital in the future, and every investment carries risk — the possibility that actual returns will differ from expected returns. The two most fundamental asset classes are stocks (equities) and bonds (fixed income). A stock represents an ownership stake in a company; shareholders participate in profits through dividends and capital gains (rising stock price) but absorb losses if the company struggles. A bond is a loan from the investor to the issuer (government or corporation); the issuer promises to pay fixed interest (coupon payments) at regular intervals and return the principal at maturity. Stocks historically deliver higher long-run returns — the S&P 500 has averaged roughly 10% annually over the past century — but with much higher volatility. The S&P 500 fell 38% in 2008, 19% in 2022, and 34% in the COVID crash of early 2020 before recovering sharply. U.S. government bonds, by contrast, rarely lose more than a few percent in a year and never default on dollar-denominated obligations.\n\nThe risk-return tradeoff is a bedrock principle: to earn higher expected returns, investors must accept higher risk (volatility, probability of loss). This is not arbitrary — it is enforced by rational investor behavior. If a risky asset did not offer a premium return over a safe one, no rational investor would hold it. The equity risk premium — the extra return stocks deliver above risk-free assets (like U.S. Treasury bills) — has historically been 4–6% per year. Within stocks, small-cap companies have higher expected returns than large-caps (and higher volatility), growth stocks behave differently from value stocks, and emerging-market equities carry political and currency risk beyond pure business risk. Understanding which risks you are taking — and whether you are compensated for them — is the starting point of portfolio construction.\n\nDiversification is the practice of combining assets whose returns do not move in perfect lockstep, thereby reducing the overall volatility of a portfolio without necessarily sacrificing expected returns. If Asset A falls 20% when the economy contracts but Asset B rises 10% in the same scenario, combining them reduces the portfolio's worst-case loss. The key concept is correlation: assets with low or negative correlation provide the greatest diversification benefit. A portfolio of 30 randomly selected U.S. stocks has far less volatility than any single stock; adding international stocks, bonds, and real estate investment trusts (REITs) reduces volatility further. Index funds — mutual funds or ETFs that passively track a market index like the S&P 500 — provide instant broad diversification at very low cost (expense ratios as low as 0.03%). Decades of evidence show that most actively managed funds fail to outperform their benchmark index after fees over long periods, which is why index investing has grown from a niche idea in the 1970s to the dominant investment strategy in the world today.`,
      realWorldHook: `In 2008, Yale University's endowment — managed by legendary investor David Swensen — fell about 25%, a painful year. But Harvard's fell 27% and many individual investors' portfolios fell 40–50% or more. Yale's "endowment model" of diversification across asset classes (domestic equities, foreign equities, bonds, real estate, private equity, and absolute return strategies) cushioned the blow. On the other side of the spectrum: investors who held only Enron stock — including Enron's own employees, who had 401(k) plans heavily concentrated in company shares — lost everything when Enron collapsed in 2001. The lesson is stark and empirical: diversification does not eliminate risk, but concentration risk can be catastrophic, and it is entirely avoidable.`,
      interactiveElement: `Risk-return comparison exercise:

Asset Class       | Avg Annual Return | Annual Volatility (Std Dev)
U.S. T-Bills      | 3.3%              | 1%
10-yr U.S. Bonds  | 5.1%              | 8%
S&P 500 (large)   | 10.1%             | 17%
Small-cap stocks  | 12.0%             | 22%

Question 1: If you invest $50,000 in the S&P 500 and it drops by one standard deviation in a bad year, what is the approximate value? $50,000 × (1 − 0.17) = $41,500.

Question 2: A portfolio is 60% S&P 500 and 40% bonds. Expected return = (0.60 × 10.1%) + (0.40 × 5.1%) = 6.06% + 2.04% = 8.1%. If the bond and stock portions are imperfectly correlated (correlation = 0.3), the combined portfolio volatility is lower than the weighted average of 17% × 0.60 + 8% × 0.40 = 13.4% — demonstrating the diversification benefit in action.`,
      vocabulary: [
        {
          term: 'Equity Risk Premium',
          definition: 'The excess return that investing in stocks provides over a risk-free rate (typically U.S. Treasury bills). It compensates investors for the additional volatility and uncertainty of equity ownership.',
          example: 'If the risk-free rate is 4% and the long-run expected return on the stock market is 10%, the equity risk premium is 6%. An investor choosing stocks over T-bills is accepting volatility in exchange for that 6% annual premium.',
        },
        {
          term: 'Standard Deviation (in investing)',
          definition: 'A statistical measure of how much an asset\'s returns vary around its average — the most common measure of investment risk. Higher standard deviation means more volatile (riskier) returns.',
          example: 'A stock with a 15% average return and 20% standard deviation will, in roughly two-thirds of years, return between −5% and +35% (average ± one standard deviation). In a severe downturn (two standard deviations), it could fall to −25%.',
        },
        {
          term: 'Expense Ratio',
          definition: 'The annual fee charged by a fund (mutual fund or ETF) as a percentage of assets under management. It is deducted directly from fund returns and compounds significantly over time.',
          example: 'A $100,000 investment in a fund with a 1.0% expense ratio versus a 0.05% index fund will cost $950 more per year in fees. Over 30 years at 8% pre-fee returns, the high-fee fund delivers approximately $780,000 versus $990,000 for the index fund — a $210,000 difference driven entirely by the fee gap.',
        },
      ],
      deeperDive: `Modern Portfolio Theory (MPT), developed by Harry Markowitz in 1952, mathematically formalizes the intuition behind diversification. MPT shows that for any given level of expected return, there is a portfolio allocation that minimizes variance (risk), and vice versa. The set of all such optimal portfolios forms the "efficient frontier" — a curve in risk-return space above which no portfolio can exist (without access to superior information). Portfolios below the efficient frontier are "inefficient" — they carry more risk than necessary for their return level. The Capital Asset Pricing Model (CAPM), built on MPT, introduces "beta" as a measure of systematic risk — how sensitive a stock is to overall market movements. A beta of 1.5 means a stock typically moves 1.5% for every 1% the market moves. CAPM predicts that expected return = risk-free rate + beta × equity risk premium.\n\nOne common debate in investment practice is active versus passive management. Active managers research individual securities and deviate from market-cap-weighted indices, believing they can identify mispriced assets. Passive (index) investors accept market returns at minimal cost. The evidence, accumulated over 50+ years, consistently shows that the majority of actively managed funds underperform their benchmark index after fees over 10-year or longer periods. The primary reason is not that active managers are unskilled — it is that the market is highly competitive, prices reflect available public information rapidly, and fees create a structural headwind. For a DECA context, understanding this debate is essential in Personal Financial Literacy scenarios about retirement planning, where the fund selection question (active vs. passive) can have six-figure lifetime consequences.`,
      commonMisconceptions: [
        'Diversification eliminates all investment risk. Diversification eliminates unsystematic risk (company-specific risk) but cannot eliminate systematic risk (market-wide risk). When the 2008 financial crisis hit, nearly every stock fell simultaneously — no amount of diversification within equities could protect investors. True risk reduction requires diversifying across asset classes (stocks, bonds, real estate, commodities) whose systematic risks differ.',
        'A higher return always means a better investment. Return must always be evaluated relative to risk taken. A fund that returned 25% last year by concentrating in speculative assets is not necessarily better than one returning 12% from a diversified portfolio — the former may have ten times the volatility. Risk-adjusted metrics like the Sharpe ratio (excess return ÷ standard deviation) provide a fairer comparison.',
        'Bonds are completely safe investments. While U.S. government bonds carry no default risk (the U.S. government has never defaulted on dollar obligations), they carry significant interest rate risk. When interest rates rise, existing bond prices fall — a bond paying 3% becomes less valuable when new bonds pay 5%. In 2022, the Bloomberg U.S. Aggregate Bond Index fell approximately 13%, its worst year in four decades, because the Federal Reserve rapidly raised interest rates from near zero to over 4%.',
      ],
      examinerTip: `DECA Personal Financial Literacy and Financial Services scenarios frequently involve advising a client on their investment portfolio. The highest-scoring responses always tailor the recommendation to the client's specific circumstances — particularly their time horizon and risk tolerance. A 25-year-old saving for retirement can absorb equity volatility and should be heavily in stocks; a 62-year-old five years from retirement cannot afford a 40% market crash and should hold more bonds and cash. Always begin your DECA role-play by identifying these two factors explicitly before recommending any specific asset allocation, because judges are trained to evaluate whether you matched the recommendation to the client rather than giving generic advice.`,
      didYouKnow: `John Bogle launched the world's first index fund available to individual investors — the Vanguard 500 Index Fund — in 1976. On its opening day, the fund raised only $11.3 million, far short of its $150 million target, and was mockingly called "Bogle's Folly" by Wall Street professionals who believed active management would always dominate. By 2024, Vanguard had grown to manage over $9 trillion in assets, and passive index funds collectively held more U.S. equity assets than active funds for the first time in history. The "folly" turned out to be one of the most consequential financial innovations of the 20th century.`,
      isStub: false,
      thinkAboutIt: {
        question: `An investor tells you: "Bonds are risk-free, so I'm putting my entire retirement portfolio into 10-year U.S. Treasury bonds — I can't afford to lose money." She is 30 years old and does not plan to retire for 35 years. Using the distinction between different types of risk covered in this lesson, evaluate whether an all-bond portfolio is actually the safest choice for her situation.`,
        answer: `The investor is conflating "risk-free" with "risk-free in every sense," which is a mistake. U.S. Treasury bonds do carry essentially zero default risk — the government has never failed to pay dollar-denominated obligations — but they are not free of interest rate risk (bond prices fall when rates rise, as seen when the Bloomberg Aggregate Bond Index fell roughly 13% in 2022) or inflation/purchasing-power risk (a fixed coupon loses real value every year inflation exceeds the bond's yield). More importantly for a 30-year-old with a 35-year horizon, an all-bond portfolio carries a large and often overlooked risk: opportunity risk, the near-certainty of forgoing the equity risk premium that stocks have historically delivered over any multi-decade period. Because her time horizon is long enough to ride out the S&P 500's periodic 20-40% drawdowns and still recover — history shows no 20-year rolling period with negative stock returns — holding only bonds would very likely leave her with a substantially smaller nest egg at retirement than a diversified stock-heavy portfolio, even though the bond portfolio "feels" safer year to year. A sounder recommendation would be a glide-path strategy: predominantly stocks (e.g., 80-90%) now, while she has decades to absorb volatility, gradually shifting toward bonds as she approaches retirement age and her capacity to withstand a downturn shrinks.`,
      },
    },
    flashcards: [
      {
        id: 'dc3-l3-fc1',
        front: 'What is the risk-return tradeoff and why does it exist?',
        back: 'The risk-return tradeoff states that investments with higher expected returns must carry higher risk (volatility or probability of loss). It exists because rational investors will not voluntarily accept additional risk without additional expected compensation. If a risky asset offered the same return as a safe one, everyone would sell the risky asset until its price fell enough (and expected return rose enough) to attract buyers again — this arbitrage keeps risk and return positively linked.',
        tags: ['DECA', 'finance', 'risk-return', 'investing'],
      },
      {
        id: 'dc3-l3-fc2',
        front: 'How do stocks and bonds differ in terms of investor rights, return mechanism, and typical risk level?',
        back: 'Stocks (equities) represent ownership — shareholders vote on corporate governance, receive dividends (if paid), and gain from price appreciation, but absorb losses if the company struggles. Bonds represent debt — bondholders receive contractual fixed coupon payments and principal repayment at maturity, and rank senior to shareholders in bankruptcy. Stocks historically deliver higher long-run returns (~10% annually for the S&P 500) with far higher volatility (~17% annual standard deviation); investment-grade bonds deliver lower returns (~5%) with much lower volatility.',
        tags: ['DECA', 'finance', 'stocks', 'bonds', 'asset-classes'],
      },
      {
        id: 'dc3-l3-fc3',
        front: 'Why do index funds consistently outperform most actively managed funds over long periods?',
        back: 'Three structural reasons: (1) Fees — index fund expense ratios (often 0.03–0.10%) compound into massive cost advantages over active fund fees (often 0.75–1.5%). (2) Market efficiency — public information is rapidly priced in, leaving little consistent edge for active managers. (3) Zero-sum competition — for every active manager outperforming, another underperforms; after fees, the average active manager must lose to the index. Studies consistently show 80–90% of active funds underperform their benchmark index over 15-year periods net of fees.',
        tags: ['DECA', 'finance', 'index-funds', 'passive-investing'],
      },
    ],
    lessonAssignment: {
      prompt: `A DECA Personal Financial Literacy client has $120,000 to invest for retirement, which is 25 years away. She describes herself as having a moderate risk tolerance. You are given the following historical average annual returns and volatility (standard deviation) for two asset classes:

S&P 500 (stocks): 10.1% average return, 17% standard deviation
U.S. Bonds: 5.1% average return, 8% standard deviation

She is considering a 70% stocks / 30% bonds portfolio allocation.

(a) Calculate the expected annual return of the 70/30 portfolio. [4 marks]

(b) Assuming no additional contributions, calculate the future value of her $120,000 after 25 years at the 70/30 portfolio's expected return. [5 marks]

(c) Explain, using the concept of correlation and diversification, why the 70/30 portfolio's actual volatility is lower than a simple weighted average of the two asset classes' individual standard deviations (0.70 × 17% + 0.30 × 8% = 14.3%). [5 marks]

(d) Given her 25-year time horizon and moderate risk tolerance, justify whether the 70/30 allocation is appropriate, or recommend an alternative allocation, explicitly referencing the risk-return tradeoff. [6 marks]`,
      rubric: `(a) Expected Return = (0.70 × 10.1%) + (0.30 × 5.1%) = 7.07% + 1.53% = 8.6% (correct weighting method 2 pts, correct final answer 2 pts). Total: 4 pts.

(b) FV = $120,000 × (1.086)²⁵ ≈ $120,000 × 7.87 ≈ $944,000 (correct formula application 2 pts, answer within reasonable rounding of ~$940,000-$950,000 for 3 pts). Total: 5 pts.

(c) Full marks require explaining that because stock and bond returns are not perfectly (positively) correlated — bonds often hold steady or rise when stocks fall, particularly in growth scares — the portfolio's combined volatility is reduced below the naive weighted average, since the two assets' losses and gains partially offset one another rather than compounding (3 pts for correct correlation reasoning, 2 pts for connecting it explicitly to why the weighted-average figure of 14.3% overstates true portfolio risk). Total: 5 pts.

(d) Full marks require: recognition that a 25-year horizon is long enough to absorb equity volatility and recover from downturns (2 pts); explicit reference to the risk-return tradeoff — accepting more short-term volatility in stocks is compensated by materially higher expected long-run returns (2 pts); and a clear, justified recommendation (accepting 70/30 or proposing a modestly more aggressive/conservative split with reasoning tied to "moderate" risk tolerance) (2 pts). Total: 6 pts.

Grand total: 20 marks.`,
      exampleTopics: [
        'Calculate a blended portfolio expected return as a weighted average of component asset returns.',
        'Apply the future value formula to project long-term retirement portfolio growth.',
        'Explain how imperfect correlation between asset classes reduces portfolio volatility below the naive weighted-average standard deviation.',
        'Tailor an asset allocation recommendation to a specific time horizon and risk tolerance rather than giving generic advice.',
      ],
    },
    quiz: [
      {
        id: 'dc3-l3-q1',
        type: 'mcq',
        question: 'An investor holds a portfolio consisting entirely of shares in one company. According to portfolio theory, which type of risk is she exposed to that could be easily eliminated?',
        options: [
          'Unsystematic (company-specific) risk, which can be eliminated through diversification across many securities.',
          'Systematic (market-wide) risk, which affects all assets simultaneously and cannot be diversified away.',
          'Interest rate risk, which is unique to bond investments and does not apply to equities.',
          'Liquidity risk, which is automatically eliminated when holding shares in a publicly traded company.',
        ],
        correctAnswer: 0,
        explanation: 'Unsystematic risk includes company-specific events — management failures, product recalls, competitive disruption — that affect only one firm (or a small group). Holding a single stock exposes the investor to the full magnitude of this avoidable risk. Diversifying across 30+ stocks in different industries eliminates most unsystematic risk. Systematic risk (recessions, interest rate shifts) affects the whole market and cannot be diversified away within equities.',
        marks: 1,
        difficulty: 'easy',
      },
      {
        id: 'dc3-l3-q2',
        type: 'mcq',
        question: 'A 30-year-old is saving for retirement at age 65. She has a high risk tolerance and a 35-year time horizon. Which portfolio allocation is most consistent with financial planning best practices?',
        options: [
          'Approximately 80–90% in diversified equities (domestic and international stocks) and 10–20% in bonds, rebalancing periodically.',
          'Approximately 80% in short-term government bonds and 20% in stocks to protect against near-term market crashes.',
          '100% in a single high-performing sector ETF from the past 5 years to maximize expected returns.',
          '50% in cash and 50% in gold to hedge against inflation over the 35-year period.',
        ],
        correctAnswer: 0,
        explanation: 'With a 35-year horizon and high risk tolerance, equities are appropriate because the time horizon is long enough to recover from market downturns (stocks have never delivered negative returns over any 20+ year period in U.S. history). Heavy bond allocation at age 30 sacrifices the equity risk premium unnecessarily. Single-sector concentration violates diversification principles. Cash and gold underperform equities dramatically over multi-decade periods historically.',
        marks: 1,
        difficulty: 'easy',
      },
      {
        id: 'dc3-l3-q3',
        type: 'mcq',
        question: 'Which statement best explains why adding an asset with a low (or negative) correlation to an existing portfolio is valuable, even if that asset has a lower individual expected return?',
        options: [
          'Low-correlation assets reduce portfolio volatility without proportionally reducing expected return, improving the risk-adjusted performance of the combined portfolio.',
          'Assets with lower expected returns always have lower risk, so adding them automatically makes the portfolio safer.',
          'Portfolio diversification only works when all assets have exactly zero correlation — any positive correlation negates the benefit.',
          'Adding any additional asset to a portfolio always reduces both risk and expected return equally.',
        ],
        correctAnswer: 0,
        explanation: 'When assets are imperfectly correlated, their losses do not coincide perfectly — when one falls, the other may not fall as much (or may even rise). This reduces portfolio standard deviation (risk) by more than it reduces weighted-average expected return, improving the Sharpe ratio. Option B conflates return and risk — they are related but not perfectly so. Diversification benefits exist for any correlation below +1.0, not only at zero. Option D is incorrect: adding assets can reduce risk while preserving expected return, or sometimes increase expected return.',
        marks: 1,
        difficulty: 'higher',
      },
    ],
  },

  // ── Lesson 4: Business Accounting Basics ──────────────────────────────────────
  {
    id: 'dc3-l4',
    moduleId: 'dc3-finance',
    title: 'Business Accounting Basics',
    description: 'Master debits and credits, journal entries, accounts receivable/payable, and break-even analysis with worked examples.',
    order: 4,
    estimatedMinutes: 42,
    tags: ['DECA', 'accounting', 'debits-credits', 'journal-entries', 'break-even', 'receivables', 'payables'],
    content: {
      conceptualExplanation: `Accounting is the language of business — a precise, rule-governed system for recording, classifying, and reporting financial transactions. The double-entry accounting system, developed in 15th-century Italy, requires that every transaction be recorded in at least two accounts with equal debits and credits, ensuring the accounting equation (Assets = Liabilities + Equity) always stays in balance. A debit is simply a left-side entry; a credit is a right-side entry. Whether a debit increases or decreases an account depends on the account type. The mnemonic DEAD CLIC summarizes the rules: Debits increase Expenses, Assets, and Dividends; Credits increase Liabilities, Income, and Capital (equity). When a business pays cash to purchase office supplies: debit Office Supplies (asset increases) and credit Cash (asset decreases). Both sides of the accounting equation remain balanced, and both accounts change by the same amount.\n\nA journal entry is the formal record of a transaction, showing the date, accounts debited and credited, amounts, and a brief description. Journal entries are posted to the general ledger — the master record of all account balances — and periodically summarized into financial statements. Consider a business that sells $5,000 worth of goods on credit (customer will pay later): Debit Accounts Receivable $5,000 (asset increases — we are owed money) and Credit Sales Revenue $5,000 (income increases). When the customer pays 30 days later: Debit Cash $5,000 (asset increases) and Credit Accounts Receivable $5,000 (asset decreases — the receivable is collected). Accounts receivable represents money owed by customers; accounts payable represents money owed by the business to its suppliers. Together, these "current" items are the lifeblood of working capital management — how quickly a business collects from customers versus how long it takes to pay suppliers significantly affects its cash position even if the income statement looks healthy.\n\nBreak-even analysis determines how many units a business must sell — or how much revenue it must generate — before it covers all its costs and begins earning a profit. Fixed costs (rent, salaries, insurance) remain constant regardless of output volume; variable costs (raw materials, sales commissions) change proportionally with units sold. Contribution margin per unit = selling price per unit − variable cost per unit. Break-even units = Fixed Costs ÷ Contribution Margin per unit. If a business has $120,000 in monthly fixed costs, sells each unit for $80, and incurs $50 in variable costs per unit, the contribution margin is $30 per unit, and break-even = $120,000 ÷ $30 = 4,000 units per month. Above 4,000 units, every additional unit contributes $30 directly to profit. Break-even in revenue terms = Break-even units × price = 4,000 × $80 = $320,000 per month, or equivalently, Fixed Costs ÷ Contribution Margin Ratio (= $30/$80 = 37.5%), so $120,000 ÷ 0.375 = $320,000.`,
      realWorldHook: `When Tesla launched its Model 3 in 2017, CEO Elon Musk famously declared the company was in "manufacturing hell." The core accounting issue was contribution margin: Tesla needed to produce and sell a high enough volume of Model 3s at sufficient margin to cover its enormous fixed costs — the Gigafactory, engineering teams, and corporate overhead. In Q3 2018, Tesla finally hit Model 3 production of ~5,000 units per week, and the business swung from massive losses to its first sustained quarterly profit. The break-even analysis was playing out in real time on a global stage: every unit below the break-even threshold added to losses; every unit above it generated contribution toward fixed cost recovery and ultimately profit. Today, Tesla's automotive gross margin typically runs 18–25%, and understanding that margin in the context of its fixed cost structure explains how production volume directly drives profitability.`,
      interactiveElement: `Journal Entry Practice:

Transaction 1 — A company borrows $50,000 from a bank.
  DEBIT: Cash $50,000 (asset increases)
  CREDIT: Bank Loan Payable $50,000 (liability increases)
  Check: Assets +$50,000, Liabilities +$50,000 ✓

Transaction 2 — The company purchases $8,000 of inventory on credit (will pay supplier later).
  DEBIT: Inventory $8,000 (asset increases)
  CREDIT: Accounts Payable $8,000 (liability increases)

Transaction 3 — Sells inventory (cost $5,000) for $12,000 cash.
  DEBIT: Cash $12,000 | CREDIT: Sales Revenue $12,000
  DEBIT: Cost of Goods Sold $5,000 | CREDIT: Inventory $5,000
  (Two separate but simultaneous entries — recording revenue and removing inventory cost.)

Break-even exercise: Fixed costs = $90,000/month. Price = $60/unit. Variable cost = $42/unit.
  Contribution margin = $60 − $42 = $18/unit.
  Break-even = $90,000 ÷ $18 = 5,000 units/month.
  What if price rises to $65? CM = $65 − $42 = $23. Break-even = $90,000 ÷ $23 = 3,913 units — a $5 price increase cuts break-even volume by 22%.`,
      vocabulary: [
        {
          term: 'Contribution Margin',
          definition: 'Revenue per unit minus variable cost per unit. Represents the amount each additional unit sold contributes toward covering fixed costs and, once break-even is passed, generating profit.',
          example: 'A coffee shop charges $5.00 per latte and spends $1.75 in variable costs (coffee, milk, cup, lid). Contribution margin = $3.25. The shop needs fixed costs ÷ $3.25 lattes per month to break even. Every latte above break-even adds $3.25 directly to operating profit.',
        },
        {
          term: 'Accounts Payable',
          definition: 'Short-term liabilities representing amounts owed to suppliers for goods or services received but not yet paid. Appears as a current liability on the balance sheet.',
          example: 'A restaurant receives a $3,000 food supply delivery on January 15, payment due February 14. From January 15 to February 14, $3,000 sits in Accounts Payable. On payment date: Debit Accounts Payable $3,000, Credit Cash $3,000.',
        },
        {
          term: 'Working Capital',
          definition: 'Current assets minus current liabilities. Measures the liquid resources available for day-to-day operations. Positive working capital means the business can fund its short-term obligations from its short-term assets.',
          example: 'A company with $400,000 in current assets (cash, receivables, inventory) and $250,000 in current liabilities (payables, short-term debt) has working capital of $150,000. If working capital turns negative — current liabilities exceed current assets — the business faces immediate liquidity risk.',
        },
      ],
      deeperDive: `The accounting cycle refers to the sequence of steps from recording transactions to producing financial statements. After journal entries are posted to the general ledger, an unadjusted trial balance is prepared to verify that total debits equal total credits (a necessary but not sufficient condition for accuracy). Adjusting entries are then made for items that have occurred but have not yet been recorded — the most important being: accrued revenues (earned but not yet billed), accrued expenses (incurred but not yet paid), deferred revenues (cash received before the service is delivered, creating a liability), and depreciation. Depreciation systematically allocates the cost of a long-term asset over its useful life: if equipment costs $60,000 and has a 5-year life with zero salvage value (straight-line method), depreciation = $60,000 ÷ 5 = $12,000 per year. This is a non-cash expense — it reduces net income and increases accumulated depreciation (reducing the asset's book value on the balance sheet) without touching the cash account.\n\nRatio analysis built from accounting data extends into managerial decision-making. The days sales outstanding (DSO) ratio measures how quickly a company collects from customers: DSO = (Accounts Receivable ÷ Annual Revenue) × 365. If a company has $500,000 in receivables and $6,000,000 in annual revenue, DSO = ($500,000 ÷ $6,000,000) × 365 = 30.4 days — the company collects within about a month, which is healthy. Similarly, days payable outstanding (DPO) = (Accounts Payable ÷ COGS) × 365 measures how long the company takes to pay suppliers. A high DPO can mean the company is effectively using free financing from suppliers — or it may signal inability to pay on time. Monitoring DSO and DPO together reveals the cash conversion cycle: how long cash is tied up in the operating cycle before returning as collected revenue.`,
      commonMisconceptions: [
        '"Debit" always means a decrease and "credit" always means an increase. This is one of the most persistent misconceptions in accounting. In fact, debits increase asset, expense, and dividend accounts, while credits increase liability, equity, and revenue accounts — and vice versa for decreases. The confusion arises because bank statements use "credit" to mean deposits (from the bank\'s perspective, your deposit increases their liability to you). Accounting debits and credits are always from the business\'s own perspective.',
        'Break-even analysis tells you the profit-maximizing output level. Break-even only identifies the output level where profit equals zero — neither the minimum nor the optimal production quantity. Profit is maximized where marginal revenue equals marginal cost, which is a separate calculation. Break-even analysis is a risk management tool (how much must I sell to not lose money?) rather than an optimization tool.',
        'A company recording a large depreciation expense is losing cash. Depreciation is entirely non-cash — it reduces net income and reduces the book value of an asset but does not involve any cash payment during the period. Cash was spent when the asset was purchased. This is why depreciation is added back to net income when computing operating cash flow on the cash flow statement: it reduced reported earnings without reducing actual cash.',
      ],
      examinerTip: `DECA Accounting Applications event judges expect competitors to be fluent in the mechanics of double-entry bookkeeping, not just the vocabulary. If a role-play gives you a transaction to evaluate, always write out the journal entry explicitly — accounts debited, accounts credited, amounts — even if the judge has not explicitly asked for it. This demonstrates technical mastery and separates you from competitors who speak in generalities. For break-even scenarios, calculate the answer in both units and in revenue dollars, since the examiner may have intended either interpretation. Stating both shows thoroughness. Always check your journal entries by confirming debits equal credits, and confirm your break-even calculation by substituting it back: (break-even units × price) − (break-even units × variable cost) − fixed costs should equal zero.`,
      didYouKnow: `The double-entry bookkeeping system was first formally described by Luca Pacioli, an Italian friar and mathematician, in his 1494 book "Summa de Arithmetica, Geometria, Proportioni et Proportionalità." Pacioli did not invent the system — Venetian merchants had been using it for decades — but his description codified and standardized it, making it teachable and transferable. The core rules he described in 1494 are essentially the same rules taught in accounting classes today, more than 530 years later, making double-entry bookkeeping one of the most durable intellectual inventions in human history.`,
      isStub: false,
      thinkAboutIt: {
        question: `A small business owner says: "My accountant recorded $18,000 of depreciation expense this year, and now my net income looks $18,000 lower — but my bank balance didn't drop by a single dollar. Either my accountant made a mistake, or accounting is disconnected from reality." Is the owner right? Use the distinction between accrual accounting and cash movement to explain what is actually happening, and identify one way in which recording depreciation can actually help the business's cash position.`,
        answer: `The owner is not right, and the accountant made no error — this is exactly how depreciation is supposed to work under accrual accounting. When the underlying asset was purchased, the cash left the business at that time, in full, as a single transaction. Depreciation does not represent a new cash outflow; it simply allocates that already-spent cost across the asset's useful life on the income statement, in keeping with the matching principle, which requires expenses to be recognized in the periods that benefit from the asset rather than all at once. The journal entry — Debit Depreciation Expense, Credit Accumulated Depreciation — touches no cash account at all, which is precisely why depreciation is added back to net income when calculating operating cash flow on the cash flow statement. Far from being disconnected from reality, this treatment gives a more accurate picture of profitability by spreading the cost of a long-lived asset over the years it actually helps generate revenue. There is also a genuine cash benefit hiding in the depreciation expense: because it reduces taxable income, it lowers the business's tax bill in the current year — a "depreciation tax shield" — without requiring any cash outlay itself, meaning the business keeps more actual cash than it would if depreciation were ignored for tax purposes.`,
      },
    },
    flashcards: [
      {
        id: 'dc3-l4-fc1',
        front: 'Using double-entry accounting, record the journal entry for a $15,000 sale made on credit (customer will pay in 30 days).',
        back: 'DEBIT: Accounts Receivable $15,000 (asset increases — customer owes us money)\nCREDIT: Sales Revenue $15,000 (revenue increases — we earned income)\nWhen the cash is collected 30 days later: DEBIT Cash $15,000 / CREDIT Accounts Receivable $15,000 (asset converts from receivable to cash). Total debits always equal total credits in each entry.',
        tags: ['DECA', 'accounting', 'journal-entries', 'debits-credits'],
      },
      {
        id: 'dc3-l4-fc2',
        front: 'A business has fixed costs of $200,000/month, sells its product for $100/unit, and incurs $60 in variable costs per unit. What is the break-even point in units and in revenue?',
        back: 'Contribution margin per unit = $100 − $60 = $40. Break-even units = $200,000 ÷ $40 = 5,000 units. Break-even revenue = 5,000 × $100 = $500,000. Alternatively: Contribution margin ratio = $40 ÷ $100 = 40%. Break-even revenue = $200,000 ÷ 0.40 = $500,000. Beyond 5,000 units, each additional unit adds $40 directly to operating profit.',
        tags: ['DECA', 'accounting', 'break-even', 'contribution-margin'],
      },
      {
        id: 'dc3-l4-fc3',
        front: 'What does the DEAD CLIC mnemonic represent in accounting, and give one example of each side.',
        back: 'DEAD: Debits increase Expenses, Assets, and Dividends. CLIC: Credits increase Liabilities, Income (Revenue), and Capital (Equity). Example — paying cash for rent: DEBIT Rent Expense (expense increases) / CREDIT Cash (asset decreases). Example — owner invests cash in business: DEBIT Cash (asset increases) / CREDIT Owner\'s Capital (equity increases).',
        tags: ['DECA', 'accounting', 'debits-credits', 'DEAD-CLIC'],
      },
    ],
    lessonAssignment: {
      prompt: `Trailhead Outfitters, a retail store, is launching a new product line. Fixed costs to launch (added rent and staffing) are $60,000 per year. Each unit sells for $45 and costs $27 in variable costs to produce and deliver. During the same year, the store also: (i) purchased $15,000 of inventory on credit from a supplier, and (ii) sold inventory that cost $9,000 for $16,000 cash.

(a) Write the journal entries (debits and credits, with account names and amounts) for both the $15,000 inventory purchase on credit and the $16,000 cash sale of the $9,000-cost inventory. [6 marks]

(b) Calculate the contribution margin per unit for the new product line, and the break-even point in both units and revenue dollars. [6 marks]

(c) The store negotiates a lower supplier price, cutting variable cost per unit to $22. Recalculate the break-even point in units and state the percentage change from your answer in part (b). [4 marks]

(d) The store also records $10,000 of depreciation on new store fixtures used for the product line. Explain how this depreciation affects the break-even calculation differently than it affects the cash flow statement. [4 marks]`,
      rubric: `(a) Inventory purchase: Debit Inventory $15,000 / Credit Accounts Payable $15,000 (correct accounts and amounts, 2 pts; correct debit/credit direction, 1 pt). Sale: Debit Cash $16,000 / Credit Sales Revenue $16,000 AND Debit Cost of Goods Sold $9,000 / Credit Inventory $9,000 — both entries required (2 pts for the revenue entry, 1 pt for the COGS/inventory entry). Total: 6 pts.

(b) Contribution Margin = $45 − $27 = $18/unit (2 pts). Break-even units = $60,000 ÷ $18 = 3,334 units, rounded up (2 pts). Break-even revenue = 3,334 × $45 ≈ $150,000, or equivalently $60,000 ÷ (18/45 = 40% CM ratio) = $150,000 (2 pts). Total: 6 pts.

(c) New Contribution Margin = $45 − $22 = $23/unit. New break-even units = $60,000 ÷ $23 = 2,609 units, rounded up (2 pts). Percentage change = (3,334 − 2,609) ÷ 3,334 ≈ a 21.7% decrease in break-even volume (2 pts). Total: 4 pts.

(d) Full marks require explaining that depreciation is a fixed cost and must be added to total fixed costs used in the break-even formula (raising the break-even point in units), whereas on the cash flow statement depreciation is a non-cash expense that is added back to net income and has zero cash effect — meaning the store's true break-even cash requirement is lower than its accounting break-even point (4 pts; 2 pts for each correct half of the distinction).

Grand total: 20 marks.`,
      exampleTopics: [
        'Write correctly balanced journal entries (debits = credits) for an inventory purchase on credit and a cash sale with COGS recognition.',
        'Calculate contribution margin and break-even point in both units and revenue dollars from price and cost data.',
        'Quantify how a variable cost reduction changes the break-even point, expressing the change as a percentage.',
        'Distinguish how a non-cash fixed cost like depreciation affects accounting break-even analysis versus actual cash flow.',
      ],
    },
    quiz: [
      {
        id: 'dc3-l4-q1',
        type: 'mcq',
        question: 'A company pays $24,000 in cash for a one-year insurance policy effective January 1. Using the correct accounting treatment, what is the journal entry on January 1?',
        options: [
          'Debit Prepaid Insurance $24,000; Credit Cash $24,000 — recording an asset because the insurance benefit has not yet been consumed.',
          'Debit Insurance Expense $24,000; Credit Cash $24,000 — recording the full expense immediately because cash was paid.',
          'Debit Cash $24,000; Credit Prepaid Insurance $24,000 — recording the cash inflow from the insurance policy.',
          'Debit Accounts Payable $24,000; Credit Cash $24,000 — recording the payment of a liability.',
        ],
        correctAnswer: 0,
        explanation: 'Paying in advance for a future benefit creates a prepaid asset — the company has paid but not yet received the service. Prepaid Insurance (an asset) is debited and Cash (an asset) is credited. Each month, $2,000 ($24,000 ÷ 12) is transferred from Prepaid Insurance to Insurance Expense as the policy coverage is consumed. Recording the entire $24,000 as an expense on day one violates the matching principle — expenses must be recognized in the period the benefit is consumed.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc3-l4-q2',
        type: 'mcq',
        question: 'A bakery has monthly fixed costs of $45,000, sells each cake for $75, and has variable costs of $30 per cake. What is the break-even quantity in units?',
        options: [
          '1,000 cakes, calculated as $45,000 ÷ ($75 − $30) = $45,000 ÷ $45.',
          '600 cakes, calculated as $45,000 ÷ $75.',
          '1,500 cakes, calculated as $45,000 ÷ $30.',
          '750 cakes, calculated as $45,000 ÷ ($75 − $30/2).',
        ],
        correctAnswer: 0,
        explanation: 'Break-even units = Fixed Costs ÷ Contribution Margin per unit = $45,000 ÷ ($75 − $30) = $45,000 ÷ $45 = 1,000 units. Option B divides by price alone (ignoring variable costs). Option C divides by variable cost alone (incorrectly treating the entire variable cost as the contribution). Option D uses an incorrect formula variant.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc3-l4-q3',
        type: 'mcq',
        question: 'Which statement correctly describes the effect of recording $10,000 of depreciation expense for the year?',
        options: [
          'Net income decreases by $10,000 and the book value of the asset decreases by $10,000, but cash is unaffected because depreciation is a non-cash expense.',
          'Cash decreases by $10,000 and the asset account decreases by $10,000, reflecting the cash payment for wear and tear.',
          'Net income decreases by $10,000 and accounts payable increases by $10,000, because depreciation represents a future cash obligation.',
          'Both net income and cash decrease by $10,000, making depreciation equivalent in effect to a cash operating expense.',
        ],
        correctAnswer: 0,
        explanation: 'Depreciation is entirely non-cash. The journal entry is: Debit Depreciation Expense $10,000 (income decreases) / Credit Accumulated Depreciation $10,000 (a contra-asset that reduces the asset\'s book value on the balance sheet). No cash account is involved. Cash was spent when the asset was originally purchased, not in subsequent depreciation periods. This is why depreciation is added back to net income on the cash flow statement — it reduced income but not cash.',
        marks: 1,
        difficulty: 'easy',
      },
    ],
  },

  // ── Lesson 5: DECA Finance Events Prep ───────────────────────────────────────
  {
    id: 'dc3-l5',
    moduleId: 'dc3-finance',
    title: 'DECA Finance Events Prep',
    description: 'Master the formats, performance indicators, and judging criteria for Personal Financial Literacy, Financial Services, and Accounting Applications events.',
    order: 5,
    estimatedMinutes: 40,
    tags: ['DECA', 'competition', 'Personal-Financial-Literacy', 'Financial-Services', 'Accounting-Applications', 'judging', 'role-play'],
    content: {
      conceptualExplanation: `Three DECA events are most directly aligned with the financial literacy and accounting content in this module: Personal Financial Literacy (PFL), Financial Services (FS), and Accounting Applications (ACCT). Each has a distinct format, target audience, and performance indicator set, so the first preparation step is understanding which event you are competing in — and downloading the current year's performance indicator list from DECA's official website. PFL is structured as two role-play scenarios plus a cluster exam, and its scenarios focus on advising individuals and households on budgeting, credit, insurance, investing, tax planning, and retirement. The client in a PFL scenario is almost always a person — a young professional, a recent graduate, a parent planning for college costs — not a business, which shapes the entire tone of the presentation.\n\nFinancial Services targets business finance decision-making rather than personal finance. FS scenarios involve corporate contexts: evaluating a capital expenditure, analyzing a company's financial health, recommending a banking product, or advising on business credit strategy. The performance indicators tested span financial statement analysis, business credit, investment products, banking services, and the economic environment in which financial decisions are made. Accounting Applications (ACCT) is the most technically demanding of the three; it tests accounting procedures, financial analysis, and business decision-making grounded in accounting data. ACCT scenarios may involve interpreting financial statements, evaluating internal controls, advising on accounting methods, or analyzing profitability using the cost-volume-profit framework (break-even). All three events share the standard DECA structure: written cluster exam (scored separately) plus role-play scenarios (scored against a performance indicator rubric by a judge playing a business professional).\n\nThe performance indicator rubric for all three events uses a five-criterion scoring structure, with each criterion scored 0–4 for a maximum role-play score of 20. The five criteria typically assess: (1) Demonstrated knowledge and skills (did you address the correct content?), (2) Identified the problem or opportunity (did you diagnose the core issue?), (3) Recommended action plan (did you propose specific, justified actions?), (4) Settled the problem (did you resolve the judge's follow-up concerns?), and (5) Professional and effective manner (did you communicate clearly and credibly?). Judges are trained business professionals — not economics teachers — so they respond to the same signals they would in a real business meeting: clarity, confidence, quantitative grounding, and the ability to adapt when challenged. The gap between a "Proficient" and an "Advanced Exemplary" score on criterion 3 (Recommended Action Plan) is almost always the specificity and justification of the recommendation.`,
      realWorldHook: `DECA's national alumni roster reads like a who's who of American business: it includes executives from Goldman Sachs, Goldman Sachs alumni who became governors, former U.S. Secretaries of Commerce, and tech entrepreneurs. The 2023 DECA International Career Development Conference attracted over 22,000 competitors. Among Personal Financial Literacy competitors, the scenarios consistently mirror real financial planning situations — advising a 22-year-old with $40,000 in student loan debt on debt repayment strategy, or helping a 45-year-old self-employed contractor understand a SEP-IRA. The content is not theoretical: it is the exact advice that certified financial planners give every day, and competitors who understand the underlying principles — compounding, tax-advantaged accounts, insurance risk transfer, credit scoring — consistently outperform those who have memorized talking points.`,
      interactiveElement: `Mock PFL role-play scenario timed drill: You have 10 minutes to prepare and 10 minutes to present.

Scenario: A 28-year-old teacher earns $52,000/year, has $18,000 in student loans at 5.5% interest, $3,200 in a savings account, no retirement savings, and takes home $3,600/month after taxes. She wants to start investing for retirement but is unsure whether to pay off debt or invest first.

Key analysis to prepare:
1. Monthly budget: $3,600 income. Minimum loan payment ≈ $195/month (standard 10-yr repayment on $18,000 at 5.5%).
2. Employer 401(k) match: If available, always contribute to the match first — it is a 50–100% guaranteed instant return.
3. Compare: Loan APR = 5.5% vs. expected market return ≈ 7–10%. Mathematically, investing beats paying extra on the loan — but behavioral finance suggests the certainty of eliminating debt has psychological value.
4. Recommended action plan: Contribute at least enough to the 401(k) to capture any employer match, build emergency fund to 3 months of expenses ($10,800), then split extra cash between extra loan payments and Roth IRA contributions (2024 limit: $7,000).

Examiner follow-up to practice: "Why the Roth IRA over a traditional IRA?" (Tax-free growth and withdrawals in retirement, and at $52,000 income, she is likely in a lower tax bracket now than she may be later — Roth is advantageous.)`,
      vocabulary: [
        {
          term: 'Roth IRA',
          definition: 'An individual retirement account funded with after-tax dollars. Contributions are not tax-deductible, but qualified withdrawals in retirement — including all investment gains — are completely tax-free. Subject to income eligibility limits.',
          example: 'A 25-year-old earning $55,000 contributes $7,000 to a Roth IRA. If that $7,000 grows to $75,000 over 40 years, she withdraws all $75,000 tax-free in retirement. With a traditional IRA, she would owe income tax on the entire $75,000 withdrawal at her retirement tax rate.',
        },
        {
          term: 'Debt-to-Income Ratio (DTI)',
          definition: 'Monthly debt payments divided by gross monthly income, expressed as a percentage. Lenders use DTI to assess a borrower\'s ability to take on additional debt. Most mortgage lenders cap DTI at 43%.',
          example: 'A person earns $5,000/month and has monthly debt payments of $1,500 (car loan $400, student loan $300, credit card minimum $800). DTI = $1,500 ÷ $5,000 = 30%. A mortgage lender sees 30% as acceptable. If credit card payments rose to $1,600, DTI = $2,300 ÷ $5,000 = 46% — above the standard threshold, jeopardizing mortgage approval.',
        },
        {
          term: 'Credit Score (FICO)',
          definition: 'A numerical rating (300–850) summarizing an individual\'s creditworthiness based on payment history (35%), amounts owed (30%), length of credit history (15%), new credit (10%), and credit mix (10%).',
          example: 'A borrower with a 760 FICO score may qualify for a 30-year mortgage at 6.8% interest. The same loan for a borrower with a 620 score might carry a 8.4% rate. On a $300,000 mortgage, that 1.6% rate difference costs approximately $105,000 more in total interest over the life of the loan.',
        },
      ],
      deeperDive: `The Personal Financial Literacy event most frequently tests three high-stakes financial planning decisions: retirement savings strategy (401(k) vs. IRA vs. Roth IRA, asset allocation by age), debt management (avalanche method — highest APR first — vs. snowball method — smallest balance first — and when each is appropriate), and insurance adequacy (understanding that insurance is risk transfer, not an investment, and identifying appropriate coverage levels for health, auto, life, and disability). Competitors who can articulate the mathematical basis for each recommendation — not just the talking point — score at Advanced Exemplary. For example, the debt avalanche method saves more money in total interest (always, mathematically), but the snowball method provides behavioral reinforcement that helps some people stay on track — acknowledging both and tailoring the recommendation to the client's psychology is the mark of a sophisticated advisor and a top DECA competitor.\n\nFor Financial Services and Accounting Applications events, the most discriminating skill — the one that most reliably separates state qualifiers from national finalists — is the ability to perform rapid quantitative analysis under time pressure and then communicate those calculations in plain language the judge (playing a business executive) can immediately understand. Practice calculating break-even points, gross margins, current ratios, and NPVs from raw numbers given in a scenario card. Then practice narrating those calculations aloud: "Based on the figures provided, the company's current ratio of 0.9 is below 1.0, which means it cannot fully cover this year's obligations from liquid assets. I recommend the following three actions to address the liquidity gap..." That structure — observation, quantitative evidence, recommendation — is the template for a high-scoring DECA Finance response at any level.`,
      commonMisconceptions: [
        'In a PFL scenario, always advising the client to invest rather than pay off debt is universally correct. The right answer depends on the interest rate on the debt versus the expected investment return, and on the client\'s risk tolerance and psychological relationship with debt. If the debt carries a 20% APR (credit card), paying it off is a guaranteed 20% after-tax return — better than virtually any investment. If the debt is at 3.5% (low-rate mortgage), investing in a diversified portfolio with higher expected returns makes mathematical sense for most clients.',
        'The cluster exam portion of a DECA finance event is less important than the role-play. Both components count toward the total score, and in many competitions the exam score is given equal or even greater weight. At national competition, the cluster exam score determines whether you qualify to give the role-play at all — only competitors above a certain exam threshold advance. Neglecting exam preparation in favor of role-play practice is a common strategic error that ends many competitors\' runs before they reach the judging room.',
        'Judges in DECA finance events are looking for complex financial terminology and technical jargon. In reality, judges are business professionals who value clarity over complexity. Using a technical term correctly is valuable; using it incorrectly or burying the key recommendation in jargon is penalized. The gold standard is to explain a complex concept (like present value or debt-to-income ratio) in one clear sentence that a non-specialist can grasp, then demonstrate you understand the underlying mechanics when the judge probes deeper.',
      ],
      examinerTip: `For all three DECA finance events, the single highest-return preparation practice is recording yourself giving a mock role-play and then watching it back. Most competitors are shocked by how many filler words they use ("um," "like," "basically"), how often they trail off at the end of sentences, and how generic their action plans sound when heard from the outside. Use the official DECA score sheet to grade yourself against each criterion after every practice. Identify your consistently weakest criterion — for most competitors it is either "Identified the Problem" (they address symptoms rather than root causes) or "Recommended Action Plan" (generic rather than specific and quantified) — and drill specifically on that weakness in the two weeks before competition. Fifteen targeted mock role-plays with feedback will outperform forty hours of content review every time.`,
      didYouKnow: `DECA was founded in 1946 as the Distributive Education Clubs of America, initially focused on retail and distribution careers. The organization dropped "Distributive Education" from its name in 1994 and rebranded simply as DECA, reflecting its expansion into finance, marketing, hospitality, entrepreneurship, and management. Today, DECA has over 230,000 members across more than 5,200 chapters in the United States and internationally — making it one of the largest student business organizations in the world. The Personal Financial Literacy event was added to the DECA lineup in the early 2000s in response to growing recognition that financial literacy skills are a universal career and life competency, not just relevant to students pursuing finance careers.`,
      isStub: false,
      thinkAboutIt: {
        question: `In a practice round, a competitor spends 8 of her 10 presentation minutes reciting every financial concept from her class notes, then rushes through a generic recommendation in the final 90 seconds and has no time left when the judge asks a follow-up question. She clearly knows the content, yet scores low on "Recommended Action Plan" and "Settled the Problem." Using DECA's five-criterion rubric, diagnose what went wrong and explain how she should restructure her time.`,
        answer: `Knowing the content is necessary but not sufficient for a high DECA score, because the rubric explicitly rewards how that knowledge is deployed, not merely whether it is possessed. By spending 80% of her time reciting general concepts, she likely scored acceptably on "Demonstrated Knowledge and Skills," but she left almost no time to build a specific, quantified, scenario-tailored recommendation — which is exactly what "Recommended Action Plan" requires, and generic content review does not substitute for it. Worse, because she ran out of time entirely, she had nothing left to respond to the judge's follow-up question, directly costing her "Settled the Problem" credit, since that criterion specifically evaluates the ability to handle probing questions with poise and additional justification. The fix is a fundamental restructuring of her time allocation: spend the first 1-2 minutes precisely identifying the core problem using the scenario's own numbers, spend the middle 5-6 minutes building and justifying a specific action plan (not a lecture on background theory), and deliberately reserve the final 2-3 minutes as a buffer — either to preemptively address likely follow-up questions or to leave room to respond to the judge in real time. Reciting known content is the lowest-value use of limited role-play minutes precisely because every competitor at her skill level already knows it; specificity and responsiveness are what actually separate scores.`,
      },
    },
    flashcards: [
      {
        id: 'dc3-l5-fc1',
        front: 'What are the five scoring criteria on a standard DECA Finance role-play score sheet, and which criterion most often separates top competitors?',
        back: 'The five criteria are: (1) Demonstrated knowledge and skills, (2) Identified the problem or opportunity, (3) Recommended action plan, (4) Settled the problem (judge follow-up Q&A), (5) Professional and effective manner. Criterion 3 — Recommended Action Plan — most reliably separates top competitors because it requires specific, quantified, justified recommendations rather than generic best practices. Judges award Advanced Exemplary only when the recommendation is directly tied to the scenario\'s specific numbers and circumstances.',
        tags: ['DECA', 'competition', 'judging', 'role-play'],
      },
      {
        id: 'dc3-l5-fc2',
        front: 'What is the debt avalanche method, and when might the debt snowball method be preferable despite costing more in total interest?',
        back: 'Debt avalanche: Pay minimum on all debts, apply all extra cash to the highest-APR debt first. Mathematically optimal — minimizes total interest paid. Example: With a 22% APR credit card and a 5% student loan, attack the credit card first. Debt snowball: Pay off smallest balance first regardless of APR, for motivational momentum. Preferable when a client has a history of abandoning financial plans — the psychological reinforcement of eliminating individual debts may keep them on track, producing better real-world outcomes than the mathematically optimal approach they abandon after two months.',
        tags: ['DECA', 'PFL', 'debt-management', 'personal-finance'],
      },
      {
        id: 'dc3-l5-fc3',
        front: 'In a DECA PFL role-play, a 30-year-old client asks whether to contribute to a traditional 401(k) or a Roth 401(k). What framework should guide your recommendation?',
        back: 'The key variable is tax rate trajectory: (1) If the client expects to be in a HIGHER tax bracket in retirement than today → Roth (pay taxes now at lower rate, withdraw tax-free later). (2) If the client expects to be in a LOWER tax bracket in retirement → Traditional (deduct now at higher rate, pay lower taxes on withdrawals). (3) If uncertain → split contributions between both to diversify tax risk. Always recommend at least enough contribution to capture any employer match first — it is a guaranteed 50–100% return regardless of the traditional/Roth choice.',
        tags: ['DECA', 'PFL', 'retirement', 'Roth-vs-traditional'],
      },
    ],
    lessonAssignment: {
      prompt: `Prepare a written DECA Personal Financial Literacy role-play response for the following scenario. A 26-year-old graphic designer earns $58,000/year ($3,850 take-home per month). She has $22,000 in student loans at 6% APR, $9,000 in credit card debt at 24% APR, $2,500 in savings, and $400 per month in discretionary income after covering essential expenses. She asks for advice on the order in which to pay off her debts and whether she should start investing now.

(a) Identify the core financial problem(s) in this scenario and rank her three financial priorities (credit card debt, student loans, investing) using APR/expected-return comparison as your justification. [5 marks]

(b) Recommend a specific monthly allocation of her $400 in discretionary income across debt payoff and/or investing, stating exact dollar amounts, and justify the allocation using the concept of guaranteed return versus expected return. [6 marks]

(c) Write two likely judge follow-up questions this scenario would generate in a live role-play, and draft a strong response to each, demonstrating the "Settled the Problem" criterion. [5 marks]

(d) Self-score your response against DECA's five scoring criteria (0-4 each, 20 max), identify your weakest criterion, and explain one specific change that would raise that score. [4 marks]`,
      rubric: `(a) Core problem correctly identified as competing demands on limited discretionary income with debts at very different cost levels (2 pts). Correct priority ranking: (1) credit card debt at 24% APR — highest cost, address first; (2) student loans at 6% APR — moderate cost; (3) investing — expected market return (~7-10%) is lower than the guaranteed 24% return from eliminating credit card debt, but likely exceeds the 6% student loan rate, so should be weighed against loan paydown once the card is cleared (3 pts). Total: 5 pts.

(b) Full marks require a specific dollar allocation (e.g., full $400/month to the credit card until the $9,000 balance is cleared in roughly 22-23 months factoring interest, then redirecting freed-up cash to student loans and/or a Roth IRA) (3 pts) and correct justification that paying off 24% APR debt is a guaranteed 24% after-tax return unmatched by any reliable investment, so it should be fully prioritized before investing or extra loan payments begin (3 pts). Total: 6 pts.

(c) Two plausible, scenario-relevant follow-up questions posed (1 pt each, 2 pts) with strong, specific responses to each that reference scenario figures rather than generic statements (1.5 pts each, 3 pts). Example strong question/response pair: "Why not split the $400 between the credit card and student loans?" → "Splitting delays clearing the higher-cost debt, which continues accruing interest at four times the rate of the student loan, so concentrating payments minimizes total interest paid across both debts." Total: 5 pts.

(d) Correct, honest self-scoring against all five criteria (2 pts) and a specific, actionable improvement identified for the weakest-scoring criterion rather than a vague statement like "be more confident" (2 pts). Total: 4 pts.

Grand total: 20 marks.`,
      exampleTopics: [
        'Rank competing financial priorities by comparing APRs and expected returns rather than by intuition alone.',
        'Translate a debt-payoff/investing recommendation into specific dollar amounts rather than general advice.',
        'Anticipate and rehearse responses to likely judge follow-up questions to strengthen the "Settled the Problem" criterion.',
        'Apply DECA\'s five-criterion rubric for honest self-assessment and targeted improvement.',
      ],
    },
    quiz: [
      {
        id: 'dc3-l5-q1',
        type: 'mcq',
        question: 'In a DECA Personal Financial Literacy role-play, a 24-year-old client has $5,000 in credit card debt at 21% APR and $500 per month of disposable income after essential expenses. She asks whether to invest in her company\'s 401(k) or pay off the credit card first. What is the most financially sound advice?',
        options: [
          'Contribute to the 401(k) only up to the employer match (if any) — a guaranteed 50–100% return — then apply remaining disposable income aggressively to the credit card, because 21% APR is a guaranteed 21% after-tax return that no investment reliably beats.',
          'Put all $500/month into the 401(k) immediately, because tax-advantaged compound growth always outperforms debt repayment.',
          'Pay the minimum on the credit card and invest the remainder, because market returns average 10% annually and beat the 21% APR over the long run.',
          'Pay off the credit card entirely first before contributing a single dollar to any retirement account, because carrying any debt makes investing irrational.',
        ],
        correctAnswer: 0,
        explanation: 'Option A is optimal: capturing any employer 401(k) match is a guaranteed 50–100% return (impossible to beat), then targeting 21% APR credit card debt is the correct priority — paying it down is mathematically a guaranteed 21% after-tax return, which exceeds expected equity returns on a risk-adjusted basis. Option B ignores the guaranteed return of eliminating 21% debt. Option C is mathematically wrong — average market returns of 10% do not reliably exceed a guaranteed 21% cost. Option D ignores the guaranteed employer match benefit, which should never be left on the table.',
        marks: 1,
        difficulty: 'higher',
      },
      {
        id: 'dc3-l5-q2',
        type: 'mcq',
        question: 'Which DECA Finance event would be most appropriate for a student whose role-play scenario involves analyzing a company\'s balance sheet liquidity and recommending whether the firm should seek a short-term line of credit?',
        options: [
          'Financial Services (FS), which covers business credit products, financial statement analysis, and corporate banking decisions.',
          'Personal Financial Literacy (PFL), which focuses on individual and household financial planning.',
          'Accounting Applications (ACCT), which tests accounting procedures and financial record-keeping for individuals.',
          'Principles of Business Administration (PBA), which focuses on general business management concepts.',
        ],
        correctAnswer: 0,
        explanation: 'The scenario involves a corporate entity (not an individual), a specific financial product (a line of credit), and financial statement analysis (balance sheet liquidity) — all core Financial Services competencies. PFL is explicitly focused on personal/household finance decisions. ACCT focuses on accounting procedures and analysis, not credit product selection. PBA is a general business event without the financial analysis depth required.',
        marks: 1,
        difficulty: 'easy',
      },
      {
        id: 'dc3-l5-q3',
        type: 'mcq',
        question: 'A DECA competitor preparing for the Accounting Applications event wants to maximize their score on the "Recommended Action Plan" criterion. Which approach best demonstrates Advanced Exemplary performance?',
        options: [
          'Identify the accounting problem precisely, calculate the quantitative impact using numbers from the scenario, propose a specific corrective action with a timeline, and explain why that action resolves the root cause — not just the symptom.',
          'Spend the full 10 minutes describing all possible accounting frameworks that could apply to the scenario, allowing the judge to select the most appropriate recommendation.',
          'Recommend the same general best practices (improve internal controls, hire more accountants, invest in software) regardless of the specific scenario details.',
          'Focus entirely on professional presentation style and confident delivery, since judges are primarily evaluating communication skills rather than technical accounting knowledge.',
        ],
        correctAnswer: 0,
        explanation: 'Advanced Exemplary on the Recommended Action Plan criterion requires: (1) correct identification of the root cause (not a symptom), (2) quantified impact using the scenario\'s specific numbers, (3) a specific and actionable recommendation, and (4) a clear explanation of why it resolves the problem. Spending the full time describing frameworks without recommending one scores poorly on decisiveness. Generic recommendations that ignore scenario specifics fail criterion 2 (Problem Identification) and criterion 3. Communication skills matter for criterion 5, but technical accuracy and quantitative grounding primarily drive criteria 1–4.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
