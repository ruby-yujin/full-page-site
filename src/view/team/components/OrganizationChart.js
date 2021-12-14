import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const OrganizationChart = () => {
  const { t } = useTranslation();
  const teamText = t('team.colleague', { returnObjects: true });

  return (
    <Container data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200" data-aos-once="true">
      <ChartItem half>
        <Top color={'orange'}>{parse(teamText[0].ceo)}</Top>
        <Bottom>
          <strong>{parse(teamText[0].junhyukLee)}</strong>
          <span>{parse(teamText[0].managingPartner)}</span>
        </Bottom>
      </ChartItem>
      <ChartItem half>
        <Top color={'black'}>{parse(teamText[0].complianceOfficer)}</Top>
        <Bottom>
          <strong>{parse(teamText[0].aramLee)}</strong>
          <span>{parse(teamText[0].complianceOfficer)}</span>
        </Bottom>
      </ChartItem>
      <ChartItem color={'gray'} className="boxwrap">
        <Top>{parse(teamText[0].investmentDivison)}</Top>
        <Bottom className="box">
          <Item>
            <strong>{parse(teamText[0].jasonJung)}</strong>
            <span>{parse(teamText[0].director)}</span>
          </Item>
          <Item>
            <strong>{parse(teamText[0].paulLim)}</strong>
            <span>{parse(teamText[0].director)}</span>
          </Item>
          <Item>
            <strong>{parse(teamText[0].hyunhoCho)}</strong>
            <span>{parse(teamText[0].associate)}</span>
          </Item>
          <Item>
            <strong>{parse(teamText[0].ethanPark)}</strong>
            <span>{parse(teamText[0].analyst)}</span>
          </Item>
        </Bottom>
      </ChartItem>
      <ChartItem half>
        <Top>{parse(teamText[0].managementSupport)}</Top>
        <Bottom>
          <strong>{parse(teamText[0].soojinPark)}</strong>
          <span>{parse(teamText[0].principal)}</span>
        </Bottom>
      </ChartItem>
    </Container>
  );
};

const Container = styled.div``;

const ChartItem = styled.div`
  width: ${(props) => (props.half ? '600px' : '1200px')};
  margin: 0 auto 85px;
  height: 140px;
  position: relative;
  &:last-child {
    margin: 0 auto;
  }
  &:after {
    content: '';
    width: 1px;
    height: 85px;
    border-left: 1px dotted #979797;
    position: absolute;
    left: ${(props) => (props.half ? '299px' : '599px')};
    bottom: -85px;
  }
  &:last-child {
    &:after {
      content: none;
    }
  }
  @media screen and (max-width: 1600px) {
    width: ${(props) => (props.half ? '100%' : '100%')};
    height: auto;
    margin: 0 auto 30px;
    &:last-child {
      margin: 0 auto;
    }
    &:after {
      height: 30px;
      left: ${(props) => (props.half ? '49.9999%' : '49.9999%')};
      bottom: -30px;
      .boxwrap & {
        height: 200px !important;
      }
    }
  }
`;

const Top = styled.div`
  height: 40px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  background: ${(props) => (props.color === 'orange' ? '#f08226' : props.color === 'black' ? '#000' : '#d0d0d0')};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #e0e0e0;
  strong {
    display: block;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67;
  }
  span {
    display: block;
    color: #bbb;
    font-size: 15px;
  }
  &.box {
    flex-direction: initial;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1600px) {
    height: 80px;
    &.box {
      height: 160px;
    }
  }
`;

const Item = styled.div`
  width: 25%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  &:last-child {
    border-right: none;
  }
  @media screen and (max-width: 1600px) {
    width: 50%;
    height: 80px;
    border-right: none;
    &:nth-child(odd) {
      border-right: 1px solid #e0e0e0;
    }
    &:nth-child(3),
    &:nth-child(4) {
      border-top: 1px solid #e0e0e0;
    }
  }
`;
export default OrganizationChart;
