# The triage pass

**Eleven cards left.** Started at eighteen; the six that needed a branch read
are done and what they turned up is recorded below. This is how to clear the
rest without it becoming a project of its own.

**Do it in the tool, not in this file.** Open Scope → Triage. It shows one
project, one proposed lane, and the reason. Yes, a different lane, or skip.
The order is already set: guesses first, then down the ladder, highest stakes
first. This file is the reference for what "confirmed" actually requires.

Why a proposal and not a blank field: presenting 37 open decisions is the thing
that causes the freeze (82% of ADHD adults report frequent decision difficulty;
68% say it costs them at work). A proposal converts a decision into a yes/no,
and yes/no is survivable on a bad day. Full reasoning in `RESEARCH.md`, Rule 6.

---

## The rule for "confirmed"

A lane is confirmed when **you** set it, not when the guess looks plausible.
The `unconfirmed` badge is about the *evidence*, not the lane — it means the
status, dates or blockers came from a branch diff rather than from you.

Three questions per card, no more:

1. **Is the status right?** Branch diffs show what was built, never why it
   stopped.
2. **Which lane?** The proposal is a real recommendation, not a placeholder.
3. **Is the two-minute action actually two minutes?** If it isn't, it is the
   wrong action. Shrink it rather than upgrading the effort tag.

If a card needs more than those three, it is hiding two projects. Split it.

---

## The eighteen, and what would settle each

Grouped by what the answer costs. Work down, not across.

### One line of your own knowledge settles it (eight cards, ~15 min total)

These need no research. You already know; it has just never been written down.

| Card | The one line |
|---|---|
| Sovereign Tattoo | Finished, stalled, or dead? |
| The Villa Health | Pitched, ignored, or never sent? |
| Courier Direct | Did the Barry email ever go out? |
| HQ / Workflow system | Is anything on that branch worth keeping besides CLAUDE.md? |
| Creating Better Neighbors | What does `cbn-redirect` point from and to? |
| Art Inside Out | Repo or the inlined copy here — which is canonical? |
| Next Reentry | Next Reentry or Restorative Reentry? |
| Partnership Intelligence | Does this live on the personal site or luxiga.co? |
| WhatNotPro | Seller tooling, or you selling? |
| Points Exchange | Keep the RADAR slot, or drop it? |

### ✅ Done — the six that needed a branch read

Read on 17 Sep. All six are now `verified` on the board, with summaries and
blockers rewritten to match. Four of my six guesses were wrong.

**PPS Relief — the big one.** Its `BUILD-CONTEXT.md` says "app shell complete,
everything else is pending" and lists ten remaining files. **All ten exist.**
26KB of step data carrying real statutory content, 26KB of UI, 26KB of CSS,
router, state, onboarding, service worker, manifest, icons — seventeen files, a
working PWA. The status line has been wrong since April. This is the most
finished unshipped thing you own and the board had it as a shell.

**FieldKit — half right.** The configs are real: declarative schemas with field
definitions, roles, branding and the Hard/Quick contact split. The financial
model is fully costed ($350/$600/$900 setup, $75–150/mo at 35% attach,
$750–1500/yr consultant licence, $67–97 digital product, AppSumo, 3 hours to
deploy). But **there is no engine on the branch.** The configs configure
CanvassKit, which lives on main as one HTML file. "Framework built" is true
only if CanvassKit counts as the framework — which is exactly why the FOLD IN
call holds.

**OregonBuys — further along than the board said.** You are **already
registered** as an OregonBuys supplier. The real blockers are different from
the ones I guessed: commodity codes unreviewed (codes decide which notices
reach you, so an incomplete set means opportunities *never arrive*), ESB
unfiled, and insurance quoted but not bound (an automatic disqualifier for any
bid needing a certificate up front). Two rules also moved: HB 2295 opened VBE
to any honorable discharge, and USDOT dropped race and sex presumptions from
DBE in favour of an individualized narrative.

**Editorial-Quant — a house style, not a one-off.** Its README says so in as
many words: "a light, paper-canvas design system for senior practitioners.
Serif display, mono metrics, one confident accent, zero gradients." 43KB design
system, 15KB stylesheet, two sites built on it. The template the civic sites
need already exists and is documented.

**SEENG — confirmed as guessed.** The branch is main plus two markdown files.
No runtime, no prompt files, no modules.

**Merch Store — confirmed as guessed.** Every product says Coming Soon, seven
times. Shopify and print-on-demand named, nothing connected.

### A real decision (three cards)

Do these at level 5 or above, not on a bad day.

- **ScholarOS / Gradian** — one name, and whether it survives at all against
  work that pays. RADAR has been feeding it for months with nothing built.
- **RecallAI** — healthcare exposure you have not answered. Kill-or-commit, in
  one dated paragraph.
- **WhatNotPro** — seller tooling or you selling? Different businesses, and the
  research does not decide it for you.

Note that PPS Relief now arguably belongs at COMMITTED rather than QUEUED: it
is nearly finished and the only thing between it and done is a legal reviewer.
COMMITTED is capped at two and currently full, so that is a swap, not an add.

---

## Candidate concepts with no card yet

Things visible in the material that could become projects. **Not** added to the
board: a concept becomes a card when you decide it is real, otherwise this
exercise just recreates the problem at a larger scale. Listed so they stop
being rediscovered.

| Concept | Where it came from | Why it might be real |
|---|---|---|
| **The seven CanvassKit verticals** | `OPPORTUNITIES.md` | Field sales, real estate, property, HR, events, health, volunteer. Each is a FieldKit config with a named buyer, not a new build. The highest-yield list you own. |
| **Civic site template** | Implied by CBN + Art Inside Out + Next Reentry | Three sites, one client family, no shared template. Build it once and it becomes a repeatable nonprofit offer. |
| **RADAR as a service** | `radar/`, `research/` | You run automated weekly sector research for yourself. Clients pay for exactly this and you already have the format. |
| **Claude skills for small firms** | `.claude/skills/bid-triage/` | You built a scored triage skill with a rubric and a standing context file. That is a deliverable, not just a tool. |
| **SEENG jurisdiction modules** | `SEENG.md` architecture | Oregon is the pilot *by design*. Each additional state is a module, which is a product shape rather than a rewrite. |
| **Scope itself** | This board | A neurodivergence-first project board built on published research. It is either a portfolio piece, an open-source release, or a product. Currently none of the three. |
| **Runbook from PPS Relief** | Overlaps view | A working ten-step offline guided PWA generalized into the step engine the marketing site already sells. |
| **COBID certification** | `procurement-context.md` | Not a project — an unlock. ESB, and possibly veteran and DBE. It gates a whole category of public work. |

When one of these becomes real, add it to `projects.js` with a lane and a
two-minute action, and it joins the ladder like everything else.

---

## Maintenance

Do not batch this. One triage card is a complete session — the point is that
stopping after one is a success, not an abandonment.

- **After each pass**, the confirmed count in the footer goes up and stays up.
- **`lastWorked` drifts.** Don't edit it by hand — run
  `node scope/tools/refresh-dates.js --dry-run`, then without the flag. It
  reads git for anything on main or a branch and the GitHub API for separate
  repos, and moves nothing else in the file.
- **When a lane gets crowded**, the fix is FOLD IN, not a bigger THE ONE. The
  ladder only works if the top two rungs stay small.
