import React from 'react';
import Heading from '../../components/Typography/Heading';

import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';
import FadeInSection from '../../components/Animations/FadeInSection';

const Newsletter = () => {
  return (
    <FadeInSection>
      <Container>
        <div className="mb-[20rem] flex w-full flex-wrap items-center justify-between gap-8 rounded-[30px] bg-[url('./imgs/newsletter-bg.jpg')] px-[7rem] py-[10rem] max-md:px-[2.4rem]">
          <Heading className="max-w-[36rem] text-[5rem] text-color-white">
            Subscribe to our Newsletter
          </Heading>

          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="rounded-[16px] p-[2rem] text-[1.8rem]"
            ></input>
            <Button hideArrow>Subscribe</Button>
          </div>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default Newsletter;
