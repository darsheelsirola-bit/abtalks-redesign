import React, { useState } from 'react';
import { ChallengeProgress } from '@/components/ui/ChallengeProgress';
import { StreakRail } from '@/components/ui/StreakRail';
import { RecoveryPanel } from '@/components/ui/RecoveryPanel';
import { userVariants, type UserVariantKey } from '@/data/users';
import { challenges } from '@/data/challenges';
import { Flame } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { BrandLogo } from '@/components/BrandLogo';

const Dashboard: React.FC = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const variantParam = searchParams.get('variant');
  const variant: UserVariantKey = variantParam && variantParam in userVariants ? variantParam as UserVariantKey : 'active';
  const user = userVariants[variant];
  const todayChallenge = challenges[user.currentDay - 1];

  // Check if yesterday was missed
  const yesterday = user.currentDay - 1;
  const isYesterdayMissed = user.missedDays.includes(yesterday);

  const completedCount = user.completedDays.length;
  const missedCount = user.missedDays.length;
  const streak = user.currentStreak;
  const longest = user.longestStreak;
  const percentile = user.standingPercentile;

  // Derived values for consistency
  const displayedDaysBuilt = user.currentDay;
  const displayedRemaining = user.totalDays - user.currentDay;
  const displayedStreak = user.currentStreak;

  const isFirstDay = user.currentDay === 1 && completedCount === 0 && streak === 0;

  // Mock recovery state
  interface RecoveryState {
    challengeCompleted: boolean;
    proofSubmitted: boolean;
    reflection: string;
    isSubmitted: boolean;
  }

  const [recovery, setRecovery] = useState<RecoveryState>({
    challengeCompleted: user.completedDays.includes(user.currentDay),
    proofSubmitted: false,
    reflection: '',
    isSubmitted: false,
  });

  const [showRecovery, setShowRecovery] = useState(isYesterdayMissed && !recovery.isSubmitted);

  const canRecover = recovery.challengeCompleted && recovery.proofSubmitted && recovery.reflection.trim().length >= 20;

  const handleRecoverySubmit = () => {
    if (canRecover && !recovery.isSubmitted) {
      setRecovery(prev => ({ ...prev, isSubmitted: true }));
      setShowRecovery(false);
    }
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as UserVariantKey;
    _setSearchParams({ variant: newVariant });
  };

  return (
    <div className="page">
      {/* Compact Header with depth */}
      <header className="sticky top-0 z-30 bg-surface-900/80 backdrop-blur-sm border-b border-border-subtle shadow-ambient">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <BrandLogo size="md" showText />
            <div className="hidden sm:block text-text-secondary">
              <span className="font-mono font-medium tabular-nums">DAY {user.currentDay} / {user.totalDays}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dev variant selector (only in development) */}
            {import.meta.env.DEV && (
              <select
                value={variant}
                onChange={handleVariantChange}
                className="text-xs text-text-secondary bg-surface-800 border border-border rounded px-2 py-1"
                aria-label="Select mock user variant"
              >
                {Object.entries(userVariants).map(([key, u]) => (
                  <option key={key} value={key}>{u.name} – Day {u.currentDay}</option>
                ))}
              </select>
            )}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-750 rounded-lg border border-border/30 shadow-raised">
                <Flame className="w-4 h-4 text-brand-orange-500" aria-hidden="true" />
                <span className="font-mono font-bold tabular-nums text-brand-orange-500">
                  {isFirstDay ? '—' : displayedStreak}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-4 space-y-6">
        {/* Recovery Panel */}
        <RecoveryPanel
          isVisible={showRecovery}
          missedDay={yesterday}
          currentStreak={streak}
          onRecover={handleRecoverySubmit}
          onDismiss={() => setShowRecovery(false)}
        />

        {/* Primary Status Band - Floating panel */}
        <div className="card-floating p-5 animate-slide-up-fade">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="min-w-0">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Current Status</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold mono text-brand-lime-500">DAY {user.currentDay}</span>
                <span className="text-text-secondary hidden sm:inline">of {user.totalDays}</span>
              </div>
              <p className="text-sm text-text-muted mt-1">
                {displayedDaysBuilt} days built. {displayedRemaining} to go.
              </p>
            </div>
            <div className="flex-shrink-0 text-right hidden sm:block">
              <p className="text-2xl font-bold mono text-brand-lime-500">{user.completionPercentage}%</p>
              <p className="text-xs text-text-muted">Complete</p>
            </div>
          </div>

          {/* Progress Rail - 3D */}
          <div className="relative h-2.5 bg-surface-700 rounded-full overflow-hidden mb-4 shadow-inner-deep">
            <div
              className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_8px_rgba(120,232,0,0.3)]"
              style={{ width: `${user.completionPercentage}%` }}
            />
            {/* Today marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-brand-lime-500 animate-pulse-subtle shadow-[0_0_8px_rgba(120,232,0,0.5)]"
              style={{ left: `${Math.min(((user.currentDay - 1) / user.totalDays) * 100, 100)}%` }}
              aria-hidden="true"
            />
          </div>
          <div className="flex justify-between text-xs text-text-muted mono">
            <span>Day 1</span>
            <span>Day {user.totalDays}</span>
          </div>

          {/* Stats Row - 3 cards with depth */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
            <div className="card-raised p-4 text-center shadow-raised">
              <p className="text-2xl font-bold mono text-brand-orange-500">{displayedStreak}</p>
              <p className="text-xs text-text-muted">Streak</p>
            </div>
            <div className="card-raised p-4 text-center shadow-raised">
              <p className="text-2xl font-bold mono text-text-primary">{displayedDaysBuilt}</p>
              <p className="text-xs text-text-muted">Completed</p>
            </div>
            <div className="card-raised p-4 text-center shadow-raised">
              <p className="text-2xl font-bold mono text-text-secondary">{displayedRemaining}</p>
              <p className="text-xs text-text-muted">Remaining</p>
            </div>
          </div>
        </div>

        {/* Today's Mission - Primary CTA - Floating card */}
        <div className="card-floating p-5 animate-slide-up-fade" style={{ animationDelay: '50ms' }}>
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                <span className="w-3.5 h-3.5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'7\' fill=\'%2378e800\'/%3E%3C/svg%3E")' }} aria-hidden="true"></span>
                <span className="font-mono font-medium text-brand-lime-500">DAY {todayChallenge.day}</span>
              </div>
              <h2 className="text-xl font-bold text-text-primary leading-tight">{todayChallenge.title}</h2>
            </div>
            <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-mono rounded-lg border border-white/20 flex items-center gap-1">
              <span style={{fontFamily: 'monospace'}}>{todayChallenge.estimatedMinutes} MIN</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 line-clamp-2">{todayChallenge.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {todayChallenge.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA - Primary button with depth */}
          <button
            type="button"
            onClick={() => window.location.href = `/day/${user.currentDay}`}
            className="group w-full px-6 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] active:translate-y-0.5 bg-white text-black hover:bg-gray-200 active:bg-gray-300 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_2px_4px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-fast"
          >
            <span className="flex items-center justify-center gap-2">
              {user.completedDays.includes(user.currentDay) ? (
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

        {/* Challenge Progress Grid - 3D grid */}
        <ChallengeProgress
          currentDay={user.currentDay}
          completedDays={user.completedDays}
          missedDays={user.missedDays}
          totalDays={user.totalDays}
        />

        {/* Streak Rail - 3D */}
        <div className="card-raised p-5 shadow-raised animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
          <StreakRail
            currentStreak={streak}
            longestStreak={longest}
            currentDay={user.currentDay}
            completedDays={user.completedDays}
            missedDays={user.missedDays}
          />
        </div>

        {/* Achievements & Standing - Side by side with depth */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="card-raised p-5 shadow-raised animate-slide-up-fade" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Achievements</p>
                <p className="text-lg font-bold text-text-primary">{user.achievements.length} / 4</p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { id: 'first-commit', name: 'First Commit', description: 'Submit proof for your very first day.', icon: 'Trophy', unlockedAt: '2024-11-01' },
                { id: 'week-warrior', name: 'Week Warrior', description: 'Complete 7 days in a row.', icon: 'Flame', unlockedAt: '2024-11-07' },
                { id: 'halfway-hero', name: 'Halfway Hero', description: 'Reach day 30.', icon: 'Trophy', unlockedAt: '2024-11-30' },
                { id: 'streak-master', name: 'Streak Master', description: 'Achieve a 14-day streak.', icon: 'Zap', unlockedAt: undefined },
              ].map((achievement) => {
                const isUnlocked = user.achievements.some(a => a.id === achievement.id);
                const unlockedAt = user.achievements.find(a => a.id === achievement.id)?.unlockedAt;

                return (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-fast ${isUnlocked
                      ? 'card-raised border border-brand-lime-500/20'
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

          <div className="card-raised p-5 shadow-raised animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Your Standing</p>
                <p className="text-2xl font-bold mono text-brand-lime-500">Top {100 - percentile}%</p>
              </div>
              <div className="w-16 h-16 mx-auto">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-surface-600"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-brand-lime-500 transition-all duration-normal ease-out transform -rotate-90"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - percentile / 100)}
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(120, 232, 0, 0.3))' }}
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-text-muted">of active builders</p>
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-sm">
              <span className="text-text-secondary">{percentile}th percentile</span>
              <span className="text-brand-lime-500 mono font-medium">+{Math.max(1, Math.floor(Math.random() * 5))} this week</span>
            </div>
          </div>
        </div>

        {/* Missed Days Summary */}
        {missedCount > 0 && !recovery.isSubmitted && (
          <div className="card-recessed p-4 border border-red-800/30 bg-red-900/20 shadow-inner-deep animate-slide-up-fade">
            <div className="flex items-center gap-2 text-sm text-red-400">
              <span className="text-red-400" aria-hidden="true">⚠</span>
              <span>Missed {missedCount} day{missedCount > 1 ? 's' : ''}: {user.missedDays.join(', ')}</span>
            </div>
          </div>
        )}

        {/* Dev Variant Selector (bottom, dev only) */}
        {import.meta.env.DEV && (
          <div className="fixed bottom-4 right-4 z-50 card-raised p-2 shadow-floating">
            <select
              value={variant}
              onChange={handleVariantChange}
              className="text-xs text-text-secondary bg-surface-800 border border-border rounded px-2 py-1"
              aria-label="Select mock user variant"
            >
              {Object.entries(userVariants).map(([key, u]) => (
                <option key={key} value={key}>{u.name} – Day {u.currentDay}</option>
              ))}
            </select>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;