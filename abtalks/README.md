# ABTalks Vibe Code Hackathon - Problem Statement 1

## Project Overview
Redesign ABTalks – a mobile-first React application scaffolded with Vite, TypeScript, Tailwind CSS, and React Router.

## Tech Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS
- React Router v6
- Lucide React (icons)

## Routes
- `/` – Home
- `/dashboard` – Dashboard
- `/day/:day` – Day detail (e.g., `/day/12`)

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:5173 (or the port shown) and test the routes.

## Project Structure
```
src/
  components/   # Reusable UI components
  pages/        # Route components (Home, Dashboard, Day)
  data/         # Mock JSON/TS data
  utils/        # Helper functions
  App.tsx       # Router setup
  main.tsx      # Entry point
  index.css     # Tailwind directives
```

## Deployment
Deployable on Vercel (zero-config for Vite + React).

## Notes
- Designed mobile‑first for 390px width.
- No backend, database, or authentication – mocked data only.