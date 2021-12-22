import React from 'react';
import styled from 'styled-components';

export default function MenuButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 2000;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #fff;
  display: block;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  .isActive & {
    background: #fff;
  }

  & + & {
    margin-top: calc((20px - 6px) / 2);
  }

  &:nth-child(1) {
    .isActive & {
      transform: translateY(6px) rotate(45deg);
    }
  }

  &:nth-child(2) {
    .isActive & {
      margin-top: 0;
      height: 0;
    }
  }

  &:nth-child(3) {
    .isActive & {
      transform: translateY(4px) rotate(-45deg);
      margin-top: 0;
    }
  }
`;
