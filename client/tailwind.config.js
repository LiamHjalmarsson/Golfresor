/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19140F",
        secondary: "#6F6A64",
        accent: "00FFFF",
        red: "#F5B7B7",
        green: "#7DBE6C",
        orange: "#FFA500 "
      },
      boxShadow: {
        middle: "0 0px 6px 0px",
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
}