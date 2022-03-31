import React from 'react'
import '../../index.scss'
import './Footer.scss'

export default function Footer() {

  const handleMateo = (e) => {
    if (e === 'Mateo') {
      window.location.assign('https://www.linkedin.com/mateofernandezbanchi');
    }
    else if (e === 'Sophia') {
      window.location.assign('https://www.linkedin.com/in/sofiaollerschmid/');
    } else if (e === 'Santiago') {
      window.location.assign('https://www.linkedin.com/in/santiago-rivarola-b6b500219/');
    } else {
      return;
    }
  }
  return (
    <footer className='footerContainer'>
      <section className='footer'>
        <div className='derechos'>
          <p>
            Todos los derechos reservados ©.
            <br />
            Web realizada por <span onClick={() => { handleMateo('Mateo') }}>Mateo Fernández</span> ,
            <span onClick={() => { handleMateo('Santiago') }}>Santiago Rivarola</span>  y <span onClick={() => { handleMateo('Sophia') }}>Sophia Oller Schmid </span>

          </p>
        </div>
      </section>

    </footer>
  )
}
