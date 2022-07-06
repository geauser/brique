/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/**/*.{vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}