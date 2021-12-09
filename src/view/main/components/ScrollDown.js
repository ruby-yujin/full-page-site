import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './scroll_down.json';

const ScrollDown = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container className="hidden-mobile">
      <Lottie options={defaultOptions} height={68} width={68} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 65px;
  left: 50%;
  margin-left: -34px;
`;

export default ScrollDown;
