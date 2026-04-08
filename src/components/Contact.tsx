import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="glass-panel fade-in-up delay-200" style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(30, 33, 40, 0.8) 0%, rgba(15, 17, 21, 0.9) 100%)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Next Steps</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
            株式会社アサヒブレインズにおける、イノベーション推進と事業コンサルティングに深く貢献できると確信しております。<br/>
            より詳細なビジョンや過去の実績についてお話しできる機会をいただけますと幸いです。
          </p>
          
          <button className="btn btn-primary" onClick={() => window.location.href='mailto:example@example.com'} style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
            コンタクトを取る
          </button>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '4rem 0 2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Future Consultant Portfolio. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
