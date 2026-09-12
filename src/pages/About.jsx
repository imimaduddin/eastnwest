import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>About EastNWest IT Solution</h1>
      <div style={{ lineHeight: 1.7, color: '#334155' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          EastNWest IT Solution is a leading provider of enterprise IT consulting services, 
          specializing in ServiceNow implementation, cloud infrastructure, and DevOps automation.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          We help organizations transform their IT operations through modern service management 
          platforms, cloud-native architectures, and automated software delivery pipelines.
        </p>
        <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Our Expertise</h2>
        <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>ServiceNow CMDB, ITAM, and SAM</li>
          <li style={{ marginBottom: '0.75rem' }}>Cloud migration and modernization</li>
          <li style={{ marginBottom: '0.75rem' }}>DevOps and CI/CD implementation</li>
          <li style={{ marginBottom: '0.75rem' }}>Enterprise software development</li>
        </ul>
      </div>
    </div>
  );
}
