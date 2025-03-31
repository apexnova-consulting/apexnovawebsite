#!/bin/bash

echo "Initializing Git repository for ApexNova Consulting Website..."

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit for ApexNova Consulting Website"

echo "Git repository initialized successfully!"
echo ""
echo "Next steps:"
echo "1. Connect your local repository to the existing GitHub repo:"
echo "   git remote add origin https://github.com/apexnova-consulting/apexnovawebsite.git"
echo "2. Push your code to GitHub:"
echo "   git push -u origin main"
echo ""
echo "Once your repository is on GitHub, you can deploy to Vercel by:"
echo "1. Go to https://vercel.com/new"
echo "2. Import your GitHub repository (apexnova-consulting/apexnovawebsite)"
echo "3. Configure your project and deploy" 