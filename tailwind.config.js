/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        // Primary Colors
        fmDarkPink: "#ba4270",
        fmWaterWhite: "#fbfcfe",
        // Secondary Colors
        fmSanJuanBlue: "#36536b",
        fmMirageBlue: "#1b262f",
        fmCharmPink: "#da6d97",
        fmLightSanJuanBlue: "#6c8294" 
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/shared/desktop/bg-pattern-circle.svg')"
      }
    },
  },
  plugins: [],
}
