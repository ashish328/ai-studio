# AI Studio

A React + Vite + typescript app which has a sample ui for demo to upload images and generate new images with help of Generative AI.

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:ashish328/ai-studio.git

cd ai-studio
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the app

```bash
yarn dev
# or
npm run dev
```

### 4. Run tests

```bash
yarn test
# or
npm run test
```

### 5. Build for production

```bash
yarn build
yarn preview
# or
npm run build
npm run preview
```

## Design Notes

### Tech Stack

- React 18.
- TypeScript.
- Vite (bundler & dev server).
- Prettier with @trivago/prettier-plugin-sort-imports + prettier-plugin-tailwindcss.
- ESLint (flat config, integrated with Prettier).
- TailwindCSS for styling.
- Vitest + React Testing Library for unit & integration tests.

### Architecture

- Components are colocated with their tests (Component.tsx + Component.spec.tsx).
- Service utilities (e.g., resizeImage.ts) are isolated for easier mocking in tests.
- ESLint enforces code quality, Prettier enforces formatting.
- Import order and Tailwind class sorting are handled automatically on save.

As this is a small demo app din't complicate it creating multiple folder.
