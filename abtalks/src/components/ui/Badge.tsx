import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline' | 'lime' | 'orange';
export type BadgeSize = 'xs' | 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const base = 'inline-flex items-center font-medium rounded-full';

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface-600 text-text-secondary',
  primary: 'bg-brand-lime-500/15 text-brand-lime-500 border border-brand-lime-500/30',
  success: 'bg-brand-lime-500/15 text-brand-lime-500 border border-brand-lime-500/30',
  warning: 'bg-brand-orange-500/15 text-brand-orange-500 border border-brand-orange-500/30',
  danger: 'bg-danger-500/15 text-danger-500 border border-danger-500/30',
  outline: 'bg-transparent text-text-secondary border border-border',
  lime: 'bg-brand-lime-500 text-surface-950',
  orange: 'bg-brand-orange-500 text-surface-950',
};

const sizeStyles: Record<BadgeSize, string> = {
  xs: 'px-2 py-0.5 text-xs gap-1',
  sm: 'px-2.5 py-1 text-xs gap-1.5',
  md: 'px-3 py-1.5 text-sm gap-2',
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
            variant === 'success' || variant === 'lime'
              ? 'bg-brand-lime-500'
              : variant === 'warning' || variant === 'orange'
              ? 'bg-brand-orange-500'
              : variant === 'danger'
              ? 'bg-danger-500'
              : 'bg-text-muted'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};