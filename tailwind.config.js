/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'], // Dark mode will be triggered by adding the 'dark' class to the body or root element.
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
        'secondary-text': '#999999',
      },
      fontFamily: {
        Instrument: ['Instrument Serif', 'serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
      },
      transitionProperty: {
        colors: 'background-color, color, border-color',
      },
    },
  },
  plugins: [],
};
