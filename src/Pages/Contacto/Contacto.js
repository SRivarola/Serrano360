import React from 'react'
import '../../index.scss'
import './Contacto.scss'
import '../ComoTrabajamos/ComoTrabajamos.scss'
import { Icon } from '@iconify/react'
import img1 from '../../assets/contacto/te.gif'

export default function Sobremi() {
  return (
    <div className='container contacto'>
      <div className='titleContainer'>
      <h1>Contacto</h1>
      <span className='subrayado'></span>
      </div>
    
      <div className='listContainer' >
        <table>
          <tbody>
            <tr>
              <td><Icon className="icon" icon="uil:whatsapp"/> </td>
              <td>094 487 159</td>
            </tr>
            <tr>
              <td><Icon className="icon" icon="uil:envelope"/></td>
              <td>360serrano@gmail.com</td>
            </tr>
            <tr>
              <td><Icon className="icon" icon="uil:instagram"/></td>
              <td>serrano_360</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='imgContainer'>
        <img src={img1} alt='foto del produtco'/>
      </div>
      <div className='derechos'>
        <p>
          Todos los derechos reservados ©.
          <br/>
          Web realizada por Mateo, Santiago y Sophie.
        </p>
      </div>
    </div>
  )
}
