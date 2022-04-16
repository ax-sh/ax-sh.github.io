import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), Pages()],
  // plugins: [react(), WindiCSS()],
  server: { host: true },
});
