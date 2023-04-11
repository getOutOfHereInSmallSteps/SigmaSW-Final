import React from 'react';

import AboutSection from '../sections/About/AboutSection';
import BannersSection from '../sections/Banners/BannersSection';
import Gallery from '../sections/Gallery/Gallery';
import HeroSection from '../sections/Header/HeroSection';
import News from '../sections/News/News';
import Newsletter from '../sections/NewsletterSubscription/Newsletter';
import Offers from '../sections/Offers/Offers';
import ProductsSection from '../sections/Products/ProductsDisplay/ProductsSection';
import Testimonial from '../sections/Testimonail/Testimonial';
import WhoWeAre from '../sections/WhoWeAre/WhoWeAre';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <BannersSection />
      <AboutSection />
      <ProductsSection />
      <Testimonial />
      <Offers />
      <WhoWeAre />
      <Gallery />
      <News />
      <Newsletter />
    </React.Fragment>
  );
};

export default HomePage;
