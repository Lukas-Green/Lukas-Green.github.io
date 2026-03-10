# LUX Personal Site — SESSION

_Last updated: 2026-03-10 (Session 2)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LUX** (Lukas + UX) — AI Systems Designer
Live repo: `Lukas-Green/Lukas-Green.github.io`
Domain: `lukasdgreen.com` (DNS not yet pointed)

---

## Last Session — 2026-03-10 (Session 2)

- DNS: 4 A records added to Namecheap, GitHub Pages custom domain set to `lukasdgreen.com` (propagation pending)
- Accent color changed: coral `#E05A3A` → teal `#64FFDA` (matches Brittany Chiang site inspo)
- Primary button text updated to `#0d1117` (dark, readable on teal)
- Hero "Lukas" name highlighted: teal + bold
- Projects renamed: CanvassKit / SoloBill / RecallAI — reflected in index.html and all projects-hq docs
- Pitch deck planned (Canva, 6 slides, targeting local service/dental businesses) — copy not yet written

## Last Session — 2026-03-10 (Session 1)

- Built full single-page site (`index.html`) matching Jensen Omega Behance dark design
- Pushed to GitHub Pages repo
- Hardened mobile responsiveness (3 breakpoints: 1100 / 768 / 390px)
- Headshot copied to `assets/img/headshot.jpg`, `object-position: center 18%`
- Conversations viewer updated with 2-tab UI (separate from this repo)

---

## Pending — Do These Before Next Session

1. **DNS check** → wait for propagation, then click "Check again" in GitHub Pages settings → enable Enforce HTTPS
2. **Formspree** → formspree.io → create free account → new form → copy the ID → replace `REPLACE_WITH_YOUR_FORMSPREE_ID` in `index.html` line ~588
3. **ImprovMX** → improvmx.com → connect `lukasdgreen.com` → forward `lukas@` to your Gmail
4. **Check headshot crop** in browser — if face is still off, report and adjust `object-position` in `index.html` line 203

---

## Next Steps — Build Queue

1. DNS propagation confirm + Enforce HTTPS
2. Fix headshot crop if needed (adjust `object-position` %)
3. Logo — waiting on Lukas's ideas, currently styled text placeholder `LUX.`
4. Resume PDF — upload to `assets/` and wire up the "My resume" button
5. **Pitch deck** — Canva, 6 slides, targeting local service/dental businesses. Copy not written yet. Format: dark `#111116`, teal `#64FFDA`, Inter font
6. **Business card** — digital (shareable link/image) + print-ready
7. **Joe Lukens pitch deck** — AI consulting intro for Millennium Building Services
8. LinkedIn URL update — change handle from `/lukas-green-designer` to something current

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Full site — single file, all CSS/JS inline |
| `assets/img/headshot.jpg` | B&W portrait headshot |
| `CNAME` | Contains: `lukasdgreen.com` |
| `README.md` | DNS setup instructions |

---

## Design Tokens

| Token | Value |
|---|---|
| Background | `#111116` |
| Background alt | `#1a1a22` |
| Accent (teal) | `#64FFDA` |
| Text primary | `#ffffff` |
| Text secondary | `#9ca3af` |
| Border | `#2a2a35` |
| Font | Inter (Google Fonts) |

---

## Brand Context

- Story: GD background → systems thinker → AI builder. Incarceration arc informs values only (not front-and-center on site).
- Projects shown: CanvassKit (formerly GH2), SoloBill (formerly Invoice System), RecallAI (formerly DentalFlow AI)
- Email: `lukas@lukasdgreen.com`
- GitHub: `Lukas-Green`
- LinkedIn: `linkedin.com/in/lukas-green-designer` (to be updated)
