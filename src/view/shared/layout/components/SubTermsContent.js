import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const SubTermsContent = ({ children }) => {
  return (
    <Container>
      <SubContentWrap>{children}</SubContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const SubContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  position: relative;
  background: #fff;
  padding: 160px 200px 350px;
  min-height: 1160px;
  @media (max-width: 1024px) {
    position: initial;
    min-height: auto;
    top: initial;
    padding: 120px 20px 80px;
  }
`;

export default SubTermsContent;
