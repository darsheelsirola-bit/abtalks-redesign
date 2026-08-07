import { ChallengeDay } from './types';

export const challenges: ChallengeDay[] = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1;
  // Base template; day 12 overridden later
  return {
    day,
    title: `Day ${day}: Build a ${['React', 'Node', 'Python', 'TypeScript', 'CSS'][day % 5]} mini‑project`,
    description: `Complete a small coding exercise focusing on ${['components', 'API routes', 'data structures', 'type safety', 'layout'][day % 5]}.`,
    difficulty: (['easy', 'medium', 'hard'] as const)[day % 3],
    estimatedMinutes: 30 + (day % 4) * 15,
    tags: ['practice', 'daily'],
  };
});

// Override day 12 with a realistic college‑level challenge
challenges[11] = {
  day: 12,
  title: 'Day 12: REST API with Express & TypeScript',
  description:
    'Create a tiny RESTful API for a "Study Tracker" app. Implement CRUD endpoints for "sessions" (subject, duration, date). Use Express, TypeScript, and an in‑memory array for storage. Add input validation with Zod and return proper HTTP status codes.',
  difficulty: 'medium',
  estimatedMinutes: 60,
  tags: ['backend', 'express', 'typescript', 'validation'],
};