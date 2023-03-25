import React from 'react';

import styles from './Subheading.module.scss';

const Subheading = props => {
  return (
    <h2 className={styles.subheading} style={props.style}>
      {props.children}
    </h2>
  );
};

export default Subheading;
