# README.md for Nuxt App

## Project Overview

This project is a Nuxt.js application with a focus on Vue 3, Vite, and Cypress for testing. The project structure is organized to facilitate the development of a modern web application with best practices in mind.

## Project Structure

```
.
├── Dockerfile
├── README.md
├── app.vue
├── assets
│   └── css
├── components
│   └── atoms
├── cypress
│   ├── downloads
│   ├── fixtures
│   └── support
├── cypress.config.ts
├── nuxt.config.ts
├── package.json
├── pages
│   └── index.vue
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   └── favicon.ico
├── store
│   └── index.ts
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest.config.js
```

## Setup & Installation

1. Ensure you have Node.js version `>=18.0.0` installed.
2. Clone the repository.
3. Navigate to the project directory and run `pnpm install` to install the dependencies.
4. Use the scripts provided in `package.json` to run, build, and test the application.

## Scripts

- `build`: Build the Nuxt application for production.
- `dev`: Start the Nuxt development server.
- `generate`: Generate a static version of the Nuxt application.
- `preview`: Preview the generated static site.
- `storybook`: Start the Storybook development server.
- `build:storybook`: Build the Storybook for production.
- `lint:js`: Lint the source code using ESLint.
- `test:ui`: Run the Vite test UI.
- `test`: Run the Vite tests.
- `coverage`: Generate test coverage using Vite.
- `cypress`: Open the Cypress test runner.

To run a Docker container

1. **Build the Docker Image**:
   ```bash
   docker build -t my-nuxt-app .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -p 3000:3000 my-nuxt-app
   ```

After running the above commands, you should be able to access your Nuxt app in your browser by navigating to `http://localhost:3000`.


## Configuration

The main configuration for the Nuxt application can be found in `nuxt.config.ts`. This configuration includes:

- Module imports for Vite, Nuxt UI, and Pinia.
- App metadata including charset, viewport, title, and meta description.
- TypeScript strict mode.
- Component directory configuration.
- UI settings including global UI components and icon sets.
- Devtools configuration with timeline and VSCode settings.

## Dependencies

This project uses a range of dependencies to enhance the development experience and provide functionality:

- **Nuxt.js** as the core framework.
- **Vite** for faster development and builds.
- **Cypress** for end-to-end testing.
- **Storybook** for developing UI components in isolation.
- **Pinia** for state management.
- ... and many more.

For a full list of dependencies and their versions, refer to the `package.json` file.

## Contributing

If you'd like to contribute to this project, please ensure you follow the coding standards and guidelines. Before submitting a pull request, ensure all tests pass and the code is linted.

---

Happy coding! 🚀