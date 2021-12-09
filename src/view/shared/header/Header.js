import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import cn from 'classnames';

import Gnb from './Gnb';
import Language from './Language';
import MenuButton from './MenuButton';
import { LocaleChoose } from './locale';

const Header = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [isLangsOpen, setIsLangeOpen] = useState(false);

  const toggleGnb = () => {
    setIsActive((v) => !v);
  };

  useEffect(() => {
    isActive && setIsActive(false);
  }, [location]);

  return (
    <Container className={cn('Header', { isActive })}>
      <MainHeader>
        <Logo>
          <Link to="/">
            <img src="/assets/img/common/logo.svg" className="pc-logo" alt="브릿지 인베스트먼트 로고" />
            <img src="/assets/img/common/logo_m.svg" className="m-logo" alt="브릿지 인베스트먼트 로고" />
          </Link>
        </Logo>
        <TopHeader>
          <Language />
        </TopHeader>
        <MenuButton onClick={toggleGnb} />
        <Gnb isActive={isActive} />
      </MainHeader>
    </Container>
  );
};

const Container = styled.header`
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
  justify-content: flex-end;
  margin-left: auto;
`;

const MainHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  @media screen and (max-width: 1024px) {
    height: 78px;
    padding: 0 33px;
  }
`;

const Logo = styled.h1`
  position: relative;
  z-index: 1000;
  .m-logo {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .pc-logo {
      display: none;
    }
    .m-logo {
      display: block;
    }
  }
`;

export default Header;
