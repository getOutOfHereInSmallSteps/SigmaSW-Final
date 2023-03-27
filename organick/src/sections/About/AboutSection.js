import React from 'react';

import styles from './AboutSection.module.scss';
import aboutImg from '../../imgs/about.png';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import Container from '../../components/UI/Container';
import List from '../../components/Typography/List';
import ListItem from '../../components/Typography/ListItem';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const headingStyles = {
  marginBottom: '1.6rem',
};

const subheadingStyles = {
  marginBottom: '1rem',
};

const paragraphStyles = {
  marginBottom: '4.2rem',
};

const listStyle = {
  marginBottom: '4.2rem',
};

const listItemStyles = {
  marginBottom: '3.2rem',
};

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <Container style={containerStyles}>
        <img src={aboutImg} alt="" />
        <div>
          <Subheading style={subheadingStyles}>About Us</Subheading>
          <Heading style={headingStyles}>
            We Believe in Working Accredited Farmers
          </Heading>
          <Paragraph style={paragraphStyles}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Paragraph>

          <List style={listStyle}>
            <ListItem heading="Organic Food Only" style={listItemStyles}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </ListItem>
            <ListItem heading="Quality Standarts">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </ListItem>
          </List>

          <Button>Shop Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
