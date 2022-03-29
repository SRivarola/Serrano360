import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.scss"
import "./Navbar.scss";
import {Icon} from '@iconify/react'
import { BarraMenu, ItemList, Leyenda, List, Menu, ToggleButton, ToggleContainer, Transparencia } from './NavbarStyled'

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
          <List>
            <ItemList>
              <Link className="item" to="/" onClick={handleFalse}>SERRANO 360°</Link>
              <Leyenda>Fotografia de productos</Leyenda>
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
  );
};

export default Navbar;
