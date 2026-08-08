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
    <div className={`relative bg-surface-700/60 border border-border/50 backdrop-blur-sm rounded-xl p-5 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
            <span className="w-3.5 h-3.5 github-icon" aria-hidden="true"></span>
            <span className="font-mono font-medium text-brand-lime-500">DAY {day}</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary leading-tight">{title}</h2>
        </div>
        <span className="px-3 py-1.5 bg-brand-orange-500/15 text-brand-orange-500 text-xs font-mono rounded-lg border border-brand-orange-500/30 flex items-center gap-1">
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
          'bg-danger-500/15 text-danger-500 border border-danger-500/30'
        }`}>
          {difficulty.toUpperCase()}
        </span>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onStart}
        className="group w-full px-6 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 active:scale-[0.98] bg-brand-lime-500 text-surface-950 hover:bg-brand-lime-400 active:bg-brand-lime-600 shadow-glow-lime"
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
              <span className="w-2.5 h-2.5 rounded-full bg-text-muted" aria-hidden="true"></span>
              <span className="text-text-secondary">Not submitted</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3.5 h-3.5 linkedin-icon" aria-hidden="true"></span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-text-muted" aria-hidden="true"></span>
              <span className="text-text-secondary">Not submitted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMission;