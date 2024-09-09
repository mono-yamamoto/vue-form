/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        'title-20': ['20px', { fontWeight: '700' }],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: 'red',
        white: '#ffffff',
        gray: {
          1: '#4a5f62',
          2: '#677d7f',
        },
        red: { 1: '#fc4c4c' },
      },
      boxShadow: {
        sheet: '0px 3px 10px rgba(48, 72, 83, 0.15)',
        overlay: '0px -11px 15px rgba(24, 75, 89, 0.1)',
      },
      borderRadius: {
        card: '8px',
        input: '6px',
      },
      zIndex: {
        menu: 1000,
        sticky: 1010,
        fixed: 1020,
        modalBack: 1030,
        modal: 1040,
        tooltip: 1050,
      },
    },
  },
  plugins: [],
}

