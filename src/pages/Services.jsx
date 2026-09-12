import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Our Services</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>
          <Link to="/services/servicenow" style={{ color: '#0066cc', textDecoration: 'none' }}>
            ServiceNow Consulting
          </Link>
        </h2>
        <p style={{ color: '#64748b', lineHeight: 1.7 }}>
          Expert implementation and optimization of ServiceNow CMDB, IT Asset Management (ITAM), 
          and Software Asset Management (SAM). We help enterprises streamline IT service management 
          and gain visibility into their IT assets.
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>
          <Link to="/services/cloud" style={{ color: '#0066cc', textDecoration: 'none' }}>
            Cloud Services
          </Link>
        </h2>
        <p style={{ color: '#64748b', lineHeight: 1.7 }}>
          Cloud migration, modernization, and infrastructure management for AWS, Azure, and 
          Google Cloud Platform. We design scalable, secure cloud architectures that reduce 
          costs and improve performance.
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>
          <Link to="/services/devops" style={{ color: '#0066cc', textDecoration: 'none' }}>
            DevOps Automation
          </Link>
        </h2>
        <p style={{ color: '#64748b', lineHeight: 1.7 }}>
          CI/CD pipeline implementation, infrastructure as code, and automation services. 
          We accelerate software delivery while maintaining reliability and security.
        </p>
      </div>
    </div>
  );
}
