/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-phone-background': "url('/assets/images/phone/auth/iPhone 14 & 15 Pro Max - 6.png')",
      },
      fontFamily: {
        "PoorRichard": "PoorRichard",
        "Poppins": "Poppins"
      },
      fontSize: {
        xs: "1rem"
      },
      lineHeight: {
        normal: "1.75rem"
      },
      borderWidth: { 1: ".7px" }
    },
    colors: {
      "light-sky": "#4285F3",
      "dark-sky": "#156BCA"
    },
    backgroundImage: {
      'google-gradient': 'linear-gradient(91deg, #E4E4E4 0.64%, #FFF9 99.53%)',
      'fb-gradient': 'linear-gradient(89deg, #298FFF 0.18%, #0778F5 99.28%)',

    },
    boxShadow: {
      'google-shadow': '0px 4px 7px 0px rgba(131, 131, 131, 0.23)',
    },
  },
  plugins: [],
}