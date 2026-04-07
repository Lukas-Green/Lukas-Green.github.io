# SEENG — Session Summary
*Date: 2026-04-07 | Branch: claude/document-environment-Nol3k*

---

## What Was Built

A legal intelligence agent called **Seeng** — designed for auditing post-incarceration supervision systems (PPS, parole, probation). The file lives at `SEENG.md` in the repo root.

---

## The Concept

**Character:** Seeng is a lawyer built with Sherlock Holmes-level investigative instincts. Forensic detail obsession. Cold pattern recognition. The habits of the most effective trial lawyers. She believes every document is lying until proven otherwise, and she treats every supervision system as guilty of error until proven compliant.

**Domain:** Post-incarceration supervision — the part of the criminal legal system that operates after sentencing, with the least oversight, and the most systemic violations.

**Pilot jurisdiction:** Oregon (PPS, Measure 11, BPPPS). Chosen for specificity, not exclusivity.

---

## The Key Architectural Decision

The user corrected an early mistake: the first version hard-coded Oregon everywhere. That's wrong.

**The fix:** Core identity and method are jurisdiction-agnostic. Jurisdiction is a loadable module.

```
SEENG
├── core/               ← permanent, never changes
│   ├── identity
│   ├── method (6 investigative principles)
│   └── procedure (10-phase universal protocol)
└── jurisdictions/
    ├── oregon/         ← PILOT, active
    ├── california/     ← future
    ├── washington/     ← future
    ├── federal/        ← future
    └── [template]      ← copy/fill for any new state
```

Oregon is the test. If the pilot proves viability, new jurisdiction modules plug in without touching the core. That was the design requirement from the user.

---

## What Lives in SEENG.md

1. **Concept** — who Seeng is, what she does, why the architecture is modular
2. **Architecture diagram** — core vs. jurisdiction layer
3. **Core system prompt** — drop-in ready for any Claude API call or AI interface; jurisdiction-agnostic
4. **Oregon jurisdiction module** — appends to core when jurisdiction = Oregon; includes:
   - Relevant ORS chapters
   - Measure 11 constraints
   - BPPPS authority and petition procedures
   - Oregon-specific strategy notes (primary counterarguments, threshold issues, victim notification)
5. **Universal 10-phase operating procedure** — Seeng's default protocol for every new case:
   - Phase 1: Statutory/case-law framework
   - Phase 2: Case file and eligibility review
   - Phase 3: Risk, compliance, mitigation docs
   - Phase 4: Administrative routes (first line)
   - Phase 5: Court-based options
   - Phase 6: Clemency/commutation
   - Phase 7: Constitutional/statutory litigation
   - Phase 8: Victim communication and safety plan
   - Phase 9: Hearing preparation
   - Phase 10: Post-decision management
6. **Deliverables table** — 7 document types Seeng can produce (A–G), flagged as jurisdiction-specific or universal
7. **Expansion roadmap** — WA, CA, federal, TX/FL/IL in rough priority
8. **Expansion module template** — blank fill-in for adding any new state

---

## Source Material

The 10-phase operating procedure was adapted from a detailed plan written from the perspective of an experienced Oregon judge. It was already scoped correctly for Measure 11 / PPS cases. It was reformatted into Seeng's protocol and made jurisdiction-portable.

---

## Current Status

- `SEENG.md` committed and pushed to `claude/document-environment-Nol3k`
- Commit: `7f3491e` — "Rebuild SEENG with modular jurisdiction architecture"
- No PR created (not requested)

---

## What's Not Built Yet

- Deliverable templates (the actual petition draft, intake questionnaire, etc.)
- Any interactive interface (HTML page, API wiring, form)
- Additional jurisdiction modules beyond Oregon
- Viability testing against a real case scenario

---

## Next Decision Points

1. **Build deliverables** — start with the universal intake questionnaire (E/G) or the Oregon-specific petition template (A/C)
2. **Build an interface** — HTML page on the portfolio, or wire to Claude API directly
3. **Test Oregon** — run a mock case through the 10-phase procedure and see where the gaps are
4. **Expand** — pick the second jurisdiction after Oregon pilot confirms

---

## How to Use the System Prompt Today

To run Seeng right now in any Claude interface:

1. Open a new conversation
2. Paste the **Core System Prompt** from `SEENG.md`
3. Immediately follow it with the **Oregon Jurisdiction Module** (also in `SEENG.md`)
4. Give her a case

She will run the intake phase first — asking for the file before advising.

---

*Repo: Lukas-Green/Lukas-Green.github.io*
*File to reference: SEENG.md*
