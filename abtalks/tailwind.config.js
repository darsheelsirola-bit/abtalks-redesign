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
        // Dark surfaces - layered near-black charcoal for 3D depth
        surface: {
          950: '#030303',  // Deepest background (page background)
          900: '#090909',  // Main background
          850: '#0c0c0c',  // Recessed sections
          800: '#111111',  // Base panels
          750: '#151515',  // Raised panels
          700: '#1a1a1a',  // Interactive elements
          650: '#222222',  // Elevated cards
          600: '#2a2a2a',  // Borders/dividers
          500: '#3d3d3d',  // Muted elements
        },
        // Text hierarchy
        text: {
          primary: '#fafafa',      // Near-white
          secondary: '#a3a3a3',    // Muted gray
          muted: '#737373',        // Subtle/disabled
          inverse: '#050505',      // For on-accent text
        },
        // Semantic - using brand colors (restrained)
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
        // Border - subtle
        border: {
          DEFAULT: '#262626',
          muted: '#1c1c1c',
          subtle: '#181818',
          highlight: '#333333',  // Top edge highlight
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Mobile-first scale for 390px - refined for better hierarchy
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
        0.5: '0.125rem',   // 2px
        1: '0.25rem',      // 4px
        1.5: '0.375rem',   // 6px
        2: '0.5rem',       // 8px
        2.5: '0.625rem',   // 10px
        3: '0.75rem',      // 12px
        3.5: '0.875rem',   // 14px
        4: '1rem',         // 16px
        5: '1.25rem',      // 20px
        6: '1.5rem',       // 24px
        7: '1.75rem',      // 28px
        8: '2rem',         // 32px
        9: '2.25rem',      // 36px
        10: '2.5rem',      // 40px
        12: '3rem',        // 48px
        14: '3.5rem',      // 56px
        16: '4rem',        // 64px
        18: '4.5rem',      // 72px
        20: '5rem',        // 80px
        24: '6rem',        // 96px
      },
      borderRadius: {
        none: '0',
        xs: '0.25rem',     // 4px
        sm: '0.375rem',    // 6px
        DEFAULT: '0.5rem', // 8px
        md: '0.625rem',    // 10px
        lg: '0.75rem',     // 12px
        xl: '0.875rem',    // 14px
        '2xl': '1rem',     // 16px
        '3xl': '1.5rem',   // 24px
        full: '9999px',
      },
      boxShadow: {
        // Layered shadow system for 3D depth
        'ambient': '0 0 0 1px rgba(255,255,255,0.02), 0 1px 1px rgba(0,0,0,0.4)',
        'surface': '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)',
        'raised': '0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.1)',
        'elevated': '0 4px 12px -2px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.3)',
        'floating': '0 8px 24px -4px rgba(0,0,0,0.4), 0 4px 12px -2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)',
        'inner': 'inset 0 1px 1px rgba(255,255,255,0.03), inset 0 -1px 1px rgba(0,0,0,0.3)',
        'inner-deep': 'inset 0 2px 4px rgba(0,0,0,0.4), inset 0 -1px 1px rgba(0,0,0,0.2)',
        'focus': '0 0 0 2px #78e800, 0 0 0 4px rgba(120, 232, 0, 0.1)',
        'focus-inner': 'inset 0 0 0 2px #78e800',
        // Edge highlight for 3D effect
        'edge-highlight': 'inset 0 1px 0 rgba(255,255,255,0.06)',
        'edge-highlight-strong': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      transitionDuration: {
        'instant': '50ms',
        'fast': '120ms',
        'normal': '200ms',
        'slow': '300ms',
        'slow-spring': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'snap': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // Custom properties for 3D transforms
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}