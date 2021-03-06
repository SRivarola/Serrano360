import React from "react";
import '../../index.scss'
import './ComoTrabajamos.scss'
import { Icon } from '@iconify/react'
import Footer from "../../components/Footer/Footer";

const ComoTrabajamos = () => {

  window.scrollTo(0,0);

  return (

    <div className="container containerPresentacion">
        <div className='titleContainer'>
          <h1>Como trabajo</h1>
          <span className='mt-1 pt-1 subrayado '></span>
        </div>
      <div className="trabajamosPresentacion">
        <p className="trabajamosSubtitulo">Nos gustaría que trabajar con nosotros sea una buena <span style={{fontStyle:'italic'}}> experiencia </span>  para vos.</p>
        <p className="presentacionParrafo">
          Porque además de sacar fotos profesionales, también pensamos en tu comodidad y en proteger tu mercancía,  ya que vamos a tu empresa, local, showroom ¡donde quiera que esté!<br></br>  De esta manera no necesitas mover tus productos.</p>
      </div>
      <div className="listContainer">
        <table>
          <tbody>
            <tr>
              <td>
                <Icon className='icon' icon='system-uicons:contacts' style= {{fontSize:'35px'}} />
              </td>
              <td>
                <p> Se contacta con nosotros por cualquiera de estos medios (whatsapp, mail, Instagram). Nos cuenta sobre el tipo de servicio que necesita su empresa y nos deja sus datos.</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon className='icon' icon='system-uicons:coins' />
              </td>
              <td>
                <p> Le enviamos un presupuesto y posible fecha de entrega del trabajo.</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon className='icon' icon='system-uicons:thumbs-up' />
              </td>
              <td>
                <p> Aprobación del presupuesto y 50% de seña por adelantado.</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon className='icon' icon='system-uicons:calendar-add' />
              </td>
              <td>
                <p>Agendamos día y hora para que un integrante de nuestro equipo te visite y comience el trabajo en tu empresa, local,  showroom, etc.</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon className='icon' icon='ion:diamond-outline'  style={{fontSize:'27px'}} />
              </td>
              <td>
                <p>Etapa de edición.
                  ¡Estamos creando tus fotos!</p>
              </td>
            </tr>
            <tr>
              <td>
                <Icon className='icon' icon='bi:sun' />
              </td>
              <td>
                <p>Entrega del trabajo y pago del 50% restante.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#0C4230'}}>¡Ya tenés tus fotos para lucirlas en tu negocio!</p>
      <Footer/>
    </div>
  )
}


export default ComoTrabajamos;
