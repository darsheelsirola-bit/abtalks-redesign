import React, { useState, useEffect } from 'react';
import { Check, MessageSquareText, TriangleAlert } from 'lucide-react';

interface RecoveryPanelProps {
  isVisible: boolean;
  missedDay: number;
  currentStreak: number;
  onRecover: () => void;
  onDismiss?: () => void;
}

export const RecoveryPanel: React.FC<RecoveryPanelProps> = ({
  isVisible,
  missedDay,
  currentStreak,
  onRecover,
  onDismiss,
}) => {
  const [reflection, setReflection] = useState('');
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [proofSubmitted, setProofSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown timer (48 hours = 172800 seconds)
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const canRecover = challengeCompleted && proofSubmitted && reflection.trim().length >= 20;

  if (!isVisible) return null;

  return (
    <div className="animate-slide-up">
      <div className="relative bg-surface-700/60 border border-brand-orange-500/30 backdrop-blur-sm rounded-xl p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-orange-500/15 flex items-center justify-center">
              <TriangleAlert className="w-5 h-5 text-brand-orange-500" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider">Streak Paused</p>
              <h3 className="text-lg font-bold text-text-primary">Day {missedDay} Missed</h3>
            </div>
          </div>
          <div className="text-right">
            <span className="px-3 py-1.5 bg-brand-orange-500/15 text-brand-orange-500 text-xs font-mono rounded-lg border border-brand-orange-500/30">
              <span style={{fontFamily: 'monospace'}}>{formatTime(timeLeft)}</span> left
            </span>
          </div>
        </div>

        {/* Context */}
        <p className="text-sm text-text-secondary mb-5">
          Your <span className="font-medium text-brand-orange-500">{currentStreak}-day streak</span> is paused.
          Complete today's build, submit both proofs, and add a reflection to recover it.
        </p>

        {/* Recovery Steps */}
        <div className="space-y-3 mb-5" role="list" aria-label="Recovery steps">
          {/* Step 1: Complete Challenge */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-700/50">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mono ${
              challengeCompleted ? 'bg-brand-lime-500 text-surface-950' : 'bg-surface-600 text-text-muted'
            }`}>
              {challengeCompleted ? '✓' : '1'}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${challengeCompleted ? 'text-text-primary' : 'text-text-secondary'}`}>
                Complete today's challenge
              </p>
              <p className="text-xs text-text-muted">Build and commit your solution</p>
            </div>
            <label className="cursor-pointer w-11 h-11 flex items-center justify-center -mr-2">
              <input
                type="checkbox"
                checked={challengeCompleted}
                onChange={(e) => setChallengeCompleted(e.target.checked)}
                className="w-5 h-5 rounded border-border text-brand-lime-500 focus:ring-brand-lime-500"
                aria-label="Mark challenge as completed"
              />
            </label>
          </div>

          {/* Step 2: Submit Proofs */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-700/50">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mono ${
              proofSubmitted ? 'bg-brand-lime-500 text-surface-950' : 'bg-surface-600 text-text-muted'
            }`}>
              {proofSubmitted ? '✓' : '2'}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${proofSubmitted ? 'text-text-primary' : 'text-text-secondary'}`}>
                Submit GitHub & LinkedIn proof
              </p>
              <p className="text-xs text-text-muted">Paste URLs on the Day page</p>
            </div>
            <label className="cursor-pointer w-11 h-11 flex items-center justify-center -mr-2">
              <input
                type="checkbox"
                checked={proofSubmitted}
                onChange={(e) => setProofSubmitted(e.target.checked)}
                className="w-5 h-5 rounded border-border text-brand-lime-500 focus:ring-brand-lime-500"
                aria-label="Mark proofs as submitted"
              />
            </label>
          </div>

          {/* Step 3: Reflection */}
          <div className="p-3 rounded-lg bg-surface-700/50">
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium mono mt-0.5 ${
                reflection.trim().length >= 20 ? 'bg-brand-lime-500 text-surface-950' : 'bg-surface-600 text-text-muted'
              }`}>
                {reflection.trim().length >= 20 ? '✓' : '3'}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${reflection.trim().length >= 20 ? 'text-text-primary' : 'text-text-secondary'}`}>
                  Add reflection ({reflection.trim().length}/20 min chars)
                </p>
                <input
                  type="text"
                  placeholder="What happened? What did you learn?"
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  className="mt-2 min-h-11 w-full px-3 py-2 text-sm bg-surface-800 text-text-primary border border-border rounded-lg placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-lime-500 focus:border-brand-lime-500 disabled:opacity-40 disabled:pointer-events-none"
                  aria-label="Recovery reflection"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recovery CTA */}
        <button
          type="button"
          onClick={handleRecover}
          disabled={!canRecover || isSubmitted}
          className={`group w-full px-6 py-4 rounded-lg font-medium text-base transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] ${
            isSubmitted ? 'bg-brand-lime-500 text-surface-950' : canRecover ? 'bg-brand-lime-500 text-surface-950 shadow-glow-lime' : 'bg-transparent text-text-primary border border-border hover:bg-surface-800'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitted ? (
              <>
                <Check className="w-5 h-5" aria-hidden="true" />
                Streak Restored — {currentStreak + 1} Days
              </>
            ) : canRecover ? (
              <>
                <Check className="w-5 h-5" aria-hidden="true" />
                Recover Streak to {currentStreak + 1} Days
              </>
            ) : (
              <>
                <MessageSquareText className="w-5 h-5" aria-hidden="true" />
                Complete All Steps to Recover
              </>
            )}
          </span>
        </button>

        {isSubmitted && (
          <p className="mt-4 text-center text-sm text-brand-lime-500 animate-fade-in-up">
            Your streak has been restored. The missed day remains marked, but your streak continues.
          </p>
        )}

        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="mt-3 min-h-11 w-full text-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            Dismiss for now
          </button>
        )}
      </div>
    </div>
  );

  function handleRecover() {
    if (canRecover && !isSubmitted) {
      setIsSubmitted(true);
      onRecover();
    }
  }
};

export default RecoveryPanel;
