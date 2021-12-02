import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';

import Gnb from './Gnb';
import Language from './Language';
import MenuButton from "./MenuButton";


const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleGnb = () => {
    setIsActive(v => !v);
  }

  return (
    <Container className={cn("Header", {isActive})}>
      <MainHeader>
        <Logo>
          <Link to="/">
            <img src="/assets/img/common/logo.svg" className="hidden-mobile" alt="브릿지 인베스트먼트 로고"/>
            <img src="/assets/img/common/logo_m.svg" className="hidden-desktop" alt="브릿지 인베스트먼트 로고"/>
          </Link>
        </Logo>
        <TopHeader>
          <Language/>
        </TopHeader>
        <MenuButton onClick={toggleGnb}/>
        <Gnb isActive={isActive}/>
      </MainHeader>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: none;

  &.IsMainHeader {
    position: fixed;
    background: #000;
  }
`;

const TopHeader = styled.div`
  display: flex;
  justify-content:flex-end;
  margin-left: auto;
`;

const MainHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  @media screen and (max-width:1024px) {
    height: 78px;
    padding:0 33px;
  }
`;

const Logo = styled.h1`
  position: relative;
  z-index: 1000;
`;


export default Header;
