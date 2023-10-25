import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import eslint from 'vite-plugin-eslint';

const path = require('path');

const pageData = {
  '/index.html': {
    title: 'Bootstrap Sass Starter Kit',
  },
  '/about/index.html': {
    title: 'About Page',
  },
};

const root = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, 'dist');

export default {
  root,
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
    eslint(),
  ],
  build: {
    outDir,
  },
  server: {
    port: 8080,
  },
};
