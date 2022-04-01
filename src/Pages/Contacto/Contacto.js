import React from 'react'
import '../../index.scss'
import './Contacto.scss'
import '../ComoTrabajamos/ComoTrabajamos.scss'
import { Icon } from '@iconify/react'
import img1 from '../../assets/contacto/te.gif'
import Footer from '../../components/Footer/Footer'

export default function Sobremi() {
<<<<<<< HEAD
  window.scrollTo(0,0);
=======

  const handleRedirect = (e) => {
    window.open('https://instagram.com/serrano_360?utm_medium=copy_link', '_blank');
  }
>>>>>>> santi
  return (
    <div className='container contacto'>
      <div className='titleContainer'>
        <h1>Contacto</h1>
        <span className='subrayado'></span>
      </div>
      <div className="parrafoContainer">
        <p className="presentacionContacto">Si llegaste hasta acá y te gustaría que tú negocio tenga fotoproductos en 360° ¡No dudes en contactarme!</p>
      </div>
      <div className='redesContainer' >
        <div className='redesContainer__box'>
          <Icon className="icon" icon="uil:whatsapp"/>
          <p>094 487 159</p>
        </div>
        <div className='redesContainer__box'>
        <Icon className="icon" icon="uil:envelope" />
          <p>360serrano@gmail.com</p>
        </div>
        <div className='redesContainer__box'>
        <Icon className="icon" icon="uil:instagram" />
          <p className='instagram' onClick={ handleRedirect }>serrano_360</p>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={img1} alt='foto del produtco' />
      </div>
      <Footer/>
    </div>
  )
}
