import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="section" style={{ paddingBottom: '4rem' }}>
      <div className="container">
        <div className="glass-panel fade-in-up delay-200" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(25, 25, 35, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to illuminate your data?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join hundreds of forward-thinking enterprises that are already leveraging Lumina Data to drive their strategic decisions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Start Free Trial</button>
            <button className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Talk to Sales</button>
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '6rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Lumina Data Inc. Portfolio showcase project.
      </footer>
      <div className="bg-glow-bottom"></div>
    </section>
  );
};

export default CTA;
