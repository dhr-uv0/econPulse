import type { CurriculumModule, Lesson } from '@/lib/types'

export const moduleInfo: Omit<CurriculumModule, 'lessons'> = {
  id: 'dc2-marketing',
  title: 'DECA — Marketing Essentials',
  description: 'The 4Ps, consumer behavior, market research, digital marketing, and DECA marketing event prep.',
  tier: 'DECA' as const,
  track: 'DECA' as const,
  unit: 2,
  estimatedHours: 3,
  color: '#06b6d4',
  icon: 'Briefcase',
}

export const lessons: Lesson[] = [
  // ── Lesson 1: The Marketing Mix — 4Ps ────────────────────────────────────────
  {
    id: 'dc2-l1',
    moduleId: 'dc2-marketing',
    title: 'The Marketing Mix — 4Ps',
    description: 'Understand product, price, place, and promotion and learn how to build and analyze a complete marketing mix.',
    order: 1,
    estimatedMinutes: 35,
    tags: ['marketing-mix', '4Ps', 'product', 'price', 'place', 'promotion', 'DECA'],
    content: {
      conceptualExplanation:
        'The marketing mix — often called the 4Ps — is the foundational framework that businesses use to bring a product or service to market successfully. The four elements are Product, Price, Place, and Promotion. Each element must work in harmony with the others; a luxury product sold at bargain-bin prices in gas stations with no advertising will confuse consumers and fail, while a well-positioned brand communicates a consistent story across all four dimensions. Marketers treat the 4Ps as decision variables they can adjust in response to competition, consumer feedback, and changing market conditions.\n\nProduct refers to the bundle of attributes — features, quality, branding, packaging, and after-sale service — that a company offers to satisfy customer needs. Effective product decisions start with understanding what problem the product solves. Price is the amount customers pay and the only element of the mix that generates revenue rather than costs. Pricing strategy must reflect the product\'s perceived value, competitive landscape, and target segment\'s willingness to pay. Common approaches include cost-plus pricing, value-based pricing, competitive pricing, and penetration pricing for new market entrants.\n\nPlace (distribution) is about getting the product to the right customer at the right time and location. Channels can be direct (company-owned stores or e-commerce), indirect (wholesalers and retailers), or omnichannel combinations of both. Finally, Promotion encompasses all the communication tools used to inform, persuade, and remind target audiences — advertising, sales promotions, public relations, personal selling, and digital content. A coherent promotional mix amplifies the value proposition embedded in the other three Ps and drives consumer action.',
      realWorldHook:
        'Apple\'s iPhone launch in 2007 is a masterclass in 4Ps alignment. The product redefined the smartphone category with multi-touch and a full web browser. The price launched at a premium $499–$599 (with carrier subsidy) to signal luxury status. Place was tightly controlled through Apple Stores and select carrier partners, avoiding mass-market discount retailers that would dilute the brand. Promotion centered on a single, iconic Steve Jobs keynote watched by millions — generating global media coverage worth hundreds of millions in earned media. Every element reinforced a single idea: this is a magical device unlike anything you have seen before.',
      interactiveElement:
        'Complete a 4Ps analysis for your favorite brand: (1) Product — what core need does it fulfill, and what features differentiate it from competitors? (2) Price — is it premium, economy, or competitive pricing, and what does that signal to consumers? (3) Place — does the brand sell direct, through retail partners, online, or all three? (4) Promotion — list two advertising channels the brand uses and explain why each fits the target audience. Map your findings onto a 2×2 grid with "Product / Price" on the top row and "Place / Promotion" on the bottom row, then write one sentence per cell describing how the elements reinforce each other.',
      vocabulary: [
        {
          term: 'Marketing Mix',
          definition: 'The set of controllable tactical marketing tools — Product, Price, Place, and Promotion — that a firm blends to produce the response it wants in the target market.',
          example: 'Nike adjusts its marketing mix seasonally, releasing limited-edition products (Product), pricing them at a premium (Price), distributing through its own SNKRS app (Place), and using athlete endorsements on Instagram (Promotion).',
        },
        {
          term: 'Value-Based Pricing',
          definition: 'A pricing strategy where the price is set primarily according to the perceived or estimated value of a product to the customer, rather than according to the cost of production.',
          example: 'Starbucks charges $6 for a latte not because the ingredients cost $6 but because customers value the experience, brand, and convenience enough to pay that price.',
        },
        {
          term: 'Distribution Channel',
          definition: 'The path through which goods and services travel from the producer to the final consumer, including intermediaries such as wholesalers, distributors, and retailers.',
          example: 'Coca-Cola uses an indirect distribution channel, selling through supermarkets, restaurants, and vending machines rather than directly to consumers from its factories.',
        },
      ],
      deeperDive:
        'In DECA\'s Principles of Marketing event and case studies, judges expect you to demonstrate that you can diagnose a company\'s marketing mix weakness and recommend specific, measurable adjustments. A common prompt gives you a fictional company losing market share and asks for a marketing plan — the 4Ps provide the natural skeleton for your response. Always connect each P to the target segment: a Gen Z audience demands different promotions (TikTok over TV) and different distribution (DTC over department stores) than Baby Boomers.\n\nBeyond DECA, modern marketers often extend the framework to the 7Ps by adding People, Process, and Physical Evidence — particularly important for service businesses where the customer experience IS the product. For example, a bank\'s marketing mix includes the friendliness of tellers (People), the loan application process (Process), and the branch interior design (Physical Evidence). Understanding these extensions will differentiate your DECA presentation from competitors who stop at the classic four.',
      commonMisconceptions: [
        'Promotion is the most important P — In reality all four Ps carry equal weight; a brilliant promotional campaign cannot save a poorly designed product sold at the wrong price in inaccessible channels.',
        'Price just means making things cheaper — Lowering price is only one strategy; premium pricing, bundle pricing, and psychological pricing ($9.99 vs. $10) are all valid and sometimes more effective.',
        'Place only means physical store location — Place encompasses the entire distribution strategy including e-commerce platforms, mobile apps, third-party marketplaces like Amazon, and subscription delivery models.',
      ],
      examinerTip:
        'DECA judges reward candidates who frame every marketing recommendation around the target consumer. Before describing any of the 4Ps, state clearly who you are targeting and why — then show how each element speaks directly to that segment\'s needs, values, and purchase habits. This customer-first structure signals strategic thinking rather than rote memorization.',
      didYouKnow:
        'The 4Ps framework was introduced by marketing professor E. Jerome McCarthy in 1960 and popularized by Philip Kotler. More than 60 years later it remains the most widely taught marketing framework in business schools worldwide, appearing in virtually every DECA marketing event and college marketing course.',
      prerequisiteRecap: `The DECA Overview module showed that economics concepts — especially supply, demand, and market competition — are embedded in every cluster exam; the marketing mix now applies that economic foundation to the four practical levers (Product, Price, Place, Promotion) businesses use to position their offering in a competitive market.`,
      recallQuestions: [
        {
          id: 'dc2-l1-recall-1',
          type: 'mcq' as const,
          question: 'In DECA events, judges reward competitors who apply economic reasoning to business recommendations. Which economic concept most directly informs a pricing decision?',
          options: [
            'Price elasticity of demand — whether customers are sensitive or insensitive to price changes determines whether raising or lowering price will increase total revenue',
            'GDP growth rate — a growing economy always justifies higher prices regardless of customer sensitivity',
            'The money supply — firms should raise prices whenever the Federal Reserve increases the money supply',
            'Comparative advantage — firms should price based on their production cost advantage relative to competitors',
          ],
          correctAnswer: 0,
          explanation: 'Price elasticity of demand (PED) measures how responsive quantity demanded is to a price change. If demand is inelastic (PED < 1), a price increase raises total revenue — justifying premium pricing when differentiation is strong. If demand is elastic (PED > 1), lowering price increases revenue. Applying PED logic to a DECA pricing question demonstrates exactly the kind of economic reasoning judges reward at Advanced Exemplary.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      isStub: false,
    },
    flashcards: [
      {
        id: 'dc2-l1-fc1',
        front: 'What are the 4Ps of the marketing mix?',
        back: 'Product (what you sell), Price (what you charge), Place (how/where you distribute), and Promotion (how you communicate with customers). Together they form a firm\'s tactical marketing plan.',
        tags: ['4Ps', 'marketing-mix', 'DECA'],
      },
      {
        id: 'dc2-l1-fc2',
        front: 'What is value-based pricing and how does it differ from cost-plus pricing?',
        back: 'Value-based pricing sets price according to the customer\'s perceived value of the product. Cost-plus pricing adds a fixed markup to production cost. Value-based pricing typically yields higher margins when differentiation is strong.',
        tags: ['pricing', 'value-based', 'cost-plus'],
      },
      {
        id: 'dc2-l1-fc3',
        front: 'What is an indirect distribution channel? Give an example.',
        back: 'An indirect channel uses intermediaries (wholesalers, distributors, retailers) between producer and end consumer. Example: Procter & Gamble sells Tide detergent through Walmart rather than directly to households.',
        tags: ['distribution', 'place', 'channel'],
      },
    ],
    quiz: [
      {
        id: 'dc2-l1-q1',
        type: 'mcq',
        question: 'A startup launches a handcrafted leather wallet at $150, sells exclusively through its own website, and runs targeted Instagram ads. Which element of the marketing mix does the website-only sales strategy represent?',
        options: [
          'Place',
          'Promotion',
          'Product',
          'Price',
        ],
        correctAnswer: 0,
        explanation: 'The decision about where and how to make a product available to customers — including direct-to-consumer websites — falls under Place (distribution) in the marketing mix.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l1-q2',
        type: 'mcq',
        question: 'Which pricing strategy sets price primarily based on what customers believe the product is worth, rather than its cost of production?',
        options: [
          'Cost-plus pricing',
          'Penetration pricing',
          'Value-based pricing',
          'Skimming pricing',
        ],
        correctAnswer: 2,
        explanation: 'Value-based pricing anchors price to the customer\'s perceived benefit rather than the seller\'s production cost, allowing premium margins when the brand\'s differentiation is strong.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l1-q3',
        type: 'mcq',
        question: 'Apple limiting iPhone sales to its own stores and select carrier partners is primarily a decision about which P?',
        options: [
          'Product',
          'Promotion',
          'Price',
          'Place',
        ],
        correctAnswer: 3,
        explanation: 'Controlling the retail environment by selling only through Apple Stores and select partners is a Place (distribution) decision designed to protect brand image and customer experience.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 2: Consumer Behavior & Segmentation ────────────────────────────────
  {
    id: 'dc2-l2',
    moduleId: 'dc2-marketing',
    title: 'Consumer Behavior & Segmentation',
    description: 'Explore the consumer buying process, the three main segmentation bases, and how brands craft targeting strategies.',
    order: 2,
    estimatedMinutes: 35,
    tags: ['consumer-behavior', 'segmentation', 'targeting', 'demographics', 'psychographics', 'DECA'],
    content: {
      conceptualExplanation:
        'Understanding why consumers buy is the cornerstone of effective marketing. The consumer decision-making process typically follows five stages: problem recognition (the consumer identifies a need or want), information search (they gather data from internal memory, friends, or online reviews), evaluation of alternatives (they compare options on key attributes), purchase decision (they choose and buy), and post-purchase evaluation (they assess satisfaction and decide whether to repurchase or recommend). Marketers intervene at every stage — ads trigger problem recognition, SEO and review management shape the information search, and loyalty programs reduce post-purchase dissonance.\n\nMarket segmentation is the practice of dividing a broad target market into subsets of consumers with common needs or characteristics. The three primary bases are demographic (age, income, gender, education, family life stage), psychographic (personality, values, lifestyle, interests, opinions — often called AIO variables), and behavioral (purchase frequency, brand loyalty, usage occasion, benefits sought). Effective segmentation produces groups that are measurable, substantial (large enough to be profitable), accessible (reachable through marketing channels), and actionable (the firm can design programs to serve them).\n\nOnce segments are identified, a firm must choose a targeting strategy. Undifferentiated (mass) marketing treats the whole market as one and delivers a single message — effective for commodity products like sugar or salt. Differentiated marketing develops tailored offers for two or more segments simultaneously, as General Motors does by selling Chevrolet, Buick, and Cadillac to different income brackets. Concentrated (niche) marketing focuses all resources on one small segment, which is ideal for startups with limited budgets. Finally, micromarketing personalizes offers at the individual or local level — the strategy behind Amazon\'s recommendation engine.',
      realWorldHook:
        'Spotify\'s marketing exemplifies psychographic and behavioral segmentation. Rather than targeting "everyone who listens to music," Spotify segments by listening behavior (podcast enthusiasts, workout playlist users, study-session listeners) and psychographic traits (indie taste-makers vs. pop mainstream fans). Its annual Spotify Wrapped campaign is a masterclass in behavioral data converted into a shareable, personal story — each user receives their own curated review of the year, driving billions of organic social media impressions without a single paid placement.',
      interactiveElement:
        'Pick a product category (e.g., running shoes, energy drinks, or streaming services) and create a segmentation map: (1) Draw three columns labeled Demographic, Psychographic, and Behavioral. (2) Identify two distinct segments in each column. (3) For each of your six segments, write one targeted marketing message (headline + one sentence) tailored to that segment\'s specific characteristics. (4) Circle the segment you believe is most profitable and explain why in two sentences. This exercise trains you to think like a marketing strategist rather than defaulting to "target everyone."',
      vocabulary: [
        {
          term: 'Psychographic Segmentation',
          definition: 'Dividing a market based on consumers\' personality traits, values, attitudes, interests, and lifestyles rather than demographic characteristics.',
          example: 'Patagonia targets environmentally conscious consumers who value sustainability and outdoor adventure — a psychographic profile that cuts across multiple age and income groups.',
        },
        {
          term: 'Consumer Decision-Making Process',
          definition: 'The five-stage sequence a buyer goes through when choosing a product: problem recognition, information search, evaluation of alternatives, purchase decision, and post-purchase evaluation.',
          example: 'A student recognizing she needs a laptop (problem recognition) then reading reviews on CNET (information search) before buying a MacBook (purchase decision) is moving through the full consumer decision-making process.',
        },
        {
          term: 'Targeting Strategy',
          definition: 'The approach a firm takes to selecting which market segment(s) to serve, ranging from mass marketing (one segment) to micromarketing (individual-level personalization).',
          example: 'Dollar Shave Club used concentrated (niche) targeting, focusing exclusively on millennial men who found traditional razor brands overpriced, before expanding its target after gaining market share.',
        },
      ],
      deeperDive:
        'In DECA role-play events involving marketing plans, judges frequently award top marks to candidates who clearly define a primary and secondary target segment before recommending any marketing tactics. A useful structure is: (1) identify the segment using at least two segmentation bases, (2) quantify its size and purchasing power, (3) explain why this segment is under-served by existing competitors, and (4) show how the proposed marketing mix speaks directly to this segment\'s decision-making process. Skipping this foundation and jumping straight to tactics is the single most common error in DECA marketing presentations.\n\nBehavioral economics adds another layer to consumer behavior analysis. Concepts like loss aversion (people feel losses more acutely than equivalent gains), anchoring (the first price seen becomes a reference point), and the paradox of choice (too many options reduce purchase likelihood) help explain why consumers do not always behave "rationally." Advanced DECA candidates who reference these concepts when analyzing case study scenarios — for example, explaining why a free-trial offer works better than a discount — demonstrate the kind of sophisticated thinking that earns distinction-level scores.',
      commonMisconceptions: [
        'Demographics are the most important segmentation base — Psychographic and behavioral data often predict purchase behavior more accurately; two people with identical demographics can have completely different buying patterns.',
        'More segmentation is always better — Over-segmentation creates tiny unprofitable niches; effective segmentation finds groups large and accessible enough to warrant a distinct marketing strategy.',
        'The purchase decision ends the consumer process — Post-purchase evaluation drives repeat purchases, word-of-mouth recommendations, and online reviews, making it the most critical stage for long-term brand building.',
      ],
      examinerTip:
        'When presenting to a DECA judge, always name your target segment with a vivid, specific description rather than vague labels like "teens" or "adults." Saying "budget-conscious college students aged 18–22 who stream music during commutes and value authenticity over celebrity endorsement" signals market research and strategic clarity that generic demographic labels cannot.',
      didYouKnow:
        'The concept of market segmentation was introduced by economist Wendell Smith in 1956. Today, machine learning algorithms can identify thousands of micro-segments in real time from clickstream data — a far cry from the four or five hand-drawn segments marketers used in Smith\'s era.',
      prerequisiteRecap: `The previous lesson introduced the marketing mix and showed how the 4Ps must align with a target market; consumer behavior and segmentation now provide the framework for defining that target market precisely — determining who the customer is before deciding what to offer, how to price it, where to sell it, and how to communicate its value.`,
      recallQuestions: [
        {
          id: 'dc2-l2-recall-1',
          type: 'mcq' as const,
          question: 'A company launches a new premium coffee brand with a high price point and distribution only through specialty cafes and its own website. Which element of the 4Ps is the distribution-only-through-specialty-channels decision?',
          options: [
            'Place — the decision about how and where to make the product available to customers is the Place (distribution) element of the marketing mix',
            'Promotion — limiting availability creates exclusivity that acts as a promotional signal to target consumers',
            'Product — selling only through specialty channels is a product differentiation strategy',
            'Price — restricting distribution is a form of price discrimination targeting high-willingness-to-pay consumers',
          ],
          correctAnswer: 0,
          explanation: 'Distribution channel selection — including the decision to sell through specialty retailers rather than mass-market stores — is a Place decision in the 4Ps framework. This choice signals brand positioning and controls the customer experience at the point of purchase, reinforcing the premium Product and Price decisions. Understanding which P a decision belongs to is a common DECA cluster exam question.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      isStub: false,
    },
    flashcards: [
      {
        id: 'dc2-l2-fc1',
        front: 'What are the five stages of the consumer decision-making process?',
        back: '(1) Problem Recognition — identify a need. (2) Information Search — gather options. (3) Evaluation of Alternatives — compare on key attributes. (4) Purchase Decision — buy. (5) Post-Purchase Evaluation — assess satisfaction and decide on loyalty.',
        tags: ['consumer-behavior', 'buying-process', 'DECA'],
      },
      {
        id: 'dc2-l2-fc2',
        front: 'What is the difference between demographic and psychographic segmentation?',
        back: 'Demographic segmentation uses objective traits like age, income, and gender. Psychographic segmentation uses subjective traits like personality, values, lifestyle, and interests (AIO variables). Psychographics often predict purchase intent more accurately than demographics alone.',
        tags: ['segmentation', 'demographics', 'psychographics'],
      },
      {
        id: 'dc2-l2-fc3',
        front: 'What is concentrated (niche) targeting and when is it most appropriate?',
        back: 'Concentrated targeting focuses all marketing resources on one specific segment. It is most appropriate for firms with limited budgets, new entrants seeking a foothold, or brands with highly specialized offerings that appeal to a small but passionate audience.',
        tags: ['targeting', 'niche', 'segmentation'],
      },
    ],
    quiz: [
      {
        id: 'dc2-l2-q1',
        type: 'mcq',
        question: 'A consumer reads online reviews and watches YouTube comparison videos before buying a new smartphone. Which stage of the consumer decision-making process is this?',
        options: [
          'Problem Recognition',
          'Information Search',
          'Evaluation of Alternatives',
          'Post-Purchase Evaluation',
        ],
        correctAnswer: 1,
        explanation: 'Reading reviews and watching comparison videos is Information Search — the stage where the consumer gathers data to help make a decision after recognizing a need.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l2-q2',
        type: 'mcq',
        question: 'Patagonia markets to consumers who prioritize environmental responsibility and outdoor adventure regardless of their age or income. This is an example of which segmentation base?',
        options: [
          'Demographic segmentation',
          'Geographic segmentation',
          'Behavioral segmentation',
          'Psychographic segmentation',
        ],
        correctAnswer: 3,
        explanation: 'Targeting consumers based on values (environmental responsibility) and lifestyle (outdoor adventure) is psychographic segmentation — it groups people by who they are rather than objective demographic facts.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l2-q3',
        type: 'mcq',
        question: 'Which targeting strategy involves developing separate marketing offers for two or more distinct market segments simultaneously?',
        options: [
          'Undifferentiated marketing',
          'Concentrated marketing',
          'Differentiated marketing',
          'Micromarketing',
        ],
        correctAnswer: 2,
        explanation: 'Differentiated marketing tailors distinct offers and messages to multiple segments at the same time, like General Motors selling different brands (Chevrolet, Buick, Cadillac) to different income segments.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 3: Marketing Research Methods ─────────────────────────────────────
  {
    id: 'dc2-l3',
    moduleId: 'dc2-marketing',
    title: 'Marketing Research Methods',
    description: 'Master primary vs. secondary research, qualitative and quantitative methods, and how to interpret data for marketing decisions.',
    order: 3,
    estimatedMinutes: 30,
    tags: ['market-research', 'primary-research', 'secondary-research', 'surveys', 'focus-groups', 'DECA'],
    content: {
      conceptualExplanation:
        'Marketing research is the systematic process of gathering, recording, and analyzing data about customers, competitors, and the market to support decision-making. The research process follows five steps: define the problem and research objectives, develop the research plan, collect the information, analyze the data, and present the findings. Defining the problem is the most critical step — vague questions like "why are sales down?" yield unfocused data, while specific questions like "which price point maximizes trial among 25–34-year-old urban consumers?" generate actionable insights.\n\nResearch methods divide into primary and secondary categories. Primary research collects new, original data directly from sources for a specific purpose. Common primary methods include surveys (structured questionnaires delivered online, by phone, or in person), in-depth interviews (one-on-one conversations exploring attitudes and motivations), focus groups (moderated group discussions of 6–10 participants), observation (watching consumer behavior in natural settings), and experiments (controlled tests such as A/B pricing tests). Secondary research uses data that already exists — published reports from sources like Nielsen, Statista, government census data, industry trade publications, and a company\'s own sales records. Secondary research is cheaper and faster but may be outdated or not perfectly tailored to the research question.\n\nData from marketing research is classified as qualitative or quantitative. Qualitative data captures words, themes, and sentiments (focus group transcripts, open-ended survey responses) and is ideal for exploring "why" — the motivations behind behavior. Quantitative data involves numbers and statistics (survey rating scales, sales figures, web traffic metrics) and answers "how many" and "how often." Best practice combines both: qualitative exploration uncovers hypotheses, and quantitative validation tests them at scale.',
      realWorldHook:
        'Before launching Lay\'s "Do Us a Flavor" campaign — where consumers submitted and voted on new chip flavors — PepsiCo conducted extensive primary research including focus groups and online surveys to understand consumer engagement preferences. The campaign generated over 3.8 million flavor submissions in its first year, demonstrating that the research insight ("fans want to co-create with the brand") was accurate. Secondary research from social media analytics helped PepsiCo identify which flavor categories had the highest engagement before investing in taste-testing and production.',
      interactiveElement:
        'Design a mini-research project in three steps: (1) Choose a research question — for example, "Would students at my school pay $5 for a school-branded reusable water bottle?" (2) Write one 5-question survey (mix of rating scales and one open-ended question) that would answer your question quantitatively and qualitatively. (3) Identify two secondary sources you would consult before running your survey (e.g., student spending statistics, school merchandise sales data). Present your plan in a one-page brief: Research Question → Secondary Sources → Survey Design → How You Would Interpret Results.',
      vocabulary: [
        {
          term: 'Primary Research',
          definition: 'Original data collected first-hand for a specific research purpose, through methods such as surveys, interviews, focus groups, or experiments.',
          example: 'McDonald\'s conducting taste tests on a new menu item with a sample of customers in select cities before a national rollout is primary research.',
        },
        {
          term: 'Focus Group',
          definition: 'A qualitative research method in which a trained moderator leads a small group of 6–10 participants through a structured discussion to explore attitudes, perceptions, and motivations.',
          example: 'Procter & Gamble uses focus groups to watch consumers interact with product prototypes and listen to unscripted reactions before finalizing packaging designs.',
        },
        {
          term: 'Secondary Research',
          definition: 'Research that uses existing data collected by others for another purpose, such as government statistics, industry reports, academic studies, or competitor annual reports.',
          example: 'A startup entering the electric bike market consulting Statista industry reports and U.S. Census commuting data is conducting secondary research to size the market without commissioning original studies.',
        },
      ],
      deeperDive:
        'DECA marketing case studies frequently include a data exhibit — a table of survey results, sales figures, or market share data — and expect candidates to interpret it correctly within the role-play. Train yourself to identify three things when looking at data: the trend (is the metric rising, falling, or flat?), the outlier (is one segment, region, or product behaving differently from the rest?), and the implication (what decision should the company make based on this data?). Judges mark down candidates who describe data without drawing conclusions.\n\nSampling methodology is a subtopic that separates strong research literacy from basic knowledge. A random sample gives every member of the population an equal chance of being selected, producing the most statistically reliable results. A convenience sample (surveying whoever is nearby) is faster but introduces selection bias. For DECA, understanding why sample size and sampling method affect data reliability allows you to critically evaluate research findings presented in a case and recommend whether additional research is warranted before a major decision.',
      commonMisconceptions: [
        'More survey questions always produce better insights — Long surveys suffer from respondent fatigue, causing people to rush through or abandon them; fewer, well-crafted questions yield higher quality data.',
        'Focus groups reveal what customers will actually do — Focus groups reveal what people say they believe and intend, which often diverges from actual purchase behavior; they are best for exploring attitudes, not predicting sales.',
        'Secondary research is less valuable than primary research — Secondary research is often sufficient for market sizing, competitive analysis, and trend identification, and it saves time and budget for the primary research that truly requires original data collection.',
      ],
      examinerTip:
        'If a DECA case study provides data, reference specific numbers when making recommendations — for example, "the survey data shows 68% of respondents under 30 prefer mobile checkout, which supports investing in the app before the desktop redesign." Citing evidence rather than making generic claims dramatically raises your score on the analytical thinking rubric.',
      didYouKnow:
        'The first known use of a structured market survey dates to 1911, when Charles Coolidge Parlin was hired by Curtis Publishing to survey farmers\' purchasing habits for advertisers. His 460-page report on the agricultural market is considered the founding document of modern marketing research.',
      prerequisiteRecap: `The previous lesson showed how psychographic and behavioral segmentation identify which customers to target; marketing research now provides the systematic methods for gathering data to verify those customer profiles and measure how segments respond to different marketing mix decisions.`,
      recallQuestions: [
        {
          id: 'dc2-l3-recall-1',
          type: 'mcq' as const,
          question: 'A brand wants to understand why customers prefer a competitor\'s product over theirs. Which research method is most appropriate?',
          options: [
            'A qualitative focus group — it captures the motivations, attitudes, and emotions behind customer preferences through open-ended discussion that surveys cannot probe',
            'A quantitative online survey with Likert scale ratings — it provides statistically representative data on preference intensity',
            'Secondary research using industry sales reports — competitor market share data reveals which product is winning without primary data collection',
            'A demographic segmentation analysis — identifying the age and income profile of competitor customers explains the preference gap',
          ],
          correctAnswer: 0,
          explanation: 'Understanding "why" customers prefer a competitor requires exploring motivations, emotions, and unspoken preferences — qualitative territory best suited to focus groups or in-depth interviews. Quantitative surveys can measure how many prefer the competitor but not the nuanced reasons. Identifying the root cause of a preference gap is exactly the kind of problem DECA judges expect competitors to frame with the right research methodology.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      isStub: false,
    },
    flashcards: [
      {
        id: 'dc2-l3-fc1',
        front: 'What is the difference between primary and secondary research?',
        back: 'Primary research collects new, original data for a specific purpose (surveys, interviews, focus groups, experiments). Secondary research uses existing data collected by others (government statistics, industry reports, internal sales records). Primary is more tailored; secondary is faster and cheaper.',
        tags: ['research-methods', 'primary', 'secondary', 'DECA'],
      },
      {
        id: 'dc2-l3-fc2',
        front: 'What is a focus group and what type of data does it produce?',
        back: 'A focus group is a moderated discussion with 6–10 participants exploring attitudes and motivations. It produces qualitative data — words, themes, and sentiments — ideal for understanding "why" consumers behave as they do, rather than "how many."',
        tags: ['focus-group', 'qualitative', 'research'],
      },
      {
        id: 'dc2-l3-fc3',
        front: 'What are the five steps of the marketing research process?',
        back: '(1) Define the problem and research objectives. (2) Develop the research plan. (3) Collect the information. (4) Analyze the data. (5) Present the findings and recommendations.',
        tags: ['research-process', 'marketing-research'],
      },
    ],
    quiz: [
      {
        id: 'dc2-l3-q1',
        type: 'mcq',
        question: 'A company uses U.S. Census data and Nielsen industry reports to estimate the size of the organic food market before launching a new product line. This is an example of:',
        options: [
          'Primary research',
          'Experimental research',
          'Secondary research',
          'Observational research',
        ],
        correctAnswer: 2,
        explanation: 'Using existing data sources like U.S. Census data and Nielsen reports — collected originally for other purposes — is secondary research. No new original data is being gathered.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l3-q2',
        type: 'mcq',
        question: 'Which research method is BEST suited for exploring the emotional motivations behind why consumers choose one brand over another?',
        options: [
          'Online survey with rating scales',
          'Analysis of point-of-sale transaction data',
          'Review of industry trade publication reports',
          'In-depth one-on-one interviews',
        ],
        correctAnswer: 3,
        explanation: 'In-depth interviews generate rich qualitative data about motivations, attitudes, and feelings that numerical surveys cannot capture. They are the preferred method when you need to understand the "why" behind behavior.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l3-q3',
        type: 'mcq',
        question: 'What is the primary disadvantage of using a convenience sample in a marketing survey?',
        options: [
          'It takes longer to collect data than a random sample',
          'It requires a larger sample size to be statistically valid',
          'It introduces selection bias because not all population members have an equal chance of being selected',
          'It is more expensive than probability sampling methods',
        ],
        correctAnswer: 2,
        explanation: 'Convenience samples select whoever is easily available, meaning the sample may not represent the broader population — a form of selection bias that undermines the generalizability of findings.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 4: Digital & Social Media Marketing ────────────────────────────────
  {
    id: 'dc2-l4',
    moduleId: 'dc2-marketing',
    title: 'Digital & Social Media Marketing',
    description: 'Learn SEO, content marketing, influencer marketing, analytics, and how to measure ROI in the digital environment.',
    order: 4,
    estimatedMinutes: 40,
    tags: ['digital-marketing', 'SEO', 'content-marketing', 'influencer-marketing', 'analytics', 'ROI', 'DECA'],
    content: {
      conceptualExplanation:
        'Digital marketing encompasses all marketing efforts that use electronic devices or the internet to connect brands with current and prospective customers. It has largely displaced traditional media for many consumer segments because it offers precise targeting, real-time measurement, and cost efficiency impossible with TV or print. The core digital channels include search engine marketing (SEM), search engine optimization (SEO), social media marketing, email marketing, content marketing, display advertising, and affiliate or influencer marketing. Each channel serves a different role in the customer journey: SEO drives awareness when people actively search for a category; retargeting ads re-engage visitors who did not convert; email nurtures existing customers toward repeat purchase.\n\nSEO is the practice of optimizing a website and its content so it ranks higher in organic (non-paid) search engine results. On-page SEO focuses on keyword research, meta tags, page speed, and mobile-friendliness. Off-page SEO builds authority through backlinks from reputable external websites. Content marketing supports SEO by creating valuable articles, videos, infographics, and podcasts that attract and retain audiences — the goal is to become the most helpful resource in a category so that Google rewards the site with high rankings and users return voluntarily. HubSpot built a multi-billion dollar company almost entirely on content marketing, publishing free guides and templates that ranked for thousands of marketing-related search terms and funneled readers toward its paid software.\n\nInfluencer marketing leverages individuals with established social media audiences to promote products in an authentic-seeming context. Mega-influencers (1M+ followers) deliver scale but low engagement rates and high costs. Micro-influencers (10K–100K followers) typically achieve higher engagement rates and greater audience trust at a fraction of the cost, making them the preferred choice for niche brands. Analytics and ROI measurement tie every channel together: key metrics include Cost Per Click (CPC), Cost Per Acquisition (CPA), Click-Through Rate (CTR), Conversion Rate, and Return on Ad Spend (ROAS). The basic ROAS formula is Revenue Generated ÷ Ad Spend; a ROAS of 4x means the brand earned $4 in revenue for every $1 spent on ads.',
      realWorldHook:
        'Glossier, the beauty brand, grew from a blog (Into the Gloss) to a $1.8 billion company almost entirely through digital and social media marketing. Founder Emily Weiss used content marketing on the blog to build a loyal community before launching a single product. She then activated that community as micro-influencers, seeding product samples to real customers and encouraging unboxing posts and reviews — creating authentic user-generated content that no paid ad campaign could replicate. Glossier\'s Instagram strategy combined aspirational photography with conversational customer service in comments, blurring the line between brand channel and community forum.',
      interactiveElement:
        'Conduct a mini digital audit of a brand you admire: (1) Google a keyword they should rank for (e.g., "best sustainable sneakers") and note whether their website appears on page one — this is an SEO check. (2) Visit their Instagram, TikTok, and YouTube pages and record: follower count, average likes/comments on last 3 posts, and the content format they use most (video, carousel, static image). (3) Calculate a rough engagement rate: (Average Likes + Comments) ÷ Follower Count × 100. (4) Identify one thing they do exceptionally well digitally and one gap in their strategy. Present your findings in a 4-box summary: SEO Health | Social Presence | Engagement Rate | Strategic Gap.',
      vocabulary: [
        {
          term: 'Search Engine Optimization (SEO)',
          definition: 'The process of improving the quality and quantity of website traffic through organic (non-paid) search engine results by optimizing content, site structure, and external link authority.',
          example: 'Backlinko ranks on page one of Google for "link building strategies" because its long-form, data-rich articles earn thousands of backlinks from other websites, boosting its domain authority.',
        },
        {
          term: 'Return on Ad Spend (ROAS)',
          definition: 'A marketing metric that measures the revenue earned for every dollar spent on advertising, calculated as: Revenue Generated ÷ Ad Spend.',
          example: 'If a Facebook ad campaign costs $2,000 and generates $10,000 in tracked sales, the ROAS is 5x — meaning the brand earned $5 for every $1 spent.',
        },
        {
          term: 'Content Marketing',
          definition: 'A strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience, ultimately driving profitable customer action.',
          example: 'Red Bull\'s media arm produces extreme sports videos and articles that entertain its target audience without directly selling energy drinks — the content builds brand affinity that translates into purchase preference.',
        },
      ],
      deeperDive:
        'DECA\'s Digital Marketing case studies and role-plays frequently ask you to recommend a digital strategy for a specific scenario — a local restaurant, a new app, or a B2B software company. Always match the channel to the audience and the objective: awareness campaigns suit social media and display ads; consideration-stage content (comparisons, demos) suits YouTube and blog posts; conversion tactics belong in email retargeting and paid search. Presenting this funnel logic shows judges you understand digital marketing strategically, not just tactically.\n\nPrivacy regulations like the EU\'s General Data Protection Regulation (GDPR) and Apple\'s App Tracking Transparency framework have dramatically reduced the availability of third-party cookie data, forcing brands toward first-party data strategies — collecting email addresses, purchase histories, and survey responses directly from customers. Advanced DECA candidates who acknowledge this shift and recommend first-party data collection tactics (loyalty programs, email sign-ups, gated content) in their marketing plans demonstrate awareness of the current industry landscape that impresses judges and distinguishes their presentations.',
      commonMisconceptions: [
        'More followers equals more marketing effectiveness — Engagement rate and audience-brand fit matter far more than raw follower counts; a micro-influencer with 20,000 highly engaged followers in a niche often outperforms a celebrity with millions of passive ones.',
        'SEO delivers instant results — SEO is a long-term investment; most websites take 3–6 months to see significant ranking improvements, meaning it must be paired with paid search for short-term traffic needs.',
        'Social media marketing is free — Organic reach on most platforms has declined sharply as algorithms favor paid content; effective social media marketing requires budget for promoted posts, creative production, and analytics tools.',
      ],
      examinerTip:
        'In digital marketing DECA events, always quantify your recommendations when possible. Instead of saying "we should invest in social media," say "I recommend allocating 40% of the digital budget to Instagram Reels targeting 18–24-year-olds, with a target ROAS of 3x based on industry benchmarks." Specific numbers and clear success metrics signal business acumen and make your plan immediately evaluable by a judge.',
      didYouKnow:
        'The first banner ad ever displayed on the internet appeared on HotWired.com in 1994 for AT&T. It read "Have you ever clicked your mouse right HERE? YOU WILL." and achieved a click-through rate of 44% — compared to the current industry average of approximately 0.1%, illustrating how consumer attention and digital ad effectiveness have fundamentally changed.',
      prerequisiteRecap: `The previous lesson covered primary and secondary research methods for gathering market data; digital marketing now shows how businesses deploy that insight through online channels — using SEO, content, and social media — while continuously measuring performance through analytics metrics like ROAS and conversion rate.`,
      recallQuestions: [
        {
          id: 'dc2-l4-recall-1',
          type: 'mcq' as const,
          question: 'A company conducts focus groups and finds that 70% of customers value product sustainability. Which research type provided this insight, and how should it inform the Promotion element of the marketing mix?',
          options: [
            'Primary qualitative research — the sustainability finding should be reflected in promotional messaging that explicitly highlights eco-friendly features to resonate with the target segment\'s values',
            'Secondary quantitative research — industry sustainability reports suggest the company should follow competitor advertising without original research',
            'Primary quantitative research — Likert-scale ratings from focus groups provide statistically representative data for national advertising decisions',
            'Secondary qualitative research — the finding is directional only and should not influence promotional strategy until confirmed with a national survey',
          ],
          correctAnswer: 0,
          explanation: 'Focus groups generate primary qualitative data — original insights about customer motivations collected for a specific purpose. A finding that 70% of focus group participants value sustainability is actionable for promotional strategy: it tells the marketing team to lead with sustainability messaging in ads, social media content, and influencer briefs targeted at that segment. This is the direct link from research insight to Promotion decision that DECA judges look for in marketing role-plays.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      isStub: false,
    },
    flashcards: [
      {
        id: 'dc2-l4-fc1',
        front: 'What is the ROAS formula and what does a ROAS of 4x mean?',
        back: 'ROAS = Revenue Generated ÷ Ad Spend. A ROAS of 4x means the brand earned $4 in revenue for every $1 spent on advertising. Most e-commerce brands target a ROAS of at least 3–4x to maintain profitability after product and fulfillment costs.',
        tags: ['ROAS', 'digital-marketing', 'analytics', 'DECA'],
      },
      {
        id: 'dc2-l4-fc2',
        front: 'What is the difference between a mega-influencer and a micro-influencer, and which typically has higher engagement rates?',
        back: 'Mega-influencers have 1M+ followers; micro-influencers have 10K–100K. Micro-influencers typically achieve higher engagement rates (more likes/comments per follower) because their audiences are niche and trust them more. They are also significantly more cost-effective for brands.',
        tags: ['influencer-marketing', 'social-media', 'engagement'],
      },
      {
        id: 'dc2-l4-fc3',
        front: 'What is content marketing and how does it support SEO?',
        back: 'Content marketing creates valuable, relevant content (articles, videos, guides) to attract and retain an audience. It supports SEO by targeting keywords that potential customers search for, earning backlinks from other sites, and increasing time-on-site — all signals that search engines use to rank pages higher in organic results.',
        tags: ['content-marketing', 'SEO', 'digital-marketing'],
      },
    ],
    quiz: [
      {
        id: 'dc2-l4-q1',
        type: 'mcq',
        question: 'A brand spends $5,000 on Google Ads and generates $25,000 in tracked revenue. What is the ROAS?',
        options: [
          '3x',
          '4x',
          '5x',
          '20x',
        ],
        correctAnswer: 2,
        explanation: 'ROAS = Revenue ÷ Ad Spend = $25,000 ÷ $5,000 = 5x. This means the brand earned $5 for every $1 spent on the campaign.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l4-q2',
        type: 'mcq',
        question: 'Which type of influencer typically delivers the highest engagement rate per follower?',
        options: [
          'Celebrity influencer (10M+ followers)',
          'Mega-influencer (1M–10M followers)',
          'Macro-influencer (100K–1M followers)',
          'Micro-influencer (10K–100K followers)',
        ],
        correctAnswer: 3,
        explanation: 'Micro-influencers consistently achieve the highest engagement rates because their audiences are niche, loyal, and trust their recommendations — often resulting in conversion rates that exceed those of much larger influencers.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l4-q3',
        type: 'mcq',
        question: 'A company writes detailed how-to guides and publishes free templates to attract visitors who are researching solutions in its category. This is primarily an example of:',
        options: [
          'Search Engine Marketing (paid search)',
          'Display advertising',
          'Content marketing',
          'Affiliate marketing',
        ],
        correctAnswer: 2,
        explanation: 'Creating valuable educational content — guides and templates — to attract and retain an audience without direct selling is the definition of content marketing. It builds brand authority and supports organic SEO over time.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },

  // ── Lesson 5: DECA Marketing Events Prep ─────────────────────────────────────
  {
    id: 'dc2-l5',
    moduleId: 'dc2-marketing',
    title: 'DECA Marketing Events Prep',
    description: 'Master the format, judging criteria, and winning strategies for DECA\'s Principles of Marketing, Sports & Entertainment Marketing, and Fashion Marketing events.',
    order: 5,
    estimatedMinutes: 40,
    tags: ['DECA', 'marketing-events', 'principles-of-marketing', 'sports-entertainment', 'fashion-marketing', 'role-play', 'competitive-events'],
    content: {
      conceptualExplanation:
        'DECA\'s marketing cluster covers some of the most popular competitive events in the organization. Three events that attract large entry fields are Principles of Marketing (PMKT), Sports & Entertainment Marketing (SEM), and Fashion Marketing (FM). Each follows DECA\'s standard Individual Series Event format: participants receive a 100-question multiple-choice exam and a role-play scenario. The exam tests marketing knowledge across advertising, channel management, market planning, market research, pricing, product/service management, and selling. Exam scores typically count for approximately one-third of the final score at ICDC level, making strong content knowledge non-negotiable even for excellent role-players.\n\nThe role-play component is where most events are won or lost. Participants receive a scenario (typically a real-world business situation framed around a fictional company) and have 10 minutes to prepare a response, followed by a 10-minute presentation and Q&A with a judge who plays the role of a manager or client. Judges score on the Performance Indicators specified on the event page — usually 5–7 specific marketing concepts the scenario is designed to assess. Winning presentations open with a confident hook, clearly address each performance indicator with specific, relevant recommendations, use visual organization tools (numbered lists, hypothetical data), invite judge interaction, and close with a memorable summary and call to action.\n\nEach event has a distinct content focus. PMKT covers broad marketing fundamentals — the 4Ps, consumer behavior, market research — making it ideal for first-year competitors building foundational knowledge. SEM applies marketing principles to sports franchises, entertainment venues, concerts, and media properties; key concepts include sponsorship sales, licensing, athlete endorsements, ticket pricing strategies, and broadcast rights. Fashion Marketing focuses on the apparel and accessories industry, requiring knowledge of trend forecasting, visual merchandising, buying and assortment planning, fashion weeks, and brand positioning in a cyclical, trend-driven market.',
      realWorldHook:
        'DECA alumna Selena Gomez leveraged her experience in business competitions to sharpen the marketing acumen she later applied when building Rare Beauty. The brand\'s launch strategy — direct-to-consumer on Sephora, authentic social media storytelling about mental health, and product pricing that prioritized accessibility — reflects exactly the kind of integrated marketing thinking DECA events develop. Whether or not the connection is direct, Rare Beauty\'s first-year sales of $60 million demonstrate that the strategic marketing skills practiced in DECA competitions translate directly to real business outcomes.',
      interactiveElement:
        'Simulate a DECA role-play with a partner using this scenario: "You are a marketing manager for a regional NBA G League team. Attendance is down 20% year-over-year. The team owner wants recommendations for a marketing plan to increase average game attendance by 15% this season." Prepare a 10-minute response covering: (1) Target Segment — who specifically will you attract and why? (2) Promotional Strategy — which two digital channels will you use and what will the campaign look like? (3) Pricing Tactic — will you use dynamic pricing, bundle packages, or student discounts? (4) Partnership — identify one local business for a co-marketing deal. Time yourself, then switch roles and have your partner present. Give each other feedback on confidence, specificity, and whether all four elements were addressed.',
      vocabulary: [
        {
          term: 'Performance Indicators (PIs)',
          definition: 'Specific marketing competencies and knowledge standards listed on each DECA event page that judges use to evaluate role-play responses; addressing all PIs directly is essential for a high score.',
          example: 'A Sports & Entertainment Marketing scenario might list PIs including "explain the concept of sponsorship" and "describe the use of licensing in sport marketing" — a winning response must explicitly address both.',
        },
        {
          term: 'Sports Sponsorship',
          definition: 'A business relationship in which a company provides funding, products, or services to a sports entity in exchange for the right to associate its brand with that entity\'s marketing and promotional activities.',
          example: 'Nike\'s sponsorship of the NBA gives Nike the right to outfit all 30 teams and display the Swoosh on official game uniforms, associating the brand with elite athletic performance in front of billions of global viewers.',
        },
        {
          term: 'Trend Forecasting',
          definition: 'The practice of identifying and predicting upcoming consumer preferences, aesthetic directions, and product demand patterns — a core competency in fashion marketing used by buyers, designers, and retailers.',
          example: 'WGSN, a leading trend forecasting agency, predicted the "quiet luxury" aesthetic two years before it dominated high street fashion, allowing retailers who subscribed to their reports to stock the right inventory ahead of the trend.',
        },
      ],
      deeperDive:
        'One of the most reliable ways to elevate a DECA marketing role-play score is to structure your presentation around a recognizable business framework rather than presenting ideas randomly. The AIDA model (Attention, Interest, Desire, Action) works well for promotional strategy explanations. The SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) is ideal for opening a case that asks for a strategic assessment. The 4Ps provide a natural skeleton for full marketing plan scenarios. Opening your presentation by stating the framework you will use signals organizational sophistication to judges and makes your response easy to follow even if you are nervous.\n\nPractice the judge Q&A phase as deliberately as you practice your opening. Judges are trained to probe with follow-up questions like "How would you measure success?" or "What if the competitor responds by cutting prices?" Prepare a mental toolkit: always have an answer about metrics (what KPI would you track?), budget allocation (approximately what percentage of the marketing budget?), timeline (implementation in 30, 60, or 90 days?), and contingency (what if the first approach does not work?). Candidates who answer follow-up questions with specific, confident detail often overtake stronger presenters who stumble when the judge departs from the expected script.',
      commonMisconceptions: [
        'The written exam does not matter much — At ICDC, where the top competitors are all excellent role-players, a strong exam score can be the decisive differentiator; neglecting exam preparation is a common reason state qualifiers do not medal at nationals.',
        'You should memorize a scripted opening and deliver it verbatim — Judges score authenticity and natural delivery; a memorized script often sounds robotic and fails to adapt to the specific nuances of the scenario; instead memorize a flexible framework and practice filling it in with different content.',
        'DECA role-plays are won by being the most enthusiastic in the room — Judges reward structured thinking, specific knowledge, and professional communication; unfocused enthusiasm without substantive marketing knowledge rarely scores in the top tier.',
      ],
      examinerTip:
        'In the final 30 seconds of every DECA role-play, restate the core recommendation in one crisp sentence and say "I am happy to answer any questions." This clean close signals confidence and preparation, gives the judge a memorable anchor for your presentation, and transitions smoothly into the Q&A — the phase where many competitors unravel. Ending strong is as important as starting strong.',
      didYouKnow:
        'DECA was founded in 1946 as the Distributive Education Clubs of America and has grown to over 230,000 members in more than 3,500 high school chapters across the United States and internationally. Alumni include former U.S. Secretary of Energy Jennifer Granholm, restaurateur Danny Meyer, and executives at companies ranging from Google to Goldman Sachs — making it one of the most professionally impactful student organizations in existence.',
      prerequisiteRecap: `The previous lesson showed how digital channels like SEO, content marketing, and social media are measured by metrics such as ROAS and engagement rate; DECA marketing event preparation now integrates all four previous marketing lessons — the 4Ps, segmentation, research, and digital channels — into a competition-ready presentation framework.`,
      recallQuestions: [
        {
          id: 'dc2-l5-recall-1',
          type: 'mcq' as const,
          question: 'A brand runs a digital ad campaign that costs $5,000 and generates $18,000 in tracked sales. What is the ROAS, and what does it indicate about campaign efficiency?',
          options: [
            'ROAS = 3.6x — for every dollar spent on advertising, the brand earned $3.60 in revenue, indicating a profitable campaign if cost of goods and overhead are covered by the remaining margin',
            'ROAS = 0.28x — the campaign spent more than it earned, indicating a loss',
            'ROAS = 18% — the campaign generated an 18% return on the $5,000 investment',
            'ROAS cannot be calculated without knowing the conversion rate and average order value separately',
          ],
          correctAnswer: 0,
          explanation: 'ROAS = Revenue Generated ÷ Ad Spend = $18,000 ÷ $5,000 = 3.6x. This means the brand earned $3.60 in revenue for every $1 spent on ads. Whether this is profitable depends on the gross margin — if product and fulfillment costs are 50% of revenue, the campaign generated $9,000 in gross profit against $5,000 in ad spend. DECA judges expect competitors to calculate and interpret ROAS when recommending digital marketing budgets.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
      isStub: false,
    },
    flashcards: [
      {
        id: 'dc2-l5-fc1',
        front: 'What are the three main marketing cluster events in DECA discussed in this lesson, and what is each one\'s content focus?',
        back: '(1) Principles of Marketing (PMKT) — broad marketing fundamentals: 4Ps, consumer behavior, market research. (2) Sports & Entertainment Marketing (SEM) — sponsorships, licensing, ticketing, athlete endorsements. (3) Fashion Marketing (FM) — trend forecasting, visual merchandising, buying, brand positioning in apparel.',
        tags: ['DECA', 'marketing-events', 'PMKT', 'SEM', 'fashion-marketing'],
      },
      {
        id: 'dc2-l5-fc2',
        front: 'What are Performance Indicators (PIs) in a DECA event and why are they critical?',
        back: 'PIs are specific marketing competencies listed on the DECA event page that judges score in the role-play. They are critical because judges evaluate whether each PI was addressed — missing even one PI can cost enough points to drop from a medal position. Always identify and explicitly address every PI during preparation.',
        tags: ['DECA', 'performance-indicators', 'role-play', 'judging'],
      },
      {
        id: 'dc2-l5-fc3',
        front: 'What is sports sponsorship and what does a brand receive in exchange for its investment?',
        back: 'Sports sponsorship is a business relationship where a company provides funding or resources to a sports entity in exchange for brand association rights — including logo placement on uniforms, stadium naming rights, official product status, and access to the team\'s marketing channels and fan base.',
        tags: ['sponsorship', 'sports-marketing', 'SEM', 'DECA'],
      },
    ],
    quiz: [
      {
        id: 'dc2-l5-q1',
        type: 'mcq',
        question: 'In a DECA Individual Series Event, approximately how long does a competitor have to prepare for the role-play scenario before presenting to the judge?',
        options: [
          '5 minutes',
          '10 minutes',
          '15 minutes',
          '20 minutes',
        ],
        correctAnswer: 1,
        explanation: 'DECA Individual Series Events provide 10 minutes of preparation time for the role-play scenario, followed by a 10-minute presentation and Q&A with the judge.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l5-q2',
        type: 'mcq',
        question: 'Which DECA marketing event focuses on apparel and accessories, including trend forecasting, visual merchandising, and assortment planning?',
        options: [
          'Principles of Marketing',
          'Sports & Entertainment Marketing',
          'Fashion Marketing',
          'Marketing Management',
        ],
        correctAnswer: 2,
        explanation: 'Fashion Marketing (FM) focuses on the apparel and accessories industry, requiring knowledge of trend forecasting, visual merchandising, buying and assortment planning, and brand positioning in a cyclical, trend-driven market.',
        marks: 1,
        difficulty: 'standard',
      },
      {
        id: 'dc2-l5-q3',
        type: 'mcq',
        question: 'A DECA judge asks a follow-up question: "How would you measure the success of your proposed social media campaign?" The BEST response would include:',
        options: [
          'A general statement that social media success is hard to measure precisely',
          'Specific KPIs such as engagement rate, conversion rate, and ROAS with target benchmarks',
          'A recommendation to hire a professional analytics firm to evaluate results',
          'An explanation of why the campaign will definitely succeed based on the quality of the creative',
        ],
        correctAnswer: 1,
        explanation: 'DECA judges reward specific, quantifiable answers. Naming precise KPIs (engagement rate, conversion rate, ROAS) with target benchmarks demonstrates analytical rigor and business acumen — exactly what top-scoring presentations deliver.',
        marks: 1,
        difficulty: 'standard',
      },
    ],
  },
]
