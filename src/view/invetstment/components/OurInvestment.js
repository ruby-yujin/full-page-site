import React from 'react';
import styled from 'styled-components';

const OurInvestment = () => {
  return (
    <Container>
      <ContentsWrap>
        <SubText className="hidden-desktop">
          브릿지인베스트먼트는 신기술사업자에 <br />
          대한투자를 목적으로 설립된 신기술사업금융 전문회사입니다.
        </SubText>
        <Item className="img01">
          <ImgBox data-aos="fade-up" data-aos-duration="800">
            <img src="/assets/img/sub/investment01.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-duration="1200">
            신기술사업자에 대한 투자
          </MainText>
          <Text data-aos="fade-up" data-aos-duration="1500">
            신기술을 개발하거나 이를 응용하여 사업화하는 신기술 사업자에 대한 투자 <br />
            (주식, 메자닌 등)
          </Text>
        </Item>
        <Item className="img02">
          <ImgBox size={'md'} data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
            <img src="/assets/img/sub/investment02.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">
            신기술사업자를 위한 <br />
            사업 및 기술적 지원
          </MainText>
          <Text data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
            창업 초기 ~ IPO 준비 기업을 위한 경영 및 기술 지원, 컨설팅
          </Text>
        </Item>
        <Item className="img03">
          <ImgBox size={'md'} data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
            <img src="/assets/img/sub/investment03.jpg" alt="" />
          </ImgBox>
          <MainText data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
            신기술사업투자조합 <br />
            설립 및 운용
          </MainText>
          <Text data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
            신기술사업자를 대상으로 투자를 진행하는 조합(Fund) 설립 및 <br />
            자금관리운용
          </Text>
        </Item>
      </ContentsWrap>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (max-width: 1024px) {
  }
`;

const ContentsWrap = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Item = styled.div`
  &.img01 {
  }
  &.img02 {
    position: absolute;
    top: 300px;
    right: 0;
  }
  &.img03 {
    position: relative;
    top: 220px;
  }
  @media screen and (max-width: 1024px) {
    &.img01 {
      text-align: right;
    }
    &.img02,
    &.img03 {
      position: initial;
      top: initial;
      right: initial;
      text-align: right;
    }
  }
`;

const ImgBox = styled.div`
  width: ${(props) => (props.size === 'md' ? '480px' : '590px')};

  @media screen and (max-width: 1024px) {
    width: 100%;
    position: relative;
    margin-top: 40px;
    .img01 & img,
    .img03 & img {
      /* left: 0; */
      max-width: initial;
      width: 110%;
      margin-left: -30px;
    }
    .img02 & img {
      max-width: initial;
      width: 110%;
      margin-right: -30px;
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
  }
`;

const SubText = styled.div`
  font-size: 26px;
  line-height: 1.62;
  letter-spacing: -0.5px;
  color: #000;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
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
