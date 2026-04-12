import React, { useState, useEffect } from 'react';

const AgeGate: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage
    const hasConfirmed = localStorage.getItem('ageConfirmed');
    if (!hasConfirmed) {
      // Disable scrolling when modal is open
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('ageConfirmed', 'true');
    document.body.style.overflow = 'auto'; // allow scroll
    setIsVisible(false);
  };

  const handleDecline = () => {
    alert('申し訳ございません。当サイトは20歳未満の方はご利用いただけません。');
    // In a real application, we might redirect to a non-alcohol site.
  };

  if (!isVisible) return null;

  return (
    <div className="age-gate-overlay">
      <div className="age-gate-modal">
        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>年齢確認</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.6, color: '#ccc' }}>
          当サイトはお酒に関する情報を含んでおります。<br />
          あなたは20歳以上ですか？
        </p>
        <div className="age-gate-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={handleDecline} className="btn-wafu" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', width: '100%', maxWidth: '200px', padding: '1rem' }}>
            いいえ
          </button>
          <button onClick={handleConfirm} className="btn-wafu" style={{ width: '100%', maxWidth: '200px', padding: '0.8rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1.2 }}>
            <span style={{ fontSize: '1.1rem' }}>はい</span>
            <span style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>（20歳以上）</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
