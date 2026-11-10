import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oak: "#1c120d",
        panel: "#24160f",
        burgundy: "#5a1620",
        gold: { DEFAULT: "#b8924a", light: "#d4ae68" },
        ivory: "#f0e6d2",
        tan: "#a8946f",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: { wider2: "0.18em", widest2: "0.4em" },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { fadeUp: "fadeUp 1.2s ease-out both" },
    },
  },
  plugins: [],
};
export default config;
