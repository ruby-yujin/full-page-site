import React, { useState } from 'react';
import ReactPageScroller from '../../../lib/Fullpage';
import styled from 'styled-components';

import Section from './Section';
import Visual from './Visual';
import { useTranslation } from 'react-i18next';

const SectionList = () => {
  const { t } = useTranslation();
  const visual = t('main.visual', { returnObjects: true });
  const sections = t('main.sections', { returnObjects: true });
  // console.log('sections',sections)

  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
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
    </Container>
  );
};

const Container = styled.div``;

export default SectionList;
