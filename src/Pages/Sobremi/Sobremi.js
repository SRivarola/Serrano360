import React from "react";
import "../../index.scss"
import "./Sobremi.scss"
import sobremi from '../../assets/sobremi/sobremi.png'
import taza from '../../assets/sobremi/taza2.gif'
import Footer from "../../components/Footer/Footer";

const Sobremi = () => {
  return <div className="container">
    <div className="trabajamosPresentacion">
      <div className='titleContainer'>
        <h1>Sobre mi</h1>
        <span className='mt-1 pt-1 subrayado '></span>
      </div>
      <div className="section1">
        <div className="parrafoContainer">
          <p className="presentacionParrafo">Hola! ¡Soy Maite!</p>
          <p className="presentacionParrafo">Hace mucho me gradué de la Universidad ORT (Uruguay) como Diseñadora Gráfica. Pero más adelante descubrí otra pasión, la fotografía.</p>
          <p className="presentacionParrafo">Estudié fotografía en diferentes escuelas de Arte y más adelante realicé trabajos como fotógrafa de familia y también de productos.</p>
        </div>
        <div className="section1Image">
          <img src={sobremi} alt='retrato Maite'></img>
        </div>
      </div>
      <div className="section2">
        <div className="section2Text">
          <p className="presentacionParrafo textoTaza">Hoy en día me especializo en fotografía de productos en 2D y en 360°, para ecommerce. Actualmente realizo sesiones por encargo.<br></br> Mi fotografía está dedicada a las Pyme (pequeñas y medianas empresas), porque quiero que cualquier empresa, tenga el tamaño que tenga, pueda tener un buen contenido fotográfico y presentar sus productos con buena calidad.</p>
        </div>
        <div className="section2Image">
          <img src={taza} alt='taza360'></img>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
};

export default Sobremi;
