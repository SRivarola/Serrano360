import './Principal.scss'
import React from 'react'
import img1 from '../../assets/principal/img1.jpg'
import img2 from '../../assets/principal/img2.jpg'
import img3 from '../../assets/principal/img3.jpg'
import img4 from '../../assets/principal/img1_mobile.jpg'
import img5 from '../../assets/principal/img2_mobile.jpg'
import img6 from '../../assets/principal/img3_mobile.jpg'
import '../Contacto/Contacto'
import Footer from '../../components/Footer/Footer'


export default function Principal() {
  return (
    <>
      <section className='fixed'>
        <div className='containerTitulo'>
          <div className='gridTitulo'>
            <h1>SERRANO 360°</h1>
            <h3>Fotografia de productos</h3>
          </div>
          <Footer />
          
        </div>
        <div className='containerBackground grid'>
          <img className='img1' src={img1} alt='foto de portada' />
          <img className='img2' src={img2} alt='foto de portada' />
          <img className='img3' src={img3} alt='foto de portada' />
          <img className='img4' src={img4} alt='foto de portada' />
          <img className='img5' src={img5} alt='foto de portada' />
          <img className='img6' src={img6} alt='foto de portada' />
        </div>
       
      </section>

    </>
  )
}
