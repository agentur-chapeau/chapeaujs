import { resolve } from "path";
import { minify } from "rollup-plugin-esbuild";
import iife from "rollup-plugin-iife";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: {
        chapeau: resolve(__dirname, "src/index.js"),
      },
      formats: ["es"],
    },
    minify: false,
  },
  server: {
    port: 5173,
  },
});
