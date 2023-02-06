/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,s,tsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
