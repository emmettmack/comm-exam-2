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
  ],
  quiz: [
    { q: "Which type of expectancy is based on how a particular person usually acts?", o: ["Predictive","Prescriptive","Reciprocal","Proxemic"], a: 0, w: "Predictive = what we think will happen, based on the person's usual behavior. Prescriptive is about norms." },
    { q: "Which expectancy is about what SHOULD happen according to norms?", o: ["Predictive","Prescriptive","Compensatory","Valence"], a: 1, w: "Prescriptive = norms, what should happen." },
    { q: "EVT originally began by studying:", o: ["Self-disclosure","Personal space (proxemic) boundary violations","Face threats","Cultural dimensions"], a: 1, w: "Burgoon started with proxemic (personal space) violations." },
    { q: "In EVT, 'compensate' means:", o: ["Match the other person's behavior","Do the opposite of the other person's behavior","Ignore the behavior","Pay the person back"], a: 1, w: "Reciprocate = match. Compensate = opposite." },
    { q: "Communicator reward valence is a judgment about:", o: ["How positive the behavior is","The norms of the context","The person who committed the violation","How close the relationship is"], a: 2, w: "Violation valence judges the behavior. Communicator reward valence judges the person (attractive, high status, credible = positive)." },
    { q: "Which communicator would most likely have POSITIVE reward valence?", o: ["A low-status stranger","An untrustworthy coworker","A credible, charismatic leader","Someone you don't know"], a: 2, w: "Positive if attractive, high status, credible, intelligent, charismatic." },
    { q: "In EVT, the independent variable (IV) and dependent variable (DV) are:", o: ["IV: outcome / DV: violation","IV: violation / DV: outcome","IV: relationship / DV: context","IV: valence / DV: norms"], a: 1, w: "IV = violation, DV = outcome." },
    { q: "Jennifer complains constantly and does so again. Why isn't this a strong violation?", o: ["It breaks no prescriptive norm","Her behavior matches the predictive expectancy","Complaining is always positive","Coworkers expect compliments"], a: 1, w: "Predictive expectancy isn't broken because complaining is what she normally does." },
    { q: "Which is NOT a source of expectancies in EVT?", o: ["Relationship","Context","Communicator's characteristics","Number of people in the room"], a: 3, w: "Expectancies come from the relationship, the context, and the communicator's characteristics." },
    { q: "Which statement about EVT is true?", o: ["Violations are always negative","Violating expectations can sometimes be a better strategy than conforming","Reciprocate means do the opposite","Prescriptive expectancies come from past behavior"], a: 1, w: "Violations can be positive (a gift, a compliment), and can be a better strategy than conforming." }
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
  ],
  quiz: [
    { q: "'Dyadic' communication means:", o: ["Communication in large groups","You need 2 people","Communication through media","One person speaking to many"], a: 1, w: "Dyadic = need 2 people. Interdependent = mutual effect on each other." },
    { q: "'Interdependent' means:", o: ["People have a mutual effect on each other","People communicate in public","Only one person is affected","People are in conflict"], a: 0, w: "Interdependent = mutual effect on each other." },
    { q: "The impression management metaphor compares communication to:", o: ["A battlefield","A stage with actors and a curtain","A marketplace","A machine"], a: 1, w: "Stage and curtain: we're all actors performing for an audience." },
    { q: "Face is best defined as:", o: ["Your private thoughts","The public image we exhibit in the world","Your physical appearance only","Your relationship history"], a: 1, w: "Face = public image we exhibit, and it changes in different contexts." },
    { q: "Which of these is NOT listed as something that makes us concerned about face?", o: ["Physical presentation (clothes, makeup)","A strong statement to the wrong crowd","An emotional state unlike you","Winning a competition easily"], a: 3, w: "Concerns include presentation, statements to the wrong crowd, unlike-you emotions, and performances that betray self-identity." },
    { q: "Facework refers to:", o: ["Strategies to maintain and strengthen a positive identity","Plastic surgery","Avoiding all conversation","Judging others' faces"], a: 0, w: "Facework = communicative strategies that maintain and strengthen positive identity (for self or others)." },
    { q: "Which is an identity predicament?", o: ["Embarrassment","Role incongruity","Conflicting needs","All of the above"], a: 3, w: "The three: embarrassment, role incongruity, conflicting needs." },
    { q: "Imposter syndrome is an example of:", o: ["Embarrassment","Role incongruity","Conflicting needs","Reciprocation"], a: 1, w: "Role incongruity: your self-concept doesn't fit the role you're in." },
    { q: "Which relationship has the greatest relational depth?", o: ["Acquaintance","Professor","Family","Physical therapist"], a: 2, w: "Range from acquaintance → professor → physical therapist → family." }
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
  ],
  quiz: [
    { q: "Positive face is the desire to:", o: ["Be free from imposition","Be liked, admired, appreciated","Win arguments","Avoid conflict"], a: 1, w: "Positive face = liked/admired/appreciated (dog). Negative face = autonomy (cat)." },
    { q: "Negative face is the desire to:", o: ["Be criticized","Have autonomy and freedom from imposition","Be admired","Stay anonymous"], a: 1, w: "Negative face = autonomy, freedom from imposition (cat)." },
    { q: "Which suprastrategy is the MOST polite but LEAST effective?", o: ["Bald on record","Positive politeness","Negative politeness","Avoidance"], a: 3, w: "Avoidance: you never make the request, so it's the most polite and least effective." },
    { q: "Which suprastrategy is the most effective but least polite?", o: ["Bald on record","Off record","Avoidance","Negative politeness"], a: 0, w: "Bald on record = direct, blatant request." },
    { q: "'Wow, that's a nice car… must be nice to have wheels.' Which strategy?", o: ["Avoidance","Going off record","Bald on record","Negative politeness"], a: 1, w: "Hinting/subtle = going off record." },
    { q: "Making it clear the listener has a choice is:", o: ["Positive politeness","Negative politeness","Bald on record","Avoidance"], a: 1, w: "Negative politeness respects autonomy." },
    { q: "Complimenting someone before asking a favor is:", o: ["Positive politeness","Negative politeness","Off record","Avoidance"], a: 0, w: "Positive politeness appeals to their desire to be liked." },
    { q: "What does PDR stand for?", o: ["Politeness, Distance, Respect","Power, Distance, Rank","Position, Duty, Role","Power, Deference, Risk"], a: 1, w: "Power, Distance, Rank." },
    { q: "In PDR, 'Rank' means:", o: ["Job title","How socially imposing the request is in a given culture/situation","Level of familiarity","Who is older"], a: 1, w: "Rank = how imposing the request is. Rank ↑, politeness ↑." },
    { q: "If the rank of a request increases, politeness generally:", o: ["Decreases","Stays the same","Increases","Disappears"], a: 2, w: "Rank ↑, politeness ↑." },
    { q: "A request is an example of a(n):", o: ["Facework","Face-threatening act","Identity predicament","Boundary turbulence"], a: 1, w: "Requests impact face, making them FTAs." }
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
  ],
  quiz: [
    { q: "Social Exchange Theory's outcome formula is:", o: ["Costs − Benefits","Benefits − Costs","Benefits + Costs","Costs ÷ Benefits"], a: 1, w: "Benefits − Costs = Outcome (value)." },
    { q: "The minimax principle says people try to:", o: ["Minimize benefits and maximize costs","Maximize benefits and minimize costs","Keep both equal","Avoid relationships"], a: 1, w: "Maximize benefits, minimize costs." },
    { q: "Which assumption says people weigh costs and benefits?", o: ["Rational","Dynamic","Idiosyncratic","Totality"], a: 0, w: "Rational: people are weighing costs/benefits." },
    { q: "'Idiosyncratic' standards means:", o: ["They never change","They're personal to each individual","They're universal","They're set by culture only"], a: 1, w: "Idiosyncratic = personal. Dynamic = can change." },
    { q: "Comparison level (CL) is used to judge:", o: ["Whether to leave","Satisfaction","Power","Privacy"], a: 1, w: "CL → satisfaction. CLalt → stay or leave." },
    { q: "Comparison level of alternatives is used to decide:", o: ["How satisfied you are","Whether to stay or leave","What to disclose","Which culture you're in"], a: 1, w: "CLalt = how the relationship compares to other options → stay/leave." },
    { q: "Who developed Social Exchange Theory?", o: ["Brown & Levinson","Thibaut & Kelley","Burgoon","Baxter"], a: 1, w: "Thibaut & Kelley (1959)." },
    { q: "A person's comparison level is shaped by:", o: ["Only their current partner","Relationships around them and past ones","Their salary","Random chance"], a: 1, w: "Based on relationships around you and past ones (ex: parents fighting)." }
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
  ],
  quiz: [
    { q: "CPM defines privacy as:", o: ["Hiding everything","The ability to control who has access to info about you and under what conditions","Having no secrets","Only legal protections"], a: 1, w: "Privacy = control over access to your info and the conditions of sharing." },
    { q: "Once you share private info, the other person becomes a:", o: ["Stranger","Co-owner","Observer","Boundary"], a: 1, w: "Co-owners: once you share, the other person co-owns it." },
    { q: "Boundary turbulence occurs when:", o: ["Boundaries are properly shared","Boundaries aren't properly shared or managed","No one shares anything","A boundary is very thick"], a: 1, w: "Boundary turbulence = boundaries aren't properly shared/managed." },
    { q: "Boundary permeability refers to:", o: ["How much info gets in/out","Who owns the info","Culture of the discloser","The risk of disclosure"], a: 0, w: "Permeability = how much info flows through the boundary." },
    { q: "Which is NOT one of the factors affecting privacy rules?", o: ["Cultural criteria","Gender criteria","Risk-benefit ratio","Comparison level"], a: 3, w: "Factors: cultural, gender, motivational, contextual, risk-benefit. Comparison level is from Social Exchange Theory." },
    { q: "'Is it worth it to disclose?' is which factor?", o: ["Cultural","Risk-benefit ratio","Gender","Contextual"], a: 1, w: "Risk-benefit ratio = worth it?" },
    { q: "Boundary linkage is:", o: ["Creating shared privacy boundaries","Breaking a boundary","Hiding info","Changing culture"], a: 0, w: "Boundary linkage = creation of shared boundaries." },
    { q: "CPM says we perceive private information as something we:", o: ["Rent","Own","Borrow","Share equally with everyone"], a: 1, w: "Ownership: we perceive private info as ours." }
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
  ],
  quiz: [
    { q: "Ingroup members typically speak using:", o: ["Elaborated codes","Restricted codes","Code switching only","Formal language"], a: 1, w: "Ingroup → restricted codes (ex: cheerleaders). Outgroup → elaborated codes." },
    { q: "Altering speech to move closer to a conversational partner is:", o: ["Divergence","Convergence","Maintenance","Nonaccommodation"], a: 1, w: "Convergence = moving closer." },
    { q: "Which is a pro of convergence?", o: ["Asserts power differences","↑ persuasiveness","Protects cultural identity","Perceived disdain"], a: 1, w: "Convergence: ↑ attraction, social approval, persuasiveness." },
    { q: "Perceived condescension is a con of:", o: ["Convergence","Divergence","Maintenance","Code switching"], a: 0, w: "Convergence cons: condescension, loss of identity, incorrect stereotypes." },
    { q: "Which is a pro of divergence?", o: ["Increases attraction","Protects cultural identity","Reduces psychological distance","Increases persuasiveness"], a: 1, w: "Divergence protects cultural identity and asserts power differences." },
    { q: "Converging toward someone of higher status is:", o: ["Downward convergence","Upward convergence","Symmetrical convergence","Maintenance"], a: 1, w: "Upward = toward higher status." },
    { q: "When only ONE person converges, it is:", o: ["Symmetrical","Asymmetrical","Reciprocal","Equivocal"], a: 1, w: "Symmetrical = both; asymmetrical = only one." },
    { q: "Failure to adjust enough is called:", o: ["Overaccommodation","Underaccommodation","Convergence","Divergence"], a: 1, w: "Underaccommodation = failure to adjust enough. Overaccommodation = too much." },
    { q: "Upholding a specific communication style is:", o: ["Maintenance","Convergence","Divergence","Overaccommodation"], a: 0, w: "Maintenance upholds personal identity but may seem like lack of effort." },
    { q: "Who developed CAT?", o: ["Howard Giles","Judee Burgoon","Leslie Baxter","Karl Weick"], a: 0, w: "Howard Giles (UCSB)." },
    { q: "Switching languages mid-sentence is an example of:", o: ["Maintenance","Code switching","Divergence only","Underaccommodation"], a: 1, w: "Code switching: switching between codes during a conversation." }
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
  ],
  quiz: [
    { q: "Which is the MOST common relational dialectic tension?", o: ["Stability–change","Expression–privacy","Integration–separation","Nonlinear–linear"], a: 2, w: "Integration–separation is the most common." },
    { q: "Internal form of integration–separation:", o: ["Autonomy vs. connection","Inclusion vs. seclusion","Openness vs. closedness","Predictability vs. novelty"], a: 0, w: "Internal: autonomy vs. connection. External: inclusion vs. seclusion." },
    { q: "External form of stability–change:", o: ["Predictability vs. novelty","Conventionality vs. uniqueness","Revelation vs. concealment","Autonomy vs. connection"], a: 1, w: "Internal: predictability vs. novelty. External: conventionality vs. uniqueness." },
    { q: "Openness vs. closedness is the ___ form of expression–privacy.", o: ["External","Internal","Antagonistic","Cyclic"], a: 1, w: "Internal: openness vs. closedness. External: revelation vs. concealment." },
    { q: "Taking turns favoring each side over time is:", o: ["Selection","Cyclic alternation","Segmentation","Neutralization"], a: 1, w: "Cyclic alternation = take turns over time." },
    { q: "Professional at work, personal at lunch is:", o: ["Segmentation","Reframing","Selection","Neutralization"], a: 0, w: "Segmentation = different sides in different areas." },
    { q: "Compromise is which strategy?", o: ["Reframing","Neutralization","Selection","Cyclic alternation"], a: 1, w: "Neutralization = compromise." },
    { q: "Redefining the tension so the two sides no longer seem opposed is:", o: ["Selection","Segmentation","Reframing","Neutralization"], a: 2, w: "Reframing redefines so the sides don't seem opposed." },
    { q: "Picking one side of the tension is:", o: ["Selection","Reframing","Segmentation","Totality"], a: 0, w: "Selection = pick one side." },
    { q: "The assumption of 'totality' means:", o: ["Relationships never change","Being aware of both parts of the contradiction","Relationships are linear","One side always wins"], a: 1, w: "Totality: awareness of both parts of the contradiction." },
    { q: "Cyclic alternation and segmentation are both types of:", o: ["Selection","Separation","Reframing","Neutralization"], a: 1, w: "Separation includes cyclic alternation and segmentation." }
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
  ],
  quiz: [
    { q: "Deal & Kennedy's two axes are:", o: ["Risk and feedback speed","Power and distance","Formality and size","Values and artifacts"], a: 0, w: "Risk (low/high) and feedback speed (slow/fast)." },
    { q: "Fast feedback + low risk =", o: ["Tough-guy macho","Work hard, play hard","Process","Bet-your-company"], a: 1, w: "Work hard, play hard (ex: sales)." },
    { q: "Fast feedback + high risk =", o: ["Tough-guy macho","Process","Bet-your-company","Work hard, play hard"], a: 0, w: "Tough-guy macho (ex: finance)." },
    { q: "Slow feedback + low risk =", o: ["Process culture","Bet-your-company","Tough-guy macho","Work hard, play hard"], a: 0, w: "Process culture (ex: banks)." },
    { q: "Slow feedback + high risk =", o: ["Process","Bet-your-company","Work hard, play hard","Tough-guy macho"], a: 1, w: "Bet-your-company (ex: pharma)." },
    { q: "Which is NOT part of a strong culture?", o: ["Values","Heroes","Rites and rituals","Bureaucratic forms"], a: 3, w: "Strong cultures: values, heroes, rites & rituals, cultural network." },
    { q: "Which Schein level is hidden, covert, and taken for granted?", o: ["Artifacts","Values","Assumptions","Rituals"], a: 2, w: "Assumptions are the deep, covert beliefs." },
    { q: "Office layout and dress code are which level?", o: ["Artifacts","Values","Assumptions","Heroes"], a: 0, w: "Artifacts are the visible stuff: layout, dress, language, stories, objects." },
    { q: "Which level is what people CLAIM is important and can't be directly observed?", o: ["Values","Artifacts","Assumptions","Rites"], a: 0, w: "Values: openly discussed or written, but not directly observable." },
    { q: "IBM and Disney are examples of:", o: ["Process cultures","Strong cultures fostered by strong leaders","Weak cultures","Fragmented cultures"], a: 1, w: "Both are strong cultures fostered by strong leaders." }
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
  ],
  quiz: [
    { q: "The functionalist view treats culture as something an organization:", o: ["Is","Has","Rejects","Avoids"], a: 1, w: "Functionalist: culture is a variable an org HAS. Interpretive: culture is something an org IS." },
    { q: "The interpretive approach studies:", o: ["Variables that make an org function","The process of creating an organization through communication","Only managers","Profits"], a: 1, w: "Interpretive/qualitative: the process of creating an org through comm." },
    { q: "Which approach aligns with managerial goals and a belief in a unified culture?", o: ["Functionalist","Interpretive","Both","Neither"], a: 0, w: "Functionalist aligns with managerial goals." },
    { q: "Which approach might find that culture is fragmented, subversive, contradictory?", o: ["Functionalist","Interpretive","Neither","Bureaucratic"], a: 1, w: "Interpretive." },
    { q: "Organizational control is best defined as:", o: ["Communication designed to overcome resistance and exercise authority over others","A type of culture","A company's mission statement","Profit management"], a: 0, w: "Control = comm designed to overcome resistance and exercise authority." },
    { q: "Direct, face-to-face supervision using extrinsic rewards is:", o: ["Simple control","Technological control","Bureaucratic control","Concertive control"], a: 0, w: "Simple control." },
    { q: "Control embedded in tools, systems, or workflows is:", o: ["Technological control","Simple control","Unobtrusive control","Concertive control"], a: 0, w: "Technological control." },
    { q: "Control through formal rules, hierarchy and standardized processes is:", o: ["Bureaucratic control","Unobtrusive control","Simple control","Technological control"], a: 0, w: "Bureaucratic control (which moves slowly)." },
    { q: "Another name for unobtrusive control is:", o: ["Cultural control","Concertive control","Simple control","Rational control"], a: 0, w: "Unobtrusive = cultural control, values-based." },
    { q: "Peers disciplining each other is:", o: ["Concertive control","Simple control","Bureaucratic control","Technological control"], a: 0, w: "Concertive control: self and mutual discipline via peer pressure." },
    { q: "Who is associated with organizational identification and 'sneakier' control?", o: ["Tompkins & Cheney","Deal & Kennedy","Thibaut & Kelley","Brown & Levinson"], a: 0, w: "Tompkins & Cheney." },
    { q: "Which type of control is described as the strongest?", o: ["Organizational identification","Simple control","Bureaucratic control","Technological control"], a: 0, w: "Org identification is even stronger than bureaucratic control." }
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
  ],
  quiz: [
    { q: "Weick is interested in:", o: ["Organizations as fixed structures","OrganizING as a process","Profit","Hierarchy"], a: 1, w: "Weick studies organizing, not organizations." },
    { q: "Equivocality is:", o: ["Lack of information","Info subject to multiple interpretations","Total agreement","A rule"], a: 1, w: "Equivocality = multiple interpretations." },
    { q: "Uncertainty is solved by:", o: ["Getting more info","Creating rules only","Ignoring it","More interpretation"], a: 0, w: "Uncertainty = lack of info → get more info." },
    { q: "With equivocality, more information typically leads to:", o: ["Less equivocality","More equivocality","No change","Certainty"], a: 1, w: "More info = more equivocality." },
    { q: "'Sales dropped 20%: bad economy or outdated product?' is:", o: ["Uncertainty","Equivocality","A recipe","Retention"], a: 1, w: "Multiple interpretations → equivocality." },
    { q: "Rules in Weick's theory are also called:", o: ["Recipes","Double interacts","Enactments","Artifacts"], a: 0, w: "Rules (recipes)." },
    { q: "A double interact is:", o: ["Act → response → adjustment","Two managers talking","Two rules","Act → retention"], a: 0, w: "Act, response, adjustment." },
    { q: "Which stage creates the environment that confronts members?", o: ["Enactment","Selection","Retention","Equivocation"], a: 0, w: "Enactment: members create the environment; decide what to pay attention to." },
    { q: "Which stage is about choosing how to respond, or the stories about how we chose?", o: ["Enactment","Selection","Retention","Control"], a: 1, w: "Selection." },
    { q: "Which stage creates new rules/recipes for future use?", o: ["Enactment","Selection","Retention","Convergence"], a: 2, w: "Retention." },
    { q: "In Weick's view, we usually:", o: ["Understand before acting","Act before we understand","Never act","Only follow rules"], a: 1, w: "Organizing is sensemaking: we usually act before we understand." },
    { q: "The more complicated the environment, the ___ communication is needed.", o: ["Less","More","The same","No"], a: 1, w: "More complicated environment → more communication." }
  ]
}
];
