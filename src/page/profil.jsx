import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "../components/globalComponents/navbar";
import "../css/profil.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import logooppra from "../assets/logo/Logo OPPRA.svg";
import logopondok from "../assets/logo/logopondok.png";
import Footer from "../components/globalComponents/footer";


function Profil(){
    useEffect(() => {
        const oppra = document.querySelector('.oppra');
        const pondok = document.querySelector('.pondok');
        
        oppra.classList.add('animated-left');
        pondok.classList.add('animated-right');
    }, []);
    return(
        <div>
                <div className="bg-pr">
        <Helmet>
            <title>Profil | OPPRA 2024-2025</title>
        </Helmet>
        <div>
            <Navbar />

            <div className="vm-section-title">
                <h2 className="vm-title-text">PROFIL</h2>
                <div className="vm-line-container">
                    <span className="vm-line-circle"></span>
                    <span className="vm-line"></span>
                    <span className="vm-line-circle"></span>
                </div>
            </div>

            <div className="container-fluid">
                <div className="oppra animated-left">
                    <img className="logo-oppra" src={logooppra} alt="Logo Oppra" />
                    <div className="tulisan-oppra">
                        <h2>OPPRA</h2>
                        <p>
                            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="pondok animated-right">
                    <img className="logo-pondok" src={logopondok} alt="Logo Pondok" />
                    <div className="tulisan-pondok">
                        <h2>YAYASAN PPM AR RAHMAT</h2>
                        <p>
                            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet.
                        </p>
                    <Button className="button-webpondok" variant="warning">Website PPM Ar Rahmat</Button>
            </div>
    </div>
</div>

        </div>
    </div>
        <Footer/>
    </div>
    );
}

export default Profil;