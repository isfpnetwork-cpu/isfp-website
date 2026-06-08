import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        sage: "#7EA78A",
        ivory: "#F7F7F4",
        gold: "#C1A25F",
        slate: "#5A6B7A",
        ink: "#10263F"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 31, 58, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
