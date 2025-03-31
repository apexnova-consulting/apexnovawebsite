# ApexNova Consulting Website: User Guide

This document provides guidance for website administrators on how to manage and update the ApexNova Consulting website.

## Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/apexnova-consulting-website.git
   cd apexnova-consulting-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit the `.env.local` file with your specific configuration.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Docker

If you prefer using Docker for development:

1. **Start the development environment:**
   ```bash
   npm run docker:dev
   ```

2. **Build the production Docker image:**
   ```bash
   npm run docker:build
   ```

3. **Run the production Docker container:**
   ```bash
   npm run docker:run
   ```

## Making Updates

### Content Updates

Most content can be modified by editing the relevant component files:

1. **Homepage**: `src/app/page.tsx` and components in `src/components/`
2. **About Page**: `src/app/about/page.tsx`
3. **Coaching Page**: `src/app/coaching/page.tsx`
4. **SpeechFlow AI Page**: `src/app/speechflow-ai/page.tsx`
5. **Digital Products Page**: `src/app/digital-products/page.tsx`
6. **Contact Page**: `src/app/contact/page.tsx`

### Common Tasks

#### Updating Navigation

To update the navigation menu:

1. Open `src/components/Navbar.tsx`
2. Modify the navigation links array
3. Save the file and test the changes

#### Adding a New Page

To add a new page:

1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Create a `page.tsx` file in the new directory
3. Add the page content
4. Add a link to the page in the navigation menu (`Navbar.tsx`)
5. Update the sitemap.xml file in the `public` directory

#### Updating Testimonials

To update testimonials:

1. Open `src/components/Testimonials.tsx`
2. Modify the testimonials array with new content
3. Save the file and test the changes

#### Adding Digital Products

To add a new digital product:

1. Open `src/app/digital-products/page.tsx`
2. Add a new product to the products array
3. Save the file and test the changes

### Images

1. **Adding new images:**
   - Place new images in the `public/images/` directory
   - Reference them in your components as `/images/your-image.jpg`

2. **Optimizing images:**
   - Use compressed image formats (WEBP when possible)
   - Keep image file sizes under 200KB for better performance
   - Use responsive image sizing with Next.js Image component

## Deployment

### Deploying to Vercel

The site is configured for deployment on Vercel:

1. **First-time setup:**
   ```bash
   vercel login
   vercel
   ```

2. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Manual Deployment

For manual deployment:

1. **Build the application:**
   ```bash
   ./scripts/build.sh
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## Maintenance

### Regular Tasks

1. **Keep dependencies updated:**
   ```bash
   npm outdated
   npm update
   ```

2. **Run linting checks:**
   ```bash
   npm run lint
   ```

3. **Update content regularly:**
   - Refresh testimonials monthly
   - Add new blog posts or digital products as they become available
   - Check all links periodically to ensure they're working

### Security

1. **Keep Next.js updated:**
   ```bash
   npm update next
   ```

2. **Review environment variables** and ensure sensitive data is not exposed

3. **Monitor Vercel dashboard** for any issues or warnings

## Getting Help

For technical assistance with the website, contact the development team at:
[dev@apexnovaconsulting.com](mailto:dev@apexnovaconsulting.com) 