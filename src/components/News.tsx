import React from 'react';

const News: React.FC = () => {
  return (
    <section id="news" className="section">
      <div className="container">
        
        <header className="section-title animate">
          <h2>お知らせ</h2>
          <p>NEWS & UPDATES</p>
        </header>

        <div className="news-grid">
          
          <article className="news-item animate delay-100">
            <span className="news-date">2026.04.01</span>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.4 }}>
              世界最大級の酒類コンペティション「IWC 2026」にて、月嶺 極が金賞を受賞しました。
            </h3>
            <a href="#" style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', marginTop: 'auto', display: 'inline-block' }}>詳細を読む →</a>
          </article>

          <article className="news-item animate delay-200">
            <span className="news-date">2026.03.15</span>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.4 }}>
              【サステナビリティ】酒粕を活用したバイオマスマテリアルの共同研究について
            </h3>
            <a href="#" style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', marginTop: 'auto', display: 'inline-block' }}>詳細を読む →</a>
          </article>

          <article className="news-item animate delay-300">
            <span className="news-date">2026.02.28</span>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: 1.4 }}>
              令和7酒造年度 新酒鑑評会への出品酒について。DX温度管理による最高品質。
            </h3>
            <a href="#" style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', marginTop: 'auto', display: 'inline-block' }}>詳細を読む →</a>
          </article>

        </div>
        
        <div className="animate delay-400" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn-wafu">ニュース一覧へ</button>
        </div>

      </div>
    </section>
  );
};

export default News;
