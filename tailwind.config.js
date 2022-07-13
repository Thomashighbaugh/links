/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        dark: "#222222",
        gray: {
          DEFAULT: "#545D6D",
          50: "#565F71",
          100: "#e9efff",
          200: "#9AA2B1",
          300: "#808A9D",
          400: "#687387",
          500: "#545D6D",
          600: "#454C59",
          700: "#353B45",
          800: "#262A31",
          900: "#16191D",
        },
        "twitter-color": "#00acee",
        "discord-color": "#8265ff",
        "kofi-color": "#13C3FF",
        "kofi-heart": "#FF5E5B",
        "linkedin-color": "#0072b1",
        "reddit-color": "#ff5700",
        "github-color": "#171515",
        "devto-color": "#171515",
        "instagram-orange": "#F58529",
        "instagram-pink": "#dd2a7b",
        "instagram-blue": "#515BD4",
        "bmac-yellow": "#FFDD00",
        "bmac-orange": "#FE8341",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
