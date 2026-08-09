import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-[72px] h-10',
    md: 'w-24 h-12',
    lg: 'w-32 h-16',
  };

  return (
    <div className="flex items-center">
      <img
        src="/ab-logo.png"
        alt="AB"
        className={`${sizeClasses[size] || sizeClasses.md} object-contain shrink-0`}
      />
    </div>
  );
};

export default BrandLogo;
