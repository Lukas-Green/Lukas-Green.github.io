# Handoff — Art Inside Out & Restorative Reentry

Everything you need to work on these two sites without me. Written 2026-07-15.

---

## 1. What's here

| File | What it is |
|---|---|
| `art-inside-out.html` | **Art Inside Out** — Kirk Charlton's program + book shop |
| `restorative-reentry.html` | **Restorative Reentry** (renamed from Better Neighbors) — Robin Davidson's nonprofit |
| `index.html`, `styles.css`, `script.js`, `privacy.html`, `transparency.html` | An **earlier, separate** Better Neighbors demo built for Robin in a prior session. Not mine. Left untouched. |
| `assets/` | Real image files. Shared. |
| `tools/inline.py` | Builds a single-file copy of a page (see §3) |
| `RESEARCH-BRIEF.md` | Cited research on Kirk, AIO, and the org. **Read before writing any impact copy.** |
| `HANDOFF.md` | This file |

**Two demos exist for Robin.** `index.html` (prior session) and `restorative-reentry.html` (mine) are competing directions. Nobody has picked one. That's a decision waiting for you.

## 2. Working on them offline

No build step, no dependencies, no internet. Open either `.html` in a browser and it works. Edit with any text editor.

- **CSS and JS are inline**, at the top and bottom of each file. One file per site, on purpose.
- **Fonts are system fonts.** Nothing loads from a CDN. This is deliberate: no external requests means no tracking, and it's part of why GDPR doesn't reach these pages (§7).
- **Images are real files** under `assets/`. Swap one in Photoshop and reload the page.

## 3. Building a single file (to email Kirk or Robin)

```bash
python3 tools/inline.py --all                  # both pages -> dist/
python3 tools/inline.py restorative-reentry.html --out ~/Desktop/for-robin.html
```

This embeds every image into one self-contained `.html` you can email or open from a USB stick. `dist/` is gitignored. **Never edit the inlined output — it's a build artifact.** Edit the source.

## 4. The design decisions (so you don't undo them by accident)

The two sites are deliberately **different objects**, because they have different jobs.

| | Art Inside Out | Restorative Reentry |
|---|---|---|
| **Job** | one artist, one method, **things to sell today** | an org raising money and delivering services |
| **Voice** | first person ("I built this inside") | third person, collective |
| **Form** | a 760px paper sheet on a dark desk | full-bleed, 1320px editorial |
| **Type** | serif throughout | grotesk, tight |
| **Palette** | red/blue/green ink + gold — **from the real AIO logo** | iris indigo + coral |
| **Motion** | the circle draws itself as you scroll | almost none |

**Why the palettes differ:** AIO's colours come from its actual logo (hand-brushed red A, blue I, green O). RR was moved off green/yellow to iris/coral so the two don't read as siblings. Same tonal structure, different hues.

**Note:** the official Better Neighbors brand is **mint green + yellow** (confirmed by the real cap mockup). RR's iris/coral is a deliberate departure for the rename. The house logo mark currently renders in iris/coral; the real logo asset is still mint/yellow and needs recolouring if you keep this direction.

**The shop breaks out of the paper on AIO.** Narrative on the sheet, store on the desk in a plain product grid. Art sells the idea; convention closes the sale. Don't make people fight art to buy a book.

## 5. Everything marked ◇ (to confirm)

Every unconfirmed item shows on the page as a dashed **◇ chip**. Search either file for `class="todo"`.

**Art Inside Out**
- [ ] **The twelve lesson titles** — I invented placeholders and then removed them. Needs Kirk's real list.
- [ ] Book prices (both editions, paperback + eBook) — all show `$—`
- [ ] Class fees for ADX Portland and Hopewell Hub — conflicting sources, show `$—`
- [ ] Amazon / B&N retail links
- [ ] KOIN interview URL (you have the image, not the link)
- [ ] Checkout links (see §6)

**Restorative Reentry**
- [ ] **A real, consented participant story** (see §8 — this one has rules)
- [ ] The real "where your gift goes" allocation, from actual books
- [ ] Merch prices — all show `$—`
- [ ] "I Wanna Be" children's books: author, titles, price. No public trace of these.
- [ ] Artwork photos for the shop's feature item
- [ ] Advisor titles and photos (11 names are in, from the live About page)
- [ ] Merch mockups still show the **old Better Neighbors** mark — need re-mocking
- [ ] Domain + contact email (`hello@restorativereentry.org` is a placeholder)
- [ ] **The exact OHOH relationship** (see §7 — this is the big one)

## 6. Going live: connecting money

Both sites are static, so **nothing processes payments here.** You paste a hosted link and it works. **Never put a secret key in these files.** Publishable keys are fine; secret keys (`sk_...`) are not, ever.

**Use redirect rails, not embedded iframes.** This is a real decision, not a preference: PCI DSS v4.0.1's SAQ A script-security criterion applies **only** to merchants who embed a processor's form via iframe. Redirect and fully-outsourced checkout escape it entirely (PCI SSC FAQ 1588). Redirect keeps you out of scope.

| What | Rail | Where the link goes |
|---|---|---|
| **Kirk's books (paperback)** | Stripe Payment Links | `art-inside-out.html` → `CHECKOUT_URLS` object |
| **Kirk's books (eBook)** | Gumroad (auto-delivers the file) | same object |
| **Donations + memberships** | Donorbox or Givebutter (handles recurring + tax receipts) | `restorative-reentry.html` → `DONATE_URL` |
| **Merch** | Shopify Buy Button or Stripe | `restorative-reentry.html` → `STORE_URLS` object |

