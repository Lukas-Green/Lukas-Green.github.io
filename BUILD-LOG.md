# Portfolio Site — Build Log

---

## Session 12 — 2026-04-08

**Type:** Audit fixes + favicon

**Changes:**
- Added custom LUXIGA product favicon (`favicon.svg`) and apple-touch-icon (`apple-touch-icon.svg`)
- Fixed audit issues: LUCID references renamed to CRON, removed dead files, updated `.gitignore`
- Fixed inaccurate stats, accessibility improvements

**Files changed:** `favicon.svg` (new), `apple-touch-icon.svg` (new), `index.html`, `.gitignore`, `SESSION.md`, `BUILD-LOG.md`

**Note:** The LUXIGA business site (`luxiga.co`) was built and shipped as a separate deploy repo (`Lukas-Green/luxiga.co`) during this period. See that repo for its build history.

---

## Session 11 — 2026-04-06

**Type:** Stats + brand polish

**Changes:**
- Redesigned stats strip with corrected metrics
- Updated LUXIGA preview with latest brand direction

**Files changed:** `index.html`, `luxiga-preview.html`

---

## Session 10 — 2026-04-05

**Type:** Brand rename

**Changes:**
- LLC name changed from LUXIK to LUXIGA
- Created `luxiga-preview.html` — updated all brand references (title, meta, nav, watermark, footer, JS comments) from LUXIK to LUXIGA
- Updated `SESSION.md` — brand header, pending tasks, domain/email references all reflect LUXIGA
- Added LLC amendment and new domain acquisition to pending tasks

**Files changed:** `luxiga-preview.html` (new), `SESSION.md`, `BUILD-LOG.md`

---

## Session 8 — 2026-03-27

**Type:** Layout architecture + copy + polish

**Built / Changed:**
- Case study layout rebuilt: `.cs-hero` full-width via `.cs-hero-inner` wrapper. Body sections replaced single `cs-body` wrapper with individual `cs-section-wrap` blocks (alternating `--bg` / `--bg2` backgrounds). `.cs-content` centered with `margin: 0 auto`. `.cs-breakout` for pull-quote breakouts. Hero title bumped to 68px, more vertical padding.
- CanvassKit copy rewritten: nonprofit contracting role origin, coordinator's 3-step reporting chain (text → phone note → file), transcript-to-product pipeline
- SoloBill copy rewritten: journeyman plumber friend, dual need (his invoicing + real estate paper trail for inspection inquiries). Meta strip "Users" → "Built for."
- Em dashes removed across all 6 HTML files. Strategy: en dashes for year ranges, periods/commas for sentences, colons for captions, parentheses for quote attributions.
- Widow fix: `and&nbsp;UX.` in career timeline
- Clickable project cards: `.project-card-link::after { inset: 0 }` overlays full card
- Card outline contrast: top bar 3px → 4px, `--card-border` at 20% opacity on full card border per category, hover border uses `var(--card-accent)`
- RecallAI and LUCID given distinct colors and `data-cat` values: `ai-voice` (#FF8C6B coral) and `ai-file` (#A78BFA purple). Removed from shared `ai` category.
- UX case study cards commented out in `index.html` pending image replacement

**Files changed:** `index.html`, `styles.css`, `canvasskit.html`, `solobill.html`, `cleandrive.html`, `apple-maps.html`, `SESSION.md`, `BUILD-LOG.md`

---

## Session 7 — 2026-03-26

**Type:** Feature build + research

**Built:**
- `demo/canvasskit-demo.html` — self-contained localStorage demo, copied + cleaned from source at `projects-hq/canvaskit/canvaskit_demo.html`
- `demo/solobill-demo.html` — standalone demo with live line-item calculations, GAS calls stubbed with demo messages, mock client/unit data seeded
- `canvasskit.html` — detail page, browser-chrome iframe embed, 5-section story (Pain, Constraint, What I Built, How It Works, Status)
- `solobill.html` — same structure
- `index.html` — CanvassKit and SoloBill cards wired to detail pages via `project-card-link`

**Standard established:** project detail pages use browser-chrome iframe embed + narrative sections + meta strip. Template for RecallAI, LUCID, BRIGS, GH2, FreedEase.

**Research:**
- UXFolio article: 7-section case study framework — Project, Problems, Role/Team, Methods, Challenges/Solutions, Impact, Learnings. Process and decision-making over visual polish. All visuals require written context.
- Sawad Framer portfolio: scroll-triggered entrance animations, staggered card reveals, stat counters, all translatable to vanilla JS via `IntersectionObserver`.

**Pending from this session:**
- Full-card click target on project cards (whole card should be the link, not just text)
- CanvassKit + SoloBill copy to be rewritten by user (current copy is placeholder)
- Case study layout: content column too narrow/left-aligned, blank right side on wide screens
- Motion layer: `IntersectionObserver` scroll animations across sections and cards

**Files changed:** `index.html`, `canvasskit.html` (new), `solobill.html` (new), `demo/canvasskit-demo.html` (new), `demo/solobill-demo.html` (new)

---

## Session 6 — 2026-03-24

**Type:** Planning / Research (no code changes)

**Decisions:**
- Wix UX bootcamp case studies: skip. Bootcamp framing undermines AI Design Technologist positioning.
- Project detail pages: build them. Each project card links to `/projects/[name].html`. 6-section structure: pain, constraint, what was built, how it works, status, screenshot.

**Content extracted from JSON chat exports:**
- GH2 Contact Tracker: full story in conversations-000.json
- SoloBill: full story in conversations-001.json
- FreedEase: full story in conversations3.json (Claude export)
- Audio/Video Transcription: full story in conversations-000.json
- CanvassKit, LUCID, RecallAI: not in exports, need manual write or newer Claude export

**Files changed:** SESSION.md, BUILD-LOG.md (new)

---

## Session 5 — 2026-03-21

**Type:** Feature build

**Changes:**
- Logo: replaced text with `assets/lukas green icon-02.png` in nav + footer, enlarged 35%
- Hero: removed period, removed name gradient, removed decorative dash
- Node animation: canvas-based, 19 nodes, 33 edges, 1.8s draw-in, mobile hidden
- Services: renamed section, custom SVG icons, expanded descriptions
- Stats: "6+ Tools Shipped"
- Resume page: new `resume.html`, two-column, honest status labels, print stylesheet, added to nav
- Footer: stacked layout, removed "All rights reserved"
- Copy: all em dashes removed (13 instances across both files)

**Files changed:** `index.html`, `resume.html`
