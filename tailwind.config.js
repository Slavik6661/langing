/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0f1110",
        ink: "#171a18",
        bronze: "#b88a4a",
        gold: "#d8b56d",
        emerald: "#1f7a68",
        ivory: "#f7f1e8",
        muted: "#b8b0a3",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 50px rgba(184, 138, 74, 0.16)",
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at 20% 10%, rgba(216,181,109,0.16), transparent 30%), radial-gradient(circle at 80% 0%, rgba(31,122,104,0.14), transparent 28%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(0, -14px, 0) scale(1.015)" },
        },
        lineGrow: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        lineGrow: "lineGrow 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
