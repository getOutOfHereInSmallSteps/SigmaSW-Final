import React from 'react';
import AboutSection from '../sections/About/AboutSection';
import BannersSection from '../sections/Banners/BannersSection';
import Gallery from '../sections/Gallery/Gallery';
import HeroSection from '../sections/Header/HeroSection';
import Offers from '../sections/Offers/Offers';
import ProductsDisplay from '../sections/Products/ProductsDisplay/ProductsDisplay';
import Testimonial from '../sections/Testimonail/Testimonial';
import WhoWeAre from '../sections/WhoWeAre/WhoWeAre';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BannersSection />
      <AboutSection />
      <ProductsDisplay />
      <Testimonial />
      <Offers />
      <WhoWeAre />
      <Gallery />
    </React.Fragment>
  );
};

export default HomePage;
