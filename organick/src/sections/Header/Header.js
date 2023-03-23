import React from 'react';
import Nav from '../../components/Nav/Nav';

import styles from './Header.module.scss';

import Hero from './Hero';

const Header = () => {
  return (
    <div className={styles.header}>
      <Nav />
      <Hero />
    </div>
  );
};

export default Header;
