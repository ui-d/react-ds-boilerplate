/* eslint-env node */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--color-accent": "blue",
        },
        ".dark": {
          "--color-accent": "red",
        },
      });
    }),
  ],
};
