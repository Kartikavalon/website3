import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Brand Colors
        primary: {
          50: '#f0fdfb',
          100: '#d9f2ee',
          200: '#b3e5de',
          300: '#7dd3cc',
          400: '#4ab9b8',
          500: '#2fa19f',
          600: '#1b9b8e',
          700: '#187d76',
          800: '#166461',
          900: '#154f50',
          950: '#0a2e2c',
        },
        // Deep Blue - Premium brand color
        navy: {
          50: '#f0f5fb',
          100: '#dce5f5',
          200: '#b3cbe8',
          300: '#8ab0db',
          400: '#5a8fce',
          500: '#2f5aa8',
          600: '#1e3a5f',
          700: '#1a3153',
          800: '#152847',
          900: '#0f1f3b',
          950: '#0a131f',
        },
        // Vibrant Gold
        amber: {
          350: '#e8c547',
          400: '#d4af37',
          450: '#c9a636',
          500: '#b8941e',
        },
        // Electric Cyan
        cyan: {
          350: '#00e8ff',
          400: '#00d4ff',
          450: '#00bce6',
        },
        // Warm Terracotta
        rose: {
          600: '#c85a2a',
          650: '#b84f1f',
        },
        // Dark industrial palette
        slate: {
          950: '#0a0a0a',
          900: '#0f0f0f',
          850: '#151515',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
          500: '#4a4a4a',
          400: '#6a6a6a',
          300: '#8a8a8a',
          200: '#aaaaaa',
          100: '#d0d0d0',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e3a5f 0%, #0f7e8f 50%, #1e3a5f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d4af37 0%, #00d4ff 100%)',
        'gradient-warm': 'linear-gradient(135deg, #d4af37 0%, #c85a2a 100%)',
        'gradient-cool': 'linear-gradient(135deg, #0f7e8f 0%, #00d4ff 100%)',
        'gradient-premium': 'linear-gradient(135deg, #1e3a5f 0%, #0f7e8f 50%, #d4af37 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(30, 58, 95, 0.95) 0%, rgba(15, 126, 143, 0.95) 100%)',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(15, 126, 143, 0.4)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-teal-lg': '0 0 40px rgba(15, 126, 143, 0.5)',
        'glow-gold-lg': '0 0 40px rgba(212, 175, 55, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(15, 126, 143, 0.1)',
        'card-lift': '0 20px 40px rgba(30, 58, 95, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(15, 126, 143, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(15, 126, 143, 0.7)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
