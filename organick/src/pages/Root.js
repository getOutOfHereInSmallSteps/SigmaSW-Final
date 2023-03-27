import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav/Nav';

const RootLayout = () => {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
