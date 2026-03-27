# my-app

A simple Node.js project with a GitHub Actions CI/CD pipeline.

## Project Structure

```
my-app/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions pipeline
├── src/
│   ├── index.js            # App source code
│   └── index.test.js       # Jest tests
├── .eslintrc.json          # ESLint config
├── .gitignore
└── package.json
```

## Scripts

| Command        | Description                        |
|----------------|------------------------------------|
| `npm test`     | Run Jest tests with coverage       |
| `npm run lint` | Lint source files with ESLint      |
| `npm run build`| Build the project                  |
| `npm start`    | Start the app                      |

## CI/CD Pipeline

The pipeline runs automatically on:
- Every **push** to `main` or `develop`
- Every **pull request** targeting `main`

### Pipeline Jobs

```
Push / PR
   │
   ▼
[Lint] ──► [Test (Node 18, 20, 22)] ──► [Build]
```

1. **Lint** — Runs ESLint to catch code quality issues
2. **Test** — Runs Jest across Node.js 18, 20 and 22 (matrix strategy) and uploads a coverage report
3. **Build** — Runs the build step and uploads the build artifact

## Getting Started

```bash
npm install
npm test
npm run lint
```
