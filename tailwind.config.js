/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scan: "scan 7.5s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { backgroundPosition: "0 -100vh" },
          "35%, 100%": { backgroundPosition: "0 100vh" },
        },
      },
    },
  },
  plugins: [],
};
