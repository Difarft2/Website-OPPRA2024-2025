import { Helmet } from "react-helmet";
import Navbarr from "../../components/globalComponents/navbar";
import Footer from '../../components/globalComponents/footer'
import Herodev from "../../components/devisi/subcomponent/herodev";
import gambar from '../.././assets/img/MainPhoto.svg'
import Profidev from "../../components/devisi/subcomponent/profildev";
import Anggota from "../../components/devisi/subcomponent/anggotadev";

const title ="DIVISI KEAMANAN"
const desjudul ="KEAMANAN DAN KETERTIBAN"
import logokeamanan from"../../assets/logo/divisi/keamanan.svg"
import { profilDevisiKeamanan } from "../../content/profil";
import { dataKeamananKelas11, dataKeamananKelas9 } from "../../content/anggota";



function Keamanan(){
    return(
    <div>
        <Helmet>
            <title>Devisi-Keamanan</title>
        </Helmet>
        <div>
            <Navbarr/>
            <Herodev judulherodev={title} desjudulherodev={desjudul} mainPhoto={gambar}/>
            <Profidev profildev={profilDevisiKeamanan} logoDevisi={logokeamanan} judul={title}/>
            <Anggota kelas11={dataKeamananKelas11} kelas9={dataKeamananKelas9} />
            <Footer/>
        </div>
    </div>
    );
}

export default Keamanan;