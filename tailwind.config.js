/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'], // Enabling dark mode using a class
  safelist: ['dark'], // Safe for dark mode
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))', // cream
        foreground: 'hsl(var(--foreground))', // charcoal gray text
        primary: {
          DEFAULT: 'hsl(210, 100%, 40%)', // deep blue
          foreground: 'hsl(0, 0%, 100%)', // white text on blue
        },
        secondary: {
          DEFAULT: 'hsl(180, 40%, 45%)', // muted teal
          foreground: 'hsl(0, 0%, 100%)', // white text on teal
        },
        accent: {
          DEFAULT: 'hsl(45, 80%, 60%)', // warm mustard
          foreground: 'hsl(0, 0%, 100%)', // white text on mustard
        },
        background: 'hsl(40, 20%, 97%)', // cream background
        foreground: 'hsl(0, 0%, 20%)', // charcoal gray text
        muted: {
          DEFAULT: 'hsl(0, 0%, 80%)', // light gray for muted text
          foreground: 'hsl(0, 0%, 100%)', // white text on muted background
        },
        destructive: {
          DEFAULT: 'hsl(0, 80%, 50%)', // deep coral (for destructive actions)
          foreground: 'hsl(0, 0%, 100%)', // white text on coral
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}
