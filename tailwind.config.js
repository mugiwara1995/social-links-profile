/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'green' : 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey': 'hsl(0, 0%, 20%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
      }
    },
  },
  plugins: [],
}

