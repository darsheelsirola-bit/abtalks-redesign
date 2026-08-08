import React, { forwardRef, type ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  depth?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] active:translate-y-0.5 select-none relative overflow-hidden';

const variantStyles = {
  primary: 'bg-brand-lime-500 text-surface-950 hover:bg-brand-lime-400 active:bg-brand-lime-600 shadow-glow-lime',
  secondary: 'bg-surface-700 text-white hover:bg-surface-600 active:bg-surface-600 border border-border',
  ghost: 'bg-transparent text-white hover:bg-surface-800 active:bg-surface-700',
  danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
  outline: 'bg-transparent text-white border border-border hover:bg-surface-800 active:bg-surface-700',
};

const variantStylesLight = {
  primary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
  secondary: 'bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-300 border border-gray-300',
  ghost: 'bg-transparent text-black hover:bg-gray-100 active:bg-gray-200',
  danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
  outline: 'bg-transparent text-black border border-gray-300 hover:bg-gray-100 active:bg-gray-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5',
  xl: 'px-8 py-4 text-lg gap-3',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      depth = true,
      children,
      className = '',
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    const isDisabled = disabled || isLoading;

    const variantClass = isDark ? variantStyles[variant] : variantStylesLight[variant];
    const depthClass = depth ? 'btn-depth' : '';

    return (
      <button
        ref={ref}
        type="button"
        className={`${baseStyles} ${variantClass} ${sizeStyles[size]} ${depthClass} ${fullWidth ? 'w-full' : ''} ${className}`}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';