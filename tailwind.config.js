/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green-color': '#E1EEDD',
        'dark-green-color': '#183A1D',
        'dark-orange-color': '#B8B5A6',
        'light-orange-color': '#FEFBE9',
        'orange-color': '#F0A04B',
        'gray-color': '#8F8F8F',
      },
    },
  },
  plugins: [],
}