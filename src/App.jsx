import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Product from './components/products/Product'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from './components/TopProducts/TopProduct';
import Banner from './components/banner/Banner';
import Subscribe from './components/subscribe/Subscribe';
import Testimonails from './components/testimonails/Testimonails';
import Footer from './components/footer/Footer';

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    AOS.refresh();
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonails/>
      <Footer/>
    </div>
  )
}

export default App
