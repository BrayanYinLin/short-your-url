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
      },
      keyframes: {
        minimize: {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(0)' }
        },
        maximize: {
          '0%': { transform: 'scale(0)'},
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        minimize: 'minimize 0.3s ease',
        maximize: 'maximize 0.3s ease'
      }
    },
  },
  plugins: [],
}
