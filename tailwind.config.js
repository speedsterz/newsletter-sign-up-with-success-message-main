/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./index.js"],
  theme: {
    extend: {
      colors: {
        Tomato: "hsl(4, 100%, 67%)",
        Dark_Slate_Grey: "hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
      },
    },
  },
  plugins: [],
};
