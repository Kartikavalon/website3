import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Teal from Kaytherix logo
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
        // Metallics
        metallic: {
          gold: '#d4af37',
          silver: '#c0c0c0',
          copper: '#b87333',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
        'gradient-teal-dark': 'linear-gradient(135deg, #1b9b8e 0%, #0f0f0f 100%)',
        'gradient-metallic': 'linear-gradient(135deg, #d4af37 0%, #c0c0c0 50%, #b87333 100%)',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(27, 155, 142, 0.3)',
        'glow-teal-lg': '0 0 40px rgba(27, 155, 142, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(27, 155, 142, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(27, 155, 142, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(27, 155, 142, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
