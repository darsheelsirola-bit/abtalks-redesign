/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ABTalks Brand - Electric Lime primary, Warm Orange streak
        brand: {
          lime: {
            50: '#f4ffe8',
            100: '#e8ffc7',
            200: '#d1ff8f',
            300: '#adff47',
            400: '#8eff0d',
            500: '#78e800',  // Primary electric lime
            600: '#5ec700',
            700: '#479900',
            800: '#387300',
            900: '#2e5c00',
            950: '#182e00',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',  // Streak/warm accent
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
          },
        },
        // Dark surfaces - near-black charcoal
        surface: {
          950: '#050505',  // Deepest background
          900: '#0d0d0d',  // Main background
          800: '#141414',  // Elevated surfaces
          700: '#1c1c1c',  // Cards/panels
          600: '#262626',  // Borders/dividers
          500: '#3d3d3d',  // Muted elements
        },
        // Text hierarchy
        text: {
          primary: '#fafafa',      // Near-white
          secondary: '#a3a3a3',    // Muted gray
          muted: '#737373',        // Subtle/disabled
          inverse: '#050505',      // For on-accent text
        },
        // Semantic - using brand colors
        success: {
          500: '#78e800',  // Brand lime
          600: '#5ec700',
        },
        warning: {
          500: '#f97316',  // Brand orange
          600: '#ea580c',
        },
        danger: {
          500: '#ef4444',
          600: '#dc2626',
        },
        // Border
        border: {
          DEFAULT: '#262626',
          muted: '#1c1c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Mobile-first scale for 390px
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],     // 10px
        xs: ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],       // 12px
        sm: ['0.8125rem', { lineHeight: '1.375rem', letterSpacing: '0.01em' }],    // 13px
        base: ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0' }],           // 14px
        lg: ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],           // 16px
        xl: ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-0.01em' }],     // 18px
        '2xl': ['1.25rem', { lineHeight: '1.625rem', letterSpacing: '-0.02em' }],   // 20px
        '3xl': ['1.5rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],     // 24px
        '4xl': ['1.875rem', { lineHeight: '2rem', letterSpacing: '-0.03em' }],      // 30px
        '5xl': ['2.25rem', { lineHeight: '2.25rem', letterSpacing: '-0.04em' }],    // 36px
        // Special display sizes
        'display-sm': ['clamp(1.75rem, 5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(2.25rem, 7vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(3rem, 10vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      spacing: {
        0: '0',
        1: '0.25rem',   // 4px
        2: '0.5rem',    // 8px
        3: '0.75rem',   // 12px
        4: '1rem',      // 16px
        5: '1.25rem',   // 20px
        6: '1.5rem',    // 24px
        7: '1.75rem',   // 28px
        8: '2rem',      // 32px
        9: '2.25rem',   // 36px
        10: '2.5rem',   // 40px
        12: '3rem',     // 48px
        14: '3.5rem',   // 56px
        16: '4rem',     // 64px
      },
      borderRadius: {
        none: '0',
        sm: '0.375rem',   // 6px
        DEFAULT: '0.625rem', // 10px
        md: '0.75rem',    // 12px
        lg: '0.875rem',   // 14px
        xl: '1rem',       // 16px
        '2xl': '1.25rem', // 20px
        full: '9999px',
      },
      boxShadow: {
        'surface': '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        'elevated': '0 4px 12px -2px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
        'panel': '0 2px 8px -2px rgb(0 0 0 / 0.4)',
        'focus': '0 0 0 2px #78e800, 0 0 0 4px rgba(120, 232, 0, 0.15)',
        'glow-lime': '0 0 24px rgba(120, 232, 0, 0.25), 0 0 48px rgba(120, 232, 0, 0.1)',
        'glow-orange': '0 0 24px rgba(249, 115, 22, 0.25), 0 0 48px rgba(249, 115, 22, 0.1)',
      },
      transitionDuration: {
        'instant': '50ms',
        'fast': '120ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}