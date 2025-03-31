#!/bin/bash

echo "Running pre-commit hooks..."

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.tsx?$')

if [[ "$STAGED_FILES" = "" ]]; then
  echo "No TypeScript/JavaScript files staged for commit."
  exit 0
fi

# Check for linting errors
echo "Checking for linting errors..."
npx eslint $STAGED_FILES

if [[ $? -ne 0 ]]; then
  echo "❌ Linting errors found. Please fix them before committing."
  exit 1
fi

echo "✅ Pre-commit checks passed!"
exit 0 