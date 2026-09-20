# SCOPE

A project board for 37 projects and a brain that does not reliably start
things. One page, no build step, no dependencies. Open `scope/index.html` —
it works straight off disk.

Four data files, three documents and a script:

- **this file** — how it works and how to edit it
- **[`docs/RESEARCH.md`](docs/RESEARCH.md)** — the 22 design rules and the
  literature behind them. Every interface decision traces to a numbered rule.
- **[`docs/TRIAGE.md`](docs/TRIAGE.md)** — how to clear the remaining 11
  unconfirmed cards, what the first six turned up, and the concepts that have
  no card yet
- **`tools/refresh-dates.js`** — keeps `lastWorked` honest, below
- **`workspace.js`** — the to-do lists. People and to-dos live in
  `workspace.local.js`, which is gitignored — see Private data below

---

## The commitment ladder

Lanes are the importance levels. Colour is the code, and position on the ladder
is the meaning. The order never changes at any dial level.

| Lane | Colour | Cap | What it means |
|---|---|---|---|
| **THE ONE** | lime, solid | 1 | One commitment. Everything else waits. |
| **COMMITTED** | lime, dimmed | 2 | Actively yours this month. |
| **QUEUED** | violet | — | Real, next, not started. No guilt attached. |
| **FOLD IN** | violet, faint | — | Absorb into another project. **This lane is how scope shrinks.** |
| **PARKED** | slate | — | Deliberately not now. Reversible, and not a failure. |
| **CLOSED** | dotted outline | — | Done with. Kept so it stops being rediscovered. |

FOLD IN is the anti-scope-creep mechanism, and the one that does real work
here: 14 of 37 projects are marked to fold into another. Each carries a
`foldInto` target and the reason, so the card says *"Fold into FieldKit —
FieldKit is this, generalized, with a price attached."*

An empty lane still shows its heading. The skeleton of the page is identical
every time you open it, because unpredictability is itself an anxiety input
(Rule 15).

---

## Capture

The sidebar's top button. Three ways in, because two of them can be blocked:

1. **Speak** — hit record. With *Transcribe as I talk* on, the browser's own
   speech engine writes into the box as you go. In Chrome that means audio
   reaches Google, and the panel says so; turn it off and you still get the
   recording, just without the words. **Recording needs a secure context** — a
   page opened straight off disk usually cannot have the microphone. Run
   `python3 -m http.server` inside `scope/` and open localhost, and it works.
2. **Drop a recording in** — any audio file. With a speech-to-text key set it
   transcribes and the text lands in the box. Without one it loads a player so
   you can play it back and type what matters.
3. **Type** — always available, never blocked.

Then **Make sense of this** turns the words into to-dos. With an Anthropic key
Claude reads it; without one a local rule-based parser does, and that still
works with no key and no network. Either way you get a **proposal with
checkboxes** — nothing is filed until you tick it and press the button
(Rule 6 proposes, Rule 9 lets you decline).

It reads who, what and how long out of the wording:

> *"Call the registered agent and cancel one of them. Email Kirk about which
> Art Inside Out copy is the real one. Also I need to pick up a birthday card."*

| Item | List | Person | Project | Demand |
|---|---|---|---|---|
| Call the registered agent… | Business admin | — | — | call |
| Email Kirk about… | People & clients | Kirk Charlton | Art Inside Out | email |
| Pick up a birthday card | Life | — | — | errand |

**Why two services.** Claude accepts text, images and PDFs — not audio. So
audio needs a dedicated speech-to-text step, and Claude does the part it is
actually good at: reading a rambling transcript and turning it into records.

**Keys** live in Settings, in this browser's storage, and go straight from this
page to those APIs. That is fine for a tool on your own machine. **If this ever
ships to anyone else the keys must move to a server** — a key in a public page
is a key you have given away.

## Private data

**This repo is public.** Client names, candid notes about live engagements and
business detail do not belong in it, so they live in **`workspace.local.js`**,
matched by `scope/*.local.js` in `.gitignore` and never committed.

Copy `workspace.local.example.js` to `workspace.local.js` and fill it in. It
can carry three things, all optional:

| Key | Overrides |
|---|---|
| `workspace` | the real `clients` and `todos` |
| `scripts` | call and email openers, which quote real people |
| `projects` | any field of any project — for wording too candid to publish |

