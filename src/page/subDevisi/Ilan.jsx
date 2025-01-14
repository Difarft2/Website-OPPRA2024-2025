import { Helmet } from "react-helmet";
import Navbarr from "../../components/globalComponents/navbar";
import Footer from '../../components/globalComponents/footer'
import Herodev from "../../components/devisi/subcomponent/herodev";
import gambar from '../.././assets/img/MainPhoto.svg'
import Profidev from "../../components/devisi/subcomponent/profildev";
import Anggota from "../../components/devisi/subcomponent/anggotadev";

const title ="DIVISI I'LAM"
const desjudul ="PENERANGAN DAN INFORMASI"
import logoilan from"../../assets/logo/divisi/ilan.svg"
import { profilDevisiIlanPenerangan } from "../../content/profil";
import { dataIlamKelas11, dataIlamKelas9 } from "../../content/anggota";


function Ilan(){
    return(
    <div>
        <Helmet>
            <title>Devisi-I'lam</title>
        </Helmet>
        <div>
            <Navbarr/>
            <Herodev judulherodev={title} desjudulherodev={desjudul} mainPhoto={gambar}/>
            <Profidev profildev={profilDevisiIlanPenerangan} logoDevisi={logoilan} judul={title}/>
            <Anggota kelas11={dataIlamKelas11} kelas9={dataIlamKelas9} />
            <Footer/>
        </div>
    </div>
    );
}

export default Ilan;