import React from 'react';

const Terroir: React.FC = () => {
  return (
    <section id="terroir" className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0d0e10' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="animate fade-up" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>風土と原料</h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-sub)', letterSpacing: '0.1em' }}>TERROIR</p>
        </div>

        <div className="terroir-grid">
          {/* Water */}
          <div className="terroir-card animate fade-up delay-100">
            <div className="terroir-image water-img" style={{ backgroundImage: 'url(/water_bg.png)' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}></div>
            </div>
            <div className="terroir-content">
              <div style={{ width: '30px', height: '100px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.2em' }} className="text-vertical">
                <span style={{ color: 'var(--color-text-sub)' }}>仕込み水</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(195,161,90,0.3)', paddingBottom: '0.5rem', display: 'inline-block' }}>月山系伏流水</h3>
              <p style={{ lineHeight: 1.8, color: '#aaa', fontSize: '0.95rem' }}>
                雪解け水が数十年という長い年月をかけて地下深くに浸透し、自然のフィルターで濾過された清らかな伏流水。<br/><br/>
                硬度30程度の軟水が、当蔵ならではの「柔らかな口当たり」と「透き通るような余韻」の源となります。
              </p>
            </div>
          </div>

          {/* Rice */}
          <div className="terroir-card animate fade-up delay-300">
            <div className="terroir-image rice-img" style={{ backgroundImage: 'url(/rice_bg.png)' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}></div>
            </div>
            <div className="terroir-content">
              <div style={{ width: '30px', height: '100px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: '0.2em' }} className="text-vertical">
                <span style={{ color: 'var(--color-text-sub)' }}>酒造好適米</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(195,161,90,0.3)', paddingBottom: '0.5rem', display: 'inline-block' }}>契約栽培米「出羽燦々」</h3>
              <p style={{ lineHeight: 1.8, color: '#aaa', fontSize: '0.95rem' }}>
                地元の契約農家と共に、土作りからこだわって育て上げた山形県産酒造好適米「出羽燦々」を中心に使用。<br/><br/>
                昼夜の寒暖差が激しいこの地が、心白が大きく、酒造りに最適な米を育みます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terroir;
