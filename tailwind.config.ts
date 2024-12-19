import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: "#f0f2f3",
        background: "#FFFFFF",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
