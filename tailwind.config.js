/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#2a3447',
        'soft-bg': '#384256',
        'dark-bg': '#222b3c',
        'soft-color': '#ddd',
        'dark-color': '#2a3447',
        primary: "#3C50E0",
        secondary: "#A4D96C",
        grayDark: "#292D32",
        grayLight: "#E7ECF3",
        tertiary: "#3A1097",
        accent: "#00D1ED",
        grayF3: "#F3EDFF",
        gray6B: "#6B6B6B",
        gray23: "#232323",
        gray80: "#808191",
      }
    },
  },
  plugins: [],
}