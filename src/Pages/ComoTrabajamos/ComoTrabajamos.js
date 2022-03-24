import React from "react";
import '../../index.scss'
import './ComoTrabajamos.scss'
import { Icon } from '@iconify/react'

const ComoTrabajamos = () => {
  return (

    <div className="container containerPresentacion">
      <div className="trabajamosPresentacion">
      <h1>Como trabajo</h1>
      <h2>Nos gustaría que trabajar con nosotros sea una buena experiencia para vos</h2>
      <p>Porque además de sacar fotos profesionales, también pensamos en tu comodidad y en <br></br> proteger tu mercancía,  ya que vamos a tu empresa, local, showroom ¡donde quiera que esté!<br></br>  De esta manera no necesitas mover tus productos.</p>
      </div>
      <div className="listContainer">
        <ul className="listIcons">
          <li> <Icon className='icon' icon='system-uicons:contacts' /></li>
          <li> <Icon className='icon' icon='system-uicons:coins' /></li>
          <li> <Icon className='icon' icon='system-uicons:thumbs-up' /></li>
          <li><Icon className='icon' icon='system-uicons:calendar-add' /></li>
          <li><Icon className='icon' icon='ion:diamond-outline' /></li>
          <li><Icon className='icon' icon='bi:sun' /></li>
        </ul>
        <ul className="listText">
          <li> <p> Se contacta con nosotros por cualquiera de estos medios (whatsapp, mail, Instagram). Nos cuenta sobre el tipo de servicio que necesita su empresa y nos deja sus datos.</p></li>
          <li> <p> Le enviamos un presupuesto y posible fecha de entrega del trabajo.</p></li>
          <li> <p> Aprobación del presupuesto y 50% de seña por adelantado.</p></li>
          <li><p>Agendamos día y hora para que un integrante de nuestro equipo te visite y comience el trabajo en tu empresa, local,  showroom, etc.</p></li>
          <li> <p>Etapa de edición.
            ¡Estamos creando tus fotos!</p></li>
          <li><p>Entrega del trabajo y pago del 50% restante.</p></li>
        </ul>
      </div>
    </div>
  )
}


export default ComoTrabajamos;
