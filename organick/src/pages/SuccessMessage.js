import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../components/Typography/Heading';

const SuccessMessagePage = () => {
  return (
    <React.Fragment>
      <Heading>Success of Validation!</Heading>;<Link to="/">Go Back</Link>
      <Link to="error">Error</Link>
    </React.Fragment>
  );
};

export default SuccessMessagePage;
