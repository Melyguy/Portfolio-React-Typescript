import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; 
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Updated path to include all src files
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".rotate-y-90": {
          transform: "rotateY(90deg)",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-x-180": {
          transform: "rotateX(180deg)",
        },
        ".preserve-3d" : {
          transformStyle : "preserve-3d"
        },
        ".perspective-1000": {
          perspective : "1000px"
        },
        ".backface-hidden": {
          backfaceVisibility : "hidden",
        }
      });
    }),
  ],
};

export default config;
