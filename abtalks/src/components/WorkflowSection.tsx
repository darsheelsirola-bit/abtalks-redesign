import React from 'react';
import { Code2, GitBranch, Share2, RefreshCw } from 'lucide-react';

interface WorkflowStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    title: 'BUILD',
    description: "Pick today's challenge.\nShip something real."
  },
  {
    id: 2,
    icon: <GitBranch className="w-5 h-5" aria-hidden="true" />,
    title: 'COMMIT',
    description: 'Push your code to GitHub.\nLeave proof of progress.'
  },
  {
    id: 3,
    icon: <Share2 className="w-5 h-5" aria-hidden="true" />,
    title: 'SHARE',
    description: 'Post what you built.\nMake your work visible.'
  },
  {
    id: 4,
    icon: <RefreshCw className="w-5 h-5" aria-hidden="true" />,
    title: 'REPEAT',
    description: 'Come back tomorrow.\nLet the streak compound.'
  }
] as const;

function WorkflowPanel({ step }: { step: typeof workflowSteps[0] }) {
  return (
    <div className="relative border-t border-surface-600 p-4 sm:p-5 transition-all duration-normal lg:hover:-translate-y-0.5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -mx-1 rounded-t-xl" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center border border-border text-brand-lime-500">
          {step.icon}
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-xl font-semibold text-text-primary tracking-tight leading-snug">{step.title}</h3>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed whitespace-pre-line">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export const WorkflowSection: React.FC = () => {
  return (
    <section id="how" className="relative py-10 lg:py-16" aria-labelledby="loop-title">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-0 mb-8 lg:mb-12">
        <div className="text-center mb-8">
          <p className="section-kicker mb-3">THE LOOP</p>
          <h2 id="loop-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-[-0.04em] text-balance">
            BUILD → COMMIT → SHARE → REPEAT
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-0">
        {/* DESKTOP LAYOUT (>= lg) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] gap-y-10 lg:gap-y-12 gap-x-0">
            {/* ROW 1: BUILD left */}
            <div className="col-start-1 relative">
              <WorkflowPanel step={workflowSteps[0]} />
            </div>
            {/* center node */}
            <div className="col-start-2 flex items-center justify-center relative z-10">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-surface-600 via-surface-600/50 to-transparent" aria-hidden="true" />
                <div className="relative w-3 h-3 rounded-full bg-brand-lime-500 ring-2 ring-brand-lime-500/20 shadow-[0_0_12px_rgba(120,232,0,0.8)]" aria-hidden="true" />
              </div>
            </div>
            {/* empty right */}
            <div className="col-start-3" />

            {/* ROW 2: COMMIT right */}
            <div className="col-start-1" />
            {/* center node */}
            <div className="col-start-2 flex items-center justify-center relative z-10">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-surface-600 via-surface-600/50 to-transparent" aria-hidden="true" />
                <div className="relative w-3 h-3 rounded-full bg-brand-lime-500 ring-2 ring-brand-lime-500/20 shadow-[0_0_12px_rgba(120,232,0,0.8)]" aria-hidden="true" />
              </div>
            </div>
            <div className="col-start-3 relative">
              <WorkflowPanel step={workflowSteps[1]} />
            </div>

            {/* ROW 3: SHARE left */}
            <div className="col-start-1 relative">
              <WorkflowPanel step={workflowSteps[2]} />
            </div>
            {/* center node */}
            <div className="col-start-2 flex items-center justify-center relative z-10">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-surface-600 via-surface-600/50 to-transparent" aria-hidden="true" />
                <div className="relative w-3 h-3 rounded-full bg-brand-lime-500 ring-2 ring-brand-lime-500/20 shadow-[0_0_12px_rgba(120,232,0,0.8)]" aria-hidden="true" />
              </div>
            </div>
            <div className="col-start-3" />

            {/* ROW 4: REPEAT right */}
            <div className="col-start-1" />
            {/* center node */}
            <div className="col-start-2 flex items-center justify-center relative z-10">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-surface-600 via-surface-600/50 to-transparent" aria-hidden="true" />
                <div className="relative w-3 h-3 rounded-full bg-brand-lime-500 ring-2 ring-brand-lime-500/20 shadow-[0_0_12px_rgba(120,232,0,0.8)]" aria-hidden="true" />
              </div>
            </div>
            <div className="col-start-3 relative">
              <WorkflowPanel step={workflowSteps[3]} />
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (<= 640px) */}
        <div className="lg:hidden block">
          <div className="grid grid-cols-[28px_1fr] gap-y-3 gap-x-0">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Rail node */}
                <div className="col-start-1 flex items-center justify-center relative">
                  <div className="relative w-3 h-3 rounded-full bg-brand-lime-500 ring-2 ring-brand-lime-500/20 shadow-[0_0_12px_rgba(120,232,0,0.8)]" aria-hidden="true" />
                  {index < 3 && (
                    <div className="absolute top-full bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-surface-600 to-transparent" aria-hidden="true" />
                  )}
                </div>
                {/* Card on right */}
                <div className="col-start-2">
                  <WorkflowPanel step={step} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
