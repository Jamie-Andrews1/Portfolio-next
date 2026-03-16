import tseslint from "typescript-eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const portfolioConfig = [
  // 1. Base Next.js rules translated for ESLint 9
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),

  {
    // 2. Custom Portfolio Rules
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true, // Or point to your './tsconfig.json'
      },
    },
  },
  // 3. Ignore build artifacts
  {
    ignores: [".next/**", "node_modules/**", "playwright-report/**"],
  },
];
export default portfolioConfig;
