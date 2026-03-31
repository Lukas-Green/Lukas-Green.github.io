# FieldKit — Business Plan

**Version 1.0 | Lukas Green, AI Design Technologist | Portland, OR**

---

## Executive Summary

FieldKit is a configurable, white-label field data capture framework built on Google Workspace. It is not a SaaS product. It is a productized service: one flexible engine that deploys as a purpose-built tool for any organization that needs structured data capture in the field — without a CRM budget, an IT department, or an onboarding process.

The framework runs on Google Apps Script with Google Sheets as its database. It requires no installation, no subscription, and no training. It is deployed in hours, not months. The client pays once and owns the tool permanently.

The addressable market is every small organization running on Google Workspace that is currently logging field interactions in personal spreadsheets, sticky notes, or group chats. That is not a niche — it is the operational reality of tens of thousands of nonprofits, small contractors, independent property managers, community health programs, political campaigns, and HR consultants in the US alone.

FieldKit's competitive position is simple: it delivers the operational capability of a $150/month SaaS tool at a one-time cost of $300–$800, with zero ongoing dependency on a vendor. For organizations with no IT budget and no tolerance for another subscription, this is not a compromise. It is the better option.

**Current status:** Framework built. Eight vertical configurations ready to deploy. Seeking first three paying clients across any vertical to validate pricing and refine deployment process.

---

## Problem Statement

### The Operational Gap in Small Organizations

Organizations under 200 people — nonprofits, field service businesses, community programs, small contractors — share a common operational problem: they generate structured data in the field (contacts made, visits logged, inspections completed, volunteers checked in) but have no reliable system for capturing it.

The enterprise tools that solve this problem — Salesforce, HubSpot, Procore, BambooHR, VolunteerHub — start at price points that require executive approval, multi-month implementation, and ongoing IT support. For a 12-person outreach nonprofit, a 4-person property management firm, or a solo HR consultant, these tools are simply not accessible.

The result is what one nonprofit coordinator described, verbatim, when asked about her process: three separate manual steps, every day, to capture data that should have taken one.

This is not a technology problem. It is a design and accessibility problem. The tools exist. They are just built for the wrong customer.

### The Specific Pain by Vertical

| Vertical | Current State | Business Cost |
|----------|--------------|---------------|
| Community Outreach | Text messages → phone notes → spreadsheet | Lost contacts, inaccurate grant reports |
| Field Sales | Personal CRM or nothing | Missed follow-ups, no pipeline visibility |
| Construction | Paper daily logs or email threads | Legal exposure, OSHA compliance risk |
| Community Health | Paper visit logs | Grant reporting errors, funding risk |
| Volunteers | Clipboard sign-in + reconstruction | Inaccurate hours for grant matching |
| Property Inspection | Personal notes and photos | Legally insufficient documentation |
| HR Onboarding | Email threads and tribal knowledge | New hires falling through cracks |
| Event Lead Capture | Business cards and badge scanners ($$$) | Leads lost after the event |

---

## Solution

FieldKit is a single configurable framework — a core HTML/CSS/JS application backed by Google Apps Script — that becomes a different purpose-built tool depending on the configuration object applied to it.

A deployer (Lukas, or a licensed consultant) selects a vertical, applies the appropriate configuration (field definitions, contact types, branding, stat labels, export settings), and the framework becomes that vertical's product: CanvassKit for outreach, SaleKit for field reps, SiteLog for construction, and so on.

### What makes this different from a spreadsheet template

1. **It looks and behaves like a real product.** Clean dark UI, stat dashboard, modal forms, CSV/JSON export. Not a sheet with some formatting.
2. **It requires zero technical knowledge to use.** Open a link. Enter your name. Start logging. There is no step three.
3. **It stores structured data.** Every record has consistent fields, timestamps, user attribution, and type classification. The data is immediately reportable.
4. **It exports on demand.** Date-range filtered export in one click. Grant-reportable, supervisor-ready, attorney-defensible.
5. **It lives inside tools the client already has.** No new vendor. No new login. No new contract. Google Workspace is already open.

### The framework concept

```
FIELDKIT_CONFIG (vertical-specific)
         ↓
  fieldkit-core.html (engine — never changes)
         ↓
  Google Apps Script backend
         ↓
  Google Sheets (client's own Workspace)
```

The client owns the data. The client owns the deployment. FieldKit is the architecture that makes it possible.

