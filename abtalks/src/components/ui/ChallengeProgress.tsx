import React from 'react';
import { CircleCheck, CircleX } from 'lucide-react';

interface ChallengeProgressProps {
  currentDay: number;
  completedDays: number[];
  missedDays: number[];
  totalDays: number;
  className?: string;
}

// 60 days = ~8.5 weeks. Show as 9 weeks x 7 days = 63 cells (3 buffer)
const WEEKS = 9;
const DAYS_PER_WEEK = 7;

export const ChallengeProgress: React.FC<ChallengeProgressProps> = ({
  currentDay,
  completedDays,
  missedDays,
  totalDays,
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
        return 'bg-brand-lime-500';
      case 'today':
        return 'bg-surface-700 ring-2 ring-brand-lime-500 animate-pulse-subtle';
      case 'missed':
        return 'bg-danger-500/20 border border-danger-500/50';
      case 'upcoming':
        return 'bg-surface-600/50';
      default:
        return 'bg-surface-600/30';
    }
  };

  const getDayContent = (state: string) => {
    switch (state) {
      case 'completed':
        return <CircleCheck className="w-3 h-3 text-surface-950" aria-hidden="true" />;
      case 'missed':
        return <CircleX className="w-3 h-3 text-danger-500" aria-hidden="true" />;
      case 'today':
        return <span className="font-mono font-semibold text-brand-lime-500 text-[10px]">●</span>;
      default:
        return null;
    }
  };

  const weeks = Array.from({ length: WEEKS }, (_, w) => {
    const days = Array.from({ length: DAYS_PER_WEEK }, (_, d) => {
      const dayNum = w * DAYS_PER_WEEK + d + 1;
      if (dayNum > totalDays) return null;
      const state = getDayState(dayNum);
      return (
        <button
          key={dayNum}
          type="button"
          disabled
          className={`relative w-7 h-7 rounded flex items-center justify-center transition-all duration-fast ${getDayClass(state)}`}
          aria-label={`Day ${dayNum}: ${state}`}
        >
          {getDayContent(state)}
        </button>
      );
    });
    return (
      <div key={w} className="flex items-center gap-1.5">
        <span className="w-6 text-right text-text-muted mono text-xs font-medium pr-1">
          W{w + 1}
        </span>
        <div className="flex gap-1.5">{days}</div>
      </div>
    );
  });

  const completedCount = completedDays.length;

  return (
    <div className={className}>
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
      <div className="space-y-1.5" role="img" aria-label={`${completedCount} of ${totalDays} days completed`}>
        {weeks.map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-6 text-right text-text-muted mono text-xs font-medium pr-1">
              W{i + 1}
            </span>
            <div className="flex gap-1.5">
              {Array.from({ length: DAYS_PER_WEEK }, (_, d) => {
                const dayNum = i * DAYS_PER_WEEK + d + 1;
                if (dayNum > totalDays) return <div key={dayNum} className="w-7 h-7" />;
                const state = getDayState(dayNum);
                return (
                  <button
                    key={dayNum}
                    type="button"
                    disabled
                    className={`relative w-7 h-7 rounded flex items-center justify-center transition-all duration-fast ${getDayClass(state)}`}
                    aria-label={`Day ${dayNum}: ${state}`}
                  >
                    {getDayContent(state)}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
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
