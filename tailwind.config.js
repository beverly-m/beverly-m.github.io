/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      stone: {
        100: "#f3e6d8",
        150: "#e4ded8",
        600: "#5f574e",
        900: "#302d2c",
      },
      brown: {
        800: "#854632",
      },
      rose: {
        50: "#fff5fa",
        800: "#7b284f",
      },
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
