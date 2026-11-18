/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        himachal: {
          50: '#f4f7f6',
          100: '#e3ece8',
          200: '#c6d9d0',
          300: '#9ebd91',
          400: '#6f9d8e',
          500: '#4c8072',
          600: '#39655a',
          700: '#2f524a',
          800: '#27423d',
          900: '#223834',
          950: '#0e1d1b',
        },
        cedar: {
          dark: '#0c1514',
          pine: '#142321',
          slate: '#1e3230',
          mist: '#344e4b',
          amber: '#e69d45',
          gold: '#f5b553',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.45)',
        'glow': '0 0 35px rgba(230, 157, 69, 0.25)',
      }
    },
  },
  plugins: [],
}
