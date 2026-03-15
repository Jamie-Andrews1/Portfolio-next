import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup"; // You'll need this to parse MDX in tests

export default defineConfig({
  plugins: [
    react(),
    mdx(), // Add this to handle the .mdx extension
  ],
  test: {
    environment: "node",
    globals: true,
    exclude: ["**/e2e/**", "**/node_modules/**"],
  },
});
