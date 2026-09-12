/**
 * Central route metadata configuration for SEO
 * Each route has unique title, description, and canonical URL
 */
export const routeMetadata = {
  '/': {
    title: 'ServiceNow CMDB, ITAM & Cloud Consulting | EastNWest',
    description: 'EastNWest delivers ServiceNow CMDB, ITAM, and SAM consulting with cloud and DevOps delivery for enterprises in the USA, Canada, and Germany.',
    robots: 'index,follow'
  },
  '/about': {
    title: 'About EastNWest IT Solution | ServiceNow Experts',
    description: 'Learn about EastNWest IT Solution—ServiceNow CMDB, ITAM, SAM, cloud, and DevOps consulting for enterprises in the USA, Canada, and Germany.',
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
  '/services/servicenow-cmdb-itam-consulting': {
    title: 'ServiceNow CMDB, ITAM & SAM Consulting | EastNWest',
    description: 'CMDB, ITAM, and SAM consulting on ServiceNow. EastNWest builds data quality, asset lifecycle, and license control for USA, Canada, and Germany clients.',
    robots: 'index,follow'
  },
  '/services/servicenow-consulting': {
    title: 'ServiceNow Consulting & Workflow Automation | EastNWest',
    description: 'ServiceNow consulting for ITSM, workflows, and platform delivery. EastNWest helps USA, Canada, and Germany teams ship governed ServiceNow outcomes.',
    robots: 'index,follow'
  },
  '/services/itsm-itam': {
    title: 'ITSM & ITAM Consulting on ServiceNow | EastNWest',
    description: 'ITSM and ITAM consulting that aligns ServiceNow processes, CMDB accuracy, and asset workflows for enterprises across the USA, Canada, and Germany.',
    robots: 'index,follow'
  },
  '/services/servicenow-delivery': {
    title: 'ServiceNow Delivery & Implementation | EastNWest',
    description: 'ServiceNow delivery pods for implementation, UAT, and enhancements. EastNWest supports governed releases for USA, Canada, and Germany programs.',
    robots: 'index,follow'
  },
  '/services/cloud-consulting': {
    title: 'Cloud Consulting Services | EastNWest IT Solution',
    description: 'Cloud consulting for modernization, governance, and operations. EastNWest partners with USA, Canada, and Germany teams on secure, scalable estates.',
    robots: 'index,follow'
  },
  '/services/devops-services': {
    title: 'DevOps Consulting & Engineering Services | EastNWest',
    description: 'DevOps services for CI/CD, platform engineering, and release discipline. EastNWest helps USA, Canada, and Germany teams ship with guardrails.',
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
    title: 'Contact EastNWest | ServiceNow & Cloud Consulting',
    description: 'Contact EastNWest for ServiceNow CMDB, ITAM, SAM, cloud, or DevOps consulting. Discuss USA, Canada, or Germany delivery with our team today.',
    robots: 'index,follow'
  },
  '/locations/usa': {
    title: 'USA ServiceNow CMDB & ITAM Consulting | EastNWest',
    description: 'USA-focused ServiceNow, CMDB, ITAM, and cloud consulting from EastNWest. Delivery support for enterprise ITSM and asset programs nationwide.',
    robots: 'index,follow'
  },
  '/locations/canada': {
    title: 'Canada ServiceNow CMDB & ITAM Consulting | EastNWest',
    description: 'Canada-focused ServiceNow consulting for CMDB, ITAM, ITSM, and cloud delivery. EastNWest supports enterprise programs with governed implementation.',
    robots: 'index,follow'
  },
  '/locations/germany': {
    title: 'Germany ServiceNow CMDB & ITAM Consulting | EastNWest',
    description: 'Germany-focused ServiceNow consulting for CMDB, ITAM, ITSM, and cloud programs. EastNWest delivers governed implementation and enhancement support.',
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
    title: 'ServiceNow CMDB, ITSM & DevOps Insights | EastNWest',
    description: 'Read EastNWest guides on ServiceNow CMDB, ITSM, ITAM, cloud, and DevOps. Practical delivery insights for teams in the USA, Canada, and Germany.',
    robots: 'index,follow'
  },
  '/blog/servicenow-cmdb-governance-that-sticks': {
    title: 'ServiceNow CMDB Governance That Sticks | EastNWest',
    description: 'Learn ServiceNow CMDB governance that sticks: clear ownership, data quality rules, and operating rhythm so CI data stays trusted after go-live.',
    robots: 'index,follow'
  },
  '/blog/servicenow-itsm-implementation-best-practices': {
    title: 'ServiceNow ITSM Best Practices | EastNWest Blog',
    description: 'ServiceNow ITSM implementation best practices covering process design, CMDB readiness, UAT, and adoption that survives audits and upgrades.',
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
