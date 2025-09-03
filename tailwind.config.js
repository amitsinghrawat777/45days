/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bd4f4f",
        secondary: "#2a2a2a",
        background: "#1a1a1a",
        text: "#ffffff",
        accent: "#ff6b6b",
      },
    },
  },
  plugins: [],
}
