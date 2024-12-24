import { Helmet } from "react-helmet";
import Navbarr from "../../components/globalComponents/navbar";
import Footer from '../../components/globalComponents/footer'
import Herodev from "../../components/devisi/subcomponent/herodev";
import gambar from '../.././assets/img/MainPhoto.svg'
import Profidev from "../../components/devisi/subcomponent/profildev";
import Anggota from "../../components/devisi/subcomponent/anggotadev";

const title ="DIVISI TAKMIR"
const desjudul =""
import logotakmir from"../../assets/logo/divisi/takmir.svg"
import { profilDevisiTakmir } from "../../content/profil";
import { dataTarmirKelas11, dataTarmirKelas9 } from "../../content/anggota";



function Takmir(){
    return(
    <div>
        <Helmet>
            <title>Devisi-Takmir</title>
        </Helmet>
        <div>
            <Navbarr/>
            <Herodev judulherodev={title} desjudulherodev={desjudul} mainPhoto={gambar}/>
            <Profidev profildev={profilDevisiTakmir} logoDevisi={logotakmir} judul={title}/>
            <Anggota kelas11={dataTarmirKelas11} kelas9={dataTarmirKelas9} />
            <Footer/>
        </div>
    </div>
    );
}

export default Takmir;