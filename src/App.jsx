import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import FarmInfo from './components/FarmInfo';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Facts from './components/Facts';
import ProductList from './components/ProductList';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="farm-info">
        <FarmInfo />
      </div>
      <div id="products">
        <ProductList />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="facts">
        <Facts />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
