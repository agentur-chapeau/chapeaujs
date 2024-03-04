import { resolve } from "path";
import { minify } from "rollup-plugin-esbuild";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		sourcemap: true,
		lib: {
			entry: [resolve(__dirname, "src/main.js"), resolve(__dirname, "src/index.js")],
			formats: ["es"],
			fileName: (_, entry) => `${entry}.js`,
		},
		rollupOptions: {
			plugins: [minify()], // Vite doesn't minify when using "es"-format
		},
	},
	server: {
		port: 5173,
	},
});
