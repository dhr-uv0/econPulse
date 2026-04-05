import type { CurriculumModule, Lesson } from '@/lib/types'

const ib6Lessons: Lesson[] = [
  {
    id: 'ib6-l1', moduleId: 'ib6-international', title: 'International Trade — Comparative Advantage and Benefits', order: 1, estimatedMinutes: 35, tags: ['IB', 'comparative-advantage', 'trade'],
    description: 'Derive comparative advantage using opportunity cost; show gains from specialisation; evaluate limitations.',
    flashcards: [
      { id: 'fc-ib6-l1-1', front: 'What is comparative advantage?', back: 'A country has a comparative advantage in producing a good if its opportunity cost of production is lower than in the other country. Trade is mutually beneficial whenever opportunity costs differ.', tags: ['comparative-advantage', 'IB'] },
      { id: 'fc-ib6-l1-2', front: 'How do you calculate opportunity cost for trade?', back: 'Divide the units of the forgone good by the units of the produced good using the production possibility data. The country with the lower ratio for a good has a comparative advantage in it.', tags: ['comparative-advantage', 'IB'] },
      { id: 'fc-ib6-l1-3', front: 'Name two limitations of comparative advantage theory.', back: '(1) It assumes constant opportunity costs and ignores increasing costs. (2) It ignores transport costs, trade barriers, factor immobility, and distributional effects within countries.', tags: ['trade', 'IB'] },
    ],
    quiz: [
      { id: 'q-ib6-l1-1', type: 'mcq', question: 'Country A can produce 40 units of cloth or 20 units of wine; Country B can produce 30 units of cloth or 15 units of wine. Which statement is correct?', options: ['Country A has a comparative advantage in cloth and Country B in wine', 'Country B has a comparative advantage in cloth and Country A in wine', 'Neither country has a comparative advantage', 'Both countries have an absolute advantage in cloth'], correctAnswer: 2, explanation: 'Opportunity cost of cloth: A = 20/40 = 0.5 wine; B = 15/30 = 0.5 wine. Opportunity costs are identical, so neither country has a comparative advantage and trade offers no gains.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l1-2', type: 'mcq', question: 'According to comparative advantage theory, a country should specialise in the good for which it has:', options: ['The greatest absolute output capacity', 'The lowest opportunity cost of production', 'The highest world market price', 'The largest labour force available'], correctAnswer: 1, explanation: 'Comparative advantage is determined solely by relative opportunity cost, not absolute productivity. Specialising where opportunity cost is lowest maximises total output from available resources.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Comparative advantage is the cornerstone of international trade theory. Even if one country can produce every good more efficiently than another in absolute terms, both can gain from trade provided their opportunity costs differ. The logic is straightforward: each country should concentrate resources on the activity in which its productivity advantage — or disadvantage — is greatest relative to the other good. By specialising and trading, both economies can consume beyond their individual production possibility frontiers. David Ricardo formalised this insight in 1817 using a two-country, two-good model, and it remains the most powerful argument for free trade in the IB curriculum.\n\nTo derive comparative advantage from a data table, calculate the opportunity cost for each good in each country and compare them across countries. The country with the lower opportunity cost for a given good holds the comparative advantage in that good. For the IB exam, students must also evaluate the limitations of the model: it assumes constant costs, perfect factor mobility, no transport costs, and ignores the distributional consequences of trade within a country. In reality, workers in import-competing industries may lose jobs even as the nation as a whole gains, raising equity concerns that pure comparative advantage theory does not address.`,
      prerequisiteRecap: `IB macroeconomics examined how balance of payments disequilibria — especially persistent current account deficits — arise when a country imports more than it exports; comparative advantage now explains the gains from specialisation that motivate trade in the first place and provides the foundation for evaluating when trade is mutually beneficial.`,
      recallQuestions: [
        {
          id: 'ib6-l1-recall-1',
          type: 'mcq' as const,
          question: 'A persistent current account deficit means a country is:',
          options: [
            'Importing more goods, services, and income than it exports, financed by a financial account surplus — net borrowing from the rest of the world',
            'Exporting more than it imports, accumulating foreign exchange reserves',
            'In fiscal deficit, spending more in its government budget than it collects in taxes',
            'Experiencing a depreciation of its currency that worsens its terms of trade',
          ],
          correctAnswer: 0,
          explanation: 'A current account deficit means the value of imports of goods, services, and income exceeds exports. By the balance of payments identity, this must be matched by a financial account surplus — the country attracts capital inflows (FDI, portfolio investment, or borrowing) to finance the gap, accumulating net foreign liabilities.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l2', moduleId: 'ib6-international', title: 'Types of Trade Protection and Their Effects', order: 2, estimatedMinutes: 45, tags: ['IB', 'tariffs', 'quotas', 'protectionism'],
    description: 'Analyse tariffs, quotas, subsidies, and voluntary export restraints using IB diagrams; calculate welfare effects.',
    flashcards: [
      { id: 'fc-ib6-l2-1', front: 'How does a tariff affect domestic producers, consumers, and government?', back: 'A tariff raises the domestic price above the world price: domestic producers gain (higher producer surplus), consumers lose (lower consumer surplus), and the government gains tariff revenue. Net welfare loss = two deadweight loss triangles.', tags: ['tariffs', 'IB'] },
      { id: 'fc-ib6-l2-2', front: 'What is a voluntary export restraint (VER)?', back: 'An agreement where the exporting country voluntarily limits the quantity it exports to the importing country. Effects are similar to a quota, but the quota rent goes to foreign exporters rather than the domestic government.', tags: ['protectionism', 'IB'] },
      { id: 'fc-ib6-l2-3', front: 'How does a production subsidy differ from a tariff in its welfare effects?', back: 'A subsidy lowers domestic production costs, expanding domestic supply without raising consumer prices. Consumers are not harmed directly, but taxpayers fund the subsidy and there is still a resource misallocation deadweight loss.', tags: ['subsidies', 'IB'] },
    ],
    quiz: [
      { id: 'q-ib6-l2-1', type: 'mcq', question: 'When a country imposes a tariff on an imported good, the deadweight loss arises because:', options: ['Government revenue rises above the consumer surplus lost', 'Resources are drawn into less efficient domestic production and some mutually beneficial imports are prevented', 'Domestic producers reduce output in response to foreign competition', 'The terms of trade deteriorate for the importing country'], correctAnswer: 1, explanation: 'A tariff creates two deadweight loss triangles: one from inefficient domestic overproduction (resources used at higher cost than world price) and one from consumption lost (consumers priced out of the market). These foregone gains constitute the net welfare loss.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l2-2', type: 'mcq', question: 'Compared to a tariff that achieves the same reduction in imports, a quota:', options: ['Always generates more government revenue', 'Does not generate any government revenue unless import licences are auctioned', 'Causes a smaller deadweight loss', 'Allows the domestic price to fall during a demand surge'], correctAnswer: 1, explanation: 'A quota fixes the quantity of imports regardless of demand or supply shifts. Government revenue from a quota arises only if licences are auctioned; otherwise the quota rent accrues to importers or foreign exporters. A tariff automatically generates revenue and, under a demand surge, allows more imports at the higher price.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Trade protection instruments share the common aim of shielding domestic industries from foreign competition, but they do so through different mechanisms and with different distributional consequences. A tariff is a tax on imports that raises the domestic price to Pw + t, reducing import volume. The welfare analysis — conducted using the standard IB small-economy diagram — shows a gain in producer surplus and government revenue but a larger loss in consumer surplus, yielding a net deadweight loss equal to the two characteristic triangles of productive and consumptive inefficiency. Students must be able to label these areas precisely and calculate their magnitudes from numerical data.\n\nQuotas, subsidies, and VERs achieve similar import-restriction effects through different channels. A quota sets a maximum import quantity; if demand increases, the domestic price rises further without allowing more imports. A production subsidy lowers marginal cost for domestic firms, expanding their supply and reducing the import gap, all without affecting the consumer price — making it less visible politically but still a burden on taxpayers. A VER resembles a quota but, crucially, the quota rent flows to foreign exporters rather than the domestic government. IB examiners frequently ask for evaluation: consider arguments for protection (infant industry, strategic trade, national security, anti-dumping) alongside the efficiency and equity arguments against.`,
      prerequisiteRecap: `The previous lesson showed that comparative advantage provides the rationale for free trade and specialisation; trade protection now examines why countries nonetheless restrict imports, and uses the same supply-and-demand framework to quantify the efficiency costs of each instrument.`,
      recallQuestions: [
        {
          id: 'ib6-l2-recall-1',
          type: 'mcq' as const,
          question: 'According to comparative advantage theory, trade is mutually beneficial when:',
          options: [
            'The opportunity costs of production differ between countries, so each can gain by specialising in the good for which its relative cost is lowest',
            'One country has an absolute advantage in all goods, making specialisation unnecessary for the other country',
            'Countries have identical production technologies but different factor endowments',
            'Trade is restricted to goods where both countries have an absolute advantage',
          ],
          correctAnswer: 0,
          explanation: 'Comparative advantage depends on relative opportunity costs, not absolute productivity. Even if one country is more efficient at producing everything, trade is still mutually beneficial as long as opportunity costs differ — each country specialises where its relative cost disadvantage is smallest and trades for the rest.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l3', moduleId: 'ib6-international', title: 'Economic Integration — Free Trade Areas to Full Union', order: 3, estimatedMinutes: 35, tags: ['IB', 'economic-integration', 'EU'],
    description: 'Define and distinguish the five levels of economic integration; analyse effects of joining a customs union.',
    flashcards: [
      { id: 'fc-ib6-l3-1', front: 'List the five levels of economic integration in ascending order.', back: '1. Preferential Trade Area — 2. Free Trade Area — 3. Customs Union — 4. Common Market — 5. Economic/Monetary Union. Each level removes additional barriers or harmonises additional policies.', tags: ['economic-integration', 'IB'] },
      { id: 'fc-ib6-l3-2', front: 'What distinguishes a customs union from a free trade area?', back: 'A free trade area removes tariffs between members but each member keeps its own external tariff. A customs union additionally adopts a common external tariff (CET) against non-members, requiring deeper policy coordination.', tags: ['economic-integration', 'IB'] },
      { id: 'fc-ib6-l3-3', front: 'Define trade creation and trade diversion.', back: 'Trade creation: joining a customs union shifts purchases from high-cost domestic production to lower-cost partner imports — welfare gain. Trade diversion: purchases shift from low-cost non-member imports (previously affordable) to higher-cost partner imports protected by the CET — welfare loss.', tags: ['economic-integration', 'IB'] },
    ],
    quiz: [
      { id: 'q-ib6-l3-1', type: 'mcq', question: 'Trade diversion occurs when a country joins a customs union and:', options: ['Imports more from the lowest-cost world producer', 'Switches imports from a more efficient non-member to a less efficient member country', 'Reduces its domestic production of the affected good', 'Increases its exports to member countries'], correctAnswer: 1, explanation: 'The common external tariff raises the price of non-member imports above the internal price, causing the country to source goods from a less efficient member rather than the globally cheapest producer — a welfare loss that may offset trade creation gains.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l3-2', type: 'mcq', question: 'In a common market, which additional freedom exists compared to a customs union?', options: ['A common external tariff is applied to all non-members', 'Goods, services, capital, and labour move freely between member states', 'A single central bank sets monetary policy for all members', 'Member states share the same government budget'], correctAnswer: 1, explanation: 'A common market builds on the customs union by adding free movement of all factors of production — labour and capital — in addition to goods and services. A monetary union adds a single currency; political union would involve shared governance.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `Economic integration describes the progressive removal of barriers between economies. The five levels form a hierarchy: a preferential trade area merely reduces tariffs on selected goods; a free trade area eliminates internal tariffs but preserves national external tariffs (requiring rules of origin to prevent trade deflection); a customs union adds a common external tariff, forging a single trade policy toward the rest of the world; a common market permits free movement of all factors; and an economic or monetary union harmonises macroeconomic policies and, at its fullest, adopts a single currency. The European Union represents the most advanced real-world example, having progressed through most of these stages since the Treaty of Rome in 1957.\n\nThe welfare impact of joining a customs union depends on the balance between trade creation and trade diversion (Viner, 1950). Trade creation occurs when domestic production is replaced by cheaper imports from partner countries — resources move to their comparative advantage use and consumers benefit from lower prices. Trade diversion occurs when the common external tariff prices out non-member exporters who were previously cheaper than member suppliers, forcing imports from a less efficient source. Net welfare improves only if trade creation exceeds trade diversion. IB essays on integration should weigh dynamic gains (larger markets, competition, FDI inflows) against the static welfare analysis and discuss equity concerns such as structural unemployment in import-competing sectors.`,
      prerequisiteRecap: `The previous lesson analysed how individual trade protection instruments — tariffs, quotas, subsidies, VERs — create welfare costs by raising domestic prices above the world price; economic integration now examines what happens when groups of countries collectively dismantle those barriers among themselves while maintaining a common external tariff against the rest of the world.`,
      recallQuestions: [
        {
          id: 'ib6-l3-recall-1',
          type: 'mcq' as const,
          question: 'When a country imposes a tariff on an imported good, the net welfare effect on the importing country is:',
          options: [
            'A net loss equal to two deadweight loss triangles, because the gain in producer surplus and government revenue is smaller than the loss in consumer surplus',
            'A net gain because government revenue fully offsets the consumer surplus loss',
            'Neutral, because higher producer surplus exactly compensates for lower consumer surplus',
            'A net gain because domestic output rises and employment increases',
          ],
          correctAnswer: 0,
          explanation: 'A tariff raises the domestic price above the world price, increasing producer surplus and generating government revenue, but reducing consumer surplus by more than the combined gains. The net welfare loss equals the two triangles: one representing inefficient domestic overproduction and one representing consumption foregone — both are deadweight losses to the importing country.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l4', moduleId: 'ib6-international', title: 'Exchange Rates — Flexible and Fixed Systems', order: 4, estimatedMinutes: 40, tags: ['IB', 'exchange-rates', 'fixed', 'floating'],
    description: 'Explain floating and fixed exchange rate determination; analyse factors causing appreciation/depreciation.',
    flashcards: [
      { id: 'fc-ib6-l4-1', front: 'What determines a currency\'s exchange rate in a floating system?', back: 'Supply and demand for the currency in the foreign exchange market. The exchange rate moves freely to the equilibrium where quantity of currency demanded equals quantity supplied.', tags: ['exchange-rates', 'IB'] },
      { id: 'fc-ib6-l4-2', front: 'Name three factors that cause a currency to appreciate.', back: '(1) Rising domestic interest rates attract capital inflows. (2) Higher domestic inflation relative to trading partners reduces exports and raises imports — but a fall in inflation relative to partners raises demand for exports and appreciates the currency. (3) Speculation that the currency will rise in value increases demand. Also: strong export performance, rising national income abroad.', tags: ['exchange-rates', 'IB'] },
      { id: 'fc-ib6-l4-3', front: 'How does a central bank maintain a fixed exchange rate if the currency faces downward pressure?', back: 'The central bank uses foreign currency reserves to buy the domestic currency (increasing demand), raises interest rates to attract capital inflows, or imposes capital controls. It may also request an IMF loan if reserves are depleted.', tags: ['fixed', 'IB'] },
    ],
    quiz: [
      { id: 'q-ib6-l4-1', type: 'mcq', question: 'If domestic interest rates rise relative to those abroad, the exchange rate will tend to:', options: ['Depreciate as capital flows out', 'Appreciate as capital flows in', 'Remain unchanged because trade flows dominate', 'Depreciate because imports become more expensive'], correctAnswer: 1, explanation: 'Higher domestic interest rates attract foreign capital seeking better returns. Investors must buy domestic currency to invest domestically, increasing demand for it and causing appreciation in a floating system.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l4-2', type: 'mcq', question: 'A country operating a fixed exchange rate above its free-market equilibrium will experience:', options: ['An excess supply of its currency, requiring the central bank to sell foreign reserves to buy it back', 'An excess demand for its currency, allowing the central bank to accumulate reserves', 'Continuous appreciation pressure requiring capital outflow controls', 'No intervention because the market will self-correct'], correctAnswer: 0, explanation: 'An overvalued fixed rate means the official price exceeds the free-market rate. At the high official price, more currency is supplied (exporters earn less, imports are cheaper) than demanded, creating excess supply. The central bank must absorb this excess by buying domestic currency with foreign reserves, which depletes reserves over time.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `An exchange rate is the price of one currency expressed in terms of another, determined in the foreign exchange market by the interaction of demand (from importers, investors, tourists, and speculators wanting to buy domestic assets) and supply (from domestic residents buying foreign goods, investing abroad, or converting savings). Under a freely floating system, the rate adjusts continuously so that the market clears. Appreciation occurs when demand for the currency increases or supply decreases — triggered by higher relative interest rates, stronger export performance, lower relative inflation, or positive speculative sentiment. Depreciation is the mirror image.\n\nA fixed exchange rate regime requires active central bank management. The government announces an official rate and commits to defending it by intervening in the foreign exchange market. If the currency faces downward pressure (supply exceeds demand at the pegged rate), the central bank sells foreign reserves to buy its own currency. Sustained deficits drain reserves and can force a devaluation or abandonment of the peg, as seen in the 1992 sterling crisis or the 1997 Asian financial crisis. Conversely, a currency under upward pressure requires the central bank to sell domestic currency and accumulate reserves, potentially fuelling domestic inflation. IB students must be able to draw and interpret both floating and fixed rate diagrams, trace the effects of shocks, and evaluate the trade-offs between exchange rate certainty and loss of monetary policy autonomy.`,
      prerequisiteRecap: `The previous lesson showed how economic integration — particularly joining a customs union — creates trade creation and trade diversion effects; exchange rates now determine the price competitiveness of imports and exports in the international economy, directly influencing the trade flows and current account balances analysed in integration.`,
      recallQuestions: [
        {
          id: 'ib6-l4-recall-1',
          type: 'mcq' as const,
          question: 'Trade creation within a customs union occurs when:',
          options: [
            'A member country shifts from high-cost domestic production to cheaper imports from a partner country, reallocating resources toward comparative advantage uses and benefiting consumers',
            'A member country diverts imports from a low-cost non-member to a higher-cost member protected by the common external tariff',
            'A member country increases its exports to non-members by lowering the common external tariff',
            'Two member countries both expand domestic production of the same good, reducing the need for trade between them',
          ],
          correctAnswer: 0,
          explanation: 'Trade creation is the welfare-improving effect of integration: domestic output that was produced at high cost behind tariff protection is now replaced by cheaper imports from partner countries, moving resources toward comparative advantage uses. This is distinct from trade diversion, where the common external tariff redirects imports from a cheaper non-member to a more expensive member.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l5', moduleId: 'ib6-international', title: 'Balance of Payments — Accounts and Disequilibria', order: 5, estimatedMinutes: 40, tags: ['IB', 'balance-of-payments', 'current-account'],
    description: 'Define current, capital, and financial account; explain the accounting identity; analyse causes and consequences of CA deficits.',
    flashcards: [
      { id: 'fc-ib6-l5-1', front: 'What are the three main accounts in the balance of payments?', back: '(1) Current account: trade in goods, trade in services, primary income (investment income, wages), and secondary income (transfers). (2) Capital account: capital transfers and non-produced, non-financial assets. (3) Financial account: FDI, portfolio investment, reserve assets, and other investment.', tags: ['balance-of-payments', 'IB'] },
      { id: 'fc-ib6-l5-2', front: 'State the balance of payments accounting identity.', back: 'Current account + Capital account + Financial account = 0 (in principle). A current account deficit must be financed by a surplus in the financial/capital account — the country is borrowing or selling assets to the rest of the world.', tags: ['balance-of-payments', 'IB'] },
      { id: 'fc-ib6-l5-3', front: 'Give two consequences of a persistent current account deficit.', back: '(1) Accumulation of foreign debt and interest obligations that burden future income. (2) Downward pressure on the exchange rate as imports exceed exports, which can cause inflationary pressure via higher import prices.', tags: ['current-account', 'IB'] },
    ],
    quiz: [
      { id: 'q-ib6-l5-1', type: 'mcq', question: 'Which of the following would be recorded as a credit (positive entry) in the current account?', options: ['A domestic firm importing machinery from Germany', 'A foreign student paying tuition fees to a domestic university', 'A domestic investor buying shares in a foreign company', 'The central bank purchasing foreign government bonds'], correctAnswer: 1, explanation: 'Tuition fees paid by a foreign student to a domestic institution are an export of educational services — a credit to the current account services component. Importing machinery is a debit; buying foreign shares is recorded in the financial account.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l5-2', type: 'mcq', question: 'A country running a persistent current account deficit is most likely:', options: ['Exporting more goods than it imports', 'Absorbing more resources than it produces, financed by capital inflows', 'Accumulating foreign exchange reserves rapidly', 'Experiencing strong upward pressure on its currency'], correctAnswer: 1, explanation: 'A current account deficit means spending on foreign goods, services, and transfers exceeds earnings from exports. The gap is financed by a financial account surplus — the country borrows from abroad or sells assets to foreigners. This is equivalent to national expenditure exceeding national income.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The balance of payments is a systematic record of all economic transactions between residents of a country and the rest of the world over a given period. The current account captures flows from trade in goods (the visible balance), trade in services (invisibles), primary income (returns on investment and cross-border labour income), and secondary income (remittances and foreign aid). The financial account records changes in ownership of financial assets: foreign direct investment, portfolio investment (shares and bonds), and changes in reserve assets held by the central bank. The capital account, a much smaller component, covers capital transfers and intangibles such as patents.\n\nBecause every transaction has two sides, the overall balance of payments must sum to zero in principle — a current account deficit is matched by a financial account surplus. Understanding this accounting identity reveals the macroeconomic meaning of imbalances: a country with a current account deficit is a net borrower from the rest of the world, consuming more than it produces. Whether this is problematic depends on context. If the deficit reflects productive investment inflows (as in a developing country attracting FDI), it may be sustainable and growth-enhancing. If it reflects excessive consumption financed by short-term debt, it creates vulnerability to sudden stops in capital flows. IB examiners expect nuanced evaluation of both causes (low savings, strong domestic demand, loss of competitiveness) and consequences (exchange rate depreciation, rising external debt, import of deflationary pressure via depreciation).`,
      prerequisiteRecap: `The previous lesson explained how exchange rates are determined in the foreign exchange market and how central banks defend fixed pegs using reserve assets; the balance of payments now provides the accounting framework that records all the currency flows — trade, investment, and reserve changes — that drive exchange rate movements.`,
      recallQuestions: [
        {
          id: 'ib6-l5-recall-1',
          type: 'mcq' as const,
          question: 'A central bank defending an overvalued fixed exchange rate must:',
          options: [
            'Buy its own currency using foreign exchange reserves, reducing the excess supply of domestic currency at the official rate and drawing down reserves over time',
            'Sell its own currency to increase supply, pushing the exchange rate down toward the official rate',
            'Raise tariffs on imports to reduce the demand for foreign currency',
            'Lower interest rates to attract capital inflows and increase demand for the domestic currency',
          ],
          correctAnswer: 0,
          explanation: 'An overvalued fixed rate means the official price is above the free-market equilibrium: more domestic currency is supplied (cheap imports, weak exports) than demanded at the official rate. The central bank must absorb this excess supply by buying domestic currency with foreign reserves. If reserves are depleted, the peg must be devalued or abandoned.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l6', moduleId: 'ib6-international', title: 'Marshall-Lerner Condition and the J-Curve (HL)', order: 6, estimatedMinutes: 35, tags: ['IB', 'HL', 'Marshall-Lerner', 'J-curve'],
    description: 'Derive the ML condition; explain why depreciation may worsen the current account initially; draw and interpret the J-curve.',
    flashcards: [
      { id: 'fc-ib6-l6-1', front: 'State the Marshall-Lerner condition.', back: 'A currency depreciation improves the current account only if the sum of the price elasticities of demand for exports and imports exceeds one: |PEDx| + |PEDm| > 1.', tags: ['Marshall-Lerner', 'IB', 'HL'] },
      { id: 'fc-ib6-l6-2', front: 'Why might a depreciation initially worsen the current account?', back: 'In the short run, trade volumes are inelastic — contracts are fixed, buyers have not yet found substitutes. Import costs rise immediately in domestic currency terms while export volumes rise slowly, worsening the trade balance before it improves.', tags: ['J-curve', 'IB', 'HL'] },
      { id: 'fc-ib6-l6-3', front: 'Describe the J-curve shape and label its phases.', back: 'On a time-against-current-account diagram, the balance initially dips below the original level (short-run deterioration) then rises above it (long-run improvement) as elasticities increase over time. The path traces a letter J.', tags: ['J-curve', 'IB', 'HL'] },
    ],
    quiz: [
      { id: 'q-ib6-l6-1', type: 'mcq', question: 'A country depreciates its currency. If PEDx = 0.3 and PEDm = 0.6, the current account will:', options: ['Improve because total elasticity is below 1', 'Worsen because total elasticity is below 1', 'Improve because both elasticities are positive', 'Remain unchanged regardless of elasticities'], correctAnswer: 1, explanation: '|PEDx| + |PEDm| = 0.3 + 0.6 = 0.9 < 1. The Marshall-Lerner condition is not satisfied, so the depreciation will actually worsen the current account — the value effect of higher import prices outweighs the volume effect.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l6-2', type: 'mcq', question: 'The J-curve effect implies that the effectiveness of exchange rate policy as a tool to correct a current account deficit is:', options: ['Immediate and highly predictable', 'Delayed, because trade volumes adjust only gradually to price changes', 'Permanent only if the Marshall-Lerner condition fails', 'Independent of the elasticity of demand for exports and imports'], correctAnswer: 1, explanation: 'The J-curve arises because short-run elasticities are low — contracts, habits, and search costs prevent rapid quantity adjustments. As time passes, elasticities rise, the Marshall-Lerner condition is more likely to hold, and the depreciation eventually improves the current account.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The Marshall-Lerner (ML) condition addresses a fundamental question in open-economy macroeconomics: does a currency depreciation improve or worsen the current account? A depreciation makes exports cheaper in foreign currency terms and imports more expensive in domestic currency terms. Whether the trade balance improves depends on whether the volume effects (more exports sold, fewer imports bought) outweigh the price effects (each import now costs more). The ML condition shows that improvement requires the combined price elasticity of demand for exports and imports to exceed unity. Intuitively, if both demands are inelastic, foreign buyers barely increase their purchases of cheaper exports and domestic consumers barely cut back on costlier imports, so the higher import bill dominates and the trade balance worsens.\n\nThe J-curve is the dynamic complement to the ML condition. Even if the ML condition holds in the long run, it typically does not hold in the short run: contracts are pre-committed in foreign currency, importers and exporters cannot instantly source new suppliers or customers, and consumer habits adjust slowly. As a result, in the months immediately following a depreciation, import values rise sharply while export volumes respond sluggishly, worsening the current account. Over time, as old contracts expire and new sourcing decisions are made, the volume adjustments dominate and the current account improves. The resulting time path — initial deterioration followed by recovery — traces the shape of the letter J. HL students must be able to draw and annotate the J-curve, label the initial deterioration and long-run improvement phases, and explain the role of elasticity in determining the eventual outcome.`,
      prerequisiteRecap: `The previous lesson showed that a current account deficit is matched by a financial account surplus and can be caused by low competitiveness or excessive domestic demand; the Marshall-Lerner condition and J-curve now explain whether and when a currency depreciation — a common policy response to a deficit — will actually improve the current account.`,
      recallQuestions: [
        {
          id: 'ib6-l6-recall-1',
          type: 'mcq' as const,
          question: 'A persistent current account deficit can be caused by which of the following?',
          options: [
            'Strong domestic demand that sucks in imports combined with a loss of international price competitiveness that reduces export volumes',
            'A financial account deficit that forces the country to run a current account surplus to balance payments',
            'A government budget surplus that reduces domestic absorption below national income',
            'High domestic interest rates that attract capital inflows and depreciate the currency',
          ],
          correctAnswer: 0,
          explanation: 'A current account deficit arises when spending on imports exceeds export earnings. Strong domestic demand increases import volumes, while reduced competitiveness (from inflation, exchange rate appreciation, or low productivity) shrinks export volumes. Both pressures widen the current account deficit simultaneously.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
  {
    id: 'ib6-l7', moduleId: 'ib6-international', title: 'Terms of Trade (HL)', order: 7, estimatedMinutes: 30, tags: ['IB', 'HL', 'terms-of-trade'],
    description: 'Calculate and interpret the terms of trade index; analyse deteriorating ToT for commodity exporters.',
    flashcards: [
      { id: 'fc-ib6-l7-1', front: 'Formula for the terms of trade index', back: 'ToT = (Index of export prices / Index of import prices) × 100. A rise indicates an improvement (each unit of exports buys more imports); a fall indicates deterioration.', tags: ['terms-of-trade', 'IB', 'HL'] },
      { id: 'fc-ib6-l7-2', front: 'What does a deterioration in the terms of trade mean for living standards?', back: 'A country must export more goods to pay for the same quantity of imports. Real purchasing power of export earnings falls, which can reduce import capacity, living standards, and the ability to service foreign debt.', tags: ['terms-of-trade', 'IB', 'HL'] },
      { id: 'fc-ib6-l7-3', front: 'Why do commodity exporters often face deteriorating terms of trade over time?', back: 'The Prebisch-Singer hypothesis argues that commodity prices tend to fall relative to manufactured goods prices over the long run, because demand for commodities is income-inelastic while productivity gains in manufacturing are passed on as lower prices rather than higher wages.', tags: ['terms-of-trade', 'IB', 'HL'] },
    ],
    quiz: [
      { id: 'q-ib6-l7-1', type: 'mcq', question: 'A country\'s export price index rises from 100 to 120 while its import price index rises from 100 to 150. Its terms of trade index is now:', options: ['80', '120', '125', '30'], correctAnswer: 0, explanation: 'ToT = (120/150) × 100 = 80. The terms of trade have deteriorated — the country must now export more to pay for the same quantity of imports because import prices rose faster than export prices.', marks: 2, difficulty: 'higher' },
      { id: 'q-ib6-l7-2', type: 'mcq', question: 'An improvement in the terms of trade is most likely to benefit a country when:', options: ['It exports a small share of national output', 'Exports are a large share of GDP and demand for them is income-elastic', 'The country runs a current account surplus already', 'Import prices are rising faster than export prices'], correctAnswer: 1, explanation: 'The benefit of improved terms of trade (higher export prices relative to import prices) is magnified when exports are large relative to GDP, as the purchasing power gain from each unit exported has a greater impact on national welfare. Income-elastic export demand also means trading partners do not sharply cut purchases when prices rise.', marks: 2, difficulty: 'higher' },
    ],
    content: {
      isStub: true,
      conceptualExplanation: `The terms of trade (ToT) measure the relative price of a country's exports in terms of what they can purchase in imports. The index is constructed by dividing the export price index by the import price index and multiplying by 100. An improvement means export prices have risen relative to import prices: the country can acquire more imports per unit of exports, raising real purchasing power and potentially living standards. A deterioration has the opposite effect — the country must "run faster to stand still," exporting more volume just to maintain its import capacity. For HL students, the ToT is a critical tool linking trade prices to macroeconomic welfare.\n\nThe Prebisch-Singer hypothesis provides a long-run perspective particularly relevant to developing countries dependent on commodity exports. It argues that commodity prices (agricultural goods, raw materials, energy) tend to decline relative to manufactured goods prices over time, because productivity gains in manufacturing raise wages rather than reduce prices, while commodity demand is income-inelastic so rising global incomes do not proportionally boost commodity prices. If correct, commodity exporters face a structural tendency toward ToT deterioration, reducing their ability to import capital goods needed for development and potentially trapping them in primary-product specialisation. Empirical evidence is mixed and context-dependent, making this a rich topic for IB evaluation essays that require students to engage with real-world data and counterarguments.`,
      prerequisiteRecap: `The previous lesson showed that a currency depreciation may only improve the current account with a lag (the J-curve) because trade volumes adjust slowly; the terms of trade now examines the price dimension directly — whether the prices a country receives for its exports are rising or falling relative to the prices it pays for its imports, determining the purchasing power of its export earnings.`,
      recallQuestions: [
        {
          id: 'ib6-l7-recall-1',
          type: 'mcq' as const,
          question: 'The Marshall-Lerner condition states that a currency depreciation will improve the current account only if:',
          options: [
            'The sum of the price elasticities of demand for exports and imports exceeds one — i.e., |PEDx| + |PEDm| > 1',
            'The sum of the price elasticities of demand for exports and imports is less than one',
            'The exchange rate depreciates by more than the inflation rate differential between countries',
            'The current account deficit exceeds 3% of GDP before the depreciation',
          ],
          correctAnswer: 0,
          explanation: 'For a depreciation to improve the trade balance, the volume effects (more exports, fewer imports) must outweigh the adverse price effect (each unit of imports costs more). This requires |PEDx| + |PEDm| > 1. If both demands are inelastic and the sum is below one, the higher import bill dominates and the trade balance worsens.',
          marks: 1,
          difficulty: 'standard' as const,
        },
      ],
    },
  },
]

export const ib6International: CurriculumModule = {
  id: 'ib6-international',
  title: 'IB Unit 4 — International Economics',
  description: 'Cover the full IB international economics unit including trade theory, protection, exchange rates, and balance of payments.',
  tier: 'IB' as const,
  track: 'IB_SL' as const,
  unit: 6,
  lessons: ib6Lessons,
  estimatedHours: 5,
  color: '#8b5cf6',
  icon: 'BookOpen',
}
