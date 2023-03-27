import React from 'react';
import AboutSection from '../sections/About/AboutSection';
import BannersSection from '../sections/Banners/BannersSection';
import HeroSection from '../sections/Header/HeroSection';
import Offers from '../sections/Offers/Offers';
import Products from '../sections/Products/Products';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BannersSection />
      <AboutSection />
      <Products />
      <Offers />
    </React.Fragment>
  );
};

export default HomePage;
