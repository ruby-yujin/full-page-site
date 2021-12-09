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
  const onlyTextMotion = pageTitle.split('/')[1].split('');

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
          {
            // eslint-disable-next-line react/jsx-key
            subTitle.map((item) => {
              return <span key={item.code}>{item.code === onlyText ? item.subject : ''}</span>;
            })
          }
        </p>
        <h2>
          {
            // eslint-disable-next-line react/jsx-key
            onlyTextMotion.map((item) => {
              return <span>{item}</span>;
            })
          }
        </h2>
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
    span {
      opacity: 0;
      animation: fade-in 0.2s ease-in forwards;

      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
      }
      &:nth-child(5) {
        animation-delay: 0.6s;
      }
      &:nth-child(6) {
        animation-delay: 0.7s;
      }
      &:nth-child(7) {
        animation-delay: 0.8s;
      }
      &:nth-child(8) {
        animation-delay: 0.9s;
      }
      &:nth-child(9) {
        animation-delay: 1s;
      }
      &:nth-child(10) {
        animation-delay: 1.1s;
      }
    }

    @keyframes fade-in {
      from {
        transform: translateX(-2em);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
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
