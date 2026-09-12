import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import SEO from './components/SEO';
import TrailingSlashHandler from './components/TrailingSlashHandler';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SEO />
        <TrailingSlashHandler />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/servicenow" element={<ServiceDetail type="servicenow" />} />
            <Route path="/services/servicenow-cmdb-itam-consulting" element={<ServiceDetail type="servicenow-cmdb-itam-consulting" />} />
            <Route path="/services/servicenow-consulting" element={<ServiceDetail type="servicenow-consulting" />} />
            <Route path="/services/itsm-itam" element={<ServiceDetail type="itsm-itam" />} />
            <Route path="/services/servicenow-delivery" element={<ServiceDetail type="servicenow-delivery" />} />
            <Route path="/services/cloud" element={<ServiceDetail type="cloud" />} />
            <Route path="/services/cloud-consulting" element={<ServiceDetail type="cloud-consulting" />} />
            <Route path="/services/devops" element={<ServiceDetail type="devops" />} />
            <Route path="/services/devops-services" element={<ServiceDetail type="devops-services" />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations/usa" element={<Location region="USA" />} />
            <Route path="/locations/canada" element={<Location region="Canada" />} />
            <Route path="/locations/germany" element={<Location region="Germany" />} />
            <Route path="/locations/ksa" element={<Location region="KSA" noindex />} />
            <Route path="/locations/gcc" element={<Location region="GCC" noindex />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/servicenow-cmdb-governance-that-sticks" element={<BlogPost type="cmdb-governance" />} />
            <Route path="/blog/servicenow-itsm-implementation-best-practices" element={<BlogPost type="itsm-best-practices" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}

function ServiceDetail({ type }) {
  const content = {
    servicenow: {
      title: 'ServiceNow Consulting',
      h1: 'ServiceNow Consulting',
      description: 'Expert ServiceNow implementation and optimization services.',
      links: []
    },
    'servicenow-cmdb-itam-consulting': {
      title: 'ServiceNow CMDB, ITAM & SAM Consulting',
      h1: 'ServiceNow CMDB, ITAM & SAM Consulting',
      description: 'CMDB, ITAM, and SAM consulting on ServiceNow. EastNWest builds data quality, asset lifecycle, and license control for USA, Canada, and Germany clients. We help enterprises establish clear ownership, implement data quality rules, and maintain trusted configuration item data that survives audits and upgrades.',
      links: [
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/services/itsm-itam', text: 'ITSM & ITAM Consulting' },
        { to: '/blog/servicenow-cmdb-governance-that-sticks', text: 'CMDB Governance Best Practices' }
      ]
    },
    'servicenow-consulting': {
      title: 'ServiceNow Consulting & Workflow Automation',
      h1: 'ServiceNow Consulting & Workflow Automation',
      description: 'ServiceNow consulting for ITSM, workflows, and platform delivery. EastNWest helps USA, Canada, and Germany teams ship governed ServiceNow outcomes with clear process design, testing discipline, and adoption support.',
      links: [
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'ServiceNow CMDB & ITAM Consulting' },
        { to: '/services/servicenow-delivery', text: 'ServiceNow Delivery & Implementation' },
        { to: '/services/itsm-itam', text: 'ITSM & ITAM Consulting' }
      ]
    },
    'itsm-itam': {
      title: 'ITSM & ITAM Consulting on ServiceNow',
      h1: 'ITSM & ITAM Consulting on ServiceNow',
      description: 'ITSM and ITAM consulting that aligns ServiceNow processes, CMDB accuracy, and asset workflows for enterprises across the USA, Canada, and Germany. We integrate incident, problem, and change management with asset lifecycle discipline.',
      links: [
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'ServiceNow CMDB & ITAM' },
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/blog/servicenow-itsm-implementation-best-practices', text: 'ITSM Best Practices' }
      ]
    },
    'servicenow-delivery': {
      title: 'ServiceNow Delivery & Implementation',
      h1: 'ServiceNow Delivery & Implementation',
      description: 'ServiceNow delivery pods for implementation, UAT, and enhancements. EastNWest supports governed releases for USA, Canada, and Germany programs with clear handoffs, testing rigor, and change control.',
      links: [
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'CMDB & ITAM Consulting' },
        { to: '/contact', text: 'Contact Us' }
      ]
    },
    cloud: {
      title: 'Cloud Services',
      h1: 'Cloud Services',
      description: 'Cloud migration and modernization for AWS, Azure, and GCP.',
      links: []
    },
    'cloud-consulting': {
      title: 'Cloud Consulting Services',
      h1: 'Cloud Consulting Services',
      description: 'Cloud consulting for modernization, governance, and operations. EastNWest partners with USA, Canada, and Germany teams on secure, scalable estates with landing zones, cost control, and operational discipline.',
      links: [
        { to: '/services/devops-services', text: 'DevOps Services' },
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/contact', text: 'Contact Us' }
      ]
    },
    devops: {
      title: 'DevOps Automation',
      h1: 'DevOps Automation',
      description: 'CI/CD, infrastructure as code, and automation services.',
      links: []
    },
    'devops-services': {
      title: 'DevOps Consulting & Engineering Services',
      h1: 'DevOps Consulting & Engineering Services',
      description: 'DevOps services for CI/CD, platform engineering, and release discipline. EastNWest helps USA, Canada, and Germany teams ship with guardrails through infrastructure as code, automated testing, and deployment pipelines.',
      links: [
        { to: '/services/cloud-consulting', text: 'Cloud Consulting' },
        { to: '/services/servicenow-delivery', text: 'ServiceNow Delivery' },
        { to: '/blog', text: 'DevOps Insights' }
      ]
    }
  };

  const service = content[type];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>{service.h1}</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>{service.description}</p>
      {service.links && service.links.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Related Services</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {service.links.map((link, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                <Link to={link.to} style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
                  {link.text} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Industries() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Industries We Serve</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>
        We provide enterprise IT solutions across healthcare, finance, manufacturing, 
        retail, and technology sectors.
      </p>
    </div>
  );
}

function Location({ region, noindex }) {
  const locationContent = {
    USA: {
      h1: 'ServiceNow Consulting in the USA',
      description: 'USA-focused ServiceNow, CMDB, ITAM, and cloud consulting from EastNWest. Delivery support for enterprise ITSM and asset programs nationwide with clear governance, data quality discipline, and operational rigor.',
      links: [
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'ServiceNow CMDB & ITAM Consulting' },
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/contact', text: 'Contact Us' }
      ]
    },
    Canada: {
      h1: 'ServiceNow Consulting in Canada',
      description: 'Canada-focused ServiceNow consulting for CMDB, ITAM, ITSM, and cloud delivery. EastNWest supports enterprise programs with governed implementation, testing discipline, and change control.',
      links: [
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'ServiceNow CMDB & ITAM Consulting' },
        { to: '/services/cloud-consulting', text: 'Cloud Consulting' },
        { to: '/contact', text: 'Contact Us' }
      ]
    },
    Germany: {
      h1: 'ServiceNow Consulting in Germany',
      description: 'Germany-focused ServiceNow consulting for CMDB, ITAM, ITSM, and cloud programs. EastNWest delivers governed implementation and enhancement support with process rigor and quality standards.',
      links: [
        { to: '/services/servicenow-delivery', text: 'ServiceNow Delivery' },
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'CMDB & ITAM Consulting' },
        { to: '/contact', text: 'Contact Us' }
      ]
    },
    KSA: {
      h1: 'Saudi Arabia Location',
      description: 'EastNWest IT Solution presence in Saudi Arabia.',
      links: []
    },
    GCC: {
      h1: 'GCC Region',
      description: 'EastNWest IT Solution presence in the GCC region.',
      links: []
    }
  };

  const content = locationContent[region];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>{content.h1}</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
        {content.description}
      </p>
      {content.links && content.links.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Services</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {content.links.map((link, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                <Link to={link.to} style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
                  {link.text} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CaseStudies() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Case Studies</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>
        Success stories of ServiceNow implementations, cloud migrations, and DevOps transformations.
      </p>
    </div>
  );
}

function Blog() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>ServiceNow, Cloud & DevOps Insights</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
        Read EastNWest guides on ServiceNow CMDB, ITSM, ITAM, cloud, and DevOps. Practical delivery insights for teams in the USA, Canada, and Germany.
      </p>
      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        <BlogPreview 
          title="ServiceNow CMDB Governance That Sticks"
          link="/blog/servicenow-cmdb-governance-that-sticks"
          description="Learn ServiceNow CMDB governance that sticks: clear ownership, data quality rules, and operating rhythm."
        />
        <BlogPreview 
          title="ServiceNow ITSM Implementation Best Practices"
          link="/blog/servicenow-itsm-implementation-best-practices"
          description="ServiceNow ITSM implementation best practices covering process design, CMDB readiness, UAT, and adoption."
        />
      </div>
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Explore More</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link to="/services/servicenow-consulting" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
              ServiceNow Consulting →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function BlogPreview({ title, link, description }) {
  return (
    <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
      <h3 style={{ marginBottom: '0.75rem' }}>
        <Link to={link} style={{ color: '#0066cc', textDecoration: 'none' }}>
          {title}
        </Link>
      </h3>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>{description}</p>
    </div>
  );
}

function BlogPost({ type }) {
  const content = {
    'cmdb-governance': {
      h1: 'ServiceNow CMDB Governance That Sticks',
      intro: 'Learn ServiceNow CMDB governance that sticks: clear ownership, data quality rules, and operating rhythm so CI data stays trusted after go-live.',
      sections: [
        {
          heading: 'Clear Ownership Model',
          text: 'Establish clear data ownership for each configuration item class. Define who creates, updates, and approves CI records. Without ownership, data quality degrades quickly after implementation.'
        },
        {
          heading: 'Data Quality Rules',
          text: 'Implement automated data quality rules that run on schedule. Check for missing mandatory fields, duplicate records, and stale data. Make quality metrics visible to CI owners and leadership.'
        },
        {
          heading: 'Operating Rhythm',
          text: 'Create a regular cadence for CMDB review. Monthly governance meetings keep stakeholders engaged and surface issues before they compound. Include metrics, audit findings, and improvement plans.'
        }
      ],
      links: [
        { to: '/services/servicenow-cmdb-itam-consulting', text: 'ServiceNow CMDB & ITAM Consulting' },
        { to: '/blog/servicenow-itsm-implementation-best-practices', text: 'ITSM Best Practices' },
        { to: '/services/itsm-itam', text: 'ITSM & ITAM Services' }
      ]
    },
    'itsm-best-practices': {
      h1: 'ServiceNow ITSM Implementation Best Practices',
      intro: 'ServiceNow ITSM implementation best practices covering process design, CMDB readiness, UAT, and adoption that survives audits and upgrades.',
      sections: [
        {
          heading: 'Process Design Before Configuration',
          text: 'Map current-state processes before touching ServiceNow. Identify pain points and design future-state workflows with stakeholder input. Configure the platform to match agreed processes, not the other way around.'
        },
        {
          heading: 'CMDB Readiness',
          text: 'Ensure your CMDB is accurate before enabling incident, problem, and change management. ITSM processes depend on trusted configuration data. Build governance and data quality discipline early.'
        },
        {
          heading: 'UAT and Adoption',
          text: 'Run structured user acceptance testing with real scenarios. Train end users and process owners before go-live. Create support documentation and desk aids that help adoption stick after launch.'
        }
      ],
      links: [
        { to: '/services/servicenow-consulting', text: 'ServiceNow Consulting' },
        { to: '/services/itsm-itam', text: 'ITSM & ITAM Consulting' },
        { to: '/blog/servicenow-cmdb-governance-that-sticks', text: 'CMDB Governance Guide' }
      ]
    }
  };

  const post = content[type];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>{post.h1}</h1>
      <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: 1.7, marginBottom: '3rem' }}>
        {post.intro}
      </p>
      {post.sections.map((section, idx) => (
        <div key={idx} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{section.heading}</h2>
          <p style={{ color: '#334155', lineHeight: 1.7 }}>{section.text}</p>
        </div>
      ))}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Related Resources</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {post.links.map((link, idx) => (
            <li key={idx} style={{ marginBottom: '0.75rem' }}>
              <Link to={link.to} style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
                {link.text} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
