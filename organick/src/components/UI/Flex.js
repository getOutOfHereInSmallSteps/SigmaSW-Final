import React from 'react';

import styles from './Flex.module.scss';

const Flex = props => {
  return (
    <div style={props.style} className={styles.flex}>
      {props.children}
    </div>
  );
};

export default Flex;
