import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const NoticeDetailCotents = () => {
  const { t } = useTranslation();
  const details = t('noticeDetail.text', { returnObjects: true });

  const params = useParams();
  const id = Number(params.id);
  // console.log(details?.[id]?.data?.title)
  // console.log(details?.[Number(id) + 1]?.data?.title)

  return (
    <Container>
      <Title>{details?.[id]?.data?.title}</Title>

      <DetailWrap>
        <DetailTop>
          <span>{details?.[id]?.data?.date}</span>
        </DetailTop>

        <DetailCenter>
          <Text>
            {/* {details?.[id]?.data?.content} */}
            {/* <NewscontentStyle>{parse(`${details?.[id]?.data?.content}`)}</NewscontentStyle> */}
            <NewscontentStyle>
              <strong>1. 금리인하요구권이란?</strong> <br />
              <br />
              <p>
                여신전문금융업법 제50조의13 제1항에 따라 신용공여 계약을 체결한 자는 재산 증가나 신용등급 상승 등
                신용상태 개선이 나타났다고 인정되는 경우, 금리인하를 요구할 수 있습니다.{' '}
                <strong class="underline">
                  다만, 신용상태와 무관한 유가증권 매매계약은 해당사항이 없음을 안내드립니다.
                </strong>
              </p>
              <br />
              <strong>2. 금리인하요구권 행사요건</strong> <br />
              <br />
              <ul class="indent-text-list">
                <li>
                  가. 차주(기업) 및 대출 종류에 관계없이 금리인하요구권 행사가 가능하나 차주의 신용상태와 관계없이
                  금리가 결정되는 대출상품은 금리인하요구 대상에서 제외됩니다.
                </li>
                <li>
                  나. 행사요건을 충족한 경우라 할지라도 당사 내부 세부 심사/운영기준에 따른 평가 결과에 따라 금리인하가
                  불가할 수 있으며 차주께서는 행사요건을 입증할 수 있는 증빙자료를 제출하셔야 합니다{' '}
                </li>
                <li>
                  다. 차주는 대출 취급일에서 6개월이 경과한 날로부터 연간 2회에 한하여 금리인하를 요구할 수 있습니다.
                </li>
                <li>
                  라. 세부행사요건(기업여신)
                  <ul class="indent-text-list">
                    <li>① 차주의 재무상태가 개선된 경우</li>
                    <li>② 차주의 회사채 등급이 상승한 경우 </li>
                    <li>③ 차주가 사업에 핵심 경쟁력으로 반영할 수 있는 특허 취득</li>
                    <li>④ 차주가 추가담보를 제공한 경우</li>
                    <li>⑤ 기타 내부운영기준을 통해 별도로 정한 경우</li>
                  </ul>
                </li>
                <li>
                  마. 대출 차주 본인만 신청 가능하며 신청인 본인에게만 심사결과가 통보(10영업일 이내)됩니다.
                  <br /> * 통보방법 : 유선, 우편, 휴대폰 문자메시지 등 고객 택 1
                </li>
              </ul>
              <br /> <br />
              <strong>3. 신청방법 (유선 및 서면 등)</strong> <br />
              <p>- 유선 / FAX : (대표번호) T. 02-555-5191 / F. 02-6081-8183</p>
              <p>- 서면 : (06141) 서울특별시 강남구 테헤란로 207, 13층 ㈜브릿지인베스트먼트</p>
            </NewscontentStyle>
          </Text>
        </DetailCenter>
        <DetailBottom>
          {details?.[id - 1] ? (
            <PrevBtn to={`/notice/news/${id - 1}`}>
              <i className="icon-prev"></i>
              <div className="hidden-mobile">
                <span>이전글</span>
                <strong>{details?.[id - 1]?.data?.title}</strong>
              </div>
            </PrevBtn>
          ) : (
            <PrevBtnNoLink>
              <i className="icon-prev"></i>
              <div className="hidden-mobile">
                <span>이전 글</span>
                <strong>이전 글이 없습니다.</strong>
              </div>
            </PrevBtnNoLink>
          )}

          <ListBtn to="/notice/news">
            <i className="icon-menu"></i>
          </ListBtn>
          {details?.[id + 1] ? (
            <NextBtn to={`/notice/news/${id + 1}`}>
              <div className="hidden-mobile">
                <span>다음 글</span>
                <strong>{details?.[id + 1]?.data?.title}</strong>
              </div>
              <i className="icon-next"></i>
            </NextBtn>
          ) : (
            <NextBtnNoLink>
              <div className="hidden-mobile">
                <span>다음 글</span>
                <strong>다음 글이 없습니다.</strong>
              </div>
              <i className="icon-next"></i>
            </NextBtnNoLink>
          )}
        </DetailBottom>
      </DetailWrap>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.41;
  color: #000;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }
`;

const DetailWrap = styled.div`
  border-top: 1px solid #1a1a1a;
`;

const DetailTop = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    font-size: 15px;
    font-weight: 500;
    color: #bbb;
  }
  @media screen and (max-width: 1024px) {
    height: 46px;
    span {
      font-size: 12px;
    }
  }
`;

const DetailCenter = styled.div`
  border-top: solid 1px #e0e0e0;
  border-bottom: solid 1px #e0e0e0;
  padding: 60px 0 120px;
  min-height: 500px;
  @media screen and (max-width: 1024px) {
    padding: 30px 0 90px;
  }
`;

const Text = styled.div`
  width: 1100px;
  margin: 0 auto;
  color: #555;
  font-size: 18px;
  line-height: 1.78;
  letter-spacing: -0.56px;
  @media screen and (max-width: 1600px) {
    width: 100%;
  }
`;

const NewscontentStyle = styled.div`
  strong {
    font-weight: bold;
  }
  .underline {
    display: inline;
    text-decoration: underline;
  }
  .indent-text-list {
    li {
      text-indent: -25px;
      padding-left: 25px;
    }
  }
`;

const DetailBottom = styled.div`
  height: 150px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const PrevBtn = styled(Link)`
  width: 370px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  i {
    display: inline-block;
    font-size: 46px;
    margin-right: 32px;
    color: #8b8b8b;
  }
  span {
    line-height: 2;
    display: block;
    font-size: 15px;
    color: #bbb;
  }
  strong {
    font-weight: 500;
    display: block;
    color: #555;
  }
  @media screen and (max-width: 1024px) {
    width: 50px;
  }
`;

const NextBtn = styled(Link)`
  width: 370px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  i {
    display: inline-block;
    font-size: 46px;
    margin-left: 32px;
    color: #8b8b8b;
  }
  span {
    line-height: 2;
    display: block;
    font-size: 15px;
    color: #bbb;
  }
  strong {
    font-weight: 500;
    display: block;
    color: #555;
  }
  @media screen and (max-width: 1024px) {
    width: 50px;
  }
`;

const PrevBtnNoLink = styled.div`
  width: 370px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  i {
    display: inline-block;
    font-size: 46px;
    margin-right: 32px;
    color: #e0e0e0;
  }
  span {
    line-height: 2;
    display: block;
    font-size: 15px;
    color: #bbb;
  }
  strong {
    font-weight: 500;
    display: block;
    color: #555;
  }
  @media screen and (max-width: 1024px) {
    width: 50px;
  }
`;

const NextBtnNoLink = styled.div`
  width: 370px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  i {
    display: inline-block;
    font-size: 46px;
    margin-left: 32px;
    color: #e0e0e0;
  }
  span {
    line-height: 2;
    display: block;
    font-size: 15px;
    color: #bbb;
  }
  strong {
    font-weight: 500;
    display: block;
    color: #555;
  }
  @media screen and (max-width: 1024px) {
    width: 50px;
  }
`;

const ListBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #333;
  i {
    display: block;
    font-size: 18px;
    color: #fff;
  }
  &:hover {
    background-color: #ef8226;
  }
`;
export default NoticeDetailCotents;
