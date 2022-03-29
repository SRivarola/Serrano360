import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.scss"
import "./Navbar.scss";
import {Icon} from '@iconify/react'
import { BarraMenu, ItemList, Leyenda, List, Menu, ToggleButton, ToggleContainer, Transparencia, Border } from './NavbarStyled'

const Navbar = () => {
  
  const [navBar, setNavBar] = useState('false')
  
  const handleClick = () => {
    if(navBar === 'false'){
      setNavBar('true')
    } else {
      setNavBar('false')
    }
  }

  const handleFalse = () => {
    setNavBar('false')
  }
  console.log(navBar)

  return (
    <>
      <ToggleContainer valido={navBar}>
        <ToggleButton type='button' onClick={handleClick}>
          <Icon className="icono" icon="akar-icons:three-line-horizontal"/>
        </ToggleButton>
      </ToggleContainer>
      <BarraMenu valido={navBar}>
        <Menu>
          <Border></Border>
          <List>
            <ItemList>
              <Link  to="/" onClick={handleFalse}><span className="item">SERRANO 360°</span>
              <Leyenda>Fotografia de productos</Leyenda></Link>
            </ItemList>
            <ItemList>
              <Link to="/fotos360" onClick={handleFalse}>Fotos 360°</Link>
            </ItemList>
            <ItemList>
              <Link to="/sobremi" onClick={handleFalse}>Sobre mí</Link>
            </ItemList>
            <ItemList>
              <Link to="/comotrabajamos" onClick={handleFalse}>Como trabajo</Link>
            </ItemList>
            <ItemList>
              <Link to="/contacto" onClick={handleFalse}>Contacto</Link>
            </ItemList>
          </List>
        </Menu>
        <Transparencia onClick={handleFalse}/>
      </BarraMenu>
    </>
    // <div className="navContainer">
     
    //   <input type="checkbox"  />
    //   <div className="menuhamburguer">
    //   <span></span>
    //   <span></span>
    //   <span></span>
    //   </div>
    //   <section className="backgroundNavbar"
    //   //  ref={menuField} onClick={toggleMenu}
    //    >
    //      <span className="borderMenu"></span>
    //   <ul className="menu">
    //     <li className="first">
    //       <Link to="/">
    //         <h3 className="indexButton"> SERRANO 360°</h3>
    //       </Link>
    //     </li>
    //     <div className="menu2">
    //       <li>
    //         <Link to="/fotos360">Fotos 360°</Link>
    //       </li>
    //       <li>
    //         <Link to="/sobremi">Sobre mí</Link>
    //       </li>
    //       <li>
    //         <Link to="/comotrabajamos">Como trabajo</Link>
    //       </li>
    //       <li>
    //         <Link to="/contacto">Contacto</Link>
    //       </li>
    //     </div>
    //   </ul>
    //   </section>
    // </div>
  );
};

export default Navbar;
