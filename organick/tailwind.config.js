/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.scss'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(30rem, 1fr))',
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-out': 'fade-out 0.7s ease-out forwards',
        'modal-enter': 'enter 0.4s ease-out forwards',
        'modal-leave': 'leave 0.4s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        enter: {
          '0%': {
            top: '0',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(-50%)',
            top: '50%',
            opacity: '1',
          },
        },
        leave: {
          '0%': {
            transform: 'translateY(-50%)',
            top: '50%',
            opacity: '1',
          },
          '100%': {
            top: '0',
            opacity: '0',
          },
        },
      },
    },
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
      'color-primary-yellow': '#efd372',
      'color-primary-yellow-tint': 'rgba(253, 177, 45, 0.16)',
      'color-background-light-gray': '#f9f8f8',
      'color-paragraph-gray': '#525c60',
      'color-discount': '#b8b8b8',
      'color-error': '#8fa8a8',
      'color-white': '#fff',
      'color-black': '#000',
      'color-red': '#ff0000',
    },
  },
  plugins: [],
};
