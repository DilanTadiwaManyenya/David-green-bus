/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2d7a3d',
        'dark-green': '#1a3d2a',
        'accent-yellow': '#f0c419',
      }
    },
  },
  plugins: [],
}