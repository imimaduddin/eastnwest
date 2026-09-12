/**
 * Central route metadata configuration for SEO
 * Each route has unique title, description, and canonical URL
 */
export const routeMetadata = {
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

export const canonicalHost = 'https://www.eastnwestitsolution.com';

/**
 * Get metadata for a given route path
 * Normalizes trailing slashes before lookup
 */
export function getRouteMetadata(pathname) {
  // Normalize: remove trailing slash unless it's the root
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  return routeMetadata[normalizedPath] || {
    title: 'Page Not Found | EastNWest IT Solution',
    description: 'The page you are looking for could not be found.',
    robots: 'noindex,follow'
  };
}

/**
 * Get canonical URL for a given route path
 */
export function getCanonicalUrl(pathname) {
  const normalizedPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${canonicalHost}${normalizedPath}`;
}

/**
 * List of all routes for static generation
 */
export const allRoutes = Object.keys(routeMetadata);
