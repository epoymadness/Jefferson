/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      width: {
        custom1: "25px",
      },
    },
  },
  plugins: [],
};
