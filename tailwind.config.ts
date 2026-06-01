import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A1628",
        navy: "#0A1628",
        foreground: "#FFFFFF",
        gold: "#C9A84C",
        "gold-light": "#E6C56B",
        "gold-dark": "#9B7F33",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(201, 168, 76, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        default: "300ms",
      },
      maxWidth: {
        content: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
