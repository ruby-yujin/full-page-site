import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { GlobalStyle } from './style/GlobalStyle.Styled';
import ScrollToTop from './lib/ScrollTop';
import Main from './pages/Main';
import Company from './pages/Company';
import Team from './pages/Team';
import Investment from './pages/Investment';
import Notice from './pages/Notice';

import NoticeDetail from './pages/NoticeDetail';
import Ir from './pages/Ir';
import Privacy from './pages/Privacy';
import Credit from './pages/Credit';

const App = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container>
      <ScrollToTop />
      <GlobalStyle />
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/investment" element={<Investment />} />
        <Route exact path="/notice/news" element={<Notice />} />
        <Route exact path="/notice/news/:id" element={<NoticeDetail />} />
        <Route exact path="/notice/ir" element={<Ir />} />
        <Route exact path="/terms/privacy" element={<Privacy />} />
        <Route exact path="/terms/credit" element={<Credit />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div``;

export default App;
