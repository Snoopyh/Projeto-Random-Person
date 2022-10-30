/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      sans:['inter', 'sans-serif',]
    },
    extend: {
   
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        
      },
    },
  },
  plugins: [],
}