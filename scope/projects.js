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
 * effort     quick (<=15 min) | medium (~an hour) | deep (a real session)
 * lastWorked YYYY-MM-DD — for repos this is the last push, for folders the
 *            last commit that touched them.
 * image      path to a screenshot, or null for the generated tile
 */

window.SCOPE = {
  updated: '2026-09-17',
  wipLimit: 3,

  clusters: {
    engine:    { name: 'Local-First AI Engine',   blurb: 'One engine: voice and files in, structured records out, on your own hardware.' },
    workspace: { name: 'Google Workspace Tools',  blurb: 'Apps Script builds that live inside Sheets and Docs. Same skeleton, different trade.' },
    civic:     { name: 'Civic & Nonprofit',       blurb: 'Reentry, restorative justice, neighborhood orgs. Mostly one client family.' },
    brand:     { name: 'Brand & Portfolio',       blurb: 'LUXIGA and the personal site. The storefront for everything else.' },
    intel:     { name: 'Research & Intelligence', blurb: 'Automated and manual market research feeding positioning and scoping.' },
    learning:  { name: 'Learning Systems',        blurb: 'Guided instruction, density tiers, degree paths. The teaching pattern.' },
    client:    { name: 'Client & Vertical Work',  blurb: 'Paid builds and the demos that sell them.' }
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
      lastWorked: '2026-08-28',
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
      summary: 'Not a build, but it blocks builds. LUXIGA LLC is registered in Oregon (amended from LUXIK). Outstanding: a duplicate registered agent being paid twice, the CMRA form, Proton Mail on the domain, EIN and a business bank account. Every one of these gates invoicing a real client.',
      concepts: ['admin', 'llc', 'billing', 'brand'],
      blockers: [
        'Two registered agents billing at once ($84/yr and $199/yr). One must be cancelled.',
        'CMRA form needs a document showing a physical address.',
        'No EIN yet, so no business bank account, so no clean client payments.'
      ],
      next: [
        { text: 'Cancel the duplicate registered agent. One phone call.', effort: 'quick' },
        { text: 'Update car insurance or bank to the temp address to satisfy the CMRA form.', effort: 'medium' },
        { text: 'Chase the EIN, then open the business account.', effort: 'deep' }
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
      name: 'Sovereign Tattoo',
      tag: 'Client Site',
      cluster: 'client',
      status: 'parked',
      confidence: 'inferred',
      active: false,
      lastWorked: '2026-06-09',
      summary: 'A client site repo untouched since June. It does not appear on either portfolio, is not in any session log, and there is no note about whether the engagement finished, stalled or was abandoned.',
      concepts: ['site', 'client-work', 'smb'],
      blockers: [
        'No record of the engagement status anywhere.',
        'Not shown as work on either site, so it earns nothing.',
        'Three months cold.'
      ],
      next: [
        { text: 'Answer in one line: finished, stalled, or dead?', effort: 'quick' },
        { text: 'If finished, add it to the portfolio as delivered client work.', effort: 'medium' },
        { text: 'If stalled, send one email to close or restart it.', effort: 'medium' }
      ],
      links: { repo: 'https://github.com/Lukas-Green/sovereign-tattoo' },
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
    }
  ]
};
