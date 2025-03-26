import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Product from "./components/products/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./components/TopProducts/TopProduct";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonails from "./components/testimonails/Testimonails";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup = {handleOrderPopup}/>
      <Hero handleOrderPopup = {handleOrderPopup}/>
      <Product />
      <TopProduct handleOrderPopup = {handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Product />
      <Testimonails />
      <Footer />
      <Popup orderPopup = {orderPopup} setOrderPopup = {setOrderPopup}/>
    </div>
  );
};

export default App;
