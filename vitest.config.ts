import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [react(), mdx()],
  test: {
    environment: "node",
    globals: true,
    exclude: ["**/e2e/**", "**/node_modules/**"],
  },
});
