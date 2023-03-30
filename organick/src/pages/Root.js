import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../components/UI/Nav/Nav';
import Footer from '../components/UI/Footer/Footer';

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
