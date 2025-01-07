/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#5429CC',
        'blue-light': '#6933FF',
        'green': '#33CC95',
        'red': '#E52E4D',
        'shape-principal': '#FFFFFF',
        'color-title': '#363F5F',
        'color-text': '#969CB2',
        'color-bg': '#F0F2F5'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

