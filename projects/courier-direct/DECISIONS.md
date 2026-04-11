# Courier Direct — Redesign Decisions

Single-page redesign of courier-direct.com, a 24/7 courier in Tualatin, OR. Primary goal: get a quote or call now.

## Fetched vs assumed

`WebFetch` returned **403** on all four target URLs — likely Cloudflare. Content came from (1) one `WebSearch` pass and (2) full-page screenshots supplied by the owner.

**Real content (from screenshots):**
- Founders Sue & Barry Miller, opened 2006
- Phone, toll-free, fax, email, both addresses, 24/7/365 hours
- Exact names and descriptions for all four delivery tiers
- Trust signals: TSA Certified, Known Shipper, Bonded & Insured, Bio Diesel fleet, Photo ID drivers
- Five real testimonials (three used on page)
- Served cities: Portland, Vancouver, Salem, Albany, Eugene, Seattle, Kelso, Longview

**Assumed / absent:**
- Delivery-count or fleet-size numbers (omitted rather than invented)
- Logo vector — used a CSS text wordmark

## Brand color

**Replaced.** Original is sky-blue gradient + gold swoosh + red, last updated 2016 per copyright. Swapped to deep navy `#0F2D57` (brief fallback) and retained gold `#F5B800` as a secondary accent so local recognition survives. Navy on white ≈13:1 (AAA).

## UX deviations

- Removed Rapidship / Driver / Track Order portal links — third-party CXT Software, out of scope.
- Replaced serif wordmark + van-photo hero with a text-first hero focused on the single conversion goal.
- Contact form is client-side only with inline success (scope lock: no backend).
- Coverage is text + city chips, no map embed (scope lock on external deps).
- Testimonials live inside the Contact section, not a new section (9-section IA is locked).

## Content gaps

No delivery-count or fleet-size numbers. Trust Bar uses qualitative signals instead. Nonprofit partnerships (Chelsea Hicks Foundation, food bank, National Psoriasis Foundation) were omitted for scope.

## Deploy

Lives in `projects/courier-direct/` inside `lukas-green.github.io`. Commit and push — GitHub Pages serves it at `lukasdgreen.com/projects/courier-direct/`. No build step.

## Deferred ideas

- Real form submission via Formspree or similar
- "Community" section for the nonprofit partnerships
- Fleet photography or driver bios
- Track-Order integration once the Rapidship portal is evaluated
