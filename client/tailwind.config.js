module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          light: "#000000",
          dark: "#121212",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
