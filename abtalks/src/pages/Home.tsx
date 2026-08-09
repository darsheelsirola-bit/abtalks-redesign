import React from 'react';
import { ArrowRight, Clock3, TrendingUp, Users } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Flame } from 'lucide-react';
import { Code2 } from 'lucide-react';
import { WorkflowSection } from '@/components/WorkflowSection';

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Header - with depth */}
      <header className="sticky top-0 z-40 bg-surface-950/80 backdrop-blur-sm border-b border-border-subtle shadow-ambient">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold mono text-brand-lime-500">AB</span>
            <span className="text-sm text-text-muted uppercase tracking-wider hidden sm:block">TALKS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base text-text-secondary">
            <a href="#how" className="hover:text-brand-lime-500 transition-colors">How it works</a>
            <a href="#proof" className="hover:text-brand-lime-500 transition-colors">Proof</a>
            <a href="#progress" className="hover:text-brand-lime-500 transition-colors">Progress</a>
          </nav>
          <button
            type="button"
            className="md:hidden min-h-11 px-4 py-2 text-sm font-medium transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:translate-y-px bg-transparent text-text-primary hover:bg-surface-800 active:bg-surface-700 rounded-lg"
          >
            Join
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-5 pt-6 lg:pt-10 pb-20 space-y-10 lg:space-y-16">
        {/* Hero - with depth */}
        <section className="relative text-center space-y-5 lg:space-y-7 pt-4 pb-4 lg:pt-8 lg:pb-10 animate-slide-down-fade" aria-labelledby="hero-title">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-850 border border-border mb-1 animate-slide-up-fade">
            <Flame className="w-3.5 h-3.5 text-brand-orange-500" aria-hidden="true" />
            <span className="text-sm font-medium mono text-white tracking-wide">60 DAY CHALLENGE</span>
          </div>
          
          <h1 id="hero-title" className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.92] text-text-primary animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            60 DAYS.<br />
            60 BUILDS.<br />
            <span className="text-brand-lime-500">NO HIDING.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto animate-slide-up-fade leading-relaxed" style={{ animationDelay: '200ms' }}>
            Build something every day. Commit it. Share it publicly.<br />
            By Day 60, your work speaks before your résumé does.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
            <button
              type="button"
              onClick={() => (window.location.href = '/dashboard')}
              className="group w-full sm:w-auto px-8 min-h-[52px] rounded-lg font-semibold text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 bg-brand-lime-500 text-surface-950 hover:-translate-y-0.5 active:translate-y-px shadow-raised min-w-[180px]"
            >
              <span className="flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = '/day/12')}
              className="w-full sm:w-auto px-8 min-h-[52px] rounded-lg font-semibold text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 bg-transparent text-text-primary border border-border hover:bg-surface-800 active:translate-y-px min-w-[180px]"
            >
              See Day 12 Mission
            </button>
          </div>
