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
  
      <section className="backgroundNavbar">
      <ul className="menu">
        <li className="first">
          <Link to="/">
            <h3> SERRANO 360°</h3>
          </Link>
        </li>
        <div className="menu2">
          <li>
            <Link to="/fotos360">Fotos 360°</Link>
          </li>
          <li>
            <Link to="/sobremi">Sobre mí</Link>
          </li>
          <li>
            <Link to="/comotrabajamos">Como trabajo</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </div>
      </ul>
      </section>
    </div>
  );
};

export default Navbar;
