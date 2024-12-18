
import "../../css/homeCss/hero.css"

const Hero=()=>{
    //fungsi untuk scrol ke profilMini
    const scrollToSection = ()=>{
        const section = document.getElementById('profilMini');

        if(section) {
            section.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return(
        <div>
        {/* Header Section */}
        <div className="header-section">
            <div className="header-container">
                <h1 className="header-title">OPPRA AR - RAHMAT</h1>
                <h3 className="header-subtitle">
                    ORGANISASI PELAJAR PONDOK PESANTREN MODERN AR RAHMAT
                </h3>
                <p className="header-description">
                    SELAMAT DATANG DI WEBSITE OPPRA AR RAHMAT MASA BAKTI 2024-2025
                </p>
                
            </div>
                <button className="masa-bakti-btn" onClick={scrollToSection}>MASA BAKTI 2024/2025</button>
        </div>
      </div>
    );
}

export default Hero;