import '../../css/footer.css';      
import 'bootstrap/dist/css/bootstrap.min.css';

import igIco from '../../assets/logo/instagram-logo.svg';
import ytico from '../../assets/logo/youtube.svg';
import web from '../../assets/logo/globe.svg';
import mapico from '../../assets/logo/map.svg';

import { igarmaso, igartimes, igliga, igoppra, webarahmat, ytarrahmat, lokasi } from '../../content/link';

const Footer = () => {
    return (
        <div id='sosialMedia'>
            <footer>
                {/* Background Wave Animation */}
                <div className="background">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="100%"
                        height="100%"
                        viewBox="0 0 1600 900"
                    >
                        <defs>
                            <path
                                id="wave"
                                fill="rgba(255, 209, 142, 0.6)"
                                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                                s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                            />
                        </defs>
                        <g>
                            <use xlinkHref="#wave" opacity=".4">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="8s"
                                    calcMode="spline"
                                    values="270 230; -334 180; 270 230"
                                    keyTimes="0; .5; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                            <use xlinkHref="#wave" opacity=".6">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="6s"
                                    calcMode="spline"
                                    values="-270 230;243 220;-270 230"
                                    keyTimes="0; .6; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                            <use xlinkHref="#wave" opacity=".9">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="4s"
                                    calcMode="spline"
                                    values="0 230;-140 200;0 230"
                                    keyTimes="0; .4; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                        </g>
                    </svg>
                </div>
                <div className="fo-section-title">
                    <h2 className="fo-title-text">MEDIA SOSIAL</h2>
                    <div className="fo-line-container">
                        <span className="fo-line-circle"></span>
                        <span className="fo-line"></span>
                        <span className="fo-line-circle"></span>
                    </div>
                </div>
                {/* Footer Content */}
                <div className="footer-so">
                    <div className="footer-left">
                        <div className="icon-map">
                            <img src={mapico} alt="Map Logo" />
                            <p>
                                <a href={lokasi} target="_blank" rel="noopener noreferrer">
                                    PPM Ar Rahmat Bojonegoro
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="other">
                        <nav>
                            <ul className="links">
                                <li><a href='/'>BERANDA</a></li>
                                <li><a href='/#event'>EVENT</a></li>
                                <li><a href='/devisi'>DIVISI</a></li>
                                <li><a href='/#sosialMedia'>SOSIAL MEDIA</a></li>
                                <li><a href='/timwebsite'>TIM</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-right">
                        <a href={igoppra} target="_blank" rel="noopener noreferrer">
                            <img src={igIco} alt="Instagram Oppra" className='ico-fo'/> @oppra_arrahmat
                        </a>
                        <a href={igarmaso} target="_blank" rel="noopener noreferrer">
                            <img src={igIco} alt="Instagram Armaso" className='ico-fo'/> @armaso_arrahmat
                        </a>
                        <a href={igartimes} target="_blank" rel="noopener noreferrer">
                            <img src={igIco} alt="Instagram Artimes" className='ico-fo'/> @artimes_arrahmat
                        </a>
                        <a href={igliga} target="_blank" rel="noopener noreferrer">
                            <img src={igIco} alt="Instagram Liga" className='ico-fo'/> @liga_arrahmat
                        </a>
                        <a href={ytarrahmat} target="_blank" rel="noopener noreferrer">
                            <img src={ytico} alt="YouTube" className='ico-fo'/> Ar-Rahmat Official
                        </a>
                        <a href={webarahmat} target="_blank" rel="noopener noreferrer">
                            <img src={web} alt="Website" className='ico-fo'/> arrahmat-bjn.sch.id
                        </a>
                    </div>
                </div>
            </footer>
                <div className="footer-copyright">
                    <p>&copy; OPPRA Ar rahmat. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;
