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
        <p className="description">
          회사는 개인정보를 다음의 목적을 위하여 처리하며, 다음의 목적 이외의 용도로는 개인정보를 사용하지 않습니다.
          이용 목적이 변경되는 경우에는 「개인정보보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
          예정입니다.
        </p>
        <ul className="ul-indent">
          <li>1. 금융거래 관계 관련</li>
          <li className="online-indent">
            가. 금융거래와 관련하여 신용조회회사 또는 신용정보 집중기관에 대한 개인정보의 조회, 금융 거래 관계의 설정
            여부의 판단, 금융거래 관계의 설정·유지·이행·관리, 금융사고 조사, 분 쟁 해결, 민원 처리 및 법령상 의무이행
            등의 목적
          </li>
          <li className="online-indent">
            나. 금융거래라 함은 여신금융회사의 고유업무 (신기술사업금융 등) 및 「여신전문금융업법」 및 동법 시행령 상의
            관련 부수업무를 의미
          </li>
          <li>2. 재화 또는 서비스 제공</li>
          <li className="online-indent">
            가. 물품배송, 서비스 제공, 계약서·청구서 발송, 맞춤서비스 제공, 본인인증, 연령인증 등을 목적
          </li>
          <li>3. 직원채용, 인사관리 및 계열회사 임직원 정보교류 등</li>
          <li className="online-indent">가. 직원채용, 인사관리, 계열회사 임직원 정보교류 등을 목적</li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 2 조 (수집, 처리하는 개인정보의 항목 및 수집 방법)</TermsTit>
        <ul>
          <li>① 회사는 정보주체와의 거래관계를 통해 동의를 받아 개인정보를 수집합니다.</li>
          <li>② 회사가 정보주체의 동의를 받아 수집, 처리하는 개인정보의 항목은 다음과 같습니다.</li>
          <li className="online-indent">
            1. 고유식별정보: 주민등록번호 (또는 외국인 등록번호, 여권번호, 운전면허번호)
          </li>
          <li className="online-indent">2. 개인식별정보: 성명, 집(직장) 주소, 전자우편주소, 연락처, 직업 등</li>
          <li className="online-indent">
            3. 금융거래정보: 투자자정보, 계약조건, 기타 거래관계의 설정·유지·이행·관리를 위한 상담, 투자관리 등을 통해
            생성되는 정보 등 업무수행을 위해 필요한 정보
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 3 조 (개인정보의 보유 및 이용기간)</TermsTit>
        <p className="description">
          회사는 원칙적으로 정보주체와의 금융거래 종료일로부터 5 년까지 정보주체의 개인정보를 보유, 이용합니다. 단,
          금융거래 종료일 이후에는 금융사고 조사, 분쟁해결, 민원처리, 기타 법령상 의무이행을 위해서만 개인정보를 보유,
          이용합니다.
        </p>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 4 조 (개인정보의 파기 절차 및 방법)</TermsTit>
        <ul>
          <li>
            ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 정당한 사유가 없는
            한 그로부터 5일 이내에 해당 개인정보를 파기합니다.
          </li>
          <li>
            ② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구 하고 다른 법령에
            따라 개인정보를 계속 존속하여야 하는 경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를
            달리하여 보존합니다.
          </li>
          <li>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</li>
        </ul>
        <ul className="ul-indent">
          <li> 1. 파기절차</li>
          <li className="online-indent">
            가. 금융거래 등을 위해 제공된 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의 한 정보보호 사유에
            따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.
          </li>
          <li className="online-indent">
            나. 동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
          </li>
          <li> 2. 파기방법</li>
          <li className="online-indent">가. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</li>
          <li className="online-indent">
            나. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 5 조 (개인정보의 제 3 자 제공)</TermsTit>
        <ul>
          <li>
            ① 회사는 정보주체의 동의가 있거나, 관련법령의 규정에 의한 경우를 제외하고는 어떠한 경우에 도 본 처리방침
            상의 개인정보의 수집항목 및 이용목적에서 고지한 범위를 넘어 정보주체의 개인정보를 이용하거나 제 3자에게
            제공하지 않습니다.
          </li>
          <li>
            ② 정보주체의 개인정보를 제공하거나 공유하는 경우에는 사전에 귀하에게 제공하는 개인정보의 종류, 제공 대상,
            제공받는 자의 이용목적 등에 대해 개별적으로 전자우편 또는 서면을 통해 고지한 후 이에 대한 동의를 구합니다.
            다만, 다음 각호의 경우에는 예외로 합니다.
          </li>
          <li className="online-indent">1. 정보주체가 사전에 동의한 경우</li>
          <li className="online-indent">
            2. 「금융실명거래 및 비밀보장에 관한 법률」, 「신용정보의 이용 및 보호에 관한 법률」, 「금융지주회사법」,
            「전기통신기본법」, 「 전기통신사업법」, 「지방세법」, 「소비자보호 법」, 「한국은행법」, 「형사소송법」 등
            법령의 규정에 의거하여 제출을 요구하는 공공기관 및 신용정보원 등 제공 가능한 기관
          </li>
          <li className="online-indent">
            3. 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
          </li>
          <li className="online-indent">
            4. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여
            제공하는 경우
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 6 조 (개인정보 수집·이용·제공에 대한 동의 철회)</TermsTit>
        <ul>
          <li>
            ① 개인정보의 수집·이용·제공에 대해 정보주체는 동의한 내용을 언제든지 철회할 수 있습니다. 동의 철회는
            개인정보관리 담당자 및 책임자에게 서면, 전화, 이메일 등으로 하실 수 있으며, 회사는 지체 없이 개인정보의 삭제
            등 필요한 조치를 합니다.
          </li>
          <li>
            ② 단, 정보주체의 개인정보 수집, 이용은 회사와의 계약체결 및 거래관계를 위해 필수적인 부분 이므로, 개인정보
            수집, 이용 동의를 철회한 경우 금융거래관계의 설정 및 유지가 불가능함을 알려드립니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 7 조 (정보주체 및 법정대리인의 권리와 그 행사 방법)</TermsTit>
        <ul>
          <li>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니 다.</li>
          <li className="online-indent">1. 개인정보 열람 요구</li>
          <li className="online-indent">2. 오류 등이 있을 경우 정정요구</li>
          <li className="online-indent">3. 삭제요구</li>
          <li className="online-indent">4. 처리정지 요구</li>
          <li>
            ② 상기 1 항에 따른 권리행사(개인정보 열람, 정정·삭제, 처리정지, 동의 철회 등)는 「개인정보보 호법 시행규칙」
            별지 제 8 호 서식에 따라 회사에게 서면, 전자우편 등을 통해 요청하실 수 있으며, 회사는 본인 확인 절차를 거쳐
            지체 없이 조치하겠습니다.
          </li>
          <li>
            ③ 제 1 항에 따른 권리행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 할 수 있습니다. 이
            경우 「개인정보보호법 시행규칙」 별지 제 11 호 서식에 따른 위임장을 제 출하셔야 합니다.
          </li>
          <li>
            ④ 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요 구를 한 자가
            본인이거나 정당한 대리인인지를 확인할 수 있습니다.
          </li>
          <li>
            ⑤ 개인정보 열람 및 처리정지 요구는 「개인정보보호법」 제 35 조 제 4 항, 제 37 조 제 2 항에 의하여 정보주체의
            권리가 제한 될 수 있습니다.
          </li>
          <li>
            ⑥ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할
            때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
          </li>
          <li>
            ⑦ 단, 회사와 거래관계가 종료되지 않은 정보주체의 개인정보 삭제 및 처리정지 요구가 있는 경 우, 회사는
            정보주체와의 거래관계를 종료할 수 있으며, 이로 인한 불이익이 발생할 수 있음을 알려드립니다. 또한 정보주체의
            개인정보가 다른 법령에서 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 8 조 (개인정보의 안전성 확보조치에 관한 사항)</TermsTit>
        <p>
          회사는 정보주체들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성
          확보를 위하여 다음과 같은 기술적·관리적 대책을 강구하고 있습니다.
        </p>
        <ul className="ul-indent">
          <li>
            1. &nbsp;내부관리계획의 수립 및 시행: 회사의 내부관리계획 수립 및 시행은 개인정보보호위원회의 안
            정성확보조치기준을 준수하여 시행합니다.
          </li>
          <li>
            2. &nbsp;개인정보 취급 담당자의 최소화 및 교육: 개인정보를 취급하는 담당자를 지정하고 최소화하며 담당자에
            대한 수시 교육을 통해 개인정보를 안전하게 관리하고 있습니다.
          </li>
          <li>
            3. &nbsp;개인정보에 대한 접근 제한: 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부 여, 변경,
            말소를 통하여 개인정보에 대한 접근통제에 필요한 조치를 하고 있으며 침입차단시 스템을 이용하여 외부로부터의
            무단 접근을 통제하고 있습니다.
          </li>
          <li>
            4. &nbsp;접속기록의 보관 및 위변조 방지: 개인정보처리시스템에 접속한 기록(웹 로그,요약정보 등)을 최소 6 개월
            이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안 기능을 사용하고 있습니다.
          </li>
          <li>
            5. &nbsp;개인정보의 암호화: 정보주체의 중요 개인정보는 암호화 되어 저장 및 관리되고 있습니다. 또 한 중요한
            데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있 습니다.
          </li>
          <li>
            6. &nbsp;해킹 등에 대비한 기술적 대책: 회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보 가
            유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고
            있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며,
            암호화 통신 등을 통하여 네트워크상에서 개인 정보를 안전하게 전송할 수 있도록 하고 있습니다.
          </li>
          <li>
            7. &nbsp;개인정보의 안전한 보관을 위한 물리적 조치: 개인정보를 보관하고 있는 개인정보시스템의 물 리적 보관
            장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다. 또한 개인 정보가 기록된 문서의 안전한
            보관을 위하여 잠금 장치의 설치 등 물리적 조치를 취하고 있습 니다.
          </li>
          <li>
            8. &nbsp;개인정보보호 전담조직의 운영: 사내 개인정보보호 전담조직 등을 통해 개인정보보호조치의 이 행사항 및
            담당자의 준수여부를 확인하여 문제 발견 시 즉시 시정 조치하도록 하고 있습니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 9 조 (개인정보 자동수집 장치의 설치 등에 관한 사항)</TermsTit>
        <ul>
          <li>
            회사는 정보주체의 개인정보 등을 거래관계를 통해 수집할 뿐, 홈페이지 등 온라인 매체를 통해 수집하지 않습니다.
          </li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 10 조 (개인정보 보호책임자에 관한 사항)</TermsTit>
        <ul>
          <li>
            ① 회사는 개인정보보호법 제31조 제1항에 따라 개인정보보호책임자를 지정하여 운영하고 있으 며, 회사의
            인력상황에 따라 개인정보보호책임자가 신용정보관리⦁보호인을 겸하고 있습니다.
          </li>
          <li>② 회사의 개인정보보호책임자의 성명 및 연락처는 다음과 같습니다.</li>
          <li className="online-indent">1. 개인정보 보호책임자: 준법감시인 이아람</li>
          <li className="online-indent">2. 연락처: 02-555-5191</li>
          <li className="online-indent">3. 이메일: aramlee@brdginv.com</li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 11 조 (권익침해에 대한 구제방법)</TermsTit>
        <p>정보주체는 개인정보침해로 인한 신고나 상담이 필요한 경우 당사 또는 다음의 기관에 문의하시기 바랍니다.</p>
        <ul className="ul-indent">
          <li>1. 개인정보 침해신고센터 (한국인터넷진흥원 운영)</li>
          <li className="online-indent"> 가. 소관업무: 개인정보 침해사실 신고, 상담 신청</li>
          <li className="online-indent"> 나. 홈페이지: privacy.kisa.or.kr</li>
          <li className="online-indent"> 다. 전화: (국번 없이) 118</li>
          <li className="online-indent">
            라. 주소: (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3 층 개인정보침해신고센터
          </li>
          <li>2. 개인정보 분쟁조정위원회</li>
          <li className="online-indent"> 가. 소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
          <li className="online-indent"> 나. 홈페이지: www.kopico.go.kr</li>
          <li className="online-indent"> 다. 전화: (국번 없이) 1833-6972</li>
          <li className="online-indent"> 라. 주소: (03171)서울특별시 종로구 세종대로 209 정부서울청사 4 층</li>
          <li>3. 대검찰청 사이버범죄수사단: 02-3480-3573 (www.spo.go.kr)</li>
          <li>4. 경찰청 사이버안전국: 182 (http://cyberbureau.police.go.kr)</li>
          <li>5. 경찰청 사이버테러대응센터 (www.ctrc.go.kr /02-392-0330)</li>
        </ul>
      </TermsListWrap>

      <TermsListWrap>
        <TermsTit>제 12 조 (개인정보 처리방침 변경 및 고지 의무 등)</TermsTit>
        <p>
          회사가 개인정보처리방침을 변경하는 경우에는 변경 및 시행의 시기, 변경된 내용을 회사의 인터넷 홈페이지에
          지속적으로 공지하고 변경된 내용은 변경전⦁후를 비교하여 정보주체가 쉽게 확인할 수 있도록 하겠습니다.
        </p>
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
    .description {
      font-size: 14px;
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

export default PrivacyTerms;
