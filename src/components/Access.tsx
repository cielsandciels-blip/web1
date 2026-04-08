import React from 'react';

const Access: React.FC = () => {
  return (
    <section id="access" className="section" style={{ position: 'relative' }}>
      {/* Subtle background decoration */}
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(195, 161, 90, 0.05) 0%, rgba(0,0,0,0) 70%)', zIndex: -1 }}></div>

      <div className="container">
        <div className="animate" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '5rem 3rem', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>
          
          <div style={{ textAlign: 'center', flex: 1, minWidth: '300px' }}>
            <div className="brand-stamp" style={{ margin: '0 auto 2rem' }}>月</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>蔵元 月嶺</h2>
            <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-sub)', lineHeight: 2, fontSize: '0.9rem' }}>
              〒990-0000<br/>
              山形県山形市〇〇町<br/>
              TEL: 023-XXX-XXXX<br/>
              営業時間: 10:00 - 17:00 (土日祝 定休)
            </div>
            <button className="btn-wafu" style={{ marginTop: '3rem', padding: '0.8rem 3rem' }}>お問い合わせ</button>
          </div>

        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '8rem', color: 'var(--color-text-sub)', fontSize: '0.8rem', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '30px', height: '1px', background: 'var(--color-accent-gold)' }}></div>
        <p>&copy; {new Date().getFullYear()} GETSUREI BREWERY. All rights reserved.</p>
        <p style={{ opacity: 0.5 }}>※This is a fictional website created for a portfolio.</p>
      </footer>
    </section>
  );
};

export default Access;
