/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        gray: {
          900: "#0f1112",
          800: "#151718",
          700: "#181a1e",
          400: "#55565C",
        },
        indigo: {
          400: "#927CFF",
          700: "#4d3e97",
        },
        green: {
          400: '#01f0c8',
          700: '#009c80',
        }
      }
    },
  },
  plugins: [],
}