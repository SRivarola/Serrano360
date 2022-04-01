import React, {useState} from 'react'
import '../../index.scss'
import './Contacto.scss'
import '../ComoTrabajamos/ComoTrabajamos.scss'
import { Icon } from '@iconify/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import img1 from '../../assets/contacto/te.gif'
import Footer from '../../components/Footer/Footer'
import { Correo } from '../../components/Navbar/NavbarStyled'

export default function Sobremi() {
  window.scrollTo(0,0);

  const [copiado, setCopiado] = useState('false')

  const handleState = () => {
    setCopiado('true');
    setTimeout(() => {setCopiado('false')}, 1000)
  }

  const handleRedirect = (e) => {
    if (e === 'instagram') {
    window.open('https://instagram.com/serrano_360?utm_medium=copy_link', '_blank');}
    else if (e === 'whatsapp') {
      window.open('https://wa.me/+59894487159?text=¡Hola!%20me%20gustaría%20recibir%20más%20información%20sobre%20el%20servicio%20de%20fotos360°', '_blank');
    } else {
      return;
    }
  }

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
          <p className='redes' onClick={ () => { handleRedirect('whatsapp') } }>094 487 159</p>
        </div>
        <div className='redesContainer__box'>
        <Icon className="icon" icon="uil:envelope" />
          <CopyToClipboard text='360serrano@gmail.com'>
            {
              copiado === 'false'?
                <Correo valido={copiado} onClick={ handleState }>360serrano@gmail.com</Correo>
              :
                <Correo valido={copiado} onClick={ handleState }>copiado al portapapeles</Correo>

            }
          </CopyToClipboard>
        </div>
        <div className='redesContainer__box'>
        <Icon className="icon" icon="uil:instagram" />
          <p className='redes' onClick={() => { handleRedirect('instagram') }}>serrano_360</p>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={img1} alt='foto del produtco' />
      </div>
      <Footer/>
    </div>
  )
}
