import React from 'react';
import FadeInSection from '../../components/Animations/FadeInSection';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <FadeInSection>
      <div className="flex flex-wrap gap-16 bg-color-primary-green-tint py-72 mb-16">
        <GalleryItem className="bg-[url('./imgs/gallery-1.png')]">
          Organic Juice
        </GalleryItem>
        <GalleryItem className="bg-[url('./imgs/gallery-2.png')]">
          Organic Food
        </GalleryItem>
        <GalleryItem className="bg-[url('./imgs/gallery-3.png')]">
          Nuts Cookis
        </GalleryItem>
      </div>
    </FadeInSection>
  );
};

export default Gallery;
