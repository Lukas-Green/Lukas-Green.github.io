# Portfolio Site - SESSION
_Last updated: 2026-04-08 (Session 12)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LUXIGA** (formerly LUXIK, LG) — AI Design Technology Studio
Live repos:
- `Lukas-Green/Lukas-Green.github.io` — personal portfolio at `lukasdgreen.com`
- `Lukas-Green/luxiga.co` — LUXIGA business site at `luxiga.co` (separate deploy repo, shipped 2026-04-08)
Domains: `luxiga.co` (business), `lukasdgreen.com` (personal), `luxigallc.com`, `luxik.co` (legacy)
Contact: `lukas@lukasdgreen.com`
Entity: LUXIGA LLC — Oregon (amended from LUXIK LLC, registered 2026-04-03)

---

## Last Session - 2026-04-08 (Session 12)

**Audit fixes + favicon for personal site**

- Added custom LUXIGA product favicon and apple-touch-icon (SVG)
- Fixed audit issues: LUCID renamed to CRON in stats/copy, removed dead files, updated `.gitignore`, fixed stats accuracy, accessibility improvements
- **Note:** The LUXIGA business site (`luxiga.co`) was built and shipped in its own deploy repo. See `Lukas-Green/luxiga.co` repo SESSION.md for that build history.

### Previous Session - 2026-04-06 (Session 11)

**Stats redesign + LUXIGA preview updates**

- Redesigned stats strip with corrected metrics
- Updated LUXIGA preview HTML with latest brand direction

### Previous Session - 2026-04-05 (Session 10)

**LUXIK → LUXIGA rename**

- Created `luxiga-preview.html` from `luxik-preview.html` with all brand references updated to LUXIGA
- Updated SESSION.md, BUILD-LOG.md, memory with new name
- Confirmed domains owned: `luxiga.co`, `luxigallc.com`, `luxik.co`
- No site buildout this session — name update only

### Previous Session - 2026-04-03 (Session 9)

**Brand evolution + LLC formation**

