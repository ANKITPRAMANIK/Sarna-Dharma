import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // keyframes: {
      //   wave: {
      //     '0%': { transform: 'rotate(0deg) scale(1.0)' },
      //     '25%': { transform: 'rotate(2deg) scale(1.02)' },
      //     '50%': { transform: 'rotate(-1deg) scale(1.01)' },
      //     '75%': { transform: 'rotate(2deg) scale(1.02)' },
      //     '100%': { transform: 'rotate(0deg) scale(1.0)' },
      //   }
      // },
      // animation: {
      //   'wave': 'wave 6s ease-in-out infinite'
      // }
    }
  },
  plugins: [],
};
export default config;
