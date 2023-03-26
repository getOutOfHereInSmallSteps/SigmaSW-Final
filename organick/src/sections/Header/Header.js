import React from 'react';
import Nav from '../../components/Nav/Nav';

import styles from './Header.module.scss';
import HeroSection from './HeroSection';

const Header = () => {
  return (
    <div className={styles.header}>
      <Nav />
      <HeroSection />
    </div>
  );
};

export default Header;