- Built `luxia-preview.html` — full redesign concept under LUXIA brand (lime #C4FF53 / violet #8B5CF6, Space Grotesk + Space Mono)
- Extensive brand name research: LUXEL, LUXEN, LUXIK — verified LUXIK is unclaimed (no trademark, no company, no domain conflicts)
- Built `luxik-preview.html` — LUXIK-branded redesign with interactive node animation (mouse-reactive), asymmetric hero layout, consultancy framing ("I find the friction. I build the fix."), cartoon avatar in about section
- Registered LUXIK LLC in Oregon via state-filings.com ($506 total)
- Purchased luxik.co domain via Wix
- **Name changed to LUXIGA** — built `luxiga-preview.html` (renamed from luxik-preview), updated all brand references
- Registered agent + private business address set up via oregonregisteredagent.com ($84/yr) AND state-filings ($199/yr) — NEED TO CANCEL ONE

### Previous Session - 2026-03-27 (Session 8)

**Layout architecture + copy + polish**

- Case study layout rebuilt: `.cs-hero` full-width, `.cs-hero-inner` centered. Body sections restructured into `cs-section-wrap` blocks with alternating backgrounds. `.cs-content` now `margin: 0 auto`. `.cs-breakout` for pull quotes.
- CanvassKit copy rewritten with real origin: contracting role at nonprofit, recorded coordinator describing 3-step reporting chain, transcript drove the product design
- SoloBill copy rewritten with real origin: journeyman plumber friend new to private contracting, dual need — his billing records + real estate paper trail for inspection inquiries
- Em dashes removed from all 6 HTML files — year ranges to en dashes, sentences restructured, quote attributions use parentheses, captions use colons
- Widow fix in career timeline (`and&nbsp;UX.`)
- Project cards fully clickable via `::after` overlay on `.project-card-link`
- Card outlines improved: top bar 3px → 4px, full card border color-coded at 20% opacity per category, hover border uses category color
- RecallAI (`#FF8C6B` coral) and LUCID (`#A78BFA` purple) given distinct colors, split from shared `ai` category
- UX case study cards (Apple Maps, CleanDrive) hidden in `index.html` pending image replacement

---

## Pending - Next Session

### LUXIGA Brand Priority (some items completed)
1. ~~**Cancel duplicate registered agent**~~ — still needs resolution
2. **Complete CMRA form** — needs document with physical address (update car insurance or bank to temp address)
3. ~~**Amend LLC name**~~ — LUXIGA LLC confirmed in Oregon
4. **Set up Proton Mail** on luxiga.co domain (lukas@luxiga.co)
5. **Open business bank account** — need EIN first (being handled by state-filings)
6. ~~**Iterate on luxiga-preview.html**~~ — DONE: luxiga.co shipped as its own site
7. **Content strategy** — case studies as results stories, build logs, AI tooling perspective pieces for traffic

### Personal Site (lukasdgreen.com) Backlog
1. **Decide future of this repo** — lukasdgreen.com could redirect to luxiga.co, or remain as personal portfolio distinct from business site
2. **UX case study image replacement** — Apple Maps and CleanDrive still hidden pending images
3. **Remaining project detail pages** — GH2, FreedEase, Transcription (content ready), RecallAI, BRIGS
4. **Case study structure upgrade** — align to UXFolio 7-section framework (add Impact + Learnings)
5. **Resume PDF** — upload to `assets/` and wire download button
6. **Clean up preview files** — `luxia-preview.html`, `luxik-preview.html`, `luxiga-preview.html` are design artifacts; archive or remove

---

## Design Tokens (personal site — lukasdgreen.com)

| Token | Value |
|---|---|
| Background | `#111116` |
| Background alt | `#1a1a22` |
| Accent (teal) | `#64FFDA` |
| Accent dark | `#4ecdc4` |
| Text primary | `#ffffff` |
| Text secondary | `#b8c2cc` |
| Text dim | `#6b7280` |
| Border | `#2a2a35` |
| Font | Inter (Google Fonts) |

> **Note:** The LUXIGA business site uses different tokens. See `luxiga.co` repo for those.

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Full personal portfolio, single HTML file |
| `resume.html` | Resume page, on-brand, print-ready |
| `styles.css` | All shared styles |
| `apple-maps.html` | Apple Maps UX case study |
| `canvasskit.html` | CanvassKit case study detail page |
| `solobill.html` | SoloBill case study detail page |
| `cleandrive.html` | CleanDrive UX case study |
| `digital-media.html` | Digital media research page |
| `saas-ventures.html` | SaaS ventures showcase |
| `luxiga-preview.html` | LUXIGA brand preview (design artifact) |
| `assets/img/cartoon-lukas.jpeg` | Cartoon portrait (about section) |
| `favicon.svg` | LUXIGA product favicon |
| `apple-touch-icon.svg` | Apple touch icon |
| `CNAME` | Contains: `lukasdgreen.com` |

---

## Projects on Site

| Project | Tag | Stack | Status |
|---|---|---|---|
| CanvassKit | CRM / Outreach | Google Apps Script, Sheets, HTML/Tailwind | Functional build |
| SoloBill | Invoicing / Finance | Google Apps Script, Docs, PDF Export | Tested, in refinement |
| RecallAI | AI / Healthcare | Python, FastAPI, AI Integration | Unfinished, unvetted |
| FreedEase | Civic / UX | PWA, Google Apps Script, Vanilla JS | Design prototype |
| GH2 Contact Tracker | Nonprofit Tooling | Google Apps Script, Sheets | Delivered to org |
| Audio/Video Transcription | Workflow Automation | Google Apps Script, PWA, Vanilla JS | Functional builds |
| BRIGS | LLM Systems / Context | Python, Ollama, Markdown | Architecture phase |
