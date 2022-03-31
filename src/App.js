import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fotos360 from "./Pages/Fotos360/Fotos360";
import Sobremi from "./Pages/Sobremi/Sobremi";
import ComoTrabajamos from "./Pages/ComoTrabajamos/ComoTrabajamos";
import Contacto from "./Pages/Contacto/Contacto";
import Home from "./Pages/Home/Home";
import Principal from "./Pages/Principal/Principal";
import VerMas from "./Pages/VerMas/VerMas";


function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Principal/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/fotos360" element={<Fotos360 />} />
          <Route path='/vermas' element={<VerMas />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/comotrabajamos" element={<ComoTrabajamos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
