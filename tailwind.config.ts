import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0": "0px", // Often needed for reset
      "8": "8px",
      "16": "16px",
      "24": "24px",
      "32": "32px",
      "48": "48px",
      "64": "64px",
      "96": "96px",
    },
    borderRadius: {
      DEFAULT: "8px",
      lg: "16px",
      full: "9999px",
      none: "0", // Usually good to have for resets
    },
    fontSize: {
      h1: ["64px", { lineHeight: "1.1", fontWeight: "700" }],
      h2: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
      body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      chip: ["12px", { lineHeight: "1.4", fontWeight: "500" }],
    },
    boxShadow: {
      none: "none",
      1: "0 4px 12px rgba(0, 0, 0, 0.08)",
    },
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
      maxWidth: {
        "desktop": "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