The page loads it after the public files and merges it over the top. On a
fresh clone the file is absent, the 404 is expected, and the tool runs with an
empty People view. The published copy shows the shell and no client.

A client marked `archived: true` sorts to the bottom, dims, and reads as closed
rather than neglected.

**Keep a copy somewhere durable** — it is deliberately not in git, so nothing
is backing it up for you.

## To-dos and people

A to-do can belong to a person, a project, both or neither. Five lists:
**People & clients**, **Project work**, **Business admin**, **Life**,
**Someday**. Life starts empty on purpose.

The **People** view is the one that earns its place: seven clients, each with
what is currently owed to them. Kirk's email lives under Kirk, not buried in a
repo. Click a name anywhere — sidebar, to-do tag, person card — to filter to
just their list.

Ticking something off updates in place rather than re-rendering the list, so
the row never moves out from under the cursor (Rule 4). Done items stay where
they are until you leave the view.

Anything you add in the browser lives in localStorage. **Export to-dos** in the
sidebar writes it back out as a file to paste into `workspace.js` and commit.

## The nine-level dial

One control. It sets how much work you are offered **and** how loud the page
is, because task load and sensory load draw on the same budget (Rule 11).
Arrow keys or number keys move it.

| Level | Cards | Biggest task | Colour | Adds |
|---|---|---|---|---|
| 1 · Barely | 1 | 2 min | none | The step. Two escape hatches. A timer. |
| 2 · Low | 1 | 2 min | 15% | What it belongs to |
| 3 · Warming up | 3 | 15 min | 30% | Lanes, Triage |
| 4 · Steady | 3 | 15 min | 45% | Dates, branch labels |
| 5 · Working | 5 | 1 hr | 60% | Screenshots, search, counts |
| 6 · Good day | 7 | 1 hr | 75% | Blockers |
| 7 · Sharp | all | deep | 90% | Concepts, clusters, alarm colours |
| 8 · Strategic | all | deep | 100% | Overlaps |
| 9 · Everything | all | deep | 100% | Raw dates |

The card cap is a **budget spent across the whole view**, top lane first — three
at level 3 means three cards total, not three per lane.

**Nothing changes position between levels.** Level 1 and level 9 are the same
room with the lights at different settings. Views above your level stay visible
in the tab row, dimmed; clicking one raises the dial and says so.

**Down is as legitimate as up.** Level 1 is a supported state with useful
output, not a failure mode. Every project carries a `micro` action under two
minutes, so level 1 always has something real to offer.

---

## What else the research changed

- **The step comes before the blockers**, always. The unit of work is one
  action, never a project (Rule 1).
- **Steps are typed by demand, not just duration** — `call`, `email`, `decide`,
  `admin`, `read`, `build`. A two-minute phone call and a two-minute file rename
  are not the same task (Rule 17).
- **Call and email steps ship with the opening line already written.** Removing
  "what do I even say" removes most of the cost (Rule 18).
- **Sit with me** — a count-up timer on the Now view. No logging, no score, no
  report. Body doubling without surveillance (Rule 20).
- **No streaks. No overdue red. No guilt notifications.** Punishing UI is a
  documented reason people abandon these tools (Rule 21). Alarm colours only
  exist at level 7+, and can be switched off entirely.
- **Age can be hidden** in Settings. It is information, not an accusation.
- **Nothing is asked twice.** Level, view, lanes and preferences persist.

---

## Triage

Triage shows **one** project, **one** proposed lane, and the reason. Yes, a
different lane, or skip. Unconfirmed guesses come first.

A proposal rather than a blank field is the whole point: it turns an open
decision into a yes/no, and yes/no survives a bad day. See `docs/TRIAGE.md` for
what "confirmed" requires per card.

---

## Editing the data

Everything is in `projects.js` — plain JavaScript, not JSON, so the page works
over `file://` with no fetch and no server.

