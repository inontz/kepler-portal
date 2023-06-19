/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kepler: {
          main: "#0063db",
          red: "#D90000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
