import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="floating-cta">
      <a href="#products" className="floating-btn buy">
        <span style={{ fontSize: '0.6rem', display: 'block', marginBottom: '2px', letterSpacing: '0.1em' }}>ONLINE SHOP</span>
        オンラインショップ
      </a>
      <a href="#access" className="floating-btn reserve">
        <span style={{ fontSize: '0.6rem', display: 'block', marginBottom: '2px', letterSpacing: '0.1em' }}>TOUR</span>
        蔵見学ご予約
      </a>
    </div>
  );
};

export default FloatingCTA;
