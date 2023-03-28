import React from 'react';
import styles from './Footer.module.scss';

import Logo from '../../components/Typography/Logo';

import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import FlexContainer from '../../components/UI/FlexContainer';
import ContactUs from './ContactItem';
import FooterColumn from './FooterColumn';

import { ReactComponent as InstagramLogo } from '../../svg/Instagram.svg';
import { ReactComponent as FacebookLogo } from '../../svg/Facebook.svg';
import { ReactComponent as TwitterLogo } from '../../svg/Twitter.svg';
import { ReactComponent as PinterestLogo } from '../../svg/Pinterest.svg';

const flexContainerStyles = {
  maxWidth: '120rem',
  justifyContent: 'space-between',
};

const headingStyles = {
  fontSize: '3rem',
  lineHeight: '3.5rem',
};

const paragraphStyles = {
  marginBottom: '3.2rem',
};

const leftColumnStyles = {
  alignItems: 'flex-end',
};

const rightColumnStyles = {
  alignItems: 'flex-start',
};

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <FlexContainer style={flexContainerStyles}>
        <FooterColumn style={leftColumnStyles}>
          <Heading style={headingStyles}>Contact Us</Heading>
          <ContactUs label="Email" link="needhelp@Organia.com" />
          <ContactUs label="Phone" link="666 888 888" />
          <ContactUs label="Address" link="88 road, borklyn street, USA" />
        </FooterColumn>
        <FooterColumn className={styles['footer__column-logo']}>
          <Logo />
          <Paragraph style={paragraphStyles}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{' '}
          </Paragraph>
          <div className={styles['footer__socials']}>
            <div className={styles['footer__socials-link']}>
              <InstagramLogo />
            </div>
            <div className={styles['footer__socials-link']}>
              <FacebookLogo />
            </div>
            <div className={styles['footer__socials-link']}>
              {/* <TwitterLogo /> */}
              <TwitterLogo />
            </div>
            <div className={styles['footer__socials-link']}>
              <PinterestLogo />
            </div>
          </div>
        </FooterColumn>
        <FooterColumn style={rightColumnStyles}>
          <Heading style={headingStyles}>Utility Pages</Heading>
          <ContactUs link="Style Guide" />
          <ContactUs link="404 Not Found" />
          <ContactUs link="Password Protected" />
          <ContactUs link="Licences" />
          <ContactUs link="Changelog" />
        </FooterColumn>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
