import React from 'react';

const History: React.FC = () => {
  return (
    <section id="history" className="section" style={{ 
      position: 'relative',
      backgroundImage: 'url(/historical_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(18, 20, 21, 0.85)', zIndex: 0 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <header className="section-title animate">
          <h2>蔵の歩み</h2>
          <p>HISTORY & EVOLUTION</p>
        </header>

        <div className="timeline">
          
          <div className="timeline-item animate delay-100">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem', fontWeight: 'bold' }}>1845</span>
              <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>初代 月嶺十郎が創業</h4>
              <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem' }}>
                山形県天童市にて酒造りを開始。当時は地元向けのみの小規模な仕込みを行っていた。
              </p>
            </div>
          </div>

          <div className="timeline-item animate delay-200">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem', fontWeight: 'bold' }}>1978</span>
              <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>吟醸造りの先駆け</h4>
              <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem' }}>
                全国に先駆けて精米歩合50%以下の吟醸酒造りに着手。鑑評会で初の金賞を受賞する。
              </p>
            </div>
          </div>

          <div className="timeline-item animate delay-300">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem', fontWeight: 'bold' }}>2020</span>
              <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>醸造プロセスのDX化</h4>
              <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem' }}>
                独自の「Gesturei-IoT」システムを本格導入。蔵人の暗黙知をデータ化し、気候変動に左右されない品質管理の体制を築く。
              </p>
            </div>
          </div>

          <div className="timeline-item animate delay-400">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.2rem', fontWeight: 'bold' }}>2025</span>
              <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>グローバル展開と次世代へ</h4>
              <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem' }}>
                欧州および北米へ「DX Sake」としてのリブランディングを実施。世界15カ国のトップレストランで採用される。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default History;
