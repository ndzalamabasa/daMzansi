/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './src/**/*.js'],
  theme: {
    extend: {
      height: {
        main: 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
};
