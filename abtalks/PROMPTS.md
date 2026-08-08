# PROMPTS.md

This file logs the AI prompts used during the ABTalks Vibe Code Hackathon for Problem Statement 1 (Redesign ABTalks).

**Purpose:** Keep a chronological record of prompts given to the AI assistant to aid reproducibility, review, and learning.

---

## 2025‑08‑08 – Project scaffolding
**User:** "We are entering the ABTalks Vibe Code Hackathon… Create project scaffold, React Router setup, three empty route components, global CSS, sensible folders, README.md, PROMPTS.md… Do NOT design the screens yet."
**Result:** Created Vite + React + TS project, installed Tailwind, React Router, Lucide, added folder structure `src/{pages,components,ui,data,utils}`, empty `Home`, `Dashboard`, `Day` components, basic `App.tsx` with routes, placeholder `README.md` and `PROMPTS.md`.

---

## 2025‑08‑08 – Design system foundation
**User:** "Create a coherent design system: colors, typography, spacing, border radius, surface hierarchy, shadows, button variants, input styles, badges, progress indicators, mobile navigation pattern… Do not over‑componentize."
**Result:** Extended `tailwind.config.js` with custom palette (primary teal, neutral grays, semantic colors), type scale, spacing, radii, shadows, transitions. Added primitive components under `src/components/ui/`: `Button`, `Input`/`Textarea`, `Badge`, `Progress` (linear + circular), `Card` (with sub‑components), `BottomNav`. Exported via barrel file.

---

## 2025‑08‑08 – Mock data
**User:** "Create realistic mocked data for the ABTalks challenge… student name, avatar, current day, 60 total days, completed/missed days, streaks, completion %, achievements, standing, today's task, day‑12 task, GitHub/LinkedIn proof status. Provide four variants for edge cases."
**Result:** Added `src/data/types.ts`, `challenges.ts` (60 days, day 12 overridden with Express + TS REST API), `users.ts` with four variants (`firstDay`, `missedPrev`, `emptyProfile`, `active`) and a `userVariants` map for easy switching.

---

## 2025‑08‑08 – Landing page (`/`)
**User:** "Build only the landing page at `/`. Mobile‑first at 390 px. Explain product in 5 s, hero, daily loop, day‑12 preview, trust stats, day 1→30→60 growth table, final CTA. No carousel, no stock illustrations."
**Result:** Implemented `Home.tsx` with sticky header, hero headline, two CTAs, 4‑step daily‑loop cards, day‑12 challenge card with proof badges & progress bar, 4 stat cards (illustrative), scrollable growth table, final CTA, minimal footer. Used design‑system primitives.

---

## 2025‑08‑08 – Dashboard (`/dashboard`)
**User:** "Build only the student dashboard at `/dashboard`. Prioritise: today, streak, progress, completion, standing/achievements. Primary CTA → `/day/12`. Compact header, today card with task title, time, difficulty, Start/Continue button, proof status. Show streak, challenge day, progress bar, 7‑day mini timeline, standing circular progress, achievements, missed‑day banner."
**Result:** Built `Dashboard.tsx` using `userVariants.active`. Included all requested sections, responsive grid for stats, progress card with timeline, standing/achievements grid, conditional missed‑day banner.

---

## 2025‑08‑08 – Recovery Day feature
**User:** "Add a Recovery Day system for missed days. Rules: show non‑punitive banner when yesterday missed; streak paused; to restore complete today’s challenge, submit both proofs, add ≥20‑char reflection; 48 h window. Show steps, CTA, success badge. Keep normal dashboard unchanged unless missed‑day state active."
**Result:** Added recovery state machine in `Dashboard.tsx`. Banner appears only for `missedPrev` variant. Three step checkboxes, inline reflection input, ghost proof‑submit buttons, primary CTA enables when all steps satisfied, success UI with streak increment and “Streak Restored” badge.

---

## 2025‑08‑08 – Day‑12 detail page (`/day/12`)
**User:** "Build the complete Challenge Day experience at `/day/12`. Show task title, difficulty, time, description, learning objectives, acceptance checklist, hint. GitHub proof URL field with validation, mock parsed commit info on success. LinkedIn proof URL field. Complete button enabled only when both proofs submitted. Use local state only."
**Result:** Created `Day.tsx` with top bar (back, day 12/60, progress), task card, two proof cards each with input + submit button (pulse while validating, fade‑in success), completion CTA disabled until both successes, completion screen with celebration.

