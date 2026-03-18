/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#030712",
        abyss: "#071126",
        neon: "#22d3ee",
        glow: "#67e8f9",
      },
      boxShadow: {
        neon: "0 0 25px rgba(34, 211, 238, 0.35)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 10%, rgba(34,211,238,0.12), transparent 28%), radial-gradient(circle at 80% 0%, rgba(103,232,249,0.08), transparent 32%), linear-gradient(180deg, rgba(7,17,38,1) 0%, rgba(3,7,18,1) 100%)",
      },
    },
  },
  plugins: [],
};