import React from 'react'
import './Footer.scss'
// import { Link } from 'react-router-dom'

export default function Footer() {
  const handleMateo = (e) => {
    if (e === 'Mateo') {
      window.location.assign('https://www.linkedin.com/in/mateofernandezbanchi');
    }
    else if (e === 'Sophia') {
      window.location.assign('https://www.linkedin.com/in/sofiaollerschmid/');
    } else if (e === 'Santiago') {
      window.location.assign('https://www.linkedin.com/in/santiago-rivarola-b6b500219/');
    } else {
      return;
    } }
  return (
    <footer className='footer'>
          <p className='uno'>Todos los derechos reservados ©.</p>
          <p className='links'>
          Web realizada por <span onClick={() => { handleMateo('Mateo') }}>Mateo Fernández</span> ,
            <span onClick={() => { handleMateo('Santiago') }}> Santiago Rivarola</span>  y <span onClick={() => { handleMateo('Sophia') }}> Sophia Oller Schmid </span>
          </p>
    </footer>
  )
} 