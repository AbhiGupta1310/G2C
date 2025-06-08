/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.8s ease-out forwards",
        fadeInRight: "fadeInRight 0.8s ease-out forwards",
        goldGlow: "goldGlow 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      colors: {
        gold: {
          400: "#FFD700",
          500: "#FFA500",
        },
      },
    },
  },
  plugins: [],
};
