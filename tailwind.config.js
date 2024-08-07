import { transform } from 'typescript'

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
      },
      keyframes: {
        astro: {
          '0%,100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(10px)' },
          '80%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        float: 'astro linear 3s infinite',
        planet: 'astro linear 5s infinite'
      }
    }
  },
  plugins: []
}