Donations and sales use **different rails on purpose** — a tax-deductible gift needs recurring billing and receipting that a plain merchant checkout won't do.

## 7. Before any donate button ships (from the research)

**🔴 Oregon DOJ charitable registration.** Oregon has **no small-org or revenue exemption** — it's an explicit outlier (ORS 128.640 exempts only governments, religious corps, cemeteries, certain trusts). The trigger is **holding assets or doing business as a charity**, *not* the first donation. **The duty may already be live.**

> **This hinges on one unanswered question: is Restorative Reentry incorporated as an Oregon public benefit nonprofit, or is it a fiscally sponsored project of Oregon Harbor of Hope?** If it's sponsored, **OHOH carries the duty** and this re-targets entirely. Ask Robin. Nothing else on this list matters as much.
>
> https://www.doj.state.or.us/charitable-activities/starting-or-closing-a-charity/registering-a-new-charity/

**🔴 No invented numbers, ever.** ORS 128.886(1) bars false representations "in the course of any solicitation of contributions" and has **no 'published' element** — the moment a page carries a donate ask, it's in scope. ORS 646.608(1)(dd) makes a violation an unlawful trade practice reachable by the AG. The invented "where your gift goes" allocation was the single riskiest artifact on the page; it's gone. **Don't put a number back unless it comes from the books.**

The ORS 128.886(3) volunteer safe harbor is thinner than it looks: it bars only the *private* action, only for unpaid volunteers, **not** Oregon DOJ enforcement, and **not** the book/merch prices (sales aren't solicitations).

**Privacy law — you're almost certainly clear.** CCPA/CPRA doesn't apply (nonprofits categorically exempt — a status test, not size). OCPA reached nonprofits July 2025 but needs 100k+ Oregon consumers. GDPR needs a territorial trigger; the "one EU donation triggers it" claim is **false** (refuted 0-3). **Keep it that way by running no cookie tracking and no analytics.** That's the cheapest compliance you'll ever buy.

## 8. Publishing a person's story (read this first)

These rules come from sector standards (Bond 2024, Dignified Storytelling), **not US law** — they're ethics, not statute. But this population makes them matter.

1. **Never bundle consent with services.** Put this on the form, in these words: *"You don't have to share your story to receive support. Saying no won't affect your services."* Where you can, the person asking shouldn't be the person controlling access to services.
2. **Consent comes before gathering**, not after. Re-confirm it **again before publishing**.
3. **A signed release is not enough.** Run an independent harm test: even with consent, decline, anonymise, or strip details if publication risks harm. Safety is a one-way veto.
4. **Revocability is not automatic.** Standard releases are drafted irrevocable and perpetual. If you promise withdrawal, **your form must say so explicitly.** There's a live circuit split on this. **Consult a lawyer on the wording.**
5. **Don't promise deletion you can't deliver.** This repo is public with permanent history, plus forks and caches. You **cannot** fully honour "take it down." Say so honestly rather than promising erasure.
6. For someone **on parole or supervision**, borrow the NIH consent language: assure them their *legal standing, including probation or parole terms, will not be affected*, and that participation won't be disclosed to supervision staff.

The `restorative-reentry.html` "Meet our neighbors" section already states this commitment on the page. Keep it.

## 9. Known gaps — what nobody has checked

Two research passes (211 agents) produced **zero verified claims** on these. Treat them as **unknown, not low-risk**:

- **GitHub repo hygiene** — what leaks via commit history, whether Pages can serve from a private repo on your plan, history rewriting.
- **Accessibility legal exposure** — ADA Title III applicability, the nexus circuit split, realistic demand-letter risk.

What I know without research: the pages use semantic HTML, alt text on every image, visible focus states, `prefers-reduced-motion` support, and a skip link. That's a decent WCAG baseline but **has not been audited**. Run Lighthouse before launch.

## 10. Repo facts

- **This repo (`Lukas-Green.github.io`) is PUBLIC.** Pages serves from **`main`**. These drafts live on `claude/redesign-nonprofit-site-3LIKV` and **404 on lukasdgreen.com** — publicly browsable on GitHub, published nowhere.
- **`Lukas-Green/forge` is PRIVATE.** Sensitive material belongs there, not here.
- **Nothing in these files is a secret.** No keys, no tokens. Two emails: Kirk's public gmail and a placeholder.
- **Asset duplication:** the prior session's `assets/photos/` and `assets/team/` hold full-size originals (`media.jpg` is 6.8 MB). Mine are web-optimised with different names (`portland-skyline.jpg` vs their `portland-bg.jpg`, `team-02.png` vs my `robin.jpg`). **Same images, two copies.** Worth consolidating if you keep both demos.

---

## The short version

1. **Ask Robin whether the org is incorporated or fiscally sponsored.** It decides who owes Oregon DOJ registration and whether someone's already late.
2. **Get Kirk's real lesson list and real prices.** Everything else on his site is done.
3. **Pick a Robin demo** — `index.html` or `restorative-reentry.html`.
4. **Paste the checkout links.** Then it takes money.
5. **Don't publish anyone's story** until §8 is satisfied.
