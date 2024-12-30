/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        // accent: '#FF7235',
        accent: '#4C4C6E',
        // accentHover: '#e05216',
        accentHover: '#4C4C6E',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/cta/bg.svg')",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
});

