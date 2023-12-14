/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "buttonBlue": "#053F5C",
        "orangeN": "#F14902",
        "orangeL": "#E8713C",
      },
      fontFamily: {
        'Pop': ['Poppins', 'sans-serif'],
        'Robo': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

