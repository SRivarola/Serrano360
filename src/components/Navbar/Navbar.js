import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink to="/fotos360" activeClassName='active' onClick={handleFalse}>Fotos 360°</NavLink>
            </ItemList>
            <ItemList>
              <NavLink to="/sobremi" activeClassName='active' onClick={handleFalse}>Sobre mí</NavLink>
            </ItemList>
            <ItemList>
              <NavLink to="/comotrabajamos" activeClassName='active' onClick={handleFalse}>Como trabajo</NavLink>
            </ItemList>
            <ItemList>
              <NavLink to="/contacto" activeClassName='active' onClick={handleFalse}>Contacto</NavLink>
            </ItemList>
          </List>
        </Menu>
        <Transparencia onClick={handleFalse}/>
      </BarraMenu>
    </>
  );
};

export default Navbar;
