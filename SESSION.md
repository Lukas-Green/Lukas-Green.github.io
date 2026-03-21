# Portfolio Site - SESSION
_Last updated: 2026-03-21 (Session 5)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LG** — AI Design Technologist
Live repo: `Lukas-Green/Lukas-Green.github.io`
Domain: `lukasdgreen.com`
Contact: `lukasgreen3@pm.me` (Proton Mail)

---

## Last Session - 2026-03-21 (Session 5)

**Logo**
- Nav + footer: replaced LG text with `assets/lukas green icon-02.png` (shows full name immediately)
- Logo enlarged 35% (nav 36px to 49px, footer 28px to 38px)

**Hero**
- Period removed from "Lukas." — origin node now sits visually in its place at text baseline
- Gradient removed from "Lukas" name — solid white
- Decorative dash prefix removed from "Hello, my name is" label

**Node Animation**
- Replaced static SVG with canvas-based animation
- 19 nodes, 33 edges, fans out rightward from origin to fill right half of hero
- Draw-in over 1.8s on page load, settles into pulsing steady state
- Hidden on mobile

**Services Section**
- Renamed: "What I Do / Specializing In" became "Services / What I Do"
- Icons: emojis replaced with custom inline SVGs (neural net, cycle arrows, browser wireframe)
- Descriptions: expanded for all three cards

**Stats**
- "6+ Projects Built" clarified to "6+ Tools Shipped"

**Resume Page (resume.html)**
- New page, full brand match (dark theme, teal, Inter)
- Two-column layout: skills/education/approach left, all 7 projects right
- Honest status labels throughout (no false shipping claims)
- FreedEase: mission-driven civic framing only
- SoloBill: single real-world test, known issues noted
- GH2: marked "Delivered to org"
- Print stylesheet for PDF export via browser
- Resume added to main site nav

**Footer**
- Stacked layout: icon centered above copyright
- Removed "All rights reserved"

**Copy**
- All em dashes removed across both files (13 instances)
- Rule: no em dashes ever. Use periods, commas, or colons depending on context.

---

## Pending - Next Session

1. **About text alignment** — "About Me" heading and text should align to top of cartoon image
2. **Favicon** — LG wordmark as favicon
3. **Resume PDF** — upload finalized PDF to assets/ and wire up download button
4. **DNS** — confirm `www` CNAME is set in Namecheap, enforce HTTPS
5. **LinkedIn update** — update handle from `/lukas-green-designer` if desired
6. **Growth orb visualization** — 3D interactive node graph of learning arc from chat data
7. **Case study documentation** — living doc tracking all project work with session data

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
