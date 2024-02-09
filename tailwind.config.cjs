/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/container-queries")],
};
