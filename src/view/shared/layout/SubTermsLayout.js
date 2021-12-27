import React from 'react';
import styled from 'styled-components';
import SubTermsContent from './components/SubTermsContent';
import Header from '../header/Header';
import Footer from '../Footer';

const SubTermsLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <SubTermsContent>{children}</SubTermsContent>
      <Footer className="default" />
    </Container>
  );
};

const Container = styled.div``;

export default SubTermsLayout;
