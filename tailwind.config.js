/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        'bg-base': '#0A0A0F',
        'bg-surface': '#111118',
        'bg-elevated': '#1A1A24',
        'bg-subtle': '#16161E',
        // Brand
        'brand-primary': '#4F6EF7',
        'brand-secondary': '#7C3AED',
        'brand-accent': '#00D4AA',
        'brand-warm': '#F59E0B',
        // Text
        'text-primary': '#F0F0FF',
        'text-secondary': '#9898B0',
        'text-muted': '#5A5A72',
        // Industry
        'industry-re': '#00D4AA',
        'industry-med': '#3B82F6',
        'industry-law': '#8B5CF6',
        'industry-smb': '#F59E0B',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,110,247,0.25) 0%, transparent 70%)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      backdropBlur: {
        glass: '16px',
      },
    },
  },
  plugins: [],
};
