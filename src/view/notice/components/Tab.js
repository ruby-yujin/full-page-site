import React from 'react';
import styled from 'styled-components';
import { Link, useParams, useLocation, useMatch } from 'react-router-dom';

const Tab = () => {
  // const history = useHistory();
  const location = useLocation();
  const pageTitle = String(location.pathname);
  const pagePath = pageTitle.split('/')[1];
  // const params = useParams();
  // console.log('이거 path야',pagePath);

  return (
    <Container>
      <li className={pagePath === 'notice' ? 'is-Active' : ''}>
        <Link to="/notice">NOTICE</Link>
      </li>
      <li className={pagePath === 'ir' ? 'is-Active' : ''}>
        <Link to="/ir">IR</Link>
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
    &.is-Active {
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
