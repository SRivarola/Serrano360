import React from "react";
import './ComoTrabajamos.scss'
import Principal from '.././Principal/Principal'
import {Icon} from '@iconify/react'

const ComoTrabajamos = () => {
  return (
    <div>
      <div className="background">
      <Principal />
      </div>
    <div className="trabajamosContainer">
      <h2>Como trabajo</h2>
      <h3>Nos gustaría que trabajar con nosotros sea una buena experiencia para vos</h3>
      <p>Porque además de sacar fotos profesionales, también pensamos en tu comodidad y en proteger tu mercancía,  ya que vamos a tu empresa, local, showroom ¡donde quiera que esté! De esta manera no necesitas mover tus productos.</p>
      <ul>
        <li> <Icon icon='system-uicons:contacts'/> Se contacta con nosotros por cualquiera de estos medios (whatsapp, mail, Instagram). Nos cuenta sobre el tipo de servicio que necesita su empresa y nos deja sus datos.</li>
        <li> <Icon icon='system-uicons:coins'/> Le enviamos un presupuesto y posible fecha de entrega del trabajo.</li>
        <li> <Icon icon='system-uicons:thumbs-up'/>
        Aprobación del presupuesto y 50% de seña por adelantado.</li>
        <li><Icon icon='system-uicons:calendar-add'/>Agendamos día y hora para que un integrante de nuestro equipo te visite y comience el trabajo en tu empresa, local,  showroom, etc.</li>
        <li><Icon icon='ion:diamond-outline'/> Etapa de edición.
          ¡Estamos creando tus fotos!</li>
        <li><Icon icon='bi:sun'/>Entrega del trabajo y pago del 50% restante.</li>
      </ul>
    </div></div>)
};

export default ComoTrabajamos;
