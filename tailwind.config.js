/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00f2ff',
          purple: '#7000ff',
          dark: '#050505',
          card: '#0a0a0b',
        },
        apple: {
          blue: '#0066cc',
          gray: '#f5f5f7',
          dark: '#1d1d1f',
          text: '#1d1d1f',
          link: '#06c',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(0, 242, 255, 0.2), 0 0 10px rgba(0, 242, 255, 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgba(0, 242, 255, 0.6), 0 0 30px rgba(0, 242, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Icons"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
