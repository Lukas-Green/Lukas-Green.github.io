/* SCOPE — project inventory
 * Single source of truth for the Scope board. Plain JS (not JSON) so the board
 * also works when opened straight off disk with file:// — no fetch, no server.
 *
 * Add a project by copying a block. Required: id, name, cluster, status,
 * summary, lastWorked, concepts. Everything else degrades gracefully.
 *
 * status     live | build | prototype | concept | delivered | parked
 * confidence verified  = you confirmed it
 *            inferred  = Claude read it off the repo/docs, needs your eyes
 * effort     micro (<=2 min) | quick (<=15 min) | medium (~an hour) | deep
 * lane       the_one | committed | queued | fold | parked | closed
 * micro      the one action under two minutes. Every project has one (Rule 1).
 * lastWorked YYYY-MM-DD — for repos this is the last push, for folders the
 *            last commit that touched them.
 * image      path to a screenshot, or null for the generated tile
 */

window.SCOPE = {
  updated: '2026-09-17',
  wipLimit: 3,

  /* The commitment ladder. Order is fixed at every dial level (Rule 15).
     Importance is position: the higher the lane, the more of you it gets. */
  lanes: [
    { id:'the_one',   name:'THE ONE',   max:1,    tone:'lime',       blurb:'One commitment. Everything else waits.' },
    { id:'committed', name:'COMMITTED', max:2,    tone:'lime-dim',   blurb:'Actively yours this month.' },
    { id:'queued',    name:'QUEUED',    max:null, tone:'violet',     blurb:'Real, next, not started. No guilt attached.' },
    { id:'fold',      name:'FOLD IN',   max:null, tone:'violet-dim', blurb:'Absorb into another project. This lane is how scope shrinks.' },
    { id:'parked',    name:'PARKED',    max:null, tone:'slate',      blurb:'Deliberately not now. Reversible, and not a failure.' },
    { id:'closed',    name:'CLOSED',    max:null, tone:'outline',    blurb:'Done with. Kept so it stops being rediscovered.' }
  ],

  /* Rule 18: for call and email steps, hold the opening line so the
     cost of "what do I even say" is already paid. */
  /* Call and email openers live in workspace.local.js. They quote real
     people and real engagements, so the committed copy is empty. */
  scripts: {},

  clusters: {
    engine:    { name: 'Local-First AI Engine',   blurb: 'One engine: voice and files in, structured records out, on your own hardware.' },
    workspace: { name: 'Google Workspace Tools',  blurb: 'Apps Script builds that live inside Sheets and Docs. Same skeleton, different trade.' },
    civic:     { name: 'Civic & Nonprofit',       blurb: 'Reentry, restorative justice, neighborhood orgs. Mostly one client family.' },
    brand:     { name: 'Brand & Portfolio',       blurb: 'LUXIGA and the personal site. The storefront for everything else.' },
    intel:     { name: 'Research & Intelligence', blurb: 'Automated and manual market research feeding positioning and scoping.' },
    learning:  { name: 'Learning Systems',        blurb: 'Guided instruction, density tiers, degree paths. The teaching pattern.' },
    client:    { name: 'Client & Vertical Work',  blurb: 'Paid builds, local business redesigns and the demos that sell them.' },
    commerce:  { name: 'Commerce Experiments',    blurb: 'Revenue lines that do not require finding a client first.' }
  },

  projects: [
    {
      id: 'luxiga-os',
      name: 'LUXIGA OS',
      tag: 'Platform / Local AI',
      cluster: 'engine',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-05',
      home: { type:'nowhere', ref:'described on luxiga.co only' },
      lane: 'queued',
      laneWhy: 'The engine three other products claim to sit on. It needs to exist somewhere.',
      laneSet: 'proposed',
      micro: 'Create the empty repo. Nothing in it.',
      summary: 'The local-first intelligence layer everything else is supposed to sit on. Scan, transcribe, summarize and route files and voice memos on your own hardware, for teams whose data cannot leave the building. Named as the engine under the LUXIGA vertical tools, but it is still described more clearly on the marketing site than it is built in a repo.',
      concepts: ['local-llm', 'whisper', 'voice-to-record', 'privacy', 'platform', 'structured-output'],
      blockers: [
        'No dedicated repo. The product exists as copy on luxiga.co, not as a codebase you can open.',
        'The boundary between OS, Bill and Runbook is undefined, so every vertical re-implements the same intake.',
        'No reference hardware target. "Runs local" is unpriced and untested.'
      ],
      next: [
        { text: 'Create the repo and paste the site copy in as README. Make it a thing that exists.', effort: 'quick' },
        { text: 'Write the one-page contract: what OS owns vs. what a vertical owns.', effort: 'medium' },
        { text: 'Stand up the ingest spike: file or audio in, Whisper, local model, structured JSON out.', effort: 'deep' }
      ],
      links: { live: 'https://luxiga.co/#projects' },
      image: null
    },
    {
      id: 'luxiga-bill',
      name: 'LUXIGA Bill',
      aka: 'SoloBill',
      tag: 'Invoicing / Finance',
      cluster: 'workspace',
      status: 'live',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-05',
      home: { type:'repo', ref:'Lukas-Green/luxiga.co' },
      lane: 'queued',
      laneWhy: 'Live and demoable. Needs a name and a price, not a rebuild.',
      laneSet: 'proposed',
      micro: 'Pick the name: SoloBill or LUXIGA Bill. Write it down.',
      summary: 'Invoice out of Google Sheets in about ninety seconds, with PDF export, client tracking, reminders and payment links. Built for the journeyman plumber going private who needed billing records and a paper trail, not a SaaS subscription. Shipped and demoable, still in refinement.',
      concepts: ['apps-script', 'google-workspace', 'pdf', 'smb', 'billing', 'trades'],
      blockers: [
        'Carries two names. The case study says SoloBill, the business site says LUXIGA Bill.',
        'Payments are "Stripe-ready", not Stripe-wired.',
        'No pricing or packaging decided, so it cannot be sold, only demoed.'
      ],
      next: [
        { text: 'Pick one name and do a find-and-replace across both repos.', effort: 'quick' },
        { text: 'Write the pricing page: one-time setup vs. hosted.', effort: 'medium' },
        { text: 'Wire a real Stripe payment link end to end on one test invoice.', effort: 'deep' }
      ],
      links: { live: 'https://luxiga.co/demo/solobill-demo.html', caseStudy: 'https://luxiga.co/case-studies/solobill.html' },
      image: null
    },
    {
      id: 'luxiga-runbook',
      name: 'LUXIGA Runbook',
      tag: 'Guided Setup / Performance Support',
      cluster: 'learning',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-05',
      home: { type:'nowhere', ref:'described on luxiga.co only' },
      lane: 'fold',
      foldInto: 'pps-relief',
      laneWhy: 'PPS Relief is the step engine, already built once.',
      laneSet: 'proposed',
      micro: 'Copy the three density tiers out of the site copy into a file.',
      summary: 'A step engine for setups that eat an afternoon. It reads the official docs, drafts a verified flow, and serves it at the density that fits you: Guided, Standard or Expert. Exact values stay visible at every level, only the hand-holding fades. Works offline, because the worst time to lose the instructions is halfway through. This is also the design source for the focus controls on this board.',
      concepts: ['guided-setup', 'local-llm', 'offline', 'accessibility', 'density-tiers', 'docs'],
      blockers: [
        'Same as OS: described on the site, no repo behind it.',
        'No answer yet for how a drafted flow gets verified before a human trusts it.',
        'Offline reader and local authoring are two separate builds pretending to be one product.'
      ],
      next: [
        { text: 'Lift the three-tier density spec out of the site copy into a real spec file.', effort: 'quick' },
        { text: 'Hand-author one runbook for a setup you have actually suffered through.', effort: 'medium' },
        { text: 'Prototype the reader alone, offline, with that one hand-authored flow.', effort: 'deep' }
      ],
      links: { live: 'https://luxiga.co/#projects' },
      image: null
    },
    {
      id: 'canvasskit',
      name: 'CanvassKit',
      tag: 'CRM / Outreach',
      cluster: 'workspace',
      status: 'delivered',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'main', ref:'canvasskit.html' },
      lane: 'fold',
      foldInto: 'fieldkit',
      laneWhy: 'FieldKit is this, generalized, with a price attached.',
      laneSet: 'proposed',
      micro: 'Write one line: which survives, CanvassKit or GH2?',
      summary: 'An outreach CRM that lives in a Google Sheets sidebar. Came out of a contracting role at a nonprofit where a coordinator described a three-step reporting chain out loud and the transcript became the product spec. Functional, case-studied on both sites.',
      concepts: ['apps-script', 'google-workspace', 'sheets', 'crm', 'nonprofit', 'contact-tracking'],
      blockers: [
        'No owner using it day to day, so there is no feedback loop.',
        'Overlaps almost entirely with GH2 Contact Tracker and neither absorbed the other.',
        'Demo is static. Nothing to hand a prospect that holds their own data.'
      ],
      next: [
        { text: 'Diff it against GH2 and write down which one survives.', effort: 'quick' },
        { text: 'Add a sample-data one-click install so a prospect can poke at it.', effort: 'medium' },
        { text: 'Fold the surviving version into the workspace-tools template you keep rebuilding.', effort: 'deep' }
      ],
      links: { live: 'https://luxiga.co/demo/canvasskit-demo.html', caseStudy: 'https://lukasdgreen.com/canvasskit.html', local: 'canvasskit.html' },
      image: null
    },
    {
      id: 'gh2-tracker',
      name: 'GH2 Contact Tracker',
      tag: 'Nonprofit Tooling',
      cluster: 'workspace',
      status: 'delivered',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'nowhere', ref:'delivered to the org, no repo here' },
      lane: 'fold',
      foldInto: 'fieldkit',
      laneWhy: 'Same product as CanvassKit. Its value is the deployment proof, not the code.',
      laneSet: 'proposed',
      micro: 'Write one line about where the GH2 code actually lives.',
      summary: 'Contact tracking in Sheets, delivered to the org and in use. The earliest of the Apps Script builds and the one with a real deployment story, but it has no detail page on the portfolio and no case study written.',
      concepts: ['apps-script', 'google-workspace', 'sheets', 'nonprofit', 'contact-tracking'],
      blockers: [
        'Story exists only in a chat export, never written up.',
        'Duplicates CanvassKit.',
        'No screenshots you can publish without scrubbing real contact data.'
      ],
      next: [
        { text: 'Pull the origin story out of the conversations export into a draft.', effort: 'quick' },
        { text: 'Build a scrubbed demo sheet for screenshots.', effort: 'medium' },
        { text: 'Write the detail page, or formally retire it into CanvassKit.', effort: 'deep' }
      ],
      links: {},
      image: null
    },
    {
      id: 'transcription',
      name: 'Audio/Video Transcription',
      tag: 'Workflow Automation',
      cluster: 'engine',
      status: 'delivered',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'nowhere', ref:'story in a chat export' },
      lane: 'fold',
      foldInto: 'luxiga-os',
      laneWhy: 'This is the OS ingest layer, already working.',
      laneSet: 'proposed',
      micro: 'Write one line: OS component, or standalone?',
      summary: 'Functional transcription builds as Apps Script plus a PWA front end. Predates LUXIGA OS and solves the same first mile: get spoken work into text you can route. Effectively the prototype of the engine, filed as a separate project.',
      concepts: ['whisper', 'voice-to-record', 'apps-script', 'pwa', 'automation'],
      blockers: [
        'Filed as its own project when it is really an OS component.',
        'Cloud transcription, which contradicts the local-first pitch.',
        'No detail page written despite content being ready.'
      ],
      next: [
        { text: 'Decide out loud: component of OS, or standalone tool.', effort: 'quick' },
        { text: 'Swap the cloud transcription call for local Whisper on one file.', effort: 'medium' },
        { text: 'Publish it as the OS ingest reference implementation.', effort: 'deep' }
      ],
      links: {},
      image: null
    },
    {
      id: 'recallai',
      name: 'RecallAI',
      tag: 'AI / Healthcare',
      cluster: 'engine',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'nowhere', ref:'no repo' },
      lane: 'parked',
      laneWhy: 'Healthcare exposure you have not answered, on an unvetted premise.',
      laneSet: 'proposed',
      micro: 'Write the one sentence that kills it or keeps it.',
      summary: 'Python and FastAPI with an AI integration, aimed at healthcare recall. Listed on the portfolio as unfinished and unvetted, which is the honest label. The riskiest of the concepts because of the domain, and the one with the clearest reason to either commit or kill.',
      concepts: ['python', 'fastapi', 'ai', 'healthcare', 'voice', 'regulated'],
      blockers: [
        'Healthcare data means HIPAA questions you have not answered.',
        'Unvetted. No clinician has looked at the premise.',
        'No repo link on the site, so it reads as vapor.'
      ],
      next: [
        { text: 'Write the one-paragraph kill-or-commit case and date it.', effort: 'quick' },
        { text: 'Ask one clinician whether the recall problem is real.', effort: 'medium' },
        { text: 'If it survives, rebuild it on the local-first engine where privacy is the pitch.', effort: 'deep' }
      ],
      links: {},
      image: null
    },
    {
      id: 'brigs',
      name: 'BRIGS',
      tag: 'LLM Systems / Context',
      cluster: 'engine',
      status: 'concept',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'nowhere', ref:'no repo' },
      lane: 'fold',
      foldInto: 'seeng',
      laneWhy: 'SEENG is the artifact BRIGS never produced.',
      laneSet: 'proposed',
      micro: 'Write the first line of the BRIGS README.',
      summary: 'Context architecture for LLM systems, built on Python, Ollama and markdown. In architecture phase since spring. It is the structural idea behind how you hand context to a model, and it quietly underwrites OS, Runbook and this board.',
      concepts: ['local-llm', 'ollama', 'context', 'markdown', 'python', 'architecture'],
      blockers: [
        'Architecture phase with no artifact. Nothing to read, run or critique.',
        'No stated problem that a person outside your head would recognize.',
        'Competes for the same attention as OS without being distinguishable from it.'
      ],
      next: [
        { text: 'Write the README first: what breaks without BRIGS.', effort: 'quick' },
        { text: 'Take one existing project and hand-build its context pack by the BRIGS pattern.', effort: 'medium' },
        { text: 'Decide whether BRIGS is a product or just how you build OS.', effort: 'deep' }
      ],
      links: {},
      image: null
    },
    {
      id: 'scholaros',
      name: 'ScholarOS / Gradian',
      tag: 'EdTech / Student PWA',
      cluster: 'learning',
      status: 'concept',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-08-28',
      home: { type:'nowhere', ref:'radar research only' },
      lane: 'parked',
      laneWhy: 'Real research, no build, and it competes with work that pays.',
      laneSet: 'proposed',
      micro: 'Pick the name. ScholarOS or Gradian.',
      summary: 'A student-facing PWA with gamification, streaks, offline support and push, aimed at Gen Z. It gets a full sector in the weekly RADAR research run, complete with retention advice and an LTI 1.3 integration path, but it appears nowhere else: no repo, no portfolio card, no spec. The clearest example of the thing this board exists to catch.',
      concepts: ['pwa', 'edtech', 'gamification', 'offline', 'ai', 'density-tiers', 'retention'],
      blockers: [
        'Exists only inside research documents. No repo, no page, no spec.',
        'Two names already and no decision between them.',
        'RADAR says it needs at least one AI feature to be credible, and none is designed.'
      ],
      next: [
        { text: 'Pick the name. ScholarOS or Gradian, then stop writing both.', effort: 'quick' },
        { text: 'Extract every ScholarOS action item out of radar/2026-08-28.md into one brief.', effort: 'medium' },
        { text: 'Prototype the one screen that proves the retention loop.', effort: 'deep' }
      ],
      links: { local: 'radar/2026-08-28.md' },
      image: null
    },
    {
      id: 'radar',
      name: 'RADAR',
      tag: 'Automated Research Agent',
      cluster: 'intel',
      status: 'live',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-08-28',
      home: { type:'main', ref:'radar/, research/' },
      lane: 'queued',
      laneWhy: 'Already running without you. Only needs a reader.',
      laneSet: 'proposed',
      micro: 'Open the newest radar file and read one action.',
      summary: 'An automated Friday run that produces weekly market research per sector, currently LUXIGA brand and ScholarOS/Gradian, with sourced findings, impact ratings and actions. It is the only project here that produces new material without you touching it, and the output is going unread.',
      concepts: ['agent', 'research', 'automation', 'market-intel', 'scheduled'],
      blockers: [
        'Output accumulates in radar/ with nothing reading it.',
        'Only one dated file is committed, so the cadence is unverifiable from the repo.',
        'Actions in the reports never route into any project list. Until now.'
      ],
      next: [
        { text: 'Link the newest RADAR file from this board so it gets opened.', effort: 'quick' },
        { text: 'Add a standing "actions" section that can be pasted into next steps here.', effort: 'medium' },
        { text: 'Have the run open a PR against scope/projects.js when it finds a new action.', effort: 'deep' }
      ],
      links: { local: 'radar/2026-08-28.md' },
      image: null
    },
    {
      id: 'digital-media-research',
      name: 'Digital Media Research',
      tag: 'Competitive Intelligence',
      cluster: 'intel',
      status: 'build',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-08-17',
      home: { type:'main', ref:'research/' },
      lane: 'fold',
      foldInto: 'radar',
      laneWhy: 'One research intake, one action list.',
      laneSet: 'proposed',
      micro: 'Fix the stale date in research/README.md.',
      summary: 'Private competitive intelligence briefs in an eight-section consulting format, built for pre-call prep and contract scoping. Social media management and content/DAM are written. Ad tech and creator economy are planned files with nothing in them.',
      concepts: ['research', 'consulting', 'market-intel', 'sales-enablement', 'content'],
      blockers: [
        'Two of four verticals are empty placeholder files.',
        'Index says "last updated 2026-04-01" while briefs were touched in August.',
        'Never used in an actual prospect call, so the format is unproven.'
      ],
      next: [
        { text: 'Fix the stale "last updated" line in research/README.md.', effort: 'quick' },
        { text: 'Delete the two empty planned files or fill one.', effort: 'medium' },
        { text: 'Run one real discovery call off a brief and note what was missing.', effort: 'deep' }
      ],
      links: { local: 'research/', live: 'https://lukasdgreen.com/digital-media.html' },
      image: null
    },
    {
      id: 'partnerships',
      name: 'Partnership Intelligence',
      tag: 'BizDev / Research',
      cluster: 'intel',
      status: 'prototype',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-04-13',
      home: { type:'main', ref:'partnerships.html' },
      lane: 'fold',
      foldInto: 'radar',
      laneWhy: 'Third research output with no reader.',
      laneSet: 'proposed',
      micro: 'Write down one real partner name.',
      summary: 'A partnerships page on the portfolio plus a partnership intelligence brief in research. Aimed at agency and platform partnerships as a channel. Untouched since April and not linked from the current navigation story.',
      concepts: ['research', 'bizdev', 'partnerships', 'sales-enablement'],
      blockers: [
        'No target list. The page describes an approach, not a pipeline.',
        'Five months cold with no outreach attempted.',
        'Unclear whether it belongs on the personal site or luxiga.co.'
      ],
      next: [
        { text: 'Name five real partner targets in a list.', effort: 'quick' },
        { text: 'Send one partnership email and see what happens.', effort: 'medium' },
        { text: 'Decide its home site, or park it formally.', effort: 'deep' }
      ],
      links: { local: 'partnerships.html', live: 'https://lukasdgreen.com/partnerships.html' },
      image: null
    },
    {
      id: 'luxiga-site',
      name: 'luxiga.co',
      tag: 'Business Site',
      cluster: 'brand',
      status: 'live',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-05',
      home: { type:'repo', ref:'Lukas-Green/luxiga.co' },
      lane: 'queued',
      laneWhy: 'Your most maintained property and the front door for everything else.',
      laneSet: 'proposed',
      micro: 'Add one build-status word to one project card.',
      summary: 'The LUXIGA business site in its own deploy repo, with case studies, vertical teasers, a Playwright test suite and an audit folder. The most maintained property you own and the canonical source of the brand tokens this board uses.',
      concepts: ['site', 'brand', 'marketing', 'playwright', 'case-studies'],
      blockers: [
        'Three of the four headline products on it have no repo behind them.',
        'Every product CTA books a call, so there is no self-serve path.',
        'Teaser pages (Pulse, Signal, Assembly) promise verticals that do not exist yet.'
      ],
      next: [
        { text: 'Add one honest build-status line per project card.', effort: 'quick' },
        { text: 'Turn the strongest teaser into a real waitlist rather than a tease.', effort: 'medium' },
        { text: 'Write the content strategy: results stories, build logs, tooling perspective.', effort: 'deep' }
      ],
      links: { live: 'https://luxiga.co', repo: 'https://github.com/Lukas-Green/luxiga.co' },
      image: null
    },
    {
      id: 'personal-site',
      name: 'lukasdgreen.com',
      tag: 'Personal Portfolio',
      cluster: 'brand',
      status: 'live',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-04-08',
      home: { type:'main', ref:'index.html' },
      lane: 'queued',
      laneWhy: 'Live, and the keep-or-redirect call is five months overdue.',
      laneSet: 'proposed',
      micro: 'Delete one of the three -preview.html files.',
      summary: 'The personal portfolio and the repo this board ships inside. Holds the resume, the case studies, the demos, the research and the radar. Its open question has been open since April: stay a distinct personal portfolio, or redirect to luxiga.co.',
      concepts: ['site', 'brand', 'portfolio', 'case-studies'],
      blockers: [
        'The keep-or-redirect decision is five months old and blocks everything downstream.',
        'Three preview files (luxia, luxik, luxiga) are shipped artifacts nobody should reach.',
        'Two UX case studies are hidden in the source waiting on images.'
      ],
      next: [
        { text: 'Delete or archive the three -preview.html files.', effort: 'quick' },
        { text: 'Upload the resume PDF and wire the download button.', effort: 'medium' },
        { text: 'Make the keep-or-redirect call and write it in SESSION.md.', effort: 'deep' }
      ],
      links: { live: 'https://lukasdgreen.com', repo: 'https://github.com/Lukas-Green/Lukas-Green.github.io', local: 'index.html' },
      image: null
    },
    {
      id: 'luxiga-admin',
      name: 'LUXIGA LLC Setup',
      tag: 'Business Admin',
      cluster: 'brand',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-04-08',
      home: { type:'nowhere', ref:'SESSION.md pending list' },
      lane: 'the_one',
      laneWhy: 'Nothing else can be invoiced until this clears. Smallest project, largest gate.',
      laneSet: 'proposed',
      micro: 'Find both invoices and put the two amounts in one note.',
      summary: 'Not a build, but it blocks builds. LUXIGA LLC is registered in Oregon. A handful of formation and banking items remain open, and together they gate invoicing a client cleanly. The specifics are in the local file.',
      concepts: ['admin', 'llc', 'billing', 'brand'],
      blockers: [
        'A duplicate service is being paid for twice. One has to be cancelled.',
        'A mailing-address form is waiting on a supporting document.',
        'Banking is not set up yet, which blocks clean client payments.'
      ],
      next: [
        { text: 'Cancel the duplicate service. One phone call.', effort: 'quick' },
        { text: 'Get the supporting document the address form needs.', effort: 'medium' },
        { text: 'Finish the formation paperwork, then open the account.', effort: 'deep' }
      ],
      links: { local: 'SESSION.md' },
      image: null
    },
    {
      id: 'cbn',
      name: 'Creating Better Neighbors',
      tag: 'Nonprofit / Client',
      cluster: 'civic',
      status: 'live',
      confidence: 'inferred',
      active: true,
      lastWorked: '2026-09-16',
      home: { type:'branch', ref:'claude/redesign-nonprofit-site-3LIKV' },
      track: ['branch:claude/redesign-nonprofit-site-3LIKV', 'repo:Lukas-Green/cbn-redirect'],
      lane: 'queued',
      laneWhy: 'Live client family, most recently touched thing you own.',
      laneSet: 'proposed',
      micro: 'Write one line about what cbn-redirect points to.',
      summary: 'The parent nonprofit, with a redirect repo pushed as recently as this week and two inlined program pages built in this portfolio repo. The most recently touched thing you own, and the hub that Art Inside Out and Restorative Reentry hang off.',
      concepts: ['nonprofit', 'civic', 'site', 'client-work', 'redirect'],
      blockers: [
        'Program pages live in the portfolio repo as dist artifacts, not with the org.',
        'A redirect repo implies a domain move that is not documented anywhere.',
        'Three sibling sites, three repos, no shared template.'
      ],
      next: [
        { text: 'Write down what cbn-redirect points from and to.', effort: 'quick' },
        { text: 'Move the two inlined program pages out of the portfolio repo.', effort: 'medium' },
        { text: 'Build the shared template the three civic sites all want.', effort: 'deep' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/cbn-redirect', local: 'creatingbetterneighbors/dist/' },
      image: null
    },
    {
      id: 'art-inside-out',
      name: 'Art Inside Out',
      tag: 'Nonprofit Program Site',
      cluster: 'civic',
      status: 'live',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-09-14',
      home: { type:'repo', ref:'Lukas-Green/artinsideout-site' },
      lane: 'fold',
      foldInto: 'cbn',
      laneWhy: 'One client family wants one template, not three sites.',
      laneSet: 'proposed',
      micro: 'Add one line to the README saying which copy is canonical.',
      summary: 'A program site for the arts arm of the CBN family, with its own repo and an inlined copy in this portfolio. Actively pushed in September, which makes it live client work rather than a concept.',
      concepts: ['nonprofit', 'civic', 'site', 'arts', 'client-work'],
      blockers: [
        'Two copies exist: the repo and the inlined dist here. Unclear which is canonical.',
        'Assets are base64-inlined, so the page is enormous and hard to edit.',
        'No deploy story documented.'
      ],
      next: [
        { text: 'Mark which copy is canonical in the repo README.', effort: 'quick' },
        { text: 'Extract the inlined images to real asset files.', effort: 'medium' },
        { text: 'Fold it into the shared civic template.', effort: 'deep' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/artinsideout-site', local: 'art-inside-out/index.html' },
      image: null
    },
    {
      id: 'next-reentry',
      name: 'Next Reentry',
      aka: 'Restorative Reentry',
      tag: 'Civic Program Site',
      cluster: 'civic',
      status: 'live',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-09-05',
      home: { type:'repo', ref:'Lukas-Green/nextreentry-site' },
      lane: 'fold',
      foldInto: 'cbn',
      laneWhy: 'Same org family, same template.',
      laneSet: 'proposed',
      micro: 'Pick the name: Next Reentry or Restorative Reentry.',
      summary: 'The reentry program site, third in the CBN family, with an inlined copy here as restorative-reentry. Same shape as Art Inside Out and the same duplication problem. It also shares its entire subject matter with FreedEase, which nothing currently connects.',
      concepts: ['nonprofit', 'civic', 'site', 'reentry', 'client-work'],
      blockers: [
        'Duplicated between its repo and this portfolio, like Art Inside Out.',
        'Two names across two places.',
        'Overlaps FreedEase with no relationship defined.'
      ],
      next: [
        { text: 'Settle the name across both places.', effort: 'quick' },
        { text: 'Write the one line that explains how it relates to FreedEase.', effort: 'medium' },
        { text: 'Fold it into the shared civic template.', effort: 'deep' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/nextreentry-site', local: 'creatingbetterneighbors/dist/restorative-reentry.inlined.html' },
      image: null
    },
    {
      id: 'freedease',
      name: 'FreedEase',
      tag: 'Civic / UX',
      cluster: 'civic',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-07-17',
      home: { type:'repo', ref:'Lukas-Green/freedease-site' },
      lane: 'fold',
      foldInto: 'next-reentry',
      laneWhy: 'A reentry tool with no org, next to a reentry org with no tool.',
      laneSet: 'proposed',
      micro: 'Open the repo. Just look. Close it.',
      summary: 'A reentry-focused PWA built on Apps Script and vanilla JS, with a design prototype and a full origin story in an old Claude export. It has its own repo, last pushed in July, and sits in exactly the domain the Next Reentry client site serves.',
      concepts: ['civic', 'pwa', 'apps-script', 'reentry', 'ux', 'offline'],
      blockers: [
        'Design prototype with no user contact since build.',
        'No named partner org, despite you working with reentry orgs already.',
        'Detail page listed as backlog since March.'
      ],
      next: [
        { text: 'Open the repo and write down what state it is actually in.', effort: 'quick' },
        { text: 'Show it to the reentry client you already have.', effort: 'medium' },
        { text: 'Rebuild it as the tool arm of the reentry site rather than a separate product.', effort: 'deep' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/freedease-site' },
      image: null
    },
    {
      id: 'sovereign-tattoo',
      name: 'Dormant Client Repo',
      tag: 'Client Site',
      cluster: 'client',
      status: 'parked',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-06-09',
      home: { type:'repo', ref:'a client repo' },
      lane: 'parked',
      laneWhy: 'No record of the engagement at all. Park until that one line exists.',
      laneSet: 'proposed',
      micro: 'Archive the repo on GitHub. One click.',
      summary: 'A client site repo, last touched in June. Archived: the engagement is closed. Kept on the board only so it stops being rediscovered as an open thread.',
      concepts: ['site', 'client-work', 'smb'],
      blockers: [
        'Archived. Nothing outstanding.',
        'Not shown as work anywhere, so whatever was built earns nothing.',
        'Check what you are allowed to publish before reusing any of it.'
      ],
      next: [
        { text: 'Archive the repo on GitHub so it stops appearing in the list.', effort: 'micro' },
        { text: 'Decide whether any of it can go on the portfolio.', effort: 'quick' }
      ],
      links: {},
      image: null
    },
    {
      id: 'psu-registration',
      name: 'PSU Registration & Degree Path',
      tag: 'UX Concept',
      cluster: 'learning',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-07-27',
      home: { type:'main', ref:'psu-ux/, psu-concept/' },
      lane: 'fold',
      foldInto: 'scholaros',
      laneWhy: 'Finished higher-ed design meets higher-ed research with no design.',
      laneSet: 'proposed',
      micro: 'Add one line at the top of each folder saying which is newer.',
      summary: 'Two folders of concept work: a hi-fi degree path explorer and a registration hub with a working demo, done twice under psu-concept and psu-ux. Real interaction design, sitting in the repo with no case study framing and no link from the portfolio.',
      concepts: ['ux', 'edtech', 'prototype', 'case-study', 'higher-ed', 'wayfinding'],
      blockers: [
        'Two near-duplicate folders with no stated difference.',
        'Never written up, so it reads as scratch work.',
        'Unclear whether it is a portfolio piece or a pitch to PSU.'
      ],
      next: [
        { text: 'Note which folder is the newer one at the top of each index.', effort: 'quick' },
        { text: 'Write the 7-section case study using the framework already in the backlog.', effort: 'deep' },
        { text: 'Decide: portfolio piece or actual pitch.', effort: 'medium' }
      ],
      links: { local: 'psu-ux/index.html' },
      image: null
    },
    {
      id: 'ux-case-studies',
      name: 'Apple Maps & CleanDrive',
      tag: 'UX Case Studies',
      cluster: 'brand',
      status: 'parked',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'main', ref:'apple-maps.html, cleandrive.html' },
      lane: 'queued',
      laneWhy: 'Finished work, invisible for want of a few images. Cheapest win here.',
      laneSet: 'proposed',
      micro: 'Count the images you actually need. Write the number down.',
      summary: 'Two finished UX case study pages, written and styled, deliberately hidden on the index since March because the imagery is not replaced. Complete work that is invisible for one reason, which makes it the cheapest win on this board.',
      concepts: ['ux', 'case-study', 'portfolio', 'blocked-on-assets'],
      blockers: [
        'Images not replaced. That is the entire blocker.',
        'Hidden in source, so the effort already spent returns nothing.',
        'Six months parked on an asset task.'
      ],
      next: [
        { text: 'List exactly which images are needed. Probably fewer than you think.', effort: 'quick' },
        { text: 'Produce or commission the replacements.', effort: 'medium' },
        { text: 'Unhide both cards on the index.', effort: 'quick' }
      ],
      links: { local: 'apple-maps.html', live: 'https://lukasdgreen.com/apple-maps.html' },
      image: null
    },
    {
      id: 'vertical-demos',
      name: 'Vertical SaaS Demos',
      tag: 'Sales Demos',
      cluster: 'client',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-08',
      home: { type:'main', ref:'ventures/, demo/' },
      lane: 'fold',
      foldInto: 'luxiga-os',
      laneWhy: 'Nine demos of an engine that does not exist yet.',
      laneSet: 'proposed',
      micro: 'Write the name of the one vertical you could actually deliver.',
      summary: 'Five vertical venture pages (construction, healthcare, SMB office, social media management, content/DAM) with matching demos, plus the LLM onboarding demo and the Pulse, Signal and Assembly teasers on luxiga.co. Nine or so surfaces all arguing the same thing: the engine, pointed at another trade.',
      concepts: ['vertical-demo', 'smb', 'ai', 'sales-enablement', 'marketing', 'platform'],
      blockers: [
        'Nine surfaces, zero of them backed by a shippable build.',
        'Split across two repos with no shared component.',
        'No qualification data on which vertical actually responds.'
      ],
      next: [
        { text: 'Rank the five verticals by which one you could actually deliver next month.', effort: 'quick' },
        { text: 'Retire or merge the bottom three so the story is legible.', effort: 'medium' },
        { text: 'Make the top one real on top of the engine.', effort: 'deep' }
      ],
      links: { local: 'ventures/', live: 'https://lukasdgreen.com/saas-ventures.html' },
      image: null
    },
    {
      id: 'scope',
      name: 'Scope',
      tag: 'Internal Tool',
      cluster: 'intel',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-17',
      home: { type:'branch', ref:'claude/project-scope-assistant-ecqkxn' },
      lane: 'queued',
      laneWhy: 'This board. Useful only if the data stays true.',
      laneSet: 'proposed',
      micro: 'Open one card and fix one wrong field.',
      summary: 'This board. One page that holds every project with its status, age, three blockers, three next steps and the clusters they fall into, plus focus controls borrowed from the Runbook density tiers. Built to answer "what do I actually have, and what is the one next thing" without opening twenty repos.',
      concepts: ['internal-tool', 'density-tiers', 'accessibility', 'site', 'clustering'],
      blockers: [
        'Data is hand-maintained. It goes stale the moment you stop editing it.',
        'No screenshots yet, so every card uses a generated tile.',
        'Statuses marked inferred still need your confirmation.'
      ],
      next: [
        { text: 'Walk the board once and fix every inferred field.', effort: 'medium' },
        { text: 'Drop real screenshots into scope/shots/ named by project id.', effort: 'medium' },
        { text: 'Script the lastWorked dates from git and the GitHub API so they self-update.', effort: 'deep' }
      ],
      links: { local: 'scope/index.html' },
      image: null
    },
    {
      id: 'fieldkit',
      name: 'FieldKit',
      tag: 'Productized Service / Field Data',
      cluster: 'workspace',
      status: 'build',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-03-31',
      home: { type:'branch', ref:'claude/update-website-text-JSeI8' },
      lane: 'committed',
      laneWhy: 'The only project with a business plan, a price and eight built configs. If anything earns this quarter, it is this.',
      laneSet: 'proposed',
      micro: 'Open BUSINESS-PLAN.md and read only the Executive Summary.',
      summary: 'A configurable white-label field data capture framework on Google Workspace, sold as a productized service rather than SaaS. Checked on the branch: the eight vertical configs are real declarative schemas (field definitions, roles, branding, the Hard/Quick contact split) and the financial model is fully costed \u2014 $350/$600/$900 setup tiers, $75-150/mo retainer at 35% attach, $750-1500/yr consultant licence, a $67-97 digital product, AppSumo launch, 3 hours to deploy a client. What the branch does not contain is an engine. The configs configure CanvassKit, which lives on main. "Framework built" is true only if you count CanvassKit as the framework.',
      concepts: ['apps-script', 'google-workspace', 'sheets', 'productized-service', 'field-capture', 'contact-tracking', 'smb', 'nonprofit', 'pricing'],
      blockers: [
        'The eight configs have no engine on the branch. They configure CanvassKit, which sits on main as one HTML file.',
        'Zero of the three validation clients approached, six months after the plan said to.',
        'Fully priced and never quoted. The pricing exists only in a projections file.'
      ],
      next: [
        { text: 'Write one line in the FieldKit README naming CanvassKit as the engine.', effort: 'quick' },
        { text: 'Pick the one vertical you can sell this month and name three real prospects.', effort: 'medium' },
        { text: 'Wire one config to the CanvassKit engine end to end, so the framework claim is literally true.', effort: 'deep' }
      ],
      links: { local: 'fieldkit/docs/BUSINESS-PLAN.md' },
      image: null
    },
    {
      id: 'seeng',
      name: 'SEENG',
      tag: 'Legal Agent / Reentry',
      cluster: 'civic',
      status: 'concept',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-07',
      home: { type:'branch', ref:'claude/document-environment-Nol3k' },
      lane: 'queued',
      laneWhy: 'Most complete agent design you have written. Needs a home before it needs a runtime.',
      laneSet: 'proposed',
      micro: 'Write SEENG’s branch name into SESSION.md so you can find it.',
      summary: 'A post-incarceration legal intelligence agent for supervision law: post-prison supervision, parole, probation. Architected as a jurisdiction-agnostic core (identity, method, a ten-phase investigative procedure) with jurisdiction as a loadable module, piloting in Oregon. The most fully specified agent design you have written, and it sits on a branch called document-environment where nobody would look for it.',
      concepts: ['agent', 'legal', 'reentry', 'civic', 'context', 'architecture', 'markdown', 'jurisdiction-modular'],
      blockers: [
        'Buried on a branch named after something else entirely.',
        'Confirmed: the branch is main plus two markdown files. SEENG.md and a session summary. No runtime, no prompt files, no modules.',
        'Legal advice in a supervision context carries real exposure that is not addressed.'
      ],
      next: [
        { text: 'Rename the branch, or move SEENG.md somewhere you would find it again.', effort: 'quick' },
        { text: 'Run the ten-phase procedure by hand on one real Oregon case file.', effort: 'deep' },
        { text: 'Decide what it is: your agent, a tool for a reentry org, or a product.', effort: 'medium' }
      ],
      links: { local: 'SEENG.md' },
      image: null
    },
    {
      id: 'pps-relief',
      name: 'PPS Relief Guide',
      tag: 'Legal PWA / Oregon',
      cluster: 'civic',
      status: 'build',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-07',
      home: { type:'branch', ref:'claude/pps-relief-legal-guide-Okpji' },
      lane: 'queued',
      laneWhy: 'Private by design, but the app shell is real and the domain is yours.',
      laneSet: 'proposed',
      micro: 'Open BUILD-CONTEXT.md and delete the line saying everything is pending.',
      summary: 'An offline PWA walking Oregon Measure 11 offenders through a ten-step process to seek reduction or termination of post-prison supervision. Its own status line says "app shell complete, everything else pending" and lists ten remaining files. All ten now exist: 26KB of step data with real statutory content, 26KB of UI, 26KB of CSS, router, state, onboarding, service worker, manifest and icons. Seventeen files, a working PWA. The status line is five months stale and this is the most finished unshipped thing you own.',
      concepts: ['pwa', 'offline', 'legal', 'reentry', 'civic', 'guided-setup', 'density-tiers', 'localstorage'],
      blockers: [
        'Its own BUILD-CONTEXT.md still says the work is pending. The doc has been wrong since April.',
        'Deliberately private, so there is no deploy path. That is a decision, not an accident.',
        'Legal accuracy has no reviewer named, and this one gives procedural advice to people under supervision.'
      ],
      next: [
        { text: 'Fix the status line in BUILD-CONTEXT.md. It says pending and the files are all there.', effort: 'quick' },
        { text: 'Open index.html in a browser and click through all ten steps to find what is actually missing.', effort: 'medium' },
        { text: 'Find one person who can check the legal substance before anyone relies on it.', effort: 'deep' }
      ],
      links: { local: 'pps-relief/BUILD-CONTEXT.md' },
      image: null
    },
    {
      id: 'oregon-buys',
      name: 'OregonBuys Bid Triage',
      tag: 'Public Procurement',
      cluster: 'intel',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-08-25',
      home: { type:'branch', ref:'claude/oregon-buys-contracts-3ztm7r' },
      lane: 'committed',
      laneWhy: 'Newest work, and the certification gate is a form, not a build.',
      laneSet: 'proposed',
      micro: 'Answer the one eligibility question the local file names.',
      summary: 'A public-sector pursuit system: a bid-triage skill that scores solicitations against a rubric and defaults to no-bid, a 22KB Oregon procurement reference, and a standing context file. Further along than it looked \u2014 supplier registration is already done. Certification, commodity codes and insurance are the remaining gates, and two eligibility rules moved recently in ways that may now include you. The specifics are in the local file.',
      concepts: ['agent', 'procurement', 'government', 'research', 'sales-enablement', 'rubric', 'admin'],
      blockers: [
        'Commodity codes unreviewed. Codes decide which notices reach you, so an incomplete set means opportunities never arrive at all.',
        'Small-business certification not filed, and it gates the set-aside work.',
        'Insurance quoted but not bound, which disqualifies any bid needing a certificate up front.'
      ],
      next: [
        { text: 'Check which certification categories you now qualify for. The rules moved recently.', effort: 'quick' },
        { text: 'Review your commodity codes so design, dev, accessibility and training notices actually reach you.', effort: 'medium' },
        { text: 'File the small-business certification. It is free and you appear to qualify.', effort: 'deep' }
      ],
      links: { local: 'research/procurement-context.md', live: 'https://oregonbuys.gov' },
      image: null
    },
    {
      id: 'courier-direct',
      name: 'Courier Client Redesign',
      tag: 'Client Redesign',
      cluster: 'client',
      status: 'prototype',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-06-01',
      home: { type:'branch', ref:'claude/courier-direct-redesign-gMyeS' },
      lane: 'queued',
      laneWhy: 'Finished work, one unsent email away from an answer.',
      laneSet: 'proposed',
      micro: 'Delete the two unsent draft emails from the branch.',
      summary: 'A single-page redesign for a local courier, built from owner-supplied screenshots after the live site returned 403 to every fetch. Ships with a decisions log, an about page and a demo. Closed: the build is finished and the engagement is over.',
      concepts: ['site', 'client-work', 'smb', 'redesign', 'local-business', 'pitch'],
      blockers: [
        'Closed. Kept as finished spec work, not as an open lead.',
        'Lives on a branch, so it is not linkable as a portfolio piece yet.',
        'Screenshots came from the owner, so check before publishing any of it.'
      ],
      next: [
        { text: 'Delete the two unsent draft emails from the branch.', effort: 'micro' },
        { text: 'Check which assets you may publish before using it as a portfolio piece.', effort: 'quick' },
        { text: 'Write it up as spec work and put it on the site.', effort: 'medium' }
      ],
      links: { local: 'projects/courier-direct/' },
      image: null
    },
    {
      id: 'villa-health',
      name: 'Wellness Practice Concept',
      tag: 'Client Site',
      cluster: 'client',
      status: 'prototype',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-05-04',
      home: { type:'branch', ref:'claude/redesign-villa-health-site-q6p3T' },
      lane: 'parked',
      laneWhy: 'Finished spec work with no record of contact. Park until you decide to pitch.',
      laneSet: 'proposed',
      micro: 'Decide in one word: pitch it, or file it as spec work.',
      summary: 'A 68KB single-page redesign concept for a healthcare practice. Editorial wellness direction: cream, sage, clay and gold, Fraunces and Inter. Hero, services bento, team grid, four-step patient journey, testimonials, FAQ, contact. Spec work, and the page still carries placeholder portraits, names, phone and hours that would have to go before it is shown to anyone.',
      concepts: ['site', 'client-work', 'smb', 'redesign', 'local-business', 'healthcare'],
      blockers: [
        'Spec work, built without a brief from the business.',
        'Placeholder names, phone and hours are still in the page. It cannot be shown as-is.',
        'Single file on a branch, not deployed anywhere.'
      ],
      next: [
        { text: 'Decide in one word: pitch it, or file it as portfolio spec work.', effort: 'micro' },
        { text: 'Strip or clearly mark every placeholder name, number and hour.', effort: 'medium' },
        { text: 'If pitching, verify every detail with the business first.', effort: 'medium' }
      ],
      links: { local: 'villa-health-preview.html' },
      image: null
    },
    {
      id: 'whatnotpro',
      name: 'WhatNotPro',
      tag: 'Live Commerce Automation',
      cluster: 'commerce',
      status: 'concept',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-04-04',
      home: { type:'branch', ref:'claude/whatnot-automation-research-4gOqB' },
      lane: 'parked',
      laneWhy: 'Research and a playbook, nothing built, and RADAR keeps feeding it.',
      laneSet: 'proposed',
      micro: 'Open the playbook and read step one.',
      summary: 'Automation and monetization tooling for Whatnot, the live-stream auction marketplace doing $8B+ GMV. A deep research report plus an execution playbook, both written in April and both on a branch. RADAR has covered it as a live sector three times since, which means the research kept going after the build stopped.',
      concepts: ['commerce', 'automation', 'research', 'marketplace', 'live-selling', 'smb'],
      blockers: [
        'Research and playbook written, nothing built.',
        'RADAR keeps producing findings that route nowhere.',
        'No answer to whether you want to be a seller or sell to sellers.'
      ],
      next: [
        { text: 'Read the execution playbook and mark step one.', effort: 'quick' },
        { text: 'Decide: seller tooling, or you selling. They are different businesses.', effort: 'medium' },
        { text: 'Either build the first automation or take it off RADAR.', effort: 'deep' }
      ],
      links: { local: 'whatnot-execution-playbook.md' },
      image: null
    },
    {
      id: 'merch-store',
      name: 'LUXIGA Merch Store',
      tag: 'Commerce / Automation',
      cluster: 'commerce',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-17',
      home: { type:'branch', ref:'claude/merch-store-automation-S6c7W' },
      lane: 'parked',
      laneWhy: 'Revenue experiment that avoids the hard part of consulting.',
      laneSet: 'proposed',
      micro: 'Write one word: real, or delete.',
      summary: 'A LUXIGA-branded shop page pitched around quality blanks. Checked: every product on it says Coming Soon, seven times. Shopify and print-on-demand are named as the intended route but nothing is connected. It is a storefront shell, and the nearest thing to a revenue experiment that does not depend on finding a client.',
      concepts: ['commerce', 'automation', 'brand', 'site', 'marketplace'],
      blockers: [
        'Seven products, all marked Coming Soon. Nothing is buyable.',
        'Shopify is named but no store, no account and no print provider is connected.',
        'Competes for attention with the client work that actually pays.'
      ],
      next: [
        { text: 'Decide whether this is a real line or a distraction. Write the answer down.', effort: 'quick' },
        { text: 'If real, pick a print-on-demand provider and wire one product.', effort: 'medium' },
        { text: 'If not, delete the branch so it stops counting.', effort: 'quick' }
      ],
      links: { local: 'shop.html' },
      image: null
    },
    {
      id: 'points-exchange',
      name: 'Points Exchange',
      tag: 'Marketplace Concept',
      cluster: 'commerce',
      status: 'concept',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-08-12',
      home: { type:'nowhere', ref:'radar research only' },
      lane: 'parked',
      laneWhy: 'Furthest from your skills of anything here, and it costs a RADAR slot every week.',
      laneSet: 'proposed',
      micro: 'Write one word: keep the RADAR slot, or drop it.',
      summary: 'A points and miles exchange marketplace, researched by RADAR twice on the back of airline and hotel devaluations (Hyatt category 8 up 67%, Marriott up 5-10%, ongoing Delta cuts). Like ScholarOS, it exists entirely inside research documents: no repo, no page, no spec, no decision.',
      concepts: ['commerce', 'marketplace', 'research', 'fintech', 'travel'],
      blockers: [
        'Exists only in RADAR output. Nothing has ever been built or drawn.',
        'Furthest from your actual skill set of anything on this board.',
        'Consumes a RADAR slot every run regardless.'
      ],
      next: [
        { text: 'Decide whether to keep spending a RADAR slot on it.', effort: 'quick' },
        { text: 'If keeping it, write the one-paragraph thesis so the research has a target.', effort: 'medium' },
        { text: 'If not, drop the sector and give the slot to FieldKit.', effort: 'quick' }
      ],
      links: { local: 'research/radar-2026-08-12.md' },
      image: null
    },
    {
      id: 'nick-sites',
      name: 'Editorial-Quant Template',
      aka: 'client portfolio sites',
      tag: 'Template System / Client',
      cluster: 'client',
      status: 'prototype',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-04-16',
      home: { type:'branch', ref:'claude/redesign-nick-sites-2LRYU' },
      lane: 'fold',
      foldInto: 'cbn',
      laneWhy: 'The editorial-quant design system is the template the civic sites need.',
      laneSet: 'proposed',
      micro: 'Open design-system.html. Just look.',
      summary: 'Not a one-off. Its README calls it a house style: "a light, paper-canvas design system for senior practitioners. Serif display, mono metrics, one confident accent, zero gradients." A 43KB design-system document, a 15KB stylesheet, and two sites built on it. This is the shared template the other eight one-off sites keep not having, and it already exists, documented, on a branch from April.',
      concepts: ['site', 'client-work', 'template', 'design-system', 'portfolio', 'redesign'],
      blockers: [
        'A documented house style that nothing in your own portfolio uses.',
        'Three related repos are open to you with no stated status.',
        'Built for portfolios. Whether it stretches to nonprofit sites is untested.'
      ],
      next: [
        { text: 'Open design-system.html and decide whether it is the house template.', effort: 'quick' },
        { text: 'Rebuild one civic site on it as a proof.', effort: 'deep' },
        { text: 'Note the status of the three related repos.', effort: 'quick' }
      ],
      links: { local: 'assets/templates/portfolio/editorial-quant/', repo: '' },
      image: null
    },
    {
      id: 'hq-system',
      name: 'HQ / Workflow Project System',
      tag: 'Internal Tool',
      cluster: 'intel',
      status: 'parked',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-04-04',
      home: { type:'branch', ref:'claude/workflow-project-system-0Eb4a' },
      lane: 'fold',
      foldInto: 'scope',
      laneWhy: 'Two project boards is worse than one. Rescue its CLAUDE.md.',
      laneSet: 'proposed',
      micro: 'Copy CLAUDE.md onto main. One file.',
      summary: 'An earlier attempt at exactly what Scope is: a project HQ with its own stylesheet, PWA manifest, icons and a CLAUDE.md laying out the vanilla-only, no-build architecture rules for the whole repo. Abandoned in April. Its CLAUDE.md is the most useful thing on the branch and applies to everything you build.',
      concepts: ['internal-tool', 'pwa', 'site', 'clustering', 'architecture', 'workflow'],
      blockers: [
        'Superseded by Scope before either one was finished.',
        'Its CLAUDE.md architecture rules never made it to main, so nothing enforces them.',
        'Two half-built project dashboards is worse than one.'
      ],
      next: [
        { text: 'Lift CLAUDE.md onto main. It is useful regardless of which board wins.', effort: 'quick' },
        { text: 'Strip anything worth keeping out of hq-styles.css into Scope.', effort: 'medium' },
        { text: 'Delete the branch and let Scope be the only board.', effort: 'quick' }
      ],
      links: { local: 'CLAUDE.md' },
      image: null
    },
    {
      id: 'branch-hygiene',
      name: 'Branch Backlog',
      tag: 'Repo Maintenance',
      cluster: 'intel',
      status: 'build',
      confidence: 'verified',
      active: true,
      lastWorked: '2026-09-17',
      home: { type:'main', ref:'21 heads on origin' },
      lane: 'queued',
      laneWhy: 'Sixteen branches of invisible work is the root cause of this whole board.',
      laneSet: 'proposed',
      micro: 'Delete one branch that is zero commits ahead.',
      summary: 'The repo carries twenty-one branches. Sixteen hold unmerged work, including four wip/legal-agent-nest-* snapshots from a single day in July that duplicate the courier, Nick and nonprofit work already on their own branches. Two branches (hypertensor-partnership, test-write-access, update-websites) are zero commits ahead and safe to delete outright. This is why half your projects were invisible.',
      concepts: ['admin', 'workflow', 'internal-tool', 'architecture'],
      blockers: [
        'Sixteen branches hold work that main has never seen.',
        'Four legal-agent-nest snapshots duplicate three other branches.',
        'No convention for what a branch means, so none of them ever close.'
      ],
      next: [
        { text: 'Delete the three branches that are zero commits ahead of main.', effort: 'quick' },
        { text: 'Delete the four wip/legal-agent-nest-* snapshots once you confirm they duplicate.', effort: 'medium' },
        { text: 'Merge or formally abandon each of the remaining branches, one per sitting.', effort: 'deep' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/Lukas-Green.github.io/branches' },
      image: null
    },
    {
      id: 'auzmzs',
      name: 'Auzmzs',
      tag: 'Brand / Content',
      cluster: 'brand',
      status: 'concept',
      confidence: 'verified',
      active: false,
      lastWorked: '2026-09-17',
      home: { type:'nowhere', ref:'a coined word, nothing built yet' },
      lane: 'queued',
      laneWhy: 'The only project here that costs nothing to start and is genuinely fun.',
      laneSet: 'proposed',
      micro: 'Write down three Auzmzs bits you already do.',
      summary: 'Your coined word for neurodivergent stimming and quirks, intended as a YouTube channel or a brand around the funny side of being wired this way. It is the only thing on this board with no client, no blocker of consequence and no technical dependency, which in a portfolio this blocked makes it strategically useful rather than a distraction. It is also the voice layer this tool can borrow on low days.',
      concepts: ['brand', 'content', 'neurodivergent', 'audience', 'marketing', 'voice'],
      blockers: [
        'A word, not yet a thing. No channel, no handle, no first bit.',
        'The line between laughing with and laughing at is easy to cross and hard to walk back.',
        'Needs a format you can produce on a low-capacity day or it will die the first bad week.'
      ],
      next: [
        { text: 'List three Auzmzs you already do, without editing them.', effort: 'micro' },
        { text: 'Claim the handle everywhere before you decide anything else.', effort: 'quick' },
        { text: 'Record one under-60-second bit on your phone. Do not edit it.', effort: 'medium' }
      ],
      links: {},
      image: null
    }
  ],

  /* Hand-written merge and consolidation calls. The board also computes
     overlap automatically from shared concepts; these are the ones worth
     stating outright. */
  mergeIdeas: [
    {
      ids: ['canvasskit', 'gh2-tracker'],
      verdict: 'Same product, built twice',
      note: 'Both are Apps Script contact tracking in Sheets for nonprofits. One of them should become the other\'s changelog entry. CanvassKit has the case study, GH2 has the real deployment. Keep CanvassKit\'s name, keep GH2\'s proof.'
    },
    {
      ids: ['transcription', 'recallai', 'luxiga-os'],
      verdict: 'One ingest pipeline wearing three hats',
      note: 'All three are speech in, structured records out. Transcription is the working prototype, RecallAI is the vertical bet, OS is the pitch. OS should absorb transcription as its ingest layer and RecallAI becomes a vertical on top, or gets killed.'
    },
    {
      ids: ['cbn', 'art-inside-out', 'next-reentry'],
      verdict: 'Three sites, one client, no template',
      note: 'Same org family, three repos, plus inlined duplicates in the portfolio. A single small template with per-program content would cut maintenance to a third and give you a real repeatable civic-site offer.'
    },
    {
      ids: ['next-reentry', 'freedease'],
      verdict: 'Same domain, no relationship',
      note: 'FreedEase is a reentry tool with no partner org. Next Reentry is a reentry org with no tool. They are the two halves of one offer and nothing connects them.'
    },
    {
      ids: ['luxiga-runbook', 'scholaros'],
      verdict: 'Same engine, different learner',
      note: 'Runbook is density-tiered guided instruction that works offline. ScholarOS is an offline learning PWA that needs an AI feature. The step engine with three densities IS the AI feature ScholarOS is missing.'
    },
    {
      ids: ['psu-registration', 'scholaros'],
      verdict: 'The research and the design never met',
      note: 'PSU is finished higher-ed interaction design sitting unpublished. ScholarOS is a higher-ed product with market research and no design. One is the other\'s missing half.'
    },
    {
      ids: ['vertical-demos', 'luxiga-os'],
      verdict: 'Demos ahead of the engine',
      note: 'Nine vertical surfaces all promise the same engine. Until OS exists, every new vertical page increases the gap between what is shown and what is built.'
    },
    {
      ids: ['brigs', 'luxiga-os', 'luxiga-runbook'],
      verdict: 'Possibly not a separate project',
      note: 'BRIGS is context architecture for local LLM systems. OS and Runbook are local LLM systems. The honest question is whether BRIGS is a product or simply how you build the other two.'
    },
    {
      ids: ['radar', 'digital-media-research', 'partnerships'],
      verdict: 'Three research outputs, one reader',
      note: 'Automated radar, manual vertical briefs and partnership intel all produce documents nobody routes anywhere. One intake, one action list, feeding this board.'
    },
    {
      ids: ['fieldkit', 'canvasskit', 'gh2-tracker'],
      verdict: 'The generalization already exists',
      note: 'FieldKit is CanvassKit generalized: same Apps Script and Sheets pattern, eight vertical configs, a business plan and a price. OPPORTUNITIES.md on the same branch spells the mapping out. CanvassKit and GH2 should be FieldKit configs with case studies attached, not three projects competing for the same slot.'
    },
    {
      ids: ['pps-relief', 'luxiga-runbook'],
      verdict: 'The step engine, already built once',
      note: 'PPS Relief is a ten-step guided legal process as an offline PWA with localStorage progress. Runbook is a density-tiered step engine that works offline. One is a concept on a marketing page, the other is a working app shell. Runbook does not need to be built from nothing; it needs PPS Relief generalized.'
    },
    {
      ids: ['seeng', 'pps-relief', 'freedease', 'next-reentry'],
      verdict: 'A reentry practice, filed as four unrelated things',
      note: 'A supervision-law agent, a Measure 11 relief PWA, a reentry tool with no org, and a reentry org with no tool. Four projects, one domain, one client family you already serve. This is the most coherent offer on the board and nothing presents it as one.'
    },
    {
      ids: ['seeng', 'brigs'],
      verdict: 'Context architecture, specified twice',
      note: 'SEENG is a jurisdiction-agnostic core of identity, method and procedure with swappable modules. BRIGS is context architecture for local LLM systems, in architecture phase with no artifact. SEENG is the artifact BRIGS never produced.'
    },
    {
      ids: ['hq-system', 'scope'],
      verdict: 'This board, built twice',
      note: 'The workflow-project-system branch is an earlier project HQ with a stylesheet, a manifest and architecture rules. Scope is the second attempt. Keep one. The CLAUDE.md on that branch is worth rescuing either way, because it documents the vanilla-only no-build rules that govern the whole repo and never reached main.'
    },
    {
      ids: ['courier-direct', 'villa-health', 'sovereign-tattoo', 'nick-sites'],
      verdict: 'Four local redesigns, no template, no outcomes',
      note: 'Four client redesigns, the same job done from scratch each time, each stranded on a branch or a repo. The editorial-quant design system is the template the other three needed.'
    },
    {
      ids: ['oregon-buys', 'radar'],
      verdict: 'Two intake agents, no shared outbox',
      note: 'RADAR pulls market findings weekly. Bid-triage scores public solicitations on demand. Both produce scored, actioned output that lands in a markdown file and stops. One action queue, feeding this board, would make either of them worth running.'
    },
    {
      ids: ['whatnotpro', 'merch-store', 'points-exchange'],
      verdict: 'Three revenue experiments, none started',
      note: 'Live-selling automation, a merch line and a points marketplace. All three avoid the hard part of consulting, which is finding clients, and all three are unstarted. Pick at most one, and be honest that the other two are procrastination with a research report attached.'
    }
  ]
};
