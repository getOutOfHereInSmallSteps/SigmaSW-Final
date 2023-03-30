import React from 'react';

import styles from './SubmissionBanner.module.scss';

import Heading from '../../components/Typography/Heading';

const SubmissionBanner = () => {
  return (
    <div className={styles['submission__banner']}>
      <div>
        <Heading>Cart</Heading>
      </div>
    </div>
  );
};

export default SubmissionBanner;
