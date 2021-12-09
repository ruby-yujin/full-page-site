import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IrItem = ({ item }) => {
  return (
    <Container to={item.data.fileSrc} download target="_blank">
      <span>{item.data.date}</span>
      <p>
        {item.data.title}
        <span>{item.data.period}</span>
      </p>

      <DownBtn>
        <i className="icon-download-icon"></i>
      </DownBtn>
    </Container>
  );
};

const Container = styled(Link)`
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
    margin: 5px 0;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      white-space: initial;
      span {
        display: block;
        font-size: 13px;
        line-height: 1.69;
        color: #222;
      }
    }
  }
`;

const DownBtn = styled.button``;

export default IrItem;
