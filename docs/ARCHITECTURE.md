# ApexNova Consulting Website Architecture

This document provides an overview of the architecture and component structure of the ApexNova Consulting website.

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Frontend Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel (configured)

## Project Structure

The project follows a modular architecture with clear separation of concerns:

```
/
├── public/            # Static assets and files
│   ├── images/        # Image assets
│   ├── sitemap.xml    # SEO sitemap
│   └── robots.txt     # Robots file for crawlers
├── src/               # Source code
│   ├── app/           # Next.js App Router pages
│   │   ├── page.tsx   # Homepage
│   │   ├── about/     # About page
│   │   ├── coaching/  # Coaching programs page
│   │   ├── speechflow-ai/ # SpeechFlow AI product page
│   │   ├── digital-products/ # Digital products page
│   │   ├── contact/   # Contact page
│   │   ├── not-found.tsx # Custom 404 page
│   │   └── layout.tsx # Root layout
│   ├── components/    # Reusable React components
│   │   ├── Navbar.tsx # Navigation bar
│   │   ├── Footer.tsx # Site footer
│   │   ├── Hero.tsx   # Homepage hero section
│   │   ├── SpeechFlowTeaser.tsx # SpeechFlow product teaser
│   │   ├── DigitalProductsTeaser.tsx # Digital products teaser
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── NewsletterSignup.tsx # Newsletter signup form
│   │   └── ScrollToTop.tsx # Scroll to top button
│   └── utils/         # Utility functions
│       └── scrollToSection.ts # Smooth scrolling utility
├── scripts/           # Build and utility scripts
│   ├── build.sh       # Build script
│   ├── postbuild.js   # Post-build processing
│   └── pre-commit.sh  # Git pre-commit hook
├── .env.example       # Environment variables example
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vercel.json        # Vercel deployment configuration
```

## Component Architecture

The website uses a component-based architecture for reusability and maintainability:

1. **Navbar**: Main navigation with responsive mobile menu
2. **Hero**: Landing section with main value proposition
3. **SpeechFlowTeaser**: Preview of the SpeechFlow AI product
4. **DigitalProductsTeaser**: Preview of digital products
5. **Testimonials**: Client testimonials carousel
6. **NewsletterSignup**: Email signup with free mini-challenge
7. **Footer**: Site footer with links and contact info

## Page Structure

Each page follows a consistent structure:

1. **Layout**: Common layout with Navbar and Footer
2. **Main Content**: Page-specific content
3. **Call to Action**: Relevant action for the user to take

## Data Flow

The application uses React's component state for managing UI interactions. Future enhancements could include:

- Server-side API routes for form submissions
- Integration with a CMS for content management
- Authentication for user accounts and purchases

## Styling Approach

The website uses Tailwind CSS with a consistent design system:

- **Colors**: Primary brand colors with consistent accent colors
- **Typography**: Hierarchical type system with responsive sizing
- **Spacing**: Consistent spacing scale throughout
- **Components**: Reusable UI patterns like buttons, cards, and forms

## Deployment

The site is configured for deployment on Vercel with:

- Continuous integration via GitHub Actions
- Environment variable management
- Edge caching and CDN distribution
- Automatic HTTPS and security headers 