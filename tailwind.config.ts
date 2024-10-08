import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
      },
      aspectRatio: {
        "project-thumbnail": "4/3",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
