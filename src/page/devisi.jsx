import { Helmet } from "react-helmet";
import '../css/devisi.css';
import Navbarr from '../components/globalComponents/navbar';
import Footer from '../components/globalComponents/footer';
import Ketuawakil from "../components/devisi/ketuawakil";
import PH from "../components/devisi/ph";
import Subdevisi from "../components/devisi/subdevisi";

function Devisi() {
    return (
        <div className="bg-de">
            <Helmet>
                <title>Divisi | OPPRA 2024-2025</title>
            </Helmet>
            <Navbarr />
            <div className="de-section-title">
                <h2 className="de-title-text">DIVISI</h2>
                <div className="de-line-container">
                    <span className="de-line-circle"></span>
                    <span className="de-line"></span>
                    <span className="de-line-circle"></span>
                </div>
            </div>
            <div className="content-de">
                <Ketuawakil/>
                <PH/>
                <Subdevisi/>
            </div>
            <Footer />
        </div>
    );
}

export default Devisi;
