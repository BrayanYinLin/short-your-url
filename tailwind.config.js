/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        pattern: "url(/background.webp)"
      },
      colors: {
        'black-hue': '#222C34',
        'white-hue': '#FEFEFE'
      }
    },
  },
  plugins: [],
}
