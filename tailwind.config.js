/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        yellow: {
          50: "#ffd300",
        },
        blue: {
          50: "#3a10e5",
        },
        black: {
          50: "#10162f",
          100: "#000000",
        },
        pink: {
          50: "#fff0e5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
