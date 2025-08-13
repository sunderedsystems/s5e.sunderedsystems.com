import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';

export default function Home() {
  return (
    <Layout>
      <LogoWithBranding />
      <HeroCTA />
    </Layout>
  );
}

function LogoWithBranding() {
  const {colorMode} = useColorMode();
  const logoSrc = colorMode === 'dark' ? '/img/invs5e.png' : '/img/s5e.png';
  const textColor = colorMode === 'dark' ? 'var(--sw-white)' : 'var(--sw-text)';

  return (
    <main
      style={{
        minHeight: '60vh',
        background: 'var(--sw-bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <img
        src={logoSrc}
        alt="Sundered Logo"
        style={{maxWidth: 700, margin: '2rem 0'}}
      />
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
        a new way to play — <span style={{whiteSpace: 'nowrap'}}>one pool.</span>{' '}
        <span style={{whiteSpace: 'nowrap'}}>one system.</span>{' '}
        <span style={{whiteSpace: 'nowrap'}}>complete freedom</span>
      </div>
    </main>
  );
}

function HeroCTA() {
  return (
    <div
      style={{
        background: 'var(--sw-bg)',        // same bone/dark bg as header
        padding: '1.5rem 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2 className="hero__title" style={{marginBottom: '0.25rem'}}>Sundered 5e</h2>
        <p className="hero__subtitle" style={{marginTop: 0}}>Play in minutes.</p>
        <div style={{marginTop: '0.75rem'}}>
       <Link className="sw-button" to="/docs/start-here">
  Play Now
</Link>
<Link className="sw-button" style={{marginLeft: '0.75rem'}} to="/docs/quickstart-interactive">
  Quickstart
</Link>
        </div>
      </div>
    </div>
  );
}

