import React from 'react';

import styles from './HeroContainer.module.scss';

const HeroContainer = props => {
  return <div className={styles['hero__container']}>{props.children}</div>;
};

export default HeroContainer;
