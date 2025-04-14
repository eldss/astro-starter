import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Ignore patterns for files that shouldn't be linted
  {
    ignores: [
      // Ignore auto-generated Astro files
      ".astro/**/*",
      ".dist/**/*",
      // Ignore third-party UI kit files
      "catalyst-ui-kit/**/*",
    ],
  },
  ...compat.config({
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:astro/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      extraFileExtensions: [".astro"],
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
      },
    ],
  }),
];
