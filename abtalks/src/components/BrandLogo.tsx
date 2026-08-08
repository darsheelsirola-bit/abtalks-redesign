import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizeClasses[size]} rounded-lg bg-surface-750 border border-surface-600 flex items-center justify-center shadow-raised`}>
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -mx-1 rounded-t-lg" aria-hidden="true" />
        <span className={`font-bold mono text-text-primary relative z-10 ${textSizeClasses[size]}`}>AB</span>
        {/* Subtle lime accent on the B */}
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-lime-500" aria-hidden="true" />
      </div>
      {showText && (
        <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:block font-medium text-text-secondary">
          TALKS
        </span>
      )}
    </div>
  );
};

export default BrandLogo;