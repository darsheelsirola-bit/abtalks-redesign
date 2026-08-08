import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { GitBranch, Link, ArrowRight, CheckCircle2, Clock, Target, Users, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-primary-600 dark:text-primary-400">ABTalks</span>
          <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <a href="#how" className="hover:text-primary-600 dark:hover:text-primary-400">How it works</a>
            <a href="#proof" className="hover:text-primary-600 dark:hover:text-primary-400">Proof</a>
            <a href="#progress" className="hover:text-primary-600 dark:hover:text-primary-400">Progress</a>
          </nav>
          <Button size="sm" className="md:hidden">Join</Button>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6 md:py-12 pb-6 pb-[env(safe-area-inset-bottom)] space-y-10 md:space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4 md:space-y-6" aria-labelledby="hero-title">
          <h1 id="hero-title" className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Build every day.<br />Prove it publicly.<br />Become visible.
          </h1>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A 60‑day challenge for Indian college students. Ship a tiny project daily, post the commit on GitHub and a reflection on LinkedIn. Graduate with a public portfolio that recruiters can't ignore.
          </p>
          <div className="flex flex-col sm:flex_row items-center justify-center gap-3 pt-2">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => (window.location.href = '/dashboard')}>
              Start my 60‑day streak
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto" onClick={() => (window.location.href = '/day/12')}>
              See day 12 challenge
            </Button>
          </div>
        </section>

        {/* Daily Loop */}
        <section id="how" className="space-y-6" aria-labelledby="loop-title">
          <h2 id="loop-title" className="text-2xl font-semibold text-center">The daily loop</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Target className="w-6 h-6" />, title: 'Learn / Build', desc: 'Pick the day\'s micro-project (15-60 min).' },
              { icon: <GitBranch className="w-6 h-6" />, title: 'Commit', desc: 'Push code to a public GitHub repo.' },
              { icon: <Link className="w-6 h-6" />, title: 'Share', desc: 'Post a short LinkedIn reflection.' },
              { icon: <ArrowRight className="w-6 h-6 rotate-45" />, title: 'Repeat', desc: 'Streak grows, portfolio compounds.' },
            ].map((step, i) => (
              <Card key={i} variant="outlined" padding="md" className="text-center">
                <div className="mx-auto mb-3 text-primary-600 dark:text-primary-400" aria-hidden="true">{step.icon}</div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{step.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Challenge preview */}
        <section id="proof" className="space-y-4" aria-labelledby="preview-title">
          <h2 id="preview-title" className="text-2xl font-semibold text-center">What a day looks like</h2>
          <Card variant="elevated" padding="lg" className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400" aria-hidden="true">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium">Day 12 - REST API with Express & TypeScript</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Create a tiny Study-Tracker API: CRUD for sessions (subject, duration, date). Use Express, TS, Zod validation, proper HTTP codes.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="primary" size="sm">backend</Badge>
                  <Badge variant="primary" size="sm">express</Badge>
                  <Badge variant="primary" size="sm">typescript</Badge>
                  <Badge variant="primary" size="sm">validation</Badge>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">GitHub proof</label>
                <Badge variant="success" dot>Verified</Badge>
              </div>
              <div>
                <label className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">LinkedIn proof</label>
                <Badge variant="success" dot>Verified</Badge>
              </div>
            </div>
            <Progress value={12} max={60} size="md" variant="primary" showLabel label="Overall progress" />
          </Card>
        </section>

        {/* Trust / stats */}
        <section className="space-y-4" aria-labelledby="stats-title">
          <h2 id="stats-title" className="text-2xl font-semibold text-center">Why 60 days works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock className="w-6 h-6" />, value: '15-60 min', label: 'Daily commitment' },
              { icon: <Users className="w-6 h-6" />, value: '10k+', label: 'Students joined' },
              { icon: <TrendingUp className="w-6 h-6" />, value: '3x', label: 'Portfolio views*' },
              { icon: <Target className="w-6 h-6" />, value: '92%', label: 'Finish rate (internal)' },
            ].map((s, i) => (
              <Card key={i} variant="outlined" padding="md" className="text-center">
                <div className="mx-auto mb-2 text-primary-600 dark:text-primary-400" aria-hidden="true">{s.icon}</div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">{s.label}</div>
              </Card>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
            *Illustrative only - not verified ABTalks metrics.
          </p>
        </section>

        {/* Day 1 -> 30 -> 60 progression */}
        <section id="progress" className="space-y-6" aria-labelledby="growth-title">
          <h2 id="growth-title" className="text-2xl font-semibold text-center">Your public body of work grows</h2>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm" role="table">
              <thead>
                <tr className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                  <th className="pb-2 font-medium">Milestone</th>
                  <th className="pb-2 font-medium">What you have</th>
                  <th className="pb-2 font-medium">Recruiter signal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                <tr>
                  <td className="py-3 font-medium">Day 1</td>
                  <td>1 tiny repo + 1 LinkedIn post</td>
                  <td>Shows initiative</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Day 30</td>
                  <td>30 repos, varied stack, consistent rhythm</td>
                  <td>Demonstrates discipline & breadth</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Day 60</td>
                  <td>60 projects, a searchable portfolio site (auto-generated)</td>
                  <td>Strong evidence of shipping habit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800" aria-labelledby="cta-title">
          <h2 id="cta-title" className="text-2xl font-semibold">Ready to ship daily?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Join thousands of students turning consistency into credibility. No fee, no gatekeepers - just you, code, and proof.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={() => (window.location.href = '/dashboard')}>
            Start my 60‑day streak
            <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Button>
        </section>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 px-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} ABTalks - Built for students, by students.
      </footer>
    </div>
  );
};

export default Home;