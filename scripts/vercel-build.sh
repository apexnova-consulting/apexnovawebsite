#!/bin/bash

echo "Running Vercel build script..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run linting
echo "Running linting checks..."
npm run lint

# Build the project
echo "Building the project..."
npm run build

# Run postbuild script
echo "Running postbuild tasks..."
node scripts/postbuild.js

echo "Vercel build completed successfully!" 