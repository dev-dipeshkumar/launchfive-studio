import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors are defined via @theme inline in globals.css (Tailwind v4).
      // The CSS variables use raw hex/rgba values, NOT hsl(),
      // so hsl(var(--xxx)) wrappers here would produce invalid CSS.
      // All color tokens (background, foreground, primary, etc.) are
      // mapped via --color-xxx: var(--xxx) in the @theme inline block.
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
