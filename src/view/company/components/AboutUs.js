import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import Aos from 'aos';
import 'aos/dist/aos.css';
import BtnMailto from '../../shared/BtnMailto';

const AboutUs = () => {
  const { t } = useTranslation();
  const companyText = t('company.text', { returnObjects: true });
  const commonInfo = t('common.info', { returnObjects: true });

  console.log(companyText);
  return (
    <Container>
      <VisualCompany>
        <Top>
          <ImgLg data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
            <img src="/assets/img/sub/company_01.jpg" alt="" />
          </ImgLg>
          <Text data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1400">
            <h3>{parse(companyText[0].title)}</h3>
            <p>{parse(companyText[0].description)}</p>
          </Text>
        </Top>
        <Bottom>
          <ImgSm data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1600">
            <img src="/assets/img/sub/company_02.jpg" alt="" />
          </ImgSm>
          <ImgSm data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2200">
            <img src="/assets/img/sub/company_03.jpg" alt="" />
          </ImgSm>
          <ImgSm data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000">
            <img src="/assets/img/sub/company_04.jpg" alt="" />
          </ImgSm>
        </Bottom>
      </VisualCompany>
      <CompanyMap data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
        <img
          src="/assets/img/sub/company_map.jpg"
          alt="브릿지 인베스트먼트 위치"
          className="pc-map"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1600"
        />
        <img
          src="/assets/img/sub/company_map_m.jpg"
          alt="브릿지 인베스트먼트 위치"
          className="m-map"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1600"
        />
        <table data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2400">
          <colgroup>
            <col width="28%" />
            <col width="72%" />
          </colgroup>
          <tbody>
            <tr>
              <th>{parse(commonInfo[0].address)}</th>
              <td>{parse(commonInfo[0].companyAddress)}</td>
            </tr>
            <tr>
              <th>{parse(commonInfo[0].tel)}</th>
              <td>02-555-5191</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>
                {' '}
                <BtnMailto to="#" label="admin@brdginv.com" mailto="mailto:admin@brdginv.com" />
              </td>
            </tr>
          </tbody>
        </table>
      </CompanyMap>
    </Container>
  );
};

const Container = styled.div``;

const VisualCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1600px) {
    flex-wrap: wrap-reverse;
  }
`;
const ImgLg = styled.div`
  width: 590px;
  margin-bottom: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-bottom: 4%;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ImgSm = styled.div`
  width: 32%;
  @media screen and (max-width: 1023px) {
    &:nth-child(1),
    &:nth-child(2) {
      width: 48%;
    }
    &:last-child {
      width: 100%;
      margin-top: 4%;
      img {
        max-width: auto;
        width: 100%;
      }
    }
  }
`;

const Text = styled.div`
  margin-left: 80px;
  h3 {
    color: #222;
    font-size: 46px;
    line-height: 1.24;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    color: #747474;
    line-height: 1.75;
  }
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    margin-left: 0;
    p {
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 1023px) {
    margin-left: 0;
    h3 {
      font-size: 26px;
      letter-spacing: -0.5px;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 40px;
    }
  }
`;

const CompanyMap = styled.div`
  margin-top: 150px;
  .m-map {
    display: none;
  }
  table {
    width: 800px;
    margin: 50px auto 0;
    border-top: 1px solid #333;
    th {
      height: 50px;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 500;
      color: #222;
      border-bottom: 1px solid #ddd;
      text-align: left;
      padding-left: 50px;
    }
    td {
      height: 50px;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 500;
      color: #747474;
      border-bottom: 1px solid #ddd;
      text-align: left;
      a {
        display: inline-block;
        color: #747474;
      }
    }
  }
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    margin-top: 80px;

    table {
      width: 90%;
      margin: 30px auto 0;
      th {
        padding: 0 10px;
      }
      th,
      td {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    text-align: center;
    .m-map {
      display: block;
      margin: 0 auto;
    }
    .pc-map {
      display: none;
    }
    table {
      width: 100%;
      th {
        padding-left: 10px;
      }
    }
  }
`;

export default AboutUs;
