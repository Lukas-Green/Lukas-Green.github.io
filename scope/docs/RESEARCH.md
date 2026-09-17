# The research this interface is built on

Not decoration. Every rule below changed something in `scope/index.html`, and the
rule is named in the code where it applies. Sources at the bottom.

The short version: **executive dysfunction is not a motivation problem, and a
tool that treats it as one makes it worse.** Three separate systems are involved
— a weak start signal, a narrow tolerance for load, and a nervous system that
reads demands as threats. They need three different design responses, and the
common mistake is building for only the first.

---

## 1. The "go" signal is weak, and no amount of wanting fixes it

In a neurotypical brain, imagining a finished task triggers reward prediction,
dopamine follows, and the prefrontal cortex issues a start signal. Volkow's PET
imaging work found measurably lower dopamine activity in the nucleus accumbens,
midbrain and caudate in ADHD adults — the exact regions that drive *starting*.
The dual-pathway model treats ADHD as dysregulation across two circuits at once:
executive and reward, with delay aversion linking them.

The practical consequence: **the start signal fires for immediate certain
rewards and fails for delayed uncertain ones.** A project is a delayed uncertain
reward. That is why a board of 36 projects produces nothing.

> **Rule 1 — Never show a project where a step will do.** The unit of work in
> this tool is one concrete action with a visible end, never a project.
>
> **Rule 2 — The payoff must be immediate and certain.** Marking something done
> resolves on the spot, in the same place you read it. No streaks, no score, no
> deferred reward.

## 2. Starting, stopping and switching are three separate walls

Autistic inertia is the difficulty acting on intention — and it applies equally
to starting *and* to stopping. Monotropism describes attention that funnels
hard into one channel, which makes transitions genuinely destabilising rather
than merely annoying; participants in the qualitative work describe them as
painful or disorienting. One study's participants called inertia "the single
most disabling part of being Autistic," while also describing the joy of total
immersion. The most striking finding in the first-hand accounts: people
frequently reported "no way out except from external intervention."

> **Rule 3 — Be the external intervention.** The tool picks. It does not present
> a field of equal options and wait.
>
> **Rule 4 — Never move the ground.** No auto-refresh, no reshuffle, no content
> changing position while it is being read. A switch the user did not ask for is
> a cost, not a feature.
>
> **Rule 5 — Protect the immersion too.** Once something is chosen, nothing in
> the interface should advertise the other 35 things.

## 3. Decision paralysis is measurable, and it is the actual bottleneck

In the ADHD decision-making literature, **82% of participants reported frequent
difficulty making decisions and 68% said decision paralysis significantly
affected their work performance.** This compounds the classic paradox-of-choice
effect: more options, more anxiety, less satisfaction with whatever gets picked.
For AuDHD specifically, the described experience is a tug-of-war between
opposing pulls — novelty-seeking against need for sameness — which resolves into
paralysis and chronic procrastination.

> **Rule 6 — Collapse the choice.** At low capacity the interface presents
> exactly one option. The dial's real job is not filtering work; it is
> **removing decisions**.
>
> **Rule 7 — Every screen has one obvious next action**, positioned in the same
> place every time.

## 4. Demands read as threats, including your own

PDA — increasingly framed as a *persistent drive for autonomy* — describes a
nervous system that treats demands as threats to control, and responds
automatically with avoidance, shutdown, people-pleasing or masking. It applies
to self-imposed demands and time pressure, not just other people's instructions.
The support literature is consistent: reframe obligations as choices, use
collaborative rather than directive language, keep the environment low-demand.

> **Rule 8 — Offer, never command.** No imperative nagging, no "you should," no
> overdue counters in red, no notification guilt.
>
> **Rule 9 — Always leave a visible exit.** Every suggestion ships with a way to
> decline it that is as prominent as the way to accept it. Declining is a valid
> outcome and must never be styled as failure.

## 5. Burnout is cumulative load, not a bad week

Autistic burnout is chronic exhaustion, loss of previously available skills, and
*reduced sensory tolerance*, produced by sustained load without recovery —
described in the literature as allostatic overload. Masking both precipitates
and perpetuates it. Critically: **it costs skills you previously had.** The
capacity that exists today is not a character trait and not a constant.

> **Rule 10 — Down must be as legitimate as up.** Level 1 is a supported state
> with its own useful output, not a failure mode or a punishment.
>
> **Rule 11 — Sensory load and task load draw on one budget.** This is why a
> single dial moves both. Turning tasks down while leaving the interface loud
> only solves half the problem.

