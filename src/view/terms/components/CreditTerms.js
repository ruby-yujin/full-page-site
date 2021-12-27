import React from 'react';
import styled from 'styled-components';

const CreditTerms = () => {
  return (
    <Container>
      <TermsTitle>신용정보활용체제</TermsTitle>
      <TermsSubject>
        「신용정보의 이용 및 보호에 관한 법률」 제31조에 의거, 당사가 관리하고 있는 신용정보의 활용체제에 대하여 다음과
        같이 공시합니다.
      </TermsSubject>
      <TermsListWrap>
        <TermsTit>제 1 조 (관리, 수집하는 신용정보의 종류 및 이용목적)</TermsTit>
        <ul>
          <li>① 관리, 수집하는 신용정보의 종류</li>
          <li>
            1. 식별정보: 개인의 성명, 주민등록번호(외국인등록번호, 국내거소신고번호 등 포함), 여권번호, 운전면허번호,
            성별, 국적, 주소, 연락처, 직장정보, 개인사업자 및 법인의 상호, 사업자 ⦁ 법인 등록번호, 대표자 성명, 소재지
            등
          </li>
          <li>
            2. 거래정보: 본 거래 이전 및 이후의 대출, 보증, 담보제공, 신용카드, 할부금융 등 상거래 관련 거래의 종류,
            기간, 금액 및 한도 등
          </li>
          <li>3. 신용도판단 정보 (연체, 부도, 대위변제, 기타 신용질서 문란행위 관련 금액, 발생·해소 시기 등)</li>
          <li>4. 신용거래 능력정보 (재산, 채무, 소득의 총액, 납세실적 등)</li>
          <li>
            5. 기타 공공기관 보유정보 (개인회생, 파산, 면책, 채무불이행자 등재 등 법원의 재판·결정 정보, 체납정보,
            주민등록 관련정보, 사회보험·공공요금 관련정보 등)
          </li>
          <li>6. 기타 본인의 신용을 판단할 수 있는 정보 (신용등급, 신용조회, 채무재조정약정 등)</li>
          <li>7. 본 계약 이전 및 이후의 대출 세부내역, 관련인 정보, 자체기준에 따라 책정한 신용도평가내 용 등</li>
          <li>8. 본인이 대표자로 있는 가맹점의 기업정보(사업자번호, 상호, 업종코드 등), 매출정보 등</li>
          <li>9. 기타 관련하여 본인이 제공한 정보</li>
          <li>② 이용목적</li>
          <li>
            1. (금융)거래관계의 설정, 유지, 이행, 관리(통계, 모형개발 등 포함), 서비스 제공, 법령상 의무이행, 신용질서
            문란행위 조사, 분쟁처리, 민원처리, 본인여부 확인 등
          </li>
          <li>2. 기타 동법 및 관련 법률의 규정에서 정한 경우</li>
          <li></li>
        </ul>
      </TermsListWrap>
    </Container>
  );
};

const Container = styled.div``;

const TermsTitle = styled.h2`
  font-size: 45px;
  font-weight: 500;
  color: #000;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    font-size: 26px;
    letter-spacing: -0.5px;
    color: #222;
    margin-bottom: 20px;
  }
`;

const TermsSubject = styled.p`
  font-size: 26px;
  line-height: 1.54;
  letter-spacing: -0.5px;
  color: #000;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 18px;
    letter-spacing: -0.35px;
    margin-bottom: 20px;
  }
`;

const TermsListWrap = styled.div`
  &:last-child {
    margin-top: 30px;
  }
  ul {
    margin-top: 10px;
    li {
      font-size: 16px;
      line-height: 1.75;
      letter-spacing: -0.5px;
      color: #747474;
    }
  }
  @media (max-width: 1024px) {
    &:last-child {
      margin-top: 10px;
    }
    ul {
      margin-top: 2px;
      li {
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: -0.44px;
      }
    }
  }
`;

const TermsTit = styled.strong`
  display: block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.75;
  letter-spacing: -0.5px;
  color: #333;
  border-bottom: 1px solid #ededed;
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 2;
    letter-spacing: -0.44px;
    border-bottom: none;
  }
`;
export default CreditTerms;
