import React from 'react';
import styled from 'styled-components';
import IrItem from './IrItem';

const IrItemGrid = () => {
  const irContentsItem = [
    {
      date: '2021',
      title: '브릿지인베스트먼트 \n기관 대상 공시자료',
      period: '(2021.11.11 ~ 2021.11.11) ',
      src: 'zzzzzzz',
    },
    {
      date: '2021',
      title: '브릿지인베스트먼트 \n기관 대상 공시자료',
      period: '(2021.11.11 ~ 2021.11.11)',
      src: 'zzzzzzz',
    },
    {
      date: '2021',
      title: '브릿지인베스트먼트 \n기관 대상 공시자료',
      period: '(2021.11.11 ~ 2021.11.11)',
      src: 'zzzzzzz',
    },
  ];
  return (
    <Container>
      <Row>
        {irContentsItem.map((item) => (
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
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default IrItemGrid;
