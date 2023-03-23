import React from 'react';

import styles from './Card.module.scss';

const Card = props => {
  <div className={styles.card}>{props.children}</div>;
};

export default Card;
