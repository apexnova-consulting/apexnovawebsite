#!/bin/bash

# Build script for ApexNova Consulting Website

echo "🚀 Building ApexNova Consulting Website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
  echo "🌐 To start the production server, run: npm run start"
  echo "🌍 Or deploy to Vercel with: vercel --prod"
else
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi 