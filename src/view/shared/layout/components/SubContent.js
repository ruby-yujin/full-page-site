import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const SubContent = ({ children }) => {
  const { t } = useTranslation();
  const params = useParams();
  const id = Number(params.id);
  const location = useLocation();
  const pageTitle = String(location.pathname);
  const onlyText = pageTitle.split('/')[1];
  const noticeLocation = pageTitle.split('/')[2];
  const details = t('noticeDetail.text', { returnObjects: true });

  return (
    <Container>
      <SubContentWrap>
        <Location>
          <LocationLink to="/">
            <i className="icon-home"></i> HOME
          </LocationLink>
          <i className="icon-path-4"></i> {onlyText}
          {noticeLocation ? (
            <>
              <i className="icon-path-4"></i> {noticeLocation}
            </>
          ) : (
            <></>
          )}
          {details?.[id] ? (
            <>
              <i className="icon-path-4"></i>
              <LocationLink to={`/notice/news/${id}`} className="newsTitle">
                {details?.[id]?.data?.title}
              </LocationLink>
            </>
          ) : (
            <></>
          )}
        </Location>
        {children}
      </SubContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const SubContentWrap = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  position: relative;
  top: -200px;
  background: #fff;
  padding: 70px 200px 0;
  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    padding: 70px 45px 0;
  }
  @media (max-width: 1024px) {
    position: initial;
    min-height: auto;
    top: initial;
    padding: 30px 20px 80px;
  }
`;

const Location = styled.div`
  font-size: 15px;
  color: #333;
  letter-spacing: -0.19px;
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  text-transform: uppercase;
  i.icon-home {
    margin-right: 7px;
  }
  i.icon-path-4 {
    text-align: center;
    font-size: 10px;
    color: #747474;
    margin: 0 5px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin-bottom: 30px;
    i {
      width: 13px;
    }
  }
`;

const LocationLink = styled(Link)`
  color: #333;
  &:hover {
    color: #333;
  }
  @media screen and (max-width: 1024px) {
    &.newsTitle {
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default SubContent;
