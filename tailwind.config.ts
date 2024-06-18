import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'dark-blue' : '#2e3092',
        'mid-blue': '#00aeef',
        'light-blue': '#9eddf9'
      },

      keyframes: {
        programslideout :{
           '0%': {background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 50%, transparent 50%)'},
           '10%': {background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 45%, transparent 55%)' },
    '20%' : {background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 40%, transparent 60)'},
   '30%': {
       background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 35%, transparent 65%)'
   },
    '40%' :{
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 30%, transparent 70%)'
    },
    '50%' : {
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 25%, transparent 75%)'
    }
,
   '60%': {
       background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 20%, transparent 80%)'
   },
    '70%': {
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 15%, transparent 85%)'
    },
   ' 80%' :{
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 10%, transparent 90%)'
    },

    '90%' : {
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 5%, transparent 95%)'
    },
    '100%':{
        background: 'linear-gradient(0deg, rgba(0, 212, 255, 1) 0%, transparent 100%)'
    }
        }
      },

      screens: {
        'xsm': '360px',
        'larger-screen': '1680px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
