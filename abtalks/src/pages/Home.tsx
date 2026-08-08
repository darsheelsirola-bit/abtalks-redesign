import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-surface-900/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold mono text-brand-lime-500">AB</span>
            <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:block">TALKS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
            <a href="#how" className="hover:text-brand-lime-500 transition-colors">How it works</a>
            <a href="#proof" className="hover:text-brand-lime-500 transition-colors">Proof</a>
            <a href="#progress" className="hover:text-brand-lime-500 transition-colors">Progress</a>
          </nav>
          <button
            type="button"
            className="md:hidden px-3 py-1.5 text-xs font-medium transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] bg-transparent text-text-primary hover:bg-surface-800 active:bg-surface-700"
          >
            Join
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 lg:py-20 lg:px-8 pb-20 space-y-10 lg:space-y-16 lg:space-y-20">
        {/* Hero */}
        <section className="text-center space-y-6 lg:space-y-8 pt-10 lg:pt-20" aria-labelledby="hero-title">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lime-500/10 border border-brand-lime-500/20 mb-6 animate-fade-in-up">
            <span className="w-4 h-4 text-brand-orange-500" aria-hidden="true">🔥</span>
            <span className="text-xs font-medium mono text-brand-orange-500">60 DAY CHALLENGE</span>
          </div>
          
          <h1 id="hero-title" className="display-lg font-bold tracking-tight leading-[1] text-text-primary animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            60 DAYS.<br />
            60 BUILDS.<br />
            <span className="text-brand-lime-500">NO HIDING.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Build something every day. Commit it. Share it publicly.<br />
            By Day 60, your work speaks before your résumé does.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <button
              type="button"
              onClick={() => (window.location.href = '/dashboard')}
              className="group w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] bg-brand-lime-500 text-surface-950 hover:bg-brand-lime-400 active:bg-brand-lime-600 shadow-glow-lime"
            >
              <span className="flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = '/day/12')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] bg-transparent text-text-primary border border-border hover:bg-surface-800 active:bg-surface-700"
            >
              See Day 12 Mission
            </button>
          </div>
        </section>

        {/* The Loop - Visual Flow */}
        <section id="how" className="space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }} aria-labelledby="loop-title">
          <div className="text-center mb-8">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">THE LOOP</p>
            <h2 id="loop-title" className="text-3xl lg:text-4xl font-bold text-text-primary">BUILD → COMMIT → SHARE → REPEAT</h2>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-lime-500/50 via-brand-orange-500/50 to-surface-600 -translate-x-1/2" aria-hidden="true" />
            
            <div className="space-y-8">
              {[
                { 
                  icon: <span className="w-6 h-6" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'7\' fill=\'%2378e800\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'BUILD', 
                  desc: 'Pick the day\'s micro-project (15–60 min). Ship something real.',
                  color: 'brand-lime-500',
                  bg: 'bg-brand-lime-500/10',
                  border: 'border-brand-lime-500/20'
                },
                { 
                  icon: <span className="w-6 h-6" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Cpath d=\'M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7S10.87 0 7 0zm0 12.5C3.96 12.5 1.5 10.04 1.5 7S3.96 1.5 7 1.5 12.5 3.96 12.5 7 10.04 12.5 7 12.5zm-2-5v-2h2v2h-2zm0-4v-2h2v2h-2z\' fill=\'%2324292e\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'COMMIT', 
                  desc: 'Push code to a public GitHub repo. Evidence exists.',
                  color: 'brand-orange-500',
                  bg: 'bg-brand-orange-500/10',
                  border: 'border-brand-orange-500/20'
                },
                { 
                  icon: <span className="w-6 h-6" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Cpath d=\'M12.5 0h-11C.67 0 0 .67 0 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11C14 .67 13.33 0 12.5 0zM11 11H3V3h8v8z\' fill=\'%230077b5\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'SHARE', 
                  desc: 'Post a short LinkedIn reflection. Make it visible.',
                  color: 'brand-lime-500',
                  bg: 'bg-brand-lime-500/10',
                  border: 'border-brand-lime-500/20'
                },
                { 
                  icon: <span className="w-6 h-6" aria-hidden="true">🔥</span>, 
                  title: 'REPEAT', 
                  desc: 'Streak grows. Portfolio compounds. Day 60 arrives.',
                  color: 'brand-orange-500',
                  bg: 'bg-brand-orange-500/10',
                  border: 'border-brand-orange-500/20'
                },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 lg:flex-row lg:items-center">
                  {/* Connector dot */}
                  <div className="absolute left-1/2 top-4 w-3 h-3 rounded-full border-4 -translate-x-1/2 z-10" 
                       style={{ backgroundColor: '#0d0d0d', borderColor: step.color }} aria-hidden="true" />
                  
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-8 text-right' : 'lg:pl-8 lg:ml-auto'} min-w-[280px]`}>
                    <div className={`p-5 lg:p-6 rounded-xl border transition-all duration-fast hover:shadow-elevated hover:-translate-y-1 ${step.bg} ${step.border}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white`} style={{ backgroundColor: step.color }}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-text-primary text-lg lg:text-xl">{step.title}</h3>
                          <p className="text-sm text-text-secondary mt-1">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {i < 3 && (
                    <div className="absolute left-1/2 top-20 w-px h-16 bg-gradient-to-b from-transparent to-surface-600 -translate-x-1/2" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Challenge Preview */}
        <section id="proof" className="space-y-6 animate-fade-in-up" aria-labelledby="preview-title">
          <div className="text-center mb-8">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">LIVE PREVIEW</p>
            <h2 id="preview-title" className="text-3xl font-bold text-text-primary">WHAT A DAY LOOKS LIKE</h2>
          </div>

          <div className="bg-surface-700/40 border border-border/50 rounded-xl p-5 lg:p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-lime-500/15 flex items-center justify-center">
                <span className="w-7 h-7 text-brand-lime-500" aria-hidden="true">✓</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 text-xs bg-brand-lime-500 text-surface-950 rounded-full">DAY 12</span>
                  <span className="px-2.5 py-1 text-xs bg-brand-orange-500 text-surface-950 rounded-full">60 MIN</span>
                  <span className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border rounded-full">MEDIUM</span>
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">REST API WITH EXPRESS + TYPESCRIPT</h3>
                <p className="text-text-secondary text-sm">
                  Create a Study Tracker API: CRUD for sessions (subject, duration, date). 
                  Use Express, TypeScript, Zod validation, proper HTTP codes.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border rounded-full">backend</span>
                  <span className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border rounded-full">express</span>
                  <span className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border rounded-full">typescript</span>
                  <span className="px-2.5 py-1 text-xs bg-transparent text-text-secondary border border-border rounded-full">validation</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-surface-800 rounded-lg p-4">
                <p className="text-xs text-text-muted mb-2">GitHub Proof</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-lime-500 animate-pulse-subtle" aria-hidden="true"></span>
                  <span className="px-2.5 py-1 text-xs bg-brand-lime-500 text-surface-950 rounded-full">Verified</span>
                </div>
              </div>
              <div className="bg-surface-800 rounded-lg p-4">
                <p className="text-xs text-text-muted mb-2">LinkedIn Proof</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-lime-500 animate-pulse-subtle" aria-hidden="true"></span>
                  <span className="px-2.5 py-1 text-xs bg-brand-lime-500 text-surface-950 rounded-full">Verified</span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative h-2 bg-surface-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out"
                  style={{ width: '20%' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-text-muted mono">
                <span>0%</span>
                <span>20%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why 60 Days - Stats with real product UI */}
        <section className="space-y-6 animate-fade-in-up" aria-labelledby="stats-title">
          <div className="text-center mb-8">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">WHY 60 DAYS</p>
            <h2 id="stats-title" className="text-3xl font-bold text-text-primary">THE PSYCHOLOGY OF CONSISTENCY</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <span className="w-6 h-6" aria-hidden="true">⏱</span>, value: '15–60 min', label: 'Daily Commitment' },
              { icon: <span className="w-6 h-6" aria-hidden="true">🔥</span>, value: '72%', label: 'Streak Retention' },
              { icon: <span className="w-6 h-6" aria-hidden="true">📈</span>, value: '3.2×', label: 'Portfolio Views' },
              { icon: <span className="w-6 h-6" aria-hidden="true">👥</span>, value: '12K+', label: 'Builders Joined' },
            ].map((s, i) => (
              <div key={i} className="bg-surface-700/40 border border-border/50 rounded-xl p-5 text-center hover:shadow-elevated hover:-translate-y-1 transition-all duration-fast">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center`} style={{ backgroundColor: `rgba(120, 232, 0, 0.1)` }}>
                  {s.icon}
                </div>
                <div className="text-3xl font-bold mono text-text-primary">{s.value}</div>
                <div className="text-xs text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center">*Based on internal alpha data. Not independently verified.</p>
        </section>

        {/* Growth Visualization */}
        <section id="progress" className="space-y-6 animate-fade-in-up" aria-labelledby="growth-title">
          <div className="text-center mb-8">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">YOUR TRAJECTORY</p>
            <h2 id="growth-title" className="text-3xl font-bold text-text-primary">DAY 1 → DAY 30 → DAY 60</h2>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[500px]" role="table">
              <thead>
                <tr className="text-left text-text-muted border-b border-border">
                  <th className="pb-3 font-medium text-xs uppercase tracking-wider">MILESTONE</th>
                  <th className="pb-3 font-medium text-xs uppercase tracking-wider">WHAT YOU HAVE</th>
                  <th className="pb-3 font-medium text-xs uppercase tracking-wider">RECRUITER SIGNAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="hover:bg-surface-700/30">
                  <td className="py-4 font-bold mono text-brand-lime-500">DAY 1</td>
                  <td className="py-4 text-text-secondary">1 repo · 1 LinkedIn post · First commit</td>
                  <td className="py-4 text-text-secondary">Shows initiative & bias for action</td>
                </tr>
                <tr className="hover:bg-surface-700/30">
                  <td className="py-4 font-bold mono text-brand-orange-500">DAY 30</td>
                  <td className="py-4 text-text-secondary">30 repos · Varied stack · Consistent rhythm</td>
                  <td className="py-4 text-text-secondary">Demonstrates discipline & breadth</td>
                </tr>
                <tr className="hover:bg-surface-700/30">
                  <td className="py-4 font-bold mono text-brand-lime-500">DAY 60</td>
                  <td className="py-4 text-text-secondary">60 projects · Searchable portfolio · Streak record</td>
                  <td className="py-4 text-text-secondary">Strong evidence of shipping habit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-6 pt-10 border-t border-border animate-fade-in-up" aria-labelledby="cta-title">
          <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold text-text-primary">
            Ready to Ship Daily?
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Join thousands of students turning consistency into credibility. 
            No fee, no gatekeepers — just you, code, and proof.
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = '/dashboard')}
            className="group w-full sm:w-auto px-8 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] bg-brand-lime-500 text-surface-950 hover:bg-brand-lime-400 active:bg-brand-lime-600 shadow-glow-lime"
          >
            <span className="flex items-center justify-center gap-2">
              Start My 60-Day Streak
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </span>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center text-xs text-text-muted">
        <p>ABTalks — 60 Days. 60 Builds. No Hiding.</p>
        <p className="mt-1">Built for students, by students.</p>
      </footer>
    </div>
  );
};

export default Home;