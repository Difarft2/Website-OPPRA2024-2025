import '../../css/devisiCss/ketuawakil.css'

import ketua from '../../assets/foto/ketua.svg'
import wakil from '../../assets/foto/wakil.svg'
import ukiran1 from '../../assets/img/ukiran1.svg'
import ukiran2 from '../../assets/img/ukiran2.svg'

const Ketuawakil =()=>{
    return(
        <div className='ketua-wakil'>
            <img src={ukiran2} alt="ukiran" className='ukiran-atas'/>
            <div className='ketuawakil-container'>
                <div className="ketua">
                    <img src={ketua} alt="ketua" className='ketua-img' />
                </div>
                <div className="ukiran">
                    <img src={ukiran1} alt="ukiran" className='ukiran-img' />
                </div>
                <div className="wakil">
                    <img src={wakil} alt="wakil" className='wakil-img' />
                </div>
            </div>
        </div>
    );
}

export default Ketuawakil;