## 6. A narrow window of tolerance means the interface itself is an input

CPTSD narrows the window of tolerance and makes it unstable — outside it you get
hyperarousal (panic, overwhelm) or hypoarousal (numbness, shutdown), and in
neither state does executive function work. Hypervigilant nervous systems stay
"on." An interface with high chroma, motion, alarm colors and dense information
is not neutral; it is an arousal input.

> **Rule 12 — At low levels, lower the arousal of the page itself:** chroma
> down, motion off, alarm colors gone, density down. The information is still
> reachable; the volume is not fixed.

## 7. Working memory holds about four to seven things

Standard working-memory limits (the familiar 5–9, lower under stress) plus
chunking and progressive disclosure. The UX research is specific: progressive
disclosure cuts time-to-first-action by 30–50% while preserving most feature
discovery, and **designs going beyond two levels of disclosure show poor
usability** because people get lost between levels.

> **Rule 13 — Cap visible cards by level**, never more than about seven below
> the top of the dial.
>
> **Rule 14 — Two levels of disclosure maximum.** Board → card. Nothing nested
> deeper.

## 8. Predictability is itself the anxiolytic

Environmental unpredictability correlates with anxiety directly — reduced
ability to predict events raises anxious responding *even with no aversive
consequence attached*. Autism has been characterised as a difference in
prediction; insistence on sameness reads as a rational strategy for managing it.
COGA's objectives say the same thing in interface terms: help users focus, don't
rely on memory, keep things familiar and consistent, support personalisation.

> **Rule 15 — The dial changes how much, never where.** Lane order, colors,
> positions and language are fixed at every level. Level 1 and level 9 are the
> same room with the lights at different settings, never a different room.
>
> **Rule 16 — Remember everything.** Nothing is asked twice. Preferences,
> position and decisions persist without being re-entered.

## 9. Small tasks are not small

Phone calls are disproportionately hard for a documented reason: a call demands
fast task initiation, real-time working memory and sustained focus
simultaneously, **with no script and no edit button.** That is a stack of the
exact functions that are impaired, all at once, in real time. The same analysis
covers email, texts and admin: they look trivial by duration and are expensive
by executive demand.

> **Rule 17 — Type the demand, not just the duration.** A two-minute phone call
> and a two-minute file rename are not the same task. Steps carry a demand type
> (call, email, decide, admin, build, read) and the interface shows it.
>
> **Rule 18 — Supply the missing script.** For call and email steps, the tool
> holds the opening line. Removing "what do I even say" removes most of the
> cost.

## 10. Implementation intentions beat goals

If-then plans that specify trigger, time and action recruit a different memory
system and reliably outperform vague intentions, with externalised cues at the
point of performance closing the intention-action gap.

> **Rule 19 — Write every step as an action with a location**, not an aspiration.
> "Cancel the duplicate registered agent. One phone call." not "sort out the LLC."

## 11. Body doubling works, and it costs nothing

Body doubling — working alongside someone present — is described across the
literature as among the most consistently effective ADHD interventions, because
it externalises the focus and accountability the brain is not generating. Recent
work extends it to AI and mixed-reality co-working.

> **Rule 20 — Offer company, not surveillance.** A timer that sits with one
> step, with no logging, no score and no report at the end.

## 12. Punishing UI is why people quit

The applied finding, stated plainly in the app-design literature: generic
productivity tools punish inconsistency with dead streaks and guilt-inducing
gaps, and **red overdue counts and guilt notifications are a common reason ADHD
users abandon an app.** What works is low-friction entry, persistent externalised
cues, and shame-free restarts.

> **Rule 21 — No streaks, ever. No overdue red. No "you haven't opened this in
> 30 days."** Age is information, not an accusation, and at low dial levels even
> that information is turned down.
>
> **Rule 22 — Re-entry costs nothing.** Coming back after three months looks
> identical to coming back after a day.

---

## What this cost the first version

Applying these rules meant undoing things the first build got wrong:

