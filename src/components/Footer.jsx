import React from 'react';
import iconTwitter from '../assets/static/twitter-icon.png'
import iconGoogle from '../assets/static/google-icon.png'
import '../assets/styles/components/Footer.scss'
const Footer = ()=>(
  <div className="footer">
    <p>Zooply@gmail.com</p>
    <img src={iconTwitter} alt="twitter"/>
    <img src={iconGoogle} alt="google"/>

  </div>
)
export default Footer;