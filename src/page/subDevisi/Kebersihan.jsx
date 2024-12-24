import { Helmet } from "react-helmet";
import Navbarr from "../../components/globalComponents/navbar";
import Footer from '../../components/globalComponents/footer'
import Herodev from "../../components/devisi/subcomponent/herodev";
import gambar from '../.././assets/img/MainPhoto.svg'
import Profidev from "../../components/devisi/subcomponent/profildev";
import Anggota from "../../components/devisi/subcomponent/anggotadev";

const title ="DIVISI KESEHATAN"
const desjudul ="KESEHATAN DAN KEBERSIHAN"
import logokebersihan from"../../assets/logo/divisi/kebersihan.svg"
import { profilDevisiKebersihan } from "../../content/profil";
import { dataKebersihanKelas11, dataKebersihanKelas9} from "../../content/anggota";




function Kebersihan(){
    return(
    <div>
        <Helmet>
            <title>Devisi-Kesehatan</title>
        </Helmet>
        <div>
            <Navbarr/>
            <Herodev judulherodev={title} desjudulherodev={desjudul} mainPhoto={gambar}/>
            <Profidev profildev={profilDevisiKebersihan} logoDevisi={logokebersihan} judul={title}/>
            <Anggota kelas11={dataKebersihanKelas11} kelas9={dataKebersihanKelas9} />
            <Footer/>
        </div>
    </div>
    );
}

export default Kebersihan;