# Portfolio Site — SESSION
_Last updated: 2026-03-20 (Session 4)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LG** — AI Design Technologist
Live repo: `Lukas-Green/Lukas-Green.github.io`
Domain: `lukasdgreen.com`
Contact: `lukasgreen3@pm.me` (Proton Mail)

---

## Last Session — 2026-03-20 (Session 4)

Full redesign based on reference landing page image. Changes made across multiple pushes:

**Branding**
- Logo changed from `LUX.` to `LG` (nav + footer)
- Title updated from "AI Systems Designer" to "AI Design Technologist" site-wide
- All em dashes removed from copy (style decision — none going forward)

**Layout / Structure**
- Hero: gradient name text (white → teal), decorative node SVG (top-right, 17% opacity), radial glow behind photo
- Stats strip added between hero and "What I Do" as standalone full-width credentials bar
- New "Specializing In" section (3 service cards) broken out from About
- About section: 2-column grid with cartoon-lukas.jpeg on left, bio text right
- Ticker removed
- Contact form replaced with direct email CTA + GitHub/LinkedIn links

**Content**
- Bio rewritten to align with LinkedIn: 22+ years design, PSU advanced studies (current), mission-driven orgs, "Intentional design. Clean architecture. Smart automation."
- LinkedIn CTA added to hero (replaces dead resume button; resume still pending)
- LUCID added as 4th project card (2x2 grid)
- RecallAI description rewritten — no fake ROI numbers, framed as clinic partnership in progress
- Stats: 22+ Years Design, 6+ Projects Built, 100% Pain-Point Driven

**CSS**
- Body copy brightened: `--gray` from `#9ca3af` → `#b8c2cc`
- Removed ticker styles
- Added stats strip styles
- Added about-grid 2-column layout + about-cartoon styles

---

## Pending — Next Session

1. **Node animation** — nodes should originate from the "." in "Lukas." and radiate outward on page load (concept: the period is the origin of the system)
2. **About text alignment** — "About Me" heading and text should align to the top of the cartoon image
3. **Favicon** — LG wordmark as favicon
4. **Resume PDF** — upload to `assets/` and wire up LinkedIn button or add separate resume button
5. **DNS** — confirm `www` CNAME is set in Namecheap → `Lukas-Green.github.io`, enforce HTTPS
6. **LinkedIn update** — update handle from `/lukas-green-designer` if desired

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
| `index.html` | Full site — single HTML file |
| `styles.css` | All styles — extracted CSS |
| `assets/img/headshot.jpg` | B&W portrait (hero) |
| `assets/img/cartoon-lukas.jpeg` | Cartoon portrait (about section) |
| `CNAME` | Contains: `lukasdgreen.com` |

---

## Projects on Site

| Project | Tag | Stack |
|---|---|---|
| CanvassKit | CRM / Outreach | Google Apps Script, Sheets, HTML/Tailwind |
| SoloBill | Invoicing / Finance | Google Apps Script, Docs, PDF Export |
| RecallAI | AI / Healthcare | Python, FastAPI, AI Integration |
| LUCID | File Intelligence / AI | Python, FastAPI, Ollama, SQLite |
