import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navContainer">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul className="menu">
        <li className="first">
          <Link to="/">
            <h3> SERRANO 360°</h3>
          </Link>
        </li>
        <li>
          <Link to="/fotos360">Fotos 360°</Link>
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
