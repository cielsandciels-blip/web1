import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        
        <header className="section-title animate">
          <h2>酒造りの哲学</h2>
          <p>PHILOSOPHY</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          
          <article className="animate delay-100" style={{ padding: '2rem', borderLeft: '1px solid var(--color-accent-gold)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent-gold)' }}>出羽三山と最上川の恩恵</h3>
            <p style={{ color: 'var(--color-text-sub)', fontSize: '0.95rem', lineHeight: 2.2 }}>
              月嶺が拠点を置く山形盆地は、夏は暑く冬は深い雪に閉ざされる厳しい気候です。しかし、その寒暖差こそが酒米に極上の旨味をもたらします。仕込み水には霊峰・出羽三山から湧き出る清冽な伏流水を使用し、米の甘みを最大限に引き出す柔らかな口当たりを実現しています。
            </p>
          </article>

          <article className="animate delay-300" style={{ padding: '2rem', borderLeft: '1px solid var(--color-accent-gold)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent-gold)' }}>伝統技術とDXの融合</h3>
            <p style={{ color: 'var(--color-text-sub)', fontSize: '0.95rem', lineHeight: 2.2 }}>
              「勘と経験」に頼ってきた杜氏の熟練技術を、最新のIoTセンサーでデータ化・解析。発酵タンク内の品温を0.1度単位で24時間クラウド監視する独自の醸造管理システムを開発し、いかなる気候変動下においても揺るがない、「再現性の極致」とも言える品質管理を実現しています。
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
