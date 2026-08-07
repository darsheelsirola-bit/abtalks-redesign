import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
export type BadgeSize = 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const base = 'inline-flex items-center font-medium rounded-full';

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300',
  success: 'bg-success-500/10 text-success-600 dark:bg-success-500/20 dark:text-success-400',
  warning: 'bg-warning-500/10 text-warning-600 dark:bg-warning-500/20 dark:text-warning-400',
  danger: 'bg-danger-500/10 text-danger-600 dark:bg-danger-500/20 dark:text-danger-400',
  outline: 'bg-transparent border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-sm gap-1.5',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className = '',
  ...props
}) => {
  return (
    <span className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'success'
              ? 'bg-success-500'
              : variant === 'warning'
              ? 'bg-warning-500'
              : variant === 'danger'
              ? 'bg-danger-500'
              : variant === 'primary'
              ? 'bg-primary-500'
              : 'bg-neutral-400'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};