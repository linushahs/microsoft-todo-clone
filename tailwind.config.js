/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        lg: "28px",
        md: "16px",
        sm: "14px",
        xs: "12px",
      },
      boxShadow: {
        md: "2px 2px 9px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
