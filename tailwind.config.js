const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  plugins: [],
}
