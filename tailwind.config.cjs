/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    // './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'body-bg-from': '#0b1120',
        'body-bg-to': '#0f172a',
        'primary':'#FD3D57',
      },
      border: {
        "border": '2px solid rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        play: ['Play', 'sans-serif'], 
        sans: ['Graphik', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
}