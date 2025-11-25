# iManage Socials Website

A modern, responsive website for iManage Socials - a social media management company. Built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, responsive design (desktop, tablet, mobile)
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- ✨ Beautiful UI components with shadcn/ui
- 📝 Form validation with React Hook Form + Zod
- 🎯 SEO optimized

## Pages

1. **Homepage** - Hero section, about preview, services preview, featured clients, and CTA
2. **About** - Company story, values, and timeline
3. **Services** - Detailed service listings with add-on services
4. **Portfolio** - Gallery of work with testimonials
5. **Contact** - Contact form with validation and direct contact information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form 8.0.0 + Zod 3.23.8
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.468.0
- **TypeScript**: 5.7.2 (Full type safety)

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── portfolio/     # Portfolio page
│   ├── contact/       # Contact page
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Homepage
│   └── globals.css    # Global styles
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   └── Footer.tsx     # Footer component
└── lib/
    └── utils.ts       # Utility functions
```

## Customization

### Colors

The color scheme uses CSS variables defined in `app/globals.css`. The primary color is teal and secondary is orange, matching the brand requirements.

### Content

Update the content in each page file:
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content
- `app/services/page.tsx` - Services content
- `app/portfolio/page.tsx` - Portfolio items
- `app/contact/page.tsx` - Contact information

### Images

Replace placeholder images with actual:
- Team photos
- Client logos
- Portfolio samples
- Brand video for hero section

## Next Steps

1. Add actual images and videos
2. Connect contact form to backend/email service
3. Add blog/resource section (optional)
4. Optimize images with Next.js Image component
5. Add analytics tracking
6. Set up SEO meta tags for each page

## License

© 2025 iManage Socials. All rights reserved.

