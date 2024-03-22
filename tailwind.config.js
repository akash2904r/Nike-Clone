/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide1': {
          '0%, 45%': { transform: 'translateX(0)' },
          '55%, 100%': { transform: 'translateX(-116.5vw)' },
        },
        
        'slide2': {
          '0%, 45%': { transform: 'translateX(0)' },
          '55%, 100%': { transform: 'translateX(-113.5vw)' },
        },
        
        'slide3': {
          '0%, 45%': { transform: 'translateX(0)' },
          '55%, 100%': { transform: 'translateX(-107.5vw)' },
        },
      },

      animation: {
        'slider1': 'slide1 8s ease-in-out infinite alternate',
        'slider2': 'slide2 8s ease-in-out infinite alternate',
        'slider3': 'slide3 8s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}