/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat":["Montserrat", "sans-serif"],
        "Poppins":["Poppins", "sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      colors: {
        brand: {
          bg: '#373643',
          text: '#ffffff',
          accent: '#18CB96',
        },
        // Override existing colors to use brand colors
        black: '#373643',
        white: '#ffffff',
        gray: {
          300: '#ffffff',
          400: '#d1d5db',
          700: '#4a5568',
        },
        // Update accent colors
        blue: {
          500: '#18CB96',
          600: '#15a87a',
        },
        purple: {
          500: '#18CB96',
          600: '#15a87a',
        },
        // Custom color overrides
        'brand-bg': '#373643',
        'brand-text': '#ffffff',
        'brand-accent': '#18CB96',
        'card-bg': '#2a2a35',
        'card-hover': '#32323f',
      },
      backgroundColor: {
        'brand-bg': '#373643',
        'card-bg': '#2a2a35',
        'card-hover': '#32323f',
      },
      textColor: {
        'brand-text': '#ffffff',
        'brand-accent': '#18CB96',
      },
      borderColor: {
        'brand-accent': '#18CB96',
      },
    },
  },
  plugins: [],
}

