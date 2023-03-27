import React from 'react';

import styles from './FlexContainer.module.scss';

const FlexContainer = props => {
  return (
    <div style={props.style} className={styles['flex-container']}>
      {props.children}
    </div>
  );
};

export default FlexContainer;
