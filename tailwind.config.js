/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      faderight : 'slideRight 1s ease-in-out',
      fadetop : 'slidetop 1s ease-in-out',
      fadeleft : 'slideleft 1s ease-in-out',
      fadedown : 'slidedown 1s ease-in-out',
      navtop1 : 'slidetop .8s ease-in-out',
      navtop2 : 'slidetop 1s ease-in-out',
      navtop3 : 'slidetop 1.2s ease-in-out',
    },
      keyframes: {

      slideRight: {
        '0%': { opacity: '50', transform: 'translateX(220px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
        slideleft: {
          '0%': { opacity: '50', transform: 'translatex(-220px)' },
          '100%': { opacity: '1', transform: 'translatex(0)' },
        },
        slidetop: {
          '0%': { opacity: '50', transform: 'translatey(-220px)' },
          '100%': { opacity: '1', transform: 'translatey(0)' },
        },
        slidedown: {
          '0%': { opacity: '50', transform: 'translatey(220px)' },
          '100%': { opacity: '1', transform: 'translatey(0)' },
        },
        navtop1: {
          '0%': { opacity: '50', transform: 'translatey(70px)' },
          '100%': { opacity: '1', transform: 'translatey(0)' },
        },
        navtop2: {
          '0%': { opacity: '50', transform: 'translatey(70px)' },
          '100%': { opacity: '1', transform: 'translatey(0)' },
        },
        navtop3: {
          '0%': { opacity: '50', transform: 'translatey(70px)' },
          '100%': { opacity: '1', transform: 'translatey(0)' },
        },
    },
  },
  plugins: [],
}


