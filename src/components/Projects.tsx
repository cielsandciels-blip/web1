import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
          プロジェクトと実績
        </h2>

        <div className="glass-panel fade-in-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 className="text-gradient-alt" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AI Vocal Coach "Aria"</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>
              モバイルネイティブな次世代ボーカルコーチングアプリ
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              単なるピッチ可視化に留まらない、プロ級の実装（スクロール型ピアノロール、リアルタイムピッチトラッキング、AI解析による改善フィードバック等）を備えたモバイルアプリケーションの要件定義〜設計〜開発を主導。
              <br/><br/>
              <strong>【ビジネス価値】</strong> 音楽教育市場における「個別の高品質なフィードバックが受けられない」というペインポイントを、最先端のAI技術と洗練されたUI/UXを掛け合わせることで解決するプロダクトです。ゼロからの事業/プロダクトの立ち上げ、要件定義のプロセスは新規事業コンサルティングにおいても強力なベースとなります。
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(79, 172, 254, 0.1)', border: '1px solid rgba(79, 172, 254, 0.3)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--color-accent-1)' }}>プロダクトマネジメント</span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(79, 172, 254, 0.1)', border: '1px solid rgba(79, 172, 254, 0.3)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--color-accent-1)' }}>UI/UX設計</span>
              <span style={{ padding: '0.4rem 1rem', background: 'rgba(79, 172, 254, 0.1)', border: '1px solid rgba(79, 172, 254, 0.3)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--color-accent-1)' }}>AIインテグレーション</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
