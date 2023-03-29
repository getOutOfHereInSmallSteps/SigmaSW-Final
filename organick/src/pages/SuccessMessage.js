import React from 'react';

import Heading from '../components/Typography/Heading';
import SuccessBanner from '../sections/Success/SuccessBanner';

const SuccessMessagePage = () => {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Heading style={{ marginBottom: '4.2rem', marginTop: '9.6rem' }}>
          Thank you for your order
        </Heading>
      </div>
      <SuccessBanner />
    </React.Fragment>
  );
};

export default SuccessMessagePage;
