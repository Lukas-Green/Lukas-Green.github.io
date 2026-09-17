# SCOPE

A sanity and scope board for everything you have going at once. One page that
answers three questions without opening twenty repos:

1. **What do I actually have?** Every project with a status, an age, a preview
   tile and a short but real explanation.
2. **What is stuck, and on what?** Three blockers and three next steps per
   project. Three is the cap on purpose. If a blocker list runs to seven, the
   project is really several projects.
3. **What is the same thing built twice?** Clusters by shared concept, plus an
   Overlaps view that scores every pair and names the merges worth making.
4. **Where does it actually live?** Every card says whether the work is on
   `main`, stranded on an unmerged branch, in a separate repo, or nowhere but a
   document. Twelve of the thirty-six are on branches.

Open `scope/index.html`. It works straight off disk (`file://`), no build step
and no server. Data lives in `scope/projects.js`; the page is just the reader.

---

## The AuDHD layer

The Runbook idea is that the same information is served at the density that
fits you, and the exact values never disappear — only the hand-holding fades.
This board applies that to a project list rather than an instruction set.

| Control | What it does | Why |
|---|---|---|
| **Density: Calm / Standard / Everything** | Calm shows name, status and one next step, six cards maximum. Everything adds raw dates and every concept tag. | The Runbook tiers. Nothing is hidden that changes a decision, only the surrounding weight. |
| **Energy available** | Filters to projects that have a step you could do in 15 minutes, an hour, or a deep session — and hides the steps you cannot. | Task lists usually assume unlimited executive function. This one asks what you have and answers with only that. |
| **One thing** | Picks a single project and a single step, leads with the action, and offers "not that one" instead of a list. | Twenty-four cards is a decision. One card is a start. |
| **Low stimulation** | Removes the grain, the glow, the motion and the bright accent. | Same page, turned down. Also honours `prefers-reduced-motion` on its own. |
| **WIP limit** | You set a number. The top bar states plainly when you are over it. | The scope assist. It does not congratulate you for having nine active projects. |
| **Park** | Moves a project out of the way without deleting it. Reversible, stored locally. | Parking is not failure and should not require a commit. |
| **Hide parked & dormant** | Removes the guilt pile from view entirely. | Sometimes the honest answer is "not this month." |
| **Hide blockers** | Turns off the "in the way" list. | On a bad day the blocker column is the thing that closes the tab. |
| **Lives in** | Filters to unmerged branches, docs-only projects, `main`, or separate repos. | The single most useful filter here. "Unmerged branch" is the list of work you finished and then lost. |

Everything persists in `localStorage`, so the board opens the way you left it.
Keyboard: <kbd>/</kbd> search, <kbd>f</kbd> focus panel, <kbd>1</kbd>
<kbd>2</kbd> <kbd>3</kbd> density, <kbd>Esc</kbd> clear filters.

---

## The four views

- **Board** — everything, sorted by what needs attention. The default sort
  weighs active status, staleness and blocker count, so an active project going
  cold floats to the top. That is the most expensive thing on the board.
- **Clusters** — grouped by the cluster you assign each project. Seven groups
  today: engine, workspace tools, civic, brand, intelligence, learning, client.
- **Overlaps** — the 17 hand-written merge calls first, then a computed table.
  Every pair sharing two or more concepts, scored by Jaccard overlap, marked
  `called out` or `unexamined`. The unexamined rows are the point.
- **One thing** — one project, one step, one button.

---

## Editing the data

Everything is in `projects.js`. It is plain JavaScript rather than JSON so the
page works over `file://` with no fetch and no server.

```js
{
  id: 'luxiga-os',              // unique, also used for #anchors and merge refs
  name: 'LUXIGA OS',
  aka: 'Old name',              // optional
  tag: 'Platform / Local AI',   // the small category line
  cluster: 'engine',            // must be a key in SCOPE.clusters
  status: 'build',              // live | build | prototype | concept | delivered | parked
  confidence: 'verified',       // verified | inferred  (inferred shows "unconfirmed")
  active: true,                 // counts against the WIP limit
  lastWorked: '2026-09-05',     // YYYY-MM-DD
  home: { type:'branch', ref:'claude/…' },  // where the work actually lives:
                                //   main | branch | repo | nowhere
                                //   branch and nowhere render as warnings
  summary: '…',                 // 2-4 sentences, honest
  concepts: ['local-llm', 'whisper'],   // drives clustering and overlap scoring
  blockers: ['…', '…', '…'],            // max 3
  next: [{ text: '…', effort: 'quick' }],  // quick | medium | deep, max 3
  links: { live, repo, caseStudy, local },  // all optional
  image: null                   // 'shots/luxiga-os.png', or null for a generated tile
}
```

**`home` drives the honesty.** `branch` means finished work nobody can see;
`nowhere` means the project exists only as prose in a doc or a research file.
Both add weight to the "needs attention" sort, because invisible work is the
kind you rebuild by accident.

**Concepts are the load-bearing field.** Clustering and overlap detection both
run off them, so reuse the same strings across projects. Two projects that
share `apps-script` and `nonprofit` will find each other whether or not you
noticed the pair.

**Screenshots.** Drop images in `scope/shots/` named by project id and set
`image: 'shots/<id>.png'`. Until then each card draws a deterministic node-graph
tile from its id, so the board never looks half-built.

**Status dates.** `lastWorked` comes from `git log -1 --format=%as -- <path>`
for folders in this repo, and from the GitHub push date for separate repos.
Regenerating these automatically is a next step on the Scope card itself.

---

## Where this data came from

- `main` of this repo: folders, pages, `SESSION.md`, `BUILD-LOG.md`, `research/`, `radar/`
- The other 20 branches on `origin`, read with `git diff --name-only main...<branch>`
- The 7 GitHub repos under `Lukas-Green`, plus 3 under `nickmccarty` you can push to
- `luxiga.co`, cloned and read for the product copy

`lastWorked` is `git log -1 --format=%as -- <path>` for folders on main, the
branch tip date for branch work, and the GitHub push date for separate repos.

## What is unconfirmed

Cards marked `unconfirmed` were inferred from repo contents, branch diffs and
research files rather than confirmed by you. Currently 18 of 36 — most of the
branch work, since a branch diff shows what was built but never why it stopped.
Walk the board once and fix them, and the badge goes away.

## Design

Tokens, type and card treatment are carried over from `luxiga.co`: Space
Grotesk and Space Mono, `#080810` on `#C4FF53` and `#8B5CF6`, 12px cards, 1px
`#1a1a2e` borders, violet glow on hover, the fixed grain overlay. Light mode
uses the same light palette as the business site, with the accent text darkened
to `#3D6B00` so it stays readable. No dependencies, no build.
