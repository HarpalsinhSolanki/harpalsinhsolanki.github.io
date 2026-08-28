/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F1EA',
        'paper-alt': '#EAE6D9',
        ink: '#1C1B18',
        'ink-soft': '#5B584F',
        'ink-faint': '#8A8677',
        accent: {
          DEFAULT: '#B3461E',
          dark: '#8C3315',
          light: '#D97A4E',
        },
        line: 'rgba(28, 27, 24, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(28, 27, 24, 0.04)',
        'card-hover': '0 8px 24px -8px rgba(28, 27, 24, 0.18)',
      },
    },
  },
  plugins: [],
};