---

## Market Analysis

### Total Addressable Market

Google Workspace has over 6 million paying business customers globally, with approximately 3 million in the US. The majority are small businesses and nonprofits in the sub-200 employee range — exactly the organizations that cannot afford enterprise SaaS alternatives.

Within that base, the verticals FieldKit serves represent:

| Vertical | US Organizations | Relevant Segment |
|----------|-----------------|-----------------|
| Nonprofits (outreach, volunteer, CHW) | 1.5M registered | ~300,000 with field operations |
| Construction (GC + sub) | 730,000 firms | ~200,000 under $10M revenue |
| Property Management | 290,000 firms | ~175,000 independent managers |
| Field Sales Teams | Millions of reps | SMBs with 2–20 person sales teams |
| HR Consultants | 50,000+ firms | Those serving 50–200 person companies |
| Event/Trade Show | 1.9M events/year | Exhibitor booths needing lead capture |

### Serviceable Addressable Market

FieldKit does not require a massive install base. At a $500 average deal value, 200 clients per year is $100,000. That is the SAM for a solo operator: not the market size, but the realistic capture at this stage.

### Underserved Segment Narrative

The critical insight is not just that these organizations are underserved — it is *why* they are underserved. Enterprise SaaS vendors have no economic incentive to build for a $500 annual contract when their average deal is $5,000–$50,000. The no-code tool market (Airtable, Notion, Glide) has partially addressed this, but those tools still require a technical operator to configure and maintain them, and still charge ongoing subscriptions.

FieldKit's position is the gap between "just use a spreadsheet" and "get a real CRM." That gap is enormous, underserved, and filled with organizations that have real operational pain and $300–$1,000 to solve it.

---

## Competitive Landscape

### Direct Competitors by Vertical

| Vertical | Existing Tool | Price | Why They Fail Small Orgs |
|----------|--------------|-------|--------------------------|
| CRM / Outreach | HubSpot Starter | $50/mo/user | Onboarding friction, subscription, overkill |
| Field Sales | Salesforce Essentials | $25/mo/user | Same — plus too complex |
| Construction Logs | Procore | $375+/mo | Built for GCs doing $100M+, not $5M |
| Community Health | EHR systems | $200–500/mo | HIPAA complexity, massive overkill |
| Volunteer Mgmt | VolunteerHub | $100+/mo | Ongoing cost, new platform to learn |
| Property Inspection | AppFolio | $280+/mo | Full PM suite, not just logs |
| HR Onboarding | BambooHR | $6+/employee/mo | Minimum viable = $300+/mo for small orgs |
| Event Leads | Lead capture hardware | $400–800/event | Per-event cost, hardware dependency |

### FieldKit's Competitive Position

FieldKit does not compete on features. It competes on access, simplicity, and cost model.

| Factor | Enterprise SaaS | FieldKit |
|--------|----------------|---------|
| Setup time | Weeks to months | Hours |
| Training required | Days | Zero |
| Monthly cost | $50–500+ | $0 (optional $75–150 support retainer) |
| Upfront cost | $0 (subscription) | $300–800 one-time |
| Data ownership | Vendor's platform | Client's own Google Sheets |
| IT requirement | Often yes | Never |
| Customization | Limited without dev | Full via config |
| Vendor dependency | High | None after deployment |

The one-time vs. subscription comparison is the core sales argument. A nonprofit paying $100/month for VolunteerHub spends $1,200/year — every year. FieldKit costs $500 once. At month five, the client is ahead. At year two, they have saved $1,900. That is the pitch.

---

## Revenue Model

FieldKit operates four revenue streams, sequenced by effort and scalability.

### Stream 1 — Setup and Deployment Fees (Primary)

Direct client engagements. Lukas deploys a configured vertical for a specific organization.

| Tier | Scope | Price |
|------|-------|-------|
| Standard | Single vertical, default config, GAS deployment | $350 |
| Custom | Vertical + custom fields + branding + training call | $600 |
| Advanced | Multi-vertical or complex custom config + 1 month support | $900 |

Target: 2–4 per month at steady state.

### Stream 2 — Monthly Support Retainer (Recurring)

Optional ongoing support for deployed clients. Config updates, field changes, export help, new user onboarding.

