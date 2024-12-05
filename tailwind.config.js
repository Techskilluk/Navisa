/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
          light: '#F0F7FF',
        },
        navy: '#1E3A8A',
      },
      backgroundImage: {
        'world-pattern': "url('/world-dots.svg')",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)', 
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 25px 30px -12px rgba(0, 0, 0, 0.15), 0 18px 20px -15px rgba(0, 0, 0, 0.1)'
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-2%, -2%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'ken-burns': 'ken-burns 30s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}