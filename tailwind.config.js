/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6E8F0',
          100: '#CCD0E1',
          200: '#99A1C3',
          300: '#6672A5',
          400: '#334486',
          500: '#00144F', // Main brand color (navy blue)
          600: '#000F3D',
          700: '#000C3D', // Darker navy
          800: '#00092C',
          900: '#00071A',
        },
        secondary: {
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DB6F',
          400: '#F5CF3F',
          500: '#F5B017', // Secondary brand color (gold)
          600: '#D2A106', // Darker gold
          700: '#A17C05',
          800: '#715703',
          900: '#403102',
        },
        accent: {
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DB6F',
          400: '#F5CF3F',
          500: '#F5B017', // Accent color (gold)
          600: '#D2A106', // Darker gold
          700: '#A17C05',
          800: '#715703',
          900: '#403102',
        },
        dark: '#000C3D', // Dark navy
        light: '#f8fafc',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 