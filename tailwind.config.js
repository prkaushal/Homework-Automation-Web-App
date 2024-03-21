/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: {
          800: '#151515',
          500: '#2B2B2B',
          300: '#7D7D7D',
          // Add more shades as needed
        },
      },
    },
  },
  plugins: [],
}