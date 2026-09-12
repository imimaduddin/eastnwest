# EastNWest IT Solution - Website with SEO Optimizations

This is a production-ready React + Vite website with complete SEO optimizations including static HTML generation, per-route meta tags, proper canonical URLs, 404 handling, and trailing slash normalization.

## Key SEO Features Implemented

### ✅ 1. Per-Route Unique Meta Tags (Visible Without JavaScript)
- Each route has unique `title`, `meta description`, and `canonical` tags
- Meta tags are injected into static HTML during build (not client-side)
- Crawlers see proper meta tags without executing JavaScript

### ✅ 2. Canonical URLs
- All canonical URLs use `https://www.eastnwestitsolution.com` host
- Self-referencing canonical tags on every page
- No trailing slashes in canonical URLs (except root `/`)

### ✅ 3. Noindex for Specific Routes
- `/locations/ksa` and `/locations/gcc` have `noindex,follow` meta robots tag
- Other routes have `index,follow`

### ✅ 4. HTTP 404 for Unknown Routes
- Server returns proper 404 HTTP status code (not 200)
- Unknown routes serve `404.html` with 404 status
- No more soft 404 issues

### ✅ 5. Trailing Slash Normalization
- URLs with trailing slashes redirect to non-trailing versions with HTTP 301
- Example: `/about/` → 301 redirect to `/about`
- Root path `/` is the only exception (no redirect)

### ✅ 6. Central Route Metadata Map
- All route metadata defined in `src/config/routes.js`
- Easy to update titles and descriptions from one place
- Temporary titles derived from page content (ready for content briefs)

### ✅ 7. No Employer Leakage
- All content is about EastNWest IT Solution only
- No references to CITAM, Al Rajhi, or other employers

## Project Structure

```
/workspace/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Site navigation
│   │   ├── SEO.jsx              # Dynamic SEO component
│   │   └── TrailingSlashHandler.jsx  # Client-side slash handling
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── config/
│   │   └── routes.js            # Central route metadata
│   ├── App.jsx                  # Main app with routes
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── scripts/
│   └── prerender.js             # Static HTML generation
├── server.js                    # Express server with 301 & 404
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (includes prerendering)
npm run build

# Preview production build locally
npm run serve
```

## How It Works

### Build Process
1. `npm run build` compiles the React app with Vite
2. `scripts/prerender.js` runs after build
3. For each route in `routeMetadata`, generates `route/index.html` with injected meta tags
4. Creates `404.html` for unknown routes

### Server Behavior
1. **Trailing slash requests** (e.g., `/about/`) → 301 redirect to `/about`
2. **Known routes** (e.g., `/about`) → serve `about/index.html` with unique meta tags
3. **Unknown routes** (e.g., `/nonexistent`) → 404 status with `404.html`

### Verification

#### Check Raw HTML (No JavaScript Required)
```bash
# Home page has unique title
curl -s https://www.eastnwestitsolution.com/ | grep "<title>"

# About page has different title
curl -s https://www.eastnwestitsolution.com/about | grep "<title>"

# Each route returns different HTML
curl -s https://www.eastnwestitsolution.com/ | grep "description"
curl -s https://www.eastnwestitsolution.com/about | grep "description"
```

#### Check 404 Status
```bash
# Unknown route returns HTTP 404 (not 200)
curl -I https://www.eastnwestitsolution.com/nonexistent-page
# Should see: HTTP/2 404
```

#### Check Trailing Slash Redirects
```bash
# Trailing slash redirects with 301
curl -I https://www.eastnwestitsolution.com/about/
# Should see: HTTP/2 301
# Location: /about
```

#### Check Canonical URLs
```bash
curl -s https://www.eastnwestitsolution.com/about | grep "canonical"
# Should see: <link rel="canonical" href="https://www.eastnwestitsolution.com/about" />
```

#### Check Noindex Tags
```bash
curl -s https://www.eastnwestitsolution.com/locations/ksa | grep "robots"
# Should see: <meta name="robots" content="noindex,follow" />

curl -s https://www.eastnwestitsolution.com/locations/gcc | grep "robots"
# Should see: <meta name="robots" content="noindex,follow" />
```

## Deployment

This site can be deployed to:
- **Vercel/Netlify**: Use `server.js` or configure hosting rules for 301 redirects and 404
- **Firebase Hosting**: Configure `firebase.json` for rewrites and redirects
- **Cloud Run/App Engine**: Deploy with `server.js` using Express
- **Static hosting**: Deploy `dist/` folder with web server configured for:
  - Trailing slash 301 redirects
  - Proper 404 responses
  - SPA fallback to route-specific `index.html` files

## Updating Route Metadata

Edit `src/config/routes.js` to add/modify routes:

```javascript
export const routeMetadata = {
  '/new-page': {
    title: 'New Page | EastNWest IT Solution',
    description: 'Description for the new page.',
    robots: 'index,follow'
  },
  // ... more routes
};
```

Then add the route to `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

Rebuild to regenerate static HTML with new meta tags.

## License

Proprietary - EastNWest IT Solution Pvt Ltd
