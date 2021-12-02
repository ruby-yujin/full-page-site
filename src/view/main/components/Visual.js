import React from 'react';

import styled from 'styled-components';
import cn from 'classnames';
import { useInViewRef } from 'rooks';
import ScrollDown from './ScrollDown';

const Visual = ({ item }) => {
  const [sectionRef, inView] = useInViewRef(
    () => {
      // console.log('inVIEW');
    },
    { rootMargin: '-300px 0px' }
  );

  return (
    <Container className={cn({ inView })} ref={sectionRef}>
      <VisualInner>
        <Contents>
          <p>{item.subTitle}</p>
          <h3>{item.title}</h3>
        </Contents>
        <Background>
          <figure>
            <video src="/assets/img/main/01.mp4" autoPlay loop muted></video>
          </figure>
        </Background>
        <ScrollDown className="hidden-mobile" />
      </VisualInner>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  white-space: pre-wrap;
`;

const VisualInner = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  figure {
    width: 100% !important;
    height: 100% !important;
    img,
    video {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  p {
    font-size: 26px;
    line-height: 2.19;
    transition: 1s 0.5s;
    transform: translateY(100px);
    opacity: 0;
    .inView & {
      transform: none;
      opacity: 1;
    }
  }

  h3 {
    font-size: 60px;
    font-weight: bold;
    line-height: 1.5;
    transition: 1s 0.4s;
    transform: translateY(100px);
    opacity: 0;
    margin-top: 20px;
    .inView & {
      transform: none;
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 5%;
    text-align: center;
    p {
      font-size: 16px;
      line-height: 1.88;
      letter-spacing: -0.5px;
    }
    h3 {
      font-size: 30px;
      margin-top: 10px;
      line-height: 1.2;
    }
  }
`;

export default Visual;
