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
  return (
    <div className={`${styles.banner} ${styles[`${props.className}`]}`}>
      <Subheading style={subheadingStyles}>{props.subheading}</Subheading>
      <Heading style={headingStyles}>{props.heading}</Heading>
    </div>
  );
};

export default Banner;
