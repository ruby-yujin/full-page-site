import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
  // const history = useHistory();
  const location = useLocation();
  const pageTitle = String(location.pathname);
  // const params = useParams();
  // console.log('이거 pageTitle', pageTitle);

  return (
    <Container>
      <li className={pageTitle === '/notice/news' ? 'isActive' : ''}>
        <Link to="/notice/news">News</Link>
      </li>
      <li className={pageTitle === '/notice/ir' ? 'isActive' : ''}>
        <Link to="/notice/ir">IR</Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  li {
    flex: 1;
    border-bottom: 2px solid #bbb;
    a {
      font-size: 26px;
      font-weight: bold;
      display: block;
      color: #bbb;
      text-align: center;
      padding: 28px 0;
      text-transform: uppercase;
    }
    &.isActive {
      a {
        color: #000;
        box-shadow: 0 2px 0 0 #111;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    li {
      a {
        font-size: 16px;
        padding: 13px 0;
      }
    }
  }
`;

export default Tab;
