import { rm } from "fs/promises";
import path, { resolve } from "path";
import iife from "rollup-plugin-iife";
import { fileURLToPath } from "url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// await rm("./dist/", { recursive: true, force: true });

await build({
  build: {
    outDir: resolve(__dirname, "dist/browser"),
  },
  plugins: [
    iife({
      names: (moduleId) => {
        if (moduleId.includes("chapeau.js")) return "Chapeau";
        if (moduleId.includes("filepond")) return "FilePond";
      },
    }),
  ],
});

await build({
  build: {
    outDir: resolve(__dirname, "dist/esm"),
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
