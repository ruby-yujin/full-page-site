import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SubContent = ({ children }) => {
  const { t } = useTranslation();
  const params = useParams();
  const id = Number(params.id);
  const location = useLocation();
  const pageTitle = String(location.pathname);
  const onlyText = pageTitle.split('/')[1];
  const details = t('noticeDetail.text', { returnObjects: true });

  // if(details?.[id]?.data?.title) {
  //   console.log(`> ${details?.[id]?.data?.title}`)
  // }

  return (
    <Container>
      <SubContentWrap>
        <Location>
          <i className="icon-home"></i> HOME <i className="icon-path-4"></i> {onlyText}
          {details?.[id] ? (
            <>
              {' '}
              <i className="icon-path-4"></i> {details?.[id]?.data?.title}
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
  min-height: 900px;
  position: relative;
  top: -200px;
  background: #fff;
  padding: 70px 200px;
  @media screen and (max-width: 1024px) {
    position: initial;
    min-height: auto;
    top: initial;
    padding: 30px 20px;
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

export default SubContent;