const plugin = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
    theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px black',
        md: '2px 2px 4px gray',
        lg: '3px 3px 6px black',
      }
    },
  },
   plugins: [
    plugin
  ],
}