/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor400: 'rgba(18, 7, 32, 0.95)',
        primaryColor500: 'rgba(18, 7, 32, 1)',
        lightBlue: 'rgba(3, 44, 255, 1)',
        lightPurple: 'rgba(235, 3, 255, 1)',
        hardPurple: 'rgba(129, 3, 255, 1)'
      },
      fontFamily: {
        k2D: 'K2D'
      }
    }
  },
  plugins: []
}
