import Footer from "../components/globalComponents/footer";
import Navbarr from "../components/globalComponents/navbar";
import Menuev from "../components/home/event-menu";
import Hero from "../components/home/hero";
import Profilmini from "../components/home/profilMini";
import Visimisi from "../components/home/visimisi";


function Home(){
    return(
        <div>
            <Navbarr/>
            <Hero/>
            <Profilmini/>
            <Visimisi/>
            <Menuev/>
            <Footer/>
        </div>
    );
};

export default Home;
