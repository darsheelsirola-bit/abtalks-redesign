import React from 'react';
import { CalendarDays } from 'lucide-react';

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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.2)]">
            <span className="text-xl" aria-hidden="true">🔥</span>
          </div>
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider">Current Streak</p>
            <p className="text-3xl font-bold mono text-white">{currentStreak}</p>
            <p className="text-xs text-text-muted">Days Straight</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-muted uppercase tracking-wider">Longest</p>
          <p className="text-xl font-bold mono text-text-secondary">{longestStreak}</p>
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