---

## 2025‑08‑08 – First‑day edge case & dev variant switcher
**User:** "Implement first‑day edge case: zero streak, no achievements, no missed days, possibly no avatar. UI must be welcoming, focus on starting Day 1. Add dev‑only dropdown to switch mock variant via query param."
**Result:** Added `isFirstDay` flag, conditional copy (“Start streak”), hidden percentile/standing, encouraging streak card, “Complete Day 1 to unlock…” card. Added `useSearchParams`‑driven dropdown (wrapped in `import.meta.env.DEV`) to switch `userVariants`.

---

## 2025‑08‑08 – Empty‑profile handling
**User:** "Improve empty‑profile handling across app: missing avatar, missing optional fields, no achievements, no ranking, no LinkedIn/GitHub proof. No broken images, no ‘undefined’, no empty boxes."
**Result:** Avatar fallback to initials already present. Added safe fallbacks for proof status (`?? 'pending'`), conditional rendering of standing card only when `percentile>0`, empty‑state badges for achievements, removed stray “undefined” strings.

---

## 2025‑08‑08 – Micro‑interactions
**User:** "Add restrained micro‑interactions: progress updates, button press feedback, proof validation pulse, success fade‑in, achievement badge reveal, recovery day state, expandable hint. Respect prefers‑reduced‑motion."
**Result:** Global CSS keyframes `fadeInUp`, `pulseSoft` + reduced‑motion media query. Button base adds `active:scale-[0.98]`. Proof submit buttons pulse while validating. Success blocks (parsed commit, “Proof recorded”, recovery badge, completion screen) use `animate-fade-in-up`.

---

## 2025‑08‑08 – Screenshot‑oriented polish
**User:** "Final screenshot review at 390 px for `/`, `/dashboard`, `/day/12`. Fix horizontal scroll, clipped text, tiny fonts, contrast, button cutoff, safe‑area padding, hierarchy, dev UI leakage."
**Result:** Added `overflow-x-hidden` and `pb-[env(safe-area-inset-bottom)]` to page roots. Hid dev variant selector in production. Wired “See day 12 challenge” button. Ensured no overflow, proper spacing.

---

## 2025‑08‑08 – Responsive enhancements
**User:** "Improve tablet/desktop layouts without breaking 390 px. Use max‑width containers, dashboard columns, day page two‑column, landing richer whitespace."
**Result:** Changed container max‑width to `max-w-5xl` with `lg:px-8 lg:py-8`. Dashboard: progress + standing side‑by‑side on `lg`. Day page: task left, proofs/cta right on `lg`. Landing: larger vertical rhythm on `lg`.

---

## 2025‑08‑08 – Accessibility audit
**User:** "Audit semantic HTML, heading hierarchy, form labels, focus, keyboard, button names, link purpose, contrast, icons, reduced motion, input error messaging, progress ARIA, touch targets. Fix genuine issues."
**Result:** Added `id`s to GitHub/LinkedIn hint paragraphs and linked via `aria-describedby` on inputs. Verified headings, landmarks, focus rings, reduced‑motion guard, progress `role="progressbar"` / `role="img"`, contrast AA, touch targets ≥44 px. No console errors.

---

## 2025‑08‑08 – Production code review
**User:** "Run type‑check, lint, fix TS errors, React warnings, dead code, unused imports, brittle state, unnecessary deps, giant components, hard‑coded values, invalid links, console.log, naming, performance, a11y regressions."
**Result:** `npm run build` passes. Removed unused `void setSearchParams` hack, renamed to `_setSearchParams`. No unused imports, no dead code, no console logs. All dependencies justified. Bundle ~277 kB gz.

---

## 2025‑08‑08 – Hackathon README
**User:** "Create polished README.md for submission with required sections."
**Result:** Added comprehensive `README.md` covering problem, solution, Recovery Day, features, routes, edge cases, stack, run/build, design decisions, AI‑assisted development note.

---

*End of log.*