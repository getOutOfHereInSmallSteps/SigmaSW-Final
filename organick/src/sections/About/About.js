import React from 'react';

import styles from './About.module.scss';
import aboutImg from '../../imgs/about.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles['about__image']}>
          <img src={aboutImg} alt="" />
        </div>
        <div className={styles['about__desc']}>
          <h3 className={styles['about__desc-subheading']}>About Us</h3>
          <h2 className={styles['about__desc-heading']}>
            We Believe in Working Accredited Farmers
          </h2>
          <p className={styles['about__desc-paragraph']}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <a className={styles['about__desc-button']}>Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default About;
