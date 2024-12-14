import "../../css/navbar.css";

import Headroom from "react-headroom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../img/logoemyu.png"



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
                            <p><Nav.Link href="#">Beranda</Nav.Link></p>
                            <p><Nav.Link href="#">Profil</Nav.Link></p>
                            <p><Nav.Link href="#">Event</Nav.Link></p>
                            <p><Nav.Link href="#">Divisi</Nav.Link></p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </Headroom>
    );
}

export default Navbarr;
