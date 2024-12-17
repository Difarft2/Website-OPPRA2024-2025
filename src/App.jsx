import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./page/home";
import Devisi from "./page/devisi";
import Profil from "./page/profil";
import Event from "./page/menuEvent";

import Bot from "./page/subDevisi/BOT";
import Bahasa from "./page/subDevisi/Bahasa"
import Ilan from "./page/subDevisi/Ilan"
import Kebersihan from "./page/subDevisi/Kebersihan"
import Keamanan from "./page/subDevisi/Kemanan"
import Takmir from "./page/subDevisi/Takmir"
import Artikel from "./page/artikel-contoh";


function App() {
  return (
    <Router>
    <Routes>
      {/* home */}
      <Route path="/" element={<Home/>}/>

      {/* path utama */}
      <Route path="/devisi" element={<Devisi/>}/>
      <Route path="/profil" element={<Profil/>}/>
      <Route path="/event" element={<Event/>}/>

      {/* path sub devisi */}
      <Route path="/devisi/bot" element={<Bot/>}/>
      <Route path="/devisi/bahasa" element={<Bahasa/>}/>
      <Route path="/devisi/ilan" element={<Ilan/>}/>
      <Route path="/devisi/kesehatan" element={<Kebersihan/>}/>
      <Route path="/devisi/keamanan" element={<Keamanan/>}/>
      <Route path="/devisi/takmir" element={<Takmir/>}/>

      {/* path sub event */}
      <Route path="/artikel" element={<Artikel/>}/>
    </Routes>
</Router>
  )
}

export default App