**Price:** $75–$150/month depending on complexity.
**Target:** 30–40% of clients retain. At 20 deployed clients with 35% retention: 7 retainers × $100/avg = $700/month recurring.

### Stream 3 — White-Label Consultant License

Consultants (HR, nonprofit tech, no-code, Google Workspace) pay an annual license to deploy FieldKit for their clients under their own branding.

**Price:** $750–$1,500/year depending on deployment volume.
**Target:** 5–10 consultant partners by end of year one.

Distribution: LinkedIn outreach to HR consultants and nonprofit tech advisors. One consultant = multiple client deployments with zero additional sales effort.

### Stream 4 — Digital Product (DIY Version)

A self-service version of the framework published on Gumroad and/or AppSumo. Includes the core engine, all 8 vertical configs, deployment documentation, and a setup video.

**Price:** $67–$97 one-time.
**Target:** Passive income. Even 5 sales/month = $335–$485/month with zero marginal cost.

AppSumo launch can spike this significantly — AppSumo deals routinely move 500–2,000 units in a launch window.

---

## Operational Plan

### Solo Operator Structure

FieldKit is designed to be operated by one person. The economics work because:

1. **No hosting cost.** Google Apps Script is free. Google Workspace is the client's existing subscription.
2. **No support infrastructure.** A deployed FieldKit instance runs independently. Support is only needed when clients request changes.
3. **Repeatable deployment.** Each vertical is a pre-built config. New client onboarding is 2–4 hours of work, not 20.
4. **Async-first.** Documentation, demo, and deployment instructions handle 80% of client questions before they are asked.

### Time Budget (Steady State, 20 hrs/week)

| Activity | Hours/Week |
|----------|-----------|
| Client deployments (2/month avg) | 4 |
| Support retainer clients | 3 |
| Content + outreach | 5 |
| Framework improvements | 4 |
| Admin | 2 |
| Buffer | 2 |

### Tools and Costs

| Tool | Cost |
|------|------|
| Google Workspace | Client-owned (no cost to FieldKit) |
| GitHub Pages / domain | ~$15/year |
| Gumroad | 10% transaction fee (no upfront cost) |
| Calendly | $10/month |
| Email (existing) | $0 |
| **Total monthly overhead** | **~$10/month** |

---

## Risk Analysis

### Risk 1 — Google changes Apps Script pricing or capabilities
**Likelihood:** Low. GAS has been free for over a decade with no signals of change.
**Mitigation:** Framework architecture is portable. The core engine is vanilla HTML/JS. A non-GAS backend (e.g., Supabase, Firebase) could replace the GAS layer with minimal front-end changes.

### Risk 2 — Low initial conversion rate
**Likelihood:** Medium. First-client acquisition is always the hardest.
**Mitigation:** Free 30-minute consultation + live demo converts skeptics. One anchor client per vertical provides social proof for that vertical's outreach.

### Risk 3 — Clients need more than FieldKit provides
**Likelihood:** Medium for certain verticals (e.g., CHW needing HIPAA compliance).
**Mitigation:** Scope is clearly stated upfront. FieldKit is explicitly not a HIPAA-compliant platform. It is a structured logging tool. Clients who need more are referred upmarket.

### Risk 4 — Competitor builds the same thing
**Likelihood:** Low near-term. The intersection of Google Workspace expertise + UX design + productized service approach is not common.
**Mitigation:** Speed to market + vertical depth + relationship moat. A framework tool with 10 deployed clients and real testimonials is much harder to displace than a new entrant with a product launch.

### Risk 5 — Time constraints (Lukas is also pursuing other work)
**Likelihood:** Real.
**Mitigation:** FieldKit is designed for low time overhead. The digital product and consultant channel create revenue that scales without proportional time investment.

---

## Team

**Lukas Green** — AI Design Technologist. 22+ years across graphic design, digital, UX, and AI-augmented development. Pursuing advanced studies at Portland State University. Builder of CanvassKit (deployed, production-ready), SoloBill (contractor invoicing tool), LUCID (local file intelligence), and RecallAI (dental scheduling automation). Every project in his portfolio started with a specific operational pain point, not a product idea. That is the methodology FieldKit is built on.

---

*FieldKit is not a venture-scale startup. It is a profitable, sustainable, solo-operated product business built around a real capability and a real market gap. The goal is not unicorn outcomes — it is meaningful revenue, genuine client value, and a framework that compounds over time.*
