import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout>
      <LogoWithBranding />
    </Layout>
  );
}

function LogoWithBranding() {
  const { colorMode } = require('@docusaurus/theme-common').useColorMode();
  const logoSrc = colorMode === 'dark'
    ? '/img/invs5e.png'
    : '/img/s5e.png';

  // Set color based on theme
  const textColor = colorMode === 'dark'
    ? 'var(--sw-white)'
    : 'var(--sw-text)';

  return (
    <main
      style={{
        minHeight: '85vh',
        background: 'var(--sw-bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3rem',
      }}
    >
      {/* Logo */}
      <img
        src={logoSrc}
        alt="Sundered Logo"
        style={{
          maxWidth: 700,
          marginBottom: '2rem',
          marginTop: '2rem'
        }}
      />
      {/* Main Tagline */}
      <h1
        style={{
          color: textColor,
          fontWeight: 800,
          fontSize: '2.1rem',
          textAlign: 'center',
          marginBottom: '0.5em',
          fontFamily: "'MedievalSharp', serif",
        }}
      >
        Reality frays. Power is unbound.
      </h1>
      {/* Sub Tagline */}
      <div
        style={{
          color: textColor,
          fontSize: '1.08rem',
          fontWeight: 400,
          textAlign: 'center',
          letterSpacing: '0.01em',
          opacity: 0.92,
          marginTop: 0,
        }}
      >
        a new way to play &mdash; <span style={{whiteSpace: 'nowrap'}}>one pool.</span> <span style={{whiteSpace: 'nowrap'}}>one system.</span> <span style={{whiteSpace: 'nowrap'}}>complete freedom</span>
      </div>
    </main>
  );
}
