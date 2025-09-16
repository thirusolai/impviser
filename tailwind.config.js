/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#1798c1",
          blue: "#223794",
          green: "#29ec48",
           brandBlue: "#223794",
        brandGreen: "#29ec48",
        brandCyan: "#1798c1",
        },
      },
    },
  },
  plugins: [],
};
