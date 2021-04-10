module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        lightpink: '#FFB6C1'
        
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
