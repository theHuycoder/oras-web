/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*"],
 theme: {
  container: {
   center: true,
   screens: {
    "2xl": "1264px",
   },
  },
  extend: {
   colors: {
    coolGray: {
     50: "#F9FAFB",
     900: "#111827",
    },
   },
  },
 },
 variants: {},
 plugins: [],
};
