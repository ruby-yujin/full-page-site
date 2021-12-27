import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FiChevronRight } from 'react-icons/fi';

const NoticeContents = () => {
  const { t } = useTranslation();
  const titles = t('noticeDetail.text', { returnObjects: true });

  return (
    <Container>
      <NoticeList>
        {titles.map((item) => {
          return (
            <Link to={`${item.id}`} key={item.id}>
              <p>{item.data.title}</p>
              <FiChevronRight />
            </Link>
          );
        })}
      </NoticeList>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 120px;
  min-height: 130px;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const NoticeList = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 99px;
    border-bottom: #ddd;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    border-bottom: 1px solid #e0e0e0;
    > svg {
      transform: scale(2);
      color: #bbbbbb;
    }
    &:hover {
      > svg {
        color: #ef8226;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    a {
      font-size: 16px;
      height: 65px;
      p {
        width: calc(100% - 30px);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      > svg {
        transform: scale(1.2);
      }
    }
  }
`;

export default NoticeContents;
