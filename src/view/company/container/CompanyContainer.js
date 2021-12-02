import React from 'react';
import styled from 'styled-components';
import SubLayout from '../../shared/layout/SubLayout';
import AboutUs from '../components/AboutUs';


const CompanyContainer = () => {
    return (
        
    <Container>
        <SubLayout>
            <AboutUs/>
        </SubLayout>
    </Container>
    );
};




const Container = styled.div `

 
`;


export default CompanyContainer;