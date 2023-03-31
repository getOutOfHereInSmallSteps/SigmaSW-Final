/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.scss'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    html: {
      fontSize: '62.5%',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      yellowtail: ['Yellowtail', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
    colors: {
      'color-primary-blue': '#274c5b',
      'color-primary-green': '#7eb693',
      'color-primary-green-tint': '#eff6f1',
      'color-white': '#fff',
      'color-black': '#000',
      'color-primary-yellow': '#efd372',
      'color-primary-yellow-tint': 'rgba(253, 177, 45, 0.16)',
      'color-background-light-gray': '#f9f8f8',
      'color-paragraph-gray': '#525c60',
      'color-discount': '#b8b8b8',
    },
  },
  plugins: [],
};
