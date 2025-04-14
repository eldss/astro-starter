# Astro Website Starter Template

A comprehensive starter template for building modern, performant websites with Astro. This template includes TypeScript, Tailwind CSS, Alpine.js, and testing setup with Vitest to help you get started quickly with best practices in place.

## Overview

This starter template provides a solid foundation for building websites with Astro, focusing on performance, developer experience, and modern web standards. It includes:

- **[Astro](https://astro.build/)** - A modern static site builder with excellent performance characteristics
- **[TypeScript](https://www.typescriptlang.org/)** - For type safety and improved developer experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Alpine.js](https://alpinejs.dev/)** - Lightweight JavaScript framework for adding interactivity
- **[Vitest](https://vitest.dev/)** - Fast testing framework compatible with Vite
- **[Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Assets to be processed
│   ├── components/     # Reusable UI components
│   ├── helpers/        # Utility functions
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components and routes
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── vitest.config.js    # Vitest configuration
```

## Technologies

### Astro

Astro is a modern static site builder that delivers lightning-fast performance by shipping zero JavaScript by default.

- **Configuration**: `astro.config.mjs`
- **Documentation**: [https://docs.astro.build/](https://docs.astro.build/)

Astro allows you to use components from various frameworks and renders them to HTML at build time, resulting in faster page loads and better performance.

### TypeScript

TypeScript adds static typing to JavaScript, helping catch errors early and improving developer experience.

- **Configuration**: `tsconfig.json`
- **Documentation**: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

The project is configured with strict TypeScript settings to ensure type safety throughout your codebase.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.

- **Configuration**: Integrated via Vite plugin in `astro.config.mjs`
- **Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

Tailwind is imported in `src/styles/global.css` and available throughout the project.

### Alpine.js

Alpine.js is a minimal JavaScript framework for adding interactivity to your HTML with a declarative approach.

- **Configuration**: Added via Astro integration in `astro.config.mjs`
- **Documentation**: [https://alpinejs.dev/](https://alpinejs.dev/)

#### Alpine.js Examples

**Basic Toggle:**

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

**Data Binding:**

```html
<div x-data="{ message: 'Hello Alpine.js!' }">
  <input type="text" x-model="message" />
  <p x-text="message"></p>
</div>
```

**Conditional Classes:**

```html
<div x-data="{ isActive: false }">
  <button
    @click="isActive = !isActive"
    :class="isActive ? 'bg-blue-500' : 'bg-gray-500'"
  >
    Toggle Class
  </button>
</div>
```

### Vitest

Vitest is a Vite-native testing framework that's fast and compatible with the Jest API.

- **Configuration**: `vitest.config.js`
- **Documentation**: [https://vitest.dev/guide/](https://vitest.dev/guide/)

The project includes test coverage reporting and is configured to work with Astro components.

### Sitemap

The Astro Sitemap integration automatically generates a sitemap for your site to improve SEO.

- **Configuration**: Added via Astro integration in `astro.config.mjs`
- **Documentation**: [https://docs.astro.build/en/guides/integrations-guide/sitemap/](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Utility Functions

### classNames Helper

A utility function similar to `clsx` for conditionally joining class names together:

```typescript
// Located in src/helpers/classNames.ts
import { classNames } from "@/helpers/classNames";

// Usage
const buttonClasses = classNames(
  "btn",
  isActive && "btn-active",
  isDisabled && "btn-disabled",
);
```

## Available Scripts

The following scripts are available in `package.json`:

- `pnpm dev` - Start the development server
- `pnpm build` - Build the production site
- `pnpm preview` - Preview the built site locally
- `pnpm astro` - Run Astro CLI commands
- `pnpm check` - Run Astro type checking
- `pnpm tsc` - Run TypeScript type checking
- `pnpm test` - Run tests with Vitest
- `pnpm test:coverage` - Run tests with coverage reporting
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Lint code with ESLint
- `pnpm lint:fix` - Lint and fix code with ESLint
- `pnpm clean` - Remove dist and node_modules directories

## Getting Started

1. Clone this repository
2. Install dependencies with `pnpm install`
3. Start the development server with `pnpm dev`
4. Visit `http://localhost:4321` to see your site

## Upgrading Dependencies

Managing dependencies in a modern web project can be complex due to the interconnected nature of packages. This section provides guidance on safely upgrading dependencies while maintaining compatibility.

### Understanding Dependency Relationships

The project has several key dependency groups that are related:

1. **Astro Ecosystem**: Astro core and its integrations (`astro`, `@astrojs/*`)
2. **TypeScript Ecosystem**: TypeScript and related tools (`typescript`, `@typescript-eslint/*`)
3. **Testing Ecosystem**: Vitest and related packages (`vitest`, `@vitest/*`, `happy-dom`)
4. **Linting/Formatting**: ESLint, Prettier and plugins (`eslint`, `prettier`, plugins)
5. **UI Libraries**: Tailwind CSS, Alpine.js and related packages

### Recommended Upgrade Process

#### 1. Check for Updates

Use pnpm to check for outdated packages:

```bash
pnpm outdated
```

#### 2. Follow Topological Order for Updates

When upgrading, follow this general order to minimize compatibility issues:

1. First: Core language tools (TypeScript)
2. Second: Framework (Astro)
3. Third: Framework integrations (@astrojs/\*)
4. Fourth: UI libraries (Tailwind, Alpine.js)
5. Fifth: Development tools (ESLint, Prettier, Vitest)

#### 3. Major Version Upgrades

For major version upgrades (e.g., ESLint 8 → 9):

1. **Read the migration guide** for the package being upgraded
2. **Check peer dependencies** to identify what else needs upgrading
3. **Update related packages together** (e.g., all ESLint plugins when upgrading ESLint)

#### 4. Specific Package Guidelines

- **Astro**: When upgrading Astro, also check if its integrations need updates

  ```bash
  pnpm upgrade astro @astrojs/*
  ```

- **ESLint**: Update ESLint and its plugins/configs together

  ```bash
  pnpm upgrade eslint @typescript-eslint/* eslint-plugin-*
  ```

- **TypeScript**: When upgrading TypeScript, check if type definitions need updates

  ```bash
  pnpm upgrade typescript @types/*
  ```

- **Tailwind CSS**: When upgrading Tailwind, also update its Vite plugin
  ```bash
  pnpm upgrade tailwindcss @tailwindcss/vite
  ```

#### 5. Testing After Upgrades

After any dependency upgrade:

1. Run type checking: `pnpm tsc`
2. Run linting: `pnpm lint`
3. Run tests: `pnpm test`
4. Start the dev server: `pnpm dev`
5. Build the site: `pnpm build`

### Using Dependency Update Tools

For automated dependency management, consider:

- **Renovate** or **Dependabot**: For automated PR creation with updates
- **pnpm dedupe**: To remove duplicate dependencies after updates
  ```bash
  pnpm dedupe
  ```

### Handling Breaking Changes

If you encounter issues after upgrading:

1. Check the package's release notes or changelog
2. Look for migration guides
3. Search for common issues in GitHub issues or Stack Overflow
4. Consider using the `--no-save` flag with pnpm to test upgrades before committing
