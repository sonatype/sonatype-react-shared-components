# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Sonatype's React Shared Components library - a monorepo containing:
- **Library** (`lib/`): The main React component library published as `@sonatype/react-shared-components`
- **Gallery** (`gallery/`): A demo application showcasing component usage and serving as documentation
- **SSR Tests** (`ssr-tests/`): Next.js project testing server-side rendering compatibility

The library provides reusable React UI components and utilities designed for Sonatype products, built with TypeScript and SCSS.

## Essential Commands

### Library Development (run in `lib/`)
- `yarn install` - Install dependencies
- `yarn build` - Full production build
- `yarn watch` - Development build with file watching
- `yarn test` - Run unit tests with linting
- `yarn test-watch` - Run tests in watch mode
- `yarn jest` - Run Jest tests only
- `yarn lint` - Lint source code
- `yarn ci-lint` - Lint with zero warnings (CI mode)
- `yarn clean` - Clean build artifacts

### Gallery Development (run in `gallery/`)
- `yarn install` - Install dependencies  
- `yarn start` - Start development server at http://localhost:4043
- `yarn build` - Build gallery for production
- `yarn test` - Run visual tests (requires Docker)
- `yarn lint` - Lint gallery code

### Visual Testing (run in repository root)
Visual tests use Docker for consistency. Sonatype employees should use:
```bash
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn test
```

To update snapshots:
```bash
# Light mode
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest -u
# Dark mode  
docker run --rm -it -w /home/jenkins/gallery -v $PWD:/home/jenkins docker-all.repo.sonatype.com/sonatype/react-shared-components-ci:latest yarn jest-dark -u
```

## Architecture & Code Organization

### Library Structure (`lib/src/`)
- **`index.ts`**: Main entry point exporting all components
- **`components/`**: React components organized by component name (e.g., `NxButton/`, `NxModal/`)
  - Each component directory contains the main component file, styles, tests, and types
  - Stateful wrapper components are in `stateful/` subdirectories
  - Component-specific SCSS files are co-located with components
- **`base-styles/`**: Foundation styles imported globally
- **`scss-shared/`**: Non-emitting SCSS partials (mixins, variables)
- **`assets/`**: Static assets copied to dist

### Component Export Pattern
Components are exported from `lib/src/index.ts` in the format:
```typescript
export { default as ComponentName, Props as ComponentNameProps } from './components/ComponentName/ComponentName';
```

### Styling Architecture
- SCSS is used for styling with components importing their own stylesheets
- Base styles are automatically imported via `index.ts`
- Shared SCSS utilities are in `scss-shared/` for mixins and variables
- A compiled CSS bundle `react-shared-components.css` is built for non-SCSS consumers

### Component Design Principles
- Components are primarily stateless to support Redux workflows
- Stateful wrappers are provided as convenience components in `stateful/` subdirectories
- State management helpers are exported as pure functions for Redux integration
- Components should accept `ref` props for integration with tooltip libraries

## Development Workflow

### Typical Development Setup
Run these commands simultaneously in separate terminals:

In `lib/`:
```bash
yarn clean && rm -rf node_modules && yarn install && yarn watch
```

In `gallery/`:
```bash
yarn clean && rm -rf node_modules && yarn install && yarn start
```

This allows real-time development with the library watch updating components while the gallery displays them.

### Testing Strategy
- Unit tests use React Testing Library and Jest
- Visual regression tests use jest-image-snapshot with Puppeteer
- Components include both RTL unit tests and visual tests
- SSR compatibility is tested with the Next.js project in `ssr-tests/`

### Version Management
- Use `yarn version --no-git-tag-version (--patch|--minor|--major)` in `lib/` to increment versions
- Versions are synchronized between `lib/package.json` and `gallery/package.json`
- CI automatically releases new versions from the main branch

## Key Technologies
- **React 19** with TypeScript
- **SCSS** for styling
- **Webpack** for building
- **Jest** with React Testing Library for unit testing
- **Puppeteer** with jest-image-snapshot for visual testing
- **FontAwesome** for icons
- **Emotion** for some styling needs