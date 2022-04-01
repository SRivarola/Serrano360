import React from 'react'
import './Footer.scss'
// import { Link } from 'react-router-dom'

export default function Footer() {
  const handleRedirect = (e) => {
    if (e === 'Mateo') {
      window.open('https://www.linkedin.com/in/mateofernandezbanchi', '_blank');
    }
    else if (e === 'Sophia') {
      window.open('https://www.linkedin.com/in/sofiaollerschmid/', '_blank');
    } else if (e === 'Santiago') {
      window.open('https://www.linkedin.com/in/santiago-rivarola-b6b500219/', '_blank');
    } else {
      return;
    } }
  return (
    <footer className='footer'>
          <p className='uno'>Todos los derechos reservados ©.</p>
          <p className='links'>
          Diseño y desarrollo web por <span onClick={() => { handleRedirect('Mateo') }}>Mateo Fernández</span> ,
            <span onClick={() => { handleRedirect('Santiago') }}> Santiago Rivarola</span>  y <span onClick={() => { handleRedirect('Sophia') }}> Sophia Oller Schmid </span>
          </p>
    </footer>
  )
} 