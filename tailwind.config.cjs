import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'interphases': ['"TT Interphases Pro"', 'sans-serif'],
      },
      colors: {
        'content-primary': '#000',
        'content-secondary': '#707177',
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        ":root": {
          "--color-accent": "blue",
          "--content-primary": "var(--content-primary, #000)",
          "--content-secondary": "var(--content-secondary, #707177)",
        },
        ".dark": {
          "--color-accent": "red",
        },
      });
      addComponents({
        ".heading-1000": {
          color: "var(--content-primary, #000)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "3.125rem",
          fontWeight: "700",
          lineHeight: "110%",
          letterSpacing: "-0.03125rem",
        },
        ".heading-900-semi": {
          color: "var(--content-primary, #000)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "1.8125rem",
          fontWeight: "600",
          lineHeight: "130%",
          letterSpacing: "-0.01813rem",
        },
        ".heading-600-semi": {
          color: "var(--content-primary, #000)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "1.0625rem",
          fontWeight: "600",
          lineHeight: "130%",
        },
        ".text-700": {
          color: "var(--content-secondary, #707177)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "1.25rem",
          fontWeight: "500",
          lineHeight: "150%",
        },
        ".text-600": {
          color: "var(--content-secondary, #707177)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "1.0625rem",
          fontWeight: "500",
          lineHeight: "130%",
        },
        ".text-500": {
          color: "var(--content-secondary, #707177)",
          textAlign: "center",
          fontFamily: theme('fontFamily.interphases'),
          fontSize: "0.875rem",
          fontWeight: "500",
          lineHeight: "130%",
        }
      });
    }),
  ],
};
