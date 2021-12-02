import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Route, Routes} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import { GlobalStyle } from './style/GlobalStyle.Styled';
import Main from './pages/Main';
import Company from './pages/Company';
import Team from './pages/Team';
import Investment from './pages/Investment';
import Notice from './pages/Notice';

import NoticeDetail from './pages/NoticeDetail';
import Ir from './pages/Ir';

const App = () => {
  useEffect(() => {
    AOS.init();
  })

  return(
    <Container>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route exact path="/company" element={<Company/>} />
      <Route exact path="/team" element={<Team/>} />
      <Route exact path="/investment" element={<Investment/>} />
      <Route exact path="/notice" element={<Notice/>} />
      <Route exact path="/notice/:id" element={<NoticeDetail/>} />
      <Route exact path="/ir" element={<Ir/>} />
    </Routes>
  </Container>
  )

};

const Container = styled.div `


`;

export default App;
