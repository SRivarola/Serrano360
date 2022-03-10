import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBarContainer">
      <ul className="menu">
        <li>
          <Link to="/">
            <h3> Serrano 360°</h3>
            <p>Fotografía de productos</p>
          </Link>
        </li>
        <li>
          <Link to="/fotos360">Fotos 360</Link>
        </li>
        <li>
          <Link to="/sobremi">Sobre Mi</Link>
        </li>
        <li>
          <Link to="/comotrabajamos">Como Trabajamos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
