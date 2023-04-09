import React from 'react';

import { ReactComponent as InstagramLogo } from '../../../svg/Instagram.svg';
import { ReactComponent as FacebookLogo } from '../../../svg/Facebook.svg';
import { ReactComponent as TwitterLogo } from '../../../svg/Twitter.svg';
import { ReactComponent as PinterestLogo } from '../../../svg/Pinterest.svg';

import Logo from '../../Typography/Logo';
import Paragraph from '../../Typography/Paragraph';
import FlexContainer from '../FlexContainer';
import FooterCopyright from './FooterCopyright';
import FooterCol from './FooterCol';

const Footer = () => {
  return (
    <footer>
      <FlexContainer className="mb-[12rem] max-w-[140rem] items-stretch justify-between  max-lg:flex-col max-lg:items-start max-lg:items-center max-lg:gap-20">
        <FooterCol
          heading="Contact us"
          className="border-r-gray-500 border-l-0 border-r text-right max-lg:border-none max-lg:text-left"
        >
          <li>
            <Paragraph className="font-[700]">Email</Paragraph>
            <Paragraph>needhelp@Organia.com</Paragraph>
          </li>
          <li>
            <Paragraph className="font-[700]">Phone</Paragraph>

            <Paragraph>666 888 888</Paragraph>
          </li>
          <li>
            <Paragraph className="font-[700]">Address</Paragraph>

            <Paragraph>88 road, borklyn street, USA</Paragraph>
          </li>
        </FooterCol>

        <div className="flex flex-col items-center ">
          <Logo className="mb-[2.4rem]" />
          <Paragraph className="mb-[5rem] max-w-[50rem] text-center">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </Paragraph>

          <div className="flex gap-8">
            <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-color-primary-green-tint">
              <InstagramLogo />
            </div>
            <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-color-primary-green-tint">
              <FacebookLogo />
            </div>
            <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-color-primary-green-tint">
              <TwitterLogo />
            </div>
            <div className="flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-color-primary-green-tint">
              <PinterestLogo />
            </div>
          </div>
        </div>

        <FooterCol
          heading="Utility Pages"
          className="border-l-gray-500 border-l border-r-0 text-left max-lg:border-none"
        >
          <li>
            <Paragraph>Style Guide</Paragraph>
          </li>
          <li>
            <Paragraph>404 Not Found</Paragraph>
          </li>
          <li>
            <Paragraph>Password Protected</Paragraph>
          </li>
          <li>
            <Paragraph>Licenses</Paragraph>
          </li>
          <li>
            <Paragraph>Changelog</Paragraph>
          </li>
        </FooterCol>
      </FlexContainer>
      <hr className="mb-[1.6rem] w-full border border-solid opacity-10" />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
