import React from 'react';
import styled from 'styled-components';

import SectionList from '../components/SectionList';

const MainContainer = () => (
  <Container>
    <SectionList />
  </Container>
);

const Container = styled.div`
  overflow-x: hidden;
`;

export default MainContainer;
