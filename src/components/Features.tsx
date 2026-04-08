import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Data Infrastructure for the <span className="text-gradient">Future</span></h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to scale your data operations, beautifully engineered and easy to integrate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Card 1 */}
          <div className="glass-panel fade-in-up delay-100">
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-accent-blue)' }}>⚡️</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Real-time Processing</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Process millions of events per second with sub-millisecond latency. Our distributed streaming engine ensures your dashboard is always live.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel fade-in-up delay-200">
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(58, 123, 213, 0.1)', border: '1px solid rgba(58, 123, 213, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-accent-purple)' }}>🧠</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Adaptive ML Models</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Built-in machine learning automatically detects anomalies and forecasts trends without requiring a data science team.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel fade-in-up delay-300">
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem', color: '#fff' }}>🔒</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>Bank-grade Security</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              End-to-end encryption, SOC2 compliance, and granular role-based access control to keep your business data strictly confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
