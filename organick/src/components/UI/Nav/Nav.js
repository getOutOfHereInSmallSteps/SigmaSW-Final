import React from 'react';

import styles from './Nav.module.scss';

import Logo from '../../Typography/Logo';
import Heading from '../../Typography/Heading';

import { Link, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ReactComponent as DownArrow } from '../../../svg/arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../../svg/search-icon.svg';
import { ReactComponent as CartIcon } from '../../../svg/cart-icon.svg';

import FlexContainer from '../FlexContainer';

const Nav = () => {
  const cartCounter = useSelector(state => state.cart.productsQuantity);

  return (
    <nav className="max-w-[160rem] mx-auto h-[15vh] flex justify-between">
      <Logo />

      <ul className="flex gap-12">
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

      <FlexContainer className="items-center">
        <div className={styles.search}>
          <input className={styles['search-input']} type="text" name="" id="" />
          <Link className={styles['btn']}>
            <SearchIcon />
          </Link>
        </div>
        <div className={styles.cart}>
          <Link to="form" className={styles['btn']}>
            <CartIcon />
          </Link>
          <p className="font-roboto text-[1.8rem] font-semibold text-color-primary-blue">
            Cart (
            <span className={cartCounter !== 0 && 'text-color-red'}>
              {cartCounter}
            </span>
            )
          </p>
        </div>
      </FlexContainer>
    </nav>
  );
};

export default Nav;
