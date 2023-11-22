/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '22': '9vh',
      },
      colors: {
        brown: {
          DEFAULT: '#a17a74',

        },
        burgundy:{
          DEFAULT: '#800020',
        },
        silverish:{
          DEFAULT: '#A0A0A0',
        },
        gold:{
          DEFAULT: '#D9B751',
        },
        brass:{
          DEFAULT: '#B5A642',
        },
        blackish:{
          DEFAULT: '#252525',
        },
        redish:{
          DEFAULT: '#C1272D'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
