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
        background: "#0A0A0A",
        surface: "#171717",
        border: "#262626",
        primary: "#F5F5F5",
        secondary: "#A3A3A3",
        accent: "#8A2BE2",
        highlight: "#BFFF00",
      },
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        // defaults cover most 8px multiples: 2 (8px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 24 (96px)
      },
      borderRadius: {
        sm: "8px", // override or just use rounded-sm? 8px is usually rounded-md or lg. Default rounded is 0.25rem (4px).
        md: "8px",
        lg: "16px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
