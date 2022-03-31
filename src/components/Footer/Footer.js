import React from 'react'
import '../../index.scss'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footerContainer'>
      <section className='footer'>
        <div className='derechos'>
          <p>
            Todos los derechos reservados ©.
            <br />
            Web realizada por <Link to='https://www.linkedin.com/mateofernandezbanchi' target='_blank'> Mateo Fernández </Link> ,
            <Link to='https://www.linkedin.com/in/santiago-rivarola-b6b500219/' target='_blank'> Santiago Rivarola </Link> y <Link to='https://www.linkedin.com/in/sofiaollerschmid/' target='_blank'> Sophia Oller Schmid </Link>

          </p>
        </div>
      </section>

    </footer>
  )
}
