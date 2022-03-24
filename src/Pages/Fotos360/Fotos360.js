import './Fotos360.scss'
import React from 'react'
import img1 from '../../assets/fotos360/lampara.jpg'
import img2 from '../../assets/fotos360/florero antiguo.gif'
import img3 from '../../assets/fotos360/collar.jpg'

export default function Fotos360() {
  return (
    <div className='fotos360'>
      <h1>Fotos 360°</h1>
      <span className='subrayado'></span>
      <p>Para crear las fotografías en 360°, las mismas son tomadas desde varios ángulos con una buena iluminación, el fondo puede ser del color que prefieras. Y para hacerlas interactivas, la animación es de 360°.  La idea es buscar a la perfección las cualidades y características del objeto fotografiado.</p>
      <p>Esta manera de presentar las fotos, permite mostrar los productos de un ecommerce desde todos los ángulos, porque cada imagen 360° está compuesta de al menos 20 fotografías diferentes del producto, que después se unen usando un software especial.</p>
      <div className='gridFotos'>
        <img src={img1} alt='foto del producto' />
        <img src={img2} alt='foto del producto' />
        <img src={img3} alt='foto del producto' />
      </div>
      <p>Las fotografías de producto 360° animan al usuario a detenerse y experimentar con ellas, girándolas en diferentes direcciones, para hacerse una idea mejor del aspecto real del producto, y por tanto, es más probable que se animen a comprar desde cualquier lugar del país, utilizando cualquier tipo de dispositivo (computadoras, celulares, tablets, etc.).</p>
      <p>Al contratar este servicio, tu negocio, empresa o emprendimiento se diferencia de la competencia, al  destacar y captar la atención de los posibles clientes.</p>
    </div>
  )
}

