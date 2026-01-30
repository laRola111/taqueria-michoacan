import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505", // Obsidian Matte
        primary: "#E63946", // Brand Red
        secondary: "#FFB703", // Brand Gold/Yellow
        michoacan: {
          // Keeping legacy compatibility just in case, but mapping to new values
          red: "#E63946",
          gold: "#FFB703",
          black: "#050505",
        },
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
