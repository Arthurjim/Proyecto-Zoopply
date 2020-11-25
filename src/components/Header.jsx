import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
const Header = ()=>(
  
    <header>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="menu">
        <ul>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Nuestros productos</a></li>
         <li><a href="#">Contactos</a></li>
         <li><a href="#">Acerca de nosotros</a></li>
        </ul>
      </div>
    </header>
 
)
export default Header;