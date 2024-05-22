import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
        "neutral-100": "var(--neutral-100)",
        "neutral-150": "var(--neutral-150)",
        "neutral-200": "var(--neutral-200)",
        "neutral-300": "var(--neutral-300)",
        "neutral-400": "var(--neutral-400)",
        "neutral-500": "var(--neutral-500)",
        "neutral-600": "var(--neutral-600)",
        "neutral-700": "var(--neutral-700)",
        "neutral-800": "var(--neutral-800)",
        "neutral-900": "var(--neutral-900)",
        "neutral-1000": "var(--neutral-1000)",
        "support-error": "var(--support-error)",
        "support-success": "var(--support-success)",
        "support-warning": "var(--support-warning)",
        "support-info": "var(--support-info)",
        "specials-recommended": "var(--specials-recommended)",
        "specials-executed": "var(--specials-executed)",
        "specials-cbot": "var(--specials-cbot)",
        "specials-cbot-light": "var(--specials-cbot-light)",
        "specials-basis": "var(--specials-basis)",
        "specials-basis-light": "var(--specials-basis-light)",
        "specials-dollar": "var(--specials-dollar)",
        "specials-dollar-light": "var(--specials-dollar-light)",
      },
      borderRadius: {
        base: "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
