import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "640px",
      },
      colors: {
        colorOne: "#4831d4",
        colorTwo: "#ccf381",
        colorThree: "#3d155f",
      },
    },
  },
  plugins: [],
};
export default config;
