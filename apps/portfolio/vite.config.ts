import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

// import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), Pages(),viteCompression({algorithm:"brotliCompress"})],
  // plugins: [react(), WindiCSS()],
  server: { host: true },
});
