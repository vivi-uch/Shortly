/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: "hsl(257, 0%, 90%)",
        },
        "Dark-Violet": "hsl(257, 27%, 26%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
