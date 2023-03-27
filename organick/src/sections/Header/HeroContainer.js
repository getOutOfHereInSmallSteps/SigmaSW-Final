import React from 'react';

import styles from './HeroContainer.module.scss';

const HeroContainer = props => {
  return (
    <header className={styles['hero__container']}>{props.children}</header>
  );
};

export default HeroContainer;
