import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-[51px] h-8',
    md: 'w-16 h-10',
    lg: 'w-[77px] h-12',
  };

  return (
    <div className="flex items-center gap-2">
      <img
        src="/ab-logo.png"
        alt="AB"
        className={`${sizeClasses[size] || sizeClasses.md} object-contain shrink-0`}
      />
      {showText && (
        <span className="text-xs text-text-muted uppercase tracking-wider hidden sm:block font-medium text-text-secondary">
          TALKS
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
