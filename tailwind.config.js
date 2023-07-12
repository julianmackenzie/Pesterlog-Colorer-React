/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://www.tailwindshades.com/#color=252.49999999999997%2C35.294117647058826%2C13.333333333333334&step-up=8&step-down=11&hue-shift=0&name=gentle&base-stop=8&v=1&overrides=e30%3D
        'gentle': {
          DEFAULT: '#1B162E',
          50: '#ADA3D3',
          100: '#A195CC',
          200: '#887ABF',
          300: '#6F5EB2',
          400: '#5C4B9C',
          500: '#4C3E81',
          600: '#3B3065',
          700: '#2B234A',
          800: '#1B162E',
          900: '#050408',
          950: '#000000'
        },
      }
    },
  },
  plugins: [],
}

