/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    colors: {
      'limone': '#E6FF1E',
      'mint': '#aafac8',
      'beige': '#f7f7f7',
      'anti-flash' : '#f6f1f1',
      'lila': '#7800d7',
      'lavendel': "#cca5f8", 
      'footer-mauve': '#d2aaff',
      'mauve': '#d4b3fe',
      'apricot': '#f5f5f5',
      'purple-blue': '#592ff4',
      'paypal-yellow': '#f2ba36',
      'amazon-yellow': '#fad676',
    },
    fontFamily:{
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

