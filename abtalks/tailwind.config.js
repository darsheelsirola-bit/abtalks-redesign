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
        // Primary accent - confident teal
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // main accent
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Neutral grayscale for surfaces
        neutral: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Semantic colors
        success: {
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        danger: {
          500: '#ef4444',
          600: '#dc2626',
        },
        // Surface tokens for dark/light
        surface: {
          light: '#ffffff',
          dark: '#0a0a0a',
          elevatedLight: '#fafafa',
          elevatedDark: '#171717',
        },
        // Text tokens
        text: {
          primaryLight: '#171717',
          primaryDark: '#fafafa',
          secondaryLight: '#525252',
          secondaryDark: '#a3a3a3',
          mutedLight: '#737373',
          mutedDark: '#737373',
        },
        border: {
          light: '#e5e5e5',
          dark: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Mobile-first scale, 4px baseline
        '2xs': ['0.625rem', { lineHeight: '1rem' }],      // 10px
        xs: ['0.75rem', { lineHeight: '1rem' }],          // 12px
        sm: ['0.8125rem', { lineHeight: '1.25rem' }],     // 13px
        base: ['0.9375rem', { lineHeight: '1.5rem' }],    // 15px
        lg: ['1rem', { lineHeight: '1.5rem' }],           // 16px
        xl: ['1.125rem', { lineHeight: '1.75rem' }],      // 18px
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
        '3xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
      },
      spacing: {
        // 4px base, extra steps for density
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
        20: '5rem',     // 80px
        24: '6rem',     // 96px
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',   // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',   // 12px
        lg: '1rem',      // 16px
        xl: '1.5rem',    // 24px
        full: '9999px',
      },
      boxShadow: {
        // subtle, purposeful shadows
        'surface': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'elevated': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'modal': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'focus': '0 0 0 3px rgb(20 184 166 / 0.4)',
      },
      transitionDuration: {
        'fast': '120ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}