import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Terroir from './components/Terroir';
import History from './components/History';
import Products from './components/Products';
import News from './components/News';
import Access from './components/Access';
import AgeGate from './components/AgeGate';
import FloatingCTA from './components/FloatingCTA';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    // Nav bar functionality
    const nav = document.querySelector('.navbar-wafu');
    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AgeGate />
      <FloatingCTA />
      <header className="navbar-wafu" aria-label="サイトヘッダー">
        <div className="nav-container">
          <div className="brand-wrapper">
            <div className="brand-stamp" aria-hidden="true">月</div>
            <div style={{ lineHeight: 1.2 }}>
              <strong style={{ fontSize: '1.2rem', letterSpacing: '0.2em' }}>蔵元 月嶺</strong><br/>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--color-accent-gold)' }}>GETSUREI</span>
            </div>
          </div>
          
          <nav aria-label="メインナビゲーション">
            <ul className="nav-menu">
              <li><a href="#philosophy" className="nav-link">酒造りの哲学</a></li>
              <li><a href="#history" className="nav-link">蔵の歩み</a></li>
              <li><a href="#products" className="nav-link">銘酒一覧</a></li>
              <li><a href="#news" className="nav-link">お知らせ</a></li>
              <li><a href="#access" className="nav-link">店舗案内</a></li>
              <li>
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--color-text-sub)' }}>
                  <span style={{ color: 'var(--color-accent-gold)', cursor: 'pointer' }}>JP</span>
                  <span>|</span>
                  <span style={{ cursor: 'pointer', transition: 'color 0.3s' }} onClick={() => alert('English version is under construction.')}>EN</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <article>
          <Hero />
          <Philosophy />
          <Terroir />
          <History />
          <Products />
          <News />
          <Access />
        </article>
      </main>
    </>
  );
};

export default App;
