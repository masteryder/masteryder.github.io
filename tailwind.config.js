
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: 'rgb(0,0,255)',
      yellow: 'rgb(255,255,0)'
    },
    rotate: {
      '720': '720deg',
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}