/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#1e90ff', // Ocean Blue
          600: '#0077ea',
          700: '#0066cc',
          800: '#0055a8',
          900: '#003d7a',
        },
        amber: {
          50: '#fff8e6',
          100: '#fef0cc',
          200: '#fde299',
          300: '#fbd366',
          400: '#f8c433',
          500: '#f6b400',
          600: '#d29200',
          700: '#d2b48c', // Brown Accent
          800: '#8c5800',
          900: '#663e00',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'floatAnimation 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'gradient': 'animateGradient 15s ease infinite',
        'fade-in-out': 'fadeIn 0.3s ease-out forwards, fadeOut 0.3s ease-in 2.7s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        floatAnimation: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        animateGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'gradient-size': '400% 400%',
      },
    },
  },
  plugins: [],
};