```js
{
  id: 'fieldkit',
  name: 'FieldKit',
  tag: 'Productized Service / Field Data',
  cluster: 'workspace',          // key in SCOPE.clusters
  status: 'build',               // live | build | prototype | concept | delivered | parked
  confidence: 'inferred',        // verified | inferred → shows "unconfirmed"
  active: false,
  lastWorked: '2026-03-31',      // YYYY-MM-DD
  home: { type:'branch', ref:'claude/update-website-text-JSeI8' },
                                 // main | branch | repo | nowhere
  lane: 'committed',             // the_one | committed | queued | fold | parked | closed
  foldInto: 'fieldkit',          // required when lane is 'fold'
  laneWhy: 'The only project with a business plan…',
  laneSet: 'proposed',
  micro: 'Open BUSINESS-PLAN.md and read only the Executive Summary.',
  microDemand: 'read',           // optional; overrides the heuristic
  summary: '…',
  concepts: ['apps-script', 'productized-service'],
  blockers: ['…'],               // max 3
  next: [{ text:'…', effort:'quick', demand:'admin' }],
                                 // micro | quick | medium | deep, max 3
  links: { live, repo, caseStudy, local },
  image: null                    // 'shots/fieldkit.png', or null for a tile
}
```

`SCOPE.scripts[id]` holds the opening line for a project's call or email step.

**`micro` is required.** It is what level 1 and 2 serve, and it has to be
genuinely under two minutes. If it isn't, shrink it — don't retag it.

**`concepts` are load-bearing.** Clustering and overlap detection both run off
them, so reuse the same strings. Two projects sharing `apps-script` and
`nonprofit` will find each other whether or not you noticed.

**`home` drives the honesty.** `branch` means finished work nobody can see;
`nowhere` means it exists only as prose. Twelve are on branches, nine are
nowhere.

**`track`** is optional, for a project that genuinely lives in more than one
place: `track: ['branch:claude/…', 'repo:owner/name']`. The refresh script then
takes the newest of them.

**`workspace.js`** holds clients and to-dos. A client needs `id`, `name`,
`short` (the sidebar label), `org`, `projects` and `note`. A to-do needs `id`,
`list` and `text`; `client`, `project`, `demand` and `effort` are optional and
the parser fills them in when it can.

**Screenshots** go in `scope/shots/` named by id. Until then each card draws a
deterministic node-graph tile, so the board never looks half-built.

---

## Auzmzs

Auzmzs is a project on the board — your coined word for neurodivergent stimming
and quirks, aimed at a channel or a brand. It is also an **opt-in voice layer**,
off by default, that warms up the empty states. Settings → Auzmzs voice. A tool
you open on bad days should not make jokes at you unless you asked it to.

---

## Keeping the dates honest

`lastWorked` goes stale the moment you stop editing it, so don't edit it:

```sh
node scope/tools/refresh-dates.js --dry-run   # show what would change
node scope/tools/refresh-dates.js             # write it
node scope/tools/refresh-dates.js --no-net    # git only, skip GitHub
```

It resolves each project from its `home.type` — last commit on `main` for a
path, branch tip for a branch, GitHub's `pushed_at` for a separate repo, and
`links.local` for a docs-only project. **It rewrites nothing but the
`lastWorked:` line**, so hand-written prose survives a refresh. Projects that
exist only as prose are left alone and reported as such.

Two deliberate behaviours: a project with `track` takes the **newest** of its
sources, and if any declared source fails to answer the date is **not moved at
all** — a partial answer is only a lower bound, and moving a date backwards is
worse than leaving it. No dependencies; git and curl.

## Where the data came from

`main` of this repo; all 20 other branches on `origin`, read with
`git diff --name-only main...<branch>`; the 7 GitHub repos under `Lukas-Green`
plus 3 under `nickmccarty`; and `luxiga.co`, cloned and read for product copy.

`lastWorked` is generated by `tools/refresh-dates.js`, not typed.

Six cards were confirmed by reading their branches on 17 Sep, and four of the
six corrected the board — most sharply PPS Relief, whose own status file
understated it by about sixteen files. See `docs/TRIAGE.md`.

## Design

Tokens, type and card treatment carry over from `luxiga.co`: Space Grotesk and
Space Mono, `#080810` with `#C4FF53` and `#8B5CF6`, 12px cards, 1px borders.
Every hue passes through a `--chroma` variable the dial sets, which is how one
control desaturates the whole page. Light mode darkens the accent to `#3D6B00`
for contrast. No dependencies, no build.
