import React from 'react';

import styles from './Paragraph.module.scss';

const Paragraph = props => {
  return (
    <p style={props.style} className={styles.paragraph}>
      {props.children}
    </p>
  );
};

export default Paragraph;
