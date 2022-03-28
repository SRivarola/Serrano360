import React, {useRef} from "react";
import "../../index.scss"
import "./Navbar.scss";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  
  // const menuField = React.useRef(false)
 

  // const toggleMenu = () => {
  //   const value = menuField.current.value;
  //   menuField.current.value = true ? value.style.transform='none' : null
  // }
  

  return (
    <div className="navContainer">
     
      <input type="checkbox"  />
      <div className="menuhamburguer">
      <span></span>
      <span></span>
      <span></span>
      </div>
      <section className="backgroundNavbar"
      //  ref={menuField} onClick={toggleMenu}
       >
      <ul className="menu">
        <li className="first">
          <Link to="/">
            <h3 className="indexButton"> SERRANO 360°</h3>
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
