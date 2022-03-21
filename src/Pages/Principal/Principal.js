import './Principal.scss'
import React from 'react'
import img1 from '../../assets/img1c.jpeg'
import img2 from '../../assets/img2b.jpeg'
import img3 from '../../assets/img3c.jpeg'

export default function Principal() {
  return (
    <div className='container grid'>
        <img src={img1} alt='foto de portada'/>
        <img src={img2} alt='foto de portada'/>
        <img src={img3} alt='foto de portada'/>
    </div>
  )
}
