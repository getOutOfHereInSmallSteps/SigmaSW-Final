import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';

import styles from './Hero.module.scss';

const Hero = () => {
  const headingStyles = {
    fontSize: '7rem',
  };

  const subheadingStyles = {
    fontSize: '3.6rem',
  };

  return (
    <div className={`${styles.hero}`}>
      <div className={styles['hero__content']}>
        <Subheading style={subheadingStyles}>100% Natural Food</Subheading>
        <Heading style={headingStyles}>
          Choose the best healthier way of life
        </Heading>
        <a className={styles['hero__content-button']}>Explore Now</a>
        <Button>Explore Now</Button>
      </div>
    </div>
  );
};

export default Hero;
