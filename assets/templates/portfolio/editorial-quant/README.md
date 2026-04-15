# Editorial Quant — Design System & Portfolio Template

A light, paper-canvas design system for senior practitioners. Serif display,
mono metrics, one confident accent, zero gradients. Built as a house style
where the work is the proof and the design gets out of the way.

## Category

Portfolio

## Themes

- Scholar
- High-level science thinkers
- Expressive but reserved
- Strong presence, not overbearing
- Balanced in mood and vibe

## What's in here

| File                  | Role                                                    |
|-----------------------|---------------------------------------------------------|
| `system.css`          | Shared tokens + components (link this from any page)    |
| `index.html`          | Landing / gift wrapper (warm paper)                     |
| `design-system.html`  | Full design-system doc — principles, tokens, specimens, live components, motion, voice, copy‑paste implementation |
| `upskilled.html`      | Consulting/services page example (warm paper)           |
| `nickmccarty.html`    | Personal editorial page example (cool paper)            |

## Design language

| Axis      | Value                                                      |
|-----------|------------------------------------------------------------|
| Canvas    | Paper — `#F2ECE0` warm · `#FAFAF6` cool (one‑var swap)     |
| Ink       | `#12110F` body · `#5A564E` dim · `#8A857A` faint           |
| Accent    | `#0E4F4C` ink‑teal (one accent, used sparingly)            |
| Display   | Fraunces (variable, opsz + SOFT)                           |
| Body      | Inter                                                      |
| Mono      | JetBrains Mono (tabular figures on)                        |
| Scale     | 8‑pt (4 → 128px)                                           |
| Motion    | 200ms ease‑out, 1–2px translate, underline draw            |
| A11y      | WCAG AA, `prefers-reduced-motion` honored                  |

## Stack

Plain HTML + CSS + vanilla JS. No build step. Google Fonts only external dep.

## Example implementation

Originally built for Nick McCarty / Upskilled Consulting (April 2026).
Preview copy lives at `/nick/` in this repo.

## Reuse

Copy the five files into any project, link `system.css`, and you have the
system. Swap `--paper` on `body` to flip the temperature. Replace content
with your own.
