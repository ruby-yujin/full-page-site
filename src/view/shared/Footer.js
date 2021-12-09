import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import BtnMailto from './BtnMailto';

const Footer = ({ className }) => {
  return (
    <Container className={className}>
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

const InfoBox = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  p {
    margin: 0 10px;
    font-size: 12px;
    &:first-child {
      width: 100%;
      margin-bottom: 10px;
    }
    &.copy {
      width: 100%;
      margin: 10px 0 0;
      text-transform: uppercase;
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
      margin: 0 5px 8px;
      &.email {
        width: 100%;
      }
    }
  }
`;

export default Footer;
