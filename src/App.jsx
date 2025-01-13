import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './css/global.css'

import Home from "./page/home";
import Devisi from "./page/devisi";
import Profil from "./page/profil";
import Event from "./page/menuEvent";
import Timwebsite from "./page/timWebsite";
import ScrollToTop from "./scroll";

import Bot from "./page/subDevisi/BOT";
import Bahasa from "./page/subDevisi/Bahasa"
import Ilan from "./page/subDevisi/Ilan"
import Kebersihan from "./page/subDevisi/Kebersihan"
import Keamanan from "./page/subDevisi/Kemanan"
import Takmir from "./page/subDevisi/Takmir"

import Hariguru from "./page/artikel/hariguru";
import Mastaf from "./page/artikel/mastaf";
import Mufes from "./page/artikel/mufest";
import Agustus from "./page/artikel/17 agustus ";


function App() {
  return (
    <Router basename="/web2024/" >
      <ScrollToTop />
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* path utama */}
        <Route path="/devisi" element={<Devisi />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/event" element={<Event />} />
        <Route path="/timwebsite" element={<Timwebsite />} />

        {/* path sub devisi */}
        <Route path="/devisi/bot" element={<Bot />} />
        <Route path="/devisi/bahasa" element={<Bahasa />} />
        <Route path="/devisi/ilan" element={<Ilan />} />
        <Route path="/devisi/kesehatan" element={<Kebersihan />} />
        <Route path="/devisi/keamanan" element={<Keamanan />} />
        <Route path="/devisi/takmir" element={<Takmir />} />

        {/* path sub event */}
        <Route path="/event/hariguru" element={<Hariguru />} />
        <Route path="/event/mastaf2024" element={<Mastaf/>} />
        <Route path="/event/mufes" element={<Mufes/>} />
        <Route path="/event/17agustus" element={<Agustus/>} />
      </Routes>
    </Router>
  );
}

export default App
