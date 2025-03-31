# ApexNova Consulting Website

A modern, responsive website for ApexNova Consulting, built with Next.js and Tailwind CSS. Founded by Mike Nielson, ApexNova Consulting specializes in executive communication coaching and AI-powered solutions for improving leadership communication skills.

## Features

- Modern, responsive design
- Fast performance with Next.js
- SEO optimized
- Interactive components
- Speech coaching services information
- SpeechFlow AI product showcase
- Digital products marketplace
- Contact form
- Newsletter signup

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/apexnova-consulting-website.git
cd apexnova-consulting-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit the `.env.local` file with your specific configuration.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

You can also use the build script:
```bash
./scripts/build.sh
```

## Deployment

The site is configured for easy deployment on Vercel:

```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/utils` - Utility functions
- `/public` - Static assets and files
- `/scripts` - Build and utility scripts

## License

[MIT](LICENSE)

## Acknowledgements

Special thanks to the client for their input and collaboration in creating this site.

---

© 2023 ApexNova Consulting. All rights reserved. 