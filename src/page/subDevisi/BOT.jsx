import { Helmet } from "react-helmet";
import Navbarr from "../../components/globalComponents/navbar";
import Footer from '../../components/globalComponents/footer'
import Herodev from "../../components/devisi/subcomponent/herodev";
import gambar from '../.././assets/img/MainPhoto.svg'
import Profidev from "../../components/devisi/subcomponent/profildev";
import Anggota from "../../components/devisi/subcomponent/anggotadev";

const title ="DIVISI BOT"
const desjudul ="BELA NEGARA OLAHRAGA DAN TEKNOLOGI"
import logobot from"../../assets/logo/divisi/bot.svg"
import { profilDevisiBOT } from "../../content/profil";
import { dataBotKelas11, dataBotKelas9 } from "../../content/anggota";


function Bot(){
    return(
    <div>
        <Helmet>
            <title>Devisi-BOT</title>
        </Helmet>
        <div>
            <Navbarr/>
            <Herodev judulherodev={title} desjudulherodev={desjudul} mainPhoto={gambar}/>
            <Profidev profildev={profilDevisiBOT} logoDevisi={logobot} judul={title}/>
            <Anggota kelas11={dataBotKelas11} kelas9={dataBotKelas9} />
            <Footer/>
        </div>
    </div>
    );
}

export default Bot;