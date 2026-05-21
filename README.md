# gradelib-web

Angular client for **GradeLib** - an electronic journal and learning management system for educational institutions.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [npm](https://www.npmjs.com/) v10+
- [Angular CLI](https://angular.dev/tools/cli) v20+

---

## Environment configuration

Angular does not use `.env` files. Configuration is managed through TypeScript environment files located in `src/environments/`:

| File | Used when |
|------|-----------|
| `environment.ts` | Production build (`ng build`) |
| `environment.development.ts` | Development server (`ng serve`) |

Angular CLI automatically swaps the file based on the active build configuration - no manual action needed.

### Variables

| Variable | Description | Development value |
|----------|-------------|-------------------|
| `apiUrl` | Base URL of the gradelib-api REST API | `http://localhost:3000` |

---

## Installation

```bash
npm install
```

---

## Starting the development server

```bash
npm start
```

The application will be available at `http://localhost:4200` and will reload automatically on file changes.

> Make sure **gradelib-api** is running before starting the frontend - the dev environment expects the API at `http://localhost:3000`.

---

## Available scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the development server (`ng serve`) |
| `npm run build` | Build the application for production into `dist/` |
| `npm run watch` | Build in watch mode with the development configuration |
| `npm test` | Run unit tests via Karma |
| `npm run lint` | Run ESLint across `src/` |
| `npm run format` | Auto-format code with Prettier |

---

## Project structure

```
src/
├── app/
│   ├── app.ts               # Root component
│   ├── app.config.ts        # Application configuration (providers, etc.)
│   ├── app.routes.ts        # Top-level routing
│   ├── app.html             # Root component template
│   ├── app.css              # Root component styles
│   ├── common/              # Shared utilities, guards, interceptors
│   ├── features/            # Feature modules (by domain)
│   └── shared/              # Reusable UI components and services
├── environments/
│   ├── environment.ts           # Production environment config
│   └── environment.development.ts  # Development environment config
├── index.html               # Application shell
├── main.ts                  # Bootstrap entry point
└── styles.css               # Global styles
```
