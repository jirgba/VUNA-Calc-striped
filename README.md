# VUNA Calculator

A modern, responsive calculator built with HTML, CSS, and JavaScript.

## CI/CD Workflow

This repository includes a GitHub Actions workflow that performs basic linting and deploys the static site to GitHub Pages.

Workflow: `.github/workflows/ci-cd.yml`

What it does:
- Runs `htmlhint` against the repo to lint HTML.
- Runs `eslint` on JS files.
- Uploads the repository as a Pages artifact and deploys using GitHub's Pages actions.

To enable Pages deployment:
1. Push this repo to GitHub.
2. Ensure the default branch is `main` or `master`.
3. In repository Settings → Pages, select the GitHub Pages deployment source if required (the actions workflow will create the deployment).

## Docker

Build and run the calculator in a Docker container.

### Build
```bash
docker build -t vuna-calculator:latest .
```

### Run
```bash
docker run -p 8080:80 vuna-calculator:latest
```

Then open `http://localhost:8080` in your browser.

### Using Docker Compose
```bash
docker-compose up
```

The site will be available at `http://localhost:8080`.

## Development

### Install dependencies
```bash
npm install
```

### Run linters
```bash
npm run lint
```

### Run tests
```bash
npm test
```

## Notes
- The workflow uses the `GITHUB_TOKEN` provided by Actions for deployment; no extra secrets are required.
- Lint steps are intentionally permissive (use `|| true`) to avoid blocking deploys for small style issues; adjust as needed.
- Docker image uses Alpine Linux + nginx for minimal size and fast startup.
