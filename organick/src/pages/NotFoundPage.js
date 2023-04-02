import React from 'react';

import Heading from '../components/Typography/Heading';
import Nav from '../components/UI/Nav/Nav';
import Footer from '../components/UI/Footer/Footer';
import Paragraph from '../components/Typography/Paragraph';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const returnHomeHandler = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <React.Fragment>
      <Nav />
      <main className="mb-[14rem]">
        <div className="h-[90rem] bg-[url('./imgs/not-found-page.png')]">
          <div className="flex justify-end items-center h-full max-w-[140rem] mx-auto">
            <div className="text-center w-fit">
              <h2 className="text-[30rem] font-bold text-color-error leading-none">
                404
              </h2>
              <Heading className="text-[7rem] mb-4">Page not found</Heading>
              <Paragraph className="mb-9">
                The page you are looking for doesn't exist or has been moved
              </Paragraph>
              <Button onClick={returnHomeHandler}>Go to Homepage</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default NotFoundPage;
