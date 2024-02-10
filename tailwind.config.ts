import { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'secondary' : '#FFA800',
        'red-logo' : '#980000'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light: {
        colors: { 
          primary: '#FFA800',
          danger: '#FFA800',
        },
        focus: '#FFA800',
      },
    }
  })],

};
export default config;
