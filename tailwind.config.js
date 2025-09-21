/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A69C',
          dark: '#008F86',
          light: '#00C2B7',
        },
        secondary: {
          DEFAULT: '#0B1C2D',
          dark: '#081624',
          light: '#0E2236',
        },
      },
    },
  },
  plugins: [],
}