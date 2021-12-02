import React from 'react';
import styled from 'styled-components';
import SubLayout from '../../shared/layout/SubLayout';
import OurInvestment from '../components/OurInvestment';


const InvestmentContainer = () => {
    return (
    <Container>
        <SubLayout>
        <OurInvestment/>
        </SubLayout>
    </Container>
    );
};




const Container = styled.div `

 
`;


export default InvestmentContainer;