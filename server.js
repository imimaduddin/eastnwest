import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Middleware to handle trailing slashes with 301 redirects
app.use((req, res, next) => {
  const { path: urlPath } = req;
  
  // If path has trailing slash and is not root, redirect without it
  if (urlPath !== '/' && urlPath.endsWith('/')) {
    const newPath = urlPath.slice(0, -1);
    return res.redirect(301, newPath + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''));
  }
  
  next();
});

// Serve static assets (but not directories)
app.use(express.static(distPath, { 
  index: false, // Don't serve index.html automatically
  redirect: false // Don't redirect to trailing slash
}));

// Handle SPA routes
app.get('*', (req, res) => {
  const requestPath = req.path;
  
  // Check if a prerendered HTML file exists for this route
  let filePath;
  if (requestPath === '/') {
    filePath = path.join(distPath, 'index.html');
  } else {
    filePath = path.join(distPath, requestPath, 'index.html');
  }
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // Route doesn't exist - send 404
    const notFoundPath = path.join(distPath, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.status(404).sendFile(notFoundPath);
    } else {
      res.status(404).send('404 - Page Not Found');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('- Trailing slashes redirect to non-trailing (301)');
  console.log('- Unknown routes return 404 status');
  console.log('- Each route has unique meta tags in HTML');
});
