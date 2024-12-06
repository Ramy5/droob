/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-start": "#0055D2",
        "blue-end": "#0B236B",
      },
    },
  },
  plugins: [],
};
