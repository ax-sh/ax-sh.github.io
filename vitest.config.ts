/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      imports: ['vitest'],
      dts: true // generate TypeScript declaration
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.{ts,tsx}']
  }
});
