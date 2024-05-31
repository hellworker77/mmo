/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
      },
      boxShadow: {
        inner: 'inset 0px 0px 15px rgba(0,0.7,0,0.8)',
      },
    },
  },
  plugins: [],
}