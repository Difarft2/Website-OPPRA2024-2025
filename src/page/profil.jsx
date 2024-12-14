import { Helmet } from "react-helmet";
import Navbar from "../components/globalComponents/navbar";
import "../css/home2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import logooppra from "../img/logooppra.png";
import logopondok from "../img/logopondok.png";


function Profil(){
    return(
    <div>
        <Helmet>
            <title>Profil | OPPRA 2024-2025</title>
        </Helmet>
        <div>
            <Navbar />

            <div className="judulgede">
                <h1 className="judul-judulgede">Profil</h1>
            </div>

            <div className="container-fluid">
                <div className="oppra">
                    <img className="logo-oppra" src={logooppra} alt="Logo Oppra" />
                    <div className="tulisan-oppra">
                        <h2>Judul 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet. 
                        </p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum
                            dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit
                            amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem
                            ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="pondok">
                    <img className="logo-pondok" src={logopondok} alt="Logo Pondok" />
                    <div className="tulisan-pondok">
                        <h2>Judul 2</h2>
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
    );
}

export default Profil;