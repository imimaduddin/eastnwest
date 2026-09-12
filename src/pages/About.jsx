import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>About EastNWest IT Solution</h1>
      <div style={{ lineHeight: 1.7, color: '#334155' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          EastNWest IT Solution delivers ServiceNow CMDB, ITAM, SAM, cloud, and DevOps consulting 
          for enterprises in the USA, Canada, and Germany. We help organizations establish governed 
          IT operations through data quality discipline, process rigor, and delivery excellence.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Our team brings deep expertise in ServiceNow platform delivery, cloud infrastructure 
          modernization, and DevOps automation. We partner with clients to build sustainable 
          ITSM and asset management programs that survive audits, upgrades, and organizational change.
        </p>
        <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Our Expertise</h2>
        <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>ServiceNow CMDB, ITAM, and SAM consulting</li>
          <li style={{ marginBottom: '0.75rem' }}>ITSM process design and implementation</li>
          <li style={{ marginBottom: '0.75rem' }}>Cloud migration and governance</li>
          <li style={{ marginBottom: '0.75rem' }}>DevOps and CI/CD engineering</li>
        </ul>
        <div style={{ marginTop: '3rem' }}>
          <Link to="/services/servicenow-consulting" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600, marginRight: '2rem' }}>
            ServiceNow Consulting →
          </Link>
          <Link to="/locations/usa" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600, marginRight: '2rem' }}>
            USA Services →
          </Link>
          <Link to="/contact" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}>
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
