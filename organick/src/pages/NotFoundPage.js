import React from 'react';
import Nav from '../components/Nav/Nav';

import Heading from '../components/Typography/Heading';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Heading>Page was not found</Heading>;
    </React.Fragment>
  );
};

export default NotFoundPage;
