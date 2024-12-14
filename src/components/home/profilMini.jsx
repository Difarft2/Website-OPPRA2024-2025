import '../../css/homeCss/profilmini.css'
import logoOppra from '../../assets/logo/Logo OPPRA.svg'
import profilMin from '../../content/profil';

const Profilmini =()=>{
    return(
        <section className="mp-section" id='profilMini'>
        <div className="mp-container">
          <div className="mp-logo">
            <img
              src={logoOppra} 
              alt="Logo opra"
              className="logo"
            />
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
            <p className="mp-description">{profilMin}</p>
            <a href="/profil">
                <button className="read-more-btn" >READ MORE ➝</button>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Profilmini;