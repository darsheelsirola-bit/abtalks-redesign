import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'recessed' | 'base' | 'raised' | 'floating' | 'panel';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  depth?: 0 | 1 | 2 | 3; // for nested depth
}

const variantStyles = {
  recessed: 'bg-surface-850 border border-border-subtle shadow-inner-deep',
  base: 'bg-surface-800 border border-border/50 shadow-ambient',
  raised: 'bg-surface-750 border border-border/30 shadow-raised',
  floating: 'bg-surface-700 border border-border/20 shadow-floating',
  panel: 'bg-surface-700/40 backdrop-blur-sm border border-border/50 shadow-panel',
};

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

// Depth-based style modifier (for nested cards)
const depthStyles: Record<0 | 1 | 2 | 3, string> = {
  0: '',
  1: 'relative z-10',
  2: 'relative z-20 shadow-raised',
  3: 'relative z-30 shadow-floating',
};

export const Card: React.FC<CardProps> = ({
  variant = 'base',
  padding = 'md',
  hover = false,
  depth = 0,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${depthStyles[depth]} rounded-xl transition-all duration-normal ${hover ? 'hover:-translate-y-0.5 hover:shadow-elevated cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mb-4 ${className}`} {...props}>{children}</div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h3 className={`text-lg font-semibold text-text-primary ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm text-text-secondary mt-1 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => <div className={className} {...props}>{children}</div>;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <div className={`mt-6 pt-4 border-t border-border/50 flex items-center gap-2 ${className}`} {...props}>
    {children}
  </div>
);