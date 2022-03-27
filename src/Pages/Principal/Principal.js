import './Principal.scss'
import React from 'react'
import img1 from '../../assets/principal/img1.jpg'
import img2 from '../../assets/principal/img2.jpg'
import img3 from '../../assets/principal/img3.jpg'

export default function Principal() {
  return (
    <section className='fixed'>
      <div className='containerBackground grid'>
        <img className='img1' src={img1} alt='foto de portada'/>
        <img className='img2' src={img2} alt='foto de portada'/>
        <img className='img3' src={img3} alt='foto de portada'/>
      </div>
    </section>
  )
}