| Was | Research | Now |
|---|---|---|
| Verdict bar: "Park 6 rather than carrying 9 half-finished" | Rule 8, 21 | States the count. Does not instruct, does not scold. Hidden below level 5. |
| `cold 60d+` stat in alarm amber, `nowhere` in red | Rule 12, 21 | Neutral at low levels; alarm chroma only at 7+ |
| 36 cards on open | Rule 6, 13 | Level-capped. Default level 4 shows three. |
| Three density tiers | Rule 11 | Nine levels moving task load and sensory load together |
| Blockers always above next steps | Rule 1, 8 | Step first. Blockers are opt-in above level 5. |
| Effort floor of 15 minutes | Rule 1, 10 | `micro` tier: one action under two minutes, on every project |

---

## Sources

- [Volkow et al. / ADHD dopamine and task initiation — Executive Function Toolkit](https://executivefunctiontoolkit.com/adhd-and-executive-function-neurobiology/) · [FOCO: ADHD task initiation research](https://www.tryfoco.com/adhd-task-initiation-research/) · [Thawly: executive dysfunction and task initiation](https://thawly.ai/blog/executive-dysfunction-task-initiation)
- ["I live in extremes": autistic adults' experiences of inertial rest and motion (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11067417/) · ["No Way Out Except From External Intervention": first-hand accounts of autistic inertia (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8314008/) · [Monotropism — Reframing Autism](https://reframingautism.org.au/monotropism-understanding-autistic-ways-of-being-through-the-lens-of-attention/)
- [ADHD and Decision Paralysis: Overwhelm in a World of Choices (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12438291/) · [AuDHD and decision paralysis](https://carmenauthenticallyadhd.substack.com/p/when-beliefs-collide-audhd-and-the) · [Analysis paralysis and the ADHD brain — Inflow](https://www.getinflow.io/post/analysis-paralysis-adhd-brain-overthinks-decision-making)
- [PDA / persistent drive for autonomy — Reframing Autism](https://reframingautism.org.au/pathological-demand-avoidance-pda-and-autism-guide-for-allies/) · [PDA in adults — Life Skills Advocate](https://lifeskillsadvocate.com/blog/pathological-demand-avoidance-in-adults-guide/)
- [Beyond Exhaustion: Shame, Identity Disruption and Functional Collapse in Autistic Burnout (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13187221/) · [Understanding autistic burnout — National Autistic Society](https://www.autism.org.uk/learn/knowledge-hub/professional-practice/autistic-burnout) · [Mitochondrial allostatic load framework (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9732262/)
- [Window of Tolerance — Psychology Tools](https://www.psychologytools.com/resource/window-of-tolerance) · [The Window of Tolerance and PTSD — PTSD UK](https://www.ptsduk.org/the-window-of-tolerance-and-ptsd/)
- [W3C COGA — Cognitive and Learning Disabilities and WCAG](https://w3c.github.io/coga/extension/index.html) · [COGA overview — User Vision](https://uservision.co.uk/thoughts/the-cognitive-and-learning-disabilities-accessibility-task-force-coga)
- [Progressive Disclosure — Nielsen Norman Group](https://www.nngroup.com/articles/progressive-disclosure/) · [Cognitive load in UX design](https://think.design/blog/cognitive-load-in-ux-design/)
- [Autism as a disorder of prediction (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4210351/) · [Preference for order, predictability or routine — National Autistic Society](https://www.autism.org.uk/advice-and-guidance/about-autism/preference-for-order-predictability-or-routine) · [Insistence on sameness — Autism Awareness Centre](https://autismawarenesscentre.com/insistence-on-sameness-and-routine-understanding-a-hallmark-autism-trait/)
- [Phone anxiety and ADHD — Life Skills Advocate](https://lifeskillsadvocate.com/blog/phone-anxiety/) · [Telephobia and ADHD — Inflow](https://www.getinflow.io/post/phone-anxiety-and-adhd) · [Phone calls — Stimpunks Foundation](https://stimpunks.org/glossary/phone-calls/)
- [Implementation intentions and prospective memory (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9274250/) · [When intention outpaces action: the ADHD action gap](https://www.addrc.org/when-intention-outpaces-action-the-adhd-action-gap/)
- [You Are Not Alone: Designing Body Doubling for ADHD in Virtual Reality (arXiv)](https://arxiv.org/pdf/2509.12153) · [Toward Neurodivergent-Aware Productivity (arXiv)](https://arxiv.org/html/2507.06864)
- [ADHD task management app design findings](https://blog.saner.ai/best-adhd-task-management-apps/) · [Task management for ADHD adults — Neural Revolution](https://www.neural-revolution.com/feeds/blog/task-management-adhd)
