/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        script: ['Caveat', 'cursive'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#22c55e',
          light: '#86efac',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
