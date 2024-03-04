import { resolve } from "path";
import { minify } from "rollup-plugin-esbuild";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		sourcemap: true,
		lib: {
			entry: {
				chapeau: resolve(__dirname, "src/main.js"),
				// fileupload: resolve(__dirname, "src/fileupload/fileupload.js"),
			},
			formats: ["es"],
			fileName: (_, entry) => `${entry}.js`,
		},
		rollupOptions: {
			// plugins: [minify()], // Vite doesn't minify when using "es"-format
			// output: {
			// 	chunkFileNames: "[name].js",
			// },
		},
	},
	server: {
		port: 5173,
	},
});
