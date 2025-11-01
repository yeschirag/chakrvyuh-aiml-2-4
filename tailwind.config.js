/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          purple: {
            light: '#7C3AED',
            DEFAULT: '#6B21A8',
            dark: '#4C1D95',
          },
          red: {
            light: '#DC2626',
            DEFAULT: '#991B1B',
            dark: '#7F1D1D',
          },
          orange: {
            light: '#F97316',
            DEFAULT: '#EA580C',
            dark: '#C2410C',
          },
          emerald: {
            light: '#10B981',
            DEFAULT: '#059669',
            dark: '#047857',
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}