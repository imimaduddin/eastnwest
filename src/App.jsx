import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <Route path="/services/cloud" element={<ServiceDetail type="cloud" />} />
            <Route path="/services/devops" element={<ServiceDetail type="devops" />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations/usa" element={<Location region="USA" />} />
            <Route path="/locations/canada" element={<Location region="Canada" />} />
            <Route path="/locations/germany" element={<Location region="Germany" />} />
            <Route path="/locations/ksa" element={<Location region="KSA" noindex />} />
            <Route path="/locations/gcc" element={<Location region="GCC" noindex />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
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
      description: 'Expert ServiceNow implementation and optimization services.'
    },
    cloud: {
      title: 'Cloud Services',
      description: 'Cloud migration and modernization for AWS, Azure, and GCP.'
    },
    devops: {
      title: 'DevOps Automation',
      description: 'CI/CD, infrastructure as code, and automation services.'
    }
  };

  const service = content[type];

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>{service.title}</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>{service.description}</p>
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
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>{region} Office</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>
        EastNWest IT Solution serves enterprises in {region}.
      </p>
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
      <h1 style={{ marginBottom: '2rem' }}>Blog</h1>
      <p style={{ color: '#64748b', lineHeight: 1.7 }}>
        Expert insights on ServiceNow, cloud computing, DevOps, and enterprise IT best practices.
      </p>
    </div>
  );
}

export default App;
