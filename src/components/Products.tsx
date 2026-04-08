import React from 'react';

const Products: React.FC = () => {
  return (
    <section id="products" className="section" style={{ backgroundColor: '#181A1C' }}>
      <div className="container">
        <div className="animate" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>銘酒</h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-sub)', letterSpacing: '0.1em' }}>PRODUCTS</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {/* Product 1 */}
          <div className="animate delay-100" style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.4s ease', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: '20px', background: '#333', color: '#fff', padding: '0.5rem 1rem', fontSize: '0.8rem', fontFamily: 'var(--font-sans)' }}>残りわずか</div>
            
            <div style={{ marginBottom: '2rem', position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img src="/bottle_kiwami.png" alt="月嶺 煌" style={{ height: '300px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />

              <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', width: '30px', height: '100px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.2em', backdropFilter: 'blur(5px)' }} className="text-vertical">
                <span style={{ color: 'var(--color-text-sub)', fontSize: '0.8rem' }}>純米大吟醸</span>
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>月嶺 煌</h3>
            <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: '2rem', flex: 1 }}>
              県産酒造好適米を35%まで磨き上げた、当蔵の最高峰。華やかな香りと透き通るような余韻。
            </p>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
              <button className="btn-wafu" style={{ fontSize: '0.85rem', padding: '0.8rem 1.2rem', background: 'transparent', color: '#fff' }}>詳細を見る</button>
              <button className="btn-wafu" style={{ fontSize: '0.85rem', padding: '0.8rem 1.2rem', background: 'var(--color-accent-gold)', color: '#000', borderColor: 'var(--color-accent-gold)' }}>カートに追加</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="animate delay-300" style={{ border: '1px solid var(--color-accent-gold)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: '20px', background: 'var(--color-accent-gold)', color: '#000', padding: '0.5rem 1rem', fontSize: '0.8rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>おすすめ</div>
            
            <div style={{ marginBottom: '2rem', position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img src="/bottle_sui.png" alt="月嶺 月光" style={{ height: '300px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
              
              <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)', width: '30px', height: '100px', background: 'rgba(195,161,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.2em', backdropFilter: 'blur(5px)' }} className="text-vertical">
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '0.8rem' }}>純米吟醸</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>月嶺 月光</h3>
            <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: '2rem', flex: 1 }}>
              最上川のせせらぎを思わせる、清涼感のある飲み口。和食の繊細な風味を引き立てる食中酒。
            </p>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
              <button className="btn-wafu" style={{ fontSize: '0.85rem', padding: '0.8rem 1.2rem', background: 'transparent', color: '#fff' }}>詳細を見る</button>
              <button className="btn-wafu" style={{ fontSize: '0.85rem', padding: '0.8rem 1.2rem', background: 'var(--color-accent-gold)', color: '#000', borderColor: 'var(--color-accent-gold)' }}>カートに追加</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
