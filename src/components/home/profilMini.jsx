import React, { useState, useEffect, useRef } from 'react';
import '../../css/homeCss/profilmini.css';
import '../../css/devisiCss/subcomponent/anggotadev.css'
import logoOppra from '../../assets/logo/Logo OPPRA.svg';
import { profilMin } from '../../content/profil';
import { Link } from 'react-router-dom';

const Profilmini = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Aktif jika 30% elemen terlihat
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const formatProfil = (profil) => {
    return profil.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mp-description">{paragraph}</p>
    ));
  };

  return (
    <section className="mp-section" id="profilMini">
      <div
        ref={containerRef}
        className={`mp-container ${isVisible ? 'fade-in' : ''}`}
      >
        <div className="mp-logo">
          <img src={logoOppra} alt="Logo opra" className="logo" />
        </div>
        <div className="mp-content">
          <div className="section-title">
            <h2 className="title-text">TENTANG KAMI</h2>
            <div className="line-container">
              <span className="line-circle"></span>
              <span className="line"></span>
              <span className="line-circle"></span>
            </div>
          </div>
          <div>
            {formatProfil(profilMin)}
          </div>
          <Link to="/profil">
            <button className="read-more-btn">PROFIL ➝</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profilmini;
