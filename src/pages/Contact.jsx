import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Contact EastNWest IT Solution</h1>
      <p style={{ marginBottom: '2rem', color: '#64748b', lineHeight: 1.7 }}>
        Contact EastNWest for ServiceNow CMDB, ITAM, SAM, cloud, or DevOps consulting. 
        Discuss USA, Canada, or Germany delivery with our team today.
      </p>
      
      <div style={{ 
        background: '#f8fafc', 
        padding: '2rem', 
        borderRadius: '0.5rem',
        marginBottom: '2rem' 
      }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Locations</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>United States</h3>
            <p style={{ color: '#64748b' }}>Serving enterprises across North America</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Canada</h3>
            <p style={{ color: '#64748b' }}>Expert IT consulting for Canadian businesses</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Germany</h3>
            <p style={{ color: '#64748b' }}>Enterprise solutions for European markets</p>
          </div>
        </div>
      </div>
      
      <div style={{ 
        padding: '2rem', 
        background: '#0066cc', 
        color: 'white', 
        borderRadius: '0.5rem' 
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Contact us to learn how EastNWest IT Solution can help your organization.
        </p>
        <a 
          href="mailto:info@eastnwestitsolution.com"
          style={{ 
            color: 'white', 
            fontWeight: 600,
            textDecoration: 'underline' 
          }}
        >
          info@eastnwestitsolution.com
        </a>
      </div>
      
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link to="/services/servicenow-cmdb-itam-consulting" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
              ServiceNow CMDB & ITAM Consulting →
            </Link>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link to="/services/cloud-consulting" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
              Cloud Consulting →
            </Link>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <Link to="/about" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
              About Us →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
