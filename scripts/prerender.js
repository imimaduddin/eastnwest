import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import route configuration
const routeConfig = {
  '/': {
    title: 'EastNWest IT Solution | ServiceNow Consulting, Cloud & DevOps Services',
    description: 'ServiceNow CMDB, ITAM, and SAM consulting plus cloud, DevOps, and software delivery for enterprises in the USA, Canada, and Germany.',
    robots: 'index,follow'
  },
  '/about': {
    title: 'About Us | EastNWest IT Solution',
    description: 'Learn about EastNWest IT Solution\'s expertise in ServiceNow consulting, cloud modernization, and enterprise automation services.',
    robots: 'index,follow'
  },
  '/services': {
    title: 'IT Services | ServiceNow & Cloud Consulting | EastNWest',
    description: 'Comprehensive IT services including ServiceNow implementation, cloud infrastructure, DevOps automation, and enterprise software development.',
    robots: 'index,follow'
  },
  '/services/servicenow': {
    title: 'ServiceNow Consulting Services | CMDB, ITAM, SAM | EastNWest',
    description: 'Expert ServiceNow consulting for CMDB, IT Asset Management (ITAM), Software Asset Management (SAM), and enterprise service management.',
    robots: 'index,follow'
  },
  '/services/cloud': {
    title: 'Cloud Consulting & Migration Services | AWS, Azure, GCP | EastNWest',
    description: 'Cloud consulting, migration, and modernization services for AWS, Azure, and Google Cloud Platform. Expert DevOps and infrastructure automation.',
    robots: 'index,follow'
  },
  '/services/devops': {
    title: 'DevOps Consulting & Automation Services | EastNWest IT Solution',
    description: 'DevOps consulting, CI/CD pipeline implementation, infrastructure as code, and automation services for enterprise software delivery.',
    robots: 'index,follow'
  },
  '/industries': {
    title: 'Industries We Serve | Enterprise IT Solutions | EastNWest',
    description: 'IT consulting and enterprise solutions for healthcare, finance, manufacturing, retail, and technology industries.',
    robots: 'index,follow'
  },
  '/contact': {
    title: 'Contact Us | EastNWest IT Solution',
    description: 'Get in touch with EastNWest IT Solution for ServiceNow consulting, cloud services, and enterprise IT solutions.',
    robots: 'index,follow'
  },
  '/locations/usa': {
    title: 'USA Office | EastNWest IT Solution',
    description: 'ServiceNow and cloud consulting services for enterprises in the United States. Expert IT solutions and digital transformation.',
    robots: 'index,follow'
  },
  '/locations/canada': {
    title: 'Canada Office | EastNWest IT Solution',
    description: 'ServiceNow and cloud consulting services for Canadian enterprises. IT consulting and automation solutions.',
    robots: 'index,follow'
  },
  '/locations/germany': {
    title: 'Germany Office | EastNWest IT Solution',
    description: 'ServiceNow and cloud consulting services for German enterprises. Expert IT solutions and enterprise automation.',
    robots: 'index,follow'
  },
  '/locations/ksa': {
    title: 'Saudi Arabia Location | EastNWest IT Solution',
    description: 'EastNWest IT Solution presence in Saudi Arabia.',
    robots: 'noindex,follow'
  },
  '/locations/gcc': {
    title: 'GCC Region | EastNWest IT Solution',
    description: 'EastNWest IT Solution presence in the GCC region.',
    robots: 'noindex,follow'
  },
  '/case-studies': {
    title: 'Case Studies | Success Stories | EastNWest IT Solution',
    description: 'Real-world success stories of ServiceNow implementations, cloud migrations, and DevOps transformations.',
    robots: 'index,follow'
  },
  '/blog': {
    title: 'Blog | IT Insights & Best Practices | EastNWest IT Solution',
    description: 'Expert insights on ServiceNow, cloud computing, DevOps, and enterprise IT best practices.',
    robots: 'index,follow'
  }
};

const canonicalHost = 'https://www.eastnwestitsolution.com';

async function prerender() {
  console.log('Starting prerender process...');
  
  const distPath = path.join(__dirname, '..', 'dist');
  const templatePath = path.join(distPath, 'index.html');
  
  // Read the base template
  const template = await fs.readFile(templatePath, 'utf-8');
  
  // Generate HTML for each route
  for (const [route, metadata] of Object.entries(routeConfig)) {
    const normalizedPath = route === '/' ? '' : route;
    const canonicalUrl = `${canonicalHost}${normalizedPath}`;
    
    // Inject meta tags into template
    const html = injectMetaTags(template, metadata, canonicalUrl);
    
    // Determine output path
    let outputPath;
    if (route === '/') {
      outputPath = path.join(distPath, 'index.html');
    } else {
      outputPath = path.join(distPath, route.slice(1), 'index.html');
    }
    
    // Create directory if needed
    await fs.ensureDir(path.dirname(outputPath));
    
    // Write the HTML file
    await fs.writeFile(outputPath, html, 'utf-8');
    console.log(`✓ Generated: ${route} → ${outputPath}`);
  }
  
  // Generate 404 page
  const notFoundHtml = injectMetaTags(template, {
    title: 'Page Not Found | EastNWest IT Solution',
    description: 'The page you are looking for could not be found.',
    robots: 'noindex,follow'
  }, `${canonicalHost}/404`);
  
  await fs.writeFile(path.join(distPath, '404.html'), notFoundHtml, 'utf-8');
  console.log('✓ Generated: 404.html');
  
  console.log('\nPrerender complete! Generated static HTML for all routes.');
}

function injectMetaTags(template, metadata, canonicalUrl) {
  // Find the head closing tag and inject meta tags before it
  const headCloseIndex = template.indexOf('</head>');
  
  const metaTags = `
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="${metadata.robots}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
  `;
  
  return template.slice(0, headCloseIndex) + metaTags + template.slice(headCloseIndex);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
