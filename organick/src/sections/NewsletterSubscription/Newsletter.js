import React from 'react';
import Heading from '../../components/Typography/Heading';

import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';

const Newsletter = () => {
  return (
    <Container>
      <div className="py-[10rem] px-[7rem] max-md:px-[2.4rem] w-full rounded-[30px] bg-[url('./imgs/newsletter-bg.jpg')] flex justify-between gap-8 flex-wrap items-center mb-[20rem]">
        <Heading className="text-[5rem] text-color-white max-w-[36rem]">
          Subscribe to our Newsletter
        </Heading>

        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-[2rem] rounded-[16px] text-[1.8rem]"
          ></input>
          <Button hideArrow>Subscribe</Button>
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
