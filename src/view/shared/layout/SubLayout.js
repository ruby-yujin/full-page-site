import React from 'react';
import styled from 'styled-components';
import SubVisual from './components/SubVisual';
import SubContent from './components/SubContent';
import Header from '../header/Header';
import Footer from '../Footer';

const SubLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <SubVisual />
      <SubContent>{children}</SubContent>
      <Footer className="default" />
    </Container>
  );
};

const Container = styled.div``;

export default SubLayout;
