import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
          <p className='uno'>Todos los derechos reservados ©.</p>
          <p className='links'>
            Diseño y desarrollo web por 
            <Link to='https://www.linkedin.com/mateofernandezbanchi' target='_blank'> Mateo Fernández </Link> ,
            <Link to='https://www.linkedin.com/in/santiago-rivarola-b6b500219/' target='_blank'> Santiago Rivarola </Link> y 
            <Link to='https://www.linkedin.com/in/sofiaollerschmid/' target='_blank'> Sophia Oller Schmid </Link>
          </p>
    </footer>
  )
}