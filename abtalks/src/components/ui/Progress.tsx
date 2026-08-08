import React from 'react';

export interface ProgressProps {
  value: number; // 0-100
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  label?: string;
  className?: string;
  'aria-label'?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  label,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = Math.round((clamped / max) * 100);

  const sizeStyles = {
    xs: 'h-0.5',
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  
  const variantColors = {
    primary: isDark ? 'bg-white' : 'bg-black',
    success: 'bg-green-400',
    warning: 'bg-yellow-400',
    danger: 'bg-red-400',
  };

  return (
    <div className={`w-full ${className}`} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={ariaLabel}>
      <div className={`relative overflow-hidden rounded-full bg-surface-700 progress-3d ${sizeStyles[size]}`}>
        <div
          className={`${variantColors[variant]} h-full rounded-full transition-all duration-normal ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mt-1.5 text-xs text-text-muted mono">
          <span>{label ?? ''}</span>
          <span aria-hidden="true">{percent}%</span>
        </div>
      )}
    </div>
  );
};

// Circular progress for small contexts (e.g., daily completion ring)
export interface CircularProgressProps {
  value: number; // 0-100
  size?: number; // diameter in px
  strokeWidth?: number;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
  'aria-label'?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 48,
  strokeWidth = 4,
  variant = 'primary',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(value, 0), 100);
  const offset = circumference * (1 - clamped / 100);

  const variantColors = {
    primary: 'text-white dark:text-white',
    success: 'text-green-400 dark:text-green-400',
    warning: 'text-yellow-400 dark:text-yellow-400',
    danger: 'text-red-400 dark:text-red-400',
  };

  return (
    <svg
      className={`transform -rotate-90 ${variantColors[variant]} ${className}`}
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel ?? `Progress ${clamped}%`}
    >
      <circle
        className="text-surface-600 dark:text-gray-700"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="transition-all duration-normal ease-out"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ filter: 'drop-shadow(0 0 4px currentColor)' }}
      />
    </svg>
  );
};