import React, { useState } from 'react';
import ReactPageScroller from '../../../lib/Fullpage';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserverRef } from 'rooks';

import Section from './Section';
import Visual from './Visual';
import Footer from '../../../view/shared/Footer';

const SectionList = () => {
  const { t } = useTranslation();
  const visual = t('main.visual', { returnObjects: true });
  const sections = t('main.sections', { returnObjects: true });
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = () => {
    return currentPage;
  };

  const getPagesNumbers = () => {
    const pageNumbers = [];
    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <Container>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        {
          // eslint-disable-next-line react/jsx-key
          visual.map((item) => (
            <Visual item={item} />
          ))
        }

        {
          // eslint-disable-next-line react/jsx-key
          sections.map((item) => (
            <Section item={item} />
          ))
        }
      </ReactPageScroller>

      <Footer className={currentPage === 2 ? 'show' : ''} />
    </Container>
  );
};

const Container = styled.div`
  transition: all 1s;
  margin-top: 0;
  &.isActive {
    margin-top: -180px;
  }
`;

export default SectionList;
