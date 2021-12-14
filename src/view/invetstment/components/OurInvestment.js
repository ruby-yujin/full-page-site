import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const OurInvestment = () => {
  const { t } = useTranslation();
  const investmentText = t('investment.text', { returnObjects: true });

  return (
    <Container>
      <ContentsWrap>
        <SubText
          className="hidden-desktop"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          data-aos-once="false"
        >
          {parse(investmentText[2].title)}
        </SubText>
        <Item className="img01">
          <ImgBox data-aos="fade-up" data-aos-delay="700" data-aos-duration="800" data-aos-once="true">
            <img src="/assets/img/sub/investment01.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-once="true">
            {parse(investmentText[0].title)}
          </MainText>
          <Text data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" data-aos-once="true">
            {parse(investmentText[0].description)}
          </Text>
        </Item>
        <Item className="img02">
          <ImgBox size={'md'} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800" data-aos-once="true">
            <img src="/assets/img/sub/investment02.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800" data-aos-once="true">
            {parse(investmentText[3].title)}
          </MainText>
          <Text data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000" data-aos-once="true">
            {parse(investmentText[3].description)}
          </Text>
        </Item>
        <Item className="img03">
          <SubText className="pc" data-aos="fade-up" data-aos-delay="900" data-aos-duration="500" data-aos-once="true">
            {parse(investmentText[2].title)}
          </SubText>
          <ImgBox size={'md'} data-aos="fade-up" data-aos-delay="1100" data-aos-duration="500" data-aos-once="true">
            <img src="/assets/img/sub/investment03.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-delay="1200" data-aos-duration="500" data-aos-once="true">
            {parse(investmentText[1].title)}
          </MainText>
          <Text data-aos="fade-up" data-aos-delay="1400" data-aos-duration="500" data-aos-once="true">
            {parse(investmentText[1].description)}
          </Text>
        </Item>
      </ContentsWrap>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ContentsWrap = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`;

const Item = styled.div`
  &.img01 {
    width: 49%;
    float: left;
    max-width: 590px;
  }
  &.img02 {
    width: 48%;
    float: right;
    margin-top: 250px;
    max-width: 480px;
  }
  &.img03 {
    width: 50%;
    float: left;
    margin-top: 220px;
    max-width: 480px;
  }
  @media screen and (max-width: 1024px) {
    &.img01,
    &.img03 {
      width: 100%;
      text-align: right;
      max-width: 100%;
    }
    &.img02 {
      width: 100%;
      float: left;
      text-align: left;
      max-width: 100%;
      margin-top: 40px;
    }
    &.img03 {
      margin-top: 40px;
    }
  }
`;

const ImgBox = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
    position: relative;

    .img01 & img,
    .img03 & img {
      max-width: initial;
      width: 105%;
      margin-left: -20px;
    }
    .img02 & img {
      max-width: initial;
      width: 105%;
      margin-right: -20px;
    }
    &.align-right {
      margin-right: 0;
    }
  }
`;

const MainText = styled.div`
  margin-top: 30px;
  font-size: 36px;
  line-height: 1.39;
  letter-spacing: -0.5px;
  color: #222;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

const SubText = styled.div`
  font-size: 26px;
  line-height: 1.62;
  letter-spacing: -0.5px;
  color: #000;
  &.pc {
    width: 480px;
    position: absolute;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    &.pc {
      width: 460px;
    }
  }
  @media screen and (max-width: 1024px) {
    &.pc {
      display: none;
    }
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.5px;
  color: #747474;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export default OurInvestment;
