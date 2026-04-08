import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <img 
          src="/sake_bg.png" 
          alt="Japanese Sake Bottle" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
        />
        {/* Shadow Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(18,20,21,0.9) 0%, rgba(18,20,21,0.3) 50%, rgba(18,20,21,0.9) 100%)' }}></div>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center' }}>
        
        {/* Left side abstract graphics */}
        <div className="animate delay-300" style={{ width: '1px', height: '300px', background: 'rgba(255,255,255,0.2)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '0', left: '-2px', width: '5px', height: '5px', background: 'var(--color-accent-gold)', borderRadius: '50%' }}></div>
        </div>

        {/* Vertical Text Area */}
        <div className="text-vertical animate" style={{ height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.5, letterSpacing: '0.3em' }}>
            時を醸し、<br/>
            <span className="text-gold">心を潤す。</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-sub)', letterSpacing: '0.2em' }}>
            山形・最上川の伏流水が育む<br/>至高のひとしずく。
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="animate delay-500" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--color-text-sub)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--color-accent-gold)' }}></div>
      </div>

      {/* Seasonal Banner */}
      <div className="animate delay-500 seasonal-banner" style={{ position: 'absolute', bottom: '2rem', left: '2rem', padding: '1.5rem', background: 'rgba(18,20,21,0.85)', border: '1px solid rgba(195,161,90,0.5)', borderLeft: '3px solid var(--color-accent-gold)', maxWidth: '280px', cursor: 'pointer', transition: 'all 0.3s ease', backdropFilter: 'blur(5px)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.8rem' }}>
          <span style={{ background: 'var(--color-accent-gold)', color: '#000', fontSize: '0.7rem', padding: '0.2rem 0.5rem', fontWeight: 'bold' }}>予約受付中</span>
          <span style={{ color: 'var(--color-accent-gold)', fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-sans)' }}>SEASONAL</span>
        </div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>秋季限定「ひやおろし」</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-sub)', lineHeight: 1.5 }}>
          ひと夏越して熟成した、角の取れたまろやかな味わい。数量限定でのご用意です。
        </p>
      </div>
    </section>
  );
};

export default Hero;
