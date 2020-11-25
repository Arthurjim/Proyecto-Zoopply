import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom'
import banner from '../assets/static/banner.png'
import '../assets/styles/components/Carousel.scss'
const Carousel = () => {
  const cambiar = useRef(null);
 const onButtonClick = ()=>{
    cambiar.current.transform= 'translate3d(-2400px, 0px, 0px)'
 
  }
 
 
  return (
    <div className="carousel">
      <div className="banner" ref={cambiar}  >
        <img src={banner} alt="zoopply" />
        <a href="#"  onClick={onButtonClick} className="carousel__link">Productos</a>
      </div>
      
    </div>
  )
}
export default Carousel;