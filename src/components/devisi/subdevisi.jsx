import '../../css/devisiCss/sundevisi.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import bot from '../../assets/foto/BOT.svg';
import keamanan from '../../assets/foto/keamanan.svg';
import kesehatan from '../../assets/foto/kesehatan.svg';
import takmir from '../../assets/foto/takmir.svg';
import bahasa from '../../assets/foto/bahasa.svg';
import penerangan from '../../assets/foto/penerangan.svg';
import kanan from '../../assets/img/title1.svg';
import kiri from '../../assets/img/title2.svg';

const Subdevisi = () => {
  useEffect(() => {
    // Observer untuk animasi saat scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Tambahkan class 'active'
        }
      });
    });

    const subElements = document.querySelectorAll('.sub');
    subElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='subdevisi'>
      <div className="title-ph-container">
        <img src={kiri} alt="kiri" className="kiri" />
        <h2 className="title-ph">KETUA DIVISI</h2>
        <img src={kanan} alt="kanan" className="kanan" />
      </div>

      <div className="sub-container">
        <div className="sub">
          <img src={bot} alt="BOT" />
          <Link to="/devisi/bot">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <img src={keamanan} alt="Keamanan" />
          <Link to="/devisi/keamanan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className='sub'>
          <img src={kesehatan} alt="Kesehatan" />
          <Link to="/devisi/kesehatan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <img src={takmir} alt="Takmir" />
          <Link to="/devisi/takmir">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <img src={bahasa} alt="Bahasa" />
          <Link to="/devisi/bahasa">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
        <div className="sub">
          <img src={penerangan} alt="Penerangan" />
          <Link to="/devisi/ilan">
            <button className="sub-more-btn">PROFIL ➝</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subdevisi;
