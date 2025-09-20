const fs = require('fs');
const path = require('path');

console.log('Running post-build tasks...');

// Create a robots.txt file if it doesn't exist
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  console.log('Creating robots.txt...');
  const robotsContent = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.apexnovaconsulting.com/sitemap.xml
`;
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('robots.txt created successfully.');
}

// Check if sitemap.xml exists
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.log('Warning: sitemap.xml not found in public directory.');
  console.log('Please make sure to generate a sitemap.xml file for better SEO.');
}

// Log success message
console.log('Post-build tasks completed successfully.');