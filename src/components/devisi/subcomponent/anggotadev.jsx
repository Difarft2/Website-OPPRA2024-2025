import { useEffect, useRef } from 'react';
import ukir from '../../../assets/img/ukir.svg';

const Anggota = ({ kelas11, kelas9 }) => {
  const decorRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 } // Elemen terlihat 30% untuk memicu animasi
    );

    // Observasi elemen decor
    decorRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observasi elemen card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      decorRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="vm-container-dev">
      <div className="vm-section-title">
        <h2 className="vm-title-text">ANGGOTA</h2>
        <div className="vm-line-container">
          <span className="vm-line-circle"></span>
          <span className="vm-line"></span>
          <span className="vm-line-circle"></span>
        </div>
      </div>
      <div className="vm-content">
        <div
          className="vm-decor-left-dev"
          ref={(el) => (decorRefs.current[0] = el)}
        >
          <img src={ukir} alt="Decor Left" />
        </div>
        <div className="vm-card-container">
          <div className="vm-card" ref={(el) => (cardRefs.current[0] = el)}>
            <h3 className="vm-card-title">Kelas 11</h3>
            <ol className="vm-title-text">
              {kelas11.map((nama, index) => (
                <li key={index}>{nama}</li>
              ))}
            </ol>
          </div>

          <div className="vm-card" ref={(el) => (cardRefs.current[1] = el)}>
            <h3 className="vm-card-title">Kelas 9</h3>
            <ol className="vm-title-text">
              {kelas9.map((nama, index) => (
                <li key={index}>{nama}</li>
              ))}
            </ol>
          </div>
        </div>
        <div
          className="vm-decor-right-dev"
          ref={(el) => (decorRefs.current[1] = el)}
        >
          <img src={ukir} alt="Decor Right" />
        </div>
      </div>
    </div>
  );
};

export default Anggota;