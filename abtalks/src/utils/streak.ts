export function calculateCurrentStreak(
  completedDays: number[],
  missedDays: number[],
  currentDay: number,
): number {
  if (currentDay < 1 || completedDays.length === 0) return 0;

  const completed = new Set(completedDays);
  const missed = new Set(missedDays);
  const anchorDay = completed.has(currentDay) ? currentDay : currentDay - 1;

  if (anchorDay < 1 || missed.has(anchorDay) || !completed.has(anchorDay)) return 0;

  let streak = 0;
  for (let day = anchorDay; day >= 1; day--) {
    if (missed.has(day) || !completed.has(day)) break;
    streak++;
  }

  return streak;
}

export function calculateLongestStreak(completedDays: number[]): number {
  const sortedDays = [...new Set(completedDays)]
    .filter(day => day >= 1)
    .sort((a, b) => a - b);

  let longest = 0;
  let run = 0;
  let previousDay = 0;

  for (const day of sortedDays) {
    run = day === previousDay + 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
    previousDay = day;
  }

  return longest;
}

export function deriveDashboardValues(user: {
  currentDay: number;
  totalDays: number;
  completedDays: number[];
  missedDays: number[];
}) {
  const completedCount = user.completedDays.length;
  const remaining = user.totalDays - user.completedDays.length;
  const streak = calculateCurrentStreak(user.completedDays, user.missedDays, user.currentDay);
  const longestStreak = calculateLongestStreak(user.completedDays);
  const completionPercentage = Math.round((user.completedDays.length / user.totalDays) * 100);

  return {
    currentDay: user.currentDay,
    totalDays: user.totalDays,
    completedCount,
    remaining,
    streak,
    longestStreak,
    completionPercentage,
  };
}
