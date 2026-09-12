# Deployment Guide

## Quick Start

This guide shows how to deploy the SEO-optimized React + Vite website to production.

## Prerequisites

- Node.js 18+ installed
- Access to deployment platform (Vercel/Netlify/Firebase/Cloud Run)
- Domain configured (www.eastnwestitsolution.com)

## Build the Site

```bash
npm install
npm run build
```

This creates a `dist/` folder with:
- Static HTML files for each route (with meta tags)
- Bundled JavaScript and CSS
- `404.html` for unknown routes

## Deployment Options

### Option 1: Vercel (Recommended for Simplicity)

1. **Connect Repository**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables** (if needed):
   ```
   NODE_ENV=production
   ```

4. **Deploy**:
   ```bash
   vercel --prod
   ```

5. **Configure Domain**:
   - Add www.eastnwestitsolution.com in Vercel dashboard
   - Update DNS A/CNAME records

### Option 2: Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize** (if first time):
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: No (we have route-specific HTML)
   - Set up rewrites: Yes (already in firebase.json)

3. **Deploy**:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

4. **Configure Domain** in Firebase Console:
   - Add custom domain www.eastnwestitsolution.com
   - Follow DNS verification steps

### Option 3: Netlify

1. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   npm run build
   netlify deploy --prod
   ```

2. **Or Connect Git Repository**:
   - Link GitHub repo in Netlify dashboard
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy branch: `main` (or your chosen branch)

3. **Configure Domain**:
   - Add www.eastnwestitsolution.com in Netlify dashboard
   - Update DNS records

### Option 4: Cloud Run (with Express Server)

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 8080
   ENV PORT=8080
   CMD ["node", "server.js"]
   ```

2. **Deploy**:
   ```bash
   gcloud run deploy eastnwest-website \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

3. **Map Domain**:
   ```bash
   gcloud run domain-mappings create \
     --service eastnwest-website \
     --domain www.eastnwestitsolution.com \
     --region us-central1
   ```

### Option 5: App Engine

1. **Create app.yaml**:
   ```yaml
   runtime: nodejs18
   instance_class: F1
   automatic_scaling:
     min_instances: 0
     max_instances: 10
   ```

2. **Deploy**:
   ```bash
   npm run build
   gcloud app deploy
   ```

## Post-Deployment Verification

Run these curl commands against your production URL:

```bash
DOMAIN="https://www.eastnwestitsolution.com"

# 1. Check unique meta tags
curl -s $DOMAIN/ | grep "<title>"
curl -s $DOMAIN/about | grep "<title>"

# 2. Check canonical URLs
curl -s $DOMAIN/services | grep 'rel="canonical"'

# 3. Check noindex for KSA/GCC
curl -s $DOMAIN/locations/ksa | grep 'name="robots"'

# 4. Check 404 status
curl -I $DOMAIN/fake-page-test

# 5. Check trailing slash redirects
curl -I $DOMAIN/about/
```

Expected results are documented in the main README.md.

## Monitoring

### Google Search Console
1. Add property: www.eastnwestitsolution.com
2. Verify ownership
3. Submit sitemap (if generated)
4. Monitor indexing status over 2-4 weeks

### Analytics
Consider adding Google Analytics or Plausible:

```javascript
// In src/App.jsx or index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

## Troubleshooting

### Issue: Trailing slashes still show duplicates
**Solution**: Check hosting platform redirects are configured:
- Vercel: Verify `vercel.json` redirects section
- Netlify: Check `netlify.toml` redirects
- Firebase: Verify `firebase.json` redirects

### Issue: 404 pages return 200 status
**Solution**: 
- Static hosts: Ensure 404.html is served with 404 status
- Server.js: Check `res.status(404).sendFile()` is used

### Issue: Meta tags not showing
**Solution**: Run `npm run build` again and verify `dist/about/index.html` contains meta tags

### Issue: Old WordPress site still showing
**Solution**: 
- Clear CDN cache (Cloudflare, etc.)
- Check DNS A/CNAME records point to new hosting
- Wait for DNS propagation (up to 48 hours)

## Rollback Plan

If issues arise:

1. **Revert DNS** to old hosting
2. **Keep this branch** available for quick redeployment
3. **Check logs** in hosting platform for errors

## Support

For deployment issues:
1. Check hosting platform documentation
2. Verify build completes: `npm run build`
3. Test locally: `npm run serve`
4. Review server logs for errors

## Cost Estimates

- **Vercel**: Free tier sufficient (100GB bandwidth)
- **Netlify**: Free tier sufficient (100GB bandwidth)
- **Firebase**: ~$1-5/month (depends on traffic)
- **Cloud Run**: ~$5-20/month (depends on requests)
- **App Engine**: ~$10-30/month (F1 instances)
