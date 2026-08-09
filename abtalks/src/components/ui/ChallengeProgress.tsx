import React from 'react';
import { CircleCheck, CircleX, Flame } from 'lucide-react';

interface ChallengeProgressProps {
  currentDay: number;
  completedDays: number[];
  missedDays: number[];
  totalDays: number;
  currentStreak: number;
  longestStreak: number;
  className?: string;
}

export const ChallengeProgress: React.FC<ChallengeProgressProps> = ({
  currentDay,
  completedDays,
  missedDays,
  totalDays,
  currentStreak,
  longestStreak,
  className = '',
}) => {
  const isCompleted = (day: number) => completedDays.includes(day);
  const isMissed = (day: number) => missedDays.includes(day);
  const isToday = (day: number) => day === currentDay;
  const isUpcoming = (day: number) => day > currentDay;

  const getDayState = (day: number) => {
    if (day > totalDays) return 'empty';
    if (isCompleted(day)) return 'completed';
    if (isToday(day)) return 'today';
    if (isMissed(day)) return 'missed';
    if (isUpcoming(day)) return 'upcoming';
    return 'empty';
  };

  const getDayClass = (state: string) => {
    switch (state) {
      case 'completed':
        return 'bg-brand-lime-500 border-brand-lime-500';
      case 'today':
        return 'bg-surface-700 border-brand-lime-500 shadow-[0_0_0_1px_rgba(120,232,0,0.45)] animate-pulse-subtle';
      case 'missed':
        return 'bg-danger-500/20 border-danger-500/50';
      case 'upcoming':
        return 'bg-surface-600/50 border-surface-600/20';
      default:
        return 'bg-surface-600/30 border-surface-600/20';
    }
  };

  const getDayContent = (state: string, day: number) => {
    switch (state) {
      case 'completed':
        return <>
          <span className="font-mono text-xs font-bold tabular-nums text-surface-950">{day}</span>
          <CircleCheck className="absolute right-1 top-1 w-2.5 h-2.5 text-surface-950" aria-hidden="true" />
        </>;
      case 'missed':
        return <>
          <span className="font-mono text-xs font-semibold tabular-nums text-red-300">{day}</span>
          <CircleX className="absolute right-1 top-1 w-2.5 h-2.5 text-danger-500" aria-hidden="true" />
        </>;
      case 'today':
        return <>
          <span className="font-mono text-xs font-bold tabular-nums text-brand-lime-500">{day}</span>
          <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-brand-lime-500" aria-hidden="true" />
        </>;
      default:
        return <span className="font-mono text-xs tabular-nums text-text-muted">{day}</span>;
    }
  };

  const completedCount = completedDays.length;

  return (
    <div className={`w-full min-w-0 ${className}`}>
      <div className="w-full max-w-[850px] min-w-0 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Challenge Progress</p>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold mono text-brand-lime-500">{completedCount}</span>
            <span className="text-text-muted">/ {totalDays}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold mono text-text-primary">{Math.round((completedCount / totalDays) * 100)}%</p>
          <p className="text-xs text-text-muted">Complete</p>
        </div>
      </div>

      {/* Streak summary */}
      <div className="mb-5 grid grid-cols-2 gap-3">
        <div className="flex min-h-20 min-w-0 items-center gap-3 rounded-lg border border-border/50 bg-surface-800/50 px-4 py-3">
          <Flame className="h-5 w-5 shrink-0 text-brand-orange-500" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Current streak</p>
            <p className="mono text-xl font-bold leading-tight text-white">
              {currentStreak} <span className="text-xs font-normal text-text-muted">days</span>
            </p>
          </div>
        </div>
        <div className="flex min-h-20 min-w-0 items-center px-4 py-3 rounded-lg border border-border/50 bg-surface-800/50">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-text-muted">Longest streak</p>
            <p className="mono text-xl font-bold leading-tight text-text-primary">
              {longestStreak} <span className="text-xs font-normal text-text-muted">days</span>
            </p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="relative h-2 bg-surface-600 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out"
            style={{ width: `${Math.round((completedCount / totalDays) * 100)}%` }}
          />
          {/* Today marker */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-2.5 bg-brand-lime-500 animate-pulse-subtle"
            style={{ left: `${Math.min(((currentDay - 1) / totalDays) * 100, 100)}%` }}
            aria-hidden="true"
          />
        </div>
        <div className="flex justify-between text-xs text-text-muted mono">
          <span>Day 1</span>
          <span>Day {totalDays}</span>
        </div>
      </div>

      {/* 60-day grid */}
      <div
        className="grid w-fit max-w-full mx-auto grid-cols-[repeat(6,minmax(0,2.75rem))] gap-2.5 md:grid-cols-[repeat(8,minmax(0,2.75rem))] md:gap-3 lg:grid-cols-[repeat(10,minmax(0,2.75rem))] lg:gap-3.5"
        role="img"
        aria-label={`${completedCount} of ${totalDays} days completed`}
      >
        {Array.from({ length: totalDays }, (_, dayIndex) => {
          const dayNum = dayIndex + 1;
          const state = getDayState(dayNum);
          return (
            <button
              key={dayNum}
              type="button"
              disabled
              className={`relative aspect-square w-11 min-w-0 box-border rounded-md border flex items-center justify-center transition-colors duration-fast ${getDayClass(state)}`}
              aria-label={`Day ${dayNum}: ${state}`}
            >
              {getDayContent(state, dayNum)}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-3 h-3 rounded bg-brand-lime-500" aria-hidden="true"></span>
          Completed
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-3 h-3 rounded bg-surface-700 ring-2 ring-brand-lime-500 animate-pulse-subtle" aria-hidden="true"></span>
          Today
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-3 h-3 rounded bg-danger-500/20 border border-danger-500/50" aria-hidden="true"></span>
          Missed
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-3 h-3 rounded bg-surface-600/50" aria-hidden="true"></span>
          Upcoming
        </div>
      </div>
      </div>
    </div>
  );
};

// Subtle pulse animation for today marker
const style = document.createElement('style');
style.textContent = `
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}
`;
document.head.appendChild(style);
