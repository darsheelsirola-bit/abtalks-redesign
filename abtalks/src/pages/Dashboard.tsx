import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress, CircularProgress } from '@/components/ui/Progress';
import { Input } from '@/components/ui/Input';
import { userVariants, type UserVariantKey } from '@/data/users';
import { challenges } from '@/data/challenges';
import { GitBranch, Link, Flame, Target, ChevronRight, CircleCheck, CircleX, AlertCircle, Clock, RotateCcw, ShieldCheck, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  void setSearchParams;
  const variantParam = searchParams.get('variant');
  const variant: UserVariantKey = variantParam && variantParam in userVariants ? variantParam as UserVariantKey : 'active';
  const user = userVariants[variant];
  const todayChallenge = challenges[user.currentDay - 1];

  // Check if yesterday was missed
  const yesterday = user.currentDay - 1;
  const isYesterdayMissed = user.missedDays.includes(yesterday);

  const completedCount = user.completedDays.length;
  const missedCount = user.missedDays.length;
  const remaining = user.totalDays - completedCount - missedCount;
  const streak = user.currentStreak;
  const percentile = user.standingPercentile;

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

  const canRecover = recovery.challengeCompleted && recovery.proofSubmitted && recovery.reflection.trim().length >= 20;

  const handleRecoverySubmit = () => {
    if (canRecover && !recovery.isSubmitted) {
      setRecovery(prev => ({ ...prev, isSubmitted: true }));
    }
  };

  const formatProof = (status: string) => {
    switch (status) {
      case 'verified': return 'Verified';
      case 'submitted': return 'Submitted';
      case 'rejected': return 'Rejected';
      default: return 'Not submitted';
    }
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as UserVariantKey;
    setSearchParams({ variant: newVariant });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pb-20 pb-[env(safe-area-inset-bottom)] overflow-x-hidden">
      {/* Compact header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">
                {user.name.charAt(0)}
              </div>
            )}
            <div className="min-w-0">
              <h1 className="text-base font-semibold truncate">{user.name}</h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Day {user.currentDay} of {user.totalDays}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-right">
            {/* Dev variant selector (only in development) */}
            {import.meta.env.DEV && (
              <select
                value={variant}
                onChange={handleVariantChange}
                className="text-xs text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded px-2 py-1"
                aria-label="Select mock user variant"
              >
                {Object.entries(userVariants).map(([key, u]) => (
                  <option key={key} value={key}>{u.name} – Day {u.currentDay}</option>
                ))}
              </select>
            )}
            {!isFirstDay && percentile > 0 && (
              <div className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400">
                Top <span className="font-medium">{100 - percentile}%</span>
              </div>
            )}
            <Badge variant="primary" size="sm" className="hidden sm:inline-flex">
              <Flame className="w-3 h-3 mr-1" />
              {isFirstDay ? 'Start streak' : streak}
              {isYesterdayMissed && !recovery.isSubmitted && (
                <span className="ml-1 text-xs bg-neutral-200 dark:bg-neutral-700 px-1 rounded">paused</span>
              )}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-4 lg:px-8 lg:py-8 space-y-4 lg:space-y-6">
        {/* Recovery Banner - shows when yesterday was missed and recovery not yet submitted */}
        {isYesterdayMissed && !recovery.isSubmitted && (
          <Card variant="outlined" padding="md" className="border-warning-200 dark:border-warning-800 bg-warning-50 dark:bg-warning-900/20 space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center text-warning-600 dark:text-warning-400">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-warning-700 dark:text-warning-300">Recovery Day available</h3>
                <p className="text-sm text-warning-600 dark:text-warning-400 mt-0.5">
                  You missed Day {yesterday}. Your streak is paused at {streak}. Complete today's challenge, submit proof, and add a brief reflection to restore it.
                </p>
              </div>
              <Badge variant="warning" size="sm" className="flex-shrink-0">
                <Clock className="w-3 h-3 mr-1" />
                48h left
              </Badge>
            </div>

            {/* Recovery steps */}
            <div className="space-y-2 pt-2 border-t border-warning-200 dark:border-warning-800">
              <div className="flex items-center gap-3 text-sm">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  recovery.challengeCompleted ? 'bg-success-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                }`}>
                  {recovery.challengeCompleted ? <CircleCheck className="w-3 h-3" /> : '1'}
                </div>
                <span className={recovery.challengeCompleted ? 'text-success-600 dark:text-success-400' : ''}>
                  Complete today's challenge
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  recovery.proofSubmitted ? 'bg-success-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                }`}>
                  {recovery.proofSubmitted ? <CircleCheck className="w-3 h-3" /> : '2'}
                </div>
                <span className={recovery.proofSubmitted ? 'text-success-600 dark:text-success-400' : ''}>
                  Submit GitHub & LinkedIn proof
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5 ${
                  recovery.reflection.trim().length >= 20 ? 'bg-success-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                }`}>
                  {recovery.reflection.trim().length >= 20 ? <CircleCheck className="w-3 h-3" /> : '3'}
                </div>
                <div className="flex-1 min-w-0">
                  <span className={recovery.reflection.trim().length >= 20 ? 'text-success-600 dark:text-success-400' : ''}>
                    Add reflection ({recovery.reflection.trim().length}/20 min chars)
                  </span>
<Input
  placeholder="What happened yesterday? What did you learn?"
  value={recovery.reflection}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecovery(prev => ({ ...prev, reflection: e.target.value }))}
  className="mt-1.5"
  inputSize="sm"
/>
                </div>
              </div>
            </div>

            {/* Recovery CTA */}
            <Button
              size="lg"
              className="w-full"
              onClick={handleRecoverySubmit}
              disabled={!canRecover}
              variant={canRecover ? 'primary' : 'secondary'}
            >
              {recovery.isSubmitted ? (
                <>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Streak restored — {streak + 1} day streak
                </>
              ) : canRecover ? (
                <>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Restore streak to {streak + 1} days
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Complete all steps to restore streak
                </>
              )}
            </Button>

            {recovery.isSubmitted && (
              <p className="text-xs text-success-600 dark:text-success-400 text-center animate-fade-in-up">
                Your streak has been restored. The missed day remains marked, but your streak continues.
              </p>
            )}
          </Card>
        )}

        {/* Today Card - Primary CTA */}
        <Card variant="elevated" padding="lg" className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                <Target className="w-3 h-3" />
                <span>Today · Day {todayChallenge.day}</span>
              </div>
              <h2 className="text-lg font-semibold leading-tight truncate">{todayChallenge.title}</h2>
            </div>
            <Badge variant={todayChallenge.difficulty === 'hard' ? 'danger' : todayChallenge.difficulty === 'medium' ? 'warning' : 'primary'} size="sm">
              {todayChallenge.estimatedMinutes} min
            </Badge>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{todayChallenge.description}</p>

          <div className="flex flex-wrap gap-1">
            {todayChallenge.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => (window.location.href = `/day/${user.currentDay}`)}
            >
              {user.completedDays.includes(user.currentDay) ? 'Continue' : `Start Day ${user.currentDay}`}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            {/* Proof status mini */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                {recovery.proofSubmitted ? 'Submitted' : formatProof(user.githubProofStatus ?? 'pending')}
              </span>
              <span className="flex items-center gap-1">
                <Link className="w-3 h-3" />
                {recovery.proofSubmitted ? 'Submitted' : formatProof(user.linkedinProofStatus ?? 'pending')}
              </span>
            </div>
          </div>

          {/* Quick proof submission for recovery */}
          {isYesterdayMissed && !recovery.proofSubmitted && !recovery.isSubmitted && (
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Submit proof for recovery:</p>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => setRecovery(prev => ({ ...prev, proofSubmitted: true }))}
                >
                  <GitBranch className="w-4 h-4 mr-1" />
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => setRecovery(prev => ({ ...prev, proofSubmitted: true }))}
                >
                  <Link className="w-4 h-4 mr-1" />
                  LinkedIn
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Quick stats row */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="outlined" padding="md" className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {isFirstDay ? (
                <>
                  <span className="block">Day 1</span>
                  <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">Start your streak</span>
                </>
              ) : (
                recovery.isSubmitted ? streak + 1 : streak
              )}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Current streak</div>
          </Card>
          <Card variant="outlined" padding="md" className="text-center">
            <div className="text-2xl font-bold">{completedCount}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Completed</div>
          </Card>
          <Card variant="outlined" padding="md" className="text-center">
            <div className="text-2xl font-bold">{remaining}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Remaining</div>
          </Card>
        </div>

        {/* Progress visualization & Standing/Achievements side by side on large screens */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Progress visualization */}
          <Card variant="outlined" padding="md" className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Challenge progress</span>
              <span className="text-neutral-500 dark:text-neutral-400">{user.completionPercentage}%</span>
            </div>
            <Progress value={user.completionPercentage} max={100} size="md" variant="primary" />

            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>Day 1</span>
              <span>Day {user.totalDays}</span>
            </div>

            {/* Mini timeline: show last 7 days */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 -mx-2 px-2">
              {Array.from({ length: 7 }, (_, i) => {
                const dayNum = Math.max(1, user.currentDay - 6 + i);
                const isDone = user.completedDays.includes(dayNum);
                const isMissed = user.missedDays.includes(dayNum);
                const isToday = dayNum === user.currentDay;
                const isYesterdayMissedDay = dayNum === yesterday;
                return (
                  <button
                    key={dayNum}
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex flex-col items-center justify-center text-xs transition-colors ${
                      isDone
                        ? 'bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400'
                        : isMissed
                        ? 'bg-danger-100 dark:bg-danger-900/30 text-danger-600 dark:text-danger-400'
                        : isToday
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 ring-2 ring-primary-500'
                        : isYesterdayMissedDay && recovery.isSubmitted
                        ? 'bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-400 ring-2 ring-warning-500'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400'
                    }`}
                    disabled
                    aria-label={`Day ${dayNum} ${isDone ? 'completed' : isMissed ? 'missed' : isYesterdayMissedDay && recovery.isSubmitted ? 'recovered' : 'upcoming'}`}
                  >
                    <span className="font-medium">{dayNum}</span>
                    {isDone && <CircleCheck className="w-3 h-3" />}
                    {isMissed && !isYesterdayMissedDay && <CircleX className="w-3 h-3" />}
                    {isYesterdayMissedDay && recovery.isSubmitted && <ShieldCheck className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Standing & achievements */}
          {!isFirstDay && (
            <div className="space-y-4">
              {percentile > 0 && (
                <Card variant="outlined" padding="md" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Standing</span>
                    <Badge variant="primary" size="sm">Top {100 - percentile}%</Badge>
                  </div>
                  <CircularProgress value={percentile} size={56} strokeWidth={5} variant="primary" className="mx-auto" />
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">Percentile among participants</p>
                </Card>
              )}
              <Card variant="outlined" padding="md" className="space-y-2">
                <div className="font-medium">Achievements</div>
                <div className="flex flex-wrap gap-1">
                  {user.achievements.map((achievement: typeof user.achievements[0]) => (
                    <Badge key={achievement.id} variant="primary" size="sm" dot>{achievement.name}</Badge>
                  ))}
                  {recovery.isSubmitted && (
                    <Badge key="recovery" variant="success" size="sm" dot className="animate-fade-in-up">Streak Restored</Badge>
                  )}
                  {user.achievements.length === 0 && !recovery.isSubmitted && (
                    <Badge variant="outline" size="sm">No achievements yet</Badge>
                  )}
                </div>
              </Card>
            </div>
          )}
          {isFirstDay && (
            <Card variant="outlined" padding="md" className="text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Complete Day 1 to unlock your standing and first achievement.</p>
            </Card>
          )}
        </div>

        {/* Missed days summary (only if not recovered) */}
        {missedCount > 0 && !recovery.isSubmitted && (
          <Card variant="outlined" padding="md" className="border-danger-200 dark:border-danger-800">
            <div className="flex items-center gap-2 text-sm text-danger-600 dark:text-danger-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Missed {missedCount} day{missedCount > 1 ? 's' : ''}: {user.missedDays.join(', ')}</span>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Dashboard;