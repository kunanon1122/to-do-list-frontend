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
            500: "#282e33",
          },
          gray: {
            100: "#6B778C",
            200: "#9fadbc",
            400: "#323940",
          },
          red: {
            100: "#FF0000",
            200: "#FF4500",
            300: "#d13212",
          },
          blue: {
            100: "#09326c",
            200: "#85b8ff",
          },
        },
      },
      // font-family: Arial, Helvetica, sans-serifF
      fontFamily: {
        default: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
