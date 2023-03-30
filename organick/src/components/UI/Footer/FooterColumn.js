import React from 'react';
import styles from './FooterColumn.module.scss';

const FooterColumn = props => {
  return (
    <div
      style={props.style}
      className={`${styles.column} ${props.className || ''}`}
    >
      {props.children}
    </div>
  );
};

export default FooterColumn;
