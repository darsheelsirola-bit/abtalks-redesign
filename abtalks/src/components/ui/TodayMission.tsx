import React from 'react';
import { Badge } from './Badge';

interface TodayMissionProps {
  day: number;
  title: string;
  description: string;
  estimatedMinutes: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  isCompleted: boolean;
  onStart: () => void;
  className?: string;
}

export const TodayMission: React.FC<TodayMissionProps> = ({
  day,
  title,
  description,
  estimatedMinutes,
  difficulty,
  tags,
  isCompleted,
  onStart,
  className = '',
}) => {
  return (
    <div className={`card-floating p-5 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
            <span className="w-3.5 h-3.5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'7\' fill=\'%2378e800\'/%3E%3C/svg%3E")' }} aria-hidden="true"></span>
            <span className="font-mono font-medium text-brand-lime-500">DAY {day}</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary leading-tight">{title}</h2>
        </div>
        <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-mono rounded-lg border border-white/20 flex items-center gap-1">
          <span style={{fontFamily: 'monospace'}}>{estimatedMinutes} MIN</span>
        </span>
      </div>

      {/* Description */}
      <p className="text-text-secondary mb-4 line-clamp-2">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" size="xs">{tag}</Badge>
        ))}
      </div>

      {/* Difficulty */}
      <div className="flex items-center gap-2 mb-5">
        <span className={`px-3 py-1 rounded-full text-xs font-medium mono ${
          difficulty === 'easy' ? 'bg-brand-lime-500/15 text-brand-lime-500 border border-brand-lime-500/30' :
          difficulty === 'medium' ? 'bg-brand-orange-500/15 text-brand-orange-500 border border-brand-orange-500/30' :
          'bg-red-900/30 text-red-300 border border-red-800'
        }`}>
          {difficulty.toUpperCase()}
        </span>
      </div>

      {/* CTA - Primary button with depth */}
      <button
        type="button"
        onClick={onStart}
        className="group w-full px-6 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] active:translate-y-0.5 bg-white text-black hover:bg-gray-200 active:bg-gray-300 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_2px_4px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-fast"
      >
        <span className="flex items-center justify-center gap-2">
          {isCompleted ? (
            <>
              <span className="w-5 h-5" aria-hidden="true">↗</span>
              Continue Building
            </>
          ) : (
            <>
              <span className="w-5 h-5" aria-hidden="true">🎯</span>
              Start Building
            </>
          )}
        </span>
      </button>

      {/* Proof Status */}
      <div className="mt-5 pt-4 border-t border-border/50">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3.5 h-3.5 github-icon" aria-hidden="true"></span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-surface-600" aria-hidden="true"></span>
              <span className="text-text-secondary">Not submitted</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3.5 h-3.5 linkedin-icon" aria-hidden="true"></span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-surface-600" aria-hidden="true"></span>
              <span className="text-text-secondary">Not submitted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMission;