/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { configDefaults } from "vitest/config";

export default getViteConfig({
  test: {
    environment: "happy-dom",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "html"],
      extension: [...configDefaults.coverage.extension, ".astro"],
      include: ["src/**/*.{ts,astro}"],
      exclude: ["**/*.d.ts", "test/**", "node_modules/**"],
    },
  },
});
