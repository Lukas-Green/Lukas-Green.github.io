---
name: bid-triage
description: Score a public solicitation for bid/no-bid using the LUXIGA procurement rubric. Use when evaluating an OregonBuys listing, an RFP/RFQ/ITB PDF, or any government contract opportunity to decide whether to pursue it. Triggers on "should I bid", "triage this RFP", "score this solicitation", "is this worth pursuing".
---

# Bid Triage

Decide whether a public solicitation is worth pursuing. Output a scored
recommendation, not a summary. The default answer is **no-bid** — public
proposals are expensive and most opportunities are wrong for a two-person firm.

## Firm context

Read `research/procurement-context.md` first. It holds current certifications,
NIGP codes, insurance posture, capability language, and active pursuits. If it
does not exist, say so and ask before scoring — the rubric depends on it.

## Procedure

1. **Extract the facts.** From the listing or PDF, pull: issuing agency,
   solicitation number, title, estimated value, response deadline, question
   deadline, procurement method (small / intermediate / formal / QBS),
   set-aside status, insurance exhibit requirements, bonding requirements,
   mandatory pre-bid meeting, required past performance, NIGP/NAICS codes.

2. **Check disqualifiers first.** Any single one is an automatic no-bid; do not
   score further, just report which one fired:
   - Deadline is less than 7 days out and the response requires original writing
   - Requires a licensed architect/engineer of record we do not have
   - Requires bonding (public improvement work, not services)
   - Requires proof of bound insurance *with the bid* and no contract funds it
   - Mandatory pre-bid meeting already passed
   - Minimum past-performance count exceeds what the ledger can document
   - Scope centre of gravity is outside our capability, not merely adjacent

3. **Score the ten dimensions** in `research/bid-rubric.md`, 1–5 each, 50 max.
   Give a one-line justification per dimension. Never score from optimism —
   score from what is written in the solicitation.

4. **Report** in this shape:

   - Header block: agency, number, value, deadline, method, set-aside
   - Verdict: PURSUE / WATCH / PASS with the total score
   - The dimension table with scores and justifications
   - Disqualifiers checked and cleared
   - If PURSUE: the three highest-risk requirements and the next concrete action
   - If PASS: the single reason that decided it

## Thresholds

- **38–50 — Pursue.** Clear the calendar for it.
- **28–37 — Watch.** Only pursue if a stronger opportunity is not competing for
  the same week, or if it opens an agency relationship worth more than the contract.
- **Below 28 — Pass.** Log it in the pipeline and move on.

## Bias to correct for

Small firms consistently overestimate capability fit and underestimate response
effort. When uncertain between two scores on **Capability fit** or **Response
effort**, take the lower one.
