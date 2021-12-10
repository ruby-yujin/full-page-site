import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
          <Text>{details?.[id]?.data?.content}</Text>
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
