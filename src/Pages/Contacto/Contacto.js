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
    window.open('https://instagram.com/serrano_360?utm_medium=copy_link', '_blank');
  }

  const handleText = () => {
    if (copiado === 'false') {
      return '360serrano@gmail.com'
    } else if (copiado === 'true') {
      return 'copiado al portapapeles'
    }
  }

  console.log(copiado)

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
          <CopyToClipboard text='360serrano@gmail.com'>
            <Correo valido={copiado} onClick={ handleState }>{handleText()}</Correo>
          </CopyToClipboard>
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
