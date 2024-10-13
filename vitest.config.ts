import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const tsconfigPaths = (await import("vite-tsconfig-paths")).default;

  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      environment: "jsdom",
      include: ["**/*.test.{ts,tsx}"],
      globals: true,
      setupFiles: ["./vitest-setup.ts"]
    }
  };
});
