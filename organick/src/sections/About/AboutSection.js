import React from 'react';

import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import Container from '../../components/UI/Container';
import List from '../../components/Typography/List';
import ListItem from '../../components/Typography/ListItem';

import aboutImg from '../../imgs/about.png';

import { ReactComponent as BowlIcon } from '../../svg/bowl.svg';
import { ReactComponent as MailboxIcon } from '../../svg/mailbox.svg';
import FadeInSection from '../../components/Animations/FadeInSection';

const AboutSection = () => {
  return (
    <FadeInSection>
      <div className="bg-color-background-light-gray py-[20rem] mb-[18rem]">
        <Container className="flex items-center max-lg:justify-center">
          <div className="shrink grow-0 max-w-[80rem]">
            <img
              src={aboutImg}
              alt="A pile of oranges, grapefruits and lime"
              className="max-lg:hidden"
            />
          </div>
          <div className="basis-3/6">
            <Subheading>About Us</Subheading>
            <Heading className="mb-[1.6rem] text-[5rem]">
              We Believe in Working Accredited Farmers
            </Heading>
            <Paragraph className="mb-[4.2rem]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Paragraph>

            <List className="mb-[4.2rem]">
              <ListItem
                heading="Organic Food Only"
                icon={<MailboxIcon />}
                className="mb-[3.2rem]"
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </ListItem>
              <ListItem heading="Quality Standarts" icon={<BowlIcon />}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </ListItem>
            </List>

            <Button>Shop Now</Button>
          </div>
        </Container>
      </div>
    </FadeInSection>
  );
};

export default AboutSection;
