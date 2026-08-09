import React from 'react';
import { CalendarDays, Flame } from 'lucide-react';

interface StreakRailProps {
  currentStreak: number;
  longestStreak: number;
  currentDay: number;
  completedDays: number[];
  missedDays: number[];
  className?: string;
}

export const StreakRail: React.FC<StreakRailProps> = ({
  currentStreak,
  longestStreak,
  currentDay,
  completedDays,
  missedDays,
  className = '',
}) => {
  // Show last 14 days for the rail
  const daysToShow = 14;
  const startDay = Math.max(1, currentDay - daysToShow + 1);

  return (
    <div className={className}>
      {/* Header */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="min-w-0 min-h-28 rounded-lg border border-border/50 bg-surface-800/50 p-4 flex flex-col justify-center">
          <p className="text-xs text-text-muted uppercase tracking-wider">Current Streak</p>
          <div className="h-10 flex items-center gap-2">
            <Flame className="w-5 h-5 shrink-0 text-brand-orange-500" aria-hidden="true" />
            <p className="text-3xl leading-none font-bold mono tabular-nums text-white">{currentStreak}</p>
          </div>
          <p className="text-xs text-text-muted">Days Straight</p>
        </div>
        <div className="min-w-0 min-h-28 rounded-lg border border-border/50 bg-surface-800/50 p-4 flex flex-col justify-center">
          <p className="text-xs text-text-muted uppercase tracking-wider">Longest Streak</p>
          <div className="h-10 flex items-center">
            <p className="text-3xl leading-none font-bold mono tabular-nums text-text-secondary">{longestStreak}</p>
          </div>
          <p className="text-xs text-text-muted">Days Straight</p>
        </div>
      </div>

      {/* Streak Rail - 3D cells */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1.5 min-w-max">
          {Array.from({ length: 14 }, (_, i) => {
            const dayNum = startDay + i;
            const isCompleted = completedDays.includes(dayNum);
            const isMissed = missedDays.includes(dayNum);
            const isToday = dayNum === currentDay;
            const isFuture = dayNum > currentDay;

            const getDayClass = () => {
              if (isFuture) return 'streak-cell-3d bg-surface-700/30';
              if (isCompleted) return 'streak-cell-3d completed';
              if (isMissed) return 'streak-cell-3d missed';
              if (isToday) return 'streak-cell-3d today';
              return 'streak-cell-3d bg-surface-700/50';
            };

            const getContent = () => {
              if (isCompleted) return '✓';
              if (isMissed) return '✕';
              if (isToday) return '●';
              return dayNum.toString();
            };

            return (
              <div
                key={dayNum}
                className={`relative w-10 h-10 rounded flex items-center justify-center text-xs font-medium mono transition-all duration-fast ${getDayClass()}`}
                title={`Day ${dayNum}${isToday ? ' (Today)' : ''}`}
              >
                {getContent()}
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <CalendarDays className="w-4 h-4 text-text-muted" aria-hidden="true" />
          <span>{completedDays.length} completed</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span className="mono font-medium text-brand-lime-500">
            {Math.round((completedDays.length / currentDay) * 100)}%
          </span>
          <span className="text-text-muted">completion rate</span>
        </div>
      </div>
    </div>
  );
};

export default StreakRail;
