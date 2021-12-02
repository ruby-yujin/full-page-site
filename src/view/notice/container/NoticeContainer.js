import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SubLayout from '../../shared/layout/SubLayout';
import IrContent from '../components/IrContents';
import NoticeContents from '../components/NoticeContents';
import Tab from '../components/Tab';

const NoticeContainer = () => {
  const params = useParams();
  // console.log(params);

  return (
    <Container>
      <SubLayout>
        <Tab />
        <NoticeContents />
      </SubLayout>
    </Container>
  );
};

const Container = styled.div``;

export default NoticeContainer;
