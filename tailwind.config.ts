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
        background: "#0D0D0D",
        foreground: "#F5F5F5",
        muted: "#666666",
        gold: "#C9A84C",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
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
