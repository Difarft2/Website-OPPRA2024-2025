import "../../css/navbar.css";

import Headroom from "react-headroom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import logo from "../../assets/logo/Logo OPPRA.svg"



const Navbarr = () => {
    return (
        <Headroom>
        <div className="nav-container">

            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                        src={logo}
                        alt="OPPRA"
                        className="logo-navbar"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <ul className="links-nav">
                                <li className="navlink"><Link to="/">BERANDA</Link></li>
                                <li className="navlink"><Link to="/devisi">DIVISI</Link></li>
                                <li className="navlink"><Link to="/#soialMedia">SOSIAL MEDIA</Link></li>
                                <li className="navlink"><Link to="/timwebsite">TIM</Link></li>   
                                </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </Headroom>
    );
}

export default Navbarr;
