import React from 'react';
import styled from 'styled-components';
import IrItem from './IrItem';
import { useTranslation } from 'react-i18next';

const IrItemGrid = () => {
  const { t } = useTranslation();
  const irDownload = t('ir.downfile', { returnObjects: true });

  return (
    <Container>
      <Row>
        {irDownload.map((item) => (
          <Col key={item.title}>
            <IrItem item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 120px;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  @media screen and (max-width: 1024px) {
    margin: 15px 0 0;
  }
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export default IrItemGrid;
