/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: 'rgb(32, 31, 49)',
        customPink: 'rgb(255, 186, 222)',
      },
    },
  },
  plugins: [],
}

