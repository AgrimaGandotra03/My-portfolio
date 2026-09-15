/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        panel: "#141414",
        line: "#2a2a2a",
        acid: "#c6f24e",
        muted: "#9c9c9c",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
