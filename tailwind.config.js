/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        text: '#334155',
        primary: {
          DEFAULT: '#0A192F',
          light: '#172a46',
        },
        secondary: {
          DEFAULT: '#233554',
          light: '#2d4570',
        },
        accent: {
          DEFAULT: '#FF8888',
          light: '#FFA5A5',
          dark: '#FF6666'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
        },
      },
      fontFamily: {
        sans: ['Times New Roman', 'serif'],
        serif: ['Times New Roman', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};