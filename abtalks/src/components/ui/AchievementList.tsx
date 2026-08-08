import React from 'react';

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

export const AchievementList: React.FC<AchievementListProps> = ({
  achievements,
  className = '',
}) => {
  const allAchievements = [
    { id: 'first-commit', name: 'First Commit', description: 'Submit proof for your very first day.', icon: 'Trophy', unlockedAt: '2024-11-01' },
    { id: 'week-warrior', name: 'Week Warrior', description: 'Complete 7 days in a row.', icon: 'Flame', unlockedAt: '2024-11-07' },
    { id: 'halfway-hero', name: 'Halfway Hero', description: 'Reach day 30.', icon: 'Trophy', unlockedAt: '2024-11-30' },
    { id: 'streak-master', name: 'Streak Master', description: 'Achieve a 14-day streak.', icon: 'Zap', unlockedAt: undefined },
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
          const unlockedAt = achievements.find(a => a.id === achievement.id)?.unlockedAt;

          return (
            <div
              key={achievement.id}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-fast ${isUnlocked
                ? 'card-raised border border-brand-lime-500/20 shadow-raised'
                : 'card-recessed border border-border/50'}`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  isUnlocked
                    ? 'bg-brand-lime-500/15 text-brand-lime-500 shadow-[0_0_12px_rgba(120,232,0,0.2)]'
                    : 'card-recessed text-text-muted'
                }`}
                aria-hidden="true"
              >
                {achievement.icon === 'Trophy' && <span className="text-xl">🏆</span>}
                {achievement.icon === 'Flame' && <span className="text-xl">🔥</span>}
                {achievement.icon === 'Zap' && <span className="text-xl">⚡</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className={`font-semibold ${isUnlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                    {achievement.name}
                  </h4>
                  {isUnlocked && unlockedAt && (
                    <span className="text-xs text-text-muted mono card-recessed px-2 py-0.5 rounded">
                      {new Date(unlockedAt).toLocaleDateString()}
                    </span>
                  )}
                  {!isUnlocked && (
                    <span className="text-xs text-text-muted card-recessed px-2 py-0.5 rounded">Locked</span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-1">{achievement.description}</p>
              </div>
              {!isUnlocked && (
                <span className="w-5 h-5 text-text-muted" aria-hidden="true">🔒</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementList;