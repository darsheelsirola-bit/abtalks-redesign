# ABTalks Vibe Code Hackathon — AI Usage Log

This file documents how AI coding tools were used during the development of the ABTalks redesign. Prompts, iterations, failures, and corrections are included to provide a transparent record of the vibe-coding process.

## Authenticity note

- Git commits and affected files were verified from the repository history.
- The original wording of early prompts is no longer available in accessible session records. Those entries are labeled **Recovered summary — exact original wording unavailable** and are not presented as quotations.
- Later prompts were recoverable from Codex attachments or this session. Long prompts are represented by exact excerpts and explicitly identified as excerpts.
- No prompt date is claimed. The former log used 2025 dates, but Git history for this repository begins in August 2026, so the unsupported prompt dates were removed.
- Only tools supported by the available evidence are named. Early entries use “AI coding assistant” because the exact product could not be verified; later work used Codex.

---

## Stage 01 — Foundation and project structure

**Tool:** AI coding assistant (exact product unavailable)

**Prompt**

> **Recovered summary — exact original wording unavailable:** Scaffold the ABTalks redesign as a React, Vite, and TypeScript project. Add Tailwind CSS, React Router, Lucide icons, the required routes, sensible folders, README, and an initial prompt log. Establish a mobile-first dark design system and mock challenge/user data.

### What happened

The repository was scaffolded, environment files were protected, reusable UI primitives and design tokens were created, and challenge/user mock data was added. The data included the 60-day structure and the `active`, `firstDay`, `missedPrev`, and `emptyProfile` variants.

### Files affected

- `abtalks/package.json`
- `abtalks/src/App.tsx`
- `abtalks/src/index.css`
- `abtalks/tailwind.config.js`
- `abtalks/src/components/ui/*`
- `abtalks/src/data/challenges.ts`
- `abtalks/src/data/users.ts`

### Result

The initial architecture, routes, design primitives, and mock-data foundation were established incrementally rather than in one feature commit.

### Related commits

- `f6d595b` — `chore: scaffold ABTalks redesign`
- `90f2dc2` — `chore: protect environment files`
- `c29a6af` — `style: establish mobile-first design system`
- `443f0fe` — `data: add mock challenge data`

---

## Stage 02 — Landing page, dashboard, and Recovery Day

**Tool:** AI coding assistant (exact product unavailable)

**Prompt**

> **Recovered summary — exact original wording unavailable:** Build the mobile-first landing page and student dashboard. Explain the 60-day challenge, show today’s mission, streak, progress, achievements, standing, and proof status. Add a non-punitive Recovery Day flow for a missed previous day.

### What happened

The landing page, dashboard, and Recovery Day experience were implemented in separate stages. The dashboard centered today’s work and added conditional recovery behavior for the missed-day profile.

### Files affected

- `abtalks/src/pages/Home.tsx`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/components/ui/RecoveryPanel.tsx`
- `abtalks/src/data/users.ts`

### Result

The core marketing and student-home experiences worked with mock state. Recovery Day remained part of later redesigns and logic corrections.

### Related commits

- `158b0f3` — `feat: build mobile-first landing page`
- `2dfa87c` — `feat: build student challenge dashboard`
- `d5fad83` — `feat: add accountable streak recovery experience`

---

## Stage 03 — Challenge-day proof workflow

**Tool:** AI coding assistant (exact product unavailable)

**Prompt**

> **Recovered summary — exact original wording unavailable:** Build `/day/12` as a focused challenge workspace with task metadata, objectives, requirements, GitHub and LinkedIn proof inputs, mock validation, and a completion state that unlocks only after both proofs succeed.

### What happened

The challenge page gained task information, validation states, parsed mock GitHub information, LinkedIn proof, completion gating, and a success state. The route later became a dynamic `/day/:day` experience.

### Files affected

- `abtalks/src/pages/Day.tsx`
- `abtalks/src/data/challenges.ts`

### Result

The daily task-to-proof-to-completion workflow became functional using local state and mock data.

### Related commit

- `9cd8326` — `feat: build day 12 task and proof submission flow`

---

## Stage 04 — Edge cases, responsiveness, accessibility, and build cleanup

**Tool:** AI coding assistant (exact product unavailable)

**Prompt**

> **Recovered summary — exact original wording unavailable:** Handle first-day and empty-profile states, add a development-only profile switcher, refine mobile interactions, optimize the required routes for the 390px judging viewport, improve tablet/desktop layouts, audit accessibility, and resolve TypeScript/build issues.

### What happened

The four profile states were made safer, mobile hierarchy and responsive layouts were refined, reduced-motion and semantic improvements were added, and production build issues were cleaned up.

### Files affected

- `abtalks/src/pages/Home.tsx`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/pages/Day.tsx`
- `abtalks/src/index.css`
- `abtalks/src/components/ui/Button.tsx`

### Result

The app handled missing/empty data more gracefully and was explicitly optimized for 390px while retaining tablet and desktop layouts.

### Related commits

- `7b2e020` — `feat: handle first-day onboarding state`
- `2611319` — `fix: improve empty and incomplete profile states`
- `1c1a8ae` — `polish: add purposeful mobile interactions`
- `1f23097` — `refactor: improve mobile UX and visual hierarchy`
- `67c188f` — `polish: optimize required routes for 390px judging`
- `c538a3c` — `style: refine responsive desktop layouts`
- `1e1e4aa` — `fix: improve accessibility and semantic markup`
- `822609a` — `refactor: clean codebase and resolve build issues`

---

## Stage 05 — Early documentation and SPA deployment support

**Tool:** AI coding assistant (exact product unavailable)

**Prompt**

> **Recovered summary — exact original wording unavailable:** Improve the prompt log for submission and add Vercel SPA routing support so direct navigation to client-side routes works.

### What happened

An earlier chronological prompt log was created and `vercel.json` added a catch-all rewrite to `index.html`. The earlier log was useful but later proved incomplete and contained unsupported 2025 dates, which this final audit removes.

### Files affected

- `abtalks/PROMPTS.md` (superseded by this root file)
- `abtalks/vercel.json`

### Result

Direct Vercel route loading was supported. Documentation existed, but required a later authenticity reconciliation.

### Related commits

- `04d12b2` — `docs: improve PROMPTS.md formatting with chronological development log`
- `5237e98` — `chore: add vercel.json SPA rewrite for client-side routing`

---

## Stage 06 — Complete visual redesign and design-system refinement

**Tool:** Codex

**Prompt**

Exact excerpt from a longer available prompt:

```text
Use the installed UI/UX design skill on the existing ABTalks hackathon project and perform a complete professional UI/UX refinement.

Actually inspect and modify the existing application.
Do not only give me recommendations.

The goal is to make the current product look like it was designed and reviewed by a senior product designer.

Do NOT rebuild the application from scratch.

MOBILE FIRST.
390px is more important than desktop.
```

The prompt also required preserving routing, proof submission, Recovery Day, mock profiles, streak/progress calculations, achievements, dark mode, and the existing data architecture; it requested checks at 360px, 390px, 768px, and 1440px.

### What happened

The visual system was substantially reworked across all three routes. New reusable pieces included challenge progress, achievements, Recovery Day, today’s mission, and streak components. Typography, spacing, dimensional surfaces, state styling, and responsive layouts were refined.

### Files affected

