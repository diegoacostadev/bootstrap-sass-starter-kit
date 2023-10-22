const path = require("path");
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { defineConfig } from "vite";

const pageData = {
  "/index.html": {
    title: "Bootstrap Sass Starter Kit",
  },
  "/about/index.html": {
    title: "About Page",
  },
};

const root = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

export default defineConfig({
  root,
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  build: {
    outDir: outDir,
  },
  server: {
    port: 8080,
  },
});
