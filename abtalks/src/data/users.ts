import type { UserProfile, Achievement } from './types';

// Shared achievements catalog
const allAchievements: Achievement[] = [
  {
    id: 'first-commit',
    name: 'First Commit',
    description: 'Submit proof for your very first day.',
    icon: 'GitBranch',
    unlockedAt: '2024-11-01',
  },
  {
    id: 'week-warrior',
    name: 'Week Warrior',
    description: 'Complete 7 days in a row.',
    icon: 'Flame',
    unlockedAt: '2024-11-07',
  },
  {
    id: 'halfway-hero',
    name: 'Halfway Hero',
    description: 'Reach day 30.',
    icon: 'Trophy',
    unlockedAt: '2024-11-30',
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Achieve a 14‑day streak.',
    icon: 'Zap',
    unlockedAt: undefined,
  },
];

// Helper to compute derived fields
function derive(profile: Partial<UserProfile>): UserProfile {
  const completed = profile.completedDays ?? [];
  const missed = profile.missedDays ?? [];
  const total = 60;
  const completionPercentage = Math.round((completed.length / total) * 100);
  // simple streak calc: consecutive days up to currentDay
  let streak = 0;
  for (let d = profile.currentDay ?? 1; d >= 1; d--) {
    if (completed.includes(d)) streak++;
    else break;
  }
  // longest streak naive
  let longest = 0;
  let temp = 0;
  for (let d = 1; d <= (profile.currentDay ?? 1); d++) {
    if (completed.includes(d)) {
      temp++;
      longest = Math.max(longest, temp);
    } else temp = 0;
  }

  return {
    id: profile.id ?? 'u1',
    name: profile.name ?? 'Student',
    avatar: profile.avatar,
    currentDay: profile.currentDay ?? 1,
    totalDays: total,
    completedDays: completed,
    missedDays: missed,
    currentStreak: streak,
    longestStreak: longest,
    completionPercentage,
    achievements: profile.achievements ?? [],
    standingPercentile: profile.standingPercentile ?? 50,
    githubProofStatus: profile.githubProofStatus ?? 'pending',
    linkedinProofStatus: profile.linkedinProofStatus ?? 'pending',
  };
}

// 1. First day, no streak
export const userFirstDay = derive({
  id: 'u-first',
  name: 'Aarav Sharma',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
  currentDay: 1,
  completedDays: [],
  missedDays: [],
  achievements: [],
  standingPercentile: 95,
  githubProofStatus: 'pending',
  linkedinProofStatus: 'pending',
});

// 2. Missed previous day (day 12 current, day 11 missed)
export const userMissedPrev = derive({
  id: 'u-missed',
  name: 'Priya Nair',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
  currentDay: 12,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // missed 11
  missedDays: [11],
  achievements: [allAchievements[0], allAchievements[1]],
  standingPercentile: 68,
  githubProofStatus: 'verified',
  linkedinProofStatus: 'submitted',
});

// 3. Empty profile / missing avatar
export const userEmptyProfile = derive({
  id: 'u-empty',
  name: 'Rohan Das',
  avatar: undefined,
  currentDay: 5,
  completedDays: [1, 2, 3, 4],
  missedDays: [],
  achievements: [allAchievements[0]],
  standingPercentile: 40,
  githubProofStatus: 'pending',
  linkedinProofStatus: 'pending',
});

// 4. Normal active student (day 12, good streak)
export const userActive = derive({
  id: 'u-active',
  name: 'Meera Iyer',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
  currentDay: 12,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  missedDays: [],
  achievements: [allAchievements[0], allAchievements[1]],
  standingPercentile: 82,
  githubProofStatus: 'verified',
  linkedinProofStatus: 'verified',
});

// Export a map for easy switching
export const userVariants = {
  firstDay: userFirstDay,
  missedPrev: userMissedPrev,
  emptyProfile: userEmptyProfile,
  active: userActive,
} as const;

export type UserVariantKey = keyof typeof userVariants;