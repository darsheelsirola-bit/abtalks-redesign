import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline' | 'subtle';
export type BadgeSize = 'xs' | 'sm' | 'md';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const base = 'inline-flex items-center font-medium rounded-full';

const variantStyles = {
  default: 'bg-surface-700 text-gray-200',
  primary: 'bg-white/10 text-white border border-white/20',
  success: 'bg-green-900/30 text-green-300 border border-green-800',
  warning: 'bg-yellow-900/30 text-yellow-300 border border-yellow-800',
  danger: 'bg-red-900/30 text-red-300 border border-red-800',
  outline: 'bg-transparent text-gray-400 border border-surface-600',
  subtle: 'bg-white/5 text-white/60',
};

const sizeStyles: Record<'xs' | 'sm' | 'md', string> = {
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
  const variantClass = variantStyles[variant];

  return (
    <span className={`${base} ${variantClass} ${sizeStyles[size]} ${className}`} {...props}>
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'success'
              ? 'bg-green-400'
              : variant === 'warning'
              ? 'bg-yellow-400'
              : variant === 'danger'
              ? 'bg-red-400'
              : variant === 'primary'
              ? 'bg-white'
              : 'bg-gray-500'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
