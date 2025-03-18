/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tanker: ["Tanker", "sans-serif"], // Add Tanker as a custom font
      },
    }
  },
  plugins: [],
}
