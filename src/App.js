import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fotos360 from "./components/Fotos360/Fotos360";
import Sobremi from "./components/Sobremi/Sobremi";
import ComoTrabajamos from "./components/ComoTrabajamos/ComoTrabajamos";
import Contacto from "./components/Contacto/Contacto";
import Home from "./components/Home/Home";
import Principal from "./Pages/Principal/Principal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Principal/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/fotos360" element={<Fotos360 />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/comotrabajamos" element={<ComoTrabajamos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
