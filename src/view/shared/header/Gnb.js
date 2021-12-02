import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import LanguageMobile from './LanguageMobile';


const Gnb = ({isActive}) => {
  return (
    <Container className={cn("Gnb", {isActive})}>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Comany</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/investment">Investment</Link>
        </li>
        <li>
          <Link to="/notice">notice</Link>
        </li>
      </Nav>
      <LanguageMobile/>
    </Container>
  )
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
        transition: all .4s;
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
  @media screen and (max-width:1024px) {
    li{
      font-size:34px;
      margin-bottom: 2rem;
    }
  }
`;




export default Gnb;
