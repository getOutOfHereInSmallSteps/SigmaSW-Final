import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles['hero__content']}>
        <h3 className={styles['hero__content-subheading']}>
          100% Natural Food
        </h3>
        <h1 className={styles['hero__content-heading']}>
          Choose the best healthier way of life
        </h1>
        <a className={styles['hero__content-button']}>Explore Now</a>
      </div>
    </div>
  );
};

export default Hero;
