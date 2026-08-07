import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Input } from '@/components/ui/Input';
import { challenges } from '@/data/challenges';
import { ArrowLeft, GitBranch, Link, CheckCircle2, AlertCircle, Target, BookOpen, CheckSquare, Lightbulb, ExternalLink } from 'lucide-react';

const todayChallenge = challenges[11]; // Day 12

const Day12: React.FC = () => {
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubStatus, setGithubStatus] = useState<'idle' | 'validating' | 'success' | 'error'>('idle');
  const [linkedinStatus, setLinkedinStatus] = useState<'idle' | 'validating' | 'success' | 'error'>('idle');
  const [githubData, setGithubData] = useState<{repo: string; commit: string; files: number} | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const validateUrl = (url: string, type: 'github' | 'linkedin') => {
    if (type === 'github') {
      return /^https:\/\/github\.com\/[\w-]+\/[\w-]+(\/commit\/[a-f0-9]{7,40})?$/i.test(url);
    }
    return /^https:\/\/www\.linkedin\.com\/posts\/[\w-]+/i.test(url);
  };

  const handleGithubSubmit = () => {
    if (!validateUrl(githubUrl, 'github')) {
      setGithubStatus('error');
      return;
    }
    setGithubStatus('validating');
    setTimeout(() => {
      setGithubStatus('success');
      setGithubData({ repo: 'study-tracker-api', commit: 'a1b2c3d', files: 4 });
    }, 800);
  };

  const handleLinkedinSubmit = () => {
    if (!validateUrl(linkedinUrl, 'linkedin')) {
      setLinkedinStatus('error');
      return;
    }
    setLinkedinStatus('validating');
    setTimeout(() => {
      setLinkedinStatus('success');
    }, 600);
  };

  const canComplete = githubStatus === 'success' && linkedinStatus === 'success';
  const handleComplete = () => {
    if (canComplete) setIsCompleted(true);
  };

  const checklist = [
    'Express server runs on localhost:3000',
    'GET /sessions returns array',
    'POST /sessions creates session with validation',
    'GET /sessions/:id returns single session',
    'PATCH /sessions/:id updates session',
    'DELETE /sessions/:id removes session',
    'Zod schema validates subject, duration, date',
    'Proper 201, 400, 404 status codes',
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 pb-24">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="sm" className="p-2" onClick={() => window.history.back()} aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Day 12 of 60</p>
            <Progress value={12} max={60} size="sm" variant="primary" className="mt-1" />
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-4 space-y-4">
        {/* Task Card */}
        <Card variant="elevated" padding="lg" className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                <Target className="w-3 h-3" />
                <span>Today · Day {todayChallenge.day}</span>
              </div>
              <h1 className="text-xl font-semibold leading-tight">{todayChallenge.title}</h1>
            </div>
            <Badge variant={todayChallenge.difficulty === 'hard' ? 'danger' : todayChallenge.difficulty === 'medium' ? 'warning' : 'primary'} size="sm">
              {todayChallenge.estimatedMinutes} min
            </Badge>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">{todayChallenge.description}</p>

          {/* Learning objectives */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm font-medium"><BookOpen className="w-4 h-4" /> Learning objectives</h3>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400 pl-4 list-disc">
              <li>Build a RESTful API with Express & TypeScript</li>
              <li>Validate input with Zod schemas</li>
              <li>Return correct HTTP status codes</li>
              <li>Structure routes & controllers cleanly</li>
            </ul>
          </div>

          {/* Acceptance checklist */}
          <div className="space-y-2 border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <h3 className="flex items-center gap-2 text-sm font-medium"><CheckSquare className="w-4 h-4" /> Acceptance checklist</h3>
            <ul className="space-y-1" role="list">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckSquare className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hint */}
          <details className="group">
            <summary className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 cursor-pointer list-none">
              <Lightbulb className="w-4 h-4" />
              <span>Hint / details</span>
            </summary>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 space-y-1 pl-6">
              <p>Use <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">express.Router()</code> for modular routes.</p>
              <p>Zod schema example: <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">{'z.object({ subject: z.string().min(1), duration: z.number().positive(), date: z.string().datetime() })'}</code></p>
              <p>Return <code className="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">res.status(201).json(session)</code> on create.</p>
            </div>
          </details>
        </Card>

        {/* GitHub Proof */}
        <Card variant="outlined" padding="md" className="space-y-3">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h3 className="font-medium">GitHub proof</h3>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Paste the repository URL or a direct commit link (e.g. https://github.com/you/study-tracker-api/commit/a1b2c3d).
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="https://github.com/..."
              value={githubUrl}
              onChange={(e) => { setGithubUrl(e.target.value); setGithubStatus('idle'); }}
              className="flex-1"
              inputSize="sm"
              aria-describedby="github-hint"
            />
            <Button
              size="sm"
              variant={githubStatus === 'success' ? 'secondary' : 'primary'}
              onClick={handleGithubSubmit}
              disabled={githubStatus === 'validating' || githubStatus === 'success'}
              aria-label={githubStatus === 'success' ? 'GitHub proof submitted' : 'Submit GitHub proof'}
            >
              {githubStatus === 'validating' && <span className="animate-spin">⏳</span>}
              {githubStatus === 'success' ? 'Submitted' : 'Submit'}
            </Button>
          </div>
          {githubStatus === 'error' && (
            <p className="text-xs text-danger-600 dark:text-danger-400 flex items-center gap-1" role="alert">
              <AlertCircle className="w-3 h-3" /> Invalid GitHub URL. Use repo or commit link.
            </p>
          )}
          {githubStatus === 'success' && githubData && (
            <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-md p-3 text-xs space-y-1">
              <p className="font-medium text-success-700 dark:text-success-300">Parsed commit info</p>
              <p><span className="font-medium">Repo:</span> {githubData.repo}</p>
              <p><span className="font-medium">Commit:</span> {githubData.commit}</p>
              <p><span className="font-medium">Files changed:</span> {githubData.files}</p>
              <Button variant="ghost" size="sm" className="mt-1" onClick={() => window.open(`https://github.com/${githubData.repo}`, '_blank')}>
                <ExternalLink className="w-3 h-3 mr-1" /> View on GitHub
              </Button>
            </div>
          )}
        </Card>

        {/* LinkedIn Proof */}
        <Card variant="outlined" padding="md" className="space-y-3">
          <div className="flex items-center gap-2">
            <Link className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h3 className="font-medium">LinkedIn proof</h3>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Paste the URL of your LinkedIn post reflecting on today's build (e.g. https://www.linkedin.com/posts/you_activity-123456).
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="https://www.linkedin.com/posts/..."
              value={linkedinUrl}
              onChange={(e) => { setLinkedinUrl(e.target.value); setLinkedinStatus('idle'); }}
              className="flex-1"
              inputSize="sm"
            />
            <Button
              size="sm"
              variant={linkedinStatus === 'success' ? 'secondary' : 'primary'}
              onClick={handleLinkedinSubmit}
              disabled={linkedinStatus === 'validating' || linkedinStatus === 'success'}
              aria-label={linkedinStatus === 'success' ? 'LinkedIn proof submitted' : 'Submit LinkedIn proof'}
            >
              {linkedinStatus === 'validating' && <span className="animate-spin">⏳</span>}
              {linkedinStatus === 'success' ? 'Submitted' : 'Submit'}
            </Button>
          </div>
          {linkedinStatus === 'error' && (
            <p className="text-xs text-danger-600 dark:text-danger-400 flex items-center gap-1" role="alert">
              <AlertCircle className="w-3 h-3" /> Invalid LinkedIn post URL.
            </p>
          )}
          {linkedinStatus === 'success' && (
            <p className="text-xs text-success-600 dark:text-success-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Proof recorded.
            </p>
          )}
        </Card>

        {/* Completion CTA */}
        <Card variant="elevated" padding="lg" className="space-y-3 text-center">
          {isCompleted ? (
            <div className="space-y-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center text-success-600 dark:text-success-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-semibold">Day 12 completed!</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Your streak continues. See you tomorrow.</p>
              <Button size="lg" onClick={() => window.location.href = '/dashboard'} className="w-full sm:w-auto">
                Back to dashboard
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Ready to complete Day 12?</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Submit both proofs above, then finish the day.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleComplete}
                disabled={!canComplete}
                variant={canComplete ? 'primary' : 'secondary'}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Complete Day 12
              </Button>
              {!canComplete && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {githubStatus !== 'success' && 'GitHub proof needed'} {githubStatus !== 'success' && linkedinStatus !== 'success' && '· '} {linkedinStatus !== 'success' && 'LinkedIn proof needed'}
                </p>
              )}
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default Day12;