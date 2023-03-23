import React from 'react';

import styles from './Banner.module.scss';

const Banner = props => {
  return (
    <div className={`${styles.banner} ${styles[`${props.className}`]}`}>
      <div className={styles['banner__text']}>
        <h3 className={styles['banner__text-subheading']}>
          {props.subheading}
        </h3>
        <h2 className={styles['banner__text-heading']}>{props.heading}</h2>
      </div>
    </div>
  );
};

export default Banner;
