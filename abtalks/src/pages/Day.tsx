import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Input } from '@/components/ui/Input';
import { ArrowLeft, GitBranch, Link, CheckCircle2, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const zodSchema = "z.object({ subject: z.string().min(1), duration: z.number().positive(), date: z.string().datetime() })";

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
      setGithubData({ repo: 'study-tracker-api', commit: 'a83fe21', files: 4 });
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
    <div className="page">
      {/* Top Bar - with depth */}
      <header className="sticky top-0 z-30 bg-surface-900/80 backdrop-blur-sm border-b border-border-subtle shadow-ambient">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="p-2 rounded-lg card-raised hover:shadow-raised transition-all duration-fast text-text-secondary hover:text-text-primary"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <div className="flex-1 flex items-center justify-center gap-3">
            <div className="text-center">
              <p className="text-xs text-text-muted uppercase tracking-wider">Day 12 of 60</p>
              <Progress value={12} max={60} size="xs" variant="primary" className="mt-1 w-32 mx-auto progress-3d" />
            </div>
            <div className="w-10" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-4 space-y-5 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-8">
        {/* Left Column - Mission */}
        <div className="space-y-4 lg:order-1 animate-slide-up-fade">
          {/* Mission Header - Floating card */}
          <div className="card-floating p-5 animate-slide-up-fade" style={{ animationDelay: '50ms' }}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                  <span className="font-mono font-medium text-brand-lime-500">DAY 12</span>
                </div>
                <h1 className="text-2xl font-bold text-text-primary leading-tight">REST API WITH EXPRESS + TYPESCRIPT</h1>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-mono rounded-lg border border-white/20 flex items-center gap-1">
                  <span style={{fontFamily: 'monospace'}}>60 MIN</span>
                </span>
              </div>
            </div>

            <p className="text-text-secondary mb-5">
              Create a tiny Study Tracker API: CRUD endpoints for sessions (subject, duration, date). 
              Use Express, TypeScript, and an in-memory array for storage. Add input validation with Zod 
              and return proper HTTP status codes.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              <Badge variant="outline" size="xs">backend</Badge>
              <Badge variant="outline" size="xs">express</Badge>
              <Badge variant="outline" size="xs">typescript</Badge>
              <Badge variant="outline" size="xs">validation</Badge>
            </div>

            {/* Learning Objectives */}
            <div className="space-y-3 mb-5 pt-4 border-t border-border/50">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Learning Objectives</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center gap-2">Build a RESTful API with Express & TypeScript</li>
                <li className="flex items-center gap-2">Validate input with Zod schemas</li>
                <li className="flex items-center gap-2">Return correct HTTP status codes</li>
                <li className="flex items-center gap-2">Structure routes & controllers cleanly</li>
              </ul>
            </div>

            {/* Hint */}
            <details className="group">
              <summary className="flex items-center gap-2 text-sm text-text-muted cursor-pointer list-none">
                <span className="w-4 h-4 text-text-muted" aria-hidden="true">💡</span>
                <span>Hint / Details</span>
              </summary>
              <div className="mt-3 p-4 card-recessed rounded-lg text-sm text-text-secondary space-y-2">
                <p>Use <code className="card-recessed px-1.5 py-0.5 rounded font-mono text-xs">express.Router()</code> for modular routes.</p>
                <p>Zod schema: <code className="card-recessed px-1.5 py-0.5 rounded font-mono text-xs">{zodSchema}</code></p>
                <p>Return <code className="card-recessed px-1.5 py-0.5 rounded font-mono text-xs">res.status(201).json(session)</code> on create.</p>
              </div>
            </details>
          </div>

          {/* Ship Requirements - Floating cards */}
          <div className="card-floating p-5 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Ship Requirements</p>
                <h3 className="text-lg font-bold text-text-primary">SHIP REQUIREMENTS</h3>
              </div>
            </div>
            <ol className="space-y-3" role="list">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg card-raised shadow-raised">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-lime-500/15 text-brand-lime-500 flex items-center justify-center font-mono font-bold text-sm">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm text-text-secondary flex-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Column - Proof & Complete */}
        <div className="space-y-4 lg:order-2 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
          {/* GitHub Proof - Floating card */}
          <div className="card-floating p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg card-raised flex items-center justify-center shadow-raised">
                <GitBranch className="w-5 h-5 text-text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">GitHub Proof</p>
                <h3 className="font-semibold text-text-primary">Repository / Commit</h3>
              </div>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Paste the repository URL or a direct commit link.
            </p>
            <div className="flex gap-2 mb-3">
              <Input
                placeholder="https://github.com/..."
                value={githubUrl}
                onChange={(e) => { setGithubUrl(e.target.value); setGithubStatus('idle'); }}
                className="flex-1 min-w-0 input-depth"
                inputSize="sm"
                aria-describedby="github-hint"
                aria-label="GitHub repository or commit URL"
              />
              <Button
                size="sm"
                variant={githubStatus === 'success' ? 'secondary' : 'primary'}
                onClick={handleGithubSubmit}
                disabled={githubStatus === 'validating' || githubStatus === 'success'}
                aria-label={githubStatus === 'success' ? 'GitHub proof submitted' : 'Submit GitHub proof'}
                className={githubStatus === 'validating' ? 'animate-pulse' : ''}
              >
                {githubStatus === 'validating' && <span className="animate-spin">⏳</span>}
                {githubStatus === 'success' ? 'Verified' : 'Verify'}
              </Button>
            </div>
            {githubStatus === 'error' && (
              <p className="text-xs text-red-400 flex items-center gap-1 mb-3" role="alert">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> Invalid GitHub URL. Use repo or commit link.
              </p>
            )}
            {githubStatus === 'success' && githubData && (
              <div className="card-raised p-4 animate-scale-in border border-brand-lime-500/30 bg-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime-500" aria-hidden="true" />
                  <span className="font-medium text-brand-lime-500">Proof Verified</span>
                </div>
                <div className="space-y-1 text-xs text-gray-300 font-mono">
                  <div><span className="text-gray-500">Repo:</span> {githubData.repo}</div>
                  <div><span className="text-gray-500">Commit:</span> {githubData.commit}</div>
                  <div><span className="text-gray-500">Files:</span> {githubData.files} changed</div>
                </div>
                <Button variant="ghost" size="sm" className="mt-3" onClick={() => window.open(`https://github.com/${githubData.repo}`, '_blank')}>
                  <ExternalLink className="w-3.5 h-3.5 mr-1" aria-hidden="true" /> View on GitHub
                </Button>
              </div>
            )}
            {githubStatus === 'validating' && (
              <p className="text-xs text-brand-orange-500 flex items-center gap-1 animate-pulse">
                Verifying commit...
              </p>
            )}
          </div>

          {/* LinkedIn Proof - Floating card */}
          <div className="card-floating p-5 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg card-raised flex items-center justify-center shadow-raised">
                <Link className="w-5 h-5 text-text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider">LinkedIn Proof</p>
                <h3 className="font-semibold text-text-primary">Reflection Post</h3>
              </div>
            </div>
            <p className="text-xs text-text-muted mb-4">
              Paste the URL of your LinkedIn reflection post.
            </p>
            <div className="flex gap-2 mb-3">
              <Input
                placeholder="https://www.linkedin.com/posts/..."
                value={linkedinUrl}
                onChange={(e) => { setLinkedinUrl(e.target.value); setLinkedinStatus('idle'); }}
                className="flex-1 min-w-0 input-depth"
                inputSize="sm"
                aria-label="LinkedIn post URL"
              />
              <Button
                size="sm"
                variant={linkedinStatus === 'success' ? 'secondary' : 'primary'}
                onClick={handleLinkedinSubmit}
                disabled={linkedinStatus === 'validating' || linkedinStatus === 'success'}
                aria-label={linkedinStatus === 'success' ? 'LinkedIn proof submitted' : 'Submit LinkedIn proof'}
                className={linkedinStatus === 'validating' ? 'animate-pulse' : ''}
              >
                {linkedinStatus === 'validating' && <span className="animate-spin">⏳</span>}
                {linkedinStatus === 'success' ? 'Verified' : 'Verify'}
              </Button>
            </div>
            {linkedinStatus === 'error' && (
              <p className="text-xs text-red-400 flex items-center gap-1 mb-3" role="alert">
                <AlertCircle className="w-3 h-3" aria-hidden="true" /> Invalid LinkedIn post URL.
              </p>
            )}
            {linkedinStatus === 'success' && (
              <div className="card-raised p-4 animate-scale-in border border-brand-lime-500/30 bg-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime-500" aria-hidden="true" />
                  <span className="font-medium text-brand-lime-500">Proof Verified</span>
                </div>
              </div>
            )}
            {linkedinStatus === 'validating' && (
              <p className="text-xs text-brand-orange-500 flex items-center gap-1 animate-pulse">
                Verifying post...
              </p>
            )}
          </div>

          {/* Complete CTA - Floating card */}
          <div className="card-floating p-5 animate-slide-up-fade" style={{ animationDelay: '150ms' }}>
            {isCompleted ? (
              <div className="text-center space-y-4 animate-scale-in">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_24px_rgba(120,232,0,0.3)]">
                  <CheckCircle className="w-10 h-10 text-brand-lime-500" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-text-primary">DAY 12 COMPLETED!</h2>
                <p className="text-text-secondary">Your streak continues. See you tomorrow.</p>
                <Button size="xl" fullWidth onClick={() => window.location.href = '/dashboard'}>
                  Back to Dashboard
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-text-primary mb-1">Ready to Complete Day 12?</h2>
                  <p className="text-sm text-text-secondary">Submit both proofs above, then finish the day.</p>
                </div>
                <Button
                  size="xl"
                  fullWidth
                  onClick={handleComplete}
                  disabled={!canComplete}
                  variant={canComplete ? 'primary' : 'outline'}
                >
                  <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                  Complete Day 12
                </Button>
                {!canComplete && (
                  <p className="text-center text-xs text-text-muted">
                    {githubStatus !== 'success' && 'GitHub proof needed'}
                    {githubStatus !== 'success' && linkedinStatus !== 'success' && ' · '}
                    {linkedinStatus !== 'success' && 'LinkedIn proof needed'}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Day12;