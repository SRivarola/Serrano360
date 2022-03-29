import '../../index.scss'
import './Fotos360.scss'
import React, { useState } from 'react'
import img1 from '../../assets/fotos360/lampara.jpg'
import img2 from '../../assets/fotos360/florero antiguo.gif'
import img3 from '../../assets/fotos360/collar.jpg'
import vermas1 from '../../assets/vermas/figura.gif'
import vermas2 from '../../assets/vermas/yoda.gif'
import vermas3 from '../../assets/vermas/corona.jpg'
import vermas4 from '../../assets/vermas/perfues.jpg'
import vermas5 from '../../assets/vermas/parlante.gif'
import vermas6 from '../../assets/vermas/aceite.gif'
import vermas7 from '../../assets/vermas/jarron.jpg'
import vermas8 from '../../assets/vermas/anillo.gif'
import vermas9 from '../../assets/vermas/porcelana.gif'
import vermas10 from '../../assets/vermas/teteras.jpg'
import vermas11 from '../../assets/vermas/luna.jpg'
import vermas12 from '../../assets/vermas/perfume.gif'

export default function Fotos360() {

  const [verMas, setVerMas] = useState(false)

  const handleOnclick = () => {
    setVerMas(true)
  }

  console.log(verMas)

  return (
    <>
    {
      verMas === false ?
      <div className='container'>
        <div className='titleContainer'>
        <h1>Fotos 360°</h1>
        <span className='subrayado'></span>
        </div>
        
        <p>Para crear las fotografías en 360°, las mismas son tomadas desde varios ángulos con una buena iluminación, el fondo puede ser del color que prefieras. Y para hacerlas interactivas, la animación es de 360°.  La idea es buscar a la perfección las cualidades y características del objeto fotografiado.</p>
        <p>Esta manera de presentar las fotos, permite mostrar los productos de un ecommerce desde todos los ángulos, porque cada imagen 360° está compuesta de al menos 20 fotografías diferentes del producto, que después se unen usando un software especial.</p>
        <div className='gridFotos'>
          <img className='img1' src={img1} alt='foto del producto' />
          <img className='img2' src={img2} alt='foto del producto' />
          <img className='img3' src={img3} alt='foto del producto' />
        </div>
        <p>Las fotografías de producto 360° animan al usuario a detenerse y experimentar con ellas, girándolas en diferentes direcciones, para hacerse una idea mejor del aspecto real del producto, y por tanto, es más probable que se animen a comprar desde cualquier lugar del país, utilizando cualquier tipo de dispositivo (computadoras, celulares, tablets, etc.).</p>
        <p>Al contratar este servicio, tu negocio, empresa o emprendimiento se diferencia de la competencia, al  destacar y captar la atención de los posibles clientes.</p>
        <div className='btn-container'>
          <button type='button' onClick={handleOnclick} >Ver más</button>
        </div>
      </div>
      :
      <div className='verMas'>
        <div className='gridVerMas grid1'>
          <img src={vermas1} alt='foto del producto'/>
          <img className='yoda' src={vermas2} alt='foto del producto'/>
          <img className='corona' src={vermas3} alt='foto del producto'/>
        </div>
        <div className='gridVerMas grid2'>
          <img src={vermas4} alt='foto del producto'/>
          <img className='parlante' src={vermas5} alt='foto del producto'/>
        </div>
        <div className='gridVerMas grid3'>
          <img src={vermas6} alt='foto del producto'/>
        </div>
        <div className='gridVerMas grid4'>
          <img src={vermas7} alt='foto del producto'/>
          <img className='anillo' src={vermas8} alt='foto del producto'/>
        </div>
        <div className='gridVerMas grid5'>
          <img src={vermas9} alt='foto del producto'/>
          <img className='juegoDeTe' src={vermas10} alt='foto del producto'/>
        </div>
        <div className='gridVerMas grid6'>
          <img className='luna' src={vermas11} alt='foto del producto'/>
          <img className='perfume' src={vermas12} alt='foto del producto'/>
        </div>
      </div>
    }
    </>
  )
}

