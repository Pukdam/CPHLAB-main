// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        fremkaldelse: resolve(__dirname, "src/fremkaldelse.html"),
        analogguide: resolve(__dirname, "src/analogguide.html"),
        singleview: resolve(__dirname, "src/singleview.html"),
        smalfilmoverspillet: resolve(__dirname, "src/smalfilmoverspillet.html"),
        sitemap: resolve(__dirname, "src/sitemap.xml"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
