/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",   // deep navy (backgrounds)
          light: "#1e293b",  // slate gray (cards/sections)
          accent: "#22c55e", // emerald green (buttons/highlights)
          text: "#f1f5f9",   // light gray (body text)
        },
      },
      fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  heading: ["Poppins", "sans-serif"], // optional for headings/logo
},
    },
  },
  plugins: [],
};