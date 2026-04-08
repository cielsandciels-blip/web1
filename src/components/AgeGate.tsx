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
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={handleDecline} className="btn-wafu" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            いいえ
          </button>
          <button onClick={handleConfirm} className="btn-wafu">
            はい（20歳以上）
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
