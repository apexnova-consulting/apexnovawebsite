# Contributing to ApexNova Consulting Website

Thank you for considering contributing to the ApexNova Consulting website! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/apexnova-consulting-website.git
   cd apexnova-consulting-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `develop` - Development branch
- Feature branches - `feature/feature-name`
- Bug fix branches - `fix/bug-name`

Always create your feature or bug fix branch from `develop`.

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat: add new feature`
- `fix: resolve bug issue`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code changes without bug fixes or features`
- `test: add or update tests`
- `chore: changes to the build process or auxiliary tools`

### Pull Requests

1. Update your feature branch with the latest changes from `develop`
2. Run tests and linting to ensure code quality:
   ```bash
   npm run lint
   npm run test
   ```
3. Create a pull request with a clear title and description
4. Link any related issues
5. Wait for code review and address any feedback

## Code Standards

### TypeScript and React

- Use TypeScript for all new code
- Follow functional component patterns with hooks
- Use appropriate React features (memo, useCallback, etc.) for performance
- Document complex logic with comments

### Styling

- Use Tailwind CSS for styling
- Follow mobile-first responsive design principles
- Follow the existing color scheme and typography

### Testing

- Write tests for new features or bug fixes
- Run tests before submitting a pull request:
  ```bash
  npm run test
  ```

## Documentation

- Update README.md with any new features or changes
- Document components with JSDoc comments
- Keep the user guide up to date for website administrators

## Deployment

The project uses Vercel for deployments:

- The `main` branch is automatically deployed to production
- Preview deployments are created for pull requests

## Getting Help

If you have questions or need assistance:

1. Check existing issues or create a new one
2. Reach out to the maintainers
3. Join our community discussions

Thank you for contributing! 