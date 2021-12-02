import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useInViewRef } from 'rooks';

import { Overlay } from '../../../common/Layout.Styled';

const Section = ({ item }) => {
  const [sectionRef, inView] = useInViewRef(
    () => {
      // console.log('inVIEW');
    },
    { rootMargin: '-300px 0px' }
  );

  return (
    <Container className={cn({ inView })} ref={sectionRef}>
      <Background>
        <figure>
          <video src={item.src} autoPlay loop muted></video>
        </figure>
        <Overlay alpha={0.1} />
      </Background>
      <Contents>
        <Description>{item.description}</Description>
        <Title>{item.title}</Title>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
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
  width: 100%;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 58px;
  font-weight: bold;
  line-height: 1.2;
  transition: 1s 0.4s;
  transform: translateY(100px);
  opacity: 0;
  margin-top: 20px;
  .inView & {
    transform: none;
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.36;
  }
`;

const Description = styled.p`
  font-size: 26px;
  line-height: 2.19;
  letter-spacing: -0.87px;
  transition: 1s 0.5s;
  transform: translateY(100px);
  opacity: 0;
  .inView & {
    transform: none;
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: -0.5px;
  }
`;
export default Section;