- `abtalks/src/pages/Home.tsx`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/pages/Day.tsx`
- `abtalks/src/components/ui/*`
- `abtalks/src/index.css`
- `abtalks/tailwind.config.js`

### Result

The app moved from an initial functional interface to the final dark, lime-accented, technical visual direction. Later stages corrected several layout and logic issues left by this broad pass.

### Related commits

- `6d08bdc` — `feat: complete visual redesign for ABTalks 60-day challenge`
- `00f9930` — `polish: improve hero typography spacing and visual hierarchy`

---

## Stage 07 — Workflow timeline correction chain

**Tool:** Codex

**Prompt**

> **Recovered summary — exact original wording unavailable:** Refine the landing-page “Build → Commit → Share → Repeat” workflow. Correct card proportions, alternating placement, rail/node alignment, icon consistency, and responsive behavior. Use a Git branch metaphor for Commit and remove inconsistent node treatment.

### Attempt

The workflow was extracted into `WorkflowSection.tsx` with alternating desktop panels and a mobile rail.

### Issue found

Timeline nodes remained visually inconsistent and later appeared too dark against the black page, reading as if they were hidden.

### Correction prompt

Exact later correction:

```text
make sure to colour the dots green like no hiding
```

### Result

Node geometry was unified first, and all four nodes were later changed to permanently visible lime dots with a restrained glow on both desktop and mobile.

### Files affected

- `abtalks/src/components/WorkflowSection.tsx`
- `abtalks/src/pages/Home.tsx`

### Related commits

- `5db3fcb` — `fix: unify workflow timeline node styling`
- `8ff2952` — `add home return path and highlight workflow dots`

---

## Stage 08 — Landing-page details and shared branding

**Tool:** Codex

**Prompt**

> **Recovered summary — exact original wording unavailable:** Refine the challenge preview icon/progress display, stop sticky navigation from clipping anchored sections, and replace plain branding with a reusable ABTalks logo component.

Exact logo follow-ups:

```text
this is the logo add this
```

```text
change the logo to this
```

### What happened

Anchor offsets, preview presentation, dashboard branding, and a shared `BrandLogo` component were added. Two supplied raster logo assets were evaluated in sequence; the final production asset is the full ABTalks lockup, not the earlier symbol-only image.

### Files affected

- `abtalks/src/components/BrandLogo.tsx`
- `abtalks/public/ab-logo.png`
- `abtalks/src/pages/Home.tsx`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/index.css`

### Result

Brand presentation became consistent across routes. The first supplied logo was replaced by the later full lockup rather than falsely being described as the final asset.

### Related commits

- `0089a0a` — `polish: refine challenge preview icon and progress display`
- `245fbd1` — `fix: prevent sticky header from clipping anchor sections`
- `0486960` — `polish: refine dashboard branding and status consistency`
- `1c9ee62` — `harden brand logo size fallback`
- `8359e43` — `add official AB brand logo`
- `2a8fcdc` — `replace AB logo with full brand lockup`

---

## Stage 09 — Strict hackathon-judge review

**Tool:** Codex

**Prompt**

Exact excerpt from the available judge prompt:

```text
Act like a strict hackathon judge reviewing my ABTalks redesign submission.

PHASE 1 — JUDGE IT
PHASE 2 — FIX IT

Call out EVERYTHING that would reduce the judging score.

Classify findings into:
CRITICAL
IMPORTANT
MINOR POLISH

Fix every reasonable issue that can be corrected safely.
```

The prompt required checking `/`, `/dashboard`, `/day/12`, all dashboard variants, 390px as the primary viewport, other responsive widths, accessibility, and a build/lint pass. It explicitly said not to commit or push.

### What happened

The review drove a broad mobile UI and challenge-flow refinement. Subsequent commits corrected dashboard state consistency and polished Recovery Day and completion states.

### Files affected

- `abtalks/src/pages/Home.tsx`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/pages/Day.tsx`
- `abtalks/src/components/WorkflowSection.tsx`
- `abtalks/src/components/ui/RecoveryPanel.tsx`
- `abtalks/src/utils/streak.ts`

### Result

The judge pass produced real follow-up work rather than a score-only report. No unverified judge scores are preserved in this log.

### Related commits

- `487ec63` — `refine ABTalks mobile UI and challenge flow`
- `489b312` — `fix dashboard state consistency and challenge flow`
- `0af634d` — `polish recovery and completion states`

---

## Stage 10 — Streak logic, missed-day correction, achievements, and day navigation

**Tool:** Codex

**Prompt**

Exact excerpt from the available correction prompt:

```text
Fix the dashboard streak logic, progress-box alignment, and Halfway Hero icon.

Days 1–10 = completed
Day 11 = missed
Day 12 = current day

The dashboard currently shows:
Streak: 10

This is WRONG.

For this state show:
CURRENT STREAK 0
LONGEST STREAK 10

Do NOT use:
currentStreak = completedDays.length
Do NOT use:
currentStreak = currentDay
```

The same prompt required reusable `calculateCurrentStreak` and `calculateLongestStreak` helpers, equal progress-cell geometry, aligned statistic/achievement cards, and the Lucide `Milestone` icon for Halfway Hero.

A related exact navigation prompt required:

```text
On every challenge-day route there must be an obvious way to return to the dashboard.

Add:
← Dashboard

Use Lucide: ArrowLeft
Clicking it must navigate to: /dashboard
Use React Router.

At the end of the challenge workflow/completion state, also show a clear:
Back to Dashboard
button.
```

### Attempt

Earlier dashboard work derived values inconsistently, allowing a historical completed run to appear as the current streak after a missed day.

### Issue found

For `missedPrev`, Days 1–10 were completed and Day 11 missed, but the dashboard could still communicate a current streak of 10 instead of 0.

### Correction prompt

The exact prompt above specified the failing dataset and expected Current/Longest values.

### Result

Reusable streak helpers were corrected, the missed day broke the current streak, the historical longest run remained 10, progress states were normalized, Halfway Hero used `Milestone`, and challenge pages gained header and completion routes back to `/dashboard`.

### Files affected

- `abtalks/src/utils/streak.ts`
- `abtalks/src/data/users.ts`
- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/pages/Day.tsx`
- `abtalks/src/components/ui/ChallengeProgress.tsx`
- `abtalks/src/components/ui/StreakRail.tsx`
- `abtalks/src/components/BrandLogo.tsx`

### Related commit

- `eda2414` — `fix streak logic and challenge navigation`

---

## Stage 11 — Responsive progress-grid correction

**Tool:** Codex

**Prompt**

Exact excerpt from the available prompt:

```text
Fix the dashboard progress visualizations.

There are TWO layout problems right now:

1. The Current Streak / recent-day boxes still overflow or get clipped at smaller widths.
2. The main Challenge Progress section uses only a tiny portion of the available width, leaving a huge empty area on desktop.

Do NOT redesign the entire dashboard.
```

The prompt requested a 7-column mobile recent-day layout, a responsive 60-day grid (approximately 6 mobile, 8 tablet, and 10 desktop columns), equal state geometry, readable day numbers, no horizontal scrolling, and checks at 360px, 390px, 768px, 1024px, and 1440px.

### Attempt

The initial progress visualization used narrow/fixed arrangements. Recent-day cells could clip, while the main 60-day grid occupied too little desktop width.

### Issue found

Fixing state colors did not fix the component geometry: overflow and large unused desktop regions remained.

### Correction prompt

The exact prompt above required real CSS Grid layouts, `min-width: 0`, consistent square cells, and responsive column counts rather than horizontal scrolling.

### Result

The main progress grid became 6 columns on mobile, 8 on tablet, and 10 on desktop; cells retained consistent dimensions and day numbers; state styling no longer changed geometry.

### Files affected

- `abtalks/src/components/ui/ChallengeProgress.tsx`
- `abtalks/src/components/ui/StreakRail.tsx`
- `abtalks/src/index.css`

### Related commit

- `eb4f8a0` — `fix responsive dashboard progress grids`

---

## Stage 12 — Sixty-day grid consolidation and spacing iterations

**Tool:** Codex

**Prompt**

Exact short follow-ups from the available session:

```text
make sure there are 60 of these and make sure to give less spacing
```

```text
make sure to remove this and add spacing in the challenge progress and add streaks too
```

```text
keep challegenge progress andcurrent status together
```

```text
occupy more space and remopve challenmge progress
```

### Attempt

The streak rail was first expanded from 14 to all 60 days with compact spacing.

### Issue found

That created two separate 60-day visualizations and duplicated progress/streak information. After consolidation, the day grid still appeared too small inside the large desktop card, and the “Challenge Progress” label was no longer wanted.

### Correction prompts

The later short prompts above successively requested removal of the duplicate panel, integration of streak values, grouping with Current Status, more grid occupancy, and removal of the redundant heading.

### Result

The separate `StreakRail` component was deleted. Current and longest streak values moved into the shared status area. Current Status and the 60-day grid became one card. The redundant second percentage/bar and heading were removed. Tile sizes grew responsively to use more desktop space while preserving all 60 days and mobile fit.

### Files affected

- `abtalks/src/components/ui/StreakRail.tsx` (deleted)
- `abtalks/src/components/ui/ChallengeProgress.tsx`
- `abtalks/src/components/ui/index.ts`
- `abtalks/src/pages/Dashboard.tsx`

### Related commits

- `7978340` — `show all 60 days in streak grid`
- `7d52776` — `consolidate streak stats into challenge progress`
- `b47aad0` — `group challenge progress with current status`
- `ba4ad54` — `expand dashboard day grid`

---

## Stage 13 — Return-to-home navigation and visible workflow dots

**Tool:** Codex

**Prompt**

Exact prompt:

```text
make sure there is a way i can come bacvk to thi page after i click start building and make sure to colour the dots green like no hiding
```

### What happened

The dashboard sticky header gained an explicit React Router Home control. Challenge pages already returned to Dashboard, creating a visible Day → Dashboard → Home path. All workflow nodes became lime with a small glow.

### Files affected

- `abtalks/src/pages/Dashboard.tsx`
- `abtalks/src/components/WorkflowSection.tsx`

### Result

Rendered navigation was verified from landing page to dashboard and back. The four workflow nodes remained visible at mobile and desktop widths.

### Related commit

- `8ff2952` — `add home return path and highlight workflow dots`

---

## Stage 14 — Production deployment and public hackathon URL

**Tool:** Codex and Vercel CLI

**Prompt**

Exact prompts:

```text
now make it live in vercel
```

```text
make sure the ur link is abtalk-hackathon
```

### Attempt

The project was deployed successfully and initially received the production alias `abtalks-five-theta.vercel.app`. A manual `abtalk-hackathon.vercel.app` alias was then assigned.

### Issue found

Anonymous browser verification showed that the requested alias redirected to Vercel login because SSO deployment protection applied to the manual alias. The alias existed but was not yet a valid public submission URL.

### Correction

The Vercel project was renamed to `abtalk-hackathon`, redeployed, the requested alias was reassigned to the READY deployment, and project SSO protection was disabled so the public hackathon URL did not require Vercel authentication.

### Result

`https://abtalk-hackathon.vercel.app/` and its direct `/dashboard` SPA route were verified anonymously. The landing hero, Start Building control, Home return control, green workflow nodes, and all 60 day cells rendered without mobile overflow.

### Files affected

- `abtalks/.gitignore` (Vercel local metadata exclusion)
- Vercel project configuration (external; no repository file)

### Related commit

- `a43332a` — `ignore local vercel project metadata`

---

## Stage 15 — Final AI-usage-log reconciliation

**Tool:** Codex

**Prompt**

Exact excerpt from the final documentation request:

```text
I need you to prepare the FINAL AI-usage log for my hackathon submission.

DO NOT fabricate prompt history.
DO NOT invent timestamps.
DO NOT invent commits.
DO NOT pretend reconstructed summaries are exact prompts.

If exact wording of a historical prompt is unavailable, clearly label it as:
Recovered summary — exact original wording unavailable

There should ultimately be ONE canonical hackathon AI usage log.
README should link to it.

Do not commit yet.
```

### What happened

The existing log, README, Git history, commit file lists, current application, available Codex attachments, and current session were audited. Unsupported 2025 dates were removed, unverifiable early quotations became recovered summaries, later exact prompts and correction chains were preserved, and the log was moved to the repository root.

### Files affected

- `PROMPTS.md`
- `abtalks/PROMPTS.md` (removed after consolidation)
- `abtalks/README.md`

### Result

One canonical, commit-backed AI usage log now documents both successful stages and meaningful failures without inventing missing evidence. This stage is intentionally uncommitted at the time of writing.

---

## Verification summary

- Verified repository history: `f6d595b` through `a43332a`.
- Verified required routes in source: `/`, `/dashboard`, `/day/:day` (including `/day/12`).
- Verified production URL during the development session: `https://abtalk-hackathon.vercel.app`.
- Verified major implementation areas against changed files and commit messages.
- Preserved failure/correction history for workflow nodes, streak logic, progress overflow/space usage, duplicated progress panels, return navigation, and Vercel access protection.
- Could not reliably recover the verbatim wording or exact AI product for the earliest development prompts; those entries remain clearly labeled recovered summaries.
