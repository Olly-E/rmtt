/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7E001",
        white: { DEFAULT: "#FFFFFF", 2: "#FAFAFA", 3: "#FAF7E1" },
        black: { DEFAULT: "#050505", 2: "#0D0C0C", },
        gray: {
          7: "#F1F0EF",
          6: "#E3E0DE",
          5: "#CECBC9",
          4: "#817D7C",
          3: "#2A2727",
          2: "#191919",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
