// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        100: '26rem',
        104: '28rem',
        108: '30rem',
        112: '32rem',
        120: '36rem',
        128: '40rem',
        144: '48rem',
        148: '49rem',
        152: '50rem',
        156: '52rem',
        160: '56rem',
        164: '56rem',
        168: '58rem',
        172: '60rem',
        180: '64rem',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
      },
    },
  },
  plugins: [],
}
