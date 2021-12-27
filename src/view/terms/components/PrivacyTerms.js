import React from 'react';
import styled from 'styled-components';

const PrivacyTerms = () => {
  return (
    <Container>
      <TermsTitle>개인정보처리방침</TermsTitle>
      <TermsSubject>
        ㈜브릿지인베스트먼트 (이하 ‘회사’)는 개인정보보호법 제30조에 따라 정보주체의 개인정보 보호 및 권익을 보호하고
        개인정보와 관련된 정보주체의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 수립하여 운영하고
        있습니다.
      </TermsSubject>
      <TermsListWrap>
        <TermsTit>제 1 조 (개인정보의 수집 및 이용 목적)</TermsTit>
        <ul>
          <li>
            회사는 개인정보를 다음의 목적을 위하여 처리하며, 다음의 목적 이외의 용도로는 개인정보를 사용하지 않습니다.
            이용 목적이 변경되는 경우에는 「개인정보보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
            예정입니다.
          </li>
          <li>1. 금융거래 관계 관련</li>
          <li>
            가. 금융거래와 관련하여 신용조회회사 또는 신용정보 집중기관에 대한 개인정보의 조회, 금융거래 관계의 설정
            여부의 판단, 금융거래 관계의 설정·유지·이행·관리, 금융사고 조사, 분 쟁 해결, 민원 처리 및 법령상 의무이행
            등의 목적
          </li>
          <li>
            나. 금융거래라 함은 여신금융회사의 고유업무 (신기술사업금융 등) 및 「여신전문금융업법」및 동법 시행령 상의
            관련 부수업무를 의미
          </li>
          <li>2. 재화 또는 서비스 제공</li>
          <li>가. 물품배송, 서비스 제공, 계약서·청구서 발송, 맞춤서비스 제공, 본인인증, 연령인증 등을 목적</li>
          <li>3. 직원채용, 인사관리 및 계열회사 임직원 정보교류 등</li>
          <li>가. 직원채용, 인사관리, 계열회사 임직원 정보교류 등을 목적</li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 2 조 (수집, 처리하는 개인정보의 항목 및 수집 방법)</TermsTit>
        <ul>
          <li>① 회사는 정보주체와의 거래관계를 통해 동의를 받아 개인정보를 수집합니다.</li>
          <li>② 회사가 정보주체의 동의를 받아 수집, 처리하는 개인정보의 항목은 다음과 같습니다.</li>
          <li>1. 고유식별정보: 주민등록번호 (또는 외국인 등록번호, 여권번호, 운전면허번호)</li>
          <li>2. 개인식별정보: 성명, 집(직장) 주소, 전자우편주소, 연락처, 직업 등</li>
          <li>
            3. 금융거래정보: 투자자정보, 계약조건, 기타 거래관계의 설정·유지·이행·관리를 위한 상담, 투자관리 등을 통해
            생성되는 정보 등 업무수행을 위해 필요한 정보
          </li>
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

export default PrivacyTerms;
