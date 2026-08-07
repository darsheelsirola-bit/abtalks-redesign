import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Progress, CircularProgress } from '../../components/ui/Progress';
import { userVariants } from '../../data/users';
import { challenges } from '../../data/challenges';
import { Github, Linkedin, Flame, Trophy, Target, ChevronRight, CircleCheck, CircleX, AlertCircle } from 'lucide-react';

// Choose variant for testing; can be swapped via query param later
const user = userVariants.active;
const todayChallenge = challenges[user.currentDay - 1];

const Dashboard: React.FC = () => {
  const completedCount = user.completedDays.length;
  const missedCount = user.missedDays.length;
  const remaining = user.totalDays - completedCount - missedCount;
  const streak = user.currentStreak;
  const longest = user.longestStreak;
  const percentile = user.standingPercentile;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pb-20">
      {/* Compact header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
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
            <div className="hidden sm:block text-xs text-neutral-500 dark:text-neutral-400">
              Top <span className="font-medium">{100 - percentile}%</span>
            </div>
            <Badge variant="primary" size="sm" className="hidden sm:inline-flex">
              <Flame className="w-3 h-3 mr-1" />
              {streak}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-4 space-y-4">
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
            {todayChallenge.tags.map((t) => (
              <Badge key={t} variant="outline" size="sm">{t}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button size="lg" className="flex-1" onClick={() => (window.location.href = `/day/${user.currentDay}`)}>
              {user.completedDays.includes(user.currentDay) ? 'Continue' : 'Start Day 12'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            {/* Proof status mini */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3" />
                {user.githubProofStatus}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                {user.linkedinProofStatus}
              </span>
            </div>
          </div>
        </Card>

        {/* Quick stats row */}
        <div className="grid grid-cols-3 gap-3">
          <Card variant="outlined" padding="md" className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{streak}</div>
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
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400'
                  }`}
                  disabled
                  aria-label={`Day ${dayNum} ${isDone ? 'completed' : isMissed ? 'missed' : 'upcoming'}`}
                >
                  <span className="font-medium">{dayNum}</span>
                  {isDone && <CircleCheck className="w-3 h-3" />}
                  {isMissed && <CircleX className="w-3 h-3" />}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Standing & achievements */}
        <div className="grid grid-cols-2 gap-3">
          <Card variant="outlined" padding="md" className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Standing</span>
              <Badge variant="primary" size="sm">Top {100 - percentile}%</Badge>
            </div>
            <CircularProgress value={percentile} size={56} strokeWidth={5} variant="primary" className="mx-auto" />
            <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">Percentile among participants</p>
          </Card>

          <Card variant="outlined" padding="md" className="space-y-2">
            <div className="font-medium">Achievements</div>
            <div className="flex flex-wrap gap-1">
              {user.achievements.map((a) => (
                <Badge key={a.id} variant="primary" size="sm" dot>{a.name}</Badge>
              ))}
              {user.achievements.length === 0 && (
                <Badge variant="outline" size="sm">No achievements yet</Badge>
              )}
            </div>
          </Card>
        </div>

        {/* Missed days summary */}
        {missedCount > 0 && (
          <Card variant="outlined" padding="md" className="border-danger-200 dark:border-danger-800">
            <div className="flex items-center gap-2 text-sm text-danger-600 dark:text-danger-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Missed {missedCount} day{missedCount > 1 ? 's' : ''}: {user.missedDays.join(', ')}</span>
            </div>
          </Card>
        )}
      </main>

      {/* Bottom nav (reuse component) */}
      {/* Imported dynamically to avoid circular deps if needed */}
    </div>
  );
};

export default Dashboard;