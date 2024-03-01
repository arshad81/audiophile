/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#D87D4A',
        'light-primary':'#fbaf85',
        'secondary':'#101010',
        'primary-grey':'#F1F1F1',
        'secondary-grey':'#FAFAFA',
        'cloud-grey':'#787878'
      },
      fontFamily:{
        'manrope':'manrope'
      }
    },
  },
  plugins: [],
}