import React from 'react';

import styles from './Heading.module.scss';

const Heading = props => {
  return (
    <h2 className={styles.heading} style={props.style}>
      {props.children}
    </h2>
  );
};

export default Heading;
