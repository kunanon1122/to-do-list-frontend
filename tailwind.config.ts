import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        core: {
          white: {
            100: "#fff",
            200: "#b6c2cf",
          },
          black: {
            100: "#000",
            200: "#161a1d",
            300: "#1d2125",
            400: "#22272b",
          },
          gray: {
            100: "#6B778C",
            200: "#9fadbc",
          },
          red: {
            100: "#FF0000",
          },
          blue: {
            100: "#09326c",
            200: "#85b8ff",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
