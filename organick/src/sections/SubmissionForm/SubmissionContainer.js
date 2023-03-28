import React from 'react';

import styles from './SubmissionContainer.module.scss';

import Container from '../../components/UI/Container';

const SubmissionContainer = props => {
  return (
    <div className={styles['submission__container']}>
      <Container>{props.children}</Container>
    </div>
  );
};

export default SubmissionContainer;
