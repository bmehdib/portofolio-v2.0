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
        },
        apear: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' }
        },
        disapear: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0)' }
        },
        expand: {
          from: { transform: 'translateY(-500px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' }
        },
        colorFlash: {
          from: { transform: 'translateX(-500px)' },
          to: { transform: 'translateX(5000px)' }
        },
        popup: {
          from: { transform: 'translateY(-1000px)', scale: '0' },
          to: { transform: 'translateY(0px)', scale: '1' }
        },
        popdown: {
          from: { transform: 'translateY(0)', scale: '1' },
          to: { transform: 'translateY(-1000px)', scale: '0' }
        }
      },
      animation: {
        float: 'astro linear 3s infinite',
        planet: 'astro linear 5s infinite',
        apear: 'apear linear 0.5s both',
        disapear: 'disapear lienar 0.5s',
        expand: 'expand linear 1s',
        colorFlash: 'colorFlash linear 0.5s',
        popup: 'popup linear 0.41s',
        popdown: 'popdown linear 0.41s'
      }
    }
  },
  plugins: []
}
