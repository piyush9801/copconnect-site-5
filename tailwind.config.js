/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        ink: '#1A1209',
        'ink-mid': '#3D2B1F',
        brand: '#E8652A',
        'brand-mid': '#F0783A',
        'brand-pale': '#FDF0E9',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
