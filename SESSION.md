# Portfolio Site - SESSION
_Last updated: 2026-03-27 (Session 8)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LUXIK** (formerly LG) — AI Design Technology Studio
Live repo: `Lukas-Green/Lukas-Green.github.io`
Current domain: `lukasdgreen.com`
New domain: `luxik.co` (purchased 2026-04-03)
Contact: `lukas@lukasdgreen.com` (migrating to `lukas@luxik.co` via Proton Mail)
Entity: LUXIK LLC — Oregon, registered 2026-04-03

---

## Last Session - 2026-04-03 (Session 9)

**Brand evolution + LUXIK LLC formation**

- Built `luxia-preview.html` — full redesign concept under LUXIA brand (lime #C4FF53 / violet #8B5CF6, Space Grotesk + Space Mono)
- Extensive brand name research: LUXEL, LUXEN, LUXIK — verified LUXIK is unclaimed (no trademark, no company, no domain conflicts)
- Built `luxik-preview.html` — LUXIK-branded redesign with interactive node animation (mouse-reactive), asymmetric hero layout, consultancy framing ("I find the friction. I build the fix."), cartoon avatar in about section
- Registered LUXIK LLC in Oregon via state-filings.com ($506 total)
- Purchased luxik.co domain via Wix
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

### LUXIK Brand Priority
1. **Cancel duplicate registered agent** — oregonregisteredagent.com OR state-filings; only need one
2. **Complete CMRA form** — needs document with physical address (update car insurance or bank to temp address)
3. **Set up Proton Mail** on luxik.co domain (lukas@luxik.co)
4. **Open business bank account** — need EIN first (being handled by state-filings)
5. **Iterate on luxik-preview.html** — compare all three versions (live site, LUXIA, LUXIK), refine chosen direction
6. **Content strategy** — case studies as results stories, build logs, AI tooling perspective pieces for traffic

### Existing Site Backlog
7. **UX case study image replacement** — Apple Maps and CleanDrive hidden until done; uncomment cards when ready
8. **SoloBill card origin line** — still reads "contractor overpaying for 10% of a platform's features," should reflect the plumber friend story
9. **MediaEngine** — consider adding to portfolio when further along; mention in CanvassKit origin story for now
10. **Remaining project detail pages** — GH2, FreedEase, Transcription (content ready), RecallAI, LUCID, BRIGS
11. **Case study structure upgrade** — align to UXFolio 7-section framework (add Impact + Learnings)
12. **Favicon** — LUXIK wordmark (replaces LG)
13. **Resume PDF** — upload to `assets/` and wire download button
14. **DNS** — luxik.co setup, confirm routing

---

## Design Tokens

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

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Full site, single HTML file |
| `resume.html` | Resume page, on-brand, print-ready |
| `styles.css` | All shared styles |
| `assets/img/headshot.jpg` | B&W portrait (hero) |
| `assets/img/cartoon-lukas.jpeg` | Cartoon portrait (about section) |
| `assets/lukas green icon-02.png` | LG wordmark logo (nav + footer) |
| `CNAME` | Contains: `lukasdgreen.com` |

---

## Projects on Site

| Project | Tag | Stack | Status |
|---|---|---|---|
| CanvassKit | CRM / Outreach | Google Apps Script, Sheets, HTML/Tailwind | Functional build |
| SoloBill | Invoicing / Finance | Google Apps Script, Docs, PDF Export | Tested, in refinement |
| RecallAI | AI / Healthcare | Python, FastAPI, AI Integration | Unfinished, unvetted |
| LUCID | File Intelligence / AI | Python, FastAPI, Ollama, SQLite | In active development |
| FreedEase | Civic / UX | PWA, Google Apps Script, Vanilla JS | Design prototype |
| GH2 Contact Tracker | Nonprofit Tooling | Google Apps Script, Sheets | Delivered to org |
| Audio/Video Transcription | Workflow Automation | Google Apps Script, PWA, Vanilla JS | Functional builds |
| BRIGS | LLM Systems / Context | Python, Ollama, Markdown | Architecture phase |
