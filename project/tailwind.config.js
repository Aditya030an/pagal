/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(120px, -80px) scale(1.1)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-100px, 100px) scale(1.15)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 18s ease-in-out infinite",
        floatReverse: "floatReverse 22s ease-in-out infinite",
      },
    }
    
  },
  plugins: [],
}