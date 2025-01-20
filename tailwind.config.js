/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A8CBA0',
        secondary: '#4E6E4D',
        black: '#2C2C2C',
        white: '#F0F0F0'
      },
    },
  },
  plugins: [],
}

