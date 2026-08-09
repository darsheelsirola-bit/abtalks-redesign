import React, { useEffect, useState } from 'react';
import { ChallengeProgress } from '@/components/ui/ChallengeProgress';
import { StreakRail } from '@/components/ui/StreakRail';
import { RecoveryPanel } from '@/components/ui/RecoveryPanel';
import { userVariants, type UserVariantKey } from '@/data/users';
import { challenges } from '@/data/challenges';
import { ArrowUpRight, Code2, Flame, GitBranch, LockKeyhole, Share2, Trophy, Zap } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { BrandLogo } from '@/components/BrandLogo';
import { calculateCurrentStreak } from '@/utils/streak';

const Dashboard: React.FC = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const variantParam = searchParams.get('variant');
  const variant: UserVariantKey = variantParam && variantParam in userVariants ? variantParam as UserVariantKey : 'active';
  const user = userVariants[variant];
  const todayChallenge = challenges[user.currentDay - 1];
  const completionStorageKey = `abtalks:completed:${variant}:${user.currentDay}`;
  const locallyCompleted = typeof window !== 'undefined' && window.localStorage.getItem(completionStorageKey) === 'true';
  const completedDays = locallyCompleted && !user.completedDays.includes(user.currentDay)
    ? [...user.completedDays, user.currentDay]
    : user.completedDays;
  const todayCompleted = completedDays.includes(user.currentDay);

  // Check if yesterday was missed
  const yesterday = user.currentDay - 1;
  const isYesterdayMissed = user.missedDays.includes(yesterday);

  // Derived values from single source of truth
  const completedCount = completedDays.length;
  const missedCount = user.missedDays.length;
  const streak = calculateCurrentStreak(completedDays);
  const completionPercentage = Math.round((completedCount / user.totalDays) * 100);
  const longest = user.longestStreak;
  const percentile = user.standingPercentile;
  const weeklyGain = ({ active: 3, firstDay: 0, missedPrev: 1, emptyProfile: 2 } as const)[variant];

  const isFirstDay = user.currentDay === 1 && completedCount === 0 && streak === 0;

  // Mock recovery state
  interface RecoveryState {
    challengeCompleted: boolean;
    proofSubmitted: boolean;
    reflection: string;
    isSubmitted: boolean;
  }

  const [recovery, setRecovery] = useState<RecoveryState>({
    challengeCompleted: todayCompleted,
    proofSubmitted: false,
    reflection: '',
    isSubmitted: false,
  });

  const [showRecovery, setShowRecovery] = useState(isYesterdayMissed && !recovery.isSubmitted);

  const handleRecoverySubmit = () => {
    setRecovery(prev => ({ ...prev, isSubmitted: true }));
  };

  useEffect(() => {
    setRecovery({
      challengeCompleted: todayCompleted,
      proofSubmitted: false,
      reflection: '',
      isSubmitted: false,
    });
    setShowRecovery(isYesterdayMissed);
  }, [isYesterdayMissed, todayCompleted, user.currentDay, user.id]);

  const displayedStreak = recovery.isSubmitted ? streak + 1 : streak;
  const displayedLongest = Math.max(longest, displayedStreak);

  const proofPresentation = (status: typeof user.githubProofStatus) => ({
    pending: { label: 'Not submitted', dot: 'bg-surface-500' },
    submitted: { label: 'Submitted', dot: 'bg-brand-orange-500' },
    verified: { label: 'Verified', dot: 'bg-brand-lime-500' },
    rejected: { label: 'Needs revision', dot: 'bg-danger-500' },
  })[status];

  const githubProof = proofPresentation(user.githubProofStatus);
  const linkedinProof = proofPresentation(user.linkedinProofStatus);

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
              <span className="font-mono font-medium tabular-nums text-text-secondary">
                DAY <span className="text-text-primary">{user.currentDay}</span> <span className="text-text-muted">/ {user.totalDays}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dev variant selector (only in development) */}
            {import.meta.env.DEV && (
              <select
                value={variant}
                onChange={handleVariantChange}
                className="min-h-11 text-xs text-text-secondary bg-surface-800 border border-border rounded-lg px-2 py-1"
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

      <main className="max-w-6xl mx-auto px-4 sm:px-5 py-4 lg:py-8 flex flex-col gap-5 lg:gap-6">
        {/* Recovery Panel */}
        {showRecovery && (
          <div className="order-1">
            <RecoveryPanel
              isVisible
              missedDay={yesterday}
              currentStreak={streak}
              onRecover={handleRecoverySubmit}
              onDismiss={() => setShowRecovery(false)}
            />
          </div>
        )}

        {/* Primary Status Band - Floating panel */}
        <div className="order-3 card-raised p-5 animate-slide-up-fade">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="min-w-0">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Current Status</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold mono text-brand-lime-500">DAY {user.currentDay}</span>
                <span className="text-text-secondary hidden sm:inline">of {user.totalDays}</span>
              </div>
              <p className="text-sm text-text-muted mt-1">
                {completedCount} days completed. {user.totalDays - completedCount} to go.
              </p>
            </div>
            <div className="flex-shrink-0 text-right hidden sm:block">
              <p className="text-2xl font-bold mono text-brand-lime-500">{completionPercentage}%</p>
              <p className="text-xs text-text-muted">Complete</p>
            </div>
          </div>

          {/* Progress Rail - 3D */}
          <div className="relative h-2.5 bg-surface-700 rounded-full overflow-hidden mb-4 shadow-inner-deep">
            <div
              className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_8px_rgba(120,232,0,0.3)]"
              style={{ width: `${completionPercentage}%` }}
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
              <p className="text-2xl font-bold mono text-text-primary">{completedCount}</p>
              <p className="text-xs text-text-muted">Completed</p>
            </div>
            <div className="card-raised p-4 text-center shadow-raised">
              <p className="text-2xl font-bold mono text-text-secondary">{user.totalDays - completedCount}</p>
              <p className="text-xs text-text-muted">Remaining</p>
            </div>
          </div>
        </div>

        {/* Today's Mission - Primary CTA - Floating card */}
        <div className="order-2 card-floating p-5 animate-slide-up-fade border-brand-lime-500/25" style={{ animationDelay: '50ms' }}>
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                <span className="w-3.5 h-3.5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'7\' fill=\'%2378e800\'/%3E%3C/svg%3E")' }} aria-hidden="true"></span>
                <span className="font-mono font-medium text-brand-lime-500">DAY {todayChallenge.day}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight tracking-[-0.02em]">{todayChallenge.title}</h1>
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
            onClick={() => window.location.href = `/day/${user.currentDay}?variant=${variant}`}
            className="group w-full min-h-14 px-6 rounded-lg font-semibold text-base bg-brand-lime-500 text-surface-950 border border-brand-lime-400/50 shadow-raised transition-all duration-fast hover:bg-brand-lime-400 hover:-translate-y-0.5 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
          >
            <span className="flex items-center justify-center gap-2">
              {todayCompleted ? (
                <>
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  Continue Building
                </>
              ) : (
                <>
                  <Code2 className="w-5 h-5" aria-hidden="true" />
                  Start Building
                </>
              )}
            </span>
          </button>

          {/* Proof Status */}
          <div className="mt-5 pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs">
                <GitBranch className="w-4 h-4 text-text-muted" aria-hidden="true" />
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${githubProof.dot}`} aria-hidden="true"></span>
                  <span className="text-text-secondary">{githubProof.label}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Share2 className="w-4 h-4 text-text-muted" aria-hidden="true" />
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${linkedinProof.dot}`} aria-hidden="true"></span>
                  <span className="text-text-secondary">{linkedinProof.label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Progress Grid - 3D grid */}
        <ChallengeProgress
          currentDay={user.currentDay}
          completedDays={completedDays}
          missedDays={user.missedDays}
          totalDays={user.totalDays}
          className="order-4"
        />

        {/* Streak Rail - 3D */}
        <div className="order-4 card-raised p-5 shadow-raised animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
          <StreakRail
            currentStreak={displayedStreak}
            longestStreak={displayedLongest}
            currentDay={user.currentDay}
            completedDays={completedDays}
            missedDays={user.missedDays}
          />
        </div>

        {/* Achievements & Standing - Side by side with depth */}
        <div className={`order-4 grid gap-4 ${isFirstDay ? '' : 'lg:grid-cols-2'}`}>
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
                      {achievement.icon === 'Trophy' && <Trophy className="w-5 h-5" />}
                      {achievement.icon === 'Flame' && <Flame className="w-5 h-5" />}
                      {achievement.icon === 'Zap' && <Zap className="w-5 h-5" />}
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
                      <LockKeyhole className="w-5 h-5 text-text-muted" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {!isFirstDay && <div className="card-raised p-5 shadow-raised animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
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
              <span className="text-text-secondary">{formatOrdinal(percentile)} percentile</span>
              <span className="text-brand-lime-500 mono font-medium">+{weeklyGain} this week</span>
            </div>
          </div>}
        </div>

        {/* Missed Days Summary */}
        {missedCount > 0 && !recovery.isSubmitted && (
          <div className="order-4 card-recessed p-4 border border-red-800/30 bg-red-900/20 shadow-inner-deep animate-slide-up-fade">
            <div className="flex items-center gap-2 text-sm text-red-400">
              <span className="text-red-400" aria-hidden="true">⚠</span>
              <span>Missed {missedCount} day{missedCount > 1 ? 's' : ''}: {user.missedDays.join(', ')}</span>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;

function formatOrdinal(value: number) {
  const mod100 = value % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${value}th`;
  if (value % 10 === 1) return `${value}st`;
  if (value % 10 === 2) return `${value}nd`;
  if (value % 10 === 3) return `${value}rd`;
  return `${value}th`;
}
