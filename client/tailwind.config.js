/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    colors: {
      'limone': '#E6FF1E',
      'mint': '#aafac8',
      'beige': '#f7f7f7',
      'lila': '#7800d7'
    },
    fontFamily:{
      'logo': ['Kodaro'],
      'brico': ['Bricolage Grotesque'],
      'unbounded':['Unbounded'],
      'bagel':['Bagel Fat One'],
      'climate': ['Climate Crisis'] 
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
}

