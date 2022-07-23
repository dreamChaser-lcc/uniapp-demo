import { defineConfig } from "vite";
const { resolve } = require("path");
import uni from "@dcloudio/vite-plugin-uni";
import postcsspxtoviewport from "postcss-px-to-viewport";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
  plugins: [
    uni(),
  ],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: "px",
          viewportWidth: 375,
          unitPrecision: 3,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["ignore-"],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: "vw",
          landscapeWidth: 568,
        }),
      ],
    },
  },
});
