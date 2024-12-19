## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/whiteechocolatee/dealer-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dealer-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   Or, if using `yarn`:
   ```bash
   yarn install
   ```

### Environment Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
NEXT_PUBLIC_NHTSA_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/vehicles
NEXT_PUBLIC_API_FORMAT=json
```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will start the application in development mode with Turbopack enabled. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

### Building the Application

To create a production build:

```bash
npm run build
```

After the build process is complete, you can start the application in production mode:

```bash
npm run start
```

### Linting and Formatting

- To check for linting issues:
  ```bash
  npm run lint
  ```
- To automatically fix linting issues:
  ```bash
  npm run lint:fix
  ```
- To format code using Prettier:
  ```bash
  npm run format
  ```

---

## Features

### Key Features

- **Dynamic Routing**: Built using Next.js, supports dynamic routes for `makeId` and `year`.
- **Reusable Components**: A set of reusable UI components, such as buttons, dropdowns, and selectors.
- **Tailwind CSS**: Styled with Tailwind CSS for fast and responsive design.
- **TypeScript**: Fully typed with TypeScript for better code quality and developer experience.
- **Hooks**: Custom hooks for fetching data, such as `use-get-makers`.
- **Radix UI**: Enhanced accessibility and customizability using Radix UI components.

---

## Architecture Overview

### Application Structure

The application is built using the following architecture:

- **Next.js App Directory** (`src/app`): Organizes pages and layouts using the new app router.
  - **Dynamic Pages**: The `result/[makeId]/[year]` folder structure supports dynamic routes for vehicle data.
  - **Global Layouts and Styles**: Centralized layout and global CSS (`globals.css`) for consistent styling.
- **Reusable Components** (`src/components/ui`): Reusable UI components such as buttons, dropdowns, and filters.
- **Custom Hooks** (`src/hooks`): Contains custom React hooks like `use-get-makers` for fetching and managing data.
- **Utility Library** (`src/lib`): General utility functions and helpers for modularity.

---


### Configuration

- **Husky**: Pre-commit hooks ensure code quality by running linting and formatting before committing.
- **Lint-Staged**: Optimizes linting and formatting by only processing changed files.
- **ESLint & Prettier**: Configured with strict rules to maintain consistent code style.
- **Tailwind CSS**: Configured via `tailwind.config.ts` for utility-first styling.
