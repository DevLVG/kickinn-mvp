/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A7C7C',
        'primary-light': '#5A8C8C',
        'primary-dark': '#3A6C6C',
        secondary: '#F5F9F9',
        accent: '#E5F0F0',
        'text-main': '#1F2D2D',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0,0,0,0.07)',
        'soft-lg': '0 10px 25px -3px rgba(0,0,0,0.07)',
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
} 