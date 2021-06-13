
module.exports = {
  purge: ["src/**/*.svelte", "public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: 'rgb(0,0,255)',
      yellow: 'rgb(255,255,0)',
      white: 'rgb(255,255,255)'
    },
    rotate: {
      '720': '720deg',
    },
    fontFamily:{
      'title': ['Dela Gothic One', 'sans serif'],
      'body': ['Roboto', 'sans serif']
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}