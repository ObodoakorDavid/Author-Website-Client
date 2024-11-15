/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F1E4E6",
          200: "#DEC1C6",
          300: "#C99CA1",
          400: "#B47A82",
          500: "#956B73",
          600: "#7A565D",
          700: "#5F4147",
          800: "#442C31",
          900: "#2A181C",
        },
      },
    },
  },
  plugins: [],
};
