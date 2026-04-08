import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', flexWrap: 'wrap-reverse' }}>
        
        {/* Decorative graphic */}
        <div className="animate delay-300" style={{ position: 'relative', width: '300px', height: '400px' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '1px solid var(--color-accent-gold)', transform: 'translate(-20px, 20px)' }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10rem', color: 'rgba(195, 161, 90, 0.1)', fontFamily: 'var(--font-serif)' }}>月</span>
          </div>
        </div>

        {/* Text content */}
        <div className="text-vertical animate" style={{ height: '500px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-accent-gold)' }}>蔵の想い</h2>
          <p style={{ letterSpacing: '0.15em', lineHeight: 2.2, fontSize: '1.05rem' }}>
            創業百八十年。<br/>
            山形の厳しい冬と、豊かな自然がもたらす恵み。<br/>
            私たちは、その自然の声に耳を澄ませ、<br/>
            ただ実直に酒を醸し続けてきました。<br/>
            <br/>
            手造りの温もりと、最先端の醸造技術の融合。<br/>
            伝統を守りながらも進化を続ける<br/>
            「月嶺（げつれい）」の味わいを、<br/>
            どうぞ五感でご堪能ください。
          </p>
        </div>

      </div>
    </section>
  );
};

export default Concept;
