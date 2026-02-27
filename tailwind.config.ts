import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        twilight: {
          950: "#06050f",
          900: "#0c0a1d",
          800: "#14102e",
          700: "#1e1845",
          600: "#2d2466",
        },
        gold: {
          300: "#fcd97d",
          400: "#f5c542",
          500: "#e8a838",
        },
        sunset: {
          400: "#ff6b9d",
          500: "#e84393",
          600: "#c0217e",
        },
        lavender: {
          300: "#c4b5fd",
          400: "#a29bfe",
          500: "#7c6df0",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "twinkle": "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
