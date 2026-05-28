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
        // Brand — Navy + Gold
        'brand-primary': '#2B6BE5',
        'brand-secondary': '#1A2E6E',
        'brand-accent': '#E8A020',
        'brand-warm': '#F0A514',
        // Text
        'text-primary': '#F0F0FF',
        'text-secondary': '#9898B0',
        'text-muted': '#5A5A72',
        // Industry
        'industry-re': '#E8A020',
        'industry-med': '#3B82F6',
        'industry-law': '#4C6FC7',
        'industry-smb': '#F0A514',
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
        'gradient-cta': 'linear-gradient(135deg, #2B6BE5 0%, #1A2E6E 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(43,107,229,0.25) 0%, transparent 70%)',
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
