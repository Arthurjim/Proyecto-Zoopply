import React from 'react';
import '../assets/styles/Home.scss'
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Bibliografia from '../components/Bibliografia'
import Footer from '../components/Footer'
const Home = ()=>(

  <div className="containerHome">
   <Header />
   <Carousel/>
   <Bibliografia/>
   <Footer/>
   </div>
)

export default Home;