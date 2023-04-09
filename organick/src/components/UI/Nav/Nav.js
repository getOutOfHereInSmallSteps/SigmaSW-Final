import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as DownArrow } from '../../../svg/arrow-down.svg';

import Logo from '../../Typography/Logo';
import Flex from '../Flex';
import NavSearch from './NavSearch';
import NavCart from './NavCart';
import MenuBurger from './MenuBurger';

const Nav = () => {
  return (
    <nav className="mx-auto flex h-[15vh] max-w-[170rem] items-center justify-between px-4">
      <Logo />

      <ul className="flex gap-12 max-md:hidden">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="about">
          About
        </NavLink>
        <NavLink className="navlink">
          Pages <DownArrow />
        </NavLink>
        <NavLink className="navlink" to="shop">
          Shop
        </NavLink>
        <NavLink className="navlink" to="projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="news">
          News
        </NavLink>
      </ul>

      <Flex className="items-center gap-4">
        <NavSearch />
        <NavCart />
      </Flex>

      <MenuBurger className="hidden max-md:block" />
    </nav>
  );
};

export default Nav;
