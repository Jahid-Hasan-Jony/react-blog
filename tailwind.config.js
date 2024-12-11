import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        first: "#1AB3E8",
        second: "#11284A",
      },
    },
  },
  plugins: [daisyui],
};
