window.COURSES = [
{
  id: "evt", num: 1, title: "Expectancy Violations Theory", who: "Judee Burgoon", mins: 12,
  blurb: "How we interpret, explain, and react when someone breaks our expectations.",
  lessons: [
    { title: "The big idea", body: `
      <p>EVT asks: <strong>how do we interpret, explain, and react to violations?</strong> It started with <strong>proxemics</strong> (personal space boundary violations), then grew into a general theory of expectation-breaking.</p>
      <p><strong>Variables:</strong> IV = the violation. DV = the outcome.</p>` },
    { title: "Two kinds of expectancies", body: `
      <table class="t"><tr><th>Type</th><th>Meaning</th></tr>
      <tr><td><strong>Predictive</strong></td><td>What we think <em>will</em> happen, based on how this person usually acts.</td></tr>
      <tr><td><strong>Prescriptive</strong></td><td>What <em>should</em> happen, based on norms.</td></tr></table>
      <p>Expectancies are shaped by three things: the <strong>relationship</strong>, the <strong>context</strong>, and the <strong>communicator's characteristics</strong>.</p>` },
    { title: "Reacting to a breach", body: `
      <p>EVT predicts two kinds of reactions:</p>
      <ul><li><strong>Reciprocate</strong> = match the behavior.</li><li><strong>Compensate</strong> = do the opposite.</li></ul>
      <p>When a violation happens, you judge it in two ways. Violations are <em>not always negative</em>.</p>
      <ol><li><strong>Violation valence:</strong> is the <em>behavior</em> itself positive or negative?</li>
      <li><strong>Communicator reward valence:</strong> how do you judge the <em>person</em> who did it?
        <ul><li>Positive if attractive, high status, credible, intelligent, charismatic.</li><li>Negative if untrustworthy or low status.</li></ul></li></ol>
      <p><strong>Positive violation:</strong> getting a gift, paying a compliment. <strong>Negative violation:</strong> telling a secret, slapping someone.</p>
      <div class="callout"><strong>Key takeaway:</strong> sometimes violating expectations is a <em>better strategy</em> than conforming.</div>` }
  ],
  examples: [
    { title: "Megan at work", scenario: "Megan is usually calm and composed, but she suddenly gets upset after a coworker mocks and humiliates her. Which expectancies are involved?",
      answer: `<p><strong>Predictive:</strong> Megan is usually calm and composed, so her being upset is unexpected.</p><p><strong>Prescriptive:</strong> coworkers <em>shouldn't</em> mock and humiliate each other (a norm).</p>` },
    { title: "Jennifer the complainer", scenario: "Jennifer complains a lot, and today she complains again. Is that a violation?",
      answer: `<p>No. Complaining is what she <em>usually</em> does, so the <strong>predictive</strong> expectancy isn't broken. You may even take her less seriously.</p>` },
    { title: "A compliment from a stranger", scenario: "A very charismatic, high-status professor you barely know compliments your work. Evaluate valence.",
      answer: `<p>Violation valence = <strong>positive</strong> (a compliment). Communicator reward valence = <strong>positive</strong> (charismatic, high status). Best case: a positive violation that likely works better than conforming.</p>` }
  ]
},
{
  id: "face", num: 2, title: "Self-Presentation, Face & Identity", who: "Dyads, impression management, facework", mins: 10,
  blurb: "Why interpersonal communication needs two people, and how we manage the image we show the world.",
  lessons: [
    { title: "Dyadic & interdependent", body: `
      <ul><li><strong>Dyadic:</strong> you need <em>2 people</em> for interpersonal communication.</li>
      <li><strong>Interdependent:</strong> the two people have a <em>mutual effect</em> on each other.</li></ul>
      <p><strong>Range of relational depth</strong> (dyadic + interdependent, from less to more close/personal): acquaintance, relationship with a professor, physical therapist, family.</p>` },
    { title: "Impression management", body: `
      <p><strong>Impression management / self-presentation</strong> uses a <em>stage and curtain</em> metaphor: we're all actors. We communicate differently depending on the <strong>audience</strong> (like a Halloween costume).</p>` },
    { title: "Face and facework", body: `
      <p><strong>Face</strong> = the public image we exhibit in the world. It changes in different contexts.</p>
      <p><strong>What makes us concerned about face?</strong></p>
      <ul><li>Physical presentation (makeup, clothes)</li><li>A strong statement made to the wrong crowd</li><li>An emotional state that's unlike you</li><li>Performance that betrays your self-identity (missing the free throw and losing the game)</li></ul>
      <p><strong>Facework</strong> = communicative strategies that attempt to <strong>maintain and strengthen a sense of positive identity</strong>. It can also be done <em>for others</em>, and it changes across cultures.</p>` },
    { title: "Identity predicaments", body: `
      <p>Any situation where your sense of self or desired identity is <strong>challenged, questioned, or threatened</strong>.</p>
      <ol><li><strong>Embarrassment</strong> (ex: #igotcaught)</li>
      <li><strong>Role incongruity</strong> — imposter syndrome; doing something others wouldn't expect from you in that role</li>
      <li><strong>Conflicting needs</strong></li></ol>` }
  ],
  examples: [
    { title: "Different audiences", scenario: "You talk one way to your grandma and another way to your friends at a party. What concept is this?", answer: `<p><strong>Impression management / self-presentation.</strong> Same actor, different audience, different performance (the stage and curtain metaphor).</p>` },
    { title: "Missed free throw", scenario: "A basketball captain misses the game-deciding free throw and feels like they've let everyone down. Which face concern?", answer: `<p>A <strong>performance that betrays self-identity</strong>. Their desired identity (clutch captain) is threatened, which makes it an identity predicament.</p>` },
    { title: "Imposter syndrome", scenario: "A new manager feels like a fraud when giving orders to older employees. Which identity predicament?", answer: `<p><strong>Role incongruity.</strong> The sense of self doesn't match the role being performed.</p>` }
  ]
},
{
  id: "politeness", num: 3, title: "Politeness Theory", who: "Brown & Levinson", mins: 14,
  blurb: "How we protect each other's face when we have to ask for something or disagree.",
  lessons: [
    { title: "Positive vs. negative face", body: `
      <table class="t"><tr><th>Face</th><th>Desire</th><th>Mnemonic</th></tr>
      <tr><td><strong>Positive face</strong></td><td>To be liked, admired, appreciated</td><td>Dog</td></tr>
      <tr><td><strong>Negative face</strong></td><td>Autonomy, freedom from imposition</td><td>Cat</td></tr></table>
      <p>These desires conflict and are in competition with one another.</p>` },
    { title: "Face-threatening acts (FTAs)", body: `
      <p>An <strong>FTA</strong> is an action or statement that challenges, undermines, or damages a person's <strong>dignity, self-image, or personal freedom</strong>. Example: <em>requesting something of someone</em> impacts their face.</p>` },
    { title: "The five suprastrategies", body: `
      <p><strong>Suprastrategies</strong> are paths a speaker can choose to handle an FTA. From <em>least effective / most polite</em> to <em>most effective / least polite</em>:</p>
      <ol>
        <li><strong>Avoidance</strong> — don't ask at all; you completely avoid the FTA.</li>
        <li><strong>Going off record</strong> — hinting, subtle.</li>
        <li><strong>Negative politeness</strong> — respect their autonomy; make it clear they have a choice.</li>
        <li><strong>Positive politeness</strong> — appeal to their want to be liked (compliments, friendliness).</li>
        <li><strong>Bald on record</strong> — direct, blatant request.</li>
      </ol>
      <div class="callout"><strong>Rule:</strong> least effective = most polite (avoidance). Most effective = least polite (bald on record).</div>` },
    { title: "What shapes the choice: PDR", body: `
      <p>Use <strong>these</strong> (not the textbook's) influences:</p>
      <ul><li><strong>P</strong>ower: relative power difference between speaker and listener.</li>
      <li><strong>D</strong>istance: level of social distance or familiarity between them.</li>
      <li><strong>R</strong>ank: how socially imposing the request is in a given culture or situation.</li></ul>
      <p><strong>Rank ↑, politeness ↑.</strong></p>` }
  ],
  examples: [
    { title: "Disagreeing with your manager", scenario: "Your manager proposes something that will be harmful and you want to disagree. How might you handle it?",
      answer: `<p>Disagreeing challenges their <strong>positive face</strong>. Options:</p><ul><li><strong>Disqualifier</strong> (not a strategy).</li><li><strong>Off record + positive politeness:</strong> hint at the other idea while being super polite.</li><li><strong>Negative politeness:</strong> explain your idea and make clear they can choose.</li></ul><p><strong>PDR:</strong> Power = manager/employee. Distance = relationship closeness. Rank = how imposing the disagreement is.</p>` },
    { title: "Name that strategy", scenario: "\"It's so cold in here...\" (hoping someone closes the window).", answer: `<p><strong>Going off record.</strong> A hint, no direct ask.</p>` },
    { title: "Name that strategy 2", scenario: "\"You're always so helpful. Could you possibly help me move this weekend? No worries at all if you can't.\"", answer: `<p>A mix: the compliment is <strong>positive politeness</strong>; \"no worries if you can't\" is <strong>negative politeness</strong> (gives them a choice).</p>` }
  ]
},
{
  id: "set", num: 4, title: "Social Exchange Theory", who: "Thibaut & Kelley (1959)", mins: 8,
  blurb: "Relationships as a cost-benefit calculation, and how we decide to stay or leave.",
  lessons: [
    { title: "The equation", body: `
      <ul><li><strong>Costs:</strong> in every relationship, they drain you financially, emotionally, etc.</li>
      <li><strong>Benefits/rewards:</strong> what you get out of it.</li>
      <li><strong>Outcome (value):</strong> how you look at the relationship.</li></ul>
      <div class="callout big"><strong>Benefits − Costs = Outcome (value)</strong></div>` },
    { title: "Three assumptions", body: `
      <ol><li><strong>Minimax principle:</strong> we try to <em>maximize</em> benefits and <em>minimize</em> costs.</li>
      <li><strong>Rational:</strong> people are weighing costs and benefits.</li>
      <li><strong>Standards are idiosyncratic and dynamic.</strong> <em>Idiosyncratic</em> = your standards are personal. <em>Dynamic</em> = standards can change.</li></ol>` },
    { title: "Comparison levels", body: `
      <table class="t"><tr><th>Concept</th><th>Meaning</th><th>Used for</th></tr>
      <tr><td><strong>Comparison level (CL)</strong></td><td>What you <em>expect</em> from a relationship, based on relationships around you and past ones (ex: your parents fighting)</td><td>Judging <strong>satisfaction</strong></td></tr>
      <tr><td><strong>Comparison level of alternatives (CLalt)</strong></td><td>How the relationship compares to your other options</td><td>Deciding whether to <strong>stay or leave</strong></td></tr></table>` }
  ],
  examples: [
    { title: "Unhappy but staying", scenario: "Someone is dissatisfied in a relationship (below their CL) but stays anyway because there are no better options. Explain.", answer: `<p>Satisfaction is judged by the <strong>comparison level</strong> (it's below). But staying is determined by the <strong>comparison level of alternatives</strong>: if the alternatives look worse, they stay.</p>` },
    { title: "Standards change", scenario: "After a toxic relationship, someone is thrilled by basic respect they once found boring. Which assumption?", answer: `<p><strong>Standards are dynamic</strong> (they change) and idiosyncratic (personal).</p>` }
  ]
},
{
  id: "cpm", num: 5, title: "Communication Privacy Management", who: "CPM Theory", mins: 12,
  blurb: "Who owns private information, and what happens when we share it.",
  lessons: [
    { title: "Core idea", body: `
      <p><strong>Privacy</strong> = the ability to control <em>who</em> has access to info about you and <em>under what conditions</em>: with whom, what, when, where, how we share.</p>
      <ul><li>Private info isn't just about you, and disclosing it isn't always yours to do.</li>
      <li><strong>Ownership:</strong> we perceive private info as something we own.</li>
      <li><strong>Privacy boundaries:</strong> we guard our private info; boundaries can be variable.</li>
      <li><strong>Right to control.</strong></li></ul>` },
    { title: "Five factors that affect privacy rules", body: `
      <p>Combine these with context:</p>
      <ol><li><strong>Cultural</strong> criteria</li><li><strong>Gender</strong> criteria</li><li><strong>Motivational</strong> criteria (why?)</li><li><strong>Contextual</strong> criteria</li><li><strong>Risk-benefit ratio</strong> (worth it?)</li></ol>` },
    { title: "Negotiating privacy rules", body: `
      <ul><li><strong>Co-owners:</strong> once you share, the other person co-owns it.</li>
      <li><strong>Boundary linkage:</strong> creation of shared boundaries.</li>
      <li><strong>Boundary permeability:</strong> how much info gets in/out.</li>
      <li><strong>Boundary turbulence:</strong> boundaries aren't properly shared or managed.</li></ul>` }
  ],
  examples: [
    { title: "A friend tells your secret", scenario: "You tell a friend you're struggling with anxiety. They tell another friend. What happened in CPM terms?", answer: `<p>When you shared, your friend became a <strong>co-owner</strong>. They failed to follow the shared privacy rules, causing <strong>boundary turbulence</strong>.</p>` },
    { title: "Deciding whether to tell", scenario: "You think about telling your boss about a health issue and weigh whether it's worth it. Which factor?", answer: `<p><strong>Risk-benefit ratio</strong> (is it worth it?), plus <strong>motivational</strong> (why?) and <strong>contextual</strong> factors.</p>` }
  ]
},
{
  id: "cat", num: 6, title: "Communication Accommodation Theory", who: "Howard Giles (UCSB)", mins: 12,
  blurb: "How we adjust our speech and behavior to move toward or away from other people.",
  lessons: [
    { title: "Ingroups vs. outgroups", body: `
      <p>Groups (or lack of them) provide a <strong>sense of belonging</strong>.</p>
      <ul><li><strong>Ingroup</strong> members talk to each other using <strong>restricted codes</strong> (ex: cheerleaders).</li>
      <li>With the <strong>outgroup</strong> we use <strong>elaborated codes</strong>.</li></ul>` },
    { title: "Convergence", body: `
      <p><strong>Convergence (accommodation):</strong> altering speech and behavior to move <em>closer</em> to a conversational partner.</p>
      <ul><li><strong>Symmetrical:</strong> both converge. <strong>Asymmetrical:</strong> only one does.</li>
      <li><strong>Upward:</strong> toward higher status. <strong>Downward:</strong> toward lower status.</li></ul>
      <p><span class="tag pro">Pros</span> ↑ attraction, ↑ social approval, ↑ persuasiveness</p>
      <p><span class="tag con">Cons</span> perceived condescension, loss of personal identity, sometimes based on incorrect stereotypes</p>` },
    { title: "Divergence & maintenance", body: `
      <p><strong>Divergence:</strong> altering the conversation to <em>differ</em> from your partner.</p>
      <p><span class="tag pro">Pros</span> protects cultural identity, asserts power differences</p>
      <p><span class="tag con">Cons</span> perceived disdain for the outgroup, perceived lack of effort, ↑ psychological distance</p>
      <p><strong>Maintenance:</strong> upholding a specific communication style.</p>
      <p><span class="tag pro">Pro</span> upholds personal identity <span class="tag con">Con</span> may be perceived as lack of interest or effort</p>` },
    { title: "Nonaccommodation & code switching", body: `
      <p><strong>Nonaccommodation:</strong> perception that the accommodation is either too much or too little.</p>
      <ul><li><strong>Overaccommodation:</strong> perceiving it's <em>too much</em> for what's needed.</li>
      <li><strong>Underaccommodation:</strong> failure to adjust enough.</li></ul>
      <p><strong>Code switching:</strong> switching between codes (languages or language varieties) in the course of a conversation. Ex: <em>"El deadline es mañana a las eight."</em> Also includes transitioning between dialects, cultural expressions, behaviors, and mannerisms based on context.</p>` }
  ],
  examples: [
    { title: "Talking to a toddler", scenario: "An adult uses simple words and a higher pitch to talk to a child. What strategy?", answer: `<p><strong>Convergence</strong> — asymmetrical (only the adult adjusts) and <strong>downward</strong> (toward lower status). Risk: perceived condescension.</p>` },
    { title: "Keeping the accent", scenario: "An immigrant keeps speaking in their home dialect at a new workplace to hold on to their identity.", answer: `<p><strong>Maintenance</strong> (or divergence if it's used to differ). Pro: upholds identity. Con: may be seen as lack of effort.</p>` },
    { title: "El deadline", scenario: "\"El deadline es mañana a las eight.\"", answer: `<p><strong>Code switching</strong> between Spanish and English within one sentence.</p>` }
  ]
},
{
  id: "rdt", num: 7, title: "Relational Dialectics Theory", who: "Leslie Baxter", mins: 14,
  blurb: "The competing needs inside every relationship, and how people balance them.",
  lessons: [
    { title: "Core idea & 4 assumptions", body: `
      <p>Addresses <strong>competing needs</strong> in relationships and the effort to try to balance them.</p>
      <ol><li><strong>Nonlinear</strong></li><li><strong>Changing</strong> (praxis and change)</li><li><strong>Contradictions</strong> (competing discourses)</li><li><strong>Totality</strong> — aware of both parts of the contradiction</li></ol>
      <p>Always a tension/struggle: a <strong>tug of war</strong>.</p>` },
    { title: "The 3 main tensions", body: `
      <p>Each is manifested <strong>internally</strong> (within the relationship) and <strong>externally</strong> (between the couple and others).</p>
      <table class="t"><tr><th>Tension</th><th>Internal</th><th>External</th></tr>
      <tr><td><strong>Integration–Separation</strong> (most common)</td><td>Autonomy vs. connection</td><td>Inclusion vs. seclusion</td></tr>
      <tr><td><strong>Stability–Change</strong></td><td>Predictability vs. novelty</td><td>Conventionality vs. uniqueness</td></tr>
      <tr><td><strong>Expression–Privacy</strong></td><td>Openness vs. closedness</td><td>Revelation vs. concealment</td></tr></table>
      <p>Tensions can be <strong>antagonistic</strong> or <strong>non-antagonistic</strong>.</p>` },
    { title: "Strategies (use these, not the textbook's)", body: `
      <p><strong>Selection:</strong> pick one side.</p>
      <p><strong>Separation:</strong></p>
      <ul><li><strong>Cyclic alternation:</strong> take turns favoring each side over time.</li>
      <li><strong>Segmentation:</strong> different sides in different areas (Jetta &amp; Julia: professional at work, personal at lunch).</li></ul>
      <p><strong>Neutralization:</strong> compromise.</p>
      <p><strong>Reframing:</strong> redefine it so the two sides don't seem opposed.</p>` }
  ],
  examples: [
    { title: "Ben & Isa", scenario: "Ben wants more time to himself while Isa wants to do everything together.", answer: `<p><strong>Autonomy vs. connection</strong> (integration–separation, internal).</p>` },
    { title: "Dakota & Morgan", scenario: "Dakota loves their Friday-night routine but Morgan wants to try new things.", answer: `<p><strong>Predictability vs. novelty</strong> (stability–change, internal).</p>` },
    { title: "Mackenzie & Tyler", scenario: "Mackenzie shares everything while Tyler wants some things kept to himself.", answer: `<p><strong>Openness vs. closedness</strong> (expression–privacy, internal).</p>` },
    { title: "Jetta & Julia", scenario: "Coworkers who stay strictly professional in the office but are personal at lunch.", answer: `<p><strong>Segmentation</strong>: different sides in different areas.</p>` }
  ]
},
{
  id: "culture", num: 8, title: "Organizational Culture", who: "Deal & Kennedy · Schein", mins: 12,
  blurb: "Culture types, strong cultures, and the three layers of what an organization really believes.",
  lessons: [
    { title: "Strong cultures (Deal & Kennedy)", body: `
      <p>Strong cultures have <strong>values, heroes, rites &amp; rituals, and a cultural network</strong>. They're fostered by <strong>strong leaders</strong>.</p>
      <p>Examples: <strong>IBM</strong> and <strong>Disney</strong> (Walt Disney).</p>` },
    { title: "The four culture types", body: `
      <p>Two axes: <strong>risk</strong> (low/high) and <strong>feedback speed</strong> (slow/fast).</p>
      <table class="t"><tr><th>Culture</th><th>Feedback</th><th>Risk</th><th>Example</th></tr>
      <tr><td><strong>Work hard, play hard</strong></td><td>Fast</td><td>Low</td><td>Sales</td></tr>
      <tr><td><strong>Tough-guy macho</strong></td><td>Fast</td><td>High</td><td>Finance</td></tr>
      <tr><td><strong>Process</strong></td><td>Slow</td><td>Low</td><td>Banks</td></tr>
      <tr><td><strong>Bet-your-company</strong></td><td>Slow</td><td>High</td><td>Pharma</td></tr></table>` },
    { title: "Schein's 3 levels", body: `
      <p><strong>Organizational culture:</strong> a system of shared assumptions, values, and beliefs that guide behavior in an organization.</p>
      <ol><li><strong>Artifacts</strong> — office layout, how people dress, behavior patterns, language use, stories, objects. <em>Visible.</em></li>
      <li><strong>Values</strong> — what people <em>claim</em> is important. Can't be directly observed; may be openly discussed or written.</li>
      <li><strong>Assumptions</strong> — taken for granted; deep beliefs, ways of seeing/understanding. Hidden, covert. Ex: strong hierarchy is important, org life is a competition, all members are equals.</li></ol>` }
  ],
  examples: [
    { title: "Which culture?", scenario: "A pharma company where a drug takes 10 years to develop and billions are at stake.", answer: `<p><strong>Bet-your-company</strong>: slow feedback, high risk.</p>` },
    { title: "Which culture? 2", scenario: "A sales team that gets results daily and celebrates wins constantly.", answer: `<p><strong>Work hard, play hard</strong>: fast feedback, low risk.</p>` },
    { title: "Which Schein level?", scenario: "The mission statement says 'we value collaboration' but only individual stars get promoted. Identify the levels.", answer: `<p>The stated 'collaboration' = <strong>values</strong>. The competition behind promotions reveals the hidden <strong>assumption</strong> (org life is a competition). The open-plan office layout would be an <strong>artifact</strong>.</p>` }
  ]
},
{
  id: "control", num: 9, title: "Organizational Control", who: "Functionalist vs. interpretive · Tompkins & Cheney", mins: 14,
  blurb: "How organizations get people to do what they want, from obvious supervision to 'sneaky' values-based control.",
  lessons: [
    { title: "Two ways to study organizations", body: `
      <table class="t"><tr><th></th><th>Functionalist / traditional</th><th>Interpretive / qualitative</th></tr>
      <tr><td>Studies</td><td>Comm that takes place <em>in</em> organizations</td><td>The <em>process of creating</em> an organization through comm</td></tr>
      <tr><td>Culture is…</td><td>A <strong>variable</strong>; measured and manipulated. Something an org <strong>has</strong></td><td>A <strong>web of meanings</strong> spun by org members, created through comm. Something an org <strong>is</strong></td></tr>
      <tr><td>Goal</td><td>Understand variables that make the org function. Aligns with managerial goals; belief in a unified culture</td><td>Uncover the meanings made by the people organizing. May find culture is fragmented, subversive, contradictory</td></tr></table>
      <p><strong>Example (BuzzNow #AllInForTheBrand):</strong> some join in, some make memes in a private Slack, some make TikToks mocking it. That's an interpretive view: a fragmented culture.</p>` },
    { title: "Types of control", body: `
      <p><strong>Organizational control:</strong> communication designed to overcome resistance and exercise authority over others.</p>
      <ul><li><strong>Simple control:</strong> direct, personal supervision; managers monitor behavior face to face. Depends on <em>extrinsic rewards</em>.</li>
      <li><strong>Technological control:</strong> control embedded in tools, systems, or workflows that structure and monitor how work is done.</li>
      <li><strong>Bureaucratic control:</strong> formal rules, procedures, hierarchy, and standardized processes that guide behavior. <em>Moves slowly.</em></li></ul>` },
    { title: "'Sneakier' control (Tompkins & Cheney)", body: `
      <p><strong>Organizational identification</strong> is even stronger than bureaucratic control.</p>
      <ul><li><strong>Unobtrusive control</strong> (aka cultural control): strategies that encourage members to embrace the org's values as their own and use them to make organizationally appropriate decisions. <em>Values-based.</em></li>
      <li><strong>Concertive control:</strong> encourages members to discipline themselves <em>and each other</em>, usually through self-management practices. <em>Peer pressure dynamics</em> enforce behavior.</li></ul>` }
  ],
  examples: [
    { title: "BuzzNow", scenario: "A company pushes #AllInForTheBrand. Some employees join in; others mock it privately. Which approach explains this best?", answer: `<p>The <strong>interpretive</strong> approach, since it expects culture to be fragmented, subversive, and contradictory. A functionalist approach would assume one unified culture.</p>` },
    { title: "Name the control", scenario: "A call center software tracks every call length and flags agents who run long.", answer: `<p><strong>Technological control</strong>: control embedded in tools/systems.</p>` },
    { title: "Name the control 2", scenario: "A team of coworkers calls each other out for leaving early because 'that's not how we do things here'.", answer: `<p><strong>Concertive control</strong>: peers discipline each other.</p>` }
  ]
},
{
  id: "weick", num: 10, title: "Weick's Theory of Organizing", who: "Karl Weick", mins: 14,
  blurb: "Organizations aren't things. They're ongoing processes of reducing equivocality through communication.",
  lessons: [
    { title: "Organizing, not organizations", body: `
      <p>Systems theory meets interpretive theory. <em>"The word, organization, is a noun and it is also a myth."</em> Weick is interested in <strong>organizING</strong>, not organizations. Orgs are <strong>created through communication</strong>.</p>` },
    { title: "Equivocality vs. uncertainty", body: `
      <p><strong>Equivocality:</strong> subject to multiple interpretations. Organizations exist in environments full of it.</p>
      <table class="t"><tr><th></th><th>Uncertainty</th><th>Equivocality</th></tr>
      <tr><td>Problem</td><td>Lack of info</td><td>Info open to multiple interpretations</td></tr>
      <tr><td>Solution</td><td>Get more info</td><td>More info = <em>more</em> equivocality</td></tr>
      <tr><td>Example</td><td>Don't know when a meeting starts → check calendar</td><td>Company sales ↓ 20%: bad economy? outdated product?</td></tr></table>` },
    { title: "How organizing reduces equivocality", body: `
      <ul><li><strong>Rules (recipes):</strong> ex: upload assignments to Brightspace; new syllabus goes through curriculum committee.</li>
      <li><strong>Double interacts:</strong> act → response → adjustment. Ex: manager proposes extending happy hour → staff says it would overcrowd the bar → manager adds bar seating.</li></ul>
      <p>The more complicated the environment, the more communication is needed.</p>` },
    { title: "Sensemaking: 3 stages", body: `
      <p>Organizing is <strong>sensemaking</strong>; we usually <em>act before we understand</em>. (Sociocultural evolution.)</p>
      <ol><li><strong>Enactment:</strong> members create the environment that confronts them; decide what to pay attention to.</li>
      <li><strong>Selection:</strong> choosing how to respond, or the stories we tell ourselves about how we chose. Looking back and deciding how we did what we did.</li>
      <li><strong>Retention:</strong> holding on to choices for future use; creating new rules/recipes.</li></ol>` }
  ],
  examples: [
    { title: "Uncertainty or equivocality?", scenario: "You don't know what time your meeting starts.", answer: `<p><strong>Uncertainty</strong>. You lack info; check the calendar.</p>` },
    { title: "Uncertainty or equivocality? 2", scenario: "Sales fall 20%. Experts disagree on whether it's the economy or an outdated product.", answer: `<p><strong>Equivocality</strong>. Multiple interpretations; more data won't settle it.</p>` },
    { title: "Double interact", scenario: "A manager proposes extending happy hour, staff say it would overcrowd, manager adds bar seating.", answer: `<p>A <strong>double interact</strong>: act → response → adjustment.</p>` },
    { title: "Which stage?", scenario: "After a failed campaign, the team writes a new checklist to prevent repeating the mistake.", answer: `<p><strong>Retention</strong>: holding on to choices and creating new rules/recipes.</p>` }
  ]
}
];
