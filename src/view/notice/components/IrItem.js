import React from 'react';
import styled from 'styled-components';

const IrItem = ({ item }) => {
  return (
    <Container>
      <span>{item.date}</span>
      <p>
        {item.title}
        <span>{item.period}</span>
      </p>

      <DownBtn>
        <i className="icon-download-icon"></i>
      </DownBtn>
    </Container>
  );
};

const Container = styled.div`
  height: 250px;
  padding: 40px;
  border: solid 1px #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #ef8226;
  }
  p {
    font-size: 18px;
    color: #000;
    line-height: 1.44;
    span {
      font-size: 18px;
      color: #000;
    }
  }
  button {
    align-self: flex-end;
    i {
      font-size: 24px;
      color: #000;
    }
  }
  &:hover {
    border-color: #ef8226;
    background-color: #ef8226;
    span,
    p {
      color: #fff;
    }
    button {
      i {
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    height: 150px;
    padding: 20px;
    span {
      font-size: 14px;
    }
    p {
      font-size: 16px;
      white-space: pre;
      span {
        display: block;
        font-size: 13px;
        color: #222;
      }
    }
  }
`;

const DownBtn = styled.button``;

export default IrItem;
