import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Product from './components/products/Product'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from './components/TopProducts/TopProduct';

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
      
    </div>
  )
}

export default App
