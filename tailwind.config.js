/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        bone: '#F2F2F0',
        blood: '#E10600',
        volt: '#D4FF00',
        ash: {
          50: '#1A1A1A',
          100: '#222222',
          200: '#2E2E2E',
          300: '#3A3A3A',
          400: '#525252',
          500: '#737373',
          600: '#A0A0A0',
          700: '#CCCCCC',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        grotesk: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.3em',
      },
      maxWidth: {
        edge: '1680px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
