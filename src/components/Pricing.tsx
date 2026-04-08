import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up delay-100">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transparent Pricing</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>No hidden fees. Scale your data as you grow.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Starter Plan */}
          <div className="glass-panel fade-in-up delay-200" style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Starter</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>For growing teams</p>
            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>$49<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/mo</span></div>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', color: 'var(--color-text-secondary)' }}>
              <li style={{ marginBottom: '0.8rem' }}>✓ up to 1M events/month</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ 3 Team members</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ Standard support</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Start Free Trial</button>
          </div>

          {/* Pro Plan */}
          <div className="glass-panel fade-in-up delay-300" style={{ flex: '1 1 300px', maxWidth: '350px', border: '1px solid var(--color-accent-blue)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--gradient-primary)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-accent-blue)' }}>Pro</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>For data-driven enterprises</p>
            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>$199<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/mo</span></div>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', color: 'var(--color-text-secondary)' }}>
              <li style={{ marginBottom: '0.8rem', color: '#fff' }}>✓ Unlimited events</li>
              <li style={{ marginBottom: '0.8rem', color: '#fff' }}>✓ Unlimited team members</li>
              <li style={{ marginBottom: '0.8rem', color: '#fff' }}>✓ 24/7 Priority support</li>
              <li style={{ marginBottom: '0.8rem', color: '#fff' }}>✓ Custom ML Models</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
