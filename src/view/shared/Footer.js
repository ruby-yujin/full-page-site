import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import BtnMailto from './BtnMailto';

const Footer = ({ className }) => {
  return (
    <Container className={className}>
      <TermLinkWrap>
        <TermLink to="/terms/privacy">개인정보처리방침</TermLink>
        <TermLink to="/terms/credit">신용정보활용체제</TermLink>
      </TermLinkWrap>
      <InfoBox>
        <p>서울특별시 강남구 테헤란로 207, 13층 </p>
        <p>Tel / 02-555-5191</p>
        <p>Fax / 02-6081-8183</p>
        <p className="email">
          Email /
          <BtnMailto to="#" label="admin@brdginv.com" mailto="mailto:admin@brdginv.com" />
        </p>
        <p className="copy">Copyright © BRIDGE INVESTMENT All rights reserved</p>
      </InfoBox>
    </Container>
  );
};

const Container = styled.footer`
  height: 180px;
  display: ${(props) => (props.className === 'show' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #747474;
  background-color: #000;
  &.default {
    display: flex;
    width: 100%;
  }
  &.show {
    width: 100vw;
  }
`;

const TermLinkWrap = styled.div`
  margin-bottom: 20px;
`;

const TermLink = styled(Link)`
  font-size: 16px;
  color: #747474;
  line-height: 1.63;
  padding: 0 20px;
  position: relative;
  &:first-child {
    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 2px;
      width: 1px;
      height: 16px;
      background: #333;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 0 20px;
    &:first-child {
      &:after {
        width: 1px;
        height: 12px;
      }
    }
  }
`;

const InfoBox = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  p {
    margin: 0 10px;
    font-size: 16px;

    &.copy {
      width: 100%;
      margin: 10px 0 0;
      text-transform: uppercase;
      font-size: 14px;
    }
    a {
      display: inline-block;
      color: #747474;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 100%;
    p {
      font-size: 12px;
      margin: 0 5px 8px;
      &.email {
        width: 100%;
      }
      &:first-child {
        width: 100%;
        margin-bottom: 10px;
      }
      &.copy {
        font-size: 10px;
      }
    }
  }
`;

export default Footer;
