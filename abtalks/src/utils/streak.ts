export function calculateCurrentStreak(completedDays: number[]): number {
  if (!completedDays.length) return 0;

  // Sort ascending
  const sorted = [...completedDays].sort((a, b) => a - b);
  let streak = 1;
  let maxStreak = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      streak++;
      if (streak > maxStreak) maxStreak = streak;
    } else {
      streak = 1;
    }
  }

  // The current streak is the length of the trailing consecutive completed days up to the most recent completed day.
  // Determine the most recent completed day (max)
  const maxDay = sorted[sorted.length - 1];
  // Count backwards from maxDay how many consecutive days are present
  let currentStreak = 0;
  let day = maxDay;
  const completedSet = new Set(sorted);
  while (completedSet.has(day)) {
    currentStreak++;
    day--;
  }
  return currentStreak;
}

export function deriveDashboardValues(user: {
  currentDay: number;
  totalDays: number;
  completedDays: number[];
  missedDays: number[];
}) {
  const completedCount = user.completedDays.length;
  const remaining = user.totalDays - user.completedDays.length;
  const streak = calculateCurrentStreak(user.completedDays);
  const completionPercentage = Math.round((user.completedDays.length / user.totalDays) * 100);

  return {
    currentDay: user.currentDay,
    totalDays: user.totalDays,
    completedCount,
    remaining,
    streak,
    completionPercentage,
  };
}