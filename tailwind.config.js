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
          DEFAULT: '#1e40af', // Deep blue
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#1f2937', // Charcoal
          dark: '#111827',
          light: '#374151',
        },
        accent: {
          DEFAULT: '#10b981', // Green accent for CTAs
          dark: '#059669',
          light: '#34d399',
        },
        security: {
          blue: '#0ea5e9',
          slate: '#64748b',
        },
      },
    },
  },
  plugins: [],
}