import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';

import Logo from '../assets/logo.png';

import { HeaderSection } from '../styles/Header.styled';
import Container from '../styles/Container.styled';

import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () => {
  const cartItems = useSelector((state) => state.cart); // from store.js reducer.cart
  return (
    <HeaderSection id="header">
      <Container className="header-wrapper">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navi">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/wish-lists">위시 리스트 [{cartItems.length}]</Link>
          </li>
          <li className="google-login">로그인</li>
        </ul>
        <div className="menu-icon">
          <button>
            <RiMenu3Line />
          </button>
        </div>
      </Container>
    </HeaderSection>
  );
};

export default Header;
