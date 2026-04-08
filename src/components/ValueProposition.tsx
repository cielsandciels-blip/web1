import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section id="value" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
          エンジニアリングから導く<br/>
          <span className="text-gradient">コンサルティングの真価</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Card 1 */}
          <div className="glass-panel fade-in-up delay-100">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>テクノロジーへの深い理解</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              単なる概念的なDX提案ではなく、実際の開発経験に裏打ちされた「実現可能かつスケーラブルな」システム戦略を立案します。
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel fade-in-up delay-200">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>システム的思考による課題解決</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              複雑に絡み合うビジネスの課題を構造化し、根本的な原因を特定。局所的ではない、全体最適化に向けたソリューションを提供します。
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel fade-in-up delay-300">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>圧倒的な実行力・スピード</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              アジャイル開発で培った迅速な仮説検証サイクル（PDCA）を経営課題にも適用。スピーディーな改善と価値創出を実現します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
