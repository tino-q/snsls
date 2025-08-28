# React Router Implementation

This project now includes React Router with browser history for navigation between pages.

## Routes

- `/` - Home page (main content)
- `/aviso-legal` - Legal Notice page
- `/politica-privacidad` - Privacy Policy page

## Components

### Legal Pages
- `AvisoLegal.tsx` - Legal Notice page with content from `aviso legal.md`
- `PoliticaPrivacidad.tsx` - Privacy Policy page with content from `politica de privacidad`
- `Breadcrumb.tsx` - Navigation breadcrumb component
- `LegalPages.css` - Styles for legal pages
- `Breadcrumb.css` - Styles for breadcrumb navigation

### Navigation
- Footer links now use React Router `Link` components for legal pages
- LegalCompliance component includes direct links to legal pages
- Breadcrumb navigation on legal pages for better UX

## Features

- **Browser History**: Uses `BrowserRouter` for clean URLs
- **Responsive Design**: All pages are mobile-friendly
- **SEO Friendly**: Proper page titles and structure
- **Accessibility**: ARIA labels and semantic HTML
- **Clean Navigation**: Breadcrumb navigation on legal pages

## Usage

The routing is implemented in `src/App.tsx` using React Router v6. Users can navigate to legal pages through:

1. Footer links in the "Información Legal" section
2. Direct links in the LegalCompliance component
3. Direct URL access (e.g., `/aviso-legal`)

## Dependencies

- `react-router-dom` - For routing functionality
- `@types/react-router-dom` - TypeScript definitions
