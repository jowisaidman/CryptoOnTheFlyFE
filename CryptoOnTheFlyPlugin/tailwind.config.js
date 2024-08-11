/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx, ts}"],
  theme: {
    extend: {
      colors: {
        layer: "#1A1733",
        default: "#1D1A3B",
        card: "#9493AC",
        highlight: "#2bfaff",
        "on-highlight": "#1D1A3B",
        safe: "#84ECBA",
        unsafe: "#F24E4E",
        middle: "#EFE167",
        unknown: "#7E7893",

        "default-dark": "#3B3C45",
        secondary: "#747676",
        "secondary-paragraph": "#221E3B",
        "secondary-title": "#9552d1",
        "on-secondary-highlight": "#6a2ea2",
        "secondary-highlight": "#F6EDFD",
        "on-tertiary-highlight": "#40B4B6",
        "tertiary-highlight": "#F3FFFF",
        footer: "#130F20",
      },
      textColor: {
        default: "#FDFEFF",
        secondary: "#9493AC",
      },
      outlineColor: {
        default: "#9493AC",
      },
    },
  },
  plugins: [],
};
