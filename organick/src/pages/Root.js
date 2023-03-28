import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Footer from '../sections/Footer/Footer';

const RootLayout = () => {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
