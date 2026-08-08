import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Flame } from 'lucide-react';

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
            className="md:hidden px-4 py-2 text-sm font-medium transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] bg-transparent text-text-primary hover:bg-surface-800 active:bg-surface-700 rounded-lg"
          >
            Join
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-8 lg:pt-12 pb-20 space-y-12 lg:space-y-16 xl:space-y-20">
        {/* Hero - with depth */}
        <section className="text-center space-y-6 lg:space-y-8 pt-4 lg:pt-8 animate-slide-down-fade" aria-labelledby="hero-title">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 animate-slide-up-fade">
            <Flame className="w-3.5 h-3.5 text-brand-orange-500" aria-hidden="true" />
            <span className="text-sm font-medium mono text-white tracking-wide">60 DAY CHALLENGE</span>
          </div>
          
          <h1 id="hero-title" className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.92] text-text-primary animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            60 DAYS.<br />
            60 BUILDS.<br />
            <span className="text-brand-lime-500">NO HIDING.</span>
          </h1>
          
          <p className="text-lg lg:text-xl xl:text-2xl text-text-secondary max-w-3xl mx-auto animate-slide-up-fade leading-relaxed" style={{ animationDelay: '200ms' }}>
            Build something every day. Commit it. Share it publicly.<br />
            By Day 60, your work speaks before your résumé does.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
            <button
              type="button"
              onClick={() => (window.location.href = '/dashboard')}
              className="group w-full sm:w-auto px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] active:translate-y-0.5 bg-white text-black hover:bg-gray-200 active:bg-gray-300 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_2px_4px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.3)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5),0_4px_12px_-2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(120,232,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0.5 transition-all duration-fast min-h-[56px] min-w-[180px]"
            >
              <span className="flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = '/day/12')}
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 active:scale-[0.98] bg-transparent text-white border border-white/20 hover:bg-white/5 active:bg-white/10 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-fast min-h-[56px] min-w-[180px]"
            >
              See Day 12 Mission
            </button>
          </div>
        </section>

        {/* The Loop - Visual Flow with depth */}
        <section id="how" className="space-y-10 animate-slide-up-fade" style={{ animationDelay: '400ms' }} aria-labelledby="loop-title">
          <div className="text-center mb-10">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-3">THE LOOP</p>
            <h2 id="loop-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">BUILD → COMMIT → SHARE → REPEAT</h2>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2" aria-hidden="true" />
            
            <div className="space-y-10 animate-stagger-in">
              {[
                { 
                  icon: <span className="w-7 h-7" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'7\' fill=\'%2378e800\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'BUILD', 
                  desc: 'Pick the day\'s micro-project (15–60 min). Ship something real.',
                  bg: 'bg-white/5',
                  border: 'border-white/10'
                },
                { 
                  icon: <span className="w-7 h-7" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Cpath d=\'M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7S10.87 0 7 0zm0 12.5C3.96 12.5 1.5 10.04 1.5 7S3.96 1.5 7 1.5 12.5 3.96 12.5 7 10.04 12.5 7 12.5zm-2-5v-2h2v2h-2zm0-4v-2h2v2h-2z\' fill=\'%2324292e\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'COMMIT', 
                  desc: 'Push code to a public GitHub repo. Evidence exists.',
                  bg: 'bg-white/5',
                  border: 'border-white/10'
                },
                { 
                  icon: <span className="w-7 h-7" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 14 14\'%3E%3Cpath d=\'M12.5 0h-11C.67 0 0 .67 0 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11C14 .67 13.33 0 12.5 0zM11 11H3V3h8v8z\' fill=\'%230077b5\'/%3E%3C/svg%3E")'}} aria-hidden="true"></span>, 
                  title: 'SHARE', 
                  desc: 'Post a short LinkedIn reflection. Make it visible.',
                  bg: 'bg-white/5',
                  border: 'border-white/10'
                },
                { 
                  icon: <Flame className="w-7 h-7 text-brand-orange-500" aria-hidden="true" />, 
                  title: 'REPEAT', 
                  desc: 'Streak grows. Portfolio compounds. Day 60 arrives.',
                  bg: 'bg-white/5',
                  border: 'border-white/10'
                },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 lg:flex-row lg:items-center animate-slide-up-fade" style={{ animationDelay: `${100 + i * 100}ms` }}>
                  {/* Connector dot */}
                  <div className="absolute left-1/2 top-4 w-3 h-3 rounded-full border-4 -translate-x-1/2 z-10 bg-surface-950 border-white/20" aria-hidden="true" />
                  
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-10 text-right' : 'lg:pl-10 lg:ml-auto'} min-w-[300px]`}>
                    <div className={`p-6 lg:p-8 rounded-2xl border transition-all duration-fast hover:shadow-floating hover:-translate-y-1 bg-white/5 border-white/10 card-floating`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-white/10">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-text-primary text-xl lg:text-2xl">{step.title}</h3>
                          <p className="text-base text-text-secondary mt-2">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {i < 3 && (
                    <div className="absolute left-1/2 top-24 w-px h-20 bg-gradient-to-b from-transparent to-surface-600 -translate-x-1/2" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Challenge Preview - Floating card */}
        <section id="proof" className="space-y-8 animate-slide-up-fade" style={{ animationDelay: '500ms' }} aria-labelledby="preview-title">
          <div className="text-center mb-10">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-3">LIVE PREVIEW</p>
            <h2 id="preview-title" className="text-4xl lg:text-5xl font-extrabold text-text-primary">WHAT A DAY LOOKS LIKE</h2>
          </div>

          <div className="card-floating p-6 lg:p-8 animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shadow-[0_0_12px_rgba(120,232,0,0.2)]">
                <span className="w-8 h-8 text-brand-lime-500" aria-hidden="true">✓</span>
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
              <div className="relative h-2.5 bg-surface-700 rounded-full overflow-hidden progress-3d">
                <div
                  className="h-full bg-brand-lime-500 rounded-full transition-all duration-normal ease-out"
                  style={{ width: '20%' }}
                />
              </div>
              <div className="flex justify-between mt-3 text-sm text-text-muted mono">
                <span>0%</span>
                <span>20%</span>
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
              { icon: <span className="w-7 h-7" aria-hidden="true">⏱</span>, value: '15–60 min', label: 'Daily Commitment' },
              { icon: <span className="w-7 h-7" aria-hidden="true">🔥</span>, value: '72%', label: 'Streak Retention' },
              { icon: <span className="w-7 h-7" aria-hidden="true">📈</span>, value: '3.2×', label: 'Portfolio Views' },
              { icon: <span className="w-7 h-7" aria-hidden="true">👥</span>, value: '12K+', label: 'Builders Joined' },
            ].map((s, i) => (
              <div key={i} className="card-floating p-6 text-center hover:shadow-floating hover:-translate-y-1 transition-all duration-fast">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-white/5">
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