</section>

        {/* The Loop - Workflow Section */}
        <WorkflowSection />

        {/* Live Challenge Preview - Floating card */}
        <section id="proof" className="space-y-8 animate-slide-up-fade" style={{ animationDelay: '500ms' }} aria-labelledby="preview-title">
          <div className="text-center mb-10">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-3">LIVE PREVIEW</p>
            <h2 id="preview-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary">WHAT A DAY LOOKS LIKE</h2>
          </div>

          <div className="card-floating p-6 lg:p-8 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-surface-700/50 flex items-center justify-center border border-white/10">
                <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="primary" size="sm">DAY 12</Badge>
                  <Badge variant="subtle" size="sm">60 MIN</Badge>
                  <Badge variant="outline" size="sm">MEDIUM</Badge>
                </div>
                <h3 className="font-bold text-text-primary text-xl mb-3">REST API WITH EXPRESS + TYPESCRIPT</h3>
                <p className="text-text-secondary text-base">
                  Create a Study Tracker API: CRUD for sessions (subject, duration, date). 
                  Use Express, TypeScript, Zod validation, proper HTTP codes.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  <Badge variant="outline" size="xs">backend</Badge>
                  <Badge variant="outline" size="xs">express</Badge>
                  <Badge variant="outline" size="xs">typescript</Badge>
                  <Badge variant="outline" size="xs">validation</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="card-raised p-5 shadow-raised">
                <p className="text-sm text-text-muted mb-3">GitHub Proof</p>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime-500 animate-pulse-subtle" aria-hidden="true"></span>
                  <Badge variant="primary" size="sm">Verified</Badge>
                </div>
              </div>
              <div className="card-raised p-5 shadow-raised">
                <p className="text-xs text-text-muted mb-3">LinkedIn Proof</p>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime-500 animate-pulse-subtle" aria-hidden="true"></span>
                  <Badge variant="primary" size="sm">Verified</Badge>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-text-muted uppercase tracking-wider mono">CHALLENGE PROGRESS</span>
                <span className="text-sm font-semibold mono text-white">20%</span>
              </div>
              <div className="relative h-2.5 bg-surface-700 rounded-full overflow-hidden progress-3d">
                <div
                  className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out"
                  style={{ width: '20%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why 60 Days - Stats with floating cards */}
        <section className="space-y-8 animate-slide-up-fade" style={{ animationDelay: '300ms' }} aria-labelledby="stats-title">
          <div className="text-center mb-10">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-3">WHY 60 DAYS</p>
            <h2 id="stats-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary">THE PSYCHOLOGY OF CONSISTENCY</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 animate-stagger-in">
            {[
              { icon: <Clock3 className="w-6 h-6" aria-hidden="true" />, value: '15–60 min', label: 'Daily Commitment' },
              { icon: <Flame className="w-6 h-6 text-brand-orange-500" aria-hidden="true" />, value: '72%', label: 'Streak Retention' },
              { icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />, value: '3.2×', label: 'Portfolio Views' },
              { icon: <Users className="w-6 h-6" aria-hidden="true" />, value: '12K+', label: 'Builders Joined' },
            ].map((s, i) => (
              <div key={i} className="border-t border-border pt-5 text-center lg:text-left">
                <div className="w-10 h-10 mx-auto lg:mx-0 mb-4 rounded-lg flex items-center justify-center bg-surface-800 border border-border text-text-secondary">
                  {s.icon}
                </div>
                <div className="text-4xl font-extrabold mono text-text-primary">{s.value}</div>
                <div className="text-sm text-text-muted mt-2">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted text-center mt-6">*Based on internal alpha data. Not independently verified.</p>
        </section>

        {/* Growth Visualization */}
        <section id="progress" className="space-y-10 animate-slide-up-fade" style={{ animationDelay: '400ms' }} aria-labelledby="growth-title">
          <div className="text-center mb-10">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-3">YOUR TRAJECTORY</p>
            <h2 id="growth-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary">DAY 1 → DAY 30 → DAY 60</h2>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[560px]" role="table">
              <thead>
                <tr className="text-left text-text-muted border-b border-border">
                  <th className="pb-4 font-medium text-xs uppercase tracking-wider">MILESTONE</th>
                  <th className="pb-4 font-medium text-xs uppercase tracking-wider">WHAT YOU HAVE</th>
                  <th className="pb-4 font-medium text-xs uppercase tracking-wider">RECRUITER SIGNAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-white/5 hover:shadow-inner-deep">
                  <td className="py-5 font-bold mono text-brand-lime-500 text-lg">DAY 1</td>
                  <td className="py-5 text-text-secondary text-base">1 repo · 1 LinkedIn post · First commit</td>
                  <td className="py-5 text-text-secondary text-base">Shows initiative & bias for action</td>
                </tr>
                <tr className="hover:bg-white/5 hover:shadow-inner-deep">
                  <td className="py-5 font-bold mono text-brand-orange-500 text-lg">DAY 30</td>
                  <td className="py-5 text-text-secondary text-base">30 repos · Varied stack · Consistent rhythm</td>
                  <td className="py-5 text-text-secondary text-base">Demonstrates discipline & breadth</td>
                </tr>
                <tr className="hover:bg-white/5 hover:shadow-inner-deep">
                  <td className="py-5 font-bold mono text-brand-lime-500 text-lg">DAY 60</td>
                  <td className="py-5 text-text-secondary text-base">60 projects · Searchable portfolio · Streak record</td>
                  <td className="py-5 text-text-secondary text-base">Strong evidence of shipping habit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final CTA - Floating card */}
        <section className="text-center space-y-8 pt-14 border-t border-border animate-slide-up-fade" style={{ animationDelay: '500ms' }} aria-labelledby="cta-title">
          <h2 id="cta-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary">
            Ready to Ship Daily?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg">
            Join thousands of students turning consistency into credibility. 
            No fee, no gatekeepers — just you, code, and proof.
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = '/dashboard')}
            className="group w-full sm:w-auto px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] bg-white text-black hover:bg-gray-200 active:bg-gray-300 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_2px_4px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-fast min-h-[60px]"
          >
            <span className="flex items-center justify-center gap-3">
              Start My 60-Day Streak
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </span>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 text-center text-sm text-text-muted">
        <p>ABTalks — 60 Days. 60 Builds. No Hiding.</p>
        <p className="mt-2">Built for students, by students.</p>
      </footer>
    </div>
  );
};

export default Home;
