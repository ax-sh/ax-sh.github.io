/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['vitest'],
      dts: true // generate TypeScript declaration
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true
  }
});
