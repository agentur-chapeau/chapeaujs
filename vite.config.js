import * as fs from "fs/promises";
import { existsSync } from "fs";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(async () => {
  const entrypointPath = path.join(__dirname, "src/scripts");
  const entrypoints = await createEntrypoints(entrypointPath);

  return {
    build: {
      sourcemap: true,
      minify: false,
      lib: {
        entry: entrypoints,
        formats: ["es"],
        fileName: (_, entry) => `${entry}.js`,
      },
    },
  };
});

async function createEntrypoints(directoyPath) {
  const entries = {};

  // Reading all entries in the entrypoint directory
  const entrypoints = await fs.readdir(directoyPath);
  for (const entrypoint of entrypoints) {
    // Getting the name of the entrypoint
    const name = path.parse(entrypoint).name;
    let fullPath = path.join(directoyPath, entrypoint);

    // Check if the entry is a directory
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      // Check if inside is a index.js file
      const indexPath = path.join(fullPath, "index.js");
      if (existsSync(indexPath)) {
        // Use the index.js file as entrypoint
        fullPath = indexPath;
      }
    }

    // Only use .js files
    if (fullPath.endsWith(".js")) {
      entries[name] = fullPath;
    }
  }

  return entries;
}
