# LUX Personal Site — SESSION

_Last updated: 2026-03-10 (Session 3)_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LUX** (Lukas + UX) — AI Systems Designer
Live repo: `Lukas-Green/Lukas-Green.github.io`
Domain: `lukasdgreen.com` (A records added, www CNAME pending)

---

## Last Session — 2026-03-10 (Session 3)

- DNS fix identified: `www` subdomain needs CNAME record → `Lukas-Green.github.io` in Namecheap (A records were apex only)
- Joe Lukens / MBS Portland meeting prep completed — 3 files created in `projects-hq/`:
  - `joe-lukens-discovery-guide.md` — interview script, 8 topic areas, contract opportunity matrix
  - `joe-lukens-deck-copy.md` — 6-slide deck copy (bring to meeting, not a follow-up)
  - `joe-lukens-canva-build-guide.md` — full Canva visual/layout specs, slide by slide
- Deck structure: Cover → Challenge → What I Build (CanvassKit/SoloBill/RecallAI) → MBS Opportunity (4 areas from research) → Process → CTA
- Slide 4 built from MBS website research — no placeholders, ready to present as-is

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

1. **DNS fix** → Namecheap → add CNAME record: Host=`www`, Value=`Lukas-Green.github.io` → then GitHub Pages "Check again" → Enforce HTTPS
2. **Formspree** → formspree.io → create free account → new form → copy the ID → replace `REPLACE_WITH_YOUR_FORMSPREE_ID` in `index.html` line ~588
3. **ImprovMX** → improvmx.com → connect `lukasdgreen.com` → forward `lukas@` to your Gmail
4. **Build Joe Lukens deck in Canva** → use `joe-lukens-deck-copy.md` + `joe-lukens-canva-build-guide.md`
5. **Resume PDF** → upload to `assets/` when ready

---

## Next Steps — Build Queue

1. DNS fix + Enforce HTTPS (see pending above)
2. Build Joe Lukens deck in Canva — all files ready
3. Resume PDF — upload to `assets/` and wire up "My resume" button
4. Logo — waiting on Lukas's direction, currently `LUX.` styled text
5. General pitch deck — dental/local service businesses (copy not yet written)
6. Business card — digital + print-ready
7. LinkedIn handle update — from `/lukas-green-designer`

---

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Full site — single file, all CSS/JS inline |
| `assets/img/headshot.jpg` | B&W portrait headshot |
| `CNAME` | Contains: `lukasdgreen.com` |
| `README.md` | DNS setup instructions |
| `projects-hq/joe-lukens-discovery-guide.md` | MBS interview script + contract opportunity matrix |
| `projects-hq/joe-lukens-deck-copy.md` | 6-slide deck copy for Joe Lukens meeting |
| `projects-hq/joe-lukens-canva-build-guide.md` | Canva visual/layout specs for the deck |

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
