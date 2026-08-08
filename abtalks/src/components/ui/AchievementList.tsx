import React from 'react';
import { Trophy, Flame, Zap, ShieldCheck, Lock, Award } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

interface AchievementListProps {
  achievements: Achievement[];
  className?: string;
}

const iconComponents: Record<string, React.ReactNode> = {
  GitBranch: <Trophy className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Trophy: <Award className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

interface AchievementListProps {
  achievements: Achievement[];
  className?: string;
}

export const AchievementList: React.FC<AchievementListProps> = ({
  achievements,
  className = '',
}) => {
  const allAchievements = [
    { id: 'first-commit', name: 'First Commit', description: 'Submit proof for your very first day.', icon: 'GitBranch' },
    { id: 'week-warrior', name: 'Week Warrior', description: 'Complete 7 days in a row.', icon: 'Flame' },
    { id: 'halfway-hero', name: 'Halfway Hero', description: 'Reach day 30.', icon: 'Trophy' },
    { id: 'streak-master', name: 'Streak Master', description: 'Achieve a 14-day streak.', icon: 'Zap' },
    { id: 'streak-restored', name: 'Streak Restored', description: 'Recovered a missed day through recovery.', icon: 'ShieldCheck' },
  ];

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Achievements</p>
          <p className="text-lg font-bold text-text-primary">{achievements.length} / {allAchievements.length}</p>
        </div>
      </div>

      <div className="space-y-2">
        {allAchievements.map((achievement) => {
          const isUnlocked = achievements.some(a => a.id === achievement.id);
          const Icon = iconComponents[achievement.icon] || <Trophy className="w-5 h-5" />;
          const unlockedAt = achievements.find(a => a.id === achievement.id)?.unlockedAt;

          return (
            <div
              key={achievement.id}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-fast ${
                isUnlocked
                  ? 'bg-surface-700/60 border border-brand-lime-500/20'
                  : 'bg-surface-600/40 border border-border'
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  isUnlocked
                    ? 'bg-brand-lime-500/15 text-brand-lime-500'
                    : 'bg-surface-600/50 text-text-muted'
                }`}
                aria-hidden="true"
              >
                {Icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className={`font-semibold ${isUnlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                    {achievement.name}
                  </h4>
                  {isUnlocked && unlockedAt && (
                    <span className="text-xs text-text-muted mono bg-surface-600 px-2 py-0.5 rounded">
                      {new Date(unlockedAt).toLocaleDateString()}
                    </span>
                  )}
                  {!isUnlocked && (
                    <span className="text-xs text-text-muted bg-surface-600 px-2 py-0.5 rounded">Locked</span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-1">{achievement.description}</p>
              </div>
              {!isUnlocked && (
                <Lock className="w-5 h-5 text-text-muted" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementList;