/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'], // Dark mode will be triggered by adding the 'dark' class to the body or root element.
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Instrument: ['Instrument Serif', 'serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      colors: {
        primary: '#FEDA00',
        'dark-gray': '#232323',
        'primary-text': '#FFFFFF8f',
        'secondary-text': '#2A2A2A',
        'light-text': '#0000008f',
        'light-border': '#ffffff1a',
        primaryDarkBlack: '#0a0a0a',
        secondaryDarkBlack: '#0D0D0D',
        primaryLightWhite: '#fcfcfa',
        secondaryLightWhite: '#EBEBEB',
      },
      transitionProperty: {
        colors: 'background-color, color, border-color',
      },
      borderRadius: {
        site: '14px',
      },
      gap: {
        site: '63px',
      },
      letterSpacing: {
        site: '-0.04em',
      },
      lineHeight: {
        site: '1.1em',
      },
      fontSize: {
        site: '2.125rem',
        'site-md': '3.438rem',
      },
      padding: {
        site: '1.25rem',
      },
    },
  },
  plugins: [],
};
