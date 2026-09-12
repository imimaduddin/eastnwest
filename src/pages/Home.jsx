import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section style={{ 
        background: '#f4f6fb', 
        padding: '4rem 2rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ 
          fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', 
          fontWeight: 300,
          marginBottom: '1rem' 
        }}>
          ServiceNow CMDB, ITAM & Cloud Consulting
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Expert IT solutions for enterprises in the USA, Canada, and Germany
        </p>
        <Link 
          to="/contact" 
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '999px',
            fontWeight: 600
          }}
        >
          Get Started
        </Link>
      </section>
      
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Services</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <ServiceCard 
              title="ServiceNow CMDB & ITAM"
              description="CMDB, ITAM, and SAM consulting with data quality and asset lifecycle control"
              link="/services/servicenow-cmdb-itam-consulting"
            />
            <ServiceCard 
              title="ServiceNow Consulting"
              description="Platform consulting for ITSM, workflows, and governed delivery"
              link="/services/servicenow-consulting"
            />
            <ServiceCard 
              title="Cloud Services"
              description="Cloud migration and modernization for AWS, Azure, GCP"
              link="/services/cloud"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link 
              to="/contact" 
              style={{
                color: '#0066cc',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem'
              }}
            >
              Contact us to discuss your needs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, link }) {
  return (
    <div style={{ 
      padding: '2rem', 
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '0.5rem'
    }}>
      <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{description}</p>
      <Link 
        to={link}
        style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600 }}
      >
        Learn More →
      </Link>
    </div>
  );
}
