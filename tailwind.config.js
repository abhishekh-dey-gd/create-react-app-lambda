/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1221',
          light: '#131C2F',
          dark: '#080E1A',
          accent: '#1A2438'
        }
      },
      animation: {
        'color-shift': 'color-shift 10s linear infinite',
      },
      keyframes: {
        'color-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};