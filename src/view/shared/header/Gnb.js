import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import LanguageMobile from './LanguageMobile';

const Gnb = ({ isActive, onClose }) => {
  return (
    <Container className={cn('Gnb', { isActive })}>
      <Logo>
        <Link to="/">
          <img src="/assets/img/common/logo.svg" className="pc-logo" alt="브릿지 인베스트먼트 로고" />
          <img src="/assets/img/common/logo_m.svg" className="m-logo" alt="브릿지 인베스트먼트 로고" />
        </Link>
      </Logo>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/investment">Investment</Link>
        </li>
        <li>
          <Link to="/notice/news">notice</Link>
        </li>
      </Nav>
      <LanguageMobile onClose={onClose} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background: #000 url('/assets/img/common/gnb_layer_bg.svg') center center/cover no-repeat;
  transition: all 0.4s;

  .isActive & {
    visibility: visible;
    opacity: 1;
  }
`;
const Logo = styled.h1`
  position: fixed;
  top: 40px;
  left: 100px;
  .m-logo {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    top: 28px;
    left: 33px;
    .pc-logo {
      display: none;
    }
    .m-logo {
      display: block;
    }
  }
`;

const Nav = styled.ul`
  li {
    font-size: 45px;
    font-weight: 500;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;

    a {
      position: relative;
      display: inline-block;
      color: #747474;
      text-align: center;
      text-transform: uppercase;

      &:before {
        content: '';
        position: absolute;
        height: 1px;
        transform: scaleX(0);
        transition: all 0.4s;
        top: 50%;
        margin-top: 2px;
        left: -15px;
      }

      &:hover {
        color: #ef8226;

        &:before {
          content: '';
          position: absolute;
          width: calc(100% + 30px);
          transform: scaleX(1);
          background: #ef8226;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    li {
      font-size: 34px;
      margin-bottom: 2rem;
    }
  }
`;

export default Gnb;
