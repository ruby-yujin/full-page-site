import React from 'react';
import styled from 'styled-components';
import IrItemGrid from './IrItemGrid';
import Tab from './Tab';

const IrContent = () => {
  return (
    <Container>
      <Tab />
      <IrItemGrid />
    </Container>
  );
};

const Container = styled.div``;

export default IrContent;
