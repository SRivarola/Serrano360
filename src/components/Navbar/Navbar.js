import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.scss"
import "./Navbar.scss";
import {Icon} from '@iconify/react'
import { BarraMenu, ItemList, Leyenda, List, Menu, ToggleButton } from './NavbarStyled'

const Navbar = () => {
  
  const [navBar, setNavBar] = useState('false')
  
  const handleClick = () => {
    if(navBar === 'false'){
      setNavBar('true')
    } else {
      setNavBar('false')
    }
  }

  console.log(navBar)

  return (
    <>
      <div className="containerBtn">
        <ToggleButton type='button' onClick={handleClick}>
          <Icon className="icono" icon="akar-icons:three-line-horizontal"/>
        </ToggleButton>
      </div>
      <BarraMenu props={navBar}>
        <Menu>
          <List>
            <ItemList>
              <Link className="item" to="/">SERRANO 360°</Link>
              <Leyenda>Fotografia de productos</Leyenda>
            </ItemList>
            <ItemList>
              <Link to="/fotos360">Fotos 360°</Link>
            </ItemList>
            <ItemList>
              <Link to="/sobremi">Sobre mí</Link>
            </ItemList>
            <ItemList>
              <Link to="/comotrabajamos">Como trabajo</Link>
            </ItemList>
            <ItemList>
              <Link to="/contacto">Contacto</Link>
            </ItemList>
          </List>
        </Menu>
        <div className="transparencia"></div>
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
