/* ============================================================
   PPS Relief Guide — Full 10-Step Legal Content
   Oregon Measure 11 Post-Prison Supervision
   ============================================================ */
const GUIDE_DATA = {
  id: "pps-relief",
  title: "Oregon PPS Relief Guide",
  subtitle: "Measure 11 — Reduction or Termination of Post-Prison Supervision",
  version: "1.0.0",
  jurisdiction: "Oregon",
  lastUpdated: "2026-03-31",
  disclaimer: "This guide is for informational purposes only and does not constitute legal advice. Every case is different. Consult a licensed Oregon attorney for advice specific to your situation.",

  steps: [
    {
      id: 1,
      title: "Confirm Statutory & Case-Law Framework",
      summary: "Identify the laws, court decisions, and Board rules that govern PPS and any possibility of early termination for Measure 11 offenders.",
      icon: "scale",
      substeps: [
        {
          id: "1.1",
          title: "Review PPS Governing Statutes",
          detail: "Identify the statutes that control post-prison supervision, including ORS chapters on the Board of Parole and Post-Prison Supervision (BOPPPS) authority and any Measure 11-specific provisions that affect your case.",
          actionItems: [
            { id: "1.1.a", text: "Obtain and read current text of ORS 144.096 (PPS general authority)", type: "research" },
            { id: "1.1.b", text: "Obtain and read ORS 144.103 (PPS conditions and duration)", type: "research" },
            { id: "1.1.c", text: "Review ORS 137.700 and 137.707 (Measure 11 mandatory minimums)", type: "research" },
            { id: "1.1.d", text: "Check ORS 144.270 (Board authority to modify/terminate supervision)", type: "research" }
          ],
          legalRefs: [
            { cite: "ORS 144.096", description: "PPS general authority" },
            { cite: "ORS 144.103", description: "PPS conditions and duration" },
            { cite: "ORS 137.700", description: "Measure 11 crimes and sentences" },
            { cite: "ORS 144.270", description: "Board modification authority" }
          ],
          glossaryTerms: ["PPS", "BOPPPS", "Measure 11", "ORS"]
        },
        {
          id: "1.2",
          title: "Research Controlling Case Law",
          detail: "Review Oregon Supreme Court and Court of Appeals decisions on early termination of supervision, retroactivity issues, and Measure 11 constraints on resentencing or reclassification.",
          actionItems: [
            { id: "1.2.a", text: "Research Oregon appellate decisions on PPS early termination", type: "research" },
            { id: "1.2.b", text: "Research any decisions on retroactivity affecting Measure 11 sentences", type: "research" },
            { id: "1.2.c", text: "Note any federal court decisions that may apply (Eighth Amendment, due process)", type: "research" },
            { id: "1.2.d", text: "Create a case law summary document with citations", type: "document" }
          ],
          legalRefs: [],
          glossaryTerms: ["Due process", "Eighth Amendment"]
        },
        {
          id: "1.3",
          title: "Check for Recent Legislative Changes",
          detail: "Determine whether any recent legislative changes, ballot measures, or federal decisions affect Measure 11 parolees or PPS in general.",
          actionItems: [
            { id: "1.3.a", text: "Check Oregon Legislature website for pending or recent bills affecting PPS", type: "research" },
            { id: "1.3.b", text: "Review any recent ballot measures affecting criminal sentencing", type: "research" },
            { id: "1.3.c", text: "Check BOPPPS website for recent rule changes (OAR Chapter 255)", type: "research" }
          ],
          legalRefs: [
            { cite: "OAR Chapter 255", description: "Board of Parole and Post-Prison Supervision rules" }
          ],
          glossaryTerms: ["OAR", "BOPPPS"]
        }
      ]
    },
    {
      id: 2,
      title: "Case File & Eligibility Review",
      summary: "Gather your complete criminal and supervision files and determine your eligibility for relief.",
      icon: "folder",
      substeps: [
        {
          id: "2.1",
          title: "Obtain Complete Criminal File",
          detail: "Request and compile every document from your criminal case, including the original judgment, sentencing documents, and plea or trial records.",
          actionItems: [
            { id: "2.1.a", text: "Obtain certified copy of Judgment and Sentence", type: "document" },
            { id: "2.1.b", text: "Obtain Pre-Sentence Investigation (PSI) report", type: "document" },
            { id: "2.1.c", text: "Obtain plea or trial transcripts", type: "document" },
            { id: "2.1.d", text: "Obtain charging instruments (indictment/information)", type: "document" },
            { id: "2.1.e", text: "Confirm and document the Measure 11 finding in your case", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["PSI", "Measure 11"]
        },
        {
          id: "2.2",
          title: "Obtain Complete Supervision File",
          detail: "Get a full copy of your supervision records from your parole officer and the Board, including conditions, assessments, and compliance history.",
          actionItems: [
            { id: "2.2.a", text: "Request current supervision conditions from parole officer", type: "task" },
            { id: "2.2.b", text: "Obtain most recent risk/needs assessment results", type: "document" },
            { id: "2.2.c", text: "Compile violation history and sanctions record", type: "document" },
            { id: "2.2.d", text: "Gather treatment and education completion records", type: "document" },
            { id: "2.2.e", text: "Obtain parole officer reports and evaluations", type: "document" },
            { id: "2.2.f", text: "Verify restitution status and payment history", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Supervision conditions", "Actuarial risk assessment", "Restitution"]
        },
        {
          id: "2.3",
          title: "Check Victim & Procedural Status",
          detail: "Confirm victim notification compliance and any pending victim objections or civil orders. Identify procedural prerequisites for petitions or hearings.",
          actionItems: [
            { id: "2.3.a", text: "Verify victim notification status and compliance", type: "task" },
            { id: "2.3.b", text: "Check for any pending victim objections or civil protection orders", type: "research" },
            { id: "2.3.c", text: "Confirm statutory discharge criteria and Board regulations", type: "research" },
            { id: "2.3.d", text: "Identify all procedural prerequisites for any petition or hearing", type: "research" }
          ],
          legalRefs: [],
          glossaryTerms: ["Victim notification", "Discharge"]
        }
      ]
    },
    {
      id: 3,
      title: "Risk, Compliance & Mitigation Documentation",
      summary: "Build your evidence package showing rehabilitation, low risk, and full compliance with supervision conditions.",
      icon: "shield",
      substeps: [
        {
          id: "3.1",
          title: "Compile Rehabilitation Evidence",
          detail: "Gather objective evidence demonstrating rehabilitation and reduced risk: program completions, clean tests, employment, housing stability, and community involvement.",
          actionItems: [
            { id: "3.1.a", text: "Collect all treatment completion certificates (substance abuse, mental health, anger management)", type: "document" },
            { id: "3.1.b", text: "Gather education and vocational training certificates", type: "document" },
            { id: "3.1.c", text: "Compile clean drug/alcohol test results history", type: "document" },
            { id: "3.1.d", text: "Document employment history since release (pay stubs, employer letters)", type: "document" },
            { id: "3.1.e", text: "Document stable housing history", type: "document" },
            { id: "3.1.f", text: "Gather letters of support from employers, mentors, clergy, or community members", type: "document" },
            { id: "3.1.g", text: "Compile post-release conduct reports showing compliance", type: "document" }
          ],
          legalRefs: [],
          glossaryTerms: []
        },
        {
          id: "3.2",
          title: "Obtain Professional Assessments",
          detail: "Get up-to-date risk assessments and any favorable clinical evaluations that support your case for reduced supervision.",
          actionItems: [
            { id: "3.2.a", text: "Request current actuarial risk assessment (LSI-R, Static-99, or equivalent)", type: "task" },
            { id: "3.2.b", text: "Obtain favorable clinical or psychological evaluations if available", type: "document" },
            { id: "3.2.c", text: "Document any corrections-based evaluations showing improvement", type: "document" }
          ],
          legalRefs: [],
          glossaryTerms: ["Actuarial risk assessment"]
        },
        {
          id: "3.3",
          title: "Document Compliance & Remediation",
          detail: "Demonstrate that you have complied with all supervision conditions and taken steps to remedy any past violations.",
          actionItems: [
            { id: "3.3.a", text: "Create a timeline showing compliance with all supervision conditions", type: "task" },
            { id: "3.3.b", text: "For any past violations, document corrective steps taken", type: "task" },
            { id: "3.3.c", text: "Verify all restitution payments are current", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Supervision conditions", "Restitution"]
        }
      ]
    },
    {
      id: 4,
      title: "Administrative Routes (First Line)",
      summary: "Start with administrative requests — modification of conditions and petition to the Board for early termination.",
      icon: "building",
      substeps: [
        {
          id: "4.1",
          title: "Request Administrative Modification",
          detail: "Ask your supervising officer for reduced reporting frequency or a lower supervision level, supported by your risk assessment and compliance documentation.",
          actionItems: [
            { id: "4.1.a", text: "Prepare written request to supervising officer for reduced conditions", type: "task" },
            { id: "4.1.b", text: "Attach recent risk assessment and compliance documentation", type: "task" },
            { id: "4.1.c", text: "Request meeting with supervising officer to discuss modification", type: "task" },
            { id: "4.1.d", text: "If denied, request written rationale and appeal route", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Supervision conditions", "Actuarial risk assessment"]
        },
        {
          id: "4.2",
          title: "Appeal Administrative Denial",
          detail: "If your supervising officer denies the modification request, file a formal appeal through the agency's internal procedures.",
          actionItems: [
            { id: "4.2.a", text: "Obtain copy of denial with written reasons", type: "document" },
            { id: "4.2.b", text: "Identify the formal appeal process per agency procedures", type: "research" },
            { id: "4.2.c", text: "File written appeal with supporting documentation", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Administrative hearing"]
        },
        {
          id: "4.3",
          title: "Petition the Board for Early Termination",
          detail: "Prepare and submit a memorandum to the BOPPPS requesting early termination or discharge from PPS, citing statutory authority and attaching all supporting evidence.",
          actionItems: [
            { id: "4.3.a", text: "Prepare a formal memorandum to the BOPPPS requesting early termination", type: "task" },
            { id: "4.3.b", text: "Cite statutory authority for Board discretion (ORS 144.270)", type: "task" },
            { id: "4.3.c", text: "Attach all rehabilitation, compliance, and risk documentation", type: "task" },
            { id: "4.3.d", text: "Propose a conditions phase-out plan as an alternative to full termination", type: "task" },
            { id: "4.3.e", text: "Request a hearing before the Board if rules permit", type: "task" }
          ],
          legalRefs: [
            { cite: "ORS 144.270", description: "Board authority to modify or terminate supervision" }
          ],
          glossaryTerms: ["BOPPPS", "Discharge", "Administrative hearing"]
        }
      ]
    },
    {
      id: 5,
      title: "Court-Based Options",
      summary: "If administrative routes don't succeed, explore judicial motions for modification or termination of PPS.",
      icon: "gavel",
      substeps: [
        {
          id: "5.1",
          title: "File Motion in Sentencing Court",
          detail: "File a motion in the sentencing court for early termination or modification of post-release supervision, grounded in changed circumstances, exceptional compliance, or constitutional claims.",
          actionItems: [
            { id: "5.1.a", text: "Determine proper court and filing procedures for your motion", type: "research" },
            { id: "5.1.b", text: "Draft motion for early termination or modification of PPS", type: "task" },
            { id: "5.1.c", text: "Ground motion in changed circumstances and exceptional compliance", type: "task" },
            { id: "5.1.d", text: "Include constitutional due-process or equal-protection arguments if factual support exists", type: "task" },
            { id: "5.1.e", text: "Attach supporting declarations and evidence", type: "document" },
            { id: "5.1.f", text: "File the motion and serve all required parties", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Due process", "Equal protection"]
        },
        {
          id: "5.2",
          title: "Prepare for Court Hearing",
          detail: "If a hearing is granted, prepare to present witnesses and evidence in support of your motion.",
          actionItems: [
            { id: "5.2.a", text: "Confirm hearing date and prepare witness list", type: "task" },
            { id: "5.2.b", text: "Prepare supervising officer to testify (or obtain written statement)", type: "task" },
            { id: "5.2.c", text: "Prepare treatment providers and employers as witnesses", type: "task" },
            { id: "5.2.d", text: "Prepare proposed findings of fact and proposed order", type: "document" }
          ],
          legalRefs: [],
          glossaryTerms: []
        },
        {
          id: "5.3",
          title: "Preserve Issues for Appeal",
          detail: "If state case law limits judicial authority over PPS, prepare alternative equitable arguments and preserve all issues for possible appellate review.",
          actionItems: [
            { id: "5.3.a", text: "Research whether state case law limits court authority over PPS modification", type: "research" },
            { id: "5.3.b", text: "Prepare alternative equitable arguments", type: "task" },
            { id: "5.3.c", text: "Ensure all constitutional and statutory arguments are preserved on the record", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: []
        }
      ]
    },
    {
      id: 6,
      title: "Clemency / Commutation",
      summary: "Prepare a petition to the Governor for clemency or commutation of PPS.",
      icon: "star",
      substeps: [
        {
          id: "6.1",
          title: "Prepare Clemency Petition",
          detail: "Draft a comprehensive clemency or commutation petition to the Governor, emphasizing rehabilitation, public safety, and the disproportionate burden of continued supervision.",
          actionItems: [
            { id: "6.1.a", text: "Research Oregon clemency procedures and application requirements", type: "research" },
            { id: "6.1.b", text: "Draft clemency petition emphasizing rehabilitation and public safety", type: "task" },
            { id: "6.1.c", text: "Address the disproportionate supervisory burden argument", type: "task" },
            { id: "6.1.d", text: "Include full supporting documentation package", type: "document" },
            { id: "6.1.e", text: "Prepare victim-impact and risk mitigation plans", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Clemency", "Commutation"]
        },
        {
          id: "6.2",
          title: "Submit and Follow Up",
          detail: "Submit the petition through required channels and engage with clemency staff.",
          actionItems: [
            { id: "6.2.a", text: "Submit petition through official clemency application channels", type: "task" },
            { id: "6.2.b", text: "Request meetings with clemency staff as appropriate", type: "task" },
            { id: "6.2.c", text: "Follow up on petition status at regular intervals", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Clemency"]
        }
      ]
    },
    {
      id: 7,
      title: "Constitutional & Statutory Litigation",
      summary: "Evaluate and pursue constitutional challenges or statutory interpretation arguments that could reduce PPS exposure.",
      icon: "balance",
      substeps: [
        {
          id: "7.1",
          title: "Evaluate Constitutional Challenges",
          detail: "Assess whether there are viable facial or as-applied constitutional challenges to your PPS, including Eighth Amendment arguments if supervision is effectively punitive, or due process defects.",
          actionItems: [
            { id: "7.1.a", text: "Evaluate Eighth Amendment challenge (punitive/disproportionate supervision)", type: "research" },
            { id: "7.1.b", text: "Evaluate due process challenges (notice, hearing rights)", type: "research" },
            { id: "7.1.c", text: "Evaluate equal protection arguments if similarly situated individuals treated differently", type: "research" },
            { id: "7.1.d", text: "Assess statutory interpretation arguments that could reduce PPS exposure", type: "research" }
          ],
          legalRefs: [],
          glossaryTerms: ["Eighth Amendment", "Due process", "Equal protection"]
        },
        {
          id: "7.2",
          title: "File Appropriate Petitions",
          detail: "If viable claims exist, file motions based on systemic or retroactivity grounds — habeas corpus, post-conviction relief, or appropriate rule-based filings.",
          actionItems: [
            { id: "7.2.a", text: "Determine proper filing vehicle (habeas, post-conviction relief, rule-based)", type: "research" },
            { id: "7.2.b", text: "Draft and file petition with supporting legal authorities", type: "task" },
            { id: "7.2.c", text: "Coordinate with appellate counsel if expedited review is needed", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Habeas corpus", "Post-conviction relief"]
        }
      ]
    },
    {
      id: 8,
      title: "Victim Communication & Safety Plan",
      summary: "Proactively address victim concerns and develop a transition plan that preserves public safety.",
      icon: "users",
      substeps: [
        {
          id: "8.1",
          title: "Address Victim Notification",
          detail: "Proactively address victim notification requirements and concerns. Provide assurances and risk-management plans to the Board and court.",
          actionItems: [
            { id: "8.1.a", text: "Confirm all victim notification requirements have been met", type: "task" },
            { id: "8.1.b", text: "Prepare written assurances and risk-management plans for the victim", type: "task" },
            { id: "8.1.c", text: "Address any known victim concerns in your petition materials", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Victim notification"]
        },
        {
          id: "8.2",
          title: "Develop Transition & Safety Plan",
          detail: "Create a concrete supervision-reduction plan that preserves public safety: graduated reduction of contacts, continued treatment if needed, employer verification, and community support.",
          actionItems: [
            { id: "8.2.a", text: "Draft graduated reduction plan (e.g., monthly → quarterly → annual check-ins)", type: "task" },
            { id: "8.2.b", text: "Identify continuing treatment or monitoring commitments", type: "task" },
            { id: "8.2.c", text: "Document employer verification and community support contacts", type: "document" },
            { id: "8.2.d", text: "Address GPS or electronic monitoring transition if applicable", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Supervision conditions"]
        }
      ]
    },
    {
      id: 9,
      title: "Hearing Preparation & Presentation",
      summary: "Prepare a compelling case for your hearing before the Board or court.",
      icon: "mic",
      substeps: [
        {
          id: "9.1",
          title: "Prepare Legal Memorandum",
          detail: "Draft a concise, judicial-style memorandum with legal authorities, a chronology, and a proposed order tailored to statutory standards.",
          actionItems: [
            { id: "9.1.a", text: "Draft memorandum with legal authorities and chronology", type: "task" },
            { id: "9.1.b", text: "Include proposed findings of fact", type: "document" },
            { id: "9.1.c", text: "Draft proposed order for Board or court", type: "document" },
            { id: "9.1.d", text: "Articulate why public safety is served by termination or modification", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: []
        },
        {
          id: "9.2",
          title: "Prepare Witnesses",
          detail: "Line up and prepare witnesses who can speak to your rehabilitation, compliance, and reduced risk.",
          actionItems: [
            { id: "9.2.a", text: "Confirm supervising officer's availability and willingness to testify or provide a statement", type: "task" },
            { id: "9.2.b", text: "Prepare treatment provider testimony", type: "task" },
            { id: "9.2.c", text: "Prepare employer testimony or written statement", type: "task" },
            { id: "9.2.d", text: "Prepare risk assessor to present or summarize findings", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: []
        },
        {
          id: "9.3",
          title: "Prepare Personal Testimony",
          detail: "Prepare to testify succinctly: accept responsibility, show insight, and demonstrate how you have changed.",
          actionItems: [
            { id: "9.3.a", text: "Write out key talking points for personal testimony", type: "task" },
            { id: "9.3.b", text: "Practice accepting responsibility and showing insight", type: "task" },
            { id: "9.3.c", text: "Prepare to answer tough questions (about the crime, victims, future plans)", type: "task" },
            { id: "9.3.d", text: "Rehearse testimony to keep it concise and focused", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: []
        }
      ]
    },
    {
      id: 10,
      title: "Post-Decision Management & Appeals",
      summary: "Manage the outcome — whether granted, partially granted, or denied — and plan next steps.",
      icon: "flag",
      substeps: [
        {
          id: "10.1",
          title: "If Granted: Implementation",
          detail: "Ensure clear implementation of the relief and establish a monitoring plan to prevent re-imposition of conditions.",
          actionItems: [
            { id: "10.1.a", text: "Obtain and review written order of relief", type: "document" },
            { id: "10.1.b", text: "Create implementation plan with clear milestones", type: "task" },
            { id: "10.1.c", text: "Establish self-monitoring plan to maintain compliance", type: "task" },
            { id: "10.1.d", text: "Keep documentation showing continued good conduct", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Discharge"]
        },
        {
          id: "10.2",
          title: "If Denied: Next Steps",
          detail: "Obtain written findings, preserve appellate issues, and consider alternate avenues of relief.",
          actionItems: [
            { id: "10.2.a", text: "Obtain complete written findings and denial rationale", type: "document" },
            { id: "10.2.b", text: "Preserve all appellate issues with detailed record", type: "task" },
            { id: "10.2.c", text: "Consider alternate relief: clemency, new rule-based petitions, further administrative requests", type: "research" },
            { id: "10.2.d", text: "Set calendar reminder to refile or re-petition when eligible", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Clemency"]
        },
        {
          id: "10.3",
          title: "Monitor for Future Opportunities",
          detail: "Stay informed about legislative or case-law changes that could reopen relief prospects.",
          actionItems: [
            { id: "10.3.a", text: "Set up monitoring for Oregon legislative changes affecting PPS", type: "task" },
            { id: "10.3.b", text: "Monitor Oregon appellate decisions on supervision and Measure 11", type: "task" },
            { id: "10.3.c", text: "Reassess eligibility annually and update documentation", type: "task" }
          ],
          legalRefs: [],
          glossaryTerms: ["Measure 11", "PPS"]
        }
      ]
    }
  ]
};
