import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ 
      background: 'white', 
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 2rem'
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link 
          to="/" 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700,
            color: '#0f172a',
            textDecoration: 'none'
          }}
        >
          EastNWest IT Solution
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/services" style={navLinkStyle}>Services</Link>
          <Link to="/industries" style={navLinkStyle}>Industries</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

const navLinkStyle = {
  color: '#64748b',
  textDecoration: 'none',
  fontWeight: 500
};
