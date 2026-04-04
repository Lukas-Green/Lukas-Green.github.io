# CLAUDE.md — Session Context for Lukas Green's Portfolio

## Identity

- **Brand:** LG — AI Design Technologist
- **Location:** Portland, OR
- **Domain:** lukasdgreen.com
- **Repo:** Lukas-Green/Lukas-Green.github.io
- **Contact:** lukasgreen3@pm.me (Proton Mail)
- **Scheduling:** Calendly (linked from CTAs)

---

## Architecture Rules

- **Vanilla only** — HTML, CSS, JavaScript. No React, no Vue, no frameworks.
- **No build tools** — No npm, no webpack, no preprocessors. Direct file editing.
- **GitHub Pages** — Static hosting. No backend, no database, no server-side code.
- **Inline JS** — All JavaScript goes in a `<script>` block at the bottom of `<body>`.
- **Single CSS approach** — Shared styles in `styles.css`, page-specific styles in separate CSS files (e.g., `hq-styles.css`).
- **Google Fonts** — Inter (weights 300-900) loaded via CDN.
- **Forms** — Formspree integration (`formspree.io/f/mkopjjab`).
- **Data persistence** — localStorage for client-side state. No backend APIs.

---

## Design Tokens

| Token | Variable | Value |
|---|---|---|
| Background | `--bg` | `#111116` |
| Background alt | `--bg2` | `#1a1a22` |
| Accent (teal) | `--accent` | `#64FFDA` |
| Accent dark | `--accent-dk` | `#4ecdc4` |
| Text primary | `--white` | `#ffffff` |
| Text secondary | `--gray` | `#b8c2cc` |
| Text dim | `--gray-dim` | `#6b7280` |
| Border | `--border` | `#2a2a35` |
| Font | — | Inter (Google Fonts) |

### Category Colors

| Category | Color | Hex |
|---|---|---|
| Automation | Teal | `#64FFDA` |
| AI (RecallAI) | Coral | `#FF8C6B` |
| AI (LUCID) | Purple | `#A78BFA` |
| UX | Blue | `#64B5FF` |
| Ventures | Gold | `#FFD166` |

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Main portfolio site (hero, services, projects, contact) |
| `resume.html` | Resume page, print-ready |
| `saas-ventures.html` | SaaS venture showcase hub |
| `digital-media.html` | Digital media research agent page |
| `canvasskit.html` | CanvassKit project detail/case study |
| `solobill.html` | SoloBill project detail/case study |
| `apple-maps.html` | Apple Maps UX case study (hidden pending images) |
| `cleandrive.html` | CleanDrive UX case study (hidden pending images) |
| `projects-hq.html` | Project HQ dashboard (PWA) |
| `styles.css` | All shared site styles |
| `hq-styles.css` | Project HQ dashboard styles |
| `projects.json` | Single source of truth for all projects, status, tasks |
| `manifest.json` | PWA manifest |
| `service-worker.js` | PWA service worker |
| `demo/` | 6 interactive demo apps (canvasskit, solobill, healthcare, construction, smb, llm-onboarding) |
| `ventures/` | 5 SaaS venture detail pages |
| `research/` | Competitive intelligence briefs (social media, content/DAM, ad tech, creator economy) |
| `SESSION.md` | Session state and pending items |
| `BUILD-LOG.md` | Session-by-session build history |

---

## Project Registry

See `projects.json` for the full, machine-readable project registry. Quick reference:

| Project | Status | Priority |
|---|---|---|
| CanvassKit | Functional | Medium |
| SoloBill | Refinement | High |
| RecallAI | Prototype | Medium |
| LUCID | Active | High |
| FreedEase | Prototype | Low |
| GH2 Contact Tracker | Shipped | Low |
| Media Engine | Functional | Medium |
| Audio/Video Transcription | Functional | Medium |
| BRIGS | Architecture | Medium |
| ClaimFlow AI | Prototype | Medium |
| ConstructFlow | Prototype | Medium |
| OnboardFlow AI | Prototype | Medium |
| Portfolio Site | Active | High |
| Instruction Site | Architecture | Low |

---

## Coding Conventions

- **No em dashes** — use en dashes for ranges, restructure sentences, use parentheses for attributions, colons for captions
- **Class naming** — BEM-ish: `.component-name__element` (e.g., `.hq-card__progress`, `.cs-hero-inner`)
- **Category colors** — applied via `data-cat` attributes on elements, CSS selectors like `[data-cat="automation"]::before`
- **Project cards** — use `.project-card` with `.project-card-link` wrapping, `::after` overlay for full-card clickability
- **Case studies** — `.cs-hero`, `.cs-section-wrap`, `.cs-content`, `.cs-breakout` structure
- **Responsive breakpoints** — 768px (tablet), 390px (mobile)
- **Canvas animation** — hero node network in index.html, hidden below 768px

---

## Session Handoff Protocol

At the end of every session, Claude should:

1. **Update `projects.json`** — for any project worked on:
   - Update `lastTouched` to today's date
   - Check off completed tasks (`"done": true`)
   - Add new tasks discovered during the session
   - Adjust `completion` percentage
   - Update `status` if it changed
   - Update `notes` with session context
2. **Update `BUILD-LOG.md`** — add a new session entry describing what was done
3. **Update `SESSION.md`** — refresh the "Pending" section and "Last Session" block

---

## Future Optimizations

- **MCP servers** — Consider setting up MCP servers for direct GitHub integration, project data queries, and automated status updates
- **GitHub Issues sync** — Could map projects.json tasks to GitHub Issues for cross-tool visibility
- **Multi-device sync** — Would require a lightweight backend (e.g., GitHub API writes) to sync localStorage across devices
