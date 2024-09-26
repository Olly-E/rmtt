/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "90px",
              fontWeight: "700",
            },
            h2: {
              fontSize: "66px",
              fontWeight: "700",
            },
            h3: {
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "62.4px",
            },
            h4: {
              fontSize: "32px",
              fontWeight: '700'
            },
            h5: {
              fontSize: "24px",
              fontWeight: '700'
            },
            h6: {
              fontSize: "20px",
              fontWeight: '700'
            },
          
          },
        },
      },
      colors: {
        primary: "#71C2DE",
        white: { DEFAULT: "#FFFFFF", 2: "#FAFAFA" },
        black: { DEFAULT: "#0D0C0C", 2: "#191919", 3: "#444444" },
        gray: {
          4: "#F0F0F0",
          3: "#E1E1E1",
          2: "#1B1B1",
          1: "#6A6A6A",
        },
        "blue-state": "#2680EB",
        "green-state": "#2CB864",
        "yellow-state": "#F3CD58",
        "red-state": "#E34149",
        "error-state": "#CD432F",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
