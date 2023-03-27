import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';

import styles from './Banner.module.scss';

const subheadingStyles = {
  fontSize: '3.6rem',
};

const headingStyles = {
  fontSize: '4rem',
  maxWidth: '27rem',
};

const Banner = props => {
  const bannerStyles = `${styles.banner} ${styles[`${props.className}`]}`;

  return (
    <div className={bannerStyles}>
      <Subheading style={{ ...subheadingStyles, ...props.style }}>
        {props.subheading}
      </Subheading>
      <Heading style={{ ...headingStyles, ...props.style }}>
        {props.heading}
      </Heading>
    </div>
  );
};

export default Banner;
