const { fontFamily } = require("tailwindcss/defaultTheme");
const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
    },
    extend: {
      textColor: {
        primary: "rgb(var(--foreground-primary))",
        secondary: "rgb(var(--foreground-secondary))",
        blue: "rgb(0, 112, 243)",
      },
    },
  },
  plugins: [],

});

