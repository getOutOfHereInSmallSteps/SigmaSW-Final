import React from 'react';

import styles from './AboutSection.module.scss';
import aboutImg from '../../imgs/about.png';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import Container from '../../components/UI/Container';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <Container style={containerStyles}>
        <img src={aboutImg} alt="" />
        <div>
          <Subheading>About Us</Subheading>
          <Heading>We Believe in Working Accredited Farmers</Heading>
          <Paragraph>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Paragraph>
          <Button>Shop Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
