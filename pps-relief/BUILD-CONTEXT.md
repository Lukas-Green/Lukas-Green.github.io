# PPS Relief Guide — PWA Build Context

## What This Is
A self-contained mobile PWA at `/pps-relief/` within the `Lukas-Green.github.io` repo. It guides Oregon Measure 11 offenders through a 10-step process for seeking reduction/termination of Post-Prison Supervision (PPS). The framework is extensible — any legal topic can be added as a JSON data module.

**Branch:** `claude/pps-relief-legal-guide-Okpji`
**Status:** In progress — app shell (index.html) is complete. Everything else is pending.
**Visibility:** Private. Do NOT merge to main or create a PR until explicitly told to.

---

## Architecture

### Tech Stack
- **Vanilla HTML/CSS/JS only** — no frameworks, no build tools, no npm
- **Single-page app** with hash-based routing (`#/dashboard`, `#/step/3`, etc.)
- **localStorage** for all state (progress, documents, notes)
- **PWA** — manifest.json, service worker, installable, fully offline
- **Hosted on GitHub Pages** (static)

### Design System
- **Theme:** Dark with civic-blue palette (NOT the portfolio's teal)
  - Background: `#0f1119`
  - Card/Surface: `#1a1d2e`
  - Accent primary: `#7C9AFF` (calm blue)
  - Accent secondary: `#A78BFA` (soft violet)
  - Success: `#34D399` (green)
  - Text: `#F1F5F9` / `#94A3B8`
  - Border: `#2A2D3E`
- **Font:** Inter (400, 500, 600, 700, 800)
- **Navigation:** Bottom tab bar (4 tabs: Home, Steps, Docs, Info) + drill-down with back button
- **Mobile-first**, must feel native (slide transitions, touch feedback, overscroll control)

---

## File Structure

```
/pps-relief/
  index.html              ✅ DONE — app shell with onboarding overlay, tab bar, header, tooltip/toast/celebration containers
  manifest.json           ❌ TODO
  sw.js                   ❌ TODO
  css/
    app.css               ❌ TODO — all styles, mobile-first, standalone
  js/
    state.js              ❌ TODO — localStorage state manager
    router.js             ❌ TODO — hash router with slide transitions
    ui.js                 ❌ TODO — renders all views (dashboard, steps, substeps, documents, info, glossary, tooltips)
    onboarding.js         ❌ TODO — 4-screen onboarding flow
    app.js                ❌ TODO — entry point, init, data loading, wiring
    sw-register.js        ❌ TODO — service worker registration + update toast
  data/
    pps-relief.js         ❌ TODO — 10-step legal content as JS object (window.PPS_DATA)
    glossary.js           ❌ TODO — legal term definitions as JS object (window.GLOSSARY)
  icons/
    icon.svg              ❌ TODO — source SVG
    icon-192.png          ❌ TODO
    icon-512.png          ❌ TODO
    apple-touch-icon.png  ❌ TODO
```

Note: Data files are `.js` (not `.json`) so they can be loaded via `<script>` tags without fetch — simpler, no CORS issues when opening locally.

---

## Data Model

### Legal Content (`data/pps-relief.js` → `window.PPS_DATA`)
```js
{
  id: "pps-relief",
  title: "Oregon PPS Relief Guide",
  subtitle: "Measure 11 — Reduction/Termination of Post-Prison Supervision",
  version: "1.0.0",
  jurisdiction: "Oregon",
  disclaimer: "This is an informational guide, not legal advice.",
  steps: [{
    id: 1,
    title: "Confirm Statutory & Case-Law Framework",
    summary: "Short plain-language summary...",
    icon: "scale",  // maps to inline SVG in ui.js
    substeps: [{
      id: "1.1",
      title: "Review governing statutes",
      detail: "Longer explanation...",
      actionItems: [
        { id: "1.1.a", text: "Obtain current text of ORS 144.103", type: "task" },
        { id: "1.1.b", text: "Review relevant case law", type: "research" }
      ],
      legalRefs: [
        { cite: "ORS 144.103", url: "https://..." }
      ],
      glossaryTerms: ["PPS", "Measure 11", "ORS"]
    }]
  }]
}
```

### Glossary (`data/glossary.js` → `window.GLOSSARY`)
```js
{
  "PPS": "Post-Prison Supervision — a period of community supervision...",
  "Measure 11": "Oregon Ballot Measure 11 (1994) — mandates minimum sentences...",
  // etc.
}
```

### User State (`localStorage` key: `pps_relief_state`)
```js
{
  version: 1,
  onboardingComplete: true,
  userProfile: {
    startingPoint: "just-starting" | "in-progress" | "near-end",
    hasAttorney: "yes" | "no" | "unsure",
    createdAt: "ISO string"
  },
  steps: {
    "1": { started: true, completed: false, startedAt: "...", completedAt: null }
  },
  actionItems: {
    "1.1.a": { checked: true, checkedAt: "..." }
  },
  documents: [
    { id: "doc_1", name: "Court records", stepId: 2, notes: "...", addedAt: "..." }
  ],
  notes: {
    "3": "Free text notes for step 3..."
  }
}
```

State API (in `js/state.js`):
- `State.get()` / `State.save(state)`
- `State.toggleAction(id)` / `State.markStepComplete(stepId)`
- `State.addDocument(doc)` / `State.removeDocument(id)`
- `State.getProgress()` → `{ completed: 3, total: 10, percentage: 30 }`
- `State.export()` → JSON string for download
- `State.reset()` — clears all data

---

## Router (`js/router.js`)

Hash-based SPA router:
```
#/dashboard              → renderDashboard()
#/steps                  → renderStepsList()
#/step/:id               → renderStep(id)
#/step/:id/sub/:subId    → renderSubstep(id, subId)
#/documents              → renderDocuments()
#/info                   → renderInfo()
#/info/glossary          → renderGlossary()
```

- Listens to `hashchange`
- Tracks navigation stack for animation direction (forward = slide left, back = slide right)
- Updates tab bar active state
- Updates header title and back button visibility

---

## Key UX Features

### Onboarding (4 screens, `js/onboarding.js`)
Shown once (tracked via `onboardingComplete` in state). Screens:
1. Welcome — app name, description, "Get Started"
2. Feature overview — privacy, checklists, document tracker
3. "Where are you?" — card selector (just starting / in progress / near end)
4. "Legal representation?" — yes / no / not sure
→ "Let's Go" saves profile and lands on Dashboard

The HTML for onboarding is already in `index.html`. The JS just handles screen transitions, card selection, and saving state.

### Tooltips
- Legal terms in rendered content get wrapped in `<span class="legal-term" data-term="PPS">`
- Single shared `div#tooltip` positioned near tapped term
- Tap to show on mobile, hover on desktop
- Terms have dotted underline + subtle highlight to signal interactivity

### CTAs
| CTA | Style | Where |
|-----|-------|-------|
| "Start This Step" | Primary (filled blue) | Step card |
| "Mark Complete" | Primary + checkmark | Sticky bottom of step detail |
| "Continue Step N" | Large primary | Dashboard hero |
| "Add Document" | FAB with + icon | Documents view |
| "Download Progress" | Secondary outline | Info view |

### Progress Tracking
- Dashboard shows ring/circle progress indicator
- Step list shows completion badges
- Individual steps show substep checklist progress
- Encouraging messages on milestones ("Step 3 complete! 30% done.")

### Document Tracker
- Add/edit/delete documents with name, associated step, and notes
- Simple list view in the Documents tab

---

## The 10 Steps (Content Source)

The legal content comes from this plan (written from the perspective of an experienced Oregon judge):

1. **Confirm statutory and case-law framework** — Identify ORS chapters, BPPPS authority, Measure 11 provisions. Review controlling case law. Check for recent legislative/federal changes.

2. **Case file and eligibility review** — Obtain criminal file (judgment, PSI, transcripts, charging instruments). Obtain supervision file (conditions, risk assessments, violations, treatment records). Check victim notification/restitution. Confirm discharge criteria.

3. **Risk, compliance, and mitigation documentation** — Compile rehab evidence (certificates, clean tests, employment, housing, letters). Get actuarial risk assessment. Document compliance and remedied violations.

4. **Administrative routes (first line)** — Request admin modification with PO for reduced reporting. If denied, get written rationale and appeal. Petition BPPPS for early termination with supporting docs.

5. **Court-based options** — File motion in sentencing court for early termination/modification. Ground in changed circumstances, compliance, or constitutional claims. Prepare witnesses.

6. **Clemency/commutation** — Prepare petition to Governor emphasizing rehab, public safety, disproportionate burden. Engage application procedures.

7. **Constitutional and statutory litigation** — Evaluate facial/as-applied challenges (8th Amendment, due process). File motions based on intervening decisions. Coordinate with appellate counsel.

8. **Victim communication and community safety plan** — Address victim notification/concerns. Develop transition plan (graduated reduction, GPS/treatment continuation, employer verification).

9. **Hearing preparation and presentation** — Prepare judicial memorandum with authorities and proposed order. Line up witnesses (PO, treatment provider, employer, risk assessor). Prepare individual testimony.

10. **Post-decision management and appeals** — If granted: implementation plan. If denied: preserve appellate issues, consider alternate relief. Monitor for law changes.

---

## Implementation Order (Remaining)

1. `css/app.css` — Full stylesheet
2. `js/state.js` — State manager
3. `js/router.js` — Hash router
4. `data/pps-relief.js` — All 10 steps with substeps and action items
5. `data/glossary.js` — Legal term definitions
6. `js/ui.js` — All view rendering functions
7. `js/onboarding.js` — Onboarding logic
8. `js/app.js` — Initialization and wiring
9. `manifest.json` + icons — PWA installability
10. `sw.js` + `js/sw-register.js` — Offline support

---

## Important Constraints

- **No build tools, no npm, no frameworks** — vanilla only
- **No external APIs** — everything runs client-side
- **Private for now** — stay on feature branch, do NOT merge to main
- **Accessible** — WCAG basics: focus states, ARIA, contrast, semantic headings
- **Legal disclaimer** must be prominently displayed
- **Extensible** — adding a new legal topic = adding a new data JS file with the same schema
- **Script loading order matters** — data files first, then state, router, ui, onboarding, app, sw-register (this order is set in index.html)
