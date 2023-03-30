import React from 'react';
import AboutSection from '../sections/About/AboutSection';
import BannersSection from '../sections/Banners/BannersSection';
import HeroSection from '../sections/Header/HeroSection';
import Offers from '../sections/Offers/Offers';
import ProductsDisplay from '../sections/Products/ProductsDisplay/ProductsDisplay';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BannersSection />
      <AboutSection />
      <ProductsDisplay />
      <Offers />
    </React.Fragment>
  );
};

export default HomePage;
