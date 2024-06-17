import react from "@vitejs/plugin-react";
// import AutoImport from "unplugin-auto-import/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
    // AutoImport({
    //   imports: ["vitest"],
    //   dts: true // generate TypeScript declaration
    // })
  ],
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    setupFiles: ["./vitest-setup.ts"]
  }
});
