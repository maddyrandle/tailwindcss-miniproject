module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
      }
    },
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],

}
