/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#FDF7F0',
          100: '#F8E7D1',
          200: '#F0CDAA',
          300: '#E5B584',
          400: '#D4975C',
          500: '#C17817',
          600: '#8B4513',
          700: '#6B3410',
          800: '#4A240B',
          900: '#2A1306',
        },
        secondary: {
          DEFAULT: '#CD853F',
          50: '#FDF8F2',
          100: '#F7E7D6',
          200: '#EFCFA8',
          300: '#E5B67A',
          400: '#D9984C',
          500: '#CD853F',
          600: '#B56F2F',
          700: '#8B5423',
          800: '#613A18',
          900: '#37200E',
        },
        accent: {
          DEFAULT: '#D2691E',
          50: '#FDF5F0',
          100: '#F9E2D1',
          200: '#F2C5A3',
          300: '#E8A575',
          400: '#DD8547',
          500: '#D2691E',
          600: '#B85318',
          700: '#8F4013',
          800: '#662D0E',
          900: '#3D1B08',
        },
        warm: {
          50: '#FFFBF7',
          100: '#FEF3E7',
          200: '#FCE4C7',
          300: '#F9D4A7',
          400: '#F5C487',
          500: '#F1B567',
          600: '#CD9A52',
          700: '#A97E42',
          800: '#856232',
          900: '#614622',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F1B567 0%, #D2691E 100%)',
        'gradient-primary': 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}