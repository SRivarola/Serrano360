import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fotos360 from "./Pages/Fotos360/Fotos360";
import Sobremi from "./Pages/Sobremi/Sobremi";
import ComoTrabajamos from "./Pages/ComoTrabajamos/ComoTrabajamos";
import Contacto from "./Pages/Contacto/Contacto";
<<<<<<< HEAD
import Home from "./components/Home/Home";
=======
import Home from "./Pages/Home/Home";
import Principal from "./Pages/Principal/Principal";
>>>>>>> 5593181cafd048d5f61d61a14658c544140ca467

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
