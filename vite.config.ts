import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import ssr from 'vike/plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
  ],
  publicDir: 'public',
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/variables" as *;
          @use "styles/mixins" as *;
        `,
      },
    },
  },
  base: '/',
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      pages: path.resolve(__dirname, './src/pages'),
      shared: path.resolve(__dirname, './src/shared'),
      features: path.resolve(__dirname, './src/features'),
      entities: path.resolve(__dirname, './src/entities'),
      widgets: path.resolve(__dirname, './src/widgets'),
      styles: path.resolve(__dirname, './src/app/styles'),
    },
  },
});
