# LUX Personal Site — SESSION

_Last updated: 2026-03-10_

---

## What This Is

Personal portfolio + brand site for Lukas Green.
Brand: **LUX** (Lukas + UX) — AI Systems Designer
Live repo: `Lukas-Green/Lukas-Green.github.io`
Domain: `lukasdgreen.com` (DNS not yet pointed)

---

## Last Session — 2026-03-10

- Built full single-page site (`index.html`) matching Jensen Omega Behance dark design
- Pushed to GitHub Pages repo
- Hardened mobile responsiveness (3 breakpoints: 1100 / 768 / 390px)
- Headshot copied to `assets/img/headshot.jpg`, `object-position: center 18%`
- Conversations viewer updated with 2-tab UI (separate from this repo)

---

## Pending — Do These Before Next Session

1. **GitHub Pages** → `github.com/Lukas-Green/Lukas-Green.github.io` → Settings → Pages → source: `main` / root `/`
2. **DNS** → point `lukasdgreen.com` to GitHub Pages (add these A records at your registrar):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. **Formspree** → formspree.io → create free account → new form → copy the ID → replace `REPLACE_WITH_YOUR_FORMSPREE_ID` in `index.html` line ~588
4. **ImprovMX** → improvmx.com → connect `lukasdgreen.com` → forward `lukas@` to your Gmail
5. **Check headshot crop** in browser — if face is still off, report and adjust `object-position` in `index.html` line 203

---

## Next Steps — Build Queue

1. Fix headshot crop if needed (adjust `object-position` %)
2. Logo — waiting on Lukas's ideas, currently styled text placeholder `LUX.`
3. Resume PDF — upload to `assets/` and wire up the "My resume" button
4. **Business card** — digital (shareable link/image) + print-ready (Figma)
5. **Joe Lukens pitch deck** — AI consulting intro for Millennium Building Services
6. LinkedIn URL update — change handle from `/lukas-green-designer` to something current

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
| Accent (coral) | `#E05A3A` |
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
