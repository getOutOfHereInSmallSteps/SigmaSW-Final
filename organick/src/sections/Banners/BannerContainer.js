import React from 'react';
import Banner from './Banner';

import styles from './BannerContainer.module.scss';

const BannerContainer = () => {
  return (
    <div className={styles.banners}>
      <Banner
        className="banner--1"
        heading="Get Garden Fresh Fruits"
        subheading="Natural!!"
      />
      <Banner
        className="banner--2"
        heading="Get 10% off on Vegetables"
        subheading="Offer!!"
      />
    </div>
  );
};

export default BannerContainer;
