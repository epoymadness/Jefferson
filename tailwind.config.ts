import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", ".dark"],
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
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [],
};

export default config;
