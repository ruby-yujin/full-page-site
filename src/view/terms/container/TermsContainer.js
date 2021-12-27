import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import SubTermsLayout from '../../shared/layout/SubTermsLayout';
import PrivacyTerms from '../components/PrivacyTerms';
import CreditTerms from '../components/CreditTerms';

const TermsContainer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const privacy = pathname === '/terms/privacy';

  return (
    <Container>
      <SubTermsLayout>{privacy ? <PrivacyTerms /> : <CreditTerms />}</SubTermsLayout>
    </Container>
  );
};

const Container = styled.div``;

export default TermsContainer;
