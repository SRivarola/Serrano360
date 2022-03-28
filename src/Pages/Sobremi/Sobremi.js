import React from "react";
import "../../index.scss"
import "./Sobremi.scss"
import sobremi from '../../assets/sobremi/sobremi.jpeg'
import taza from '../../assets/sobremi/taza.gif'

const Sobremi = () => {
  return <div className="container">
    <div className="trabajamosPresentacion">
      <h1>Sobre mi</h1>
      <span className='mt-1 pt-1 subrayado '></span>
      <div className="section1">
        <div>
          <p className="presentacionParrafo">Hola! ¡Soy Maite!</p>
          <p className="presentacionParrafo">Hace mucho me gradué de la Universidad ORT (Uruguay) como Diseñadora Gráfica. Pero más adelante descubrí otra pasión, la fotografía.</p>
          <p className="presentacionParrafo">Estudié fotografía en diferentes escuelas de Arte y más adelante realicé trabajos como fotógrafa de familia y también de productos.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={sobremi} style={{ borderRadius: '20px' }}></img>
        </div>
      </div>
      <div className="section2">
        <div>
          <p className="presentacionParrafo textoTaza">Hoy en día me especializo en fotografía de productos en 2D y en 360°, para ecommerce. Actualmente realizo sesiones por encargo. Mi fotografía está dedicada a las Pyme (pequeñas y medianas empresas), porque quiero que cualquier empresa, tenga el tamaño que tenga, pueda tener un buen contenido fotográfico y presentar sus productos con buena calidad.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={taza} style={{ width: '350px'}}></img>
        </div>
      </div>
    </div>
  </div>;
};

export default Sobremi;
