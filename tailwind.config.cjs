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
    plugin(function ({ addBase, addComponents }) {
      addBase({
        ":root": {
          "--color-accent": "blue",
        },
        ".dark": {
          "--color-accent": "red",
        },
      });
      addComponents({
        ".heading-900": {
          "@apply text-[42px]": {},
          "@apply font-[700]": {},
          "@apply leading-[110%]": {},
          "@apply -tracking-[0.42px]": {},
        },
      });
    }),
  ],
};
