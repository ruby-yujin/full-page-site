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
            <ul className="ul-indent">
              <li>
                1. 식별정보: 개인의 성명, 주민등록번호(외국인등록번호, 국내거소신고번호 등 포함), 여권번호,
                운전면허번호, 성별, 국적, 주소, 연락처, 직장정보, 개인사업자 및 법인의 상호, 사업자 ⦁ 법인 등록번호,
                대표자 성명, 소재지 등
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
            </ul>
          </li>

          <li>② 이용목적</li>
          <li>
            <ul className="ul-indent">
              <li>
                1. (금융)거래관계의 설정, 유지, 이행, 관리(통계, 모형개발 등 포함), 서비스 제공, 법령상 의무이행,
                신용질서 문란행위 조사, 분쟁처리, 민원처리, 본인여부 확인 등
              </li>
              <li>2. 기타 동법 및 관련 법률의 규정에서 정한 경우</li>
            </ul>
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 2 조 (신용정보의 보유 및 이용기간)</TermsTit>
        <p>
          회사는 원칙적으로 정보주체와의 금융거래 종료일로부터 5년까지 정보주체의 신용정보를 보유, 이용합니다. 단,
          금융거래 종료일 이후에는 사전에 동의를 받은 경우, 「신용정보법」, 상법 등 관련법규에 의하여 보존할 필요성이
          있는 경우 또는 금융사고 조사, 분쟁해결, 민원처리, 기타 법령상 의무이행을 위해서만 신용정보를 보유, 이용합니다.
        </p>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 3 조 (신용정보의 파기 절차 및 방법)</TermsTit>
        <ul>
          <li>
            ① 회사는 신용정보 보유기간의 경과, 처리목적 달성 등 신용정보가 불필요하게 되었을 때에는 지체 없이 해당
            신용정보를 파기합니다.
          </li>
          <li>
            ② 정보주체로부터 동의 받은 신용정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구 하고 다른 법령에
            따라 신용정보를 계속 존속하여야 하는 경우에는 해당 신용정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를
            달리하여 보존합니다.
          </li>
          <li>③ 신용정보 파기의 절차 및 방법은 다음과 같습니다.</li>
          <li>
            <ul className="ul-indent">
              <li>
                1. 파기절차 가. 금융거래 등을 위해 제공된 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의 한
                정보보호 사유에 따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.
              </li>
              <li>
                2. 파기방법 가. 종이에 출력된 신용정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. 나. 전자적 파일
                형태로 저장된 신용정보는 복원이 불가능한 방법으로 영구 삭제됩니다.
              </li>
            </ul>
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 4 조 (신용정보의 제3자 제공 등)</TermsTit>
        <ul>
          <li>
            ① 회사는 정보주체의 동의가 있거나, 관련법령의 규정에 의한 경우를 제외하고는 어떠한 경우에 도 본 처리방침
            상의 신용정보의 수집항목 및 이용목적에서 고지한 범위를 넘어 정보주체의 신용정보를 이용하거나 제3자에게
            제공하지 않습니다.
          </li>
          <li>
            ② 정보주체의 신용정보를 제공하거나 공유하는 경우에는 사전에 귀하에게 제공하는 신용정보의 종류, 제공 대상,
            제공받는 자의 이용목적등에 대해 개별적으로 전자우편 또는 서면을 통해 고 지한 후 이에 대한 동의를
            구합니다.다만, 다음 각호의 경우에는 예외로 합니다.
          </li>
          <li>
            <ul className="ul-indent">
              <li>1. 정보주체가 사전에 동의한 경우</li>
              <li>
                2. 「금융실명거래 및 비밀보장에 관한 법률」, 「신용정보의 이용 및 보호에 관한 법률」, 「금융
                지주회사법」, 「전기통신기본법」, 「전기통신사업법」, 「지방세법」, 「소비자보호법」, 「한국은행 법」,
                「형사소송법」 등 법령의 규정에 의거하여 제출을 요구하는 공공기관 및 신용정보원 등
              </li>
              <li>3. 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              <li>
                4. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여
                제공하는 경우
              </li>
            </ul>
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 5 조 (신용정보처리 위탁 내용 및 수탁자)</TermsTit>
        <p>
          회사는 현재 신용정보처리를 위탁하여 처리하지 않습니다. 그러나 향후 정보주체를 위한 서비스 이행 등을 위하여
          외부 전문 업체에 신용정보의 처리를 위탁하는 경우, 신용정보보호 관련 지시 엄수, 신용정보에 관한 무단 이용 등
          금지 및 사고 시의 책임부담 등을 명확히 규정한 위탁계약을 체결하고, 수탁자 명을 본 활용체제 등을 통해
          공지하도록 하겠습니다.
        </p>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 6 조 (신용정보주체의 권리와 그 행사 방법)</TermsTit>
        <ul>
          <li>
            ① 개인신용정보 제공 동의 철회 <br /> 개인인 신용정보주체는 개인신용평가회사, 개인사업자신용평가회사 또는
            신용정보집중기관에 제공하여 개인의 신용도 등을 평가하기 위한 목적 외의 목적으로 행한 개인신용정보 제공
            동의를 동의 철회의 대상 및 내용 등을 특정하여 회사의 홈페이지, 유무선통신, 서면, 그 밖에 회사의 사무실 등을
            방문하여 동의 철회서를 제출하는 방법 등으로 철회할 수 있습니다. 단, 신용주체의 신용정보 제공은 회사와의
            계약체결 및 거래관계를 위해 필수적인 부분이므로, 신용정보 제공 동의를 철회한 경우 금융거래관계의 설정 및
            유지가 불가능함을 알려드립니다.
          </li>
          <li>
            ② 신용정보 열람 및 정정청구권 <br />
            신용정보주체는 본인임을 확인 받아 신용정보의 교부 또는 열람을 청구할 수 있으며, 본인의 신용정보가 사실과
            다를 경우에는 정정을 청구할 수 있습니다.
          </li>
          <li>
            ③ 신용정보제공사실의 통보 요구권 <br />
            신용정보주체는 최근 3년간 본인에 관한 신용정보를 제공한 내역을 통보하도록 요구할 수 있습니다.
          </li>
          <li>
            ④ 개인신용정보의 삭제 요구 <br />
            신용정보주체는 법령에서 따로 정하는 경우를 제외하고, 금융거래 등 상거래관계가 종료되고 대통령령으로 정하는
            기간(금융거래 등 상거래관계의 설정 및 유지 등에 필수적인 개인정보의 경우 5년, 그 외의 개인신용정보의 경우
            3개월)이 경과한 경우 개인신용정보의 삭제를 요구할 수 있습니다.
          </li>
          <li>
            ⑤ 연락중지 청구 <br />
            개인인 신용정보주체는 회사가 상품이나 용역을 소개하거나 구매를 권유할 목적으로 연락하는 경우 연락중지의
            청구의 대상 및 내용을 특정하여 제 1항의 방법으로 연락을 중지할 것을 청구할 수 있습니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 7 조 (신용정보관리 및 보호 관련 고충 처리담당자)</TermsTit>
        <ul>
          <li>1. 신용정보 관리·보호인: ㈜브릿지인베스트먼트 준법감시인 이아람</li>
          <li>2. 연락처: 02-555-5191</li>
          <li>3. 이메일: aramlee@brdginv.com</li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 8 조 (신용정보활용체제 변경 및 고지 의무 등)</TermsTit>
        <ul>
          <li>① 회사가 신용정보활용체제를 개정하는 경우, 웹사이트 공지사항을 통해 공지할 것입니다.</li>
          <li>② 본 신용정보활용체제에 별도로 명시되지 않는 사항은 개인정보처리방침의 규정을 준용합니다.</li>
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
  &:not(:first-child) {
    margin-top: 30px;
  }
  p,
  .description {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: -0.5px;
    color: #747474;
  }
  ul {
    margin-top: 10px;
    &.ul-indent {
      margin-top: 0;
      margin-left: 10px;
    }
    li {
      font-size: 16px;
      line-height: 1.75;
      letter-spacing: -0.5px;
      color: #747474;
      padding-left: 20px;
      text-indent: -20px;
      &.online-indent {
        padding-left: 36px;
      }
    }
  }
  @media (max-width: 1024px) {
    &:last-child {
      margin-top: 10px;
    }
    ul {
      margin-top: 2px;
      &.ul-indent {
        margin-left: 0;
      }
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
