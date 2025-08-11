/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      boxShadow: { soft: "0 10px 30px -12px rgba(0,0,0,0.35)" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
