import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const SubVisual = () => {
  const { t } = useTranslation();
  const subTitle = t('subPage.subTitle', { returnObjects: true });
  const location = useLocation();
  const pageTitle = String(location.pathname);
  // const onlyText = pageTitle.replace("/",'');
  const onlyText = pageTitle.split('/')[1];

  const onHandleLoad = (e) => {
    const bgMotion = document.querySelector('.background');
    bgMotion.classList.add('loaded');
  };
  return (
    <Container>
      <Background className={cn('background')} onLoad={onHandleLoad}>
        <img src={`/assets/img/sub/${onlyText}_bg.jpg`} alt={`${onlyText} bg`} />
      </Background>
      <Title>
        <p>
          {subTitle.map((item) => {
            return <div key={item.code}>{item.code === onlyText ? item.subject : ''}</div>;
          })}
        </p>
        <h2>{onlyText}</h2>
      </Title>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 215px;
  }
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: #fff;
  top: -100px;
  p {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }

  h2 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px) {
    top: initial;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 34px;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    transform: translateZ(0) scale(1.1) rotate(0.1deg);
    transition: 1800ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &.loaded {
    img {
      transform: translateZ(0) scale(1) rotate(0deg);
    }
  }
`;

export default SubVisual;
