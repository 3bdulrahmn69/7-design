/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      colors: {
        primary: '#FEDA00',
        primaryDark: '#FABE0B',
        primaryOrange: '#FEA201',
        'dark-gray': '#232323',
      },
      fontFamily: {
        Instrument: ['Instrument', 'serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
