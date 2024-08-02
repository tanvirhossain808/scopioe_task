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
      }
    },
  },
  plugins: [],
}